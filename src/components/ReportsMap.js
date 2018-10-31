import React, { Component } from "react"
import { connect } from "react-redux"
import GoogleMapReact from "google-map-react"
import { defaultRegion } from "../constants"

import { showMarkerWindow, hideMarkerWindow } from "../actions"
import Marker from "./Marker"

export class ReportsMap extends Component {
  onMapClicked = () => {
    console.log("clicked")
    if (this.props.showingInfoWindow) this.props.hideMarkerWindow()
  }

  onMarkerClick = (key, childProps) => {
    let report = this.props.reports[key]
    this.props.showMarkerWindow({
      selectedReport: report,
      showingInfoWindow: true
    })
  }

  render() {
    return (
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.REACT_APP_GOOGLE_MAPS_API
        }}
        defaultZoom={14}
        defaultCenter={defaultRegion}
        center={this.props.center}
        onClick={this.onMapClicked}
        onChildClick={this.onMarkerClick}
        yesIWantToUseGoogleMapApiInternals
      >
        {this.props.reports.map((report, key) => (
          <Marker
            key={key}
            lat={report.latitude}
            lng={report.longitude}
            text={report.description}
            report={report}
          >
            {/* {this.props.selectedReport ? (
              <MarkerWindowContent selectedReport={this.props.selectedReport} />
            ) : (
              <></>
            )} */}
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
