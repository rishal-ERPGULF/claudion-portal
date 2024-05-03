
import { createPayment } from '@/Api Handle/Apis';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const Html = () => {
    const [status, setStatus] = useState<string | null>(null);
    const [orderId, setOrderId] = useState<string| null>(null);;
    const [transactionNumber, setTransactionNumber] = useState<string | null>(null);
    const [amount, setTxnAmount] = useState<number | null>(null);
    
    useEffect(() => {
        const getUrlParameters = () => {
            const searchParams = new URLSearchParams(window.location.search);
            setStatus(searchParams.get('status'));
            setTransactionNumber(searchParams.get('transaction_number'));
            setTxnAmount(Number(searchParams.get('txnamount')) || 50);
            setOrderId(searchParams.get('order_id'|| ''));
        };
        getUrlParameters();
    }, []);

    const handleSubmit  = async () => {
            try {
                // Providing default values using nullish coalescing operator
                const paymentDetails = await createPayment(amount ?? 0, status?? "", orderId ?? "" );
                console.log(paymentDetails.data.data);
            } catch (error) {
                console.error(error);
            }
        };
        

    return (
        <div className='mt-20 h-20 w-full flex justify-center  items-center'>
            <div>
                <h1 className='font-bold text-4xl'>Payment Details</h1>
                <div className=''>
                    <p>Status: {status}</p>
                    <p>Transaction Number: {transactionNumber}</p>
                    <p>Transaction Amount: {amount}</p>
                    <p>Order ID: {orderId}</p>
                    <Button className='mt-2 text-lg' onClick={handleSubmit}>Invoice</Button>
                </div>
            </div>
        </div>
    );
};

export default Html;
