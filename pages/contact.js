import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
export default function Contact() {
  const [investmentAmount, setInvestmentAmount] = useState("");
  const [phone, setPhone] = useState("");

  const handleAmountChange = (e) => {
    const raw = e.target.value.replace(/[^0-9.]/g, "");
    setInvestmentAmount(raw);
  };

  const stripAmountOnFocus = () => {
    setInvestmentAmount((prev) => (prev ? prev.replace(/[^0-9.]/g, "") : ""));
  };

  const formatAmountOnBlur = () => {
    if (!investmentAmount) return;
    const number = Number(investmentAmount.replace(/,/g, ""));
    if (Number.isNaN(number)) return;
    const formatted = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(number);
    setInvestmentAmount(formatted);
  };

  const handlePhoneChange = (e) => {
    const filtered = e.target.value.replace(/[^0-9+\-()\s]/g, "");
    setPhone(filtered);
  };
  return (
    <>
      <Layout headerStyle={7}>
        {/* breadcrumb-area */}
        <section className="breadcrumb-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-content">
                  <h2 className="title">Contact Us</h2>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link href="/">Home</Link>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Contact
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* breadcrumb-area-end */}
        {/* contact-info */}
        <section className="contact-info pb-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="contact-info-item">
                  <span className="sub-title">Registered office</span>
                  <h2 className="title">
                    63 Charlotte Street, Birmingham, B3 1PX.
                  </h2>
                  <ul className="list-wrap">
                    <li>
                      <Link href="mailto:info@pedmoreinvestments.co.uk">
                        info@pedmoreinvestments.co.uk
                      </Link>
                    </li>
                    <li>
                      <Link href="https://wa.me/447958125137">
                        <img
                          src="/assets/img/logo/whatsapp.png"
                          alt="WhatsApp"
                          style={{ width: "20px", marginRight: "5px" }}
                        />
                        Contact us on WhatsApp
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* contact-info-end */}
        {/* contact-map */}
        {/* <div className="map-area">
          <div className="container">
            <div id="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96811.54759587669!2d-74.01263924803828!3d40.6880494567041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25bae694479a3%3A0xb9949385da52e69e!2sBarclays%20Center!5e0!3m2!1sen!2sbd!4v1636195194646!5m2!1sen!2sbd"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div> */}
        {/* contact-map-end */}
        {/* contact-form-area */}
        <section className="contact-form-area pt-20 pb-140">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-8">
                <div className="section-title text-center mb-55">
                  <span className="sub-title">leave a message</span>
                  <h2 className="title">
                    Let’s talk about your investment opportunity
                  </h2>
                </div>
                <div className="contact-form-wrap">
                  <form action="/contact.php" method="POST">
                    <input type="hidden" name="formType" value="contact" />
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-grp">
                          <input
                            type="text"
                            placeholder="Your name"
                            required="required"
                            name="name"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-grp">
                          <input
                            type="tel"
                            inputMode="tel"
                            pattern="^\\+?[0-9\\s\\-()]{7,}$"
                            title="Please enter a valid phone number"
                            placeholder="Phone number"
                            required="required"
                            name="phone"
                            value={phone}
                            onChange={handlePhoneChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-grp">
                      <input
                        type="email"
                        placeholder="Email address"
                        required="required"
                        name="email"
                      />
                    </div>
                    <div className="form-grp">
                      <input
                        type="text"
                        placeholder="Investment opportunity location"
                        required="required"
                        name="location"
                      />
                    </div>
                    <div className="form-grp">
                      <input
                        type="url"
                        inputMode="url"
                        placeholder="Link to opportunity (URL)"
                        name="link"
                      />
                    </div>
                    <div className="form-grp">
                      <textarea
                        name="message"
                        placeholder="Describe the investment opportunity"
                        required="required"
                        defaultValue={""}
                      />
                    </div>
                    <div className="form-grp">
                      <input
                        type="text"
                        inputMode="decimal"
                        placeholder="Estimated investment amount (GBP)"
                        required="required"
                        name="amount"
                        value={investmentAmount}
                        onChange={handleAmountChange}
                        onFocus={stripAmountOnFocus}
                        onBlur={formatAmountOnBlur}
                      />
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="checkbox"
                        name="terms"
                        value="yes"
                      />
                      <label htmlFor="checkbox">
                        I accept <span>Terms & Conditions</span> for processing
                        personal data
                      </label>
                    </div>
                    <div className="form-submit">
                      <input type="submit" defaultValue="submit" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* contact-form-area-end */}
      </Layout>
    </>
  );
}
