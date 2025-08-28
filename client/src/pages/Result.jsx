// import React, { useState } from 'react'
// import { assets } from '../assets/assets'


// const Result = () => {

//     const [image, setImage] = useState(assets.sample_img_1)
//     const [isImageLoaded, setIsImageLoaded] = useState(false)
//     const [loading, setLoading] = useState(false)
//     const [input, setInput] = useState('')

//     const onSubmitHandler= async(e)=>{

//     }

//     return (
//         <form className='flex flex-col min-h-[90vh] justify-center items-center'>
//             <div>
//                 <div className='relative'>
//                     <img src={image} alt="" className='max-w-sm rounded' />

//                     <span className={`absolute bottom-0 left-0 bg-blue-500 ${loading ? 'w-full transition-all duration-[10s]' : 'w-0'}`} />
//                 </div>
//                 <p className={!loading ? "hidden" : ""}>Loading.....</p>
//             </div>

//             {!isImageLoaded &&
//                 <div className='flex w-full max-w-xl bg-neutral-500 text-white text-sm p-0.5 mt-10 rounded-full'>

//                     <input onChange={(e) => setInput(e.target.value)} value={input}
//                     type="text" placeholder='Describe what you want to generate' className='flex-1 bg-transparent outline-none ml-8 max-sm:w-20 placeholder-color' />
//                     <button type='submit' className='bg-zinc-900 px-10 sm:px-16 py-3 rounded-full'>Generate</button>
//                 </div>
//             }

//             {isImageLoaded &&
//                 <div className='flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full'>
//                     <p onClick={() => { setIsImageLoaded(false) }}
//                         className='bg-white border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer'>Generate Another</p>
//                     <a href={image} download className='bg-zinc-900 px-10 py-3 rounded-full cursor-pointer'>Download</a>
//                 </div>
//             }
//         </form>
//     )
// }


// export default Result
import React, { useState } from 'react'
import { assets } from '../assets/assets'
  import {motion} from "framer-motion"

const Result = () => {
  const [image, setImage] = useState(assets.sample_img_1)
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const [loading, setLoading] = useState(false)
  const [input, setInput] = useState('')

  const onSubmitHandler = async (e) => {
    // your logic remains untouched
  }

  return (
    <motion.form 
    initial={{opacity:0.2, y:100}}
    whileInView={{opacity:1, y:0}}
    viewport={{once:true}}
    transition={{duration:1}} 
    className="flex flex-col min-h-[90vh] justify-center items-center text-white">
      <div className="relative group">
        {/* Image preview */}
        <img
          src={image}
          alt=""
          className="relative max-w-sm rounded-2xl shadow-[0_0_12px_2px_rgba(59,130,246,0.35),0_0_18px_4px_rgba(168,85,247,0.25)] transition-transform duration-500 group-hover:scale-[1.02]"
        />

        {/* Loading progress bar */}
        <span
          className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full ${
            loading ? 'w-full transition-all duration-[10s]' : 'w-0'
          }`}
        />
      </div>

      {/* Loading text */}
      <p
        className={`mt-2 text-sm text-gray-400 animate-pulse ${
          !loading ? 'hidden' : ''
        }`}
      >
        Loading...
      </p>

      {/* Input + button */}
      {!isImageLoaded && (
        <div className="flex w-full max-w-xl bg-[#0f172a] border border-blue-500/40 backdrop-blur-sm text-sm p-1 mt-10 rounded-full shadow-md shadow-blue-900/30">
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="Describe what you want to generate..."
            className="flex-1 bg-transparent outline-none ml-6 placeholder-gray-400 text-white"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 px-10 sm:px-16 py-3 rounded-full transition-transform hover:scale-105 shadow-md shadow-purple-800/40"
          >
            Generate
          </button>
        </div>
      )}

      {/* After image is loaded */}
      {isImageLoaded && (
        <div className="flex gap-3 flex-wrap justify-center text-sm p-0.5 mt-10">
          <p
            onClick={() => {
              setIsImageLoaded(false)
            }}
            className="bg-[#0f172a] hover:bg-blue-950 text-white px-8 py-3 rounded-full cursor-pointer transition-transform hover:scale-105 shadow-[0_0_15px_rgba(59,130,246,0.7)]"
          >
            Generate Another
          </p>
          <a
            href={image}
            download
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 px-10 py-3 rounded-full cursor-pointer transition-transform hover:scale-105 shadow-md shadow-blue-900/40"
          >
            Download
          </a>
        </div>
      )}
    </motion.form>
  )
}

export default Result
