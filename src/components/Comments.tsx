import { getFeedback } from "@/Api Handle/Apis";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button"


const Comments = () => {
  const [comments , setComments] = useState<string>();
    const [name, setName] = useState<string>();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const feedback = await getFeedback();
                console.log(feedback.data.message[0].name);
                console.log(feedback.data.message[0].description);
                setComments(feedback.data.message[0].description);      
                setName(feedback.data.message[0].name);         
              } catch (error) {
                console.error('Error getting feedback', error);
                return;
              }
        };
        fetchData();
      }, []);
  return (
    <div className="pt-20 pb-10 mr-20">
      <h4 className="text-blue-400">Join the community</h4>
      <h2 className=" scroll-m-20  pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
      Supported by thousands of <br />
       <span className="text-blue-400">developers and designers</span>
      </h2>
  <div className="mt-5 block border rounded-md ">
    <div className="border-b py-3 md:block lg:flex  gap-20 justify-center">

      <div className="sm:block md:flex">
      <div>
      <h1 className="scroll-m-20 text-blue-400 text-4xl font-bold tracking-tight lg:text-4xl">
        5.8M <br />
      </h1>
      <p className="text-gray-400">Weekly downloads on npm</p>
      </div>
      <div>
      <h1 className="scroll-m-20 text-blue-400 text-4xl font-bold tracking-tight lg:text-4xl">
        90.5k <br />
      </h1>
      <p className="text-gray-400">Stars on GitHub</p>
      </div>
      </div>

      <div className="sm:block md:flex">
      <div>
      <h1 className="scroll-m-20 text-blue-400 text-4xl font-bold tracking-tight lg:text-4xl">
        2.9k <br />
      </h1>
      <p className="text-gray-400">Open-source contributors</p>
      </div>
      <div>
      <h1 className="scroll-m-20 text-blue-400 text-4xl font-bold tracking-tight lg:text-4xl">
        18.9k <br />
      </h1>
      <p className="text-gray-400">Followers on X</p>
      </div>
      </div>
   
    
    </div>

    <div className="sm:block lg:flex border-b justify-center">
      <div className="sm:border-b  md:border-b lg:border-r block p-5">
        <p>{comments}</p>
        <p className="font-bold">-{name}</p>
      </div>
      <div className="p-5">
      <p>{comments}</p>
        <p className="font-bold">-{name}</p>
      </div>
    </div>
    <div className="sm:block lg:flex  border-b justify-center">
      <div className="sm:border-b md:border-b lg:border-r block p-5">
        <p>{comments}</p>
        <p className="font-bold">-{name}</p>
      </div>
      <div className="p-5">
      <p>{comments}</p>
        <p className="font-bold">-{name}</p>
      </div>
    </div>
  </div>

  <div className="flex justify-center pt-40 ">
  <div className="block text-center">
    <h6 className="text-blue-400 text-md font-bold">Start now</h6>
    <h1 className="text-3xl font-bold">Ship your next project <span className="text-blue-400">faster</span></h1>
    <p className="text-gray-400">Find out why MUI's tools are trusted by thousands of open-source 
    <br /> developers and teams around the world.</p>
    <Button className="mt-2">Discover the Core Libraries</Button>
  </div>
</div>

</div>

  )
}

export default Comments