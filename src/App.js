import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Transactions from "./Transactions";
import Header from "./Header";
import TXNS from './transactions.json'

const App = () => {
    const [data, setData] = useState();
    const [type, setType] = useState("all");

    const handleChange = (value) => {
        if (type != value) {
            setType(value);
        setData(TXNS.filter((data) => data.txnType == value));
        } else {
            setType("all");
        setData(TXNS);
        }
    }

    useEffect(() => {
        setData(TXNS);
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.frame}>
                <Header
                    transactionType={type}
                    handleChange={(value) => handleChange(value)}
                />
                <Transactions
                    transactions={data}
                />
            </View>
        </SafeAreaView>
    )
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#201f1f'
    },
    frame: {
        maxWidth: 500,
        flex: 1,
        justifyContent: 'center'
    }
})

