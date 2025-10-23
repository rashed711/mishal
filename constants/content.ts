import type { Content } from '../types';

export const content: Record<'en' | 'ar', Content> = {
  en: {
    // Header
    topBar: {
      phone: '+966 123 456 789',
      email: 'info@mishal-lawfirm.com'
    },
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'Our Services',
      team: 'Our Team',
      articles: 'Articles',
      contact: 'Contact Us',
    },
    langSwitch: 'AR',
    // Hero
    hero: {
      title: 'Legal Counsel You Can Trust',
      subtitle: 'Providing expert legal solutions with integrity and professionalism.',
      cta: 'Request a Consultation'
    },
    // About
    about: {
      title: 'About Our Firm',
      subtitle: 'Decades of Combined Experience',
      content: 'Mishal Law Firm is a leading firm in the region, providing a comprehensive range of legal services to local and international clients. Our team is committed to delivering excellence and achieving the best possible outcomes for our clients.',
      cta: 'Learn More'
    },
    // Tabbed Services
    tabbedServices: {
      title: 'Explore Our Services',
      tabs: [
        {
          title: 'Judicial Services',
          icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 rtl:ml-2 rtl:mr-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>',
          services: [
            { title: 'Pleading and defense in all lawsuits', image: 'https://images.unsplash.com/photo-1505664194779-8beace7a2044' },
            { title: 'Objecting to judgments and appealing', image: 'https://images.unsplash.com/photo-1590212151094-159a0937a448' },
            { title: 'Implementing judicial rulings', image: 'https://images.unsplash.com/photo-1556155092-490a1ba16284' },
            { title: 'Arbitration and dispute resolution', image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0' },
            { title: 'Legal consultations', image: 'https://images.unsplash.com/photo-1554224154-260325c25768' },
            { title: 'Notarization of documents', image: 'https://images.unsplash.com/photo-1629079201533-5c5c1b6534b8' },
          ],
        },
        {
          title: 'Field of Judicial Work',
          icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 rtl:ml-2 rtl:mr-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>',
          services: [
            { title: 'Commercial and corporate cases', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f' },
            { title: 'Administrative and labor cases', image: 'https://images.unsplash.com/photo-1521791055366-0d553872125f' },
            { title: 'Real estate and rental disputes', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa' },
            { title: 'Personal status and inheritance cases', image: 'https://images.unsplash.com/photo-1551843132-f3ab66fe85c1' },
            { title: 'Intellectual property disputes', image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72' },
            { title: 'Criminal cases', image: 'https://images.unsplash.com/photo-1590099033282-e9a49445521b' },
          ],
        },
        {
          title: 'Legal Services',
          icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 rtl:ml-2 rtl:mr-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>',
          services: [
            { title: 'Drafting and reviewing contracts', image: 'https://images.unsplash.com/photo-1556742044-53c8536a4a69' },
            { title: 'Establishing companies and entities', image: 'https://images.unsplash.com/photo-1579389083046-e3df9c2b3325' },
            { title: 'Corporate governance', image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4be3' },
            { title: 'Legal due diligence', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40' },
            { title: 'Trademarks and patents registration', image: 'https://images.unsplash.com/photo-1579457463283-69038a8e246a' },
            { title: 'Legislative drafting', image: 'https://images.unsplash.com/photo-1423592707957-3b212afa3738' },
          ],
        },
        {
          title: 'Debt Collection Services',
          icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 rtl:ml-2 rtl:mr-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>',
          services: [
            { title: 'Amicable negotiation and settlement', image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173' },
            { title: 'Filing financial claims', image: 'https://images.unsplash.com/photo-1554224155-1696413565d3' },
            { title: 'Implementing bonds and checks', image: 'https://images.unsplash.com/photo-1633113089632-474d261a87e5' },
            { title: 'Bankruptcy and liquidation procedures', image: 'https://images.unsplash.com/photo-1591034239822-264663c8b4f7' },
            { title: 'Following up with debtors', image: 'https://images.unsplash.com/photo-1520607162513-77705c6f0d4a' },
            { title: 'Legal actions for collection', image: 'https://images.unsplash.com/photo-1589578233447-162b832815a4' },
          ],
        },
      ],
    },
    // Why Us
    whyUs: {
      title: 'Why Choose Us?',
      subtitle: 'Our Commitment to Excellence',
      content: 'We combine deep legal knowledge with a client-focused approach, ensuring personalized and effective representation.',
      points: [
        'Experienced & Dedicated Team',
        'Proven Track Record of Success',
        'Client-Centered Approach',
        'Strategic & Innovative Solutions'
      ]
    },
    // Team
    team: {
      title: 'Our Professional Team',
      members: [
        { name: 'Mishal Al-Otaibi', title: 'Founder & Senior Partner' },
        { name: 'Ahmed Abdullah', title: 'Partner, Corporate Law' },
        { name: 'Fatima Al-Fahad', title: 'Senior Associate, Litigation' },
        { name: 'Yousef Al-Mutairi', title: 'Associate, Real Estate' },
        { name: 'Khalid Al-Ghamdi', title: 'Legal Consultant' }
      ]
    },
    // Articles Placeholder
    articlesPlaceholder: {
        title: "Articles",
        subtitle: "Insights and legal analysis coming soon."
    },
    // Testimonials
    testimonials: {
        title: "What Our Clients Say",
        items: [
            { quote: "The team at Mishal Law Firm provided exceptional service. Their professionalism and attention to detail were outstanding.", name: "Global Corp Inc." },
            { quote: "I was highly impressed with their strategic approach and dedication. They achieved a fantastic result for our case.", name: "Sara K." },
        ]
    },
    // CTA
    cta: {
        title: "Need Expert Legal Advice?",
        subtitle: "Let's discuss how we can help you achieve your goals. Our team is ready to assist you with your legal needs.",
        button: "Contact Us Today"
    },
    // Footer
    footer: {
      about: "Mishal Law Firm is dedicated to providing top-tier legal services with a commitment to integrity, excellence, and client success.",
      quickLinks: "Quick Links",
      contactInfo: "Contact Info",
      socialTitle: "Follow Us",
      address: "1234 King Fahd Road, Riyadh, Saudi Arabia",
      copyright: `© ${new Date().getFullYear()} Mishal Law Firm. All Rights Reserved.`
    }
  },
  ar: {
    // Header
    topBar: {
      phone: '789 456 123 966+',
      email: 'info@mishal-lawfirm.com'
    },
    nav: {
      home: 'الرئيسية',
      about: 'عن الشركة',
      services: 'خدماتنا',
      team: 'فريق العمل',
      articles: 'مقالات',
      contact: 'اتصل بنا',
    },
    langSwitch: 'EN',
    // Hero
    hero: {
      title: 'استشارات قانونية يمكنك الوثوق بها',
      subtitle: 'نقدم حلولاً قانونية متخصصة بنزاهة واحترافية.',
      cta: 'اطلب استشارة'
    },
    // About
    about: {
      title: 'عن شركتنا',
      subtitle: 'عقود من الخبرة المشتركة',
      content: 'شركة مشعل للمحاماة هي شركة رائدة في المنطقة، تقدم مجموعة شاملة من الخدمات القانونية للعملاء المحليين والدوليين. يلتزم فريقنا بتقديم التميز وتحقيق أفضل النتائج الممكنة لعملائنا.',
      cta: 'اعرف المزيد'
    },
    // Tabbed Services
    tabbedServices: {
      title: 'استكشف خدماتنا',
      tabs: [
        {
          title: 'الخدمات القضائية',
          icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 rtl:ml-2 rtl:mr-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>',
          services: [
            { title: 'الترافع والمدافعة في كافة الدعاوى', image: 'https://images.unsplash.com/photo-1505664194779-8beace7a2044' },
            { title: 'الاعتراض على الأحكام والاستئناف', image: 'https://images.unsplash.com/photo-1590212151094-159a0937a448' },
            { title: 'تنفيذ الأحكام القضائية', image: 'https://images.unsplash.com/photo-1556155092-490a1ba16284' },
            { title: 'التحكيم وتسوية المنازعات', image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0' },
            { title: 'الاستشارات الشرعية والقانونية', image: 'https://images.unsplash.com/photo-1554224154-260325c25768' },
            { title: 'توثيق المحررات والعقود', image: 'https://images.unsplash.com/photo-1629079201533-5c5c1b6534b8' },
          ],
        },
        {
          title: 'مجال العمل القضائي',
          icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 rtl:ml-2 rtl:mr-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>',
          services: [
            { title: 'القضايا التجارية والشركات', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f' },
            { title: 'القضايا الإدارية والعمالية', image: 'https://images.unsplash.com/photo-1521791055366-0d553872125f' },
            { title: 'المنازعات العقارية والإيجارية', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa' },
            { title: 'قضايا الأحوال الشخصية والتركات', image: 'https://images.unsplash.com/photo-1551843132-f3ab66fe85c1' },
            { title: 'منازعات الملكية الفكرية', image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72' },
            { title: 'القضايا الجنائية', image: 'https://images.unsplash.com/photo-1590099033282-e9a49445521b' },
          ],
        },
        {
          title: 'الخدمات القانونية',
          icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 rtl:ml-2 rtl:mr-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>',
          services: [
            { title: 'صياغة ومراجعة العقود', image: 'https://images.unsplash.com/photo-1556742044-53c8536a4a69' },
            { title: 'تأسيس الشركات والكيانات', image: 'https://images.unsplash.com/photo-1579389083046-e3df9c2b3325' },
            { title: 'حوكمة الشركات', image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4be3' },
            { title: 'الفحص القانوني النافي للجهالة', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40' },
            { title: 'تسجيل العلامات التجارية وبراءات الاختراع', image: 'https://images.unsplash.com/photo-1579457463283-69038a8e246a' },
            { title: 'صياغة التشريعات واللوائح', image: 'https://images.unsplash.com/photo-1423592707957-3b212afa3738' },
          ],
        },
        {
          title: 'خدمات تحصيل الديون',
          icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 rtl:ml-2 rtl:mr-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>',
          services: [
            { title: 'التفاوض والتسوية الودية', image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173' },
            { title: 'إقامة الدعاوى والمطالبات المالية', image: 'https://images.unsplash.com/photo-1554224155-1696413565d3' },
            { title: 'تنفيذ السندات لأمر والشيكات', image: 'https://images.unsplash.com/photo-1633113089632-474d261a87e5' },
            { title: 'إجراءات الإفلاس والتصفية', image: 'https://images.unsplash.com/photo-1591034239822-264663c8b4f7' },
            { title: 'متابعة المدينين', image: 'https://images.unsplash.com/photo-1520607162513-77705c6f0d4a' },
            { title: 'الإجراءات القانونية للتحصيل', image: 'https://images.unsplash.com/photo-1589578233447-162b832815a4' },
          ],
        },
      ],
    },
    // Why Us
    whyUs: {
      title: 'لماذا تختارنا؟',
      subtitle: 'التزامنا بالتميز',
      content: 'نحن نجمع بين المعرفة القانونية العميقة والنهج الذي يركز على العميل، مما يضمن تمثيلاً شخصيًا وفعالًا.',
      points: [
        'فريق من ذوي الخبرة والتفاني',
        'سجل حافل بالنجاح',
        'نهج يركز على العميل',
        'حلول استراتيجية ومبتكرة'
      ]
    },
    // Team
    team: {
      title: 'فريقنا المحترف',
      members: [
        { name: 'مشعل العتيبي', title: 'مؤسس وشريك أول' },
        { name: 'أحمد عبد الله', title: 'شريك، قانون الشركات' },
        { name: 'فاطمة الفهد', title: 'مشارك أول، التقاضي' },
        { name: 'يوسف المطيري', title: 'مشارك، العقارات' },
        { name: 'خالد الغامدي', title: 'مستشار قانوني' }
      ]
    },
     // Articles Placeholder
    articlesPlaceholder: {
        title: "مقالات",
        subtitle: "رؤى وتحليلات قانونية قريبا."
    },
    // Testimonials
    testimonials: {
        title: "ماذا يقول عملاؤنا",
        items: [
            { quote: "قدم الفريق في شركة مشعل للمحاماة خدمة استثنائية. كانت احترافيتهم واهتمامهم بالتفاصيل رائعين.", name: "شركة جلوبال كورب" },
            { quote: "لقد أعجبت بشدة بنهجهم الاستراتيجي وتفانيهم. لقد حققوا نتيجة رائعة لقضيتنا.", name: "سارة ك." },
        ]
    },
     // CTA
    cta: {
        title: "هل تحتاج إلى مشورة قانونية متخصصة؟",
        subtitle: "دعنا نناقش كيف يمكننا مساعدتك في تحقيق أهدافك. فريقنا مستعد لمساعدتك في احتياجاتك القانونية.",
        button: "اتصل بنا اليوم"
    },
    // Footer
    footer: {
      about: "تلتزم شركة مشعل للمحاماة بتقديم خدمات قانونية من الدرجة الأولى مع الالتزام بالنزاهة والتميز ونجاح العميل.",
      quickLinks: "روابط سربعة",
      contactInfo: "معلومات الاتصال",
      socialTitle: "تابعنا",
      address: "1234 طريق الملك فهد، الرياض، المملكة العربية السعودية",
      copyright: `© ${new Date().getFullYear()} شركة مشعل للمحاماة. جميع الحقوق محفوظة.`
    }
  }
};