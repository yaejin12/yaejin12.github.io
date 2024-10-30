import React from "react";
import MyContributionDetailBox from "./MyContributionDetailBox";

import DetailUrl from "./DetailUrl";

function MyContribution({ styles }) {
  return (
    <>
      {/* 타이틀 부분 */}
      <section>
        <div className={styles.myContributionSection}>
          <div className={styles.myContributionInner}>
            <p className={styles.myContributionTitle}>My Contributions</p>
            <MyContributionDetailBox styles={styles} />
          </div>
          <DetailUrl styles={styles} />
        </div>
      </section>
    </>
  );
}

export default MyContribution;
