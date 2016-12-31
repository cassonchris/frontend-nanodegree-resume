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
    "skills" : [ "Java", "SQL" ]
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
    ]
};

var education = {
    "schools" : [
        {
            "schoolName" : "Purdue Calumet",
            "schoolDegree" : "Master of Science",
            "schoolMajor" : "Computer Science"
        },
        {
            "schoolName" : "Purdue North Central",
            "schoolDegree" : "Bachelor of Science",
            "schoolMajor" : "Computer Information Technology"
        }
    ]
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

function displayBio() {
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

function displayWork() {
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

displayBio();
displayWork();
projects.display();

$(document).click(function(loc) {
    logClicks(loc.pageX, loc.pageY);
});