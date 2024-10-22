import { PAYMENT_STATUSES, PAYMENT_TYPES } from "@data/constatns";
import { IPayment } from "@data/types";


export default async function Payments() {

  if( typeof process.env.FETCH_URL !== "string" ){
    throw new Error('Please set you FETCH_URL in .env.local');
  }
  
  const paymentsResult: IPayment[] = await fetch(process.env.FETCH_URL)
  .then(response => response.json())
          
  return (
    <>
    <h1 className="text-4xl font-bold">Payments</h1>
    <table>
      <thead>
        <tr>
          <th>Payment ID</th>
          <th>Timestamp</th>
          <th>Amount</th>
          <th>Currency</th>
          <th>Payment Type</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {paymentsResult.map(({paymentId, timestamp, amount, currency, paymentType, status}) => (
          <tr key={paymentId}>
            <td>{paymentId}</td>
            <td>{new Date(timestamp).toDateString()}</td>
            <td>{amount}</td>
            <td>{currency}</td>
            <td>{PAYMENT_TYPES[paymentType]}</td>
            <td>{PAYMENT_STATUSES[status]}</td>
          </tr>
        ))}
      </tbody>
      </table>
    </>
  );
} 

