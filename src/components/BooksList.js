import React from "react";
import { connect } from "react-redux";
import { selectBook } from "../actions";
import BookListItem from "./BookListItem";

class BooksList extends React.Component {

    renderList() {
        return this.props.books.map((book) => {
            return (
                <BookListItem key={book.title} book={book} selectBook={this.props.selectBook} />
            );
        });
    }

    render() {
        return (
            <div className="col-md-4">
               <ul className="list-group">
                   {this.renderList()}
               </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { books: state.books };
}

export default connect(mapStateToProps, { selectBook })(BooksList);