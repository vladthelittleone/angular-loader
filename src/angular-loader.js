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
                isLoading: "="
            },
            template: [
                '<div ng-show="isLoading" ng-class="type">',
                '<div class="loader">',
                '"Loading"',
                '</div>',
                '</div>'
            ].join('')
        };
    });
