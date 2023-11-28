import { useEffect, useState } from "react"
import GetData from "./data/GetData"
import Card from "./components/Card"
import GameLogic from "./components/GameLogic"

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
    GameLogic(temp,setImageList)
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


