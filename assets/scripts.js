 /*
	
        $(document).ready(function() {
	
 
	
            $("#select1").load("../controlleurs/listeoptions1.php");
	
 
	
            $("#select1").change(function() {
    
                
 
	
                $("#select2").load("../controlleurs/listeoptions2.php?id_region="+$('#select1').val());  // avec php?id_region=select1.val ?
	
            });
    
            
        });

    */


        $(document).ready(function() 
        {
            $("#select1").ready(function() {
           
    
              
                $.post({
                    url: "../controlleurs/listeoptions1.php", 
                    dataType: "json",                             //  data: { id_region:$('#select1').val() },
                  

         success: function(resultat) 
            {
              
                $.each(resultat, function(index, value) {
         
                  
                         
                    $('#select1').append('<option value ='+value.reg_id+'>'+value.reg_v_nom+'</option>');
                    
                                 
                    });
            

            
            /*    $("#div").html(resultat[1].reg_v_nom); */
               
            }




                            // NOTE: pour stopper l'action par défaut en cas de conflit on peut toujours utiliser >>>>>>>>e.preventDefault().<<<<<<<<<

             
                    
                });
               
                

            $("#select1").change(function(){
                var id_region=$('#select1').val();
                    $.post({
                          url:"../controlleurs/listeoptions2.php?id_region="+id_region,
                          dataType: "json",
                          success: function(resultat2)
                          { 
                            var contenu = '';

                            $.each(resultat2, function(index, val){
                              
                              contenu = contenu + "<option>"+val.dep_nom+"</option>";      
                                                          
                                            
                                });

                                $("#select2").html(contenu);                        
                          } 
                                                                           
                        });
                    })



                return false;  
                       
            });
           
        });

