\# ARCHITECTURE



\*\*Projecte:\*\* NutriCoach AI



\*\*Versió:\*\* 1.0



\*\*Data:\*\* 8 de juliol de 2026



\---



\# Objectiu



Aquest document descriu l'arquitectura funcional del sistema.



No defineix implementacions concretes, sinó els components principals, les seves responsabilitats i les relacions entre ells.



L'arquitectura ha de ser modular, escalable i preparada perquè el producte pugui evolucionar sense grans refactors.



\---



\# Principis arquitectònics



L'arquitectura seguirà aquests principis:



\* Modularitat

\* Separació de responsabilitats

\* API First

\* Mobile First

\* Escalabilitat progressiva

\* Seguretat des del disseny

\* Observabilitat

\* Reutilització de codi

\* IA desacoblada del domini de negoci



\---



\# Visió general



El sistema estarà format pels següents blocs principals:



1\. Aplicació Web

2\. Aplicació Mobile

3\. Backend

4\. Base de dades

5\. Sistema IA

6\. Sistema Social

7\. Sistema de Gamificació

8\. Sistema de Notificacions

9\. Analytics

10\. Monitoratge



Cada component haurà de poder evolucionar independentment.



\---



\# Aplicacions client



\## Web



Destinada a:



\* administració completa;

\* seguiment;

\* nutrició;

\* entrenaments;

\* calendari;

\* component social.



\---



\## Mobile



L'aplicació principal per a l'usuari.



Ha de permetre:



\* registrar entrenaments;

\* registrar àpats;

\* consultar el coach;

\* veure el calendari;

\* rebre notificacions;

\* seguir el progrés.



La majoria de les interaccions diàries es faran des del mòbil.



\---



\# Backend



El backend actuarà com a capa d'orquestració.



Responsabilitats:



\* autenticació;

\* autorització;

\* persistència;

\* regles de negoci;

\* integració amb IA;

\* gestió social;

\* notificacions;

\* analítica.



Cap regla de negoci crítica residirà exclusivament al client.



\---



\# Base de dades



La base de dades serà el centre del sistema.



Principals dominis:



\* Usuaris

\* Perfils

\* Objectius

\* Hàbits

\* Nutrició

\* Entrenaments

\* Exercicis

\* Calendari

\* Coach IA

\* Converses

\* Gamificació

\* Component Social

\* Notificacions



Cada domini haurà d'estar desacoblat dels altres tant com sigui possible.



\---



\# Motor d'IA



El sistema d'IA serà un servei independent.



Responsabilitats:



\* generar respostes;

\* personalitzar recomanacions;

\* adaptar entrenaments;

\* adaptar nutrició;

\* generar objectius;

\* resumir informació;

\* recordar context.



No accedirà directament a la base de dades; sempre ho farà a través d'una capa de serveis.



\---



\# Memòria del coach



La memòria es dividirà en:



\## Perfil permanent



\* dades personals;

\* objectius;

\* preferències;

\* lesions;

\* alimentació.



\---



\## Context de treball



Informació necessària per respondre en aquell moment.



\---



\## Historial



Converses.



Plans.



Canvis.



Feedback.



\---



\## Memòria resumida



Resums periòdics que permetin mantenir context a llarg termini sense reutilitzar totes les converses.



\---



\# Sistema de nutrició



Responsabilitats:



\* plans alimentaris;

\* receptes;

\* calories;

\* macronutrients;

\* micronutrients;

\* aigua;

\* suplements;

\* llista de la compra.



En el futur podrà incorporar reconeixement d'imatges.



\---



\# Sistema d'entrenament



Responsabilitats:



\* rutines;

\* exercicis;

\* progrés;

\* càrregues;

\* historial;

\* adaptació automàtica.



\---



\# Sistema de calendari



El calendari serà el centre de navegació.



Integrarà:



\* entrenaments;

\* àpats;

\* objectius;

\* pes;

\* hàbits;

\* recordatoris;

\* esdeveniments.



\---



\# Sistema social



Responsabilitats:



\* seguiment d'usuaris;

\* publicacions;

\* comentaris;

\* reaccions;

\* reptes;

\* grups.



El sistema social serà opcional per a cada usuari.



La privacitat tindrà prioritat.



\---



\# Gamificació



Mòduls:



\* XP;

\* nivells;

\* insígnies;

\* ratxes;

\* reptes;

\* assoliments;

\* recompenses.



La gamificació reforçarà els hàbits, no la competició.



\---



\# Sistema de notificacions



Notificacions:



\* push;

\* correu electrònic;

\* recordatoris;

\* assoliments;

\* objectius;

\* seguiment del coach.



Sempre configurables per l'usuari.



\---



\# Analytics



L'aplicació registrarà esdeveniments de producte per entendre:



\* ús de funcionalitats;

\* retenció;

\* abandonament;

\* onboarding;

\* eficàcia del coach.



Les dades es recolliran respectant la privacitat dels usuaris.



\---



\# Monitoratge



El sistema registrarà:



\* errors;

\* rendiment;

\* excepcions;

\* disponibilitat;

\* ús dels serveis.



\---



\# Seguretat



Principis:



\* autenticació obligatòria;

\* autorització basada en rols;

\* xifratge en trànsit;

\* xifratge en repòs quan sigui necessari;

\* validació de totes les entrades;

\* registre d'accions sensibles.



\---



\# Escalabilitat



L'arquitectura haurà de permetre incorporar fàcilment:



\* nous models d'IA;

\* nous dispositius;

\* wearables;

\* integracions externes;

\* nous idiomes;

\* nous mercats.



Cap component crític haurà de dependre d'un únic proveïdor si es pot evitar.



\---



\# Evolució



L'arquitectura està pensada perquè cada mòdul pugui evolucionar de manera independent.



L'objectiu és evitar refactors globals quan el producte creixi.



Qualsevol canvi arquitectònic rellevant haurà d'estar documentat mitjançant un ADR.



