// === Překlady textů (CZ / EN) ===
const translations = {
    cs: {
        subtitle: "AI školení 2026",
        welcome: "Tajemství projektu Karel",
        welcomeText: "Bývalý zaměstnanec legendární Karel vyvinul dokonalý systém práce tzv. Zlatý Workflow, díky kterému stíhal všechnu práci pro 4 lidi sám za 60 minut na hodinu. Před odchodem ale tento systém zašifroval do 4 částí a ukryl do firemních dat. Tak aby po sobě zanechal celé dědictví, ale zároveň ho neodevzdal zadarmo.",
        introAI: "Úvod do AI",
        copywriter: "CopyWriter",
        automation: "Automatizace",
        dataTables: "Data a tabulky",
        summarySearch: "Sumarizace a vyhledávání",
        languageLabel: "Jazyk",
        subContent: "Obsah",
        subStructure: "Kostra",
        subInfo: "Informace",
        detailDuration: "Délka školení",
        detailTrainer: "Školitel",
        detailAuthor: "Tvorba"
    },
    en: {
        subtitle: "AI Training 2026",
        welcome: "Welcome to the training",
        welcomeText: "Choose the area you want to focus on today.",
        introAI: "Intro to AI",
        copywriter: "Copywriter",
        automation: "Automation",
        dataTables: "Data & Spreadsheets",
        summarySearch: "Summaries & Search",
        languageLabel: "Language",
        subContent: "Content",
        subStructure: "Outline",
        subInfo: "Info",
        detailDuration: "Training length",
        detailTrainer: "Trainer",
        detailAuthor: "Created by"
    }
};

// Detaily školení pro "Informace"
const trainingDetails = {
    intro: {
        duration: { cs: "4 hodiny", en: "4 hours" },
        trainer: { cs: "Sebastian Jareš", en: "Sebastian Jareš" },
        author: { cs: "Sebastian Jareš", en: "Sebastian Jareš" }
    },
    copywriter: {
        duration: { cs: "2 hodiny", en: "2 hours" },
        trainer: { cs: "Sebastian Jareš", en: "Sebastian Jareš" },
        author: { cs: "Sebastian Jareš", en: "Sebastian Jareš" }
    },
    automation: {
        duration: { cs: "2 hodiny", en: "2 hours" },
        trainer: { cs: "Sebastian Jareš", en: "Sebastian Jareš" },
        author: { cs: "Sebastian Jareš", en: "Sebastian Jareš" }
    },
    data: {
        duration: { cs: "4 hodiny", en: "4 hours" },
        trainer: {
            cs: "IT (Lukáš Rataj a jeho tým)",
            en: "IT (Lukáš Rataj and his team)"
        },
        author: { cs: "Sebastian Jareš", en: "Sebastian Jareš" }
    },
    summary: {
        duration: { cs: "2 hodiny", en: "2 hours" },
        trainer: { cs: "Sebastian Jareš", en: "Sebastian Jareš" },
        author: { cs: "Sebastian Jareš", en: "Sebastian Jareš" }
    }
};

