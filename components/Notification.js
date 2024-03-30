const Notification = ({ showNotification }) => {
  if (showNotification) {
    alert("Timer finished!");
  }
  return null; // No need to render anything visually
};

export default Notification;
