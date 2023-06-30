import { FC } from "react";
import style from "./Burger.module.scss";

interface BurgerProps {
  setMenuOpen: (v: boolean) => void;
  menuOpen: boolean;
}

const Burger: FC<BurgerProps> = ({ setMenuOpen, menuOpen }) => {
  return (
    <div
      className={style.hamburger__wrap}
      onClick={() => setMenuOpen(!menuOpen)}
    >
      <div className={style.hamburger + " " + (menuOpen ? style.open : "")}>
        <div className={style.line + " " + style.line__one}></div>
        <div className={style.line + " " + style.line__middle}></div>
        <div className={style.line + " " + style.line__three}></div>
      </div>
    </div>
  );
};

export default Burger;
