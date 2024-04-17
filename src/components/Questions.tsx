import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  import {
    Card,
  } from "@/components/ui/card"
  
  const Questions = () => {
    return (
      <div>
        <h1 className="scroll-m-20 pb-9 text-4xl font-bold tracking-tight lg:text-4xl">
          Frequently asked questions
        </h1>

        <div className="flex gap-6">
        <div className="flex flex-col gap-3">
        <Card className="w-[350px] flex flex-col justify-center ">
            <Accordion type="single" collapsible className="w-[350px] ">
            <AccordionItem value="item-1">
              <AccordionTrigger><p className=" text-sm">Is it accessible?</p></AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          </Card>
    
          <Card className="w-[350px] flex flex-col justify-center ">
            <Accordion type="single" collapsible className="w-[350px] ">
            <AccordionItem value="item-1">
              <AccordionTrigger><p className=" text-sm">How do I know if I need to buy a license?</p></AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          </Card>
        
          <Card className="w-[350px] flex flex-col justify-center ">
            <Accordion type="single" collapsible className="w-[350px] ">
            <AccordionItem value="item-1">
              <AccordionTrigger><p className=" text-sm">How many developer licenses do I need?</p></AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          </Card>
          
          <Card className="w-[350px] flex flex-col justify-center ">
            <Accordion type="single" collapsible className="w-[350px] ">
            <AccordionItem value="item-1">
              <AccordionTrigger><p className=" text-sm">Am I allowed to use the product after the update entitlement expires?</p></AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          </Card>
        </div>
        <div className="flex flex-col gap-3">
        <Card className="w-[350px] flex flex-col justify-center ">
            <Accordion type="single" collapsible className="w-[350px] ">
            <AccordionItem value="item-1">
              <AccordionTrigger><p className=" text-sm">How to remove the “unlicensed” watermark?</p></AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          </Card>
    
          <Card className="w-[350px] flex flex-col justify-center ">
            <Accordion type="single" collapsible className="w-[350px] ">
            <AccordionItem value="item-1">
              <AccordionTrigger><p className=" text-sm">Why are you calling it early access?</p></AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          </Card>
        
          <Card className="w-[350px] flex flex-col justify-center ">
            <Accordion type="single" collapsible className="w-[350px]">
            <AccordionItem value="item-1">
              <AccordionTrigger><p className=" text-sm">Do developers have to be named?</p></AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          </Card>

          <Card className="w-[350px] flex flex-col justify-center">
            <Accordion type="single" collapsible className="w-[350px] ">
            <AccordionItem value="item-1">
              <AccordionTrigger><p className=" text-sm">What is the update policy on redistributing the software?</p></AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          </Card>
        </div>
        <div className="flex flex-col gap-3">
        <Card className="w-[350px] flex flex-col justify-center ">
          <Accordion type="single" collapsible className="w-[350px] ">
            <AccordionItem value="item-1">
              <AccordionTrigger><p className=" text-sm">Do you offer discounts to educational and non-profit organizations?</p></AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          </Card>
    
          <Card className="w-[350px] flex flex-col justify-center ">
            <Accordion type="single" collapsible className="w-[350px] ">
            <AccordionItem value="item-1">
              <AccordionTrigger><p className=" text-sm">Got any questions unanswered or need help?</p></AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          </Card>

          <Card className="w-[350px] flex flex-col justify-center ">
          <Accordion type="single" collapsible className="w-[350px] ">
            <AccordionItem value="item-1">
              <AccordionTrigger> <p className=" text-sm">Email us at sales@mui.com for sales-related</p>
         </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
  </Card>
        
        </div>
        </div>
      </div>
    );
  };
  
  export default Questions;
  