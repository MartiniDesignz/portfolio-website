<!-- html layout for the navigation bar -->
<nav id="navBar">
    <a href="index.php"> <!-- creates a link back to the home page -->
        <img class="nav-logo" src="css/pics/logo/Martini_Home_tech_logo_no_txt.png">
        <p class="nav-txt">MartiniDesignz</p><!--header txt in the navbar-->
    </a>
    <div class="moreContainer mobile">
        <div class="moreBtn rotate">
            <div class="line line1"></div>
            <div class="line line2"></div>
            <div class="line line3"></div>
        </div>
    </div>
    <div class="btnContainer">
        <div class="innerCont slideCont-1">
                <div class="navBtn" onclick="as(6)">
                    <div class="activeBlockCont"><div class="activeBlock"></div></div>
                    <p class="nav-txt">Projects</p>
                </div>
            <div class="btnGroup-2">
                <div class="navBtnCont" onmouseover="dropPc(1, 'down')" onmouseout="dropPc(1, 'up')">
                    <div class="navBtn">
                        <div class="activeBlockCont"><div class="activeBlock"></div></div>
                        <div class="mobile dropBtn" onclick="dropMob(1)">
                            <i class="fa fa-plus iconPlus-1"></i>
                            <i class="fa fa-minus iconMinus-1"></i>
                        </div>
                        <a href="#yeet" onclick="as(2)"><p class="nav-txt">Skills</p></a>
                    </div>
                    <div class="dropDown-1 dropDown">
                        <a href="#yeet" class="innerBtn" onclick="as(3)">
                            <p class="nav-txt">Programming</p>
                        </a>
                        <a href="#yeet"  class="innerBtn" onclick="as(4)">
                            <p class="nav-txt">Software</p>
                        </a>
                        <a href="#yeet"  class="innerBtn" onclick="as(5)">
                            <p class="nav-txt">Hardware</p>
                        </a>
                    </div>
                </div>
                <div class="navBtn" onclick="as(1)">
                    <div class="activeBlockCont"><div class="activeBlock"></div></div>
                    <p class="nav-txt">About</p>
                </div>
            <div class="btnGroup-1">
                
            </div>
            
        </div> 
    </div>
</nav>