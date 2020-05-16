import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { styles } from '../styles/styles';

export function DrawerContent(props) {
    return(
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View>
                            <Avatar.Image
                                source={require('../images/WildfireIcon.png')}
                                size={150}
                                style={{
                                    alignSelf: 'center',
                                    marginRight: 20,
                                    backgroundColor: 'white'
                                }}
                            />
                        </View>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            label="Home"
                            icon={({color, size}) => (
                                <Icon
                                    name="home-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem
                            label="Menu"
                            icon={({color, size}) => (
                                <Icon
                                    name="food"
                                    color={color}
                                    size={size}
                                />
                            )}
                            onPress={() => {props.navigation.navigate('Menu')}}
                        />
                        <DrawerItem
                            label="Location"
                            icon={({color, size}) => (
                                <Icon
                                    name="map-marker"
                                    color={color}
                                    size={size}
                                />
                            )}
                            onPress={() => {props.navigation.navigate('Location')}}
                        />
                        <DrawerItem
                            label="Contact"
                            icon={({color, size}) => (
                                <Icon
                                    name="email"
                                    color={color}
                                    size={size}
                                />
                            )}
                            onPress={() => {props.navigation.navigate('Contact')}}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    label="Sign Out"
                    icon={({color, size}) => (
                        <Icon
                            name="exit-to-app"
                            color={color}
                            size={size}
                        />
                    )}
                    onPress={() => {}}
                />
            </Drawer.Section>
        </View>
    );
}