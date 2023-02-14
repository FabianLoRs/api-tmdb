import { SMALL_IMAGE_COVER_BASE_URL } from "../../config";
import style from "./style.module.css";

const TVShowListItem = ({ tvShow, onClick }) => {
  
  const MAX_TITLE_CHAR = 20;

  const onClick_ = () => {
    onClick(tvShow);
  };

  return (
    <div onClick={onClick_} className={style.container}>
      <img
        src={SMALL_IMAGE_COVER_BASE_URL + tvShow.backdrop_path}
        alt={tvShow.name} 
        className={style.img}
      />
      <div className={style.title}>
        {tvShow.name.length > MAX_TITLE_CHAR
          ? tvShow.name.slice(0, MAX_TITLE_CHAR) + "..."
          : tvShow.name
        }
      </div>
    </div>
  );
};

export default TVShowListItem;
