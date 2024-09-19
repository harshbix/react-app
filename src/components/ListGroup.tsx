const ListGroup = () => {
  let items = ["Uyole", "Posta", "Utukuyu", "Kati"];
  let selectedIndex = 0;
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.length === 0 && <h2>No item here!</h2>}
        {items.map((item,index) => (
          <li className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'} key={item} 
          onClick={() => selectedIndex = index}>
            {item}
          </li>
        ))}
      </ul> 
    </>
  );
};
export default ListGroup;
