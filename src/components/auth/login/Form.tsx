import React from "react"
import "../Form.css"
import { useForm } from "react-hook-form";


 const Form:React.FC = () => {
    type FormFields={
        password:string,
        email:string
    }
    const { register, handleSubmit,formState: { errors }} = useForm<FormFields>();
    const submitFormValues=(values:any)=>{
        console.log(values)
    }
    const errorFormValues=(errors:any)=>{
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
            <input type="submit" className="button"  value="Log In"/>
            </form>
        </div>
    )
}

export default Form;