jQuery(function ($) {
  var $form = $('#frmBooking');
  var handler = StripeCheckout.configure({
    key: 'pk_test_cp21BcECf4kMMUbSlRlZlsMo',
    token: function (token) {
      // Use the token to create the charge with a server-side script.
      // You can access the token ID with `token.id`

      //This will be printed when the transaction is successful. To charge, server side scripting is required.
      if (token.id) {
        $('#thankyouPayment').html('Thank you, your payment was successful!');

        //You can also use the following code to re-submit the form content to another file for further processing.
        //Don't forget to add action to your form
        //$form.get(0).submit();

        //Or save form data locally, using local storage.
      }
    },
  });

  $('#customButton').on('click', function (e) {
    e.preventDefault();
    // Code Section B  Open Checkout with further options
    handler.open({
      name: 'Stripe Payment',
      currency: 'gbp',
      description: $('#item_name').val(),
      amount: $('#total_value1').val() * 100,
    });
  });

  // Code Section C  Close Checkout on page navigation
  $(window).on('popstate', function () {
    handler.close();
  });
});
