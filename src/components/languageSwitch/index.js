import React, { useEffect, useState } from "react";
import Switch from "react-switch";
import "./style.css";
import i18n from "../../i18n";

const Languageswitch = () => {
    const [checked, setChecked] = useState(i18n.language === "en");
    const [primaryColor, setPrimaryColor] = useState("#000000");

    useEffect(() => {
        const observer = new MutationObserver(() => {
            const newColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color')?.trim();
            if (newColor) setPrimaryColor(newColor);
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['data-theme'],
        });
        const color = getComputedStyle(document.documentElement).getPropertyValue('--primary-color')?.trim();
        if (color) setPrimaryColor(color);

        return () => observer.disconnect();
    }, []);

    const handleChange = (nextChecked) => {
        setChecked(nextChecked);
        const newLang = nextChecked ? "en" : "cs";
        i18n.changeLanguage(newLang);
    };

    return (
        <label className="switch">
            <Switch
                checked={checked}
                onChange={handleChange}
                handleDiameter={0}
                offColor={primaryColor}
                onColor={primaryColor}
                offHandleColor={primaryColor}
                onHandleColor={primaryColor}
                height={40}
                width={70}
                borderRadius={0}
                activeBoxShadow="0px 0px 1px 2px #0"
                uncheckedIcon={
                    <div className="icon">
                        <b>CZ</b>
                    </div>
                }
                checkedIcon={
                    <div className="icon">
                        <b>EN</b>
                    </div>
                }
                uncheckedHandleIcon={
                    <div className="off-handle-icon">
                        <img src="https://kapowaz.github.io/square-flags/flags/cz.svg" width="20" alt="cz"/>
                    </div>
                }
                checkedHandleIcon={
                    <div className="on-handle-icon">
                        <img src="https://kapowaz.github.io/square-flags/flags/gb.svg"  width="20" alt="gb"/>
                    </div>
                }
                id="small-radius-switch"
            />
        </label>
    );
};

export default Languageswitch;
