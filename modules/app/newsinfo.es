let winH=$(window).height();
let content=$(".content");
let allH=content.height()+375;
if(allH<winH){
  content.height(winH-375);
}
