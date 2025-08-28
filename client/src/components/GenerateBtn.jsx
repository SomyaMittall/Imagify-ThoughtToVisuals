import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const GenerateBtn = () => {

    const {user, setShowLogin}= useContext(AppContext)
    const navigate= useNavigate()

    const onClickHandler=()=>{
        if(user){
            navigate("/result")
        }else{
            setShowLogin(true)
        }
    }
    
  return (
    <div className="pb-20 text-center">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-white drop-shadow-md py-6 md:py-16"
      >
        See the Magic. Try It Now!
      </motion.h1>

      {/* Button */}
      <motion.button
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClickHandler}
        className="inline-flex items-center gap-2 px-10 sm:px-12 py-3 rounded-full 
          bg-gradient-to-r from-purple-600 to-blue-500 hover:from-blue-500 hover:to-purple-600 
          text-white font-medium shadow-md shadow-blue-900/40 
          transition-transform duration-300"
      >
        Generate Images
        <img src={assets.star_group} alt="" className="h-6" />
      </motion.button>
    </div>
  );
};

export default GenerateBtn;
