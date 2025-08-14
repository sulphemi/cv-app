import type { FormDataType } from '../types.ts'

interface ResumePageProps {
  formData: FormDataType
}

function ResumePage({ formData }: ResumePageProps) {
  return (
    <div className="resume">
      <div className="resume-content">
        <h1>{formData["name"]}</h1>
        <p>{formData["email"]}</p>
        <p>{formData["phone"]}</p>
        <hr />
        <h2>Education</h2>
        <ul>
          { formData["education"].map((item: any, index: number) => {
              return (
                <li key={index}>
                  <p>{item["school"]}</p>
                  <p>{item["title"]}</p>
                  <p>{item["startYear"]} - {item["endYear"]}</p>
                  <br />
                </li>
              )
            })
          }
        </ul>
        <hr />
        <h2>Experience</h2>
        <ul>
          { formData["experience"].map((item: any, index: number) => {
            return (
              <li key={index}>
                <p className="r-company">{item["company"]}, {item["position"]}</p>
                <p className="r-resp">{item["responsibilities"]}</p>
                <p className="r-time">{item["startYear"]} - {item["endYear"]}</p>
                <br />
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default ResumePage
