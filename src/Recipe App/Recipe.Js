import React, { useEffect } from "react";

const Recipe = () => {
  useEffect(() => {
    const data = axios.get(
      "https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=7f719400&app_key=%2074ecbce16b472f7e5edbfc59518e355f"
    );
    return () => {
      console.log(data);
    };
  }, []);

  return <div>HI</div>;
};

export default Recipe;
