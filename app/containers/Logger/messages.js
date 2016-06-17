import { defineMessages } from 'react-intl'

export default defineMessages({
  noConnected: {
    id: 'hyperfox.containers.Logger.Notification.noconnected.message',
    defaultMessage: 'Could not connect to the Hyperfox API. Seems like hyperfox is not running on your local box.'
  },
  noData: {
    id: 'hyperfox.containers.Logger.Notification.nodata.message',
    defaultMessage: 'No data to show yet.'
  }
})
