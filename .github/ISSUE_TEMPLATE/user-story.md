---
name: User Story
about: This template defines a user story.
title: ''
labels: ''
assignees: ''

---

**As a** [role]
**I need** [function]
**So that** [benefit]
### Details and Assumptions
    * [document what you know]
### Acceptance Criteria
    gherkin
    Given [some context]
    When [certain action is taken]
    Then [the outcome of action is observed]

----


# 1. Finish user stories
**Label:** new
**Priority:** High
**Assignees:** Full-stack developer
**Estimate:** 2 points
**Dependencies:** None
**As a** Full-stack developer
**I need** to complete all user stories for the GiftLink project
**So that** the team has a clear understanding of the requirements and can start working on them

### Details and Assumptions
* The user stories cover both backend and frontend development tasks
* The user stories are based on the project requirements and have been discussed and agreed upon by the team

### Acceptance Criteria (Gherkin)
Given the project requirements are available
When I finish writing the user stories
Then each user story should clearly state the role, function, benefit, details, assumptions, and acceptance criteria


# 2. Initialize and populate MongoDB
**Label:** icebox
**Priority:** High
**Assignees:** Full-stack developer
**Estimate:** 2 points
**Dependencies:** 1
**As a** Full-stack developer
**I need** to initialize and populate MongoDB for the GiftLink project
**So that** the application has a structured and populated database to work with

### Details and Assumptions
* MongoDB is the chosen database for this project
* The database needs to be structured according to the data requirements of the application
* Initial data is available for population (see seed/seed.js)

### Acceptance Criteria (Gherkin)
Given the gifts data file is available
When I run the seed script or import data into MongoDB
Then the database should contain at least 16 gift documents in the 'gifts' collection


# 3. Run skeleton application
**Label:** backlog
**Priority:** High
**Assignees:** Full-stack developer
**Estimate:** 1 point
**Dependencies:** 2
**As a** Full-stack developer
**I need** to run the skeleton application for the GiftLink project
**So that** I can verify the basic setup and functionality of the application

### Details and Assumptions
* The skeleton application has been set up with the basic structure and dependencies
* The application can be run locally for testing and development purposes

### Acceptance Criteria (Gherkin)
Given the skeleton application is set up
When I run the application using 'npm start'
Then it should start successfully without errors and the main page should be accessible at /api/health


# 4. Implement a landing page and navigation
**Label:** technical debt
**Priority:** Medium
**Assignees:** Full-stack developer
**Estimate:** 2 points
**Dependencies:** 3
**As a** Full-stack developer
**I need** to implement a landing page and navigation for the GiftLink project
**So that** users can easily navigate through the application and access its features

### Details and Assumptions
* The landing page is the first page users see when they visit the application
* The navigation should be intuitive and user-friendly, allowing users to easily navigate to different sections of the application

### Acceptance Criteria (Gherkin)
Given the landing page and navigation design is ready
When I implement the landing page and navigation
Then users should see the landing page at the root URL and can use navigation to access other sections


# 5. Add authentication components and logic
**Label:** new
**Priority:** High
**Assignees:** Full-stack developer
**Estimate:** 3 points
**Dependencies:** 3
**As a** Full-stack developer
**I need** to add authentication components and logic to the GiftLink project
**So that** users can securely log in and access their personal data and features

### Details and Assumptions
* The authentication system should provide secure access control for the application
* It should include components for user registration, login, and password recovery

### Acceptance Criteria (Gherkin)
Given the authentication requirements
When I implement registration, login, and password recovery
Then users can register, log in, recover password, and access their personal data securely


# 6. Implement Gifts details page
**Label:** icebox
**Priority:** Medium
**Assignees:** Full-stack developer
**Estimate:** 2 points
**Dependencies:** 2,3
**As a** Full-stack developer
**I need** to implement a Gifts details page for the GiftLink project
**So that** users can view detailed information about each gift

### Details and Assumptions
* The Gifts details page should display all relevant information about a gift
* It should be accessible from the main Gifts listing page

### Acceptance Criteria (Gherkin)
Given the main Gifts listing page is implemented
When a user clicks on a gift
Then the user is navigated to the Gifts details page and sees all relevant information about the gift


# 7. Implement a search component
**Label:** backlog
**Priority:** Medium
**Assignees:** Full-stack developer
**Estimate:** 2 points
**Dependencies:** 2,3
**As a** Full-stack developer
**I need** to implement a search component for the GiftLink project
**So that** users can easily find specific gifts based on their preferences

### Details and Assumptions
* The search component should allow users to search for gifts based on various criteria such as name, category, price, etc.
* It should provide relevant search results in a user-friendly manner

### Acceptance Criteria (Gherkin)
Given the search API and UI are implemented
When a user enters search criteria and submits
Then the user sees a list of gifts matching the criteria


# 8. Design and implement the comments feature
**Label:** technical debt
**Priority:** Low
**Assignees:** Full-stack developer
**Estimate:** 3 points
**Dependencies:** 6
**As a** Full-stack developer
**I need** to design and implement a comments feature for the GiftLink project
**So that** users can engage in discussions about the gifts

### Details and Assumptions
* The comments feature should allow users to post comments, reply to other comments, and view all comments for a gift
* It should be intuitive and user-friendly, promoting user engagement and interaction

### Acceptance Criteria (Gherkin)
Given the gift details page is implemented
When a user posts or replies to a comment
Then the comment is saved and displayed under the correct gift


# 9. Containerize the services and applications
**Label:** new
**Priority:** Medium
**Assignees:** Full-stack developer
**Estimate:** 2 points
**Dependencies:** 3,5,6
**As a** Full-stack developer
**I need** to containerize the services and applications of the GiftLink project
**So that** the deployment process is simplified and the application runs consistently across different environments

### Details and Assumptions
* Containerization involves packaging the application and its dependencies into a container
* Tools like Docker can be used for this process

### Acceptance Criteria (Gherkin)
Given the backend and frontend are implemented
When I create Dockerfiles and build images
Then the services run in containers and can be deployed consistently


# 10. Deploy backend and frontend
**Label:** backlog
**Priority:** High
**Assignees:** Full-stack developer
**Estimate:** 2 points
**Dependencies:** 9
**As a** Full-stack developer
**I need** to deploy the backend and frontend of the GiftLink project
**So that** the application is accessible to users

### Details and Assumptions
* The backend and frontend have been developed and tested
* The deployment process involves setting up the server, uploading the application, and configuring the server settings

### Acceptance Criteria (Gherkin)
Given the backend and frontend are ready for deployment
When I deploy them to the chosen platforms
Then the application is accessible to users and functions as expected
