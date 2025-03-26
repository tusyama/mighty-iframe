import React from "react";
import { MightyPageProps } from "mighty-academy-widget";

const MightyPage: React.FC<MightyPageProps> = ({
  partnerId,
  targetUrl,
  style = "",
  theme = "dark",
  scrollOff = false,
  studyHeadOff = false,
  // typo here now must be handled with backwards compatibility...
  hideSidebards = false,
  hideSidebars = false,
  studyScrollbarHidden = false,
  hideBackButton = false,
  hideNextLessonBtn = false,
  studyBottomMargin = 50,
}) => {
  return (
    <mighty-page
      partnerId={partnerId}
      targetUrl={targetUrl}
      scrollOff={scrollOff}
      studyBottomMargin={studyBottomMargin}
      studyHeadOff={studyHeadOff}
      hideSidebars={hideSidebards || hideSidebars}
      studyScrollbarHidden={studyScrollbarHidden}
      hideBackButton={hideBackButton}
      hideNextLessonBtn={hideNextLessonBtn}
      style={style}
      theme={theme}
    ></mighty-page>
  );
};

export default MightyPage;
