import prodactData  from "../../prodact.json"
import { useState } from "react"
export const ProdactsItem=({prodact})=>{
    return(
        <div>
            <h4>{prodact.name}, wirebuleba -${prodact.price}</h4>
            <h5>maragshia:{prodact.stoke ? 'maragshia':' ar aris maragshi'}, categori -{prodact.categori}</h5>
        </div>
    )
}




export const Prodact=()=>{
const [instokOnly, setinstokOnly]=useState(false);

const render=()=>{
    let data=prodactData.slice()
if(instokOnly){
 data =prodactData.filter((item)=>item.stoke);
}



return data.map((item,index)=>{
        return <ProdactsItem prodact={item}key={index} />
    });

};
 return (
     <div className="row shedow-sm my-5 p-5">
         <button className="btn" onClick={()=>setinstokOnly(!instokOnly)}>maragshia </button>
     <hr/>
   {render()}
     </div>
 )
}