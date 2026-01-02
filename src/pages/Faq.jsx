import Image9 from "../assets/images/faqs-image.jpg";
import Image10 from "../assets/images/services-01.jpg";
import Image11 from "../assets/images/services-02.jpg";
import Image12 from "../assets/images/services-03.jpg";
import Image13 from "../assets/images/services-04.jpg";

function Faq() {
  return (
    <>
      <div className="page-heading">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 align-self-center">
              <div className="caption header-text">
                <h6>SEO DIGITAL AGENCY</h6>
                <div className="line-dec"></div>
                <h4>
                  Most Frequently Asked <em>Questions</em> Here <em>?</em>
                </h4>
              </div>
            </div>
            <div className="col-lg-5">
              <img src={Image9} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="happy-steps">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Our 4 Steps To Success &amp; Happy Clients</h2>
            </div>
            <div className="col-lg-12">
              <div className="steps">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="item">
                      <img
                        src={Image10}
                        alt=""
                        style={{ maxWidth: "66px", borderRadius: "50%", margin: "0 auto" }}
                      />
                      <h4>Project Introduction</h4>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="item">
                      <img
                        src={Image11}
                        alt=""
                        style={{ maxWidth: "66px", borderRadius: "50%", margin: "0 auto" }}
                      />
                      <h4>Work Development</h4>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="item">
                      <img
                        src={Image12}
                        alt=""
                        style={{ maxWidth: "66px", borderRadius: "50%", margin: "0 auto" }}
                      />
                      <h4>Data Analysis</h4>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="item last-item">
                      <img
                        src={Image13}
                        alt=""
                        style={{ maxWidth: "66px", borderRadius: "50%", margin: "0 auto" }}
                      />
                      <h4>Project Finishing</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="most-asked section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <h2>
                  Most <em>Frequently</em> Asked <span>Questions</span> ?
                </h2>
                <div className="line-dec"></div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  doers.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="accordions is-first-expanded">
                <article className="accordion">
                  <div className="accordion-head">
                    <span>Sartorial Butcher Humblebrag</span>
                    <span className="icon">
                      <i className="icon fa fa-chevron-right"></i>
                    </span>
                  </div>
                  <div className="accordion-body">
                    <div className="content">
                      <p>
                        Tale is the best SEO agency website template using
                        Bootstrap v5.2.2 CSS for your company.
                      </p>
                    </div>
                  </div>
                </article>

                <article className="accordion">
                  <div className="accordion-head">
                    <span>Jean Shorts Microdosing</span>
                    <span className="icon">
                      <i className="icon fa fa-chevron-right"></i>
                    </span>
                  </div>
                  <div className="accordion-body">
                    <div className="content">
                      <p>
                        You are free to use this template for any purpose.
                        <br />
                        <br />
                        Semiotics blog cray letterpress lo-fi vexillologist.
                      </p>
                    </div>
                  </div>
                </article>

                <article className="accordion">
                  <div className="accordion-head">
                    <span>Waistcoat Aesthetic Polaroid</span>
                    <span className="icon">
                      <i className="icon fa fa-chevron-right"></i>
                    </span>
                  </div>
                  <div className="accordion-body">
                    <div className="content">
                      <p>
                        Semiotics blog cray letterpress lo-fi vexillologist.
                        <br />
                        <br />
                        Fingerstache cronut taxidermy.
                      </p>
                    </div>
                  </div>
                </article>

                <article className="accordion">
                  <div className="accordion-head">
                    <span>Dolores Accordion HTML5</span>
                    <span className="icon">
                      <i className="icon fa fa-chevron-right"></i>
                    </span>
                  </div>
                  <div className="accordion-body">
                    <div className="content">
                      <p>
                        Pickled succulents bitters belly direct trade shaman
                        iceland raw denim.
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="get-free-quote">
                <form id="free-quote" action="#">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="section-heading">
                        <h2>
                          Get a <em>Free Quote</em> Now
                        </h2>
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <input type="email" placeholder="Your E-mail" required />
                    </div>
                    <div className="col-lg-12">
                      <input type="text" placeholder="Website URL" required />
                    </div>
                    <div className="col-lg-12">
                      <input type="text" placeholder="Phone Number" required />
                    </div>
                    <div className="col-lg-12">
                      <input type="text" placeholder="Full Name" />
                    </div>
                    <div className="col-lg-12">
                      <button className="orange-button">
                        Get Your Free Quote
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cta section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h4>
                Are You Ready To Work &amp; Develop With Us ?
                <br />
                Don't Hesitate &amp; Contact Us !
              </h4>
            </div>
            <div className="col-lg-4">
              <div className="main-button">
                <a href="#">Contact Us Now!</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Faq;
