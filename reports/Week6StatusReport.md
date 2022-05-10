### Team report (status update for your TA, including an agenda for the project meeting).

## Meeting Agenda:

 - Talk about how our app is progressing and if we are making enough progress each week
 - What would you want our beta release to look like. How much more would we need with our app.

## Last Week
This week we were able to make a huge amount of progress compared to the previous weeks. We were able to build an initial website with very limited features that we can now improve upon and show that we now have something working. Having this initial app skeleton is vital so that we all have a direction and vision of where we want to be and how we want to get there. We started off the week by creating our website in React and setting up the React enviorment. Through reasearch and tutorials we were able to come up with a very feature-limited but working website. As of now, our website is able to display products that are up for sale and also allows a user to create and post a new product for sale. Although we have not yet fully figured out how to authenticate a user this is great start to keep us moving and progressing. We also currently have set up a in-memory database through the front end so that we can mimich what it would be like once we are able to set up a dedicated backend. The way we are doing this is by creating a json file populated with mock data on our products. From here we use an imported module that creates a simple backend on our local machine where we can call REST API calls like get and post.

This week we also worked on coming up with an architecture for how we want our project to be orginized. This proved to be much more difficult than we anticipated. We were at a crossroad for quite a while on what architecture we wanted to have. From the videos nad tutorials we looked at to learn how to use React, it was not clear what architecture was best standard and practive to use with React. It seemed like most of what we saw with React, everything was jumbled up and there seemed to be no abstraction. In the end, we all agreed to use MCV (Model View Controller) architecture since this is what we were all most used to in the past when it came to web develpoment. There is still some research to do to make sure React allows for this architecture but so far it seems like this is possible using some frameworks like Redux potentially. We also are still figurinh out how to use the documenation that UW IT had sent involving implementing UW SSO authentication. This also proved to be harder to be that we had thought, but as we trial and error through it, hopfully we learn what else we need to contact UW IT even further so that they can help us with what comes with SSO authentication.

## This week
This week was great in terms of progress and learning React even deeper. We were able to finish up a login and signup screen just so that we can start connecting posts to users so we can now implement a user being able to communicate with a user after they like a product. With this, we were able to figure out how to make our in-memory backend contain users andtheir password and other information. Although this is not using SSO authentication yet, we needed this so we can mimick what the rest of the app flow will look like. SSO is still a work in progress. We were also able to figure out how to style the main products list a little differently. We have also been making progress on the ItemPage and allowing a user to click on an item to bring up seller information and more information about the product itself. We were alos able to setup the initial backbone of the continueos integration using GitHub Actions. Although our test suite is still very minimal, we were able to make our CI pass with a dummy test when on the CI and testing branch.

This week was also tough trying to learn standards for unit testing on React. We were able to read articles and find great resources on what frameworks to use but they are proving to be much more difficult than we thought. We have been using Mocha and other testing frameworks thta integrate well with Mocha. We may switch over to using Jest as a our unit test framework if we find ourselves at a standstill. We aren't to worried about testing being too much of a blocker as of yet because we all plan to keep reading documentation and watching videos on how best to use these testing frameworks. We have also been pretty stuck on integrating SSO authentication with the way UW IT provided. We plan to keep emailing them on what other ways their are to integrate what we want. Currently, the docs and resources they sent ask us to set up microsoft servers that we are not too familiar with and how any of that works and connects with eachother.

### GOALS FOR THE NEXT WEEK
With next week, we still are going to continue learning and improving with our knowledge with React. We're still in communication with UW IT to get access to the UW SSO login authenication hoping to gain tractin on progress with this. This week everyone took up many tasks, we found a great way to work where two people work on the same thing together with pair-programming. This proved to be great and effecient just becasue we had 2 minds on one task instead of doing a task alone. We also plan to keep adding unit testing with the code we have written so that we can make sure everything works as it should and we aren't flawed with any of our logic. We also plan to merge many of our branches to the main repository when we can after we restrucure some of the codebase. This will allow us to have everything we have working together as we expect it to.


### Contributions of individual team members.


#### Abselom - Backend
- Ramp up with React
- Create backend repository
- Set up database and connect to server
- Implement CreatePost, GetPost, UpdatePost
- Continue communicating with UW IT for UW login Authentication 

#### Andres - Frontend
- Ramp up with React
- Complete the individual page of a post
- Change the style of the main page
- Restructure the repository

#### Brian - Backend
- Ramp up with React
- Create backend repository
- Set up database and connect to server
- Implement CreatePost, GetPost, UpdatePost
- Continue communicating with UW IT for UW login authentication

#### Japeheth - Frontend
- Ramp up with React
- Complete the individual page of a post
- Change the style of the main page
- Restructure the repository

#### Nishith - Scrum Manager
- Ramp up with React
- Communicate with both groups and check progress
- Help backend with setting the whole repository
- Complete Weekly Status Report


## This Week Tasks:

#### Abselom - Frontend
- Change the style of the main page
- Continue communicating with UW IT for UW login Authentication
- Add unit tests to the code we have already 

#### Andres - Scrum Manager
- Complete the individual page of a post
- Change the style of the main page
- Add unit tests to the code we have already
- Communicate with both groups and check progress
- Complete Weekly Status Report

#### Brian - Frontend
- Add abiliy to store users on in-memory database
- Implement Login and Signup pages
- Restructure the repository
- Create and setup CI
- Continue communicating with UW IT for UW login authentication

#### Japeheth - Frontend
- Complete the individual page of a post
- Change the style of the main page
- Add unit tests to the code we have already

#### Nishith - Frontend
- Add abiliy to store users on in-memory database
- Implement Login and Signup pages
- Find CI frameworks to use

