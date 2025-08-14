function ExperienceForm({ index, updateListItem }) {
  return (
    <div>
      <p>Company Name</p>
      <input type="text"
        onChange={(e) => updateListItem("experience", index, "company", e.target.value)}
      />
      <p>Position Title</p>
      <input type="text"
        onChange={(e) => updateListItem("experience", index, "position", e.target.value)}
      />
      <p>Responsibilities</p>
      <input type="text"
        onChange={(e) => updateListItem("experience", index, "responsibilities", e.target.value)}
      />

      <p>Duration</p>
      <input type="number"
        onChange={(e) => updateListItem("experience", index, "startYear", e.target.value)}
      />
      <span> to </span>
      <input type="number"
        onChange={(e) => updateListItem("experience", index, "endYear", e.target.value)}
      />
    </div>
  )
}

export default ExperienceForm
