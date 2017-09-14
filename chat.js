//Examples for making the below chat bot intelligent

//start googling machine learning. Massive undertaking - > this is to make this chat bot 'intelligent'
//google eliza
//wire to a back end - voice recognition
//web interface to an Amazon Alexa program?

let inputElement = document.querySelector('input');
let button = document.querySelector('button'); //finding tag
let messageArea = document.querySelector('.message-area'); //finding class

let robotAnswers = [
    'Welcome',
    'How are you doing today',
    'Wonderful, Me too!',
    'Always a pleasure'
];

let currentAnswer = 0;

let addMessage = (Text, classname) => {
    //create paragraph element
    let message = document.createElement('p');
    
    //set it's text to the text argument
    message.textContent = Text;
    
    //add custome class name
    message.setAttribute('class', classname);
    //then add it to the messageArea
    messageArea.appendChild(message);
    
} //arrow function


button.addEventListener('click', () => {
    //get text from the input
    let messageText = inputElement.value;
    
    //add it to the screen
    addMessage(messageText);
    
    //clears the input after hitting send
    inputElement.value = '';
    
    //wait just a sec
    setTimeout(robotResponse, 1100);
    
}) //arrow function

let robotResponse = () => {
    if (currentAnswer == robotAnswers.length) {
        return;
    }
    
    let message = robotAnswers[currentAnswer];
    addMessage(message, 'robo-text');
    currentAnswer += 1;
    
    //check if the end of canned Answers is reached. If so loop around
//    if (currentAnswer == robotAnswers.length) {
//        currentAnswer = 0;
//    }
}