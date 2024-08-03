import React, { useEffect, useState } from "react";
import style from "./DarkMode.module.css";
import { BsFillMoonFill } from "react-icons/bs";
import { IoIosSunny } from "react-icons/io";
import { Switch } from 'antd';

const DarkModeBtn: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    // Function to apply dark mode
    const setDarkMode = () => {
        document.querySelector("body")?.setAttribute("data-theme", "dark");
        localStorage.setItem("selectedTheme", "dark");
        setIsDarkMode(true);
    };

    // Function to apply light mode
    const setLightMode = () => {
        document.querySelector("body")?.setAttribute("data-theme", "light");
        localStorage.setItem("selectedTheme", "light");
        setIsDarkMode(false);
    };

    // Function to apply the theme based on localStorage or system preference
    const applyTheme = () => {
        const savedTheme = localStorage.getItem("selectedTheme");

        if (savedTheme) {
            if (savedTheme === "dark") {
                setDarkMode();
            } else {
                setLightMode();
            }
        } else {
            const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
            if (prefersDarkScheme) {
                setDarkMode();
            } else {
                setLightMode();
            }
            localStorage.setItem("loaded", "true");
        }
    };

    useEffect(() => {
        applyTheme();
    }, []);

    const onChange = (checked: boolean) => {
        console.log(`Switch to ${checked ? 'Dark' : 'Light'} mode`);
        if (checked) {
            setDarkMode();
        } else {
            setLightMode();
        }
    };

    return (
        <div>
            <Switch
                checked={isDarkMode} // Sync switch state with the theme
                checkedChildren={<BsFillMoonFill className={style.sun} />}
                unCheckedChildren={<IoIosSunny className={style.sun} />}
                onChange={onChange}
            />
        </div>
    );
};

export default DarkModeBtn;
