import axios from 'axios';

export async function hello(){
    await axios.get('http://localhost:3001/hello').then(
        res=>{
            console.log('Hello work'+JSON.stringify(res));
        },
        err=>{
            console.log('error hello: '+err);
        }
    )
} 
// export  function si(){
//      get('http://api.nasa.gov/planetary/apod')
// } 
export async function createUser(user){
    debugger;
    return axios.post('http://localhost:3001/register',user)
    // .then(
    //     res=>{
    //         console.log('createUser work'+JSON.stringify(res.data));
    //        debugger;
    //         getImag(res.data.myUser._id)
    //     },
    //     err=>{
    //         console.log('error createUser: '+err)
    //     }
    // )
}
export  function login(user){
    debugger;
    return axios.post('http://localhost:3001/login',{name:user.name,password:user.password})
    // .then(
        // res=>{
        //     console.log('User login'+JSON.stringify(res.data));
        //    debugger;
        //     getImag(res.data.myUser._id)
        //     debugger;
        // },
        // err=>{
        //     console.log('error loginUser: '+err)
        // }
    // )
}
export async function viewImg(Id){
    debugger;
    try{
  return await axios.get('http://localhost:3001/viewImg/'+Id)
    }catch(err){
        console.log('error',err);
    }
}

// export async function addImage(Id){
//     debugger;
//     try{
//   return await axios.get('http://localhost:3001/viewImg/'+Id)
//     }catch(err){
//         console.log('error',err);
//     }
// }
export async function getImages(Id){
    debugger;
    try{
  return await axios.get('http://localhost:3001/getImages/'+Id)
    }catch(err){
        console.log('error',err);
    }
}
export async function getUrl(Id){
    debugger;
    try{
  return await axios.get('http://localhost:3001/getUrl/'+Id)
    }catch(err){
        console.log('error',err);
    }
}
export async function getImag(Id){
    debugger;
    try{
  return await axios.get('http://localhost:3001/getImage/'+Id)
    }catch(err){
        console.log('error',err);
    }
    // .then(
    //     res=>{
    //         console.log('createImage work'+JSON.stringify(res.data));
    //     },
    //     err=>{
    //         console.log('error createImage: '+err)
    //     }
    // )
}
export async function getUsers(){
    await axios.post('http://localhost:3001/getUsers',{nameUser:'rachel',passord:'1234'}).then(
        res=>{
            console.get('getUsers work'+JSON.stringify(res));
        },
        err=>{
            console.log('error getUsers: '+err)
        }
    )
}
export async function upDateUser(userId){
    debugger;
    await axios.post('http://localhost:3001/upDataUser/'+userId).then(
        res=>{
            console.log('User upDateUser'+JSON.stringify(res.data));
           debugger;
            getImag(res.data.myUser._id)
        },
        err=>{
            console.log('error upDateUser: '+err)
        }
    )
}
