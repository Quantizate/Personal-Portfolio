const rickRollBtn = document.getElementById("rick-roll");

rickRollBtn.addEventListener("click", () => {
  const url = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  const win = window.open(url, "_blank");
  win.focus();
});

const form = document.querySelector("form");

const handleSubmit = (e) => {
  e.preventDefault();

  // const formData = {};
  // let inputfields = [...e.currentTarget.elements]
  //   .filter((el) => el.type !== "submit")
  //   .forEach((el) => (formData[el.getAttribute("name")] = el.value));

  const formData = [...e.currentTarget.elements]
    .filter((el) => el.type !== "submit")
    .reduce((data, el) => {
      data[el.getAttribute("name")] = el.value;
      return data;
    }, {});

  let gFormURL = `https://docs.google.com/forms/d/e/1FAIpQLSeYPG4ZnGG9uEGUTG8Lcl79nliTjRU07Do4QE9nsQLYshVjzQ/formResponse?usp=pp_url&entry.175548866=${formData.name}&entry.925252010=${formData.email}&entry.1795784422=${formData.contactNo}&entry.2038474199=${formData.feedback}!`;

  fetch(gFormURL, {
    method: "GET",
    mode: "no-cors",
  })
    .then((res) => {
      if (res.ok) {
        console.log("Form Submitted successfully");
      }
    })
    .catch((err) => console.log("Error:", err));

  form.reset();
};

form.addEventListener("submit", handleSubmit);
