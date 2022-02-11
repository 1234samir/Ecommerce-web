import App from "./App";
import { shallow } from "enzyme";

describe("App Component", () => {
  it("App js rendered successfuly", () => {
    const component = shallow(<App />);

    expect(component.find("div")).toHaveLength(1);
  });
});

//npm run test