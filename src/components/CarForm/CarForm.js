import {useForm} from "react-hook-form";
import {carService} from "../../services";
import {useEffect, useState} from "react";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators";

const CarForm = ({setNewCar, carForUpadate}) => {
    const {reset,register,handleSubmit, formState:{errors}, setValue} = useForm({
        resolver:joiResolver(carValidator),
        mode:"onTouched"
    });

    useEffect(()=>{
        if (carForUpadate){
            const {model,price,year}=carForUpadate;
            setValue('model',model);
            setValue('price',price);
            setValue('year',year);
        }
    },[carForUpadate])

    const [formError, setFormError] = useState([]);

    const submit = async (car) => {
        try{
            if (carForUpadate){
                const {data} = await carService.updateById(carForUpadate.id,car);
                setNewCar(data)

            }else {
                const {data} = await carService.create(car);
                setNewCar(data)
            }

            reset()

        }catch (e){
            setFormError(e.response.data)
        }
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div><lable>Model: <input type="text"{...register('model')}/></lable></div>
            {errors.model && <span>{errors.model.message}</span>}
            {/*{formError.model && <span>{formError.model[0]}</span>}*/}
            <div><lable>Price: <input type="text"{...register('price', {valueAsNumber:true})}/></lable></div>
            {errors.price && <span>{errors.price.message}</span>}
            {/*{formError.price && <span>{formError.price[0]}</span>}*/}
            <div><lable>Year: <input type="text" {...register('year',{valueAsNumber:true})}/></lable></div>
            {errors.year && <span>{errors.year.message}</span>}
            {/*{formError.year && <span>{formError.year[0]}</span>}*/}
            <button>save</button>
        </form>
    );
};

export {CarForm};