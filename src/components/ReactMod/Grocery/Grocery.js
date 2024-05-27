import React, { useState } from "react";
import "./Grocery.scss";
import { v4 as uuidv4 } from "uuid";
import { TextField } from "./TextField/TextField";

export const Grocery = () => {
  const [groceries, setGroceries] = useState([]);
  const [value, setValue] = useState("");
  const [editValue, setEditValue] = useState("");
  const [filter, setFilter] = useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value) {
      setGroceries([
        ...groceries,
        {
          text: value,
          id: uuidv4(),
          attained: false,
          editVisibility: false,
        },
      ]);
      setValue("");
    }
  };

  const handleEditChange = (event) => {
    setEditValue(event.target.value);
  };

  const deleteItem = (id) => {
    const updatedList = groceries.filter((grocery) => grocery.id !== id);
    setGroceries(updatedList);
  };

  let toggleEditVisibility = (id) => {
    const updatedList = groceries.map((grocery) => {
      if (grocery.id === id) {
        grocery.editVisibility = !grocery.editVisibility;
      }
      return grocery;
    });
    return setGroceries(updatedList);
  };

  const handleEditSubmit = (event, id) => {
    event.preventDefault();
    const updatedList = groceries.map((grocery) => {
      if (grocery.id === id) {
        grocery.text = editValue;
        grocery.editVisibility = !grocery.editVisibility;
      }
      return grocery;
    });
    return setGroceries(updatedList);
  };

  const toggleGroceryAttained = (id) => {
    const updatedList = groceries.map((grocery) => {
      if (grocery.id === id) {
        var test = (grocery.attained = !grocery.attained);
        grocery.finished = test;
      }
      return grocery;
    });
    return setGroceries(updatedList);
  };

  const toggleFilter = () => {
    setFilter(!filter);
  };

  const filteredGroceries = groceries.filter((grocery) => {
    if (filter) {
      return !grocery.attained;
    }
    return true;
  });

  const addItem = filteredGroceries.map((grocery) => {
    return (
      <li key={grocery.id}>
        <span className={grocery.attained ? "crossed-line" : ""}>
          <span className="grocery-text">{grocery.text}</span>
        </span>
        <button
          onClick={() => deleteItem(grocery.id)}
          className="btn btn-primary-outline delete-item"
        >
          &#9986;
        </button>
        <button
          onClick={() => toggleEditVisibility(grocery.id)}
          className="btn btn-primary-outline edit-item"
        >
          &#10000;
        </button>
        <button
          onClick={() => toggleGroceryAttained(grocery.id)}
          className="btn btn-primary-outline bought-item"
        >
          &#128722;
        </button>
        {grocery.editVisibility && (
          <form
            className="d-flex justify-content-between align-items-center"
            onSubmit={(event) => handleEditSubmit(event, grocery.id)}
          >
            <input
              placeholder="Edit Item"
              type="text"
              onChange={handleEditChange}
            />
            <input
              className="btn btn-primary-outline"
              type="submit"
              value="&#10003;"
            />
          </form>
        )}
      </li>
    );
  });

  return (
    <>
      <div className="wrapper">
        <h1>Grocery List</h1>
        <div className="row">
          <div className="col-sm-10 list col-centered">
            {/* <label className="form-check-label">
              Hide Bought
              <input
                value="&#65291;"
                className="hideBought"
                onChange={() => toggleFilter()}
                type="checkbox"
              />
            </label> */}
            <ul>{addItem}</ul>
            <TextField value={value} handleChange={handleChange} />
            <form onSubmit={handleSubmit}>
              <input
                className="btn btn-primary-outline"
                type="submit"
                value="&#65291;"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