// Dlouhé texty pro MODAL – obsah / kostra (HTML)
const modalTexts = {
    // === ÚVOD DO AI ===
    intro: {
        structure: {
            cs: `
<h2>Úvod do umělé inteligence (AI)</h2>
<p class="tagline">„Nejrychlejší vlak současnosti“</p>

<h3>Základní parametry školení</h3>
<ul class="meta">
    <li><strong>Délka:</strong> 4 hodiny</li>
    <li><strong>Forma:</strong> interaktivní seminář (přednáška + ukázky + diskuse + aktivity)</li>
    <li><strong>Kapacita:</strong> max. 35 účastníků</li>
    <li><strong>Školitel:</strong> Sebastian Jareš</li>
    <li><strong>Vypracuje:</strong> Sebastian Jareš</li>
</ul>

<div class="divider"></div>

<h3>Cíl školení</h3>
<ul>
    <li>Vysvětlit, co je umělá inteligence a proč je považována za revoluční technologii.</li>
    <li>Na jednoduchých příkladech ukázat, jak AI funguje a kde ji už dnes potkáváme.</li>
    <li>Představit praktické nástroje AI (text, obrázky, hudba, video) pro běžný život i práci.</li>
    <li>Otevřít témata etiky, rizik, bias, deepfake a dezinformací.</li>
    <li>Podnítit zamyšlení nad budoucností AI a rolí člověka.</li>
</ul>

<div class="divider"></div>

<h3>1. Úvod: AI vtrhává na scénu (30–40 min)</h3>
<ul>
    <li>Co je AI a čím se liší od běžného softwaru.</li>
    <li>Proč je AI revoluční.</li>
    <li>Kde AI používáme nevědomky.</li>
    <li>Krátké „wow“ ukázky: deepfake, AI obrázky, hudba (Suno).</li>
</ul>

<div class="divider"></div>

<h3>2. Jak AI funguje? (30–40 min)</h3>
<ul>
    <li>Základní princip: data → učení → model → výstup.</li>
    <li>Intuitivní vysvětlení neuronových sítí na příkladu obrázků a pixelů.</li>
    <li>Typy učení: s učitelem, bez učitele, posilované učení (příklady z praxe).</li>
    <li>Rychlá ukázka generativní AI: Midjourney (obrázky), InVideo AI (video).</li>
</ul>

<div class="divider"></div>

<h3>3. AI v praxi: kde se s ní setkáváme? (30–40 min)</h3>
<ul>
    <li>AI v práci: asistent, generátor textu/obsahu, analýza dat, podpora rozhodování.</li>
    <li>Prompty – proč na zadání záleží (jednoduché příklady rozdílných výstupů).</li>
    <li>Prompt marketplace (např. Promptbase) – krátké představení.</li>
    <li>ChatGPT – ukázka možností a limitů v přímém přenosu.</li>
</ul>

<div class="divider"></div>

<h3>4. Etika a nebezpečí AI (30–45 min)</h3>
<ul>
    <li>Bias v AI – proč není objektivní (data, lidé, algoritmy, použití).</li>
    <li>Deepfake a dezinformace – co to je, proč jsou nebezpečné, jak se bránit.</li>
    <li>Příběh LaMDA a „senzitivní AI“ – co si z toho vzít.</li>
    <li>Reálné průšvihy: rozpoznávání obličejů, zdravotnictví, nábor, autonomní vozy, toxičtí chatboti.</li>
    <li>Skupinová aktivita: etické scénáře (auto, zdravotnictví, úvěry, moderace obsahu).</li>
</ul>

<div class="divider"></div>

<h3>5. Budoucnost: ovládne nás AI? (15 min)</h3>
<ul>
    <li>Vybrané pohledy expertů (Musk, Kurzweil, Bostrom – v kostce).</li>
    <li>Tempo vývoje od nástupu ChatGPT po současnost.</li>
    <li>Dopady na práci: kde AI pomáhá a kde může nahrazovat.</li>
    <li>Kvantové počítače jako možný další zlom.</li>
</ul>

<div class="divider"></div>

<h3>6. Závěr a završení příběhu (5 min)</h3>
<ul>
    <li>Shrnutí: co AI je, co umí, kde selhává a proč je klíčový lidský dohled.</li>
    <li>AI jako nástroj, ne pán – proč se vyplatí „nastoupit do vlaku“ a naučit se s ním jezdit.</li>
</ul>`,
            en: `
<h2>Introduction to Artificial Intelligence (AI)</h2>
<p class="tagline">“The fastest train of today”</p>

<h3>Training essentials</h3>
<ul class="meta">
    <li><strong>Duration:</strong> 4 hours</li>
    <li><strong>Format:</strong> interactive seminar (lecture + demos + discussion + activities)</li>
    <li><strong>Capacity:</strong> max. 35 participants</li>
    <li><strong>Trainer:</strong> Sebastian Jareš</li>
    <li><strong>Created by:</strong> Sebastian Jareš</li>
</ul>

<div class="divider"></div>

<h3>Training goals</h3>
<ul>
    <li>Explain what artificial intelligence is and why it is considered a revolutionary technology.</li>
    <li>Use simple examples to show how AI works and where we encounter it today.</li>
    <li>Present practical AI tools (text, images, music, video) for everyday life and work.</li>
    <li>Open topics such as ethics, risks, bias, deepfakes and disinformation.</li>
    <li>Encourage reflection on the future of AI and the role of humans.</li>
</ul>

<div class="divider"></div>

<h3>1. Introduction: AI enters the stage (30–40 min)</h3>
<ul>
    <li>What AI is and how it differs from traditional software.</li>
    <li>Why AI is revolutionary.</li>
    <li>Where we use AI without realising it.</li>
    <li>Short “wow” demos: deepfakes, AI images, music (Suno).</li>
</ul>

<div class="divider"></div>

<h3>2. How does AI work? (30–40 min)</h3>
<ul>
    <li>Basic principle: data → learning → model → output.</li>
    <li>Intuitive explanation of neural networks on image/pixel examples.</li>
    <li>Types of learning: supervised, unsupervised, reinforcement (examples from practice).</li>
    <li>Quick demo of generative AI: Midjourney (images), InVideo AI (video).</li>
</ul>

<div class="divider"></div>

<h3>3. AI in practice: where do we meet it? (30–40 min)</h3>
<ul>
    <li>AI at work: assistant, text/content generator, data analysis, decision support.</li>
    <li>Prompts – why the wording matters (simple examples of different outputs).</li>
    <li>Prompt marketplaces (e.g. Promptbase) – short introduction.</li>
    <li>ChatGPT – live demo of possibilities and limits.</li>
</ul>

<div class="divider"></div>

<h3>4. Ethics and dangers of AI (30–45 min)</h3>
<ul>
    <li>Bias in AI – why it is not objective (data, people, algorithms, use).</li>
    <li>Deepfakes and disinformation – what they are, why they are dangerous, how we can defend against them.</li>
    <li>The LaMDA “sentient AI” story – what we can take from it.</li>
    <li>Real failures: facial recognition, healthcare, recruitment, self-driving cars, toxic chatbots.</li>
    <li>Group activity: ethical scenarios (cars, healthcare, loans, content moderation).</li>
</ul>

<div class="divider"></div>

<h3>5. The future: will AI control us? (15 min)</h3>
<ul>
    <li>Selected expert views (Musk, Kurzweil, Bostrom – in a nutshell).</li>
    <li>The pace of development from the launch of ChatGPT to today.</li>
    <li>Impact on work: where AI helps and where it may replace humans.</li>
    <li>Quantum computers as a possible next turning point.</li>
</ul>

<div class="divider"></div>

<h3>6. Conclusion – closing the story (5 min)</h3>
<ul>
    <li>Summary: what AI is, what it can do, where it fails and why human oversight is crucial.</li>
    <li>AI as a tool, not a master – why it pays off to “get on the train” and learn how to ride it.</li>
</ul>`
        },
        content: {
            cs: `<p>Obsah bude doplněn.</p>`,
            en: `<p>Content will be added.</p>`
        }
    },

    // === COPYWRITER ===
    copywriter: {
        // OBSah
        content: {
            cs: `
<h2>COPYWRITER – Psaní a úpravy textů s AI</h2>
<p class="tagline">Délka: 1,5–2 h · Interaktivní workshop · Max. 10 účastníků</p>

<div class="divider"></div>

<h3>1) Úvod &amp; příběh „Karlův styl“ (5–10 min)</h3>
<p><strong>Story:</strong></p>
<ul>
    <li>Máme data a fakta, ale potřebujeme přesvědčit vedení, aby nám dalo přístup do archivu.</li>
    <li>Karel nebyl jen „chytřejší“, měl i nezaměnitelný styl psaní, kterému lidé důvěřovali.</li>
</ul>
<p><strong>Co rozhoduje o tom, zda text funguje:</strong></p>
<ul>
    <li>jasnost,</li>
    <li>stručnost,</li>
    <li>tón (formální / neformální),</li>
    <li>přizpůsobení cílové skupině (vedení, kolega, klient).</li>
</ul>

<div class="divider"></div>

<h3>2) Představení AI pro psaní a promptů (10–15 min)</h3>
<p>Cíl: dát účastníkům základ – co od AI na text vůbec můžou chtít a kde jsou limity.</p>

<h4>A: Co AI umí při práci s textem</h4>
<ol>
    <li><strong>Návrh textu</strong> – e-mail, krátký odstavec, shrnutí, osnovy, varianty formulací.</li>
    <li><strong>Úprava existujícího textu</strong> – zkrácení / rozšíření, zjednodušení složitého textu, změna tónu (formální / přátelský / neutrální), úprava textu pro jinou cílovou skupinu.</li>
    <li><strong>Kontrola a překlad</strong> – revize struktury, srozumitelnosti, logiky, základní jazyková kontrola, překlady a úprava tónu v jiném jazyce.</li>
</ol>

<h4>B: Co AI neumí / na co si dát pozor</h4>
<ul>
    <li>negeneruje právně závazné texty,</li>
    <li>může si vymýšlet fakta, čísla, jména (halucinace),</li>
    <li>nezná interní firemní pravidla, pokud jí je nedáme.</li>
</ul>

<h4>C: Bezpečnost &amp; data (mini blok 5–10 min)</h4>
<p><strong>Co do AI nepatří:</strong></p>
<ul>
    <li>firemní tajemství, finanční údaje, detailní osobní data, citlivé smlouvy (pokud není schválený nástroj).</li>
</ul>
<ul>
    <li>Rozdíl: soukromý účet vs. firemní nástroj (ChatGPT Team/Enterprise, Copilot, Gemini).</li>
    <li>Zásada: AI = pomocník, ne „autopilot“.</li>
</ul>

<div class="divider"></div>

<h3>3) Rozcvička: Stylistická cvičení (15–20 min)</h3>
<p>Cíl: na jednoduchých příkladech ukázat, jak AI mění tón a formu textu.</p>

<h4>A: Přepis tónu</h4>
<ul>
    <li>Krátký formální e-mail → přátelštější, ale profesionální podoba.</li>
    <li>Neformální e-mail → formální podoba pro vedení.</li>
</ul>

<h4>B: Zkrácení a zpřehlednění</h4>
<ul>
    <li>Dlouhý, „šroubovaný“ text:
        <ul>
            <li>„Zkrať na polovinu, zachovej hlavní sdělení.“</li>
            <li>„Přepiš do tří jasných bodů pro vedení.“</li>
        </ul>
    </li>
</ul>

<h4>C: Praktický postup</h4>
<ol>
    <li>Nejprve se zamyslet „ručně“ – co chci změnit (tón, délku, strukturu).</li>
    <li>Pak použít AI s konkrétním zadáním:
        <ul>
            <li>„Uprav tón na…“</li>
            <li>„Zkrať na…“</li>
            <li>„Přepiš pro… (klienta / vedení / nováčka)“</li>
        </ul>
    </li>
</ol>

<div class="divider"></div>

<h3>4) Deep Dive: Prompt Engineering pro text (30–35 min)</h3>
<p>Cíl: naučit účastníky zadávat prompty tak, aby AI dělala víc než „něco napiš“ – jasné cíle, vhodný tón, správný formát.</p>

<h4>4.1 Mini-teorie – struktura textového promptu</h4>
<p><strong>Role + Kontext + Cíl + Formát výstupu + Omezení</strong></p>
<p><strong>Příklad špatného promptu:</strong><br>
„Napiš mi e-mail šéfovi.“</p>
<p><strong>Příklad lepšího promptu:</strong></p>
<p>
„Jsi firemní copywriter.<br>
Napiš stručný, formální e-mail našemu řediteli.<br>
Kontext: žádáme o schválení rozpočtu na školení.<br>
Formát: 3 odstavce + návrh předmětu.<br>
Omezení: maximálně 150 slov, žádné sliby, které nemáme potvrzené.“
</p>

<h4>4.2 Check-list pro „dobrý textový prompt“</h4>
<ul>
    <li>Co chci? (návrh textu, úprava, shrnutí, změna tónu…)</li>
    <li>Pro koho je text? (vedení, kolega, klient, nováček…)</li>
    <li>Jaký je cíl? (informovat, přesvědčit, uklidnit, vyžádat akci…)</li>
    <li>Jak má výstup vypadat? (e-mail, body, odstavec, více variant…)</li>
    <li>Jaká omezení mám? (délka, tón, žádné vymyšlené údaje…)</li>
</ul>

<h4>4.3 „Red flags“ – kdy AI nevěřit</h4>
<ul>
    <li>Vymýšlí:
        <ul>
            <li>odkazy na neexistující dokumenty, čísla, jména,</li>
            <li>příliš obecné nebo nereálné sliby.</li>
        </ul>
    </li>
</ul>
<ul>
    <li>Jednoduchá pravidla:
        <ul>
            <li>fakta vždy ověřit,</li>
            <li>konečný text vždy přečíst,</li>
            <li>před odesláním přizpůsobit firemnímu stylu.</li>
        </ul>
    </li>
</ul>

<h4>4.4 Ukázka naživo (AI + sdílená obrazovka)</h4>
<ul>
    <li>Scénář 1: návrh odpovědi klientovi.</li>
    <li>Scénář 2: přepis technického textu pro vedení.</li>
    <li>Scénář 3: z dlouhého textu udělat 3–5 bodů do prezentace.</li>
</ul>

<div class="divider"></div>

<h3>5) AI jako copywriting asistent – praktické textové úlohy (20–25 min)</h3>
<p>Účastníci si AI vyzkouší na typických firemních textech.</p>

<h4>5.1 Typové úkoly</h4>
<ul>
    <li>Návrh odpovědi na e-mail (stížnost, dotaz, prosba).</li>
    <li>Vytvoření zápisu z jednání z odrážek / poznámek.</li>
    <li>Kontrola textu (logika, struktura, čitelnost).</li>
    <li>Překlad textu + úprava tónu v druhém jazyce.</li>
</ul>

<h4>5.2 Zadání pro účastníky</h4>
<ul>
    <li>Vyber si buď reálný (anonymizovaný) text, nebo modelový příklad.</li>
    <li>Vytvoř 3–4 prompty, které:
        <ul>
            <li>A) vygenerují návrh textu,</li>
            <li>B) upraví tón (pro jinou cílovou skupinu),</li>
            <li>C) zkrátí / zpřehlední text,</li>
            <li>D) přeloží text a zachovají zvolený tón.</li>
        </ul>
    </li>
    <li>Vždy prompt uprav min. 2–3× a sleduj, jak se odpověď zlepšuje.</li>
</ul>

<div class="divider"></div>

<h3>6) Mini-blok: jazyky (10–15 min)</h3>
<p>Cíl: ukázat, že se vyplatí vzdělávat se jazykům s AI.</p>
<p>Cvičení – komunikace, práce s textem, tutoring AI lektorem.</p>

<div class="divider"></div>

<h3>7) Boss Fight: „Neodolatelný e-mail vedení“ (20–25 min)</h3>
<p>Scénář, kde se spojí vše dohromady (Karel může psát i rýmovaně 😊).</p>

<h4>7.1 Zadání</h4>
<ul>
    <li>Účastníci dostanou:
        <ul>
            <li>popis situace (např. žádost o podporu projektu / přístup do archivu),</li>
            <li>ukázku „Karlova“ textu (příjemný, srozumitelný, přitom profesionální styl).</li>
        </ul>
    </li>
</ul>

<h4>7.2 Úkol</h4>
<ol>
    <li>V bodech si napsat, co má e-mail obsahovat (argumenty, přínosy, jasná žádost).</li>
    <li>Použít AI pro návrh e-mailu s dobře strukturovaným promptem (Role–Kontext–Cíl–Formát–Omezení).</li>
    <li>Finální text ručně upravit tak, aby:
        <ul>
            <li>odpovídal firemnímu tónu,</li>
            <li>byl věcný a stručný,</li>
            <li>jasně formuloval, co od vedení chceme.</li>
        </ul>
    </li>
</ol>

<h4>7.3 Sdílení</h4>
<ul>
    <li>2–3 anonymizované e-maily se přečtou, skupina hledá, co funguje a co by zlepšila.</li>
</ul>

<h4>7.4 Loot</h4>
<ul>
    <li>Pokud se vedení bude líbit zpráva od účastníků, pošlou heslo do Karlovo složky.</li>
</ul>
            `,
            en: `
<h2>COPYWRITER – Writing and editing texts with AI</h2>
<p class="tagline">Length: 1.5–2 hours · Interactive workshop · Max. 10 participants</p>

<div class="divider"></div>

<h3>1) Introduction &amp; the “Karl style” story (5–10 min)</h3>
<p><strong>Story:</strong></p>
<ul>
    <li>We have data and facts, but we need to convince management to give us access to the archive.</li>
    <li>Karel was not only “smarter”, he had a distinctive writing style people trusted.</li>
</ul>
<p><strong>What makes a text work:</strong></p>
<ul>
    <li>clarity,</li>
    <li>conciseness,</li>
    <li>tone (formal / informal),</li>
    <li>adaptation to the target audience (management, colleague, client).</li>
</ul>

<div class="divider"></div>

<h3>2) Introducing AI for writing &amp; prompts (10–15 min)</h3>
<p>Goal: give participants a foundation – what they can realistically ask AI to do with text and where the limits are.</p>

<h4>A: What AI can do with text</h4>
<ol>
    <li><strong>Drafting text</strong> – e-mail, short paragraph, summary, outlines, alternative phrasings.</li>
    <li><strong>Editing existing text</strong> – shorten / expand, simplify complex text, change tone (formal / friendly / neutral), adapt to another target group.</li>
    <li><strong>Checking &amp; translating</strong> – structure, clarity, logic, basic language check, translation and tone adjustment in another language.</li>
</ol>

<h4>B: What AI cannot do / what to watch out for</h4>
<ul>
    <li>does not produce legally binding texts,</li>
    <li>may invent facts, numbers, names (hallucinations),</li>
    <li>does not know internal company rules unless we provide them.</li>
</ul>

<h4>C: Security &amp; data (mini-block 5–10 min)</h4>
<p><strong>What must not go into AI:</strong></p>
<ul>
    <li>trade secrets, financial data, detailed personal data, sensitive contracts (unless a company-approved tool is used).</li>
</ul>
<ul>
    <li>Difference: personal account vs. company tool (ChatGPT Team/Enterprise, Copilot, Gemini).</li>
    <li>Principle: AI = assistant, not autopilot.</li>
</ul>

<div class="divider"></div>

<h3>3) Warm-up: stylistic exercises (15–20 min)</h3>
<p>Goal: show on simple examples how AI changes tone and form.</p>

<h4>A: Tone rewriting</h4>
<ul>
    <li>Short formal e-mail → more friendly but still professional version.</li>
    <li>Informal e-mail → formal version for management.</li>
</ul>

<h4>B: Shortening and clarifying</h4>
<ul>
    <li>Long, “overcomplicated” text:
        <ul>
            <li>“Shorten it by half, keep the main message.”</li>
            <li>“Rewrite it into three clear points for management.”</li>
        </ul>
    </li>
</ul>

<h4>C: Practical workflow</h4>
<ol>
    <li>First think manually – what do I want to change (tone, length, structure).</li>
    <li>Then use AI with specific instructions:
        <ul>
            <li>“Adjust the tone to…”</li>
            <li>“Shorten it to…”</li>
            <li>“Rewrite it for… (client / management / newcomer)”</li>
        </ul>
    </li>
</ol>

<div class="divider"></div>

<h3>4) Deep dive: Prompt engineering for text (30–35 min)</h3>
<p>Goal: teach participants to write prompts so that AI does more than “write something” – clear goals, right tone, proper format.</p>

<h4>4.1 Mini-theory – structure of a text prompt</h4>
<p><strong>Role + Context + Goal + Output format + Constraints</strong></p>
<p><strong>Example of a weak prompt:</strong><br>
“Write an e-mail to my boss.”</p>
<p><strong>Example of a better prompt:</strong></p>
<p>
“You are a company copywriter.<br>
Write a concise, formal e-mail to our managing director.<br>
Context: we request approval of a training budget.<br>
Format: 3 paragraphs + subject line suggestion.<br>
Constraints: max. 150 words, no promises we have not confirmed.”
</p>

<h4>4.2 Check-list for a “good text prompt”</h4>
<ul>
    <li>What do I want? (draft, edit, summary, tone change…)</li>
    <li>Who is it for? (management, colleague, client, newcomer…)</li>
    <li>What is the goal? (inform, convince, calm, ask for action…)</li>
    <li>What should the output look like? (e-mail, bullets, paragraph, several variants…)</li>
    <li>What constraints do I have? (length, tone, no invented data…)</li>
</ul>

<h4>4.3 “Red flags” – when not to trust AI</h4>
<ul>
    <li>It invents:
        <ul>
            <li>references to non-existent documents, numbers, names,</li>
            <li>overly general or unrealistic promises.</li>
        </ul>
    </li>
</ul>
<ul>
    <li>Simple rules:
        <ul>
            <li>always verify facts,</li>
            <li>always read the final text,</li>
            <li>adapt it to company style before sending.</li>
        </ul>
    </li>
</ul>

<h4>4.4 Live demo (AI + screen sharing)</h4>
<ul>
    <li>Scenario 1: drafting a client reply.</li>
    <li>Scenario 2: rewriting a technical text for management.</li>
    <li>Scenario 3: turning a long text into 3–5 bullet points for a presentation.</li>
</ul>

<div class="divider"></div>

<h3>5) AI as a copywriting assistant – practical text tasks (20–25 min)</h3>
<p>Participants try AI on typical company texts.</p>

<h4>5.1 Typical tasks</h4>
<ul>
    <li>Drafting a reply to an e-mail (complaint, question, request).</li>
    <li>Creating a meeting minutes from bullet notes.</li>
    <li>Checking text (logic, structure, readability).</li>
    <li>Translating text + adjusting tone in another language.</li>
</ul>

<h4>5.2 Assignment for participants</h4>
<ul>
    <li>Pick either a real (anonymised) text or a model example.</li>
    <li>Create 3–4 prompts that:
        <ul>
            <li>A) generate a draft,</li>
            <li>B) adjust the tone (for a different audience),</li>
            <li>C) shorten / clarify the text,</li>
            <li>D) translate the text and keep the chosen tone.</li>
        </ul>
    </li>
    <li>Always iterate the prompt at least 2–3 times and observe how the answer improves.</li>
</ul>

<div class="divider"></div>

<h3>6) Mini-block: languages (10–15 min)</h3>
<p>Goal: show that investing into language skills with AI support pays off.</p>
<p>Exercise – communication, text work, AI as a tutor.</p>

<div class="divider"></div>

<h3>7) Boss fight: “Irresistible e-mail to management” (20–25 min)</h3>
<p>A scenario that connects everything (Karel can even write in rhyme 😊).</p>

<h4>7.1 Assignment</h4>
<ul>
    <li>Participants get:
        <ul>
            <li>a description of the situation (e.g. request for project support / archive access),</li>
            <li>a sample of “Karl’s” text (pleasant, clear, yet professional style).</li>
        </ul>
    </li>
</ul>

<h4>7.2 Task</h4>
<ol>
    <li>Write down bullet points – what the e-mail must contain (arguments, benefits, clear request).</li>
    <li>Use AI to draft the e-mail with a well-structured prompt (Role–Context–Goal–Format–Constraints).</li>
    <li>Manually polish the final text so that:
        <ul>
            <li>it matches company tone,</li>
            <li>is factual and concise,</li>
            <li>clearly states what we want from management.</li>
        </ul>
    </li>
</ol>

<h4>7.3 Sharing</h4>
<ul>
    <li>2–3 anonymised e-mails are read aloud; the group discusses what works and what could be improved.</li>
</ul>

<h4>7.4 Loot</h4>
<ul>
    <li>If management likes the message, participants receive the next part of the password to Karl’s folder.</li>
</ul>
            `
        },

        // KOSTRA
        structure: {
            cs: `
<h2>COPYWRITER – Psaní a úpravy textů s AI</h2>
<p class="tagline">Délka: 1,5–2 hodiny · Interaktivní workshop · Max. 10 účastníků</p>

<ul class="meta">
    <li><strong>Forma:</strong> interaktivní workshop</li>
    <li><strong>Školitel:</strong> Sebastian Jareš</li>
    <li><strong>Vypracuje:</strong> Sebastian Jareš</li>
</ul>

<div class="divider"></div>

<h3>Cíl školení</h3>
<ul>
    <li>Naučit účastníky využívat AI pro psaní a úpravu textů (e-maily, shrnutí, zápisy).</li>
    <li>Zrychlit práci s textem při zachování firemního tónu komunikace a kvality.</li>
    <li>Posílit schopnost kriticky hodnotit výstupy AI (fakta, styl, vhodnost).</li>
</ul>

<div class="divider"></div>

<h3>Stručná osnova</h3>

<h4>1. Úvod &amp; příběh „Karlův styl“ (5–10 min)</h4>
<ul>
    <li>Proč text rozhoduje – jasnost, stručnost, tón, cílová skupina.</li>
    <li>„Karlův styl“ jako vzor přesvědčivé a důvěryhodné komunikace.</li>
</ul>

<h4>2. Představení AI pro psaní a promptů (10–15 min)</h4>
<ul>
    <li>Co AI umí: návrh textu, úprava textu, zkrácení, změna tónu, překlad.</li>
    <li>Limity AI: halucinace, právní a obsahová odpovědnost, neznalost interních pravidel.</li>
    <li>Bezpečnost: co do AI nepatří, rozdíl soukromý vs. firemní nástroj, AI jako pomocník, ne autopilot.</li>
</ul>

<h4>3. Rozcvička – stylistická cvičení (15–20 min)</h4>
<ul>
    <li>Přepis tónu: formální ↔ přátelský e-mail (vedení vs. kolega/klient).</li>
    <li>Zkrácení a zpřehlednění „šroubovaného“ textu do stručného shrnutí.</li>
    <li>Praktický postup: nejdříve ruční úprava, poté použití AI s konkrétním zadáním.</li>
</ul>

<h4>4. Deep Dive – Prompt Engineering pro text (30–35 min)</h4>
<ul>
    <li>Struktura promptu: Role – Kontext – Cíl – Formát – Omezení.</li>
    <li>Příklady špatného vs. dobře strukturovaného promptu.</li>
    <li>Check-list pro „dobrý textový prompt“.</li>
    <li>„Red flags“: vymyšlená fakta, nereálné sliby, nutnost kontroly a úprav.</li>
    <li>Živá ukázka: odpověď klientovi, přepis technického textu, body do prezentace.</li>
</ul>

<h4>5. AI jako copywriting asistent – praktické textové úlohy (20–25 min)</h4>
<ul>
    <li>Práce s reálným nebo modelovým textem (e-maily, zápisy, shrnutí).</li>
    <li>Tvorba 3–4 promptů (návrh textu, změna tónu, zkrácení, překlad).</li>
    <li>Iterace promptů a porovnání kvality výstupů.</li>
</ul>

<h4>6. Mini-blok: jazyky (10–15 min)</h4>
<ul>
    <li>AI jako podpora při zlepšování jazykových dovedností.</li>
    <li>Cvičení: korekce krátkých textů, vysvětlení chyb, úprava formulací v cizím jazyce.</li>
</ul>

<h4>7. Závěrečný úkol – Boss Fight: „Neodolatelný e-mail vedení“ (20–25 min)</h4>
<ul>
    <li>Zadání: e-mail vedení (např. žádost o podporu projektu / přístup do archivu) dle popsané situace a vzoru „Karlova“ textu.</li>
    <li>Postup: příprava osnovy, návrh s pomocí AI (strukturovaný prompt), finální úprava do firemního tónu.</li>
    <li>Sdílení vybraných anonymizovaných e-mailů a společná zpětná vazba.</li>
    <li>Loot: pokud se zpráva vedení líbí, účastník získá další část hesla do „Karlovy složky“.</li>
</ul>
            `,
            en: `
<h2>COPYWRITER – Writing and editing texts with AI</h2>
<p class="tagline">Length: 1.5–2 hours · Interactive workshop · Max. 10 participants</p>

<ul class="meta">
    <li><strong>Format:</strong> interactive workshop</li>
    <li><strong>Trainer:</strong> Sebastian Jareš</li>
    <li><strong>Created by:</strong> Sebastian Jareš</li>
</ul>

<div class="divider"></div>

<h3>Training goals</h3>
<ul>
    <li>Teach participants to use AI for writing and editing texts (e-mails, summaries, minutes).</li>
    <li>Speed up text work while keeping company tone of voice and quality.</li>
    <li>Strengthen the ability to critically assess AI outputs (facts, style, suitability).</li>
</ul>

<div class="divider"></div>

<h3>Outline</h3>

<h4>1. Introduction &amp; the “Karl style” story (5–10 min)</h4>
<ul>
    <li>Why text matters – clarity, conciseness, tone, target audience.</li>
    <li>“Karl’s style” as a model of convincing and trustworthy communication.</li>
</ul>

<h4>2. Introducing AI for writing &amp; prompts (10–15 min)</h4>
<ul>
    <li>What AI can do: draft text, edit text, shorten, change tone, translate.</li>
    <li>Limits of AI: hallucinations, legal and content responsibility, lack of internal rules.</li>
    <li>Security: what must not be sent to AI, personal vs. company tools, AI as assistant not autopilot.</li>
</ul>

<h4>3. Warm-up – stylistic exercises (15–20 min)</h4>
<ul>
    <li>Tone rewriting: formal ↔ friendly e-mail (management vs. colleague/client).</li>
    <li>Shortening and clarifying “overcomplicated” text into a concise summary.</li>
    <li>Practical workflow: manual edit first, then AI with specific instructions.</li>
</ul>

<h4>4. Deep dive – Prompt engineering for text (30–35 min)</h4>
<ul>
    <li>Prompt structure: Role – Context – Goal – Format – Constraints.</li>
    <li>Examples of weak vs. well-structured prompts.</li>
    <li>Check-list for a “good text prompt”.</li>
    <li>Red flags: invented facts, unrealistic promises, need for review and edits.</li>
    <li>Live demo: client reply, technical text rewrite, bullet points for a presentation.</li>
</ul>

<h4>5. AI as copywriting assistant – practical text tasks (20–25 min)</h4>
<ul>
    <li>Work with real or model texts (e-mails, minutes, summaries).</li>
    <li>Create 3–4 prompts (draft, tone change, shortening, translation).</li>
    <li>Prompt iterations and comparing output quality.</li>
</ul>

<h4>6. Mini-block: languages (10–15 min)</h4>
<ul>
    <li>AI as support for improving language skills.</li>
    <li>Exercise: correcting short texts, explaining mistakes, adjusting phrasing in a foreign language.</li>
</ul>

<h4>7. Final task – Boss fight: “Irresistible e-mail to management” (20–25 min)</h4>
<ul>
    <li>Assignment: e-mail to management (e.g. support for a project / archive access) based on a described situation and sample of “Karl’s” text.</li>
    <li>Workflow: prepare an outline, draft with AI (structured prompt), final edit into company tone.</li>
    <li>Sharing anonymised e-mails and group feedback.</li>
    <li>Loot: if management likes the message, participants get another part of the password to “Karl’s folder”.</li>
</ul>
            `
        }
    },

    // === AUTOMATIZACE – ARCHITEKT ===
    automation: {
        content: {
            cs: `
<h2>ARCHITEKT – Automatizace a opakování</h2>
<p class="tagline">Jak si postavit asistenty, aby pracovali za nás.</p>

<div class="divider"></div>

<h3>1) Úvod &amp; příběh „Líný Karel“ (5–10 min)</h3>
<p><strong>Story:</strong></p>
<ul>
    <li>Karel nebyl nejrychlejší, ale byl nejlínější – a proto si stavěl systémy, aby práci dělal někdo (něco) za něj.</li>
    <li>Co je to automatizace a proč se vyplatí ji řešit.</li>
</ul>
<p><strong>Otázky na úvod:</strong></p>
<ul>
    <li>Které úkoly se vám ve firmě pořád dokola opakují?</li>
    <li>Kde děláte tu samou věc po padesáté „ručně“?</li>
</ul>

<div class="divider"></div>

<h3>2) Představení AI asistentů – co dnes reálně existuje (15–20 min)</h3>
<p>Cíl: ukázat, jaké typy asistentů dnes máme a jak se liší.</p>

<h4>2.1 Typy asistentů</h4>
<ol>
    <li>
        <strong>Asistent v chatu</strong> – Custom GPT, „Gems“, specializovaný bot
        <ul>
            <li>V ChatGPT: vlastní „GPT“ (custom asistent) – nastavíš instrukce, nahraješ podklady, zvolíš, co má dělat (např. „Korporátní editor e-mailů“, „Právní kontrolor smluv“).</li>
            <li>V Google/Gemini: vlastní agent / „Gem“ v Agent Designeru – zaměřený na konkrétní typ práce (reporty, HR dotazy, apod.).</li>
        </ul>
    </li>
    <li>
        <strong>Asistent v aplikaci</strong> – Copilot v MS 365, Gemini v Gmail/Docs/Sheets
        <ul>
            <li>Outlook, Word, Excel, Teams, Gmail, Dokumenty… – tlačítko Copilot / Gemini, které pomáhá s e-maily, dokumenty, tabulkami, zápisy z porad.</li>
        </ul>
    </li>
    <li>
        <strong>Asistent jako proces</strong> – no-code nástroje
        <ul>
            <li>Microsoft Copilot Studio – tvorba vlastního bot-copilota v grafickém rozhraní (bez programování), který umí odpovídat na typické dotazy, procházet interní data a spouštět akce.</li>
            <li>Google Workspace flows / automatizace – vizuální stavba workflow, které spojuje Gmail, Kalendář, Dokumenty, Formuláře atd.</li>
        </ul>
    </li>
    <li>
        <strong>Jemné nastínění scriptingu</strong>
        <ul>
            <li>Krátké vysvětlení, že i skripty (např. v Apps Script / Power Automate / VBA) mohou být další level – jen informativně, bez detailního programování.</li>
        </ul>
    </li>
</ol>

<div class="divider"></div>

<h3>3) Mini-teorie: z promptu se stává „asistent“ (15–20 min)</h3>
<p>Cíl: ukázat, že dobrý jednorázový prompt lze převést na trvalého asistenta.</p>

<h4>3.1 Šablona pro návrh asistenta</h4>
<ol>
    <li><strong>Název asistenta</strong> – např. „Asistent zápisu z porad“, „HR on-boarding asistent“, „Kontrolor nabídek“.</li>
    <li><strong>Účel (1–2 věty)</strong> – „Pomáhej mi z každé porady vytvořit stručný, strukturovaný zápis a seznam úkolů.“</li>
    <li><strong>Vstupy</strong> – zápis z Teams/Meet, přepis, vlastní poznámky, e-mailová konverzace.</li>
    <li><strong>Výstupy</strong> – jak má výstup vypadat (např. struktura: „Shrnutí – Rozhodnutí – Úkoly (kdo / do kdy)“).</li>
    <li><strong>Pravidla a omezení</strong> – tón (formální/neformální), jazyk, délka, „nevymýšlej si data, vždy napiš, pokud něco chybí“.</li>
    <li><strong>Příklad vstupu a výstupu</strong> – krátká ukázka reálného použití.</li>
</ol>

<p>Tato šablona je stejná logika jako u dobrého promptu (Role–Úkol–Kontext–Formát–Omezení), jen převedená do <strong>stálého asistenta</strong>.</p>

<h4>3.2 Ukázka na jednom konkrétním asistentovi</h4>
<ul>
    <li>Společně vybereme jednoho asistenta (např. „Asistent zápisu z porad“).</li>
    <li>Vyplníme: název, účel, vstupy, výstupy, pravidla, příklad použití.</li>
    <li>Ukážeme, jak tyto body přepsat do instrukcí:
        <ul>
            <li>do custom asistenta (např. Custom GPT),</li>
            <li>nebo do „přednastaveného“ asistenta v Copilotu / Geminim.</li>
        </ul>
    </li>
</ul>

<div class="divider"></div>

<h3>4) Praktické cvičení: návrh vlastního asistenta (25–30 min)</h3>
<p>Cíl: každý si vytvoří návrh jednoho asistenta, kterého může po školení reálně použít.</p>

<h4>4.1 Výběr scénáře</h4>
<p>Účastník si vybere jeden opakovaný proces, např.:</p>
<ul>
    <li>pravidelné e-maily klientům / kolegům,</li>
    <li>týdenní report / reporty,</li>
    <li>zápisy z porad,</li>
    <li>reakce na standardní dotazy (HR, IT, zákaznický servis),</li>
    <li>kontrola vyplněných formulářů / tabulek,</li>
    <li>jiný opakovaný proces z vlastní práce.</li>
</ul>

<h4>4.2 Vyplnění šablony</h4>
<ol>
    <li>Pojmenovat asistenta.</li>
    <li>Sebrat účel, vstupy, výstupy, pravidla.</li>
    <li>Vymyslet 1–2 konkrétní příklady použití.</li>
    <li>Převést vše do jednoho delšího „mistrovského promptu“, který by šel vložit do AI (custom asistent / Copilot / Gemini).</li>
</ol>

<h4>4.3 Krátké sdílení</h4>
<ul>
    <li>Několik účastníků představí:
        <ul>
            <li>název asistenta,</li>
            <li>oblast, kde pomáhá,</li>
            <li>co jim má ušetřit,</li>
            <li>ukázkový prompt.</li>
        </ul>
    </li>
</ul>

<div class="divider"></div>

<h3>5) Boss Fight: „Nekonečná smyčka“ (cca 30 min)</h3>
<p>Cíl: zkusit využít asistenty na reálnější „balík práce“.</p>

<h4>5.1 Zadání</h4>
<ul>
    <li>Účastníci dostanou seznam úkolů nebo dat – „Karlova nedodělaná práce“.</li>
    <li>Úkolem je co nejvíc zpracování přenést na asistenty a automatizaci:
        <ul>
            <li>přepsat si úkoly do šablony asistenta,</li>
            <li>vytvořit nebo doladit asistenta, který tyto úkoly zvládne opakovaně.</li>
        </ul>
    </li>
</ul>

<h4>5.2 Výstup a odměna</h4>
<ul>
    <li>Na konci zůstane zpracovaný dokument / výstup, ve kterém je ukryté heslo – další indicie do „Karlova cloudu“.</li>
</ul>
            `,
            en: `
<h2>ARCHITECT – Automation and repetition</h2>
<p class="tagline">Designing assistants so they can work instead of us.</p>

<div class="divider"></div>

<h3>1) Introduction &amp; the “Lazy Karel” story (5–10 min)</h3>
<p><strong>Story:</strong></p>
<ul>
    <li>Karel was not the fastest, but he was the laziest – so he built systems to make someone (or something) else do the work.</li>
    <li>What automation is and why it is worth investing time in it.</li>
</ul>
<p><strong>Kick-off questions:</strong></p>
<ul>
    <li>Which tasks in your job keep repeating over and over?</li>
    <li>Where do you do the same thing manually for the 50th time?</li>
</ul>

<div class="divider"></div>

<h3>2) Overview of AI assistants – what exists today (15–20 min)</h3>
<p>Goal: show what kinds of assistants we have and how they differ.</p>

<h4>2.1 Types of assistants</h4>
<ol>
    <li>
        <strong>Assistant in chat</strong> – Custom GPT, “Gems”, specialised bot
        <ul>
            <li>In ChatGPT: your own “GPT” (custom assistant) – you set instructions, upload materials and define what it should do (e.g. “Corporate e-mail editor”, “Contract reviewer”).</li>
            <li>In Google/Gemini: your own agent / Gem in Agent Designer – focused on a specific type of work (reports, HR questions, etc.).</li>
        </ul>
    </li>
    <li>
        <strong>Assistant inside applications</strong> – Copilot in MS 365, Gemini in Gmail/Docs/Sheets
        <ul>
            <li>Outlook, Word, Excel, Teams, Gmail, Docs… – a Copilot / Gemini button that helps with e-mails, documents, spreadsheets and meeting notes.</li>
        </ul>
    </li>
    <li>
        <strong>Assistant as a process</strong> – no-code tools
        <ul>
            <li>Microsoft Copilot Studio – building your own copilot-bot in a graphical interface (no coding) to answer typical questions, browse internal data and trigger actions.</li>
            <li>Google Workspace flows / automation – visual workflows that connect Gmail, Calendar, Docs, Forms, etc.</li>
        </ul>
    </li>
    <li>
        <strong>Light touch on scripting</strong>
        <ul>
            <li>Short explanation that scripts (Apps Script / Power Automate / VBA) can be another layer – only as an overview, no deep technical details.</li>
        </ul>
    </li>
</ol>

<div class="divider"></div>

<h3>3) Mini-theory: turning a prompt into an “assistant” (15–20 min)</h3>
<p>Goal: show that a good one-off prompt can be turned into a reusable assistant.</p>

<h4>3.1 Template for designing an assistant</h4>
<ol>
    <li><strong>Name of the assistant</strong> – e.g. “Meeting note assistant”, “HR onboarding assistant”, “Offer checker”.</li>
    <li><strong>Purpose (1–2 sentences)</strong> – “Help me create a concise, structured meeting note and task list from every meeting.”</li>
    <li><strong>Inputs</strong> – Teams/Meet transcript, notes, e-mail conversation, etc.</li>
    <li><strong>Outputs</strong> – what the output should look like (e.g. “Summary – Decisions – Tasks (who / by when)”).</li>
    <li><strong>Rules and constraints</strong> – tone (formal/informal), language, length, “never invent data, always say when something is missing…”.</li>
    <li><strong>Example input and output</strong> – short, realistic usage example.</li>
</ol>

<p>This template follows the same logic as a good prompt (Role–Task–Context–Format–Constraints), just turned into a <strong>permanent assistant</strong>.</p>

<h4>3.2 Example on a single assistant</h4>
<ul>
    <li>We choose one assistant together (e.g. “Meeting note assistant”).</li>
    <li>We fill in: name, purpose, inputs, outputs, rules, example.</li>
    <li>Then we show how to turn these points into instructions:
        <ul>
            <li>in a custom assistant (e.g. Custom GPT),</li>
            <li>or in a built-in Copilot / Gemini assistant.</li>
        </ul>
    </li>
</ul>

<div class="divider"></div>

<h3>4) Practical exercise: designing your own assistant (25–30 min)</h3>
<p>Goal: everyone creates one assistant they can really use after the training.</p>

<h4>4.1 Scenario selection</h4>
<p>Participants pick one recurring process, e.g.:</p>
<ul>
    <li>regular e-mails to clients / colleagues,</li>
    <li>weekly reports,</li>
    <li>meeting notes,</li>
    <li>answers to standard questions (HR, IT, customer service),</li>
    <li>checking completed forms / spreadsheets,</li>
    <li>another repetitive process from their own work.</li>
</ul>

<h4>4.2 Filling the template</h4>
<ol>
    <li>Name the assistant.</li>
    <li>Write the purpose, inputs, outputs, rules.</li>
    <li>Design 1–2 specific usage examples.</li>
    <li>Turn it into one longer “master prompt” that could be pasted into AI (custom assistant / Copilot / Gemini).</li>
</ol>

<h4>4.3 Short sharing</h4>
<ul>
    <li>Several participants present:
        <ul>
            <li>assistant name,</li>
            <li>area where it helps,</li>
            <li>what it should save them,</li>
            <li>sample prompt.</li>
        </ul>
    </li>
</ul>

<div class="divider"></div>

<h3>5) Boss fight: “Infinite loop” (approx. 30 min)</h3>
<p>Goal: use assistants on a more realistic “pile of work”.</p>

<h4>5.1 Assignment</h4>
<ul>
    <li>Participants receive a list of tasks or data – “Karel’s unfinished work”.</li>
    <li>Their task is to solve as much as possible via assistants and automation:
        <ul>
            <li>rewrite tasks into an assistant template,</li>
            <li>create or refine an assistant that can handle these tasks repeatedly.</li>
        </ul>
    </li>
</ul>

<h4>5.2 Output &amp; reward</h4>
<ul>
    <li>In the end, there is a processed document/output which contains a hidden password – another clue for “Karl’s cloud”.</li>
</ul>
            `
        },
        structure: {
            cs: `
<h2>ARCHITEKT – Automatizace a opakování</h2>
<p class="tagline">AI asistenti a systémy, které pracují za nás.</p>

<div class="divider"></div>

<h3>Cíl školení</h3>
<ul>
    <li>Ukázat principy automatizace běžných kancelářských činností pomocí AI asistentů.</li>
    <li>Naučit účastníky převést opakující se úkoly do podoby „asistentů“ a opakovatelných promptů.</li>
    <li>Posílit kulturu práce „tvořím systém“, ne „řeším každý úkol zvlášť“.</li>
</ul>

<div class="divider"></div>

<h3>Stručná osnova</h3>

<h4>1) Úvod &amp; příběh „Líný Karel“ (5–10 min)</h4>
<ul>
    <li>Pojem automatizace v kancelářské praxi.</li>
    <li>K čemu je automatizace dobrá (úspora času, snížení chybovosti, standardizace výstupů).</li>
</ul>

<h4>2) Přehled AI asistentů – co dnes reálně existuje (15–20 min)</h4>
<ul>
    <li>Typy asistentů:
        <ol>
            <li>Asistent v chatu – vlastní custom asistent (např. Custom GPT, Gemini agent, specializovaný bot).</li>
            <li>Asistent v aplikaci – Copilot v MS 365, Gemini v Gmail/Docs/Sheets (práce přímo v e-mailu, dokumentu, tabulce).</li>
            <li>Asistent jako proces – no-code nástroje (např. Copilot Studio, jednoduchá workflow ve firemním ekosystému).</li>
            <li>Stručné nastínění možností skriptování (jen informativně).</li>
        </ol>
    </li>
</ul>

<h4>3) Mini-teorie: z promptu se stává „asistent“ (15–20 min)</h4>
<ul>
    <li>Rozdíl: jednorázový prompt vs. opakovatelný asistent.</li>
    <li>Šablona pro návrh asistenta: název, účel, vstupy, výstupy, pravidla/omezení, příklad použití.</li>
    <li>Ukázka na jednom konkrétním asistentovi.</li>
</ul>

<h4>4) Praktické cvičení: návrh vlastního asistenta (25–30 min)</h4>
<ul>
    <li>Výběr opakovaného procesu z vlastní praxe.</li>
    <li>Vyplnění šablony: název, účel, vstupy, výstupy, pravidla, příklady použití.</li>
    <li>Vytvoření jednoho silného promptu jako základu asistenta.</li>
    <li>Sdílení ve skupině.</li>
</ul>

<h4>5) Závěrečný úkol – Boss Fight: „Nekonečná smyčka“ (cca 30 min)</h4>
<ul>
    <li>Účastníci obdrží soubor úkolů („Karlova nedodělaná práce“).</li>
    <li>Cíl: vyřešit sadu úkolů co nejefektivněji pomocí navržených asistentů / automatizace, nikoli jednotlivými ad hoc prompty.</li>
    <li>Výstup: zpracovaný dokument, ve kterém je skryta nápověda / část hesla do „Karlova cloudu“.</li>
</ul>
            `,
            en: `
<h2>ARCHITECT – Automation and repetition</h2>
<p class="tagline">AI assistants and systems that work instead of us.</p>

<div class="divider"></div>

<h3>Training goals</h3>
<ul>
    <li>Show principles of automating common office tasks with AI assistants.</li>
    <li>Teach participants to turn repeating tasks into “assistants” and reusable prompts.</li>
    <li>Promote a culture of “building systems”, not solving each task one by one.</li>
</ul>

<div class="divider"></div>

<h3>Outline</h3>

<h4>1) Introduction &amp; the “Lazy Karel” story (5–10 min)</h4>
<ul>
    <li>Automation in everyday office practice.</li>
    <li>Why automation is useful (time savings, fewer errors, standardised outputs).</li>
</ul>

<h4>2) Overview of AI assistants – what exists today (15–20 min)</h4>
<ul>
    <li>Types of assistants:
        <ol>
            <li>Assistant in chat – custom assistant (e.g. Custom GPT, Gemini agent, specialised bot).</li>
            <li>Assistant inside apps – Copilot in MS 365, Gemini in Gmail/Docs/Sheets (working directly in e-mail, document, spreadsheet).</li>
            <li>Assistant as a process – no-code tools (e.g. Copilot Studio, simple workflows in the company ecosystem).</li>
            <li>High-level mention of scripting options (informative only).</li>
        </ol>
    </li>
</ul>

<h4>3) Mini-theory: turning a prompt into an “assistant” (15–20 min)</h4>
<ul>
    <li>Difference between a one-off prompt and a reusable assistant.</li>
    <li>Template for designing an assistant: name, purpose, inputs, outputs, rules/constraints, usage example.</li>
    <li>Example on one specific assistant.</li>
</ul>

<h4>4) Practical exercise: designing your own assistant (25–30 min)</h4>
<ul>
    <li>Selecting a recurring process from one’s own work.</li>
    <li>Filling the template: name, purpose, inputs, outputs, rules, examples.</li>
    <li>Creating one strong prompt as the basis of the assistant.</li>
    <li>Group sharing.</li>
</ul>

<h4>5) Final task – Boss fight: “Infinite loop” (approx. 30 min)</h4>
<ul>
    <li>Participants receive a set of tasks (“Karel’s unfinished work”).</li>
    <li>Goal: solve the tasks as efficiently as possible using the designed assistants / automation, not ad hoc prompts.</li>
    <li>Output: processed document that hides a clue / part of the password to “Karl’s cloud”.</li>
</ul>
            `
        }
    },

    // === DATA A TABULKY – ANALYTIK ===
    data: {
        content: {
            cs: `
<h2>ANALYTIK – Tabulky a data</h2>
<p class="tagline">Z chaosu do struktury: vidět vzorce, ne jen buňky.</p>

<div class="divider"></div>

<h3>1) Jaké nástroje použít na tabulky a data</h3>
<p>Cíl: mít nástroje, ve kterých:</p>
<ul>
    <li>uděláš pořádek v datech (Excel / Sheets),</li>
    <li>necháš AI tabulku pochopit (vysvětlit, shrnout, najít vzorce),</li>
    <li>zautomatizuješ opakované kroky (výpočty, reporty, základní analýzu).</li>
</ul>

<h4>A: Velké nástroje (10–15 min)</h4>
<ol>
    <li>
        <strong>Microsoft Excel + Copilot</strong>
        <ul>
            <li>Excel jako základ: tabulky, filtry, vzorce, kontingenční tabulky.</li>
            <li>Copilot v Excelu – příklady dotazů:
                <ul>
                    <li>„Vysvětli mi, co v těchto datech vidíš.“</li>
                    <li>„Najdi top 10 klientů podle obratu a shrň to do 3 bodů.“</li>
                    <li>„Navrhni vzorec pro výpočet marže a aplikuj ho na celý sloupec.“</li>
                </ul>
            </li>
            <li>Výhoda: propojení s OneDrive / SharePoint, práce s firemními daty v rámci M365.</li>
        </ul>
    </li>
    <li>
        <strong>Google Sheets + Gemini</strong>
        <ul>
            <li>Tvorba tabulek online, sdílení, společná práce v reálném čase.</li>
            <li>Gemini nad tabulkou:
                <ul>
                    <li>„Shrň data v tomto listu do krátkého reportu.“</li>
                    <li>„Navrhni segmentaci klientů podle tržeb a regionu.“</li>
                </ul>
            </li>
            <li>Výhoda: jednoduché sdílení, vhodné pro týmy, které žijí v Google ekosystému.</li>
        </ul>
    </li>
    <li>
        <strong>ChatGPT (CSV / tabulky)</strong>
        <ul>
            <li>Umí pracovat s CSV a zkopírovanými tabulkami (do rozumné velikosti).</li>
            <li>Typické use-cases:
                <ul>
                    <li>„Na základě této tabulky navrhni nové sloupce pro užitečnější analýzu.“</li>
                    <li>„Najdi v datech anomálie nebo podezřelé řádky.“</li>
                    <li>„Přepiš tabulku do textového shrnutí pro vedení.“</li>
                </ul>
            </li>
            <li>Výhoda: flexibilita, možnost kombinovat tabulky + volný text (poznámky, e-maily).</li>
        </ul>
    </li>
</ol>

<h4>Bezpečnost &amp; citlivá data (mini blok 5–10 min)</h4>
<ul>
    <li>Do kterých nástrojů smí jít firemní data (schválené vs. neschválené nástroje).</li>
    <li>Co nenahrávat: osobní údaje, citlivé smlouvy, finanční detaily (pokud není enterprise řešení).</li>
</ul>

<div class="divider"></div>

<h3>2) Deep Dive: Od „rozsypaného čaje“ k dobré tabulce (cca 30 min)</h3>
<p>Cíl: naučit účastníky navrhnout strukturu tabulky tak, aby z ní šlo něco zjistit – ne jen „mít buňky“.</p>

<h4>2.1 Jak AI pomůže navrhnout strukturu</h4>
<ul>
    <li>Zadání do AI:
        <ul>
            <li>„Z těchto poznámek o klientech navrhni tabulku: jaké sloupce by měla mít, aby byla užitečná pro obchod?“</li>
            <li>„Mám tyto e-maily s reklamacemi – navrhni strukturovaný přehled (sloupce), do kterého bych je měl přepsat.“</li>
        </ul>
    </li>
    <li>AI navrhne jednotku (řádek), sloupce (atributy), typ hodnot.</li>
</ul>

<h4>2.2 Excel: AI vzorce (10–15 min)</h4>
<ul>
    <li>Praktická ukázka tvorby vzorců s pomocí AI (Copilot) – například výpočet marže, kategorizace klientů apod.</li>
</ul>

<div class="divider"></div>

<h3>3) Excel + AI: „Čtení“ tabulek a jednoduchá analýza (cca 30 min)</h3>
<p>Cíl: ukázat, jak AI i samotný Excel pomohou vidět vzorce – kdo je důležitý, co je problém, kde je trend.</p>

<h4>3.1 Mini-teorie – na co se ptát tabulek</h4>
<ul>
    <li>Základní typy otázek:
        <ul>
            <li>„Jak vypadá součet / průměr / minimum / maximum…?“</li>
            <li>„Jak to vypadá v čase?“ (měsíce, roky).</li>
            <li>„Jaké skupiny se liší?“ (regiony, segmenty, produktové řady).</li>
            <li>„Kde jsou výjimky?“ (moc vysoké / moc nízké hodnoty).</li>
        </ul>
    </li>
</ul>

<h4>3.2 AI nad daty (10–15 min)</h4>
<ul>
    <li>V Excelu (Copilot) nebo v ChatGPT:
        <ul>
            <li>„Z této tabulky udělej shrnutí pro vedení – 3 hlavní zjištění.“</li>
            <li>„Najdi klienty, kteří mají vysoký obrat, ale velký počet reklamací.“</li>
            <li>„Navrhni 3 doporučení, co by měl obchodní tým udělat podle dat.“</li>
        </ul>
    </li>
    <li>Vysvětlení: AI nesmí „přidávat“ data, která v tabulce nejsou – jen interpretovat.</li>
</ul>

<div class="divider"></div>

<h3>4) Cvičení: „Malé Karlovo CRM“ (15–20 min)</h3>
<p>Cíl: projít si celý řetězec: poznámky → tabulka → otázky → interpretace.</p>

<ul>
    <li>Účastníci dostanou:
        <ul>
            <li>několik krátkých „Karel – poznámky o klientech“ v textu,</li>
            <li>jednoduchý Excel/Sheets s pár sloupci (jméno klienta, obrat, region, produkt).</li>
        </ul>
    </li>
</ul>

<p><strong>Úkol:</strong></p>
<ol>
    <li>S pomocí AI navrhnout další sloupce, které by dávaly smysl (např. spokojenost, počet reklamací, potenciál, Karelovo hodnocení).</li>
    <li>Doplnit tabulku (část ručně, část jako „dummy data“ – vysvětleno účastníkům).</li>
    <li>Položit AI 3 typy dotazů:
        <ul>
            <li>A) shrnutí (co z dat obecně plyne),</li>
            <li>B) hledání vzorce (kdo jsou nejlepší / nejproblematičtější klienti),</li>
            <li>C) akční doporučení (co by tým měl udělat příští měsíc).</li>
        </ul>
    </li>
</ol>

<p>Na závěr účastníci přečtou:</p>
<ul>
    <li>jednu dobrou otázku a výstup, který AI vrátila,</li>
    <li>jednu původně vágní otázku a jak ji vylepšili.</li>
</ul>

<div class="divider"></div>

<h3>5) Boss Fight: „Karelova strategie“ – data-driven verze (25–30 min)</h3>
<p>Cíl: spojit AI + Excel + datové uvažování do příběhového úkolu.</p>

<h4>5.1 Zadání</h4>
<ul>
    <li>Excel s cca 20–30 klienty (obrat, marže, počet reklamací, počet kontaktů, region, segment, poznámka).</li>
    <li>Několik textových poznámek (OneNote/maily) k vybraným klientům.</li>
    <li>Schovaná nápověda (část hesla) – např. v poznámce u klienta s nejlepším „skóre“.</li>
</ul>

<h4>5.2 Průběh aktivity</h4>
<ol>
    <li><strong>Zadání + story (5 min)</strong><br>
        „Karel byl posedlý daty. Tvrdil, že když se podívá na tabulku, přesně ví, kdo je zlatý klient a kdo černá díra. My máme jeho data, ale ne jeho hlavu. Vaším úkolem je přijít na to, jak Karel přemýšlel a pracoval.“
    </li>
    <li><strong>Práce (15–20 min)</strong>
        <ul>
            <li>Použít Excel (filtry, řazení, případně jednoduché vzorce / kontingenční tabulku).</li>
            <li>S pomocí AI navrhnout jednoduchý scoring (např. obrat + marže – reklamace) a aplikovat ho.</li>
            <li>Najít 3 typy klientů:
                <ul>
                    <li>„hvězdy“,</li>
                    <li>„potížisti“,</li>
                    <li>„schovaný potenciál“.</li>
                </ul>
            </li>
            <li>Prozkoumat poznámky u klientů s nejvyšším skóre → najít nápovědu (část hesla).</li>
        </ul>
    </li>
    <li><strong>Společné odhalení + reflexe (5–10 min)</strong>
        <ul>
            <li>Každý řekne jednu větu: „Jak Karel podle nás vybíral klienty“ (např. „Karel miloval vysokou marži a nízké drama“ 😊).</li>
            <li>Každý přidá jedno doporučení pro vedení na základě dat.</li>
            <li>Společné shrnutí zásad:
                <ul>
                    <li>„Nejdřív data srovnej“ – dobrá struktura tabulky.</li>
                    <li>„Pak se ptej konkrétně“ – správně zacílené otázky na data.</li>
                    <li>„AI pomáhá, ale neví všechno“ – kontrola a vlastní hlava.</li>
                </ul>
            </li>
            <li>Odměna (Loot): část hesla do Karlova cloudu (schovaná u nejlepšího klienta / v komentáři).</li>
        </ul>
    </li>
</ol>
            `,
            en: `
<h2>ANALYST – Spreadsheets and data</h2>
<p class="tagline">From chaos to structure: seeing patterns, not just cells.</p>

<div class="divider"></div>

<h3>1) What tools to use for tables and data</h3>
<p>Goal: have tools where you can:</p>
<ul>
    <li>bring order into data (Excel / Sheets),</li>
    <li>let AI “understand” the table (explain, summarise, find patterns),</li>
    <li>automate repeated steps (calculations, reports, basic analysis).</li>
</ul>

<h4>A: Main tools (10–15 min)</h4>
<ol>
    <li>
        <strong>Microsoft Excel + Copilot</strong>
        <ul>
            <li>Excel as a base: tables, filters, formulas, pivot tables.</li>
            <li>Copilot in Excel – example prompts:
                <ul>
                    <li>“Explain what you see in this data.”</li>
                    <li>“Find the top 10 clients by revenue and summarise in 3 bullet points.”</li>
                    <li>“Propose a formula for margin and apply it to the whole column.”</li>
                </ul>
            </li>
            <li>Advantage: OneDrive / SharePoint integration, work with company data inside M365.</li>
        </ul>
    </li>
    <li>
        <strong>Google Sheets + Gemini</strong>
        <ul>
            <li>Online tables, sharing, real-time collaboration.</li>
            <li>Gemini on top of a sheet:
                <ul>
                    <li>“Summarise the data in this sheet into a short report.”</li>
                    <li>“Propose a client segmentation by revenue and region.”</li>
                </ul>
            </li>
            <li>Advantage: simple sharing, natural for teams living in the Google ecosystem.</li>
        </ul>
    </li>
    <li>
        <strong>ChatGPT (CSV / tables)</strong>
        <ul>
            <li>Can work with CSV and copied tables (within reasonable size).</li>
            <li>Typical use cases:
                <ul>
                    <li>“Based on this table, propose new columns for a more useful analysis.”</li>
                    <li>“Find anomalies or suspicious rows in the data.”</li>
                    <li>“Rewrite the table into a text summary for management.”</li>
                </ul>
            </li>
            <li>Advantage: flexibility, ability to combine tables + free text (notes, e-mails).</li>
        </ul>
    </li>
</ol>

<h4>Security &amp; sensitive data (mini-block 5–10 min)</h4>
<ul>
    <li>Which tools are approved for company data (approved vs. not approved).</li>
    <li>What must not be uploaded: personal data, sensitive contracts, financial details (unless using an enterprise solution).</li>
</ul>

<div class="divider"></div>

<h3>2) Deep dive: From “spilled tea” to a good table (approx. 30 min)</h3>
<p>Goal: teach participants to design table structure so that we can actually learn something from it – not just “have cells”.</p>

<h4>2.1 How AI can help design the structure</h4>
<ul>
    <li>Example prompts:
        <ul>
            <li>“From these notes about clients, propose a table: what columns should it have to be useful for sales?”</li>
            <li>“I have these complaint e-mails – propose a structured overview (columns) into which I should rewrite them.”</li>
        </ul>
    </li>
    <li>AI proposes the unit (row), columns (attributes), and value types.</li>
</ul>

<h4>2.2 Excel: AI formulas (10–15 min)</h4>
<ul>
    <li>Practical demo of using AI for formulas (Copilot) – e.g. margin calculation, client categorisation.</li>
</ul>

<div class="divider"></div>

<h3>3) Excel + AI: “Reading” tables and basic analysis (approx. 30 min)</h3>
<p>Goal: show how AI and Excel help reveal patterns – who matters, what is a problem, where trends are.</p>

<h4>3.1 Mini-theory – what to ask tables</h4>
<ul>
    <li>Basic question types:
        <ul>
            <li>“What are the totals / averages / min / max…?”</li>
            <li>“What does it look like over time?” (months, years).</li>
            <li>“Which groups differ?” (regions, segments, product lines).</li>
            <li>“Where are outliers?” (very high / very low values).</li>
        </ul>
    </li>
</ul>

<h4>3.2 AI on top of data (10–15 min)</h4>
<ul>
    <li>In Excel (Copilot) or ChatGPT:
        <ul>
            <li>“From this table, create a summary for management – 3 key findings.”</li>
            <li>“Find clients with high revenue but a large number of complaints.”</li>
            <li>“Propose 3 recommendations for the sales team based on the data.”</li>
        </ul>
    </li>
    <li>Note: AI must not “add” data that isn’t in the table – it only interprets.</li>
</ul>

<div class="divider"></div>

<h3>4) Exercise: “Mini Karl CRM” (15–20 min)</h3>
<p>Goal: go through the full chain: notes → table → questions → interpretation.</p>

<ul>
    <li>Participants receive:
        <ul>
            <li>several short “Karel – client notes” as text,</li>
            <li>a simple Excel/Sheets file with a few columns (client name, revenue, region, product).</li>
        </ul>
    </li>
</ul>

<p><strong>Task:</strong></p>
<ol>
    <li>Use AI to propose additional meaningful columns (e.g. satisfaction, number of complaints, potential, Karel’s rating).</li>
    <li>Fill the table (part manually, part as “dummy data” – explained to participants).</li>
    <li>Ask AI three types of questions:
        <ul>
            <li>A) summary (what overall picture the data shows),</li>
            <li>B) pattern finding (who are the best / most problematic clients),</li>
            <li>C) action recommendations (what the team should do next month).</li>
        </ul>
    </li>
</ol>

<p>At the end, participants read out:</p>
<ul>
    <li>one good question and the AI’s answer,</li>
    <li>one originally vague question and how they improved it.</li>
</ul>

<div class="divider"></div>

<h3>5) Boss fight: “Karel’s strategy” – data-driven version (25–30 min)</h3>
<p>Goal: combine AI + Excel + data thinking in a story-based task.</p>

<h4>5.1 Assignment</h4>
<ul>
    <li>Excel with about 20–30 clients (revenue, margin, number of complaints, number of contacts, region, segment, note).</li>
    <li>Several text notes (OneNote / e-mails) for selected clients.</li>
    <li>Hidden clue (part of a password) – e.g. in a note for the best “scoring” client.</li>
</ul>

<h4>5.2 Activity flow</h4>
<ol>
    <li><strong>Story intro (5 min)</strong><br>
        “Karel was obsessed with data. He claimed that from one look at a table he knew who is a golden client and who is a black hole. We have his data, but not his head. Your job is to figure out how Karel thought and worked.”
    </li>
    <li><strong>Work phase (15–20 min)</strong>
        <ul>
            <li>Use Excel (filters, sorting, simple formulas / pivot table).</li>
            <li>Use AI to design a simple scoring (e.g. revenue + margin – complaints) and apply it.</li>
            <li>Find 3 types of clients:
                <ul>
                    <li>“stars”,</li>
                    <li>“troublemakers”,</li>
                    <li>“hidden potential”.</li>
                </ul>
            </li>
            <li>Explore notes for top-scoring clients → discover the clue (part of the password).</li>
        </ul>
    </li>
    <li><strong>Reveal &amp; reflection (5–10 min)</strong>
        <ul>
            <li>Each person says one sentence: “How Karel chose clients in our view” (e.g. “Karel loved high margin and low drama” 😊).</li>
            <li>Everyone gives one recommendation for management based on the data.</li>
            <li>Joint recap:
                <ul>
                    <li>“First clean the data” – good table structure.</li>
                    <li>“Then ask specific questions” – targeted questions to the data.</li>
                    <li>“AI helps but doesn’t know everything” – human control.</li>
                </ul>
            </li>
            <li>Reward (Loot): part of the password to Karel’s cloud (hidden at the best client / in a comment).</li>
        </ul>
    </li>
</ol>
            `
        },
        structure: {
            cs: `
<h2>ANALYTIK – Tabulky a data</h2>
<p class="tagline">Od „rozsypaného čaje“ k datové strategii.</p>

<div class="divider"></div>

<h3>Cíl školení</h3>
<ul>
    <li>Naučit účastníky převádět „rozsypané“ informace do smysluplných tabulek.</li>
    <li>Ukázat, jak využít Excel/Sheets a AI pro základní analýzu a interpretaci dat.</li>
    <li>Posílit datové myšlení – vidět vzorce, výjimky a souvislosti v datech.</li>
</ul>

<div class="divider"></div>

<h3>Stručná osnova</h3>

<h4>1. Jaké nástroje použít na tabulky a data (10–15 min)</h4>
<ul>
    <li>Přehled: Excel, Google Sheets, ChatGPT / Copilot / Gemini nad tabulkami.</li>
    <li>Excel + Copilot – tabulky, filtry, vzorce, kontingenční tabulky, shrnutí dat.</li>
    <li>Google Sheets + Gemini – sdílené tabulky, segmentace, rychlé reporty.</li>
    <li>ChatGPT (CSV / tabulky) – návrh struktury, hledání anomálií, textová shrnutí pro vedení.</li>
    <li>Bezpečnost: schválené nástroje, co (ne)patří do AI z firemních dat.</li>
</ul>

<h4>2. Deep Dive: Od „rozsypaného čaje“ k dobré tabulce (cca 30 min)</h4>
<ul>
    <li>Princip: jeden řádek = jedna jednotka (klient, obchod, reklamace…), sloupce = vlastnosti.</li>
    <li>AI jako pomocník při návrhu struktury (řádky, sloupce, typy hodnot).</li>
    <li>Excel – základ: vytvoření tabulky, pojmenování sloupců, základní vzorce s podporou AI.</li>
</ul>

<h4>3. Excel + AI: „Čtení“ tabulek a jednoduchá analýza (cca 30 min)</h4>
<ul>
    <li>Jaké otázky na data klást (součty, průměry, trendy, rozdíly, výjimky).</li>
    <li>Excel: řazení, filtry, jednoduché kontingenční tabulky a grafy.</li>
    <li>AI nad daty: shrnutí pro vedení, identifikace problémových / klíčových klientů, návrh doporučení.</li>
    <li>Zásada: AI interpretuje data, ale nesmí „dovymýšlet“ to, co v tabulce není.</li>
</ul>

<h4>4. Cvičení: „Malé Karlovo CRM“ (15–20 min)</h4>
<ul>
    <li>Vstup: několik Karelových textových poznámek + jednoduchá tabulka klientů.</li>
    <li>Úkol:
        <ul>
            <li>navrhnout a doplnit další sloupce (spokojenost, reklamace, potenciál…),</li>
            <li>položit AI tři typy dotazů (shrnutí, vzorec, akční doporučení),</li>
            <li>porovnat vágní vs. přesně zadané otázky.</li>
        </ul>
    </li>
</ul>

<h4>5. Boss Fight: „Karelova strategie“ – data-driven verze (25–30 min)</h4>
<ul>
    <li>Vstup: tabulka ~20–30 klientů + textové poznámky, skrytá nápověda.</li>
    <li>Úkol:
        <ul>
            <li>použít Excel (filtry, vzorce, případně kontingenční tabulku),</li>
            <li>s pomocí AI navrhnout jednoduchý scoring klientů,</li>
            <li>identifikovat „hvězdy“, „potížisty“ a „skrytý potenciál“,</li>
            <li>z poznámek a dat odhalit Karelův způsob uvažování a najít nápovědu (část hesla).</li>
        </ul>
    </li>
    <li>Závěr: sdílení jedné věty „Jak Karel vybíral klienty“ a jednoho doporučení pro vedení.</li>
    <li>Loot: část hesla do Karlova cloudu.</li>
</ul>
            `,
            en: `
<h2>ANALYST – Spreadsheets and data</h2>
<p class="tagline">From “spilled tea” to data-driven strategy.</p>

<div class="divider"></div>

<h3>Training goals</h3>
<ul>
    <li>Teach participants to convert “scattered” information into meaningful tables.</li>
    <li>Show how to use Excel/Sheets and AI for basic analysis and data interpretation.</li>
    <li>Strengthen data thinking – seeing patterns, outliers and relationships in data.</li>
</ul>

<div class="divider"></div>

<h3>Outline</h3>

<h4>1. What tools to use for tables and data (10–15 min)</h4>
<ul>
    <li>Overview: Excel, Google Sheets, ChatGPT / Copilot / Gemini on tables.</li>
    <li>Excel + Copilot – tables, filters, formulas, pivot tables, data summaries.</li>
    <li>Google Sheets + Gemini – shared tables, segmentation, quick reports.</li>
    <li>ChatGPT (CSV / tables) – structure design, anomaly detection, text summaries for management.</li>
    <li>Security: approved tools, what (not) to send to AI from company data.</li>
</ul>

<h4>2. Deep dive: From “spilled tea” to a good table (approx. 30 min)</h4>
<ul>
    <li>Principle: one row = one unit (client, deal, complaint…), columns = attributes.</li>
    <li>AI as a helper when designing structure (rows, columns, value types).</li>
    <li>Excel basics: building a table, naming columns, basic formulas with AI support.</li>
</ul>

<h4>3. Excel + AI: “Reading” tables and basic analysis (approx. 30 min)</h4>
<ul>
    <li>What questions to ask data (totals, averages, trends, differences, outliers).</li>
    <li>Excel: sorting, filters, simple pivot tables and charts.</li>
    <li>AI on data: summary for management, identifying problematic / key clients, proposing recommendations.</li>
    <li>Principle: AI interprets data, but must not invent things that are not in the table.</li>
</ul>

<h4>4. Exercise: “Mini Karl CRM” (15–20 min)</h4>
<ul>
    <li>Input: several of Karel’s text notes + a simple client table.</li>
    <li>Tasks:
        <ul>
            <li>propose and fill new columns (satisfaction, complaints, potential…),</li>
            <li>ask AI three types of questions (summary, pattern, action),</li>
            <li>compare vague vs. precise questions.</li>
        </ul>
    </li>
</ul>

<h4>5. Boss fight: “Karel’s strategy” – data-driven version (25–30 min)</h4>
<ul>
    <li>Input: table with ~20–30 clients + text notes, hidden clue.</li>
    <li>Tasks:
        <ul>
            <li>use Excel (filters, formulas, possibly a pivot table),</li>
            <li>design a simple client scoring with AI,</li>
            <li>identify “stars”, “troublemakers” and “hidden potential”,</li>
            <li>from notes and data infer Karel’s thinking and find the clue (part of the password).</li>
        </ul>
    </li>
    <li>Conclusion: sharing one sentence “How Karel chose clients” and one recommendation for management.</li>
    <li>Loot: part of the password to Karel’s cloud.</li>
</ul>
            `
        }
    },

    // === SUMARIZACE A VYHLEDÁVÁNÍ ===
    summary: {
        content: {
            cs: `
<h2>AI pro sumarizaci a vyhledávání v dokumentech</h2>
<p class="tagline">Jak se ptát na dokumenty, místo abychom je jen „projížděli očima“.</p>

<div class="divider"></div>

<h3>1) Jaké AI použít na „kontrolu dokumentů a médií“</h3>
<p>Cíl: mít nástroje, do kterých nahraješ PDF, Word, prezentace, obrázky (ideálně i nahrávky/meetingy) a pak se na ně ptáš v přirozeném jazyce.</p>

<h4>A: Velké nástroje (cca 10 min)</h4>
<ol>
    <li>
        <strong>Microsoft 365 Copilot</strong>
        <ul>
            <li>Umí odpovídat na otázky k souborům v OneDrive a SharePointu, včetně dotazů přes více souborů naráz.</li>
            <li>Typické příklady:
                <ul>
                    <li>„Najdi klíčové rozdíly mezi těmito dvěma smlouvami.“</li>
                    <li>„Vypiš mi rizika ve všech souborech ve složce Contracts/Q4.“</li>
                </ul>
            </li>
            <li>Výhoda: respektuje oprávnění a bezpečnostní politiky v rámci Microsoft 365.</li>
        </ul>
    </li>
    <li>
        <strong>ChatGPT</strong>
        <ul>
            <li>Umí nahrávat větší soubory (PDF, Word, prezentace, obrázky, CSV) a „chatovat“ s nimi – dotazy, sumarizace, porovnávání více dokumentů, strukturované výstupy.</li>
            <li>Podnikové plány mají enterprise security a privacy.</li>
            <li>ChatGPT = „švýcarský nůž“ mezi AI nástroji.</li>
        </ul>
    </li>
    <li>
        <strong>Google Gemini pro Workspace</strong>
        <ul>
            <li>Umí shrnovat a prohledávat soubory na Google Drive, včetně PDF, Office dokumentů a dalších formátů.</li>
            <li>V chatu lze odkazovat na konkrétní soubory a nechat si je shrnout nebo se na ně ptát.</li>
        </ul>
    </li>
</ol>

<h4>Bezpečnost &amp; citlivá data (mini blok 5–10 min)</h4>
<ul>
    <li>Co do AI nepatří (osobní údaje, citlivé smlouvy, obchodně citlivé informace).</li>
    <li>Rozdíl mezi soukromými účty a firemně schválenými nástroji.</li>
    <li>Základní pravidla bezpečného používání.</li>
</ul>

<h4>B: Specializovaní „chat with your files“ pomocníci</h4>
<ul>
    <li>AskYourPDF, LightPDF, NotebookLM a další:
        <ul>
            <li>umožňují nahrát PDF (někdy i další formáty) a pak se ptát, dělat sumarizace, extrakce dat, generovat výstupy,</li>
            <li>hodí se spíš pro osobní použití a ne-citlivé materiály, pokud není jasně vyřešená bezpečnost.</li>
        </ul>
    </li>
</ul>

<div class="divider"></div>

<h3>2) Deep Dive: „Interrogating the data“ – jak správně klást otázky (cca 30–40 min)</h3>
<p>Cíl: naučit účastníky ptát se tak, aby AI dělala víc než „shrň to“ – hledání konkrétních informací, porovnávání, identifikace rozporů.</p>

<h4>2.1 Mini-teorie – jak vypadá dobrý prompt</h4>
<p>Rámeček pro práci s dokumenty:</p>
<ul>
    <li><strong>Role</strong> – z jaké perspektivy AI přemýšlí (právník, analytik, nový zaměstnanec…).</li>
    <li><strong>Úkol</strong> – co má AI udělat (shrnutí, porovnání, hledání rizik…).</li>
    <li><strong>Kontext / zdroje</strong> – jaké dokumenty jsou k dispozici (konkrétní soubory/složky).</li>
    <li><strong>Formát výstupu</strong> – tabulka, seznam, e-mail, slid.</li>
    <li><strong>Kontrola &amp; omezení</strong> – citace z dokumentu, žádné domýšlení mimo text.</li>
</ul>

<p><strong>Příklad špatného promptu:</strong><br>
„Shrň mi ten dokument.“</p>

<p><strong>Příklad lepšího promptu:</strong></p>
<p>
„Jsi právník zaměřený na obchodní smlouvy.<br>
Pracuješ pouze s dokumenty, které ti pošlu.<br>
Najdi všechna ustanovení o smluvních sankcích.<br>
Porovnej je s dokumentem B a vypiš konkrétní rozdíly v částkách, lhůtách a podmínkách.<br>
Odpověz v tabulce se sloupci: část, dokument, citace, rozdíl, potenciální riziko.“
</p>

<h4>2.2 Checklist pro „dobrý prompt“</h4>
<ul>
    <li>Co chci? (shrnutí / detail / porovnání / rizika / checklist).</li>
    <li>Z jakých dokumentů? (konkrétní soubory, složka, typ obsahu).</li>
    <li>Pro koho je výstup? (CEO, kolega, právník, nový člověk).</li>
    <li>Jak má výstup vypadat? (tabulka, seznam, e-mail, slid).</li>
    <li>Jak ověřím, že AI nelže? (citace z dokumentu, čísla, cross-check).</li>
</ul>

<h4>2.3 „Red flags“ – kdy AI nevěřit</h4>
<ul>
    <li>Krátké ukázky halucinací:
        <ul>
            <li>vymyšlené paragrafy,</li>
            <li>neexistující částky v tabulkách,</li>
            <li>zkomolené názvy oddělení.</li>
        </ul>
    </li>
</ul>

<div class="divider"></div>

<h3>2.4 Ukázka naživo (10 min)</h3>
<ul>
    <li>Práce se dvěma fiktivními smlouvami nebo manuály s pár záměrnými rozdíly.</li>
    <li>Postupně:
        <ol>
            <li>„Shrň dokument A do 5 bodů.“</li>
            <li>„Najdi konkrétní rozdíly mezi dokumentem A a B v oblasti X.“</li>
            <li>„Najdi rozpory – kde si dokumenty odporují?“</li>
            <li>„Vypiš 5 otázek pro člověka, které bych se měl ještě doptat před podpisem.“</li>
        </ol>
    </li>
</ul>

<div class="divider"></div>

<h3>2.5 Cvičení (15–20 min) – účastníci zkouší sami</h3>
<ul>
    <li>2–3 krátké dokumenty (např. dvě verze směrnice + zápis z porady).</li>
    <li>Úkol:
        <ol>
            <li>Vytvořit 3–4 prompty, které:
                <ul>
                    <li>A) shrnou dokument pro různé cílovky (CEO, nový zaměstnanec, právník),</li>
                    <li>B) najdou konkrétní odpovědi (konkrétní čísla, termíny, odpovědné osoby),</li>
                    <li>C) najdou rozpory, rizika nebo chybějící informace.</li>
                </ul>
            </li>
            <li>Každý prompt iterovat min. 3× a sledovat, jak se odpověď zlepšuje.</li>
        </ol>
    </li>
    <li>Na závěr 2–3 účastníci sdílí:
        <ul>
            <li>svůj „nejhorší“ prompt a nejlepší prompt – co se změnilo.</li>
        </ul>
    </li>
</ul>

<div class="divider"></div>

<h3>3) Boss Fight: „Karlův OneDrive“ (cca 25–30 min)</h3>
<p>Cíl: přenést všechny dovednosti do hry – reálné vyhledávání v „bordelu“ a získat nápovědu do celého 4-dílného cyklu.</p>

<h4>3.1 Příprava (před workshopem)</h4>
<ul>
    <li>Složka „Karlův OneDrive“ – reálně v OneDrivu nebo simulovaná struktura.</li>
    <li>Uvnitř:
        <ul>
            <li>složka „Karlovo poznámky“ – mix meetingových zápisů, screenshotů, PDF výňatků, fotek flipchartů, textových souborů, případně přepis audio-porady,</li>
            <li>další složky („Invoices“, „Old_Stuff“, „Personal“) jako šum.</li>
            <li>V jednom z dokumentů je ukryta nápověda (část hesla).</li>
        </ul>
    </li>
</ul>

<h4>3.2 Průběh aktivity</h4>
<ol>
    <li><strong>Zadání + story (5 min)</strong><br>
        „Karel byl náš kolega, který měl unikátní způsob práce s dokumenty. Máme přístup do jeho OneDrivu – vaším cílem je najít specifickou nápovědu v sekci Karlovo poznámky.“
    </li>
    <li><strong>Technický start (5 min)</strong>
        <ul>
            <li>Ukažeme, jak otevřít složku a připojit AI (Copilot / ChatGPT / Gemini – podle možností firmy).</li>
            <li>Společný první prompt:
                <ul>
                    <li>„V těchto souborech najdi cokoliv, co vypadá jako část hesla nebo tajná instrukce. Dej mi 3 nejpravděpodobnější kandidáty.“</li>
                </ul>
            </li>
            <li>Mini-questy:
                <ul>
                    <li>najdi dokument, kde si Karel protiřečí (dvě různá data nebo částky),</li>
                    <li>najdi nejstarší / nejnovější zmínku o projektu, ke kterému se nápověda vztahuje.</li>
                </ul>
            </li>
        </ul>
    </li>
    <li><strong>Samostatná práce (10–15 min)</strong>
        <ul>
            <li>Účastníci sami formulují prompty pro hledání nápovědy a klíčových informací.</li>
        </ul>
    </li>
    <li><strong>Společné odhalení + reflexe (10 min)</strong>
        <ul>
            <li>Vybraní účastníci přečtou:
                <ul>
                    <li>svůj nejlepší prompt, který vedl k nápovědě,</li>
                    <li>jeden prompt, který selhal (AI blábolila, nenašla nic).</li>
                </ul>
            </li>
            <li>Společné ukotvení zásad:
                <ul>
                    <li>„Nejdřív se zorientuj“ – krátké shrnutí obsahu složky.</li>
                    <li>„Pak se ptej konkrétně“ – klíčová slova, filtrování, typ dokumentu.</li>
                    <li>„Iteruj“ – navazující dotazy, zpřesňování.</li>
                    <li>„Kontroluj“ – ověř, že AI citovala skutečný dokument a nehalucinuje.</li>
                </ul>
            </li>
            <li>Na konci odhalení celé nápovědy (část hesla do Karlova cloudu).</li>
        </ul>
    </li>
</ol>
            `,
            en: `
<h2>AI for summarising and searching documents</h2>
<p class="tagline">Asking documents questions instead of just “scrolling through them”.</p>

<div class="divider"></div>

<h3>1) Which AI tools to use for “checking documents and media”</h3>
<p>Goal: have tools where you can upload PDFs, Word files, slides, images (ideally also recordings/meetings) and then ask questions in natural language.</p>

<h4>A: Main tools (approx. 10 min)</h4>
<ol>
    <li>
        <strong>Microsoft 365 Copilot</strong>
        <ul>
            <li>Answers questions about files in OneDrive and SharePoint, including queries across multiple files.</li>
            <li>Typical use cases:
                <ul>
                    <li>“Find key differences between these two contracts.”</li>
                    <li>“List all risks in the files inside the folder Contracts/Q4.”</li>
                </ul>
            </li>
            <li>Advantage: respects permissions and DLP/security policies in Microsoft 365.</li>
        </ul>
    </li>
    <li>
        <strong>ChatGPT</strong>
        <ul>
            <li>Can upload larger files (PDF, Word, slides, images, CSV) and “chat” with them – questions, summaries, comparison of multiple docs, structured outputs.</li>
            <li>Enterprise plans offer strong security and privacy.</li>
            <li>ChatGPT = the “Swiss army knife” among AI tools.</li>
        </ul>
    </li>
    <li>
        <strong>Google Gemini for Workspace</strong>
        <ul>
            <li>Can summarise and search files stored in Google Drive, including PDF, Office docs and other formats.</li>
            <li>In chat, you can reference specific files to summarise or query them.</li>
        </ul>
    </li>
</ol>

<h4>Security &amp; sensitive data (mini-block 5–10 min)</h4>
<ul>
    <li>What must not be sent to AI (personal data, contracts, trade secrets).</li>
    <li>Difference between personal accounts and company-approved tools.</li>
    <li>Basic rules for safe usage.</li>
</ul>

<h4>B: Specialised “chat with your files” helpers</h4>
<ul>
    <li>AskYourPDF, LightPDF, NotebookLM and others:
        <ul>
            <li>allow uploading PDF (sometimes other formats) and then asking questions, doing summaries, data extraction, generating outputs,</li>
            <li>better suited for personal use and non-sensitive material unless security is clearly solved.</li>
        </ul>
    </li>
</ul>

<div class="divider"></div>

<h3>2) Deep dive: “Interrogating the data” – how to ask good questions (approx. 30–40 min)</h3>
<p>Goal: teach participants to ask questions so that AI does more than “summarise this” – finding concrete information, comparing documents, spotting contradictions.</p>

<h4>2.1 Mini-theory – what a good prompt looks like</h4>
<p>Framework for document questions:</p>
<ul>
    <li><strong>Role</strong> – perspective AI should take (lawyer, analyst, new employee…).</li>
    <li><strong>Task</strong> – what AI should do (summary, comparison, risk analysis…).</li>
    <li><strong>Context / Sources</strong> – which documents to use (specific files/folders).</li>
    <li><strong>Output format</strong> – table, list, e-mail, slide, summary for a specific audience.</li>
    <li><strong>Checks &amp; constraints</strong> – citations from the documents, no information beyond the text.</li>
</ul>

<p><strong>Example of a weak prompt:</strong><br>
“Summarise this document.”</p>

<p><strong>Example of a better prompt:</strong></p>
<p>
“You are a lawyer specialising in commercial contracts.<br>
You work only with the documents I provide.<br>
Find all provisions on contractual penalties.<br>
Compare them with document B and list specific differences in amounts, deadlines and conditions.<br>
Answer in a table with columns: section, document, citation, difference, potential risk.”
</p>

<h4>2.2 Checklist for a “good prompt”</h4>
<ul>
    <li>What do I want? (summary / detail / comparison / risks / checklist).</li>
    <li>From which documents? (specific files, folder, content type).</li>
    <li>For whom is the output? (CEO, colleague, lawyer, new hire).</li>
    <li>What should the output look like? (table, list, e-mail, slide).</li>
    <li>How will I verify the answer? (citations, numbers, cross-check).</li>
</ul>

<h4>2.3 “Red flags” – when not to trust AI</h4>
<ul>
    <li>Typical hallucination examples:
        <ul>
            <li>invented paragraphs,</li>
            <li>non-existing numbers in tables,</li>
            <li>wrong department names.</li>
        </ul>
    </li>
</ul>

<div class="divider"></div>

<h3>2.4 Live demo (approx. 10 min)</h3>
<ul>
    <li>Work with two fictional contracts/manuals with a few intentional differences.</li>
    <li>Step-by-step:
        <ol>
            <li>“Summarise document A in 5 bullet points.”</li>
            <li>“Find specific differences between A and B in area X.”</li>
            <li>“Find contradictions – where do the documents disagree?”</li>
            <li>“List 5 questions I should ask a human before signing.”</li>
        </ol>
    </li>
</ul>

<div class="divider"></div>

<h3>2.5 Exercise (15–20 min) – participants try it themselves</h3>
<ul>
    <li>2–3 short documents (e.g. two versions of a policy + a meeting note).</li>
    <li>Tasks:
        <ol>
            <li>Create 3–4 prompts that:
                <ul>
                    <li>A) summarise the document for different audiences (CEO, new employee, lawyer),</li>
                    <li>B) find concrete answers (numbers, deadlines, responsible persons),</li>
                    <li>C) find inconsistencies, risks or missing information.</li>
                </ul>
            </li>
            <li>Iterate each prompt at least 3 times and watch how the answer improves.</li>
        </ol>
    </li>
    <li>At the end, 2–3 participants share:
        <ul>
            <li>their “worst” prompt and the best one – what changed.</li>
        </ul>
    </li>
</ul>

<div class="divider"></div>

<h3>3) Boss fight: “Karl’s OneDrive” (approx. 25–30 min)</h3>
<p>Goal: transfer all skills into a game – real searching in “messy” content and getting a clue for the whole 4-part cycle.</p>

<h4>3.1 Preparation (before the workshop)</h4>
<ul>
    <li>Folder “Karl’s OneDrive” – real in OneDrive or simulated structure.</li>
    <li>Inside:
        <ul>
            <li>folder “Karl’s notes” – mix of meeting notes, screenshots, PDF extracts, flipchart photos, text files, optionally a meeting transcript,</li>
            <li>other folders (“Invoices”, “Old_Stuff”, “Personal”) as noise,</li>
            <li>a hidden clue (part of a password) in one of the documents.</li>
        </ul>
    </li>
</ul>

<h4>3.2 Activity flow</h4>
<ol>
    <li><strong>Story &amp; assignment (5 min)</strong><br>
        “Karel was our colleague with a unique way of working with documents. We now have access to his OneDrive – your goal is to find a specific clue in the ‘Karl’s notes’ section.”
    </li>
    <li><strong>Technical start (5 min)</strong>
        <ul>
            <li>Show how to open the folder and connect AI (Copilot / ChatGPT / Gemini – depending on the company tools).</li>
            <li>First shared prompt:
                <ul>
                    <li>“In these files, find anything that could be a part of a password or a secret instruction. Give me the 3 most likely candidates.”</li>
                </ul>
            </li>
            <li>Mini-quests:
                <ul>
                    <li>find a document where Karel contradicts himself (two different dates or amounts),</li>
                    <li>find the oldest / newest mention of the project related to the clue.</li>
                </ul>
            </li>
        </ul>
    </li>
    <li><strong>Individual work (10–15 min)</strong>
        <ul>
            <li>Participants formulate their own prompts to search for the clue and key information.</li>
        </ul>
    </li>
    <li><strong>Reveal &amp; reflection (10 min)</strong>
        <ul>
            <li>Selected participants read:
                <ul>
                    <li>their best prompt that led to the clue,</li>
                    <li>one failed prompt (AI hallucinated or found nothing).</li>
                </ul>
            </li>
            <li>Joint anchoring of principles:
                <ul>
                    <li>“First orient yourself” – short overview of the folder contents.</li>
                    <li>“Then ask specifically” – keywords, filters, document type.</li>
                    <li>“Iterate” – follow-up questions, refining the query.</li>
                    <li>“Verify” – check that AI really cites an existing document and not hallucinating.</li>
                </ul>
            </li>
            <li>At the end, reveal the full clue (part of the password to Karel’s cloud).</li>
        </ul>
    </li>
</ol>
            `
        },
        structure: {
            cs: `
<h2>AI pro sumarizaci a vyhledávání v dokumentech</h2>
<p class="tagline">Od datového chaosu k chytrému dotazu.</p>

<div class="divider"></div>

<h3>Cíl školení</h3>
<ul>
    <li>Ukázat možnosti využití AI pro práci s větším množstvím dokumentů a dalších médií.</li>
    <li>Naučit účastníky efektivně formulovat dotazy (prompty) pro sumarizaci, vyhledávání a porovnávání informací.</li>
    <li>Posílit schopnost orientace v „datovém chaosu“ a kritického hodnocení výstupů AI.</li>
</ul>

<div class="divider"></div>

<h3>Přínosy pro účastníky</h3>
<ul>
    <li>zná hlavní nástroje AI pro práci s dokumenty (Microsoft 365 Copilot, ChatGPT, Google Gemini, specializované nástroje),</li>
    <li>umí formulovat strukturované prompty pro různé typy úloh (shrnutí, vyhledávání, porovnání, identifikace rizik),</li>
    <li>dokáže rozpoznat a omezit rizika spojená s používáním AI (bezpečnost, halucinace),</li>
    <li>je schopen využít AI při vyhledávání konkrétní informace v rozsáhlé složce dokumentů.</li>
</ul>

<div class="divider"></div>

<h3>Obsah školení</h3>

<h4>1) Přehled nástrojů AI pro práci s dokumenty a médii (cca 15 min)</h4>
<ul>
    <li>Microsoft 365 Copilot, ChatGPT, Google Gemini pro Workspace, specializované nástroje.</li>
    <li>Jak komunikovat s AI, základní myšlenkové principy.</li>
    <li>Bezpečnost a citlivá data:
        <ul>
            <li>co do AI neposílat (osobní údaje, smlouvy, obchodně citlivé informace),</li>
            <li>rozdíl mezi soukromými účty a firemně schválenými nástroji,</li>
            <li>základní pravidla bezpečného používání.</li>
        </ul>
    </li>
</ul>

<h4>2) Deep Dive: „Interrogating the data“ – jak správně klást otázky (cca 40–45 min)</h4>
<ul>
    <li>Teoretický rámec „dobrého promptu“:
        <ul>
            <li>Role (perspektiva – např. právník, analytik),</li>
            <li>Úkol,</li>
            <li>Kontext / zdroje (jaké dokumenty),</li>
            <li>Formát výstupu (tabulka, body, e-mail, shrnutí pro konkrétního adresáta),</li>
            <li>Kontrola a omezení (citace, práce pouze s danými dokumenty).</li>
        </ul>
    </li>
    <li>Checklist pro tvorbu promptů:
        <ul>
            <li>co chci zjistit (shrnutí, detail, porovnání, riziko),</li>
            <li>z jakých dokumentů čerpám,</li>
            <li>pro koho je výstup,</li>
            <li>v jaké formě ho potřebuji,</li>
            <li>jak ověřím správnost odpovědi.</li>
        </ul>
    </li>
    <li>„Red flags“ – příklady halucinací (neexistující odstavce, čísla, chybné názvy) a zásady ověřování.</li>
    <li>Živá ukázka na dvou verzích dokumentu – shrnutí, hledání ustanovení, porovnání verzí, generování doplňujících otázek.</li>
    <li>Praktické cvičení – tvorba a iterace promptů pro různé cílové skupiny a typy dotazů.</li>
</ul>

<h4>3) Závěrečný úkol – „Boss Fight: Karlův OneDrive“ (cca 30 min)</h4>
<ul>
    <li>Scénář: práce se simulovanou složkou „Karlův OneDrive“ (poznámky, zápisy z porad, PDF, obrázky, textové soubory), v jedné z poznámek je ukryta nápověda.</li>
    <li>Úkol: využít AI k nalezení konkrétní informace / části hesla.</li>
    <li>Reflexe:
        <ul>
            <li>sdílení efektivních a neefektivních promptů,</li>
            <li>shrnutí zásad: orientace → přesný dotaz → iterace → ověřování.</li>
        </ul>
    </li>
</ul>

<h4>4) Závěr (cca 5 min)</h4>
<ul>
    <li>Shrnutí hlavních principů práce s AI při vyhledávání a sumarizaci.</li>
    <li>Prostor pro dotazy a konkrétní návrhy využití ve firmě.</li>
    <li>Návaznost na další části 4-dílného cyklu.</li>
</ul>
            `,
            en: `
<h2>AI for summarising and searching documents</h2>
<p class="tagline">From data chaos to smart questions.</p>

<div class="divider"></div>

<h3>Training goals</h3>
<ul>
    <li>Show how AI can help with larger volumes of documents and other media.</li>
    <li>Teach participants to formulate effective prompts for summarising, searching and comparing information.</li>
    <li>Strengthen the ability to navigate “data chaos” and critically evaluate AI outputs.</li>
</ul>

<div class="divider"></div>

<h3>Benefits for participants</h3>
<ul>
    <li>knows main AI tools for working with documents (Microsoft 365 Copilot, ChatGPT, Google Gemini, specialised tools),</li>
    <li>can formulate structured prompts for different tasks (summary, search, comparison, risk identification),</li>
    <li>can recognise and reduce risks related to using AI (security, hallucinations),</li>
    <li>is able to use AI to find specific information in a large folder of documents.</li>
</ul>

<div class="divider"></div>

<h3>Training content</h3>

<h4>1) Overview of AI tools for documents and media (approx. 15 min)</h4>
<ul>
    <li>Microsoft 365 Copilot, ChatGPT, Google Gemini for Workspace, specialised tools.</li>
    <li>How to communicate with AI, basic mental models.</li>
    <li>Security and sensitive data:
        <ul>
            <li>what not to send to AI (personal data, contracts, trade-sensitive info),</li>
            <li>difference between personal accounts and company-approved tools,</li>
            <li>basic safe usage rules.</li>
        </ul>
    </li>
</ul>

<h4>2) Deep dive: “Interrogating the data” – how to ask proper questions (approx. 40–45 min)</h4>
<ul>
    <li>Theoretical framework of a “good prompt”:
        <ul>
            <li>Role (perspective – e.g. lawyer, analyst),</li>
            <li>Task,</li>
            <li>Context / sources (which documents),</li>
            <li>Output format (table, bullets, e-mail, summary for a specific audience),</li>
            <li>Checks and constraints (citations, work only with the given documents).</li>
        </ul>
    </li>
    <li>Checklist for prompts:
        <ul>
            <li>what I want (summary, detail, comparison, risk),</li>
            <li>which documents I draw from,</li>
            <li>for whom the output is,</li>
            <li>in which form I need it,</li>
            <li>how I will verify correctness.</li>
        </ul>
    </li>
    <li>“Red flags” – examples of hallucinations (non-existent paragraphs, numbers, wrong names) and verification rules.</li>
    <li>Live demo on two versions of a document – summary, searching for provisions, comparing versions, generating follow-up questions.</li>
    <li>Practical exercise – creating and iterating prompts for different audiences and question types.</li>
</ul>

<h4>3) Final task – “Boss Fight: Karl’s OneDrive” (approx. 30 min)</h4>
<ul>
    <li>Scenario: work with a simulated “Karl’s OneDrive” folder (notes, meeting minutes, PDFs, images, text files), one note hides a clue.</li>
    <li>Task: use AI to find a specific piece of information / part of a password.</li>
    <li>Reflection:
        <ul>
            <li>sharing effective and ineffective prompts,</li>
            <li>summary of key principles: orientation → precise question → iteration → verification.</li>
        </ul>
    </li>
</ul>

<h4>4) Conclusion (approx. 5 min)</h4>
<ul>
    <li>Summary of main principles for using AI in search and summarisation.</li>
    <li>Q&amp;A and concrete ideas for use in the company.</li>
    <li>Link to the other parts of the 4-part training cycle.</li>
</ul>
            `
        }
    }
};

