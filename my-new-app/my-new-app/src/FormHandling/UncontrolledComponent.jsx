import React, { useRef } from "react";
const UncontrolledComponent = () => {
  const Ref1 = useRef(null);
  const Ref2 = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome ${Ref1.current.value} ${Ref2.current.value}`);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        First Name : <input type="text" ref={Ref1} />
        <br />
        Last Name : <input type="text" ref={Ref2} />
        <br />
        <button type="submit" disabled={Ref1.length === 0}>
          Submit Form
        </button>z
      </form>
    </div>
  );
};
export default UncontrolledComponent;
