export default function GameLogic(temp, setImageList) {
  
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