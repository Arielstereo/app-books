import { useContext } from "react";
import "./App.css";
import BookList from "./components/BookList";
import ReadingList from "./components/ReadingList";
import { BookContext } from "./context/BookContext";
import { Toaster } from "react-hot-toast";
import Description from "./components/Description";

const App = () => {
  const {
    listBook,
    bookSelected,
    handleAddBook,
    handleRemoveBook,
    handleDescription,
    bookDescription,
    availableBooks,
    selectedGenre,
    handleGenreChange,
  } = useContext(BookContext);


  return (
    <div className="main">
      <Toaster />
      <div>
        <h2>{availableBooks} Libros disponibles</h2>
        <select value={selectedGenre} onChange={handleGenreChange}>
          <option value="">Todos los géneros</option>
          <option value="Ciencia ficción">Ciencia Ficcion</option>
          <option value="Terror">Terror</option>
          <option value="Fantasía">Fantasia</option>
        </select>
        <div className="list">
          {selectedGenre
            ? listBook
                .filter((item) => item.book.genre === selectedGenre)
                .map((item) => (
                  <BookList
                    key={item.book.ISBN}
                    title={item.book.title}
                    cover={item.book.cover}
                    onBookClick={handleAddBook}
                    id={item.book.ISBN}
                  />
                ))
            : listBook.map((item) => (
                <BookList
                  key={item.book.ISBN}
                  title={item.book.title}
                  cover={item.book.cover}
                  onBookClick={handleAddBook}
                  id={item.book.ISBN}
                />
              ))}
        </div>
      </div>

      <div className="container-list">
        <h3>Lista de lectura</h3>
        <div className="selected-list">
          {bookSelected.length > 0 ? (
            bookSelected.map((id) => (
              <ReadingList
                key={id}
                id={id}
                onSelectedClick={handleDescription}
              />
            ))
          ) : (
            <h5>No hay libros!</h5>
          )}
        </div>
        {bookDescription.map((item)  => (
        <Description  key={item.book.title} id={item.book.ISBN} title={item.book.title} year={item.book.year} synopsis={item.book.synopsis} author={item.book.author.name} onDeleteClick={handleRemoveBook} />))}
      </div>
    </div>
  );
};

export default App;
