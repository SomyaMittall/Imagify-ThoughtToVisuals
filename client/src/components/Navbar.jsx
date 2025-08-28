import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {

    const { user, setShowLogin } = useContext(AppContext)
    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-between py-4 px-4 sm:px-8 bg-[#0f172a] text-white shadow-md shadow-blue-900/40 rounded-2xl">

            {/* Logo */}
            <Link to='/'>
                <div className="p-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg">
                    <img src={assets.logo} alt="" className="w-28 sm:w-32 lg:w-40" />
                </div>
            </Link>

            <div>
                {user ? (
                    <div className="flex items-center gap-3 sm:gap-4">

                        {/* Credits Button */}
                        <button
                            onClick={() => navigate("/buy")}
                            className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 px-4 sm:px-6 py-1.5 rounded-full shadow-lg shadow-purple-800/50 hover:scale-105 transition-transform duration-500"
                        >
                            <img className="w-5" src={assets.credit_star} alt="" />
                            <p className="text-xs sm:text-sm font-semibold">Credits left : 50</p>
                        </button>

                        {/* Greeting */}
                        <p className="max-sm:hidden pl-2 font-medium text-gray-300">Hi, Dear</p>

                        {/* Profile */}
                        <div className="relative group">
                            <img src={assets.profile_icon} alt="" className="w-10 rounded-full border-2 border-purple-500 shadow-md shadow-purple-800/50 cursor-pointer" />

                            {/* Dropdown */}
                            <div className="absolute hidden group-hover:block top-12 right-0 z-10">
                                <ul className="list-none bg-[#1e293b] border border-purple-700 rounded-lg shadow-lg text-sm text-gray-200">
                                    <li className="py-2 px-4 cursor-pointer hover:bg-purple-700/30 transition">Logout</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex items-center gap-3 sm:gap-6 font-medium">
                        <p
                            onClick={() => navigate('/buy')}
                            className="cursor-pointer text-gray-300 hover:text-purple-400 transition"
                        >
                            Pricing
                        </p>
                        <button onClick={()=>setShowLogin(true)} className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-blue-500 hover:to-purple-600 text-white py-2 px-7 sm:px-10 text-sm rounded-full shadow-md shadow-blue-900/40 transition-transform hover:scale-105">
                            Login
                        </button>
                    </div>
                )}
            </div>

        </div>
    )
}

export default Navbar

