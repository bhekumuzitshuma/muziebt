import BlogSection from "@/components/BlogSection";
import ExperienceSection from "@/components/ExperienceSection";
import Hero from "@/components/Hero";
import InfiniteLogoCarousel from "@/components/InfiniteLogoCarousel";
import MainLayout from "@/components/layout/MainLayout";
import Projects from "@/components/Projects";
import TechStackSurvey from "@/components/TechStackSurvey";

export default function Home() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section>
        <Hero />
        <div className="mt-5 max-w-6xl mx-auto pb-10">
          <InfiniteLogoCarousel />
        </div>
      </section>

      {/* Experience Section */}
      <section className="max-w-5xl mx-auto px-3">
        <ExperienceSection />
      </section>

      {/* Blog Section */}
      <section>
        <BlogSection />
      </section>

      {/* Projects Section */}
      <section>
        <Projects />
      </section>

      {/* About the Tech Survey */}
      <section>
        <TechStackSurvey />
      </section>
    </MainLayout>
  );
}
