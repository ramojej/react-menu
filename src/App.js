import React from "react";
import { menu } from "./data";
import MenuLi from "./menuLi";

function App() {
  console.log(menu);
  return (
    <div className="App">
      <ul>
        {menu.map((menuItem, index) => {
          return <MenuLi node={menuItem} key={index} />;
        })}
      </ul>
    </div>
  );
}

export default App;
