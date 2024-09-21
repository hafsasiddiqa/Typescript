"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function callbackFunction() {
    function fetchData() {
        console.log("fetchData");
    }
    function processData() {
        console.log("processData");
    }
    function displayData() {
        console.log("displayData");
    }
    function performData() {
        console.log("performData");
    }
    fetchData();
    processData();
    displayData();
    performData();
}
callbackFunction();
// async/await
function callbackfunction() {
    return __awaiter(this, void 0, void 0, function* () {
        function fetchData() {
            return new Promise((resolve) => {
                setTimeout(() => {
                    console.log("fetchData");
                    resolve();
                }, 1000);
            });
        }
        function processData() {
            return new Promise((resolve) => {
                setTimeout(() => {
                    console.log("processData");
                    resolve();
                }, 2000);
            });
        }
        function displayData() {
            return new Promise((resolve) => {
                setTimeout(() => {
                    console.log("displayData");
                    resolve();
                }, 3000);
            });
        }
        function performData() {
            return new Promise((resolve) => {
                setTimeout(() => {
                    console.log("performData");
                    resolve();
                }, 4000);
            });
        }
        yield fetchData();
        yield processData();
        yield displayData();
        yield performData();
    });
}
callbackfunction();
