export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  content?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'How to Register Your Business with CAC in Nigeria',
    excerpt: 'A step-by-step guide to registering your business name, LLC, or NGO with the Corporate Affairs Commission.',
    date: '2025-09-21',
    author: 'Ezinne Okoro',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80',
    content: `Registering your business with the Corporate Affairs Commission (CAC) is a crucial step for any entrepreneur in Nigeria. In this guide, we'll walk you through the process, requirements, and tips to ensure a smooth registration experience.\n\n1. Choose your business structure (Business Name, LLC, NGO, etc.)\n2. Prepare necessary documents and information.\n3. Submit your application online or at a CAC office.\n4. Pay the required fees and await approval.\n5. Receive your registration certificate and start operating legally.\n\nLotopital Consult offers expert support to help you every step of the way.`
  },
  {
    id: '2',
    title: 'Annual Returns: What Every Nigerian Business Owner Should Know',
    excerpt: 'Learn why annual returns matter, how to file them, and avoid common compliance mistakes.',
    date: '2025-08-15',
    author: 'Chinedu Umeh',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
    content: `Annual returns are a legal requirement for all registered businesses in Nigeria. Filing on time helps you avoid penalties and maintain compliance.\n\n- Know your deadlines.\n- Gather necessary financial records.\n- File online or through a CAC-accredited agent.\n- Keep proof of submission for your records.\n\nLotopital Consult can help you file annual returns quickly and accurately.`
  },
  {
    id: '3',
    title: 'Trademark Registration: Protecting Your Brand in Nigeria',
    excerpt: 'Understand the importance of trademark registration and how Lotopital Consult can help you secure your brand.',
    date: '2025-07-10',
    author: 'Fatima Bello',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    content: `Your brand is your identity. Trademark registration protects your business name, logo, and products from infringement.\n\n- Search for existing trademarks.\n- Prepare your application and supporting documents.\n- Submit to CAC and pay the fees.\n- Monitor your trademark status.\n\nLotopital Consult provides guidance and support for trademark registration.`
  },
  {
    id: '4',
    title: 'Top 5 Mistakes to Avoid When Registering Your Company',
    excerpt: 'Avoid costly errors and delays with these expert tips for a smooth CAC registration process.',
    date: '2025-06-05',
    author: 'Lotopital Team',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
    content: `Mistakes during company registration can lead to delays and extra costs.\n\n1. Incomplete documentation.\n2. Wrong business structure selection.\n3. Missed deadlines.\n4. Incorrect fee payments.\n5. Not seeking expert help.\n\nLotopital Consult helps you avoid these pitfalls for a seamless registration experience.`
  },
  {
    id: '5',
    title: 'NGO Registration: Requirements and Best Practices',
    excerpt: 'Everything you need to know to successfully register your non-profit organization in Nigeria.',
    date: '2025-05-01',
    author: 'Lotopital Team',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    content: `Registering an NGO in Nigeria requires careful planning and documentation.\n\n- Define your mission and objectives.\n- Prepare incorporation documents.\n- Submit to CAC and pay the fees.\n- Comply with ongoing reporting requirements.\n\nLotopital Consult supports NGOs through every step of the registration process.`
  },
];
