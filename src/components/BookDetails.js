import React from "react";
import { connect } from "react-redux";

class BookDetails extends React.Component {

    render() {
        if (!this.props.activeBook) {
            return (
                <div className="col-md-6 card">
                    select a book ..
                </div>
            );
        }
        return (
            <div className="col-md-6 card">
                <h3>Book Details :</h3>
                <div>Title: {this.props.activeBook.title}</div>
                <div>Pages: {this.props.activeBook.pages}</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { activeBook: state.activeBook };
}

export default connect(mapStateToProps)(BookDetails);