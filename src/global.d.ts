/* -- Vite `import.meta.env` Variables -- */
interface ImportMetaEnv {
  [key: string]: undefined;

  readonly VITE_VERSION: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

/* -- Helper Types -- */
interface OnlyChildrenProps {
  children?: ReactNode | undefined;
}
