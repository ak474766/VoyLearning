import Header from '@/components/voy-learning/header';
import HeroScrolly from '@/components/voy-learning/hero-scrolly';
import SubjectsSection from '@/components/voy-learning/subjects-section';
import ProblemSolutionSection from '@/components/voy-learning/problem-solution-section';
import HowItWorksSection from '@/components/voy-learning/how-it-works-section';
import Footer from '@/components/voy-learning/footer';
import NotesDemoSection from '@/components/voy-learning/notes-demo-section';
import TextRevealSection from '@/components/voy-learning/text-reveal-section';
import ScrollProgress from '@/components/voy-learning/scroll-progress';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <Header />
      <main className="flex-1">
        <HeroScrolly />
        <SubjectsSection />
        <ProblemSolutionSection />
        <NotesDemoSection />
        <HowItWorksSection />
        <TextRevealSection />


      </main>
      <Footer />
      <ScrollProgress />
    </div>
  );
}

