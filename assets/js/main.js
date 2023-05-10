/*================Micitup Filter=================*/
let mixerProjects = mixitup(".projects__container", {
  selectors: {
    target: ".project__item",
  },
  animation: {
    duration: 300,
  },
});

/* Active Work */
const linksWork = document.querySelectorAll(".category__btn");

function activeWork() {
  linksWork.forEach((link) => link.classList.remove("active-project"));
  this.classList.add("active-project");
}

linksWork.forEach((link) => {
  link.addEventListener("click", activeWork);
});

/*================Contact Form=================*/
const contactForm = document.getElementById("contact-form"),
  contactName = document.getElementById("contact-name"),
  contactEmail = document.getElementById("contact-email"),
  message = document.getElementById("message"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  if (
    contactName.value === "" ||
    contactEmail.value === "" ||
    message.value === ""
  ) {
    // add remove color
    contactMessage.classList.remove('color-light');
    contactMessage.classList.add('color-dark');

    // show msg
    contactMessage.textContent = 'Write all the input fiels';
} else {
        emailjs.sendForm('mailjsService', 'template', '#contact-form', 'mailjsSecuritykey')
        .then(() => {
            contactMessage.classList.add('color-light');
            contactMessage.textContent = 'Message sent';

            setTimeout(() => {
                contactMessage.textContent = '';
            }, 5000);
        });
    }
};

contactForm.addEventListener('submit', sendEmail);
