interface Contact {
  dateCreated: Date;
  dateUpdated?: Date;
  address?: string;
  location?: string;
  postcode?: string;
  phoneDefault?: string;
  phoneOptional?: string;
  email?: string;
  bankAccountIban?: string;
  bankAccountOwnerName?: string;
  notes?: string;

  name: string;
  id: number;
  condominiumId: number;
}
