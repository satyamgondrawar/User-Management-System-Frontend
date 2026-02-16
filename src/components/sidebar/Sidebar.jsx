import { NavLink } from "react-router-dom";
import { Home, User, Settings, Users } from "lucide-react";

export default function Sidebar() {
    const linkClass =
        "flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition";

    const activeClass = "bg-gray-800";

    return (
        <aside className="w-64 bg-gray-900 text-white h-screen p-4">
            <nav className="space-y-2">
                <NavLink
                    to="/app"
                    className={({ isActive }) =>
                        `${linkClass} ${isActive ? activeClass : ""}`
                    }
                >
                    <Home size={20} />
                    Dashboard
                </NavLink>

                <NavLink
                    to="/app/profile"
                    className={({ isActive }) =>
                        `${linkClass} ${isActive ? activeClass : ""}`
                    }
                >
                    <User size={20} />
                    Profile
                </NavLink>

                <NavLink
                    to="/app/users"
                    className={({ isActive }) =>
                        `${linkClass} ${isActive ? activeClass : ""}`
                    }
                >
                    <Users size={20} />
                    Users
                </NavLink>

                <NavLink
                    to="/app/settings"
                    className={({ isActive }) =>
                        `${linkClass} ${isActive ? activeClass : ""}`
                    }
                >
                    <Settings size={20} />
                    Settings
                </NavLink>
            </nav>
        </aside>
    );
}
