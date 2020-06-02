import React from "react";
import { fallDown as Menu } from "react-burger-menu";
import './SideBar.scss';
import { NavLink } from 'react-router-dom';

type Props = {
  outerContainerId: string,
  pageWrapId: string,
}

export default (props: Props) => {
  return (
    <Menu {...props}>
      <ul>
        <li>
          <NavLink className="nav__link hover-shadow hover-color animated" to="/" exact>
            <span>H</span>
            <span>o</span>
            <span>m</span>
            <span>e</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="nav__link hover-shadow hover-color animated" to="/phones">
            <span>P</span>
            <span>h</span>
            <span>o</span>
            <span>n</span>
            <span>e</span>
            <span>s</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="nav__link hover-shadow hover-color animated" to="/tablets">
          <span>T</span>
          <span>a</span>
          <span>b</span>
          <span>l</span>
          <span>e</span>
          <span>t</span>
          <span>s</span>
        </NavLink>
      </li>
      <li>
        <NavLink className="nav__link hover-shadow hover-color animated" to="/accessories">
          <span>A</span>
          <span>c</span>
          <span>c</span>
          <span>e</span>
          <span>s</span>
          <span>s</span>
          <span>o</span>
          <span>r</span>
          <span>i</span>
          <span>e</span>
          <span>s</span>
        </NavLink>
      </li>
      </ul>
    </Menu>
  );
};
