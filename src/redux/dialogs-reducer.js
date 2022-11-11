let SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    messages: [
        {id: 1, message: `Good morning, I am here for my interview.`},
        {id: 2, message: 'Hello, nice to meet you. I\'m Mr. Gotcha. Have any trouble finding the place?'},
        {id: 3, message: `No problem.`},
        {id: 4, message: 'So why don\'t you tell me why you are interested in changing positions?'},
        {id: 5, message: `Unfortunately, our company is shutting down due to the economy.`},
        {id: 6, message: 'What would you consider your strengths?'}
    ],
    dialogs: [
        {id: 1, name: 'Victor'},
        {id: 2, name: 'Joanne'},
        {id: 3, name: 'Emily'},
        {id: 4, name: 'Charlotte'},
        {id: 5, name: 'Tracy'},
        {id: 6, name: 'Emily'}
    ],
}
const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case SEND_MESSAGE:
            debugger;
            let body = action.newMessageText
            return {
                ...state,
                messages: [...state.messages, {id: 7, message: body}]
            };

        default:
            return state;

    }
}
    export const sendMessageCreator = (newMessageText) => ({type: SEND_MESSAGE, newMessageText})

    export default dialogsReducer;