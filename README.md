PACE in the Classroom
Project Title: PACE in the Classroom
Description: This project provides educational information about NASA's PACE satellite, its applications, and its role in studying the phytoplankton, aerosols, clouds, and ocean ecosystem. The site includes an interactive quiz system to enhance learning and engage users.

Table of Contents
Project Overview
Features
Technologies Used
Requirements
Installation and Setup
Usage
Database Setup
Contributing
License
Project Overview
The PACE in the Classroom project is designed to help users learn about NASA’s Plankton, Aerosol, Cloud, ocean Ecosystem (PACE) satellite, its applications, and the broader impact on climate and environmental science. This project serves as an educational tool for students, teachers, and science enthusiasts, with a special focus on the following areas:

Phytoplankton and its role in the ocean ecosystem
Aerosols and cloud monitoring
Oceanic and atmospheric interactions
Features
Educational Content: Detailed information on the PACE satellite and its areas of study.
Interactive Quiz: A quiz system on PACE and its applications, with results stored in a MongoDB database.
User Authentication: Login and registration system with secure data storage using MongoDB.
User Progress Tracking: Track user quiz scores and maintain a record in the database.
Technologies Used
MongoDB: For storing user data, quiz results, and other project information.
Express.js: Backend framework for building the server.
Node.js: JavaScript runtime environment for the backend.
EJS (Embedded JavaScript Templates): For rendering HTML views.
MongoDB Compass: For viewing and managing database content locally.
Requirements
MongoDB Compass: Required to view the project’s data on your local system.
Localhost Server: The project currently runs only on a localhost server.
Installation and Setup
Clone the Repository:

bash
Copy code
git clone https://github.com/aryan-thawkar/pace_v2
cd pace-in-the-classroom
Install Dependencies:

bash
Copy code
npm install
Set Up Environment Variables:
Create a .env file in the root directory and add your MongoDB URI.
Example:

plaintext
Copy code
MONGO_URI=mongodb://localhost:27017/paceDB
Run the Application:

bash
Copy code
npm start
Access the Project:
Open your browser and go to http://localhost:3000.

Usage
Register an account on the site or log in with existing credentials.
Learn about the PACE satellite, phytoplankton, aerosols, clouds, and the ocean ecosystem through the educational materials provided.
Take the interactive quiz to test your knowledge, with results stored and displayed upon completion.
Database Setup
MongoDB Database: Make sure MongoDB is running on your local system.
MongoDB Compass: Open MongoDB Compass to view, edit, or manage the database content. This project uses MongoDB to store user login, registration, and quiz result information.
Contributing
Contributions are welcome! Please fork this repository and create a pull request with any suggested improvements or fixes.

License
This project is open-source and available under the MIT License.

Enjoy learning with PACE in the Classroom!
