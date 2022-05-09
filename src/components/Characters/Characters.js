import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {characterService} from "../../services";
import {Character} from "../Character/Character";

const Characters = () => {
    const {state} = useLocation();
    const [characters,setCharacters] = useState([]);

    useEffect(()=>{
        characterService.getByCharacterList(state).then(({data})=>setCharacters(data))
    },[])

    return (
        <div>
            {characters.map(item=> <Character key={item.id} character={item}/>)}
        </div>
    );
};

export {Characters};
