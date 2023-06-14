self.addEventListener('push', function(event) {
    // Lógica para manejar las notificaciones push recibidas
    // Puedes personalizar esta lógica según tus necesidades
    const notificationData = event.data.json();
    const title = notificationData.title;
    const options = {
      body: notificationData.body,
      icon: 'icono-notificacion.png', // Ruta al icono de la notificación
      // Otros opciones de configuración de la notificación
    };
  
    event.waitUntil(
      self.registration.showNotification(title, options)
    );
  });
  