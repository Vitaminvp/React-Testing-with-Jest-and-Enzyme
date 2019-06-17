import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}, state = null) =>{
    const wrapper = shallow(<App {...props} />);
    if (state) wrapper.setState(state);
    return wrapper;
};
const wrapper = setup();
const findByAttr = (wrapper, attr) => wrapper.find(`[data-test='${attr}']`);

it("renders without crashing", () => {
  console.log(wrapper.debug());
  expect(wrapper).toBeTruthy();
  //expect(wrapper).toBeFalsy();
  const appComponenet = findByAttr(wrapper, "component-app");
  expect(appComponenet.length).toBe(1);
});
it("renders counter display", () => {
  const counterDisplay = findByAttr(wrapper, "counter-display");
  expect(counterDisplay.length).toBe(1);
});
it("renders increment button", () => {
  const incrementButton = findByAttr(wrapper, "increment-button");
  expect(incrementButton.length).toBe(1);
});
it("count starts at 0", () => {
    const initialCounterState = wrapper.state('counter');
    expect(initialCounterState).toBe(0);
});
it("clicking button increment counter dasplay", () => {
    const counter = 7;
    const wrapper = setup(null, { counter });
    const incrementButton = findByAttr(wrapper, "increment-button");
    incrementButton.simulate('click');
    wrapper.update();
    const counterDisplay =  findByAttr(wrapper, "counter-display");
    expect(counterDisplay.text()).toContain(counter+1);
    const errMessage = findByAttr(wrapper, "error-message");
    expect(errMessage.length).toBe(0);
});
it("clicking button decrement counter dasplay", () => {
    const counter = 7;
    const wrapper = setup(null, { counter });
    const decrementButton = findByAttr(wrapper, "decrement-button");
    decrementButton.simulate('click');
    wrapper.update();
    const counterDisplay =  findByAttr(wrapper, "counter-display");
    expect(counterDisplay.text()).toContain(counter-1);
    const errMessage = findByAttr(wrapper, "error-message");
    expect(errMessage.length).toBe(0);
});
it("clicking button decrement counter dasplay below null", () => {
    const counter = 0;
    const wrapper = setup(null, { counter });
    const decrementButton = findByAttr(wrapper, "decrement-button");
    decrementButton.simulate('click');
    wrapper.update();
    const counterDisplay =  findByAttr(wrapper, "counter-display");
    expect(counterDisplay.text()).toContain(counter);

    const errMessage = findByAttr(wrapper, "error-message");
    expect(errMessage.length).toBe(1);

});
