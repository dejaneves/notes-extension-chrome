
(function(){

  'use strict';

  function getNotes() {
    var notes = [
      {
        id:'_32434234',
        title : 'Lorem ipsum dolor sit amet.',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
        id:'_2234246',
        title : 'Lorem ipsum dolor sit amet.',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
        id:'_6234246',
        title : 'Lorem ipsum dolor sit amet.',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      }
    ];
    return notes;
  }

  function $id(id) {
    return document.getElementById(id);
  }

  function LoadHTML(url, id) {
    var req = new XMLHttpRequest();
    req.open('GET', url);
    req.send();
    req.onload = () => {
      $id(id).innerHTML = req.responseText;
    }
  }

  function BindEvent() {
    var aLink = document.querySelectorAll('ul a');

    for (var i = 0; i < aLink.length; i++) {
      aLink[i].addEventListener('click',OpenNote);
    }

    function OpenNote(event) {
      event.preventDefault();
      var el = event.target;
      console.log('open note ', el);
      $('.modal').modal('show');
    }

  }

  document.addEventListener('DOMContentLoaded', function () {

    var list = ''; var notes = getNotes();
    for (var i = 0; i < notes.length; i++) {
      list += '<li class="list-group-item"> <a data-note-id="'+notes[i].id+'" href="#"> ' + notes[i].title + '</a> </li>';
    }
    document.querySelector('ul').innerHTML = list;

    BindEvent();
  });

})();
