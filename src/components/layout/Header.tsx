import { Link } from "react-router-dom";
import PathConstants from "../../routes/pathConstants";

const Header = () => {
  return (
    <header>
      <div className="header-div">
        <span className="title">
          <Link to={PathConstants.HOME}>Test Users App</Link>
        </span>
      </div>
    </header>
  );
}

export default Header