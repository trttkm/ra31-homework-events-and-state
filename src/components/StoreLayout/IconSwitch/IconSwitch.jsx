import PropTypes from 'prop-types';
import './IconSwitch.css'

export function IconSwitch({ icon, onSwitch }) {
  return (
    <div className="icon-switch material-icons" onClick={() => onSwitch()}>
      {icon}
    </div>
  );
}

IconSwitch.propTypes = {
  icon: PropTypes.string,
  onSwitch: PropTypes.func,
};
