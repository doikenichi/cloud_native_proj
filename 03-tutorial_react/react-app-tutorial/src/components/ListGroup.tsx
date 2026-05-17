// <> is a React Fragment, which allows you to group a list of children without adding extra nodes to the DOM.
// <> is a shorthand syntax for <React.Fragment>.
// avoid import { Fragment } from 'react';
// and then avoid <Fragment>...</Fragment>

import { type MouseEvent, useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // arr[0] // variable (selectedIndex)
  // arr[1] // function to update the variable (setSelectedIndex)

  // message and getMessage() do same thing.
  // const message = items.length === 0 ? <p>No item found</p> : null;
  const getMessage = () => {
    return items.length === 0 && <p>No item found</p>;
  };

  const handleClick = (event: MouseEvent, item: string, index: number) => {
    console.log(event);
    console.log(`Clicked on ${item}: ${index}`);
    setSelectedIndex(index);
  };

  return (
    <>
      <h1>{heading}</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            // onClick={() => console.log(`Clicked on ${item}: ${index}`)}
            onClick={(event) => {
              handleClick(event, item, index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
