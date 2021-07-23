import './DropdownListItem.css';
import PropTypes from 'prop-types';

export function DropdownListItem({ option, active, onSelect }) {
  return (
    <li className={active === option ? 'active' : ''}>
      <a href="#" onClick={() => onSelect(option)}>{option}</a>
    </li>
  );
}

DropdownListItem.propTypes = {
  option: PropTypes.string,
  active: PropTypes.string,
  onSelect: PropTypes.func,
};
