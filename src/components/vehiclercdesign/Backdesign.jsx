/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import QRCode from "react-qr-code";

const Backdesign = ({ vehicle, number }) => {
  if (!vehicle) return null;

  // Get the Vite environment variable for the QR Code URL
  const baseURL = import.meta.env.VITE_HOST_URL || "http://localhost:5173";

  // Generate the QR Code URL with the vehicle registration number
  const qrCodeURL = `${baseURL}?RC_NUMBER=${number || "N/A"}`;

  return (
    <motion.div
      className="bg-gray-50 rounded-lg shadow-lg mt-6 text-gray-900"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-2 border border-gray-300 rounded-md bg-white">
        {/* Header Section */}
        <div className="flex w-full justify-between p-2 bg-gray-200 mb-2 items-center">
          <div className="flex">
            <span className="bg-sky-300 flex justify-center w-[30px] h-[30px] items-center rounded-2xl font-semibold">
              NT
            </span>
            <span className="bg-orange-400 flex justify-center w-[30px] h-[30px] items-center rounded-2xl font-semibold ml-1">
              HR
            </span>
          </div>

          {/* Vehicle Category */}
          <div className="flex text-black">
            <h3 className="text-[14px] md:text-[20px]">
              <b>Vehicle Class: </b> {vehicle.vehicle_data.category_description}
            </h3>
          </div>
        </div>

        {/* Main Details Section */}
        <div className="flex justify-between">
          {/* Left Column - QR Code & Basic Info */}
          <div className="flex flex-col justify-between w-[20%] items-center">
            <h3 className="text-[10px] md:text-[14px]">
              <b>Regn No:</b>
            </h3>
            <h6 className="text-[10px] md:text-[14px]">
              {vehicle.registration_number || "N/A"}
            </h6>

            {/* QR Code */}
            <QRCode value={qrCodeURL} size={60} />

            <h3 className="text-[10px] md:text-[14px]">
              <b>Month-Year Mfg:</b>
            </h3>
            <h6 className="text-[10px] md:text-[14px]">
              {vehicle.vehicle_data.manufactured_date}
            </h6>
            <h3 className="text-[10px] md:text-[14px]">
              <b>No Of Cylinders:</b> {vehicle.vehicle_data.number_of_cylinders}
            </h3>
          </div>

          {/* Middle Column - Vehicle Details */}
          <div className="flex flex-col w-[70%]">
            <h3 className="text-[13px]">
              <b>Maker</b>
            </h3>
            <p className="text-[12px]">
              {vehicle.vehicle_data.maker_description}
            </p>

            <h3 className="text-[13px]">
              <b>Model</b>
            </h3>
            <p className="text-[12px]">{vehicle.vehicle_data.maker_model}</p>

            {/* Color & Body Type */}
            <div className="flex justify-between">
              <div>
                <h3 className="text-[13px]">
                  <b>Color</b>
                </h3>
                <p className="text-[12px]">{vehicle.vehicle_data.color}</p>
              </div>
              <div className="pl-16">
                <h3 className="text-[13px]">
                  <b>Body Type:</b>
                </h3>
                <p className="text-[12px]">{vehicle.vehicle_data.body_type}</p>
              </div>
            </div>

            {/* Seating Capacity & Weight */}
            <h3 className="text-[13px]">
              <b>Seating Capacity:</b>
            </h3>
            <p className="text-[12px]">
              {vehicle.vehicle_data.seating_capacity}
            </p>
            <h3 className="text-[13px]">
              <b>Unladen Weight (Kg):</b>
            </h3>
            <p className="text-[12px]">{vehicle.vehicle_data.unladen_weight}</p>

            {/* Cubic Capacity & Wheel Base */}
            <div className="flex justify-between">
              <div>
                <h3 className="text-[13px]">
                  <b>Cubic Capacity (CC):</b>
                </h3>
                <p className="text-[12px]">
                  {vehicle.vehicle_data.cubic_capacity}
                </p>
              </div>
              <div className="pl-16">
                <h3 className="text-[13px]">
                  <b>Wheel Base (mm):</b>
                </h3>
                <p className="text-[12px]">{vehicle.vehicle_data.wheelbase}</p>
              </div>
            </div>

            {/* Financier */}
            <h3 className="text-[13px]">
              <b>Financier:</b>
            </h3>
            <p className="text-[12px]">{vehicle.financier || "N/A"}</p>
          </div>

          {/* Right Column - Vertical Text */}
          <div className="w-[5%] flex items-center">
            <span
              className="text-[16px] whitespace-nowrap"
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
              }}
            >
              From 23A
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Backdesign;
