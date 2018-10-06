import {
  INIT_SOCKET,
  UPDATE_REPORTS,
  SHOW_REPORT_MODAL,
  HIDE_REPORT_MODAL,
  UPDATE_CENTER
} from "../../actions/actionTypes"

import { defaultRegion } from "../../constants"

const initialState = {
  reports: [],
  socket: null,
  showReportModal: false,
  center: defaultRegion // Kielce
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

    case SHOW_REPORT_MODAL: {
      return {
        ...state,
        showReportModal: true
      }
    }

    case HIDE_REPORT_MODAL: {
      return {
        ...state,
        showReportModal: false
      }
    }

    case UPDATE_CENTER: {
      return {
        ...state,
        center: action.payload
      }
    }

    default: {
      return state
    }
  }
}

export default appReducer
