import React, { Component } from 'react';
import { View, Text, ScrollView, Image, Button, Picker } from "react-native";
import { Tile, Input, CheckBox } from 'react-native-elements';
import { styles } from '../styles/styles';
import { Checkbox } from 'react-native-paper';
import DatePicker from 'react-native-datepicker';

export class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            date: '',
            time: '',
            email: '',
            phoneNumber: '',
            guests: '',
            here: false,
            address: '',
            city: '',
            state: '',
        }
    }

    handleBook = () => {
        console.log(this.state);
        Alert.alert()
    }

    render() {        
        return (
            <ScrollView>
                <View style={{alignItems: 'center', padding: 20}}>
                    <Text style={{fontSize: 16}}>555 Heat Street Flavorville, PA 12345</Text>
                    <Text  style={{fontSize: 16}}>(920) 187-1887</Text>
                    <Text  style={{fontSize: 16}}>AllFiredUp@Wildfire.com</Text>
                </View>
                <View>
                    <Tile 
                        title="Catering and Reservations"
                        caption="We'd love to have you"
                        imageSrc={require('../images/people-toasting.jpg')}
                        featured
                        imageContainerStyle={{
                            opacity: .9
                        }}
                        height={150}
                    />
                    <View>
                        <Text style={{textAlign: 'center', padding: 10}}>Just say when and where</Text>
                    </View>
                    <View style={{alignItems: 'center'}}>
                            <DatePicker
                                style={{width: 200, margin: 10}}
                                date={this.state.date}
                                mode="date"
                                placeholder="Select Date"
                                format="YYYY-MM-DD"
                                minDate={new Date().toISOString()}
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 4,
                                    marginLeft: 0
                                },
                                dateInput: {
                                    marginLeft: 36
                                }
                                }}
                                onDateChange={(date) => {this.setState({date: date})}}
                            />
                            <DatePicker
                                style={{width: 200, margin: 10}}
                                date={this.state.time}
                                mode="time"
                                placeholder="Select Time"
                                format="YYYY-MM-DD"
                                minDate={new Date().toISOString()}
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 4,
                                    marginLeft: 0
                                },
                                dateInput: {
                                    marginLeft: 36
                                }
                                }}
                                onDateChange={(time) => {this.setState({time: time})}}
                            />
                        </View>
                    <View>
                        <Input
                            label="First Name"
                            onChangeText={(firstName) => this.setState({ firstName })}
                            value={this.state.firstName}
                            style={styles.formInput}
                        />
                        <Input
                            label="Last Name"
                            onChangeText={(lastName) => this.setState({ lastName })}
                            value={this.state.lastName}
                            style={styles.formInput}
                        />
                        <Input
                            label="Time"
                            onChangeText={(time) => this.setState({ time })}
                            value={this.state.time}
                            style={styles.formInput}
                        />
                        <Input
                            label="Number of Guests"
                            keyboardType='number-pad'
                            onChangeText={(guests) => this.setState({ guests })}
                            value={this.state.guests}
                        />
                        <Input
                            label="Email"
                            onChangeText={(email) => this.setState({ email })}
                            value={this.state.lastName}
                            style={styles.formInput}
                        />
                        <Input
                            label="Phone Number"
                            onChangeText={(phoneNumber) => this.setState({ phoneNumber })}
                            value={this.state.lastName}
                            style={styles.formInput}
                        />
                        <CheckBox 
                         center
                         title='Will you be dining at our location?'
                         checked={this.state.here}
                        />
                        <Text style={styles.center}>If not, let us know where to go.</Text>
                        <Input
                            label="Address"
                            onChangeText={(address) => this.setState({ address })}
                            value={this.state.address}
                            style={styles.formInput}
                        />
                        <Input
                            label="City"
                            onChangeText={(city) => this.setState({ city })}
                            value={this.state.city}
                            style={styles.formInput}
                        />
                        <Input
                            label="State"
                            onChangeText={(state) => this.setState({ state })}
                            value={this.state.state}
                            style={styles.formInput}
                        />
                        <Button
                            title="Book me"
                        />
                    </View>
                </View>
            </ScrollView>
        )
    }
}

export default Contact;