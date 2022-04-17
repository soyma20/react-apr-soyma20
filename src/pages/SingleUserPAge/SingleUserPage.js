import {useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {userService} from "../../services";

const SingleUserPage = () => {
    const {state} = useLocation();
    const [user, setUser]= useState(state)
    const {id} = useParams();

    useEffect(()=>{
        if (!state){
            userService.getById(id).then(({data})=>setUser(data))
        }else {
            setUser(state)
        }
    },[id, state])

    return (
        <div>
            SingleUserPage
        </div>
    );
};

export {SingleUserPage};