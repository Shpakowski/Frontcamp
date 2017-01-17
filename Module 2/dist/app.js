var main =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createPage = __webpack_require__(1);
	
	var _createPage2 = _interopRequireDefault(_createPage);
	
	var _getData = __webpack_require__(2);
	
	var _getData2 = _interopRequireDefault(_getData);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var getData = new _getData2.default();
	var createPage = new _createPage2.default();
	
	getData.httpGet('https://newsapi.org/v1/articles?source=bbc-news&apiKey=1107f2407bac441fb648b733408dd11f').then(function (response) {
	    createPage.parseResults(JSON.parse(response));
	}, function (error) {
	    console.log(error);
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _class = function () {
	    function _class() {
	        _classCallCheck(this, _class);
	    }
	
	    _createClass(_class, [{
	        key: 'parseResults',
	        value: function parseResults(response) {
	            var elem = void 0,
	                date = void 0,
	                data = response.articles,
	                constainer = document.querySelector('.news_wrapper');
	
	            data.forEach(function (item) {
	                date = item.publishedAt ? item.publishedAt.split('T') : '';
	                elem = document.createElement('div');
	                elem.className = 'news_block';
	                elem.innerHTML = '<img src="' + item.urlToImage + '" \n                alt="' + item.title + '" class="news_block__img">\n                <h2 class="news_block__title">' + item.title + '</h2>\n                <p class="news_block__description">\n                    ' + item.description + '\n                </p>\n                <div class="news_block__footer">\n                <span class="news_block__author">&copy; ' + item.author + '</span>\n                <span class="news_block__date">Date: ' + date[0] + '</span>\n                <a class="news_block__more-link" title="' + item.title + '" href="' + item.url + '" target="_blank">More ...</a>\n            </div>';
	                constainer.appendChild(elem);
	            });
	        }
	    }]);

	    return _class;
	}();

	exports.default = _class;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _class = function () {
		function _class() {
			_classCallCheck(this, _class);
		}
	
		_createClass(_class, [{
			key: 'httpGet',
			value: function httpGet(url) {
				return new Promise(function (resolve, reject) {
					var xhr = new XMLHttpRequest();
					xhr.open('GET', url, true);
	
					xhr.onload = function () {
						if (this.status == 200) {
							resolve(this.response);
						} else {
							var error = new Error(this.statusText);
							error.code = this.status;
							reject(error);
						}
					};
	
					xhr.onerror = function () {
						reject(new Error("Network Error"));
					};
	
					xhr.send();
				});
			}
		}]);

		return _class;
	}();

	exports.default = _class;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTYxOTljYWEzNDM0MTg2YmIxZTMiLCJ3ZWJwYWNrOi8vLy4vYXBwLmpzIiwid2VicGFjazovLy8uL25ld3MvY3JlYXRlUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9uZXdzL2dldERhdGEuanMiXSwibmFtZXMiOlsiZ2V0RGF0YSIsImNyZWF0ZVBhZ2UiLCJodHRwR2V0IiwidGhlbiIsInJlc3BvbnNlIiwicGFyc2VSZXN1bHRzIiwiSlNPTiIsInBhcnNlIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZWxlbSIsImRhdGUiLCJkYXRhIiwiYXJ0aWNsZXMiLCJjb25zdGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZm9yRWFjaCIsIml0ZW0iLCJwdWJsaXNoZWRBdCIsInNwbGl0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImlubmVySFRNTCIsInVybFRvSW1hZ2UiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiYXV0aG9yIiwidXJsIiwiYXBwZW5kQ2hpbGQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsIm9ubG9hZCIsInN0YXR1cyIsIkVycm9yIiwic3RhdHVzVGV4dCIsImNvZGUiLCJvbmVycm9yIiwic2VuZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDdENBOztBQUVBOzs7O0FBQ0E7Ozs7OztBQUVBLEtBQUlBLFVBQVUsdUJBQWQ7QUFDQSxLQUFJQyxhQUFhLDBCQUFqQjs7QUFFQUQsU0FBUUUsT0FBUixDQUFnQix5RkFBaEIsRUFDS0MsSUFETCxDQUNXLFVBQVNDLFFBQVQsRUFBbUI7QUFDdEJILGdCQUFXSSxZQUFYLENBQXdCQyxLQUFLQyxLQUFMLENBQVdILFFBQVgsQ0FBeEI7QUFDSCxFQUhMLEVBR08sVUFBVUksS0FBVixFQUFpQjtBQUNoQkMsYUFBUUMsR0FBUixDQUFZRixLQUFaO0FBQ0gsRUFMTCxFOzs7Ozs7QUNSQTs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBR2tCSixRLEVBQVU7QUFDcEIsaUJBQUlPLGFBQUo7QUFBQSxpQkFDSUMsYUFESjtBQUFBLGlCQUVJQyxPQUFPVCxTQUFTVSxRQUZwQjtBQUFBLGlCQUdJQyxhQUFhQyxTQUFTQyxhQUFULENBQXVCLGVBQXZCLENBSGpCOztBQUtBSixrQkFBS0ssT0FBTCxDQUFhLFVBQVNDLElBQVQsRUFBZTtBQUN4QlAsd0JBQU9PLEtBQUtDLFdBQUwsR0FBbUJELEtBQUtDLFdBQUwsQ0FBaUJDLEtBQWpCLENBQXVCLEdBQXZCLENBQW5CLEdBQWlELEVBQXhEO0FBQ0FWLHdCQUFPSyxTQUFTTSxhQUFULENBQXVCLEtBQXZCLENBQVA7QUFDQVgsc0JBQUtZLFNBQUwsR0FBaUIsWUFBakI7QUFDQVosc0JBQUthLFNBQUwsa0JBQThCTCxLQUFLTSxVQUFuQyxpQ0FDV04sS0FBS08sS0FEaEIsa0ZBRW9DUCxLQUFLTyxLQUZ6Qyx3RkFJVVAsS0FBS1EsV0FKZiwwSUFPOENSLEtBQUtTLE1BUG5ELHNFQVEyQ2hCLEtBQUssQ0FBTCxDQVIzQyx5RUFTOENPLEtBQUtPLEtBVG5ELGdCQVNtRVAsS0FBS1UsR0FUeEU7QUFXQWQsNEJBQVdlLFdBQVgsQ0FBdUJuQixJQUF2QjtBQUNILGNBaEJEO0FBaUJIOzs7Ozs7Ozs7Ozs7QUMxQkw7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQUdZa0IsRyxFQUFLO0FBQ1osV0FBTyxJQUFJRSxPQUFKLENBQVksVUFBU0MsT0FBVCxFQUFrQkMsTUFBbEIsRUFBMEI7QUFDekMsU0FBSUMsTUFBTSxJQUFJQyxjQUFKLEVBQVY7QUFDQUQsU0FBSUUsSUFBSixDQUFTLEtBQVQsRUFBZ0JQLEdBQWhCLEVBQXFCLElBQXJCOztBQUVBSyxTQUFJRyxNQUFKLEdBQWEsWUFBVztBQUNwQixVQUFJLEtBQUtDLE1BQUwsSUFBZSxHQUFuQixFQUF3QjtBQUNwQk4sZUFBUSxLQUFLNUIsUUFBYjtBQUNILE9BRkQsTUFFTztBQUNILFdBQUlJLFFBQVEsSUFBSStCLEtBQUosQ0FBVSxLQUFLQyxVQUFmLENBQVo7QUFDQWhDLGFBQU1pQyxJQUFOLEdBQWEsS0FBS0gsTUFBbEI7QUFDQUwsY0FBT3pCLEtBQVA7QUFDSDtBQUNKLE1BUkQ7O0FBVUEwQixTQUFJUSxPQUFKLEdBQWMsWUFBVztBQUNyQlQsYUFBTyxJQUFJTSxLQUFKLENBQVUsZUFBVixDQUFQO0FBQ0gsTUFGRDs7QUFJQUwsU0FBSVMsSUFBSjtBQUNILEtBbkJNLENBQVA7QUFvQkgiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDU2MTk5Y2FhMzQzNDE4NmJiMWUzIiwiJ3VzZSBzdHJpY3QnXHJcblxyXG5pbXBvcnQgQ3JlYXRlUGFnZSBmcm9tICcuL25ld3MvY3JlYXRlUGFnZSdcclxuaW1wb3J0IEdldERhdGEgZnJvbSAnLi9uZXdzL2dldERhdGEnXHJcblxyXG5sZXQgZ2V0RGF0YSA9IG5ldyBHZXREYXRhKCk7XHJcbmxldCBjcmVhdGVQYWdlID0gbmV3IENyZWF0ZVBhZ2UoKTtcclxuXHJcbmdldERhdGEuaHR0cEdldCgnaHR0cHM6Ly9uZXdzYXBpLm9yZy92MS9hcnRpY2xlcz9zb3VyY2U9YmJjLW5ld3MmYXBpS2V5PTExMDdmMjQwN2JhYzQ0MWZiNjQ4YjczMzQwOGRkMTFmJylcclxuICAgIC50aGVuKCBmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgIGNyZWF0ZVBhZ2UucGFyc2VSZXN1bHRzKEpTT04ucGFyc2UocmVzcG9uc2UpKTtcclxuICAgIH0sIGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH0pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAuanMiLCIndXNlIHN0cmljdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcclxuICAgIHBhcnNlUmVzdWx0cyAocmVzcG9uc2UpIHtcclxuICAgICAgICBsZXQgZWxlbSxcclxuICAgICAgICAgICAgZGF0ZSxcclxuICAgICAgICAgICAgZGF0YSA9IHJlc3BvbnNlLmFydGljbGVzLFxyXG4gICAgICAgICAgICBjb25zdGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld3Nfd3JhcHBlcicpO1xyXG5cclxuICAgICAgICBkYXRhLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgICAgICAgICBkYXRlID0gaXRlbS5wdWJsaXNoZWRBdCA/IGl0ZW0ucHVibGlzaGVkQXQuc3BsaXQoJ1QnKSA6ICcnO1xyXG4gICAgICAgICAgICBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGVsZW0uY2xhc3NOYW1lID0gJ25ld3NfYmxvY2snO1xyXG4gICAgICAgICAgICBlbGVtLmlubmVySFRNTCA9IGA8aW1nIHNyYz1cIiR7aXRlbS51cmxUb0ltYWdlfVwiIFxyXG4gICAgICAgICAgICAgICAgYWx0PVwiJHtpdGVtLnRpdGxlfVwiIGNsYXNzPVwibmV3c19ibG9ja19faW1nXCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJuZXdzX2Jsb2NrX190aXRsZVwiPiR7aXRlbS50aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJuZXdzX2Jsb2NrX19kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICR7aXRlbS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuZXdzX2Jsb2NrX19mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmV3c19ibG9ja19fYXV0aG9yXCI+JmNvcHk7ICR7aXRlbS5hdXRob3J9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuZXdzX2Jsb2NrX19kYXRlXCI+RGF0ZTogJHtkYXRlWzBdfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibmV3c19ibG9ja19fbW9yZS1saW5rXCIgdGl0bGU9XCIke2l0ZW0udGl0bGV9XCIgaHJlZj1cIiR7aXRlbS51cmx9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+TW9yZSAuLi48L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PmA7XHJcbiAgICAgICAgICAgIGNvbnN0YWluZXIuYXBwZW5kQ2hpbGQoZWxlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9uZXdzL2NyZWF0ZVBhZ2UuanMiLCIndXNlIHN0cmljdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcclxuICAgIGh0dHBHZXQodXJsKSB7XHJcblx0ICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuXHQgICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHQgICAgICAgIHhoci5vcGVuKCdHRVQnLCB1cmwsIHRydWUpO1xyXG5cclxuXHQgICAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuXHQgICAgICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT0gMjAwKSB7XHJcblx0ICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5yZXNwb25zZSk7XHJcblx0ICAgICAgICAgICAgfSBlbHNlIHtcclxuXHQgICAgICAgICAgICAgICAgdmFyIGVycm9yID0gbmV3IEVycm9yKHRoaXMuc3RhdHVzVGV4dCk7XHJcblx0ICAgICAgICAgICAgICAgIGVycm9yLmNvZGUgPSB0aGlzLnN0YXR1cztcclxuXHQgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuXHQgICAgICAgICAgICB9XHJcblx0ICAgICAgICB9O1xyXG5cclxuXHQgICAgICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24oKSB7XHJcblx0ICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihcIk5ldHdvcmsgRXJyb3JcIikpO1xyXG5cdCAgICAgICAgfTtcclxuXHJcblx0ICAgICAgICB4aHIuc2VuZCgpO1xyXG5cdCAgICB9KTtcclxuXHR9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9uZXdzL2dldERhdGEuanMiXSwic291cmNlUm9vdCI6IiJ9