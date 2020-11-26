import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Header from './Components/Header';
import { Form, Item, Input, Label } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

export default class Main extends Component {
    state = {
        todos: [
            {
                title: 'ali',
                edit: false,

            },
            {
                title: 'India',
                edit: false,
            },
            {
                title: 'Shafqat mehmood',
                edit: false,
            },
        ],
        value: ''
    }
    handleChange = (e) => {
        this.setState({
            value: e
        })
    }

    add_Todo = () => {
        let obj = { title: this.state.value }
        this.setState({
            todos: [...this.state.todos, obj],
            value: ''
        })
    }

    deleteTodos = (index) => {
        this.state.todos.splice(index, 1);
        this.setState({
            todos: this.state.todos
        })
    }

    render() {
        const { value, todos } = this.state;
        return (
            <View style={styles.container}>
                <StatusBar style="auto" />
                <Header />
                <View style={styles.add_todo}>
                    <Form>
                        <Item floatingLabel>
                            <Label>add task....</Label>
                            <Input
                                style={{ color: '#fff' }}
                                value={value}
                                onChangeText={(e) => this.handleChange(e)}
                            />
                        </Item>
                    </Form>
                    <TouchableOpacity onPress={this.add_Todo} style={styles.btn}>
                        <Text style={styles.btn_text}>Add</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView>
                    <View style={styles.content}>
                        <View style={styles.items}>
                            {todos.map((v, i) => {
                                return <View style={styles.withTextIcon}>
                                    <TouchableOpacity onPress={() => this.deleteTodos(i)}>
                                        <MaterialIcons
                                            name='delete'
                                            color='#fff'
                                            size={22}
                                        />
                                    </TouchableOpacity>
                                    <Text key={i} style={styles.text}>{v.title}</Text>
                                </View>
                            })}
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(24,24,24)',
        color: '#fff',
    },

    text: {
        color: "#fff",
        fontSize: 15,
        marginLeft: 15,
        textTransform: 'capitalize'
    },

    content: {
        paddingLeft: 50,
        paddingRight: 50
    },

    items: {
    },

    withTextIcon: {
        flexDirection: 'row',
        marginTop: 17,
        padding: 10,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'pink',
        borderRadius: 10,
        borderStyle: 'dashed'
    },
    add_todo: {
        paddingHorizontal: 30,
        paddingBottom: 18
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
});
