import React, { Component } from "react"
import { connect } from "react-redux"
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react"
import { defaultRegion } from "../constants"

export class ReportsMap extends Component {
  state = {
    activeMarker: {},
    selectedReport: {},
    showingInfoWindow: false
  }

  onInfoWindowClose = () => this.hideMarkerWindow()

  onMapClicked = () => {
    if (this.state.showingInfoWindow) this.hideMarkerWindow()
  }

  onMarkerClick = (props, marker) =>
    this.setState({
      activeMarker: marker,
      selectedReport: props,
      showingInfoWindow: true
    })

  hideMarkerWindow = () =>
    this.setState({
      activeMarker: null,
      showingInfoWindow: false
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
          marker={this.state.activeMarker}
          onClose={this.onInfoWindowClose}
          visible={this.state.showingInfoWindow}
        >
          <div>
            <h1>{this.state.selectedReport.description}</h1>
            <p>{this.state.selectedReport.extra}</p>
            <p>
              [{this.state.selectedReport.latitude},{" "}
              {this.state.selectedReport.longitude}]
            </p>
          </div>
        </InfoWindow>
      </Map>
    )
  }
}

const mapStateToProps = state => {
  return {
    reports: state.appReducer.reports,
    center: state.appReducer.center
  }
}

export default connect(mapStateToProps)(
  GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_API
  })(ReportsMap)
)
