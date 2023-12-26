import React from "react";
import { Avatar, Dropdown } from "components/ui";
import withHeaderItem from "utils/hoc/withHeaderItem";
import useAuth from "utils/hooks/useAuth";
// import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import classNames from "classnames";
import { HiOutlineLogout } from "react-icons/hi";
import { useSelector } from "react-redux";
import { BsFillMenuButtonWideFill, BsPencilSquare } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { AiOutlineSetting } from "react-icons/ai";

const dropdownItemList = [
  {
    label: "Write",
    path: "/blog-editor",
    icon: <BsPencilSquare />,
  },
  {
    label: "Profile",
    path: "/home",
    icon: <FaRegUserCircle />,
  },
  {
    label: "Dashboard",
    path: "/home",
    icon: <BsFillMenuButtonWideFill />,
  },
  {
    label: "Settings",
    path: "/home",
    icon: <AiOutlineSetting />,
  },
];

export const UserDropdown = ({ className }) => {
  // bind this
  const { fullname, profile_img, username } = useSelector(
    (state) => state.auth.user
  );

  const { signOut } = useAuth();

  const UserAvatar = (
    <div className={classNames(className, "flex items-center gap-2")}>
      <Avatar size={32} shape="circle" src={profile_img} />
      <div className="hidden md:block">
        <div className="text-xs capitalize">{fullname}</div>
        <div className="font-bold">{username}</div>
      </div>
    </div>
  );

  return (
    <div>
      <Dropdown
        menuStyle={{ minWidth: 240 }}
        renderTitle={UserAvatar}
        placement="bottom-end"
      >
        <Dropdown.Item variant="header">
          <div className="py-2 px-3 flex items-center gap-2">
            <Avatar shape="circle" src={profile_img} />
            <div>
              <div className="font-bold text-gray-900 dark:text-gray-100">
                {fullname}
              </div>
              <div className="text-xs">@{username}</div>
            </div>
          </div>
        </Dropdown.Item>
        <Dropdown.Item variant="divider" />
        {dropdownItemList.map((item) => (
          <Dropdown.Item
            eventKey={item.label}
            key={item.label}
            className="mb-1"
          >
            <Link className="flex gap-2 items-center" to={item.path}>
              <span className="text-xl opacity-50">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          </Dropdown.Item>
        ))}
        {/* <Dropdown.Item variant="divider" /> */}
        <Dropdown.Item onClick={signOut} eventKey="Sign Out">
          <div className="flex gap-2">
            <span className="text-xl opacity-50">
              <HiOutlineLogout />
            </span>
            <div>
              <span>Sign Out</span>
            </div>
          </div>
        </Dropdown.Item>
      </Dropdown>
    </div>
  );
};

export default withHeaderItem(UserDropdown);
