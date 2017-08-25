
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
    var root = null;
    var useHash = true;
    var hash = '#!';
    var router = new Navigo(root, useHash, hash);

    router
    .on({
      '/note/:id' : function(params) {
        LoadHTML('note.html','content');
      },
      '/home' : function(params) {
        console.log('here 1', params);
      }
    })
    .resolve();
  }

  document.addEventListener('DOMContentLoaded', function () {
    BindEvent();
    var list = ''; var notes = getNotes();
    for (var i = 0; i < notes.length; i++) {
      list += '<li> <a href="#!/note/ '+notes[i].id+' "> ' + notes[i].title + '</a> </li>';
    }
    document.querySelector('ul').innerHTML = list;
  });

})();
