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

function displayBio() {
    if (bio.skills.length > 0) {
        $("#header").prepend(HTMLskillsStart);
        bio.skills.forEach(function(val) {
            var formattedSkills = HTMLskills.replace("%data%", val);
            $("#skills").append(formattedSkills);
        });
    }
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