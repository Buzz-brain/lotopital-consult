export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  icon: string;
}

export interface NameSearchResponse {
  available: boolean;
  suggestions?: string[];
}

export interface ReservationResponse {
  reservationId: string;
  expiresAt: string;
}

export interface RegistrationData {
  serviceType: string;
  businessName: string;
  address: string;
  email: string;
  phone: string;
  businessType: string;
  directorName: string;
  directorNIN: string;
  directorPhone: string;
  idType: string;
  documents?: File[];
}

export interface ApplicationResponse {
  applicationId: string;
  status: string;
}

export interface StatusUpdate {
  status: string;
  date: string;
  description: string;
}

export interface TrackingResponse {
  applicationId: string;
  businessName: string;
  serviceType: string;
  currentStatus: string;
  statusTimeline: StatusUpdate[];
  submittedDate: string;
}
