\# TECH STACK



\*\*Projecte:\*\* NutriCoach AI



\*\*Versió:\*\* 1.0



\---



\# Objectiu



Aquest document defineix les tecnologies oficials del projecte.



Qualsevol canvi haurà d'estar justificat mitjançant un Architecture Decision Record (ADR).



Les tecnologies s'han seleccionat prioritzant:



\* escalabilitat;

\* mantenibilitat;

\* experiència de desenvolupament;

\* cost reduït per a l'MVP;

\* facilitat per créixer fins a producció.



\---



\# Arquitectura general



El projecte seguirà una arquitectura \*\*Monorepo\*\*.



\## Estructura prevista



```text

apps/

&#x20;   web/

&#x20;   mobile/



packages/

&#x20;   ui/

&#x20;   types/

&#x20;   config/

&#x20;   utils/

&#x20;   ai/

&#x20;   database/



docs/



infrastructure/

```



L'objectiu és compartir el màxim de codi possible entre plataformes.



\---



\# Frontend Web



\## Framework



Next.js



\### Motius



\* excel·lent ecosistema;

\* gran rendiment;

\* SEO;

\* React Server Components;

\* fàcil desplegament;

\* molt suport comunitari.



\---



\# Aplicació mòbil



\## Framework



Expo + React Native



\### Motius



\* un únic codi per Android i iOS;

\* desplegament ràpid;

\* OTA Updates;

\* gran ecosistema;

\* perfecta integració amb React.



\---



\# Backend



La primera versió utilitzarà Supabase.



Inclourà:



\* Authentication

\* PostgreSQL

\* Storage

\* Realtime

\* Edge Functions



\### Motius



\* enorme velocitat de desenvolupament;

\* molt baix cost inicial;

\* arquitectura preparada per escalar.



\---



\# Base de dades



PostgreSQL.



No es contempla una base de dades NoSQL com a principal.



Els motius són:



\* integritat de dades;

\* relacions complexes;

\* rendiment;

\* flexibilitat.



\---



\# ORM



Drizzle ORM.



Es prioritza:



\* SQL explícit;

\* tipat complet;

\* migracions controlades;

\* molt bon rendiment.



\---



\# Sistema d'autenticació



Supabase Auth.



Suport previst:



\* email/password;

\* Google;

\* Apple;

\* autenticació màgica (Magic Link).



\---



\# Gestió de fitxers



Supabase Storage.



Inicialment:



\* fotografies dels usuaris;

\* imatges de receptes;

\* imatges dels exercicis.



\---



\# IA



L'aplicació NO dependrà directament d'un únic proveïdor.



Es crearà una capa d'abstracció (`AIProvider`) que encapsuli:



\* generació de respostes;

\* embeddings;

\* memòria;

\* eines;

\* selecció del model.



Això permetrà substituir o combinar proveïdors sense afectar la resta del sistema.



\---



\# Estat de l'aplicació



\## Estat remot



TanStack Query.



\## Estat local



Zustand.



Aquesta separació evita complexitat innecessària.



\---



\# Validació



React Hook Form + Zod.



Es busca:



\* formularis consistents;

\* validació compartida;

\* tipat complet.



\---



\# Components UI



Tailwind CSS.



shadcn/ui.



Els components es construiran sobre aquesta base, evitant dependències difícils de personalitzar.



\---



\# Sistema de disseny



Es crearà un Design System propi.



Objectius:



\* coherència;

\* reutilització;

\* accessibilitat;

\* consistència visual.



\---



\# Testing



\## Unitari



Vitest.



\## Integració



Testing Library.



\## End-to-End



Playwright.



\---



\# Analítica



PostHog.



Es registrarà:



\* onboarding;

\* ús del coach;

\* entrenaments;

\* nutrició;

\* retenció;

\* conversió.



No es recolliran dades personals innecessàries.



\---



\# Monitoratge



Sentry.



Es registraran:



\* errors;

\* excepcions;

\* traces;

\* rendiment.



\---



\# CI/CD



GitHub Actions.



Automatitzarà:



\* proves;

\* qualitat del codi;

\* desplegaments;

\* validacions.



\---



\# Hosting



\## Web



Vercel.



\## Backend



Supabase.



\---



\# Convencions



TypeScript serà obligatori.



No s'acceptarà JavaScript nou al projecte.



Tot el codi haurà d'estar tipat.



\---



\# Dependències



S'intentarà minimitzar el nombre de llibreries.



Abans d'afegir-ne una de nova s'haurà de justificar:



\* necessitat;

\* manteniment;

\* llicència;

\* mida;

\* alternatives.



\---



\# Seguretat



S'aplicaran els principis de:



\* Security by Design;

\* Least Privilege;

\* Secret Management;

\* Input Validation;

\* Output Encoding.



Cap secret podrà estar versionat al repositori.



\---



\# Escalabilitat



L'arquitectura ha de permetre:



\* múltiples models d'IA;

\* múltiples idiomes;

\* múltiples plataformes;

\* nous mòduls;

\* creixement de la base d'usuaris sense redisseny.



\---



\# Criteris per modificar el stack



Només es considerarà un canvi tecnològic quan:



\* resolgui un problema real;

\* aporti una millora clara;

\* redueixi el cost de manteniment;

\* estigui documentat amb un ADR;

\* no comprometi l'estabilitat del projecte.



