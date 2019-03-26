import React from 'react'
import MainFooter from './MainFooter'
import '../index.css';

const FooterLayout = () => {
    return (
        <footer className="page-footer footer">
            <div className="container">
                <MainFooter/>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    © 2019 All rights reserved
                </div>
            </div>
        </footer>
    )
};

export default FooterLayout;