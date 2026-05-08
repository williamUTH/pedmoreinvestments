import dynamic from "next/dynamic";
const CounterUp = dynamic(() => import("../elements/CounterUp"), {
  ssr: false,
});

export default function Counter() {
  return (
    <>
      <div id="counter" className="counter-area section-pt-140 section-pb-110">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="counter-item-wrap">
                <div className="row">
                  <div className="col-md-3 col-sm-6 col-6">
                    <div className="counter-item">
                      {/* Years of experience */}
                      <CounterUp count={30} time={1} />
                      <p>
                        Years <span> combined property experience</span>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-6">
                    <div className="counter-item">
                      {/* Clients served */}
                      <CounterUp count={97} time={1} />
                      <p>% average occupancy across the portfolio</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-6">
                    <div className="counter-item">
                      {/* Investments managed */}
                      <CounterUp count={9} time={1} />
                      <p>Asset types held</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-6">
                    <div className="counter-item">
                      {/* Average annual return */}
                      <CounterUp count={100} time={0} prefix="£" />
                      <p>
                        % of assets backed by own capital (£0 external
                        investment)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
