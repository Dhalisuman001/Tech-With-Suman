import React from "react";
import {
  Input,
  Button,
  Checkbox,
  FormItem,
  FormContainer,
  Alert,
} from "components/ui";
import { PasswordInput, ActionLink } from "components/shared";
import useTimeOutMessage from "utils/hooks/useTimeOutMessage";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import useAuth from "utils/hooks/useAuth";
import { MdMailOutline } from "react-icons/md";
import { HiOutlineKey } from "react-icons/hi";
import googleIcon from "assets/img/google.png";

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Email is required").email("Email isn't valid"),
  password: Yup.string().required("Password is required").min(6),
  rememberMe: Yup.bool(),
});

const SignInForm = (props) => {
  const {
    disableSubmit = false,
    className,
    forgotPasswordUrl = "/forgot-password",
    signUpUrl = "/sign-up",
  } = props;

  const [message, setMessage] = useTimeOutMessage();

  const { signIn, googleAuth } = useAuth();

  const onSignIn = async (values, setSubmitting) => {
    setSubmitting(true);

    const result = await signIn(values);

    if (!result.status) {
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
        // Remove this initial value
        initialValues={{
          email: "",
          rememberMe: true,
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          if (!disableSubmit) {
            // console.log('calling');
            onSignIn(values, setSubmitting);
          } else {
            setSubmitting(false);
          }
        }}
      >
        {({ touched, errors, isSubmitting }) => (
          <Form>
            <FormContainer>
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
              <div className="flex justify-between mb-6">
                <Field
                  className="mb-0"
                  name="rememberMe"
                  component={Checkbox}
                  children="Remember Me"
                />
                <ActionLink to={forgotPasswordUrl}>Forgot Password?</ActionLink>
              </div>
              <Button
                block
                loading={isSubmitting}
                variant="solid"
                type="submit"
              >
                {isSubmitting ? "Signing in..." : "Sign In"}
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
        className="flex flex-row text-center justify-center gap-2 items-center"
        onClick={googleAuth}
      >
        <img src={googleIcon} className="w-5" alt="" />
        Continue With Google
      </Button>

      <div className="mt-2 text-center">
        <span>Don't have an account yet? </span>
        <ActionLink to={signUpUrl}>Sign up</ActionLink>
      </div>
    </div>
  );
};

export default SignInForm;
