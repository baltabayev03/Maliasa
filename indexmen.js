function showpro(){
  var btnremove;
  btnremove=$(".showall");
  btnremove.eq(0).addClass("btnremove");
  var cards;
  cards=$(".hidesection");
  for (var i = 0; i < cards.length; i++) {
    cards.eq(i).removeClass("hidesection");
  }
}
