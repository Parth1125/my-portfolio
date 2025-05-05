import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import Skills from "@/app/components/Skills";
import Projects from "@/app/components/Projects";
import Footer from "@/app/components/Footer";
import Experience from "@/app/components/Experince";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 text-white">
      <Header />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
    </main>
  );
}
