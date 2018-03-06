interface Payment {
  description: string;
  amount: number;
  attachment?: any;
  dateOfPayment: string;
  dateCreated: string;
  dateUpdated?: any;
  id: number;
  condominiumId: number;
  contactFromId: number;
  contactToId: number;
}
