
import { fireEvent, render } from "@testing-library/react-native";
import { TextButton } from "..";

describe("TextButton", () => {
  it("should render text correctly", () => {
    const value = "Click here";

    const { getByText } = render(<TextButton>{value}</ TextButton>);

    const buttonTitle = getByText(value);

    expect(buttonTitle).toBeTruthy();
  });

  it('should call on press function', () => {
    const text = 'click here';
    const spy = jest.fn();

    const {getByText} = render(
      <TextButton onPress={spy}>{text}</TextButton>,
    );

    const button = getByText(text);

    fireEvent.press(button);
    expect(spy).toHaveBeenCalled();
  });
});

