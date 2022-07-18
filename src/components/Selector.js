import React from "react";

const Selector = ({ opciones, info, change, name, factor }) => {
  return (
    <>
      <div className="form-group">
        <select className="custom-select" title={info} name={name} id={factor}>
          {opciones.map((el) => (
            <option key={el} value={el.substring(0, 1)} onChange={change}>
              {el}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Selector;
