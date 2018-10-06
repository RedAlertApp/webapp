import React, { Component } from "react"
import { connect } from "react-redux"
import io from "socket.io-client"
import { Link } from "react-router-dom"
import ReportsMap from "./ReportsMap"

import { initSocket, updateReports, updateCenter } from "../actions"

export class Dashboard extends Component {
  fixReport = key => {
    this.props.socket.emit("fixReport", this.props.reports[key].id)
  }

  showOnMap = key => {
    let report = this.props.reports[key]
    this.props.updateCenter({ lat: report.latitude, lng: report.longitude })
  }

  componentDidMount() {
    const socket = io(process.env.REACT_APP_SERVER_URL)
    this.props.initSocket(socket)

    socket.on("reports", reports => {
      this.props.updateReports(reports)
    })
  }

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <Link className="navbar-brand" to="/" style={{ color: "white" }}>
            Moduł Policja Kielce
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
        </nav>

        <main role="main" className="container-fluid">
          <div className="row">
            <div
              className="col-3"
              style={{ height: "90vh", marginTop: "2vh", overflow: "scroll" }}
            >
              {this.props.reports.map((report, key) => (
                <div className="card" key={key}>
                  <div
                    className="card-body"
                    style={{
                      borderLeft:
                        "20px solid " + mapCategoryToColor(report.category)
                    }}
                  >
                    <h5 class="card-title">{report.description}</h5>
                    <div class="card-text row">
                      <div className="col-6">{report.extra}</div>
                      <div className="col-6">
                        <div className="row">
                          <button
                            type="button"
                            class="btn btn-primary"
                            onClick={() => this.fixReport(key)}
                          >
                            PRZYJMIJ ZGLOSZENIE
                          </button>
                        </div>
                        <div className="row">
                          <button
                            type="button"
                            class="btn btn-success"
                            onClick={() => this.showOnMap(key)}
                          >
                            POKAŻ NA MAPIE
                          </button>
                        </div>
                        <div className="row">
                          <h4>{report.confirmations} potwierdzenia</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-9">
              <ReportsMap />
            </div>
          </div>
        </main>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    reports: state.appReducer.reports,
    socket: state.appReducer.socket,
    showReportModal: state.appReducer.showReportModal
  }
}

const mapDispatchToProps = dispatch => {
  return {
    initSocket: socket => dispatch(initSocket(socket)),
    updateReports: reports => dispatch(updateReports(reports)),
    updateCenter: center => dispatch(updateCenter(center))
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)
