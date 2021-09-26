import React, { useEffect, useState } from "react";
import "../Form.css";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  clearState,
  signupUser,
  userSelector,
} from "../../../features/UserSlice";
import { AlertError, AlertSuccess } from "../../../utils/Alerts";

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

  const { isFetching, isSuccess, isError, errorMessage }: any = useSelector(userSelector);

  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, []);

  useEffect(() => {
    if (isSuccess) {
      dispatch(clearState());
      setSuccessStatus(true);

      alert("Success");
      window.location.reload();
    }

    if (isError) {
      console.log(errorMessage)
      dispatch(clearState());
    }
  }, [isSuccess, isError]);
  const submitFormValues = (values: any) => {
    dispatch(signupUser(values));
    console.log(values);
    // setSuccessStatus(true);
    // alert("Success");
    // window.location.reload();
  };
  const errorFormValues = (errors: object) => {
    alert( errors);
  };
  return (
    <div>
      {successStatus === true && (
        <div className="alerts">
          <AlertSuccess text="Register successfully!" />
        </div>
      )}
      {errorMessage && (
        <div className="alerts">
          <AlertError text={errorMessage} />
        </div>
      )}
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
        <input className="button" type="submit" value="Create an account" />
      </form>
    </div>
  );
};

export default Form;
