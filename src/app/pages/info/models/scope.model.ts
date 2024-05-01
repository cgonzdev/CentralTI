interface Leaders {
  name: string;
  email: string;
}

interface Services {
  name: string;
  description: string;
  details: string;
  enabled: boolean;
  icon: string;
}

export interface Scope {
  title: string;
  acronym: string;
  logo: string;
  owner: string;
  leaders: Leaders[];
  services: Services[];
}

export interface DockModel {
  label: string;
  icon: string;
  command: Function | any;
}
