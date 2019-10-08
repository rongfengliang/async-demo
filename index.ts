import "tslib"

import {call} from "./app"

call("dalong").then(result=>{
   console.log(result)
}).catch(err=>{
    console.log(err)
})


call("demoapp").then(result=>{
    console.log(result)
 }).catch(err=>{
     console.log(err)
 })
 
