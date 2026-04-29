import { useEffect, useState } from "react";

function useSkills() {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    fetch("https://api.yeatwork.ru/skills")
      .then((response) => response.json())
      .then((data) => setSkills(data?.data))
      .catch((error) => console.error("Error: ", error));
  }, []);
  return skills;
}

export default useSkills;
