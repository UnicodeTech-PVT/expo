import { AndroidSplashConfig } from '@expo/prebuild-config/build/plugins/unversioned/expo-splash-screen/getAndroidSplashConfig';
import { IOSSplashConfig } from '@expo/prebuild-config/build/plugins/unversioned/expo-splash-screen/getIosSplashConfig';
import { ConfigPlugin } from 'expo/config-plugins';
type PluginConfig = {
    backgroundColor: string;
    logoWidth: number;
    image?: string | null;
    android: AndroidSplashConfig;
    ios: IOSSplashConfig;
};
declare const _default: ConfigPlugin<PluginConfig>;
export default _default;