import React from "react";
// import VerticalLayout from "./VerticalLayouts";
// import HorizontalLayout from "./HorizontalLayout";
// import NonAuthLayout from "./NonAuthLayout";

// For now, just a wrapper
const Layout = (props: any) => {
    return (
        <div id="layout-wrapper">
            {/* <Header /> */}
            {/* <Sidebar /> */}
            <div className="main-content">
                {props.children}
                {/* <Footer /> */}
            </div>
        </div>
    );
};

export default Layout;
