import './Info.css'
// import {SparklesPreview} from "../../ui/sparkelsDEMO"
import { TypewriterEffectSmoothDemo } from "../../ui/typeWriterDEMO"
export default function Info(){
    return (
        <>
        <div className="infocon">
            

            <p className="infol text-1xl md:text-3xl font-bold dark:text-white text-center"> Member Board Drive 2</p>
            {/* <p className="ml
            text-1xl md:text-3xl font-bold ">Last Chance to be a part of this family</p>
            <p className="sl">Apply now</p> */}
            {/* <SparklesPreview/> */}

            {/*  
            
                Passed all text contents to this DEMO comp -> 
                couldve done better using Props or Coustom Hooks 
                but did anyways sorry 
                                                --Vighnesh 1:13 mar23
            */}
            <TypewriterEffectSmoothDemo/>
        </div>
        </>
    )
}