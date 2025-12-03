import { 
  Bot, 
  Palette, 
  Sparkles, 
  Layout, 
  Code, 
  PenTool, 
  Globe, 
  ShieldCheck, 
  HardDrive, 
  Briefcase,
  Wifi,
  Laptop,
  BookOpen,
  Clock,
  FolderOpen,
  Server,
  FileText,
  Upload,
  Image,
  Video,
  AlertTriangle,
  XCircle,
  HelpCircle,
  Users
} from 'lucide-react';

export const NAV_LINKS = [
  { label: 'Start', href: '#prereqs' },
  { label: 'Concepts', href: '#concepts' },
  { label: 'Tools', href: '#tools' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'Projects', href: '#projects' },
  { label: 'Resources', href: '#resources' },
  { label: 'FAQ', href: '#faq' },
];

export const PREREQUISITES = [
  { icon: Wifi, text: 'Stable internet connection' },
  { icon: Laptop, text: 'Laptop or Smartphone' },
  { icon: BookOpen, text: 'Basic reading ability' },
  { icon: Clock, text: '20–60 minutes per session' },
  { icon: FolderOpen, text: 'A folder to save files' },
];

export const KEY_CONCEPTS = [
  { 
    term: 'Website', 
    definition: 'A collection of web pages accessible on the internet.',
    analogy: 'Like a book available in a library.',
    icon: Layout 
  },
  { 
    term: 'Domain', 
    definition: 'The address people type to find your website (e.g., google.com).',
    analogy: 'Like your home address.',
    icon: Globe 
  },
  { 
    term: 'Hosting', 
    definition: 'The service that stores your website files so others can access them.',
    analogy: 'Like renting land or a shop space.',
    icon: Server 
  },
  { 
    term: 'Web Page', 
    definition: 'A single document on a website (e.g., About Us page).',
    analogy: 'Like a single page in a book.',
    icon: FileText 
  },
  { 
    term: 'Assets', 
    definition: 'The images, logos, videos, and text used on your site.',
    analogy: 'Like the furniture and decoration in your house.',
    icon: Image 
  },
  { 
    term: 'Publishing', 
    definition: 'Making your website live for the world to see.',
    analogy: 'Like opening your shop for business.',
    icon: Upload 
  },
];

export const INTRO_POINTS = [
  { icon: Layout, text: 'Build websites' },
  { icon: PenTool, text: 'Generate content' },
  { icon: Palette, text: 'Design images' },
  { icon: Globe, text: 'Deploy applications' },
];

export const AI_TOOLS = [
  {
    category: 'Assistants & Content',
    items: [
      {
        name: 'ChatGPT',
        description: 'Write website content, generate HTML/CSS/JS, create design ideas, and build full websites using prompts.',
        icon: Bot,
        color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
      },
      {
        name: 'Google Gemini',
        description: 'Content generation, image creation, and structured data extraction for your web projects.',
        icon: Sparkles,
        color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
      },
    ]
  },
  {
    category: 'Website Builders',
    items: [
      {
        name: 'Canva',
        description: 'Drag-and-drop interface with templates for websites, logos, and UI/UX. Includes hosting.',
        icon: Palette,
        color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
      },
      {
        name: 'Durable.co',
        description: 'AI website builder that generates a site in seconds.',
        icon: Globe,
        color: 'bg-zinc-200 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300',
      },
      {
        name: 'Wix ADI',
        description: 'AI that designs your website for you based on your answers.',
        icon: Layout,
        color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400',
      },
      {
        name: 'Framer AI',
        description: 'Generate fully responsive websites from simple text prompts.',
        icon: Code,
        color: 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400',
      },
    ]
  }
];

export const TOOLS_COMPARISON = [
  { name: 'ChatGPT', function: 'Writes content + code', difficulty: 'Easy', cost: 'Free' },
  { name: 'Canva', function: 'Design + websites', difficulty: 'Super Easy', cost: 'Free' },
  { name: 'Gemini', function: 'Images + content', difficulty: 'Medium', cost: 'Free' },
  { name: 'Wix ADI', function: 'Builds website', difficulty: 'Medium', cost: 'Free' },
  { name: 'Framer AI', function: 'Instant websites', difficulty: 'Medium', cost: 'Free' },
];

export const TOOL_USE_CASES = [
  {
    tool: 'ChatGPT',
    uses: [
      'Write "About Us" page text',
      'Generate product descriptions',
      'Create raw HTML/CSS code',
      'Design site structure/sitemap',
      'Generate lesson plans'
    ],
    icon: Bot,
    color: 'text-emerald-700 bg-emerald-100 dark:text-emerald-400 dark:bg-emerald-950/50'
  },
  {
    tool: 'Canva',
    uses: [
      'Create business logos',
      'Design social media posts',
      'Build website hero banners',
      'Design professional CVs',
      'Create event flyers'
    ],
    icon: Palette,
    color: 'text-purple-700 bg-purple-100 dark:text-purple-400 dark:bg-purple-950/50'
  },
  {
    tool: 'Gemini',
    uses: [
      'Generate AI images',
      'Enhance photos',
      'Create infographics',
      'Generate website backgrounds',
      'Brainstorm visual concepts'
    ],
    icon: Sparkles,
    color: 'text-blue-700 bg-blue-100 dark:text-blue-400 dark:bg-blue-950/50'
  }
];

