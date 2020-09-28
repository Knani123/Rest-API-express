const express=require('express')
const router=express.Router();
const fetch=require('node-fetch')
router.get('/',(req,res)=>{
    res.render('index',{
        city:null,
        des:null,
        icon:null,
        temp:null
    }
    )})

router.post('/',async(req,res)=>{
    const city=req.body.city;
    const url_api=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=effd1a24a02dd939c326e8a90bd6dcda`

    try{  
     await fetch(url_api)
    .then(res=>res.json())
    .then(data=>{
        if(data.message==='city not found'){
            res.render('index',{
                city:'City not found',
                des:null,
                icon:null,
                temp:null,
                color:"red"
            }
            )
        }else{
            const city=data.name;
            const des=data.weather[0].description;
            const icon=data.weather[0].icon;
            const temp=Math.ceil(Number(data.main.temp));

            res.render('index',{
                city,des,icon,temp,color:"green"

            })
        }
    })

    }catch(err){
        res.render('index',{
            city:'something wrong',
            des:null,
            icon:null,
            temp:null,
            color:"red"

        })
    }

 
})


module.exports=router;