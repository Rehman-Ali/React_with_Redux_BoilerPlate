import actionTypes from "../constant/constant";

export function changeName(updatedUserName){
    return dispatch =>{
        dispatch({
            type:actionTypes.CHANGENAME,
            payload: updatedUserName
        })
    }
}