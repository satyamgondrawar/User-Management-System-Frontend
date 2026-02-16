import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/header/Header";


export default function MainLayout() {
    return (
        <div className="flex h-screen">

            <Sidebar />

            <div className="flex flex-col flex-1">
                <Header />

                <main className="flex-1 p-6 bg-gray-100">
                    <Outlet />
                </main>
            </div>

        </div>
    );
}
