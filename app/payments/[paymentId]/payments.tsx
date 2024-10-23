import { IPayment } from "@data/types";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { PAYMENT_TYPES } from "@data/constants";
import PaymentStatus from "@components/PaymentStatus/PaymentStatus";
import { formatCurrency, formatDateToLocal } from "@lib/utils";

interface IPaymentProps {
  payment: IPayment;
}

export default function Payment({payment}: IPaymentProps) {
  return (
    <>
      <p className="mb-10">
        <Link href="/" className="flex gap-2 items-center">
          <ArrowLeftIcon className="size-4"/>Back to list of payments</Link>
      </p>
      <div className="flex justify-between items-center gap-5 mb-6 flex-wrap">
        <h2 className="text-2xl font-bold flex items-center gap-4">Payment details #{payment.paymentId}</h2>
        <PaymentStatus status={payment.status} />
      </div>
      <div className="rounded-md bg-gray-200 p-6">
        <ul className="grid gap-2">
        <li className="flex gap-4 items-center">
            <strong className="block w-20 flex-shring-0 font-bold text-sm">Amount:</strong>
            <strong className="text-xl">{formatCurrency(payment.amount, payment.currency)}</strong>
          </li>
          <li className="flex gap-4 items-center">
            <strong className="block w-20 flex-shring-0 font-bold text-sm">Date:</strong>
            <span>{formatDateToLocal(payment.timestamp)}</span>
          </li>
          <li className="flex gap-4 items-center">
            <strong className="block w-20 flex-shring-0 font-bold text-sm">Paid by:</strong>
            <span>{PAYMENT_TYPES[payment.paymentType]}</span>
          </li>
        </ul>
      </div>
    </>
  );
}
