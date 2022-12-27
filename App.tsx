import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "react-native-gesture-handler";
import useCachedResources from "./hooks/useCachedResources";
import Navigation from "./navigation";
import { useColorScheme } from "react-native";
import { LogBox } from "react-native";
export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  LogBox.ignoreLogs([
    "ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types'.",
    "NativeBase: The contrast ratio of",
    "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
  ]);
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
