// import jwt from "jsonwebtoken";


// const userAuth=async(req,res,next)=>{
//     const {token}= req.headers;

//     if(!token){
//         return res.json({success: false, message: "Not authorized, Login again"})
//     }

//     try {
//         const tokenDecode= jwt.verify(token, process.env.JWT_SECRET)

//         if(tokenDecode.id){
//             req.body.userId= tokenDecode.id;
//         }else{
//             return res.json({success: false, message: "Not authorized, Login again"})
//         }
//         next(); 
//     } catch (error) {
//         console.log(error)
//         res.json({success: false, message: error.message})
//     }
// }

// export default userAuth;
import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
    const { token } = req.headers;

    if (!token) {
        return res.json({ success: false, message: "Not authorized, Login again" });
    }

    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

        if (tokenDecode.id) {
            req.user = { id: tokenDecode.id };   // ✅ safer than req.body
            next();
        } else {
            return res.json({ success: false, message: "Not authorized, Login again" });
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export default userAuth;
