function EducationForm({ index, updateListItem }) {
  const updateEducation = () => {

  }

  return (
    <div>
      <p>School name</p>
      <input type="text"
        onChange={(e) => updateListItem("education", index, "school", e.target.value)}
      />

      <p>Title</p>
      <input type="text"
        onChange={(e) => updateListItem("education", index, "title", e.target.value)}
      />

      <p>Duration</p>
      <input type="text" className="date-input"
        onChange={(e) => updateListItem("education", index, "startYear", e.target.value)}
      />
      <span> to </span>
      <input type="text" className="date-input"
        onChange={(e) => updateListItem("education", index, "endYear", e.target.value)}
      />

      <hr className="eduexp-separator" />
    </div>
  )
}

export default EducationForm
