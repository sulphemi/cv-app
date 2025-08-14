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
      <input type="text" />

      <p>Duration</p>
      <input type="number" />
      <span> to </span>
      <input type="number" />

      <button>Remove</button>
    </div>
  )
}

export default EducationForm
