describe("nsStateful", function() {
    var $rootScope;
    var $scope;
    var $compile;
    var el;
    var $body = $('body');
    var simpleHtml = '<button ns-stateful="red"></button>';


    beforeEach(function() {
        module('directives');

        inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            $compile = $injector.get('$compile');
            el = $compile(angular.element(simpleHtml))($scope);
        });

        $body.append(el);
        $rootScope.$digest();
    });

    it("Should be able to toggle the class based on clicks", function() {
        expect(el.hasClass("red")).toBeFalsy();
        el.click();
        $scope.$digest();
        expect(el.hasClass("red")).toBeTruthy();
        el.click();
        $scope.$digest();
        expect(el.hasClass("red")).toBeFalsy();
        el.click();
        $scope.$digest();
        expect(el.hasClass("red")).toBeTruthy();
    });

    it("Should throw an error when compiled with an empty name", function() {
        expect(function() {
            $compile(angular.element('<a ns-stateful></a>'))($scope);
        }).toThrow();

    })
});