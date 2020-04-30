import React, { useState } from "react";
import { Container } from "./style";



const SearchBar = (props) => {
  
    const [text, setText] = useState("");

  const onChangeHandler = (event) => {
    setText(event.target.value);
}

const onFormSubmit = (event) => {
  event.preventDefault();
  console.log(text)
  props.onFormSubmit(text);
}


  return (
    <Container>
      <form onSubmit={onFormSubmit}>
      <input className="search" onChange={onChangeHandler} type="text" style={{verticalAlign: 'top'}} value={text} placeholder="Search cities..."></input>
      </form>
    </Container>
  );
};

export default SearchBar;
