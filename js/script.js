$(document).ready(function() {
  /*Список переменных*/
  const btnShowAnimat = $('.jq-block__event_btnS'),
    btnHideAnimat = $('.jq-block__event_btnH'),
    txtAnimat = $('.jq-block__event_text'),
    listItemAdd = $('.jq-block__add_item'),
    btnAdd = $('.jq-block__add_btn'),
    btnAddItemRemove = $('.jq-block__add_btn-remove'),
    cubeAnimate = $('.jq-block__animate_cube');

  /*Скрываем текст и кнопку "Скрыть"*/
  btnHideAnimat.hide();
  txtAnimat.hide();

  /*По клику, показываем текст и кнопку "Скрыть", скрываем кнопку "Показать"*/
  btnShowAnimat.on('click', function() {
    btnShowAnimat.hide();
    btnHideAnimat.show();
    txtAnimat.show('slow');
  });

  /*По клику, скрываем текст и кнопку "Скрыть", возвращаем кнопку "Показать"*/
  btnHideAnimat.on('click', function() {
    btnHideAnimat.hide();
    btnShowAnimat.show();
    txtAnimat.hide('slow');
  });

  /*Добавляем элементы в список*/
  btnAdd.on('click', function() {
    const $newListItem = $('<li class="jq-block__add_itemNew">Пункт списка</li>');
    listItemAdd.after($newListItem);
  });

  /*Удаляем элементы из списка*/
  btnAddItemRemove.on('click', function() {
    $('.jq-block__add_itemNew:last').remove();
  });

  /*Затухание и проявление кубика*/
  cubeAnimate.animate({
      opacity: 0.25,
      fontSize: '12px'
    },
    4000,
    function() {
      cubeAnimate.animate({
          opacity: 1,
          fontSize: '12px'
        },
        4000
      );
    }
  );
});
