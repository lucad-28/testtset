import "./Cell.css"

function Cell({props}) {
  console.log(props)

  /* props.Status:  PENDING | ATTENDED | CANCELLED | RESCHEDULED */
  // class Names: pending | attended | cancelled | rescheduled
  return (
    <div className={`cell ${props.Status.toLowerCase()}`}>
      <b>{props.ProfessionalName}</b>
      <b>{props.AreaName}</b>
      <b>{props.StartTime.getHours().toString().padStart(2, '0')}:{props.StartTime.getMinutes().toString().padStart(2, '0')} - {props.EndTime.getHours().toString().padStart(2, '0')}:{props.EndTime.getMinutes().toString().padStart(2, '0')}</b>
    </div>
  )
}

export default Cell