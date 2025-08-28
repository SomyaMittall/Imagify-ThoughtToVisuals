import React from 'react'
import { stepsData } from '../assets/assets'
import { motion } from 'framer-motion'

const Steps = () => {
    return (
        <div className="flex flex-col items-center justify-center my-32">
            
            {/* Heading */}
            <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.2 }}
                className="text-3xl sm:text-4xl font-semibold mb-2 text-white drop-shadow-lg"
            >
                How it Works
            </motion.h1>

            <motion.p 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, amount: 0.2 }}
                className="text-base sm:text-lg text-gray-400 max-w-2xl text-center mb-10 leading-relaxed"
            >
                Transform your simple words into stunning, high-quality AI-generated images that bring your imagination to life, whether for personal creativity, social media, or professional projects.
            </motion.p>

            {/* Steps */}
            <div className="space-y-6 w-full max-w-3xl text-sm">
                {stepsData.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.15 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="flex items-center gap-4 p-5 px-8 
                                   bg-gradient-to-r from-purple-600/80 to-blue-500/80 
                                   rounded-xl shadow-lg shadow-blue-900/40 
                                   cursor-pointer hover:scale-[1.03] 
                                   hover:shadow-purple-700/60 
                                   transition-all duration-500"
                    >
                        <img src={item.icon} alt="" className="w-10 h-10 drop-shadow-md" />
                        <div>
                            <h2 className="text-xl font-semibold text-white">{item.title}</h2>
                            <p className="text-gray-200">{item.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Steps
