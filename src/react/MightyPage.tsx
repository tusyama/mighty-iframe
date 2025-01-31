import React from "react";
import { MightyPageProps } from "mighty-academy-widget";

const MightyPage: React.FC<MightyPageProps> = ({
  partnerId,
  targetUrl,
  style = "",
  theme = "dark",
  scrollOff = false,
  studyHeadOff = false,
  hideSidebards = false,
  studyScrollbarHidden = false,
  hideBackButton = false,
}) => {
  return (
    <mighty-page
      partnerId={partnerId}
      targetUrl={targetUrl}
      scrollOff={scrollOff}
      studyHeadOff={studyHeadOff}
      hideSidebards={hideSidebards}
      studyScrollbarHidden={studyScrollbarHidden}
      hideBackButton={hideBackButton}
      style={style}
      theme={theme}
    ></mighty-page>
  );
};

export default MightyPage;
