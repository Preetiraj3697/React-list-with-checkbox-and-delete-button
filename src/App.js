import "./styles.css";
import { useState } from "react";
//list with checkbox and delete button
const arr = ["play cricket", "play video game", "read book"];

// [] play cricket (x)
export default function App() {
  const [showDeleteButton, setShowDeleteButton] = useState(false);
  const [listItems, setListItems] = useState(
    arr.map((item, index) => ({ id: index, text: item, checked: false }))
  );

  const handleCheckboxClick = (id) => {
    setListItems(
      listItems.map((item) => {
        if (item.id === id) {
          item.checked = !item.checked;
        }
        return item;
      })
    );
    setShowDeleteButton(!showDeleteButton);
  };

  const handleDeleteClick = () => {
    setListItems(listItems.filter((item) => !item.checked));
    setShowDeleteButton(false);
  };

  return (
    <div>
      {listItems.map((item) => (
        <div key={item.id}>
          <input
            type="checkbox"
            checked={item.checked}
            onChange={() => handleCheckboxClick(item.id)}
          />
          <span>{item.text}</span>
        </div>
      ))}
      {showDeleteButton && <button onClick={handleDeleteClick}>Delete</button>}
    </div>
  );
}
