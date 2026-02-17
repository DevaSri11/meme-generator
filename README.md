# Meme Generator App: Create and Customize Your Own Memes
The Meme Generator App is a React-based application that enables users to create and customize their own memes with ease. With a simple and intuitive interface, users can input their desired top and bottom text, and generate a random meme image to accompany their text.

## Project Overview
The Meme Generator App is designed to provide a fun and engaging experience for users who enjoy creating and sharing memes. The application utilizes the Imgflip API to fetch a wide range of meme images, which can be randomly selected and paired with user-inputted text.

## Problem Statement
Creating and customizing memes can be a time-consuming and laborious process, requiring users to manually search for images and overlay text. The Meme Generator App aims to simplify this process, providing a streamlined and user-friendly interface for creating and sharing memes.

## Technical Overview
The Meme Generator App is built using React, a popular JavaScript library for building user interfaces. The application utilizes React state management to store and update the user's inputted text and selected meme image. The Imgflip API is used to fetch a list of available meme images, which are then randomly selected and paired with the user's inputted text.

## Data Overview
The Meme Generator App uses the Imgflip API to fetch a list of available meme images. The API returns a JSON object containing a list of meme images, each with a unique URL and ID. The application stores this data in a React state variable, which is updated whenever the user generates a new meme image.

## Folder Structure
```markdown
meme-project/
├── .gitignore
├── components
│   ├── Header.jsx
│   ├── Main.jsx
├── index.html
├── index.jsx
├── package.json
├── public
├── src
│   ├── App.jsx
│   ├── style.css
├── vite.config.js
```


## Key Features Used
The Meme Generator App utilizes the following key features:
* React state management to store and update user input and meme image data
* Imgflip API to fetch a list of available meme images
* Random meme image generation feature to pair user-inputted text with a random meme image
