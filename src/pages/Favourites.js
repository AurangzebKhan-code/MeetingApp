import { useContext } from "react";
import MeetUpList from "../components/meetups/MeetUpList";
import { FavouritesContext } from "../store/FavouritesContext";
function FavouritesPage() {
  const favouriteCtx = useContext(FavouritesContext);
  let content;
  if (favouriteCtx.totalFavourites === 0) {
    content = <p>You got no favourites yet.Start adding some?</p>;
  } else {
    content = <MeetUpList meetups={favouriteCtx.favourites} />;
  }
  return (
    <section>
      <h1>Favourites</h1>
      {content}
    </section> 
  );
}

export default FavouritesPage;
