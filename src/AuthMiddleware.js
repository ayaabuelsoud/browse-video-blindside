import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";


const AuthMiddleware = (props) => {
    const navigate = useNavigate();
    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));

        if(!currentUser){
            return navigate("/login");
         }
    })
    
    
    return props.Component
}
export default AuthMiddleware;