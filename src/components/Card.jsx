import qustionMarkImg from '.././../images/question-mark/question-mark.png'

const Card = ({imagePath, isClicked}) => {
  return (
    <div className="border border-black w-32 h-32 m-5">
      <img src={isClicked ? imagePath : qustionMarkImg} className="w-full h-full" />
    </div>
  )
}

export default Card