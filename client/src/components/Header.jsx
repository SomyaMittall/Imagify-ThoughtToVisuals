import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { TypeAnimation } from 'react-type-animation'
import {motion} from "framer-motion"
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const Header = () => {

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
        <motion.div className="relative flex flex-col justify-center items-center text-center my-20 text-white mt-12 overflow-hidden"
        initial={{opacity:0.2, y:100}}
        transition={{duration:1}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true}}
        >

            {/* Gradient Blur Background */}
            <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-blue-600/30 rounded-full blur-[150px] animate-pulse"></div>
            <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-purple-600/30 rounded-full blur-[150px] animate-pulse"></div>

            {/* Tag */}
            <div className="inline-flex items-center gap-2 bg-purple-600 px-6 py-1 rounded-full shadow-lg shadow-blue-900/40 animate-fadeIn z-10">
                <p className="text-sm font-medium">Best text to Image Generator</p>
                <img src={assets.star_icon} alt="" />
            </div>

            {/* Title */}
            <h1 className="text-4xl max-w-[320px] sm:text-7xl sm:max-w-[650px] mx-auto mt-10 font-bold leading-tight z-10">
                Turn Text to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                    Image
                </span>
                , in seconds.
            </h1>

            {/* Typewriter Subtext */}
            <TypeAnimation
                sequence={[
                    "Unleash your creativity with our AI-powered tool.",
                    2000,
                    "Turn your imagination into visuals effortlessly.",
                    2000,
                    "Just type, and watch the magic happen.",
                    2000,
                ]}
                wrapper="p"
                speed={50}
                repeat={Infinity}
                className="text-center max-w-xl mx-auto mt-6 text-gray-400 z-10"
            />

            {/* Button with Aurora Effect */}
            <button onClick={onClickHandler} className="relative sm:text-lg text-white w-auto mt-8 px-12 py-3 flex items-center gap-2 rounded-full shadow-lg shadow-purple-800/50 transition-transform hover:scale-105 overflow-hidden z-10">
                <span className="relative z-10 flex items-center gap-2">
                    Generate Image
                    <img className="h-6" src={assets.star_group} alt="" />
                </span>
                {/* Aurora moving shine */}
                <div className="absolute inset-0 bg-blue-500 opacity-70"></div>
            </button>

            {/* Gallery */}
            <div className="flex flex-wrap justify-center gap-3 mt-10 z-10">
                {Array(6).fill('').map((item, index) => (
                    <img
                        className="rounded-xl hover:scale-110 transition-transform duration-300 cursor-pointer shadow-md shadow-blue-900/40"
                        src={index % 2 === 0 ? assets.sample_img_1 : assets.sample_img_2}
                        alt=""
                        key={index}
                        width={90}
                    />
                ))}
            </div>

            <p className="mt-5 text-gray-400 z-10">Generated Images from Imagify</p>

            {/* Custom Animations */}
            <style>{`
                @keyframes aurora {
                  0% { transform: translateX(-100%) }
                  50% { transform: translateX(100%) }
                  100% { transform: translateX(-100%) }
                }
                .animate-aurora {
                  animation: aurora 4s linear infinite;
                }
                @keyframes fadeIn {
                  from { opacity: 0; transform: translateY(10px); }
                  to { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeIn {
                  animation: fadeIn 1.2s ease-in-out;
                }
            `}</style>
        </motion.div>
    )
}

export default Header

