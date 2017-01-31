# Module 3: Webpack

* Singleton pattern was implemented for _Model_, _View_ and _Presenter_
  Demo with _View_ is shown in console immedealty after page load

* Factory pattern was implemented for api selection - each tab is presented by a certain api

* Medidator is implemented in _Presenter_ - it handles all events from view and pass it to the module with little updates (for example event names). And also presenter is subscribed to Models events with redux implementation. So here we have two-way data-transfer between Presenter and Model and Presenter and View.

* I used _MVP_ 
  As model I have here _redux_ store and api's classes for network requests and data format from previous modules
  As presenter I have _Presenter_ class
  And as view I have _View class_

* And as you guessed I have redux, it is very weak implementation - for example I doesn't use reducer's replace and reducer composition, but in current app I think they not required.
  Also it possible to use original redux without any additional changes

Usefull link: [screencast](https://egghead.io/lessons/javascript-redux-the-single-immutable-state-tree) [book](https://maxfarseer.gitbooks.io/redux-course-ru/content/)