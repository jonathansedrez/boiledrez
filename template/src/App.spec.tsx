import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("should render App", () => {
  expect(App).toBeDefined();
});

test("should increment counter if click on Add button", async () => {
  render(<App />);
  const button = screen.getByText("Add");
  expect(screen.getByText(/Count: 0/)).toBeInTheDocument();
  await userEvent.click(button);
  expect(screen.getByText(/Count: 1/)).toBeInTheDocument();
});
