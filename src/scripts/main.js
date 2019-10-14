console.log("Dis is working!");
// In your JavaScript, use querySelector() to obtain a reference to that article DOM element.
let articleEl = document.querySelector('#messages');
// console.log(articleEl)

// Create five (5) section components, each with a class of message, and 
// with the content of your choosing.
// const sectionEl = document.createElement('section')
// sectionEl.classList = "message"
// sectionEl.textContent = "Content of message"

// Using appendChild(), attach each message as a child to the messages element.
// articleEl.appendChild(sectionEl);

function createMessage(tag, classList, text){
    const sectionEl = document.createElement(tag);
    sectionEl.classList = classList;
    sectionEl.textContent = text;

    // Using appendChild(), attach each message as a child to the messages element.
    articleEl.appendChild(sectionEl);
}

createMessage('section', 'message', 'Do you know where the remote is?');
createMessage('section', 'message', 'Just say "Alexa, turn on the TV."');
createMessage('section', 'message', 'Who is Alexa?');
createMessage('section', 'message', 'She\'s the speaker on the shelf');
createMessage('section', 'message', 'Who do I call at Uber for a ride?');
createMessage('section', 'message', 'You need an app for that.');
createMessage('section', 'message', 'On my telephone?!');
createMessage('section', 'message', 'Nevermind...');
createMessage('section', 'message', 'How come the front door is talking to me?');
createMessage('section', 'message', 'That\'s me saying hello!');