const ListGroup = () => {
  let items = ["Uyole", "Posta", "Utukuyu", "Kati"];
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.length === 0 && <h2>No item here!</h2>}
        {items.map((item,index) => (
          <li className="list-group-item" key={item} 
          onClick={()=>console.log(item , index)
          }>
            {item}
          </li>
        ))}
      </ul> 
    </>
  );
};
export default ListGroup;
