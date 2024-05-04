document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});


document.querySelector('.handle').addEventListener('mouseenter', function() {
  document.querySelector('.sidebar').style.right = '0';
});

document.querySelector('.sidebar').addEventListener('mouseleave', function() {
  document.querySelector('.sidebar').style.right = '-200px';
});
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

function openChat() {
  var modal = document.getElementById('chatModal');
  modal.style.display = "block";
}

// Функция для закрытия чата
function closeChat() {
  var modal = document.getElementById('chatModal');
  modal.style.display = "none";
}

// Когда пользователь кликает вне модального окна, закрываем его
window.onclick = function(event) {
  var modal = document.getElementById('chatModal');
  if (event.target == modal) {
      modal.style.display = "none";
  }
}