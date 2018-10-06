import React, { Component } from "react"
import { connect } from "react-redux"
import { InfoWindow } from "google-maps-react"

export class ReportsMapMarkerWindow extends Component {
  render() {
    return (
      <InfoWindow
        marker={this.props.activeMarker}
        onClose={this.onInfoWindowClose}
        visible={this.props.showingInfoWindow}
      >
        <div>
          <h1>{this.props.selectedReport.description}</h1>
          <p>{this.props.selectedReport.extra}</p>
          <p>
            [{this.props.selectedReport.latitude},{" "}
            {this.props.selectedReport.longitude}]
          </p>
        </div>
      </InfoWindow>
    )
  }
}

const mapStateToProps = state => {
  return {
    reports: state.appReducer.reports,
    center: state.appReducer.center,
    activeMarker: state.appReducer.activeMarker,
    selectedReport: state.appReducer.selectedReport,
    showingInfoWindow: state.appReducer.showingInfoWindow
  }
}

export default connect(mapStateToProps)(ReportsMapMarkerWindow)
