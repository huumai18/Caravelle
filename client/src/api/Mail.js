export const sendMail = (data) => {
  return fetch("http://localhost:5000/api/sendmail", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      console.log("response", response);
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getMail = (data) => {
  return fetch("http://localhost:5000/api/getmail", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      console.log("response", response);
      return response.json();
    })
    .catch((err) => console.log(err));
};
