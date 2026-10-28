import { useState } from "react"
import { skills } from "../../data/portfolio"
export function Skills() {
  const [active, setActive] = useState<keyof typeof skills>("Frameworks")
  return (
    <div className="toolkit">
      <h3>My toolkit</h3>
      <div className="skill-tabs" role="group" aria-label="Skill category">
        {(Object.keys(skills) as (keyof typeof skills)[]).map((category) => (
          <button
            key={category}
            aria-pressed={active === category}
            onClick={() => setActive(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <ul className="skill-list" key={active} aria-label={`${active} skills`}>
        {skills[active].map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  )
}
