/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import lion from '../../assets/ashokStamb.png';
import chip from '../../assets/chip.jpg';

const Frontdesign = ({ vehicle }) => {
  if (!vehicle) return null;

  return (
    <motion.div
      className="bg-gray-50 rounded-lg shadow-lg mt-6 text-gray-900"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-2 border border-gray-300 rounded-md bg-white">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row w-full justify-center items-center md:justify-between p-2 bg-gray-200 mb-2">
          {/* Government Logo */}
          <img
            src={lion}
            alt="Government Logo"
            className="h-20"
          />

          {/* Title */}
          <div className="flex flex-col text-black">
            <h3 className="text-[14px] md:text-[20px] font-medium">
              Indian Union Vehicle Registration Certificate
            </h3>
            <h5 className="text-[12px] md:text-[16px]">
              Issued by Government of {vehicle?.registered_at}
            </h5>
          </div>

          {/* Badge */}
          <div className="flex">
            <span className="bg-sky-300 flex justify-center w-[30px] h-[30px] items-center rounded-2xl font-semibold">
              NT
            </span>
            <span className="bg-orange-400 flex justify-center w-[30px] h-[30px] items-center rounded-2xl font-semibold ml-1">
              HR
            </span>
          </div>
        </div>

        {/* Details Section */}
        <div className="flex flex-col md:flex-row justify-between">
          {/* Left Column */}
          <div className="flex flex-col justify-left md:justify-between w-full md:w-[20%]">
            <img
              className="hidden md:flex"
              src={chip}
              alt="Chip"
            />

            {/* Fuel and Emission Details */}
            <div>
              <h3 className="text-[13px] md:text-[16px]">
                <b>Fuel</b>
              </h3>
              <h6 className="text-[12px] md:text-[14px]">{vehicle?.vehicle_data?.fuel_type}</h6>
              <h3 className="text-[13px] md:text-[16px]">
                <b>Emission Norms</b>
              </h3>
              <h6 className="text-[12px] md:text-[14px]">{vehicle?.norms_type}</h6>
            </div>
          </div>

          {/* Middle Column */}
          <div className="flex flex-col md:flex-row w-full md:w-[70%]">
            <div>
              <h3 className="text-[13px]">
                <b>Regn No</b>
              </h3>
              <p className="text-[12px]">{vehicle.registration_number || "N/A"}</p>
              <h3 className="text-[13px]">
                <b>Chassis No</b>
              </h3>
              <p className="text-[12px]">{vehicle.vehicle_data.chassis_number}</p>
              <h3 className="text-[13px]">
                <b>Engine/Motor No</b>
              </h3>
              <p className="text-[12px]">{vehicle.vehicle_data.engine_number}</p>
              <h3 className="text-[13px]">
                <b>Owner Name</b>
              </h3>
              <p className="text-[12px]">{vehicle.owner_data.name}</p>
              <h3 className="text-[13px]">
                <b>Father Name</b>
              </h3>
              <p className="text-[12px]">{vehicle.owner_data.father_name}</p>
              <h3 className="text-[13px] mt-1.5">
                <b>Address</b>
              </h3>
              <p className="text-[12px]">{vehicle.owner_data.present_address}</p>
            </div>

            {/* Right Column */}
            <div className="md:ml-6">
              <h3 className="text-[13px]">
                <b>Regn Validity</b>
              </h3>
              <p className="text-[12px]">{vehicle.expiry_date}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Frontdesign;
