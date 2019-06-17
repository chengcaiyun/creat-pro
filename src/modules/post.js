import axios from "axios";
axios.post("https://m.mi.com/v1/miproduct/recommend").then(res=>{
    console.log(res)
}).catch(err=>{
    console.log("err=>",err)
})