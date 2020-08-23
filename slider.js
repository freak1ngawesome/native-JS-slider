let slideIndex = 1,
  slides = document.querySelectorAll('.slider-item'),
  prevArrow = document.querySelector('.prev'),
  nextArrow = document.querySelector('.next'),
  dotsArea = document.querySelector('.slider-dots'),
  dots = document.querySelectorAll('.dot');

  function showSlide () {
    if (slideIndex >= 5){
      slideIndex = 1;
    };
    if (slideIndex <= 0){
      slideIndex = 4;
    };
    slides.forEach((item)=>{
      item.style.display = 'none';
    });
    slides[slideIndex - 1].style.display = 'block';
    dots.forEach((item)=>{
      item.classList.remove('dot-active');
    });
    dots[slideIndex - 1].classList.add('dot-active');
  }
  showSlide();
  prevArrow.addEventListener('click',()=>{
    slideIndex--;
    showSlide();
  });
  nextArrow.addEventListener('click',()=>{
    slideIndex++;
    showSlide();
  });
  dotsArea.addEventListener('click',(e)=>{
    // if (e.target.classList.contains('dot') && !e.target.classList.contains('dot-active')){

    // }
    if (e.target && e.target.classList.contains('dot')){
      dots.forEach((item,i)=>{
        if (e.target == item){
          slideIndex = i + 1;
          showSlide();
        }
      });
    }
  });
