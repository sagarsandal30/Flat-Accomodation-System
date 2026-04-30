import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import StepperSection from '../components/StepperSection';
import ImageTextSection from '../components/ImageTextSection';
import PropertyGrid from '../components/PropertyGrid';
import Footer from '../components/Footer';

export default function LandingPage() {
  return (
    <div className="page-container">
      <Navbar />
      <main className="main-content">
        <HeroSection />
        <div className="landing-inner">
          <FeatureSection />
          <StepperSection />
          <ImageTextSection />
          <PropertyGrid />
        </div>
      </main>
      <Footer />
    </div>
  );
}
