import PaymentStatus from "@components/PaymentStatus/PaymentStatus";
import { PAYMENT_TYPES } from "@data/constants";
import { IPayment } from "@data/types";
import { formatDateToLocal } from "@lib/utils";
import Link from "next/link";

export default function Payments({payments}: {payments: IPayment[]}) {
  return (
    <>
    <h1 className="text-4xl font-bold mb-6">Payments</h1>
      <div className="rounded-lg bg-gray-50 p-2 overflow-auto">
        <table className="min-w-full text-gray-900">
          <thead className="rounded-lg text-left text-sm font-normal">
            <tr>
              <th scope="col" className="px-4 py-5">
                ID
              </th>
              <th scope="col" className="px-2 py-5">
                Date
              </th>
              <th scope="col" className="px-2 py-5 text-center">
                Amount
              </th>
              <th scope="col" className="px-2 py-5 text-center">
                Currency
              </th>
              <th scope="col" className="px-2 py-5 text-center">
                Type
              </th>
              <th scope="col" className="px-2 py-5 text-center">
                Status
              </th>
              <th scope="col" className="relative py-3 pl-2">
                Detail
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {payments?.map(({paymentId, timestamp, amount, currency, paymentType, status}) => (
              <tr
                key={paymentId}
                className="border-b border-gray-200 py-2 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
              >
                <td className="whitespace-nowrap py-3 pl-6 pr-2">                    
                    {paymentId}
                </td>
                <td className="whitespace-nowrap px-2 py-3">
                  {formatDateToLocal(timestamp)}
                </td>
                <td className="whitespace-nowrap px-2 py-3 text-center">
                  {amount}
                </td>
                <td className="whitespace-nowrap px-2 py-3 text-center">
                  {currency}
                </td>
                <td className="whitespace-nowrap px-2 py-3 text-center">
                  {PAYMENT_TYPES[paymentType]}
                </td>
                <td className="whitespace-nowrap px-2 py-3 text-center">
                  <PaymentStatus status={status} />
                </td>
                <td className="whitespace-nowrap px-2 py-3">
                  <Link href={`payments/${paymentId}`} className="rounded-md bg-blue-500 block text-center px-4 font-bold py-2 text-sm text-white transition-colors hover:bg-blue-800">
                    Detail
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
} 

