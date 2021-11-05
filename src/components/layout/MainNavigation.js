import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { useContext } from "react";
import { FavouritesContext } from "../../store/FavouritesContext";

function MainNavigation() {
  const favouriteCtx = useContext(FavouritesContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <nav>
          <ul>
            <li>
              <Link to="/">All Meetups</Link>
            </li>
            <li>
              <Link to="/favourites">
                Favourites
                <span className={classes.badge}>
                  {favouriteCtx.totalFavourites}
                </span>
              </Link>
            </li>
            <li>
              <Link to="/new-meetup">New Meetup</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default MainNavigation;
