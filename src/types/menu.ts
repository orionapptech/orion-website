export type Menu = {
  id: number;
  title: string;
  path?: string;
  newTab: boolean;
  submenu?: Menu[];
  megaMenu?: boolean; // Flag for mega menu with nested submenus
};
