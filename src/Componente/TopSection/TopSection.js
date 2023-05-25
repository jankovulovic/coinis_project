import classes from "./TopSection.module.css";

const TopSection = () => {
  return (
    <div className={classes.container}>
      <div className={classes.topText}>Big Title Text</div>
      <div className={classes.middleText}>
        Whatever is suppost to be here , it should be around this lenght
      </div>
      <div className={classes.bottomText}>
        Here can be some kind of explanation . Maybe really small letters , i
        still dont know but some kind of lorem for the start or whatever i am
        writing right now.
      </div>
    </div>
  );
};

export default TopSection;
