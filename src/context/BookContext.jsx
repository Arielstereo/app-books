import { createContext, useState } from "react";
import data from "../books.json";
import { toast } from "react-hot-toast";

export const BookContext = createContext();

// eslint-disable-next-line react/prop-types
export const BookProvider = ({ children }) => {
  const { library } = data;
  const [listBook] = useState(library);
  const [bookSelected, setBookSelected] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [availableBooks, setAvailableBooks] = useState(listBook.length);
  const [bookDescription, setBookDescription] = useState([]);

  const handleAddBook = (id) => {
    if (!bookSelected.includes(id)) {
      const updatedBookSelected = [...bookSelected, id];
      setBookSelected(updatedBookSelected);

      setAvailableBooks(availableBooks - 1);
    } else {
      toast.error("El libro ya fue seleccionado!");
    }
  };

  const handleDescription = (id) => {
    const getDescription = listBook.filter((item) => item.book.ISBN === id);
    setBookDescription(getDescription);
  };

  const handleRemoveBook = (id) => {
    const index = bookSelected.indexOf(id);
    console.log(id);
    if (index !== -1) {
      const updatedBookSelected = [...bookSelected];
      updatedBookSelected.splice(index, 1);
      setBookSelected(updatedBookSelected);
      setAvailableBooks(availableBooks + 1);
      
      const indexDescription = bookDescription.indexOf(id)
      const updateBookDescription = [...bookDescription];
      updateBookDescription.splice(indexDescription,1)
      setBookDescription(updateBookDescription);
    }
  };

  const handleGenreChange = (e) => {
    const genre = e.target.value;
    setSelectedGenre(genre);
  };

  return (
    <BookContext.Provider
      value={{
        selectedGenre,
        listBook,
        bookSelected,
        availableBooks,
        bookDescription,
        handleAddBook,
        handleRemoveBook,
        handleGenreChange,
        handleDescription,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
