// Basic interactions: mobile menu, to-top button, and a simple AR/EN toggle for headings.
(function(){
  const burger = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobileMenu');
  const toTop = document.getElementById('toTop');
  const langBtn = document.getElementById('langBtn');
  let lang = 'ar'; // default

  if (burger) {
    burger.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });
  }

  if (toTop) {
    toTop.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
  }

  // Lightweight i18n: elements with [data-i18n-key] or [data-i18n-placeholder]
  const t = {
    ar: {
      "brand":"تقدير",
      "tagline":"لكل عمل تقدير!",
      "hero.title":"تقدير",
      "hero.subtitle":"منصة مدعومة بالذكاء الاصطناعي تساعد الجهات على تقدير احتياجهم من المتطوعين والموظفين من حيث العدد والمهارات المطلوبة.",
      "hero.try":"جرّب الآن →",
      "hero.demo":"اطلب عرض توضيحي",
      "nav.home":"الرئيسية","nav.problem":"المشكلة","nav.solution":"الحل","nav.impact":"الأثر","nav.demo":"التجربة","nav.pricing":"الأسعار","nav.about":"من نحن","nav.contact":"تواصل معنا",
      "problem.title":"التحدي الذي نواجهه",
      "problem.lead":"صعوبة تقدير العدد والمهارات المناسبة للفعاليات. تواجه المؤسسات تحديات كبيرة في تحديد الاحتياجات الدقيقة من الموارد البشرية، مما يؤدي إلى هدر الجهود وضعف الأثر المطلوب.",
      "problem.s1":"عدم تطابق في المهارات","problem.s2":"زيادة في التكاليف","problem.s3":"مبادرات متعثرة",
      "solution.title":"الحل الذكي","solution.lead":"منصة تقدير المدعومة بالذكاء الاصطناعي",
      "solution.f1t":"تقدير ذكي للعدد والمهارات","solution.f1d":"خوارزميات متقدمة لتحليل متطلبات المشاريع وتقدير الاحتياجات بدقة عالية.",
      "solution.f2t":"مساعد ذكي يقترح بدائل","solution.f2d":"نظام ذكي يقترح حلول بديلة ومرنة لتحسين كفاءة التخطيط.",
      "solution.f3t":"لوحة تحكم للتعديل اللحظي","solution.f3d":"واجهة تفاعلية تتيح التعديل والمتابعة في الوقت الفعلي.",
      "impact.title":"الأثر المحقق","impact.lead":"نتائج ملموسة وقابلة للقياس","impact.s1":"تقليل التكاليف الإدارية","impact.s2":"رفع كفاءة التخطيط","impact.s3":"تقليل المبادرات المتعثرة",
      "demo.title":"التجربة المباشرة","demo.lead":"اختبر المنصة بنفسك","demo.note":"(منطقة تجربة تفاعلية - Placeholder)","demo.btn":"افتح التجربة الكاملة",
      "pricing.title":"خطط الأسعار","pricing.lead":"اختر الخطة المناسبة لمؤسستك","popular":"الأكثر شعبية","pricing.unit":"ريال شهريًا","pricing.p1":"مجاني","pricing.p2":"احترافي","pricing.p3":"مؤسسي","pricing.custom":"مخصص",
      "pricing.f1_1":"حتى 5 تحليلات شهريًا","pricing.f1_2":"توصيات ذكية أساسية","pricing.f1_3":"دعم عبر البريد الإلكتروني","pricing.f1_4":"قوالب معيارية",
      "pricing.f2_1":"تحليلات غير محدودة","pricing.f2_2":"رؤى ذكية متقدمة","pricing.f2_3":"دعم أولوية","pricing.f2_4":"قوالب مخصصة","pricing.f2_5":"وصول للواجهة البرمجية","pricing.f2_6":"تعاون الفريق",
      "pricing.f3_1":"كل ما في الاحترافي","pricing.f3_2":"مدير حساب مخصص","pricing.f3_3":"تكاملات مخصصة","pricing.f3_4":"نشر محلي","pricing.f3_5":"تدريب وإعداد","pricing.f3_6":"ضمان مستوى الخدمة",
      "cta.start":"ابدأ الآن","cta.contact":"تواصل معنا",
      "about.title":"من نحن","about.lead":"فريق متخصص في الذكاء الاصطناعي والتنمية الاجتماعية","about.vision":"رؤيتنا","about.visionText":"أن نكون الرائدين في تطوير حلول الذكاء الاصطناعي للقطاع الاجتماعي في المنطقة.","about.mission":"رسالتنا","about.missionText":"دعم المبادرات بالذكاء الاصطناعي لتوزيع الجهود بشكل أكثر كفاءة وتحقيق أثر اجتماعي مستدام.",
      "team.t1":"استراتيجي الأعمال","team.d1":"خبراء في تطوير النماذج التجارية","team.t2":"مصممو UX/UI","team.d2":"مبدعون في تصميم تجارب المستخدم","team.t3":"محللو البيانات","team.d3":"متخصصون في تحليل البيانات واستخراج الرؤى","team.t4":"مطورو الذكاء الاصطناعي","team.d4":"خبراء في تطوير خوارزميات التعلم الآلي",
      "contact.title":"تواصل معنا","contact.lead":"نحن هنا لمساعدتك في تحقيق أهدافك","contact.name":"الاسم","contact.email":"email@example.com","contact.org":"المؤسسة","contact.msg":"الرسالة","contact.send":"إرسال",
      "contact.mail":"info@takdeer.ai","contact.phone":"+966 11 123 4567","contact.addr":"الرياض، المملكة العربية السعودية",
      "footer":"© 2025 تقدير. جميع الحقوق محفوظة."
    },
    en: {
      "brand":"Takdeer",
      "tagline":"Every task deserves the right estimate!",
      "hero.title":"Takdeer",
      "hero.subtitle":"An AI-powered platform that estimates how many people and which skills you need—volunteers or staff—accurately and fast.",
      "hero.try":"Try Now →","hero.demo":"Request a Demo",
      "nav.home":"Home","nav.problem":"Problem","nav.solution":"Solution","nav.impact":"Impact","nav.demo":"Demo","nav.pricing":"Pricing","nav.about":"About","nav.contact":"Contact",
      "problem.title":"The Challenge","problem.lead":"Organizations struggle to estimate the right headcount and skills for events and projects. That leads to wasted effort and weaker impact.",
      "problem.s1":"Skill mismatch","problem.s2":"Higher costs","problem.s3":"Stalled initiatives",
      "solution.title":"The Smart Solution","solution.lead":"An AI-powered estimation platform",
      "solution.f1t":"Smart headcount & skills estimation","solution.f1d":"Advanced algorithms analyze requirements and estimate needs precisely.",
      "solution.f2t":"Assistant that suggests alternatives","solution.f2d":"A smart copilot offering flexible what-if options for better plans.",
      "solution.f3t":"Live control dashboard","solution.f3d":"Interactive UI for real-time adjustments and monitoring.",
      "impact.title":"Measured Impact","impact.lead":"Tangible, trackable results","impact.s1":"Lower admin costs","impact.s2":"Higher planning efficiency","impact.s3":"Fewer stalled initiatives",
      "demo.title":"Interactive Demo","demo.lead":"Try the platform yourself","demo.note":"(Interactive area – placeholder)","demo.btn":"Open Full Demo",
      "pricing.title":"Pricing Plans","pricing.lead":"Choose what fits your team","popular":"Most Popular","pricing.unit":"/ mo","pricing.p1":"Free","pricing.p2":"Pro","pricing.p3":"Enterprise","pricing.custom":"Custom",
      "pricing.f1_1":"Up to 5 analyses / month","pricing.f1_2":"Basic smart recommendations","pricing.f1_3":"Email support","pricing.f1_4":"Standard templates",
      "pricing.f2_1":"Unlimited analyses","pricing.f2_2":"Advanced insights","pricing.f2_3":"Priority support","pricing.f2_4":"Custom templates","pricing.f2_5":"API access","pricing.f2_6":"Team collaboration",
      "pricing.f3_1":"Everything in Pro","pricing.f3_2":"Dedicated account manager","pricing.f3_3":"Custom integrations","pricing.f3_4":"On‑prem deployment","pricing.f3_5":"Training & onboarding","pricing.f3_6":"SLA guarantee",
      "cta.start":"Start now","cta.contact":"Contact us",
      "about.title":"About Us","about.lead":"A team specialized in AI and social development","about.vision":"Our Vision","about.visionText":"To lead AI solutions for the social sector in the region.","about.mission":"Our Mission","about.missionText":"Empower initiatives with AI to distribute effort efficiently and achieve sustainable impact.",
      "team.t1":"Business Strategy","team.d1":"Experts in business models","team.t2":"UX/UI Designers","team.d2":"Crafting delightful user journeys","team.t3":"Data Analysts","team.d3":"Turning data into insights","team.t4":"AI Engineers","team.d4":"Building robust ML algorithms",
      "contact.title":"Contact Us","contact.lead":"We're here to help you reach your goals","contact.name":"Name","contact.email":"email@example.com","contact.org":"Organization","contact.msg":"Message","contact.send":"Send",
      "contact.mail":"info@takdeer.ai","contact.phone":"+966 11 123 4567","contact.addr":"Riyadh, Saudi Arabia",
      "footer":"© 2025 Takdeer. All rights reserved."
    }
  };

  function applyTranslations(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    // text nodes
    document.querySelectorAll('[data-i18n-key]').forEach(el => {
      const key = el.getAttribute('data-i18n-key');
      if (t[lang][key] !== undefined) el.textContent = t[lang][key];
    });
    // placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (t[lang][key] !== undefined) el.setAttribute('placeholder', t[lang][key]);
    });
  }

  if (langBtn) {
    langBtn.addEventListener('click', () => {
      lang = (lang === 'ar') ? 'en' : 'ar';
      langBtn.textContent = (lang === 'ar') ? 'EN' : 'AR';
      applyTranslations(lang);
    });
  }

  // initial translate (Arabic)
  applyTranslations(lang);
})();