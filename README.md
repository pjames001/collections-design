
  # Design CRM Dashboard Layout

  This is a code bundle for Design CRM Dashboard Layout. The original project is available at https://www.figma.com/design/HbwB3iXi8r3xDAKep2dLl4/Design-CRM-Dashboard-Layout.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.
  

  # Design and Layout Documentation and Notes

  - this app uses tailwindCSS classes for styling
  - this app uses typescript
  - this app uses react-router-dom for page navigations (refer to main.tsx file to view all routes)
  - this app uses lucid-react for icons
  - this app uses radix-ui for pop-ups and tabs navigation
  - pages directory contains all 5 pages
  - components/ui directory is a premade folder by radix-ui package, which will not be used in production
  - components/shared directory contains all components that are going to be used globally
  - files inside components folder are page by page made
  - all tables within this app should be unified through DynamicTable.tsx file (refer to /account-management page filter results at the bottom of the page for preview)
  - home page is in fact an existing account page
  - payments section in the DashboardHeader.tsx should have a rework
  - notes are unified through GlobalNotes.tsx (refer to home page for preview)
  - add reminders should match the functionality in current unity collect
  - inside client page within client details tab, there are fields that are labeled as (custom fields), these fields are for preview purposes only and will not be involved into production
  - /search page is missing search results