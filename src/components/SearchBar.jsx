import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const SearchBar = ({ onSearch, defaultNumber }) => {
  const [carNumber, setCarNumber] = useState(defaultNumber || ""); // Use defaultNumber from props

  useEffect(() => {
    setCarNumber(defaultNumber || ""); // Update input when defaultNumber changes
  }, [defaultNumber]);

  const handleSearch = () => {
    if (carNumber.trim()) {
      onSearch(carNumber);
    }
  };

  return (
    <motion.div
      className="flex flex-col sm:flex-row items-center bg-gray-100 p-4 rounded-lg shadow-md w-full space-y-4 sm:space-y-0 sm:space-x-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.input
        type="text"
        placeholder="Enter Car Number"
        value={carNumber}
        onChange={(e) => setCarNumber(e.target.value)}
        className="px-4 py-3 border border-gray-300 rounded-lg w-full sm:flex-1 text-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        whileFocus={{ scale: 1.05 }}
      />
      <motion.button
        onClick={handleSearch}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md w-full sm:w-auto sm:flex-shrink-0"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        Search
      </motion.button>
    </motion.div>
  );
};

export default SearchBar;
