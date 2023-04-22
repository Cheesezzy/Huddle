import "./Nav.module.css";
import Huddle from "/src/images/Huddle.png"
import DefaultLayout from '../../layout/DefaultLayout';

const Nav = () => {
    return (

        <DefaultLayout>
            <nav>

                <img src={Huddle} alt="Huddle" width="150px" />

                <button className="font-link">Try it free</button>

            </nav>
        </DefaultLayout>
    )
}

export default Nav
