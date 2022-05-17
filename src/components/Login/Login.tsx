import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setAuth } from "../../store/reducers/authReducer/isAuthAction";
import style from './Login.module.scss'

type Inputs = {
  password: string,
  username: string,
};

export default function Login() {
  const { isAuth, errorInput, isLoading } = useAppSelector(state => state.auth)
  const navigate = useNavigate();
 
  const dispatch = useAppDispatch()

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = data => {
    dispatch(setAuth(data))
  }

  useEffect(() => {
    isAuth && navigate('/profile')
  }, [isAuth, navigate])
  

  

  return (
    <form className={style.login_form} onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="username">Login</label>
      <input  id="username" {...register("username", { required: true })}/>
      {errors.username && <span>This field is required</span>}
      <label htmlFor="password">Password</label>
      <input id="password" type="password" {...register("password", { required: true })} />
      {errors.password && <span>This field is required</span>}
      {errorInput && <span>{errorInput}</span>}
      <button disabled = {isLoading} type="submit">Войти</button>
    </form>
  );
}
