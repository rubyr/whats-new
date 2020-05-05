import React from 'react';
import './Menu.css'

// MENU COMPONENT CODE GOES HERE
const Menu = props => {
  const button = (name, selected) => {
    const classes = `sidebar-tab${selected ? " selected" : ""}`;
    return (
      <button className={classes} onClick={() => props.pickTopic(name)}>
        {name}
      </button>
    );
  }

  return (
    <aside className="sidebar">
      {["local", "entertainment", "technology", "science", "health"].map(name => 
        button(name, props.selected === name)
      )}
    </aside>
  );
}

export default Menu;