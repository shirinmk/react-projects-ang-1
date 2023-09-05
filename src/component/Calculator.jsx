import React from "react";
import {add, multiply,subtract,divide} from './CalculateFunctions'

function Calculator(){

return(
    <div>
        <ul>
            {/* <li>{add(1,2)}</li> it should be inside {} otherwise not working dynamically  */}
            <li>add(1,2)is {add(1,2)}</li>
            <li>multiply(4,5) is {multiply(4,5)}</li>
            <li>subtract(5,3) is {subtract(5,3)}</li>
            <li>divide(6,3) is {divide(6,3)}</li>
        </ul>
    </div>
)

}
export {Calculator}