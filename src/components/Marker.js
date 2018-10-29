import React, { Fragment } from "react"
import PropTypes from "prop-types"

const Marker = props => (
  <Fragment alt={props.text}>
    {/* {...props.onClick ? { onClick: props.onClick } : {}} */}
    {props.children}
  </Fragment>
)

Marker.defaultProps = {
  onClick: null
}

Marker.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired
}

export default Marker
