import React from "react";
import Header from "../layout/header";
import Sidebar from "../layout/sidebar";

export const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Header />
            <div className="flex border-collapse bg-[#161616] h-[90vh]">
                <Sidebar />
                <div className="bg-[#161616] flex-1 bg-secondary/10 pb-1 h-full">
                    {children}
                </div>
            </div>
        </div>
    );
};