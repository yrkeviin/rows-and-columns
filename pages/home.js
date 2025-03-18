import { SafeAreaView } from 'react-native-web';
import { SafeAreaView, Text, StyleSheet, Dimensions, FlatList } from 'react-native';

import Header from '../components/Header';
import Card from '../components/Card';

export default function HomeScreen({ navigation }) {
    const professores = [
        { id: "1", name: "Kevin", role: "Professor" },
        { id: "2", name: "Lucas", role: "Professor" },
        { id: "3", name: "João", role: "Professor" },
        { id: "4", name: "Maria", role: "Professor" },
    ];

    const alunos = [
        { id: "1", name: "Pedro", role: "Aluno" },
        { id: "2", name: "Ana", role: "Aluno" },
        { id: "3", name: "Paula", role: "Aluno" },
        { id: "4", name: "Carlos", role: "Aluno" },
        { id: "5", name: "Mariana", role: "Aluno" },
        { id: "6", name: "José", role: "Aluno" },
        { id: "7", name: "Julia", role: "Aluno" },
        { id: "8", name: "Fernanda", role: "Aluno" },
        { id: "9", name: "Rafael", role: "Aluno" },
        { id: "10", name: "Miguel", role: "Aluno" },
    ];

    const screenWidth = Dimensions.get('window').width;
    const cardWidth = screenWidth / 2;

    return (
        <SafeAreaView>
            <Header />
                <Text style={styles.sectionTitle}>Professores</Text>
                <FlatList
                    style={styles.horizontalList}
                    data={professores}
                    horizontal={true}
                    showsHorizontalScrollIndicator={true}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={[styles.cardContainer, { width: cardWidth }]}>
                            <Card people={item} onPress={() => navigation.navigate("Details", { people: item })} />
                        </View>
                    )}
                />
            </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 20,
        textAlign: 'center',
    }
});