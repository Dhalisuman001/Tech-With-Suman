import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { injectReducer } from "store";
import reducer from "./store";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "./store/dataSlice";
import { setUsername } from "./store/stateSlice";
import { Spinner, Tabs } from "components/ui";
import { ImSpinner9 } from "react-icons/im";
import About from "./components/About";
import UserBlog from "./components/UserBlog";
import useResponsive from "utils/hooks/useResponsive";
import TabList from "components/ui/Tabs/TabList";
import TabNav from "components/ui/Tabs/TabNav";
import TabContent from "components/ui/Tabs/TabContent";
import ProfileCard from "./components/ProfileCard";

injectReducer("user", reducer);

const Profile = () => {
  const { id: profileId } = useParams();
  const { smaller } = useResponsive();
  const {
    loading,
    profile: { payload },
  } = useSelector((state) => state.user.data);

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
        <section className="h-cover  md:flex flex-row-reverse  gap-5 min-[1100px]:gap-12 justify-between">
          {/* Profile Section */}
          <div className="flex flex-col items-center md:items-start gap-5 min-w-[250px] md:w-[50%] md:pl-8 md:border-1 border-gray-100 md:sticky md:top-[100px] md:py-10">
            <ProfileCard
              personal_info={payload?.personal_info}
              profileId={profileId}
              account_info={payload?.account_info}
              smaller={smaller}
            />
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

          {/* Tabs */}
          {!smaller.sm && (
            <Tabs defaultValue="blog" className="w-full">
              <TabList>
                <TabNav value="blog" className="capitalize">
                  Blogs
                </TabNav>
              </TabList>
              <div className="py-6">
                <TabContent value="blog">
                  {payload?._id && <UserBlog id={payload?._id} />}
                </TabContent>
              </div>
            </Tabs>
          )}

          {/* {payload?._id && <UserBlog id={payload?._id} />} */}
        </section>
      )}
    </div>
  );
};

export default Profile;
