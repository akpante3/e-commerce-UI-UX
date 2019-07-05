$(document).ready(function () {
  let shoppingCartCount = 0;
  let quantityCount = 0;
  const shoppingItem = `<div class="shopping-cart-product mb-3">
              <div class="cart-product">
                  <div class="cart-product-image">
                      <img src="https://s7d2.scene7.com/is/image/academy/10301327" alt="Smiley face" />
                  </div>
                  <div class="cart-product-details">
                      <span class="cart-item-name">name</span>
                      <div><span class="cart-remove-button">remove</span></div>
                  </div>
              </div>
              <div class="cart-product-size text-center">
                  <span>X L M</span>
              </div>
              <div class="text-center cart-product-quantity-wrapper">
                  <span class="cart-product-quantity row">
                          <span class="product-quantity-controller text-center prev-quantity-count"> - </span>
                          <span class="product-quantity text-center"> 0 </span>
                          <span class="product-quantity-controller text-center next-quantity-count"> + </span>
                      </span>
              </div>
              <div class="cart-product-price text-right">
                  <span>
                      &#163;
                      45
                  </span>
              </div>
              <div></div>
          </div>`

// single -tem display image
  $('.img-small').on('click', function() {
    const imageSrc = $(this).children('img').attr("src");
    $('#single-img-big').attr("src", imageSrc)
  });

//  add to wish list on item card
  $('.wish-list-heart').on("click", function() {
    if ($(this).css('color') == 'rgb(246, 46, 94)') {
      $(this).css("color", "#2e2e2e");
    } else {
      $(this).css("color", "#f62e5e");
    }
  });

//  quantity controllers
  $('.next-quantity-count').on('click', function() {
    quantityCount += 1
    $(this).prev().html(quantityCount);
  });

  $('.prev-quantity-count').on('click', function() {
    if (quantityCount != 0) { 
      quantityCount -= 1
      $(this).next().html(quantityCount);
    }
  });

  // like a comment
  $('.like-comment').on('click', function() {
    if ($(this).css('color') == 'rgb(246, 46, 94)') {
      $(this).css("color", "#2e2e2e");
    } else {
      $(this).css("color", "#f62e5e");
    }
  });

  $('.add-to-cart-button').on("click", function () {

    $('#single-img-big').clone().addClass('zoom').appendTo('.single-product-image-display');
    $(".img-big").css("opacity", "0.6");
    $(shoppingItem).clone().appendTo('#shopping-cart-modal-body')

    setTimeout(function () {
      $("zoom").remove()
      shoppingCartCount += 1
      $(".cart-count").children('span').html(shoppingCartCount);
      $(".img-big").css("opacity", "1");
    }, 1000);
  });


  $('#shopping-cart-modal-body').on("click", '.cart-remove-button', function () {
    $(this).parents('.shopping-cart-product').remove();
    shoppingCartCount -= 1
    $(".cart-count").children('span').html(shoppingCartCount);
  });


  $('.size-button').on("click", function() {
    if($(this).hasClass("unselected-size")) {
      $(this).removeClass( "unselected-size" ).addClass( "selected-size");
    } else {
      $(this).removeClass( "selected-size" ).addClass( "unselected-size");          
    }
  });

  $('.color-option').on("click", function() {
    if($(this).hasClass("selected-color")) {
      $(this).removeClass( "selected-color" )
    } else {
      $(this).addClass( "selected-color");          
    }
  });
});