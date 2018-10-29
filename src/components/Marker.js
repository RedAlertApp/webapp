import React, { Fragment } from "react"
import PropTypes from "prop-types"

const MARKER_RADIUS = 35

const Marker = props => (
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
    {props.text.substr(0, 1).toUpperCase()}
    {props.children}
  </div>
)

Marker.defaultProps = {
  onClick: null
}

Marker.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired
}

export default Marker
