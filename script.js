// Add the agent's WhatsApp number with country code and digits only.
const AGENT_WHATSAPP_NUMBER = "12065493640";

const notice = document.querySelector("#contact-notice");
let noticeTimeout;

function showNotice(message) {
  notice.textContent = message;
  notice.classList.add("visible");
  window.clearTimeout(noticeTimeout);
  noticeTimeout = window.setTimeout(() => {
    notice.classList.remove("visible");
  }, 4500);
}

document.querySelectorAll("[data-card]").forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.dataset.card;

    if (!AGENT_WHATSAPP_NUMBER) {
      showNotice(
        `You selected the ${card} Fan Card. The agent's WhatsApp contact will be added soon.`,
      );
      return;
    }

    const message = encodeURIComponent(
      `Hello! I'm interested in the ${card} Fan Card for the meet and greet. Please share availability and payment details.`,
    );
    const whatsappUrl = `https://wa.me/${AGENT_WHATSAPP_NUMBER}?text=${message}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  });
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
