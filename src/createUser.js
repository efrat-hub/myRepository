import React, { useRef, useState } from 'react';
// import axios from 'axios'
import {createUser, getImag, login,getImages,viewImg,getUrl} from './service'
// import fetch from 'fetch'
// import jquery from 'jquery';
// import ajax from 'ajax';
export default function CreateUsers(){
    const nameRef=useRef('');
    const passwordRef=useRef('');
    const [img, setImg]=useState()
    const [p, setP]=useState([])
    // const phonRef=useRef('');
    // const [userList,setUserList]=useState([]);
    // async function i(){
    //     debugger;
        // si()
        // console.log('hh')
    // await fetch.get("http://api.nasa.gov/planetary/apod",function f(data){
    //     console.log(data)}).then(
    //         console.log('ya')
    //     ),(err)=>
    // console.log(err)
    // }
    var url=''
    async function sendDetails(){
        debugger;
        try {
            if(nameRef.current.value!==''&&passwordRef.current.value!==''){
                const user= await createUser( {name:nameRef.current.value,password:passwordRef.current.value})  
                debugger;
            //    const r= await getImag(user.data.myUser._id)
                setImg(await (await getImag(user.data.myUser._id)).data.p )
                //  const image= getImag(newUser.data.myUser._id)
                //  url=image.data.url 
                  }
                 else 
                  console.log("nullllllllll")
        } catch (error) {
            console.log("error")
        }
    }
    // async function getUsers(){
    //     const result=await axios.get('http://localhost:3000/login').then(res=>{
    //         console.log(JSON.stringify(res));
    //         setUserList(res.data.users)
    //         console.log(userList);
    //     },
    //     err=>{
    //         console.log('error get users '+err);
    //     })
    async function loginUser(){
        debugger;
   try {
    if(nameRef.current.value!==''&&passwordRef.current.value!==''){
        const user=await login( {name:nameRef.current.value,password:passwordRef.current.value})  
       console.log('user',user)
       debugger
     setImg(await (await getImag(user.data.myUser[0]._id)).data.p )
    //  user.data.myUser[0].images.map(item=>{
    //     console.log(item)
    //  setImges(viewImg(item))
   //  setImges(x=>viewImg(item))
    // })
//         const v= await getImages(user.data.myUser[0]._id).data
//    console.log(v)
 debugger;
// console.log( (await getImages(user.data.myUser[0]._id)).data)
const y=await (await (getImages(user.data.myUser[0]._id)))
console.log(y)
const u=y.data.images
console.log( y.data.images)
{u.map(n=>{
 setP(p=>[...p, n.url])
})}
// console.log(x.PromisResult.data)
    //   setImges(await (await getImages(user.data.myUser[0]._id)).data.p )
     //    getImag() 
          }
         else 
          console.log("nullllllllll")
   } catch (error) {
      console.log("error") 
   }
}      
    async function upDateUser(){
        debugger;
        if(nameRef.current.value!==''&&passwordRef.current.value!==''){
            upDateUser( {password:passwordRef.current.value})  
      debugger;
    //    getImag() 
        }
       else 
        console.log("nullllllllll")
    }
    // async function login(){
    //     // if (passwordRef.current.value!='')
    //     const result=await axios.get('http://localhost:3000/login').then(res=>{
    //         console.log(JSON.stringify(res));
    //         setUserList(res.data.users)
    //         console.log(userList);
    //         console.log(result)
    //         getImag()
    //         // window.location('./showImage')
    //     },
    //     err=>{
    //         console.log('error login '+err);
    //     })
    // }
    return(
        <div style={{height:'auto',width:'1800px',backgroundColor:'burlywood',margin:'auto',padding:'auto'}}>
        <label htmlFor="name">name:</label>
        <input id="name" type="text" ref={nameRef}></input>
        <label htmlFor="password" >password:</label>
        <input id="password" type="text" ref={passwordRef}></input>
        <br></br>
        {/* <label htmlFor="phon" >phon:</label>
        <input id="phon" type="number" ref={phonRef}></input> */}
        <button onClick={sendDetails}>להירשם</button>
        <br></br>
        <button onClick={loginUser}>להיתחבר</button>
        {/* <button onClick={upDateUser}>לעדכן</button> */}
       <br></br>
        {img &&
        <img src={img.url} style={{height:'400px',width:'600px'}} ></img>}
        {p &&
          p.map(item =>   
         <p> <img style={{height:'40px',width:'50', margin:'auto'}} src={item}></img>
         </p>
         )}     
        {/* <button onClick={i}>תמונה</button> */}
        {/* <button onClick={getUsers}>getUsers</button> */}
        </div>
    )
}