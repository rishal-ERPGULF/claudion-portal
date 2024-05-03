import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

const CheckoutDetails = () => {
  const navigate = useNavigate();
  const selectedProduct = useSelector((state: any) => state.app.selectedProduct);
 
    

  const handleCheckout = () => {
    localStorage.setItem('Total', selectedProduct.amount);
    navigate('/order-payment');
  };

  return (
    <div className="w-full">
    <div className="mx-14 mt-16 mr-20">
  <div className="flex grid grid-cols-1 sm:grid-cols-1 gap-10 md:grid-cols-2  justify-between">
    <div>
  <div className="border p-16 flex justify-around h-70 ">
  <div>test</div>
  <div>
    <p>{selectedProduct.product}</p>
    <p>{selectedProduct.description}</p>
    <p>Development use: 1 year</p>
    <p>Production use: {selectedProduct.amountType}</p>
    <p>Updates: 1 year</p>
    <p>Support: 1 year</p>
  </div>
  <div>
    <p className="font-bold text-xl">1 x {selectedProduct.amount}</p>
  </div>
</div>
<div><Tabs defaultValue="description" className="mt-6" >
  <TabsList className="w-[550px] border-b">
    <TabsTrigger value="description">Description</TabsTrigger>
    <TabsTrigger value="review">Review</TabsTrigger>
    <TabsTrigger value="changelog">Changelog</TabsTrigger>
  </TabsList>
  <TabsContent value="description">Make changes to your account here.</TabsContent>
  <TabsContent value="review">Change your password here.</TabsContent>
  <TabsContent value="changelog">Changelog.</TabsContent>
</Tabs>
</div>
</div>

<div >
<div className="px-10 p-2 mb-8 mx-10 justify-center items-center">
  <div className="flex justify-around w-50">
    <div>
      <p className="text-gray-400 text-lg">Licenses</p>
      <p className="text-gray-400 text-lg">Unit price</p>
      <h2 className="font-bold text-2xl">Total</h2>
    </div>
    <div>
      <p className="text-gray-400 text-lg">1</p>
      <p className="text-gray-400 text-lg">QAR {selectedProduct.amount}</p>
      <h2 className="font-bold text-2xl">QAR {selectedProduct.amount}</h2>
    </div>
  </div>
  <div className="flex justify-center flex-col gap-4  mt-4">
    <Button onClick={handleCheckout}>Process to Checkout</Button>
    <Button>LIVE PREVIEW</Button>
  </div>
</div>
<div className="mx-20 p-2">
  
  <div className="flex items-center space-x-2">
    <div className="shadow-lg rounded-full p-2">
      <img
        src="https://www.freeiconspng.com/thumbs/check-tick-icon/tick-icon-30.png"
        alt="Tick Icon"
        className="h-5 w-6 text-green-600"
      />
    </div>
    <p className="leading-7 flex ">
    Built to complement the MIT components
    </p>
  </div>
  <div className="flex items-center space-x-2">
    <div className="shadow-lg rounded-full p-2">
      <img
        src="https://www.freeiconspng.com/thumbs/check-tick-icon/tick-icon-30.png"
        alt="Tick Icon"
        className="h-5 w-6 text-green-600"
      />
    </div>
    <p className="leading-7 flex ">
      1 year of updates & support
    </p>
  </div>
  <div className="flex items-center space-x-2">
    <div className="shadow-lg rounded-full p-2">
      <img
        src="https://www.freeiconspng.com/thumbs/check-tick-icon/tick-icon-30.png"
        alt="Tick Icon"
        className="h-5 w-6 text-green-600"
      />
    </div>
    <p className="leading-7 flex">
      Designed for advanced use cases
    </p>
  </div>
</div>

</div>
  <div>
    
  </div>
    </div>
    
  </div>
</div>

  )
}

export default CheckoutDetails