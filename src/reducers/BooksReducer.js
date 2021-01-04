import {BOOKS_LIST} from "../actions/Types";

const books = [
    {
        title: 'JAVA POO',
        pages: 134
    },
    {
        title: 'XML WEB SEMANTIC',
        pages: 69
    },
    {
        title: 'STYLING WITH CSS3',
        pages: 13
    },
    {
        title: 'HOW TO BE A GOOD DEVELOPER',
        pages: 54
    }
];

export default (state = books, action) => {
    switch (action.type) {
        case BOOKS_LIST:
            return action.payload;
        default:
            return state;
    }
}