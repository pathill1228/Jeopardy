import * as game from './controller.js';

const startGameButton = document.querySelector('#start-game-button');

startGameButton.addEventListener('click', async function (e) {
    const res = await axios.get('https://rithm-jeopardy.herokuapp.com/api/categories?count=100');
    const topics = game.parseQuestions(res.data);
    //console.log(topics);
    parseTopics(topics);
});

async function parseTopics(topics) {
    for (let topic of topics) {
        //console.log(topic.id);
        const res = await axios.get('https://rithm-jeopardy.herokuapp.com/api/category?id=' + topic.id)
        //console.log(res.data.clues);
        game.displayQuestions(res.data);
    }
}
