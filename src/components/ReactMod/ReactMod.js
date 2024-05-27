import React from "react";

import { SiteListDataReact } from "../SiteListData/SiteListDataReact";
import { SiteList } from "../SiteList/SiteList";

export const ReactMod = () => {
  return (
    <>
      {SiteListDataReact.map((data) => {
        return (
          <SiteList
            pathref={data.pathref}
            src={data.src}
            target={data.target}
            alt={data.alt}
            key={data.id}
          />
        );
      })}
    </>
  );
};
