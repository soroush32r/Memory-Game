import { useEffect, useState } from "react"
import GetData from "./data/GetData"
import Card from "./components/Card"

function App() {
  const [imageList, setImageList] = useState([])
  
  useEffect(() => {
    setImageList(GetData())
  },[])
  

  const handleGameStatus = (id) => {
    
    const temp = imageList.map((item) => {
      if(item.id === id) {
        item.isClicked = true
      } 
      return item  
    })
    const clickedObjects = temp.filter(item => item.isClicked && !item.isFind);
    if (clickedObjects.length <= 2) {
      setImageList(temp)
      if (clickedObjects.length === 2) {
        setTimeout(() => {
          const areImageSame = clickedObjects[0].imagePath === clickedObjects[1].imagePath
          let result = []
          if (areImageSame) {
            result = temp.map((item) => {
              if (clickedObjects[0].id === item.id || clickedObjects[1].id === item.id) {
                item.isFind = true
              }
              return item
            })
          } else {
            result = temp.map((item) => {
              if (clickedObjects[0].id === item.id || clickedObjects[1].id === item.id) {
                item.isClicked = false
              }
              return item
            })
          }
          setImageList(result)
        }, 800)
      }

    }
  }

  return (
    <div className="grid grid-cols-6 m-14">
      {imageList.map(({id, imagePath, isClicked, isFind}) => (
        <Card key={id} id={id} imagePath={imagePath} isClicked={isClicked} isFind={isFind} handleGameStatus={handleGameStatus} />
      ))}
    </div>
  )
}

export default App


