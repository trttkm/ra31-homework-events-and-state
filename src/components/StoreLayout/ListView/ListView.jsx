import PropTypes from 'prop-types';
import { ListViewItem } from './ListViewItem/ListViewItem';
import './ListView.css';

export function ListView({ products }) {
  return (
    <div>
      {products.map(product => (
        <ListViewItem product={product} key={product.id} />
      ))}
    </div>
  );
}

ListView.propTypes = {
  products: PropTypes.array,
};

ListView.defaultProps = {
  products: [],
};
