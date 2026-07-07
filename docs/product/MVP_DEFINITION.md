\# MVP Definition — NutriCoach AI



\*\*Version:\*\* 1.0



\*\*Status:\*\* Approved (Founder Draft)



\*\*Owner:\*\* Product Manager



\*\*Last Updated:\*\* July 2026



\---



\# 1. Purpose



Aquest document defineix el Producte Mínim Viable (MVP) de NutriCoach AI.



El seu objectiu és establir un abast clar per a la primera versió pública de l'aplicació, alineant tots els equips (Producte, Arquitectura, IA, Backend, Frontend, Mobile, UX i QA) sobre què s'ha de construir, què queda fora del MVP i quins criteris determinaran l'èxit del producte.



Aquest document és la referència principal per a la planificació del Roadmap, els Epics, les User Stories i els Sprints.



\---



\# 2. Product Vision



NutriCoach AI és un coach personal impulsat per Intel·ligència Artificial que centralitza tota la informació relacionada amb els objectius físics d'un usuari.



L'aplicació no és només un registre d'entrenaments o una calculadora de calories.



És un sistema intel·ligent que:



\* coneix l'usuari;

\* genera un pla personalitzat;

\* acompanya l'usuari diàriament;

\* adapta les recomanacions segons el progrés;

\* manté tota la informació centralitzada;

\* ajuda a mantenir la disciplina i la motivació.



L'objectiu és que l'usuari mai s'hagi de preguntar:



> "Què he de fer avui per apropar-me al meu objectiu?"



L'aplicació sempre haurà de donar aquesta resposta.



\---



\# 3. Problem Statement



Actualment, els usuaris necessiten utilitzar múltiples eines per gestionar el seu progrés:



\* aplicacions de nutrició;

\* aplicacions d'entrenament;

\* calendaris;

\* fulls Excel;

\* llibretes;

\* notes;

\* converses amb eines d'IA.



Aquesta fragmentació provoca:



\* manca de seguiment;

\* pèrdua de motivació;

\* poca constància;

\* dificultat per adaptar els plans;

\* abandonament dels objectius.



NutriCoach AI elimina aquesta fragmentació centralitzant tota la informació en un únic sistema.



\---



\# 4. Target User



El MVP està orientat a persones que:



\* tenen un objectiu físic clar;

\* disposen de poc temps per planificar entrenaments i alimentació;

\* necessiten una estructura clara;

\* volen un seguiment constant;

\* busquen obtenir resultats sense haver d'investigar durant hores.



No està orientat inicialment a entrenadors professionals ni a gimnasos.



Aquests segments es consideraran en futures versions.



\---



\# 5. Core Value Proposition



NutriCoach AI ofereix una experiència que combina:



\* un coach amb IA adaptable;

\* planificació automàtica;

\* seguiment centralitzat;

\* adaptació contínua;

\* visualització clara del progrés.



El producte no competeix per tenir més funcionalitats.



Competeix per oferir la millor experiència diària possible.



\---



\# 6. Product Principles



Totes les decisions del MVP hauran de respectar aquests principis.



\## 6.1 Simplicitat



L'usuari ha d'entendre què ha de fer en menys de 10 segons.



\---



\## 6.2 Centralització



Tota la informació rellevant ha d'estar disponible dins d'una única plataforma.



\---



\## 6.3 Personalització



El coach ha d'adaptar totes les recomanacions segons el context de cada usuari.



\---



\## 6.4 Adaptació contínua



Els plans no són estàtics.



Han d'evolucionar segons:



\* compliment;

\* progrés;

\* disponibilitat;

\* lesions;

\* preferències.



\---



\## 6.5 Baixa fricció



Registrar informació ha de requerir el mínim esforç possible.



Sempre que sigui viable, la IA haurà d'ajudar a interpretar la informació introduïda per l'usuari.



\---



\# 7. MVP Goals



El MVP haurà de permetre que un usuari pugui assolir el seu objectiu físic utilitzant exclusivament NutriCoach AI.



Per aconseguir-ho, el producte haurà de permetre:



\* definir objectius;

\* completar un onboarding intel·ligent;

\* generar un pla inicial;

\* consultar què cal fer cada dia;

\* registrar entrenaments;

\* registrar àpats;

\* seguir el progrés;

