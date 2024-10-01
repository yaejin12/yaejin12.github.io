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
  const { id } = useParams();
  const [project, setProject] = useState({});
  const { url = {} } = project;
  const isDetailPage = location.pathname.startsWith(`/project/${id}`);
  const projectDummy = useSelector((state) => state.project.dummy);

  useEffect(() => {
    if (isDetailPage) {
      setProject(projectDummy.find((project) => project.id === parseInt(id)));

    } else {
      setProject({});
    }
  }, [isDetailPage, id, projectDummy]);

  return (
    <nav className={styles.socialNav}>
      <ul>
        {isDetailPage && (
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
          linkType={isDetailPage ? "ProjectGitHub" : "My GitHub"}
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
