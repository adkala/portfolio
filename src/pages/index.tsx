import { navigate } from "gatsby";
import React, { useEffect } from "react";

const IndexPage: React.FC = () => {
  useEffect(() => {
    navigate("/art");
  }, []);
  return null;
};

export default IndexPage;