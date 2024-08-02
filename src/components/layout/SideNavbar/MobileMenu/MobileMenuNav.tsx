"use client";

import React from 'react';
import Link from 'next/link';
import styles from './MobileMenu.module.css';
import { FaUserCircle, FaRegFolder, FaShareAlt, FaRegBell, FaTwitter, FaDiscord, FaTelegramPlane } from "react-icons/fa";
import { IoGlobeOutline, IoMenu } from "react-icons/io5";
import DarkModeBtn from '../DarkModeBtn/DarkModeBtn';

interface MobileMenuNavProps {
    isMobileMenuOpen: boolean;
    toggleMobileMenu: () => void;
}

const MobileMenuNav: React.FC<MobileMenuNavProps> = ({ isMobileMenuOpen, toggleMobileMenu }) => {
    return (
        <>
            <div className={styles.bottomNav}>
                <div className={styles.mobileMenuButton} onClick={toggleMobileMenu}>
                    <IoMenu size={25} />
                </div>
                <Link href="/profile" className={styles.navItem}>
                    <span className={styles.icon}><FaUserCircle size={20} /></span>
                </Link>
                <Link href="/explorer" className={styles.navItem}>
                    <span className={styles.icon}><FaRegFolder size={20} /></span>
                </Link>
                <Link href="/defi" className={styles.navItem}>
                    <span className={styles.icon}><FaShareAlt size={20} /></span>
                </Link>
                <Link href="/alerts" className={styles.navItem}>
                    <span className={styles.icon}><FaRegBell size={20} /></span>
                </Link>
            </div>
            <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>

                <div className={styles.wrapper}>
                    <div className={styles.profile}>
                        <div className={styles.user}>
                            <FaUserCircle size={30} />
                            <Link href="/profile">Profile</Link>
                        </div>
                    
                            <Link href="/account">My Account</Link>
                            <Link href="/portfolio">Portfolio</Link>
                    </div>

                    <div className={styles.developer}>
                        <IoGlobeOutline size={26} />  Developers
                    </div>
                    <div className={styles.social}>
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
                    <div className={styles.theme}>
                        Theme
                        <DarkModeBtn />
                    </div>

                </div>


            </div>
        </>
    );
};

export default MobileMenuNav;
