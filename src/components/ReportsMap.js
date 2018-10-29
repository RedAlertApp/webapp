import React, { Component } from "react"
import { connect } from "react-redux"
import GoogleMapReact from "google-map-react"
import { defaultRegion } from "../constants"

import { showMarkerWindow, hideMarkerWindow } from "../actions"
import MarkerWindowContent from "./MarkerWindowContent"
import Marker from "./Marker"

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
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.REACT_APP_GOOGLE_MAPS_API
        }}
        onClick={this.onMapClicked}
        defaultZoom={14}
        defaultCenter={defaultRegion}
        center={this.props.center}
        yesIWantToUseGoogleMapApiInternals
      >
        {this.props.reports.map((report, key) => (
          <Marker
            key={key}
            text={report.description}
            lat={report.latitude}
            lng={report.longitude}
          >
            {this.props.selectedReport ? (
              <MarkerWindowContent selectedReport={this.props.selectedReport} />
            ) : (
              <></>
            )}
          </Marker>
        ))}
      </GoogleMapReact>
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
)(ReportsMap)
