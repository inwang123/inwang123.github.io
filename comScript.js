   // Get the modal
   var modal = document.getElementById("imageModal");

   // Get the button that opens the modal
   var btn = document.getElementById("openModalButton");

   // Get the <span> element that closes the modal
   var span = document.getElementsByClassName("close")[0];

   // When the user clicks the button, open the modal 
   btn.onclick = function() {
       modal.style.display = "block";
   }

   //clos modal when the user clicks on (x) 
   span.onclick = function() {
       modal.style.display = "none";
   }

   //close modal when user clicks outside of ti
   window.onclick = function(event) {
       if (event.target == modal) {
           modal.style.display = "none";
       }
   }
