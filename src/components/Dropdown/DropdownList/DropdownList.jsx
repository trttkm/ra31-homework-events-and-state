import { useState } from 'react';
import { DropdownListItem } from './DropdownListItem/DropdownListItem';
import './DropdownList.css';

export function DropdownList() {
  const options = [
    'Profile Information',
    'Change Password',
    'Become PRO',
    'Help',
    'Log Out',
  ];
  
  const [active, setActive] = useState();
  
  return (
    <ul className="dropdown">
      {options.map(option => (
        <DropdownListItem option={option} active={active} onSelect={setActive} />
      ))}
    </ul>
  );
}
