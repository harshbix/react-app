import { useState } from "react";
interface Props
{
  items: string[];
  heading: string;
}
const ListGroup = ({items, heading}: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.length === 0 && <h2>No item here!</h2>}
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};
export default ListGroup;
