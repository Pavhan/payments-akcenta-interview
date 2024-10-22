import { PAYMENT_STATUSES } from '@data/constants';
import { CheckIcon, ClockIcon, XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';


export default function PaymentStatus({ status }: { status: keyof typeof PAYMENT_STATUSES }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full pl-4 pr-2 py-1 text-sm gap-2',
        {
          'bg-gray-100 text-gray-500': status === 'PENDING',
          'bg-green-500 text-white': status === 'SUCCESS',
          'bg-red-500 text-white': status === 'CANCELED',
        },
      )}
    >
      {status === 'PENDING' ? (
        <>
          Pending
          <ClockIcon className="size-4 text-gray-500" />
        </>
      ) : null}
      {status === 'SUCCESS' ? (
        <>
          Paid
          <CheckIcon className="size-4 text-white" />
        </>
      ) : null}
         {status === 'CANCELED' ? (
        <>
          Canceled
          <XMarkIcon className="size-4 text-white" />
        </>
      ) : null}
    </span>
  );
}
