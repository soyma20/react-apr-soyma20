import {useDispatch, useSelector} from "react-redux";
import {Episode} from "../Episode/Episode";
import {useEffect} from "react";
import {episodeActions} from "../../redux";
import {useLocation} from "react-router-dom";

const Episodes = () => {
    const {episodes} = useSelector(store=>store.episodes);
    const dispatch = useDispatch();
    const {search} = useLocation();



    useEffect(()=>{
        dispatch(episodeActions.getAll())
    },[])
    return (
        <div>
            {
                episodes.map(episode=><Episode key={episode.id} episode={episode}/>)
            }
        </div>
    );
};

export {Episodes};