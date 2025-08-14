import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import EducationForm from './components/EducationForm.tsx'
import ExperienceForm from './components/ExperienceForm.tsx'
import ResumePage from './components/ResumePage.tsx'

function App() {
  const [ formData, setFormData ] = useState({
    "name": "Reimu Harukei",
    "email": "something@example.com",
    "phone": "(111) 222-333",
    "education": [
      {
        "school": "Gensokyo",
        "title": "Shrine Maiden",
      },
    ],
    "experience": [],
  })

  const updateData = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    })

    console.log(formData)
  }

  const appendData = (key, value) => {
    setFormData({
      ...formData,
      [key]: [...formData[key], value],
    })

    console.log(formData)
  }

  const updateListItem = (list, index, key, value) => {
    const newList = [ ...formData[list] ]
    newList[index] = {
      ...newList[index],
      [key]: value,
    }
    setFormData({
      ...formData,
      [list]: newList,
    })

    console.log(formData)
  }

  return (
    <>
      <div>
        <form>
          <h2>Personal Info</h2>
          <p>Name:</p>
          <input type="text" id="nameInput"
            onChange={(e) => updateData("name", e.target.value)}
          />

          <p>Email:</p>
          <input type="text" id="emailInput"
            onChange={(e) => updateData("email", e.target.value)}
          />

          <p>Phone Number:</p>
          <input type="text" id="phoneInput"
            onChange={(e) => updateData("phone", e.target.value)}
          />
          
          <div>
            <button>Next</button>
          </div>
        </form>

        <form id="education-section">
          <h2>Education</h2>
          { formData["education"].map((item, index) => {
            return <EducationForm index={index} updateListItem={updateListItem} key={index} />
          }) }
          <button
            onClick={(e) => {appendData("education", { "school": "", "title": "" })}}
          >
            Add new
          </button>

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

        <ResumePage id="printable-resume" formData={formData}/>
      </div>
    </>
  )
}

export default App
