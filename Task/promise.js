"use strict";
/*import { resolve } from "path";

function fetchData(): Promise<void> {
  return new Promise<void>((resolve) => {
    console.log("fetchData");
    resolve();
  });
}

function processData(): Promise<void> {
  return new Promise<void>((resolve) => {
    console.log("processData");
    resolve();
  });
}

function displayData(): Promise<void> {
  return new Promise<void>((resolve) => {
    console.log("displayData");
    resolve();
  });
}

function performData(): Promise<void> {
  return new Promise<void>((resolve) => {
    console.log("performData");
    resolve();
  });
}

fetchData()
  .then(() => processData())
  .then(() => displayData())
  .then(() => performData())
  .then(() => {
    console.log("All functions executed successfully");
  })
  .catch((error: any) => {
    console.error("An error occurred:", error);
  });
*/
let emptyPromise = new Promise((resolve) => {
    resolve(() => { });
});
emptyPromise.then(r => {
    console.log("empty promise :: ");
}).then(r => {
    console.log("task 1 done");
}).then(r => {
    console.log("task 2 done");
}).then(r => {
    console.log("task 3 done");
});
