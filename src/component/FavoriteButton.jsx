import { useDispatch, useSelector } from "react-redux"
import { favoritSlice } from "../RTK/slice"

export default FavoriteButton({pokemonId}) {
  const isFavorite = useSelector((state) => 
    state.favorite.some((item) => item === pokemonId));
  
  const dispatch = useDispatch();
  
  return (
    <button 
      onClick={(e) => {
        e.stopPropagation()
        dispatch(isFavorite ? favoritSlice.actions.
        removeFromFavorite({pokemonId}) : favoritSlice.
        actions.addToFavorite({pokemonId}));
    }}
    className={isFavorite ? "text-[red]" : ''}>
    {isFavorite ? '♥︎' : '♡'}
    </button>
  );
}