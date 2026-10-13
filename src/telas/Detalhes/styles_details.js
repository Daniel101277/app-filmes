import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#101014',
    },

    imagemFundo: {
        width: '100%',
        height: 280,
        resizeMode: 'cover',
        opacity: 0.65,
    },

    conteudo: {
        padding: 20,
        marginTop: -50,
    },

    capa: {
        width: 150,
        height: 210,
        borderRadius: 12,
        marginBottom: 20,
        borderWidth: 2,
        borderColor: '#292929',
        resizeMode: 'cover',
    },

    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 10,
    },

    categoria: {
        fontSize: 14,
        color: '#e50914',
        marginBottom: 25,
    },

    subtitulo: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 12,
    },

    descricao: {
        fontSize: 16,
        color: '#c4c4c4',
        lineHeight: 25,
        marginBottom: 30,
    }
});

export default styles;