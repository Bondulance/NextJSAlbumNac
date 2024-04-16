import Navbar from "@/components/Navbar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative bg-n-100">
      <Navbar />
      <section>{children}</section>
    </main>
  );
};

export default Layout;
