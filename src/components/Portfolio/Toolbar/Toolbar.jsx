import PropTypes from 'prop-types';
import './Toolbar.css';

export function Toolbar({ filters, selected, onSelectFilter }) {
  return (
    <div className="toolbar">
      {filters.map(filter => (
        <button
          className={`toolbar-btn ${(selected === filter) && 'selected'}`}
          onClick={() => onSelectFilter(filter)}
          key={filter}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

Toolbar.propTypes = {
  filters: PropTypes.array.isRequired,
  selected: PropTypes.string,
  onSelectFilter: PropTypes.func.isRequired,
};

Toolbar.defaultProps = {
  selected: 'All',
};
