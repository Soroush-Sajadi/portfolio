const baseURL = "http://localhost:5000";

export const getMeData = async () => {
  const response = await fetch(`${baseURL}/me`);
  return response.json();
};
