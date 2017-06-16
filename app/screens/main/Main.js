import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, Image, Picker } from 'react-native';
import { connect } from 'react-redux';
import { skipLogin } from './../../state/auth/actions';

import SwipeCards from 'react-native-swipe-cards';

// import styles from './style';
import TouchableItem from 'react-navigation/src/views/TouchableItem';
import Video from 'react-native-video';


const Card = React.createClass({
    render() {
        return (
            <View style={styles.card}>
                {/* <Image style={styles.thumbnail} source={{uri: this.props.image}} />*/}
                <Text style={styles.text}>This is card {this.props.name}</Text>
            </View>
        );
    },
});

const NoMoreCards = React.createClass({
    render() {
        return (
            <View style={styles.noMoreCards}>
                <Text>No more cards</Text>
            </View>
        );
    },
});


const Cards = [
  { name: '1', image: 'https://media.giphy.com/media/GfXFVHUzjlbOg/giphy.gif' },
  { name: '2', image: 'https://media.giphy.com/media/irTuv1L1T34TC/giphy.gif' },
  { name: '3', image: 'https://media.giphy.com/media/LkLL0HJerdXMI/giphy.gif' },
  { name: '4', image: 'https://media.giphy.com/media/fFBmUMzFL5zRS/giphy.gif' },
  { name: '5', image: 'https://media.giphy.com/media/oDLDbBgf0dkis/giphy.gif' },
  { name: '6', image: 'https://media.giphy.com/media/7r4g8V2UkBUcw/giphy.gif' },
  { name: '7', image: 'https://media.giphy.com/media/K6Q7ZCdLy8pCE/giphy.gif' },
  { name: '8', image: 'https://media.giphy.com/media/hEwST9KM0UGti/giphy.gif' },
  { name: '9', image: 'https://media.giphy.com/media/3oEduJbDtIuA2VrtS0/giphy.gif' },
];

class Main extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cards: Cards,
            outOfCards: false,
        };
    }


    render() {
        return (
            <View>

                <Picker
                  selectedValue={this.state.language}
                  onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}
                >
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>

                <SwipeCards
                  cards={this.state.cards}

                  renderCard={cardData => <Card {...cardData} />}
                  renderNoMoreCards={() => <NoMoreCards />}

                  handleYup={this.handleYup}
                  handleNope={this.handleNope}
                  handleMaybe={this.handleMaybe}
                  hasMaybeAction
                />

                <Button title="Notify" onPress={console.log('clicked')} />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    card: {
        marginTop: 100,
        marginBottom: 100,
        width: 300,
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        overflow: 'hidden',
        borderColor: 'grey',
        backgroundColor: 'white',
        borderWidth: 1,
        elevation: 1,
    },
    thumbnail: {
        flex: 1,
        width: 300,
        height: 300,
    },
    text: {
        fontSize: 20,
        paddingTop: 10,
        paddingBottom: 10,
    },
    noMoreCards: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});


const mapDispatchToProps = {
    skipLogin,
};

export default connect(null, mapDispatchToProps)(Main);
