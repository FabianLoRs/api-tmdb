import TVShowListItem from "../TVShowListItem/TVShowListItem";
import style from "./style.module.css";

const TVShowList = ({ onClickItem, tvShowList }) => (
  <div>
    <div className={style.title}>You'll probably like:</div>
    <div className={style.list}>
      {tvShowList.map((tvShow) => {
        return (
          <span key={tvShow.id}>
            <TVShowListItem 
              tvShow={tvShow}
              onClick={onClickItem}
            />
          </span>
        )
      })}
    </div>
  </div>
);

export default TVShowList;
