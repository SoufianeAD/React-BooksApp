import React from "react";

const BookListItem = ({book, selectBook}) => {
    return (
        <li
            onClick={() => selectBook(book)}
            className="list-group-item book-list-item"
        >
            {book.title}
        </li>
    );
}
export default BookListItem;