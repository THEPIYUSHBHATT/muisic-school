import FeaturedCources from "@/components/FeaturedCources";
import HeroSection from "@/components/HeroSection";
import TestimonialCards from "@/components/TestimonialCards";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
   <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02">
    <HeroSection/>
    <FeaturedCources/>
    <WhyChooseUs/>
    <TestimonialCards/>
   </main>
  );
}
