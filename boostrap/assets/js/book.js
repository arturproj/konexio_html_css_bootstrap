$(function () {
/**     TEMPLATE NAVBAR
 *  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
 *      <a class="navbar-brand" href="#">
 *          <img src="./../assets/img/app/logo.png" width="auto" height="30" class="d-inline-block align-top" alt="" loading="app">
 *      </a>
 *  </nav><!-- .// navbar-->
*/    
    
    $(".navbar").append(
        $('<a class="navbar-brand" href="#">').append('<img src="./../assets/img/app/logo.png" width="auto" height="30" class="d-inline-block align-top" alt="" loading="app">')
    );
});