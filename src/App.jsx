import { useEffect, useState } from "react"
import GetData from "./data/GetData"
import Card from "./components/Card"

function App() {
  const [imageList, setImageList] = useState([])
  useEffect(() => {
    setImageList(GetData())
  },[])
  

  return (
    <div className="grid grid-cols-6 m-14">
      {imageList.map(({id, imagePath, isClicked, isFind}) => (
        <Card imagePath={imagePath} key={id}/>
      ))}
    </div>
  )
}

export default App


