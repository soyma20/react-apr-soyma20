import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../redux";
import {useEffect} from "react";

const CarForm = () => {
    const {register, handleSubmit, reset, setValue} = useForm();
    const {carForUpdate} = useSelector(state => state.cars);
    const dispatch = useDispatch();

    useEffect(() => {
        const {model, price, year} = carForUpdate;
        setValue('model', model)
        setValue('price', price)
        setValue('year', year)
    }, [carForUpdate])

    const submit = async (car) => {
        if (carForUpdate) {
            await dispatch(carActions.updateById({id:carForUpdate.id, car}))

        }else {
            await dispatch(carActions.createAsync(car));

        }
        reset()

    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div>model: <input type="text" placeholder={'model'} {...register('model')}/></div>
            <br/>
            <div>price: <input type="text" placeholder={'price'} {...register('price')}/></div>
            <br/>
            <div>year: <input type="text" placeholder={'year'} {...register('year')}/></div>
            <br/>
            <button>save</button>
        </form>
    );
};

export {CarForm};