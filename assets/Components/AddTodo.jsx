import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Form, Item, Input, Label } from 'native-base';

export default function AddTodo({ add_Todo }) {
    const [value, setValue] = useState('');
    const handleChange = (e) => {
        setValue(e)
    }

    return (
        <View style={styles.add_todo}>
            <Form>
                <Item floatingLabel>
                    <Label>add task....</Label>
                    <Input
                        style={{ color: '#fff' }}
                        value={value}
                        onChangeText={(e) => handleChange(e)}
                        returnKeyType='go'
                        maxLength={34}
                    />
                </Item>
            </Form>
            <TouchableOpacity onPress={() => add_Todo(value, setValue(''))} style={styles.btn}>
                <Text style={styles.btn_text}>Add</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    add_todo: {
        paddingHorizontal: 25,
        paddingBottom: 18,           
    },
    btn: {
        backgroundColor: 'coral',
        padding: 10,
        marginTop: 15,
        marginHorizontal: 20,        
    },
    btn_text: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 17,
    }
})