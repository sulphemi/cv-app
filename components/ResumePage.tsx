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
              </li>
            )
          })
        }
      </ul>
      <hr />
      <h2></h2>
    </div>
  )
}

export default ResumePage
