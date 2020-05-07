import React from 'react';
import './Menu.css'

// MENU COMPONENT CODE GOES HERE
const Menu = props => {
  const button = (name, selected) => {
    const classes = `sidebar-tab${selected ? " selected" : ""}`;
    return (
      <button key={name} className={classes} onClick={() => props.pickTopic(name)}>
        {name}
      </button>
    );
  }

  const menu = [
    "local",
    "entertainment",
    "technology",
    "science",
    "health",
  ].map((name) => button(name, props.selected === name));

  return (
    <aside className="sidebar">
      {menu}
    </aside>
  );
}

export default Menu;