let currentLang = "cs";
let activeSection = null;

const languageSelect = document.getElementById("language-select");
const themeToggle = document.getElementById("theme-toggle");

let modal;
let modalTitleEl;
let modalContentEl;
let modalCloseBtn;

const modalState = {
    open: false,
    section: null,
    sub: null
};

// Nastavení jazyka
function setLanguage(lang) {
    const dict = translations[lang];
    if (!dict) return;

    currentLang = lang;
    document.documentElement.lang = lang;

    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (dict[key]) {
            el.textContent = dict[key];
        }
    });

    updateInfoLanguage();
    updateModalFromState();

    localStorage.setItem("kd_language", lang);
}

// Motiv
function setTheme(theme) {
    if (theme === "dark") {
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
        theme = "light";
    }
    localStorage.setItem("kd_theme", theme);
}

// Aktivní blok (accordion) – při zavření smažeme info
function setActiveSection(sectionOrNull) {
    activeSection = sectionOrNull;

    const blocks = document.querySelectorAll(".menu-block");
    blocks.forEach((block) => {
        const section = block.dataset.section;
        const isActive = activeSection && section === activeSection;

        const infoContainer = block.querySelector(".info-details");
        const infoBtn = block.querySelector(".info-item");

        if (isActive) {
            block.classList.add("active");
        } else {
            block.classList.remove("active");
            if (infoContainer) infoContainer.innerHTML = "";
            if (infoBtn) infoBtn.classList.remove("info-selected");
        }
    });
}

