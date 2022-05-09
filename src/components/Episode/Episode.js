import {useNavigate} from "react-router-dom"

import css from './Episode.module.css'
import {useDispatch} from "react-redux";
import {episodeActions} from "../../redux";

const Episode = ({episode:{name, air_date, episode, characters}}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const toCharacters = () => {
        dispatch(episodeActions.currentEpisode({episodeName:name}))
        navigate('/characters', {state:characters})
    }

    return (
        <div className={css.Episode} onClick={toCharacters}>
            <h3>{name}</h3>
            <h4>{air_date}</h4>
            <h4>{episode}</h4>
        </div>
    );
};

export {Episode};