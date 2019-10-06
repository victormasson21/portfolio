console.log('This is Javascript');

// Email pops out when clicking envelop

const envelop = document.querySelector("#top_links_contact");
const infos = document.querySelector(".top_contact_none");


envelop.addEventListener('click', () => {
  console.log('Envelop got clicked');
  infos.classList.toggle("top_contact_block");
  //.setAttribute('style', "display: block;")
});

// Fade in effect on load

const body = document.querySelector(".body");

window.addEventListener('load', () => {
  body.style.cssText = 'opacity: 1;';
})
