import blackCar from '../../assets/images/products/black-car.jpg'

const initialState = {
  selectedCar: {
    id: 1, 
    name: 'black car', 
    img: blackCar, 
    price: 1000
  }
};

const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_CAR':
      {
        const product = {...action.payload};
        return {...state, selectedCar: product};
      }
    default:
      return {...state};
  }
}

export default carReducer;