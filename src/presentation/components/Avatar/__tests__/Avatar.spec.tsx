import React from "react";

import { render } from "@testing-library/react-native";
import { Avatar } from "..";

describe("Avatar", () => {
  const AVATAR_URI = "https://github.com/duduCMT.png";

  it("the component rendered", () => {
    render(<Avatar uri={AVATAR_URI} />);
  });
});

