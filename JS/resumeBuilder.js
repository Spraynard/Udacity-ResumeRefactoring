function inName(name) {
	var nameArray = name.split(" ");
	nameArray[1] = nameArray[1].toUpperCase();
	var full = nameArray.join(" ");
	return full;
}

function displayMap() {
	$("#mapDiv").append(googleMap)
}

var work = {
	"jobs" : [
	{
		"employer" : "SAPA Extrusions",
		"link" : "http://www.sapagroup.com/en/na/profiles/facilities/kalamazoo-mi/",
		"title" : "Quality Engineer",
		"location" : "Kalamazoo, MI",
		"dates" : "December 2016 - Present",
		"description" : "Insert Description Here"
	},
	{
		"employer" : "G-Tech / General Motors",
		"link" : "http://www.gogtech.com/",
		"title" : "Quality Engineer/Metallurgist",
		"location" : "Flint, MI",
		"dates" : "May 2015 - July 2016",
		"description" : "Maintained, and sometimes enacted, quality measures for vehicle part assemblies.\
						Performed duties that were related, and sometimes not related, to the daily job duties required\
						from a Quality Engineer. Finally, was the sole data collector and analyzer for <u>two</u>\
						company projects that helped quality technicans and management be more confident\
						in their decisions on whether or not an assemblied part was good enough quality to ship to customers."
	},
	{
		"employer" : "Waupaca Foundry",
		"link" : "http://www.waupacafoundry.com/en",
		"title" : "R&D Intern", 
		"location" : "Waupaca, WI", 
		"dates" : "May 2014 - September 2014",
		"description" : "Performed duties for the R&D department. This consisted of helping to collect and\
						analyze data for the completion of an automotive-industry PPAP for ductile iron brake\
						rotor resonance frequency. Also among the projects that were worked on was a benchmarking\
						project that compared the product quality of the brake rotors to similar products made by other companies."
	},
	{
		"employer" : "Kalamazoo State Theatre",
		"link" : "http://www.kazoostate.com",
		"title" : "Usher",
		"location" : "Kalamazoo, MI",
		"dates" : "October 2015 - Present",
		"description" : "Job duties consist of ensuring customer satisfaction by answering questions and making sure customers are able to\
						achieve whatever is in their right. Main duty of the position is to guide customers to the seats that they have \
						purchased for the current show."
	}]
};

work.display = function () {

	for (job in work.jobs) {
		$("#workExperience").append(HTMLbluestyling);
		$(".holder:last").append(HTMLworkStart);
		var employer = HTMLworkEmployer.replace(/%link%|%data%/gi, function(matched) {
			if (matched === "%link%") {
				return work.jobs[job].link
			}
			else {
				return work.jobs[job].employer;
			}
		});
		var title = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var employerTitle = employer + title;
		var dates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var description = HTMLworkDescription.replace("%data%", work.jobs[job].description);


		$(".work-entry:last").append(employerTitle);
		$(".work-entry:last").append(dates);
		$(".work-entry:last").append(description);
	}
};

var project = {

	"projects" : [
	{
		title : "Website",
		dates : "December 1st, 2016 - Present",
		description : "My own website to have people be able to learn more about me in a professional\
						and non-professional setting.<br><br><u><b>TECHNOLOGIES USED</b></u>:\
						<ul><li>Google App Engine</li><li>Python (Back end language)</li><li>JavaScript</li><li>Database Manipulation<ul><li style='font-size: 10px;'>GQL (Google-based SQL)</li></ul><li></ul>",
		images : []
	},
	{
		title : "Web Developer Resume",
		dates : "November 10th, 2015 - Present",
		description : "The current resume you are viewing now.<br><br><u><b>TECHNOLOGIES USED</b></u>:\
						<ul><li>Object Oriented JavaScript</li><li>HTML</li><li>CSS</li>",
		images : ["PICS/TIGER.JPG"]
	}]
};

project.display = function() {
	for (var p = 0; p < project.projects.length; p++) {
		$("#projects").append(HTMLgreenstyling);
		$(".holder:last").append(HTMLprojectStart);
		var title = HTMLprojectTitle.replace("%data%", project.projects[p].title);
		var dates = HTMLprojectDates.replace("%data%", project.projects[p].dates);
		var description = HTMLprojectDescription.replace("%data%", project.projects[p].description)

		$(".project-entry:last").append(title);
		$(".project-entry:last").append(dates);
		$(".project-entry:last").append(description);
		$(".project-entry:last").append("<br>");

		var images = project.projects[p].images
		console.log(images)
		if (images.length > 0) {
			for (i in images) {
				var image = HTMLprojectImage.replace("%data%", images[i]);
				$(".project-entry:last").append(image);
			}
		}
	}
};

var bio = {
	"name" : "Kellan Martin",
	"role" : "Web Developer", 
	"contact" : {
		"mobile" : "(906) 231-0761",
		"email" : "kellan.martin@gmail.com",
		"github" : "Spraynard",
		"location" : "Kalamazoo, MI"
	},
	"picture" : "PICS/FIRSTIMAGE.JPG",
	"welcome" : "First of all, thank you for checking out my resume! I am an entry level web developer currently looking for work in any portion of the\
					industry! Below you will be able to find my skills, experience, schools I've attended, and online courses that I have taken in order to \
					brush my web development skills up to the expertise that they are currently at. If you want to contact me about any position, please do not\
					hesitate to use any of the contact methods above. Thank you!",
	"skills" : ["Web Development", "Python", "Java", "JavaScript", "CSS Preprocessors", "HTML/CSS",
				"SQL/PSQL/SQLITE", "Templating"]
};

