import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as TbIcons from 'react-icons/tb';
import * as MdIcons from 'react-icons/md';


export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Merchant',
    path: '/merchant',
    icon: <AiIcons.AiOutlineUsergroupAdd />,
    cName: 'nav-text'
  },
  {
    title: 'Products',
    path: '/products',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Customer',
    path: '/customer',
    icon: <AiIcons.AiOutlineUser />,
    cName: 'nav-text'
  },
  {
    title: 'Setting',
    path: '/setting',
    icon: <AiIcons.AiFillSetting />,
    cName: 'nav-text'
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: <TbIcons.TbReportSearch />,
    cName: 'nav-text'
  },
  {
    title: 'Subscription',
    path: '/subscription',
    icon: <MdIcons.MdOutlineUnsubscribe />,
    cName: 'nav-text'
  }
];
