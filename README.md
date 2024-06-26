# Full Stack Image Generator


<img width="1728" alt="image" src="https://github.com/rb-multiverse/imageGenerator/assets/91563448/ed2db5cc-f5df-43a7-b1e2-f6631c8b2c04">


This is a full-stack image generator built as a part of the Multiverse Backend Bootcamp project. The application uses React, Firebase, and the Hugging Face API to generate images based on user inputs.

If you are interested in checking out my project's [wireframe](https://lucid.app/lucidchart/a7f09272-aef5-421e-8517-9cda595596a3/edit?viewport_loc=-1749%2C-950%2C3999%2C2345%2C0_0&invitationId=inv_3d61d8e8-d7c1-4e08-8ba3-a1b1897e5fcb).

## Features

- User-friendly interface to input custom parameters for generating images.
- Integration with Firebase authentication for secure user authentication.
- Utilizes the Hugging Face API to generate images based on user inputs.
- Allows users to save generated images to their profile for future reference.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- Firebase: A comprehensive platform for building web and mobile applications, including authentication and database functionality.
- Hugging Face API: An API that provides access to a wide range of machine learning models, including image generation models.

## Setup Instructions

1. Clone the repository:

    `git clone <https://github.com/rb-multiverse/imageGenerator.git>`

2. Install the required dependencies:

    `cd imageGen`

    `npm install`

4. Configure Firebase:

- Create a new Firebase project at [https://console.firebase.google.com/](https://console.firebase.google.com/).
- Retrieve your Firebase project configuration (apiKey, authDomain, etc.).
- Update the configuration in the `src/firebase-config.js` file.

4. Obtain the Hugging Face API access token:

- Create an account on the Hugging Face website at [https://huggingface.co/](https://huggingface.co/).
- Generate an API token from the account settings page.
- Update the API token in the `src/firebase-config.js` file.

5. Start the development server:

    `npm start`

6. Open the application in your browser:

    `http://localhost:3000`

## Contributing

Contributions are welcome! If you find any bugs or want to enhance the features, please open an issue or submit a pull request.

## Acknowledgements

- [Multiverse](https://www.multiverse.io/) - Backend Bootcamp project.
- [React](https://reactjs.org/) - JavaScript library for building user interfaces.
- [Firebase](https://firebase.google.com/) - Platform for building web and mobile applications.
- [Hugging Face](https://huggingface.co/) - API for machine learning models.

