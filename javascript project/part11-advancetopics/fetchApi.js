// let btn= document.querySelector("button");
// let url="https://dog.ceo/api/breeds/image/random";
// btn.addEventListener("click",async()=>{
//   let link= await getImage();
// //   console.log(link);
//   let img=document.querySelector("#result")
//   img.setAttribute("src",link)
// })

// async function getImage(){
//     try{
//         let res=await axios.get(url);
//    return res.data.message;
//     }
//     catch(e){
//         console.log("error",e);
//         return "/";
//     }
// }




// header in Axios
const url="https://icanhazdadjoke.com/ "
async function getJokes(){
    try{
        // const config={header:{Accept:"application/json"}}
        // let res=await axios.get(url,config);
        // console.log(res)
        let res=await axios.get(url,{
            headers:{
                Accept:"application/json"
            }
        })
        return res.data.joke;
    }
    catch(e){
        console.log("error",e);
        return "no jokes";
    }
}