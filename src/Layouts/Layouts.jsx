import React from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";

const Layouts = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto px-3 md:px-0 min-h-[calc(100vh-288px)]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layouts;
