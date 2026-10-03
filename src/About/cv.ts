import kenzeLogo from './img/kenze.png';
import ordinaLogo from './img/ordina.png';
import hendriksLogo from './img/hendriks.png';
import odotLogo from './img/odot.png';
import cascadorLogo from './img/cascador.png';
import actemiumLogo from './img/actemium.png';
import connectiveLogo from './img/connective.png';
import vlmLogo from './img/vlm.png';
import imecLogo from './img/imec.png';
import digipolisLogo from './img/digipolis.png';
import fluxysLogo from './img/fluxys.png';
import gosselinLogo from './img/gosselin.png';
import intrumLogo from './img/intrum.png';
import securexLogo from './img/securex.png';
import technicolorLogo from './img/technicolor.png';
import angularLogo from './img/angular.png';
import typescriptLogo from './img/typescript.png';
import reactLogo from './img/react.png';

import type { Text } from '../i18n';

export const EMAIL = 'cv@rhythm-coder.dev';

export const LINKS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dieter-van-broeck-476092142/' },
  { label: 'GitHub', href: 'https://github.com/didii' },
];

// Full years between two "MM/YYYY" dates; "now" (or nothing) means today.
export const yearsBetween = (from: string, to = 'now') => {
  const months = (d: string) => {
    if (d === 'now') return new Date().getFullYear() * 12 + new Date().getMonth();
    const [m, y] = d.split('/').map(Number) as [number, number];
    return y * 12 + m - 1;
  };
  return Math.floor((months(to) - months(from)) / 12);
};
// full years in "MM/YYYY – MM/YYYY" or "MM/YYYY – now"
export const spanOf = (period: string) => yearsBetween(...(period.split(' – ') as [string, string]));

// Since the first professional job (Ordina); student jobs don't count.
export const yearsOfExperience = () => yearsBetween('08/2017');

export interface Course {
  img?: string;
  name: Text;
  role?: string;
  line?: string;
  period: string;
  keywords: string[];
  description?: Text; // HTML
}

export interface Employer {
  id: string;
  name: string;
  logo: string;
  period: string;
  activity: Text;
  description?: Text; // HTML
  courses: Course[];
}

