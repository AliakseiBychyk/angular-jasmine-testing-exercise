angular.module('desserts', []).value('DessertValues', {
    pies: [
        { flavor: "Cherry", score: 6 },
        { flavor: "Apple", score: 7.5 },
        { flavor: "Peach", score: 4 }
    ]
});

angular.module('desserts').factory('DessertManager', ['DessertValues',
    function(dessertValues) {
        return {
            pieFlavors: function() {
                return dessertValues.pies.map(function(pie) {
                    return pie.flavor;
                });
            }
        };
    }
]);