### High Level Description: ### 
If you’re a student at UW and want to buy used items you’re at the best place. This is a platform to buy and sell used items for UW students. It allows for the below mentioned use cases and offers a very simple UI with the required backbone of a simple functioning ecommerce application.

### How to use and access the website: ###

Our webiste is able to be publically accessed and used through the following URL [https://sanchezbrian.github.io/yardsale-uw/](https://sanchezbrian.github.io/yardsale-uw/)

### How to report bugs ###
To report bugs, we have set up issue tracking through the Github user interface and have provided the user with a template to follow. The template consists of a short description of the bug, the steps to reproduce it, the expected behavior after the bug is resolved, any screenshots of the bug, information about the device used to access the web app, and also a section to include any additional information the user may want to include.

Our issue tracking/bug report allows a user to submit bugs with 4 different possible labels/tags that consist of:
* **Major Bug** - Major bugs are used for any bugs that arise with major/core functionality of the application.
* **Minor Bug**- Minor bug is used for any bugs that arise with minor features of the application that need to be fixed when it comes to wording, small UI changes, etc.
* **Feedback** -  Feedback is used to provide the developers with feedback on any use cases or user experience issues that would make the application easier to use.
* **Documentation** - Documentation report/bug if they see that any of the provided documentation needs to be changed or further documented if something is wrong.  

#### USE CASES: ####

**Sign up and Log in:** 
We perform our sign in through google sign in API which gives access to a feature where we can only sign in through UW’s domain. Given that google automatically forwards to UW’s SSO sign in, we have a perfect way of authenticating UW users only for our application. The user would just need to enter their UW email after which they will be forwarded to UW SSO to authenticate themselves.

**Add Product:** 
The user, after logging in, will be able to add products to the posts page.They will be prompted for a title, short description, price, and to select a category from an existing list and to upload any images if they want to. This post will then be added to the products page with the user’s information attached to it.

**View Post:**
When scrolling through the posts on the main products page, the user can click on any post that they wish to purchase which would then lead to a pop up modal where they can view the seller’s (the user that posted it) information (such as name and email) so that they can then go ahead and contact the seller to purchase the product. The user will also be able to filter the products page based on category. The user will also be able to like a post if they want to save it for later.


**Profile Page:** 
Each user will have their own profile page where they will have access to all the posts they have currently displayed on the products page. Users, from here, will be able to delete posts that they have successfully been able to sell.

