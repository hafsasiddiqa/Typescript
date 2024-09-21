function fetchData(callback) {
    setTimeout(() => {
        console.log('fetchData');
        function processData(callback) {
            setTimeout(() => {
                console.log('processData');
                function displayData(callback) {
                    setTimeout(() => {
                        console.log('displayData');
                        function performData(callback) {
                            setTimeout(() => {
                                console.log('performData');
                            }, 0);
                        }
                    }, 0);
                }
            }, 0);
        }
    }, 0);
}
export {};
