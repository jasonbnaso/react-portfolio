import React from "react";

import { SiteListDataPhaser } from "../SiteListData/SiteListDataPhaser";
import { SiteList } from "../SiteList/SiteList";

export const PhaserMod = () => {
  return (
    <>
      {SiteListDataPhaser.map((data) => {
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
