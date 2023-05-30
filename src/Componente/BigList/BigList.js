import classes from "./BigList.module.css";
import AlbumHome from "../Album/AlbumHome";

const BigList = () => {

  return (
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
    </div>
  );
};

export default BigList;
