'use strict';

import { countTimer } from "./modules/countTimer";
import { toggleMenu } from "./modules/toggleMenu";
import { tooglePopUp } from "./modules/tooglePopUp";
import { tabs } from "./modules/tabs";
import { slider } from "../src/modules/slider";
import { changingAttributes } from "./modules/changingAttributes";
import { formValidation } from "./modules/formValidation";
import { calc } from "./modules/calc";
import { sandForm } from "./modules/sandForm";
   
//    Таймер
// setInterval(countTimer, 1000, '2 jule 2021')();
//    thisInterval();
// countTimer();
// toggleMenu();
// tabs();
// slider();
// changingAttributes();
// formValidation();
// calc();
// sandForm();
// let thisInterval = setInterval(countTimer, 1000, '2 jule 2021');
// thisInterval()

setInterval(() => {
    countTimer('7 Jul 2021')
}, 1000);
//  Меню
   toggleMenu();

//    Модальное окно
   tooglePopUp();

//    Табы
   tabs();

// Слайдер
    // addDots();
    slider();

// Картинки
    changingAttributes();

// Валидация
    formValidation();

// Калькулятор
    calc(100);

// Запросы на сервер (Ajax)
    sandForm();