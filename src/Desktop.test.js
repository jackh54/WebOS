import { render, screen } from "@testing-library/react";
import Desktop from "./components/Desktop";

test('renders the desktop with time display', () => {
  render(<Desktop />);

  // Check if the time display element is present
  const timeDisplay = screen.getByText(/AM|PM/); // Adjust for your time format
  expect(timeDisplay).toBeInTheDocument();
});

test('renders the taskbar with app icons', () => {
  render(<Desktop />);

  // Check if the taskbar icons are present
  const clockIcon = document.querySelector('.taskbar-icon.clock');
  const browserIcon = document.querySelector('.taskbar-icon.browser');
  const settingsIcon = document.querySelector('.taskbar-icon.settings');

  expect(clockIcon).toBeInTheDocument();
  expect(browserIcon).toBeInTheDocument();
  expect(settingsIcon).toBeInTheDocument();
});
