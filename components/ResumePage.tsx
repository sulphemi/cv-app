function ResumePage({ formData }) {
  return (
    <div>
      <h1>{formData["name"]}</h1>
      <p>{formData["email"]}</p>
      <p>{formData["phone"]}</p>
      <hr />
      <h2>Education</h2>
      <ul>
        { formData["education"].map((item, index) => {
            return (
              <li key={index}>
                <p>{item["school"]}</p>
                <p>{item["title"]}</p>
                <p>{item["startYear"]} - {item["endYear"]}</p>
              </li>
            )
          })
        }
      </ul>
      <hr />
      <h2>Experience</h2>
      <ul>
        { formData["experience"].map((item, index) => {
          return (
            <li key={index}>
              <p>{item["company"]}</p>
              <p>{item["position"]}</p>
              <p>{item["responsibilities"]}</p>
              <p>{item["startYear"]} - {item["endYear"]}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ResumePage
