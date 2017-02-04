describe("PieController", function() {
    var $rootScope;
    var $scope;
    var controller;

    beforeEach(function() {
        module('pie');

        inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            controller = $injector.get('$controller')("PieController", { $scope: $scope });
        });
    });

    describe("Action Handlers", function() {

        describe("eatSlice", function() {
            it("Should decrement the number of slices", function() {
                expect($scope.slices).toEqual(8);
                $scope.eatSlice();
                expect($scope.slices).toEqual(7);
            });

            it("Should do nothing if slices is 0", function() {
                $scope.slices = 0;
                $scope.eatSlice();
                expect($scope.slices).toEqual(0);
            });
        });

        describe("requestFlavor", function() {
            it("Should set $scope.lastRequestedFlavor to the passed in argument", function() {
                controller.requestFlavor("Cherry");
                expect($scope.lastRequestedFlavor).toEqual("Cherry");
            });
        });
    });

    describe("Initialization", function() {
        it("Should instantiate slices to 8", function() {
            expect($scope.slices).toEqual(8);
        });
        it("Should instantiate $scope.lastRequestedFlavor", function() {
            expect($scope.lastRequestedFlavor).toBeUndefined();
        })
    });
});