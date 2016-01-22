'use strict';
/**
 * @ngdoc overview
 * @name sbAdminApp
 * @description
 * # sbAdminApp
 *
 * Main module of the application.
 */
angular.module('sbAdminApp')
    .directive('googleAdsense', function($window, $compile) {
    return {
        restrict: 'A',
        transclude: true,
        template: '<ins class="ad-div adsbygoogle responsive" style="display:inline-block;width:468px;height:60px" data-ad-client="ca-pub-4352453996606420" data-ad-slot="9326901583"></ins></ins>',
        replace: false,
        link: function postLink(scope, element, iAttrs) {
                element.html("");
                element.append(angular.element($compile(adSenseTpl)(scope)));
                if (!$window.adsbygoogle) {
                    $window.adsbygoogle = [];
                }
                $window.adsbygoogle.push({});
        }
    };
});
