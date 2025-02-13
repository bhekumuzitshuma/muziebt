import BlogSection from "@/components/BlogSection";
import ExperienceSection from "@/components/ExperienceSection";
import FeaturesSection from "@/components/FeaturesSection";
import Hero from "@/components/Hero";
import InfiniteLogoCarousel from "@/components/InfiniteLogoCarousel";
import MainLayout from "@/components/layout/MainLayout";
import Projects from "@/components/Projects";
import Seo from "@/components/SEO";
import TechStackSurvey from "@/components/TechStackSurvey";

export default function Home() {
  return (
    <MainLayout>
      <Seo
        title="Home | The Matrix Exploit"
        description="Join the annual developer survey for African developers and tech professionals. Share insights on coding trends, salaries, and tools shaping Africa's tech industry."
        ogTitle="2025 African Developer Survey | The M@trix Exploit"
        ogDescription="Join the annual developer survey for African developers and tech professionals."
        ogImage="/devsurvey.png"
        ogUrl="https://bhekumuzitshuma.netlify.app/"
      />
      {/* Hero Section */}
      <section>
        <Hero />
        <div className="mt-5 max-w-6xl mx-auto pb-10">
          <InfiniteLogoCarousel />
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-5xl mx-auto px-3">
        <FeaturesSection />
      </section>

      {/* Blog Section */}
      <section>
        <BlogSection />
      </section>

      {/* About the Tech Survey */}
      <section>
        <TechStackSurvey />
      </section>
    </MainLayout>
  );
}
