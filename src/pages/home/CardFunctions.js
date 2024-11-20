import React from 'react'
import Badge from '../../components/Badge'
import { faSignal, faBitcoinSign, faLock, faSun } from '@fortawesome/free-solid-svg-icons'
import Title from '../../components/Title'
import Text from '../../components/Text'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function CardFunctions() {

    const functions = [
        {
            icon: faBitcoinSign,
            title: "Decentralized",
            description: "Experience true financial freedom with a decentralized platform. No middlemen. Your transactions are secure, transparent, and resistant to censorship."
        },
        // Apple, google play, contactless access
        {
            icon: faLock,
            title: "Increased Security",
            description: "Multiple signatures and split key methods to keep your funds secure. Be the true owner of your money."
        },
        {
            icon: faSignal,
            title: "Convinience",
            description: "Control your funds your own way. Extremely convenient Ui and features makes Mileston best in the business."
        }

    ]


    return (
        <section className='mx-8 bg-black rounded-2xl px-10 py-10 flex flex-col items-center' style={{
            backgroundImage: `url(/assets/images/card-functions-bg.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}>

            <div className='flex flex-col items-center section-container gap-8 !my-0'>

                <div className='flex flex-col justify-center items-center gap-8 max-w-xl mx-auto'>
                    <Badge bgColor='bg-green-900' textColor='text-green-300 ' icon={faSun}>Features</Badge>
                    <Title className='text-white'>Unlocking the power of Mileston Checkout</Title>
                    <Text className='text-center'>Discover the features that makes us best in the business</Text>
                </div>

                <div className='grid lg:grid-cols-3 gap-3'>
                    {functions.map((func, index) => (
                        <div key={index} className='flex flex-col items-start gap-5 bg-[#242424] rounded-2xl p-5' style={{
                            boxShadow: "2px 2px 4px #ffffff2e, inset 1px 0px 2px #ffffff2e"
                        }}>
                            <FontAwesomeIcon icon={func.icon} className='text-green-300 text-5xl' />
                            <p className='text-white text-lg'>{func.title}</p>
                            <p className='text-gray-500 text-sm'>{func.description}</p>
                        </div>
                    ))}
                </div>


            </div>

        </section>
    )
}

export default CardFunctions