import "./catalog.css"
import ShipInfo from "./ShipInfo";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const ShipItem = ({
  _id,
  name,
  imageUrl,
  cruiseLine,
  ownerName,
  onInfoClick,

}) => {
  const infoClickHandler = () => {
    onInfoClick(_id);
};
  return (
    <div className="content-wrapper">
      <div className="news-card">
        <a href="#" className="news-card__card-link"></a>
        <img src={imageUrl} alt="" className="news-card__image" />
        <div className="news-card__text-wrapper">
          <h2 className="news-card__title">{name}</h2>
          <div className="news-card__post-date">Jan 29, 2018</div>
          <div className="news-card__details-wrapper">
            <p className="news-card__excerpt">{cruiseLine}</p>
            <p className="news-card__excerpt">{ownerName}</p>

            <button  className="news-card__read-more" onClick={infoClickHandler}>Read more <i className="fas fa-long-arrow-alt-right"></i></button>
            {/* <Button  className="news-card__read-more" as={Link} to={`/catalog/${_id}`}>Details</Button> */}

          </div>
        </div>
      </div>
    </div>


  );
}
export default ShipItem;