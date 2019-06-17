import checkPropTypes from "check-prop-types";
import Congrats from "../src/Congrats";

export const findByAttr = (wrapper, attr) =>
  wrapper.find(`[data-test='${attr}']`);

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    "prop",
    component.name
  );
  expect(propError).toBeUndefined();
};
