To obtain the source code, we only have one repository, and it could be found with this [link](https://github.com/sanchezbrian/yardsale-uw).

The way we have our repository structure is we have a mainm overall directory that holds all that’s needed for our project. 
Within our directory, we have a src directory that holds the implementation of our project. 
We have a components directory within it, that has the implementation of a specific component (view in the appliaction) that was worked on. 
You can tell what part of the project the component was for based by the name of the file. 
Other files you may find in the src directory are App.js and Index.js that gets our webpage running.

We have a __test__ directory where all our unit tests will be at. 
More information can be found in this [link](https://docs.google.com/document/d/1rqT9nvWCRKEx_4AztqSvhUb9JB40Gl_3U8ca3pKi7OM/edit#bookmark=id.54sx5k7lctq4), under the Test Automation and Continuous Integration Plan.
There is no particular naming conventions for test as long as they make sense and it is easy to tell what is being tested and making sure the file name ends in '.test.js' so that 'npm test' knows which files to run. For example, if the component AddProduct was being
tested, the test name should be 'addProductTest.test.js' and within this file there should be descriptive test methods that concisely show what is being tested with the component.

In order to use our project’s build system, you will need to run npm install then npm start that directs you to a local server webpage. There should be no additional steps needed when building a release. Everything is done the same way when we build the software
The steps to test the software and add new test information is provided with this [link](https://docs.google.com/document/d/1rqT9nvWCRKEx_4AztqSvhUb9JB40Gl_3U8ca3pKi7OM/edit#bookmark=id.54sx5k7lctq4). You can also find additional information about our application using this link as well.
