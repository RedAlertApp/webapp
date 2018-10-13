import {
  INIT_SOCKET,
  UPDATE_REPORTS,
  UPDATE_CENTER,
  SHOW_MARKER_WINDOW,
  HIDE_MARKER_WINDOW
} from "../../actions/actionTypes"

import { defaultRegion } from "../../constants"

const initialState = {
  reports: [],
  socket: null,
  center: defaultRegion, // Kielce
  activeMarker: {},
  selectedReport: {},
  showingInfoWindow: false
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_SOCKET: {
      return {
        ...state,
        socket: action.payload
      }
    }

    case UPDATE_REPORTS: {
      return {
        ...state,
        reports: action.payload
      }
    }

    case UPDATE_CENTER: {
      return {
        ...state,
        center: action.payload
      }
    }

    case SHOW_MARKER_WINDOW: {
      console.log(state)
      console.log(action.payload)
      return {
        ...state,
        activeMarker: action.payload.activeMarker,
        selectedReport: action.payload.selectedReport,
        showingInfoWindow: true
      }
    }

    case HIDE_MARKER_WINDOW: {
      return {
        ...state,
        activeMarker: null,
        showingInfoWindow: false
      }
    }

    default: {
      return state
    }
  }
}

export default appReducer
