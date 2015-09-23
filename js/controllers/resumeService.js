function ResumeService() {

}


angular.module('kush').service('resumeService', ResumeService);


ResumeService.prototype.getWorkData = function() {
	return WORK_DATA;
};

ResumeService.prototype.getEduData = function() {
	return EDUCATION_DATA;
};

ResumeService.prototype.getAwardData = function() {
	return AWARDS_DATA;
};


var WORK_DATA = [{
	"company": "Polar (MediaVoice)",
	"logo": "../../img/polar.png",
	"role": "Marketing Analyst",
	"date": "Sep - Dec 2014",
	"caption": "Polar is a advertising technology firm that works with the world's largest publishers.",
	"links": {
		"benchmarks": "http://polar.me/benchmarks/"
	},
	"description": "Queried, analyzed and presented insights on reporting data from client's advertising programs. Summarized performance benchmarks for native advertisements across publishing industry."
}, {
	"company": "AGF Investments",
	"logo": "../../img/agf.jpg",
	"role": "Web Content Co-op",
	"date": "Jan - Apr 2014",
	"caption": "AGF is one of Canada’s leading independent asset management firms.",
	"links": {
		"AGF": "https://www.agf.com/t2scr/static/app/homepage/public/en/index.jsp",
	},
	"description": "Organized sales notes, market insights and commentaries for sales team and advisors. Developed webpages on both internal and client-facing sites."
}]


var EDUCATION_DATA = [
{
	"company": "Brainstation",
	"logo": "../../img/brainstation.png",
	"role": "Student",
	"date": "June - Aug 2015",
	"caption": "Full-stack web development course.",
	"links": {
		"main": "http://www.brainstation.io/course/toronto/web-development-immersive",
	}
} , {
	"company": "University of Waterloo",
	"logo": "../../img/waterloo.jpg",
	"role": "B.ASc Candidate",
	"date": "2013 - 2018",
	"caption": "Studying Systems Design Engineering, a 5 year program.",
	"links": {
		"courses": "https://ugradcalendar.uwaterloo.ca/page/ENG-Systems-Design-Engineering",
	} 
}]

var AWARDS_DATA = [
{
	"award": "TD Scholarship for Community Leadership",
	"logo": "../../img/td.png",
	"date": "2013",
	"description": "'Twenty TD Scholarships for Community Leadership are awarded to students in their last year of high school who have demonstrated leadership in improving their community. Each scholarship has a value of up to $70,000.'",
	"links": {
		"TD": "http://www.tdcanadatrust.com/products-services/banking/student-life/scholarship-for-community-leadership/index.jsp",
	}
}

]










