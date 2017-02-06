angular.module('directives').directive('nsTextAndSub',
    function() {
        return {
            restrict: 'E',
            templateUrl: 'app/directives/text-and-sub.html',
            scope: {
                text: "@",
                sub: "@"
            },
            link: function(scope, element, attrs) {}
        }
    });