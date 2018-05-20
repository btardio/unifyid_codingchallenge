
jsond = {
   "own_credentials":[
      {
         "website":"google.com",
         "username":"johndoe@gmail.com",
         "password_id":"#jknkjndsjk$SSD"
      },
      {
         "website":"facebook.com",
         "username":"johndoe@gmail.com",
         "password_id":"nnjnnnc#D"
      },
      {
         "website":"reddit.com",
         "username":"thejohndoe",
         "password_id":"#)_2-==23D"
      },
      {
         "website":"wellsfargo.com",
         "username":"johndoebanks",
         "password_id":"iuh!@@22"
      },
      {
         "website":"netflix.com",
         "username":"johndoeandchill",
         "password_id":"(*#$2k$SSD"
      },
      {
         "website":"play.hbogo.com",
         "username":"johndoewatchesgameofthrones",
         "password_id":"23789$$SSD"
      }
   ],
   "shared_with_me":[
      {
         "website":"youtube.com",
         "username":"macklemore299",
         "password_id":"(*#$2k$SSD",
         "lender_user_id": "macklemore"
      },
      {
         "website":"hulu.com",
         "username":"lorenzo789",
         "password_id":"23789$$SSD",
         "lender_user_id": "lorenzochello"
      }
   ],
   "shared_with_others":[
      {
         "website":"netflix.com",
         "username":"johndoeandchill",
         "password_id":"(*#$2k$SSD",
         "borrower_user_id": "thefriendofjohndoe"
      },
      {
         "website":"play.hbogo.com",
         "username":"johndoewatchesgameofthrones",
         "password_id":"23789$$SSD",
         "borrower_user_id": "gotfan"
      }
   ],
   "username":"johndoe19",
   "name": "John Doe"
};


function createdetails(jsond, entry){
    
    $("#menudetails").empty();
    
    var $mitem = $('<div class="fe-item card-content white-text"></div>');
    
    $mitem.append('<div class="detailswebsite">' + entry["website"] + "</div>");
    
    $mitem.append('<div class="detailsusername">' + entry["username"] + "</div>");    

    $mitem.append('<div class="detailspassword">' + entry["password_id"] + "</div>");
    
    $("#menudetails").append($mitem);
    
}


function createsummaries(jsond, k){

    $("#menusummaries").empty();
    
    $.each(jsond[k], function(i, entry){
        
        var $mitem = $('<div id="ids_' + k + '" class="fe-item card-content white-text"></div>');
        
        $mitem.append('<div class="summarieswebsite">' + entry["website"] + "</div>");
        
        $mitem.append('<div class="summariesusername">' + entry["username"] + "</div>");
            
        $("#menusummaries").append($mitem);
        
        $mitem.on("click", function(){ createdetails(jsond, entry); } );
        
    });
    
}

$( document ).ready(function() {
    
    $.each(jsond, function(k, v){
        
        if ( k != "username" && k != "name" ){
            
            splitk = k.split('_');
            joineds = '';
            $.each(splitk, function(i, spl){
                
                charatz = spl.charAt(0);
                
                spl = charatz.toUpperCase() + spl.slice(1);
                
                joineds += spl + " ";
                
            });
            
            joineds.trim();
            
            var $mitem = $('<div id="ids_' + k + '" class="fe-item card-content white-text">' + joineds + '</div>');
            
            $("#menucategories").append($mitem);
            
            $mitem.on("click", function(){createsummaries(jsond, k);});
            
        }
    })

});







    
