export const PAYMENT_STATUSES = {
  'PENDING': 'Pending',
  'SUCCESS': 'Success',
  'CANCELED': 'Canceled',
}

export const PAYMENT_TYPES =   {
  'BANK_TRANSFER': 'Bank Transfer', 
  'APPLE_PAY': 'Apply Pay', 
  'GOOGLE_PAY': 'Google Pay',
  'CARD_ONLINE': 'Card Online',
};

export const CURRENCY = {
  'USD': 'en-US',
  'EUR': 'en-GB',
  'CZK': 'cs-CZ',
  'HUF': 'hu-HU',
} as const;
