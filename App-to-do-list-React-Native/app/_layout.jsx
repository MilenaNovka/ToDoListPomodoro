import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import 'react-native-reanimated'

export default function RootLayout(){
    const {loaded} = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-regular.ttf'),
    });

    if(!loaded){
        return null;
    }

    return(
        //todas as rotas precisam estar aqui
        <Stack>
            <Stack.Screen name="index" option={{headerShown: false}}/>
            <Stack.Screen name="add" option={{headerShown: false}}/>
            <Stack.Screen name="edit" option={{headerShown: false}}/>
            <Stack.Screen name="pomodoroTimer" option={{headerShown: false}}/>
            <Stack.Screen name="+not-found" option={{headerShown: false}}/>
        </Stack>
    )
}