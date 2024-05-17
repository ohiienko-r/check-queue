export type NavLinkPropTypes = {
  id: number;
  title: string;
  routName: string;
  isActive: boolean;
  onPress: (id: number) => void;
};
