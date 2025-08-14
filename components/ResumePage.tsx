function ResumePage({ formData }) {
  return (
    <div>
      <h1>{formData["name"]}</h1>
      <p>{formData["email"]}</p>
      <p>{formData["phone"]}</p>
      <hr />
      <h2>Education</h2>
      <ul>
        <li>thingy thing</li>
        { formData["education"].map((item) => {
            return <li key="idk"></li>
          })
        }
      </ul>
      <hr />
      <h2></h2>
    </div>
  )
}

export default ResumePage
