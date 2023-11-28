const imagePath = [
  '../../images/Cars/benz-sclass.png',
  '../../images/Cars/benz-sedan.png',
  '../../images/Cars/benz-suv.png',
  '../../images/Cars/bmw.png',
  '../../images/Cars/classic-car-ford.png',
  '../../images/Cars/ferrari.png',
  '../../images/Cars/ford.png',
  '../../images/Cars/lamborgini-huracan.png',
  '../../images/Cars/lamborgini.png',
  '../../images/Cars/mini-buick.png',
  '../../images/Cars/tesla.png',
  '../../images/Cars/classic-car.png'
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