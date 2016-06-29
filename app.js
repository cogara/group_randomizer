$(function() {
  var arrayOfNames = [];
  var groupArray = [];
  function addPerson(name) {
    arrayOfNames.push(name);
  }

  addPerson('Connor');
  addPerson('Brian');
  addPerson('Donovan');
  addPerson('Cormac');
  addPerson('abc');
  addPerson('def');
  addPerson('ghi');
  addPerson('jkl');


  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
      return array;
  }

  // console.log($('.button').parent().find('.selected').attr('id'));

  function sortGroups(numGroups) {
    var tempArrayOfNames = [];
    for (var i = 0; i < arrayOfNames.length; i++) {
      tempArrayOfNames[i] = arrayOfNames[i]
    }
    shuffle(tempArrayOfNames);
    groupArray = [];
    for (var i = 0; i < numGroups; i++) {
      groupArray[i] = [];
    }

    while (tempArrayOfNames.length > 0) {
      for (var i = 0; i < numGroups; i++) {
        if (tempArrayOfNames.length > 0) {
          groupArray[i].push(tempArrayOfNames.shift());
        }
      }
    }
    return groupArray;
  }


  $('.num-group-buttons').on('click','.button',function() {
    $('.button').removeClass('selected');
    $(this).addClass('selected');
  })

  $('#randomize-button').on('click',function(){
    // console.log($('.num-group-buttons').find('.selected').attr('id'));
    switch ($('.num-group-buttons').find('.selected').attr('id')) {
      case 'group-2':
        sortGroups(2);
        addDivs(2);
        break;
      case 'group-3':
        sortGroups(3);
        addDivs(3);
        break;
      case 'group-4':
        sortGroups(4);
        break;
      case 'group-5':
        sortGroups(5);
        break;
      case 'group-6':
        sortGroups(6);
        break;
      case 'group-7':
        sortGroups(7);
        break;
      case 'group-8':
        sortGroups(8);
        break;
      case 'group-9':
        sortGroups(9);
        break;
      case 'group-10':
        sortGroups(10);
        break;
    }
    console.log(groupArray);

    for (var i = 0; i < groupArray.length; i++) {
      for (var j = 0; j < groupArray[i].length; j++) {
        console.log(groupArray[i][j]);
        $('.groups').find('#group'+(i+1)).append(groupArray[i][j] + ' ');
      }
    }



  })

  function addDivs(numGroups) {
    $('.groups').empty();
    for (var i = 1; i <= numGroups; i++) {
      $('.groups').append('<div class="group" id="group' + i + '"></div>');
    }
  }

  for (var i = 0; i < groupArray.length; i++) {
    for (var j = 0; j < groupArray[i].length; j++) {
      console.log(groupArray[i][j]);
      $('.groups').append(groupArray[i][j]);
    }
  }



})
