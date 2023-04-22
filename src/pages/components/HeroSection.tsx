import Button from "./Button"
import "./HeroSection.module.css"
import Messaging from "../../images/Messaging.png"
import DefaultLayout from '../../layout/DefaultLayout';

const HeroSection = () => {
    return (
        <DefaultLayout>
            <div className="hero-container">
                <div className="hero">
                    <p className="font-hero"> Build The Community <br /> Your Fans Will Love </p>

                    <p>
                        <span className="font-p">
                            Huddle re-imagines the way we build communities. You have a voice, but so does your audience.
                            Create connections with your users as you engage in genuine discussion.
                        </span>
                    </p>

                    <Button />
                </div>

                <div className="img">
                    <img className="image" src={Messaging} alt="messaging" />
                </div>
            </div>
        </DefaultLayout>

    )
}

export default HeroSection
