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
            Wanna get to know
            <br />me better?
          </h2>
        </Reveal>
        <div className="about-copy">
          <Reveal>
            <p className="lead">
              I’m Micka. I am 21, and I've been writing lines of code since 2018 (and counting).
            </p>
            <p>
              I like all aspects of software engineering, whether it is getting
              headaches over low level algorithmic problems or spending days fine
              tuning web interfaces.
            </p>
            <p>
              I've had the opportunity to work with several startups where I had
              the responsibility to rebuild web applications and working across
              interfaces, APIs and databases.
            </p>
            <p>
              My studies (and my love for summer vibes) have taken me to Nice to
              California State University San Marcos where I experience completely
              different ways of learning and working.
            </p>
          </Reveal>
          <div className="off-screen">
            <h3>Away from the screen</h3>
            <p>
              When I am not working ou can find me in the mountains or in a
              climbing gym. I also like building guitars and playing piano.
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
