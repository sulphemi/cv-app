import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import EducationForm from './components/EducationForm.tsx'
import ExperienceForm from './components/ExperienceForm.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <form>
          <h2>Personal Info</h2>
          <p>Name:</p>
          <input type="text" />

          <p>Email:</p>
          <input type="text" />

          <p>Phone Number:</p>
          <input type="text" />
          
          <div>
            <button>Next</button>
          </div>
        </form>

        <form id="education-section">
          <h2>Education</h2>
          <EducationForm />
          <button>Add new</button>

          <div>
            <button>Back</button>
            <button>Next</button>
          </div>
        </form>

        <form>
          <h2>Experience</h2>
          <ExperienceForm />

          <button>Add new</button>

          <div>
            <button>Back</button>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