export const employers: Employer[] = [
  {
    id: 'kenze',
    name: 'Kenze',
    logo: kenzeLogo,
    period: '10/2021 – now',
    activity: { en: '.NET developer consultant', nl: '.NET-consultant' },
    description: {
      en: `
        <p>
          Kenze is an IT consultancy where Dieter has worked as a .NET consultant since October 2021. The company invests heavily in a good match
          between consultant and client: every salesperson has a technical background, so assignments fit the consultant's profile in substance.
        </p>
        <p>
          Kenze also has an open feedback culture. When several employees give similar feedback, it is actively followed up and, where needed,
          investigated with the help of external parties.
        </p>
      `,
      nl: `
      <p>
        Kenze is een IT-consultancybedrijf waar Dieter sinds oktober 2021 als .NET-consultant werkt. Het bedrijf zet sterk in op een goede match
        tussen consultant en klant: elke salesmedewerker heeft zelf een technische achtergrond, waardoor opdrachten inhoudelijk goed aansluiten bij
        het profiel van de consultant.
      </p>
      <p>
        Daarnaast heeft Kenze een open feedbackcultuur. Wanneer meerdere medewerkers gelijkaardige feedback geven, wordt die actief opgevolgd en
        indien nodig met hulp van externe partijen onderzocht.
      </p>
    `,
    },
    courses: [
      {
        img: hendriksLogo,
        name: 'Taxi Hendriks',
        role: 'Technical Lead / Fullstack .NET Developer',
        line: 'Transport',
        period: '09/2024 – now',
        keywords: ['Domain-Driven Design (DDD)', 'Microservices Architecture', 'React (+Native)', 'CQRS'],
        description: {
          en: `
            <p>
              Taxi Hendriks specialises in transport for people with reduced mobility and hospital transport. For hospital transport, a new software
              platform was built to replace an outdated legacy system that no longer scaled. The new application supports the full process, from back
              office and planning to live tracking of transports, a mobile scanning app and a platform to request transports. Urgency, real-time
              follow-up and conditioning, including live temperature monitoring, are especially important. The platform also supports the transport of
              medical and nuclear materials, such as samples, blood, isotopes and organs. Integrations with external systems, including Webfleet
              on-board computers, make it possible to follow transports and vehicles in real time.
            </p>
            <p>
              Due to circumstances at an external partner, the project was temporarily put on hold. In parallel, support was provided for the existing
              infrastructure and software around transport for people with reduced mobility. This involved communication with on-board computers, HR
              systems and Chiron, the system that reports taxi rides to the government. Messaging was a key part of this, to exchange data reliably
              between different systems and processes.
            </p>
          `,
          nl: `
          <p>
            Taxi Hendriks is gespecialiseerd in mindervalidentransport en ziekenhuistransport. Voor het ziekenhuistransport werd een nieuw
            softwareplatform ontwikkeld ter vervanging van een verouderd legacy-systeem dat niet langer schaalbaar was. De nieuwe applicatie
            ondersteunt het volledige proces, van backoffice en planning tot live tracking van transporten, een mobiele scanapplicatie en een platform
            om transporten aan te vragen. Bijzonder belangrijk hierbij zijn urgentie, realtime opvolging en conditionering, waaronder live
            temperatuurmonitoring. Het platform ondersteunt bovendien het transport van medische en nucleaire materialen, zoals stalen, bloed,
            isotopen en organen. Integraties met externe systemen, waaronder Webfleet-boordcomputers, maken het mogelijk om transporten en voertuigen
            realtime op te volgen.
          </p>
          <p>
            Het project werd door omstandigheden bij een externe partner tijdelijk on hold gezet. Parallel werd ondersteuning geboden voor de
            bestaande infrastructuur en software rond het mindervalidentransport. Hierbij werd gewerkt aan communicatie met boordcomputers,
            HR-systemen en Chiron, het systeem voor de rapportering van taxiritten aan de overheid. Messaging vormde hierbij een belangrijk onderdeel
            om gegevens betrouwbaar tussen verschillende systemen en processen uit te wisselen.
          </p>
        `,
        },
      },
      {
        img: odotLogo,
        name: 'Odot',
        role: 'Fullstack .NET Developer',
        line: 'EMP',
        period: '08/2023 – 09/2024',
        keywords: ['React', 'TypeScript', 'ASP.NET (Web API)', 'Azure', 'CQRS', 'SignalR'],
        description: {
          en: `
            <p>
              Odot operates in the energy market and offers both internal and external applications to support the purchase and follow-up of energy.
              Through the Energy Management Platform (EMP), the internal application, employees manage companies, contracts and meters and buy energy in
              advance by locking in prices for certain periods. The Customer Portal (MyOdot) is the external application that gives customers insight
              into their energy prices and consumption. It visualises the relevant data in a user-friendly way, giving customers a clearer view of their
              energy use and the associated costs.
            </p>
          `,
          nl: `
          <p>
            Odot is actief binnen de energiemarkt en biedt zowel interne als externe applicaties ter ondersteuning van de aankoop en opvolging van
            energie. Via het Energy Management Platform (EMP), de interne applicatie, kunnen medewerkers bedrijven, contracten en meters beheren en
            energie op voorhand aankopen door prijzen voor bepaalde periodes vast te klikken. De Customer Portal (MyOdot) is de externe applicatie
            waarmee klanten inzicht krijgen in hun energieprijzen en verbruik. De applicatie visualiseert de relevante gegevens op een
            gebruiksvriendelijke manier en geeft klanten zo meer inzicht in hun energiegebruik en de bijbehorende kosten.
          </p>
        `,
        },
      },
      {
        img: actemiumLogo,
        name: 'Actemium',
        role: '.NET Developer',
        line: 'Testplan debugger',
        period: '05/2023 – 08/2023',
        keywords: ['Analyst', 'Akka.NET', 'gRPC', 'RabbitMQ', 'WPF', 'Entity Framework'],
        description: {
          en: `
            <p>
              Actemium builds software to test and validate industrial machines. The application offers a very flexible drag-and-drop interface in which
              test flows are built as a graph of nodes. These nodes represent actions that can run sequentially or in parallel, with support for
              different success and failure scenarios. Testing these flows is complex: tests typically run "setup-and-run", where every step has to
              complete without any chance of manual inspection during execution. Errors can only be analysed afterwards through logs, which makes
              debugging and iterative development hard, especially for end users.
            </p>
            <p>
              This project added new debugging functionality to the existing graph-based interface, including breakpoints on nodes, skipping specific
              steps and stepping through test flows one step at a time. This made the development and testing process considerably more transparent and
              efficient. The functionality was delivered successfully and integrated into the existing architecture. The team considered the
              implementation of the debugger within the complex graph structure particularly strong, and the tech lead was pleasantly surprised by the
              approach and execution.
            </p>
          `,
          nl: `
        <p>
          Actemium ontwikkelt software voor het testen en valideren van industriële machines. De applicatie biedt een zeer flexibele
          drag-and-drop-interface waarmee testflows worden opgebouwd als een graphstructuur van nodes. Deze nodes stellen acties voor die sequentieel
          of parallel uitgevoerd kunnen worden, met ondersteuning voor verschillende succes- en faalscenario's. Het testen van deze flows is complex:
          de tests worden typisch "setup-and-run" uitgevoerd, waarbij alle stappen volledig doorlopen moeten worden zonder mogelijkheid tot manuele
          inspectie tijdens de uitvoering. Fouten worden achteraf enkel via logs geanalyseerd, wat debugging en iteratieve ontwikkeling bemoeilijkt,
          zeker voor eindgebruikers.
        </p>
        <p>
          In dit project werd een nieuwe debugfunctionaliteit toegevoegd aan de bestaande graph-based interface. Dit
          omvatte onder meer breakpoints op nodes, het overslaan van specifieke stappen en de mogelijkheid om testflows stap voor stap te doorlopen.
          Hierdoor werd het ontwikkel- en testproces aanzienlijk inzichtelijker en efficiënter. De functionaliteit werd succesvol opgeleverd en
          geïntegreerd in de bestaande architectuur. De implementatie van de debugger binnen de complexe graphstructuur werd als bijzonder sterk
          ervaren binnen het team, waarbij de tech lead zich positief verrast toonde door de aanpak en uitvoering.
        </p>
        `,
        },
      },
      {
        img: cascadorLogo,
        name: 'Cascador',
        role: 'Technical Coach',
        line: 'Tech support',
        period: '09/2022 – 02/2025',
        keywords: ['React', 'TypeScript', 'Frontend Architecture', 'Mentoring & Code Reviews', 'Startup Environment'],
        description: {
          en: `
            <p>
              Cascador collects medical data from sources such as hospitals, anonymises it and forwards it to clients such as pharmaceutical companies.
              This makes data that is often lost in healthcare institutions usable after all, with the aim of improving the development of medicines
              and treatments.
            </p>
            <p>
              In this start-up environment with limited resources, support was requested for frontend development because it was not progressing
              enough. Dieter took on a guiding role, with regular code reviews, technical support on request and a strategy to improve the frontend
              architecture.
            </p>
          `,
          nl: `
          <p>
            Cascador richt zich op het verzamelen van medische data uit onder meer ziekenhuizen, het anonimiseren ervan en het doorsturen naar klanten
            zoals farmaceutische bedrijven. Hierdoor wordt data die vaak verloren gaat in zorginstellingen alsnog capteerbaar gemaakt, met als doel de
            ontwikkeling van geneesmiddelen en behandelingen te verbeteren.
          </p>
          <p>
            Binnen deze start-upomgeving, waar de middelen beperkt zijn, werd ondersteuning gevraagd voor de frontendontwikkeling omdat deze
            onvoldoende vooruitgang boekte. Dieter nam hierbij een begeleidende rol op zich, met regelmatige code reviews, technische ondersteuning op
            vraag en het uitwerken van een verbeterstrategie voor de frontendarchitectuur.
          </p>
        `,
        },
      },
      {
        img: gosselinLogo,
        name: 'Gosselin',
        role: 'Fullstack .NET Developer',
        line: 'Gosselin',
        period: '12/2022 – 04/2023',
        keywords: ['Frontend lead', 'React', 'ASP.NET (Web API)', '.NET Core', 'Code Reviews'],
        description: {
          en: `
            <p>
              Gosselin is a major logistics company based in Antwerp and has been a partner of the US Department of Defense for many years. The company
              handles the first- and last-mile shipping of personal goods for US Army personnel on bases in Europe. With the renewal of the latest
              tender came the need to modernise the existing software landscape and to provide more data integrations with other partners in the DoD
              ecosystem. To meet the requirements of the contract in time, Gosselin took over an existing software product from a partner to develop
              further.
            </p>
          `,
          nl: `
          <p>
            Gosselin is een grote logistieke speler gevestigd in Antwerpen en is al meerdere jaren partner van het Amerikaanse Department of Defense.
            Het bedrijf staat in voor de first- en last-mile verzending van persoonlijke goederen van US Army-personeel op bases in Europa. Met de
            vernieuwing van de laatste aanbesteding ontstond de nood om het bestaande softwarelandschap te moderniseren en meer data-integraties te
            voorzien met andere partners binnen het DoD-ecosysteem. Gosselin nam hiervoor een bestaand softwareproduct over van een partner om verder
            uit te bouwen en zo tijdig aan de vereisten van de opdracht te voldoen.
          </p>
        `,
        },
      },
      {
        img: connectiveLogo,
        name: 'Connective',
        role: 'Teamlead / Frontend Developer',
        line: 'e-signing',
        period: '10/2021 – 12/2022',
        keywords: ['React', 'Design Systems', 'Storybook', 'From Scratch', 'TypeScript', 'Automated UI Testing'],
        description: {
          en: `
            <p>
              Connective mainly provides digital signing of documents and supports several signing methods. The frontend application for signers,
              called WYSIWYS (What You See Is What You Sign), was due for a redesign, both in code quality and user experience. There was a strong focus
              on setting up a component library, for which Storybook was introduced, along with a customisable theming system that clients could choose
              and the library supported.
            </p>
          `,
          nl: `
          <p>
            Connective verzorgt voornamelijk digitale ondertekening van documenten en ondersteunt verschillende ondertekenmethodes. De
            frontendapplicatie voor ondertekenaars, genaamd WYSIWYS (What You See Is What You Sign), was toe aan een herontwerp, zowel op vlak van
            codekwaliteit als gebruikerservaring. Er lag hierbij een sterke focus op het opzetten van een componentenbibliotheek, waarvoor Storybook
            werd geïntroduceerd, evenals een systeem voor aanpasbare theming dat door klanten kon worden gekozen en ondersteund door de library.
          </p>
        `,
        },
      },
    ],
  },
  {
    id: 'ordina',
    name: 'Ordina Belgium',
    logo: ordinaLogo,
    period: '08/2017 – 09/2021',
    activity: { en: '.NET developer consultant', nl: '.NET-consultant' },
    description: {
      en: `
        <p>
          Ordina is an IT service provider in the Benelux and the place where Dieter started his career as a consultant. As a starter he received an
          excellent series of trainings that gave him a solid foundation in professional software development, even before he started at his first
          client.
        </p>
        <p>
          The highlight was Thursday evenings: with food provided, colleagues came together to experiment with all kinds of technology. A wide range
          of toys was ready, from rovers and drones to VR headsets, leaving plenty of room to try new things and learn from each other.
        </p>
      `,
      nl: `
      <p>
        Ordina is een IT-dienstverlener in de Benelux en was de plek waar Dieter zijn carrière als consultant startte. Als starter kreeg hij
        er een uitstekende reeks opleidingen die hem een stevige basis gaven in professionele softwareontwikkeling, nog voor hij bij zijn
        eerste klant aan de slag ging.
      </p>
      <p>
        Hoogtepunt waren de donderdagavonden: met eten voorzien kwamen collega's samen om te experimenteren met allerlei technologie. Er stond
        een ruim aanbod aan speelgoed klaar, van rovers en drones tot VR-headsets, waardoor er volop ruimte was om nieuwe dingen uit te
        proberen en van elkaar te leren.
      </p>
    `,
    },
    courses: [
      {
        name: { en: 'Internship supervisor', nl: 'Stagebegeleider' },
        period: '03/2021 – 05/2021',
        keywords: ['Supporting role', 'VR meeting app', 'Unity 3D', 'Brainstorming'],
        description: {
          en: `
            <p>
              Dieter supervised two interns building a playful VR meeting room. Besides helping them structure their code, his focus was mainly on
              organising and following up the work and on brainstorming ideas and features.
            </p>
          `,
          nl: `
          <p>
            Dieter begeleidde twee stagiairs bij het bouwen van een speelse VR-vergaderruimte. Naast hulp bij het structureren van hun code
            lag zijn focus vooral op het organiseren en opvolgen van het werk en op het brainstormen over ideeën en functionaliteiten.
          </p>
        `,
        },
      },
      {
        img: vlmLogo,
        name: 'VLM',
        line: 'Mestbank',
        role: 'Teamlead / Fullstack .NET Developer',
        period: '09/2019 – 05/2021',
        keywords: [
          'Frontend lead',
          'UX focus',
          '4 new applications',
          'Applying Angular knowledge',
          'Azure pipelines',
          '.NET Core',
        ],
        description: {
          en: `
            <p>
              Between 2019 and 2021, Dieter worked at VLM on several evolutions of the MTIL and TOMAS systems, applications that digitise and enforce
              complex agricultural and manure transport regulations. MTIL 2.5 focused on extending an existing web application for requesting and
              validating manure transports. The emphasis was on improving stability, maintainability and separation of concerns in the architecture,
              resulting in a stable release with new features and positive user feedback.
            </p>
            <p>
              A follow-up track around Mestbank covered both a modern .NET Core/Angular platform and the maintenance and extension of existing legacy MVC
              and jQuery applications. Dieter combined the roles of developer, analyst and tech lead, focusing on architectural refactoring, improving
              the layered design and increasing testability and maintainability. He also supported MTIL by solving critical issues and setting up
              security and integration components within the wider VLM ecosystem.
            </p>
            <p>
              In the TOMAS 2 project, a small multidisciplinary team built a completely renewed application to manage agricultural restrictions,
              including automated rules, objection procedures, document management and a portal for both farmers and administrative users. Dieter took
              on the role of frontend tech lead (Angular) and UX lead, with additional backend contributions in ASP.NET Core and active involvement in
              analysis and team coordination. The project was delivered successfully within the scope of the initial release, with a clear technical
              vision and attention to further evolution.
            </p>
          `,
          nl: `
          <p>
            Tussen 2019 en 2021 werkte Dieter bij VLM aan meerdere evoluties van de MTIL- en TOMAS-systemen, applicaties die complexe landbouw- en
            mesttransportreglementering digitaliseren en handhaven. MTIL 2.5 focuste op het uitbreiden van een bestaande webapplicatie voor het
            aanvragen en valideren van mesttransporten. De nadruk lag op het verhogen van stabiliteit, onderhoudbaarheid en scheiding van
            verantwoordelijkheden in de architectuur, wat resulteerde in een stabiele release met nieuwe functionaliteiten en positieve
            gebruikersfeedback.
          </p>
          <p>
            In een daaropvolgend traject rond Mestbank werd gewerkt aan zowel een modern .NET Core/Angular-platform als onderhoud en uitbreiding van
            bestaande legacy MVC- en jQuery-applicaties. Dieter combineerde hierbij rollen als ontwikkelaar, analist en tech lead, met focus op
            architecturale refactoring, het verbeteren van layered design en het verhogen van testbaarheid en maintainability. Daarnaast werd
            ondersteuning geboden aan MTIL door het oplossen van kritieke issues en het opzetten van security- en integratiecomponenten binnen het
            bredere VLM-ecosysteem.
          </p>
          <p>
            In het TOMAS 2-project werd in een klein multidisciplinair team een volledig vernieuwde toepassing ontwikkeld voor het beheer van
            landbouwrestricties, inclusief automatisering van regels, bezwaarprocedures, documentbeheer en een portaal voor zowel boeren als
            administratieve gebruikers. Dieter nam hierbij de rol van frontend tech lead (Angular) en UX-verantwoordelijke op zich, met bijkomende
            backendbijdragen in ASP.NET Core en actieve betrokkenheid bij analyse en teamcoördinatie. Het project werd succesvol opgeleverd binnen de
            scope van de initiële release, met een duidelijke technische visie en aandacht voor verdere evolutie.
          </p>
        `,
        },
      },
      {
        img: fluxysLogo,
        name: 'Fluxys',
        role: '.NET Developer',
        line: 'Connect',
        period: '03/2019 – 11/2019',
        keywords: ['ASP.NET (MVC)', 'jQuery', 'Knockout JS', 'T-SQL', 'Angular', 'XML / XSLT', 'Message Queues'],
        description: {
          en: `
            <p>
              Fluxys is a company specialised in gas transport in Belgium. Dieter's team focused mainly on the communication software Connect, which
              handles communication with customers and between internal Fluxys applications. This software follows the pipes-and-filters pattern with
              message queues, and the codebase consists largely of XML transformations.
            </p>
            <p>
              The existing application had two major problems: high memory usage and no at-least-once guarantee on messages. Together with a senior
              architect consultant, possible solutions for a new version (Connect v2) were investigated. During wider discussions about this new
              version, Dieter also became responsible for extending an existing application with a real-time auction platform. The complexity of
              real-time processing had initially been underestimated and further analysis was needed, which Dieter was only too happy to take on. He
              also managed several smaller applications, mainly consisting of database operations through stored procedures and file processing.
            </p>
            <p>
              Because of the waterfall structure within Fluxys and the lack of open communication between teams, collaboration was difficult, which
              made integration harder. After repeated alignment and feedback, it was mutually decided to end the collaboration earlier than planned,
              with enough time to document the work and hand it over to the next developer.
            </p>
          `,
          nl: `
          <p>
            Fluxys is een bedrijf gespecialiseerd in het transport van gas in België. Het team waarin Dieter werkte focuste voornamelijk op de
            communicatiesoftware Connect, die instaat voor communicatie met klanten en tussen interne Fluxys-applicaties. Deze software is opgezet
            volgens het pipes-and-filters patroon met message queues, waarbij de codebase grotendeels bestaat uit XML-transformaties.
          </p>
          <p>
            De bestaande applicatie kende twee belangrijke problemen: een hoog geheugengebruik en het ontbreken van een at-least-once garantie op
            berichten. Samen met een senior architect-consultant werden mogelijke oplossingen voor een nieuwe versie (Connect v2) onderzocht. Tijdens
            bredere discussies over deze nieuwe versie werd Dieter ook verantwoordelijk voor de uitbreiding van een bestaande applicatie met een
            real-time veilingplatform, waarbij de complexiteit van real-time verwerking initieel onvoldoende was ingeschat en bijkomende analyses
            noodzakelijk waren, waar Dieter zich maar al te graag over boog. Daarnaast werden nog verschillende kleinere toepassingen beheerd,
            voornamelijk bestaande uit database-operaties via stored procedures en bestandsverwerking.
          </p>
          <p>
            Door de watervalstructuur binnen Fluxys en het ontbreken van open communicatie tussen de verschillende teams verliep de samenwerking
            moeilijk, wat de integratie bemoeilijkte. Na herhaaldelijke afstemming en feedback werd in onderling overleg beslist om de samenwerking
            vroeger dan gepland te beëindigen, waarbij voldoende tijd werd voorzien om het werk te documenteren en overdracht te voorzien voor de
            volgende ontwikkelaar.
          </p>
        `,
        },
      },
      {
        img: imecLogo,
        name: 'IMEC',
        role: 'Technical Architect / Fullstack .NET Developer',
        line: 'PTW',
        period: '02/2019 – 03/2019',
        keywords: [
          'Short Deadline',
          'Microsoft Azure',
          'React',
          '.NET Core',
          'Performance Optimization',
          'From Scratch',
        ],
        description: {
          en: `
            <p>
              IMEC organises two scientific conferences a year and built a SharePoint application for them that lets clients browse all available
              presentations. Entering presentations and managing access rights is currently done through an Excel file and a PowerShell script that
              syncs this data to SharePoint.
            </p>
            <p>
              The existing client app suffered from serious performance problems: loading the application could take users several minutes. The
              security rules were also complex and scaled badly, because a separate security group was created for every unique combination of
              partners, which pushed the Excel file to its limits.
            </p>
            <p>
              We were asked both to build a new management application for presentations and access control and to optimise the client app. The
              implementation was left entirely to us. Most of the project was moved to Azure to improve performance and control, with the intention of
              depending on SharePoint as little as possible. Because of the short 30-day deadline we could not realise the full vision, but we did lay
              the groundwork.
            </p>
          `,
          nl: `
          <p>
            IMEC organiseert twee wetenschappelijke conferenties per jaar en heeft hiervoor een SharePoint-applicatie ontwikkeld waarmee klanten alle
            beschikbare presentaties kunnen raadplegen. Het invoeren van presentaties en het beheren van toegangsrechten gebeurt momenteel via een
            Excel-bestand en een PowerShell-script dat deze gegevens naar SharePoint synchroniseert.
          </p>
          <p>
            De bestaande client-app kampte met ernstige performantieproblemen, waardoor het laden van de applicatie voor gebruikers meerdere minuten
            kon duren. Daarnaast waren de securityregels complex en schaalde ze slecht, doordat voor elke unieke combinatie van partners een aparte
            securitygroep werd aangemaakt, waardoor het Excel-bestand zijn limieten bereikte.
          </p>
          <p>
            Er werd gevraagd om zowel een nieuwe beheertoepassing voor presentaties en toegangsbeheer te ontwikkelen als de client-app te
            optimaliseren. De implementatie werd volledig aan ons overgelaten. Het project werd grotendeels naar Azure verplaatst om performantie en
            controle te verbeteren, met de intentie om zo weinig mogelijk afhankelijk te blijven van SharePoint. Door de korte deadline van 30 dagen
            hebben we de volledige visie niet kunnen verwezenlijken, maar wel de eerste aanzet gegeven.
          </p>
        `,
        },
      },
      {
        img: vlmLogo,
        name: 'VLM',
        line: 'MTIL 2.0',
        role: 'Fullstack Developer',
        period: '06/2018 – 12/2018',
        keywords: ['Complex Legacy Modernization', 'High-stakes Holiday Release', 'Business Logic', 'Small team'],
        description: {
          en: `
            <p>
              The old MTIL application dated from before the turn of the millennium and the client decided it was time for a renewal. Farmers and
              manure transporters use this application to submit transport requests, after which it checks whether the transport is allowed. Since
              manure transport is heavily regulated and the legislation is complex, the application is enormously complex as well.
            </p>
            <p>
              The goal was to improve the usability of the application. To do so, it was rebuilt from scratch with more modern technologies and
              integrated into the client's existing application landscape.
            </p>
            <p>
              The project was delivered on time and with few bugs. The production rollout just before the Christmas period, right before the client
              closed until after New Year, made for a challenging and exciting delivery. Delivering the application successfully, almost exactly
              matching the predefined scope, was seen as a strong result.
            </p>
          `,
          nl: `
          <p>
            De oude MTIL-applicatie dateerde van vóór de millenniumwissel en de klant besloot dat het tijd was voor een vernieuwing. Deze applicatie
            wordt gebruikt door landbouwers en mesttransporteurs om transportaanvragen in te dienen, waarna gecontroleerd wordt of het transport
            toegestaan is. Aangezien het vervoer van mest sterk gereguleerd is, en de wetgeving hieromtrent complex is, maakt dit de applicatie
            eveneens enorm complex.
          </p>
          <p>
            Het doel was om de gebruiksvriendelijkheid van de applicatie te verbeteren. Hiervoor werd volledig opnieuw gestart met modernere
            technologieën en werd de applicatie geïntegreerd in het bestaande applicatielandschap van de klant.
          </p>
          <p>
            Het project werd tijdig en met een laag aantal bugs opgeleverd. De productie-uitrol vlak vóór de kerstperiode, net voor de sluiting van de
            klant tot na Nieuwjaar, zorgde voor een uitdagende en spannende oplevering. De succesvolle levering van de applicatie, die vrijwel
            volledig overeenkwam met de vooraf gedefinieerde scope, werd als een sterk resultaat ervaren.
          </p>
        `,
        },
      },
      {
        img: securexLogo,
        name: 'Securex',
        role: 'Technical Analyst',
        line: 'Elastic Stack Research',
        period: '05/2018',
        keywords: ['Elasticsearch', 'Logging & Monitoring', 'Research', 'Demo'],
        description: {
          en: `
            <p>
              This was a short pre-sales project in which a demo was built around the possibilities, strengths and limitations of the ELK stack
              (Elasticsearch, Logstash and Kibana) for a client. The focus was on storing log data from different applications centrally and making it
              searchable, and on visualising business data across a chain of applications through logging. The latter proved complex, since
              Elasticsearch expects data in the shape it will be queried in, and Logstash is not designed to aggregate and restructure datasets.
            </p>
            <p>
              We advised the client to use the ELK stack to centralise log data, since that is a typical use case the stack is well suited for. At the
              same time, we pointed out that the ELK stack is less suited to visualising business data. Because the client had enough in-house knowledge
              to implement the log centralisation themselves, no follow-up project came of it.
            </p>
          `,
          nl: `
          <p>
            Dit was een kort pre-sales project waarbij een demo werd ontwikkeld rond de mogelijkheden, sterktes en beperkingen van de ELK-stack
            (Elasticsearch, Logstash en Kibana) voor een klant. De focus lag op het centraal opslaan en doorzoekbaar maken van logdata uit
            verschillende applicaties, en het visualiseren van businessgerelateerde gegevens over een keten van applicaties via logging. Vooral dit
            laatste bleek complex, aangezien Elasticsearch data verwacht in de vorm waarin ze geraadpleegd wordt en Logstash niet ontworpen is voor
            aggregatie en herstructurering van datasets.
          </p>
          <p>
            We adviseerden de klant om de ELK-stack te gebruiken voor het centraliseren van logdata, aangezien dit een typische use-case is waarvoor
            de stack geschikt is. Tegelijkertijd gaven we aan dat de ELK-stack minder geschikt is voor het visualiseren van businessgerelateerde data.
            Omdat de klant voldoende interne kennis had om de logcentralisatie zelf te implementeren, kwam er uiteindelijk geen verder project tot
            stand.
          </p>
        `,
        },
      },
      {
        img: digipolisLogo,
        name: 'Digipolis Antwerpen',
        line: 'Generiek Dossier Platform (GDP)',
        role: '.NET Developer',
        period: '04/2018 – 05/2018',
        keywords: [
          'TDD',
          'Integration Testing',
          'Load / Performance Testing',
          'Performance Optimization',
          'PostgreSQL',
          'EF Core',
        ],
        description: {
          en: `
            <p>
              GDP was meant as a document store to manage cases with structured and dynamic data, including task management, history and access through
              a Web API. Although most of the functionality was in place, the application suffered from serious performance problems and an unclear
              architecture and business logic.
            </p>
            <p>
              Digipolis called in support to stabilise and improve the application. This happened in several phases: first, the system was tested as a
              black box to better understand its behaviour. Next, performance was analysed and optimised, using these tests as regression protection.
              In a final phase, work went into structural improvements and a redesign of the application. The project was eventually paused due to
              external complications at GDP's clients.
            </p>
            <p>
              The development workflow for Digipolis's internal developers was improved by delivering test infrastructure, and the application's
              performance was improved significantly.
            </p>
          `,
          nl: `
          <p>
            GDP was bedoeld als een document store voor het beheren van cases met gestructureerde en dynamische data, inclusief taakbeheer, historie
            en ontsluiting via een Web API. Hoewel de functionaliteit grotendeels werd gerealiseerd, kampte de applicatie met ernstige
            performantieproblemen en een onduidelijke architectuur en businesslogica.
          </p>
          <p>
            Digipolis schakelde ondersteuning in om de applicatie te stabiliseren en te verbeteren. Dit gebeurde in verschillende fasen: eerst werd
            het systeem als black box getest om het gedrag beter te begrijpen. Vervolgens werd de performantie geanalyseerd en geoptimaliseerd met
            behulp van deze tests als regressiebescherming. In een laatste fase werd gewerkt aan structurele verbeteringen en herontwerp van de
            applicatie. Het project werd uiteindelijk gepauzeerd door externe complicaties bij de klanten van GDP.
          </p>
          <p>
            Er werd zowel de ontwikkelworkflow voor interne ontwikkelaars van Digipolis verbeterd door het aanleveren van testinfrastructuur, als een
            significante performantieverbetering van de applicatie gerealiseerd.
          </p>
        `,
        },
      },
      {
        img: intrumLogo,
        name: 'Intrum',
        role: '.NET Developer',
        line: 'Maintenance',
        period: '12/2017 – 02/2018',
        keywords: ['Oracle Database', 'Stored Procedures', '.NET Framework', 'Scrum', 'Support'],
        description: {
          en: `
            <p>
              Intrum is a debt collection agency where most processes, such as sending text messages, letters and emails or assigning bailiffs, are
              automated according to the specific instructions of their clients. All data is stored in an Oracle database, while the automated
              processes are managed and run by a set of .NET applications.
            </p>
          `,
          nl: `
          <p>
            Intrum is een incassobureau waar de meeste processen, zoals het versturen van sms-berichten, brieven en e-mails of het toewijzen van
            gerechtsdeurwaarders, geautomatiseerd verlopen volgens de specifieke instructies van hun klanten. Alle gegevens worden opgeslagen in een
            Oracle-database, terwijl de geautomatiseerde processen worden beheerd en uitgevoerd door een reeks .NET-applicaties.
          </p>
        `,
        },
      },
      {
        img: digipolisLogo,
        name: 'Digipolis Antwerpen',
        line: 'Delivery Request Registration',
        role: 'Fullstack .NET Developer',
        period: '09/2017 – 11/2017',
        keywords: ['.NET Core', 'Angular', 'PostgreSQL', 'Docker', 'Hangfire', 'EF Core'],
        description: {
          en: `
            <p>
              This project digitised the application for identity cards and other official documents for the city of Antwerp. It covered everything from
              the administration application to forwarding requests to the postal service, so these products could be delivered to people's homes.
            </p>
          `,
          nl: `
          <p>
            De aanvraag voor identiteitskaarten en andere officiële documenten werd in dit project gedigitaliseerd voor de stad Antwerpen. Dit project
            hield de administratieapplicatie in tot het doorsturen van aanvragen naar de post om deze producten tot thuis te kunnen laten leveren.
          </p>
        `,
        },
      },
    ],
  },
  {
    id: 'technicolor',
    name: 'Technicolor',
    logo: technicolorLogo,
    period: '07/2015 – 07/2017',
    activity: { en: 'Student software developer', nl: 'Student-softwareontwikkelaar' },
    courses: [
      {
        img: technicolorLogo,
        name: { en: 'Internal tooling', nl: 'Interne tooling' },
        role: 'Software Developer',
        line: 'Test & reporting',
        period: '07/2015 – 07/2017',
        keywords: ['WPF', '.NET Framework', 'MongoDB', 'Jenkins (CI/CD)', 'Automated UI Testing'],
        description: {
          en: `
            <p>
              During his student jobs at Technicolor, Dieter built internal software solutions in C#/.NET (WPF) to support testing, reporting and
              analysis processes. He worked on automating test comparisons, building user-friendly reporting tools, setting up a central MongoDB data
              layer for test results and extending the Continuous Integration environment with Jenkins.
            </p>
          `,
          nl: `
          <p>
            Tijdens Dieter zijn studentenjobs bij Technicolor ontwikkelde hij interne softwareoplossingen in C#/.NET (WPF) ter ondersteuning van
            test-, rapporterings- en analyseprocessen. Hij werkte onder meer aan de automatisering van testvergelijkingen, de ontwikkeling van
            gebruiksvriendelijke rapporteringstools, het opzetten van een centrale MongoDB-datalaag voor testresultaten en de uitbreiding van de
            Continuous Integration-omgeving via Jenkins.
          </p>
        `,
        },
      },
    ],
  },
];

