import Axios from "axios";

export const initialState = {
    user : {}
};

export const Reducer = (state = initialState, action , user_info) => {
    switch(action.type)
    {
        case 'LOGIN':
            Axios.post('http://localhost:8000/sign-in',user_info).then(
                res=>{
                    return {user : res.user};
            })
            break;
        case 'SIGNUP' :
            Axios.post('http://localhost:8000/signup',user_info).then(
                res=>{
                    return {user : res.user};
                })
                break;
        default :
                return state;
    }
    return state;
};