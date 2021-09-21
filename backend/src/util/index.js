/* eslint-disable camelcase */
const countDecimals = value => {
  if (Math.floor(value) === value) return 0;
  return value.toString().split(".")[1].length || 0;
};

const builderItem = ({
  id,
  title,
  currency_id,
  price,
  thumbnail,
  condition,
  shipping,
  address,
  sold_quantity,
  category_id
}) => {
  return {
    id,
    title,
    condition,
    price: {
      currency: currency_id,
      amount: price,
      decimals: countDecimals(price)
    },
    picture: thumbnail,
    free_shipping: shipping.free_shipping,
    address: address ? address.state_name : null,
    sold_quantity,
    category_id
  };
};

const builderResponse = (items, categories) => {
  return {
    author: {
      name: "Julián Andrés",
      lastname: "Isaza Castaño"
    },
    categories: categories
      ? categories.values[0].path_from_root.map(category => category.name)
      : [],
    items: items.slice(0, 4).map(item => builderItem(item))
  };
};

module.exports = { builderItem, builderResponse };
