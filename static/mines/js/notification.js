if (Notification.permission !== "granted") {
  Notification.requestPermission();
}

setInterval(function() {
  const options = {
    body: "João fez 15x no Mines",
    icon: "icone.png",
    vibrate: [200, 100, 200],
    badge: "badge.png",
    tag: "mines-tag",
    color: "green",
    // textos na notificação
    data: {
      url: "https://exemplo.com",
      time: new Date(Date.now()).toString()
    },
    actions: [
      {action: "like", title: "Curtir"},
      {action: "reply", title: "Responder"},
    ]
  };
  const notification = new Notification('Minas Gerais', options);
}, 15000);
