import "react-native";
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";

const { JSDOM } = require("jsdom");

const url = "http://localhost";
const jsdom = new JSDOM("<!doctype html><html><body></body></html>", { url });
const { window } = jsdom;

jest.useFakeTimers();

export const setupEnv = () => {
  function copyProps(src, target) {
    Object.defineProperties(target, {
      ...Object.getOwnPropertyDescriptors(src),
      ...Object.getOwnPropertyDescriptors(target),
    });
  }

  global.window = window;
  global.document = window.document;
  global.navigator = {
    userAgent: "node.js",
  };
  copyProps(window, global);

  Enzyme.configure({ adapter: new Adapter() });
};
