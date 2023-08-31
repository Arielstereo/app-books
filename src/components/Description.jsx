import "./Description.css"


// eslint-disable-next-line react/prop-types
const Description = ({ id, title, year, synopsis, author, onDeleteClick }) => {

  return (
    <div>
      <h4>{title}</h4>
      <span>({year})</span>
      <p>{synopsis}</p>
      <h5>Autor: {author} </h5>
      <button className="btn"onClick={() => onDeleteClick(id)}>Eliminar de la lista</button>
    </div>
  );
};

export default Description;
