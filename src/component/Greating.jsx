import React from "react";

function Greating(){
    let greating = "";
    //define object
    let customHeading = {
        color : " ",
    }
    const date = new Date(2023,9,5,12)
    const hour = date.getHours()
    
    if (hour <12){
        greating = "Good Morning";
        customHeading.color = "red"
    }else if(hour < 16){
        greating = "Good Afternoon";
        customHeading.color = "yellow"
    }else{
        greating = "Good Night";
        customHeading.color = "blue"
    }
    return(
       
<h1 style={customHeading} > {greating}</h1>

    )

}

export default Greating