import {
  INIT_SOCKET,
  UPDATE_REPORTS,
  SHOW_REPORT_MODAL,
  HIDE_REPORT_MODAL,
  UPDATE_CENTER,
  SHOW_MARKER_WINDOW,
  HIDE_MARKER_WINDOW
} from "./actionTypes"

export const initSocket = socket => {
  return {
    type: INIT_SOCKET,
    payload: socket
  }
}

export const updateReports = reports => {
  return {
    type: UPDATE_REPORTS,
    payload: reports
  }
}

export const showReportModal = () => {
  return {
    type: SHOW_REPORT_MODAL
  }
}

export const closeReportModal = () => {
  return {
    type: HIDE_REPORT_MODAL
  }
}

export const updateCenter = center => {
  return {
    type: UPDATE_CENTER,
    payload: center
  }
}

export const showMarkerWindow = data => {
  return {
    type: SHOW_MARKER_WINDOW,
    payload: data
  }
}

export const hideMarkerWindow = () => {
  return {
    type: HIDE_MARKER_WINDOW
  }
}
