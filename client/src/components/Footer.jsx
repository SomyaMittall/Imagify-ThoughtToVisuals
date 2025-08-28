import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer className="mt-20">
      <div className="flex items-center justify-between py-4 px-4 sm:px-8 
        bg-[#0f172a] text-white rounded-2xl 
        border border-blue-500/30 shadow-lg shadow-blue-900/60">

        {/* Logo with gradient bg like navbar */}
        <div className="p-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg">
          <img src={assets.logo} alt="Imagify" className="w-28 sm:w-32 lg:w-40" />
        </div>

        {/* Copyright */}
        <p className="hidden sm:block text-sm text-gray-400">
          © 2025 Imagify.dev || All Rights Reserved
        </p>

        {/* Social Icons with gradient bg */}
        <div className="flex gap-3">
          <div className="p-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg hover:scale-110 transition">
            <img src={assets.facebook_icon} alt="Facebook" width={18} />
          </div>
          <div className="p-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg hover:scale-110 transition">
            <img src={assets.twitter_icon} alt="Twitter" width={18} />
          </div>
          <div className="p-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg hover:scale-110 transition">
            <img src={assets.instagram_icon} alt="Instagram" width={18} />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
