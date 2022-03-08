import { useState } from "react"

import prodactData  from "../../prodact.json"
import { ProdactsItem } from "./ProdactsItem"
import { Button,Textinput} from "../../atoms"






export const Prodact=()=>{
const [instokOnly, setinstokOnly]=useState(false);
const [filterTerm, setfilterTerm]=useState('')




const render=()=>{
    let data=prodactData.slice()
if(instokOnly){
 data =data.filter((item)=>item.stoke);
}

if(filterTerm && filterTerm.length>2){
data= data.filter((el)=>el.name.includes(filterTerm));
}

return data.map((item,index)=>{
        return <ProdactsItem prodact={item}key={index} />
    });

};





 return (
     <div className="row shedow-sm my-5 p-5">
      <form> 
          <div className="mb-3 row "> 
                <h4>Filter - {filterTerm}</h4>
              <div className="col-8">
           
                  <Textinput value={filterTerm} onChange={({target})=>{
                      setfilterTerm(target.value) 
                  }} />
                  </div>
          <div className="col-4">
          <Button className="btn" onClick={()=>setinstokOnly(!instokOnly)} 
          text= {instokOnly ? "maragshia": 'machvene sruli producia'}/>
          </div>
      </div>
       </form> 
    <hr/>
   {render()}
     </div>
 )
}