import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { injectReducer } from "store";
import reducer from "./store";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "./store/dataSlice";
import { setUsername } from "./store/stateSlice";
import { Avatar, Spinner, Tabs } from "components/ui";
import { ImSpinner9 } from "react-icons/im";
import About from "./components/About";
import UserBlog from "./components/UserBlog";
import useResponsive from "utils/hooks/useResponsive";
import TabList from "components/ui/Tabs/TabList";
import TabNav from "components/ui/Tabs/TabNav";
import TabContent from "components/ui/Tabs/TabContent";

injectReducer("user", reducer);

const Profile = () => {
  const { id: profileId } = useParams();
  const { smaller } = useResponsive();
  const {
    loading,
    profile: { payload },
  } = useSelector((state) => state.user.data);
  const { username } = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserProfile(profileId));
    dispatch(setUsername(profileId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profileId]);
  // console.log(personal_info);

  return (
    <div className="w-full h-full">
      {loading ? (
        <div className="w-full mt-10 flex justify-center items-center">
          <Spinner size={70} indicator={ImSpinner9} />
        </div>
      ) : (
        <section className="h-cover  md:flex flex-row-reverse  gap-5 min-[1100px]:gap-12">
          <div className="flex flex-col items-center md:items-start gap-5 min-w-[250px]">
            <Avatar
              src={payload?.personal_info?.profile_img}
              size={200}
              shape="circle"
            />
            <h1 className="text-2xl font-medium">
              @{payload?.personal_info?.username}
            </h1>
            <p className="text-xl capitalize h-6">
              {payload?.personal_info?.fullname}
            </p>
            <p className="text-xl capitalize h-6">
              {payload?.account_info?.total_posts} Blogs -{" "}
              {payload?.account_info?.total_reads} Reads
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
            {!smaller.sm && (
              <About
                className="max-md:hidden"
                bio={payload?.personal_info?.bio}
                social_links={payload?.social_links}
                joinedAt={payload?.joinedAt}
              />
            )}
            {smaller.sm && (
              <Tabs defaultValue="blog" className="w-full">
                <TabList>
                  <TabNav value="blog" className="capitalize">
                    Blogs
                  </TabNav>
                  {smaller.sm && <TabNav value="about">About </TabNav>}
                </TabList>
                <div className="py-6">
                  <TabContent value="blog">
                    {payload?._id && <UserBlog id={payload?._id} />}
                  </TabContent>
                  <TabContent value="about">
                    <About
                      className="max-md:hidden"
                      bio={payload?.personal_info?.bio}
                      social_links={payload?.social_links}
                      joinedAt={payload?.joinedAt}
                    />
                  </TabContent>
                </div>
              </Tabs>
            )}
          </div>
          {/* {payload?._id && <UserBlog id={payload?._id} />} */}
        </section>
      )}
    </div>
  );
};

export default Profile;
