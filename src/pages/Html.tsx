import { getSubscription_or_invoice } from '@/Api Handle/Apis';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Html = () => {
  const selectedProduct = useSelector((state: any) => state.app.selectedProduct);
    const [status, setStatus] = useState<string | null>(null);
    const [transactionNumber, setTransactionNumber] = useState<string | null>(null);
    const [txnAmount, setTxnAmount] = useState<number | null>(null);
    const [grandTotal, setGrandTotal] = useState<number>(0);
    
    
    useEffect(() => {
        const getUrlParameters = () => {
            const searchParams = new URLSearchParams(window.location.search);
            setStatus(searchParams.get('status'));
            setTransactionNumber(searchParams.get('transaction_number'));
            // Convert txnAmount to a number or default to 0 if it's null
            setTxnAmount(Number(searchParams.get('txnamount')) || 50);
        };
        getUrlParameters();
    }, []);

    useEffect(() =>{
        const fetchData = async () => {
            try {
                // Ensure txnAmount is not null when calling the function
                if (txnAmount !== null) {
                    const items = await getSubscription_or_invoice(txnAmount);
                    console.log("message:",items.data.data.message);
                    console.log("invoice_details",items.data.data.invoice_details);
                    console.log("Total",items.data.data.invoice_details.grand_total);
                    console.log("customerid",items.data.data.invoice_details.customer_id);
                    console.log("id",items.data.data.invoice_details.id);
                    console.log("item",items.data.data.invoice_details.items[0]);
                    setGrandTotal(items.data.data.invoice_details.grand_total);
                }
            } catch (error) {
                console.error('Error getting items', error);
            }
        };
        fetchData();
    }, [txnAmount]);

    return (
        <div className='p-10'>
            <h1>Payment Details</h1>
            <div>
                <p>Status: {status}</p>
                <p>Transaction Number: {transactionNumber}</p>
                <p>Transaction Amount: {txnAmount}</p>
            </div>
            <div>
              <h1>Inovice</h1>
              <p>{grandTotal}</p>
              <p>{selectedProduct.product}</p>
            </div>
        </div>
    );
};

export default Html;
