import { useState } from 'react';
import { CardView } from './CardsView/CardView';
import { IconSwitch } from './IconSwitch/IconSwitch';
import { ListView } from './ListView/ListView';
import './StoreLayout.css'

const products = [
  {
    id: 1,
    name: 'Nike Metcon 2',
    price: '130',
    color: 'red',
    img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg',
  }, {
    id: 2,
    name: 'Nike Metcon 2',
    price: '130',
    color: 'green',
    img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg',
  }, {
    id: 3,
    name: 'Nike Metcon 2',
    price: '130',
    color: 'blue',
    img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg',
  }, {
    id: 4,
    name: 'Nike Metcon 2',
    price: '130',
    color: 'black',
    img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg',
  }, {
    id: 5,
    name: 'Nike free run',
    price: '170',
    color: 'black',
    img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg',
  }, {
    id: 6,
    name: 'Nike Metcon 3',
    price: '150',
    color: 'green',
    img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg',
  }];
const ICONS = {
  CARDS: 'view_module',
  LIST: 'view_list',
};
const LAYOUTS = {
  CARDS: 'Cards',
  LIST: 'List',
};

export function StoreLayout() {
  const [icon, setIcon] = useState(ICONS.CARDS);
  const [layout, setLayout] = useState(LAYOUTS.CARDS);
  
  const onSwitch = () => {
    icon === ICONS.CARDS ? setIcon(ICONS.LIST) : setIcon(ICONS.CARDS);
    layout === LAYOUTS.CARDS ? setLayout(LAYOUTS.LIST) : setLayout(LAYOUTS.CARDS);
  };
  
  let component;
  if (layout === LAYOUTS.CARDS) {
    component = <CardView products={products} />;
  } else {
    component = <ListView products={products} />;
  }
  
  return (
    <div className="store-layout">
      <IconSwitch icon={icon} onSwitch={onSwitch} />
      {component}
    </div>
  );
}
