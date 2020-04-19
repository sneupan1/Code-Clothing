import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_1Alow58zfB4SkFpaCpYRbFCI00qMvXH2nF";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Code Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      panelLabel={`Pay Now $${price}`}
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
