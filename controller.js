
const gameDisplay = document.querySelector('#game-display');
const questionsDiv = document.querySelector('#questions-div');
const titlesDiv = document.querySelector('#titles-div');

gameDisplay.classList.add('hidden');

export function parseQuestions(data) {
    const arr = [];
    const set = new Set();

    while (arr.length !== 6) {
        let randNum = Math.floor(Math.random() * data.length);

        if (set.has(randNum)) continue;
        arr.push(data[randNum])
        set.add(randNum);

    }

    return arr;
}

export function displayQuestions(questions) {
    // would need to call display questions for each chategory (6 api calls) then for each question within the chategory (5) 
    gameDisplay.classList.remove('hidden');
    gameDisplay.classList.add('show-board');

    const displayTitle = document.createElement('h2');
    displayTitle.innerText = questions.title;
    displayTitle.classList.add('title-box')

    titlesDiv.appendChild(displayTitle);

    for (let question of questions.clues) {
        const display = document.createElement('div');
        //console.log(question.question);

        display.innerText = question.value;
        display.dataset.id = question.id;
        display.dataset.question = question.question;

        display.classList.add('question-box');
        display.classList.add('value-display');

        questionsDiv.appendChild(display);

        // add onclick that changes inner text to display.dataset.question and changes color to white
    }
}

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('question-box')) {
        // hide everything else and only display the question with either a correct and incorrect button, or an input that accepts text
        console.log(e.target.dataset.question);
    }
});