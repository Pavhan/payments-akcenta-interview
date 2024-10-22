
import { IPayment } from '@data/types';
import { notFound } from 'next/navigation'
import Payment from './payments';


export default async function PaymentPage({params}: {params: {paymentId: string}}) {
  const { paymentId } = await params;
  
  if(isNaN(parseInt(paymentId))) {
    throw new Error('Invalid Payment ID');
  }

  if( typeof process.env.FETCH_URL !== "string" ){
    throw new Error('Please set you FETCH_URL in .env.local');
  }

  const paymentsResult: IPayment[] = await fetch(process.env.FETCH_URL)
  .then(response => response.json());

  const payment = paymentsResult.find(payment => payment.paymentId === paymentId);

  if(!payment) {
    notFound()
  }

  return <Payment payment={payment} />
}
