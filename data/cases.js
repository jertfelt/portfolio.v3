export const cases = [
  {
    id:0,
    featured: true,
    tag: "NextJS",
    title:"Greenpeace: Sveriges Utsläpp",
    sub:"En interaktiv sida gjord med NextJS",
    text:"Projektarbete under min tid som praktikant på Vinnovera. Under max 10 veckor så jobbade jag i ett frontend-team där vi pitchade idén och sedan genomförde projektet åt Greenpeace.",
    tags:{
      c1:"Netlify",
      c2:"NextJS",
      c3:"GraphJS"
    },
    sources:{
      link:"https://sverigesutslapp.se",
      imgurl:"/img/greenpeace__1.png",
      imgalt:"Scrollbar hero och animerad svg",
      github:""
    },
    extra:{
      file01:{
        url:"/img/greenpeace__2.png",
        alt:"Interaktiv graf",
      },
      file02:{
        url:"/img/greenpeace__4.png",
        alt:"Text och bild"
      },
      file03: {
        url: "/img/greenpeace__3.png",
        alt: "Adminportal med olika funktioner"
      }
  },
  moreinfo:{
    text1: "Greenpeace ville ha en hemsida som hanterar statistik från SCB och som ska ge en tydligare bild av biobränsle. Det skulle vara sökbart, interaktivt, och enkelt att ta till sig. Utöver frontend-programmering så illustrerade jag även några illustrationer.",
    text1part2:"Vi jobbade med verktyget GraphJS för att skapa interaktiva grafer för användaren, totalt tre stycken. Datan hämtade vi från bl.a. SCB, och lagrade på vår egen databas i Firebase. Vi byggde även en funktion där användaren kan välja ett år och se datan för det specifika året. Datan uppdateras automatiskt när Naturvårdsverket uppdaterar.",
    text1part3: "Vi skapade ett eget CMS-system för Greenpeace där de kan gå in och ändra i länkar, bildtexter och texter samt avpublicera/publicera hela sektioner. Tech lead: Jonas Stattin, Vinnovera. UX lead: Per Lundgren. Projektledare: Harald Mellbom. Frontend-utvecklare: Tova Jertfelt, Vidar Rehn.",
    teknik:
      ["React", "SEO", "API calls", "GraphJS", "NextJS", "JSX", "Netlify", "Styled Components", "Firebase"],
      languages:
      [
        {id: "Javascript",
        value: 100.0},
        ]
  }
  }
  ,
  {
    id:1,
    featured: true,
    tag: "Redux",
    title:"Studentarbete: E-wallet",
    sub: "React + Redux",
    text:"Studentarbete där vi skulle jobba med redux och react.  Jag skapade en SPA-applikation där användaren kan hantera olika betalkort.  Användarens namn skulle i sin tur hämtas från ett externt API, och vara med på alla kort. Jag försökte också jobba med localstorage, på eget iniativ, så man kunde göra en refresh på hemsidan och behålla username och kort.",
    tags:{
      c1: "redux",
      c2: "react-css-modules",
      c3: "api"
    },
    sources:{
      link:"https://github.com/jertfelt/e-wallet",
      imgurl:"/img/ewallet--2.png",
      imgalt: "Aktiva och inaktiva kort",
      github:"https://github.com/jertfelt/e-wallet"
    },
    extra:{
      file01:{
        url:"/img/ewallet.png",
        alt:"Printscreen från projektet",
      },
      file02:{
        url:"/img/ewallet--loading.png",
        alt:"Loading screen"
      },
      file03: {
        url: "/img/ewallet-error.png",
        alt: "Lägg till nytt: felmeddelande visas. "
      }
  },
  moreinfo:{
    text1: "Det görs ett API vid start av applikationen, där jag hämtade en slumpvald användare från sidan https://randomuser.me/api/ .",
    text1part2:"Applikationen skulle ha två routes: /cards och /addcard. I /cards skulle jag visa ett aktivt kort, samt om användaren hade flera kort så skulle dessa finnas listade. Om man ville så skulle man kunna byta aktivt kort.",
    text1part3: "I /addcard skulle man kunna lägga till ett nytt kort med följande information: Vendor, card number, cardholder, expire month, expire year, CCV. Vi skulle hårdkoda minst tre alternativ för kortutgivare. Förhandsvisning var ett krav. ",
    teknik:
      ["React", "State", "Redux", "De-structuring", "Array methods", "React Router", "Life cycle hooks", "API calls"],
      languages:
      [
        {id: "CSS",
        value: 36.6},
        {id:"Javascript",
        value: 59.8},
        {id: "HTML",
        value: 3.6},
        ]
  }
},
{
  id:2,
  featured: true,
  tag: "React",
  title:"Studentarbete: Forumsida",
  sub: "React med API",
  text:"Din uppgift är att skapa ett forum som innehåller inlägg och kommentarer. Alla dessa ska hämtas från två olika API-endpoints.  Jag har även, utöver uppgifterna, labbat med att filtrera materialet.  Jag lärde mig att jag kunde göra en egen hook - useFetch - och har använt den för att slippa upprepa kod.",
  tags:{
    c1: "react",
    c2: "react-sass",
    c3: "map-array"
  },
  sources:{
    link:"https://github.com/jertfelt/react-forum-js3",
    imgurl:"/img/react-forum--2.png",
    imgalt: "Screenshot",
    github:"https://github.com/jertfelt/react-forum-js3"
  },
  extra:{
    file01:{
      url:"/img/react-forum.png",
      alt:"Printscreen från projektet",
    },
    file02:{
      url:"/img/reactforum--filter.png",
      alt:"Filtrera listan utifrån namn"
    },
    file03: {
      url: "/img/reactforum--thread.png",
      alt: "Själva inläggets kommentarer"
    }
},
moreinfo:{
  text1: "Inläggen skulle hämtas från: https://jsonplaceholder.typicode.com/posts och kommentarerna från https://jsonplaceholder.typicode.com/comments. ",
  text1part2:"På startsidan ska användaren se samtliga inlägg - enbart titeln för inläggen skulle vara med. Här valde jag att även göra ett filter där man kunde sortera på författaren. Här gjorde jag en manuell manipulering där varje unikt userId fick ett unikt namn.",
  text1part3: "På /post/:id så ska användaren kunna se inläggets titel och textinnehåll, samt samtliga kommentarer som gjorts i inlägget. Varje kommentar ska innehålla text, namn och mail på personen som kommenterat.",
  teknik:
    ["React", "State", "Array methods", "React Router", "API calls", "useEffect hook", "Custom hooks", "Array.filter", "Conditional operators"],
    languages:
   
    [
      {id:"SCSS",
      value:33.5 },
      {id:"Javascript",
      value:58.5 },
      {id:"HTML",
    value: 8},
      ]
}
},
{
  id:3,
  featured: false,
  tag: "React",
  title:"Svenhippan",
  sub: "Eget projekt",
  text:"Ett eget, högst experimentiellt och självlärande projekt där jag jobbade med React och olika states. Hemsidan är en 'app' som användes när två kompisar till mig skulle ha en gemensam svenhippa, där de får en digital skattjakt i Uppsala.",
  tags:{
    c1: "hooks",
    c2: "useState",
    c3: "react-sass"
  },
  sources:{
    link:"https://www.tovajertfelt.se/smalin/",
    imgurl:"/img/smalin-website.png",
    imgalt: "Screenshot",
    github:"https://github.com/jertfelt/smalin"
  },
  extra:{
    file01:{

      url:"/img/smalin-website-2.png",
      alt:"Printscreen från projektet",
    },
    file02:{
      url:"/img/smalin-website3.png",
      alt:"Filtrera listan utifrån namn"
    },
    file03: {
      url: "/img/smalin--1.png",
      alt: "Själva inläggets kommentarer"
    }
},
moreinfo:{
  text1: "I det här projektet har jag nästan uteslutande bara jobbat med conditional operators och useStates.",
  text1part2:" Jag har också jobbat med sass i kombination med React.",
  text1part3: "Projektet var ett experiment, ett lärande moment och bara till för att förstå mekaniken bakom React. Som ett plus så blev det en app som mina vänner blev utsatta för när vi gjorde deras gemensamma möhippesvensexa.",
  teknik:
    ["React", "State", "Conditional operators"],
    languages:
    [
      {id:"SCSS",
      value:27.6 },
      {id:"Javascript",
      value:70 },
      {id:"HTML",
    value: 2.4},
      ]
 

}
},{
  id:4,
  featured: true,
  tag:"localstorage",
  title:"Clown Artists Inc",
  sub: "Eget projekt",
  text:"Jag har dels kodat en dynamisk webbshop, som sparar din kundkorg i browserns lokala storage, samt en gör din egen meme-funktion, även denna i javascript. ",
  tags:{
    c1: "localstorage",
    c2: "javascript",
    c3: "webdesign"
  },
  sources:{
    link:"https://jertfelt.github.io/Webshop-clownartists/",
    imgurl:"/img/clownartists-hero.png",
    imgalt: "Bild på webbshoppen",
    github:"https://github.com/jertfelt/Webshop-clownartists"
  },
  extra:{
    file01:{
      url:"/img/clownartists-products.png",
      alt:"Produktlista",
    },
    file02:{
      url:"/img/clown-herocart.png",
      alt:"Printscreen från projektet",
    },
    file03:{
      url:"/img/clownartists-meme.png",
      alt:"Memegeneratort",
    },
},
moreinfo:{
  text1: "Grafiken är gjord under en grafikverktygkurs, jag har designat bl.a. logotyp och produktbilder samt varit art director.",
  text1part2:"I detta projekt har jag främst tittat på localstorage och dess användning, samt på javascript Classes.En utmaning var att rendera ut och få det att fungera.",
  text1part3: "Utöver butiken gjorde jag också en meme-generator där användaren laddar upp en bild, editerar och sparar ned.",
  teknik:
    ["localStorage", "Javascript", "classes", "css-sass"],
  languages:
      [{id:"HTML",
      value: 76.1},
        {id:"CSS",
        value:10.9 },
        {id:"Javascript",
        value:13 },
        ]
},

},
{
  id:5,
  featured: false,
  tag: "NodeJS",
  title:"Fyrishovs Bowling",
  sub: "Studentarbete i node.js",
  text:"Med node.js, mongoDB, mongoose, och express view engine har jag skapat, renderat och gett möjlighet att uppdatera en hemsidas enkla dagabas",
  tags:{
    c1: "mongoDB",
    c2: "nodejs",
    c3: "express view engine"
  },
  sources:{
    link:"https://github.com/jertfelt/nodejs-bowling",
    imgurl:"/img/node-bowling.png",
    imgalt: "En bild på en bowlingsidas medlemmar",
    github:"https://github.com/jertfelt/nodejs-bowling"
  },
  extra:{
    file01:{
      url:"/img/node-bowling-form.png",
      alt:"Formulär för att skapa användare",
    },
    file02:{
      url:"/img/node-bowling-update.png",
      alt:"Uppdatera användare",
    },
    file03:{
      url:"/img/node-bowling-single.png",
      alt:"Ensam användare",
    }
},
moreinfo:{
  text1: "Medlemsregistret skall ha fyra sidor: Startsida, Medlemslista, Sida för att se detaljer om en enskild medlem, och formulär för att lägga till nya medlemmar. Startsidan ska innehålla information om klubbens verksamhet. Medlemslistan ska ha en lista över alla medlemmar, och det ska vara möjligt att sortera i följande ordningar: 1) I ordningen de finns i databasen, 2) Alfabetisk ordning från A till Ö, 3) Alfabetisk ordning på namnen från Ö till A. Detaljsidan ska visa all information om medlemmen, det ska finnas ett formulär där man kan ändra en detalj och databasen ska uppdateras. Det ska också finnas en knapp för att ta bort medlemmen ur systemet. Formulärsidan ska ha ett formulär för att lägga till medlemmen. ",
  text1part2:"Varje sida ska ha en huvudmeny som länkar till startsidan ,medlemslistan och formuläret, samt en footer. Varje medlem i systemet ska ha följande info: namn, email, telefonnummer, datum när de gick med och ett valfritt fält som har med klubbens verksamhet att göra. ",
  text1part3: "Har jobbat mycket med felkoder (404) och early exits.H ar använt mongoosens timestamp-funktion.Jag har i projektet INTE jobbat mobile-first, utan bara desktop. Vid senare skede kommer jag titta på CSS:en och anpassa den till mobil. Jag har testat att göra enligt en MVC-mappstruktur (models, views, controller) men det lirade inte riktigt utan blev läsfel. På grund av tidsbrist så lät jag därför bli att utforska den saken närmre.",
  teknik:
    ["mongoose", "mongoDb", "Express", "EJS view engine"],
  languages: 
    [{id:"EJS",
    value: 54},
      {id:"CSS",
      value:24.8 },
      {id:"Javascript",
      value:21.2 },
      ]
}
},
{
  id:6,
  featured: true,
  tag: "localstorage",
  title:"Webshop: Ekoline",
  sub: "Grupparbete Nackademin",
  text:"Vår grupp hade två veckor på sig att skapa en webbutik med hjälp av localstorage och querystrings. I projektet har vi använt oss av agil projektmetod (kanban och scrum). Jag lajvade tech lead och designer. Vi jobbade också med routing i vår html-fil, tack vare querystrings.",
  tags:{
    c1: "projektarbete",
    c2: "JSON",
    c3: "querystrings"
  },
  sources:{
    link:"https://jertfelt.github.io/webshop/",
    imgurl:"/img/Ekoline--home.png",
    imgalt: "Bild på startsidan",
    github:"https://github.com/jertfelt/webshop"
  },
  extra:{
    file01:{
      url:"/img/ekoline--loggain-2.png",
      alt:"Logga in eller registrera dig",
    } ,
    file02:{
      url:"/img/ekoline-3.png",
      alt:"Varukorgen",
    },
    file03:{
      url:"/img/ekoline--produkt.png",
      alt:"Produktsida",
    }
},
moreinfo:{
  text1: "Det skall finnas minst 3 produktkategorier.Varje kategori skall innehålla minst 3 produkter. Produkterna skall vara lagrade som JSON. Även kategorierna skall vara lagrade som JSON.Följande sidor skall finnas: Startsida, Produktlista, Produktsida, Varukorg, Beställningssida, Skapa användare, Logga in-sida. Alla sidor skall ha en meny som visar kategorierna och länkar till produktlistan. Länken skall innehålla en querystring som avgör vilka produkter som skall visas. Det ska också finnas en länk till användarregistrering om användaren inte redan är inloggad. Man ska kunna se att man är inloggad och vem det är som är inloggad i menyn, annars en länk till inloggning.",
  text1part2:" Starsida: Skall innehålla en välkomsttext, samt en lista på kategorierna.Produktlista: En lista på produkterna inom en viss kategori. Produktsida: En detaljvy av produkten. Varukorg: En lista över de produkter användaren valt att köpa, KAN ligga som dropdown i en meny, eller finnas som både separat sida och som dropdown i meny.Beställningssida: En formulärsida där besökaren kan göra en “beställning” och se ett kvitto på beställningen. Skapa användare: En formulärsida där besökaren kan skapa en användare, med vissa preferenser.  Logga in: En formulärsida där besökaren kan logga in.",  
  text1part3: "All sparad användardata skall ligga i local storage (t.ex. varukorg) HTML-koden skall vara semantisk.",
  teknik:
    ["localStorage", "queryStrings", "JSON", "trello", "figma", "Sass", "Github pages"],
  languages:     
    [{id:"HTML",
    value: 24.8},
      {id:"SCSS",
      value:32.8},
      {id:"Javascript",
      value:42.4 },
      ]
}
}
,
{
  id:7,
  featured: false,
  tag: "api",
  title:"Starwars",
  sub: "Studentarbete",
  text:"Uppgiften var att med hjälp av ett API skapa en applikation där användaren kan jämföra Star-warskaraktärer med varandra. Här har jag jobbat med fetch, async, classes och lite setTimeOut",
  tags:{
    c1: "async",
    c2: "dynamic rendering",
    c3: "classes"
  },
  sources:{
    link:"https://jertfelt.github.io/starwars-api/",
    imgurl:"/img/starwars--3.png",
    imgalt: "Bild på hur interfacet ser ut",
    github:"https://github.com/jertfelt/starwars-api"
  },
  extra:{
    file01:{
      url:"/img/starwars.png",
      alt:"Renderar användare",
    },
    file02:{
      url:"/img/starwars--4.png",
      alt:"Hämtar användare från API",
    },
    file03:{
      url:"/img/starwars--5.png",
      alt:"Funktionalitet med starwars",
    }
},
moreinfo:{
  text1: "Beskrivning: Du ska med hjälp av ett API skapa en applikation där användaren kan jämföra en Star Wars-karaktär med andra karaktärer och deras egenskaper! Användaren ska kunna välja två karaktärer (Karaktär 1 & 2) med hjälp av varsin dropdown-lista. Listorna ska bestå av minst åtta namn på karaktärer från Star Wars-universumet som finns i API:et. Användaren ska sedan kunna klicka på en knapp för att hämta data om karaktärerna. Ett krav var att skapa en klass som jag döpte till Character med egenskaperna för name, gender, height, mass,hairColor samt pictureUrl. Klassen skulle även innehålla metoder för att jämföra karaktärens egna egenskaper med en annan karaktär.När datat har hämtats, skapade jag två instanser av Character-klassen, och gav egenskaperna i klassen värden utifrån det hämtade datat. Sedan renderade jag ut Karaktär 1 och Karaktär 2 i DOM:en - De ska visas ut med en bild samt namn.",
  text1part2:"Använd följande API: https://swapi.dev/API-endpoint: https://swapi.dev/api/people",
  text1part3: "Vidare skapade jag fyra knappar under varje karaktär: varje knapp ska besvara frågor om den andra karaktären. Instruktioner: Varje knapp ska köra en metod som definieras i din Character-klass. Frågorna ska besvaras i en textbox under respektive karaktär. T.ex ska du under Karaktär 1 ha knappar där hen besvarar följande frågor om Karaktär 2: 1) Vad Karaktär 2:s vikt är - Skriv även ut om Karaktär 2 väger mer/mindre än hen, samt skillnaden i vikt. 2) Vad Karaktär 2s längd är. - Skriv även ut om Karaktär 2 är längre/kortare än hen, samt skillnaden i längd. 3) Karaktär 2’s hårfärg. Om det är samma som Karaktär 1, skriv ut detta också.4)Karaktär 2’s kön. Om det är samma som Karaktär 1, skriv ut detta också.",
  teknik:
    ["API", "Classes", "CSS", "DOM-hantering", "SetTimeOut", "Fetch", "Axios"],
    languages: 
    [{id:"HTML",
    value: 15},
      {id:"CSS",
      value:21.9},
      {id:"Javascript",
      value:63.1},
      ]

}
},
{
  id:8,
  featured: true,
  tag: "javascript",
  title:"Designportfolio",
  sub: "Eget projekt",
  text:"Jag kodade om min gamla portföljsida för min konst, illustration och design. I projektet jobbar jag med json, domäner, men mestadels är det en statisk hemsida som presenterar mina tidigare arbeten. Har även jobbat här med routing.",
  tags:{
    c1: "sass",
    c2: "querystring",
    c3: "githubpages"
  },
  sources:{
    link:"https://www.tovajertfelt.com",
    imgurl:"/img/portfolio.jpg",
    imgalt: "Bild från portföljen",
    github:"https://github.com/jertfelt/Portfolio"
  },
  extra:{
    file01:{
      url:"/img/portfolio--2.png",
      alt:"Printscreen från portföljen",
    },
    file02:{
      url:"/img/portfolio--illustration.png",
      alt:"Gallerifunktion för illustrationsdelen",
    },
    file03:{
      url:"/img/portfolio--gallery.png",
      alt:"I formgivning jobbade jag istället med scrollfunktionen",
    },
},
moreinfo:{
  text1: "En statisk hemsida där jag jobbade med att fetcha från JSON, i vanlig Javascript.",
  text1part2:"Fokus låg på att visa upp bilder på ett bra sätt.",
  text1part3: "Sidan är fortfarande under utveckling och kommer kanske att migreras till React/NextJS",
  teknik:
    ["Javascript", "JSON", "fetch", "async", "SASS"],
    languages: 

      [{id:"HTML",
      value: 26.9},
        {id:"SCSS",
        value:43.4},
        {id:"Javascript",
        value:29.8},
      ]
}
},
{
  id:9,
  featured: true,
  tag: "cms",
  title:"Studentarbete: Bookducks",
  sub: "Interaktion med CMS",
  text:"Jag skulle ta fram en applikation för ett community som lånar/byter böcker och ljudböcker. Uppgiften var att skapa en frontend som kan kommunicera med en databas jag skapat i CMS-systemet Strapi.",
  tags:{
    c1: "axios",
    c2: "strapi",
    c3: "api"
  },
  sources:{
    link:"https://github.com/jertfelt/bookducks/",
    imgurl:"/img/bookducks--homepage.png",
    imgalt: "Printscreen från bookducks, visar homepage.",
    github:"https://github.com/jertfelt/bookducks/"
  },
  extra:{
    file01:{
      url:"/img/bookducks--profile.png",
      alt:"Profilsida Bookducks",
    },
    file02:{
      url:"/img/bookducks.png",
      alt:"Logga in som medlem",
    },
    file03:{
      url:"/img/bookducks-strapi.png",
      alt:"Strapis struktur",
    },
},
moreinfo:{
  text1: "Instruktioner: Du ska använda Strapi som CMS. Genom CMS-gränssnittet ska man kunna lägga till: 1) En bok med dess titel, författare, antal sidor, betyg (valfri skala t.ex 1-10), samt en bild på bokomslaget. 2) En ljudbok med dess titel, utgivningsdatum, längd, betyg (valfri skala t.ex 1-10), samt en bild på bokomslaget. 3) Samtliga böcker och ljudböcker ska även vara kopplad till en registrerad användare (som relation, id eller annat sätt) som lånar ut boken/ljudboken. (Du kan skapa upp användare med Strapis inbyggda User-collection type). 4)  Samtliga böcker och ljudböcker ska även ha en eller flera av följande genrer: Romantik, humor, skräck, barnvänlig, fantasy, sci-fi, action. (Skapa en content-type för dina genrer. Du kan också skapa egna genrer om du vill.",
  text1part2:"På grund av en bugg i post-funktionen (axios post) så fungerar den inte alltid, response-delen körs inte alltid igång även fast request skickas till servern. Vi tror att det är en bugg som ligger hos strapi, men ej säkert. Detta gör iallafall att vissa funktioner inte alltid är pålitliga, och att mycket tid i projektet gick ut på att felsöka detta problem, istället för att förfina koden.",
  text1part3: "Användaren ska kunna se en lista på samtliga böcker och ljudböcker som finns tillgängliga för utlåning. Skriv ut samtliga egenskaper för böckerna/ljudböckerna. Skriv även ut kontaktuppgifter för användaren som lånar ut boken/ljudboken (användarnamn samt email). Det ska vara möjligt för en användare att logga in samt registrera sig på sidan. Det ska tydligt framgå om användaren är inloggad i applikationen.Det ska finnas en profilsida - Denna sida ska dock kräva inloggning för att visas.  Profilsidan som visar information om användarens användarnamn, email, id, samt vilket datum användaren registrerade sig. Sidan ska även innehålla en lista över samtliga böcker och ljudböcker som användaren har lagt ut för utlåning. Det ska även finnas ytterligare en sida där registrerade användare kan lägga ut böcker och ljudböcker för utlåning. Denna sida ska kräva att användaren är inloggad. Se till att användaren kan lägga till samtliga egenskaper för boken/ljudboken, inklusive bild på bokomslag och genrer.Sidan ska ha ett professionellt utseende.Sidan ska fungera utan några större buggar.",
  teknik:
    ["Strapi", "Headless CMS", "Querystrings", "Axios", "Postman", "SASS", "Node.js"],
    languages: 
      [{id:"HTML",
      value: 19.7},
        {id:"SCSS",
        value:29.3},
        {id:"Javascript",
        value:50.5},
        {id:"Shell",
        value:0.5},
      ]
}
},
{
  id:10,
  featured: false,
  tag: "sass",
  title:"Studentarbete: PALT",
  sub: "Grupparbete i CSS & HTML",
  text:"Vår uppgift var att skapa en webbplats för ett påhittat företag. Webbplatsen ska bestå av minst följande fyra undersidor - Startsida, Om oss, Cases och Kontakt. Vi började med att ta fram en mockup på webbplatsen som vi förhöll oss till när vi kodade.",
  tags:{
    c1: "css",
    c2: "projektarbete",
    c3: "html"
  },
  sources:{
    link:"https://github.com/jertfelt/PALT/",
    imgurl:"/img/palt-screenshot.png",
    imgalt: "Printscreen från PALT: visar tre rosa ikoner",
    github:"https://jertfelt.github.io/PALT/"
  },
  extra:{
    file01:{
      url:"/img/palt-kontakt.png",
      alt:"Kontaktformulär",
    },
    file02:{
      url:"/img/palt--3.png",
      alt:"Hemsida",
    },
    file03:{
      url:"/img/palt-cases.png",
      alt:"Cases",
    }
},
moreinfo:{
  text1: "Webbplatsen ska bestå av minst följande fyra undersidor - Startsida, Om oss, Cases och Kontakt.",
  link:"https://randomuser.me/api/",
  text1part2:"Samtliga sidor ska innehålla följande element:En navigation till samtliga undersidor. Det ska framgå vilken sida i webbplatsen man befinner sig i.En header där det framgår tydligt vilken sida/undersida man befinner sig i. En footer med navigationslänkar till samtliga undersidor.",
  text1part3: "Startsida: Ska framgå tydligt vad för typ av webbplats man hamnat på, och vad företaget säljer för tjänst/produkt.  Om oss: Historik om företaget och anställda på företaget - För varje anställd ska det finnas bild, roll i företaget, samt en beskrivning på de anställda på företaget (minst 6 anställda). Referenser: Ska innehålla kundrecensioner av produkt eller tjänster. Dessa recensioner ska innehålla en kort kommentar samt betyg (valfri betygsskala). Recensionerna kan vara kan vara från företag eller privatpersoner beroende på vad för typ av produkt/tjänst företaget säljer.Kontakt: Ska innehålla adress och telefonnummer till företaget + bild på byggnad som företaget har sitt kontor, och ett formulär för att kontakta företaget.",
  teknik:
    ["SASS", "Javascript", "Figma"],
    languages: 
      [{id:"HTML",
      value: 54.4},
        {id:"SCSS",
        value:42.1},
        {id:"Javascript",
        value:3.5},
      ]
}
},
{
  id:11,
  featured: true,
  tag: "nodeJS",
  title:"Ekobanken",
  sub: "Fullstack och kryptering",
  text:"Jag skulle skapa en säker bank med REST-API, med databas i mongoDB där frontenden kommunicerar med JSON. Utöver detta kunde vi jobba med kryptering och cookies. Designen är rakt av snodd från ekobanken.se ",
  tags:{
    c1: "mongodb",
    c2: "kryptering",
    c3: "rest-api"
  },
  sources:{
    link:"https://github.com/jertfelt/bankingapp-restAPI-node-mongodb",
    imgurl:"/img/ekobanken--loggedin.png",
    imgalt: "Designen snodd från ekobanken.se",
    github:"https://github.com/jertfelt/bankingapp-restAPI-node-mongodb"
  },
  extra:{
    file01:{
      url:"/img/ekobanken--konto.png",
      alt:"Printscreen",
    },
    file02:{
      url:"/img/ekobanken-screenshot2.png",
      alt:"Startsidan och kod",
    },
    file03:{
      url:"/img/ekobanken--screenshotblikund.png",
      alt:"Bli kund-sida",
    }
  },
  moreinfo:{
    text1: "Det görs ett API vid start av applikationen, där jag hämtade en slumpvald användare från ",
    link:"https://randomuser.me/api/",
    text1part2:"Applikationen skulle ha två routes: /cards och /addcard. I /cards skulle jag visa ett aktivt kort, samt om användaren hade flera kort så skulle dessa finnas listade. Om man ville så skulle man kunna byta aktivt kort.",
    text1part3: "I /addcard skulle man kunna lägga till ett nytt kort med följande information:Vendor, card number, cardholder, expire month, expire year, CCV. Vi skulle hårdkoda minst tre alternativ för kortutgivare. Förhandsvisning var ett krav. ",
    teknik:
      ["React", "State", "Redux", "De-structuring", "Array methods", "React Router", "Life cycle hooks", "API calls", "bcrypt"],
      languages: 
      [{id:"HTML",
      value: 40.2},
        {id:"SCSS",
        value:22.6},
        {id:"Javascript",
        value:32.9},
        {id:"EJS",
        value: 4.3},
      ]
  }
},
]




