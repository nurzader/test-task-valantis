import React from 'react';
import './footer.scss';
import logo from '../../assets/images/logo.png';
import {FacebookIcon, GitIcon, InstagramIcon, TwitterIcon} from '../../assets/icons';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <hr className="hr" />
                <div className="footer__row">
                    <div className="footer__col">
                        <div className="footer__logo">
                            <img src={logo} alt="logo" className="logo" />
                        </div>
                        <p className="gray-600">
                            Shop our entire lineup of fine faves in store, get styled and join the
                            Fine Crew.
                        </p>
                        <div className="footer__socials">
                            <span>
                                <TwitterIcon />
                            </span>
                            <span>
                                <FacebookIcon />
                            </span>
                            <span>
                                <InstagramIcon />
                            </span>
                            <span>
                                <GitIcon />
                            </span>
                        </div>
                    </div>
                    <div className="footer__col">
                        <h5 className="green">Stores & Services</h5>
                        <ul>
                            <li>Stories</li>
                            <li>Pricing Studio</li>
                            <li>Styling Appointments</li>
                        </ul>
                    </div>
                    <div className="footer__col">
                        <h5 className="green">Help</h5>
                        <ul>
                            <li>Shipping</li>
                            <li>Returns + Exchange</li>
                            <li>Warranty</li>
                            <li>All FAQ </li>
                        </ul>
                    </div>
                    <div className="footer__col">
                        <h5 className="green">Resources</h5>
                        <ul>
                            <li>Jewelry Care</li>
                            <li>Ring Sizer</li>
                            <li>Pricing Aftercare</li>
                            <li>Style Edit</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
