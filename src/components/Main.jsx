import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const Main = ({ items, setItems, handleCheck, handleDelete }) => {
  return (
    <main>
      {items.length ? (
        <ul className="items">
          {items.map((item) => (
            <li className="item" key={item.id}>
              <input
                onChange={() => handleCheck(item.id)}
                type="checkbox"
                checked={item.checked}
              />
              <label
                onDoubleClick={() => handleCheck(item.id)}
                style={item.checked ? { textDecoration: "line-through" } : null}
              >
                {item.item}
              </label>
              <FaTrashAlt
                role="button"
                tabIndex="0"
                onClick={() => handleDelete(item.id)}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ marginTop: "2rem", color: "red" }}>your list is empty</p>
      )}
    </main>
  );
};

export default Main;
