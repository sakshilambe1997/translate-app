import User from "./../models/User.js"

const postSignup = async (req,res)=>{
    const { fullName ,email,address, dob,}= req.body;

    const user = new User({
        fullName,
        email,
        address,
        dob
    })

    const savedUser = await user.save();

    res.json({
        success:true,
        message:"User created successfully",
        data:savedUser

    })
}

export{
    postSignup
}