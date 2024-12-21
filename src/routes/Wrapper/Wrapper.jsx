import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";

export default function Wrapper() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-col p-10">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
