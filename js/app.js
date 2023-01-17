const button = document.getElementById('button');
const response = document.getElementById('response');

button.addEventListener('click', function () {
    /* const moodSelector = document.getElementById('type');
    console.log(moodSelector);

    const mood = moodSelector.value.toLowerCase();
    console.log(mood); */

    const activity = fetch(`http://www.boredapi.com/api/activity/`)
        .then(activity => activity.json());

    activity.then(activity => {
        response.innerHTML = '';
        console.log(activity);
        const answer = activity.activity;
        console.log(answer);

        const element = document.createElement('h2');
        const text = document.createTextNode(`${answer}`);
        element.style.color = "#01b2e2";

        
        element.append(text);
        response.append(element);
    })
});