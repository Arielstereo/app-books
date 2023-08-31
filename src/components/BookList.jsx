/* eslint-disable react/prop-types */
import "./BookList.css";

const BookList = ({ title, cover, id, onBookClick }) => {

  return (
    <div className="card">
      <div className="book">
        <img
          className="image"
          src={cover}
          alt={title}
          title={title}
          onClick={() => onBookClick(id)}
        />
      </div>
    </div>
  );
};

export default BookList;
