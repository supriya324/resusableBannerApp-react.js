// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {bannerCardsList} = props
  const {headerText, description, className} = bannerCardsList

  return (
    <li className={`${className} border-card`}>
      <div>
        <h1 className="heading"> {headerText}</h1>
        <p className="paragraph"> {description}</p>
        <button className="button" type="button">
          Show more
        </button>
      </div>
    </li>
  )
}
export default BannerCardItem
