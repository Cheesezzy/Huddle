import Button from "./Button"
import Huddle from "/src/images/Huddle.png";
import email from "/src/images/email.png";
import phone from "/src/images/phone.png";
import location from "/src/images/location.png";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { TiSocialInstagramCircular } from "react-icons/ti";
import DefaultLayout from '../../layout/DefaultLayout';


const Footer = () => {
    return (
        <div className="footer-container">
            <DefaultLayout>
                <div className="footer-dis">
                    <div className="footer-con">
                        <p>Ready to build Your Community?</p>
                        <Button />
                    </div>
                </div>


                <div className="footer">
                    <img src={Huddle} alt="Huddle" style={{ filter: "brightness(0) invert(1)" }} width="150px" />

                    <div className="final-footer">
                        <div className="semi-footer">
                            <ul className="footer-ul">
                                <li>
                                    <img src={location} alt="location" className="logo-sm" />
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque cum perspiciatis tempora provident itaque non aliquid, iusto mollitia quisquam modi, error in eveniet ipsa nihil! Dolorum quos temporibus quia possimus!</p>
                                </li>
                                <li>
                                    <img src={phone} alt="phone" className="logo-sm" />
                                    <p>+1-543-123-4567</p>
                                </li>
                                <li>
                                    <img src={email} alt="email" className="logo-sm" />
                                    <p>example@flyo.com</p>
                                </li>
                            </ul>
                        </div>

                        <div className="foot">
                            <ul className="footer-about">
                                <li>
                                    About Us
                                </li>
                                <li>
                                    What We Do
                                </li>
                                <li>
                                    FAQ
                                </li>
                            </ul>

                            <ul className="footer-career">
                                <li>
                                    Career
                                </li>
                                <li>
                                    Blog
                                </li>
                                <li>
                                    Contact Us
                                </li>
                            </ul>

                            <ul className="footer-icon">
                                <li>
                                    <TiSocialFacebookCircular />
                                </li>
                                <li>
                                    <TiSocialTwitterCircular />
                                </li>
                                <li>
                                    <TiSocialInstagramCircular />
                                </li>
                            </ul>
                        </div>
                    </div>


                </div>
                <p className="btm">@ copyright PACHI 2023.</p>
            </DefaultLayout>
        </div>

    )
}

export default Footer
