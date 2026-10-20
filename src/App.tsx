import { MotionConfig } from "motion/react"
import { Contact } from "./components/portfolio/contact"
import { Footer } from "./components/portfolio/footer"
import { Header } from "./components/portfolio/header"
import { Hero } from "./components/portfolio/hero"
import { Projects } from "./components/portfolio/projects"
import { Skills } from "./components/portfolio/skills"

export function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="max-w-6xl mx-auto flex-col [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-offset-8 [&_a:focus-visible]:outline-amber-700 [&_button:focus-visible]:outline-2 [&_button:focus-visible]:outline-offset-8 [&_button:focus-visible]:outline-amber-700">
        <Header />
        <main id="main" className="pt-12 md:pt-16 px-8 md:px-16">
          <Hero />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  )
}

export default App
