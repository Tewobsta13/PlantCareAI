/**
 * Shared disease knowledge (Solanaceae / tomato set from the Stitch library).
 * Feeds the Library page, the Home spotlights' style of content, and the mock analysis results.
 *
 * ILLUSTRATIVE ONLY: guidance is deliberately qualitative. The Stitch export contained specific
 * rates, temperatures, product names and intervals; those were removed. Content needs review by a
 * qualified agronomist/plant pathologist before any real use. Index/percent figures are SAMPLE values.
 */

export const CROPS = ['All Crops', 'Tomato', 'Potato', 'Bell Pepper', 'Eggplant', 'Cucumbers'];

export const SEVERITY_TIERS = [
  { id: 'all', label: 'All Severity' },
  { id: 'high', label: 'High Risk', dot: 'bg-error' },
  { id: 'moderate', label: 'Moderate', dot: 'bg-amber-500' },
  { id: 'benign', label: 'Benign / Healthy', dot: 'bg-secondary' },
];

export const DISEASES = [
  {
    id: 'healthy',
    name: 'Healthy Tomato',
    scientific: 'Solanum lycopersicum',
    crop: 'tomato',
    severity: 'benign',
    taxon: { no: '#01-SL', group: 'Solanaceae Family', icon: 'energy_savings_leaf' },
    badge: { label: 'Healthy / Optimal', tone: 'healthy' },
    chip: '99.8% Index',
    image: 'libHealthyTomato',
    summary:
      'Balanced vegetative vigor, sturdy petiole structure, no fungal or bacterial lesions. Deep uniform chlorophyll synthesis with intact cuticle integrity.',
    practice: {
      icon: 'check_circle',
      title: 'Optimal Best Practices',
      tone: 'neutral',
      text: 'Keep nutrition and irrigation balanced, maintain steady moisture, and give plants good light and airflow. Scout regularly.',
    },
    matrix: {
      pathogenType: 'Non-pathogenic',
      marker: 'Uniform dark green lamina, zero chlorosis',
      temp: 'N/A',
      latency: 'N/A',
      action: 'Nutritional Regimen',
      actionTone: 'neutral',
    },
    result: {
      status: 'No Pathogen Signature · Sample Result',
      category: 'healthy',
      confidence: 0.991,
      affectedArea: 0,
      areaTier: 'None',
      pathogenClass: 'None',
      pathogenFamily: 'Not applicable',
      vector: 'None',
      vectorDetail: 'No active vector',
      description:
        'The sample foliage shows uniform colour, intact tissue and no lesion patterns associated with the pathogens in this library. Healthy-looking foliage does not rule out very early or non-visible problems.',
      risk: 'Low. Continue routine scouting and good crop husbandry.',
      signatures: [
        { label: 'Uniform Colour', text: 'Even green lamina without chlorotic patches.' },
        { label: 'Intact Tissue', text: 'No necrotic spots, water-soaking or holes.' },
        { label: 'Clean Undersides', text: 'No visible spore mats or fuzz.' },
      ],
      triggers: [
        { icon: 'water_drop', title: 'Balanced Moisture', text: 'Steady, even watering supports healthy foliage.' },
        { icon: 'thermostat', title: 'Comfortable Temperatures', text: 'Avoid extreme swings that stress plants.' },
        { icon: 'air', title: 'Good Airflow', text: 'Open canopies dry faster and discourage disease.' },
      ],
      cultural: [
        { title: 'Keep Scouting', text: 'Inspect lower and older leaves regularly for early symptoms.' },
        { title: 'Maintain Airflow', text: 'Prune and space plants so foliage dries quickly.' },
        { title: 'Water at the Base', text: 'Prefer drip or soaker irrigation over overhead watering.' },
      ],
      chemical: [{ title: 'None Indicated', text: 'No treatment is suggested for healthy foliage.' }],
    },
  },
  {
    id: 'early-blight',
    name: 'Early Blight',
    scientific: 'Alternaria solani',
    crop: 'tomato',
    severity: 'moderate',
    taxon: { no: '#02-AS', group: 'Pleosporaceae Order', icon: 'coronavirus' },
    badge: { label: 'Fungal / Moderate-High', tone: 'moderate' },
    chip: 'Pathogen: Fungi',
    image: 'libEarlyBlight',
    summary:
      'Concentric dark brown ‘target’ spots surrounded by bright chlorotic halos. Initiates in lower senescing foliage and ascends progressively up the canopy.',
    practice: {
      icon: 'shield',
      title: 'Phytosanitary Protocol',
      tone: 'neutral',
      text: 'Remove affected lower foliage, mulch to reduce soil splash, and discuss protectant options with a local agronomist before rain periods.',
    },
    matrix: {
      pathogenType: 'Alternaria solani (Fungus)',
      marker: 'Target concentric rings, bottom-up ascent',
      temp: 'Warm',
      latency: 'Days',
      action: 'Lower Pruning + Protectant',
      actionTone: 'neutral',
    },
    result: {
      status: 'Fungal Pathogen · Sample Result',
      category: 'fungal',
      confidence: 0.948,
      affectedArea: 18.5,
      areaTier: 'Moderate Tier',
      pathogenClass: 'Ascomycete',
      pathogenFamily: 'Pleosporaceae',
      vector: 'Free Moisture',
      vectorDetail: 'Airborne Conidia',
      description:
        'Early Blight is a common foliar disease caused by the fungus Alternaria solani. It typically affects the oldest, lowest foliage first before progressing toward upper vegetative nodes. The fungus can enter through stomata or small wounds, causing tissue necrosis.',
      risk: 'Left unmanaged, canopy defoliation can expose fruit to sunscald and reduce yield. Severity varies with conditions and variety.',
      signatures: [
        { label: 'Concentric Rings', text: 'Distinct “target board” necrotic rings within mature leaf lesions.' },
        { label: 'Chlorotic Halo', text: 'Diffuse yellow margin surrounding the brown necrotic focus.' },
        { label: 'Basal Senescence', text: 'Starts in the lower canopy with premature leaf drop and drying.' },
      ],
      triggers: [
        {
          icon: 'water_drop',
          title: 'Prolonged Leaf Wetness',
          text: 'Persistent dew or overhead irrigation keeping foliage wet for long periods.',
        },
        { icon: 'thermostat', title: 'Warm Conditions', text: 'Sustained warm temperatures favour spore germination and spread.' },
        { icon: 'air', title: 'Restricted Airflow', text: 'Dense planting trapping humidity in the understory.' },
      ],
      cultural: [
        {
          title: 'Sanitary De-leafing & Pruning',
          text: 'Carefully remove infected lower foliage with clean tools. Bag and discard it off-site; do not compost.',
        },
        {
          title: 'Water at the Base',
          text: 'Move from overhead sprinklers to drip or soaker irrigation to limit splash-back and leaf wetting.',
        },
        {
          title: 'Protectant Options',
          text: 'Biological or copper-based protectants may be used in some regions. Follow local guidance and product labels.',
        },
        { title: 'Crop Rotation', text: 'Rotate away from tomatoes, peppers, potatoes and eggplants for several seasons.' },
      ],
      chemical: [
        {
          title: 'Consult Local Guidance',
          text: 'Fungicide choice, timing and legality vary by region. Ask a local agronomist or extension service.',
        },
        {
          title: 'Follow the Label',
          text: 'Always follow label directions for rates, intervals, protective equipment and harvest restrictions.',
        },
        {
          title: 'Rotate Modes of Action',
          text: 'Rotating chemistries helps limit resistance; a qualified advisor can recommend a programme.',
        },
      ],
      alternates: [
        { label: 'Septoria Leaf Spot (Septoria lycopersici)', p: 0.032 },
        { label: 'Late Blight (Phytophthora infestans)', p: 0.014 },
        { label: 'Asymptomatic / Healthy Foliage', p: 0.006 },
      ],
    },
  },
  {
    id: 'late-blight',
    name: 'Late Blight',
    scientific: 'Phytophthora infestans',
    crop: 'tomato',
    severity: 'high',
    taxon: { no: '#03-PI', group: 'Peronosporaceae Order', icon: 'warning' },
    badge: { label: 'Oomycete / Severe Threat', tone: 'severe' },
    chip: 'Level 4 Alert',
    image: 'libLateBlight',
    summary:
      'Rapidly spreading water-soaked greasy olive lesions transitioning to necrosis. Characterized by white velvety spore fuzz on the leaf underside under high humidity.',
    practice: {
      icon: 'crisis_alert',
      title: 'Critical Containment',
      tone: 'critical',
      text: 'Remove and destroy infected plants promptly to limit spread, avoid overhead irrigation, and seek local advice quickly: this disease can move fast.',
    },
    matrix: {
      pathogenType: 'P. infestans (Oomycete)',
      marker: 'Greasy water-soaked spots, abaxial white fuzz',
      temp: 'Cool',
      latency: 'Short',
      action: 'Immediate Culling',
      actionTone: 'critical',
    },
    result: {
      status: 'Oomycete Pathogen · Sample Result',
      category: 'oomycete',
      confidence: 0.887,
      affectedArea: 31.2,
      areaTier: 'High Tier',
      pathogenClass: 'Oomycete',
      pathogenFamily: 'Peronosporaceae',
      vector: 'Wind & Rain',
      vectorDetail: 'Airborne Sporangia',
      description:
        'Late Blight is caused by the oomycete Phytophthora infestans. It favours cool, wet conditions and can spread quickly across a crop, producing greasy water-soaked lesions that turn necrotic.',
      risk: 'High. This disease can destroy foliage and fruit quickly under favourable weather. Seek local advice promptly.',
      signatures: [
        { label: 'Water-Soaked Lesions', text: 'Greasy, dark olive patches that expand rapidly.' },
        { label: 'White Spore Fuzz', text: 'Velvety white growth on leaf undersides in humid conditions.' },
        { label: 'Rapid Spread', text: 'Lesions merge and collapse tissue across the canopy.' },
      ],
      triggers: [
        { icon: 'water_drop', title: 'Cool, Wet Weather', text: 'Prolonged moisture and cool nights favour infection.' },
        { icon: 'thermostat', title: 'Mild Temperatures', text: 'Moderate temperatures support fast lesion growth.' },
        { icon: 'air', title: 'Wind-Borne Spread', text: 'Spores can travel between plots on the wind.' },
      ],
      cultural: [
        { title: 'Remove Infected Plants', text: 'Bag and destroy severely affected plants; avoid leaving debris in the field.' },
        { title: 'Avoid Overhead Irrigation', text: 'Keep foliage as dry as possible and water at the base.' },
        { title: 'Clear Volunteers & Cull Piles', text: 'Remove potato and tomato volunteers that can carry the pathogen.' },
        { title: 'Consider Resistant Varieties', text: 'Ask your supplier about varieties with tolerance for future seasons.' },
      ],
      chemical: [
        {
          title: 'Seek Urgent Local Advice',
          text: 'Options and timing are region-specific. Contact a local agronomist or extension service promptly.',
        },
        { title: 'Follow the Label', text: 'Use only registered products and follow label directions and restrictions.' },
      ],
      alternates: [
        { label: 'Early Blight (Alternaria solani)', p: 0.071 },
        { label: 'Bacterial Spot (Xanthomonas perforans)', p: 0.028 },
        { label: 'Asymptomatic / Healthy Foliage', p: 0.014 },
      ],
    },
  },
  {
    id: 'bacterial-spot',
    name: 'Bacterial Spot',
    scientific: 'Xanthomonas perforans',
    crop: 'tomato',
    severity: 'high',
    taxon: { no: '#04-XP', group: 'Gram-negative Aerobe', icon: 'bubble_chart' },
    badge: { label: 'Bacterial / High Risk', tone: 'highrisk' },
    chip: 'Xanthomonadaceae',
    image: 'libBacterialSpot',
    summary:
      'Small dark brown water-soaked lesions with yellow margins that eventually dry out, creating jagged ‘shot-hole’ perforations. Can cause flower drop and fruit scabbing.',
    practice: {
      icon: 'medical_services',
      title: 'Remediation Plan',
      tone: 'neutral',
      text: 'Start from certified clean seed, avoid handling plants when wet, and ask a local advisor about copper-based or other options.',
    },
    matrix: {
      pathogenType: 'X. perforans (Bacterium)',
      marker: 'Angular water specks, shot-hole fallout',
      temp: 'Warm',
      latency: 'Days',
      action: 'Seed Hygiene',
      actionTone: 'neutral',
    },
    result: {
      status: 'Bacterial Pathogen · Sample Result',
      category: 'bacterial',
      confidence: 0.903,
      affectedArea: 14.6,
      areaTier: 'Moderate Tier',
      pathogenClass: 'Gamma-proteobacterium',
      pathogenFamily: 'Xanthomonadaceae',
      vector: 'Splash & Handling',
      vectorDetail: 'Rain, Irrigation, Tools',
      description:
        'Bacterial Spot is caused by Xanthomonas bacteria. Small, dark, water-soaked lesions with yellow margins can dry and fall out, leaving a shot-hole appearance, and may also affect fruit.',
      risk: 'Moderate to high. Warm, wet weather and overhead irrigation can spread it quickly.',
      signatures: [
        { label: 'Angular Specks', text: 'Small dark lesions limited by leaf veins.' },
        { label: 'Yellow Margins', text: 'Chlorotic rings around lesions.' },
        { label: 'Shot-Hole Effect', text: 'Dried lesion centres drop out of the leaf.' },
      ],
      triggers: [
        { icon: 'water_drop', title: 'Rain & Irrigation Splash', text: 'Splashing water spreads bacteria between leaves.' },
        { icon: 'thermostat', title: 'Warm Weather', text: 'Warm, humid periods favour development.' },
        { icon: 'back_hand', title: 'Handling Wet Plants', text: 'Tools and hands can move bacteria around the crop.' },
      ],
      cultural: [
        { title: 'Use Clean Seed & Transplants', text: 'Source certified, pathogen-free material.' },
        { title: 'Avoid Working Wet Plants', text: 'Delay handling until foliage is dry and sanitize tools.' },
        { title: 'Reduce Overhead Irrigation', text: 'Water at the base to limit splash.' },
      ],
      chemical: [
        {
          title: 'Ask for Local Guidance',
          text: 'Copper-based and other products are sometimes used; effectiveness varies. Consult local advice and labels.',
        },
        { title: 'Follow the Label', text: 'Observe label directions, restrictions and safety requirements.' },
      ],
      alternates: [
        { label: 'Early Blight (Alternaria solani)', p: 0.052 },
        { label: 'Septoria Leaf Spot (Septoria lycopersici)', p: 0.031 },
        { label: 'Asymptomatic / Healthy Foliage', p: 0.014 },
      ],
    },
  },
  {
    id: 'leaf-mold',
    name: 'Leaf Mold',
    scientific: 'Passalora fulva (Cladosporium)',
    crop: 'tomato',
    severity: 'moderate',
    taxon: { no: '#05-PF', group: 'Micro-climate Induced', icon: 'nest_heat_link_gen_3' },
    badge: { label: 'Greenhouse Prevalent', tone: 'greenhouse' },
    chip: 'Cladosporiaceae',
    image: 'libLeafMold',
    summary:
      'Pale diffuse yellow blotches on the upper blade matched by velvety olive-green to tawny sporulation on leaf undersides. Leaves eventually curl, wither, and drop.',
    practice: {
      icon: 'air',
      title: 'Microclimate Aeration',
      text: 'Improve ventilation to bring humidity down, space plants generously, prune dense growth and avoid long periods of wet foliage.',
      tone: 'neutral',
    },
    matrix: {
      pathogenType: 'Passalora fulva (Fungus)',
      marker: 'Upper yellow blotch, underside olive velvet',
      temp: 'Moderate',
      latency: 'Weeks',
      action: 'Ventilation',
      actionTone: 'neutral',
    },
    result: {
      status: 'Fungal Pathogen · Sample Result',
      category: 'fungal',
      confidence: 0.921,
      affectedArea: 12.3,
      areaTier: 'Moderate Tier',
      pathogenClass: 'Ascomycete',
      pathogenFamily: 'Mycosphaerellaceae',
      vector: 'Humid Air',
      vectorDetail: 'Airborne Spores',
      description:
        'Leaf Mold is a fungal disease common in humid greenhouses and high tunnels. Pale yellow patches on upper leaf surfaces correspond to olive-brown velvety growth underneath.',
      risk: 'Moderate. Leaves can curl, wither and drop under persistent high humidity.',
      signatures: [
        { label: 'Yellow Blotches', text: 'Pale, indistinct spots on the upper leaf surface.' },
        { label: 'Olive Underside Mat', text: 'Velvety olive-brown growth on the underside.' },
        { label: 'Leaf Curl & Drop', text: 'Heavily affected leaves wither and fall.' },
      ],
      triggers: [
        { icon: 'water_drop', title: 'High Humidity', text: 'Persistent humid air promotes sporulation.' },
        { icon: 'thermostat', title: 'Mild Temperatures', text: 'Moderate temperatures in enclosed spaces suit the fungus.' },
        { icon: 'air', title: 'Poor Ventilation', text: 'Stagnant air in tunnels and greenhouses.' },
      ],
      cultural: [
        { title: 'Improve Ventilation', text: 'Open vents and use airflow to reduce humidity, especially overnight.' },
        { title: 'Space & Prune', text: 'Thin dense growth so the canopy dries quickly.' },
        { title: 'Remove Affected Leaves', text: 'Take off and discard heavily infected foliage.' },
      ],
      chemical: [
        {
          title: 'Ask for Local Guidance',
          text: 'Some biological or fungicidal options exist; suitability varies. Consult a local advisor and product labels.',
        },
      ],
      alternates: [
        { label: 'Early Blight (Alternaria solani)', p: 0.044 },
        { label: 'Late Blight (Phytophthora infestans)', p: 0.025 },
        { label: 'Asymptomatic / Healthy Foliage', p: 0.01 },
      ],
    },
  },
];

export const getDisease = (id) => DISEASES.find((d) => d.id === id);
