import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { ProjectsSection } from "../components/ProjectSection";
import { SkillsSection } from "../components/SkillsSection";
import { ThemeToggle } from "../components/ThemeToggle";
import {StarBackground} from "@/components/StarBackground";

export const Home = () => {
    return (
        
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            

            <ThemeToggle />

            <StarBackground />

            <Navbar />
            <main>
                <HeroSection />
                <AboutSection />
                <SkillsSection/>
                <ExperienceSection/>
                <ProjectsSection />
                <ContactSection />
            </main>

            <Footer />
        </div>
        
    )
}