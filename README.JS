$(document).ready(function () {
    const form = $('#my-form');
    const nameField = $('#name');
    const emailField = $('#email');
    const messageField = $('#message');
  
    form.submit(function (event) {
      event.preventDefault();
  
      const data = {
        "to": [
          {
            "email": "john_doe@example.com",
            "name": "John Doe"
          }
        ],
        "from": {
          "email": emailField.val(),
          "name": nameField.val()
        },
        "subject": "Відгук на сайті",
        "text": messageField.val(),
        "category": "Відгук на сайті"
      };
  
      const settings = {
        async: true,
        crossDomain: true,
        url: 'https://send.api.mailtrap.io/api/send',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Api-Token': 'eyJhbGciOiJIUzUxMiJ9.eyJkYXRhIjp7InRva2VuIjoiOGNkOThmYTg2ZDUwOTI0NzczNTRhMDUxZmZlMmE2NDUifX0.6tcCtAcdVPy3PM2X5sYLddreBy5afRsbBsq3t1S9NLo2ubEJG0OFaynFv3WM5-C3G1nNVrTKbhk_XmRbwd6OIA',
          'Access-Control-Allow-Origin': 'https://send.api.mailtrap.io/api/send'
        },
        processData: false,
        data: JSON.stringify(data)
      };
  
      $.ajax(settings).done(function (response) {
        console.log(response);
        alert('Ваш відгук успішно надіслано!');
      }).fail(function (jqXHR, textStatus, errorThrown) {
        console.error(textStatus, errorThrown);
        alert('Помилка надсилання відгука. Будь ласка, спробуйте ще раз пізніше.');
      });
    });
  });
let color = ['blue' , 'yellow', 'red', 'pink', 'green' , 'purple']

$(window).on('load', function(){
  $('body').css('background-color', `${color[Math.floor(Math.random() * color.length)]}`)
})
f