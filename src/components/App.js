import React from "react";
import BooksList from "./BooksList";
import BookDetails from "./BookDetails";

const App = () => {

    return (
        <div className="container p-5 row">
            <BooksList />
            <BookDetails />
        </div>
    );
}

export default App;