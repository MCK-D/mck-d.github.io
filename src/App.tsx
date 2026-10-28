import { useCallback, useState } from "react"
import { Header } from "./components/portfolio/header"
import { Hero } from "./components/portfolio/hero"
import { Projects } from "./components/portfolio/projects"
import { About } from "./components/portfolio/about"
import { Experience } from "./components/portfolio/experience"
import { Contact } from "./components/portfolio/contact"
import { Footer } from "./components/portfolio/footer"
import LoadingCurtain from "./components/ui/loading-curtain"

export function App() {
  const [introVisible, setIntroVisible] = useState(
    () => !matchMedia("(prefers-reduced-motion: reduce)").matches
  )
  const finishIntro = useCallback(() => setIntroVisible(false), [])
  return (
    <div id="top">
      {introVisible && <LoadingCurtain onComplete={finishIntro} />}
      <div inert={introVisible}>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">
          <Hero />
          <Projects />
          <About />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}
export default App
