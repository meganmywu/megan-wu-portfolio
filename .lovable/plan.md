## Plan: Add Power Automate, Atlassian, and Kipu to Technical Skills

**File:** `src/pages/Skills.tsx`

Three edits to the `skills` object:

1. **EMR category rename + add Kipu** — change the `emr.label` from:
   ```
   "Electronic Medical Records (EMR)"
   ```
   to:
   ```
   "Electronic Health & Medical Records (EHR/EMR)"
   ```
   and add `{ name: "Kipu" }` to the `emr.skills` array (alongside Accuro EMR).

2. **Add Power Automate** to `toolsPlatforms.skills` (under "Tools & Platforms"):
   ```
   { name: "Power Automate" }
   ```

3. **Add Atlassian** to `toolsPlatforms.skills` as a single grouped badge:
   ```
   { name: "Atlassian (Jira & Confluence)" }
   ```

No new categories, no other sections changed.
