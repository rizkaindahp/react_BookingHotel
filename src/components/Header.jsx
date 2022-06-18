import { faBed, faPlane, faCar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/scss/header.scss";

export const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__list">
          <div className="header__list__item active">
            <FontAwesomeIcon icon={faBed} />
            <span>stay</span>
          </div>
          <div className="header__list__item">
            <FontAwesomeIcon icon={faPlane} />
            <span>flights</span>
          </div>
          <div className="header__list__item">
            <FontAwesomeIcon icon={faCar} />
            <span>car rentals</span>
          </div>
          <div className="header__list__item">
            <FontAwesomeIcon icon={faBed} />
            <span>attractions</span>
          </div>
        </div>
      </div>
    </div>
  );
};
