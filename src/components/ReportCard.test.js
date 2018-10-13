import React from "react"
import Enzyme, { mount, shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { ReportCard } from "./ReportCard"

Enzyme.configure({ adapter: new Adapter() })

function setup() {
  const props = {
    report: {
      description: "test",
      extra: "extra",
      longitude: 10.0,
      latitude: 50.2
    }
  }

  const wrapper = shallow(<ReportCard {...props} />)

  return {
    props,
    wrapper
  }
}

describe("Navbar", () => {
  it("should render without errors", () => {
    const { wrapper, props } = setup()
    expect(wrapper).toHaveLength(1)
  })
})
