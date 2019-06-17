import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Congrats from "./Congrats";
import { findByAttr } from "../test/testUtils";
Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}, state = null) =>{
    const wrapper = shallow(<Congrats {...props} />);
    if (state) wrapper.setState(state);
    return wrapper;
};



it("renders without crashing", () => {
    const wrapper = setup();
    const componenet = findByAttr(wrapper, "component-congrats");
    expect(componenet.length).toBe(1);
});
it("renders no text when `success` props is false", () => {
    const wrapper = setup({success: false});
    const componenet = findByAttr(wrapper, "component-congrats");
    expect(componenet.text()).toBe('');
});
it("renders non-empty congrats message when `success` props is true", () => {
    const wrapper = setup({success: true});
    const componenet = findByAttr(wrapper, "component-congrats");
    expect(componenet.text()).not.toBe(0);
});