import { PAYMENT_STATUSES, PAYMENT_TYPES } from "@data/constants";
import { IPayment } from "@data/types";
import Link from "next/link";
import Payments from "./payments";


export default async function PaymentsPage() {

  if( typeof process.env.FETCH_URL !== "string" ){
    throw new Error('Please set you FETCH_URL in .env.local');
  }
  
  const paymentsResult: IPayment[] = await fetch(process.env.FETCH_URL).then(response => response.json())
          
  return (
    <>
      <Payments payments={paymentsResult} />
    </>
  );
} 

