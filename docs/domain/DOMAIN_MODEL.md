\# DOMAIN MODEL



\*\*Projecte:\*\* NutriCoach AI



\*\*Versió:\*\* 1.0



\---



\# Objectiu



Aquest document defineix el domini funcional de NutriCoach AI.



No descriu la implementació tècnica ni l'estructura de la base de dades.



Descriu els conceptes principals del negoci, les seves responsabilitats i les relacions entre ells.



És la base sobre la qual es construiran la base de dades, les APIs, la lògica de negoci, el coach d'IA i la interfície d'usuari.



\---



\# Principis



El model de domini ha de complir:



\* Un llenguatge únic i compartit.

\* Responsabilitats clares.

\* Baix acoblament entre dominis.

\* Alta cohesió interna.

\* Evolució independent dels mòduls.



\---



\# Dominis principals



\## 1. User



Representa una persona registrada a la plataforma.



Responsabilitats:



\* autenticació

\* preferències

\* configuració

\* privacitat

\* permisos



No conté informació esportiva ni nutricional.



\---



\## 2. Profile



Conté tota la informació personal necessària per personalitzar l'experiència.



Exemples:



\* edat

\* pes

\* alçada

\* sexe

\* lesions

\* malalties

\* nivell físic

\* objectius

\* material disponible

\* horaris

\* hàbits



Aquest domini serà utilitzat pel Coach IA.



\---



\## 3. Goals



Gestiona els objectius de l'usuari.



Exemples:



\* perdre pes

\* guanyar massa muscular

\* preparar una cursa

\* augmentar força

\* millorar salut



Cada objectiu tindrà:



\* data d'inici

\* data prevista

\* estat

\* progrés

\* mètriques



\---



\## 4. Nutrition



Gestiona tot allò relacionat amb l'alimentació.



Inclou:



\* dietes

\* àpats

\* receptes

\* calories

\* macros

\* micronutrients

\* hidratació

\* suplements



\---



\## 5. Workout



Gestiona els entrenaments.



Inclou:



\* rutines

\* sessions

\* exercicis

\* sèries

\* repeticions

\* càrrega

\* descans



\---



\## 6. Exercise Library



Catàleg central d'exercicis.



Cada exercici conté:



\* nom

\* descripció

\* vídeo

\* músculs implicats

\* equipament

\* dificultat



És una biblioteca reutilitzable.



\---



\## 7. Calendar



Representa la planificació temporal.



Pot contenir:



\* entrenaments

\* menjars

\* objectius

\* pes

\* recordatoris

\* cites

\* hàbits



És el punt central de navegació de l'usuari.



\---



\## 8. AI Coach



És el cervell del sistema.



Responsabilitats:



\* comprendre l'usuari

\* respondre preguntes

\* generar plans

\* adaptar recomanacions

\* detectar problemes

\* motivar

\* resumir informació



No emmagatzema dades permanents.



Utilitza la resta de dominis.



\---



\## 9. AI Memory



Gestiona la memòria del coach.



Es divideix en:



\* perfil permanent

\* context actiu

\* memòria resumida

\* historial



\---



\## 10. Progress



Centralitza totes les mètriques.



Exemples:



\* pes

\* força

\* mesures corporals

\* fotos

\* percentatge de greix

\* adherència

\* activitat



\---



\## 11. Habits



Gestiona hàbits.



Exemples:



\* dormir

\* caminar

\* meditar

\* hidratar-se

\* entrenar



Els hàbits podran generar recordatoris i objectius.



\---



\## 12. Gamification



Gestiona:



\* XP

\* nivells

\* insígnies

\* assoliments

\* ratxes

\* recompenses



\---



\## 13. Social



Gestiona:



\* amistats

\* seguiment

\* grups

\* reptes

\* comentaris

\* reaccions

\* publicacions



És completament desacoblat del domini principal.



\---



\## 14. Notifications



Gestiona:



\* push

\* email

\* recordatoris

\* alertes

\* assoliments



\---



\## 15. Subscription



Gestiona:



\* pla gratuït

\* plans premium

\* permisos

\* límits



No afecta la lògica principal del producte.



\---



\# Relacions entre dominis



User



↓



Profile



↓



Goals



↓



Nutrition



↓



Workout



↓



Calendar



↓



Progress



↓



AI Coach



El Coach consulta tots aquests dominis però no n'és propietari.



\---



\# Regles



Cap domini ha de dependre directament d'un altre si es pot evitar.



La comunicació es farà mitjançant serveis o casos d'ús.



\---



\# Evolució



Els dominis han de poder créixer independentment.



Exemple:



El sistema Social pot evolucionar sense afectar Nutrition.



El sistema Nutrition pot evolucionar sense afectar Workout.



\---



\# Futurs dominis



Es reserva espai per incorporar:



\* Wearables

\* IA multimodal

\* Marketplace

\* Professionals

\* Telemedicina

\* Integracions externes

\* Empreses

\* API pública



