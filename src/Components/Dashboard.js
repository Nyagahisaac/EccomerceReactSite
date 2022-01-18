import React from 'react'
import "./dashboard.css"
import { NotificationsNone, Language, Settings, PermIdentity, Storefront, TrendingUp } from '@material-ui/icons'
import {
    LineStyle,
    Timeline,
    AttachMoney,
    BarChart,
    MailOutline,
    DynamicFeed,
    ChatBubbleOutline,
    WorkOutline,
    Report,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { FeaturedInfo } from './FeaturedInfo';
import { Chart } from './Chart';
import { userData } from './dummyData';
import { WidgetSm } from './WidgetSm';
import { WidgetLg } from './WidgetLg';
import { UserList } from './UserList';




export const Dashboard = () => {

    const loading = (
        <div className='pt-3 text-center '>
            <div className='sk-spinner sk-spinner-pulse'></div>
        </div>
    );


    return (
        <div className='dashboard'>
            <div className='dashboardWrapper'>
                <div className='topleft'>
                    <span className='logo' >Eco-admin</span>
                </div>
                <div className=' text-center '>
                    <div class="sk-circle">
                        <div class="sk-circle1 sk-child"></div>
                        <div class="sk-circle2 sk-child"></div>
                        <div class="sk-circle3 sk-child"></div>
                        <div class="sk-circle4 sk-child"></div>
                        <div class="sk-circle5 sk-child"></div>
                        <div class="sk-circle6 sk-child"></div>
                        <div class="sk-circle7 sk-child"></div>
                        <div class="sk-circle8 sk-child"></div>
                        <div class="sk-circle9 sk-child"></div>
                        <div class="sk-circle10 sk-child"></div>
                        <div class="sk-circle11 sk-child"></div>
                        <div class="sk-circle12 sk-child"></div>
                    </div>
                </div>
                <div className='topright '>
                    <div className='topbarIconContainer'>
                        <NotificationsNone />
                        <span className='topIconBadge'>1</span>
                    </div>
                    <div className='topbarIconContainer'>
                        <Language />
                        <span className='topIconBadge'>1</span>
                    </div>
                    <div className='topbarIconContainer'>
                        <Settings />
                    </div>
                    {/* <img src="images/izooh.jpeg" alt='' /> */}
                </div>
            </div>

            <div className="sidebar">
                <div className="sidebarWrapper">
                    <div className="sidebarMenu">
                        <h3 className="sidebarTitle">Dashboard</h3>
                        <ul className="sidebarList">
                            <Link to="/" className="link">
                                <li className="sidebarListItem active">
                                    <LineStyle className="sidebarIcon" />
                                    Home
                                </li>
                            </Link>
                            <li className="sidebarListItem">
                                <Timeline className="sidebarIcon" />
                                Analytics
                            </li>
                            <li className="sidebarListItem">
                                <TrendingUp className="sidebarIcon" />
                                Sales
                            </li>
                        </ul>
                    </div>
                    <div className="sidebarMenu">
                        <h3 className="sidebarTitle">Quick Menu</h3>
                        <ul className="sidebarList">
                            <Link to="/userList" className="link">
                                <li className="sidebarListItem">
                                    <PermIdentity className="sidebarIcon" />
                                    Users
                                </li>
                            </Link>
                            <Link to="/products" className="link">
                                <li className="sidebarListItem">
                                    <Storefront className="sidebarIcon" />
                                    Products
                                </li>
                            </Link>
                            <li className="sidebarListItem">
                                <AttachMoney className="sidebarIcon" />
                                Transactions
                            </li>
                            <li className="sidebarListItem">
                                <BarChart className="sidebarIcon" />
                                Reports
                            </li>
                        </ul>
                    </div>
                    <div className="sidebarMenu">
                        <h3 className="sidebarTitle">Notifications</h3>
                        <ul className="sidebarList">
                            <li className="sidebarListItem">
                                <MailOutline className="sidebarIcon" />
                                Mail
                            </li>
                            <li className="sidebarListItem">
                                <DynamicFeed className="sidebarIcon" />
                                Feedback
                            </li>
                            <li className="sidebarListItem">
                                <ChatBubbleOutline className="sidebarIcon" />
                                Messages
                            </li>
                        </ul>
                    </div>
                    <div className="sidebarMenu">
                        <h3 className="sidebarTitle">Staff</h3>
                        <ul className="sidebarList">
                            <li className="sidebarListItem">
                                <WorkOutline className="sidebarIcon" />
                                Manage
                            </li>
                            <li className="sidebarListItem">
                                <Timeline className="sidebarIcon" />
                                Analytics
                            </li>
                            <li className="sidebarListItem">
                                <Report className="sidebarIcon" />
                                Reports
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='others ' >
                    < FeaturedInfo />
                    < Chart data={userData} title='User Analytics' grid dataKey='Active User' />
                    <div className='container'>
                        <WidgetSm />
                    </div>
                </div>

            </div>

        </div>

    )
}
