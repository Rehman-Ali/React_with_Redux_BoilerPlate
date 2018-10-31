import actionTypes from "../constant/constant";

const INITAIL_STATE = {
    name:'Ali Ayyan'

}


export default (states= INITAIL_STATE, action) =>{

    switch(action.type){
        case actionTypes.CHANGENAME:
        return({
            ...states,
            name:action.payload

        })

        default:
        return states

    }


}