var bio = {
    "name" : "Chris Casson",
    "role" : "Java Developer",
    "contacts" : {
        "mobile" : "219-730-3993",
        "email" : "cassonchris723@gmail.com",
        "github" : "cassonchris",
        "location" : "Chicago, IL"
    },
    "bioPic" : "images/me.jpg",
    "skills" : [ "Java", "SQL" ],
    "display" : function() {
        if (bio.skills.length > 0) {
            $("#header").prepend(HTMLskillsStart);
            bio.skills.forEach(function(val) {
                var formattedSkills = HTMLskills.replace("%data%", val);
                $("#skills").append(formattedSkills);
            });
        }

        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);

        $("#header").prepend(formattedBioPic);
        $("#header").prepend(formattedLocation);
        $("#header").prepend(formattedGithub);
        $("#header").prepend(formattedEmail);
        $("#header").prepend(formattedMobile);
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
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
        if (work.jobs.length > 0) {
            work.jobs.forEach(function(val) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", val.employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", val.title);
            var formattedLocation = HTMLworkLocation.replace("%data%", val.location);
            var formattedDates = HTMLworkDates.replace("%data%", val.dates);
            var formattedDescription = HTMLworkDescription.replace("%data%", val.description);
            $(".work-entry:last").append(formattedEmployer + formattedTitle);
            $(".work-entry:last").append(formattedLocation);
            $(".work-entry:last").append(formattedDates);
            $(".work-entry:last").append(formattedDescription);
        });
    }
    }
};

var education = {
    "schools" : [
        {
            "name" : "Purdue Calumet",
            "degree" : "Master of Science",
            "major" : "Computer Science",
            "location" : "Hammond, IN",
            "dates" : "2013 - 2017"
        },
        {
            "name" : "Purdue North Central",
            "degree" : "Bachelor of Science",
            "major" : "Computer Information Technology",
            "location" : "Westville, IN",
            "dates" : "2009 - 2013"
        }
    ],
    "onlineCourses" : [
        {
            "title" : "Android Development for Beginners",
            "school" : "Udacity",
            "url" : "https://www.udacity.com/course/android-development-for-beginners--ud837"
        },
        {
            "title" : "Intro to HTML and CSS",
            "school" : "Udacity",
            "url" : "https://www.udacity.com/course/intro-to-html-and-css--ud304"
        },
        {
            "title" : "Intro to Computer Science",
            "school" : "Udacity",
            "url" : "https://www.udacity.com/course/intro-to-computer-science--cs101"
        },
        {
            "title" : "JavaScript Basics",
            "school" : "Udacity",
            "url" : "https://www.udacity.com/course/javascript-basics--ud804"
        },
        {
            "title" : "How to Use Git and GitHub",
            "school" : "Udacity",
            "url" : "https://www.udacity.com/course/how-to-use-git-and-github--ud775"
        },
        {
            "title" : "Programming Foundations with Python",
            "school" : "Udacity",
            "url" : "https://www.udacity.com/course/programming-foundations-with-python--ud036"
        },
        {
            "title" : "Intro to Relational Databases",
            "school" : "Udacity",
            "url" : "https://www.udacity.com/course/intro-to-relational-databases--ud197"
        },
        {
            "title" : "Full Stack Foundations",
            "school" : "Udacity",
            "url" : "https://www.udacity.com/course/full-stack-foundations--ud088"
        },
        {
            "title" : "Data Wrangling with MongoDB",
            "school" : "Udacity",
            "url" : "https://www.udacity.com/course/data-wrangling-with-mongodb--ud032"
        },
        {
            "title" : "Intro to Physics",
            "school" : "Udacity",
            "url" : "https://www.udacity.com/course/intro-to-physics--ph100"
        }
    ],
    "display" : function() {
        this.schools.forEach(function(school) {
            $("#education").append(HTMLschoolStart);
            var formattedName = HTMLschoolName.replace("%data%", school.name);
            var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
            var nameDegree = formattedName + formattedDegree;
            var formattedMajor = HTMLschoolMajor.replace("%data%", school.major);
            var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
            var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
            $(".education-entry:last").append(nameDegree);
            $(".education-entry:last").append(formattedDates);
            $(".education-entry:last").append(formattedLocation);
            $(".education-entry:last").append(formattedMajor);
        });
        if (this.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);
            this.onlineCourses.forEach(function(course) {
                $("#education").append(HTMLschoolStart);
                var formattedTitle = HTMLonlineTitle.replace("%data%", course.title);
                var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
                var formattedURL = HTMLonlineURL.replace("%data%", course.url);
                $(".education-entry:last").append(formattedTitle + formattedSchool);
                $(".education-entry:last").append(formattedURL);
            });
        }
    }
};

var projects = {
    "projects" : [
        {
            "title" : "FileUpload",
            "description" : "JavaScript plugin for uploading files to a server."
        }
    ],
    "display" : function() {
        this.projects.forEach(function(val) {
            $("#projects").append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace("%data%", val.title);
            var formattedDescription = HTMLprojectDescription.replace("%data%", val.description);
            $(".project-entry:last").append(formattedTitle);
            $(".project-entry:last").append(formattedDescription);
        });
    }
};

bio.display();
work.display();
education.display();
projects.display();

$("#mapDiv").append(googleMap);

$(document).click(function(loc) {
    logClicks(loc.pageX, loc.pageY);
});