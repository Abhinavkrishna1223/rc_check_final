

function Afterscandata({vehicle, number}) {

    return (
        <div className=" w-full bg-white text-black">
            <h1 className="  text-center"><b>Vehicle RC Details</b></h1>

            <div className=" uppercase">
                <p className=" text-[14px] md:text-2xl">vehregno: {number || "N/A"}</p>
                <p className=" text-[14px] md:text-2xl">regdate: {vehicle?.rc_data?.issue_data || "N/A"} </p>
                <p className=" text-[14px] md:text-2xl">manufac: {vehicle?.vehicle_data?.maker_description || "N/A"}</p>
                <p className=" text-[14px] md:text-2xl">fuel: {vehicle?.vehicle_data?.fuel_type}</p>
                <p className=" text-[14px] md:text-2xl">vehclass: {vehicle?.vehicle_data?.category_description}</p>
                <p className=" text-[14px] md:text-2xl">bodytype: {vehicle?.vehicle_data?.body_type}</p>
                <p className=" text-[14px] md:text-2xl">seatcap: {vehicle?.vehicle_data?.seating_capacity}</p>
                <p className=" text-[14px] md:text-2xl">manufdate: {vehicle?.vehicle_data?.manufactured_date}</p>
                <p className=" text-[14px] md:text-2xl">chasisno: {vehicle?.vehicle_data?.chassis_number}</p>
                <p className=" text-[14px] md:text-2xl">engineno: {vehicle?.vehicle_data?.engine_number}</p>
                <p className=" text-[14px] md:text-2xl">modelno: {vehicle?.vehicle_data?.maker_model}</p>
                <p className=" text-[14px] md:text-2xl">ownername: {vehicle?.owner_data?.name}</p>
                <p className=" text-[14px] md:text-2xl">s\w\d of: {vehicle?.owner_data?.father_name}</p>
                <p className=" text-[14px] md:text-2xl">adress: {vehicle?.owner_data?.permanent_address}</p>
                <p className=" text-[14px] md:text-2xl">unladenwt: {vehicle?.vehicle_data?.unladen_weight}</p>
                <p className=" text-[14px] md:text-2xl">cubbicap: {vehicle?.vehicle_data?.cubic_capacity}</p>
                <p className=" text-[14px] md:text-2xl">wheelbase: {vehicle?.vehicle_data?.wheelbase}</p>
                <p className=" text-[14px] md:text-2xl">noofcylin: {vehicle?.vehicle_data?.number_of_cylinders}</p>
                <p className=" text-[14px] md:text-2xl">ownerserial: {vehicle?.owner_data?.serial}</p>
                {/* <p className=" text-[14px] md:text-2xl">taxpaidupto: </p> */}
                <p className=" text-[14px] md:text-2xl">regnvalidity: {vehicle?.rc_data?.expiry_date || "N/A"}</p>
                <p className=" text-[14px] md:text-2xl">colour: {vehicle?.vehicle_data?.color}</p>
                <p className=" text-[14px] md:text-2xl">issue auth: {vehicle?.registered_at}</p>

            </div>
        </div>
    )
}

export default Afterscandata