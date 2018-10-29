import React, { Fragment } from "react"
import PropTypes from "prop-types"

const K_WIDTH = 40
const K_HEIGHT = 40

const Marker = props => (
  <div
    style={{
      position: "absolute",
      width: K_WIDTH,
      height: K_HEIGHT,
      left: -K_WIDTH / 2,
      top: -K_HEIGHT / 2,

      border: "5px solid #f44336",
      borderRadius: K_HEIGHT,
      backgroundColor: "white",
      textAlign: "center",
      color: "#3f51b5",
      fontSize: 16,
      fontWeight: "bold",
      padding: 4
    }}
  >
    {props.text.substr(0, 1)}
    {/* {...props.onClick ? { onClick: props.onClick } : {}} */}
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
