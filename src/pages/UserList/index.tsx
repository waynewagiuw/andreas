import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import Box from '../../components/Box';

const UserList: React.FC = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={{ marginHorizontal: 25, marginVertical: 10 }}>
                <Text style={{ fontSize: 40, fontWeight: 'bold', color: 'black', marginTop: 15 }}>Users List</Text>
                <Box/>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    
})

export default UserList
