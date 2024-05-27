import React from "react";

export const TextField = ({ value, handleChange }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Add Grocery"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
