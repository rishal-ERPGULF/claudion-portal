import React, { useState } from 'react';
import CryptoJS from 'crypto-js';
import { Button } from '../ui/button';
import { useSelector } from 'react-redux';

const Signatureform = () => {
    const amount = useSelector((state: any) => state.app.total);
    const selectedProduct = useSelector((state: any) => state.app.selectedProduct);
  const [formData, setFormData] = useState({
    merchant_id: '3582509',
    ORDER_ID: '4641',
    WEBSITE: 'hiba.claudion.com',
    TXN_AMOUNT: '180.00',
    EMAIL: 'azim@htsqatar.com',
    MOBILE_NO: '77235274',
    CALLBACK_URL: 'https://aysha.erpgulf.com/api/method/aysha_training.sadad.sadad',
    SADAD_WEBCHECKOUT_PAGE_LANGUAGE: 'ENG',
    txnDate: '2020-09-19 13:01:33',
    productdetail: [
      {
        order_id: '4641',
        amount: amount,
        quantity: '1',
        item_code: selectedProduct.product,
      },
    ],
  });

  const [signature, setSignature] = useState('');

  const secretKey = import.meta.env.VITE_Secretkey;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // Prevent the default form submission behavior
    event.preventDefault();
  
    // Generate the signature
    const sortedKeys = Object.keys(formData).sort();
    const sortedParams = sortedKeys
  .filter((key) => key !== 'productdetail')
  .map((key) => (formData as { [key: string]: any })[key]) // Type assertion
  .join('');

  
    const signatureString = `${secretKey}${sortedParams}`;
    const hashedSignature = CryptoJS.SHA256(signatureString).toString();
  
    // Set the signature value in the state
    setSignature(hashedSignature);

    
      // Wait for the state to update
    await new Promise((resolve) => setTimeout(resolve, 0));
  
    const formElement = document.getElementById('sadad_payment_form') as HTMLFormElement | null;
    if (formElement) {
      formElement.submit();
    }
  };

  return (
    <div>
    <form action="https://sadadqa.com/webpurchase" method="post" name="gosadad" id="sadad_payment_form" onSubmit={handleSubmit}>
      <input type="hidden" name="merchant_id" id="merchant_id" value={formData.merchant_id} />
        <input type="hidden" name="ORDER_ID" id="ORDER_ID" value={formData.ORDER_ID} />
        <input type="hidden" name="WEBSITE" id="WEBSITE" value={formData.WEBSITE} />
        <input type="hidden" name="TXN_AMOUNT" id="TXN_AMOUNT" value={formData.TXN_AMOUNT} />
        <input type="hidden" name="EMAIL" id="EMAIL" value={formData.EMAIL} />
        <input type="hidden" name="MOBILE_NO" id="MOBILE_NO" value={formData.MOBILE_NO} />
        <input type="hidden" name="SADAD_WEBCHECKOUT_PAGE_LANGUAGE" id="SADAD_WEBCHECKOUT_PAGE_LANGUAGE" value={formData.SADAD_WEBCHECKOUT_PAGE_LANGUAGE}/>

        <input
          type="hidden"
          name="CALLBACK_URL"
          id="CALLBACK_URL"
          value={formData.CALLBACK_URL}
        />
        
        <input type="hidden" name="txnDate" id="txnDate" value={formData.txnDate} />

        <input
          type="hidden"
          name="productdetail[0][quantity]"
          value={formData.productdetail[0].quantity}
        />
        <input
        type="hidden"
        name="productdetail[0][amount]"
        value={String(formData.productdetail[0].amount)} 
        />

        <input
          type="hidden"
          name="productdetail[0][order_id]"
          value={formData.productdetail[0].order_id}
        />
        <input
          type="hidden"
          name="productdetail[0][item_code]"
          value={formData.productdetail[0].item_code}
        />
      <input type="hidden" name="signature" value={signature} />

      <Button className="w-full text-lg m" >
      Place Order
    </Button>
      
    </form>
    
    </div>
  );
};

export default Signatureform;
