import React from 'react';
import Header from "./Header.js";

export default function Layout(props) {
    const { children } = props;
  return (
    <div>
      <Header></Header>
      { children }
    </div>
  )
}
