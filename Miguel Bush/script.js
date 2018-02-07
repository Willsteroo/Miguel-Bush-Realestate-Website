$(document).ready(function(){
    var first=$("#first");
    var activeListings=$("#activeListings");
    var pastSales=$("#pastSales");
    var about=$("#about");
    var search=$("#search");
    
    var activeListingsButon=$(".act");
    var pastSalesButon=$(".past");
    var aboutButon=$(".ab");
    var searchButon=$(".sea");
    
    
    
    $(pastSales).hide();
    $(about).hide();
    $(search).hide();
    
    function hideAll() {
        activeListings.hide();
        pastSales.hide();
        about.hide();
        search.hide();
    };
    
    function showAll() {
        activeListings.show();
        pastSales.show();
        about.show();
        search.show();
    }
    
    $(activeListingsButon).click(function() {
        hideAll();
        activeListings.slideDown(500);
        fill();
    });
    
    $(pastSalesButon).click(function() {
        hideAll();
        pastSales.slideDown(500);
        fill();
    });
    
    $(aboutButon).click(function(){
        hideAll();
        about.slideToggle(500);
        fill();
    });
    
    $(searchButon).click(function(){
        hideAll();
        search.slideDown(500);
        fill();
    });
    
    //RESIZE WINDOW
    function fill(){
        var introHeight=$("#intro").height();
        var windowHeight=$(window).height();
        var newHeight=windowHeight-introHeight;
        var newheightString=newHeight.toString();
        var divString="height: "+newheightString+"px"; 
        $('<div>', { 
            style: divString
        }).appendTo('#intro');
    }
    fill();
    
    
    
    
    var w = window.innerWidth;
    if (w<768)
        {
            showAll();
        }
    $(window).bind('resize', function(e){
        var w = window.innerWidth;
        if (w>768) {
            if (window.RT) clearTimeout(window.RT);
            window.RT = setTimeout(function(){
                this.location.reload(false); 
            }, 200);
        }
    });
    

    //RESIZE WINDOW END
    
    
    /*$.get("http://ironwood-prop.com/mylistings.html", function( my_var ) {
    // my_var contains whatever that request returned
        console.log(my_var);
        var htmlLength=my_var.length;
        for (i=0; i<htmlLength;i++) {
            if (my_var[i]=="<") {
                console.log(my_var[i]);
            }
        }
        
    });*/
});
