import { MouseEvent, useState } from "react";

interface Props{
    items: string[];
    heading: string;
    onSelectItem: (item: string)=> void;
}

function ListGroup({items,heading,onSelectItem}: Props) {
  //items = [];

  //Event handler
  //   const handleClick =(event:MouseEvent) => console.log(event)
  //hook
  const [selectedIndex, setSelectedindex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.length === 0 && <p>No item found</p>}
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {setSelectedindex(index); onSelectItem(item)}}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
