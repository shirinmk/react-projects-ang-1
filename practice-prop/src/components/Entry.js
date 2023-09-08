import React from "react";

function Entry(props){
    console.log(props)
    return(
        <div className="term">
        <dt>
          <span className="emoji" role="img" aria-label="Tense Biceps">
           {props.image}
          </span>
          <span>{props.name}</span>
        </dt>
        <dd>
         "{props.meaning}"
        </dd>
      </div>
    )
}

export default Entry