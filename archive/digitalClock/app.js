

function updateTime() {
    const timeDiv = document.getElementById('timeDiv');
    const now = new Date(); 
    const year = String(now.getFullYear()).padStart(4,'0');
    const month = String(now.getMonth()).padStart(2,'0');
    const day = String(now.getDate()).padStart(2,'0');
    const hours = String(now.getHours()).padStart(2,'0');
    const minutes = String(now.getMinutes()).padStart(2,'0');
    const sec = String(now.getSeconds()).padStart(2,'0');

    timeDiv.textContent = `${year}-${month}-${day} ${hours}:${minutes}:${sec}`
  }

  updateTime();

  setInterval(updateTime, 1000);
