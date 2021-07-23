import { useState } from 'react';
import { DropdownList } from './DropdownList/DropdownList';
import './Dropdown.css';

export function Dropdown() {
  const [open, setOpen] = useState(true);
  
  return (
    <div className="container">
      <div className={`dropdown-wrapper${open ? ' open' : ''}`}>
        <button className="btn" onClick={() => setOpen(!open)}>
          <span>Account Settings</span>
          <i className="material-icons">public</i>
        </button>
        <DropdownList />
      </div>
    </div>
  );
}
