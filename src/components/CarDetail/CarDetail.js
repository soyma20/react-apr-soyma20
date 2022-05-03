import {carActions} from "../../redux";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom"

const CarDetail = ({car, car:{id,model, price, year}}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const deleteById = () => {
        dispatch(carActions.deleteById({id}))
        navigate('/cars');
    }
    return (
        <div>
            <p><b>Id:</b>{id}</p>
            <p><b>Model:</b>{model}</p>
            <p><b>Price:</b>{price}</p>
            <p><b>Year</b>{year}</p>
            <button onClick={deleteById}>delete</button>
            <button onClick={()=>dispatch(carActions.setCarForUdate({id, car}))}>update</button>
        </div>
    );
};

export {CarDetail};