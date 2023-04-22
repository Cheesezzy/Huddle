import card1 from '../../images/card1.png';
import card2 from '../../images/card2.png';
import card3 from '../../images/card3.png';
import DefaultLayout from '../../layout/DefaultLayout';
import { details } from './CardData';

const Card = () => {
    return (
        <div className='wrapper'>
            <DefaultLayout>
                <div className="card-container">

                    <div className='img'>
                        <img className='image' src={card1} alt="card1" />
                    </div>

                    <div className='text-container'>
                        <h3 className='card-h1'>Grow Together</h3>
                        <p className='card-p'>
                            Generate meaningful discussion with your audience and build
                            a strong, loyal community. Think of the insightful conversations
                            you miss out on with a feeback form.
                        </p>
                    </div>
                </div>

                <div className="card-container-rev">

                    <div className='img'>
                        <img className='image' src={card2} alt="card1" />
                    </div>

                    <div className='text-container'>
                        <h3 className='card-h1'>Flowing Conversations</h3>
                        <p className='card-p'>
                            Generate meaningful discussion with your audience and build
                            a strong, loyal community. Think of the insightful conversations
                            you miss out on with a feeback form.
                        </p>
                    </div>
                </div>

                <div className="card-container">

                    <div className='img'>
                        <img className='image' src={card3} alt="card1" />
                    </div>

                    <div className='text-container'>
                        <h3 className='card-h1'>Your Users</h3>
                        <p className='card-p'>
                            Generate meaningful discussion with your audience and build
                            a strong, loyal community. Think of the insightful conversations
                            you miss out on with a feeback form.
                        </p>
                    </div>
                </div>
            </DefaultLayout>
        </div>

    )
}

export default Card
