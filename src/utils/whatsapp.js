export const openWhatsApp = (message) => {
  const phoneNumber = '5547988625307';
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
};