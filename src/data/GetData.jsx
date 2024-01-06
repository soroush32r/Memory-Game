import benzSclass from '../../images/Cars/benz-sclass.png'
import benzSedan from   '../../images/Cars/benz-sedan.png'
import benzSUV from   '../../images/Cars/benz-suv.png'
import bmw from   '../../images/Cars/bmw.png'
import classisCarFord from   '../../images/Cars/classic-car-ford.png'
import ferrari from   '../../images/Cars/ferrari.png'
import ford from   '../../images/Cars/ford.png'
import LamboHuracan from   '../../images/Cars/lamborgini-huracan.png'
import Lambo from   '../../images/Cars/lamborgini.png'
import minuBuick from   '../../images/Cars/mini-buick.png'
import tesla from   '../../images/Cars/tesla.png'
import classicCar from   '../../images/Cars/classic-car.png'

// const imagePath = [
//   '../../images/Cars/benz-sclass.png',
//   '../../images/Cars/benz-sedan.png',
//   '../../images/Cars/benz-suv.png',
//   '../../images/Cars/bmw.png',
//   '../../images/Cars/classic-car-ford.png',
//   '../../images/Cars/ferrari.png',
//   '../../images/Cars/ford.png',
//   '../../images/Cars/lamborgini-huracan.png',
//   '../../images/Cars/lamborgini.png',
//   '../../images/Cars/mini-buick.png',
//   '../../images/Cars/tesla.png',
//   '../../images/Cars/classic-car.png'
// ]

const imagePath = [
  benzSclass, benzSUV, benzSedan, bmw, ferrari, minuBuick, classicCar, classisCarFord, ford, Lambo, LamboHuracan, tesla
]

export default function GetData() {
  const shuffle = (array) => { 
    return array.sort(() => Math.random() - 0.5); 
  };
  
  const allImagePath = imagePath.concat(imagePath)

  const allImageList = allImagePath.reduce(( pre,cur,index) => {
    return [...pre , {'id': index, 'imagePath': cur, 'isClicked': false, 'isFind': false}]
  }, [])

  const shuffleImageList = shuffle(allImageList)
  
  return shuffleImageList
}

// {id:  , imagePath: , isClicked: , isFind: }