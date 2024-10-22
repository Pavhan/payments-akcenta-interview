import { CURRENCY, PAYMENT_STATUSES, PAYMENT_TYPES } from "@data/constants";

export interface IPayment {
  paymentId: string,
  timestamp: number,
  amount: number,
  currency: keyof typeof CURRENCY,
  paymentType: keyof typeof PAYMENT_TYPES,
  status: keyof typeof PAYMENT_STATUSES,
}