export interface Education {
  degree: Text;
  school: Text;
  period: string;
}

// ponytail: periods copied from Flowcase as-is; they overlap oddly (bachelor ending after the master), verify.
const UA = { en: 'University of Antwerp', nl: 'Universiteit Antwerpen' };
export const education: Education[] = [
  { degree: { en: 'Master in Physics', nl: 'Master in de Fysica' }, school: UA, period: '09/2014 – 07/2018' },
  { degree: { en: 'Bachelor in Physics', nl: 'Bachelor in de Fysica' }, school: UA, period: '09/2010 – 07/2016' },
];

export interface Presentation {
  title: string;
  period: string; // "MM/YYYY"
  img: string;
  topics: string[];
  description: Text; // HTML
}

export const presentations: Presentation[] = [
  {
    title: 'React Internals',
    img: reactLogo,
    period: '11/2024',
    topics: ['Mounting', 'JSX', 'Render cycles', 'State', 'useRef & useCallback'],
    description: {
      en: `
        <p>
          A technical deep dive into the inner workings of React, based on its source code. The presentation covered how a React application is
          mounted, how JSX is processed under the hood and how React builds pages and manages render cycles. It also went deeper into state
          management and the moments at which React performs a new render. Practical examples showed how hooks such as <code>useRef</code> and
          <code>useCallback</code> can be used deliberately to avoid unnecessary renders and optimise applications.
        </p>
      `,
      nl: `
      <p>
        Een technische deep dive in de interne werking van React op basis van de broncode. De presentatie behandelde onder meer hoe een
        React-applicatie wordt gemount, hoe JSX achterliggend wordt verwerkt en hoe React pagina's opbouwt en render cycles beheert. Daarnaast
        werd dieper ingegaan op state management en de momenten waarop React een nieuwe render uitvoert. Aan de hand van praktische voorbeelden
        werd ook toegelicht hoe hooks zoals <code>useRef</code> en <code>useCallback</code> doelgericht kunnen worden ingezet om onnodige renders te
        vermijden en applicaties te optimaliseren.
      </p>
    `,
    },
  },
  {
    title: 'TypeScript Shenanigans',
    img: typescriptLogo,
    period: '02/2023',
    topics: ['Compile-time vs runtime', 'Pitfalls', 'String types', 'Mapped types', 'Decorators'],
    description: {
      en: `
        <p>
          About what TypeScript can do when the language is used correctly and deliberately. The presentation covered how TypeScript works behind the
          scenes, including the translation to JavaScript and the fundamental difference between compile time and runtime. It also discussed less
          obvious pitfalls and hard-to-detect bugs. Practical demos then showed how TypeScript types can be used and combined in creative and
          advanced ways, including complex string types, mapped types, decorators and types for JSON structures.
        </p>
      `,
      nl: `
      <p>
        Over de mogelijkheden van TypeScript wanneer de taal correct en bewust wordt ingezet. De presentatie behandelde de werking van TypeScript
        achter de schermen, waaronder de vertaling naar JavaScript en het fundamentele verschil tussen compile-time en runtime. Daarnaast werden
        minder voor de hand liggende valkuilen en moeilijk te detecteren bugs besproken. Aan de hand van praktische demo's werd vervolgens
        getoond hoe TypeScript-types op creatieve en geavanceerde manieren kunnen worden ingezet en gecombineerd, met onder andere complexe string
        types, mapped types, decorators en types voor JSON-structuren.
      </p>
    `,
    },
  },
  {
    title: 'Angular Spaghetti',
    img: angularLogo,
    period: '09/2022',
    topics: ['Smart & dumb components', 'Stateful services', 'State management', 'Architecture'],
    description: {
      en: `
        <p>
          An accessible explanation of what spaghetti code means in Angular and how a well-structured application can be built more like a lasagne.
          The presentation literally included a recipe for a healthy Angular architecture, with attention to the right structure of components, the
          distinction between smart and dumb components, stateless and stateful services and solid state management. Besides the theoretical
          principles, it also explained in detail how to apply this structure in practice in existing and new Angular projects.
        </p>
      `,
      nl: `
      <p>
        Een toegankelijke uitleg over wat spaghetti-code binnen Angular betekent en hoe een goed gestructureerde applicatie eerder als een
        lasagne kan worden opgebouwd. De presentatie bevatte letterlijk een recept voor een gezonde Angular-architectuur, met aandacht voor de
        juiste opbouw van componenten, het onderscheid tussen smart en dumb components, stateless en stateful services en degelijk state
        management. Naast de theoretische principes werd ook uitgebreid toegelicht hoe deze structuur in de praktijk kan worden toegepast binnen
        bestaande en nieuwe Angular-projecten.
      </p>
    `,
    },
  },
];

