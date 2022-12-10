import React, { Fragment } from "react";
import Header from "./header";

type LayoutProps = {
    children: React.ReactNode
}

const Layout = ({ children }:LayoutProps ) => {
    return (
        <Fragment>
            <Header/>
            <main>{children}</main>
        </Fragment>
    )
}

export default Layout;