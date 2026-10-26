import * as Game from './controller.js';

const startGameButton = document.querySelector('#start-game-button');

startGameButton.addEventListener('click', async function (e) {
    const res = await axios.get('https://rithm-jeopardy.herokuapp.com/api/categories?count=100');
    const topics = Game.parseQuestions(res.data);
    //console.log(topics);
    parseTopics(topics);
});

async function parseTopics(topics) {
    for (let topic of topics) {
        //console.log(topic.id);
        const res = await axios.get('https://rithm-jeopardy.herokuapp.com/api/category?id=' + topic.id)
        //console.log(res.data.clues);
        Game.displayQuestions(res.data);
    }
}
