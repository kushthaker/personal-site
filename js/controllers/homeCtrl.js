function HomeCtrl(projectService, workService) {

	this.projectService = projectService;
	this.workService = workService;

	this.projects = this.projectService.getProjects();	
	this.workList = this.workService.getWorkList();	
	
}


angular.module('kush').controller('homeCtrl', HomeCtrl);