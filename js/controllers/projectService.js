function ProjectService() {

	this.projects = PROJECT_DATA;
}

ProjectService.prototype.getProjects = function() {
	return this.projects
};


angular.module('kush').service('projectService', ProjectService);


var PROJECT_DATA = [{
	"title": "MyNews",
	"links": {
		"github": "https://github.com/kushthaker/mynews.git",
		"demo": "http://mynews.kushthaker.com/",
	},
	"caption": "Using AngularJS to aggregate news from multiple external APIs.",
	"description": "Designing after the popular tech content aggregator Panda, MyNews is catered to the content I'm most interested in.",
	"topic_1": "Technical",
	"topic_1_content": "MyNews is a mostly client-side application developed using AngularJS. The API calls use a proxy server to avoid CORS issues with some of the external APIs.",
	"topic_2": "Toughest Issue",
	"topic_2_content": "The HTTP requests were supposed to sit completely within the API service. As this exposed access tokens and did not work with specific APIs due to CORS issues, I had to deploy a small rails app to handle the API calls. Another issue that has to be addressed is the load time of the app. This would include both refactoring for smoother async HTTP requests and UX to help the user see progress."
}, {
	"title": "SetupShop",
	"links": {
		"github": "https://github.com/kushthaker/setupshop",
		"demo": "https://web.archive.org/web/20140617203138/http://canyouth.ca/",
	},
	"caption": "E-commerce platform for shoppers and shopkeepers.",
	"description": "An e-commerce platform for shoppers to explore shops and place orders on products, and for shopkeepers to manage their inventory.",
	"topic_1": "Technical",
	"topic_1_content": "Ruby on Rails is used as an API to an AngularJS front-end. Users can be shoppers or shopkeepers, shoppers can place orders on multiple products, and shopkeepers can manage their shop’s inventory. Entity relationships include a has-and-belongs-to-many relationship between orders and products. Shopping cart is handled completely on the client using local storage.",
	"topic_2": "Next Steps",
	"topic_2_content": "With the setupshop API in place, the next steps include wireframing with a user walkthrough in mind and building out the respective views. Also, the stripe API can be implemented to facilitate payments."
}, {
	"title": "Benchmarks",
	"links": {
		"github": "http://polar.me/benchmarks/",
		"demo": "http://polar.me/benchmarks/",
	},
	"caption": "Performance benchmarks for native ads across publishing industry.",
	"description": "Performance benchmarks on native advertisements across the publishing industry, established through Polar's deep pool of reporting data.",
	"topic_1": "Requirements",
	"topic_1_content": "As laid out by the the product and marketing teams, the requirements for this project included that performance data on ads be categorized by device and industry vertical, future iterations to benchmarks be supported, and that results are interpretable by non-technical users.",
	"topic_2": "Technical",
	"topic_2_content": "The benchmarking process involved writing SQL queries to pull from a database organized in a snowflake schema. Tables would then be brought to excel for any manual categorization and addition of data, before being summarized through calculations and pivot tables. This process would be repeated for several key categories."
}, {
	"title": "CanYouth",
	"links": {
		"github": "http://development.canyouth.ca/",
		"demo": "https://web.archive.org/web/20140617203138/http://canyouth.ca/",
	},
	"caption": "Online forum for York Region students.",
	"description": "Started in 2011, CanYouth is a public forum for students to share their ideas on everything from education, politics and to life as a teenager.",
	"topic_1": "Iterative Product",
	"topic_1_content": "The product continues to follow an iterative cycle of understanding user (student) interests, designing content to fit those interests, getting feedback on the content, and releasing it to the public through Facebook and Twitter. The cycle involves working with the Wordpress site, writing copy for upcoming articles and coordinating social media campaigns.",
	"topic_2": "Current",
	"topic_2_content": "A new team of high school students are working on recreating the website to better fit user needs. You can view a past version of canyouth.ca on the web archive and the current development progress of the new team in the links above."
}]







