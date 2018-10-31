import React, { Component } from "react"
import { connect } from "react-redux"
import { Paper, Card, CardContent } from "@material-ui/core"

import MarkerWindowContent from "./MarkerWindowContent"

const MARKER_RADIUS = 35

export class Marker extends Component {
  shouldRenderInfo = () => {
    return (
      this.props.report === this.props.selectedReport &&
      this.props.showingInfoWindow
    )
  }

  render() {
    return (
      <>
        <div
          style={{
            position: "absolute",
            width: MARKER_RADIUS,
            height: MARKER_RADIUS,
            left: -MARKER_RADIUS / 2,
            top: -MARKER_RADIUS / 2,

            border: "5px solid #f44336",
            borderRadius: MARKER_RADIUS,
            backgroundColor: "white",
            textAlign: "center",
            color: "#3f51b5",
            fontSize: 16,
            fontWeight: "bold",
            padding: 4
          }}
        >
          {this.props.text.substr(0, 1).toUpperCase()}
        </div>
        {this.shouldRenderInfo() && (
          <Card
            style={{
              marginTop: "5px",
              marginLeft: "-5px",
              overflow: "auto",
              display: "inline-block"
            }}
          >
            <CardContent>
              <MarkerWindowContent selectedReport={this.props.report} />
            </CardContent>
          </Card>
        )}
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    selectedReport: state.appReducer.selectedReport,
    showingInfoWindow: state.appReducer.showingInfoWindow
  }
}

export default connect(mapStateToProps)(Marker)
