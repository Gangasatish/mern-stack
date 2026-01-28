import React from "react";
import { useLocation } from "react-router-dom";
const About = ()=>{
    const loc  = useLocation();
    const {companyName, locationComp, work} = loc.state || {};
    return(
        <div>
            <p>This is About page</p>
            <p>Company name is: {companyName}</p>
            <p>Location is: {locationComp}</p>
            <p>Work: {work}</p>
        </div>
    )
}
export default About