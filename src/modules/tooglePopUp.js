export function tooglePopUp() {
        const popup = document.querySelector('.popup');
        const popupBtn = document.querySelectorAll('.popup-btn');
        const popupClose = document.querySelector('.popup-close');
        const popupContent = document.querySelector('.popup-content')

        popupBtn.forEach((elem) => {
            elem.addEventListener('click', () => {
                    popup.style.display = 'block';
                    // popupAnimationInLibrary();
                    if (document.body.clientWidth > 786) {
                        popupLibrary.counter = popupLibrary.start;
                        popupAnimation();
				    } 
            });
        });
        popupClose.addEventListener('click', () => {
            popup.style.display = 'none';
        });

        popup.addEventListener('click', (event) => {
            let target = event.target;
            target = target.closest('.popup-content');
            if (!target) {
                popup.style.display = 'none'; 
            }
        });
        
        const popupLibrary = {
                counter: -100,
                start: -100,
                speed: 70,
                end: 0, 
        }
        function popupAnimation() {
            popupLibrary.counter++;
            popupContent.style.transform = `translateX(${(popupLibrary.counter * 3) - 12.5}%)`;
            if (popupLibrary.counter < popupLibrary.end) {
                requestAnimationFrame(popupAnimation);
            }
        };

    //    function popupAnimationInLibrary() {
    //        popup.classList.add('animate__animated');
    //        popup.classList.add('animate__backInUp');
    //    }
    //    popupAnimationInLibrary();
       
   }
   tooglePopUp();