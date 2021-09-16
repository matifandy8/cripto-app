import React, { useEffect } from "react"
import "../Form.css"
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {  clearState, signupUser,userSelector } from "../../../features/UserSlice";

type FormFields={
        password:string,
        email:string
    }

 const Form:React.FC = () => {
    const { register, handleSubmit,formState: { errors }} = useForm<FormFields>();
    const dispatch = useDispatch();
    const history = useHistory();
  
    const { isFetching, isSuccess, isError, errorMessage }:any = useSelector(
      userSelector
    );
    const onSubmit = (data:any) => {
      dispatch(signupUser(data));
    };
  
    useEffect(() => {
      return () => {
        dispatch(clearState());
      };
    }, []);
  
    useEffect(() => {
      if (isSuccess) {
        dispatch(clearState());
        history.push('/');
      }
  
      if (isError) {
        dispatch(clearState());
      }
    }, [isSuccess, isError]);
    const submitFormValues=(values:any)=>{
        dispatch(signupUser(values));
        console.log(values)
    }
    const errorFormValues=(errors:object)=>{
        console.log("error",errors)
    }
    return(
        <div>
            <form className="form" onSubmit={handleSubmit(submitFormValues,errorFormValues)}>
            <label>Email Address</label>
            <input type="email" {...register("email",{required:true})} name="email" /><br />
            {errors.email && <span>This field is required</span>}<br />
            <label>Password</label>
            <input type="password" {...register("password",{required:true})} name="password" /><br />
            {errors.password && <span>This field is required</span>}<br />
            <input className="button" type="submit"  value="Create an account"/>
            </form>
        </div>
    )
}

export default Form;