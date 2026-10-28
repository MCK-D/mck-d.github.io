import { Reveal } from "./reveal"
import { Skills } from "./skills"
export function About() {
  return (
    <section
      id="about"
      className="about section-pad"
      aria-labelledby="about-title"
    >
      <div className="about-layout">
        <Reveal>
          <h2 id="about-title">
            A curious mind.
            <br />A maker’s hands.
          </h2>
        </Reveal>
        <div className="about-copy">
          <Reveal>
            <p className="lead">
              I’m Micka, a developer who enjoys the space where engineering
              meets design.
            </p>
            <p>
              From rebuilding web applications at Trusty to developing mobile
              apps at Skyhook, I’ve worked across interfaces, APIs, and the
              details that make a product feel right.
            </p>
            <p>
              My studies have taken me from EPITECH in Nice to California State
              University San Marcos. Different places, new perspectives, and
              always something to learn.
            </p>
          </Reveal>
          <div className="off-screen">
            <h3>Away from the screen</h3>
            <p>
              On a climbing wall, out on a hike, playing guitar or piano, or
              making something out of wood.
            </p>
          </div>
        </div>
      </div>
      <Skills />
      <Reveal>
        <section className="spoken-languages" aria-labelledby="languages-title">
          <h3 id="languages-title">Spoken languages</h3>
          <dl className="language-list">
            <div>
              <dt>French</dt>
              <dd>Native</dd>
            </div>
            <div>
              <dt>English</dt>
              <dd>Fluent</dd>
            </div>
            <div>
              <dt>Spanish</dt>
              <dd>Intermediate</dd>
            </div>
          </dl>
        </section>
      </Reveal>
    </section>
  )
}