// Naplnění detailů do info-details daného bloku
function renderInfoForBlock(block) {
    const section = block.dataset.section;
    const config = trainingDetails[section];
    if (!config) return;

    const dict = translations[currentLang];
    const container = block.querySelector(".info-details");
    if (!container) return;

    const durationLabel = dict.detailDuration;
    const trainerLabel = dict.detailTrainer;
    const authorLabel = dict.detailAuthor;

    const durationValue = config.duration[currentLang] || config.duration.cs;
    const trainerValue = config.trainer[currentLang] || config.trainer.cs;
    const authorValue = config.author[currentLang] || config.author.cs;

    container.innerHTML = `
        <p>${durationLabel}: ${durationValue}</p>
        <p>${trainerLabel}: ${trainerValue}</p>
        <p>${authorLabel}: ${authorValue}</p>
    `;
}

// po změně jazyka přepočítáme detaily u bloků, kde už info je
function updateInfoLanguage() {
    const blocks = document.querySelectorAll(".menu-block");
    blocks.forEach((block) => {
        const container = block.querySelector(".info-details");
        if (container && container.innerHTML.trim() !== "") {
            renderInfoForBlock(block);
        }
    });
}

// Klik na Informace – toggle
function handleInfoClick(btn) {
    const block = btn.closest(".menu-block");
    if (!block) return;

    const infoContainer = block.querySelector(".info-details");
    if (!infoContainer) return;

    const alreadySelected = btn.classList.contains("info-selected");

    // zrušit info u všech bloků
    const allInfoBtns = document.querySelectorAll(".info-item");
    allInfoBtns.forEach((b) => b.classList.remove("info-selected"));

    const allInfoContainers = document.querySelectorAll(".info-details");
    allInfoContainers.forEach((c) => (c.innerHTML = ""));

    // pokud už byl vybraný → jen zavřít
    if (alreadySelected) {
        return;
    }

    // jinak zapnout
    btn.classList.add("info-selected");
    renderInfoForBlock(block);
}

