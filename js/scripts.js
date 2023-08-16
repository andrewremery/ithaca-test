(function ($) {
  function createMobileMenuButton() {
    var mobileMenuButton = $('<button id="mobile-menu-button">Menu</button>');
    mobileMenuButton.prependTo($("#main-menu"));
  }
  function toggleMobileMenu() {
    $("#main-menu ul").slideToggle();
  }
  
  $(document).ready(function () {
    createMobileMenuButton();
    $("#mobile-menu-button").on("click", () => {
      toggleMobileMenu();
    });
  });
})(jQuery);
