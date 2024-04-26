import { getCoupen, tokenGenerated } from "@/Api Handle/Apis";
import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { setCouponPercent } from "@/store/Actions";

const Coupen = () => {
  const dispatch = useDispatch();
  
  const [coupen, setCoupen] = useState<string>("");

  const handleSubmit = async () => {
    await tokenGenerated();
    try {
      const Discount = await getCoupen(coupen);
      if (Discount) {
        toast("Coupon applied successfully");
        console.log('test', coupen)
        const percent = Discount.data.message[0].custom_discount_percentage;
        dispatch(setCouponPercent(percent));
      }
    } catch (error) {
      toast("Error applying coupon");
      console.error('Error fetching Coupon:', error);
    }
  };

  return (
    <div className="ml-5 flex gap-5">
      <Input className=" w-[200px]" type="text" placeholder="Coupen Code"  value={coupen} 
            onChange={(e) => setCoupen(e.target.value)}/>
      <Button onClick={handleSubmit}>Apply</Button>
    </div>
  );
};

export default Coupen;
