/**
 * @format
 */
import { AppRegistry, LogBox } from 'react-native'
import App from './src/App'
import { name as appName } from './app.json'

// Remove YellowBox on Debug application screen
LogBox.ignoreAllLogs(true)
AppRegistry.registerComponent(appName, () => App)
