import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Header from './Components/Header';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import AddTodo from './Components/AddTodo';
import { Input, Form, Item } from 'native-base';


export default class Main extends Component {
    state = {
        todos: [
            {
                title: 'aamir',
                edit: false,

            },
            {
                title: 'Pakistan',
                edit: false,
            },
            {
                title: 'Shafqat',
                edit: false,
            }
        ]
    }

    add_Todo = (value) => {
        let obj = { title: value }
        this.setState({
            todos: [...this.state.todos, obj],
        })
    }

    deleteTodos = (index) => {
        this.state.todos.splice(index, 1);
        this.setState({
            todos: this.state.todos
        })
    }

    edit_todos = (index, val) => {
        this.state.todos[index].edit = true;
        this.setState({
            todos: this.state.todos
        })
    }

    handle_editChange = (e, i) => {
        this.state.todos[i].title = e;
        this.setState({
            todos: this.state.todos
        })
    }

    update_todos = (i) => {
        this.state.todos[i].edit = false;
        this.setState({
            todos: this.state.todos
        })
    }
    render() {
        const { todos } = this.state;
        return (
            <View style={styles.container}>
                <StatusBar style="auto" />
                <Header />
                <AddTodo
                    add_Todo={this.add_Todo}
                />
                <ScrollView>
                    <View style={styles.content}>
                        <View style={styles.items}>
                            {todos.map((v, i) => {
                                return <View style={styles.withTextIcon}>
                                    {/* delete */}
                                    <TouchableOpacity onPress={() => this.deleteTodos(i)}>
                                        <MaterialIcons
                                            name='delete'
                                            color='#fff'
                                            size={22}
                                        />
                                    </TouchableOpacity>
                                    {/* edit */}
                                    {v.edit ? <TouchableOpacity style={{ marginLeft: 14 }} onPress={() => this.update_todos(i)}>
                                        <MaterialIcons
                                            name='done'
                                            color='#fff'
                                            size={22}
                                        />
                                    </TouchableOpacity>
                                        :
                                        <TouchableOpacity style={{ marginLeft: 14 }} onPress={() => this.edit_todos(i, v.title)}>
                                            <MaterialCommunityIcons
                                                name='circle-edit-outline'
                                                color='#fff'
                                                size={22}
                                            />
                                        </TouchableOpacity>
                                    }
                                    <Text key={i} style={styles.text}>
                                        {v.edit ? <Form>
                                            <Item>
                                                <Input
                                                    style={{ color: '#fff' }}
                                                    returnKeyType='go'
                                                    maxLength={30}
                                                    placeholder='write here'
                                                    onChangeText={(e) => this.handle_editChange(e, i)}
                                                />
                                            </Item>
                                        </Form>
                                            : v.title
                                        }
                                    </Text>
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
        textTransform: 'capitalize',        
    },

    content: {        
        alignItems:'center',        
    },
    items: {                
        width:330,        
        alignItems:'center',        
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
        borderStyle: 'dashed',
        flexWrap: 'wrap',        
        width:320,        
    },
});
