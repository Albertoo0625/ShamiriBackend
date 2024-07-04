const LoginController=async(req,res)=>{
    try
    {

        const user=req.body.user;
        const pwd=req.body.pwd;
        res.status(200).json(`User Logged in ${user} + ${pwd}  `);

    }catch(error){
        console.log(`An error occured ${error.message}`)
    }
}

module.exports={LoginController}