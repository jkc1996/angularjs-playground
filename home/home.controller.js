class HomeCtrl {

  constructor($scope, UserService, $location) {
    'ngInject';

    this.name = "AngularJS";
    this.$Uservice = UserService;
    this.users = [];
    this.$scope = $scope;
  }

  async getUsers() {
    this.users = await this.$Uservice.getUsers().then(res => res.data);
    this.$scope.$applyAsync();
  }

}

export default HomeCtrl;