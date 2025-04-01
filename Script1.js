// JavaScript source code

const message = document.querySelector('.message-input')
const msgBody =document.querySelector('.message-body')

document.querySelector('.send-button').addEventListener
    ('click', () => {

        const text = message.value;


        if (!text) {
            alert('you can\'t send empty messages')
        }
        else {
            //create emssge element

            const MessageElement = document.createElement('div')

            MessageElement.textContent = text;

            msgBody.appendChild(MessageElement)

            message.value = ''

           msgbdy.scrollTop=msgbdy.scrollHeight

        }
    });
document.querySelector('.delete-button').addEventListener
    ('click', () => {
        msgBody.innerHTML = '';
    });
        // alert(text)


    
