import React, { ChangeEvent, useEffect } from "react";
import style from "./DarkMode.module.css";
import { BsFillMoonFill } from "react-icons/bs";
import { IoIosSunny } from "react-icons/io";

const DarkModeBtn: React.FC = () => {

    const setDarkMode = () => {
        document.querySelector("body")?.setAttribute("data-theme", "dark");
        localStorage.setItem("selectedTheme", "dark");
    };

    const setLightMode = () => {
        document.querySelector("body")?.setAttribute("data-theme", "light");
        localStorage.setItem("selectedTheme", "light");
    };

    const toggleTheme = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            setDarkMode();
        } else {
            setLightMode();
        }
    };

    useEffect(() => {
        const selectedTheme = localStorage.getItem("selectedTheme");
        if (selectedTheme === "dark") {
            setDarkMode();
            const toggle = document.getElementById('darkmode-toggle') as HTMLInputElement;
            if (toggle) {
                toggle.checked = true;
            }
        }
    }, []);

    return (
        <div>
            <input
                className={style.dark_mode_input}
                type="checkbox"
                id="darkmode-toggle"
                onChange={toggleTheme}
            />
            <label className={style.dark_mode_label} htmlFor="darkmode-toggle">
                <IoIosSunny className={style.sun} />
                <BsFillMoonFill className={style.moon} />
            </label>
        </div>
    );
}

export default DarkModeBtn;
