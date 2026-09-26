import kenzeLogo from './kenze.png';
import ordinaLogo from './ordina.png';

export interface Course {
  /** chronological destination number; omitted for the catch-all rows */
  code?: string;
  name: string;
  line?: string;
  period: string;
  keywords: string[];
  description?: string[];
}

export interface Employer {
  id: string;
  name: string;
  logo: string;
  period: string;
  span: string;
  activity: string;
  description?: string[];
  courses: Course[];
}

export const employers: Employer[] = [
  {
    id: 'kenze',
    name: 'Kenze',
    logo: kenzeLogo,
    period: '10/2021 – now',
    span: '5 years',
    activity: '.NET developer consultant',
    description: [
      'Kenze is een fantastisch bedrijf. Ze blinken uit in hun menselijkheid en hun sales. Dit zorgt ervoor dat je je steeds als persoon behandeld wordt. Je bent geen nummer dat enkel maar dient om geld op te brengen. Feedback wordt serieus genomen, van zodra er een aantal mensen gelijkaardige kritiek uiten, gaan ze hier ook werkelijk mee aan de slag om na te gaan in hoeverre deze terecht zijn, door zelfs derde partijen in te schakelen. Ze zijn zich er perfect van bewust dat ze zelf ook maar mens zijn en en zetten de kritiek voor hun eigen trots.',
      'Ze hechten veel aandacht aan een goede match tussen consultant en klant. Daarom dat elke sales ook werkelijk een technische achtergrond heeft: ze weten m.a.w. goed wat ze verkopen.',
    ],
    courses: [
      {
        code: '10',
        name: 'Taxi Hendriks',
        line: 'Transport',
        period: '09/2024 – 12/2026',
        keywords: ['Domain-Driven Design (DDD)', 'Microservices Architecture', 'React (+Native)', 'CQRS'],
        description: [
          'Taxi Hendriks is gespecialiseerd in mindervalidentransport en ziekenhuistransport. Voor het ziekenhuistransport werd een nieuw softwareplatform ontwikkeld ter vervanging van een verouderd legacy-systeem dat niet langer schaalbaar was. De nieuwe applicatie ondersteunt het volledige proces, van backoffice en planning tot live tracking van transporten, een mobiele scanapplicatie en een platform om transporten aan te vragen. Bijzonder belangrijk hierbij zijn urgentie, realtime opvolging en conditionering, waaronder live temperatuurmonitoring. Het platform ondersteunt bovendien het transport van medische en nucleaire materialen, zoals stalen, bloed, isotopen en organen. Integraties met externe systemen, waaronder Webfleet-boordcomputers, maken het mogelijk om transporten en voertuigen realtime op te volgen.',
          'Het project werd door omstandigheden bij een externe partner tijdelijk on hold gezet. Parallel werd ondersteuning geboden voor de bestaande infrastructuur en software rond het mindervalidentransport. Hierbij werd gewerkt aan communicatie met boordcomputers, HR-systemen en Chiron, het systeem voor de rapportering van taxiritten aan de overheid. Messaging vormde hierbij een belangrijk onderdeel om gegevens betrouwbaar tussen verschillende systemen en processen uit te wisselen.',
        ],
      },
      {
        code: '09',
        name: 'Odot',
        period: '08/2023 – 09/2024',
        keywords: ['Analyst', 'Akka.NET', 'gRPC', 'RabbitMQ'],
      },
      {
        code: '08',
        name: 'Cascador',
        line: 'Tech support',
        period: '09/2022 – 02/2025',
        keywords: [
          'Technical Coach',
          'React',
          'TypeScript',
          'Frontend Architecture',
          'Mentoring & Code Reviews',
          'Startup Environment',
        ],
      },
      {
        code: '07',
        name: 'Actemium',
        line: 'Daikin',
        period: '05/2022 – 08/2023',
        // TODO: placeholder copied from Odot, replace with Actemium's real keywords
        keywords: ['Analyst', 'Akka.NET', 'gRPC', 'RabbitMQ'],
        description: [
          "Actemium ontwikkelt software voor het testen en valideren van industriële machines. De applicatie biedt een zeer flexibele drag-and-drop-interface waarmee testflows worden opgebouwd als een graphstructuur van nodes. Deze nodes stellen acties voor die sequentieel of parallel uitgevoerd kunnen worden, met ondersteuning voor verschillende succes- en faalscenario's. Het testen van deze flows is complex: de tests worden typisch \"setup-and-run\" uitgevoerd, waarbij alle stappen volledig doorlopen moeten worden zonder mogelijkheid tot manuele inspectie tijdens de uitvoering. Fouten worden achteraf enkel via logs geanalyseerd, wat debugging en iteratieve ontwikkeling bemoeilijkt, zeker voor eindgebruikers.",
          'In dit project werd een nieuwe debugfunctionaliteit toegevoegd aan de bestaande graph-based interface. Dit omvatte onder meer breakpoints op nodes, het overslaan van specifieke stappen en de mogelijkheid om testflows stap voor stap te doorlopen. Hierdoor werd het ontwikkel- en testproces aanzienlijk inzichtelijker en efficiënter. De functionaliteit werd succesvol opgeleverd en geïntegreerd in de bestaande architectuur. De implementatie van de debugger binnen de complexe graphstructuur werd als bijzonder sterk ervaren binnen het team, waarbij de tech lead zich positief verrast toonde door de aanpak en uitvoering.',
        ],
      },
      {
        code: '06',
        name: 'Connective',
        line: 'e-signing',
        period: '10/2021 – 12/2022',
        keywords: [
          'Team Lead',
          'React',
          'Design Systems',
          'Storybook',
          'From Scratch',
          'TypeScript',
          'Automated UI Testing',
        ],
      },
      {
        name: 'Various projects',
        line: 'Between assignments',
        period: 'Time gaps',
        keywords: ['Full-stack Modernization', 'Brownfield Migration', 'Big team'],
      },
    ],
  },
  {
    id: 'ordina',
    name: 'Ordina Belgium',
    logo: ordinaLogo,
    period: '08/2017 – 09/2021',
    span: '4 years',
    activity: '.NET developer consultant',
    courses: [
      {
        code: '05',
        name: 'Internship supervisor',
        period: '03/2021 – 05/2021',
        keywords: ['Supporting role', 'VR meeting app', 'Unity 3D', 'Brainstorming'],
      },
      {
        code: '04',
        name: 'VLM',
        line: 'Farmer regulations',
        period: '08/2020 – 05/2021',
        keywords: [
          'Frontend lead',
          'UX focus',
          '4 new applications',
          'Applying Angular knowledge',
          'Azure pipelines',
          '.NET Core',
        ],
      },
      {
        code: '03',
        name: 'VLM',
        line: 'MTIL 2.5',
        period: '09/2019 – 03/2020',
        keywords: [
          'Team lead',
          'Technical lead',
          'Analyst',
          'Angular',
          'Azure pipelines',
          'Technical vision',
          'Training starter',
        ],
      },
      {
        code: '02',
        name: 'IMEC',
        line: 'Calendar apps',
        period: '02/2019 – 03/2019',
        keywords: [
          'Technical Architect',
          'Short Deadline',
          'Microsoft Azure',
          'React',
          '.NET Core',
          'Performance Optimization',
          'From Scratch',
        ],
      },
      {
        code: '01',
        name: 'VLM',
        line: 'MTIL 2.0',
        period: '06/2018 – 12/2018',
        keywords: [
          'Complex Legacy Modernization',
          'Fullstack .NET Developer',
          'High-stakes Holiday Release',
          'Business Logic',
          'Small team',
        ],
      },
      {
        name: 'Various projects',
        line: 'Between assignments',
        period: 'Time gaps',
        keywords: ['Giving talks', 'Large teams', 'Research projects', 'Elastic Search', 'Trainings'],
      },
    ],
  },
];

export const skills = [
  {
    name: 'Programming languages',
    skills: [
      { name: 'TypeScript', rating: 7, description: 'Daily use, deep knowledge' },
      { name: 'C#', rating: 7, description: 'Daily use, deep knowledge' },
      { name: 'JavaScript', rating: 6, description: 'Indirect use, familiar with most of its quirks' },
    ],
  },
  {
    name: 'Frameworks',
    skills: [
      { name: 'React', rating: 7, description: 'Daily use, knows its ins and outs' },
      { name: 'ASP.NET', rating: 6, description: 'Daily use for any server app' },
      { name: 'Vue.js', rating: 5, description: 'Go-to framework in spare time' },
    ],
  },
  {
    name: 'Spoken languages',
    skills: [
      { name: 'Dutch', rating: 7, description: 'Mother tongue' },
      { name: 'English', rating: 6, description: 'Fluent understanding and writing' },
      { name: 'French', rating: 2, description: 'Basic understanding' },
    ],
  },
];
