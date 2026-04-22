async function specializationsApi() {
  try {
    const response = await fetch(
      "https://api.yeatwork.ru/api#/specializations",
    );
    const data = await response.json;
    return data;
  } catch (error) {
    console.error("Error: ", error);
  }
}

export default specializationsApi;
