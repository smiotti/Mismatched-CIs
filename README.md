# Mismatched-CIs
Our app is called Mismatched CIs.  Mismatched CIs (Configeration Items) is a Dashboard app that provides users (Group Manager or identified department owner(s)) the ability to identify and analyze mismatched server CIs for their specific department or group within CMDB where the CI owner and billing department do not match causing the billing department to be charged for a CI that is not in the appropriate billing department. In an effort to eliminate misaligned billing charges, the mismatched CIs need to be identified and corrected in CMDB to reflect the appropriate billing department.

Use Case:  The user will be able to log into the app and manage CI data based on user credentials.  Once the user logs into the app, the user can upload a CSV file containing CI data for their specific department or group. The user would receive this CSV file from a ServiceNow Asset Manager.  Upon data import, the user will be able to filter out CI data that does not have a match between CI department owner and department billed by querying DB by user and department ID.  A display of the missmatched CI data will be listed in the HTML dashboard.  The functionality of displaying a graph of this data is available.  An added functionality to notify/email the owner of the mis-aligned CI(s) data is available so that the owner can create a ticket to correct in CMDB.

Technologies used:  Node and Express Web server, backed by a MYSQL Database.  Sequelize is being used as the interface between the two systems (ORM).  The application is deployed on a public cloud platform, Heroku, for the production environment.  User authorization and data access is achieved using JWT.  New technology used:  D3

Applications:  The Mismatched CI Dashboard is a web application using a Node and Express Web Server, backed by a MySQL Database. Sequelize is being used as the interface between the two systems (ORM). The application is deployed on a public cloud platform, Heroku, for the Production environment.

Project requirements:
1. Must use a Node and Express Web Server (the E and N in MEAN/MERN/MEVN/MEHN)
2. Must be backed by a MySQL, MongoDB, or Firebase database with a Sequelize (or Mongoose) ORM/ODM
3. Must have both GET and POST routes for retrieving and adding new data
4. Must be deployed using Heroku (with Data) or AWS
5. Must utilize at least two libraries, packages, or technologies that we haven't discussed Consider hardware (camera, GPS, gyro, game controllers), software (examples include  front-end frameworks like React, back-end, linting), cloud APIs, or other programming languages
6. Must allow for or involve the authentication of users in some way Consider JWT or some other session management tool
7. Must have a polished frontend / UI 
8. Must have folder structure that meets MVC Paradigm
9. Must meet good quality coding standards (indentation, scoping, naming)
10. Must include unit tests via Mocha / Chai and UI tests using Sinon
11. Must include at least 3 custom NPM scripts (i.e. built in npm scrips do NOT count, must be executed using npm run ).
        - Consider scripts needed to prune and/or check for outdated packages (installed: https://www.npmjs.com/package/npm-check), clean (rm -rf node modules) and build scripts (npm i). 
        - Consider using NPX to standardize package execution for all team members
12. Must use HelmetJS npm package
Optional:
1.  Uses webpack
2.  Serverless architecture using any cloud service

Team:  Michelle Brewington, Mirian Ejerenwa, Steve Miotti and Peter Abogi


