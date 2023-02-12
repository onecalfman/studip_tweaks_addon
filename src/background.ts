const getVideoArray = (): HTMLVideoElement[] =>
  Array.from(document.getElementsByTagName("video"));

const addControlls = () =>
  getVideoArray().forEach((vid) => vid.setAttribute("controls", "true"));

const setVideoInterval = setInterval(() => {
  addControlls();
  if (getVideoArray().length > 0) {
    setTimeout(() => clearInterval(setVideoInterval), 1000);
  }
}, 100);

//console.log("extension active");
