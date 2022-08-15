export interface NotificationOptions {
  body?: string;
  icon?: string;
  image?: string;
  lang?: string;
  badge?: string;
  data?: any;
  vibtrate?: any;
  renotify?: boolean;
  requireInteraction?: boolean;
  actions?: Array<{ action: string; title: string; icon: string }>;
  silent?: boolean;
}