// ==== MODAL – otevření / zavření pro Obsah / Kostra ====
function openModal(section, sub) {
    if (!modal || !modalTitleEl || !modalContentEl) return;

    const dict = translations[currentLang];

    const sectionLabelKeyMap = {
        intro: "introAI",
        copywriter: "copywriter",
        automation: "automation",
        data: "dataTables",
        summary: "summarySearch"
    };

    const sectionKey = sectionLabelKeyMap[section];
    const sectionName = sectionKey ? dict[sectionKey] : "";

    const subLabel =
        sub === "content" ? dict.subContent : dict.subStructure;

    modalTitleEl.textContent = `${sectionName} – ${subLabel}`;

    const textConfig =
        modalTexts[section] && modalTexts[section][sub]
            ? modalTexts[section][sub]
            : null;

    let content = "";
    if (textConfig) {
        content = textConfig[currentLang] || textConfig.cs || "";
    }
    if (!content) {
        content =
            currentLang === "cs"
                ? "<p>Text bude doplněn.</p>"
                : "<p>Text will be added.</p>";
    }

    modalContentEl.innerHTML = content;

    modalState.open = true;
    modalState.section = section;
    modalState.sub = sub;

    modal.removeAttribute("hidden");
}

function closeModal() {
    if (!modal) return;
    modalState.open = false;
    modalState.section = null;
    modalState.sub = null;
    modal.setAttribute("hidden", "hidden");
}

