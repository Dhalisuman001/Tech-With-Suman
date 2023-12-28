import React from "react";
import Header from "components/template/Header";
import Views from "views";
import Logo from "assets/img/logo.png";
import UserDropdown from "components/template/UserDropdown";
import Search from "components/template/Search";
import Notification from "components/template/Notification";
const HeaderActionsStart = () => {
  return (
    <>
      <img src={Logo} className="w-10" alt="logo" />
    </>
  );
};
const HeaderActionsEnd = () => {
  return (
    <>
      <Search />
      <Notification />
      <UserDropdown hoverable={false} />
    </>
  );
};

const BlankLayout = (props) => {
  return (
    <div className="app-layout-blank flex flex-auto flex-col h-[100vh]">
      <Header
        className="shadow"
        headerStart={<HeaderActionsStart />}
        headerEnd={<HeaderActionsEnd />}
      />
      <Views {...props} />
    </div>
  );
};

export default BlankLayout;
