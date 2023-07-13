let p1 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Connecting to the server...");
    }, 1000);
  });
};

let p2 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hacking Poonam's username....");
    }, 2000);
  });
};

let p3 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Username found its_lakshita2468....");
    }, 1000);
  });
};

let p4 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Connecting... to Facebook..,Instagram..,Whatsapp......");
    }, 1000);
  });
};

let p5 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Fetching... other informations......");
    }, 1000);
  });
};

let p6 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Congratulations! all.. data fetched.....");
    }, 1000);
  });
};

async function displayMessages() {
  try {
    const messagesContainer = document.getElementById("messageContainer");
    messagesContainer.innerHTML = ""; // Clear previous messages

    
    const messages = [
      await p1(),
      await p2(),
      await p3(),
      await p4(),
      await p5(),
      await p6(),
    ];

    for (const message of messages) {
      messagesContainer.innerHTML += `<p>${message}</p>`;
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  } catch (error) {
    console.error(error);
  }
}

displayMessages();
