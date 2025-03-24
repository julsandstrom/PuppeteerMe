import Puppet from "./Puppet";
import Header from "./Header";
import Category from "./Category";
const Background = "/images/background-mobile.png";
const Intro = () => {
  return (
    <div className="background">
      <img src={Background} className="hidden-image" alt="hidden" />
      <Puppet />
      <Header />
      <Category />
    </div>
  );
};

export default Intro;
