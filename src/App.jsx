import { useState, useEffect } from "react";
import Logo from "./components/Logo/Logo";
import SearchBar from "./components/SearchBar/SearchBar";
import TVShowDetail from "./components/TVShowDetail/TVShowDetail";
import TVShowList from "./components/TVShowList/TVShowList";
import { TVShowAPI } from "./api/tv.show";
import { BACKDROP_BASE_URL } from "./config";
import logoimg from "./assets/images/logo.png";
import style from "./style.module.css";

function App() {
  const [currentTVShow, setCurrentTVShow] = useState();

  async function fetchPopulars() {
    const popularTVShowList = await TVShowAPI.fetchPopulars();
    if (popularTVShowList && popularTVShowList.length > 0) {
      setCurrentTVShow(popularTVShowList[0]);
    }
  }

  async function fetchByTitle(title) {
    const searchResponse = await TVShowAPI.fetchByTitle(title);
    if (searchResponse && searchResponse.length > 0) {
      setCurrentTVShow(searchResponse[0]);
    }
  }

  console.log(currentTVShow);

  useEffect(() => {
    fetchPopulars();
  }, []);

  return (
    <div
      className={style.main_container}
      style={{
        background: currentTVShow
          ? `linear-gradient(rgba(0, 0, 0, 0.200), rgba(0, 0, 0, 0.200)),
            url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
          : "black",
      }}
    >
      <div className={style.header}>
        <div className="row">
          <div className="col-4">
            <Logo title="WatchShows" image={logoimg} />
          </div>
        </div>
      </div>
      <div className="col-md-12 col-lg-4">
        <SearchBar onSubmit={fetchByTitle}/>
      </div>
      <div className={style.tv_show_details}>
        {currentTVShow && <TVShowDetail tvShow={currentTVShow} />}
      </div>
      <div className={style.recommended_shows}>
        {currentTVShow && <TVShowList />}
      </div>
    </div>
  );
}

export default App;
