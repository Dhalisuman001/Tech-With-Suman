import { Animation, Avatar } from "components/ui";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function ProfileCard({ personal_info, account_info, profileId }) {
  const { username } = useSelector((state) => state.auth.user);
  return (
    <Animation className="flex flex-col gap-5 items-center md:items-start">
      <Avatar src={personal_info?.profile_img} size={200} shape="circle" />
      <h1 className="text-2xl font-medium">@{personal_info?.username}</h1>
      <p className=" text-lg capitalize h-6">{personal_info?.fullname}</p>
      <p className="text-lg capitalize h-6">
        {account_info?.total_posts} Blogs - {account_info?.total_reads} Reads
      </p>
      <div className="flex gap-4 mt-2">
        {username === profileId && (
          <Link
            to="settings/edit-profile"
            className="rounded-md px-3 py-2 bg-gray-100"
          >
            Edit Profile
          </Link>
        )}
      </div>
    </Animation>
  );
}

ProfileCard.propTypes = {
  personal_info: PropTypes.object,
  account_info: PropTypes.object,
  smaller: PropTypes.number,
  profileId: PropTypes.string,
};
ProfileCard.defaultProps = {
  personal_info: {},
  account_info: {},
  smaller: null,
  profileId: "",
};

export default ProfileCard;
