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
    "positions" : [
        {
            "employer" : "P&A",
            "title" : "Java Developer",
            "location" : "Chicago, IL"
        },
        {
            "employer" : "Weil McLain",
            "title" : "IT Intern",
            "location" : "Michigan City, IN"
        }
    ],
    "display" : function() {
        if (work.positions.length > 0) {
            work.positions.forEach(function(val) {
                $("#workExperience").append(HTMLworkStart);
                var formattedEmployer = HTMLworkEmployer.replace("%data%", val.employer);
                var formattedTitle = HTMLworkTitle.replace("%data%", val.title);
                var formattedLocation = HTMLworkLocation.replace("%data%", val.location);
                $(".work-entry:last").append(formattedEmployer + formattedTitle);
                $(".work-entry:last").append(formattedLocation);
            });
        }
    }
};

var education = {
    "schools" : [
        {
            "schoolName" : "Purdue Calumet",
            "schoolDegree" : "Master of Science",
            "schoolMajor" : "Computer Science",
            "location" : "Hammond, IN"
        },
        {
            "schoolName" : "Purdue North Central",
            "schoolDegree" : "Bachelor of Science",
            "schoolMajor" : "Computer Information Technology",
            "location" : "Westville, IN"
        }
    ],
    "display" : function() {
        this.schools.forEach(function(school) {
            $("#education").append(HTMLschoolStart);
            var formattedName = HTMLschoolName.replace("%data%", school.schoolName);
            var formattedDegree = HTMLschoolDegree.replace("%data%", school.schoolDegree);
            var nameDegree = formattedName + formattedDegree;
            var formattedMajor = HTMLschoolMajor.replace("%data%", school.schoolMajor);
            var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
            $(".education-entry:last").append(nameDegree);
            $(".education-entry:last").append(formattedMajor);
            $(".education-entry:last").append(formattedLocation);
        });
    }
};

var projects = {
    "projectArray" : [
        {
            "title" : "FileUpload",
            "description" : "JavaScript plugin for uploading files to a server."
        }
    ],
    "display" : function() {
        this.projectArray.forEach(function(val) {
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