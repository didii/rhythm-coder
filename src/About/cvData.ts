import actemiumLogo from './img/actemium.png';
import angularLogo from './img/angular.png';
import cascadorLogo from './img/cascador.png';
import connectiveLogo from './img/connective.png';
import digipolisLogo from './img/digipolis.png';
import fluxysLogo from './img/fluxys.png';
import gosselinLogo from './img/gosselin.png';
import hendriksLogo from './img/hendriks.png';
import imecLogo from './img/imec.png';
import intrumLogo from './img/intrum.png';
import kenzeLogo from './img/kenze.png';
import odotLogo from './img/odot.png';
import ordinaLogo from './img/ordina.png';
import reactLogo from './img/react.png';
import securexLogo from './img/securex.png';
import technicolorLogo from './img/technicolor.png';
import typescriptLogo from './img/typescript.png';
import vlmLogo from './img/vlm.png';
import type { CvData } from './models';

const cvData = {
  name: 'Van Broeck Dieter',
  function: 'Senior full-stack .NET developer',
  email: 'cv@rhythm-coder.dev',
  location: { en: 'Zoersel, Belgium', nl: 'Zoersel, België' },
  locationHref: 'https://www.google.com/maps/place/Zoersel',
  drivingLicense: 'B',
  yearOfBirth: 1991,
  aboutMe: {
    en: `
      <p>
        Great software isn't just written: it's composed. Backed by a foundation in physics and music, I approach technical challenges with structural
        creativity: looking for patterns, relationships and underlying structures to make all pieces work together. Having worked across a multitude
        of industries, I excel at mastering unfamiliar problem spaces.
      </p>
      <p>
        Beyond the code, I care about elevating the people around me and bringing a vision into technical landscapes. I combine pragmatism with a
        long-term mindset, ensuring every project leaves a lasting, positive mark on both the technology and the team.
      </p>
      <p class="about-me__footer">
        Core strengths: Problem solving · Pragmatism · Mentorship
      </p>
    `,
    nl: `
      <p>
        Goede software wordt niet zomaar geschreven: het wordt gecomponeerd. Ondersteund door een achtergrond in fysica en muziek, benader ik
        technische uitdagingen met structurele creativiteit. Daarbij doorgrond ik patronen, relaties en onderliggende structuren om alle puzzelstukjes
        in elkaar te laten passen. Dankzij een loopbaan over verscheidene sectoren ligt mijn kracht vooral in het doorgronden van onbekende
        probleemruimten.
      </p>
      <p>
        Naast het coderen hecht ik veel waarde aan het versterken van de mensen rondom mij en het scheppen van een visie in een technisch landschap.
        Door pragmatisme en een langetermijnvisie te combineren, zorg ik voor een duurzame en positieve impact op zowel de techniek als het team.
      </p>
      <p class="about-me__footer">
        Kerncompetenties: Probleemoplossend denken · Pragmatisme · Mentorschap
      </p>
    `,
  },
  ai: {
    en: `
      <p>
        AI is already powerful enough that I see no reason not to use it, as long as I stay in charge. I validate what it produces instead of
        assuming it works, and I give it access only to what it needs: read access only where it must read, write access only where it must change.
      </p>
      <p>
        I build up trust in stages, so I learn its weak spots while they are still cheap. At Taxi Hendriks I went from asking for a second opinion,
        to offloading small tasks, to offloading larger refactors. At Honesty bar I prepare and document an entire feature together with the AI so
        it can build it step by step, then let it build a new feature in one go, then let it create and review pull requests in Azure DevOps. Now we
        prepare tickets together and the AI completes the full cycle on its own.
      </p>
      <p>
        Each stage showed something to adapt. Letting it pick up a ticket without preparing together failed: too many assumptions, too few
        questions. It also writes poor tests, either very heavy integration tests or unit tests that merely repeat the logic. So I set strict
        guardrails and review the tests more closely than the logic, because tests are how the AI knows later that it has not broken anything.
      </p>
      <p>
        Documentation matters more than ever. With OpenSpec, every feature records why it was built this way: which options were considered,
        which was chosen and what risks come with it. That knowledge normally lives in the head of a lead or architect. Stored next to the code,
        the AI can read it and make better decisions later. Without it, AI only produces legacy software faster. The first results are promising,
        but it will take about a year to know for sure. Honesty bar is how I test that deliberately.
      </p>
    `,
    nl: `
      <p>
        AI is nu al krachtig genoeg om er geen reden toe te zien het niet te gebruiken, zolang ik zelf aan het roer blijf. Ik valideer wat het
        oplevert in plaats van aan te nemen dat het werkt, en ik geef het enkel toegang tot wat het nodig heeft: leestoegang alleen waar het moet
        lezen, schrijftoegang alleen waar het iets moet wijzigen.
      </p>
      <p>
        Ik bouw vertrouwen in fases op, zodat ik de zwakke plekken leer kennen zolang ze nog weinig kosten. Bij Taxi Hendriks ging ik van een
        tweede mening vragen, naar kleine taken uitbesteden, naar grotere refactors uitbesteden. Bij Honesty bar bereid ik een volledige feature
        samen met de AI voor en documenteer ik ze, zodat de AI ze stap voor stap kan bouwen. Daarna liet ik een nieuwe feature in één keer bouwen,
        en pull requests aanmaken en reviewen in Azure DevOps. Nu bereiden we tickets samen voor en doorloopt de AI zelfstandig de volledige cyclus.
      </p>
      <p>
        Elke fase toonde iets om bij te sturen. Een ticket laten oppikken zonder samen voor te bereiden mislukte: te veel aannames, te weinig
        vragen. Ook schrijft AI zwakke tests: ofwel erg zware integratietests, ofwel unittests die de logica gewoon herhalen. Daarom werk ik met
        strikte leidraden en review ik de tests grondiger dan de logica, want tests laten de AI later weten dat er niets stuk is gegaan.
      </p>
      <p>
        Documentatie wordt belangrijker dan ooit. Met OpenSpec legt elke feature vast waarom ze zo gebouwd is: welke opties overwogen werden,
        welke gekozen is en welke risico's daarbij horen. Die kennis zit normaal in het hoofd van een lead of architect. Naast de code opgeslagen
        kan de AI ze lezen en later betere beslissingen nemen. Zonder die documentatie maakt AI enkel sneller legacy-software. De eerste
        resultaten zijn veelbelovend, maar het duurt ongeveer een jaar voor we het zeker weten. Honesty bar is mijn manier om dat bewust te testen.
      </p>
    `,
  },
  links: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dieter-van-broeck-476092142/' },
    { label: 'GitHub', href: 'https://github.com/didii' },
  ],
  employers: [
    {
      id: 'kenze',
      name: 'Kenze',
      logo: kenzeLogo,
      period: '10/2021 – now',
      activity: { en: '.NET developer consultant', nl: '.NET-consultant' },
      description: {
        en: `
          <p>
            Kenze is an IT consultancy where I have worked as a .NET consultant since October 2021. I was one of the first consultants there with
            strong frontend knowledge and focus, and in the office, colleagues often come to me for advice.
          </p>
          <p>
            I also put effort into strong bonds between colleagues, by organizing board game nights and trips to theme parks such as Phantasialand and
            Europa-Park.
          </p>
        `,
        nl: `
          <p>
            Kenze is een IT-consultancybedrijf waar ik sinds oktober 2021 als .NET-consultant werk. Ik was er een van de eerste consultants met een
            sterke frontendkennis en -focus, en op kantoor komen collega's vaak bij mij langs voor advies.
          </p>
          <p>
            Daarnaast zet ik in op sterke banden tussen collega's, door bordspeelavonden te organiseren en samen naar pretparken zoals Phantasialand
            en Europa-Park te gaan.
          </p>
        `,
      },
      courses: [
        {
          id: 'honestybar2026' as const,
          img: kenzeLogo,
          name: 'Honesty bar',
          role: 'Internal project',
          line: 'Kenze',
          period: '09/2026 – now',
          keywords: [
            { en: 'AI-assisted development', nl: 'AI-ondersteunde ontwikkeling' },
            { en: 'Internal project', nl: 'Intern project' },
            'OpenSpec',
            'Impeccable',
          ],
          description: {
            en: `
              <p>
                Honesty bar is a digital app to buy drinks, built on trust: people are expected to use the app before they take a drink.
              </p>
              <p>
                Above all, it is a test project to see how far we can get with creating traditional software with AI by slowly increasing the . With OpenSpec, we make sure knowledge about specific decisions is not lost over time, so we do not end up creating legacy
                software very quickly. With Impeccable, we create and edit the UI designs quickly and efficiently.
              </p>
            `,
            nl: `
              <p>
                Honesty bar is een digitale app om drankjes te kopen, gebouwd op vertrouwen: mensen worden verwacht de app te gebruiken voor ze een
                drankje nemen.
              </p>
              <p>
                Bovenal is het een testproject om te zien hoe ver we kunnen gaan met het bouwen van traditionele software met AI. Met OpenSpec zorgen
                we dat kennis over specifieke beslissingen niet verloren gaat in de tijd, zodat we niet razendsnel legacy-software maken. Met
                Impeccable maken en bewerken we de UI-designs snel en efficiënt.
              </p>
            `,
          },
        },
        {
          id: 'hendriks2024' as const,
          img: hendriksLogo,
          name: 'Taxi Hendriks',
          role: 'Technical Lead / Full-stack .NET Developer',
          line: 'Transport',
          period: '09/2024 – now',
          keywords: [
            { en: 'Medical cargo', nl: 'Medisch transport' },
            { en: 'Legacy replacement', nl: 'Vervanging legacy-systeem' },
            'Live tracking',
            'Domain-Driven Design',
            'NATS messaging',
            'React Native',
            'Claude Code',
          ],
          description: {
            en: `
              <p>
                Taxi Hendriks specializes in transport for people with reduced mobility and hospital transport. For hospital transport, I built most
                of a new software platform to replace an outdated legacy system that no longer scaled. The new application supports the full process,
                from back office and planning to live tracking of transports, a mobile scanning app and a platform to request transports. Urgency,
                real-time follow-up and conditioning, including live temperature monitoring, are especially important. The platform also supports the
                transport of medical and nuclear materials, such as samples, blood, isotopes and organs. Integrations with external systems, including
                Webfleet on-board computers, make it possible to follow transports and vehicles in real time.
              </p>
              <p>
                I designed and structured each application on its own, and helped define how the applications relate to each other, through NATS
                messaging and direct REST APIs. This keeps knowledge between applications flowing in one direction only.
              </p>
              <p>
                Due to circumstances at an external partner, the project was temporarily put on hold. In the meantime, I supported the existing
                infrastructure and software around transport for people with reduced mobility. This involved communication with on-board computers, HR
                systems and Chiron, the system that reports taxi rides to the government. Messaging was a key part of this, to exchange data reliably
                between different systems and processes.
              </p>
              <p>
                This project is where I first experimented with Claude Code. I offload tasks that would otherwise take me a considerable amount of
                time, and I use it as a reviewer for my own work.
              </p>
            `,
            nl: `
              <p>
                Taxi Hendriks is gespecialiseerd in mindervalidentransport en ziekenhuistransport. Voor het ziekenhuistransport bouwde ik het grootste
                deel van een nieuw softwareplatform, ter vervanging van een verouderd legacy-systeem dat niet langer schaalbaar was. De nieuwe
                applicatie ondersteunt het volledige proces, van backoffice en planning tot live tracking van transporten, een mobiele scanapplicatie
                en een platform om transporten aan te vragen. Bijzonder belangrijk hierbij zijn urgentie, realtime opvolging en conditionering,
                waaronder live temperatuurmonitoring. Het platform ondersteunt bovendien het transport van medische en nucleaire materialen, zoals
                stalen, bloed, isotopen en organen. Integraties met externe systemen, waaronder Webfleet-boordcomputers, maken het mogelijk om
                transporten en voertuigen realtime op te volgen.
              </p>
              <p>
                Ik ontwierp en structureerde elke applicatie afzonderlijk, en hielp mee bepalen hoe de applicaties met elkaar samenhangen, via NATS-
                messaging en rechtstreekse REST API's. Zo stroomt kennis tussen applicaties maar in één richting.
              </p>
              <p>
                Het project werd door omstandigheden bij een externe partner tijdelijk on hold gezet. Ondertussen ondersteunde ik de bestaande
                infrastructuur en software rond het mindervalidentransport. Hierbij werkte ik aan communicatie met boordcomputers, HR-systemen en
                Chiron, het systeem voor de rapportering van taxiritten aan de overheid. Messaging vormde hierbij een belangrijk onderdeel om gegevens
                betrouwbaar tussen verschillende systemen en processen uit te wisselen.
              </p>
              <p>
                In dit project experimenteerde ik voor het eerst met Claude Code. Ik laat er taken door uitvoeren die mij anders aanzienlijk veel tijd
                zouden kosten, en gebruik het als reviewer van mijn eigen werk.
              </p>
            `,
          },
        },
        {
          id: 'odot2023' as const,
          img: odotLogo,
          name: 'Odot',
          role: 'Full-stack .NET Developer',
          line: 'EMP',
          period: '08/2023 – 09/2024',
          keywords: [
            { en: 'Energy market', nl: 'Energiemarkt' },
            { en: 'Data visualization', nl: 'Datavisualisatie' },
            { en: 'Database performance', nl: 'Databaseperformantie' },
            'SignalR',
          ],
          description: {
            en: `
              <p>
                Odot operates in the energy market and offers both internal and external applications to support the purchase and follow-up of energy.
                Through the Energy Management Platform (EMP), the internal application, employees manage companies, contracts and meters and buy
                energy in advance by locking in prices for certain periods. The Customer Portal (MyOdot) is the external application that gives
                customers insight into their energy prices and consumption.
              </p>
              <p>
                We built both portals in React on a shared .NET backend, in close communication with the business and the product owner. The internal
                portal is built for efficiency. The customer portal follows the designs closely and focuses on readability, visualizing data in graphs
                such as consumption, costs and the yield of solar panels.
              </p>
              <p>
                My own focus was mainly on improving server and database performance, and on the graphs in the customer portal.
              </p>
            `,
            nl: `
              <p>
                Odot is actief binnen de energiemarkt en biedt zowel interne als externe applicaties ter ondersteuning van de aankoop en opvolging van
                energie. Via het Energy Management Platform (EMP), de interne applicatie, beheren medewerkers bedrijven, contracten en meters en kopen
                ze energie op voorhand aan door prijzen voor bepaalde periodes vast te klikken. De Customer Portal (MyOdot) is de externe applicatie
                waarmee klanten inzicht krijgen in hun energieprijzen en verbruik.
              </p>
              <p>
                We bouwden beide portalen in React, met een gedeelde .NET-backend, in nauw overleg met de business en de product owner. Het interne
                portaal is gebouwd met efficiëntie voor ogen. Het klantenportaal volgt de designs nauwgezet en focust op leesbaarheid, met grafieken
                van onder meer verbruik, kosten en de opbrengst van zonnepanelen.
              </p>
              <p>
                Zelf focuste ik vooral op het verbeteren van de server- en databaseperformantie en op de grafieken in het klantenportaal.
              </p>
            `,
          },
        },
        {
          id: 'actemium2023' as const,
          img: actemiumLogo,
          name: 'Actemium',
          role: '.NET Developer',
          line: 'Testplan debugger',
          period: '05/2023 – 08/2023',
          keywords: [
            { en: 'Custom debugger', nl: 'Debugger op maat' },
            'Graph-based workflows',
            { en: 'Industrial machines', nl: 'Industriële machines' },
            'Akka.NET',
          ],
          description: {
            en: `
              <p>
                Actemium builds software to test and validate industrial machines. The application offers a very flexible drag-and-drop interface in
                which test flows are built as a graph of nodes. These nodes represent actions that can run sequentially or in parallel, with support
                for different success and failure scenarios. Testing these flows is complex: tests are typically "setup-and-run", where every step has
                to complete without any chance of manual inspection during execution. Errors can only be analyzed afterwards through logs, which makes
                debugging and iterative development hard, especially for end users.
              </p>
              <p>
                I added new debugging functionality to the existing graph-based interface, including breakpoints on nodes, skipping specific steps and
                stepping through test flows one step at a time. This made the development and testing process considerably more transparent and
                efficient. I delivered the functionality successfully and integrated it into the existing architecture.
              </p>
            `,
            nl: `
              <p>
                Actemium ontwikkelt software voor het testen en valideren van industriële machines. De applicatie biedt een zeer flexibele drag-and-
                drop-interface waarmee testflows worden opgebouwd als een graphstructuur van nodes. Deze nodes stellen acties voor die sequentieel of
                parallel uitgevoerd kunnen worden, met ondersteuning voor verschillende succes- en faalscenario's. Het testen van deze flows is
                complex: de tests worden typisch "setup-and-run" uitgevoerd, waarbij alle stappen volledig doorlopen moeten worden zonder mogelijkheid
                tot manuele inspectie tijdens de uitvoering. Fouten worden achteraf enkel via logs geanalyseerd, wat debugging en iteratieve
                ontwikkeling bemoeilijkt, zeker voor eindgebruikers.
              </p>
              <p>
                Ik voegde een nieuwe debugfunctionaliteit toe aan de bestaande graph-based interface, met onder meer breakpoints op nodes, het
                overslaan van specifieke stappen en de mogelijkheid om testflows stap voor stap te doorlopen. Hierdoor werd het ontwikkel- en
                testproces aanzienlijk inzichtelijker en efficiënter. Ik leverde de functionaliteit succesvol op en integreerde ze in de bestaande
                architectuur.
              </p>
            `,
          },
        },
        {
          id: 'gosselin2022' as const,
          img: gosselinLogo,
          name: 'Gosselin',
          role: 'Full-stack .NET Developer',
          line: 'Gosselin',
          period: '12/2022 – 04/2023',
          keywords: [
            'US Department of Defense',
            'Frontend lead',
            { en: 'Laying foundations', nl: 'Fundamenten leggen' },
            { en: 'Inherited product', nl: 'Overgenomen product' },
            { en: 'Code quality', nl: 'Codekwaliteit' },
          ],
          description: {
            en: `
              <p>
                Gosselin is a major logistics company based in Antwerp and has been a partner of the US Department of Defense for many years. The
                company handles the first- and last-mile shipping of personal goods for US Army personnel on bases in Europe. With the renewal of the
                latest tender came the need to modernize the existing software landscape and to provide more data integrations with other partners in
                the DoD ecosystem. To meet the requirements of the contract in time, Gosselin took over an existing software product from a partner to
                develop further.
              </p>
              <p>
                For the frontend, I laid the groundwork: the architecture, packages and base components. I was the primary contact for any frontend or
                React question, and I helped raise and guard code quality through pull request reviews.
              </p>
            `,
            nl: `
              <p>
                Gosselin is een grote logistieke speler gevestigd in Antwerpen en is al meerdere jaren partner van het Amerikaanse Department of
                Defense. Het bedrijf staat in voor de first- en last-mile verzending van persoonlijke goederen van US Army-personeel op bases in
                Europa. Met de vernieuwing van de laatste aanbesteding ontstond de nood om het bestaande softwarelandschap te moderniseren en meer
                data-integraties te voorzien met andere partners binnen het DoD-ecosysteem. Gosselin nam hiervoor een bestaand softwareproduct over
                van een partner om verder uit te bouwen en zo tijdig aan de vereisten van de opdracht te voldoen.
              </p>
              <p>
                Voor de frontend legde ik het fundament: de architectuur, packages en basiscomponenten. Ik was het eerste aanspreekpunt voor alle
                vragen over frontend en React, en hielp via pull request reviews de codekwaliteit te verhogen en te bewaken.
              </p>
            `,
          },
        },
        {
          id: 'cascador2022' as const,
          img: cascadorLogo,
          name: 'Cascador',
          role: 'Technical Coach',
          line: 'Tech support',
          period: '09/2022 – 02/2025',
          keywords: [
            'Coaching',
            { en: 'Healthcare data', nl: 'Zorgdata' },
            'Startup',
            { en: 'Frontend strategy', nl: 'Frontendstrategie' },
            'Code reviews',
          ],
          description: {
            en: `
              <p>
                Cascador collects medical data from sources such as hospitals, anonymizes it and forwards it to clients such as pharmaceutical
                companies. This makes data that is often lost in healthcare institutions usable after all, with the aim of improving the development
                of medicines and treatments.
              </p>
              <p>
                In this start-up environment with limited resources, part-time support was requested for frontend development because it
                was not progressing as expected. I took on a guiding role, with regular code reviews, technical support on request, and I helped
                work out a strategy to improve the frontend architecture.
              </p>
            `,
            nl: `
              <p>
                Cascador richt zich op het verzamelen van medische data uit onder meer ziekenhuizen, het anonimiseren ervan en het doorsturen naar
                klanten zoals farmaceutische bedrijven. Hierdoor wordt data die vaak verloren gaat in zorginstellingen alsnog capteerbaar gemaakt, met
                als doel de ontwikkeling van geneesmiddelen en behandelingen te verbeteren.
              </p>
              <p>
                Binnen deze startup-omgeving, waar de middelen beperkt zijn, werd deeltijdse ondersteuning gevraagd voor de frontendontwikkeling omdat
                deze niet naar verwachting vooruitgang boekte. Ik nam hierbij een begeleidende rol op me, met regelmatige code reviews, technische
                ondersteuning op vraag en het uitwerken van een verbeterstrategie voor de frontendarchitectuur.
              </p>
            `,
          },
        },
        {
          id: 'connective2021' as const,
          img: connectiveLogo,
          name: 'Connective',
          role: 'Frontend Developer',
          line: 'e-signing',
          period: '10/2021 – 12/2022',
          keywords: ['Design system', { en: 'Client theming', nl: 'Theming per klant' }, 'WCAG', 'Knowledge sharing', 'Storybook', 'UX redesign'],
          description: {
            en: `
              <p>
                Connective mainly provides digital signing of documents and supports several signing methods. The frontend application for signers,
                called WYSIWYS (What You See Is What You Sign), was due for a redesign, both in code quality, user experience and accessibility. There
                was a strong focus on setting up a component library: I introduced Storybook for it, along with a customizable theming system that the
                library supported and clients could choose from.
              </p>
              <p>
                For the first phase I worked on the application alone. When the team grew, my focus shifted to sharing my knowledge
                of the codebase and the component library with the new developers.
              </p>
            `,
            nl: `
              <p>
                Connective verzorgt voornamelijk digitale ondertekening van documenten en ondersteunt verschillende ondertekenmethodes. De
                frontendapplicatie voor ondertekenaars, genaamd WYSIWYS (What You See Is What You Sign), was toe aan een herontwerp, zowel op vlak van
                codekwaliteit als gebruikerservaring. Er lag hierbij een sterke focus op het opzetten van een componentenbibliotheek: ik introduceerde
                daarvoor Storybook, evenals een systeem voor aanpasbare theming dat de library ondersteunde en waaruit klanten konden kiezen.
              </p>
              <p>
                In de eerste fase werkte ik alleen aan de applicatie. Toen het team groeide, verschoof mijn focus naar het delen van
                mijn kennis van de codebase en de componentenbibliotheek met de nieuwe ontwikkelaars.
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
            Ordina is an IT service provider in the Benelux and the place where I started my career as a consultant. As a starter I received an
            excellent series of trainings that gave me a solid foundation in professional software development, even before I started at my first
            client.
          </p>
          <p>
            The highlight was Thursday evenings: with food provided, colleagues came together to experiment with all kinds of technology. A wide range
            of toys was ready, from rovers and drones to VR headsets, leaving plenty of room to try new things and learn from each other.
          </p>
        `,
        nl: `
          <p>
            Ordina is een IT-dienstverlener in de Benelux en was de plek waar ik mijn carrière als consultant startte. Als starter kreeg ik
            er een uitstekende reeks opleidingen die me een stevige basis gaven in professionele softwareontwikkeling, nog voor ik bij mijn
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
          id: 'stage2021' as const,
          name: { en: 'Internship supervisor', nl: 'Stagebegeleider' },
          period: '03/2021 – 05/2021',
          keywords: [
            { en: 'Mentoring interns', nl: 'Stagiairs begeleiden' },
            { en: 'VR meeting room', nl: 'VR-vergaderruimte' },
            'Unity 3D',
            { en: 'Planning & follow-up', nl: 'Planning & opvolging' },
            { en: 'Brainstorming', nl: 'Brainstormen' },
          ],
          description: {
            en: `
              <p>
                I supervised two interns building a playful VR meeting room. Besides helping them structure their code, I focused mainly on organizing
                and following up the work and on brainstorming ideas and features.
              </p>
            `,
            nl: `
              <p>
                Ik begeleidde twee stagiairs bij het bouwen van een speelse VR-vergaderruimte. Naast hulp bij het structureren van hun code lag mijn
                focus vooral op het organiseren en opvolgen van het werk en op het brainstormen over ideeën en functionaliteiten.
              </p>
            `,
          },
        },
        {
          id: 'vlm2019' as const,
          img: vlmLogo,
          name: 'VLM',
          line: 'Mestbank',
          role: 'Team Lead / Full-stack .NET Developer',
          period: '09/2019 – 05/2021',
          keywords: [
            'Frontend & UX lead',
            { en: 'Automating regulations', nl: 'Regelgeving automatiseren' },
            { en: 'Architectural refactoring', nl: 'Architecturale refactoring' },
            'Angular',
            'Legacy MVC & jQuery',
            'Azure Pipelines',
          ],
          description: {
            en: `
              <p>
                Between 2019 and 2021, I worked at VLM on several evolutions of the MTIL and TOMAS systems, applications that digitize and enforce
                complex agricultural and manure transport regulations. MTIL 2.5 focused on extending an existing web application for requesting and
                validating manure transports. The emphasis was on improving stability, maintainability and separation of concerns in the architecture,
                resulting in a stable release with new features and positive user feedback.
              </p>
              <p>
                A follow-up track around Mestbank covered both a modern .NET Core/Angular platform and the maintenance and extension of existing
                legacy MVC and jQuery applications. I combined the roles of developer, analyst and tech lead, focusing on architectural refactoring,
                improving the layered design and increasing testability and maintainability. I also supported MTIL by solving critical issues and
                setting up security and integration components within the wider VLM ecosystem.
              </p>
              <p>
                In the TOMAS 2 project, we built a completely renewed application in a small multidisciplinary team, to manage agricultural
                restrictions, including automated rules, objection procedures, document management and a portal for both farmers and administrative
                users. I took on the role of frontend tech lead (Angular) and UX lead, with additional backend contributions in ASP.NET Core and
                active involvement in analysis and team coordination. We delivered the project successfully within the scope of the initial release,
                with a clear technical vision and attention to further evolution.
              </p>
            `,
            nl: `
              <p>
                Tussen 2019 en 2021 werkte ik bij VLM aan meerdere evoluties van de MTIL- en TOMAS-systemen, applicaties die complexe landbouw- en
                mesttransportreglementering digitaliseren en handhaven. MTIL 2.5 focuste op het uitbreiden van een bestaande webapplicatie voor het
                aanvragen en valideren van mesttransporten. De nadruk lag op het verhogen van stabiliteit, onderhoudbaarheid en scheiding van
                verantwoordelijkheden in de architectuur, wat resulteerde in een stabiele release met nieuwe functionaliteiten en positieve
                gebruikersfeedback.
              </p>
              <p>
                In een daaropvolgend traject rond Mestbank werkte ik aan zowel een modern .NET Core/Angular-platform als onderhoud en uitbreiding van
                bestaande legacy MVC- en jQuery-applicaties. Ik combineerde hierbij rollen als ontwikkelaar, analist en tech lead, met focus op
                architecturale refactoring, het verbeteren van layered design en het verhogen van testbaarheid en maintainability. Daarnaast
                ondersteunde ik MTIL door kritieke issues op te lossen en security- en integratiecomponenten op te zetten binnen het bredere VLM-
                ecosysteem.
              </p>
              <p>
                In het TOMAS 2-project ontwikkelden we in een klein multidisciplinair team een volledig vernieuwde toepassing voor het beheer van
                landbouwrestricties, inclusief automatisering van regels, bezwaarprocedures, documentbeheer en een portaal voor zowel boeren als
                administratieve gebruikers. Ik nam hierbij de rol van frontend tech lead (Angular) en UX-verantwoordelijke op me, met bijkomende
                backendbijdragen in ASP.NET Core en actieve betrokkenheid bij analyse en teamcoördinatie. We leverden het project succesvol op binnen
                de scope van de initiële release, met een duidelijke technische visie en aandacht voor verdere evolutie.
              </p>
            `,
          },
        },
        {
          id: 'fluxys2019' as const,
          img: fluxysLogo,
          name: 'Fluxys',
          role: '.NET Developer',
          line: 'Connect',
          period: '03/2019 – 11/2019',
          keywords: [
            { en: 'Real-time auctions', nl: 'Realtime veilingen' },
            'Pipes and filters',
            'At-least-once delivery',
            'Message queues',
            'XML / XSLT',
            'Knockout JS',
          ],
          description: {
            en: `
              <p>
                Fluxys is a company specialized in gas transport in Belgium. My team focused mainly on the communication software Connect, which
                handles communication with customers and between internal Fluxys applications. This software follows the pipes-and-filters pattern
                with message queues, and the codebase consists largely of XML transformations.
              </p>
              <p>
                The existing application had two major problems: high memory usage and no at-least-once guarantee on messages. Together with a senior
                architect consultant, I investigated possible solutions for a new version (Connect v2). During wider discussions about this new
                version, I also became responsible for extending an existing application with a real-time auction platform. The complexity of real-
                time processing had initially been underestimated and further analysis was needed, which I was only too happy to take on. I also
                managed several smaller applications, mainly consisting of database operations through stored procedures and file processing.
              </p>
            `,
            nl: `
              <p>
                Fluxys is een bedrijf gespecialiseerd in het transport van gas in België. Het team waarin ik werkte focuste voornamelijk op de
                communicatiesoftware Connect, die instaat voor communicatie met klanten en tussen interne Fluxys-applicaties. Deze software is opgezet
                volgens het pipes-and-filters patroon met message queues, waarbij de codebase grotendeels bestaat uit XML-transformaties.
              </p>
              <p>
                De bestaande applicatie kende twee belangrijke problemen: een hoog geheugengebruik en het ontbreken van een at-least-once garantie op
                berichten. Samen met een senior architect-consultant onderzocht ik mogelijke oplossingen voor een nieuwe versie (Connect v2). Tijdens
                bredere discussies over deze nieuwe versie werd ik ook verantwoordelijk voor de uitbreiding van een bestaande applicatie met een real-
                time veilingplatform, waarbij de complexiteit van real-time verwerking initieel onvoldoende was ingeschat en bijkomende analyses
                noodzakelijk waren, waar ik me maar al te graag over boog. Daarnaast beheerde ik nog verschillende kleinere toepassingen, voornamelijk
                bestaande uit database-operaties via stored procedures en bestandsverwerking.
              </p>
            `,
          },
        },
        {
          id: 'imec2019' as const,
          img: imecLogo,
          name: 'IMEC',
          role: 'Technical Architect / Full-stack .NET Developer',
          line: 'PTW',
          period: '02/2019 – 03/2019',
          keywords: [
            { en: 'Short deadline', nl: 'Korte deadline' },
            { en: 'Moving off SharePoint', nl: 'Weg van SharePoint' },
            'Microsoft Azure',
            { en: 'Performance optimization', nl: 'Performantie-optimalisatie' },
            { en: 'Access control', nl: 'Toegangsbeheer' },
            'React',
          ],
          description: {
            en: `
              <p>
                IMEC organizes two scientific conferences a year and built a SharePoint application for them that lets clients browse all available
                presentations. Entering presentations and managing access rights is currently done through an Excel file and a PowerShell script that
                syncs this data to SharePoint.
              </p>
              <p>
                The existing client app suffered from serious performance problems: loading the application could take users several minutes. The
                security rules were also complex and scaled badly, because a separate security group was created for every unique combination of
                partners, which pushed the Excel file to its limits.
              </p>
              <p>
                We were asked both to build a new management application for presentations and access control and to optimize the client app. The
                implementation was left entirely to us. We moved most of the project to Azure to improve performance and control, with the intention
                of depending on SharePoint as little as possible. Because of the short 30-day deadline we could not realize the full vision, but we
                did lay the groundwork.
              </p>
            `,
            nl: `
              <p>
                IMEC organiseert twee wetenschappelijke conferenties per jaar en heeft hiervoor een SharePoint-applicatie ontwikkeld waarmee klanten
                alle beschikbare presentaties kunnen raadplegen. Het invoeren van presentaties en het beheren van toegangsrechten gebeurt momenteel
                via een Excel-bestand en een PowerShell-script dat deze gegevens naar SharePoint synchroniseert.
              </p>
              <p>
                De bestaande client-app kampte met ernstige performantieproblemen, waardoor het laden van de applicatie voor gebruikers meerdere
                minuten kon duren. Daarnaast waren de securityregels complex en schaalde ze slecht, doordat voor elke unieke combinatie van partners
                een aparte securitygroep werd aangemaakt, waardoor het Excel-bestand zijn limieten bereikte.
              </p>
              <p>
                Ons werd gevraagd om zowel een nieuwe beheertoepassing voor presentaties en toegangsbeheer te ontwikkelen als de client-app te
                optimaliseren. De implementatie werd volledig aan ons overgelaten. We verplaatsten het project grotendeels naar Azure om performantie
                en controle te verbeteren, met de intentie om zo weinig mogelijk afhankelijk te blijven van SharePoint. Door de korte deadline van 30
                dagen hebben we de volledige visie niet kunnen verwezenlijken, maar wel de eerste aanzet gegeven.
              </p>
            `,
          },
        },
        {
          id: 'vlm2018' as const,
          img: vlmLogo,
          name: 'VLM',
          line: 'MTIL 2.0',
          role: 'Full-stack Developer',
          period: '06/2018 – 12/2018',
          keywords: [
            { en: 'Rebuilding legacy', nl: 'Legacy heropbouwen' },
            { en: 'Manure transport regulations', nl: 'Mesttransportwetgeving' },
            { en: 'Complex business rules', nl: 'Complexe businessregels' },
            { en: 'Small team', nl: 'Klein team' },
          ],
          description: {
            en: `
              <p>
                The old MTIL application dated from before the turn of the millennium and the client decided it was time for a renewal. Farmers and
                manure transporters use this application to submit transport requests, after which it checks whether the transport is allowed. Since
                manure transport is heavily regulated and the legislation is complex, the application is enormously complex as well.
              </p>
              <p>
                The goal was to improve the usability of the application. To do so, we rebuilt it from scratch with more modern technologies and
                integrated it into the client's existing application landscape.
              </p>
              <p>
                We delivered the project on time and with few bugs. The production rollout just before the Christmas period, right before the client
                closed until after New Year, made for a challenging and exciting delivery. Delivering the application successfully, almost exactly
                matching the predefined scope, was seen as a strong result.
              </p>
            `,
            nl: `
              <p>
                De oude MTIL-applicatie dateerde van vóór de millenniumwissel en de klant besloot dat het tijd was voor een vernieuwing. Deze
                applicatie wordt gebruikt door landbouwers en mesttransporteurs om transportaanvragen in te dienen, waarna gecontroleerd wordt of het
                transport toegestaan is. Aangezien het vervoer van mest sterk gereguleerd is, en de wetgeving hieromtrent complex is, maakt dit de
                applicatie eveneens enorm complex.
              </p>
              <p>
                Het doel was om de gebruiksvriendelijkheid van de applicatie te verbeteren. Hiervoor begonnen we volledig opnieuw met modernere
                technologieën en integreerden we de applicatie in het bestaande applicatielandschap van de klant.
              </p>
              <p>
                We leverden het project tijdig en met een laag aantal bugs op. De productie-uitrol vlak vóór de kerstperiode, net voor de sluiting van
                de klant tot na Nieuwjaar, zorgde voor een uitdagende en spannende oplevering. De succesvolle levering van de applicatie, die vrijwel
                volledig overeenkwam met de vooraf gedefinieerde scope, werd als een sterk resultaat ervaren.
              </p>
            `,
          },
        },
        {
          id: 'securex2018' as const,
          img: securexLogo,
          name: 'Securex',
          role: 'Technical Analyst',
          line: 'Elastic Stack Research',
          period: '05/2018',
          keywords: [
            'Elasticsearch',
            'Logstash',
            'Kibana',
            { en: 'Centralized logging', nl: 'Centrale logging' },
            { en: 'Pre-sales demo', nl: 'Pre-sales-demo' },
          ],
          description: {
            en: `
              <p>
                This was a short pre-sales project in which we built a demo for a client around the possibilities, strengths and limitations of the
                ELK stack (Elasticsearch, Logstash and Kibana). The focus was on storing log data from different applications centrally and making it
                searchable, and on visualizing business data across a chain of applications through logging. The latter proved complex, since
                Elasticsearch expects data in the shape it will be queried in, and Logstash is not designed to aggregate and restructure datasets.
              </p>
              <p>
                We advised the client to use the ELK stack to centralize log data, since that is a typical use case the stack is well suited for. At
                the same time, we pointed out that the ELK stack is less suited to visualizing business data. Because the client had enough in-house
                knowledge to implement the log centralization themselves, no follow-up project came of it.
              </p>
            `,
            nl: `
              <p>
                Dit was een kort pre-sales project waarbij we voor een klant een demo ontwikkelden rond de mogelijkheden, sterktes en beperkingen van
                de ELK-stack (Elasticsearch, Logstash en Kibana). De focus lag op het centraal opslaan en doorzoekbaar maken van logdata uit
                verschillende applicaties, en het visualiseren van businessgerelateerde gegevens over een keten van applicaties via logging. Vooral
                dit laatste bleek complex, aangezien Elasticsearch data verwacht in de vorm waarin ze geraadpleegd wordt en Logstash niet ontworpen is
                voor aggregatie en herstructurering van datasets.
              </p>
              <p>
                We adviseerden de klant om de ELK-stack te gebruiken voor het centraliseren van logdata, aangezien dit een typische use-case is
                waarvoor de stack geschikt is. Tegelijkertijd gaven we aan dat de ELK-stack minder geschikt is voor het visualiseren van
                businessgerelateerde data. Omdat de klant voldoende interne kennis had om de logcentralisatie zelf te implementeren, kwam er
                uiteindelijk geen verder project tot stand.
              </p>
            `,
          },
        },
        {
          id: 'digipolis2018' as const,
          img: digipolisLogo,
          name: 'Digipolis Antwerpen',
          line: 'Generiek Dossier Platform (GDP)',
          role: '.NET Developer',
          period: '04/2018 – 05/2018',
          keywords: [
            'Reverse engineering',
            'Benchmarking',
            { en: 'Black-box testing', nl: 'Black-box-testen' },
            { en: 'Integration tests', nl: 'Integratietests' },
            'PostgreSQL',
            'EF Core',
          ],
          description: {
            en: `
              <p>
                GDP was meant as a document store to manage cases with structured and dynamic data, including task management, history and access
                through a Web API. Although most of the functionality was in place, the application suffered from serious performance problems and an
                unclear architecture and business logic.
              </p>
              <p>
                Digipolis called in support to stabilize and improve the application. We worked in phases: first, we tested the system as a black box
                to better understand its behavior. Next, we analyzed and optimized performance, using these tests as regression protection. In a
                final phase, we worked on structural improvements and a redesign of the application. The project was eventually paused due to external
                complications at GDP's clients.
              </p>
              <p>
                As the junior in a team with two seniors, I ran a series of benchmark tests to find the causes of the performance problems, and wrote
                many of the unit and integration tests that made sure our refactors would not break existing functionality.
              </p>
              <p>
                We improved the development workflow for Digipolis's internal developers by delivering test infrastructure, and improved the
                application's performance significantly.
              </p>
            `,
            nl: `
              <p>
                GDP was bedoeld als een document store voor het beheren van cases met gestructureerde en dynamische data, inclusief taakbeheer,
                historie en ontsluiting via een Web API. Hoewel de functionaliteit grotendeels werd gerealiseerd, kampte de applicatie met ernstige
                performantieproblemen en een onduidelijke architectuur en businesslogica.
              </p>
              <p>
                Digipolis schakelde ondersteuning in om de applicatie te stabiliseren en te verbeteren. We werkten in fasen: eerst testten we het
                systeem als black box om het gedrag beter te begrijpen. Vervolgens analyseerden en optimaliseerden we de performantie, met deze tests
                als regressiebescherming. In een laatste fase werkten we aan structurele verbeteringen en een herontwerp van de applicatie. Het
                project werd uiteindelijk gepauzeerd door externe complicaties bij de klanten van GDP.
              </p>
              <p>
                Als junior in een team met twee seniors voerde ik een reeks benchmarktests uit om de oorzaken van de performantieproblemen te vinden,
                en schreef ik veel van de unit- en integratietests die ervoor zorgden dat onze refactorings geen bestaande functionaliteit braken.
              </p>
              <p>
                We verbeterden de ontwikkelworkflow voor de interne ontwikkelaars van Digipolis door testinfrastructuur aan te leveren, en
                realiseerden een significante performantieverbetering van de applicatie.
              </p>
            `,
          },
        },
        {
          id: 'intrum2017' as const,
          img: intrumLogo,
          name: 'Intrum',
          role: '.NET Developer',
          line: 'Maintenance',
          period: '12/2017 – 02/2018',
          keywords: [
            'Oracle',
            { en: 'SQL optimization', nl: 'SQL-optimalisatie' },
            'Stored procedures',
            { en: 'Legacy applications', nl: 'Legacy-applicaties' },
            'Scrum',
          ],
          description: {
            en: `
              <p>
                Intrum is a debt collection agency where most processes, such as sending text messages, letters and emails or assigning bailiffs, are
                automated according to the specific instructions of their clients. All data is stored in an Oracle database, while the automated
                processes are managed and run by a set of .NET applications.
              </p>
              <p>
                At the client's request, much of the business logic lived in the database. Working on it gave me in-depth knowledge of SQL and of
                optimizing queries, along with hands-on experience maintaining legacy applications in a Scrum team.
              </p>
            `,
            nl: `
              <p>
                Intrum is een incassobureau waar de meeste processen, zoals het versturen van sms-berichten, brieven en e-mails of het toewijzen van
                gerechtsdeurwaarders, geautomatiseerd verlopen volgens de specifieke instructies van hun klanten. Alle gegevens worden opgeslagen in
                een Oracle-database, terwijl de geautomatiseerde processen worden beheerd en uitgevoerd door een reeks .NET-applicaties.
              </p>
              <p>
                Op vraag van de klant zat een groot deel van de businesslogica in de database. Daardoor bouwde ik een grondige kennis op van SQL en
                het optimaliseren van queries, en deed ik ervaring op met het onderhouden van legacy-applicaties in een Scrum-team.
              </p>
            `,
          },
        },
        {
          id: 'digipolis2017' as const,
          img: digipolisLogo,
          name: 'Digipolis Antwerpen',
          line: 'Delivery Request Registration',
          role: 'Full-stack .NET Developer',
          period: '09/2017 – 11/2017',
          keywords: [{ en: 'First assignment', nl: 'Eerste opdracht' }, 'Angular', 'Docker', 'Hangfire', 'PostgreSQL', 'Scrum'],
          description: {
            en: `
              <p>
                This project digitized the application for identity cards and other official documents for the city of Antwerp. It covered everything
                from the administration application to forwarding requests to the postal service, so these products could be delivered to people's homes.
              </p>
              <p>
                This was my first assignment. Together with another starter, I implemented the application, from the Angular frontend to the .NET
                backend. It was also my introduction to working in a Scrum team, with daily stand-ups, sprints and close collaboration within the team.
              </p>
            `,
            nl: `
              <p>
                De aanvraag voor identiteitskaarten en andere officiële documenten werd in dit project gedigitaliseerd voor de stad Antwerpen. Dit
                project hield de administratieapplicatie in tot het doorsturen van aanvragen naar de post om deze producten tot thuis te kunnen laten
                leveren.
              </p>
              <p>
                Dit was mijn eerste opdracht. Samen met een andere starter implementeerde ik de applicatie, van de Angular-frontend tot de
                .NET-backend. Het was ook mijn kennismaking met werken in een Scrum-team, met dagelijkse stand-ups, sprints en nauwe samenwerking
                binnen het team.
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
          id: 'technicolor2015' as const,
          img: technicolorLogo,
          name: { en: 'Internal tooling', nl: 'Interne tooling' },
          role: 'Software Developer',
          line: 'Test & reporting',
          period: '07/2015 – 07/2017',
          keywords: [
            'WPF',
            'MongoDB',
            'Jenkins CI',
            { en: 'Test automation', nl: 'Testautomatisering' },
            { en: 'Reporting tools', nl: 'Rapporteringstools' },
          ],
          description: {
            en: `
              <p>
                During my student jobs at Technicolor, I built internal software solutions in C#/.NET (WPF) to support testing, reporting and
                analysis processes. I worked on automating test comparisons, building user-friendly reporting tools, setting up a central MongoDB data
                layer for test results and extending the Continuous Integration environment with Jenkins.
              </p>
            `,
            nl: `
              <p>
                Tijdens mijn studentenjobs bij Technicolor ontwikkelde ik interne softwareoplossingen in C#/.NET (WPF) ter ondersteuning van
                test-, rapporterings- en analyseprocessen. Ik werkte onder meer aan de automatisering van testvergelijkingen, de ontwikkeling van
                gebruiksvriendelijke rapporteringstools, het opzetten van een centrale MongoDB-datalaag voor testresultaten en de uitbreiding van de
                Continuous Integration-omgeving via Jenkins.
              </p>
            `,
          },
        },
      ],
    },
  ],
  educations: [
    {
      degree: { en: 'Master in Physics', nl: 'Master in de Fysica' },
      school: { en: 'University of Antwerp', nl: 'Universiteit Antwerpen' },
      period: '09/2014 – 07/2017',
    },
    {
      degree: { en: 'Bachelor in Physics', nl: 'Bachelor in de Fysica' },
      school: { en: 'University of Antwerp', nl: 'Universiteit Antwerpen' },
      period: '09/2010 – 07/2016',
    },
  ],
  mainSkills: [
    {
      id: 'programmingLanguages' as const,
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
      id: 'frameworks' as const,
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
      id: 'spokenLanguages' as const,
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
  ],
  skills: [
    {
      id: 'frontend' as const,
      name: 'Frontend',
      skills: [
        'React',
        'TypeScript',
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
      id: 'backend' as const,
      name: 'Backend',
      skills: [
        '.NET Core',
        'ASP.NET (MVC)',
        'Entity Framework (Core)',
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
        'AutoMapper',
        'Hangfire',
        'Asynchronous Programming',
        'Web Services',
      ],
    },
    {
      id: 'testing' as const,
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
      id: 'cloud' as const,
      name: 'Cloud & DevOps',
      skills: [
        'RabbitMQ',
        'Azure Functions',
        'Azure Service Bus',
        'Azure Storage',
        'Azure DevOps / Pipelines',
        'Application Insights',
        'Docker',
        'GitHub Actions',
        'Message Queues',
        'Azure App Services',
        'Microsoft Azure',
        'Azure Container Apps',
        'Azure App Configuration',
      ],
    },
    {
      id: 'databases' as const,
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
        'NoSQL',
        'Data Migrations',
        'Indexing / Query Optimization',
      ],
    },
    {
      id: 'architecture' as const,
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
        'Design Patterns',
        'Dependency Injection',
        'Component-based Architecture',
        'OOP / OOD',
      ],
    },
    {
      id: 'methodologies' as const,
      name: { en: 'Methodologies', nl: 'Methodologieën' },
      skills: ['Code Reviews', 'Scrum', 'Agile', 'CI/CD', 'Pair Programming', 'User Stories', 'TDD'],
    },
    {
      id: 'security' as const,
      name: 'Security',
      skills: ['Authentication', 'Authorization', 'Keycloak', 'OAuth2', 'ASP.NET Core Identity'],
    },
    {
      id: 'design' as const,
      name: 'UX / UI / Design',
      skills: ['Figma', 'Responsive / Mobile-first', 'Tailwind', 'Design Systems', 'Component Libraries', 'User-Centered Design'],
    },
    {
      id: 'tools' as const,
      name: 'Tools',
      skills: ['OpenTelemetry', 'OpenAPI / Swagger', 'Portainer', 'NuGet'],
    },
    {
      id: 'other' as const,
      name: { en: 'Other', nl: 'Overige' },
      skills: ['Logging & Monitoring', 'React Native', 'Claude Code', 'XML / XSLT', 'Performance Optimization', 'Caching', 'Localization'],
    },
    {
      id: 'softSkills' as const,
      name: 'Soft skills',
      skills: [
        { en: 'Coach & Mentor', nl: 'Coach & mentor' },
        { en: 'Eye for detail', nl: 'Oog voor detail' },
        { en: 'Task-oriented', nl: 'Taakgericht' },
        { en: 'Cross-functional collaborator', nl: 'Multidisciplinaire teamspeler' },
        { en: 'Communicative', nl: 'Communicatief' },
        { en: 'Creative problem solver', nl: 'Creatieve probleemoplosser' },
      ],
    },
  ],
  presentations: [
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
            <code>useCallback</code> can be used deliberately to avoid unnecessary renders and optimize applications.
          </p>
        `,
        nl: `
          <p>
            Een technische deep dive in de interne werking van React op basis van de broncode. De presentatie behandelde onder meer hoe een
            React-applicatie wordt gemount, hoe JSX achterliggend wordt verwerkt en hoe React pagina's opbouwt en render cycles beheert. Daarnaast
            werd dieper ingegaan op state management en de momenten waarop React een nieuwe render uitvoert. Aan de hand van praktische voorbeelden
            werd ook toegelicht hoe hooks zoals <code>useRef</code> en <code>useCallback</code> doelgericht kunnen worden ingezet om onnodige renders
            te vermijden en applicaties te optimaliseren.
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
            About what TypeScript can do when the language is used correctly and deliberately. The presentation covered how TypeScript works behind
            the scenes, including the translation to JavaScript and the fundamental difference between compile time and runtime. It also discussed
            less obvious pitfalls and hard-to-detect bugs. Practical demos then showed how TypeScript types can be used and combined in creative and
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
      period: '09/2020',
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
  ],
} satisfies CvData;

export default cvData;
