### Team report (status update for your TA, including an agenda for the project meeting).

## Meeting Agenda:

- Show you our website and progress!
- Talk about inal touches as we lead up to the final realase.

## Last Week
This past week has been a little less productive than previous weeks. With second round of midterms and exams, there was not as much progress made as we wanted
but that is ok because we all have beeing doing research on the tasks we have left to do. Although, code productivity was lower than we wanted, we have all still been
researching how top approach our next tasks to be able to complete what we want for the final realease.

We were able to figure out a way to use UW authentication by using Google sign-in authentication. We saw this as the best way to go about this because how easy it is
to integrate Google authentication with Firebase since it is Google owned. This may seem like a work-around our original plan, but not quite. We were actually able to
figure out how to restrict what domains are able to login through Google. This means that only '@uw.edu' emails are able to login. This is great because when a user logs
in using the UW email domain, it takes them to the UW SSO authenctiation automatially taking care of verifying if a user is from UW. This was a great accomplishment for us!

We were also abel to research how to host out website on a public domain. Again, Firebase is great because we found out we can host the website through Firebase and we
would be able to have a public domian people can access. We also figure out that Firebase has a way to store images so that will make it easy for us to allow user to upload 
images when a productb is for sale.

With this is mind, although lines of code was not as high as we wanted, we still had great progress in research and getting familiar with how we will implement our next
tasks to keep our app progressing how we want.

## This week

This week we were able to polish up lost of final features that we wanted and needed to make our website ready to be an MVP. We were able to integrate UW SSO
through Google Authenctiation. This all works with the sign in process now, the flow still needs to change a small bit. We were also able to fiure out how to 
add images and display them and connect an image to a post on the backend. This was a huge milestone because it really puts the website well put together.
We were also able to make a new page where the user can see all of their posts they have for sale!



### GOALS FOR THE NEXT WEEK
Next week, we are going to attempt to allow a user to add multiple images to a post and make an image carousel that a user can scroll through. We also need
to allow for a user to mark their item for sale once it is sold to take it off the market. We also need to change and tweak the login flow to make it make 
more sense as right now it can be confusing based on the current flow. 


### Contributions of individual team members.

#### Abselom - Backend
- Complete storing images in our databse
- Work on profile page

#### Japeheth - Scrum Manager
- Add unit tests to the code we have already
- Complete storing images in our database
- Work on profile page

#### Brian - Frontend
- Finish up UW authentication through Google
- Research email authentication w/ Firebase
- Work on new login user flow with the UW authentication change in mind

#### Andres - Backend
- Complete storing images in our databse
- Add testing of new database

#### Nishith - Frontend
- Finish up UW authentication through Google
- Research email authentication w/ Firebase
- Work on new login user flow with the UW authentication change in mind



## This Week Tasks:

#### Abselom - Backend
- Work on allowing a user to save a post (stretch goal)
- Work on hosting our website publicly

#### Japeheth - Scrum Manager
- Work on allowing a user to add multiple images
- Work on adding an image carousel

#### Brian - Frontend
- Tweak the login user flow with the UW authentication change in mind to make more sense for a first time user
- Fix some small logic change in the MainProductList to only show others items for sale and not the user logged in.

#### Andres - Backend
- Work on allowing a user to save a post (stretch goal)
- Work on hosting our website publicly

#### Nishith - Frontend
- Complete the feature to allow a user to delete/mark an item to take off the market

