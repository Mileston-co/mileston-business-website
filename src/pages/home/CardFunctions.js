import React from 'react'
import Badge from '../../components/Badge'
import { faAppleAlt, faSignal, faSun } from '@fortawesome/free-solid-svg-icons'
import Title from '../../components/Title'
import Text from '../../components/Text'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple, faGoogle } from '@fortawesome/free-brands-svg-icons'
import CardFunctionBg from '../../assets/images/card-functions-bg.png'

function CardFunctions() {

    const functions = [
        {
            icon: faApple,
            title: "Apple Pay",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tempora, est tempore perferendis quasi impedit! Nemo provident nam quidem et non quod suscipit harum error nostrum, dolor totam amet deleniti."
        },
        // Apple, google play, contactless access
        {
            icon: faGoogle,
            title: "Google Pay",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tempora, est tempore perferendis quasi impedit! Nemo provident nam quidem et non quod suscipit harum error nostrum, dolor totam amet deleniti."
        },
        {
            icon: faSignal,
            title: "Contactless access",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tempora, est tempore perferendis quasi impedit! Nemo provident nam quidem et non quod suscipit harum error nostrum, dolor totam amet deleniti."
        }

    ]


    return (
        <section className='mx-8 bg-black rounded-2xl px-10 py-10 flex flex-col items-center' style={{
            backgroundImage: `url(${CardFunctionBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}>

            <div className='flex flex-col items-center section-container gap-8 !my-0'>

                <div className='flex flex-col justify-center items-center gap-8 max-w-xl mx-auto'>
                    <Badge bgColor='bg-green-900' textColor='text-green-300 ' icon={faSun}>Card Functions</Badge>
                    <Title className='text-white'>Unlocking the power of your Moneliq card</Title>
                    <Text className='text-center'>Discover the functions that make your card more than jsut payment</Text>
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