import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {carActions} from "../../redux";

const CarForm = () => {
    const {register, handleSubmit} = useForm();
    const dispatch = useDispatch();

    const submit = async (car) => {
        await dispatch(carActions.create(car))

    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div>model: <input type="text"  placeholder={'model'} {...register('model')}/></div>
            <div>price: <input type="text"  placeholder={'price'} {...register('price')}/></div>
            <div>year: <input type="text"  placeholder={'year'} {...register('year')}/></div>
            <button>create car</button>
        </form>
    );
};

export {CarForm};