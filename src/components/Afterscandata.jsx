import { useEffect, useState } from "react"
import { fetchVehicleData } from "../api";
import { useLocation } from "react-router-dom";


function Afterscandata() {

    const [vehicle, setVehicle] = useState(null);
    const [loading, setLoading] = useState(false);
    const [number, setNumber] = useState("");
    const [error, setError] = useState("");

    const location = useLocation();

    // Function to extract query params
    const getQueryParam = (param) => {
        const searchParams = new URLSearchParams(location.search);
        return searchParams.get(param);
    };

    useEffect(() => {
        const carNumber = getQueryParam("RC_NUMBER"); // Extract RC_NUMBER from URL
        if (carNumber) {
            setNumber(carNumber); // Set it to state
            data(carNumber); // Fetch data
        }
    }, [location.search]);

    const data = async (carNumber) => {
        setLoading(true);
        try {
            const vehicleData = await fetchVehicleData(carNumber);
            if (vehicleData) {
                setVehicle(vehicleData);
            } else {
                setError("Vehicle details not found!");
            }
        } catch (error) {
            setError("Error fetching vehicle details!");
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className=" w-full bg-white text-black">
            <h1 className="  text-center text-[25px] md:text-5xl"><b>Vehicle RC Details</b></h1>
            {loading && <li>Loading...</li>}
            {error && <li style={{ color: "red" }}>{error}</li>}
            <ul className=" uppercase p-2.5">
                <li className=" text-[14px] md:text-2xl">vehregno: {number || "N/A"}</li>
                <li className=" text-[14px] md:text-2xl">regdate: {vehicle?.issue_date} </li>
                <li className=" text-[14px] md:text-2xl">manufac: {vehicle?.vehicle_data?.maker_description || "N/A"}</li>
                <li className=" text-[14px] md:text-2xl">fuel: {vehicle?.vehicle_data?.fuel_type}</li>
                <li className=" text-[14px] md:text-2xl">vehclass: {vehicle?.vehicle_data?.category_description}</li>
                <li className=" text-[14px] md:text-2xl">bodytype: {vehicle?.vehicle_data?.body_type}</li>
                <li className=" text-[14px] md:text-2xl">seatcap: {vehicle?.vehicle_data?.seating_capacity}</li>
                <li className=" text-[14px] md:text-2xl">manufdate: {vehicle?.vehicle_data?.manufactured_date}</li>
                <li className=" text-[14px] md:text-2xl">chasisno: {vehicle?.vehicle_data?.chassis_number}</li>
                <li className=" text-[14px] md:text-2xl">engineno: {vehicle?.vehicle_data?.engine_number}</li>
                <li className=" text-[14px] md:text-2xl">modelno: {vehicle?.vehicle_data?.maker_model}</li>
                <li className=" text-[14px] md:text-2xl">ownername: {vehicle?.owner_data?.name}</li>
                <li className=" text-[14px] md:text-2xl">s\w\d of: {vehicle?.owner_data?.father_name}</li>
                <li className=" text-[14px] md:text-2xl">adress: {vehicle?.owner_data?.permanent_address}</li>
                <li className=" text-[14px] md:text-2xl">unladenwt: {vehicle?.vehicle_data?.unladen_weight}</li>
                <li className=" text-[14px] md:text-2xl">cubbicap: {vehicle?.vehicle_data?.cubic_capacity}</li>
                <li className=" text-[14px] md:text-2xl">wheelbase: {vehicle?.vehicle_data?.wheelbase}</li>
                <li className=" text-[14px] md:text-2xl">noofcylin: {vehicle?.vehicle_data?.number_of_cylinders}</li>
                <li className=" text-[14px] md:text-2xl">ownerserial: {vehicle?.owner_data?.serial}</li>
                {/* <li className=" text-[14px] md:text-2xl">taxpaidupto: </li> */}
                <li className=" text-[14px] md:text-2xl">regnvalidity: {vehicle?.expiry_date || "N/A"}</li>
                <li className=" text-[14px] md:text-2xl">colour: {vehicle?.vehicle_data?.color}</li>
                <li className=" text-[14px] md:text-2xl">issue auth: {vehicle?.registered_at}</li>

            </ul>
        </div>
    )
}

export default Afterscandata