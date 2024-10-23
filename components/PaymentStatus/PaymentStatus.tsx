import { PAYMENT_STATUSES } from '@data/constants';
import { CheckIcon, ClockIcon, XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function PaymentStatus({ status }: { status: keyof typeof PAYMENT_STATUSES | unknown }) {
  return (
    <span
      className={clsx(
        'inline-flex w-28 items-center rounded-full justify-center pl-4 pr-2 py-1 text-sm gap-2',
        {
          'bg-gray-300 text-gray-700': status === 'PENDING',
          'bg-green-500 text-white': status === 'SUCCESS',
          'bg-red-500 text-white': status === 'CANCELED',
        },
      )}
    >
      {status === 'PENDING' ? (
        <>
          {PAYMENT_STATUSES[status]}
          <ClockIcon className="size-4 text-gray-500" />
        </>
      ) : null}
      {status === 'SUCCESS' ? (
        <>
          {PAYMENT_STATUSES[status]}
          <CheckIcon className="size-4 text-white" />
        </>
      ) : null}
      {status === 'CANCELED' ? (
        <>
          {PAYMENT_STATUSES[status]}
          <XMarkIcon className="size-4 text-white" />
        </>
      ) : null}
    </span>
  );
}
