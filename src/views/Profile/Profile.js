import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { injectReducer } from "store";
import reducer from "./store";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "./store/dataSlice";
import { setUsername } from "./store/stateSlice";
import { Spinner } from "components/ui";
import { ImSpinner9 } from "react-icons/im";

injectReducer("user", reducer);

const Profile = () => {
  const { id: profileId } = useParams();
  const {
    data: {
      loading,
      profile: { personal_info, account_info, social_links, joinedAt },
    },
  } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserProfile(profileId));
    dispatch(setUsername(profileId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profileId]);

  return (
    <div>
      {loading ? (
        <div className="w-full mt-10 flex justify-center items-center">
          <Spinner size={70} indicator={ImSpinner9} />
        </div>
      ) : (
        <h1>Profile</h1>
      )}
    </div>
  );
};

export default Profile;
