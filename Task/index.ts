function callbackFunction(): void {
    function fetchData(): void {
      console.log("fetchData");
    }
  
    function processData(): void {
      console.log("processData");
    }
  
    function displayData(): void {
      console.log("displayData");
    }
  
    function performData(): void {
      console.log("performData");
    }
  
    fetchData();
    processData();
    displayData();
    performData();
  }
  
  callbackFunction();
  
  // async/await
  
  async function callbackfunction(): Promise<void> {
    function fetchData(): Promise<void> {
      return new Promise<void>((resolve) => {
        setTimeout(() => {
          console.log("fetchData");
          resolve();
        }, 1000);
      });
    }
  
    function processData(): Promise<void> {
      return new Promise<void>((resolve) => {
        setTimeout(() => {
          console.log("processData");
          resolve();
        }, 2000);
      });
    }
  
    function displayData(): Promise<void> {
      return new Promise<void>((resolve) => {
        setTimeout(() => {
          console.log("displayData");
          resolve();
        }, 3000);
      });
    }
  
    function performData(): Promise<void> {
      return new Promise<void>((resolve) => {
        setTimeout(() => {
          console.log("performData");
          resolve();
        }, 4000);
      });
    }
  
    await fetchData();
    await processData();
    await displayData();
    await performData();
  }
  
callbackfunction();
  