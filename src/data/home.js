// Home page content. Anything marked SAMPLE is placeholder data, not a real claim.
// Copy that differs from the Stitch export (to avoid unsupported claims or invented dosages) is noted inline.

export const ANNOUNCE = {
  pill: 'Prototype Build',
  // Stitch: "Validated on 1.2M+ botanical field samples across 48 crop genera." (unsupported claim)
  text: 'Interface preview with sample data. No AI model is connected yet.',
  linkLabel: 'See how it works',
};

// SAMPLE: counts and confidence values are placeholders.
// Stitch descriptions began "Full diagnostic coverage for …"; reworded to "Planned coverage" since no model exists yet.
export const CROP_CATEGORIES = [
  {
    icon: 'nutrition',
    count: 34,
    title: 'Solanaceous Crops',
    crops: 'Tomato, Potato, Pepper, Eggplant',
    description: 'Planned coverage: Late Blight, Early Blight, Septoria, Tomato Mosaic Virus, and Verticillium wilt.',
    confidence: '99.2%',
  },
  {
    icon: 'yard',
    count: 26,
    title: 'Cucurbits',
    crops: 'Cucumber, Melon, Squash, Watermelon',
    description: 'Planned coverage: Powdery Mildew, Downy Mildew, Gummy Stem Blight, Anthracnose, and Fusarium wilt.',
    confidence: '98.9%',
  },
  {
    icon: 'nest_eco_leaf',
    count: 19,
    title: 'Brassicas',
    crops: 'Cabbage, Broccoli, Cauliflower, Kale',
    description: 'Planned coverage: Black Rot (Xanthomonas), Alternaria leaf spot, Downy Mildew, and Clubroot foliar stress markers.',
    confidence: '98.6%',
  },
  {
    icon: 'spa',
    count: 22,
    title: 'Berries & Cane Fruit',
    crops: 'Strawberry, Raspberry, Blueberry',
    description: 'Planned coverage: Botrytis Gray Mold, Strawberry Leaf Scorching, Anthracnose, and Angular Leaf Spot.',
    confidence: '99.1%',
  },
  {
    icon: 'grass',
    count: 18,
    title: 'Legumes & Pulses',
    crops: 'Soybean, Common Bean, Pea, Chickpea',
    description: 'Planned coverage: Soybean Rust, Ascochyta blight, Common Bacterial Blight, and Bean Common Mosaic Virus.',
    confidence: '98.4%',
  },
  {
    icon: 'filter_vintage',
    count: 25,
    title: 'Cereals & Maize',
    crops: 'Wheat, Maize, Barley, Rice',
    description: 'Planned coverage: Stripe Rust, Northern Corn Leaf Blight, Blast, and Sheath Blight under varied field lighting.',
    confidence: '98.8%',
  },
];

// SAMPLE: every figure below is a placeholder. Stitch also claimed on-device ONNX models and "100% Audit Traceability".
export const BENEFITS = [
  {
    icon: 'radar',
    title: 'Early Stage Detection',
    body: 'Aims to surface subtle foliar stress before lesions become clearly visible.',
    value: '-72h',
    label: 'Intervention Window',
  },
  {
    icon: 'sanitizer',
    title: 'Reduced Chemical Input',
    body: 'Supports targeted, patch-level decisions instead of blanket field-wide applications.',
    value: '38%',
    label: 'Avg Fungicide Savings',
  },
  {
    icon: 'wifi_off',
    title: 'Offline Edge Capture',
    body: 'Planned on-device capture for remote acreage without cellular coverage.',
    value: '0 kbps',
    label: 'Connectivity Needed',
  },
  {
    icon: 'query_stats',
    title: 'Field Telemetry Archive',
    body: 'Planned history of scans to map recurring problem areas across seasons.',
    value: '100%',
    label: 'Audit Traceability',
  },
];

