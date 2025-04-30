import React from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';

const LoginScreen = () => {
    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView
                    contentContainerStyle={styles.container}
                    keyboardShouldPersistTaps='handled'
                >
                    <Text style={styles.title}>Log in</Text>

                    <TextInput
                        style={styles.input}
                        placeholder='Email'
                        keyboardType='email-address'
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Password'
                        secureTextEntry
                    />

                    {/* Let's fill the screen with different components as per the challenge */}
                    <Text style={styles.extraText}>Additional information or explanations</Text>
                    <View style={styles.box} />
                    <View style={styles.box} />
                    <View style={styles.box} />

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Log In</Text>
                    </TouchableOpacity>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 24,
        paddingBottom: 40,
        backgroundColor: '#f2f2f2',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 32,
        textAlign: 'center',
    },
    input: {
        height: 48,
        backgroundColor: 'white',
        borderRadius: 8,
        paddingHorizontal: 16,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    extraText: {
        fontSize: 16,
        marginVertical: 16,
    },
    box: {
        height: 100,
        backgroundColor: '#ddd',
        borderRadius: 10,
        marginBottom: 12,
    },
    button: {
        backgroundColor: '#007aff',
        paddingVertical: 14,
        borderRadius: 8,
        marginTop: 24,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: '600',
    },
});


export default LoginScreen;
