import portfolioDigimro from "public/images/digimro.png";
import portfolioDigimro2 from "public/images/digimro2.png";
import portfolioEOC from "public/images/eoc.png";
import portfolioEOC2 from "public/images/eoc-2.png";
import portfolioCredlix from "public/images/credlix.png";
import portfolioCredlix2 from "public/images/credlix-2.png";
import portfolioMaas from "public/images/maas.png";
import portfolioMaas2 from "public/images/maas-2.png";

export const products = [
  {
    href: "https://www.digimro.com/",
    title: "DIGIMRO",
    description:
      "DigiMRO, India’s top distributor of low voltage security products, offers global brands, expert logistics, and extensive industry experience to help clients grow and succeed.",
    thumbnail: portfolioDigimro,
    images: [portfolioDigimro, portfolioDigimro2],
    stack: ["Nextjs", "Tailwindcss", "Redux"],
    slug: "digimro",
    content: (
      <div>
        <p>
          DigiMRO is India&apos;s top distributor of various low voltage security products,
          offering a wide range of global brands. With decades of experience in B2B distribution,
          we work with major brands in CCTV, Access Control, Fire, Power, Audio/Video, and Network Systems.{" "}
        </p>
        <p>
          As the largest system integration installer in the country, DigiMRO partners with top industry brands.
          Our extensive reach, expertise, and logistics help suppliers and customers boost competitiveness,
          maintain essential supply chains, and grow their business.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://eoc.moglix.com/",
    title: "EOC(Excel on Cloud)",
    description:
      "Developed an internal application that managed Purchase and Sale orders. I used a custom Excel-like interface to handle items and track the entire lifecycle of orders and products.",
    thumbnail: portfolioEOC,
    images: [portfolioEOC, portfolioEOC2],
    stack: ["Angular", "Angular Material", "RxJS", "HTML", "SCSS"],
    slug: "eoc",
    content: (
      <div>
        <p>
          Developed user interfaces using HTML, CSS, JavaScript, TypeScript,
          and Angular technologies such as Observables, RxJS, Dependency Injection, Lazy loading, Routing,
          Directives, Pipes, Reactive forms, Angular Material, and Bootstrap.
          I also utilized tools like Angular CLI, GitHub for version control, and worked in a Linux environment.{" "}
        </p>
        <p>
          I worked on an internal app to create and track Purchase/Sale orders.
          I designed a custom Excel-like UI to manage order items and built the user interface.
          I integrated APIs and worked with the design team to create an engaging UI.
          I also helped connect the visual elements with the server-side infrastructure.
          Throughout the project, I followed agile methods and attended SCRUM meetings to track progress and issues using JIRA.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://www.credlix.com/",
    title: "CREDLIX",
    description:
      "Credlix is a digital supply chain finance platform from Moglix. We provide quick, collateral-free working capital solutions for enterprises, suppliers, and exporters in India and Southeast Asia to connect to global manufacturing opportunities.",
    thumbnail: portfolioCredlix,
    images: [portfolioCredlix, portfolioCredlix2],
    stack: ["Angular", "Angular Material", "RxJS", "HTML", "SCSS", "CSS", "bootstrap"],
    slug: "credlix",
    content: (
      <div>
        <p>
          At Credlix, we leverage Moglix&apos;s expertise in end-to-end supply chain transformation,
          supporting 700 enterprises and 16,000 SMEs that export to 53 countries worldwide.
          We combine this with intelligent financial technology to reimagine cash-flow lending.{" "}
        </p>
        <p>
          We offer solutions like Early Payment, Vendor Finance, and Channel Finance for enterprises,
          and Invoice Discounting and Purchase Order Finance for exporters. Our platform connects anchor enterprises,
          suppliers, exporters, and lenders to keep the supply chain and export finance moving seamlessly..
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://maas.moglix.com/",
    title: "MAAS",
    description:
      "Developed an Angular app to enhance internal productivity by tracking bulk orders and the order cycle in real-time. Features include Invoice Breakup, Payment Breakup, Credit/Debit Notes, Summary page, sidebar, Customer WPR Remarks, Project Tracker, Customer advances, and PDCs using Angular Material.",
    thumbnail: portfolioMaas,
    images: [portfolioMaas, portfolioMaas2],
    stack: ["Angular", "Angular Material", "RxJS", "HTML", "SCSS"],
    slug: "maas",
    content: (
      <div>
        <p>
          Additionally, the application tracks Customer advances, PDCs, Header,
          lots, inventory, and stages. The dashboard provides a comprehensive view of order details, financials,
          and summaries, helping users stay informed and efficient.{" "}
        </p>
        <p>
          Using Angular Material, the app delivers a user-friendly interface,
          making it easier for the team to manage orders and improve overall workflow.
        </p>{" "}
      </div>
    ),
  },
];
