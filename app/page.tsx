import { IPayment } from "@data/types";
import PaymentsTable from "@components/PaymentsTable/PaymentsTable";

export default async function PaymentsPage() {

  if( typeof process.env.FETCH_URL !== "string" ){
    throw new Error('Please set you FETCH_URL in .env.local');
  }
  
  const paymentsResult: IPayment[] = await fetch(process.env.FETCH_URL).then(response => response.json());

  return <PaymentsTable data={paymentsResult} />;
} 

