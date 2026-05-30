/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
interface ImportMetaEnv {
    readonly CONTACT_FORM_TOKEN: string;
    readonly SCRIPT_API_URL: string;
    
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }