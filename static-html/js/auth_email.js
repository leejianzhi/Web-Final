angular.module('auth_email', [])
   .controller('EmailController', ['$scope', function($scope) {
      $scope.email = {
        text: 'example@domain.com'
      };
    }]);

/*Souce Code URL: https://next.plnkr.co/edit/?p=preview&utm_source=legacy&utm_medium=worker&utm_campaign=next&preview*/
var text = element(by.binding('email.text'));
var valid = element(by.binding('form.input.$valid'));
var input = element(by.model('email.text'));

it('should initialize to model', function() {
  expect(text.getText()).toContain('example@domain.com');
  expect(valid.getText()).toContain('true');
});

it('should be invalid if empty', function() {
  input.clear();
  input.sendKeys('');
  expect(text.getText()).toEqual('text =');
  expect(valid.getText()).toContain('false');
});

it('should be invalid if not email', function() {
  input.clear();
  input.sendKeys('xxx');

  expect(valid.getText()).toContain('false');
});

/*
Copyright 2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/