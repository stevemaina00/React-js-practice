import React from 'react'

function List(){
  const cars = [
    {id: 1, brand: 'Ford'},
    {id: 2, brand: 'BMW'},
    {id: 3, brand: 'Audi'}
  ];
    const CarList=cars.map(car=><ol key={car.id}>{car.id}.{car.brand}</ol>)
  return (
    <div>
        {CarList}
       
    </div>
  
  )
}

export default List