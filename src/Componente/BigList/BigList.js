import classes from "./BigList.module.css";
import AlbumHome from "../Album/AlbumHome";
import { Link } from "react-router-dom";

const BigList = () => {
  return (
    <>
      <div>Most Popular Creators</div>
      <div className={classes.filters}>
        <div className={classes.filterBand}>Official Bands</div>
        <div className={classes.filterSolo}>Solo Artists</div>
      </div>

      <div className={classes.albums}>
        <AlbumHome />
        <AlbumHome />
        <AlbumHome />
        <AlbumHome />
        <AlbumHome />
        <AlbumHome />
        <AlbumHome />
        <AlbumHome />
        <AlbumHome />
        <AlbumHome />
        <AlbumHome />
        <AlbumHome />
        <AlbumHome />
        <AlbumHome />
        <AlbumHome />
        <AlbumHome />
      </div>

      <div className={classes.linkDiv}>
        <Link to="/list" className={classes.linkBtn}>
          <div className={classes.seeAll}>See All Creators</div>
        </Link>
      </div>

      <div className={classes.quoteTitle}>
        Add your own music or make your playlist ?
      </div>
      <div className={classes.addOptions}>
        <div className={classes.addMusic}>
          <div className={classes.optTitle}>Add your own Music.</div>
          <div>
            This would be a guide for adding your own music. If you click on
            this button it will lead you to the page that is for posting your
            own music. If you are not loged in it should request that you have
            to log in as it would be stupid to allow anything if you not loged
            in.
          </div>
          <div className={classes.linkDivs}>
            <Link to="/list">
              <div className={classes.optBtn}>Button</div>
            </Link>
          </div>
        </div>
        <div className={classes.addPlaylist}>
          <div className={classes.optTitle}>Make your own Playlist.</div>
          <div>
            This is still new feature and i have no clue what i would put here.
            How this will be done is questionable. Need more thinking.
          </div>
          <div className={classes.linkDivs}>
            <Link to="/list">
              <div className={classes.optBtn}>Button</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BigList;
