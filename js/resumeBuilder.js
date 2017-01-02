var bio = {
    "name" : "Chris Casson",
    "role" : "Java Developer",
    "contacts" : {
        "mobile" : "219-730-3993",
        "email" : "cassonchris723@gmail.com",
        "github" : "cassonchris",
        "location" : "Chicago, IL"
    },
    "welcomeMessage" : "Hello!",
    "bioPic" : "images/me.jpg",
    "skills" : [ "Java", "SQL" ],
    "display" : function() {
        var formattedName = HTMLheaderName.replace("%data%", this.name);
        var formattedRole = HTMLheaderRole.replace("%data%", this.role);
        var formattedMobile = HTMLmobile.replace("%data%", this.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", this.contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%", this.contacts.github);
        var formattedLocation = HTMLlocation.replace("%data%", this.contacts.location);
        var formattedBioPic = HTMLbioPic.replace("%data%", this.bioPic);
        var formattedWelcomMessage = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);

        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
                
        $("#header").append(formattedBioPic);
        $("#header").append(formattedWelcomMessage);
        
        if (this.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            this.skills.forEach(function(skill) {
                var formattedSkills = HTMLskills.replace("%data%", skill);
                $("#skills").append(formattedSkills);
            });
        }
        
        $("#topContacts").append(formattedMobile);
        $("#topContacts").append(formattedEmail);
        $("#topContacts").append(formattedGithub);
        $("#topContacts").append(formattedLocation);
                
        $("#footerContacts").append(formattedMobile);
        $("#footerContacts").append(formattedEmail);
        $("#footerContacts").append(formattedGithub);
        $("#footerContacts").append(formattedLocation);
    }
};

var work = {
    "jobs" : [
        {
            "employer" : "P&A",
            "title" : "Java Developer",
            "location" : "Chicago, IL",
            "description" : "Migrated data to new system. Created document system interface.",
            "dates" : "2013 - present"
        },
        {
            "employer" : "Weil McLain",
            "title" : "IT Intern",
            "location" : "Michigan City, IN",
            "description" : "Performed help desk functions.",
            "dates" : "2012"
        }
    ],
    "display" : function() {
        this.jobs.forEach(function(job) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
            var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
            var formattedDates = HTMLworkDates.replace("%data%", job.dates);
            var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
            $(".work-entry:last").append(formattedEmployer + formattedTitle);
            $(".work-entry:last").append(formattedLocation);
            $(".work-entry:last").append(formattedDates);
            $(".work-entry:last").append(formattedDescription);
        });
    }
};

var education = {
    "schools" : [
        {
            "name" : "Purdue Calumet",
            "degree" : "Master of Science",
            "majors" : [ "Computer Science" ],
            "location" : "Hammond, IN",
            "dates" : "2013 - 2017",
            "url" : "pnw.edu"
        },
        {
            "name" : "Purdue North Central",
            "degree" : "Bachelor of Science",
            "majors" : [ "Computer Information Technology", "Electrical Computer Engineering Technology" ],
            "location" : "Westville, IN",
            "dates" : "2009 - 2013",
            "url" : "pnw.edu"
        }
    ],
    "onlineCourses" : [
        {
            "title" : "Android Development for Beginners",
            "school" : "Udacity",
            "url" : "https://www.udacity.com/course/android-development-for-beginners--ud837",
            "dates" : "2016"
        },
        {
            "title" : "Intro to HTML and CSS",
            "school" : "Udacity",
            "url" : "https://www.udacity.com/course/intro-to-html-and-css--ud304",
            "dates" : "2016"
        },
        {
            "title" : "Intro to Computer Science",
            "school" : "Udacity",
            "url" : "https://www.udacity.com/course/intro-to-computer-science--cs101",
            "dates" : "2013"
        },
        {
            "title" : "JavaScript Basics",
            "school" : "Udacity",
            "url" : "https://www.udacity.com/course/javascript-basics--ud804",
            "dates" : "2016"
        },
        {
            "title" : "How to Use Git and GitHub",
            "school" : "Udacity",
            "url" : "https://www.udacity.com/course/how-to-use-git-and-github--ud775",
            "dates" : "2015"
        },
        {
            "title" : "Programming Foundations with Python",
            "school" : "Udacity",
            "url" : "https://www.udacity.com/course/programming-foundations-with-python--ud036",
            "dates" : "2016"
        },
        {
            "title" : "Intro to Relational Databases",
            "school" : "Udacity",
            "url" : "https://www.udacity.com/course/intro-to-relational-databases--ud197",
            "dates" : "2016"
        },
        {
            "title" : "Full Stack Foundations",
            "school" : "Udacity",
            "url" : "https://www.udacity.com/course/full-stack-foundations--ud088",
            "dates" : "2016"
        },
        {
            "title" : "Data Wrangling with MongoDB",
            "school" : "Udacity",
            "url" : "https://www.udacity.com/course/data-wrangling-with-mongodb--ud032",
            "dates" : "2016"
        },
        {
            "title" : "Intro to Physics",
            "school" : "Udacity",
            "url" : "https://www.udacity.com/course/intro-to-physics--ph100",
            "dates" : "2013"
        }
    ],
    "display" : function() {
        this.schools.forEach(function(school) {
            $("#education").append(HTMLschoolStart);
            var formattedName = HTMLschoolName.replace("%data%", school.name);
            var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
            var nameDegree = formattedName + formattedDegree;
            var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
            var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
            $(".education-entry:last").append(nameDegree);
            $(".education-entry:last").append(formattedDates);
            $(".education-entry:last").append(formattedLocation);
            school.majors.forEach(function(major) {
                var formattedMajor = HTMLschoolMajor.replace("%data%", major);
                $(".education-entry:last").append(formattedMajor);
            });
            var formattedURL = HTMLonlineURL.replace("%data%", school.url);
            $(".education-entry:last").append(formattedURL);
        });
        if (this.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);
            this.onlineCourses.forEach(function(course) {
                $("#education").append(HTMLschoolStart);
                var formattedTitle = HTMLonlineTitle.replace("%data%", course.title);
                var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
                var formattedDates = HTMLonlineDates.replace("%data%", course.dates);
                var formattedURL = HTMLonlineURL.replace("%data%", course.url);
                $(".education-entry:last").append(formattedTitle + formattedSchool);
                $(".education-entry:last").append(formattedDates);
                $(".education-entry:last").append(formattedURL);
            });
        }
    }
};

var projects = {
    "projects" : [
        {
            "title" : "FileUpload",
            "description" : "JavaScript plugin for uploading files to a server.",
            "dates" : "2016 - current",
            "images" : [ "images/me.jpg", "images/me.jpg" ]
        }
    ],
    "display" : function() {
        this.projects.forEach(function(project) {
            $("#projects").append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
            var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
            $(".project-entry:last").append(formattedTitle);
            $(".project-entry:last").append(formattedDates);
            $(".project-entry:last").append(formattedDescription);
            project.images.forEach(function(image) {
                var formattedImage = HTMLprojectImage.replace("%data%", image);
                $(".project-entry:last").append(formattedImage);
            });
        });
    }
};

bio.display();
work.display();
education.display();
projects.display();

$("#mapDiv").append(googleMap);