import React from "react"
import Enzyme, { mount, shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import MarkerWindowContent from "./MarkerWindowContent"

Enzyme.configure({ adapter: new Adapter() })

function setup() {
  const props = {
    selectedReport: {
      description: "test",
      extra: "extra",
      longitude: 10.0,
      latitude: 50.2
    }
  }

  const wrapper = shallow(<MarkerWindowContent {...props} />)

  return {
    props,
    wrapper
  }
}

describe("MarkerWindowContent", () => {
  it("should render without errors", () => {
    const { wrapper } = setup()
    expect(wrapper).toHaveLength(1)
  })
  it("should have content set", () => {
    const { wrapper, props } = setup()
    expect(wrapper.find(".map-report-title").text()).toBe(
      props.selectedReport.description
    )
    expect(wrapper.find(".map-report-extra").text()).toBe(
      props.selectedReport.extra
    )
    expect(wrapper.find(".map-report-coords").text()).toBe(
      `[${props.selectedReport.latitude}, ${props.selectedReport.longitude}]`
    )
  })
})
