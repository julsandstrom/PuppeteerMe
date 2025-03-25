import Logo from "/svgs/logo-main.svg?raw";

const Puppet = () => {
  return (
    <nav className="nav-container ">
      <div dangerouslySetInnerHTML={{ __html: Logo }} />
    </nav>
  );
};

export default Puppet;
