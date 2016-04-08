$( document ).ready(function() {
  
  var firstNum = '';
  var secondNum = '';
  var thirdNum = '';
  var whichNum = 1;
  var feet = 0;
  var shouldSum = false;
  var content = $('#lol').text().split('');
  for(var i = 0; i < content.length;++i) {
      if($.isNumeric(content[i])) {
          if(whichNum == 1) {
              firstNumStr += content[i];
          } else if(whichNum == 2) {
              secondNumStr += content[i];
          } else if(whichNum == 3) {
              thirdNumStr += content[i];
              shouldSum = (i == content.length - 1);
          }
      } else if(content[i] == 'x') {
          whichNum++;
      } else {
          shouldSum = true; 
      }
      if(shouldSum) {
          var firstNum = parseInt(firstNumStr);
          var secondNum = parseInt(secondNumStr);
          var thirdNum = parseInt(thirdNumStr);
          var firstPseudoArea = firstNum * secondNum;
          var secondPseudoArea = firstNum * thirdNum;
          var thirdPseudoArea = secondNum * thirdNum;
          feet += ( 2 * firstPseudoArea) + (2 * secondPseudoArea) + (2 * thirdPseudoArea));
          
          feet += [firstPseudoArea, secondPseudoArea, thirdPseudoArea].sort()[0] * [firstPseudoArea, secondPseudoArea, thirdPseudoArea].sort()[1];
          
          whichNum = 1;
          firstNum = '';
          secondNum = '';
          thirdNum = ''; 
          shouldSum = false;
      }
  }
  
  $('#result').text('Result = ' + feet);
});
