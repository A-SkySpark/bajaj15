const express = require("express")
const bodyParser = require("body-parser")

const app = express();
const cors = require("cors");


const port = process.env.PORT|| 5000
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());

app.get("/",function(reqi,resi)
{
    resi.send("Hi");

})


app.post("/bfhl" , function(reqi,resi)
{
    let respfeed ={}
    const is_success = true;

    const data = reqi.body.data;
    var alpha = [];
    var nums = [];

    data.forEach((value)=>{
        if(!isNaN(value)){
            nums.push(value)
        }
        else{
            if(value >= "A" && value<= "Z" || value >= "a" && value<= "z" )
            {
                alpha.push(value);
            }
        }
    })

    respfeed = {
        is_success:is_success,
        user_id: "charchit_15012000",
        email: "charchitjaincs19@acropolis.in",
        roll_number: "0827CS191069",
        numbers : nums,
        alphabets : alpha
    };

    resi.json(respfeed);
})

app.listen(port);

