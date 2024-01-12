import React, { useMemo } from "react";
import Header from "components/template/Header";
import Views from "views";
import Logo from "assets/img/logo.png";
import UserDropdown from "components/template/UserDropdown";
import Search from "components/template/Search";
import Notification from "components/template/Notification";
import { useSelector } from "react-redux";
// import { GoToSignIn } from "components/ui";
const HeaderActionsStart = () => {
  return (
    <>
      <img src={Logo} className="w-10" alt="logo" />
    </>
  );
};
const HomeNav = () => {
  return (
    <>
      <Search />
      <Notification />
      <UserDropdown hoverable={false} />
    </>
  );
};
const EditorNav = () => {
  return <></>;
};

const BlankLayout = (props) => {
  const {
    common: { currentRouteKey },
  } = useSelector((state) => state.base);

  const HeaderEnd = useMemo(() => {
    if (currentRouteKey === "home") {
      return <HomeNav />;
    }
    if (currentRouteKey === "editor-blog") {
      return <EditorNav />;
    }
  }, [currentRouteKey]);

  return (
    <div className="app-layout-blank flex flex-auto flex-col h-[100vh]">
      {/* <GoToSignIn /> */}
      <Header
        className="shadow"
        headerStart={<HeaderActionsStart />}
        headerEnd={HeaderEnd}
      />
      <Views {...props} />
    </div>
  );
};

export default BlankLayout;
