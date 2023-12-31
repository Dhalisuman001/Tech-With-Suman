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
import { getLeatestBlog } from "./store/dataSlice";

injectReducer("home", reducer);

const Home = () => {
  const { smaller } = useResponsive();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLeatestBlog());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.log(larger, smaller);
  return (
    <div className="w-full h-full">
      {!smaller.sm ? (
        <section className="h-cover flex justify-center gap-6">
          {/* Leatest Blog */}
          <div className="w-full">
            <Latest />
          </div>
          {/* Filters and Trending Blog */}
          {/* <div className="w-full">Trending</div> */}
        </section>
      ) : (
        <Tabs defaultValue="home">
          <TabList>
            <TabNav value="home">Home</TabNav>
            <TabNav value="trending">Trending</TabNav>
          </TabList>
          <div className="py-6">
            <TabContent value="home">
              <Latest />
            </TabContent>
            <TabContent value="trending">Trending</TabContent>
          </div>
        </Tabs>
      )}
    </div>
  );
};

export default Home;
