import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-blue-600 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">
                    <NavLink to="/users" end={true}>
                        API&SPA
                    </NavLink>
                </h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <NavLink
                                to="/users"
                                end={true}
                                className="hover:text-blue-300">
                                Users
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/albums"
                                end={true}
                                className="hover:text-blue-300">
                                Albums
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
