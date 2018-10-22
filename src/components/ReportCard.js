import React, { Component } from "react"
import { connect } from "react-redux"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import Paper from "@material-ui/core/Paper"

import { updateCenter } from "../actions"
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Card
} from "@material-ui/core"

export class ReportCard extends Component {
  fixReport = key => {
    this.props.socket.emit("fixReport", this.props.reports[key].id)
  }

  showOnMap = key => {
    let report = this.props.reports[key]
    this.props.updateCenter({ lat: report.latitude, lng: report.longitude })
  }

  render() {
    return (
      <Card>
        <ListItem button onClick={() => this.showOnMap(this.props.id)}>
          <ListItemText
            style={{
              borderLeft:
                "20px solid " + mapCategoryToColor(this.props.report.category),
              paddingLeft: "5px"
            }}
          >
            <Typography variant="h5" gutterBottom>
              {this.props.report.description}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              {this.props.report.confirmations} potwierdzenia
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              {this.props.report.extra}
            </Typography>
          </ListItemText>
          <ListItemSecondaryAction>
            <Button
              variant="contained"
              color="primary"
              onClick={() => this.fixReport(this.props.id)}
            >
              PRZYJMIJ ZGLOSZENIE
            </Button>
          </ListItemSecondaryAction>
        </ListItem>
      </Card>
    )
  }
}

const mapCategoryToColor = category => {
  switch (category) {
    case "REPORT_NIEBEZPIECZENSTWO": {
      return "red"
    }

    case "REPORT_USTERKA": {
      return "yellow"
    }

    case "REPORT_INFORMACJA": {
      return "deepSkyBlue"
    }

    default: {
      return "red"
    }
  }
}

const mapStateToProps = state => {
  return {
    socket: state.appReducer.socket,
    reports: state.appReducer.reports
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateCenter: center => dispatch(updateCenter(center))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReportCard)
