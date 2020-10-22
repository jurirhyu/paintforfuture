$(function () {
  //start
  $("header").load("headerFooter.html header .nevbar",pageEvent);
  $("footer").load("headerFooter.html footer .footer ");



  function pageEvent(){
    var menu = document.querySelector('.menu');
        var menuTri = menu.querySelector('.menu .trigger-menu');
        var menuCon=menu.querySelector('.menu p');

        menuTri.addEventListener('click',fun2);
        
        function fun2(e){
            e.preventDefault();
            menuTri.classList.toggle('active');
            menuCon.classList.toggle('active');
            setTimeout(function(){
                menuCon.addEventListener('click', function(e){
                    
                        menuTri.classList.remove('active');
                        menuCon.classList.remove('active');
                
                        
                });
            },100);
        }

      

    

  }




  //end
});
