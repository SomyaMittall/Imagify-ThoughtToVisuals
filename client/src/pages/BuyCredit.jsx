import React, { useContext } from 'react'
import { assets, plans } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { motion } from "framer-motion"
import { useNavigate } from 'react-router-dom'
import { toast } from "react-toastify"
import axios from "axios"

const BuyCredit = () => {
    const { user, backendUrl, loadCreditsData, token, setShowLogin } = useContext(AppContext)

    const navigate = useNavigate();

    const initPay = async (order) => {
        const options={
            key: import.meta.env.VITE_RAZORPAY_KEY_ID,
            amount: order.amount,
            currency: order.currency,
            name:"Credits Payment",
            description: "Credits Payment",
            order_id: order.id,
            receipt: order.receipt,
            handler: async(response)=>{
                try {
                    const {data}= await axios.post(backendUrl+ "/api/user/verify-razor", response, {headers: {token}})

                    if(data.success){
                        loadCreditsData();
                        navigate('/')
                        toast.success("credit added")
                    }
                } catch (error) {
                    toast.error(error.message)
                }
            }
        }
        const rzp= new window.Razorpay(options)
        rzp.open()

    }

    const paymentRazorpay = async (planId) => {
        try {
            if (!user) {
                setShowLogin(true)
            }

            const { data } = await axios.post(backendUrl + "/api/user/pay-razor", { planId }, { headers: { token } })

            if (data.success) {
                initPay(data.order)
            }

        } catch (error) {
            toast.error(error.message)

        }
    }

    return (
        <motion.div
            initial={{ opacity: 0.2, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="min-h-[80vh] text-center pt-14 mb-10">
            {/* Our Plans Button */}
            <button className="px-10 py-2 rounded-full mb-6 text-sm font-medium 
                         bg-gradient-to-r from-blue-600 to-blue-600 text-white 
                         shadow-md hover:shadow-lg hover:scale-105 transition">
                Our Plans
            </button>

            {/* Heading */}
            <h1 className="text-center text-4xl font-bold mb-6 sm:mb-10 mt-4
                           text-white drop-shadow-[0_0_10px_#3b82f6]">
                Buy Credits
            </h1>

            {/* Plans Grid */}
            <div className="flex flex-wrap justify-center gap-6 text-left">
                {plans.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white mt-3 border border-gray-200 rounded-2xl py-12 px-8 
                                   text-gray-700 shadow-lg shadow-blue-900/20 
                                   hover:shadow-2xl hover:shadow-purple-600/30 
                                   hover:scale-105 transition-all duration-500 
                                   w-[280px] sm:w-[300px]"
                    >
                        <img width={40} src={assets.logo_icon} alt="" />

                        <p className="mt-3 mb-1 font-bold">{item.id}</p>
                        <p className="text-sm">{item.desc}</p>
                        <p className="mt-6 font-bold">
                            <span className='text-3xl  font-medium'>${item.price}</span>/ {item.credits} credits</p>

                        {/* Get Started / Purchase Button */}
                        <button onClick={()=>paymentRazorpay(item.id) }
                            className="w-full mt-8 text-sm font-medium rounded-full py-3 
                         bg-gradient-to-r from-purple-600 to-blue-500 text-white 
                         shadow-md hover:shadow-lg hover:scale-105 transition"
                        >
                            {user ? 'Purchase' : 'Get Started'}
                        </button>
                    </div>
                ))}
            </div>
        </motion.div>
    )
}

export default BuyCredit
