import React from "react"

export default function MarkerWindowContent(props) {
  return (
    <div>
      <h1 className="report-title">{props.selectedReport.description}</h1>
      <p className="report-extra">{props.selectedReport.extra}</p>
      <p className="report-coords">
        [{props.selectedReport.latitude}, {props.selectedReport.longitude}]
      </p>
    </div>
  )
}
