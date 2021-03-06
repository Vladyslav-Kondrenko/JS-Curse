'use stict';

window.addEventListener('DOMContentLoaded', () => {
  
  const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');  

        function hideTabContent(){
          tabsContent.forEach(item => {
            item.style.display = 'none';
          });

          tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
          });
        }

        function showTabContent(i = 0){
          tabsContent[i].style.display = 'block';
          tabs[i].classList.add('tabheader__item_active');
        }

        hideTabContent();
        showTabContent(1);

        tabsParent.addEventListener('click', (event) => {
          const target = event.target;
          
          if(target && target.classList.contains('tabheader__item')){
            console.log('work');
            tabs.forEach( (item, i) => {
              if(target == item){
                hideTabContent();
                showTabContent(i);
              }
            });
          }
        });

        const deadline = '2021-06-25';

        function getTimeRemaining(endtime) {
          const t = Date.parse(endtime) - Date.parse(new Date()),
                days = Math.floor(t /(1000 * 60 * 60 * 24)),
                hours = Math.floor((t / 1000 * 60 * 60 ) % 24),
                minutes = Math.floor((t / 1000 / 60) % 60),
                seconds = Math.floor((t / 1000) % 60);
                
          return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds,
          };
        }

        function setCLock(selector, endtime) {
          const timer = document.querySelector(selector),
                days = timer.querySelector('#days'),
                hours = timer.querySelector('#hours'),
                minutes = timer.querySelector('#minutes'),
                seconds = timer.querySelector('#seconds'),
                timeInterval = setInterval(updateClock, 1000);

          updateClock();

          function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZiro(t.days);
            hours.innerHTML = getZiro(t.hours);
            minutes.innerHTML = getZiro(t.minutes);
            seconds.innerHTML = getZiro(t.seconds);

            if(t.total <= 0){
              clearIntervar(timeInterval);
            }
          }
        }

        setCLock('.timer', deadline);

        function getZiro(num){
          if(num >= 0 && num < 10){
            return `0${num}`;
          } else{
            return num;
          }
        }


        const popupButtons = document.querySelectorAll('button[data-popup]'),
              modal = document.querySelector('.modal'),
              modalClose = modal.querySelector('.modal__close');

        popupButtons.forEach(btn => {
          btn.addEventListener('click', showModal);
        });

        modalClose.addEventListener('click', hideModal);

        modal.addEventListener('click', function(e){
          if(e.target === modal){
            hideModal();
          }
        });

        document.addEventListener('keydown', (e) => {
          if(e.code == 'Escape' && modal.classList.contains('show')){
            hideModal();
          }
        });

        function showModal(){
          modal.classList.toggle('show');
          document.body.style.overflow = 'hidden';
        }
        
        function hideModal(){
          modal.classList.toggle('show');
          document.body.style.overflow = '';
        }
        
        class Card {
          constructor(src, alt, title, descr, price, parent, ...classes){
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.parent = document.querySelector(parent);
            this.classes = classes;
          }

          render() {
            const element = document.createElement('div');
            if(this.classes.length === 0){
              this.class = 'menu__item';
              element.classList.add(this.class);
            } else{
              this.classes.forEach(className => element.classList.add(className));
            }
            element.innerHTML = `
                  <img src=${this.src} alt=${this.alt}>
                  <h3 class="menu__item-subtitle">${this.title}</h3>
                  <div class="menu__item-descr">${this.descr}</div>
                  <div class="menu__item-divider"></div>
                  <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                  </div>
            `;
            this.parent.append(element);
          }
        }


        new Card(
          "img/tabs/vegy.jpg",
          "vegy",
          'Меню "Фитнес"',
          'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
          229,
          '.menu__field .container',
          'menu__item',
          'big'
        ).render();

        new Card(
          "img/tabs/elite.jpg",
          "elite",
          'Меню "Премиум"',
          'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
          550,
          '.menu__field .container'
        ).render();

        new Card(
          "img/tabs/post.jpg",
          "post",
          'Меню "Постное"',
          '>Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
          430,
          '.menu__field .container'
        ).render();
        
});