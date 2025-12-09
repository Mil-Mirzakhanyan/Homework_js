function pingFiveSeconds() {
  const id = setInterval(() => {
    console.log("Ping");
  }, 1000);

  setTimeout(() => {
    clearInterval(id);
  }, 5000);
}

pingFiveSeconds();