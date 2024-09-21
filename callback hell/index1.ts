function fetchData(callback: any) {
    setTimeout(() => {
        console.log('fetchData');
function processData(callback: any) {
    setTimeout(() => {
        console.log('processData');
        function displayData(callback: any) {
            setTimeout(() => {
                console.log('displayData');
                function performData(callback: any) {
                    setTimeout(() => {
                        console.log('performData');
                        
                    }, 0);
                }
            }, 0);
        }
    },  0);
}
    }, 0);
}
 

    
