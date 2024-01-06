const imagePath = [
  '../../public/Cars/benz-sclass.png',
  '../../public/Cars/benz-sedan.png',
  '../../public/Cars/benz-suv.png',
  '../../public/Cars/bmw.png',
  '../../public/Cars/classic-car-ford.png',
  '../../public/Cars/ferrari.png',
  '../../public/Cars/ford.png',
  '../../public/Cars/lamborgini-huracan.png',
  '../../public/Cars/lamborgini.png',
  '../../public/Cars/mini-buick.png',
  '../../public/Cars/tesla.png',
  '../../public/Cars/classic-car.png'
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