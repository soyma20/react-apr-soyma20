import {useEffect} from "react";
import {Car} from "../Car/Car";
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../redux";

const Cars = () => {
    const {cars, status} = useSelector(state => state.cars);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(carActions.getAll())
    },[])
    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};