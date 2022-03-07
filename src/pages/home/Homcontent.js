import { useState } from "react"
import { Welcome } from "../../components/header/"
import { Welcome2 } from "../../components/header/"

const Homcontent=()=>{
    const [shoWelcome,setshow]=useState(false);
    const renderContent=()=>{
     
        let content;
        if(shoWelcome){
            content=<Welcome user="ilia" age={25}/>;
        }
        else{
        content=   <Welcome2 user="mito" age={23}/>
    
        }
        return content
       }
    const hendclick=()=>{
        setshow(!shoWelcome);
    }
    
    
    
        return(
            <div>
                <button className="btn" onClick={hendclick}>submit</button>
            <hr/>
             {renderContent()}
            </div>
        )
}
export default Homcontent;