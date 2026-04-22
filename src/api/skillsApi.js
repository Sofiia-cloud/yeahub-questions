async function skillsApi() {
  try {
    const response = await fetch("https://api.yeatwork.ru/api#/skills");
    const data = await response.json;
    return data;
  } catch (error) {
    console.error("Error: ", error);
  }
}

export default skillsApi;
