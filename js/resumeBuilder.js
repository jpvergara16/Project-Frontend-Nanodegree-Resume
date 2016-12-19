
/*
This is empty on purpose! Your code to build the resume will go here.
 */
// -- start of BIO HEADER SECTION

var bio = {
  "name": "Julius Vergara",
  "role": "Web Developer, UX Designer",
  "contact": {
      "email": "juliuspvergara@gmail.com",
      "phone": "818-669-1091",
      "github": "jpvergara16",
      "twitter": "@jp_vergara_",
      "location": "Irvine"
  },
  "welcomeMessage": "Hello, I'm Julius, and welcome to my Resume!",
  "skills": [
      "HTML", "CSS", "Javascript", "Web Development",
  ],
  "bioPic": "images/headshot.jpg",
};

bio.display = function () {
// header info
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var bioPic = HTMLbioPic.replace("%data%",bio.bioPic);
var welcomeMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
// contact info
var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
var formattedMobile = HTMLmobile.replace("%data%", bio.contact.phone);
var formattedGithub = HTMLgithub.replace("%data%", bio.contact.github);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contact.twitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contact.location);

$("#footerContacts").append(formattedEmail, formattedGithub, formattedTwitter, formattedMobile, formattedLocation);
$("#header").prepend(formattedName, formattedRole);
$("#header").append(bioPic);
$("#header").append(welcomeMessage);
$("#header").append(HTMLskillsStart);
for (var i =0; i < bio.skills.length; i++) {

 var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
 $("#skills").append(formattedSkill);
  }
}

bio.display();

// -- end of BIO HEADER SECTION

// - NAV BAR SECTION

// -- end of NAV BAR section

// -- This is the WORK SECTION

var work = {
 jobs: [
   {
   "title": "Loan Verification Specialist (PT)",
   "employer": "Advantage",
   "location": "Santa Ana",
   "dates": "Oct 2016 - Present",
   "description": "Mortgage loan management and review utilizing company file inventory system"
 },
 {
   "title": "CSR & Billing Specialist (FT)",
   "employer": "Student Services",
   "location": "Newport Beach",
   "dates": "Aug 2015 - June 2016",
   "description": "Billing support, Customer Phone Service, Utilized CRM software DebtPayPro and other web applications such as Google Apps"
 }
 ]
};

function displayWork() {
 for (var i = 0; i < work.jobs.length; i++) {
   $("#workExperience").append(HTMLworkStart);

   var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
   var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
   var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
   var formattedEmployerTitle= formattedTitle + formattedEmployer;
   var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
   var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

   $(".work-entry:last").append(formattedEmployerTitle);
   $(".work-entry:last").append(formattedLocation);
   $(".work-entry:last").append(formattedDates);
   $(".work-entry:last").append(formattedDescription);
 }
}

displayWork();

function locantionizar (work_obj) {
 var locationArray = [];

 for (job in work_obj.jobs) {
   var newLocation = work_obj.jobs[job].location;
   locationArray.push(newLocation);
 }

 return locationArray;
}

// -- end of WORK SECTION

// -- start of PROJECTS SECTION

var projects = {
 "projects": [
   {
     "title":"Resume",
     "dates":2016,
     "description":"Updating professional portfolio and resume through Udacitys FEND program",
     "images": [
       "images/197x148.gif",
     ]
   },
   {
     "title":"Blog",
     "dates":2016,
     "description":"Creating and implementing UX Design strategies to develop from scratch a sustainable and impressive blog meant for an up and coming E-Commerce site (In Development)",
     "images": [
       "images/197x148.gif",
     ]
   },
   {
     "title":"E-Commerce Site",
     "dates": 2017,
     "description":"Creating and implementing UX Design strategies to develop from scratch a sustainable and impressive site used for E-Commerce, through webhosting platforms such as Shopify (In Development)",
     "images": [
       "images/197x148.gif",
     ]
   },
 ]
};

projects.display = function() {
 for (var i = 0; i < projects.projects.length; i++) {
   $("#projects").append(HTMLprojectStart);

   var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
   var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
   var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

   $(".project-entry:last").append(formattedTitle);
   $(".project-entry:last").append(formattedDates);
   $(".project-entry:last").append(formattedDescription);

   for (x = 0; x < projects.projects[i].images.length; x++ ) {
     var formattedImage = HTMLprojectImage.replace("%data%", projects.projects.images);
     $(".project-entry:last").append(formattedImage);
   }
 }
};

projects.display();

// -- end of PROJECTS SECTION

// -- EDUCATION SECTION

var education = {
  "online": [
    {
      "title": "Front End Web Development Nanodegree Program",
      "school": "Udacity",
      "url": "udacity.com",
      "dates": "October 2016"
    },
    {
      "title": "User Experience Learning Path",
      "school": "Springboard",
      "url": "springboard.com/learning-paths/user-experience-design",
      "dates": "July 2016"
    },
    {
      "title": "Web Development Courses",
      "school": "Codecademy",
      "url": "codecademy.com",
      "dates": "July 2016"
    },
  ],
  "schools": [
    {
      "name": "UC Irvine",
      "dates": "August 2012 - July 2015",
      "location": "Irvine",
      "major":"Public Health and Business Management",
      "description": "Left my third year to pursue other interests and research"
    }
  ]
};

$("#education").append(HTMLonlineClasses);
$("#education").append(HTMLschoolStart);

education.display = function() {
  education.online.forEach(function(op) {
    var formattedonlineSchool = HTMLonlineSchool.replace("%data%", op.school);
    var formattedonlineTitle = HTMLonlineTitle.replace("%data%",op.title);
    var formattedonlineDates = HTMLonlineDates.replace("%data%", op.dates);
    var formattedonlineUrl = HTMLonlineURL.replace("%data%", op.url);
    $(".education-entry:last").append(formattedonlineSchool, formattedonlineTitle, formattedonlineDates, formattedonlineUrl);
  });
  education.schools.forEach(function(s) {
    var formattedschoolName = HTMLschoolName.replace("%data%", s.name);
    var formattedschoolDates = HTMLschoolDates.replace("%data%", s.dates);
    var formattedschoolLocation = HTMLschoolLocation.replace("%data%", s.location);
    var formattedschoolMajor = HTMLschoolMajor.replace("%data%", s.major);
    var formattedschoolDescription = HTMLschoolDescription.replace("%data%",s.description);
    $(".education-entry:last").append(formattedschoolName, formattedschoolDates, formattedschoolLocation, formattedschoolMajor, formattedschoolDescription);
  });

};

education.display();

// -- end of EDUCATION SECTION

/* -- start of the internationalizeButton (I opted this out but still kept the code for lesson purposes)

function inName(name) {
 name = name.trim().split(" ");

 name[0] = name[0].slice(0,1).toUppperCase() + name[0].slice(1).toLowercase();
 name[1] = name[1].toUppperCase();

 return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);

-- end of the internationalizeButton section
*/
