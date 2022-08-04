@@ -1,2 +1,159 @@
# **Southampton Tennis Academy**
## **Site Overview**

Southampton Tennis Academy is designed to fulfil a genuine need for a high-level, inclusive tennis academy with state of the art facilities in the Southampton area of the UK.

Whilst there are numerous clubs within the county they are often big-business, money-orientated environments or smaller clubs with inadequate coaching and competition programmes not to mention facilities which make training all year round a real challenge.

The ideology here is to provide an amazing setting with high-calibre coaches who are all committed to developing tennis players of all ages and abilities. The centre is new so the site's purpose is to generate awareness within the local and wider community, whilst trying to make it clear that the philosophy is to put the prospective player at the centre of everything irrespective of their age or level.

![Am I Responsive Screenshot](docs/images/amiresponsive.png)

​
## Table of contents:
1. [**Site Overview**](#site-overview)
1. [**Planning stage**](#planning-stage)
    * [***Target Audiences***](#target-audiences)
    * [***User Stories***](#user-stories)
    * [***Site Aims***](#site-aims)
    * [***Wireframes***](#wireframes)
    * [***Color Scheme***](#color-scheme)
    * [***Typography**](#typography)
1. [**Current Features Common to all pages**](#current-features-common-to-all-pages)
    * [***Header Element:***](#header-element)
    * [***The rest of your features***](#features)
    * [**Footer**](#footer)
1. [**Individual Page Content features**](#individual-page-content-features)
    * [**About Page Content**](#about-page-content)
    * [**Teachings Page Content**](#teachings-page-content)
    * [**Community Page Content**](#community-page-content)
    * [**Contact Page Content**](#contact-page-content)
    * [**Form Feedback Page Content**](#form-feedback-page-content)
1. [**Future-Enhancements**](#future-enhancements)
1. [**Testing Phase**](#testing-phase)
1. [**Deployment**](#deployment)
1. [**Tech**](#tech)
1. [**Credits**](#credits)
    * [**Honorable mentions**](#honorable-mentions)
    * [**General reference**](#general-reference)
    * [**Content**](#content)
    * [**Media**](#media)
​
## **Planning stage**
### **Target Audiences:**
​
* Parents looking for somewhere safe and professional their children can train 
* Adults who wish to develop their tennis or compete at a new, exciting facility
* Beginners who are looking for a friendly environment in which to learn the game
* High level players looking for a training base between tournaments

​
### **User Stories:**
​​
* As a user, I want to see what facilities the academy boasts
* As a user, I want to learn about the philosophy of the academy
* As a user, I want to navigate the page to find what I require quickly and easily.
* As a user, I want to learn more about the coaches and what they offer
* As a user, I want to reach out and contact the academy
* As a user, I want to know how to find the academy

​
### **Site Aims:**
​​
* To raise awareness of the new centre and its philosophy
* To provide an opportunity for the user to see profiles of the coaching team
* To offer the user an oppertunity to get in contact
* To provide a contact form the user can complete if they would rather not email or contact via social media
* To show the location of the centre via a map and address

​​
### **Wireframes:**

* Home Page
[Home Page Wireframe](docs/images/home-wireframe.png)

* Team Page
[Team Page Wireframe](docs/images/team-wireframe.png)

* Form Page
[Form Page Wireframe](docs/images/form-wireframe.png)
​

### **Color Scheme:**
​
For the STA site, I decided on two different shades of purple: #9544CB and #ffe9ff. I wanted to evoke similarities to the Wimbledon colours which are purple and green. I chose images with fair amounts of green in them to provide that colour. I had to use white #fff in the header to provide suitable contrast to the background image. I used a grey #575359 as a neutral shade which worked well with the other colours. I also used this as the colour for the footer and some of the text. In the form section I used a yellow #e7df49 a) to provide contrast and b) because it was the closest I could get to the colour of a tennis ball.

​
### **Typography**
​
* Throughout the page, the following fonts are used:
  * Raleway ('https://fonts.googleapis.com/css2?family=Raleway&display=swap') - I had already created a logo which used this font so I wanted to use it throughout the site. I felt that this font offered a clean and modern look which suits the new academy.
  * Sans serif - As a fallback font in the event Raleway wasn't supported by the browser
​
* All fonts were sourced from Google fonts, as stated in the credits.
​
## **Current Features Common to all pages**
​
#### *Navigation Bar:*
​
* The STA logo is present on the left side of the header
* The user is given links to each of the three pages
* Each option is presented in a way that is always obvious and readable by using a large font and hover effects
* The header is responsive thanks to a flex display
* On smaller screens a hamburger menu is provided to ensure mobile users have an optimal experience
* [Screenshot of header](docs/images/home.png)
* [Screenshot of responsive header](docs/images/home-responsive.png)


#### *Footer:*

* The footer contains social media link and a clickable email link so the user can contact the academy
* The footer is responsive and the icons all shrink on smaller screens
* [Screenshot of footer](docs/images/footer.png)
* [Screenshot of responsive footer](docs/images/footer-responsive.png)
​

## **Features**
​
* Home Page [Screenshot of top of home page](docs/images/home1.png)
* The h1 heading features a gradient background colour from top left to bottom right using the purple and gray that is prominent throughout the site (outlined in the colours section). The font size reduces depending on the width of the screen it is being viewed on.
* The main focus of the page is the hero image. This shows two young girls talking by the net on a tennis court. There is an animation which adds a 6 second zoom effect upon the page loading.
* This image was chosen to fit the Wimbledon-esque colour scheme of the website. The two girls are both smiling which helps to create the image of the academy being a safe and friendly place for children.
* There is a text-box placed in line with the first girl's line of sight to give the illusion that she is looking towards it. This was designed to draw the user's attention to the box which lists the facilities of the academy. At the bottom of the list is a ink which takes the user to the contact form page.
* The philosophy section outlines the core beliefs of the academy. The emphasis here is very much on the player and their long-term development being at the centre of everything. It introduces three core principles which are central to the programmes on offer. For consistency, this section features the same gradient background as the h1 heading.
* [Screenshot of bottom of home page](docs/images/home2.png)
* The programme section elaborates on the core principles of competition, coaching and practice. The important message to convey is that there is more to the academy than just coaching. There is a comprehansive competetition programme involving team events and leagues, singles and doubles and rankings tournaments for all ages and abilities. Practice is also an essential ideology at the academy and players as it is recognised that this is often where a lot of the hard work is done.
* This section is split into three divs which sit side by side but stack one on top of the other on smaller screens. In the headings for each div I used relevant icons from Font Awesome which help to reinforce what each one is about.

* Team Page [Screenshot of team page](docs/images/team.png)
* The team page uses the same h1 heading, responsiveness and background gradient as the home page for the purpose of consistency.
​
## **Future-Enhancements**
​
There are a number of improvements which the business would like implemented:
​
* A clickable link allowing the user to call the academy from mobile devices
* Access to a user account in order to make court bookings or book sessions with a coach 
* The ability to view the coaching programme and book on to courses online
* A further page with details of team fixtures and how the user can contact the various captains
* A gallery page showing members and other staff at the facility
​
## **Testing Phase**
​
This is the hardest bit of the readme, when we have completed a page we need to discuss testing.
​
Here is a good idea to talk about how and why you have tested with certain tools and validators so here a list of things to talk through
​
* Responsiveness - How do you test this, dev tools? checking on multiple devices?
​
* Functionality - Each feature needs to be tested before something is complete, talk about the process, click each link check each image, does form validation work, if your using javascript or anything else, does it always behave as the user expects
​
* Validators - Here include images from w3c html validator and css jigsaw (jshint for js and pep8 for python) and the results that came from it
​
​
## **Bugs**
​
We always have bugs in development, a few bullet points here to talk about bugs you found and how you fixed them, in later projects this will be more detailed
​
* Issue - When on mobile the user had horizontal scroll with items overflowing
* Cause - The images had absolute positioning and caused them to go off screen
* Resolution - Changed the width of the image to stay within the confines of the screen.
​
***
## **Deployment**
I deployed the page on GitHub pages via the following procedure: -
​
1. From the project's [repository](pageurl), go to the **Settings** tab.
2. From the left-hand menu, select the **Pages** tab.
3. Under the **Source** section, select the **Main** branch from the drop-down menu and click **Save**.
4. A message will be displayed to indicate a successful deployment to GitHub pages and provide the live link.
​
You  can find the live site via the following URL - [live webpage](https://yoururlhere)
***
​
## **Tech**
​
I used the following technologies for the STA project:
​
- HTML
- CSS
- JavaScript
​
## **Credits**
### **Honorable mentions**
​
My mentor, Richard Wells gave me a lot of help and feedback on the project. Thanks to the Code Institute community on Slack who helped me realise everyone has difficult days.
​
### **Content:**
​
If you took any code from online source and by this i mean copy paste with zero changes mention it here!

### **Media:**
​
Links to the locations of images if you've used them from an online source!
0 comments on commit 7b36a65
Please sign in to comment.
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About

