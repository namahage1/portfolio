// This is a static page mocking an "About Us" section for our fake user data
export default function AboutPage() {
  return (
    <div className="container pt-4">
      <section className="features-icons bg-light text-center m-4">
        <div className="container">
          <div className="row p-2">
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-window m-auto text-primary" />
                </div>
                <h3>say something</h3>
                <p className="lead mb-0">
                  introduce
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-layers m-auto text-primary" />
                </div>
                <h3>say something</h3>
                <p className="lead mb-0">
                  say something
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-terminal m-auto text-primary" />
                </div>
                <h3>indroduce</h3>
                <p className="lead mb-0">
                  more say something
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <p>
        blah
      </p>
    </div>
  );
}
