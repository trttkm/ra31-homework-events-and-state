import PropTypes from 'prop-types';
import { CardViewItem } from './CardsViewItem/CardViewItem';
import './CardView.css';

export function CardView({ products }) {
  return (
    <div className="card-view">
      {products.map(product => (
        <CardViewItem product={product} key={product.id} />
      ))}
    </div>
  );
}

CardView.propTypes = {
  products: PropTypes.array,
};

CardView.defaultProps = {
  products: [],
};
