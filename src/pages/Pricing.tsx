import { getItems } from "@/Api Handle/Apis";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button"
import About from "@/components/About";
import Questions from "@/components/Questions";
import Comments from "@/components/Comments";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { setSelectedProduct } from '../store/Actions';
import { useDispatch } from 'react-redux';

const MainHome = () => {
  const dispatch = useDispatch();
  
  const [product1, setProduct1] = useState<string>('');
    const [product2, setProduct2] = useState<string>('');
    const [product3, setProduct3] = useState<string>('');
    const [product4, setProduct4] = useState<string>('');

    const [raw1, setRaw1] = useState<string>('');
    const [raw2, setRaw2] = useState<string>('');

    const [service, setService] = useState<string>('');

    const [description1, setDescription1] = useState<string>('');
    const [description2, setDescription2] = useState<string>('');
    const [description3, setDescription3] = useState<string>('');
    const [description4, setDescription4] = useState<string>('');

    const [rawdescription1, setRawdescription1] = useState<string>('');
    const [rawdescription2, setRawdescription2] = useState<string>('');

    const [servicedescription, setServicedescription] = useState<string>('');

    const [annualamount1, setAnnualamount1] = useState<number>(0);
    const [perpetualamount1, setPerpetualamount1] = useState<number>(0);

    const [annualamount2, setAnnualamount2] = useState<number>(0);
    const [perpetualamount2, setPerpetualamount2] = useState<number>(0);

    const [annualamount3, setAnnualamount3] = useState<number>(0);
    const [perpetualamount3, setPerpetualamount3] = useState<number>(0);

    const [annualamount4, setAnnualamount4] = useState<number>(0);
    const [perpetualamount4, setPerpetualamount4] = useState<number>(0);

    const [annualamountraw1, setAnnualamountraw1] = useState<number>(0);
    const [perpetualamountraw1, setPerpetualamountraw1] = useState<number>(0);

    const [annualamountraw2, setAnnualamountraw2] = useState<number>(0);
    const [perpetualamountraw2, setPerpetualamountraw2] = useState<number>(0);

    const [annualamountservice, setAnnualamountservice] = useState<number>(0);
    const [perpetualamountservice, setPerpetualamountservice] = useState<number>(0);

    const [itemname1, setItemname1] = useState<string>('');
    const [itemname2, setItemname2] = useState<string>('');
    const [itemname3, setItemname3] = useState<string>('');

    const [plan1, setPlan1] = useState<'annual' | 'perpetual'>('annual');
    const [plan2, setPlan2] = useState<'annual' | 'perpetual'>('annual');
    const [plan3, setPlan3] = useState<'annual' | 'perpetual'>('annual');
    const [plan4, setPlan4] = useState<'annual' | 'perpetual'>('annual');
    const [plan5, setPlan5] = useState<'annual' | 'perpetual'>('annual');
    const [plan6, setPlan6] = useState<'annual' | 'perpetual'>('annual');
    const [plan7, setPlan7] = useState<'annual' | 'perpetual'>('annual');

    const handlePlanChange = (cardNumber: number, newPlan: 'annual' | 'perpetual') => {
      switch (cardNumber) {
          case 1:
              setPlan1(newPlan);
              break;
          case 2:
              setPlan2(newPlan);
              break;
          case 3:
              setPlan3(newPlan);
              break;
          case 4:
              setPlan4(newPlan);
              break;
          case 5:
              setPlan5(newPlan);
              break;
          case 6:
              setPlan6(newPlan);
              break;
          case 7:
              setPlan7(newPlan);
              break;
          default:
              break;
      }
  };

    useEffect(() => {
      const fetchData = async () => {
          try {
              const items = await getItems();
              console.log(items.data.data);    
              console.log(items.data.data.itemGroups[0]);    
              setProduct1(items.data.data.itemGroups[0].items[0]['item name']);    
              setAnnualamount1(items.data.data.itemGroups[0].items[0]['Annual amount']); 
              setPerpetualamount1(items.data.data.itemGroups[0].items[0]['perpetual amount']); 

              setProduct2(items.data.data.itemGroups[0].items[1]['item name']); 
              setAnnualamount2(items.data.data.itemGroups[0].items[1]['Annual amount']); 
              setPerpetualamount2(items.data.data.itemGroups[0].items[1]['perpetual amount']); 

              setProduct3(items.data.data.itemGroups[0].items[2]['item name']);   
              setAnnualamount3(items.data.data.itemGroups[0].items[2]['Annual amount']); 
              setPerpetualamount3(items.data.data.itemGroups[0].items[2]['perpetual amount']); 

              setProduct4(items.data.data.itemGroups[0].items[3]['item name']); 
              setAnnualamount4(items.data.data.itemGroups[0].items[3]['Annual amount']); 
              setPerpetualamount4(items.data.data.itemGroups[0].items[3]['perpetual amount']); 

              setRaw1(items.data.data.itemGroups[2].items[0]['item name']); 
              setAnnualamountraw1(items.data.data.itemGroups[2].items[0]['Annual amount']); 
              setPerpetualamountraw1(items.data.data.itemGroups[2].items[0]['perpetual amount']); 

              setRaw2(items.data.data.itemGroups[2].items[1]['item name']); 
              setAnnualamountraw2(items.data.data.itemGroups[2].items[1]['Annual amount']); 
              setPerpetualamountraw2(items.data.data.itemGroups[2].items[1]['perpetual amount']);

              setService(items.data.data.itemGroups[1].items[0]['item name']); 
              setAnnualamountservice(items.data.data.itemGroups[1].items[0]['Annual amount']); 
              setPerpetualamountservice(items.data.data.itemGroups[1].items[0]['perpetual amount']); 

              setDescription1(items.data.data.itemGroups[0].items[0].description);    
              setDescription2(items.data.data.itemGroups[0].items[1].description);    
              setDescription3(items.data.data.itemGroups[0].items[2].description);    
              setDescription4(items.data.data.itemGroups[0].items[3].description);   

              setRawdescription1(items.data.data.itemGroups[2].items[0].description);   
              setRawdescription2(items.data.data.itemGroups[2].items[1].description);   

              setServicedescription(items.data.data.itemGroups[1].items[0].description);   
              
              setItemname1(items.data.data.itemGroups[0].name);     
              setItemname2(items.data.data.itemGroups[2].name);     
              setItemname3(items.data.data.itemGroups[1].name); 
            } catch (error) {
              console.error('Error getting items', error);
              return;
            }
      };
      fetchData();
    }, []);

    const navigate = useNavigate();

    interface Product {
      product: string;
      description: string;
      amount: number;
      amountType: string;
    }
    
    const handleBuy = (product: Product) => {
      // Dispatch the selected product to the Redux store
      dispatch(setSelectedProduct(product));
      // Navigate to the checkout page
      navigate('/checkout');
    };
    
  

  return (
    <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40">
      <div className="w-full flex justify-center h-20 items-center">
        <h3 className="text-lg text-blue-600">Pricing</h3>
      </div>
      <div className="w-full flex justify-center h-0 items-center">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-3xl">
          Start using Claudion's products{" "}
          <span className="text-blue-600">for free!</span>
        </h1>
      </div>
      <div className="w-full flex justify-center h-10  items-center ">
      <h3 className="text-lg text-gray-600 " style={{ height: '0px' }}>
          Switch to a commercial plan to access advanced features & technical
          support.
        </h3>
      </div>

      <div className="w-full flex justify-center h-10  items-center mt-5">
      <h3 className="text-2xl text-600 mb-5 " style={{ height: '0px' }}>
          {itemname1}
        </h3>
      </div>
      <div className="flex justify-center">
      <div className="pl-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4  justify-center items-center">
      <Card className="w-[250px] h-[330px] flex flex-col justify-center items-center ">
  <CardHeader>
    <CardTitle>{product1}</CardTitle>
    <CardDescription>{description1}</CardDescription>
  </CardHeader>
  <CardContent>
    <div>
      <Button value="annual" variant="outline" onClick={() => handlePlanChange(1, 'annual')} >
        Annual
      </Button>
      <Button value="perpetual" variant="outline" onClick={() => handlePlanChange(1, 'perpetual')} >
        Perpetual
      </Button>
    </div>
  </CardContent>
  <CardFooter className="block text-center">
  <div >
  <h4 className="scroll-m-20 text-xl font-semibold tracking-tight pt-3 pb-6 text-gray-600">
  <span className=" text-2xl text-blue-400">QAR{plan1 === 'annual' ? annualamount1 : perpetualamount1}</span>/month/dev
    </h4>
    <p className="leading-1 text-gray-500">
      Billed {plan1 === 'annual' ? 'annually at '+annualamount1+' /dev.' : 'monthly at '+perpetualamount1+' /dev.'}
    </p>
    <Button className="mt-4 inline-block" 
    onClick={() => handleBuy({ 
      product: product1, 
      description: description1,
      amount: plan1 === 'annual' ? annualamount1 : perpetualamount1,
      amountType: plan1 === 'annual' ? 'Annual' : 'Perpetual', })}>
      Buy Now
    </Button>
  </div>
    
  </CardFooter>
  
</Card>

<Card className="w-[250px] h-[330px] flex flex-col justify-center items-center">
  <CardHeader>
    <CardTitle>{product2}</CardTitle>
    <CardDescription>{description2}</CardDescription>
  </CardHeader>
  <CardContent>
    <div>
      <Button value="annual" variant="outline" onClick={() => handlePlanChange(2, 'annual')} >
        Annual
      </Button>
      <Button value="perpetual" variant="outline" onClick={() => handlePlanChange(2, 'perpetual')} >
        Perpetual
      </Button>
    </div>
  </CardContent>
  <CardFooter className="block text-center">
  <div>
  
  <h4 className="scroll-m-20 text-xl font-semibold tracking-tight pt-3 pb-6 text-gray-600 ">
  <span className="text-blue-400 text-2xl">QAR{plan2 === 'annual' ? annualamount2 : perpetualamount2}</span>/month/dev
    </h4>
    <p className="leading-1 text-gray-600">
    
      Billed {plan2 === 'annual' ? 'annually at '+annualamount2+' /dev.' : 'monthly at '+perpetualamount2+' /dev.'}
    </p>
    <Button className="mt-4 inline-block" onClick={() => handleBuy({ 
          product: product2, 
          description: description2,
          amount: plan2 === 'annual' ? annualamount2 : perpetualamount2,
          amountType: plan2 === 'annual' ? 'Annual' : 'Perpetual', 
        })}>
        Buy Now
      </Button>
  </div>
    
  </CardFooter>
</Card>

<Card className="w-[250px] h-[330px] flex flex-col justify-center items-center">
  <CardHeader>
    <CardTitle>{product3}</CardTitle>
    <CardDescription>{description3}</CardDescription>
  </CardHeader>
  <CardContent>
    <div>
      <Button value="annual" variant="outline" onClick={() => handlePlanChange(3, 'annual')} >
      Annual
      </Button>
      <Button value="perpetual" variant="outline" onClick={() => handlePlanChange(3, 'perpetual')} >
      Perpetual
      </Button>
    </div>
  </CardContent>
  <CardFooter className="block text-center">
  <div >
  <h4 className="scroll-m-20 text-xl font-semibold tracking-tight pt-3 pb-6 text-gray-600">
    <span className=" text-2xl text-blue-400">QAR{plan3 === 'annual' ? annualamount3 : perpetualamount3}</span>/month/dev
    </h4>
    <p className="leading-1 text-gray-600">
      Billed {plan3 === 'annual' ? 'annually at '+annualamount3+' /dev.' : 'monthly at '+perpetualamount3+' /dev.'}
    </p>
    <Button className="mt-4 inline-block" 
     onClick={() => handleBuy({ 
      product: product3, 
      description: description3,
      amount: plan3 === 'annual' ? annualamount3 : perpetualamount3,
      amountType: plan3 === 'annual' ? 'Annual' : 'Perpetual', })}>
      Buy Now
    </Button>
  </div>
    
  </CardFooter>
  
</Card>

<Card className="w-[250px] h-[330px] flex flex-col justify-center items-center">
  <CardHeader>
    <CardTitle>{product4}</CardTitle>
    <CardDescription>{description4}</CardDescription>
  </CardHeader>
  <CardContent>
    <div>
      <Button value="annual" variant="outline" onClick={() => handlePlanChange(4, 'annual')} >
        Annual
      </Button>
      <Button value="perpetual" variant="outline" onClick={() => handlePlanChange(4, 'perpetual')} >
        Perpetual
      </Button>
    </div>
  </CardContent>
  <CardFooter className="block text-center">
  <div >
  <h4 className="scroll-m-20 text-xl font-semibold tracking-tight pt-3 pb-6 text-gray-600">
  <span className="text-2xl text-blue-400">QAR{plan4 === 'annual' ? annualamount4 : perpetualamount4}</span>/month/dev
    </h4>
    <p className="leading-1 text-gray-600">
      Billed {plan4 === 'annual' ? 'annually at '+annualamount4+' /dev.' : 'monthly at '+perpetualamount4+' /dev.'}
    </p>
    <Button className="mt-4 inline-block" 
    onClick={() => handleBuy({ 
      product: product4, 
      description: description4,
      amount: plan4 === 'annual' ? annualamount4 : perpetualamount4,
      amountType: plan4 === 'annual' ? 'Annual' : 'Perpetual', })}>
      Buy Now
    </Button>
  </div>
  </CardFooter>
</Card>
      </div>
      </div>
      <div>

      </div>
      <div className="w-full flex justify-center h-10  items-center">
      <h3 className="text-2xl text-600 mb-5 " style={{ height: '0px' }}>
          {itemname2}
        </h3>
      </div>
      <div className="flex justify-center">
      <div className="pl-7  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2   gap-4  justify-center items-center">
     

<Card className="w-[250px] h-[330px] flex flex-col justify-center items-center">
  <CardHeader>
    <CardTitle>{raw1}</CardTitle>
    <CardDescription>{rawdescription1}</CardDescription>
  </CardHeader>
  <CardContent>
    <div>
      <Button value="annual" variant="outline" onClick={() => handlePlanChange(5, 'annual')} >
        Annual
      </Button>
      <Button value="perpetual" variant="outline" onClick={() => handlePlanChange(5, 'perpetual')} >
        Perpetual
      </Button>
    </div>
  </CardContent>
  <CardFooter className="block text-center">
  <div >
  <h4 className="scroll-m-20 text-xl font-semibold tracking-tight pt-3 pb-6 text-gray-600">
    <span className=" text-2xl text-blue-400">QAR{plan5 === 'annual' ? annualamountraw1 : perpetualamountraw1}</span>/month/dev
    </h4>
    <p className="leading-1 text-gray-600">
      Billed {plan5 === 'annual' ? 'annually at '+annualamountraw1+' /dev.' : 'monthly at '+perpetualamountraw1+' /dev.'}
    </p>
    <Button className="mt-4 inline-block" onClick={() => handleBuy({ 
      product: raw1, 
      description: rawdescription1,
      amount: plan5 === 'annual' ? annualamountraw1 : perpetualamountraw1,
      amountType: plan5 === 'annual' ? 'Annual' : 'Perpetual', })}>
      Buy Now
    </Button>
  </div>
    
  </CardFooter>
  
</Card>

<Card className="w-[250px] h-[330px] flex flex-col justify-center items-center">
  <CardHeader>
    <CardTitle>{raw2}</CardTitle>
    <CardDescription>{rawdescription2}</CardDescription>
  </CardHeader>
  <CardContent>
    <div>
      <Button value="annual" variant="outline" onClick={() => handlePlanChange(6, 'annual')} >
        Annual
      </Button>
      <Button value="perpetual" variant="outline" onClick={() => handlePlanChange(6, 'perpetual')} >
        Perpetual
      </Button>
    </div>
  </CardContent>
  <CardFooter className="block text-center">
  <div >
  <h4 className="scroll-m-20 text-xl font-semibold tracking-tight pt-3 pb-6 text-gray-600">
  <span className="text-2xl text-blue-400">QAR{plan6 === 'annual' ? annualamountraw2 : perpetualamountraw2}</span>/month/dev
    </h4>
    <p className="leading-1 text-gray-600">
      Billed {plan6 === 'annual' ? 'annually at '+annualamountraw2+' /dev.' : 'monthly at '+perpetualamountraw2+' /dev.'}
    </p>
    <Button className="mt-4 inline-block" 
    onClick={() => handleBuy({ 
      product: raw2, 
      description: rawdescription2,
      amount: plan6 === 'annual' ? annualamountraw2 : perpetualamountraw2,
      amountType: plan6 === 'annual' ? 'Annual' : 'Perpetual', })}>
      Buy Now
    </Button>
  </div>
  </CardFooter>
</Card>
      </div>
      </div>
      <div>

      </div>
      <div className="w-full flex justify-center h-10  items-center">
      <h3 className="text-2xl text-600 mb-5 " style={{ height: '0px' }}>
          {itemname3}
        </h3>
      </div>
      <div className="flex justify-center">
      <div className="pl-7 grid grid-cols-1  gap-4  justify-center items-center">
     

<Card className="w-[250px] h-[330px] flex flex-col justify-center items-center">
  <CardHeader>
    <CardTitle>{service}</CardTitle>
    <CardDescription>{servicedescription}</CardDescription>
  </CardHeader>
  <CardContent>
    <div>
      <Button value="annual" variant="outline" onClick={() => handlePlanChange(7, 'annual')} >
        Annual
      </Button>
      <Button value="perpetual" variant="outline" onClick={() => handlePlanChange(7, 'perpetual')} >
        Perpetual
      </Button>
    </div>
  </CardContent>
  <CardFooter className="block text-center">
  <div >
  <h4 className="scroll-m-20 text-xl font-semibold tracking-tight pt-3 pb-6 text-gray-600">
    <span className=" text-2xl text-blue-400">QAR{plan7 === 'annual' ? annualamountservice : perpetualamountservice}</span>/month/dev
    </h4>
    <p className="leading-1 text-gray-600">
      Billed {plan7 === 'annual' ? 'annually at '+annualamountservice+' /dev.' : 'monthly at '+perpetualamountservice+' /dev.'}
    </p>
    <Button className="mt-4 inline-block" 
    onClick={() => handleBuy({ 
      product: service, 
      description: servicedescription,
      amount: plan7 === 'annual' ? annualamountservice : perpetualamountservice,
      amountType: plan7 === 'annual' ? 'Annual' : 'Perpetual', })}>
      Buy Now
    </Button>
  </div>
    
  </CardFooter>
  
</Card>

      </div>
      </div>
      <div>

      </div>
      <div style={{marginLeft:'30px'}}>
      <About/>
      <Questions/>
      <Comments/>
      </div>
      <Footer/>
      
    </main>
  );
};

export default MainHome;
