import { SiteListData } from "../SiteListData/SiteListDataWordpress";
import { SiteList } from "../SiteList/SiteList";

export const WordpressMod = () => {
  return (
    <>
      {SiteListData.map((data) => {
        return (
          <SiteList
            pathref={data.pathref}
            src={data.src}
            target={data.target}
            alt={data}
            key={data.id}
          />
        );
      })}
    </>
  );
};
