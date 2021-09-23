import React, { useEffect, useState } from "react";
import "../Form.css";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  clearState,
  loginUser,
  userSelector,
} from "../../../features/UserSlice";
import { useHistory } from "react-router-dom";
import { AlertSuccess } from "../../../utils/Alerts";

type FormFields = {
  password: string;
  email: string;
};
const Form: React.FC = () => {
  const [successStatus, setSuccessStatus] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>();
  const dispatch = useDispatch();
  const history = useHistory();
  const { isFetching, isSuccess, isError, errorMessage }: any =
    useSelector(userSelector);

  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, []);

  useEffect(() => {
    if (isError) {
      alert(errorMessage)
      dispatch(clearState());
    }

    if (isSuccess) {
      dispatch(clearState());
      // alert success
      setSuccessStatus(true);
      alert("Success");
      window.location.reload();
    }
  }, [isError, isSuccess]);
  const submitFormValues = (values: any) => {
    dispatch(loginUser(values));
    console.log(values);
  };
  const errorFormValues = (errors: any) => {
    console.log("error", errors);
  };
  return (
    <div>
      {successStatus === true && (
        <div className="alerts">
          <AlertSuccess text="Login successfully!" />
        </div>
      )}
                <AlertSuccess text="Login successfully!" />

      <form
        className="form"
        onSubmit={handleSubmit(submitFormValues, errorFormValues)}
      >
        <label>Email Address</label>
        <input
          type="email"
          {...register("email", { required: true })}
          name="email"
        />
        <br />
        {errors.email && <span>This field is required</span>}
        <br />
        <label>Password</label>
        <input
          type="password"
          {...register("password", { required: true })}
          name="password"
        />
        <br />
        {errors.password && <span>This field is required</span>}
        <br />
        <input type="submit" className="button" value="Log In" />
      </form>
    </div>
  );
};

export default Form;
