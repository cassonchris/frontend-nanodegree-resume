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

var name = "Chris Casson";
var role = "Java Developer";

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);

$("#header").prepend(HTMLskillsStart);
$("#skills").prepend(formattedSkills);
$("#header").prepend(formattedBioPic);
$("#header").prepend(formattedLocation);
$("#header").prepend(formattedGithub);
$("#header").prepend(formattedEmail);
$("#header").prepend(formattedMobile);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
