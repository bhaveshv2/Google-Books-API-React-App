import React from 'react';
import { Link } from 'react-router-dom';

class Book extends React.Component {
  render() {
    // console.log(this.props);
    const { book } = this.props;
    return (
      <div>
        <Link to={`/${book.id}`} className="book">
          <div className="book-image">
            {book.volumeInfo.imageLinks && <img src={book.volumeInfo.imageLinks.smallThumbnail} alt={book.volumeInfo.title} />}
          </div>
          <div className="book-title">
            <h3>{book.volumeInfo.title}</h3>
            <p>{book.volumeInfo.authors}</p>
          </div>
        </Link>
      </div>
    );
  }
}

export default Book;