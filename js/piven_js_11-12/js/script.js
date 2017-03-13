$(function(){

  var html = $('#id').html();

  var data = {
    name: 'ПИВЕНЬ НИКОЛАЙ',
    position: 'Cистемный  администратор',
    why1: 'Надоело настраивать комьютеры',
    why2: 'Всю жизнь хотел кодить',
    why3: 'Хороший джангист/питонист должен знать фронтенд:)',
    namber: '+380936279765',
    feedback: 'Если хотите, могу переустановить Windows :)'
  };

  var content = tmpl(html, data);

  var section = $('section').append(content);

})
