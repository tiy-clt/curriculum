
function getCandy() {
    fetch(`http://localhost:3000`)
        .then(function (response) {
            return response.json(); // parse from json
        })
        .then(function (candies) {
            let candyText = '';

            for (let i = 0; i < candies.length; i++) {
                candyText += `
            <li>
                <p>${candies[i].name} (calories: ${candies[i].calories})</p>
            </li>
            `;
            }

            const list = document.querySelector('ul');
            list.innerHTML = candyText;
        });
}

getCandy();
const btn = document.querySelector('button');
btn.addEventListener('click', function () {
    const candyName = document.querySelector('#name').value;
    const candyCals = document.querySelector('#calories').value;

    const candy = {
        name: candyName,
        calories: parseInt(candyCals),
    };

    /**
     * We need to let the server know that what we're sending is JSON. The way
     * we do this is by setting a 'header' that defines the content type, basically
     * saying Dear Server, this is in JSON.
     */
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    fetch('http://localhost:3000/add', {
        method: 'post',
        body: JSON.stringify(candy),
        headers: headers,
    }).then(function () { // wait for the post to finish, then make a new get req
        getCandy();
    });
});