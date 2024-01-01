import { Tabs } from "components/ui";
import TabContent from "components/ui/Tabs/TabContent";
import TabList from "components/ui/Tabs/TabList";
import TabNav from "components/ui/Tabs/TabNav";
import React, { useEffect } from "react";
import useResponsive from "utils/hooks/useResponsive";
import Latest from "./components/Latest";
import { injectReducer } from "store";
import reducer from "./store";
import { useDispatch } from "react-redux";
import { getLeatestBlog, getTrendingBlog } from "./store/dataSlice";
import Trending from "./components/Trending";
import { MdOutlineTrendingUp } from "react-icons/md";
import Tags from "./components/Tags";

injectReducer("home", reducer);

const Home = () => {
  const { smaller } = useResponsive();
  const dispatch = useDispatch();
  // const

  useEffect(() => {
    dispatch(getLeatestBlog());
    dispatch(getTrendingBlog());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.log(larger, smaller);
  return (
    <div className="w-full h-full">
      <section className="h-cover flex justify-between gap-6">
        {/* Leatest Blog */}
        <div>
          <Tabs defaultValue="home">
            <TabList>
              <TabNav value="home">Home</TabNav>
              <TabNav value="trending">Trending</TabNav>
            </TabList>
            <div className="py-6">
              <TabContent value="home">
                <Latest />
              </TabContent>
              <TabContent value="trending">
                <Trending />
              </TabContent>
            </div>
          </Tabs>
        </div>
        {/* Filters and Trending Blog */}
        {!smaller.sm && (
          <div className="min-w-[40%] lg:min-w-[400px] max-w-min border-l border-gray-300 pl-2">
            <div className="flex flex-col gap-10">
              <Tags />
            </div>
            <div>
              <h1 className=" font-medium text-xl mb-8 flex">
                Trending <MdOutlineTrendingUp />
              </h1>
              <Trending />
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
