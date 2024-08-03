"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './SideNavbar.module.css';
import DarkModeBtn from './DarkModeBtn/DarkModeBtn';
import { Collapse, Tooltip } from 'antd';
import { FaDiscord, FaInfoCircle, FaTelegramPlane, FaTwitter, FaUserCircle, FaRegFolder, FaShareAlt, FaRegBell } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoGlobeOutline } from 'react-icons/io5';
import MobileMenuNav from './MobileMenu/MobileMenuNav';

const SideNavbar: React.FC = () => {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProfileExpanded, setIsProfileExpanded] = useState(false);

    // Function to handle resize and update the collapse state
    const handleResize = () => {
        setIsCollapsed(window.innerWidth < 1024);
    };

    useEffect(() => {
        // Set initial state based on window width
        handleResize();
        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleProfileMenu = () => {
        setIsProfileExpanded(!isProfileExpanded);
    };

    return (
        <div className={styles.container}>
            <nav className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : ''}`}>
                <div className={styles.toggleButton} onClick={toggleSidebar}>
                    {isCollapsed ? <IoIosArrowForward size={25} className={styles.ArrowForward} /> : <IoIosArrowBack className={styles.ArrowBack} size={25} />}
                </div>
                <ul className={styles.navList}>
                    {isCollapsed ? (
                        
                        <Tooltip color={'white'} placement="right" title={
                            <ul className={styles.subNavList}>
                                <li><Link className={styles.link_tag} href="/account">My Account</Link></li>
                                <li><Link className={styles.link_tag} href="/portfolio">Portfolio</Link></li>
                            </ul>
                        }>
                            <span className={styles.icon_user}><FaUserCircle size={26} /></span>
                        </Tooltip>
                    ) : (
                        <li>
                            <Collapse
                                expandIcon={() => null}
                                className={styles.noBg}
                                size="small"
                                items={[
                                    {
                                        key: '1',
                                        label: (
                                            <Link href="/portfolio">
                                                <div className={styles.menuItem} onClick={toggleProfileMenu}>
                                                    <span className={styles.icon}><FaUserCircle size={26} /></span>
                                                    {!isCollapsed && 'Profile'}
                                                </div>
                                            </Link>
                                        ),
                                        children: (
                                            <ul className={styles.subNavList}>
                                                <li><Link href="/account">My Account</Link></li>
                                                <li><Link href="/portfolio">Portfolio</Link></li>
                                            </ul>
                                        ),
                                    },
                                ]}
                            />
                        </li>
                    )}

                    {/* <li className={styles.sidebar_link}>
                        <Link href="/explorer">
                            <span className={styles.icon}><FaUserCircle size={26} /></span>
                            {!isCollapsed && 'Explorer'}
                        </Link>
                    </li> */}

                    <li className={styles.sidebar_link}>
                        <Link href="/explorer">
                            <span className={styles.icon}><FaRegFolder size={26} /></span>
                            {!isCollapsed && 'Explorer'}
                        </Link>
                    </li>
                    <li className={styles.sidebar_link}>
                        <Link href="/defi">
                            <span className={styles.icon}><FaShareAlt size={26} /></span>
                            {!isCollapsed && 'DeFi'}
                        </Link>
                    </li>
                    <li className={styles.sidebar_link}>
                        <Link href="#">
                            <span className={styles.icon}><FaRegBell size={26} /></span>
                            {!isCollapsed && 'Alerts'}
                        </Link>
                    </li>
                    <li className={styles.sidebar_link}>
                        <Link href="#">
                            <span className={styles.icon}><IoGlobeOutline size={26} /></span>
                            {!isCollapsed && 'Developers'}
                        </Link>
                    </li>
                </ul>
                <div className={styles.footer}>
                    {isCollapsed ? (
                        <div className={styles.collapseFooterIcon}>
                            {isCollapsed && (
                                <Tooltip color={'white'} placement="right" title={
                                    <ul className={styles.subNavList}>
                                        <div className={styles.tooltip}>
                                            <div className={styles.theme}>Theme:<DarkModeBtn /></div>
                                            <div className={styles.socialIcons}>
                                                <a href="https://twitter.com" className={styles.socialIcon} target="_blank" rel="noopener noreferrer">
                                                    <FaTwitter />
                                                </a>
                                                <a href="https://discord.com" className={styles.socialIcon} target="_blank" rel="noopener noreferrer">
                                                    <FaDiscord />
                                                </a>
                                                <a href="https://t.me" className={styles.socialIcon} target="_blank" rel="noopener noreferrer">
                                                    <FaTelegramPlane />
                                                </a>
                                            </div>
                                            <div className={styles.footerText}>
                                                Privacy Policy | Terms of Use
                                            </div>
                                            <div className={styles.footerText}>
                                                © Blox Solutions, LLC - 2024
                                            </div>
                                        </div>
                                    </ul>
                                }>
                                    <span className={styles.icon_user}><FaInfoCircle size={30} /></span>
                                </Tooltip>
                            )}
                        </div>
                    ) : (
                        <div>
                            <div className={styles.socialIcons}>
                                <a href="https://twitter.com" className={styles.socialIcon} target="_blank" rel="noopener noreferrer">
                                    <FaTwitter />
                                </a>
                                <a href="https://discord.com" className={styles.socialIcon} target="_blank" rel="noopener noreferrer">
                                    <FaDiscord />
                                </a>
                                <a href="https://t.me" className={styles.socialIcon} target="_blank" rel="noopener noreferrer">
                                    <FaTelegramPlane />
                                </a>
                            </div>
                            <div className={styles.footerText}>
                                Privacy Policy | Terms of Use
                            </div>
                            <div className={styles.footerText}>
                                © Blox Solutions, LLC - 2024
                            </div>
                        </div>
                    )}
                    {!isCollapsed && <DarkModeBtn />}
                </div>
            </nav>
            <div className={styles.bottomNav}>
                <MobileMenuNav isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />
            </div>
        </div>
    );
};

export default SideNavbar;
