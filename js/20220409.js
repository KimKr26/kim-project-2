/*햄버거js*/ 
const log = console.log

const sidebarSubmenuToggle = (e)=>{
    log(e)
    let a = e.parentElement.nextElementSibling
    if(a.classList.length == 2){
        a.classList.value = "main-menu-sub-list"
    }
    else{
        a.classList.value = "main-menu-sub-list sub-toggle"
    }

}

const selectLang = (e)=>{
    log(e)
    let a = e.nextElementSibling;
    if(a.classList.length == 2){
        a.classList.value = "lang-list"
    }
    else{
        a.classList.value = "lang-list lang-toggle"
    }
}


const sidebarToggle = ()=>{
    let a = $(".sidebar")[0];
    log(a)
    if(a.classList.length == 2){
        a.classList.value = "sidebar"
    }
    else{
        a.classList.value = "sidebar sidebar-Toggle"
    }
   
    //1. 스크롤다운시 메뉴바 상단에 붙이기//
    var $window = $(window);

    $window.scroll(function () {
        if ($window.scrollTop() > 0) {
            $('body').addClass('no-scroll-top-0')
        }
        else {
            $('body').removeClass('no-scroll-top-0');
        }
        
    });
}
