import { useEffect, useState } from "react";

const MobileOnly = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // justera gräns om du vill
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile ? (
    children
  ) : (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2 style={{ color: "white" }}>
        Mobile only. Desktop version is a work in progress.
      </h2>
    </div>
  );
};

export default MobileOnly;
