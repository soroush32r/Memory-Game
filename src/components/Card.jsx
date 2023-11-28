import qustionMarkImg from '.././../images/question-mark/question-mark.png'

const Card = ({id, imagePath, isClicked, isFind, handleGameStatus}) => {

  const handleOnClick = () => {
    handleGameStatus(id)
  }

  return (
    <div className={`border border-black w-32 h-32 m-5 ${isFind ? 'border-none' : ''} ${!isClicked ? 'hover:bg-teal-50' : ''}`} onClick={handleOnClick}>
      <img src={isClicked ? imagePath : qustionMarkImg} className={`w-full h-full ${isFind ? 'hidden' : ''}`} />
    </div>
  )
}

export default Card