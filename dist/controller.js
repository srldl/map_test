!function r(e,o,t){function n(u,a){if(!o[u]){if(!e[u]){var c="function"==typeof require&&require;if(!a&&c)return c(u,!0);if(l)return l(u,!0);throw new Error("Cannot find module '"+u+"'")}var f=o[u]={exports:{}};e[u][0].call(f.exports,function(r){var o=e[u][1][r];return n(o?o:r)},f,f.exports,r,e,o,t)}return o[u].exports}for(var l="function"==typeof require&&require,u=0;u<t.length;u++)n(t[u]);return n}({1:[function(r,e,o){var t=angular.module("projectApp",["ngRoute"]);t.controller("ProjectCtrl",["$scope","$http",function(r,e){e.get("http://apptest.data.npolar.no/project/00bfb1ae-6f1e-5ada-8266-f905b5d60a94").success(function(e){r.all=e,console.log(r.all)}).error(function(r,e,o,t){console.log("error"+e)})}]),t.controller("SaveCtrl",["$scope","$http",function(r,e){r.all2=["Per","Paal","Espen"]}])},{}]},{},[1]);