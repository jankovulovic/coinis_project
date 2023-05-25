import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <footer className={classes.footer}>
        <div className={classes.footerTopReal}>
          <div className={classes.footerTopLeft}>
            <div className={classes.footerList}>
              <h2>Section1</h2>
              <ul>
                <li>link1</li>
                <li>link2</li>
                <li>link3</li>
                <li>link4</li>
              </ul>
            </div>
            <div className={classes.footerList}>
              <h2>Section2</h2>
              <ul>
                <li>link1</li>
                <li>link2</li>
                <li>link3</li>
                <li>link4</li>
              </ul>
            </div>
            <div className={classes.footerList}>
              <h2>Section3</h2>
              <ul>
                <li>link1</li>
                <li>link2</li>
                <li>link3</li>
                <li>link4</li>
              </ul>
            </div>
            <div className={classes.footerList}>
              <h2>Section4</h2>
              <ul>
                <li>link1</li>
                <li>link2</li>
                <li>link3</li>
                <li>link4</li>
              </ul>
            </div>
          </div>
          <div className={classes.footerTopRight}>
            <div className={classes.footerList}>
              <h2>Section5</h2>
              <div>random text</div>
            </div>
            <div>Forma</div>
          </div>
        </div>
        <hr/>
        <div className={classes.footerDown}>
          <div>© 2023 Company, Inc. All rights reserved.</div>
          <div>
            <div>icon</div>
            <div>icon</div>
            <div>icon</div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
