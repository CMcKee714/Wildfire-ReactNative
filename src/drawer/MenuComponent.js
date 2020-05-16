import React, { Component } from 'react';
import { View, Text, ScrollView, Image, FlatList } from "react-native";
import { Card, ListItem, Button, Icon, Tile } from 'react-native-elements';
import { MENU } from '../data/menu';
import {styles} from '../styles/styles'

function RenderMenu({menu}) {
    return(
        <ScrollView>
            {menu.map( item => {
                return(
                    <Card 
                        title={item.name}
                        titleStyle={styles.title}
                    >
                        <Image source={item.image} style={{height: 250, width: 360, alignSelf: 'center'}} />
                        <Text style={{margin: 10, fontSize: 15, textAlign: 'center'}}>{item.description}</Text>
                        <View style={{ width: 200, height: 40, flexDirection: 'row' }}>
                            <Button title="Add to Order" icon={
                                <Icon 
                                    name="add"
                                    color="white"
                                    style={{marginRight: 4}}
                                />
                            } style={{margin: 10}} />
                            
                        </View>
                        <Text style={{alignSelf: 'flex-end'}}>{item.price}</Text>
                    </Card>
                )
            })}
        </ScrollView>
    )
}

export class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: MENU
        }
    }



    render() {
        return (
            <View>
                {/* <Text style={styles.title}>Entree</Text> */}
                <RenderMenu menu={this.state.menu} />
            </View>
        )
    }
}

export default Menu;