export const LIVE_DEMO_STEPS = [
  { title: 'Visit canva.com', description: 'Open your browser and go to the Canva website.' },
  { title: 'Search "website template"', description: 'Use the search bar to find a template that suits your style.' },
  { title: 'Pick a design', description: 'Click on a template you like to open the editor.' },
  { title: 'Click "Edit"', description: 'Customize the design by clicking on elements.' },
  { title: 'Replace text', description: 'Double click text boxes to add your own content.' },
  { title: 'Publish', description: 'Click the "Publish Website" button and choose "Free domain".' }
];

export const BEGINNER_PROJECTS = [
  {
    title: 'Simple Portfolio Website',
    items: ['Home Page', 'About Me', 'Services', 'Contact Info'],
    tool: 'Canva / Wix'
  },
  {
    title: 'Business Poster',
    items: ['Headline', 'Image', 'Offer details', 'Contact Info'],
    tool: 'Canva'
  },
  {
    title: 'Create AI Logos',
    items: ['Brand Name', 'Icon', 'Color Palette'],
    tool: 'Gemini + Canva'
  },
  {
    title: 'Build a CV',
    items: ['Experience', 'Education', 'Skills', 'Photo'],
    tool: 'Canva'
  }
];

export const ASSIGNMENT = {
  title: 'Practical Assignment',
  task: 'Create a one-page website about yourself using Canva and publish it.',
  alternative: 'Design a poster for your business using Canva and submit it.'
};

export const COMMON_MISTAKES = [
  { mistake: 'Choosing too many colors', fix: 'Stick to 2-3 primary colors' },
  { mistake: 'Using blurry pictures', fix: 'Use high-quality stock or AI images' },
  { mistake: 'Adding too much text', fix: 'Keep it short and scannable' },
  { mistake: 'Forgetting to publish', fix: 'Always check if the link works' },
  { mistake: 'Not saving designs', fix: 'Enable auto-save or save frequently' },
  { mistake: 'Using copyrighted images', fix: 'Use royalty-free resources' },
  { mistake: 'Making websites too long', fix: 'Simple always wins' },
];

export const IMAGE_TOOLS = {
  premium: ['Google Gemini', 'ChatGPT Image Tools'],
  free: ['Lexica Art', 'PlaygroundAI', 'Leonardo AI', 'Ideogram']
};

export const FREE_ASSETS = {
  images: ['Pexels', 'Unsplash', 'Pixabay'],
  icons: ['Icons8', 'Flaticon', 'FontAwesome'],
  templates: ['Canva templates', 'Google Sites templates']
};

export const CLOUD_STORAGE = [
  { name: 'Google Drive', storage: '15GB Free', price: '$1.99/mo', icon: HardDrive },
  { name: 'OneDrive', storage: '5GB Free', price: '$6.99/mo', icon: HardDrive },
  { name: 'Dropbox', storage: '2GB Free', price: '$9.99/mo', icon: HardDrive },
  { name: 'pCloud', storage: '10GB Free', price: '$4.99/mo', icon: HardDrive },
  { name: 'Mega', storage: '20GB Free', price: '$5.60/mo', icon: HardDrive },
];

export const WORKFLOW_STEPS = [
  {
    step: 1,
    title: 'Content & Structure',
    description: 'Ask ChatGPT: "Create a website for my business". Generate page structure and text content.',
    icon: Bot
  },
  {
    step: 2,
    title: 'Design Assets',
    description: 'Use Canva to design logos, buttons, and banners. Use Gemini to create professional images.',
    icon: Palette
  },
  {
    step: 3,
    title: 'Build',
    description: 'Assemble the site using Canva, Wix ADI, or Framer AI using the assets and content generated.',
    icon: Layout
  },
  {
    step: 4,
    title: 'Publish',
    description: 'Publish your website. Many AI builders offer free domains or hosting.',
    icon: Globe
  },
  {
    step: 5,
    title: 'Store',
    description: 'Store all your project assets (images, copy docs) in cloud storage for safekeeping.',
    icon: HardDrive
  }
];

export const SECURITY_TIPS = [
  'Use strong, unique passwords',
  'Enable two-factor authentication (2FA)',
  'Install antivirus (Windows Defender is sufficient)',
  'Keep your system updated regularly',
  'Avoid downloading from untrusted sources',
  'Back up your data regularly',
];

export const CAREER_OPPS = [
  'Freelance on Fiverr, Upwork, Toptal',
  'Build a professional portfolio',
  'Teach digital literacy to others',
  'Start an online business',
  'Offer web design services',
  'Create content for companies',
];

export const FAQ_ITEMS = [
  { q: "Why can't my website publish?", a: "Check your internet connection and ensure you've verified your email if required. Some platforms require a premium plan for custom domains." },
  { q: "My Canva is slow", a: "Try clearing your browser cache, closing unused tabs, or checking your internet speed." },
  { q: "My images are blurry", a: "Ensure you are using high-resolution images. Avoid stretching small images to fit large areas." },
  { q: "What if I forget my password?", a: "Use the 'Forgot Password' link on the login page to reset it via email." },
  { q: "How to recover files?", a: "Check the 'Trash' or 'Deleted' folder in your tool or cloud storage. Most keep files for 30 days." },
];