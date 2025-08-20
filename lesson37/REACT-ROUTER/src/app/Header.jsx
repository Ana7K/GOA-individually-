import React from "react";
import { Link, NavLink } from "react-router";

export default function Header() {
  return (
    <div>
      <ul>
        <li>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "red" : "black",
            })}
            to={"/about"}
          >
            about
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "red" : "black",
            })}
            to={"/post"}
          >
            post
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "red" : "black",
            })}
            to={"/create"}
          >
            create
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "red" : "black",
            })}
            to={"/create/settings"}
          >
            settings
          </NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>contact</NavLink>
        </li>
      </ul>
    </div>
  );
}
