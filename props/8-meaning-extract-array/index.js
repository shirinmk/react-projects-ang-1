import emojipedia from "./emojipedia";

console.log(emojipedia)

let meaningArray = emojipedia.map(function(x){
    return(
        // console.log(x.meaning)
        x.meaning.substring(0,100)
    )
})
console.log(meaningArray)