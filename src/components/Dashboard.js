import React, { Component } from "react"
import { connect } from "react-redux"
import io from "socket.io-client"

import Navbar from "./Navbar"
import ReportCard from "./ReportCard"
import ReportsMap from "./ReportsMap"

import { initSocket, updateReports } from "../actions"

export class Dashboard extends Component {
  componentDidMount() {
    const socket = io(process.env.REACT_APP_SERVER_URL)
    this.props.initSocket(socket)

    socket.emit("authenticate", {
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViYzRiNTY3MWIyNWNjNDI2MGMzN2UzMSIsImlhdCI6MTUzOTYxODI5NH0.E7cD5IXwt0ZIfumfyBKuuqLvDyLofR_DUAaAT-CZoXI"
    })

    socket.on("reports", reports => {
      this.props.updateReports(reports)
    })
  }

  render() {
    return (
      <>
        <Navbar />
        <main role="main" className="container-fluid">
          <div className="row">
            <div
              className="col-3"
              style={{ height: "90vh", marginTop: "2vh", overflow: "scroll" }}
            >
              {this.props.reports.map((report, key) => (
                <ReportCard key={key} id={key} report={report} />
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
    socket: state.appReducer.socket
  }
}

const mapDispatchToProps = dispatch => {
  return {
    initSocket: socket => dispatch(initSocket(socket)),
    updateReports: reports => dispatch(updateReports(reports))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)
