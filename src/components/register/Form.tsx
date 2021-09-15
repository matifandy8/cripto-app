import React from "react"
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
            <form onSubmit={handleSubmit(submitFormValues,errorFormValues)}>
            <label>email</label>
            <input type="email" {...register("email",{required:true})} name="email" /><br />
            {errors.email && <span>This field is required</span>}<br />
            <label>password</label>
            <input type="password" {...register("password",{required:true})} name="password" /><br />
            {errors.password && <span>This field is required</span>}<br />
            <input type="submit" />
            </form>
        </div>
    )
}

export default Form;