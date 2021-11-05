import classes from "./MeetUpItem.module.css";
import Card from "../ui/Card";
import { useContext } from "react";
import { FavouritesContext } from "../../store/FavouritesContext";
function MeetUpItem(props) {
  const favouriteCtx = useContext(FavouritesContext);
  const itemisFavourite = favouriteCtx.itemIsFavourite(props.id);

  function toggleFavouriteStatusHandler() {
    if (itemisFavourite) {
      favouriteCtx.removeFavourite(props.id);
    } else {
      favouriteCtx.addFavourite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}> 
          <button onClick={toggleFavouriteStatusHandler}>
            {itemisFavourite ? "Remove from Favourites" : "To Favourites"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetUpItem;
