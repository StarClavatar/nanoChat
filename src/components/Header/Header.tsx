// import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/nanosemantics_logo_ru.svg";
import { Button } from "@consta/uikit/Button";
import { IconInfo } from "@consta/icons/IconInfo";
// import { ThemeToggler, item } from "@consta/uikit/ThemeToggler";

// type Item = "Default" | "Dark" | "Display";

// const items: Item[] = ["Default", "Dark", "Display"];

// const getItemIcon = (item: Item) => {
//   if (item === "Default") {
//     return IconSun;
//   }
//   if (item === "Dark") {
//     return IconMoon;
//   }
//   return IconLightningBolt;
// };

// const getTheme = (item: Item) => {
//   if (item === "Default") {
//     return presetGpnDefault;
//   }
//   if (item === "Dark") {
//     return presetGpnDark;
//   }
//   return presetGpnDisplay;
// };

function Header() {
//   const [theme, setTheme] = useState<item>(item[0]);

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип Наносемантика" />
      <div>
        <Button view="clear" iconLeft={IconInfo} />
        {/* <ThemeToggler
          items={items}
          value={theme}
          getItemKey={(item) => item}
          getItemLabel={(item) => item}
          getItemIcon={getItemIcon}
          onChange={({ value }) => setValue(value)}
          direction="downStartLeft"
        /> */}
      </div>
    </header>
  );
}

export default Header;
