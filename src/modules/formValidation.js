

export function formValidation() {
        const calculator = document.querySelector('.calc-block');
        const footerFormInput = document.querySelector('.footer-form-input');
        const mainForm = document.querySelector('.main-form');
        const userForm = document.querySelector('#form3');

        function requireds() {
            document.querySelectorAll('input').forEach((item) => {
                item.setAttribute("required", "required")
            })
        }
        requireds();

        userForm.addEventListener('input', (event) => {
            if (event.target.type === 'text') {
                event.target.value = event.target.value.replace(/[^а-я ]/g, '');
            }
        });

        userForm.addEventListener('input', (event) => {
            if (event.target.type === 'email') {
                event.target.value = event.target.value.replace(/[^a-zA-Z@_'~*.!-1234567890]/ig, '');
            }
        });

        userForm.addEventListener('input', (event) => {
            if (event.target.type === 'tel') {
                event.target.value = event.target.value.replace(/[^[0-9+]/ig, '');
                event.target.value = event.target.value.replace(/^[\+]?[(]?[0-9]{4}[)]?[-\s\.]?[0-9]{4}[-\s\.]?[0-9]{4,6}$/im, '');
            }
        });

        mainForm.addEventListener('input', (event) => {
            if (event.target.type === 'text') {
                event.target.value = event.target.value.replace(/[^а-я ]/g, '');
            }
        });

        mainForm.addEventListener('input', (event) => {
            if (event.target.type === 'email') {
                event.target.value = event.target.value.replace(/[^a-zA-Z@_'~*.!-1234567890]/ig, '');
            }
        });

        mainForm.addEventListener('input', (event) => {
            if (event.target.type === 'tel') {
                event.target.value = event.target.value.replace(/[^[0-9+]/ig, '');
                event.target.value = event.target.value.replace(/^[\+]?[(]?[0-9]{4}[)]?[-\s\.]?[0-9]{4}[-\s\.]?[0-9]{4,6}$/im, '');
            }
        });

        calculator.addEventListener('input', (event) => {
            if (event.target.type === 'text') {
                event.target.value = event.target.value.replace(/\s+/g, '');
                event.target.value = event.target.value.replace(/\D/g, '');
            }
        });

        footerFormInput.addEventListener('input', (event) => {
            if (event.target.name === 'user_name') {
				event.target.value = event.target.value.replace(/[^а-я ]/g, '');
			}

            if (event.target.name === 'user_message') {
                event.target.value = event.target.value.replace(/[^а-яё ,.!:;\-0-9]/ig, '');
            }
        });

        footerFormInput.addEventListener('input', (event) => {
            if (event.target.type === 'email') {
                event.target.value = event.target.value.replace(/[^a-zA-Z@_'*.!-~1234567890]/ig, '');
            }
        });
        
        document.querySelectorAll('input[type=email]').forEach(item => {
            item.addEventListener("keydown", function( event ) { console.log(event); 
                if(event.key === ' '){
                    event.preventDefault();
                }
            });
        })
        footerFormInput.addEventListener('input', (event) => {
            if (event.target.type === 'tel') {
                event.target.value = event.target.value.replace(/[^[0-9+]/ig, '');
                event.target.value = event.target.value.replace(/^[\+]?[(]?[0-9]{4}[)]?[-\s\.]?[0-9]{4}[-\s\.]?[0-9]{4,6}$/im, '');
            }
        });

        function bringingToTheRequiredForm() {
            const form1Name = document.getElementById('form1-name');
            //const form1Email = document.getElementById('form1-email');
            const form1Phone = document.getElementById('form1-phone');
            const form2Name = document.getElementById('form2-name');
            //const form2Email = document.getElementById('form2-email');
            const form2Phone = document.getElementById('form2-phone');
            const form2Message = document.getElementById('form2-message');
            const form3Name = document.getElementById('form3-name');
            const form3Phone = document.getElementById('form3-phone');
            //const form3Email = document.getElementById('form3-email');

            let arrForm = [form2Name, form2Phone, form2Message, form1Name, form1Phone, form3Phone, form3Name];
            arrForm.forEach((item) => {
                item.addEventListener('blur', (event) => {
                    event.target.value = event.target.value.trim();
                    if (event.target.type === 'text') {
                        let newStr;
                        function firstLiterals(str) {
                            return str.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ')
                        }
                        newStr = firstLiterals(event.target.value);
                        event.target.value = newStr;
                    }
                    event.target.value = event.target.value.trim();
                    event.target.value = event.target.value.replace(/\s+/g, ' ');
                    event.target.value = event.target.value.replace(/-+/g, "-");
                });
            });
        }
        bringingToTheRequiredForm();

}
    // formValidation();