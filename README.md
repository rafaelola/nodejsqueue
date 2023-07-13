# NodeJs Web Application with Queue Management
This is a simple web application written in Node.js that utilizes queues. 
The Bull library is employed for managing the queues, and it exposes a single endpoint for sending out emails. 
This application can be used to send mass campaign emails to name a few.

## Prerequisites
Before running the application, ensure that Node.js and npm are installed on your system.

### Installation
1. Clone the repository or download the source code.
2. Open a terminal or command prompt and navigate to the project directory.
3. Run the following command to install the dependencies: 

    ```npm install```

### Usage
1. After the installation is complete, start the application by running the following command:

```npm run dev```

This will launch the server and make the endpoint accessible.

2. To interact with the endpoint, you can utilize tools like Postman or AdvancedRestClient. Follow the steps below to send out an email:
   * Open your preferred API testing tool. 
   * Set the HTTP method to POST. 
   * Set the Content-Type header to `application/json`. 
   * Enter the endpoint URL provided by the application. 
   * Specify the necessary request parameters, such as the recipient's `to`, `from`, `subject`, and `text`. 
   * Send the request to initiate the email sending process. 
   * Monitor the application's console output or logs to observe the progress and status of the email sending process.

### Contributing
Contributions to this project are welcome. Feel free to fork the repository and submit pull requests with your improvements.

### License
This project is licensed under the MIT License. Feel free to use and modify the code as per the terms of the license.
