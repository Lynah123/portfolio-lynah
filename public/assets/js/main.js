function voirMonCV() {
    window.location.href = "/public/assets/files/CV.pdf";
}

$(document).ready(function() {
    $(".para p").hide();

    $(".discord").click(function() {
        $(".para-discord").toggle();
        $(".para-whatsapp").hide();
    });

    $(".whatsapp").click(function() {
        $(".para-discord").hide();
        $(".para-whatsapp").toggle();
    });
});

$(document).ready(function() {
    $(".navbar-nav a").click(function() {
        $(this).addClass("active").parent().siblings().find("a").removeClass("active");
    });
});


$(document).ready(function () {
    animateText('.home-title', 'Lynah NOMENJANAHARY');
  });

  function animateText(selector, text) {
    var index = 0;

    function animateLetter() {
      if (index < text.length) {
        var letter = text[index];
        $(selector).append(letter);
        index++;
        setTimeout(animateLetter, 150); 
      } else {
        setTimeout(function() {
          $(selector).empty();
          index = 0;
          animateLetter();
        }, 1000); 
      }
    }

    animateLetter();
  }

  $(document).ready(function() {
    AOS.init();
  })