// Illustrative content only. Stitch listed specific products, rates, temperatures and durations;
// those were replaced with qualitative guidance. SAMPLE rate badge replaces "Neural Recognition Rate" claims.
export const SPOTLIGHTS = [
  {
    id: 'early-blight',
    tab: 'Early Blight',
    image: 'spotlightEarlyBlight',
    alt: 'Early blight lesions with concentric rings on a tomato leaf',
    badge: 'Fungal: Alternaria solani',
    title: 'Early Blight (Alternaria solani)',
    taxon: 'Taxon: Eukaryota / Ascomycota',
    description:
      'Characterized by dark brown, leathery concentric rings resembling a bulls-eye or target pattern, usually surrounded by prominent chlorotic yellow margins on older bottom foliage.',
    boxes: [
      {
        label: 'Immediate Bio-Control',
        text: 'Biological and copper-based options are commonly discussed at first signs. Confirm suitability and product labels with a local agronomist.',
      },
      {
        label: 'Cultural Prevention',
        text: 'Remove affected lower leaves and use drip irrigation to reduce spore-splash back onto the foliage.',
      },
    ],
    rate: '99.4%',
    note: 'Favoured by warm, humid conditions',
  },
  {
    id: 'late-blight',
    tab: 'Late Blight',
    image: 'spotlightLateBlight',
    alt: 'Late blight water-soaked lesions on a potato leaf',
    badge: 'Oomycete: Phytophthora infestans',
    title: 'Late Blight (Phytophthora infestans)',
    taxon: 'Taxon: Oomycota / Stramenopila',
    description:
      'Highly aggressive water-soaked dark gray-green lesions rapidly expanding across the canopy. A delicate white bloom may appear on leaf undersides during high relative humidity.',
    boxes: [
      {
        label: 'Emergency Remediation',
        text: 'Remove and destroy severely infected plants promptly. Chemical options vary by region and resistance management, so follow local guidance.',
      },
      {
        label: 'Field Hygiene',
        text: 'Clear cull piles, sanitize tools, and keep the canopy open so foliage dries quickly after dew or rain.',
      },
    ],
    rate: '99.7%',
    note: 'Can spread rapidly in cool, wet weather',
  },
  {
    id: 'bacterial-spot',
    tab: 'Bacterial Spot',
    image: 'spotlightBacterialSpot',
    alt: 'Bacterial leaf spot lesions on a pepper leaf',
    badge: 'Bacteria: Xanthomonas spp.',
    title: 'Bacterial Leaf Spot (Xanthomonas spp.)',
    taxon: 'Taxon: Pseudomonadota / Xanthomonadaceae',
    description:
      'Small, circular to angular water-soaked greasy specks that turn black-brown with sunken centers. Heavy infections can cause leaf drop and expose developing fruit to scald.',
    boxes: [
      {
        label: 'Management Options',
        text: 'Biological and copper-based options exist but efficacy varies. Follow local extension guidance and product labels.',
      },
      {
        label: 'Seed & Transplants',
        text: 'Start with certified, pathogen-free seed and transplants, and ask your supplier about seed treatment options.',
      },
    ],
    rate: '98.8%',
    note: 'Aggravated by warm driving rain and overhead irrigation',
  },
  {
    id: 'leaf-mold',
    tab: 'Leaf Mold',
    image: 'spotlightLeafMold',
    alt: 'Leaf mold spots on the upper surface of a tomato leaf',
    badge: 'Fungal: Passalora fulva',
    title: 'Tomato Leaf Mold (Passalora fulva)',
    taxon: 'Taxon: Mycosphaerellaceae',
    description:
      'The upper leaf surface shows pale yellow chlorotic spots with indistinct edges, matching a dense olive-brown velvety fungal layer on the underside. Common in high-tunnel greenhouses.',
    boxes: [
      {
        label: 'Greenhouse Climate Control',
        text: 'Lower relative humidity by improving ventilation and air circulation, especially overnight.',
      },
      {
        label: 'Organic Options',
        text: 'Biological and bicarbonate-type foliar products are sometimes used. Check labels and local guidance before applying.',
      },
    ],
    rate: '99.1%',
    note: 'Dominant in commercial poly-tunnel environments',
  },
];

// Stitch showed six real institutions (WUR, INRAE, CGIAR, EMBRAPA, Bio Suisse, CSIRO) as collaborators.
// No such partnerships exist, so neutral placeholders are shown instead.
export const PARTNER_PLACEHOLDERS = ['Partner 01', 'Partner 02', 'Partner 03', 'Partner 04', 'Partner 05', 'Partner 06'];
