import {useForm} from "react-hook-form";
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

import {userService} from "../../services";
import {useDispatch, useSelector} from "react-redux";
import {authActions} from "../../redux";

const AuthForm = () => {
    const {register, handleSubmit} = useForm();
    const [isLogin, setIsLogin] = useState(null);
    const {loginError} = useSelector(state1 => state1.auth);

    const [errors, setErrors] = useState(null);

    const {pathname, state} = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();


    useEffect(() => {
        pathname === '/register' ? setIsLogin(false) : setIsLogin(true)
    }, [pathname])

    const submit = async (user) => {
        try {
            if (!isLogin) {

                const {data} = await userService.create(user);
                navigate('/login')
            } else {
                await dispatch(authActions.login({user}))
                navigate(state.pathname, {replace: true})
            }

        } catch (e) {
            console.log('ddddd')
            console.log(e.response)
            setErrors(e.response.data)

        }

    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'username'} {...register('username')}/>
            <input type="text" placeholder={'password'} {...register('password')}/>
            <button>{isLogin ? 'login' : 'register'}</button>
            <div>
                <div>{errors?.username && <span>{errors.username[0]}</span>}</div>
                <div>{errors?.password && <span>{errors.password[0]}</span>}</div>
                {loginError&&<span>Wrong username or password</span>}

            </div>
        </form>
    );
};

export {AuthForm};