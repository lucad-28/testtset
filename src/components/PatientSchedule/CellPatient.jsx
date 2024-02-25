import "../Cell"
import "./CellPatient.css"

function CellPatient({props}) {

  /* props.Status:  PENDING | ATTENDED | CANCELLED | RESCHEDULED */
  // class Names: pending | attended | cancelled | rescheduled

  let NombreClass = props.Status.toString() == "PENDING" || props.Status.toString()  == "RESCHEDULED" ? "cellpatient activate":"cellpatient desactivate";

  return (<div className={`${NombreClass}`}>
        <div className="subject">{props.ProfessionalName}</div>
        <div className="area">{props.AreaName}</div>
        <div className="time">{props.StartTime.getHours().toString().padStart(2, '0')}:{props.StartTime.getMinutes().toString().padStart(2, '0')} - {props.EndTime.getHours().toString().padStart(2, '0')}:{props.EndTime.getMinutes().toString().padStart(2, '0')}</div>
      </div>)
}

export default CellPatient