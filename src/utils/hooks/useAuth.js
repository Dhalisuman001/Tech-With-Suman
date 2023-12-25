import { useSelector, useDispatch } from "react-redux";
import { setUser, initialState } from "store/auth/userSlice";
import { apiGooleAuth, apiSignIn, apiSignUp } from "services/AuthService";
import { onSignInSuccess, onSignOutSuccess } from "store/auth/sessionSlice";
import appConfig from "configs/app.config";
import { REDIRECT_URL_KEY } from "constants/app.constant";
import { useNavigate } from "react-router-dom";
import useQuery from "./useQuery";
import { Notification, toast } from "components/ui";
import { authWithGoogle } from "services/FirebaseService";

const openNotification = (title, type) => {
  toast.push(<Notification title={title} type={type}></Notification>);
};

function useAuth() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const query = useQuery();

  const { token, signedIn } = useSelector((state) => state.auth.session);

  const signIn = async (values) => {
    try {
      const { data } = await apiSignIn(values);

      if (data.status) {
        const { token } = data.payload;
        dispatch(onSignInSuccess(token));

        if (data.payload) {
          dispatch(setUser(data.payload));
        }

        openNotification("Sign In Successfull!", "success");

        const redirectUrl = query.get(REDIRECT_URL_KEY);
        navigate(redirectUrl ? redirectUrl : appConfig.authenticatedEntryPath);
        return {
          status: true,
          message: "Sign In Successfull!",
        };
      }
    } catch ({ response }) {
      // console.log(response);
      return {
        status: false,
        message: response.data.payload.error,
      };
    }
  };

  const signUp = async (values) => {
    try {
      const { data } = await apiSignUp(values);

      if (data.status) {
        const { token } = data.payload;
        dispatch(onSignInSuccess(token));

        if (data.payload) {
          dispatch(setUser(data.payload));
        }

        openNotification("Sign Up Successfull!", "success");

        const redirectUrl = query.get(REDIRECT_URL_KEY);
        navigate(redirectUrl ? redirectUrl : appConfig.authenticatedEntryPath);
        return {
          status: true,
          message: "Sign Up Successfull!",
        };
      }
    } catch ({ response }) {
      // console.log(response);
      return {
        status: false,
        message: response.data.payload.error,
      };
    }
  };

  const handleSignOut = () => {
    dispatch(onSignOutSuccess());
    dispatch(setUser(initialState));
    navigate(appConfig.unAuthenticatedEntryPath);
  };

  const signOut = async () => {
    // await apiSignOut()
    handleSignOut();
  };

  const googleAuth = async () => {
    try {
      const access_token = await authWithGoogle();
      // console.log(user.accessToken);

      const { data } = await apiGooleAuth({ access_token });

      if (data.status) {
        const { token } = data.payload;
        dispatch(onSignInSuccess(token));

        if (data.payload) {
          dispatch(setUser(data.payload));
        }

        openNotification("Google Auth Successfull!", "success");

        const redirectUrl = query.get(REDIRECT_URL_KEY);
        navigate(redirectUrl ? redirectUrl : appConfig.authenticatedEntryPath);
        return {
          status: true,
          message: "Google Auth Successfull!",
        };
      }
    } catch ({ response }) {
      console.log(response);
      return {
        status: false,
        message: response.data.payload.error,
      };
    }
  };

  return {
    authenticated: token && signedIn,
    signIn,
    signUp,
    signOut,
    googleAuth,
  };
}

export default useAuth;
