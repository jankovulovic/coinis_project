import classes from "./BigList.module.css";
import AlbumHome from "../Album/AlbumHome";

const BigList = ({ numberOfAlbums }) => {
  const albumList = Array.from({ length: numberOfAlbums }, (_, index) => (
    <AlbumHome key={index} />
  ));

  return <div>{albumList}</div>;
};

export default BigList;
