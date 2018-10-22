import React from "react"
import { Typography } from "@material-ui/core"

export default function MarkerWindowContent(props) {
  return (
    <div>
      <Typography variant="h3" gutterBottom>
        {props.selectedReport.description}
      </Typography>
      <Typography className="map-report-extra">
        {props.selectedReport.extra}
      </Typography>
      <Typography className="map-report-coords">
        [{props.selectedReport.latitude}, {props.selectedReport.longitude}]
      </Typography>
    </div>
  )
}
