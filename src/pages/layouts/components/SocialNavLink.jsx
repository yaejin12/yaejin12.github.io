import React from "react";
import { NavLink } from "react-router-dom";

function SocialNavLink({ styles, linkType, link, imgSrc, type }) {
  const isOutLink = type === "outLink";
  const addClassName = () => {
    if (linkType === "Home") {
      return styles.home;
    } else if (linkType === "Site") {
      return styles.siteIcon;
    } else if (linkType === "PPT") {
      return styles.pptIcon;
    }
    return "";
  };



  return (
    <>
      <li>
        <div className={styles.linkTitle}>{linkType}</div>
        {isOutLink ? (
          <a href={link}>
            <img className={`${styles.img} ${addClassName()}`} src={imgSrc} />
          </a>
        ) : (
          <NavLink to={link}>
            <img className={`${styles.img} ${addClassName()}`} src={imgSrc} />
          </NavLink>
        )}
      </li>
    </>
  );
}

export default SocialNavLink;
