export const openWhatsApp = (message) => {
  const phoneNumber = '5547997644727';
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
};