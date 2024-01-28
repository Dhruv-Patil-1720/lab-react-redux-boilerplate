import React from 'react'
const initState={
    likes:0
}
const Reducer = (state=initState,{type,payload}) => {
    switch (type){
        case "INCREMENT":{
            return{likes:state.likes+payload}
        }
        case "DECREMENT":{
            return{likes:state.likes+payload}
        }
        default:{
            return state;
        }
    }
}

export default Reducer