// po změně jazyka aktualizujeme otevřený modal
function updateModalFromState() {
    if (!modalState.open || !modal) return;
    openModal(modalState.section, modalState.sub);
}

// Klik na Obsah / Kostra
function handleDefaultSubClick(btn) {
    const sub = btn.dataset.sub;
    const block = btn.closest(".menu-block");
    const section = block ? block.dataset.section : null;
    if (!section) return;

    openModal(section, sub);
}

// === Inicializace ===
document.addEventListener("DOMContentLoaded", () => {
    modal = document.getElementById("text-modal");
    modalTitleEl = document.getElementById("modal-title");
    modalContentEl = document.getElementById("modal-content");
    modalCloseBtn = document.getElementById("modal-close");

    // Jazyk
    const savedLang = localStorage.getItem("kd_language") || "cs";
    languageSelect.value = savedLang;
    setLanguage(savedLang);

    languageSelect.addEventListener("change", (e) => {
        setLanguage(e.target.value);
    });

    // Motiv
    let savedTheme = localStorage.getItem("kd_theme");
    if (!savedTheme) {
        const prefersDark =
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches;
        savedTheme = prefersDark ? "dark" : "light";
    }
    setTheme(savedTheme);

    themeToggle.addEventListener("click", () => {
        const newTheme = document.body.classList.contains("dark")
            ? "light"
            : "dark";
        setTheme(newTheme);
    });

    // Accordion – hlavičky bloků
    const menuBlocks = document.querySelectorAll(".menu-block");
    menuBlocks.forEach((block) => {
        const header = block.querySelector(".menu-header");
        if (!header) return;

        header.addEventListener("click", () => {
            const section = block.dataset.section;
            if (activeSection === section) {
                setActiveSection(null);
            } else {
                setActiveSection(section);
            }
        });
    });

    // Podikony (Obsah / Kostra / Informace)
    const subButtons = document.querySelectorAll(".sub-item");
    subButtons.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();

            const sub = btn.dataset.sub;
            if (sub === "info") {
                handleInfoClick(btn);
            } else {
                handleDefaultSubClick(btn);
            }
        });
    });

    // Modal – zavírání
    if (modalCloseBtn) {
        modalCloseBtn.addEventListener("click", () => {
            closeModal();
        });
    }

    if (modal) {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modalState.open) {
            closeModal();
        }
    });
});