// Full keyword list per category, most used first.
export const skillOverview: { name: Text; skills: Text[] }[] = [
  {
    name: 'Frontend',
    skills: [
      'React',
      'TypeScript',
      'NPM',
      'Webpack / Vite',
      'i18next',
      'Angular',
      'jQuery',
      'HeroUI',
      'TanStack Query',
      'Knockout JS',
      'Sass',
      'WPF',
      'CSS3',
      'Vue.js',
      'WinForms',
    ],
  },
  {
    name: 'Backend',
    skills: [
      '.NET Core',
      'ASP.NET (MVC)',
      'Entity Framework Core',
      'ASP.NET (Web API)',
      'Background Services',
      '.NET Framework',
      'NHibernate',
      '.NET Aspire',
      'Dapper',
      'LINQ',
      'MediatR',
      'MassTransit',
      'Akka.NET',
      'gRPC',
      'SignalR',
      'NodeJS',
      'Entity Framework',
      'AutoMapper',
      'Hangfire',
      'Asynchronous Programming',
      'Web Services',
    ],
  },
  {
    name: 'Testing',
    skills: [
      'Unit Testing',
      'Integration Testing',
      'xUnit',
      'NSubstitute',
      'Respawn',
      'Automated UI Testing',
      'NUnit',
      'Snapshot Testing',
      'Karma',
      'End-to-End Testing',
      'Load / Performance Testing',
      'Jest',
    ],
  },
  {
    name: 'Cloud & DevOps',
    skills: [
      'RabbitMQ',
      'Azure Functions',
      'Azure Service Bus',
      'Azure Storage',
      'Azure DevOps',
      'Application Insights',
      'Docker',
      'GitHub Actions',
      'Message Queues',
      'Azure App Services',
      'Azure Pipelines',
      'Microsoft Azure',
      'Azure Container Apps',
      'Azure App Configuration',
      'GitHub',
      'Bash',
    ],
  },
  {
    name: 'Databases',
    skills: [
      'Azure SQL',
      'SQL Server',
      'PostgreSQL',
      'T-SQL',
      'Dacpac',
      'Oracle',
      'Elasticsearch',
      'Stored Procedures',
      'SQL',
      'NoSQL',
      'Data Migrations',
      'Indexing / Query Optimization',
      'Backup & Restore',
    ],
  },
  {
    name: { en: 'Architecture', nl: 'Architectuur' },
    skills: [
      'CQRS',
      'Domain-Driven Design',
      'Microservices',
      'Vertical Slice Architecture',
      'Layered / N-tier',
      'Event-Driven Architecture',
      'Modular Monoliths',
      'Onion Architecture',
      'MVC',
      'API Design',
      'SOLID',
      'Clean Code',
      'DRY',
      'Design Patterns',
      'Dependency Injection',
      'Inversion of Control',
      'Loose Coupling',
      'Component-based Architecture',
      'OOP / OOD',
      'ORM',
    ],
  },
  {
    name: { en: 'Methodologies', nl: 'Methodologieën' },
    skills: ['Code Reviews', 'Scrum', 'Agile', 'CI/CD', 'Pair Programming', 'User Stories', 'TDD'],
  },
  {
    name: 'Security',
    skills: ['Authentication', 'Authorization', 'Keycloak', 'OAuth2', 'ASP.NET Core Identity'],
  },
  {
    name: 'UX / UI / Design',
    skills: [
      'Figma',
      'Responsive / Mobile-first',
      'Tailwind',
      'Design Systems',
      'Component Libraries',
      'User-Centered Design',
    ],
  },
  {
    name: 'Tools',
    skills: ['Google Maps', 'OpenTelemetry', 'OpenAPI', 'Portainer', 'NuGet', 'Swagger', 'Git', 'Jira', 'Rider'],
  },
  {
    name: { en: 'Other', nl: 'Overige' },
    skills: [
      'Logging & Monitoring',
      'React Native',
      'Claude Code',
      'JSON / XML / XSLT / YAML',
      'Performance Optimization',
      'Caching',
      'Exception Handling',
      'Localization',
    ],
  },
  {
    name: 'Soft skills',
    skills: [
      { en: 'Coach & Mentor', nl: 'Coach & mentor' },
      { en: 'Eye for detail', nl: 'Oog voor detail' },
      { en: 'Task-oriented', nl: 'Taakgericht' },
      { en: 'Cross-functional collaborator', nl: 'Teamspeler over disciplines heen' },
      { en: 'Communicative', nl: 'Communicatief' },
      { en: 'Creative problem solver', nl: 'Creatieve probleemoplosser' },
    ],
  },
];

