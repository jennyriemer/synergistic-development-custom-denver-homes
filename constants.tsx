import { Project, ProcessStep } from './types';

export const PROJECTS: Project[] = [
  {
    id: '9',
    title: '918 S Emerson',
    category: 'New Build',
    location: 'Washington Park',
    image: '/projects/emerson/emerson_01.jpg',
    description:
      'New construction single-family home in Washington Park. Design-build project featuring 3,720 square feet of living space with a detached 2 1/2 car garage.',
    longDescription:
      'A ground-up design/build single-family home in Washington Park delivering 3,720 sq ft of refined living. The plan emphasizes natural light, practical circulation, and a cohesive interior palette, culminating in a detached 2 1/2 car garage and outdoor living spaces.',
    facts: [
      { label: 'Scope', value: 'Design-Build New Construction' },
      { label: 'Square Footage', value: '3,720 sq ft' },
      { label: 'Garage', value: 'Detached 2 1/2 Car' },
      { label: 'Location', value: 'Washington Park' }
    ],
    gallery: [
      '/projects/emerson/emerson_01.jpg',
      '/projects/emerson/emerson_02.jpg',
      '/projects/emerson/emerson_03.jpg',
      '/projects/emerson/emerson_04.jpg',
      '/projects/emerson/emerson_05.jpg',
      '/projects/emerson/emerson_06.jpg',
      '/projects/emerson/emerson_07.jpg',
      '/projects/emerson/emerson_08.jpg',
      '/projects/emerson/emerson_09.jpg',
      '/projects/emerson/emerson_10.jpg',
      '/projects/emerson/emerson_11.jpg',
      '/projects/emerson/emerson_12.jpg'
    ]
  },
  {
    id: '10',
    title: '4694 Alcott St Denver',
    category: 'New Build',
    location: 'Sunnyside',
    image: '/projects/sunnyside/210217IMG_1450.jpg',
    description:
      'Ground-up new construction in Sunnyside, refined with an interior designer to deliver a cohesive finish vision on a fast 9-month timeline.',
    longDescription:
      'Built as a ground-up single-family residence in Sunnyside for a developer client who already had builder-grade plans in hand. We partnered with an interior designer to elevate finishes and ensure a cohesive aesthetic throughout, delivering 2,803 sq ft of living space with an attached two-car garage in a 9-month build window.',
    facts: [
      { label: 'Location', value: 'Sunnyside' },
      { label: 'Scope', value: 'Ground-Up New Construction' },
      { label: 'Home Type', value: 'Single Family Home' },
      { label: 'Square Footage', value: '2,803 sq ft' },
      { label: 'Garage', value: 'Attached 2-car' },
      { label: 'Timeline', value: '9 months' }
    ],
    gallery: [
      '/projects/sunnyside/210217IMG_1450.jpg',
      '/projects/sunnyside/210217IMG_1465.jpg',
      '/projects/sunnyside/210217IMG_1469.jpg',
      '/projects/sunnyside/210217IMG_1475.jpg',
      '/projects/sunnyside/210217IMG_1477.jpg',
      '/projects/sunnyside/210217IMG_1483.jpg',
      '/projects/sunnyside/210217IMG_1487.jpg',
      '/projects/sunnyside/210217IMG_1491.jpg',
      '/projects/sunnyside/210217IMG_1501.jpg',
      '/projects/sunnyside/210217IMG_1507.jpg',
      '/projects/sunnyside/210217IMG_1514.jpg',
      '/projects/sunnyside/210217IMG_1520.jpg',
      '/projects/sunnyside/210217IMG_1526.jpg',
      '/projects/sunnyside/210217IMG_1531.jpg',
      '/projects/sunnyside/210217IMG_1536.jpg',
      '/projects/sunnyside/210217IMG_1539.jpg',
      '/projects/sunnyside/210217IMG_1545.jpg',
      '/projects/sunnyside/210217IMG_1548.jpg'
    ]
  },
  {
    id: '11',
    title: '3640 + 3642 Mariposa St',
    category: 'New Build',
    location: 'Highlands',
    image: '/projects/mariposa/kyliefitts_3640mariposast_web_2.jpg',
    description:
      'A paired ground-up development in the Highlands—one oversized lot split into two adjacent single-family residences, delivered as one cohesive project.',
    longDescription:
      'A developer-led, ground-up new construction development in the Highlands. We scraped one existing home on an oversized lot, split the parcel, and built two adjacent single-family residences—3640 Mariposa (3,261 sq ft) and 3642 Mariposa (3,226 sq ft)—each with detached two-car garages. Both homes were completed on a 14-month timeline as part of one coordinated build effort.',
    facts: [
      { label: 'Location', value: 'Highlands' },
      { label: 'Scope', value: 'Ground-Up New Construction (2 Homes)' },
      { label: 'Timeline', value: '14 months' },
      { label: '3640 Mariposa', value: '3,261 sq ft — Detached 2-car garage' },
      { label: '3642 Mariposa', value: '3,226 sq ft — Detached 2-car garage' },
      { label: 'Development', value: 'Oversized lot scrape + lot split' }
    ],
    gallery: [
      '/projects/mariposa/kyliefitts_3640mariposast_web_2.jpg',
      '/projects/mariposa/kyliefitts_3640mariposast_web_3.jpg',
      '/projects/mariposa/kyliefitts_3640mariposast_web_8.jpg',
      '/projects/mariposa/kyliefitts_3640mariposast_web_9.jpg',
      '/projects/mariposa/kyliefitts_3640mariposast_web_11.jpg',
      '/projects/mariposa/kyliefitts_3640mariposast_web_12.jpg',
      '/projects/mariposa/kyliefitts_3640mariposast_web_14.jpg',
      '/projects/mariposa/kyliefitts_3640mariposast_web_15.jpg',
      '/projects/mariposa/kyliefitts_3640mariposast_web_16.jpg',
      '/projects/mariposa/kyliefitts_3640mariposast_web_19.jpg',
      '/projects/mariposa/kyliefitts_3640mariposast_web_22.jpg',
      '/projects/mariposa/kyliefitts_3640mariposast_web_25.jpg',
      '/projects/mariposa/kyliefitts_3640mariposast_web_29.jpg',
      '/projects/mariposa/kyliefitts_3640mariposast_web_32.jpg',
      '/projects/mariposa/kyliefitts_3640mariposast_web_33.jpg',
      '/projects/mariposa/kyliefitts_3640mariposast_web_41.jpg',
      '/projects/mariposa/kyliefitts_3640mariposast_web_42.jpg',
      '/projects/mariposa/kyliefitts_3640mariposast_web_43.jpg',
      '/projects/mariposa/kyliefitts_3642mariposast_web_2.jpg',
      '/projects/mariposa/kyliefitts_3642mariposast_web_4.jpg',
      '/projects/mariposa/kyliefitts_3642mariposast_web_7.jpg',
      '/projects/mariposa/kyliefitts_3642mariposast_web_13.jpg',
      '/projects/mariposa/kyliefitts_3642mariposast_web_14.jpg',
      '/projects/mariposa/kyliefitts_3642mariposast_web_19.jpg',
      '/projects/mariposa/kyliefitts_3642mariposast_web_23.jpg',
      '/projects/mariposa/kyliefitts_3642mariposast_web_24.jpg',
      '/projects/mariposa/kyliefitts_3642mariposast_web_25.jpg',
      '/projects/mariposa/kyliefitts_3642mariposast_web_26.jpg',
      '/projects/mariposa/kyliefitts_3642mariposast_web_29.jpg',
      '/projects/mariposa/kyliefitts_3642mariposast_web_32.jpg',
      '/projects/mariposa/kyliefitts_3642mariposast_web_35.jpg',
      '/projects/mariposa/kyliefitts_3642mariposast_web_42.jpg'
    ]
  },
  {
    id: '12',
    title: '925 S Emerson',
    category: 'Pop-Top',
    location: 'Washington Park',
    image:
      '/projects/emerson%202/925%20S%20Emerson%20St%20Denver%20CO-large-001-27-Exterior%20Front-1500x997-72dpi.jpg',
    description:
      'A full design-build pop-top, addition, and whole-home remodel expanding a classic Washington Park residence to 2,725 sq ft.',
    longDescription:
      'A comprehensive design-build transformation in Washington Park including an addition, pop-top, and full interior remodel. The final home delivers 2,725 sq ft of updated living space and includes a detached 2 1/2 car garage—balancing modern functionality with neighborhood character.',
    facts: [
      { label: 'Location', value: 'Washington Park' },
      { label: 'Scope', value: 'Addition + Pop-Top + Full Remodel' },
      { label: 'Delivery', value: 'Design-Build' },
      { label: 'Square Footage', value: '2,725 sq ft' },
      { label: 'Garage', value: 'Detached 2 1/2 Car' }
    ],
    gallery: [
      '/projects/emerson%202/925%20S%20Emerson%20St%20Denver%20CO-large-001-27-Exterior%20Front-1500x997-72dpi.jpg',
      '/projects/emerson%202/925%20S%20Emerson%20St%20Denver%20CO-large-003-20-Exterior%20Front%20Entry-1500x1000-72dpi.jpg',
      '/projects/emerson%202/925%20S%20Emerson%20St%20Denver%20CO-large-004-14-Living%20Room-1500x1000-72dpi.jpg',
      '/projects/emerson%202/925%20S%20Emerson%20St%20Denver%20CO-large-005-24-Living%20Room-1500x1000-72dpi.jpg',
      '/projects/emerson%202/925%20S%20Emerson%20St%20Denver%20CO-large-006-11-Living%20Room-1500x1000-72dpi.jpg',
      '/projects/emerson%202/925%20S%20Emerson%20St%20Denver%20CO-large-007-17-Dining%20Room-1500x1000-72dpi.jpg',
      '/projects/emerson%202/925%20S%20Emerson%20St%20Denver%20CO-large-008-3-Kitchen-1500x1000-72dpi.jpg',
      '/projects/emerson%202/925%20S%20Emerson%20St%20Denver%20CO-large-012-19-Breakfast%20Area-1500x1000-72dpi.jpg',
      '/projects/emerson%202/925%20S%20Emerson%20St%20Denver%20CO-large-015-13-Bathroom-1500x1000-72dpi.jpg',
      '/projects/emerson%202/925%20S%20Emerson%20St%20Denver%20CO-large-018-16-2nd%20Floor%20Master%20Bedroom-1500x1000-72dpi.jpg',
      '/projects/emerson%202/925%20S%20Emerson%20St%20Denver%20CO-large-021-15-2nd%20Floor%20Master%20Bathroom-1500x1000-72dpi.jpg',
      '/projects/emerson%202/925%20S%20Emerson%20St%20Denver%20CO-large-027-18-Back%20Yard-1500x1000-72dpi.jpg'
    ]
  },
  {
    id: '13',
    title: 'Lakewood Country Club',
    category: 'Remodel',
    location: 'Lakewood',
    image:
      '/projects/lakewood/7377%20Highland%20Drive%20Lakewood-large-001-9-Exterior%20Front-1500x1000-72dpi.jpg',
    description:
      'A full redesign and remodel executed as a design-build spec project near Lakewood Country Club.',
    longDescription:
      'A complete redesign and remodel completed as a design-build spec project in Lakewood. The work focused on rethinking layout, elevating materials, and delivering a clean, modern finish palette with strong market appeal.',
    facts: [
      { label: 'Location', value: 'Lakewood' },
      { label: 'Scope', value: 'Full Redesign & Remodel' },
      { label: 'Delivery', value: 'Design-Build' },
      { label: 'Project Type', value: 'Spec Project' }
    ],
    gallery: [
      '/projects/lakewood/7377%20Highland%20Drive%20Lakewood-large-001-9-Exterior%20Front-1500x1000-72dpi.jpg',
      '/projects/lakewood/7377%20Highland%20Drive%20Lakewood-large-006-7-Living%20Room-1500x1000-72dpi.jpg',
      '/projects/lakewood/7377%20Highland%20Drive%20Lakewood-large-011-2-Kitchen-1500x1000-72dpi.jpg',
      '/projects/lakewood/7377%20Highland%20Drive%20Lakewood-large-012-17-Kitchen-1500x1000-72dpi.jpg',
      '/projects/lakewood/7377%20Highland%20Drive%20Lakewood-large-013-27-Kitchen-1500x1000-72dpi.jpg',
      '/projects/lakewood/7377%20Highland%20Drive%20Lakewood-large-015-25-2nd%20Floor%20Master%20Bedroom-1500x1000-72dpi.jpg',
      '/projects/lakewood/7377%20Highland%20Drive%20Lakewood-large-016-26-2nd%20Floor%20Master%20Bedroom-1500x1000-72dpi.jpg',
      '/projects/lakewood/7377%20Highland%20Drive%20Lakewood-large-018-14-2nd%20Floor%20Master%20Bathroom-1500x1000-72dpi.jpg',
      '/projects/lakewood/7377%20Highland%20Drive%20Lakewood-large-020-24-2nd%20Floor%20Landing-1500x1000-72dpi.jpg',
      '/projects/lakewood/7377%20Highland%20Drive%20Lakewood-large-022-20-2nd%20Floor%20Family%20Room-1500x1000-72dpi.jpg',
      '/projects/lakewood/7377%20Highland%20Drive%20Lakewood-large-024-23-Lower%20Level%20Bathroom-1500x1000-72dpi.jpg',
      '/projects/lakewood/7377%20Highland%20Drive%20Lakewood-large-027-33-Deck-1500x1000-72dpi.jpg'
    ]
  },
  {
    id: '14',
    title: '578 S Washington',
    category: 'Remodel',
    location: 'Washington Park',
    image:
      '/projects/washington/578%20S%20Washington%20St%20Denver%20CO-large-001-13-Exterior%20Front-1500x999-72dpi.jpg',
    description:
      'A full-gut remodel and redesign delivered as a design-build spec project in Washington Park (~1,930 sq ft) with a two-car garage.',
    longDescription:
      'A full-gut renovation in Washington Park—redesigned and remodeled end-to-end as a design-build spec project. The scope reworked approximately 1,930 sq ft of living space to improve flow and function, and includes a two-car garage.',
    facts: [
      { label: 'Location', value: 'Washington Park' },
      { label: 'Scope', value: 'Full Gut + Redesign + Remodel' },
      { label: 'Delivery', value: 'Design-Build' },
      { label: 'Project Type', value: 'Spec Project' },
      { label: 'Square Footage', value: '~1,930 sq ft' },
      { label: 'Garage', value: '2-car' }
    ],
    gallery: [
      '/projects/washington/578%20S%20Washington%20St%20Denver%20CO-large-001-13-Exterior%20Front-1500x999-72dpi.jpg',
      '/projects/washington/578%20S%20Washington%20St%20Denver%20CO-large-002-11-Exterior%20Front-1500x1000-72dpi.jpg',
      '/projects/washington/578%20S%20Washington%20St%20Denver%20CO-large-004-1-Living%20Room-1500x1000-72dpi.jpg',
      '/projects/washington/578%20S%20Washington%20St%20Denver%20CO-large-005-3-Living%20Room-1500x1000-72dpi.jpg',
      '/projects/washington/578%20S%20Washington%20St%20Denver%20CO-large-008-23-Dining%20Room-1500x1000-72dpi.jpg',
      '/projects/washington/578%20S%20Washington%20St%20Denver%20CO-large-010-20-Kitchen-1500x1000-72dpi.jpg',
      '/projects/washington/578%20S%20Washington%20St%20Denver%20CO-large-012-9-Kitchen-1499x1000-72dpi.jpg',
      '/projects/washington/578%20S%20Washington%20St%20Denver%20CO-large-014-22-2nd%20Floor%20Master%20Bedroom-1500x1000-72dpi.jpg',
      '/projects/washington/578%20S%20Washington%20St%20Denver%20CO-large-015-14-2nd%20Floor%20Master%20Bedroom-1500x1000-72dpi.jpg',
      '/projects/washington/578%20S%20Washington%20St%20Denver%20CO-large-016-21-2nd%20Floor%20Master%20Bedroom-1500x1000-72dpi.jpg',
      '/projects/washington/578%20S%20Washington%20St%20Denver%20CO-large-018-7-2nd%20Floor%20Bedroom-1500x1000-72dpi.jpg',
      '/projects/washington/578%20S%20Washington%20St%20Denver%20CO-large-028-24-Back%20Yard-1500x1000-72dpi.jpg'
    ]
  },
  {
    id: '15',
    title: '982 S Penn',
    category: 'Remodel',
    location: 'Washington Park',
    image:
      '/projects/s%20penn/982%20S%20Pennsylvania%20St%20Denver-large-001-1-Exterior%20Front-1500x1000-72dpi.jpg',
    description:
      'A full-gut redesign and remodel in Washington Park (~2,250 sq ft) paired with a new detached two-car garage.',
    longDescription:
      'A Washington Park design-build project featuring a full-gut redesign and remodel of approximately 2,250 sq ft of living space. The scope also included a new detached two-car garage—bringing modern performance and comfort to a classic Denver home.',
    facts: [
      { label: 'Location', value: 'Washington Park' },
      { label: 'Scope', value: 'Full Gut + Redesign + Remodel' },
      { label: 'Delivery', value: 'Design-Build' },
      { label: 'Project Type', value: 'Spec Project' },
      { label: 'Square Footage', value: '~2,250 sq ft' },
      { label: 'Garage', value: 'New Detached 2-car' }
    ],
    gallery: [
      '/projects/s%20penn/982%20S%20Pennsylvania%20St%20Denver-large-001-1-Exterior%20Front-1500x1000-72dpi.jpg',
      '/projects/s%20penn/982%20S%20Pennsylvania%20St%20Denver-large-004-3-Front%20Porch-1500x1000-72dpi.jpg',
      '/projects/s%20penn/982%20S%20Pennsylvania%20St%20Denver-large-006-5-Foyer-1500x1000-72dpi.jpg',
      '/projects/s%20penn/982%20S%20Pennsylvania%20St%20Denver-large-008-6-Living%20Room-1500x1000-72dpi.jpg',
      '/projects/s%20penn/982%20S%20Pennsylvania%20St%20Denver-large-010-40-Dining%20Room-1500x1000-72dpi.jpg',
      '/projects/s%20penn/982%20S%20Pennsylvania%20St%20Denver-large-012-15-Kitchen-1500x1000-72dpi.jpg',
      '/projects/s%20penn/982%20S%20Pennsylvania%20St%20Denver-large-014-12-Kitchen-1500x1000-72dpi.jpg',
      '/projects/s%20penn/982%20S%20Pennsylvania%20St%20Denver-large-016-17-Kitchen-1500x1000-72dpi.jpg',
      '/projects/s%20penn/982%20S%20Pennsylvania%20St%20Denver-large-019-9-Family%20Room-1500x1000-72dpi.jpg',
      '/projects/s%20penn/982%20S%20Pennsylvania%20St%20Denver-large-020-16-Powder%20Room-1500x1000-72dpi.jpg',
      '/projects/s%20penn/982%20S%20Pennsylvania%20St%20Denver-large-021-29-2nd%20Floor%20Master%20Bedroom-1500x1000-72dpi.jpg',
      '/projects/s%20penn/982%20S%20Pennsylvania%20St%20Denver-large-025-30-2nd%20Floor%20Bathroom-1500x1000-72dpi.jpg',
      '/projects/s%20penn/982%20S%20Pennsylvania%20St%20Denver-large-033-35-Patio-1500x1000-72dpi.jpg',
      '/projects/s%20penn/982%20S%20Pennsylvania%20St%20Denver-large-034-25-Patio-1500x1000-72dpi.jpg',
      '/projects/s%20penn/982%20S%20Pennsylvania%20St%20Denver-large-036-38-Back%20Yard-1500x1000-72dpi.jpg'
    ]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Initial Consultation',
    description:
      'We start with a focused consultation to understand your scope, priorities, and site conditions. This step clarifies fit and establishes an initial path for a custom home or large-scale remodel in Denver.'
  },
  {
    number: '02',
    title: 'Design & Planning',
    description:
      'We coordinate with your architect and design team to refine drawings, selections, and constructability. The goal is a complete plan—so budget, schedule, and design decisions are aligned before construction begins.'
  },
  {
    number: '03',
    title: 'Pre-Construction',
    description:
      'We finalize pricing, permitting, and trade scheduling with clear documentation. This phase sets expectations and prevents midstream surprises—especially important for Denver zoning and permit timelines.'
  },
  {
    number: '04',
    title: 'Build Phase',
    description:
      'We manage the jobsite with disciplined scheduling, quality control, and structured homeowner updates. You receive consistent communication and milestone walkthroughs as the build progresses.'
  },
  {
    number: '05',
    title: 'Completion & Follow-Up',
    description:
      'Completion includes punch-list closure, clean documentation, and clear follow-up. Our team remains available after handover to ensure the home performs as intended and details are resolved promptly.'
  }
];
