import React from 'react';
import Navbar from '../Components/Common/Navbar';
import Footer from '../Components/Common/Footer';

const NonAuthLayout = (props: any) => {
    return (
        <React.Fragment>
            <div className="landing-page dark"> {/* Standardizing the wrapper */}
                <Navbar />
                <div className="main-content">
                    {props.children}
                </div>
                <Footer />
            </div>
        </React.Fragment>
    );
};

export default NonAuthLayout;
