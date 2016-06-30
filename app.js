$(function() {
  var arrayOfNames = [];
  var groupArray = [];

  function addPerson(name) {
    arrayOfNames.push(name);
  }

  addPerson('Connor');
  addPerson('Brian V');
  addPerson('Donovan');
  addPerson('Cormac');
  addPerson('Richard');
  addPerson('Jon');
  addPerson('Sahasha');
  addPerson('Tracy');
  addPerson('Megan');
  addPerson('Justin');
  addPerson('Hillary');
  addPerson('Liz');
  addPerson('Ryan');
  addPerson('Andrew');
  addPerson('Kyle');
  addPerson('Brian A');
  addPerson('Trent');
  addPerson('Anthony');
  addPerson('Katie');

  //randomizes array of names in a different order
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

  //randomized groups, then sorts into number of groups determined
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

  // selects a button for # of groups
  $('.num-group-buttons').on('click','.button',function() {
    $('.button').removeClass('selected');
    $(this).addClass('selected');
  })

  //determines what number of groups is needed, and sorts groups and appends html
  $('#randomize-button').on('click',function(){
    // switch to determine what button was selected
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
        addDivs(4);
        break;
      case 'group-5':
        sortGroups(5);
        addDivs(5);
        break;
      case 'group-6':
        sortGroups(6);
        addDivs(6);
        break;
      case 'group-7':
        sortGroups(7);
        addDivs(7);
        break;
      case 'group-8':
        sortGroups(8);
        addDivs(8);
        break;
      case 'group-9':
        sortGroups(9);
        addDivs(9);
        break;
      case 'group-10':
        sortGroups(10);
        addDivs(10);
        break;
    }

    //appending array to proper group div id
    for (var i = 0; i < groupArray.length; i++) {
      $('.groups').find('#group'+(i+1)).append('<ul class="group-list">');
      for (var j = 0; j < groupArray[i].length; j++) {
        $('.groups').find('#group'+(i+1)).append('<li>' + groupArray[i][j] + '</li>');
      }
      $('.groups').find('#group'+(i+1)).append('</ul>');
    }

  }) //end of randomize button

  //appends divs to DOM based on number of groups
  function addDivs(numGroups) {
    $('.groups').empty();
    for (var i = 1; i <= numGroups; i++) {
      $('.groups').append('<div class="group" id="group' + i + '"><h1 id="groupnum' + i + '">Group ' + i + '</h1></div>');
    }
  }


})
