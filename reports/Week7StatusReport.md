                 ### Team report (status update for your TA, including an agenda for the project meeting).

## Meeting Agenda:

- Talk about how our app is progressing and if we are making enough progress each week
- What would you want our beta release to look like. How much more would we need with our app.

## Last Week
Last week was great in terms of progress and learning React even deeper. We were able to finish up a login and signup
screen just so that we can start connecting posts to users so we can now implement a user being able to communicate with
a user after they like a product. With this, we were able to figure out how to make our in-memory backend contain users
and their password and other information. Although this is not using SSO authentication yet, we needed this so we can
mimick what the rest of the app flow will look like. SSO is still a work in progress. We were also able to figure out
how to style the main products list a little differently. We have also been making progress on the ItemPage and allowing
a user to click on an item to bring up seller information and more information about the product itself. We were also
able to setup the initial backbone of the continuous integration using GitHub Actions. Although our test suite is still
very minimal, we were able to make our CI pass with a dummy test when on the CI and testing branch.

Last week was also tough trying to learn standards for unit testing on React. We were able to read articles and find
great resources on what frameworks to use but they are proving to be much more difficult than we thought. We have been
using Mocha and other testing frameworks that integrate well with Mocha. We may switch over to using Jest as a our unit
test framework if we find ourselves at a standstill. We aren't to worried about testing being too much of a blocker as
of yet because we all plan to keep reading documentation and watching videos on how best to use these testing frameworks.
We have also been pretty stuck on integrating SSO authentication with the way UW IT provided. We plan to keep emailing
them on what other ways their are to integrate what we want. Currently, the docs and resources they sent ask us to set
up microsoft servers that we are not too familiar with and how any of that works and connects with each other.
## This week
This week went really well in terms of our current process and finishing our Beta. As of we have been working on switching
from the local database from db.json to a cloud-hosted database. After some research with what would work best for
our product we decided on using Firebase. The switch is almost done, and we have now focused our efforts in adding a file
upload to the database so that a user can submit photos along with the product. Going forward we also want to add
to our testing and write new test to ensure our new database is working as intended. Firebase also provided a way of
email authentication we plan on exploring that to see if it will fit our use cases. We have merged all of our work on to
the master branch and all worked very well together.
### GOALS FOR THE NEXT WEEK
With next week, we still are going to continue learning and improving with our knowledge with Mocha and Enzyme so that
we can write some more extensive test as well as new ones for the new database. We plan to finish setting up the
email verification via Firebase if possible.


### Contributions of individual team members.

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



## This Week Tasks:

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

