// Write your code here.
import './index.css'

const Card = props => {
  const {cardDetails} = props
  const {headerText, description, className} = cardDetails

  return (
    <li className={`${className} banner-card-item`}>
      <div>
        <h1>{headerText}</h1>
        <p>{description}</p>
        <button className="button-1">Show more</button>
      </div>
    </li>
  )
}
export default Card
