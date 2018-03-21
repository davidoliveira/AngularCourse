interface Payment {
  description: string;
  amount: number;
  attachment?: string;
  dateOfPayment: Date;
  dateCreated: Date;
  dateUpdated: Date;
  id: number;
  condominiumId: number;
  contactFromId: number;
  contactToId: number;
  paymentCategoryId: number;
}
