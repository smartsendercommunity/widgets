# widgets



Если Вы добавили свой домен в проекте на Smart Sender и хотите встраивать виджет на Ваш сайт с привязкой к этому домену, Вы можете модифицировать код виджета для этого



Например текущий код выглядит так:

<di\v id="j2RY8hDT" class="ss-landing" data-target="j2RY8hDT" data-domain="lendings"></div>

<script src="https://customer.smartsender.eu/js/client/lp.min.js?v2.0.0"></script>

У Вас прикреплен домен: lp.mysite.com

В первой части необходимо добавить атрибут  my-domain="lp.mysite.com"

<di\v id="j2RY8hDT" class="ss-landing" data-target="j2RY8hDT" data-domain="lendings" my-domain="lp.mysite.com"></div>

Во второй части заменить ссылку на файл, размещен на Вашем хостинге (из этого репозитория)

<script src="https://mysite.com/lp.custom.js"></script>




После такой модификации в "подвале" виджета будут ссылки на Ваши Terms of use и Privacy policy
