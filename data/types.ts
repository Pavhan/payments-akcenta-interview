import { PAYMENT_STATUSES, PAYMENT_TYPES } from "@data/constatns";

export interface IPayment {
  paymentId: string,
  timestamp: number,
  amount: number,
  currency: 'USD' | 'EUR' | 'CZK' | 'HUF',
  paymentType: keyof typeof PAYMENT_TYPES,
  status: keyof typeof PAYMENT_STATUSES,
}