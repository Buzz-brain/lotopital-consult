import {
  NameSearchResponse,
  ReservationResponse,
  ApplicationResponse,
  TrackingResponse,
  RegistrationData,
} from '../types';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const mockApplications: Record<string, TrackingResponse> = {
  'APP-2025-001': {
    applicationId: 'APP-2025-001',
    businessName: 'Tech Innovations Ltd',
    serviceType: 'Limited Liability Company',
    currentStatus: 'approved',
    submittedDate: '2025-10-01',
    statusTimeline: [
      {
        status: 'submitted',
        date: '2025-10-01',
        description: 'Application submitted successfully',
      },
      {
        status: 'processing',
        date: '2025-10-02',
        description: 'Application under review by CAC',
      },
      {
        status: 'approved',
        date: '2025-10-04',
        description: 'Application approved. Certificate ready for download',
      },
    ],
  },
  'APP-2025-002': {
    applicationId: 'APP-2025-002',
    businessName: 'Sample Business Name',
    serviceType: 'Business Name Registration',
    currentStatus: 'processing',
    submittedDate: '2025-10-03',
    statusTimeline: [
      {
        status: 'submitted',
        date: '2025-10-03',
        description: 'Application submitted successfully',
      },
      {
        status: 'processing',
        date: '2025-10-04',
        description: 'Application under review by CAC',
      },
    ],
  },
};

export const mockAPI = {
  searchName: async (name: string): Promise<NameSearchResponse> => {
    await delay(1000);

    const unavailableNames = ['lotopital', 'google', 'microsoft', 'apple'];
    const isAvailable = !unavailableNames.some((unavailable) =>
      name.toLowerCase().includes(unavailable)
    );

    return {
      available: isAvailable,
      suggestions: isAvailable
        ? []
        : [`${name} Global`, `${name} NG`, `${name} Solutions`],
    };
  },

  reserveName: async (name: string): Promise<ReservationResponse> => {
    await delay(800);

    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 60);

    return {
      reservationId: `RES-${Date.now()}`,
      expiresAt: expiresAt.toISOString().split('T')[0],
    };
  },

  submitRegistration: async (
    data: RegistrationData
  ): Promise<ApplicationResponse> => {
    await delay(1500);

    const applicationId = `APP-2025-${String(Math.floor(Math.random() * 1000)).padStart(3, '0')}`;

    mockApplications[applicationId] = {
      applicationId,
      businessName: data.businessName,
      serviceType: data.serviceType,
      currentStatus: 'submitted',
      submittedDate: new Date().toISOString().split('T')[0],
      statusTimeline: [
        {
          status: 'submitted',
          date: new Date().toISOString().split('T')[0],
          description: 'Application submitted successfully',
        },
      ],
    };

    return {
      applicationId,
      status: 'pending',
    };
  },

  trackApplication: async (id: string): Promise<TrackingResponse> => {
    await delay(800);

    const application = mockApplications[id];

    if (!application) {
      throw new Error('Application not found');
    }

    return application;
  },
};
