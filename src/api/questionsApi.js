async function questionsApi() {
  try {
    const response = await fetch("https://api.yeatwork.ru/api#/questions");
    const data = await response.json;
    return data;
  } catch (error) {
    console.error("Error: ", error);
  }
}

export default questionsApi;
