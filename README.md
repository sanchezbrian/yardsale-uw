# Yardsale-UW
## Group Project for CSE 403

### Project Summary
Students can use an app where they have a scam-free platform to find fellow UW students and staff to sell/buy used items. Trust is a very important part of any e-commerce application, and delivering on and maintaining that trust makes for a very easy-to-use and quick to recommend the app for the entire UW community.

Students right now find themselves on Facebook marketplace, Offerup, etc. where they find multiple people from various locations/backgrounds which may result in a lack of trust, especially for people new to Seattle. It is always good practice and in fact, the user’s responsibility to make sure that the purchase goes through smoothly. These kinds of applications always make ground for scammers. What we aim to do with our application is authenticate users by integrating UW’s single sign-on.

### Layout of the Repos
We will have two separate repositories for frontend and backend. The backend structure would contain multiple directories that hold the apis(endpoint, request, response), the entity models, and unit tests. Within the api’s directory, there will be separate directories for the different services. The frontend structure would contain directories for the different screens needed for the project and unit tests. Within the different screen directories, there will be directories for separate components.

### Milestones:
#### Front end:
1. Create an overall front-end prototype.
2. Login page.
3. Profile Screen
4. Create Profile Screen
5. See a collection of posts that sellers posted from the main page.
6. Screen that allows you to create an item
7. Be able to individually select posts on the main page to see full detail.
8. Button that presents a small box of the sellers' email address within the individual post screen

#### Back end:
1. Create an overall backend schema.
2. Login authentication API done.
3. Database set up.
4. Get: GetAllPosts,GetPostById,GetProfile
5. Put: UpdatePostById, UpdateProfile
6. Post: CreatePost, CreateProfile
7. Delete: DeletePost


### Use Cases (Functional Requirements):
- Users should be able to look and buy items that they want to purchase
- Users should be able to sell and post items they want to give away
- Users should be able to create profiles for others to see if they are interested

### Non-functional Requirements:
Be able to support a large number of users on the system at the same time while also being able to store lots of user data.
Store data in an efficient manner to be able to scale up easily and quickly as needed.
Straightforward and easy to use for users (Good UI & UX)

### Features:
* Ability for a user to post an item
* Ability for a user to login and authenticate
* Allow a user to click on an item into an expanded view to view a more in-depth item description.
* Ability for a user to get the seller's email to send an email to a seller regarding an item.

### Software Toolset
User Interface: On the front end, we will be creating a website application interface using JavaScript and React. May switch to a web application if that is more feasible.
Process Management: Pull data from the database, run algorithms, process the data, and push the data to the Client-side frontend using primarily Java.
User Database and Product Database and other required databases such as favorites, etc.: SQL Databases, may look at other types of DBMS (cloud including) if they are more suitable to our needs.
Source Control: Github

### Yardsale-UW Living Document
https://docs.google.com/document/d/1rqT9nvWCRKEx_4AztqSvhUb9JB40Gl_3U8ca3pKi7OM/edit#heading=h.21khp3obqpvd

### GitHub repo
https://github.com/sanchezbrian/yardsale-uw.git

### Initial Project Proposal
https://docs.google.com/document/d/1X6cDkh0zGpwjwSFYTDaUMRYVx3LB3jjG6I4oAcKU0Vk/edit?usp=sharing

### Instructions:
#### How to run the application:
  - packages you need to install before running the application - node
  npm install - [react-router-dom, json-server json-server-auth, axios, jwt-decode, bulma]
  - npm start to start the application on default web browser

  #### To test - run npm install followed by npm test. This happens automatically as we set up github actions
  #### to build and test everytime a new push/pull is made.

### Functional Use Cases at the time of Beta Release:
Users can sign up and log in
User can add products after logging in
Users can view and click on existing products to reveal seller information


