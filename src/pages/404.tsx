import { navigate } from "gatsby";
import React, { useEffect } from "react";

const page404: React.FC = () => {
  useEffect(() => {
    navigate("/");
  }, []);
  return null;
};

export default page404;
