import kenzeLogo from "./img/kenze.png";
import ordinaLogo from "./img/ordina.png";
import hendriksLogo from "./img/hendriks.png";
import odotLogo from "./img/odot.png";
import cascadorLogo from "./img/cascador.png";
import actemiumLogo from "./img/actemium.png";
import connectiveLogo from "./img/connective.png";
import vlmLogo from "./img/vlm.png";
import imecLogo from "./img/imec.png";

export const EMAIL = "cv@rhythm-coder.dev";

export interface Course {
  img?: string;
  name: string;
  line?: string;
  period: string;
  keywords: string[];
  description?: string; // HTML
}

export interface Employer {
  id: string;
  name: string;
  logo: string;
  period: string;
  span: string;
  activity: string;
  description?: string; // HTML
  courses: Course[];
}

export const employers: Employer[] = [
  {
    id: "kenze",
    name: "Kenze",
    logo: kenzeLogo,
    period: "10/2021 – now",
    span: "5 years",
    activity: ".NET developer consultant",
    description: `
      <p>
        Kenze is een fantastisch bedrijf. Ze blinken uit in hun menselijkheid en hun sales. Dit zorgt ervoor dat je je steeds als persoon behandeld
        wordt. Je bent geen nummer dat enkel maar dient om geld op te brengen. Feedback wordt serieus genomen, van zodra er een aantal mensen
        gelijkaardige kritiek uiten, gaan ze hier ook werkelijk mee aan de slag om na te gaan in hoeverre deze terecht zijn, door zelfs derde partijen
        in te schakelen. Ze zijn zich er perfect van bewust dat ze zelf ook maar mens zijn en en zetten de kritiek voor hun eigen trots.
      </p>
      <p>
        Ze hechten veel aandacht aan een goede match tussen consultant en klant. Daarom dat elke sales ook werkelijk een technische achtergrond heeft:
        ze weten m.a.w. goed wat ze verkopen.
      </p>
    `,
    courses: [
      {
        img: hendriksLogo,
        name: "Taxi Hendriks",
        line: "Transport",
        period: "09/2024 – 12/2026",
        keywords: ["Domain-Driven Design (DDD)", "Microservices Architecture", "React (+Native)", "CQRS"],
        description: `
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
      {
        img: odotLogo,
        name: "Odot",
        line: "EMP",
        period: "08/2023 – 09/2024",
        keywords: ["Analyst", "Akka.NET", "gRPC", "RabbitMQ"],
        description: `
          <p>
            Odot is actief binnen de energiemarkt en biedt zowel interne als externe applicaties ter ondersteuning van de aankoop en opvolging van
            energie. Via het Energy Management Platform (EMP), de interne applicatie, kunnen medewerkers bedrijven, contracten en meters beheren en
            energie op voorhand aankopen door prijzen voor bepaalde periodes vast te klikken. De Customer Portal (MyOdot) is de externe applicatie
            waarmee klanten inzicht krijgen in hun energieprijzen en verbruik. De applicatie visualiseert de relevante gegevens op een
            gebruiksvriendelijke manier en geeft klanten zo meer inzicht in hun energiegebruik en de bijbehorende kosten.
          </p>
        `,
      },
      {
        img: actemiumLogo,
        name: "Actemium",
        line: "Testplan debugger",
        period: "05/2022 – 08/2023",
        keywords: [],
        description: `
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
      {
        img: cascadorLogo,
        name: "Cascador",
        line: "Tech support",
        period: "09/2022 – 02/2025",
        keywords: [
          "Technical Coach",
          "React",
          "TypeScript",
          "Frontend Architecture",
          "Mentoring & Code Reviews",
          "Startup Environment",
        ],
        description: `
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
      {
        name: "Gosselin",
        line: "Gosselin",
        period: "12/2022 – 04/2023",
        // TODO: placeholder copied from Odot, replace with Actemium's real keywords
        keywords: ["Analyst", "Akka.NET", "gRPC", "RabbitMQ"],
        description: `
          <p>
            Gosselin is een grote logistieke speler gevestigd in Antwerpen en is al meerdere jaren partner van het Amerikaanse Department of Defense.
            Het bedrijf staat in voor de first- en last-mile verzending van persoonlijke goederen van US Army-personeel op bases in Europa. Met de
            vernieuwing van de laatste aanbesteding ontstond de nood om het bestaande softwarelandschap te moderniseren en meer data-integraties te
            voorzien met andere partners binnen het DoD-ecosysteem. Gosselin nam hiervoor een bestaand softwareproduct over van een partner om verder
            uit te bouwen en zo tijdig aan de vereisten van de opdracht te voldoen.
          </p>
        `,
      },
      {
        img: connectiveLogo,
        name: "Connective",
        line: "e-signing",
        period: "10/2021 – 12/2022",
        keywords: [
          "Team Lead",
          "React",
          "Design Systems",
          "Storybook",
          "From Scratch",
          "TypeScript",
          "Automated UI Testing",
        ],
        description: `
          <p>
            Connective verzorgt voornamelijk digitale ondertekening van documenten en ondersteunt verschillende ondertekenmethodes. De
            frontendapplicatie voor ondertekenaars, genaamd WYSIWYS (What You See Is What You Sign), was toe aan een herontwerp, zowel op vlak van
            codekwaliteit als gebruikerservaring. Er lag hierbij een sterke focus op het opzetten van een componentenbibliotheek, waarvoor Storybook
            werd geïntroduceerd, evenals een systeem voor aanpasbare theming dat door klanten kon worden gekozen en ondersteund door de library.
          </p>
        `,
      },
    ],
  },
  {
    id: "ordina",
    name: "Ordina Belgium",
    logo: ordinaLogo,
    period: "08/2017 – 09/2021",
    span: "4 years",
    activity: ".NET developer consultant",
    courses: [
      {
        name: "Internship supervisor",
        period: "03/2021 – 05/2021",
        keywords: ["Supporting role", "VR meeting app", "Unity 3D", "Brainstorming"],
      },
      {
        img: vlmLogo,
        name: "VLM",
        line: "Mestbank",
        period: "09/2019 – 05/2021",
        keywords: [
          "Frontend lead",
          "UX focus",
          "4 new applications",
          "Applying Angular knowledge",
          "Azure pipelines",
          ".NET Core",
        ],
        description: `
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
      {
        name: "Fluxys",
        line: "Connect",
        period: "03/2019 – 11/2019",
        keywords: [],
        description: `
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
      {
        img: imecLogo,
        name: "IMEC",
        line: "Calendar apps",
        period: "02/2019 – 03/2019",
        keywords: [
          "Technical Architect",
          "Short Deadline",
          "Microsoft Azure",
          "React",
          ".NET Core",
          "Performance Optimization",
          "From Scratch",
        ],
        description: `
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
      {
        img: vlmLogo,
        name: "VLM",
        line: "MTIL 2.0",
        period: "06/2018 – 12/2018",
        keywords: [
          "Complex Legacy Modernization",
          "Fullstack .NET Developer",
          "High-stakes Holiday Release",
          "Business Logic",
          "Small team",
        ],
        description: `
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
      {
        name: "Securex",
        line: "Elastic Stack Research",
        period: "05/2028",
        keywords: [],
        description: `
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
      {
        name: "Digipolis Antwerpen",
        line: "Generiek Dossier Platform (GDP)",
        period: "04/2018 – 05/2018",
        keywords: [],
        description: `
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
      {
        name: "Intrum",
        line: "Mainenance",
        period: "12/2017 - 02/2018",
        keywords: [],
        description: `
          <p>
            Intrum is een incassobureau waar de meeste processen, zoals het versturen van sms-berichten, brieven en e-mails of het toewijzen van
            gerechtsdeurwaarders, geautomatiseerd verlopen volgens de specifieke instructies van hun klanten. Alle gegevens worden opgeslagen in een
            Oracle-database, terwijl de geautomatiseerde processen worden beheerd en uitgevoerd door een reeks .NET-applicaties.
          </p>
        `,
      },
      {
        name: "Digipolis Antwerpen",
        line: "Delivery Request Registration",
        period: "09/2017 - 11/2017",
        keywords: [],
        description: `
          <p>
            De aanvraag voor identiteitskaarten en andere officiële documenten werd in dit project gedigitaliseerd voor de stad Antwerpen. Dit project
            hield de administratieapplicatie in tot het doorsturen van aanvragen naar de post om deze producten tot thuis te kunnen laten leveren.
          </p>
        `,
      },
    ],
  },
  {
    id: "student",
    name: "Student",
    logo: "",
    period: "07/2015 – 07/2017",
    span: "2 years",
    activity: "Developer",
    courses: [
      {
        name: "Technicolor",
        line: "Various jobs",
        period: "07/2015 – 07/2017",
        keywords: [],
        description: `
          <p>
            Tijdens Dieter zijn studentenjobs bij Technicolor ontwikkelde hij interne softwareoplossingen in C#/.NET (WPF) ter ondersteuning van
            test-, rapporterings- en analyseprocessen. Hij werkte onder meer aan de automatisering van testvergelijkingen, de ontwikkeling van
            gebruiksvriendelijke rapporteringstools, het opzetten van een centrale MongoDB-datalaag voor testresultaten en de uitbreiding van de
            Continuous Integration-omgeving via Jenkins.
          </p>
        `,
      },
    ],
  },
];

export const skills = [
  {
    name: "Programming languages",
    skills: [
      { name: "TypeScript", rating: 7, description: "Daily use, deep knowledge" },
      { name: "C#", rating: 7, description: "Daily use, deep knowledge" },
      { name: "JavaScript", rating: 6, description: "Indirect use, familiar with most of its quirks" },
    ],
  },
  {
    name: "Frameworks",
    skills: [
      { name: "React", rating: 7, description: "Daily use, knows its ins and outs" },
      { name: "ASP.NET", rating: 6, description: "Daily use for any server app" },
      { name: "Vue.js", rating: 5, description: "Go-to framework in spare time" },
    ],
  },
  {
    name: "Spoken languages",
    skills: [
      { name: "Dutch", rating: 7, description: "Mother tongue" },
      { name: "English", rating: 6, description: "Fluent understanding and writing" },
      { name: "French", rating: 2, description: "Basic understanding" },
    ],
  },
];
