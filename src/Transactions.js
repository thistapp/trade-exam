import React from 'react';
import TransactionItem from './TransactionItem';
import {FlatList, StyleSheet} from 'react-native';

const Transactions = ({transactions}) => {
    return (
        <FlatList
            data={transactions}
            initialNumToRender={100}
            renderItem={(item) =>
                <TransactionItem transaction={item} />
            }
            keyExtractor={(item) => item.id.toString()}
        />
    )
}

export default Transactions;

const styles = StyleSheet.create({})

