/* eslint-disable react/prop-types */
import "./ReadingList.css";
import { useContext } from "react";
import { BookContext } from "../context/BookContext";

const ReadingList = ({ id, onSelectedClick }) => {
  
  const { listBook } = useContext(BookContext);

  return (
    <div key={id}>
      <img
        className="img-list"
        src={listBook.find((item) => item.book.ISBN === id).book.cover}
        onClick={() => onSelectedClick(id)}
      />
    </div>
  );
};

export default ReadingList;
