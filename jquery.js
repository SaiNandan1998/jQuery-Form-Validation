$(document).ready(function(){

    
    
    
    jQuery.validator.addMethod("noSpace", function(value, element) { 
    return value == '' || value.trim().length != 0;  
}, "No spaces please ");
    
    jQuery.validator.addMethod("number",function(value, element){
        return value.length >=10;
         
    }, "Please enter valid number");
    
    
                               
 
    
    
var $registrationForm = $("#form");                          
    console.log($registrationForm);
 $registrationForm.validate({
     rules:{
         
         firstname:{
             required:true,
             noSpace:true
         },
         
         lastname:{
             required:true,
             noSpace:true
         },
         
         username:{
             required:true,
             noSpace:true
         },
         
         password:{
            required:true,
            noSpace:true
            
          },
     
         cpassword:{
            required:true,
            noSpace:true,
            equalTo:"#password"
            
         },
         
         email:{
             required:true
         },
         
         number:{
             required:true,
             number:true
         },
        
         gender:{
         required:true
             
         },
     
         country:{
            required:true
         },
     
         date:{ 
             required:true,
             
         },
     
         checkbox:{
            required:true
         }
         
     },
     
     messages:{
         
         firstname:{
         required:"firstname is required"
         
     },
         
     lastname:{
         required:"last name is required"
         },
         
      username:{
         required:"Username is required"
      },
        
      password:{
         required:"password is required"
      },
    
     cpassword:{
         required:"confirm password is required"
     },
         
      email:{
          required:"email id is required"
      },
      
      number:{
          required:"mobile number is required"
      },
         
    gender:{
        required:"please select gender"
    },
    
    country:{
         required:"please select country"
    },
    
     date:{
         required:"date of birth is required"
     },
         
    checkbox:{
        required:"please agree terms"
    }
         
         
 },
     
    errorPlacement:function(error,element){
     if(element.is(":radio")){
        error.appendTo(element.parents(".gender"));
         
        }
        
        else
          {
           error.insertAfter(element);
          }
    }
        
 });

    
              });

</script>