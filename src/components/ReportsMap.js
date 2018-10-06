import React, { Component } from "react"
import { connect } from "react-redux"
import { Map, Marker, GoogleApiWrapper } from "google-maps-react"
import { defaultRegion } from "../constants"
import { ReportsMapMarkerWindow } from "./ReportsMapMarkerWindow"

import { showMarkerWindow, hideMarkerWindow } from "../actions"

export class ReportsMap extends Component {
  onInfoWindowClose = () => this.hideMarkerWindow()

  onMapClicked = () => {
    if (this.props.showingInfoWindow) this.hideMarkerWindow()
  }

  onMarkerClick = (props, marker) =>
    this.props.showMarkerWindow({
      activeMarker: marker,
      selectedReport: props,
      showingInfoWindow: true
    })

  hideMarkerWindow = () => this.props.hideMarkerWindow()

  render() {
    return (
      <Map
        className="map"
        google={this.props.google}
        onClick={this.onMapClicked}
        style={{ height: "90vh", position: "relative", width: "100%" }}
        zoom={14}
        initialCenter={defaultRegion}
        center={this.props.center}
      >
        {this.props.reports.map((report, key) => (
          <Marker
            description={report.description}
            extra={report.extra}
            latitude={report.latitude}
            longitude={report.longitude}
            confirmations={report.confirmations}
            onClick={this.onMarkerClick}
            position={{ lat: report.latitude, lng: report.longitude }}
            key={key}
          />
        ))}

        <ReportsMapMarkerWindow />
      </Map>
    )
  }
}

const mapStateToProps = state => {
  return {
    reports: state.appReducer.reports,
    center: state.appReducer.center,
    showingInfoWindow: state.appReducer.showingInfoWindow
  }
}

const mapDispatchToProps = dispatch => {
  return {
    showMarkerWindow: data => dispatch(showMarkerWindow(data)),
    hideMarkerWindow: () => dispatch(hideMarkerWindow())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_API
  })(ReportsMap)
)
