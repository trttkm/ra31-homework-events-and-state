import PropTypes from 'prop-types';
import './DropdownListItem.css';

export function DropdownListItem({ option, active, onSelect }) {
  return (
    <li className={active === option ? 'active' : ''}>
      <button onClick={() => onSelect(option)}>{option}</button>
    </li>
  );
}

DropdownListItem.propTypes = {
  option: PropTypes.string,
  active: PropTypes.string,
  onSelect: PropTypes.func,
};
