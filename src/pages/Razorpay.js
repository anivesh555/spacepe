import React from 'react'
import { useEffect } from 'react';
import axios from 'axios';

const Razorpay = () => {
    const loadScript = (src) => {
        return new Promise((resolve) => {
          const script = document.createElement("script");
          script.src = src;
          script.onload = () => {
            resolve(true);
          };
          script.onerror = () => {
            resolve(false);
          };
         document.body.appendChild(script);
       });
    };
    
    
      useEffect(() => {
        const loadRazorpayScript = async () => {
          const scriptLoaded = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
          );
    
          if (scriptLoaded) {
            console.log("Razorpay script loaded successfully!");
          } else {
            console.error("Failed to load Razorpay script");
          }
        };
    
        loadRazorpayScript();
      }, []);
      const handlerazorpay = async ()=>{
    
        const createOrder  = await axios.get("http://localhost:4000/api/razor")
        console.log(createOrder,"create order ====>",createOrder.data.id)
        const options = {
          key: "rzp_test_daT1GzX7sEY2Qg",
          currency: 'INR',
          amount: 200,
          name: "something",
          description: "Test Wallet Transaction",
          // image: "http://localhost:1337/logo.png",
          order_id: createOrder.data.id,
          handler: function (response) {
            console.log("Payment success:", response);
            alert(response.razorpay_payment_id);
            alert(response.razorpay_order_id);
            alert(response.razorpay_signature);
          },
          prefill: {
            name: "some name",
            email: "some mail@gmail.com",
            contact: "9999999999",
          },
        };
      
        const paymentObject =  new window.Razorpay(options);
        paymentObject.open();
    
    
      }
    
      return (
        <div>
            Welcome , Hey we provide best catering services in India , thanks for visiting us 
            <br/>
        <button onClick={handlerazorpay}>open Razorpay  </button>
    
        </div>
      )
    

}

export default Razorpay

