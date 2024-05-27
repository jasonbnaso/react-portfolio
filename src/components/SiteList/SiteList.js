export const SiteList = ({ pathref, src, alt, target }) => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
      <a target={target} rel="noreferrer" href={pathref}>
        <div className="hovereffect">
          <img className="img-fluid" src={src} target={target} alt={alt}></img>
          <div className="overlay">
            <div className="line"></div>
            <p>
              <span className="custom-button">See Site</span>
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};
