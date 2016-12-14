<<<<<<< HEAD
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
  "welcomeMessage": "Hello and Welcome to my Resume!",
  "skills": [
      "HTML", "CSS", "Javascript", "Web Development",
  ],
  "bioPic": "images/fry.jpg",
};


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var bioPic = HTMLbioPic.replace("%data%",bio.bioPic);
var welcomeMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);

for (var i = 0; i < bio.contact.length; i++) {
  var formattedEmail = HTMLemail.replace("%data%", bio.contact[0]);
  var formattedMobile = HTMLmobile.replace("%data%", bio.contact[1]);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contact[2]);
  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contact[3]);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contact[4]);


  $("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);
}

$("#header").append(formattedName, formattedRole, bioPic, welcomeMessage);

$("#header").append(HTMLskillsStart);
for (var i =0; i < bio.skills.length; i++) {

 var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
 $("#skills").append(formattedSkill);
}


// -- end of BIO HEADER SECTION

// -- This is the WORK SECTION

var work = {
 jobs: [
   {
   "title": "Part Time Data Entry Loan Verification Specialist",
   "employer": "Advantage",
   "location": "Santa Ana",
   "dates": "Oct 2016 - Present",
   "description": "Part time position where I assisted in the processing, filing, and reviewing of mortgage files and utilized an information control system to keep up to date records of all client information"
 },
 {
   "title": "Billing Specialist",
   "employer": "Student Services",
   "location": "Newport Beach",
   "dates": "Aug 2015 - June 2016",
   "description": "Full time position where I provided billing support and customer service a student loan consolidation company, primarily through the use of telecommunications. I used company CRM software and web applications such as DebtPayPro to assist with client information, process payments and handle document filing. I also used Google Applications and Microsoft Office to establish better workflow for other departments and to manage company data and processing."
 }
 ]
};

function displayWork() {
 for (var i = 0; i < work.jobs.length; i++) {
   $("#workExperience").append(HTMLworkStart);

   var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
   var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
   var formattedEmployerTitle= formattedTitle + formattedEmployer;
   var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
   var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
   var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);

   $(".work-entry:last").append(formattedEmployerTitle);
   $(".work-entry:last").append(formattedDates);
   $(".work-entry:last").append(formattedDescription);
   $(".work-entry:last").append(formattedLocation);
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

// -- start of the internationalizeButton

function inName(name) {
 name = name.trim().split(" ");

 name[0] = name[0].slice(0,1).toUppperCase() + name[0].slice(1).toLowercase();
 name[1] = name[1].toUppperCase();

 return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);

// -- end of the internationalizeButton section

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
     "description":"Creating and implementing UX Design strategies to develop from scratch a sustainable and impressive blog meant for an up and coming E-Commerce site",
     "images": [
       "images/197x148.gif",
     ]
   },
   {
     "title":"E-Commerce Site",
     "dates": 2017,
     "description":"Creating and implementing UX Design strategies to develop from scratch a sustainable and impressive site used for E-Commerce, through webhosting platforms such as Shopify",
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
  "onlineprograms": [
    {
      "title": "Front End Web Development Nanodegree Program",
      "school": "Udacity",
      "url": "https://www.udacity.com/",
      "dates": "October 2016"
    },
    {
      "title": "User Experience Learning Path",
      "school": "Springboard",
      "url": "https://www.springboard.com/learning-paths/user-experience-design",
      "dates": "July 2016"
    }
  ],
};

$("#education").append(HTMLonlineClasses);
$("#education").append(HTMLschoolStart);

education.display = function() {
  education.onlineprograms.forEach(function(op) {
    var formattedonlineTitle = HTMLonlineTitle.replace("%data%",op.title);
    var formattedonlineDates = HTMLonlineDates.replace("%data%", op.dates);
    var formattedonlineSchool = HTMLonlineSchool.replace("%data%", op.school);
    var formattedonlineUrl = HTMLonlineURL.replace("%data%", op.url);
    $(".education-entry:last").append(formattedonlineTitle, formattedonlineDates, formattedonlineSchool, formattedonlineUrl);
  });
};

education.display();

// -- end of EDUCATION SECTION

||||||| merged common ancestors
=======
/*
This is empty on purpose! Your code to build the resume will go here.
 */
>>>>>>> origin/master
