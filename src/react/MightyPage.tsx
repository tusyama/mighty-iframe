import React from "react";
import { MightyPageProps } from "mighty-academy-widget";

const MightyPage: React.FC<MightyPageProps> = ({
  partnerId,
  targetUrl,
  scrollOff = false,
  studyHeadOff = false,
  hideSidebards = false,
  studyScrollbarHidden = false,
  style = "",
  theme = "dark",
}) => {
  return (
    <mighty-page
      partnerId={partnerId}
      targetUrl={targetUrl}
      scrollOff={scrollOff}
      studyHeadOff={studyHeadOff}
      hideSidebards={hideSidebards}
      studyScrollbarHidden={studyScrollbarHidden}
      style={style}
      theme={theme}
    ></mighty-page>
  );
};

export default MightyPage;
