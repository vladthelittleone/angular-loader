/**
 * @since 28.03.15
 * @author vladthelittleone
 */
angular.module('angular-loader', [])
    .directive('loader', function () {
        'use strict';
        return {
            replace: true,
            restrict: 'E',
            scope: {
                type: "@",
                show: "="
            },
            template: [
                '<div ng-show="show" ng-class="type">',
                '<div class="loader">',
                '"Loading"',
                '</div>',
                '</div>'
            ].join('')
        };
    });
