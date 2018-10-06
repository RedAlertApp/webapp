import React from "react"

export default function MarkerWindowContent(props) {
  return (
    <div>
      <h1 className="map-report-title">{props.selectedReport.description}</h1>
      <p className="map-report-extra">{props.selectedReport.extra}</p>
      <p className="map-report-coords">
        [{props.selectedReport.latitude}, {props.selectedReport.longitude}]
      </p>
    </div>
  )
}
