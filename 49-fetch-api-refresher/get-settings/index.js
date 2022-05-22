// URL: https://react-tutorial-demo.firebaseio.com/settings.json

function init() {
    // make the fetch request here
    fetch('https://react-tutorial-demo.firebaseio.com/settings.json')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        });
}

init();
