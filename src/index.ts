import { defu } from 'defu'
import { NotificationOptions } from './types'

export function useNotifications (requestOnNotify: boolean, composableOptions?: NotificationOptions) {
  if (!window.Notification) {
    throw new Error('This Browser doesnt support Notifications')
  }

  const requestPermission = () => {
    window.Notification.requestPermission()
  }

  const sendNotification = (title: string, options?: NotificationOptions) => {
    if (requestOnNotify && Notification.permission !== 'granted') {
      return requestPermission()
    }
    const n = new Notification(title, defu(options, composableOptions))
    return n
  }

  const closeNotification = (n: Notification) => {
    n.close()
  }
  return { requestPermission, sendNotification, closeNotification }
}
