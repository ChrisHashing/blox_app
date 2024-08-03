import React, { ChangeEvent, useEffect, useState } from "react";
import style from "./DarkMode.module.css";
import { BsFillMoonFill } from "react-icons/bs";
import { IoIosSunny } from "react-icons/io";
import { Switch } from 'antd';

const DarkModeBtn: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    const setDarkMode = () => {
        document.querySelector("body")?.setAttribute("data-theme", "dark");
        localStorage.setItem("selectedTheme", "dark");
        setIsDarkMode(true);
    };

    const setLightMode = () => {
        document.querySelector("body")?.setAttribute("data-theme", "light");
        localStorage.setItem("selectedTheme", "light");
        setIsDarkMode(false);
    };

    const toggleTheme = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            setDarkMode();
        } else {
            setLightMode();
        }
    };

    const applyTheme = () => {
        // Check for a saved theme in localStorage
        const savedTheme = localStorage.getItem("selectedTheme");

        if (savedTheme) {
            // Apply the saved theme
            if (savedTheme === "dark") {
                setDarkMode();
            } else {
                setLightMode();
            }
        } else {
            // No saved theme, use system preference
            const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
            if (prefersDarkScheme) {
                setDarkMode();
            } else {
                setLightMode();
            }
            // Mark that the theme has been applied
            localStorage.setItem("loaded", "true");
        }
    };

    useEffect(() => {
        applyTheme();
    }, []);
    const onChange = (checked:any) => {
        console.log(`switch to ${checked}`);
        if (checked) {
            setDarkMode();
        } else {
            setLightMode();
        }
    };
    return (
        <div>
            <Switch
                checkedChildren={< BsFillMoonFill className={style.sun} /> }
                unCheckedChildren={<IoIosSunny className={style.sun} />}
                onChange={onChange}
            />
        </div>
    );
};

export default DarkModeBtn;
