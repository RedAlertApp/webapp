import React, { Component } from "react"
import { connect } from "react-redux"

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
          <h5 className="card-title">{this.props.report.description}</h5>
          <div className="card-text row">
            <div className="col-6">{this.props.report.extra}</div>
            <div className="col-6">
              <div className="row">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => this.fixReport(this.props.id)}
                >
                  PRZYJMIJ ZGLOSZENIE
                </button>
              </div>
              <div className="row">
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => this.showOnMap(this.props.id)}
                >
                  POKAŻ NA MAPIE
                </button>
              </div>
              <div className="row">
                <h4>{this.props.report.confirmations} potwierdzenia</h4>
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
