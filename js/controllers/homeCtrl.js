function HomeCtrl(projectService, workService, $location) {

	this.projectService = projectService;
	this.workService = workService;
	this.location = $location;

	this.projects = this.projectService.getProjects();	
	this.workList = this.workService.getWorkList();	
	
}




angular.module('kush').controller('homeCtrl', HomeCtrl);