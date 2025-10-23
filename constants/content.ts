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
          services: [
            { title: 'Pleading and defense in all lawsuits' },
            { title: 'Objecting to judgments and appealing' },
            { title: 'Implementing judicial rulings' },
            { title: 'Arbitration and dispute resolution' },
            { title: 'Legal consultations' },
            { title: 'Notarization of documents' },
          ],
        },
        {
          title: 'Field of Judicial Work',
          services: [
            { title: 'Commercial and corporate cases' },
            { title: 'Administrative and labor cases' },
            { title: 'Real estate and rental disputes' },
            { title: 'Personal status and inheritance cases' },
            { title: 'Intellectual property disputes' },
            { title: 'Criminal cases' },
          ],
        },
        {
          title: 'Legal Services',
          services: [
            { title: 'Drafting and reviewing contracts' },
            { title: 'Establishing companies and entities' },
            { title: 'Corporate governance' },
            { title: 'Legal due diligence' },
            { title: 'Trademarks and patents registration' },
            { title: 'Legislative drafting' },
          ],
        },
        {
          title: 'Debt Collection Services',
          services: [
            { title: 'Amicable negotiation and settlement' },
            { title: 'Filing financial claims' },
            { title: 'Implementing bonds and checks' },
            { title: 'Bankruptcy and liquidation procedures' },
            { title: 'Following up with debtors' },
            { title: 'Legal actions for collection' },
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
        { name: 'Yousef Al-Mutairi', title: 'Associate, Real Estate' }
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
          services: [
            { title: 'الترافع والمدافعة في كافة الدعاوى' },
            { title: 'الاعتراض على الأحكام والاستئناف' },
            { title: 'تنفيذ الأحكام القضائية' },
            { title: 'التحكيم وتسوية المنازعات' },
            { title: 'الاستشارات الشرعية والقانونية' },
            { title: 'توثيق المحررات والعقود' },
          ],
        },
        {
          title: 'مجال العمل القضائي',
          services: [
            { title: 'القضايا التجارية والشركات' },
            { title: 'القضايا الإدارية والعمالية' },
            { title: 'المنازعات العقارية والإيجارية' },
            { title: 'قضايا الأحوال الشخصية والتركات' },
            { title: 'منازعات الملكية الفكرية' },
            { title: 'القضايا الجنائية' },
          ],
        },
        {
          title: 'الخدمات القانونية',
          services: [
            { title: 'صياغة ومراجعة العقود' },
            { title: 'تأسيس الشركات والكيانات' },
            { title: 'حوكمة الشركات' },
            { title: 'الفحص القانوني النافي للجهالة' },
            { title: 'تسجيل العلامات التجارية وبراءات الاختراع' },
            { title: 'صياغة التشريعات واللوائح' },
          ],
        },
        {
          title: 'خدمات تحصيل الديون',
          services: [
            { title: 'التفاوض والتسوية الودية' },
            { title: 'إقامة الدعاوى والمطالبات المالية' },
            { title: 'تنفيذ السندات لأمر والشيكات' },
            { title: 'إجراءات الإفلاس والتصفية' },
            { title: 'متابعة المدينين' },
            { title: 'الإجراءات القانونية للتحصيل' },
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
        { name: 'يوسف المطيري', title: 'مشارك، العقارات' }
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