import { useState, useRef, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
// eslint-disable-next-line no-unused-vars
import VehicleDetails from "../components/VehicleDetails";
import Loader from "../components/Loader";
import { motion } from "framer-motion";
import Frontdesign from "../components/vehiclercdesign/Frontdesign";
import Backdesign from "../components/vehiclercdesign/Backdesign";
import jsPDF from "jspdf";
import html2canvas from "html2canvas-pro";
import { fetchVehicleData } from "../api";
import homeImg from './../assets/main.jpeg'
import './Home.css';

// 📌 Static Vehicle Data (Use when API is not working)
const STATIC_VEHICLE_DATA = {
  document_type: "RC",
  owner_data: {
    serial: "1",
    name: "RESHMA",
    father_name: "TEJ PAL",
    present_address: "678 RAHUL COLONY NH-3 FARIDABAD, Haryana",
    permanent_address: "678 RAHUL COLONY NH-3 FARIDABAD, Haryana",
  },
  issue_date: "2011-11-22",
  expiry_date: "2026-10-04",
  registered_at: "FARIDABAD",
  status: "ACTIVE",
  norms_type: "BHARAT STAGE III",
  tax_end_date: "2026-10-04",
  financier: "FULLERTON INDIA CREDIT CO.LTD",
  financed: true,
  insurance_data: {
    expiry_date: "2012-10-04",
  },
  vehicle_data: {
    manufactured_date: "2011-10",
    category: "2WN",
    category_description: "M-Cycle/Scooter",
    chassis_number: "ME4JC448KB8530580",
    engine_number: "JC44E1641582",
    maker_description: "HONDA MOTORCYCLE AND SCOOTER INDIA (P) LTD",
    maker_model: "ACTIVA",
    body_type: "SOLO",
    fuel_type: "PETROL",
    color: "PS WHITE",
    cubic_capacity: "109",
    gross_weight: "0",
    number_of_cylinders: "1",
    seating_capacity: "2",
    sleeper_capacity: "0",
    wheelbase: "0",
    unladen_weight: "112",
  },
};

const Home = () => {
  const [vehicle, setVehicle] = useState(null);
  const [loading, setLoading] = useState(false);
  const [number, setNumber] = useState("");
  const [error, setError] = useState("");
  const [hideFrom23A, setHideFrom23A] = useState(false); 
  const pdfRef = useRef();
  const [searchParams] = useSearchParams(); // Get URL query parameters

  // 📌 Fetch Vehicle Data (Using Static Data)
  const handleSearch = async (carNumber) => {
    if (!carNumber) return;

    setLoading(true);
    setError("");
    setVehicle(null);

    try {
      const vehicleData = await fetchVehicleData(carNumber);

      if (vehicleData) {
        setVehicle(vehicleData);
        setNumber(carNumber);
      } else {
        setError("Vehicle details not found!");
      }
    } catch (error) {
      setError("Error fetching vehicle details!");
      console.error(error);
    }

    setLoading(false);
  };

  // 📌 Fetch Data from Query Params on Load
  useEffect(() => {
    const rcNumber = searchParams.get("RC_NUMBER");
    if (rcNumber) {
      handleSearch(rcNumber);
    }
  }, [searchParams]);

  // 📌 Generate PDF
  // const generatePDF = async () => {
  //   if (!pdfRef.current) return;

  //   const loadImages = async () => {
  //     const images = pdfRef.current.querySelectorAll("img");
  //     const promises = [];

  //     images.forEach((img) => {
  //       if (!img.complete) {
  //         promises.push(new Promise((resolve) => (img.onload = img.onerror = resolve)));
  //       }
  //     });

  //     return Promise.all(promises);
  //   };

  //   await loadImages();

  //   setTimeout(async () => {
  //     try {
  //       const canvas = await html2canvas(pdfRef.current, {
  //         scale: 3,
  //         useCORS: true,
  //         backgroundColor: "#ffffff",
  //         imageTimeout: 3000,
  //       });

  //       const imgData = canvas.toDataURL("image/png");
  //       const pdf = new jsPDF("p", "mm", "a4");
  //       const imgWidth = 190;
  //       const imgHeight = (canvas.height * imgWidth) / canvas.width;

  //       pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
  //       pdf.save(`Vehicle_RC_${number || "Unknown"}.pdf`);
  //     } catch (error) {
  //       console.error("Error generating PDF:", error);
  //     }
  //   }, 4000);
  // };
  // const generatePDF = async () => {
  //   if (!pdfRef.current) return;

  //   const loadImages = async () => {
  //     const images = pdfRef.current.querySelectorAll("img");
  //     const promises = [];

  //     images.forEach((img) => {
  //       if (!img.complete) {
  //         promises.push(new Promise((resolve) => (img.onload = img.onerror = resolve)));
  //       }
  //     });

  //     return Promise.all(promises);
  //   };

  //   await loadImages();

  //   setTimeout(async () => {
  //     try {
  //       const desktopWidth = 1024; // Force desktop width
  //       const a4Width = 210; // A4 width in mm
  //       const a4Height = 297; // A4 height in mm
  //       const scaleFactor = 3; // Ensures high-quality rendering

  //       const canvas = await html2canvas(pdfRef.current, {
  //         scale: scaleFactor,
  //         useCORS: true,
  //         backgroundColor: "#ffffff",
  //         imageTimeout: 3000,
  //         width: desktopWidth, // Forces desktop width
  //         windowWidth: desktopWidth,
  //       });

  //       const imgData = canvas.toDataURL("image/jpeg", 0.8); // Using JPEG for smaller size

  //       const pdf = new jsPDF("p", "mm", "a4");
  //       const imgWidth = a4Width - 20; // Keep margins
  //       const imgHeight = (canvas.height * imgWidth) / canvas.width;

  //       let yPosition = 10;
  //       while (yPosition < imgHeight) {
  //         pdf.addImage(imgData, "JPEG", 10, yPosition * -1, imgWidth, imgHeight);
  //         yPosition += a4Height;

  //         if (yPosition < imgHeight) {
  //           pdf.addPage();
  //         }
  //       }

  //       pdf.save(`Vehicle_RC_${number || "Unknown"}.pdf`);
  //     } catch (error) {
  //       console.error("Error generating PDF:", error);
  //     }
  //   }, 1000);
  // };

  const generatePDF = async () => {
    if (!pdfRef.current) return;
    setHideFrom23A(true);
    const loadImages = async () => {
      const images = pdfRef.current.querySelectorAll("img");
      const promises = [];

      images.forEach((img) => {
        if (!img.complete) {
          promises.push(new Promise((resolve) => (img.onload = img.onerror = resolve)));
        }
      });

      return Promise.all(promises);
    };

    await loadImages();

    setTimeout(async () => {
      try {
        const desktopWidth = 1024; // Force desktop width
        const a4Width = 210; // A4 width in mm
        const a4Height = 297; // A4 height in mm
        const scaleFactor = 3; // Ensures high-quality rendering
        const topPadding = 20; // Add 20mm padding from top

        const canvas = await html2canvas(pdfRef.current, {
          scale: scaleFactor,
          useCORS: true,
          backgroundColor: "#ffffff",
          imageTimeout: 3000,
          width: desktopWidth, // Forces desktop width
          windowWidth: desktopWidth,
        });

        const imgData = canvas.toDataURL("image/jpeg", 0.8); // Using JPEG for smaller size

        const pdf = new jsPDF("p", "mm", "a4");
        const imgWidth = a4Width - 20; // Keep margins
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        let yPosition = topPadding; // Start with top padding

        while (yPosition < imgHeight) {
          pdf.addImage(imgData, "JPEG", 10, yPosition, imgWidth, imgHeight); // Apply top padding
          yPosition += a4Height;

          if (yPosition < imgHeight) {
            pdf.addPage();
            yPosition = topPadding; // Reset for new page
          }
        }

        pdf.save(`Vehicle_RC_${number || "Unknown"}.pdf`);
        setHideFrom23A(false);
      } catch (error) {
        console.error("Error generating PDF:", error);
        setHideFrom23A(false);
      }
    }, 1000);
  };

  return (
    <div
    className="home flex flex-col justify-start items-center w-full min-h-screen bg-gray-100 overflow-auto py-6"
  >
    <img className=" md:hidden block w-full h-[140px]" src={homeImg} alt="" />
    {/* Search Section (Fixed Positioning) */}
    <div className="w-full max-w-5xl bg-white rounded-xl shadow-lg p-6 flex-grow-0 mt-[15%]">
      <motion.h1
        className=" hidden md:block font-bold text-center text-black mb-6 md:text-3xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Get RC Information 🚗
      </motion.h1>
      <motion.p
        className="block md:hidden text-xl font-bold text-center text-black mb-6 md:text-3xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Get RC Information 🚗
      </motion.p>
      
  
      <SearchBar onSearch={handleSearch} defaultNumber={number} />
  
      {loading && <Loader />}
      {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
    </div>
  
    {/* Spacer to prevent UI push-up */}
    <div className="flex-grow"></div>
  
    {/* Vehicle Details (Only Appears After Search) */}
    {vehicle && (
      <div
        ref={pdfRef}
        className="w-full max-w-5xl flex flex-col items-center space-y-4 mt-6 p-4 bg-white flex-grow-0"
      >
        <div className="w-full max-w-3xl">
          <Frontdesign vehicle={vehicle} number={number}/>
        </div>
        <div className="w-full max-w-3xl">
          <Backdesign vehicle={vehicle} number={number} hideFrom23A={hideFrom23A}/>
        </div>
      </div>
    )}
  
    {/* Download Button */}
    {vehicle && (
      <div className="flex justify-center mt-6">
        <button
          onClick={generatePDF}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md"
        >
          Download RC PDF
        </button>
      </div>
    )}
  </div>
  
  
  );
};

export default Home;
