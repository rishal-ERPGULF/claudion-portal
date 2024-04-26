import { createUser, tokenGenerated } from "@/Api Handle/Apis";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  import { Input } from "@/components/ui/input"
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Login from "@/components/Login";
import { useSelector } from "react-redux";
import Coupen from "@/components/Coupen";
import toast from "react-hot-toast";
import Signatureform from "@/components/payment/SignatureForm";
import { useDispatch } from "react-redux";
import { setLoggedIn, setTotal } from "@/store/Actions";

  
const Orderpayment: React.FC = () => {
  const selectedProduct = useSelector((state: any) => state.app.selectedProduct);
  const couponPercent = useSelector((state: any) => state.app.couponPercent);
  const total = useSelector((state: any) => state.app.total);
  
  const [amountdiscounted , setAmountdiscounted] = useState<number>(0);
  const [verified, setVerified] = useState<boolean>(false); 


  function calculateDiscountedPrice(amount: number, percent:number) {
    // Convert discount percentage to decimal
    const discountDecimal = percent / 100;

    // Calculate discounted price
    const discountedPrice = amount - (amount * discountDecimal);

    // Return discounted price
    return discountedPrice;
  }
  const dispatch = useDispatch();
   

  useEffect(() => {
    // Calculate discounted price if coupon applied
    if (couponPercent && selectedProduct) {
      const discountedPrice = calculateDiscountedPrice(selectedProduct.amount, couponPercent);
      setAmountdiscounted(discountedPrice);
      dispatch(setTotal(discountedPrice)); 
    } else {
      // Set total to the initial selected product amount
      
      dispatch(setTotal(selectedProduct?.amount || 0));
    }
  }, [selectedProduct, couponPercent]);


    const[fullname, setFullname] = useState<string>('');
    const[company, setComapny] = useState<string>('');
    const[country, setCountry] = useState<string>('');
    const[street, setStreet] = useState<string>('');
    const[city, setCity] = useState<string>('');
    const[state, setState] = useState<string>('');
    const[zip, setZip] = useState('');
    const[email, setEmail] = useState<string>('');
    const[mobile, setMobile] = useState<string>('');
    const[password, setPassword] = useState<string>('');
    const[id, setId] = useState<string>('');
    
    const [resetKey , setResetKey] = useState<string>('');
    const[showrestkeyfield, setShowrestkeyfield] = useState<boolean>(false);
    const [resetKeyinput, setResetKeyinput] = useState<string>('');
    
    
    const handleVerified = () => {
      if (resetKey == resetKeyinput){
        toast("number verified");
        dispatch(setLoggedIn(true));
        setShowrestkeyfield(false);
        setVerified(true);
      }
      else{
        toast('Error verifing phone number');
        console.log("Error verifing phone number")
      }
    }

    const handleSubmit = async () => {
        
         await tokenGenerated();
        try {
          const newAccount = await createUser(fullname, email, mobile, password, id);
          if (newAccount.data.reset_key) {
            toast( "Account created successfully ! Please verify mobile number");
            setResetKey(newAccount.data.reset_key);
            setShowrestkeyfield(true);
          }
        } catch (error) {
          toast("Error creating account");
          console.error('Error creating account:', error);
        }
      };
  return (
    <div className=" w-full m-8 p-2">
        <Accordion type="single" collapsible className="border rounded-sm">
  <AccordionItem value="item-1">
    <AccordionTrigger className="p-2">Returning Customer? Click here to login</AccordionTrigger>
    <AccordionContent>
    <Login setVerified={setVerified} />
    </AccordionContent>
  </AccordionItem>
</Accordion>
        <Accordion type="single" collapsible className="border rounded-sm">
  <AccordionItem value="item-1">
    <AccordionTrigger className="p-2">Have Coupen? Click here to enter the code</AccordionTrigger>
    <AccordionContent>
      <Coupen/>
    </AccordionContent>
  </AccordionItem>
</Accordion>
    <div className=" md:flex xs:block sm:block justify-between mt-6 gap-6">
        <div className=" w-full">
            <h1 className="text-3xl font-bold">Billing Details</h1>
            <div className="mt-5">
            <div className="flex gap-1">
                <Input type="text" placeholder="Full name" required value={fullname} 
                onChange={(e) => setFullname(e.target.value)}/>  
                <Input  placeholder="ID" required value={id} onChange={(e) => setId(e.target.value)}/>  
            </div>
                <Input className="mt-1" type="password" placeholder="Password" required value={password} 
                onChange={(e) => setPassword(e.target.value)}/>
                <Input className="mt-1" type="email" placeholder="Email address" 
                required value={email} onChange={(e) => setEmail(e.target.value)}/>
                <Input className="mt-1" type="tel" placeholder="Mobile Number" 
                required value={mobile} onChange={(e) => setMobile(e.target.value)}/>
                <Input className="mt-1" type="text" placeholder="Company name (optional)" 
                value={company} onChange={(e) => setComapny(e.target.value)}/>
                <Input className="mt-1" type="text" placeholder="Country / Region" 
                value={country} onChange={(e) => setCountry(e.target.value)}/>
                <Input className="mt-1" type="text" placeholder="Street address" 
                value={street} onChange={(e) => setStreet(e.target.value)}/>
                <Input className="mt-1" type="text" placeholder="Town / City" 
                value={city} onChange={(e) => setCity(e.target.value)}/>
                <Input className="mt-1" type="text" placeholder="State"
                 value={state} onChange={(e) => setState(e.target.value)}/>
                <Input className="mt-1" type="text" placeholder="Postcode / ZIP" 
                value={zip} onChange={(e) => setZip(e.target.value)}/>
            </div>

        </div>
        <div className=" w-full">
        <h1 className="font-bold  text-3xl">Your order</h1>
        <div className="flex border rounded-md p-4 mt-5 w-[420px] justify-between">
        <div className="  w-25 mt-2 font-semibold tracking-tight text-lg">
          <h1>Product</h1>
          <h1 className="pt-5">Subtotal</h1>
          <h1 className="pt-5 ">Discount after using coupen</h1>
          <h1 className="py-5">VAT</h1>
          <h1>Total</h1>
        </div>
        
    <div className="mt-2  w-25 tracking-tight text-lg">
        <h1>SubTotal</h1>
        <h1 className="pt-5">QAR {selectedProduct.amount}</h1>
        <h1 className="pt-5"> QAR {amountdiscounted}</h1>
        <h1 className="py-5">QAR 0.00</h1>
        
        <h1>QAR {total}</h1>
        
    </div>

        </div>
        <div className="border w-[420px] mt-4 p-5 rounded-md">
        {verified ? (
  <>
    <p>continue</p>
    <Signatureform />
  </>
) : showrestkeyfield ? (
  <>
    <Input
      className="mb-2"
      type="text"
      placeholder="Reset Key"
      value={resetKeyinput}
      onChange={(e) => setResetKeyinput(e.target.value)}
    />
    <Button className="w-full text-lg" onClick={handleVerified}>
      Verify Reset Key
    </Button>
  </>
) : (
  <>
    <p className="mb-3">Login Before Continue or Create new Account</p>
    <Button className="w-full text-lg" onClick={handleSubmit}>
      Create Account
    </Button>
  </>
)}

 
</div>

        </div>
        
    </div>
    </div>
  )
}

export default Orderpayment