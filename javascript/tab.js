let liens=$('#liens li a')
liens.on('click',function(e){
    e.preventDefault()
    $(this).each(function(){
      if(liens.hasClass('active')){
          liens.removeClass('active')
      }
    })
      $(this).addClass('active')
    })
let taille=$(window).width()
console.log(taille)
let avatar=$("#avatar")
if($(window).width()>975){
  avatar.addClass('visible')
  avatar.removeClass('avatar1')
}
if($(window).width()<=975){
  avatar.addClass('avatar1')
  avatar.removeClass('visible')
}

  
//je selectionne un liens
//ensuite j'enleve la classe active sur les autres liens
//je mets la classe active sur le liens selectionne