/**
 * @since 28.03.15
 * @author vladthelittleone
 */
angular.module('angular-loader', [])
    .factory('$loaderService', ['$rootScope', function ($rootScope) {
        'use strict';

        function startLoading() {
            $rootScope.$broadcast('loaderService:startLoading');
        }

        function stopLoading() {
            $rootScope.$broadcast('loaderService:stopLoading');
        }

        function loading(callback) {

            startLoading();

            callback();

            stopLoading();

        }

        return {
            loading: loading,
            startLoading: startLoading,
            stopLoading: stopLoading
        };
    }])
    .directive('loader', function () {
        'use strict';
        return {
            replace: true,
            restrict: 'E',
            scope: {
                type: "@",
                show: "="
            },
            link: function ($scope) {

                $scope.serviceLoading = false;

                $scope.$on('loaderService:startLoading', function () {
                    $scope.serviceLoading = true;
                });

                $scope.$on('loaderService:stopLoading', function () {
                    $scope.serviceLoading = false;
                });

                $scope.isLoading = function () {
                    return $scope.serviceLoading || $scope.show;
                }
            },
            template: [
                '<div ng-show="isLoading()" ng-class="type">',
                '<div class="loader">',
                '"Loading"',
                '</div>',
                '</div>'
            ].join('')
        };
    });
