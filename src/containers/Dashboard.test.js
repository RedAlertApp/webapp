import React from "react"
import enzyme, { shallow, mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import ReactDOM from "react-dom"
import renderer from "react-test-renderer"
import configureStore from "redux-mock-store"
import Dashboard from "./Dashboard"

enzyme.configure({ adapter: new Adapter() })

describe(">>D A S H B O A R D --- REACT-REDUX (Shallow + passing the {store} directly)", () => {
  const initialState = {
    appReducer: {
      reports: [],
      socket: null,
      showReportModal: false
    }
  }
  const mockStore = configureStore()
  let store, container

  beforeEach(() => {
    store = mockStore(initialState)
    container = shallow(<Dashboard store={store} />)
  })

  it("renders without error", () => {
    console.log(container)
    expect(container.length).toEqual(1)
  })
})
