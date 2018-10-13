import React from "react"
import Enzyme, { mount, shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { ReportsMap } from "./ReportsMap"

Enzyme.configure({ adapter: new Adapter() })

function setup() {
  const props = {
    reports: [],
    initSocket: jest.fn()
  }

  const wrapper = shallow(<ReportsMap {...props} />)

  return {
    props,
    wrapper
  }
}

describe("ReportsMap", () => {
  it("should render without errors", () => {
    const { wrapper, props } = setup()
    expect(wrapper).toHaveLength(1)
  })
})
