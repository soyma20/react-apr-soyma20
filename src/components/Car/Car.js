import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {carActions} from "../../redux";

const Car = ({car, car: {id, model, price, year}}) => {
    const dispatch = useDispatch();
    const deleteById = async () => {
        await dispatch(carActions.deleteById(id))
    };
    const setCarForUpdate = async () => {
        await dispatch(carActions.setCarForUpdate({car}))
    }


    return (
        <div>
            <div>{id}</div>
            <div>{model}</div>
            <div>{price}</div>
            <div>{year}</div>
            <button onClick={deleteById}>delete</button>
            <button onClick={setCarForUpdate}>update</button>
            <hr/>
        </div>
    );
};

export {Car};