import Button from '../../components/Button';
import Text from '../../components/Text';

function HeroSection() {
  // const [isBusiness, setIsBusiness] = useState(false);

  // const handleToggle = () => {
  //   setIsBusiness(!isBusiness);
  // };

  return (
    <section className="bg-black text-white pt-24 mx-8 rounded-3xl px-12 !mt-20">
      <div className="container mx-auto flex flex-col items-center justify-center text-center">
        {/* linear gradient from left to right with white to light gray */}
        <div className='max-w-lg w-full flex flex-col gap-5 lg:gap-8 items-center'>
          <h1 className="text-5xl lg:text-7xl  font-nokora-regular bg-gradient-to-r from-white to-gray-500 text-transparent bg-clip-text">
            Crypto transactions made simple.
          </h1>
          <Text className="mx-5">
            Accept payments in with just 0.4% transaction fees. Make your business future proof by accepting digital currencies.
          </Text>
          <Button type='button' color='white'>Schedeule a Demo</Button>
        </div>

        <img src={"/assets/images/dashboard-hero.png"} className='w-full rounded-s-3xl mt-8' alt="Milestone Dashboard" />
        
      </div>
    </section>
  );
}

export default HeroSection;