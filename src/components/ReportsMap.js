import React, { Component } from "react"
import { connect } from "react-redux"
import { Map, Marker, GoogleApiWrapper, InfoWindow } from "google-maps-react"
import { defaultRegion } from "../constants"

import { showMarkerWindow, hideMarkerWindow } from "../actions"
import MarkerWindowContent from "./MarkerWindowContent"

export class ReportsMap extends Component {
  onMapClicked = () => {
    if (this.props.showingInfoWindow) this.props.hideMarkerWindow()
  }

  onMarkerClick = (props, marker) =>
    this.props.showMarkerWindow({
      activeMarker: marker,
      selectedReport: props,
      showingInfoWindow: true
    })

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
        <InfoWindow
          marker={this.props.activeMarker}
          visible={this.props.showingInfoWindow}
        >
          <MarkerWindowContent selectedReport={this.props.selectedReport} />
        </InfoWindow>
      </Map>
    )
  }
}

const mapStateToProps = state => {
  return {
    reports: state.appReducer.reports,
    center: state.appReducer.center,
    showingInfoWindow: state.appReducer.showingInfoWindow,
    activeMarker: state.appReducer.activeMarker,
    selectedReport: state.appReducer.selectedReport
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
