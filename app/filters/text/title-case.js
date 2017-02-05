angular.module('filters', []).filter('titleCase', function() {
    return function(val) {
        return val ? val.replace(/\w\S*/g, function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }) : val;
    };
});