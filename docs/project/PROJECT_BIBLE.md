\# PROJECT BIBLE



\*\*Projecte:\*\* NutriCoach AI \*(nom provisional)\*



\*\*Versió:\*\* 1.0



\*\*Data:\*\* 8 de juliol de 2026



\---



\# 1. Propòsit



Aquest document defineix les normes, els principis i la metodologia que guiaran el desenvolupament de NutriCoach AI.



És la font principal de governança del projecte i preval sobre qualsevol decisió puntual. Tots els membres de l'equip, humans o agents d'intel·ligència artificial, han de conèixer-lo i respectar-lo abans de proposar canvis, escriure codi o modificar documentació.



\---



\# 2. Missió



Construir la millor plataforma de salut, nutrició i entrenament personal amb IA, centrada en la personalització, la confiança i l'adherència a llarg termini.



\---



\# 3. Valors



\## L'usuari al centre



Cada decisió s'ha de prendre pensant en el benefici real per a l'usuari.



\## Simplicitat



Preferim una funcionalitat excel·lent que cinc funcionalitats mediocres.



\## Qualitat



El producte ha de transmetre qualitat en tots els aspectes: codi, disseny, documentació i experiència d'usuari.



\## Escalabilitat



No optimitzarem prematurament, però evitarem decisions que dificultin el creixement futur.



\## Transparència



Les decisions importants han d'estar documentades.



\## Aprenentatge continu



El projecte evolucionarà constantment a partir del feedback dels usuaris i de les dades d'ús.



\---



\# 4. Principis del producte



Abans d'implementar qualsevol funcionalitat s'han de respondre aquestes preguntes:



\* Resol un problema real?

\* Aporta valor a l'usuari?

\* És coherent amb la visió del producte?

\* És intuïtiva?

\* Es pot mantenir fàcilment?

\* És escalable?

\* Millora algun dels Product Pillars?



Si alguna resposta és negativa, la funcionalitat s'ha de replantejar.



\---



\# 5. Product Pillars



\## 1. Personalització



El sistema s'ha d'adaptar a cada usuari.



No existeixen plans genèrics.



\---



\## 2. Acompanyament



L'aplicació ha de comportar-se com un coach personal.



No és un simple registre de dades.



\---



\## 3. Adherència



L'objectiu és ajudar l'usuari a mantenir hàbits saludables durant anys.



No només assolir un objectiu puntual.



\---



\## 4. Experiència Premium



La interfície, el rendiment i les interaccions han de transmetre confiança, rapidesa i qualitat.



\---



\## 5. Evolució Contínua



Cada ús ha de permetre millorar les recomanacions i el producte.



\---



\# 6. Principis tècnics



El projecte seguirà aquests principis:



\* API First.

\* Mobile First.

\* Arquitectura modular.

\* Clean Architecture quan aporti valor.

\* Seguretat des del disseny (\*Security by Design\*).

\* Observabilitat integrada.

\* Automatització sempre que sigui possible.

\* Documentació com a font de veritat.

\* Components reutilitzables.

\* Escalabilitat progressiva.



\---



\# 7. Normes de desenvolupament



Abans de començar una funcionalitat ha d'existir:



\* User Story.

\* Criteris d'acceptació.

\* Disseny funcional.

\* Impacte sobre la base de dades (si n'hi ha).

\* Revisió de dependències.



No s'ha d'escriure codi sense context funcional.



\---



\# 8. Documentation First



La documentació es crea abans que el codi.



L'ordre de treball serà sempre:



1\. Idea.

2\. Documentació.

3\. Revisió.

4\. Arquitectura.

5\. Implementació.

6\. Proves.

7\. Documentació final.



\---



\# 9. Definition of Ready



Una tasca està preparada per començar quan:



\* hi ha una User Story definida;

\* els criteris d'acceptació són clars;

\* les dependències estan identificades;

\* els riscos coneguts estan documentats;

\* el Product Manager l'ha prioritzat.



\---



\# 10. Definition of Done



Una funcionalitat només es considera acabada si:



\* compleix tots els criteris d'acceptació;

\* supera les proves definides;

\* no introdueix regressions conegudes;

\* està documentada;

\* s'han actualitzat els fitxers afectats;

\* s'han registrat les decisions importants mitjançant un ADR (si escau);

\* està preparada per desplegar-se.



\---



\# 11. Architecture Decision Records (ADR)



Qualsevol decisió tècnica rellevant ha de generar un ADR.



Exemples:



\* Canvi de base de dades.

\* Nou servei extern.

\* Modificació de l'arquitectura.

\* Canvi de framework.

\* Sistema d'autenticació.

\* Estratègia de desplegament.



Els ADR són obligatoris quan una decisió pot afectar el futur del projecte.



\---



\# 12. Gestió dels agents d'IA



Els agents no poden inventar requisits.



Abans de respondre han de revisar la documentació pertinent.



Si detecten contradiccions, han de:



1\. informar del conflicte;

2\. proposar alternatives;

3\. recomanar una decisió;

4\. crear un ADR si és necessari.



Els agents no poden modificar documents que no siguin de la seva responsabilitat sense justificació.



\---



\# 13. Qualitat



Abans de donar una tasca per finalitzada s'ha de validar:



\* funcionalitat;

\* experiència d'usuari;

\* rendiment;

\* seguretat;

\* accessibilitat;

\* mantenibilitat;

\* documentació.



\---



\# 14. Gestió del coneixement



Tota la informació rellevant ha de viure dins del repositori.



S'ha d'evitar que decisions importants quedin només en converses, correus o eines externes.



El repositori és la font única de coneixement del projecte.



\---



\# 15. Filosofia dels sprints



Els sprints han de generar increments de valor.



Cada sprint ha de tenir:



\* un objectiu clar;

\* funcionalitats independents;

\* criteris d'acceptació;

\* revisió final;

\* lliçons apreses.



No es considera un èxit escriure més codi, sinó aportar més valor.



\---



\# 16. Gestió del deute tècnic



El deute tècnic s'ha de registrar explícitament.



Cada incidència tècnica ha d'incloure:



\* descripció;

\* impacte;

\* risc;

\* prioritat;

\* proposta de resolució.



No es permet acumular deute tècnic sense visibilitat.



\---



\# 17. Criteris d'èxit



El projecte es considerarà ben encaminat si:



\* la documentació està sempre actualitzada;

\* qualsevol nou membre pot entendre el projecte ràpidament;

\* les decisions són traçables;

\* el codi és coherent amb la documentació;

\* els usuaris perceben una experiència de gran qualitat;

\* el producte evoluciona sense necessitat de grans refactors.



\---



\# 18. Principi final



\*\*Cada decisió ha de fer el producte més útil, més simple, més fiable i més preparat per al futur.\*\*



Quan hi hagi dubtes entre implementar una funcionalitat ràpidament o fer-la bé, es prioritzarà la solució que garanteixi la qualitat i la sostenibilitat del projecte.



