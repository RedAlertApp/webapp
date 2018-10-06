import React from "react"
import Enzyme, { mount, shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import Navbar from "./Navbar"

Enzyme.configure({ adapter: new Adapter() })

function setup() {
  const props = {}

  const wrapper = shallow(<Navbar {...props} />)

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
  it("should have content set", () => {
    const { wrapper, props } = setup()
    expect(wrapper.find("Link").props().to).toBe("/")
    expect(
      wrapper
        .find("Link")
        .childAt(0)
        .text()
    ).toBe("Moduł Policja Kielce")
  })
})
