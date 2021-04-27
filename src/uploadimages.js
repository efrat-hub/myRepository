import axios from "axios";
import { useState } from "react";

export default function UpLoad(){ 
const [urlInput,setUrlInput]=useState('');
const [selectedFile,setSelectedFile]=useState('')

function getUrl(event)
{
    debugger;
    let fileReader=new FileReader()
    fileReader.onload=((e)=>{
    setUrlInput(e.target.result)
    setSelectedFile(e.target.result)}
    )
    setUrlInput(fileReader.readAsDataURL(event.target.files[0]))
    setSelectedFile(event.target.files[0])
}
const onFileUpLoad=()=>{
    debugger;
    var myHeaders=new Headers();
    myHeaders.append('Authorization',`Beare ${localStorage.getItem("token")}`)
    myHeaders.append('Conected-Type','Appliction/json')

    var requestOptions={
        method:'POST',
        headers: myHeaders,
        body:JSON.stringify({"media_type":"image","date":`${Date.now()}`,"type":`${selectedFile.type}`,
        "title":`${selectedFile.name}`,url:`${urlInput}`}),
        redirect:'follow'
    };
    debugger;
    axios.post(`http://localhost:3001/addImage/6085ad24bb95583b947a7f4b`,{requestOptions})
    .then(response=>response.json())
    .then(result=>alert("save",result))
    .catch(error=>console.log('error',error) );
}
return(
<div>
    <input  type="file" className="from" accept='url' onChange={getUrl}></input>
<button type='button' className='btn btn-outline-dark' onClick={onFileUpLoad}>
    save in your arr images
</button>
{/* {fileData()} */}
</div> 
)
}