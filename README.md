### <a href="https://abhinav7903.github.io/Youtube_Multiple_Screen/" target="_blank"> Demo</a>

# YouTube Multiple Screen React App README

This README provides an overview of a React application that allows users to create multiple YouTube video screens by entering YouTube video links. The application extracts video codes from the links and displays the videos in an organized manner.

## Prerequisites

Before using this application, ensure you have the following prerequisites:

- Node.js and npm: You need Node.js and npm (Node Package Manager) installed on your machine to run React applications.

- Basic understanding of React: Familiarity with React concepts like components and states will be helpful.

## Installation

To set up and run this YouTube Multiple Screen React application, follow these steps:

1. Clone or download the repository containing the React code files.

2. Open a terminal/command prompt and navigate to the project directory.

3. Install the project dependencies by running the following command:

   ```bash
   npm install
   ```

4. Once the dependencies are installed, you can start the development server with the following command:

   ```bash
   npm start
   ```

5. The application should open in your default web browser. If it doesn't, you can access it at `http://localhost:3000`.

## Usage

The YouTube Multiple Screen React app allows users to create multiple video screens by entering YouTube video links. Here's how you can use it:

1. Enter a YouTube video link in the input field provided.

2. Click the "Add Video" button.

3. The app will extract the video code from the link and add the video to the list of displayed videos.

4. Each video is displayed in an iframe with the YouTube video embedded, allowing you to watch multiple videos simultaneously.

5. You can continue adding more videos by entering their links and clicking the "Add Video" button.

6. To view the added videos, scroll through the screen, and each video will be displayed in its respective iframe.

## Customization

You can customize this React application to fit your specific requirements:

- **Styling**: The application uses CSS classes for styling. You can customize the styles by modifying the CSS classes in the `index.css` file.

- **Video Screen Layout**: Adjust the layout of the video screens by modifying the HTML structure within the `return` statement in the `App` component.

- **Video Code Extraction**: If you need to change how video codes are extracted from YouTube links, you can modify the `extractVideoCode` function in the `App` component.

## Troubleshooting

If you encounter any issues while using the application, consider the following troubleshooting steps:

- Check the console in your browser's developer tools for any JavaScript errors or warnings that might affect the application's functionality.

- Ensure that Node.js and npm are installed correctly on your machine and that you have installed the project dependencies using `npm install`.



## Acknowledgments

- This application was developed using React, a popular JavaScript library for building user interfaces.

- Special thanks to the React community for providing resources and tools for creating web applications with ease.
