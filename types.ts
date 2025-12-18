export interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface NotificationState {
  visible: boolean;
  message: string;
  type: 'success' | 'error';
}