import { useState } from "react";

const ListGroup = () => {
  let items = ["Uyole", "Posta", "Utukuyu", "Kati"];
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.length === 0 && <h2>No item here!</h2>}
        {items.map((item,index) => (
          <li className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'} key={item} 
          onClick={() => setSelectedIndex(index)}>
            {item}
          </li>
        ))}
      </ul>  
    </>
  );
};
export default ListGroup;
