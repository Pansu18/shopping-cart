import { CartReducer } from '../cartReducers';

describe('Cart Reducer', () => {
  const data = [
    {
      productId: 4,
      quantity: 1,
      id: 4,
    },
  ];

  const item = {
    productId: 4,
    quantity: 1,
    id: 4,
  };

  test('LOAD_CART_SUCCESS', () => {
    expect(
      CartReducer(undefined, {
        type: 'LOAD_CART_SUCCESS',
        payload: data,
      }),
    ).toEqual(data);
  });

  test('ADD_CART_SUCCESS', () => {
    expect(
      CartReducer(data, {
        type: 'ADD_CART_SUCCESS',
        payload: item,
      }),
    ).toEqual([...data, item]);
  });

  test('UPDATE_CART_SUCCESS', () => {
    expect(
      CartReducer([...data, item], {
        type: 'UPDATE_CART_SUCCESS',
        payload: { ...item, quantity: 2 },
      }),
    ).toEqual([
      ...data,
      { ...item, quantity: 2 },
    ]);
  });

  test('DELETE_CART_SUCCESS', () => {
    expect(
      CartReducer([...data, item], {
        type: 'DELETE_CART_SUCCESS',
        payload: item,
      }),
    ).toEqual(data);
  });

  test('RANDOM_TYPE', () => {
    expect(
      CartReducer(data, { type: 'RANDOM_TYPE' }),
    ).toEqual(data);
  });
});
