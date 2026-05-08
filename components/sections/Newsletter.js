export default function Newsletter() {
  return (
    <>
      <section className="newsletter-area section-pb-140">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="newsletter-inner">
                <div className="row justify-content-center">
                  <div className="col-xl-8">
                    <div className="newsletter-content">
                      <div className="section-title mb-50">
                        <span className="sub-title">Have an opportunity?</span>
                        <h2 className="title">
                          Talk with our expert consultants
                        </h2>
                      </div>
                      <form
                        action="/contact.php"
                        method="POST"
                        className="newsletter-form"
                      >
                        <input
                          type="hidden"
                          name="formType"
                          value="newsletter"
                        />
                        <ul className="list-wrap">
                          <li>
                            <input
                              type="text"
                              placeholder="Your name"
                              required="required"
                              name="name"
                            />
                          </li>
                          <li>
                            <input
                              type="text"
                              placeholder="Phone number"
                              required="required"
                              name="phone"
                            />
                          </li>
                          <li className="submit-btn">
                            <input type="submit" defaultValue="submit" />
                          </li>
                        </ul>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="checkbox"
                            name="terms"
                            value="yes"
                          />
                          <label htmlFor="checkbox">
                            I accept <span>Terms & Conditions</span> for
                            processing personal data
                          </label>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
