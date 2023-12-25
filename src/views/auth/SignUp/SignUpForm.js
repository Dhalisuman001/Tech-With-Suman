import React from "react";
import { Input, Button, FormItem, FormContainer, Alert } from "components/ui";
import { PasswordInput, ActionLink } from "components/shared";
import useTimeOutMessage from "utils/hooks/useTimeOutMessage";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import useAuth from "utils/hooks/useAuth";
import googleIcon from "assets/img/google.png";
import { MdMailOutline } from "react-icons/md";
import { HiOutlineKey } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";

const validationSchema = Yup.object().shape({
  fullname: Yup.string().required("Full name is required"),
  email: Yup.string().required("Email is required").email("Email isn't valid"),
  password: Yup.string().required("Password is required").min(6),
});

const SignUpForm = (props) => {
  const { disableSubmit = false, className, signInUrl = "/sign-in" } = props;

  const { signUp, googleAuth } = useAuth();

  const [message, setMessage] = useTimeOutMessage();

  const onSignUp = async (values, setSubmitting) => {
    const { fullname, password, email } = values;
    setSubmitting(true);
    const result = await signUp({ fullname, password, email });

    if (result.status === "failed") {
      setMessage(result.message);
    }

    setSubmitting(false);
  };

  return (
    <div className={className}>
      {message && (
        <Alert className="mb-4" type="danger" showIcon>
          {message}
        </Alert>
      )}
      <Formik
        initialValues={{
          fullname: "admin1",
          password: "123Qwe1",
          email: "test@testmail.com",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          if (!disableSubmit) {
            onSignUp(values, setSubmitting);
          } else {
            setSubmitting(false);
          }
        }}
      >
        {({ touched, errors, isSubmitting }) => (
          <Form>
            <FormContainer>
              <FormItem
                label="Full Name"
                invalid={errors.fullname && touched.fullname}
                errorMessage={errors.fullname}
              >
                <Field
                  type="text"
                  autoComplete="off"
                  name="fullname"
                  placeholder="Full Name"
                  prefix={<FaRegUser />}
                  component={Input}
                />
              </FormItem>
              <FormItem
                label="Email"
                invalid={errors.email && touched.email}
                errorMessage={errors.email}
              >
                <Field
                  type="email"
                  autoComplete="off"
                  name="email"
                  placeholder="Email"
                  prefix={<MdMailOutline />}
                  component={Input}
                />
              </FormItem>
              <FormItem
                label="Password"
                invalid={errors.password && touched.password}
                errorMessage={errors.password}
              >
                <Field
                  autoComplete="off"
                  name="password"
                  placeholder="Password"
                  prefix={<HiOutlineKey />}
                  component={PasswordInput}
                />
              </FormItem>

              <Button
                block
                loading={isSubmitting}
                variant="solid"
                type="submit"
              >
                {isSubmitting ? "Creating Account..." : "Sign Up"}
              </Button>
              <div className="relative w-full flex items-center gap-2 my-4 opacity-10 uppercase text-black font-bold">
                <hr className="w-1/2 border-black" />
                <p>or</p>
                <hr className="w-1/2 border-black" />
              </div>
            </FormContainer>
          </Form>
        )}
      </Formik>
      <Button
        block
        variant="solid"
        onClick={googleAuth}
        className="flex flex-row  justify-center gap-2 items-center"
      >
        <img src={googleIcon} className="w-5" alt="" />
        Continue With Google
      </Button>
      <div className="mt-4 text-center">
        <span>Already have an account? </span>
        <ActionLink to={signInUrl}>Sign in</ActionLink>
      </div>
    </div>
  );
};

export default SignUpForm;
