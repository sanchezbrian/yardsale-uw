### Team report (status update for your TA, including an agenda for the project meeting).

## Meeting Agenda:

- What do you think of our new way we are going about UW authentication. Although it is not the original plan, it is very close and takes care of exactly we want it to.

## Last Week
This week went really well in terms of our current process and finishing our Beta. As of we have been working on switching
from the local database from db.json to a cloud-hosted database. After some research with what would work best for
our product we decided on using Firebase. The switch is almost done, and we have now focused our efforts in adding a file
upload to the database so that a user can submit photos along with the product. Going forward we also want to add
to our testing and write new test to ensure our new database is working as intended. Firebase also provided a way of
email authentication we plan on exploring that to see if it will fit our use cases. We have merged all of our work on to
the master branch and all worked very well together.

We were also able to merge everything into the master branch that we have used for our beta release. We also changed the file structure so that our CI using Github Actions is able to find the tests and automatically run them according to our script.

Transitioning from our in-memory backend to Firebase has been a bit of a struggle figuring out how to get the items that have been posted just because it's new documentation we have to read and learn. As of now, we have been able to use axios to call endpoints that firebase automatically generates. We also looked into what functionality firebase has with login and signup and we read that they have email confirmation as a way to login/signup so we will try and figure that out to use for now as we still figure out UW SSO. We also realized that the modules we were using for our mock databse was doing alot of functioanilty that we did not have to worry abut signing in and hashing passwords. So we just have to read the docmentation on firebase to see what we can use and leverage to help us out with this switch.


## This week

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

### GOALS FOR THE NEXT WEEK
With next week, we want to be able to complete the new UW authincation through Google and full since there won't quite be a Sign-Up process. 
We just have to change up the user flow a little bit to accomodate for what we want this to look like. We also plan to have the ability for users to
finally be able to store images now that we know Firbase is able to accomodate for this. Lastly, we plan to make progress towards finishing the profile page 
where a user can see all their items for sale and have the ability to mark as sold to take off the market.


### Contributions of individual team members.

#### Abselom - Backend
- Ensure database switch is complete
- File upload to addProduct
- Add testing of new database

#### Japeheth - Scrum Manager
- Add unit tests to the code we have already
- Communicate with both groups and check progress
- Complete Weekly Status Report

#### Brian - Frontend
- Ensure sign-in/login works with new database
- Research email authentication w/ Firebase
- Salt and hash passwords on database

#### Andres - Backend
- Ensure database switch is complete
- File upload to addProduct
- Add testing of new database

#### Nishith - Frontend
- Ensure sign-in/login works with new database
- Research email authentication w/ Firebase
- Salt and hash passwords on database



## This Week Tasks:

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

