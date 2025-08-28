import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const Description = () => {
    return (
        <div className="relative flex flex-col items-center justify-center my-24 px-6 md:px-28">
            
            {/* Title */}
            <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.2 }}
                className="text-3xl sm:text-4xl font-semibold mb-2 text-center text-white drop-shadow-lg"
            >
                Create Stunning Images with AI
            </motion.h1>

            <motion.p 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="text-gray-400 mb-10 text-center max-w-2xl"
            >
                Use our advanced AI tools to turn your text prompts into beautiful images in seconds.
            </motion.p>

            {/* Content */}
            <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: true, amount: 0.2 }}
                className="flex flex-col items-center justify-center gap-8 md:flex-row md:items-start mt-8"
            >
                {/* Image with glow */}
                <img 
                    src={assets.sample_img_1} 
                    alt="AI generated" 
                    className="w-80 xl:w-96 rounded-xl shadow-lg shadow-purple-900/40 hover:scale-105 transition-transform duration-500"
                />

                {/* Text content */}
                <div 
                    className="bg-white/10 backdrop-blur-md border border-purple-800/30 p-6 rounded-2xl shadow-lg max-w-lg"
                >
                    <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-purple-300">
                        Introducing Our AI-Powered Text to Image Generator
                    </h2>
                    <p className="text-gray-200 mb-4">
                        Easily bring your ideas to life with our free AI image generator. Whether you need stunning visuals or unique imagery, our tool transforms your text into eye-catching images with just a few clicks. Imagine it, describe it, and watch it come to life instantly.
                    </p>
                    <p className="text-gray-200">
                        Simply type in a text prompt, and our cutting-edge AI will generate high-quality images in seconds. From product visuals to character designs and portraits, even concepts that don't yet exist can be visualized effortlessly. Powered by advanced AI technology, the creative possibilities are limitless!
                    </p>
                </div>
            </motion.div>
        </div>
    )
}

export default Description
