export interface DocsOption {
  title: string;
  options: string[];
}

export interface DocsSidebarProps {
  className?: string;
  onOptionSelect?: (option: string) => void;
}
