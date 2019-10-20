class HomeCtrl {

  constructor($scope, UserService, $location) {
    'ngInject';

    this.name = '';
    this.gender= '';
    this.phNumber='';
    this.trainingMode='';
    this.courseSelected='';
    this.courses=[];
    this.levels=['Level 1', 'Level 2', 'Level 3'];
    this.level='';
    this.levelType='';
    this.message='';
    this.$Uservice = UserService;
    this.users = [];
    this.$scope = $scope;
  }

  async getUsers() {
    this.users = await this.$Uservice.getUsers().then(res => res.data);
    this.$scope.$applyAsync();
  }

  getCourses() {
      if (this.trainingMode == 'VCR') {
        this.courses = [{coursename: 'HTML'},{coursename: 'CSS'},{coursename: 'JS'}]
      }
      else {
         this.courses = [{coursename: 'AngularJs'},{coursename: 'BackboneJs'}]
      }
    }

  selectedLevel () {
    if (this.level == 'Level 1'){
      this.levelType = 'this is advance level'
    }
    else if (this.level == 'Level 2') {
      this.levelType = 'this is medium level'
    }
    else {
      this.levelType = 'this is basic level'

    }
  }

  save () {
    if (this.gender == 'male') {
      this.message = "Mr." + this.name + " has opted for " + this.level + " level training on " + this.courseSelected + " in " + this.trainingMode + " mode.";
            this.message += "He can be contacted at:" + this.phNumber;
    }
    else {
       this.message = "Ms." + this.name + " has opted for " + this.level + " level training on " + this.courseSelected + " in " + this.trainingMode + " mode.";
    }
  }
buttonDisabeled () {
  if (this.name == '' || this.gender == '' || this.courseSelected =='' || this.trainingMode =='' || this.level == '') {
    return true;
  }
}
}

export default HomeCtrl;