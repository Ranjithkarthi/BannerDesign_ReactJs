// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {details} = props
  const {headerText, description, className} = details
  return (
    <li className={`${className} card`}>
      <div className="text-content">
        <h1 className="heading">{headerText}</h1>
        <p className="desc">{description}</p>
        <button className="btn" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
