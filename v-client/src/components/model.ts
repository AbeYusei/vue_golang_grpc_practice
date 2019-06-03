type ClusterType = "CliPlugins" | "EssentialLinks" | "Ecosystem";
export type Clusters = { [cluster in ClusterType]: Cluster };

export interface Cluster {
  title: string;
  links: Link[];
}

export interface Link {
  href: string;
  value: string;
}
