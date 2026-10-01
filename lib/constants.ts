export const DASHBOARD_URL = 'https://dashboard.modulor.co.ke/';
export const LOGIN_URL = 'https://dashboard.modulor.co.ke/login';
export const WHATSAPP_PHONE = '0114116265';
export const WHATSAPP_URL = 'https://wa.me/254114116265';
export const SUPPORT_EMAIL = 'joelconrad277@gmail.com';

export interface ModulorApp {
  id: string;
  name: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  headline: string;
  priceKes: number;
  status: 'available' | 'coming_soon';
  badge: 'Available' | 'Coming Soon';
  features: string[];
}

export const MODULOR_APPS: ModulorApp[] = [
  {
    id: 'crm',
    name: 'CRM',
    category: 'Client & Sales',
    shortDescription: 'Manage clients, leads, and your sales pipeline.',
    fullDescription: 'Never lose track of a client or lead again. Visual sales pipeline, follow-up reminders, and complete relationship history connected to your billing.',
    headline: 'Never lose track of a client or lead again.',
    priceKes: 300,
    status: 'available',
    badge: 'Available',
    features: [
      'Manage all your clients and leads in one place',
      'Visual sales pipeline — move deals from lead to closed',
      'Follow-up reminders so nothing falls through',
      'Full client history — notes, deals, invoices',
      'Connect directly to Invoicing and Projects',
    ],
  },
  {
    id: 'invoicing',
    name: 'Invoicing',
    category: 'Finance & Payments',
    shortDescription: 'Create invoices, send quotes, track payments.',
    fullDescription: 'Send professional invoices and quotes in seconds. Receive payments via M-Pesa or card with instant receipting and automated reminders.',
    headline: 'Send professional invoices and get paid faster.',
    priceKes: 400,
    status: 'available',
    badge: 'Available',
    features: [
      'Create invoices and quotes in seconds',
      'Branded PDF invoices with your logo',
      'M-Pesa and card payment support',
      'Track payment status — draft, sent, paid, overdue',
      'Connect invoices directly to CRM clients',
      'Multi-currency support — KES and USD',
    ],
  },
  {
    id: 'projects',
    name: 'Projects & Tasks',
    category: 'Execution',
    shortDescription: 'Manage work with projects, tasks, and deadlines.',
    fullDescription: 'Keep deliverables organized with intuitive Kanban boards, milestones, and client attachments linked directly to billing and deliverables.',
    headline: 'Keep your work organized and your clients happy.',
    priceKes: 300,
    status: 'available',
    badge: 'Available',
    features: [
      'Kanban board for visual task tracking',
      'Organize work into projects with deadlines',
      'Assign tasks and track progress',
      'Connect projects to clients and invoices',
      'Never miss a deliverable',
    ],
  },
  {
    id: 'calendar',
    name: 'Calendar & Scheduling',
    category: 'Productivity',
    shortDescription: 'Book meetings and manage your availability.',
    fullDescription: 'Stop the back-and-forth WhatsApp scheduling. Share your custom booking link, set working hours, and sync meetings directly into CRM records.',
    headline: 'Stop the back-and-forth scheduling.',
    priceKes: 300,
    status: 'coming_soon',
    badge: 'Coming Soon',
    features: [
      'Share a booking link with clients',
      'Set your availability once',
      'Clients book directly without WhatsApp back-and-forth',
      'Connects to your CRM contacts',
      'Automated meeting reminders',
    ],
  },
  {
    id: 'documents',
    name: 'Documents',
    category: 'Content & Files',
    shortDescription: 'Create, store, and share business documents.',
    fullDescription: 'Create and organize contracts, proposals, scope documents, and client files directly attached to projects and CRM records.',
    headline: 'Create and store your business documents in one place.',
    priceKes: 300,
    status: 'coming_soon',
    badge: 'Coming Soon',
    features: [
      'Create, edit, and share documents',
      'Store files linked to clients and projects',
      'Access everything from your workspace',
      'Client proposal templates',
      'Secure PDF downloads',
    ],
  },
];
