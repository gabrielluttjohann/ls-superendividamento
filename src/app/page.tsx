import HeroSection from '@/components/sections/HeroSection';
import ExpertiseSection from '@/components/sections/ExpertiseSection';
import MethodologySection from '@/components/sections/MethodologySection';
import ProfileSection from '@/components/sections/ProfileSection';
import ResponsibleSolutionSection from '@/components/sections/ResponsibleSolutionsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import LawSection from '@/components/sections/LawSection';
import ProcessSection from '@/components/sections/ProcessSection';
import TeamSection from '@/components/sections/TeamSection';
import ContactSection from '@/components/sections/ContactSection';

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <ExpertiseSection />
      <MethodologySection />
      <ProfileSection />
      <ResponsibleSolutionSection />
      <ServicesSection />
      <LawSection />
      <ProcessSection />
      <TeamSection />
      <ContactSection />
    </>
  );
};

export default LandingPage;
