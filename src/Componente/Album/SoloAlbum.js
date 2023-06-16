import { Link } from "react-router-dom";
import img from "../../Assets/guitarman2.jpg";
import HalfRating from "./Rating";
import classes from "./SoloAlbum.module.css";

const SoloAlbum = () => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.breadcrumbs}>Home / Albums / Linkin Park</div>
        <div className={classes.infoContainer}>
          <div>
            <img
              src={img}
              alt="albumImg"
              height="300"
              width="400"
              className={classes.albumImg}
            />
          </div>
          <div className={classes.importantInfo}>
            <div className={classes.title}>Name of Album + Title of band?</div>
            <HalfRating />
            <div className={classes.statTable}>
              <div className={classes.statTitle}>
                <div className={classes.stats}>Number of songs: </div>
                <div className={classes.stats}>Genre(s): </div>
                <div className={classes.stats}>Popularity ranking: </div>
                {/* <div className={classes.stats}>Random stuff 2: </div> */}
              </div>
              <div className={classes.statValue}>
                <div>21</div>
                <div>Rock , Punk , Metal</div>
                <div> Rank , rank</div>
                {/* <div>whatever should be here</div> */}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={classes.titleSec}>About band</div>
          <div className={classes.infoText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
        </div>
        <div>
          <div className={classes.titleSec}>Tags</div>
          <div className={classes.infoTags}>
            <div className={classes.tags}>#Rock</div>
            <div className={classes.tags}>#Metal</div>
            <div className={classes.tags}>#Punk</div>
            <div className={classes.tags}>#LP</div>
            <div className={classes.tags}>#LinkinPark</div>
            <div className={classes.tags}>#Rank1</div>
            <div className={classes.tags}>#100+Songs</div>
            <div className={classes.tags}>#Vocalist</div>
          </div>
        </div>
        <div>
          <div className={classes.filters}>
            <div className={classes.filterBand}>Songs</div>
            <div className={classes.filterSolo}>Discussion</div>
          </div>
          <div className={classes.songList}>
            <div className={classes.songItem}>
              <Link to="/acords">
                Track #1 This is just the whole song name i need it 50% width
              </Link>
            </div>
            <div className={classes.songItem}>
              <Link to="/acords">
                Track #2 This is just the whole song name i need it 50% width
              </Link>
            </div>
            <div className={classes.songItem}>
              <Link to="/acords">
                Track #3 This is just the whole song name i need it 50% width
              </Link>
            </div>
            <div className={classes.songItem}>
              <Link to="/acords">
                Track #4 This is just the whole song name i need it 50% width
              </Link>
            </div>
            <div className={classes.songItem}>
              <Link to="/acords">
                Track #5 This is just the whole song name i need it 50% width
              </Link>
            </div>
            <div className={classes.songItem}>
              <Link to="/acords">
                Track #6 This is just the whole song name i need it 50% width
              </Link>
            </div>
            <div className={classes.songItem}>
              <Link to="/acords">
                Track #7 This is just the whole song name i need it 50% width
              </Link>
            </div>
            <div className={classes.songItem}>
              <Link to="/acords">
                Track #8 This is just the whole song name i need it 50% width
              </Link>
            </div>
            <div className={classes.songItem}>
              <Link to="/acords">
                Track #9 This is just the whole song name i need it 50% width
              </Link>
            </div>
            <div className={classes.songItem}>
              <Link to="/acords">
                Track #10 This is just the whole song name i need it 50% width
              </Link>
            </div>
            <div className={classes.songItem}>
              <Link to="/acords">
                Track #1 This is just the whole song name i need it 50% width
              </Link>
            </div>
            <div className={classes.songItem}>
              <Link to="/acords">
                Track #2 This is just the whole song name i need it 50% width
              </Link>
            </div>
            <div className={classes.songItem}>
              <Link to="/acords">
                Track #3 This is just the whole song name i need it 50% width
              </Link>
            </div>
            <div className={classes.songItem}>
              <Link to="/acords">
                Track #4 This is just the whole song name i need it 50% width
              </Link>
            </div>
            <div className={classes.songItem}>
              <Link to="/acords">
                Track #5 This is just the whole song name i need it 50% width
              </Link>
            </div>
            <div className={classes.songItem}>
              <Link to="/acords">
                Track #6 This is just the whole song name i need it 50% width
              </Link>
            </div>
            <div className={classes.songItem}>
              <Link to="/acords">
                Track #7 This is just the whole song name i need it 50% width
              </Link>
            </div>
            <div className={classes.songItem}>
              <Link to="/acords">
                Track #8 This is just the whole song name i need it 50% width
              </Link>
            </div>
            <div className={classes.songItem}>
              <Link to="/acords">
                Track #9 This is just the whole song name i need it 50% width
              </Link>
            </div>
            <div className={classes.songItem}>
              <Link to="/acords">
                Track #10 This is just the whole song name i need it 50% width
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SoloAlbum;
