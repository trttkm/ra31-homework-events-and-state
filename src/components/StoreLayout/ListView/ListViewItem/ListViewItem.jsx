import PropTypes from 'prop-types';
import './ListViewItem.css';

export function ListViewItem({ product }) {
  return (
    <div className="list-view-item">
      <img className="list-view-item__image" src={product.img} alt={`${product.name} photo`} />
      <div className="list-view-item__name">{product.name}</div>
      <div className="list-view-item__color">{product.color}</div>
      <div className="list-view-item__price">${product.price}</div>
      <button className="list-view-item__button">ADD TO CART</button>
    </div>
  );
}

ListViewItem.propTypes = {
  product: PropTypes.object,
};
