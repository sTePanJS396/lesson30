export function toggleMenu() {
        const btnMenu = document.querySelector('.menu');
        const menu = document.querySelector('menu');

        function menuAddOrRemove() {
            menu.classList.toggle('active-menu')
        }

        function heandlerMenu(event) {
            const target = event.target;
            if (target.closest('.menu')) {
                menuAddOrRemove();
            } else if (target.closest('menu') && target.closest('[href^="#"]')) {
                menuAddOrRemove();
            } else if (!target.closest('menu')) {
                menu.classList.remove('active-menu');
            }
        }
        document.body.addEventListener('click', heandlerMenu)
        // btnMenu.addEventListener('click', heandlerMenu);
        // menu.addEventListener('click', heandlerMenu);
   }
//    toggleMenu();