import { useState } from 'react';
import Button from '../../components/Button';
import dashboardHeroImage from '../../assets/images/dashboard-hero.png';
import Text from '../../components/Text';

function HeroSection() {
  const [isBusiness, setIsBusiness] = useState(false);

  const handleToggle = () => {
    setIsBusiness(!isBusiness);
  };

  return (
    <section className="bg-black text-white pt-24 mx-8 rounded-3xl px-12 !mt-20">
      <div className="container mx-auto flex flex-col items-center justify-center text-center">
        {/* linear gradient from left to right with white to light gray */}
        <div className='max-w-lg w-full flex flex-col gap-5 lg:gap-8 items-center'>
          <h1 className="text-5xl lg:text-7xl  font-nokora-regular bg-gradient-to-r from-white to-gray-500 text-transparent bg-clip-text">
            Your money is where you are
          </h1>
          <Text className="mx-5">
            Spend, save and manage your money, all in one place. Open a full bank account from your phone, for free.
          </Text>
          <Button type='button' color='white'>Open Milestone account</Button>
        </div>

        <img src={ dashboardHeroImage } className='w-full rounded-s-3xl mt-8' alt="Milestone Dashboard" />
        
      </div>
    </section>
  );
}

export default HeroSection;