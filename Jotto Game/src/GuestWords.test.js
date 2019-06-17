import React from "react";
import { shallow } from "enzyme";
import { findByAttr, checkProps } from "../test/testUtils";
import GuestWords from "./GuestWords";

const defaultProps = {
  guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }]
};

const setup = (props = {}, state = null) => {
  const setupProps = { ...defaultProps, ...props };
  const wrapper = shallow(<GuestWords {...setupProps} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

it("does not throw warning with expected props", () => {
  checkProps(GuestWords, defaultProps);
});

describe("if there are no words guest", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });
  it("renders without crashing", () => {
    const componenet = findByAttr(wrapper, "component-guest-words");
    expect(componenet.length).toBe(1);
  });
  it("renders instruction to guess a word", () => {
    const componenet = findByAttr(wrapper, "component-guest-instruction");
    expect(componenet.length).not.toBe(0);
  });
});

describe("if there are words guest", () => {
  let wrapper;
  const guessedWords = [
    { guessedWord: "train", letterMatchCount: 3 },
    { guessedWord: "agile", letterMatchCount: 1 },
    { guessedWord: "party", letterMatchCount: 5 },
  ];
  beforeEach(() => {
    wrapper = setup({ guessedWords });
  });
  it("renders without crashing", () => {
    const componenet = findByAttr(wrapper, "component-guest-words");
    expect(componenet.length).toBe(1);
  });
  it("renders 'guess a word' section", () => {
    const guessedWordNode = findByAttr(wrapper, "guessed-words");
    expect(guessedWordNode.length).toBe(1);
  });
  it("correct number of guessed words", () => {
      const guessedWordNode = findByAttr(wrapper, "guessed-word");
      expect(guessedWordNode.length).toBe(guessedWords.length);
  });
});
