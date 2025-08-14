interface ExperienceFormProps {
  index: number
  updateListItem: (
    list: "experience",
    index: number,
    key:string,
    value: string,
  ) => void
}

function ExperienceForm({ index, updateListItem }: ExperienceFormProps) {
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
      <input type="text" className="date-input"
        onChange={(e) => updateListItem("experience", index, "startYear", e.target.value)}
      />
      <span> to </span>
      <input type="text" className="date-input" 
        onChange={(e) => updateListItem("experience", index, "endYear", e.target.value)}
      />

      <hr className="eduexp-separator" />
    </div>
  )
}

export default ExperienceForm
