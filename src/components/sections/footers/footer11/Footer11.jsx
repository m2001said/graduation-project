import React from "react";
import "../footer11/footer11.css";
import { useSelector } from "react-redux";

const Footer11 = () => {
  const { footer } = useSelector((state) => state.template11);
  return (
    <section className="blog11 container section11" id="blog">
      <h2 className="section__title11">{footer.title.title0}</h2>
      <div className="blog__container11 grid11">
        <div className="blog__card11">
          <div className="blog__thumb11">
            <a href="#">
              <span className="blog__category11">{footer.title.title1}</span>
            </a>
            <a href="#">
              <img src={footer.imgUrl[0]} alt="" className="blog__img11" />
            </a>
          </div>
          <div className="blog__details11">
            <h3 className="blog__title11">{footer.paragraf.p1}</h3>
            <div className="blog__meta11">
              <span>{footer.paragraf.p2}</span>
              <span className="blog__dot">.</span>
              <span>{footer.title.title2}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="blog__container11 grid11">
        <div className="blog__card11">
          <div className="blog__thumb11">
            <a href="#">
              <span className="blog__category11">{footer.title.title3}</span>
            </a>
            <a href="#">
              <img src={footer.imgUrl[1]} alt="" className="blog__img11" />
            </a>
          </div>
          <div className="blog__details11">
            <h3 className="blog__title11">{footer.paragraf.p3}</h3>
            <div className="blog__meta11">
              <span>{footer.paragraf.p4}</span>
              <span className="blog__dot">.</span>
              <span>{footer.title.title4}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="blog__container11 grid11">
        <div className="blog__card11">
          <div className="blog__thumb11">
            <a href="#">
              <span className="blog__category11">{footer.title.title5}</span>
            </a>
            <a href="#">
              <img src={footer.imgUrl[2]} alt="" className="blog__img11" />
            </a>
          </div>
          <div className="blog__details11">
            <h3 className="blog__title11">{footer.paragraf.p5}</h3>
            <div className="blog__meta11">
              <span>{footer.paragraf.p6}</span>
              <span className="blog__dot">{footer.title.title7}</span>
              <span>{footer.title.title6}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer11;
