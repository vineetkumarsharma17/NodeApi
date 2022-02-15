const { create }=require("./user.service");
const { hashSync, genSaltSync, compareSync } = require("bcrypt");
module.exports={
    createUser:(req,res)=>{
        const body=req.body;
        const salt= genSaltSync(10);
        body.pass=hashSync(body.pass,salt);
        create(body,(error,result)=>{
            if (error) {
                console.log(err);
                return res.status(500).json({
                  success: 0,
                  message: "Database connection errror"
                });
              }
              return res.status(200).json({
                success: 1,
                data: result
              });
        });
    }
}