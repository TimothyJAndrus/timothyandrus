/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
// sections for this page
import SectionDescription from "pages-sections/presentation-page/SectionDescription.js";
import SectionComponents from "pages-sections/presentation-page/SectionComponents.js";
import SectionCards from "pages-sections/presentation-page/SectionCards.js";
import SectionContent from "pages-sections/presentation-page/SectionContent.js";
import SectionSections from "pages-sections/presentation-page/SectionSections.js";
import SectionExamples from "pages-sections/presentation-page/SectionExamples.js";
import SectionFreeDemo from "pages-sections/presentation-page/SectionFreeDemo.js";
import SectionOverview from "pages-sections/presentation-page/SectionOverview.js";
import SectionPricing from "pages-sections/presentation-page/SectionPricing.js";

import presentationStyle from "assets/jss/nextjs-material-tim-andrus/pages/presentationStyle.js";

const useStyles = makeStyles(presentationStyle);

export default function PresentationPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Header
        brand="Timothy Andrus"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "info"
        }}
      />
      <Parallax
        image={require("assets/img/nextjs_header.jpg")}
        className={classes.parallax}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classNames(classes.brand, classes.proBadge)}>
                <h1>
                 Timothy Andrus
                  {/* <span className={classes.proBadge}>TM</span> */}
                </h1>
                <h3 className={classes.title}>
                  Technology and Design
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionDescription />
        <SectionComponents />
        <SectionCards />
        <SectionContent />
        <SectionSections />
        <SectionExamples />
        <SectionFreeDemo />
        <SectionOverview />
      </div>
      <SectionPricing />
      <Footer
        theme="white"
        content={
          <div>
            <div className={classes.left}>
              <a
                href="https://www.nowsta.com/"
                target="_blank"
                className={classes.footerBrand}
              >
                Timothy Andrus
              </a>
            </div>
            <div className={classes.pullCenter}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="www.nowsta.com/"
                    target="_blank"
                    className={classes.block}
                  >
                    Tim Andrus
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.nowsta.com/"
                    target="_blank"
                    className={classes.block}
                  >
                    About me
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="http://www.nowsta.com/"
                    className={classes.block}
                  >
                    Blog
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.nowsta.com/"
                    target="_blank"
                    className={classes.block}
                  >
                    Licenses
                  </a>
                </ListItem>
              </List>
            </div>
            <div className={classes.rightLinks}>
              <ul>
                <li>
                  <Button
                    href="https://twitter.com/timothyjandrus"
                    target="_blank"
                    color="twitter"
                    justIcon
                    simple
                  >
                    <i className="fab fa-twitter" />
                  </Button>
                </li>
                <li>
                  <Button
                    href="https://dribble.com/timothyjandrus"
                    target="_blank"
                    color="dribbble"
                    justIcon
                    simple
                  >
                    <i className="fab fa-dribbble" />
                  </Button>
                </li>
                <li>
                  <Button
                    href="https://instagram.com/timothyjandrus"
                    target="_blank"
                    color="instagram"
                    justIcon
                    simple
                  >
                    <i className="fab fa-instagram" />
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        }
      />
    </div>
  );
}
