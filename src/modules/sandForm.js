export function sandForm() {
        function cleaningFields() {
            const form1Name = document.getElementById('form1-name');
            const form1Email = document.getElementById('form1-email');
            const form1Phone = document.getElementById('form1-phone');
            const form2Name = document.getElementById('form2-name');
            const form2Email = document.getElementById('form2-email');
            const form2Phone = document.getElementById('form2-phone');
            const form2Message = document.getElementById('form2-message');
            const form3Name = document.getElementById('form3-name');
            const form3Phone = document.getElementById('form3-phone');
            const form3Email = document.getElementById('form3-email');

            let arrForm = [form2Name, form2Phone, form2Message, form1Name, form1Phone, form3Phone, form3Name, form1Email, form3Email, form2Email];

            arrForm.forEach((item) => {
                item.value = '';
            }); 
        }
         

        function form1() {
            const errorMessage = 'Что-то пошло не так...';
            const loadMessage = 'Загрузка...';
            const successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

            const form = document.getElementById('form1');

            const statusMessage = document.createElement('div');
            statusMessage.setAttribute('style', 'font-size: 2rem; color: #ffffff;')

            form.addEventListener('submit', (event) => {
                event.preventDefault();
                form.appendChild(statusMessage);
                statusMessage.textContent = loadMessage;

                const formData = new FormData(form);
                let body = {};

                formData.forEach((val, key) => {
                    body[key] = val;
                });

                postData(body).then((response) => {
                    if (response.status !== 200) {
                        throw new Error('status network not 200');
                    }
                    statusMessage.textContent = successMessage;
                    cleaningFields(); 
                }).catch((error) => {
                    statusMessage.textContent = errorMessage;
                    console.error(error)
                })
					
            });

            function postData(body) {
                return fetch('./server.php', {
                    method: 'POST', 
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(body)
                });
            }
        }
        form1();

        function form2() {
            const errorMessage = 'Что-то пошло не так...';
            const loadMessage = 'Загрузка...';
            const successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

            const form = document.getElementById('form2');

            const statusMessage = document.createElement('div');
            statusMessage.setAttribute('style', 'font-size: 2rem; color: #ffffff;')

            form.addEventListener('submit', (event) => {
                event.preventDefault();
                form.appendChild(statusMessage);
                statusMessage.textContent = loadMessage;

                const formData = new FormData(form);
                let body = {};

                formData.forEach((val, key) => {
                    body[key] = val;
                });

                postData(body).then((response) => {
                    if (response.status !== 200) {
                        throw new Error('status network not 200');
                    }
                    cleaningFields(); 
                    statusMessage.textContent = successMessage;
                }).catch((error) => {
                    statusMessage.textContent = errorMessage;
                    console.error(error)
                })
					
            });

            function postData(body) {
                return fetch('./server.php', {
                    method: 'POST', 
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(body)
                });
            }
        }
        form2();

        function form3() {
            const errorMessage = 'Что-то пошло не так...';
            const loadMessage = 'Загрузка...';
            const successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

            const form = document.getElementById('form3');

            const statusMessage = document.createElement('div');
            statusMessage.setAttribute('style', 'font-size: 2rem; color: #ffffff;')

            form.addEventListener('submit', (event) => {
                event.preventDefault();
                form.appendChild(statusMessage);
                statusMessage.textContent = loadMessage;

                const formData = new FormData(form);
                let body = {};

                formData.forEach((val, key) => {
                    body[key] = val;
                });

                postData(body).then((response) => {
                    if (response.status !== 200) {
                         setTimeout(() => {
                            document.querySelector('.popup').style.display = 'none'
                        }, 3000);
                        
                        throw new Error('status network not 200');
                    }
                    setTimeout(() => {
                        document.querySelector('.popup').style.display = 'none'
                    }, 3000);

                    cleaningFields(); 
                    statusMessage.textContent = successMessage;
                }).catch((error) => {
                    statusMessage.textContent = errorMessage;
                    console.error(error)
                })
					
            });

            function postData(body) {
                return fetch('./server.php', {
                    method: 'POST', 
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(body)
                });
            }
        }
        form3();
    };
    // sandForm();