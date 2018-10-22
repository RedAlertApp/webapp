import React, { Component } from "react"
import { connect } from "react-redux"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

import { updateCenter } from "../actions"

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
      <div className="card">
        <div
          className="card-body"
          style={{
            borderLeft:
              "20px solid " + mapCategoryToColor(this.props.report.category)
          }}
        >
          <Typography variant="h5" gutterBottom>
            {this.props.report.description}
          </Typography>
          <div className="card-text row">
            <div className="col-6">{this.props.report.extra}</div>
            <div className="col-6">
              <div className="row">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => this.fixReport(this.props.id)}
                >
                  PRZYJMIJ ZGLOSZENIE
                </Button>
              </div>
              <div className="row">
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => this.showOnMap(this.props.id)}
                >
                  POKAŻ NA MAPIE
                </Button>
              </div>
              <div className="row">
                <Typography variant="subtitle1" gutterBottom>
                  {this.props.report.confirmations} potwierdzenia
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
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
