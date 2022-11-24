export const authHeader = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.Authorization) {
    return { "Authorization": `Bearer ${user.Authorization}` };
  } else return {};
};
