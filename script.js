var op1=null;
var op2=null;
var operator=null;

var buttons=document.getElementsByClassName('grid-item');
var display= document.getElementById('display-box');

for ( var i = 0; i< buttons.length ; i++)
{
  buttons[i].addEventListener('click' , function(){

    value= this.getAttribute('value');
    text= display.textContent.trim();

    if(value== '+' || value=="-"|| value=="*" || value=="/" || value=="%")
    {
      op1 = parseFloat(text);
      operator= value;
      display.textContent= "";
    }
    else if(value=="AC")
    {
      display.textContent="";
    }
    else if(value=="=")
    {
      op2=parseFloat(text);
      display.textContent=" ";
      var result = eval( op1 + " " + operator + " " + op2);
        if(result)
        {
          display.textContent = result;
          op1=result;
          op2=null;
          operator=null;
        }
    }else {
      display.textContent+=value;
    }
  })
}