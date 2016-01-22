
  'use strict';


  angular.module('sbAdminApp')
         .filter('startFrom', function () {
    return function (input, start) {
      return input.slice(start - 1);
    };
  });

  angular.module('sbAdminApp')
         .controller('ProjectJobs', function ($scope) {


    $scope.projects = [{"ID":"15-00006","Name":"Gordon's Test Project","CompanyNumber":"34","LocationNumber":"6218","EngineerLastName":"Freeman","EngineerFirstName":"Gordon","City":"Columbus","County":"Hocking"},{"ID":"15-00027","Name":"Larry's Test Project","CompanyNumber":"34","LocationNumber":"3851","EngineerLastName":"Stevens","EngineerFirstName":"Larry","City":"Mansfield","County":"Hocking"},{"ID":"15-00063","Name":"William's Test Project","CompanyNumber":"34","LocationNumber":"4751","EngineerLastName":"Freeman","EngineerFirstName":"William","City":"Hilliard","County":"Lake"},{"ID":"15-00092","Name":"Jim's Test Project","CompanyNumber":"34","LocationNumber":"2594","EngineerLastName":"Freeman","EngineerFirstName":"Jim","City":"Dublin","County":"Delaware"},{"ID":"15-00044","Name":"Walter's Test Project","CompanyNumber":"34","LocationNumber":"9816","EngineerLastName":"Smith","EngineerFirstName":"Walter","City":"Mansfield","County":"Hocking"},{"ID":"15-00043","Name":"Brian's Test Project","CompanyNumber":"34","LocationNumber":"2639","EngineerLastName":"Johnson","EngineerFirstName":"Brian","City":"Hilliard","County":"Lake"},{"ID":"15-00072","Name":"Jim's Test Project","CompanyNumber":"34","LocationNumber":"1294","EngineerLastName":"Jones","EngineerFirstName":"Jim","City":"Columbus","County":"Hocking"},{"ID":"15-00051","Name":"Thomas's Test Project","CompanyNumber":"34","LocationNumber":"6569","EngineerLastName":"Johnson","EngineerFirstName":"Thomas","City":"Columbus","County":"Licking"},{"ID":"15-00002","Name":"Walter's Test Project","CompanyNumber":"34","LocationNumber":"6663","EngineerLastName":"Schoeff","EngineerFirstName":"Walter","City":"Mansfield","County":"Delaware"},{"ID":"15-00022","Name":"Brian's Test Project","CompanyNumber":"34","LocationNumber":"2802","EngineerLastName":"Johnson","EngineerFirstName":"Brian","City":"Mansfield","County":"Franklin"},{"ID":"15-00033","Name":"William's Test Project","CompanyNumber":"34","LocationNumber":"5620","EngineerLastName":"Jones","EngineerFirstName":"William","City":"Dublin","County":"Wood"},{"ID":"15-00089","Name":"William's Test Project","CompanyNumber":"34","LocationNumber":"5364","EngineerLastName":"Schoeff","EngineerFirstName":"William","City":"Delaware","County":"Lake"},{"ID":"15-00004","Name":"Gordon's Test Project","CompanyNumber":"34","LocationNumber":"2419","EngineerLastName":"Johnson","EngineerFirstName":"Gordon","City":"Dublin","County":"Wood"},{"ID":"15-00092","Name":"Larry's Test Project","CompanyNumber":"34","LocationNumber":"8073","EngineerLastName":"Schoeff","EngineerFirstName":"Larry","City":"Dublin","County":"Licking"},{"ID":"15-00018","Name":"Walter's Test Project","CompanyNumber":"34","LocationNumber":"2026","EngineerLastName":"Schoeff","EngineerFirstName":"Walter","City":"Marion","County":"Delaware"},{"ID":"15-00006","Name":"Thomas's Test Project","CompanyNumber":"34","LocationNumber":"7605","EngineerLastName":"Stevens","EngineerFirstName":"Thomas","City":"Mansfield","County":"Lake"},{"ID":"15-00027","Name":"Larry's Test Project","CompanyNumber":"34","LocationNumber":"8944","EngineerLastName":"Freeman","EngineerFirstName":"Larry","City":"Dublin","County":"Lake"},{"ID":"15-00044","Name":"William's Test Project","CompanyNumber":"34","LocationNumber":"7486","EngineerLastName":"Jones","EngineerFirstName":"William","City":"Columbus","County":"Hocking"},{"ID":"15-00069","Name":"Thomas's Test Project","CompanyNumber":"34","LocationNumber":"3088","EngineerLastName":"Jones","EngineerFirstName":"Thomas","City":"Delaware","County":"Delaware"},{"ID":"15-00009","Name":"Brian's Test Project","CompanyNumber":"34","LocationNumber":"4132","EngineerLastName":"Johnson","EngineerFirstName":"Brian","City":"Hilliard","County":"Delaware"},{"ID":"15-00075","Name":"Jim's Test Project","CompanyNumber":"34","LocationNumber":"4457","EngineerLastName":"Stevens","EngineerFirstName":"Jim","City":"Marion","County":"Licking"},{"ID":"15-00018","Name":"Jim's Test Project","CompanyNumber":"34","LocationNumber":"4161","EngineerLastName":"Jones","EngineerFirstName":"Jim","City":"Delaware","County":"Lake"},{"ID":"15-00030","Name":"William's Test Project","CompanyNumber":"34","LocationNumber":"8884","EngineerLastName":"Jones","EngineerFirstName":"William","City":"Hilliard","County":"Wood"},{"ID":"15-00098","Name":"Gordon's Test Project","CompanyNumber":"34","LocationNumber":"4857","EngineerLastName":"Jones","EngineerFirstName":"Gordon","City":"Mansfield","County":"Licking"},{"ID":"15-00050","Name":"Jim's Test Project","CompanyNumber":"34","LocationNumber":"8969","EngineerLastName":"Johnson","EngineerFirstName":"Jim","City":"Dublin","County":"Lake"},{"ID":"15-00037","Name":"Jim's Test Project","CompanyNumber":"34","LocationNumber":"6919","EngineerLastName":"Schoeff","EngineerFirstName":"Jim","City":"Delaware","County":"Franklin"},{"ID":"15-00004","Name":"Walter's Test Project","CompanyNumber":"34","LocationNumber":"8870","EngineerLastName":"Johnson","EngineerFirstName":"Walter","City":"Mansfield","County":"Wood"},{"ID":"15-00093","Name":"Larry's Test Project","CompanyNumber":"34","LocationNumber":"8542","EngineerLastName":"Schoeff","EngineerFirstName":"Larry","City":"Columbus","County":"Licking"}];
    $scope.dataTable = new AngularDataTable($scope.projects);


    $scope.dateOptions = {
      formatYear: 'yy',
      startingDay: 1
    };
    $scope.format = 'dd-MMMM-yyyy';

  });

  var AngularDataTable = function(data) {

    var adt = {
      data: data,
      filteredData: {},
      filter: '',
      currentPage: 0,
      pageSize: 10,
      sortColumn: '',
      sortDescending: true,

      numberOfPages: numberOfPages,
      currentPageStart: currentPageStart,
      currentPageEnd: currentPageEnd,
      pages: pages,
      goToPage: goToPage,
      next: next,
      previous: previous,
      onFirstPage: onFirstPage,
      onLastPage: onLastPage,
      sort: sort,
      resetPaging: resetPaging
    };

    return adt;

    function numberOfPages() {
      return Math.ceil(this.filteredData.length / this.pageSize);
    };

    function currentPageStart() {
      return (this.currentPage * this.pageSize) + 1;
    };

    function currentPageEnd() {
      return Math.min((this.currentPage + 1) * this.pageSize, this.filteredData.length);
    };

    function pages() {
      var p = [];
      for (var i = 1; i <= this.numberOfPages() ; i++) {
        p.push(i);
      }
      return p;
    };

    function goToPage(page) {
      this.currentPage = page - 1;
    };

    function next() {
      if (!this.onLastPage()) this.currentPage += 1;
    };

    function previous() {
      if (!this.onFirstPage()) this.currentPage -= 1;
    };

    function onFirstPage() {
      return (this.currentPage === 0);
    };

    function onLastPage() {
      return (this.currentPage === this.numberOfPages() - 1);
    };

    function sort(column) {
      this.resetPaging();
      if (this.sortColumn === column) {
        this.sortDescending = !this.sortDescending;
      } else {
        this.sortColumn = column;
        this.sortDescending = false;
      }
    };

    function resetPaging() {
      this.currentPage = 0;
    }

  };

  //var testData = [{"ID":"15-00006","Name":"Gordon's Test Project","CompanyNumber":"34","LocationNumber":"6218","EngineerLastName":"Freeman","EngineerFirstName":"Gordon","City":"Columbus","County":"Hocking"},{"ID":"15-00027","Name":"Larry's Test Project","CompanyNumber":"34","LocationNumber":"3851","EngineerLastName":"Stevens","EngineerFirstName":"Larry","City":"Mansfield","County":"Hocking"},{"ID":"15-00063","Name":"William's Test Project","CompanyNumber":"34","LocationNumber":"4751","EngineerLastName":"Freeman","EngineerFirstName":"William","City":"Hilliard","County":"Lake"},{"ID":"15-00092","Name":"Jim's Test Project","CompanyNumber":"34","LocationNumber":"2594","EngineerLastName":"Freeman","EngineerFirstName":"Jim","City":"Dublin","County":"Delaware"},{"ID":"15-00044","Name":"Walter's Test Project","CompanyNumber":"34","LocationNumber":"9816","EngineerLastName":"Smith","EngineerFirstName":"Walter","City":"Mansfield","County":"Hocking"},{"ID":"15-00043","Name":"Brian's Test Project","CompanyNumber":"34","LocationNumber":"2639","EngineerLastName":"Johnson","EngineerFirstName":"Brian","City":"Hilliard","County":"Lake"},{"ID":"15-00072","Name":"Jim's Test Project","CompanyNumber":"34","LocationNumber":"1294","EngineerLastName":"Jones","EngineerFirstName":"Jim","City":"Columbus","County":"Hocking"},{"ID":"15-00051","Name":"Thomas's Test Project","CompanyNumber":"34","LocationNumber":"6569","EngineerLastName":"Johnson","EngineerFirstName":"Thomas","City":"Columbus","County":"Licking"},{"ID":"15-00002","Name":"Walter's Test Project","CompanyNumber":"34","LocationNumber":"6663","EngineerLastName":"Schoeff","EngineerFirstName":"Walter","City":"Mansfield","County":"Delaware"},{"ID":"15-00022","Name":"Brian's Test Project","CompanyNumber":"34","LocationNumber":"2802","EngineerLastName":"Johnson","EngineerFirstName":"Brian","City":"Mansfield","County":"Franklin"},{"ID":"15-00033","Name":"William's Test Project","CompanyNumber":"34","LocationNumber":"5620","EngineerLastName":"Jones","EngineerFirstName":"William","City":"Dublin","County":"Wood"},{"ID":"15-00089","Name":"William's Test Project","CompanyNumber":"34","LocationNumber":"5364","EngineerLastName":"Schoeff","EngineerFirstName":"William","City":"Delaware","County":"Lake"},{"ID":"15-00004","Name":"Gordon's Test Project","CompanyNumber":"34","LocationNumber":"2419","EngineerLastName":"Johnson","EngineerFirstName":"Gordon","City":"Dublin","County":"Wood"},{"ID":"15-00092","Name":"Larry's Test Project","CompanyNumber":"34","LocationNumber":"8073","EngineerLastName":"Schoeff","EngineerFirstName":"Larry","City":"Dublin","County":"Licking"},{"ID":"15-00018","Name":"Walter's Test Project","CompanyNumber":"34","LocationNumber":"2026","EngineerLastName":"Schoeff","EngineerFirstName":"Walter","City":"Marion","County":"Delaware"},{"ID":"15-00006","Name":"Thomas's Test Project","CompanyNumber":"34","LocationNumber":"7605","EngineerLastName":"Stevens","EngineerFirstName":"Thomas","City":"Mansfield","County":"Lake"},{"ID":"15-00027","Name":"Larry's Test Project","CompanyNumber":"34","LocationNumber":"8944","EngineerLastName":"Freeman","EngineerFirstName":"Larry","City":"Dublin","County":"Lake"},{"ID":"15-00044","Name":"William's Test Project","CompanyNumber":"34","LocationNumber":"7486","EngineerLastName":"Jones","EngineerFirstName":"William","City":"Columbus","County":"Hocking"},{"ID":"15-00069","Name":"Thomas's Test Project","CompanyNumber":"34","LocationNumber":"3088","EngineerLastName":"Jones","EngineerFirstName":"Thomas","City":"Delaware","County":"Delaware"},{"ID":"15-00009","Name":"Brian's Test Project","CompanyNumber":"34","LocationNumber":"4132","EngineerLastName":"Johnson","EngineerFirstName":"Brian","City":"Hilliard","County":"Delaware"},{"ID":"15-00075","Name":"Jim's Test Project","CompanyNumber":"34","LocationNumber":"4457","EngineerLastName":"Stevens","EngineerFirstName":"Jim","City":"Marion","County":"Licking"},{"ID":"15-00018","Name":"Jim's Test Project","CompanyNumber":"34","LocationNumber":"4161","EngineerLastName":"Jones","EngineerFirstName":"Jim","City":"Delaware","County":"Lake"},{"ID":"15-00030","Name":"William's Test Project","CompanyNumber":"34","LocationNumber":"8884","EngineerLastName":"Jones","EngineerFirstName":"William","City":"Hilliard","County":"Wood"},{"ID":"15-00098","Name":"Gordon's Test Project","CompanyNumber":"34","LocationNumber":"4857","EngineerLastName":"Jones","EngineerFirstName":"Gordon","City":"Mansfield","County":"Licking"},{"ID":"15-00050","Name":"Jim's Test Project","CompanyNumber":"34","LocationNumber":"8969","EngineerLastName":"Johnson","EngineerFirstName":"Jim","City":"Dublin","County":"Lake"},{"ID":"15-00037","Name":"Jim's Test Project","CompanyNumber":"34","LocationNumber":"6919","EngineerLastName":"Schoeff","EngineerFirstName":"Jim","City":"Delaware","County":"Franklin"},{"ID":"15-00004","Name":"Walter's Test Project","CompanyNumber":"34","LocationNumber":"8870","EngineerLastName":"Johnson","EngineerFirstName":"Walter","City":"Mansfield","County":"Wood"},{"ID":"15-00093","Name":"Larry's Test Project","CompanyNumber":"34","LocationNumber":"8542","EngineerLastName":"Schoeff","EngineerFirstName":"Larry","City":"Columbus","County":"Licking"}];


