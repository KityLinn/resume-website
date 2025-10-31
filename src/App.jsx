import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";


function App() {
  return (
    <>
      <Header />
      <main className="flex-grow-1">
        <AboutSection />
        <ProjectsSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
