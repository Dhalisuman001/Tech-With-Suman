import React from 'react'
import {
    HiOutlineColorSwatch, 
	HiOutlineDesktopComputer,
    HiOutlineTemplate,
    HiOutlineViewGridAdd,
    HiOutlineHome,
    HiOutlineBookOpen,
} from 'react-icons/hi'
import {MdOutlineSpaceDashboard,MdSupportAgent,MdFeedback} from 'react-icons/md'
import {BiNotepad,BiBookmarks,BiHeart} from 'react-icons/bi'
import {BsShieldLock} from 'react-icons/bs'
import {AiOutlineSetting} from 'react-icons/ai'


const navigationIcon = {
    home: <HiOutlineHome />,
    singleMenu: <HiOutlineViewGridAdd />,
    collapseMenu: <HiOutlineTemplate />,
    groupSingleMenu: <HiOutlineDesktopComputer />,
    groupCollapseMenu: <HiOutlineColorSwatch />,
    dashboard:<MdOutlineSpaceDashboard/>,
    course:<HiOutlineBookOpen/>,
    timeline:<BiNotepad/>,
    support:<MdSupportAgent/>,
    bookmark:<BiBookmarks/>,
    interests:<BiHeart/>,
    privacy:<BsShieldLock/>,
    setting:<AiOutlineSetting/>,
    feedback:<MdFeedback/>
}

export default navigationIcon