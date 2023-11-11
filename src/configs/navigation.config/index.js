import { 
    NAV_ITEM_TYPE_TITLE, 
    NAV_ITEM_TYPE_COLLAPSE, 
    NAV_ITEM_TYPE_ITEM 
} from 'constants/navigation.constant'

const navigationConfig = [
    {
        key: 'dashboard',
		path: '/dashboard',
		title: 'Dashboard',
		translateKey: 'nav.dashboard',
		icon: 'dashboard',
		type: NAV_ITEM_TYPE_ITEM,
		authority: [],
        subMenu: []
    },
    /** Example purpose only, please remove */
  
    {
		key: 'courses',
		path: '/courses',
		title: 'Courses',
		translateKey: 'nav.courses',
		icon: 'course',
		type: NAV_ITEM_TYPE_COLLAPSE,
		authority: [],
        subMenu: [
            {
                key: 'courses.explore',
                path: '/courses-explore',
                title: 'Explore',
                translateKey: 'nav.courses.explore',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: []
            },
            {
                key: 'courses.myCourse',
                path: '/courses-my-course',
                title: 'My Course',
                translateKey: 'nav.courses.myCourse',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: []
            },
        ]
    },
	{
        key: 'schedule',
		path: '/schedule',
		title: 'Schedule',
		translateKey: 'nav.schedule',
		icon: 'timeline',
		type: NAV_ITEM_TYPE_ITEM,
		authority: [],
        subMenu: []
    },
	
	{
        key: 'bookmark',
		path: '/bookmark',
		title: 'Bookmark',
		translateKey: 'nav.bookmark',
		icon: 'bookmark',
		type: NAV_ITEM_TYPE_ITEM,
		authority: [],
        subMenu: []
    },
	{
        key: 'interests',
		path: '/interests',
		title: 'Interests',
		translateKey: 'nav.interests',
		icon: 'interests',
		type: NAV_ITEM_TYPE_ITEM,
		authority: [],
        subMenu: []
    },
	{
        key: 'help&support',
		path: '/help-support',
		title: 'Help & Support',
		translateKey: 'nav.help&support',
		icon: 'support',
		type: NAV_ITEM_TYPE_ITEM,
		authority: [],
        subMenu: []
    },
    {
		key: 'preferences',
		path: '',
		title: 'Perferences',
		translateKey: 'nav.preferences',
		icon: '',
		type: NAV_ITEM_TYPE_TITLE,
		authority: [],
		subMenu: [
            {
                key: 'preferences.aboutUs',
                path: '/preferences-about-us',
                title: 'About Us',
                translateKey: 'nav.preferences.aboutUs',
                icon: 'groupSingleMenu',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: []
            },
			{
                key: 'preferences.privacyPolicy',
                path: '/preferences-privacy-policy',
                title: 'Privacy Policy',
                translateKey: 'nav.preferences.privacyPolicy',
                icon: 'privacy',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: []
            },
			{
                key: 'preferences.feedback',
                path: '/preferences-feedback',
                title: 'Feedback',
                translateKey: 'nav.preferences.feedback',
                icon: 'feedback',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: []
            },
			{
                key: 'preferences.settings',
                path: '/preferences-settings',
                title: 'Settings',
                translateKey: 'nav.preferences.settings',
                icon: 'setting',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: []
            },
			// {
			// 	key: 'preferences.settings',
            //     path: '',
            //     title: 'Settings',
            //     translateKey: 'nav.preferences.settings',
            //     icon: 'setting',
			// 	type: NAV_ITEM_TYPE_COLLAPSE,
			// 	authority: [],
			// 	subMenu: [
			// 		{
			// 			key: 'groupMenu.collapse.item1',
			// 			path: '/group-collapse-menu-item-view-1',
			// 			title: 'Menu item 1',
			// 			translateKey: 'nav.groupMenu.collapse.item1',
			// 			icon: '',
			// 			type: NAV_ITEM_TYPE_ITEM,
			// 			authority: [],
			// 			subMenu: []
			// 		},
            //         {
			// 			key: 'groupMenu.collapse.item2',
			// 			path: '/group-collapse-menu-item-view-2',
			// 			title: 'Menu item 2',
			// 			translateKey: 'nav.groupMenu.collapse.item2',
			// 			icon: '',
			// 			type: NAV_ITEM_TYPE_ITEM,
			// 			authority: [],
			// 			subMenu: []
			// 		},
            //     ]
            // }
        ]
    }
]

export default navigationConfig