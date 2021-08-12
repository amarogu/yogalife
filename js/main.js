const collapsibles = document.getElementById("menu");
const hamburger = document.querySelectorAll(".hamburger");
hamburger.forEach((item) =>
  item.addEventListener("click", function () {
    collapsibles.classList.toggle("collapsibles--open");
    hamburger.forEach((item) => 
        item.classList.toggle("hamburger--open")
    )
  })
);

function validate() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;
  const inputItemName = document.getElementById("item-name");
  const inputItemEmail = document.getElementById("item-email");
  const inputItemPhone = document.getElementById("item-phone");
  const inputItemSubject = document.getElementById("item-subject");
  const inputItemMessage = document.getElementById("item-message");
  const form = document.getElementById("contact-form");

  if(name === "") {
    inputItemName.classList.add("invalid");
    inputItemEmail.classList.remove("invalid");
    inputItemPhone.classList.remove("invalid");
    inputItemSubject.classList.remove("invalid");
    inputItemMessage.classList.remove("invalid");
    return false;
  } else {
    inputItemName.classList.remove("invalid");
  }

  if(email === "") {
    inputItemEmail.classList.add("invalid");
    inputItemName.classList.remove("invalid");
    inputItemPhone.classList.remove("invalid");
    inputItemSubject.classList.remove("invalid");
    inputItemMessage.classList.remove("invalid");
    return false;
  } else {
    inputItemEmail.classList.remove("invalid");
  }

  if(phone === "") {
    inputItemPhone.classList.add("invalid");
    inputItemName.classList.remove("invalid");
    inputItemEmail.classList.remove("invalid");
    inputItemSubject.classList.remove("invalid");
    inputItemMessage.classList.remove("invalid");
    return false;
  } else {
    inputItemPhone.classList.remove("invalid");
  }

  if(subject === "") {
    inputItemSubject.classList.add("invalid");
    inputItemName.classList.remove("invalid");
    inputItemEmail.classList.remove("invalid");
    inputItemPhone.classList.remove("invalid");
    inputItemMessage.classList.remove("invalid");
    return false;
  } else {
    inputItemSubject.classList.remove("invalid");
  }

  if(message === "") {
    inputItemMessage.classList.add("invalid");
    inputItemName.classList.remove("invalid");
    inputItemEmail.classList.remove("invalid");
    inputItemPhone.classList.remove("invalid");
    inputItemSubject.classList.remove("invalid");
    return false;
  } else {
    inputItemMessage.classList.remove("invalid");
  }

  form.submit();
  form.reset();
}