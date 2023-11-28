import { useEffect, useState } from "react"
import GetData from "./data/GetData"
import Card from "./components/Card"
import GameLogic from "./components/GameLogic"

function App() {
  const [imageList, setImageList] = useState([])
  const [isGameFinished,setIsGameFinished] = useState(false)
  const [isGameStarted, setIsGameStarted] = useState(false)
  const [winnerText,setWinnerText] = useState('')

  const showFirstTime = (images) => {
    images.map((item) => {
      item.isClicked = true
      return item
    })
    setImageList(images)
    setTimeout(() => {
      const temp = images.map((item) => {
        item.isClicked = false
        return item
      })
      setImageList(temp)
    }, 3000)
  }

  const startGameHandler = () => {
    const images = GetData();
    setIsGameFinished(false)
    setWinnerText('')
    setIsGameStarted(true)
    showFirstTime(images)
  }

  const handleGameStatus = (id) => {
    const temp = imageList.map((item) => {
      if(item.id === id) {
        item.isClicked = true
      } 
      return item  
    })
    GameLogic(temp,setImageList, setIsGameFinished, setWinnerText)
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      <div className="flex w-52 justify-around mb-5 transition-transform">
        <button className="px-4 py-2 hover:bg-teal-300 rounded-md bg-teal-400" onClick={startGameHandler}>{isGameStarted? 'Reset' : 'Start'}</button>
      </div>
      <h1 className="text-2xl text-green-600 text-center">{winnerText}</h1>
      <div className={`${isGameFinished ? 'hidden' : ''} grid grid-cols-6`}>
        {imageList.map(({id, imagePath, isClicked, isFind}) => (
          <Card key={id} id={id} imagePath={imagePath} isClicked={isClicked} isFind={isFind} handleGameStatus={handleGameStatus} />
        ))}
    </div>
    </div>
  )
}

export default App