export const skills: { name: Text; skills: { name: Text; rating: number; description: Text }[] }[] = [
  {
    name: { en: 'Programming languages', nl: 'Programmeertalen' },
    skills: [
      {
        name: 'TypeScript',
        rating: 7,
        description: { en: 'Daily use, deep knowledge', nl: 'Dagelijks gebruik, diepgaande kennis' },
      },
      {
        name: 'C#',
        rating: 7,
        description: { en: 'Daily use, deep knowledge', nl: 'Dagelijks gebruik, diepgaande kennis' },
      },
      {
        name: 'JavaScript',
        rating: 6,
        description: {
          en: 'Indirect use, familiar with most of its quirks',
          nl: 'Onrechtstreeks gebruik, kent de meeste eigenaardigheden',
        },
      },
    ],
  },
  {
    name: 'Frameworks',
    skills: [
      {
        name: 'React',
        rating: 7,
        description: { en: 'Daily use, knows its ins and outs', nl: 'Dagelijks gebruik, kent het door en door' },
      },
      {
        name: 'ASP.NET',
        rating: 6,
        description: { en: 'Daily use for any server app', nl: 'Dagelijks gebruik voor elke serverapp' },
      },
      {
        name: 'Vue.js',
        rating: 5,
        description: { en: 'Go-to framework in spare time', nl: 'Favoriete framework in de vrije tijd' },
      },
    ],
  },
  {
    name: { en: 'Spoken languages', nl: 'Talen' },
    skills: [
      { name: { en: 'Dutch', nl: 'Nederlands' }, rating: 7, description: { en: 'Mother tongue', nl: 'Moedertaal' } },
      {
        name: { en: 'English', nl: 'Engels' },
        rating: 6,
        description: { en: 'Fluent understanding and writing', nl: 'Vloeiend begrip en schrijven' },
      },
      { name: { en: 'French', nl: 'Frans' }, rating: 2, description: { en: 'Basic understanding', nl: 'Basisbegrip' } },
    ],
  },
];
