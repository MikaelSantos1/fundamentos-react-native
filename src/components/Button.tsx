
import React from 'react'
import{TouchableOpacity, TouchableOpacityProps,Text,StyleSheet} from 'react-native'

interface ButtonProps extends TouchableOpacityProps{
    title:string
}

export function Button({onPress,title}:ButtonProps){
    return(
    <TouchableOpacity 
    style={styles.button} 
    activeOpacity={0.7} 
     onPress={onPress}
    >
        <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        marginTop: 20,
        backgroundColor: '#A370F7',
        padding: 15,
        borderRadius: 7,
        alignItems: "center"
    },
    buttonText: {
        color: '#FFF',
        fontSize: 17,
        fontWeight: 'bold'
    },
    
})