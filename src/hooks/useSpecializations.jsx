import { useEffect, useState } from "react";

function useSpecializations() {
  const [specializations, setSpecializations] = useState(null);
  useEffect(() => {
    fetch("https://api.yeatwork.ru/api#/specializations")
      .then((response) => response.json)
      .then((data) => setSpecializations(data))
      .catch((error) => console.error("Error: ", error));
  }, []);
  return specializations;
}

export default useSpecializations;
