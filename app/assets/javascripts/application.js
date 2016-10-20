// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
<script>
       function validateForm() {
         var x = document.forms["myForm"]["firs_name"].value;
         if (x == null || x == "") {
         alert("Enter your first_name");
         return false;
         }
       
         var y = document.forms["myForm"]["last_name"].value;
         if (y == null || y == "") {
         alert("Enter your Last_name");
         return false;
         }
         var s = document.forms["myForm"]["email"].value;
         var atpos = s.indexOf("@");
         var dotpos = s.lastIndexOf(".");
         if (atpos<1 || dotpos<atpos+2 || dotpos+2>=s.length) {
         alert("Enter a valid email");
     return false;
       }
        
       var z = document.forms["myForm"]["phonenumber"].value; 
       if (z == null || z == "") {
       alert("Enter your Phone Number");
       return false;
}  
}  
