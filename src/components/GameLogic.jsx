export default function GameLogic(temp, setImageList, setIsGameFinished, setWinnerText) {
  
  const clickedObjects = temp.filter(item => item.isClicked && !item.isFind);
  if (clickedObjects.length <= 2) {
    setImageList(temp)
    if (clickedObjects.length === 2) {
      let result = []
      setTimeout(() => {
        const areImageSame = clickedObjects[0].imagePath === clickedObjects[1].imagePath
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
        const findObjects = temp.filter(item => item.isFind);
        console.log(temp.filter(item => item.isFind))
        if (findObjects.length === 24) {
          setWinnerText('(: !!! Congratulations You Win the Game !!! :)')
          setIsGameFinished(true)
        }
      }, 800)
    }
  } 


}