import React from 'react';
import Card from '../../components/Card';
import Text from '../../components/Text';
import SubHeading from '../../components/SubHeading';
import { ScrollTriggeredAnimation } from '@/components/Animation';

const testimonials = [
    {
        initials: 'JD',
        name: 'John Doe',
        role: 'E-commerce Founder',
        rating: 5,
        review: 'Mileston has transformed the way we accept payments. Fast, secure, and incredibly low fees!',
    },
    {
        initials: 'AS',
        name: 'Alice Smith',
        role: 'Freelancer',
        rating: 5,
        review: 'Integrating Mileston into my workflow was seamless. No more high fees, just smooth transactions!',
    },
    {
        initials: 'MR',
        name: 'Michael Ross',
        role: 'Tech Entrepreneur',
        rating: 5,
        review: "Crypto payments made easy! Mileston's API integration was a game changer for our business.",
    },
];

function Testimonials() {
    return (
        <section className="container mx-auto px-4 py-12 mb-24">
            <ScrollTriggeredAnimation>
                <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
                    What Our Amazing Users Say
                </h2>
            </ScrollTriggeredAnimation>

            <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-1 justify-center">
                {testimonials.map((testimonial, index) => (
                    <ScrollTriggeredAnimation key={index}>
                        <Card
                            className="max-w-sm mx-auto border border-gray-300 rounded-lg shadow-lg bg-white p-6 space-y-4
              transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                        >
                            <div className="flex items-center space-x-4">
                                <div className="h-12 w-12 flex items-center justify-center bg-black text-white text-lg font-semibold rounded-full">
                                    {testimonial.initials}
                                </div>
                                <div>
                                    <SubHeading>{testimonial.name}</SubHeading>
                                    <Text className="text-sm text-gray-600">
                                        {testimonial.role}
                                    </Text>
                                </div>
                            </div>
                            <div className="flex text-yellow-400 text-2xl">★★★★★</div>
                            <Text>{testimonial.review}</Text>
                        </Card>
                    </ScrollTriggeredAnimation>
                ))}
            </div>
        </section>
    );
}

export default Testimonials;
