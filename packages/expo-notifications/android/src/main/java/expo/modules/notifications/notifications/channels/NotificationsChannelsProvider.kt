package expo.modules.notifications.notifications.channels

import expo.modules.notifications.notifications.channels.managers.NotificationsChannelGroupManager
import expo.modules.notifications.notifications.channels.managers.NotificationsChannelManager
import expo.modules.notifications.notifications.channels.serializers.NotificationsChannelGroupSerializer
import expo.modules.notifications.notifications.channels.serializers.NotificationsChannelSerializer

interface NotificationsChannelsProvider {
  val channelManager: NotificationsChannelManager
  val groupManager: NotificationsChannelGroupManager
  val channelSerializer: NotificationsChannelSerializer
  val groupSerializer: NotificationsChannelGroupSerializer
}