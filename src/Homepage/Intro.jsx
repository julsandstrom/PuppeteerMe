import Puppet from "./Puppet";
import Header from "./Header";
import Category from "./Category";

const Intro = () => {
  return (
    <div>
      <Puppet />
      <Header />
      <Category />
      <section className="footer">
        <h6 className="projectBy">
          <span className="pop-color">Project by</span> <br /> Julian Sandstrom
        </h6>
      </section>
    </div>
  );
};

export default Intro;
