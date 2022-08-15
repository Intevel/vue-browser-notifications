import { defu } from 'defu'
import { NotificationOptions } from './types'

export const useTestComposable = (requestOnNotify: boolean, composableOptions?: NotificationOptions) => {
  if (window.Notification) {
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
}
