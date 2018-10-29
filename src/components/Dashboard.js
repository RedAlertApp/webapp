import React, { Component } from "react"
import { connect } from "react-redux"
import io from "socket.io-client"

import Navbar from "./Navbar"
import ReportCard from "./ReportCard"
import ReportsMap from "./ReportsMap"

import { initSocket, updateReports } from "../actions"
import { ACCESS_TOKEN_ITEM_NAME } from "../constants"
import { List, Grid } from "@material-ui/core"

export class Dashboard extends Component {
  componentDidMount() {
    const socket = io(process.env.REACT_APP_SERVER_URL)
    this.props.initSocket(socket)

    socket.emit("authentication", {
      token: localStorage.getItem(ACCESS_TOKEN_ITEM_NAME)
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
          <Grid container spacing={24}>
            <Grid item xs={3}>
              <List>
                {this.props.reports.map((report, key) => (
                  <ReportCard key={key} id={key} report={report} />
                ))}
              </List>
            </Grid>

            <Grid item xs={9}>
              <div style={{ height: "90vh", width: "100%" }}>
                <ReportsMap />
              </div>
            </Grid>
          </Grid>
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
