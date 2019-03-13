function as(target){// as stands for auto scroll, target is the element that is being scrolled too 
    $(document).ready(function () {
        $("html, body").stop().animate({
            scrollTop: $(".el-"+target).offset().top-112/*so the nav bar isnt blocking the title and some extra space*/
        }, 1000);
    });
}




$(document).ready(function() {//initializes the function         
    var lineInt = 0;
    var moreInt = 0;
                
    $('.moreBtn').click(function(){
        $(".shrinkDrop").stop().slideToggle(500);
        
        $(".theBtns").toggleClass("mobileBtnContWidth");
        
        $(".btnContainer").fadeToggle(400);
        
        slideAcross(1, "in", "60%");
        
        if(moreInt==1){
            moreInt=0;
        }else{
            moreInt=1;
        }           
        $(this).find(".line").each(function(){//function for the animated menue icon
            lineInt++;// determins what line
            if(moreInt==1){
                $(this).removeClass("line"+lineInt);
                $(this).addClass("linePos"+lineInt);
                slideAcross(1, "in", "75%");
                $("body").css({"overflow": "hidden"});
                // add listener to disable scroll
            }else{
                $(this).removeClass("linePos"+lineInt);
                $(this).addClass("line"+lineInt);
                slideAcross(1, "out", "0%");
                // Remove listener to enable scroll
            }
        });
        lineInt = 0;
    });
});

function dropPc(val, dir){
    var winX = $(window).width();/* finds the width of the window */
    if (winX>768){
        if(dir=="up"){
            $(".dropDown-" + val).stop().slideUp(300);
        }else{
            $(".dropDown-" + val).stop().slideDown(300);
        }
    }
}

var lastMobDropVal = 0;

function dropMob(val){
    
    if(val=="all"){//resets all
        $(".fa-plus").stop().slideDown(200);
        $(".fa-minus").stop().slideUp(200);
        $(".dropDown").stop().slideUp(300);  
    }else{
        $(".dropDown").stop().slideUp(300); 
        $(".dropDown-" + val).stop().toggle(300); 
    }
    
    if(val == lastMobDropVal){
        $(".iconPlus-" + val).stop().slideToggle(200);
        $(".iconMinus-" + val).stop().slideToggle(200);
    }else{
        $(".fa-plus").stop().slideDown(200);
        $(".fa-minus").stop().slideUp(200);
        $(".iconPlus-" + val).stop().slideUp(200);
        $(".iconMinus-" + val).stop().slideDown(200);
    }
    lastMobDropVal = val;
}

function navAppear(pos){// makes the nave bar appear when scrolling
    if(pos>56){
        $("#navBar").addClass("black");
    }else{
        $("#navBar").removeClass("black");
    }
}

function slideAcross(val, action, amount){// action = in or out
    if(action=="in"){
        $(".slideCont-" + val).stop().animate({width: amount}, 400);
    }else{
        $(".slideCont-" + val).stop().animate({width: "0%"}, 400);
    }
}




function scroll(){
    var pos = $(window).scrollTop();
    navAppear(pos);
    toggleSticky();
}

/* iconNav (sticky) functions */
var orginalY = $(".iconNav").height();
var navBar = document.getElementById("iconNav");
var navBarI = 0;/* var used to make sure that the scroll correction only happens once */

function addSticky(){
    navBar = document.getElementById("iconNav");
    $(".stickySpacer").css({"height": orginalY+"px"});
    navBar.classList.add("sticky");/* adds the sticky class to the icon navbar */
}

function removeSticky(){
    navBar = document.getElementById("iconNav");
    $(".stickySpacer").css({"height": "0px"});
    navBar.classList.remove("sticky");/* removes the sticky class to the icon navbar */
}

function toggleSticky(){/* the function that adds sticky to the icon  navbar */
    var navBar = document.getElementById("iconNav");
    var winY = $(window).height();/* finds the height of the window */
    var sticky = $(".stickySpacer").scrollTop();
    sticky = sticky+winY;
    var stickyBtm = sticky + orginalY;/* calculates the bottom of the iconNav */
    if($(window).scrollTop()>=sticky){
        if (navBarI < 1){navBarI = 1;}/* ensures functions only occur once */
        if($(window).scrollTop()<=stickyBtm){
            removeSticky();/* disables the sticky when reaching the bottom of iconNav's original pos */
        }else{
            addSticky();
        }
        
    }else{
        navBarI = 0;
        orginalY = $(".iconNav").height();
        stickyBtm = sticky + orginalY;
        removeSticky()
    }

}
















