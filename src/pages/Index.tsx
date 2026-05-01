import ShaderBackground from "@/components/ShaderBackground"
import HeroContent from "@/components/HeroContent"
import PulsingCircle from "@/components/PulsingCircle"
import Header from "@/components/Header"
import FeaturesSection from "@/components/FeaturesSection"
import PricingSection from "@/components/PricingSection"

const Index = () => {
  return (
    <div className="bg-black">
      <ShaderBackground>
        <Header />
        <div className="h-screen relative">
          <HeroContent />
          <PulsingCircle />
        </div>
      </ShaderBackground>
      <FeaturesSection />
      <PricingSection />
    </div>
  )
}

export default Index