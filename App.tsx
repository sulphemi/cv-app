import { useState } from 'react'
import EducationForm from './components/EducationForm.tsx'
import ExperienceForm from './components/ExperienceForm.tsx'
import ResumePage from './components/ResumePage.tsx'
import './styles/style.css'
import type { FormDataType } from './types.ts'


function App() {
  const [ currentPage, setCurrentPage ] = useState("forms")

  const [ formData, setFormData ] = useState<FormDataType>({
    "name": "Reimu Harukei",
    "email": "something@example.com",
    "phone": "(111) 222-333",
    "education": [
      {
        "school": "Gensokyo",
        "title": "Shrine Maiden",
        "startYear": "A long time ago",
        "endYear": "Present",
      },
    ],
    "experience": [
      {
        "company": "Self-employed",
        "position": "CEO (Chief Executive Officer)",
        "responsibilities": "Do work",
        "startYear": "January 2024",
        "endYear": "February 2024",
      }
    ],
  })

  const updateData = (key: string, value: string) => {
    setFormData({
      ...formData,
      [key]: value,
    })

    console.log(formData)
  }

  const appendData = (key: "education" | "experience", value: any) => {
    setFormData({
      ...formData,
      [key]: [...formData[key], value],
    })

    console.log(formData)
  }

  const updateListItem = (
    list: "education" | "experience",
    index: number,
    key: any,
    value: string,
  ) => {
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

  const popListItem = (list: "education" | "experience") => {
    setFormData({
      ...formData,
      [list]: formData[list].slice(0, -1)
    })
  }

  const displayPrint = () => {
    setCurrentPage("print")
  }

  const displayForms = () => {
    setCurrentPage("forms")
  }

  return (
    <>
      <div id="container">
        { currentPage == "forms" &&
          <div id="forms">
            <div id="personal-section" className="form">
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
            </div>

            <div id="education-section" className="form">
              <h2>Education</h2>
              { formData["education"].map((_, index) => {
                return <EducationForm index={index} updateListItem={updateListItem} key={index} />
              }) }
              <button
                onClick={() => {appendData("education", { "school": "", "title": "", "startYear": "", "endYear": "" })}}
              >
                Add new
              </button>

              <button
                onClick={() => {popListItem("education")}}
              >
                Remove
              </button>
            </div>

            <div id="experience-section" className="form">
              <h2>Experience</h2>
              {
                formData["experience"].map((_, index) => {
                  return <ExperienceForm index={index} updateListItem={updateListItem} key={index} />
                })
              }

              <button
                onClick={() => {appendData("experience", { "company": "", "position": "", "responsibilities": "", "startYear": "", "endYear": "" })}}
              >
                Add new
              </button>

              <button
                onClick={() => {popListItem("experience")}}
              >
                Remove
              </button>
            </div>

            <div id="submit-section" className="form">
              <h2>Save changes</h2>
              <p>Press to submit</p>
              <button
                onClick={displayPrint}
              >
                Submit
              </button>
            </div>
          </div>
        }

        { currentPage == "forms" &&
           <div id="resume-preview">
            <ResumePage formData={formData} />
          </div>
        }

        { currentPage == "print" &&
          <div id="resume-print-page">
            <div>
              <div className="form hide-on-print">
                <h2>Preview & Print</h2>
                <p>Press Edit to go back and make any adjustments</p>
                <button
                  onClick={displayForms}
                >
                  Edit
                </button>
                <button
                  onClick={print}
                >
                  Print
                </button>
              </div>
              <div id="resume-printable">
                <ResumePage formData={formData} />
              </div>
            </div>
          </div>
        }
      </div>
    </>
  )
}

export default App