bio.skills.display = function () {
	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		for (var i = 0; i < bio.skills.length; i++) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[i])
			$("#skills").append(formattedSkill);
		}
	}
};

bio.contact.display = function () {
	var mobile = HTMLmobile.replace("%data%", bio.contact.mobile);
	var email = HTMLemail.replace("%data%", bio.contact.email);
	var github = HTMLgithub.replace("%data%", bio.contact.github);
	var location = HTMLlocation.replace("%data%", bio.contact.location);

	$("#topContacts").append(mobile);
	$("#topContacts").append(email);
	$("#topContacts").append(github);
	$("#topContacts").append(location);
};

var education = {
	"schools" : [
		{
		"name" : "Michigan Technological University",
		"link" : "http://www.mtu.edu",
		"location" : "Houghton, MI",
		"degree" : "B.S.",
		"major" : "Materials Science and Engineering",
		"dates" : "2012 - 2014",
		"seal" : "PICS/MTUSEAL.JPG"
		},
		{
		"name" : "Western Michigan University",
		"link" :"https://wmich.edu",
		"location" : "Kalamazoo, MI",
		"degree" : "None",
		"major" : "General Engineering",
		"dates" : "2009 - 2012",
		"seal" : "PICS/WMUSEAL.PNG"
		}
	],

	"onlineCourses" : [
		{
		"school" : "MIT Open Courseware",
		"dates" : "May 2016 - August 2016",
		"title" : "Introduction to Computer Science",
		"url" : "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-00-introduction-to-computer-science-and-programming-fall-2008/",
		"summary" : "Learn and employ the basics of computer science using the Python scripting language"
		},
		{
		"school" : "Udacity.com",
		"dates" : "November 2016 - December 2016",
		"title" : "Intro to Relational Databases",
		"url" : "https://www.udacity.com/course/intro-to-relational-databases--ud197",
		"summary" : "Learning the basics of SQL and database design, as well as the Python API for connecting Python code to a database (Psycopg2)"
		},
		{
		"school" : "Udacity.com",
		"dates" : "November 2016",
		"title" : "Intro to AJAX",
		"url" : "https://www.udacity.com/course/intro-to-ajax--ud110",
		"summary" : "Learn how to make asynchronous request with JavaScript (using jQuery's AJAX functionality), and how to use data APIs to help embellish my application"
		},
		{
		"school" : "Udacity.com",
		"dates" : "August 2016 - November 2016",
		"title" : "Web Development",
		"url" : "https://www.udacity.com/course/web-development--cs253",
		"summary" : "Learn the basics and the challenges of current web development practices using Google App Engine, Python's Webapp2 library, Jinja2 templating service, and also employ database manipulation using GQL"
		},
		{
		"school" : "Udacity.com",
		"dates" : "November 10th 2016 - November 15th 2016",
		"title" : "Javascript Basics",
		"url" : "https://www.udacity.com/course/javascript-basics--ud804",
		"summary" : "Learn the basics of Javascript while also using the jQuery library to build a resume/portfolio website"
		}
	]
};

education.schools.display = function () {

	for (var i = 0; i < education.schools.length; i++) {

		$("#education").append(HTMLbluestyling);
		$(".holder:last").append(HTMLschoolStart);

		var name = HTMLschoolName.replace(/%link%|%data%/gi, function(matched) {
			if (matched === '%link%') {
				return education.schools[i].link;
			}
			else {
				return education.schools[i].name;
			}
		})
		var location = education.schools[i].location;
		// var location = HTMLschoolLocation.replace("%data%", education.schools[i].location)
		var degree = HTMLschoolDegree.replace("%data%", education.schools[i].degree)
		var nameDegree = name + degree + location;
		var major = HTMLschoolMajor.replace("%data%", education.schools[i].major)
		var dates = HTMLschoolDates.replace("%data%", education.schools[i].dates)
		var seal = HTMLschoolSeal.replace("%data%", education.schools[i].seal)

		$(".education-entry:last").append(nameDegree)
		$(".education-entry:last").append(dates)
		$(".education-entry:last").append(seal)
		//$(".location:last").append(location)
		$(".education-entry:last").append(major)
	}
};

education.onlineCourses.display = function () {
	$("#education").append(HTMLonlineClasses);
	$("#education").append('<hr class="dark-blue">');

	for (var i = 0; i < education.onlineCourses.length; i++ ) {

		$("#education").append(HTMLbluestyling);
		$(".holder:last").append(HTMLschoolStart);

		var title = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
		var school = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
		var titleSchool = title + school;
		var dates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
		var urlhash = HTMLonlineURL.replace(/%data%|#/g, function (matched) {
			if (matched === "%data%") {
				return education.onlineCourses[i].title + " ----Link";
			}
			else {
				return education.onlineCourses[i].url;
			}
		});

		$(".education-entry:last").append(titleSchool)
		$(".education-entry:last").append(dates)
		$(".education-entry:last").append(urlhash)
	}
};

name = HTMLheaderName.replace("%data%", bio.name)
role = HTMLheaderRole.replace("%data%", bio.role)
pic = HTMLbioPic.replace("%data%", bio.picture)
message = HTMLwelcomeMsg.replace("%data%", bio.welcome)

$("#header").prepend('<div style="float: right;"><a href="/" id="homereturn">Return to Home</a></div><hr id="topLine">')
$("#header").prepend(role)
$("#header").prepend(name)
bio.contact.display()
$("#header").append(pic)
$("#header").append(message)

bio.skills.display()
// Fills out work experience area.
work.display();
project.display();
education.schools.display();
education.onlineCourses.display();
displayMap();

$("#main").append(internationalizeButton);
