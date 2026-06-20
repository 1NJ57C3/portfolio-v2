import SiteHeader from "@/shared/components/SiteHeader/SiteHeader"
import About from "@/sections/About/About"
import Contact from "@/sections/Contact/Contact"
import Hero from "@/sections/Hero/Hero"
import Projects from "@/sections/Projects/Projects"
import SiteFooter from "@/shared/components/SiteFooter/SiteFooter";

function App() {
  return (
    <div className="App">
      <SiteHeader />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}

export default App
