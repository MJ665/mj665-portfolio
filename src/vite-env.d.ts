/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly CONTACT_FORM_SCRIPT_URL: string
  // add other env variables here if needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
