import PropTypes from 'prop-types';
import './CardViewItem.css';

export function CardViewItem({ product }) {
  return (
    <div className="card-view-item">
      <div className="card-view-item__name">{product.name}</div>
      <div className="card-view-item__color">{product.color}</div>
      <img className="card-view-item__image" src={product.img} alt={product.name} />
      <div className="card-view-item__buy-block">
        <div className="card-view-item__price">${product.price}</div>
        <button className="card-view-item__button">ADD TO CART</button>
      </div>
    </div>
  );
}

CardViewItem.propTypes = {
  product: PropTypes.object.isRequired,
};
