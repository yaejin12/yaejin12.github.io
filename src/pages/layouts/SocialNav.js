import React, { useEffect, useState } from "react";
import githubLogo from "../../assets/images/icons/github_logo.svg";
import notionLogo from "../../assets/images/icons/notion_logo.svg";
import homeIcon from "../../assets/images/icons/house.svg";
import SocialNavLink from "./components/SocialNavLink";
import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import urlIcon from "../../assets/images/icons/linkURL.svg";
import pptIcon from "../../assets/images/icons/pptIcon.svg";

function SocialNav({ styles }) {
  const location = useLocation();

  const [project, setProject] = useState({});
  const { url = {} } = project;
  const is3on3Page = location.pathname.startsWith(`/project/3on3`);
  const is5joPage = location.pathname.startsWith(`/project/5jo`);
  const isPage = is3on3Page || is5joPage;
  const projectDummy = useSelector((state) => state.project.dummy);

  useEffect(() => {
    if (is3on3Page) {
      setProject(projectDummy[0]);
    }
    if (is5joPage) {
      setProject(projectDummy[1]);
      console.log("project!", project);
    }
  }, [is3on3Page, is5joPage, projectDummy]);

  return (
    <nav className={styles.socialNav}>
      <ul>
        {isPage && (
          <div className={styles.upAni}>
            {url.site && (
              <SocialNavLink
                styles={styles}
                link={url.site}
                imgSrc={urlIcon}
                type={"outLink"}
                linkType={"Site"}
              />
            )}
            {url.ppt && (
              <SocialNavLink
                styles={styles}
                link={url.ppt}
                imgSrc={pptIcon}
                type={"outLink"}
                linkType={"PPT"}
              />
            )}
            {url.notion && (
              <SocialNavLink
                styles={styles}
                link={url.notion}
                imgSrc={notionLogo}
                type={"outLink"}
                linkType={"Notion"}
              />
            )}
          </div>
        )}
        <SocialNavLink
          styles={styles}
          link={url.github ? url.github : "https://github.com/yaejin12"}
          imgSrc={githubLogo}
          type={"outLink"}
          linkType={is3on3Page || is5joPage ? "ProjectGitHub" : "My GitHub"}
        />
        <SocialNavLink
          styles={styles}
          link={"/"}
          imgSrc={homeIcon}
          type={"navLink"}
          linkType={"Home"}
        />
      </ul>
    </nav>
  );
}

export default SocialNav;
