export function slider() {
        const slide = document.querySelectorAll('.portfolio-item');
        const btn = document.querySelectorAll('.portfolio-btn');
        const dot = document.querySelectorAll('.dot');
        const slider = document.querySelector('.portfolio-content');

        let currentSlide = 0;
        let interval;

        function prevSlide(elem, index,strClass) {
            elem[index].classList.remove(strClass);
        }

        function nextSlide(elem, index,strClass) {
            elem[index].classList.add(strClass);            
        }

        function autoPlaySlide() {
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
            currentSlide++;
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        }

        function startSlide(time = 3000) {
            interval = setInterval(autoPlaySlide, time);
        }

        function stopSlide() {
            clearInterval(interval);
        }

        slider.addEventListener('click', (event) => {
            event.preventDefault();

            let target = event.target;

            if (!target.matches('.portfolio-btn, .dot')) {
                return;
            }

            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');            

            if (target.matches('#arrow-right')) {
                currentSlide++;
            } else if (target.matches('#arrow-left')) {
                currentSlide--;
            } else if (target.matches('.dot')) {
                dot.forEach((elem, index) => {
                    if (elem === target) {
                        currentSlide = index;
                    }
                });
            }
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }

            if (currentSlide < 0) {
                currentSlide = slide.length - 1;
            }

            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');

        });

        slider.addEventListener('mouseover', (event) => {
            if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
                stopSlide();
            }
        });

        slider.addEventListener('mouseout', (event) => {
            if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
                startSlide();
            }
        });


        startSlide(1500);
    }
// Добавление точек на слайде
    function addDots() {
        const portfolioItem = document.querySelectorAll('.portfolio-item');
        const portfolioDots = document.querySelector('.portfolio-dots')
        
        portfolioItem.forEach(() => {
            const dot = document.createElement('li');
            dot.classList.add('dot');
            portfolioDots.appendChild(dot)
        });

        portfolioDots.children[0].classList.add('dot-active');
    }
    addDots();

    // slider();