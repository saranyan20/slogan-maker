import Header from '../Components/Header/Header';
import SloganMaker from '../Components/SloganMaker/SloganMaker';
import FeaturesSection from '../Components/FeaturesSection/FeaturesSection';
import OtherProductsSection from '../Components/OtherProductsSection/OtherProductsSection';
import Footer from '../Components/Footer/Footer';

function Home() {
  return (
    <>
      <Header />
      <SloganMaker />
      <FeaturesSection />
      <OtherProductsSection />
      <Footer />
    </>
  );
}

export default Home;