\* adaptar el pla.



\---



\# 8. MVP Modules



\## 1. Authentication



\* registre

\* inici de sessió

\* recuperació de compte



\---



\## 2. Intelligent Onboarding



Conversa guiada amb el coach IA.



Obtenció de:



\* objectius;

\* experiència;

\* lesions;

\* alimentació;

\* disponibilitat;

\* equipament;

\* preferències.



\---



\## 3. AI Coach



Funcionalitats:



\* conversa contextual;

\* preguntes i respostes;

\* adaptació de plans;

\* motivació;

\* seguiment;

\* recomanacions.



El coach actuarà com un amic expert en nutrició i entrenament.



\---



\## 4. Workout Planner



Generació automàtica de:



\* rutines;

\* sessions;

\* progressions.



\---



\## 5. Nutrition Planner



Generació automàtica de:



\* objectius calòrics;

\* distribució de macronutrients;

\* propostes d'àpats.



\---



\## 6. Calendar



Vista central del producte.



Inclourà:



\* entrenaments;

\* àpats;

\* objectius;

\* hàbits;

\* esdeveniments.



\---



\## 7. Tracking



Seguiment de:



\* pes;

\* entrenaments;

\* alimentació;

\* compliment;

\* objectius.



\---



\## 8. Dashboard



Resum diari i setmanal.



La pantalla principal mostrarà:



\* què toca fer avui;

\* estat dels objectius;

\* compliment setmanal;

\* missatge del coach.



\---



\# 9. Daily Experience



Cada vegada que l'usuari obri l'aplicació haurà de veure:



1\. Salutació personalitzada.

2\. Resum del progrés.

3\. Tasques del dia.

4\. Recomanacions del coach.

5\. Accés ràpid al calendari.



La pregunta principal no és:



"Què ha fet l'usuari?"



Sinó:



"Quin és el següent pas que ha de fer?"



\---



\# 10. AI Philosophy



La IA no substitueix la lògica del producte.



La IA:



\* interpreta;

\* explica;

\* motiva;

\* adapta;

\* conversa.



Les decisions sensibles (com objectius nutricionals o estructures d'entrenament) hauran d'estar recolzades per regles de negoci i validacions, evitant confiar exclusivament en les respostes del model generatiu.



\---



\# 11. Success Metrics



El MVP es considerarà un èxit si:



\* els usuaris utilitzen l'aplicació de manera recurrent;

\* consulten el resum diari;

\* registren entrenaments i àpats;

\* completen els objectius setmanals;

\* mantenen l'ús durant diverses setmanes.



La mètrica principal (North Star Metric) serà:



\*\*Percentage of Completed Daily Plans\*\*



Percentatge de dies en què l'usuari completa el pla diari proposat pel coach.



\---



\# 12. Out of Scope



Les següents funcionalitats NO formen part del MVP:



\* xarxa social;

\* sistema de punts;

\* rànquings;

\* reptes;

\* comunitats;

\* entrenadors professionals;

\* marketplace;

\* integracions amb wearables;

\* compartició multimèdia;

\* funcionalitats B2B per a gimnasos;

\* monetització avançada.



Aquestes funcionalitats seran avaluades en versions posteriors.



\---



\# 13. Future Vision



Després de validar el MVP, el producte evolucionarà cap a una plataforma completa de salut personal.



Possibles línies d'evolució:



\* xarxa social;

\* reptes col·laboratius;

\* integració amb wearables;

\* seguiment del son;

\* estrès;

\* suplementació;

\* analítiques;

\* entrenadors professionals;

\* gestió multiusuari per a gimnasos;

\* plans corporatius.



L'arquitectura desenvolupada durant el MVP haurà de ser prou flexible per suportar aquesta evolució sense requerir redissenys estructurals.



\---



\# 14. Final Statement



NutriCoach AI no pretén ser una aplicació més de nutrició o entrenament.



La seva missió és convertir-se en el sistema de referència que acompanya cada usuari durant tot el seu procés de transformació física.



Cada funcionalitat desenvolupada haurà de respondre una única pregunta:



> \*\*Ajuda realment l'usuari a saber quin és el següent pas per acostar-se al seu objectiu?\*\*



Si la resposta és negativa, aquesta funcionalitat no formarà part del producte.



