# WebOS Simulation

## Overview

This project is a **web-based OS simulation** that mimics a desktop operating system's appearance and functionality. It features a browser app integrated within the OS environment, a settings app with customizable options such as dark mode, and the ability to open multiple apps simultaneously. The design focuses on a modern, responsive user interface, with icons for app navigation and settings for further personalization.

## Features

- **App Management**: 
  - Multiple apps (e.g., clock, settings) can be opened simultaneously.
  - Apps are represented by icons in the app bar for easy access.
  - Icons replace the text labels for a cleaner interface.
  
- **Settings App**: 
  - Users can switch between dark and light modes.
  - Dark mode applies a darker background and white text for a comfortable viewing experience.
  - Options to configure time, including the ability to switch to military time or adjust the timezone.

- **Browser App**:
  > See how to set up the browser at the bottom of this file.
  - An optional integrated browser that functions within the OS simulation, allowing web browsing from within the environment. 

- **Customization**: 
  - The OS layout includes a customizable top bar to display the time, as well as other user settings.
  - Wallpapers and layout are organized with a modern, minimal design approach.

- **User Interface**: 
  - The app bar has rounded corners and provides a polished, modern look.
  - All user interface elements are styled to be responsive, with a focus on usability across devices.

## Requirements

To run the project, ensure you have the following installed:

- **Node.js** (>= 14.x.x)
- **npm** or **yarn** for package management.

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/webos-simulation.git
   cd webos-simulation
   ```

2. **Install dependencies**:

   Using npm:

   ```bash
   npm install
   ```

   Or using yarn:

   ```bash
   yarn install
   ```

3. **Start the development server**:

   Using npm:

   ```bash
   npm start
   ```

   Or using yarn:

   ```bash
   yarn start
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the OS simulation.

## Usage

- **Settings**: Customize your experience by adjusting the settings for dark mode, time format, and more.
- **App Management**: Open and use multiple apps such as the browser or clock app simultaneously. Use the app bar icons for easy navigation.
- **Dark Mode**: Switch to dark mode for a better experience in low-light environments.

## Project Structure

```plaintext
webos/
├── node_modules/            # Dependencies installed by npm/yarn
├── public/
│   ├── favicon.ico          # Favicon for the web app
│   ├── index.html           # Main HTML file for the React app
│   ├── logo192.png          # Web app logo (192x192)
│   ├── logo512.png          # Web app logo (512x512)
│   ├── manifest.json        # Web app manifest file for PWA
│   ├── robots.txt           # Instructions for web crawlers
├── server/                  # Browser files - See bottom on how to set up
├── src/                     # Source code for the web-based OS
│   ├── assets/              # Static assets like images, icons
│   │   ├── browser.png      # Icon for browser app
│   │   ├── clock.jpg        # Icon for clock app
│   │   ├── settings.png     # Icon for settings app
│   │   ├── wallpaper.jpg    # Background wallpaper
│   ├── components/          # Components for the web OS apps
│   │   ├── AppIcon.css      # Styles for app icons
│   │   ├── AppIcon.js       # Logic for rendering app icons
│   │   ├── BrowserApp.css   # Styles for browser app
│   │   ├── BrowserApp.js    # Browser app logic
│   │   ├── ClockApp.js      # Clock app logic
│   │   ├── Desktop.css      # Styles for the desktop layout
│   │   ├── Desktop.js       # Main desktop component logic
│   │   ├── LoginScreen.css  # Styles for login screen
│   │   ├── LoginScreen.js   # Logic for the login screen
│   │   ├── SettingsApp.css  # Styles for settings app
│   │   ├── SettingsApp.js   # Settings app logic (dark mode, etc.)
│   │   ├── TaskBar.css      # Styles for taskbar
│   │   ├── TaskBar.js       # Taskbar component logic
│   ├── App.css              # Global styles for the entire app
│   ├── App.js               # Main entry point for the React app
│   ├── App.test.js          # Unit tests for the main app
│   ├── index.css            # Global index-level styles
│   ├── index.js             # Entry point for React rendering
│   ├── logo.svg             # Logo used in the app (SVG format)
│   ├── reportWebVitals.js   # Optional performance reporting
│   ├── setupTests.js        # Configuration for testing
├── .gitignore               # Files to be ignored by git
├── package-lock.json        # Lock file for exact dependency versions
├── package.json             # Project metadata and dependencies
├── README.md                # Project overview and setup instructions
└── webos.zip                # Archive of the project files
```

## Setting up the Browser App

The browser feature within this WebOS simulation leverages **Ultraviolet Proxy** to handle web requests. To fully integrate this browser functionality into your project, follow these steps:

1. **Clone the Ultraviolet Proxy repository**:  
   The Ultraviolet Proxy can be found at [Ultraviolet Proxy GitHub](https://github.com/titaniumnetwork-dev/Ultraviolet-App). This proxy allows you to route web traffic securely through the browser app.

2. **Add Ultraviolet Proxy to your project**:  
   Once cloned, place the **Ultraviolet Proxy** repository into the `/server` directory of your project. The directory structure should look like this:

   ```plaintext
   webos/
   ├── server/
   │   └── ultraviolet/ (Ultraviolet Proxy goes here)
   ```

3. **Install Ultraviolet dependencies**:  
   Navigate to the `/server/ultraviolet` directory and follow the [installation instructions](https://github.com/titaniumnetwork-dev/Ultraviolet-App/wiki/Deploy-via-terminal) provided in the Ultraviolet repository's README. Typically, this involves running:

   ```bash
   npm install
   ```

4. **Start the Ultraviolet server**:  
   Once installed, start the Ultraviolet server using the appropriate command (usually `npm start` or `node index.js` depending on their instructions). Ensure the server is running before integrating it into your WebOS simulation.

5. **Modify the `BrowserApp.js`**:  
   Inside the `BrowserApp.js` file, located in the `src/components/` directory, update the URL to point to your local Ultraviolet proxy server. For example:

   ```javascript
   src="http://localhost:8080"
   ```

   This allows the browser app within the WebOS simulation to route web requests through the proxy.

6. **Test the Browser App**:  
   With both the React development server and the Ultraviolet proxy running, navigate to the WebOS environment and open the browser app. Test the functionality to ensure the browser correctly routes traffic through the proxy and the browser's frontend appears.

## Contributing

If you'd like to contribute to the project, feel free to submit a pull request. Please ensure that your code adheres to the project's coding style and is properly tested.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
