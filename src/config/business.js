import heroStudioImg from '../assets/images/hero_rawaq_studio_1790490625526.jpg';
import serviceSearchSeoImg from '../assets/images/service_search_seo_1790490637773.jpg';
import servicePaidMediaImg from '../assets/images/service_paid_media_1790490650701.jpg';
import serviceWebBrandingImg from '../assets/images/service_web_branding_1790490661507.jpg';
import aboutJeddahOfficeImg from '../assets/images/about_jeddah_office_1790490672250.jpg';

/**
 * Rawaq Digital — Single Source of Truth Configuration
 * Edit this file to update any text (Arabic or English), color, service, contact detail, or image across the entire website.
 */
export const businessConfig = {
  defaultLanguage: 'ar',

  colors: {
    primary: '#102A43',       // Deep Luxury Navy
    secondary: '#D4A72C',     // Warm Architectural Gold
    accentText: '#9E7716',    // High-contrast Gold for light backgrounds
    ink: '#0B1622',           // Near-black ink for crisp typography
    surfaceBg: '#FAF9F6',     // Soft off-white primary canvas
    surfaceAlt: '#F2EFE9',    // Warm neutral alternating section background
    surfaceCard: '#FFFFFF',   // Pure white card surface
    textMuted: '#486581',     // Subdued slate navy for body/supporting prose
    borderSubtle: 'rgba(16, 42, 67, 0.10)',
  },

  contact: {
    phoneRaw: '966584003313',
    phoneDisplay: '+966 58 400 3313',
    whatsappRaw: '966584003313',
    whatsappUrl: 'https://wa.me/966584003313',
    // Leave empty string if not provided; UI omits cleanly when empty
    email: '',
    googleMapsLink: '',
    directionsFallbackUrl: 'https://www.google.com/maps/search/?api=1&query=Faisaliyah+Dist+Jeddah+40671',
  },

  images: {
    hero: heroStudioImg,
    about: aboutJeddahOfficeImg,
    pillars: {
      search: serviceSearchSeoImg,
      advertising: servicePaidMediaImg,
      branding: serviceWebBrandingImg,
    },
    unsplashFallbacks: {
      hero: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
      about: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=80',
      search: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80',
      advertising: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80',
      branding: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1600&q=80',
    },
  },

  // Testimonials array: rendered only when real client quotes are added here.
  testimonials: [],

  content: {
    ar: {
      langCode: 'ar',
      dir: 'rtl',
      businessName: 'رواق الرقمية',
      businessNameFull: 'رواق الرقمية — Rawaq Digital',
      businessType: 'التسويق الرقمي',
      tagline: 'رواق الرقمية — نمو أذكى',
      city: 'حي الفيصلية، ص.ب: 40671 جدة',
      fullAddress: 'حي الفيصلية، ص.ب: 40671، جدة',
      openingHours: '',

      nav: {
        links: [
          { label: 'الخدمات', href: '#services' },
          { label: 'عن رواق', href: '#about' },
          { label: 'لماذا نحن', href: '#why-us' },
          { label: 'الأسئلة الشائعة', href: '#faq' },
          { label: 'تواصل معنا', href: '#contact' },
        ],
        ctaLabel: 'تواصل عبر واتساب',
        langSwitchLabel: 'English',
        langSwitchAria: 'Switch language to English',
        mobileMenuOpenAria: 'فتح القائمة',
        mobileMenuCloseAria: 'إغلاق القائمة',
      },

      hero: {
        eyebrow: 'حي الفيصلية، جدة · التسويق الرقمي',
        headline: 'رواق الرقمية — نمو أذكى لحضورك التجاري في جدة',
        subheadline:
          'نبني أنظمة تسويق رقمي متكاملة للشركات في جدة؛ نجمع بين تحسين محركات البحث، الإعلانات الممولة الدقيقة، وتصميم المواقع العصرية لتحويل الزيارات إلى عملاء حقيقيين.',
        primaryCta: 'تواصل عبر واتساب',
        secondaryCta: 'استعرض خدماتنا',
        trustLinePrefix: 'مقرنا في حي الفيصلية، ص.ب: 40671 جدة',
        trustLineSeparator: '·',
        trustLinePhoneLabel: 'اتصال مباشر:',
      },

      servicesSection: {
        eyebrow: 'مجالات الاختصاص',
        title: 'حلول تسويق رقمي متكاملة مصممة لنمو أعمالك',
        subtitle:
          'نقدم اثنتي عشرة خدمة متخصصة تحت سقف واحد في جدة، مقسمة إلى ثلاث ركائز أساسية تضمن حضور علامتك التجارية ووصولها إلى العميل المناسب.',
        filterAll: 'جميع الخدمات (12)',
        inquireServiceLabel: 'استفسر عبر واتساب',
        includedServicesLabel: 'الخدمات المشمولة:',
        directoryEyebrow: 'دليل الخدمات الكامل',
        directoryTitle: 'قائمة خدمات رواق الرقمية التفصيلية',

        pillars: [
          {
            id: 'search',
            number: '01.',
            title: 'الظهور في محركات البحث وجذب العملاء',
            description:
              'نضع نشاطك التجاري في صدارة نتائج البحث في جدة والمملكة، مع بناء سمعة رقمية موثوقة وتحويل الباحثين إلى عملاء محتملين.',
            imageKey: 'search',
            highlights: ['تحسين محركات البحث SEO', 'السيو المحلي Local SEO', 'جذب العملاء المحتملين', 'إدارة السمعة الرقمية'],
          },
          {
            id: 'advertising',
            number: '02.',
            title: 'الإعلانات الممولة والحملات الأدائية',
            description:
              'ندير حملات إعلانات جوجل ومنصات التواصل الاجتماعي والدفع لكل نقرة باستهداف دقيق يركز على العائد الفعلي للميزانية التسويقية.',
            imageKey: 'advertising',
            highlights: ['التسويق الرقمي المتكامل', 'إعلانات جوجل Google Ads', 'إعلانات الدفع لكل نقرة PPC', 'تسويق منصات التواصل'],
          },
          {
            id: 'branding',
            number: '03.',
            title: 'تصميم المواقع والهوية والمحتوى',
            description:
              'نصمم مواقع إلكترونية سريعة وهويات تجارية راقية مدعومة بمحتوى مقنع وحملات بريد إلكتروني تحافظ على ارتباط عملائك.',
            imageKey: 'branding',
            highlights: ['تصميم المواقع الإلكترونية', 'بناء الهوية التجارية', 'التسويق بالمحتوى', 'التسويق عبر البريد الإلكتروني'],
          },
        ],

        categories: [
          { id: 'all', label: 'جميع الخدمات' },
          { id: 'search', label: 'محركات البحث والسمعة' },
          { id: 'advertising', label: 'الإعلانات والتواصل' },
          { id: 'branding', label: 'المواقع والهوية والمحتوى' },
        ],

        allServices: [
          {
            id: 'digital-marketing',
            index: '01',
            category: 'advertising',
            title: 'التسويق الرقمي (Digital Marketing)',
            description: 'خطط تسويقية شاملة تربط جميع قنواتك الرقمية لزيادة المبيعات وتعزيز حضورك في سوق جدة.',
          },
          {
            id: 'seo-services',
            index: '02',
            category: 'search',
            title: 'تحسين محركات البحث (SEO Services)',
            description: 'تحسين البنية التقنية والمحتوى لموقعك ليتصدر النتائج الأولى في جوجل بشكل مستدام.',
          },
          {
            id: 'local-seo',
            index: '03',
            category: 'search',
            title: 'السيو المحلي (Local SEO)',
            description: 'توجيه العملاء في حي الفيصلية وكافة أحياء جدة إليك مباشرة عبر خرائط جوجل والبحث المحلي.',
          },
          {
            id: 'social-media-marketing',
            index: '04',
            category: 'advertising',
            title: 'التسويق عبر التواصل الاجتماعي (Social Media Marketing)',
            description: 'إدارة وتطوير حسابات علامتك التجارية بمحتوى احترافي وحملات تفاعلية تخاطب جمهورك المستهدف.',
          },
          {
            id: 'google-ads',
            index: '05',
            category: 'advertising',
            title: 'إعلانات جوجل (Google Ads)',
            description: 'الوصول الفوري للعملاء الذين يبحثون عن خدماتك الآن في جدة من خلال حملات بحث وشبكة عرض مدروسة.',
          },
          {
            id: 'ppc-advertising',
            index: '06',
            category: 'advertising',
            title: 'إعلانات الدفع لكل نقرة (PPC Advertising)',
            description: 'إدارة ميزانيتك الإعلانية بكفاءة عالية بحيث تدفع مقابل النقرات المؤهلة التي تقود إلى استفسارات فعلية.',
          },
          {
            id: 'content-marketing',
            index: '07',
            category: 'branding',
            title: 'التسويق بالمحتوى (Content Marketing)',
            description: 'صياغة مقالات وصفحات تعريفية ومحتوى تسويقي يعكس خبرتك ويبني ثقة العميل قبل اتخاذ قرار الشراء.',
          },
          {
            id: 'email-marketing',
            index: '08',
            category: 'branding',
            title: 'التسويق عبر البريد الإلكتروني (Email Marketing)',
            description: 'حملات بريدية منظمة للتواصل المباشر مع عملائك الحاليين والمحتملين وتنمية الولاء لعلامتك التجارية.',
          },
          {
            id: 'website-design',
            index: '09',
            category: 'branding',
            title: 'تصميم المواقع الإلكترونية (Website Design)',
            description: 'تصميم وتطوير مواقع متجاوبة وسريعة التحميل تعكس فخامة نشاطك التجاري وتسهّل تواصل العملاء معك.',
          },
          {
            id: 'branding-services',
            index: '10',
            category: 'branding',
            title: 'خدمات الهوية التجارية (Branding Services)',
            description: 'تأسيس وتطوير هوية بصرية ورسالة تجارية متميزة تمنح شركتك حضوراً واضحاً ومتسقاً.',
          },
          {
            id: 'reputation-management',
            index: '11',
            category: 'search',
            title: 'إدارة السمعة الرقمية (Online Reputation Management)',
            description: 'متابعة وتعزيز الصورة الذهنية لعلامتك التجارية وتقييمات العملاء عبر المنصات ومحركات البحث.',
          },
          {
            id: 'lead-generation',
            index: '12',
            category: 'search',
            title: 'جذب العملاء المحتملين (Lead Generation)',
            description: 'بناء مسارات تحويل واضحة تستقطب استفسارات واتصالات من عملاء مهتمين فعلياً بخدماتك.',
          },
        ],
      },

      aboutSection: {
        eyebrow: 'عن رواق الرقمية',
        title: 'شريكك المحلي في جدة لنمو رقمي واضح ومدروس',
        paragraphs: [
          'في رواق الرقمية بحي الفيصلية في جدة، نؤمن بأن التسويق الناجح يبدأ من فهم طبيعة السوق المحلي وسلوك العميل قبل إطلاق أي حملة إعلانية. لذلك نعمل تحت شعارنا الواضح: نمو أذكى.',
          'بدلاً من تشتيت جهودك بين جهات متعددة، نوفر لك منظومة متكاملة تشمل تصميم الموقع الإلكتروني، بناء الهوية التجارية، تحسين الظهور في جوجل، وإدارة الحملات الإعلانية الممولة بدقة وشفافية.',
        ],
        locationLabel: 'الموقع الرئيسي',
        locationValue: 'حي الفيصلية، ص.ب: 40671 جدة',
        directContactLabel: 'خط التواصل المباشر',
        ctaLabel: 'تحدث معنا عبر واتساب',
      },

      whyChooseUsSection: {
        eyebrow: 'لماذا تختار رواق الرقمية',
        title: 'أربع ركائز تميز عملنا مع الشركات في جدة',
        subtitle:
          'نركز على العمل المتقن والنتائج الملموسة التي تخدم أهداف منشأتك التجارية بشكل مباشر.',
        points: [
          {
            number: '01.',
            title: 'حضور محلي في قلب جدة',
            description:
              'انطلاقاً من حي الفيصلية في جدة، نفهم متطلبات الشركات المحلية ونصمم حملات سيو محلي وإعلانات تخاطب جمهور المدينة بدقة.',
          },
          {
            number: '02.',
            title: 'منظومة متكاملة من 12 خدمة متخصصة',
            description:
              'من تأسيس الهوية وتصميم الموقع إلى إعلانات جوجل وإدارة السمعة الرقمية، تتكامل جميع خدماتنا في مسار واحد متناسق.',
          },
          {
            number: '03.',
            title: 'تركيز على جذب العملاء الفعليين',
            description:
              'لا نقيس النجاحبمجرد الظهور؛ بل نصمم كل صفحة وحملة إعلانية لزيادة الاتصالات والرسائل والعملاء المحتملين لنشاطك.',
          },
          {
            number: '04.',
            title: 'تواصل مباشر وسريع دون تعقيد',
            description:
              'تواصل معنا مباشرة عبر الهاتف أو واتساب لمناقشة احتياجات مشروعك والحصول على خطة واضحة تناسب مرحلة نموك.',
          },
        ],
      },

      testimonialsSection: {
        eyebrow: 'آراء العملاء',
        title: 'ماذا يقول عملاؤنا في جدة',
      },

      faqSection: {
        eyebrow: 'إجابات واضحة',
        title: 'الأسئلة الشائعة حول خدماتنا التسويقية',
        subtitle:
          'تفاصيل عملية تساعدك على اختيار الخدمة الأنسب لنشاطك التجاري في جدة.',
        items: [
          {
            question: 'كيف نحدد ما إذا كان نشاطي يحتاج إلى تحسين محركات البحث (SEO) أو إعلانات جوجل (Google Ads)؟',
            answer:
              'إعلانات جوجل والدفع لكل نقرة (PPC) تمنحك ظهوراً فورياً أمام العملاء الباحثين عن خدماتك اليوم، بينما يعمل تحسين محركات البحث والسيو المحلي على بناء ظهور مجاني مستدام طويل الأمد. في كثير من الحالات نوصي بالجمع بينهما لتحقيق نتائج سريعة ونمو مستقر.',
          },
          {
            question: 'ما الفائدة العملية من خدمة السيو المحلي (Local SEO) للشركات في جدة؟',
            answer:
              'السيو المحلي يضمن ظهور منشأتك عندما يبحث العملاء في حي الفيصلية أو أحياء جدة الأخرى عن خدماتك عبر بحث جوجل وخرائط جوجل، مما يرفع من معدلات الاتصال المباشر والزيارات.',
          },
          {
            question: 'هل تقومون بتصميم الموقع الإلكتروني والهوية التجارية قبل إطلاق الحملات؟',
            answer:
              'نعم، نقدم خدمات تصميم المواقع الإلكترونية وبناء الهوية التجارية المتكاملة، لأن نجاح أي حملة إعلانية يعتمد بشكل أساسي على وجود موقع سريع وواضح يحول الزائر إلى عميل.',
          },
          {
            question: 'كيف يمكنني البدء مع رواق الرقمية؟',
            answer:
              'يمكنك مراسلتنا مباشرة عبر واتساب أو الاتصال على الرقم 966584003313+، أو تعبئة نموذج التواصل أدناه، وسنقوم بمراجعة احتياجات نشاطك واقتراح الخطوة الأنسب.',
          },
        ],
      },

      contactSection: {
        eyebrow: 'تواصل معنا',
        title: 'ابدأ خطة نمو أذكى لنشاطك التجاري في جدة',
        subtitle:
          'تواصل معنا مباشرة عبر واتساب أو الهاتف، أو أرسل تفاصيل مشروعك عبر النموذج وسنتواصل معك في أقرب وقت.',
        directChannelsTitle: 'قنوات التواصل المباشر',
        whatsappButton: 'مراسلة عبر واتساب',
        callButton: 'اتصال هاتفي مباشر',
        directionsButton: 'عرض العنوان على الخريطة',
        addressTitle: 'العنوان البريدي والموقع',
        phoneTitle: 'الهاتف وواتساب',
        hoursTitle: 'ساعات العمل',

        form: {
          title: 'أرسل استفسارك أو اطلب عرض سعر',
          nameLabel: 'الاسم الكامل',
          namePlaceholder: 'أدخل اسمك الكريم',
          phoneLabel: 'رقم الجوال / واتساب',
          phonePlaceholder: '05XXXXXXXX',
          serviceLabel: 'الخدمة المطلوبة',
          servicePlaceholder: 'اختر الخدمة المناسبة',
          messageLabel: 'تفاصيل المشروع أو الاستفسار',
          messagePlaceholder: 'اكتب نبذة مختصرة عن نشاطك التجاري والهدف التسويقي...',
          submitButton: 'إرسال الطلب',
          whatsappDirectSubmit: 'إرسال التفاصيل عبر واتساب مباشرة',
          errorRequired: 'يرجى تعبئة الاسم ورقم الجوال واختيار الخدمة لنتمكن من خدمتك.',
          errorPhone: 'يرجى إدخال رقم جوال صحيح (أرقام فقط، 9 إلى 15 رقماً).',
          successTitle: 'تم استلام طلبك بنجاح',
          successMessage:
            'شكراً لتواصلك مع رواق الرقمية. يمكنك أيضاً الضغط أدناه لإرسال ملخص طلبك مباشرة إلى فريقنا عبر واتساب للرد الفوري.',
          resetButton: 'إرسال استفسار آخر',
        },
      },

      footer: {
        description:
          'شركة تسويق رقمي في حي الفيصلية بجدة. نقدم حلول تحسين محركات البحث، الإعلانات الممولة، تصميم المواقع، وبناء الهويات التجارية.',
        quickLinksTitle: 'روابط سريعة',
        contactTitle: 'معلومات التواصل',
        rightsReserved: 'جميع الحقوق محفوظة.',
      },
    },

    en: {
      langCode: 'en',
      dir: 'ltr',
      businessName: 'Rawaq Digital',
      businessNameFull: 'Rawaq Digital — رواق الرقمية',
      businessType: 'Digital Marketing',
      tagline: 'Rawaq Digital — Grow Smarter',
      city: 'Faisaliyah Dist., P.O.Box: 40671 Jeddah',
      fullAddress: 'Faisaliyah Dist., P.O.Box: 40671 Jeddah',
      openingHours: '',

      nav: {
        links: [
          { label: 'Services', href: '#services' },
          { label: 'About', href: '#about' },
          { label: 'Why Us', href: '#why-us' },
          { label: 'FAQ', href: '#faq' },
          { label: 'Contact', href: '#contact' },
        ],
        ctaLabel: 'Message on WhatsApp',
        langSwitchLabel: 'العربية',
        langSwitchAria: 'التبديل إلى اللغة العربية',
        mobileMenuOpenAria: 'Open navigation menu',
        mobileMenuCloseAria: 'Close navigation menu',
      },

      hero: {
        eyebrow: 'Faisaliyah Dist., Jeddah · Digital Marketing',
        headline: 'Rawaq Digital — Grow Smarter in Jeddah',
        subheadline:
          'We build structured digital marketing systems for businesses in Jeddah—combining search engine optimization, targeted paid advertising, and bespoke website design to turn searchers into steady customers.',
        primaryCta: 'Message on WhatsApp',
        secondaryCta: 'View Services',
        trustLinePrefix: 'Faisaliyah Dist., P.O.Box: 40671 Jeddah',
        trustLineSeparator: '·',
        trustLinePhoneLabel: 'Direct Line:',
      },

      servicesSection: {
        eyebrow: 'Core Capabilities',
        title: 'Digital Marketing Built for Measurable Business Growth',
        subtitle:
          'We deliver twelve specialized marketing and web disciplines under one roof in Jeddah, organized into three clear pillars.',
        filterAll: 'All Services (12)',
        inquireServiceLabel: 'Inquire on WhatsApp',
        includedServicesLabel: 'Included Services:',
        directoryEyebrow: 'Complete Capability Index',
        directoryTitle: 'All 12 Services at Rawaq Digital',

        pillars: [
          {
            id: 'search',
            number: '01.',
            title: 'Search Visibility & Lead Generation',
            description:
              'Position your business at the top of organic and local search results across Jeddah while building a trusted online reputation and steady lead flow.',
            imageKey: 'search',
            highlights: ['SEO Services', 'Local SEO', 'Lead Generation', 'Online Reputation Management'],
          },
          {
            id: 'advertising',
            number: '02.',
            title: 'Paid Media & Performance Campaigns',
            description:
              'Reach high-intent customers immediately through disciplined Google Ads, pay-per-click management, and targeted social media campaigns.',
            imageKey: 'advertising',
            highlights: ['Digital Marketing', 'Google Ads', 'PPC Advertising', 'Social Media Marketing'],
          },
          {
            id: 'branding',
            number: '03.',
            title: 'Website Design, Branding & Content',
            description:
              'Establish an authoritative digital storefront with responsive website design, cohesive brand identity, persuasive content, and email marketing.',
            imageKey: 'branding',
            highlights: ['Website Design', 'Branding Services', 'Content Marketing', 'Email Marketing'],
          },
        ],

        categories: [
          { id: 'all', label: 'All Services' },
          { id: 'search', label: 'Search & Reputation' },
          { id: 'advertising', label: 'Paid Ads & Social' },
          { id: 'branding', label: 'Web, Brand & Content' },
        ],

        allServices: [
          {
            id: 'digital-marketing',
            index: '01',
            category: 'advertising',
            title: 'Digital Marketing',
            description: 'Integrated digital growth strategies connecting search, paid media, and conversion channels for Jeddah businesses.',
          },
          {
            id: 'seo-services',
            index: '02',
            category: 'search',
            title: 'SEO Services',
            description: 'Technical website optimization and content structuring to earn lasting organic rankings on Google.',
          },
          {
            id: 'local-seo',
            index: '03',
            category: 'search',
            title: 'Local SEO',
            description: 'Local search and map visibility tailored for customers searching in Faisaliyah Dist. and across Jeddah.',
          },
          {
            id: 'social-media-marketing',
            index: '04',
            category: 'advertising',
            title: 'Social Media Marketing',
            description: 'Consistent social channel management and targeted campaigns designed to engage your local audience.',
          },
          {
            id: 'google-ads',
            index: '05',
            category: 'advertising',
            title: 'Google Ads',
            description: 'Search and display campaigns capturing active buyers at the exact moment they look for your services.',
          },
          {
            id: 'ppc-advertising',
            index: '06',
            category: 'advertising',
            title: 'PPC Advertising',
            description: 'Carefully monitored pay-per-click campaigns focused on qualified traffic and clear return on ad spend.',
          },
          {
            id: 'content-marketing',
            index: '07',
            category: 'branding',
            title: 'Content Marketing',
            description: 'Clear, authoritative articles and landing page copy that answer customer questions and build trust.',
          },
          {
            id: 'email-marketing',
            index: '08',
            category: 'branding',
            title: 'Email Marketing',
            description: 'Structured email sequences and newsletters that keep your brand top-of-mind with existing and prospective clients.',
          },
          {
            id: 'website-design',
            index: '09',
            category: 'branding',
            title: 'Website Design',
            description: 'Fast, responsive, conversion-focused websites built to reflect the quality of your business on every device.',
          },
          {
            id: 'branding-services',
            index: '10',
            category: 'branding',
            title: 'Branding Services',
            description: 'Visual identity systems, typography, and brand positioning crafted for long-term recognition.',
          },
          {
            id: 'reputation-management',
            index: '11',
            category: 'search',
            title: 'Online Reputation Management',
            description: 'Proactive monitoring and strengthening of your public reviews and brand perception online.',
          },
          {
            id: 'lead-generation',
            index: '12',
            category: 'search',
            title: 'Lead Generation',
            description: 'Dedicated landing funnels and inquiry systems built to bring qualified phone calls and WhatsApp messages.',
          },
        ],
      },

      aboutSection: {
        eyebrow: 'About Rawaq Digital',
        title: 'A Focused Digital Partner in Faisaliyah Dist., Jeddah',
        paragraphs: [
          'Based in Faisaliyah Dist., Jeddah, Rawaq Digital works with business owners who value clarity over marketing noise. Our guiding principle—Grow Smarter—means every campaign, website, and search strategy is built around real customer inquiries.',
          'Rather than splitting your marketing across disconnected vendors, we bring website design, brand identity, search engine optimization, and paid advertising together into one coherent system.',
        ],
        locationLabel: 'Office Location',
        locationValue: 'Faisaliyah Dist., P.O.Box: 40671 Jeddah',
        directContactLabel: 'Direct Line & WhatsApp',
        ctaLabel: 'Message on WhatsApp',
      },

      whyChooseUsSection: {
        eyebrow: 'Why Choose Rawaq Digital',
        title: 'Practical Standards That Guide Our Work',
        subtitle:
          'We keep our process straightforward, transparent, and rooted in the realities of the Jeddah market.',
        points: [
          {
            number: '01.',
            title: 'Local Presence in Jeddah',
            description:
              'Located in Faisaliyah Dist. (P.O.Box: 40671 Jeddah), we understand local customer behavior and build bilingual campaigns that resonate.',
          },
          {
            number: '02.',
            title: 'Complete 12-Service Capability',
            description:
              'From Branding and Website Design to SEO, Google Ads, and Online Reputation Management, your entire digital presence stays aligned.',
          },
          {
            number: '03.',
            title: 'Built Around Qualified Inquiries',
            description:
              'Every landing page, keyword strategy, and ad campaign is structured to generate real phone calls and WhatsApp conversations.',
          },
          {
            number: '04.',
            title: 'Direct, Uncomplicated Communication',
            description:
              'You work directly with our team via phone or WhatsApp (+966 58 400 3313) with clear priorities and plain-spoken reporting.',
          },
        ],
      },

      testimonialsSection: {
        eyebrow: 'Client Feedback',
        title: 'What Our Clients Say',
      },

      faqSection: {
        eyebrow: 'Common Questions',
        title: 'Frequently Asked Questions',
        subtitle:
          'Straightforward answers to help you plan your next digital marketing step in Jeddah.',
        items: [
          {
            question: 'Should my business start with SEO Services or Google Ads?',
            answer:
              'Google Ads and PPC Advertising bring immediate visibility for customers searching right now, while SEO Services and Local SEO build long-term organic traffic. Many businesses in Jeddah start with targeted Google Ads while building their SEO foundation in parallel.',
          },
          {
            question: 'How does Local SEO help businesses in Jeddah?',
            answer:
              'Local SEO optimizes your presence for location-specific searches and Google Maps in Faisaliyah Dist. and across Jeddah, helping nearby customers find and contact you first.',
          },
          {
            question: 'Can you redesign our website and brand identity before launching ads?',
            answer:
              'Yes. We provide complete Website Design and Branding Services so that when traffic arrives from Google or social media, your website converts visitors into inquiries.',
          },
          {
            question: 'How do we get started with Rawaq Digital?',
            answer:
              'Simply message us on WhatsApp or call +966 58 400 3313, or fill out the contact form below with the service you need. We will review your goals and recommend a clear starting plan.',
          },
        ],
      },

      contactSection: {
        eyebrow: 'Get in Touch',
        title: 'Start a Smarter Growth Plan in Jeddah',
        subtitle:
          'Reach out directly on WhatsApp or by phone, or send your project details through the form below.',
        directChannelsTitle: 'Direct Contact Channels',
        whatsappButton: 'Message on WhatsApp',
        callButton: 'Call +966 58 400 3313',
        directionsButton: 'Get Directions',
        addressTitle: 'Address & Location',
        phoneTitle: 'Phone & WhatsApp',
        hoursTitle: 'Opening Hours',

        form: {
          title: 'Send an Inquiry',
          nameLabel: 'Full Name',
          namePlaceholder: 'Your full name',
          phoneLabel: 'Mobile / WhatsApp Number',
          phonePlaceholder: '+966 5X XXX XXXX',
          serviceLabel: 'Service of Interest',
          servicePlaceholder: 'Select a service',
          messageLabel: 'Project Details',
          messagePlaceholder: 'Tell us briefly about your business and marketing goals...',
          submitButton: 'Submit Inquiry',
          whatsappDirectSubmit: 'Send Inquiry via WhatsApp',
          errorRequired: 'Please enter your name, phone number, and select a service.',
          errorPhone: 'Please enter a valid phone number (9 to 15 digits).',
          successTitle: 'Inquiry Received',
          successMessage:
            'Thank you for contacting Rawaq Digital. You can also click below to send your inquiry summary directly to our team on WhatsApp for an immediate response.',
          resetButton: 'Send Another Inquiry',
        },
      },

      footer: {
        description:
          'Digital marketing agency in Faisaliyah Dist., Jeddah. Specializing in SEO, Google Ads, PPC, Website Design, Branding, and Lead Generation.',
        quickLinksTitle: 'Navigation',
        contactTitle: 'Contact Details',
        rightsReserved: 'All rights reserved.',
      },
    },
  },
};

export default businessConfig;
