import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
//import Color from "../components/Color";
import Meta from "../components/Meta";
import Container from "../components/Container";
import cross from "../images/cross.svg";
import watch1 from "../images/watch-1.avif"
import watch from "../images/watch.jpg"

const Wishlist = () => {
  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title="Wishlist" />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src={cross}
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="wishlist-card-image">
                <img
                      src={watch1}
                  className="img-fluid w-100"
                  alt="watch"
                />
              </div>
              <div className="py-3 px-3">
                <h5 className="title">
                  Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet
                </h5>
                <h6 className="price">GH¢ 100</h6>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                   src={cross}
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="wishlist-card-image">
                <img
                    src={watch}
                  className="img-fluid w-100"
                  alt="watch"
                />
              </div>
              <div className="py-3 px-3">
                <h5 className="title">
                  Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet
                </h5>
                <h6 className="price">GH¢ 100</h6>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                    src={cross}
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="wishlist-card-image">
                <img
                  src={watch1}
                  className="img-fluid w-100"
                  alt="watch"
                />
              </div>
              <div className="py-3 px-3">
                <h5 className="title">
                  Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet
                </h5>
                <h6 className="price">GH¢ 100</h6>
              </div>
            </div>
          </div>
        </div>
      </Container>
      </>
  )
}

export default Wishlist