function HomeCtrl(projectService, resumeService, $location) {

	this.projectService = projectService;
	this.resumeService = resumeService;
	this.location = $location;

	this.projects = this.projectService.getProjects();	
	this.work = this.resumeService.getWorkData();	
	this.edu = this.resumeService.getEduData();	
	this.awards = this.resumeService.getAwardData();	
	
}




angular.module('kush').controller('homeCtrl', HomeCtrl);