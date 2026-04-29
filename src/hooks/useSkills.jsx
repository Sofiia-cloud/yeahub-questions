import { useEffect, useState } from "react";

function useSkills() {
  const [skills, setSkills] = useState(null);
  useEffect(() => {
    fetch("https://api.yeatwork.ru/api#/skills")
      .then((response) => response.json)
      .then((data) => setSkills(data))
      .catch((error) => console.error("Error: ", error));
  }, []);
  return skills;
}

export default useSkills;
