import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0CF69',
  },
  header: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginTop: 10,
    marginBottom: 10,
    color: '#fff',
  },
  titleText: {
    fontSize: 18,
    fontWeight: '400',
    color: '#fff',
  },
  image: {
    position: 'absolute',
    width: '90%',
    height: '100%',
    marginVertical: 50,
  },
  button: {
    bottom: 30,
    right: 10,
    borderRadius: 30,
    overflow: 'hidden',
    borderWidth: 4,
    borderColor: 'rgba(255, 255, 255, 0.4)',
  },

  icon: {
    margin: 5,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  skipText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 24,
    marginHorizontal: 24,
    marginBottom: 40,
    marginLeft: 10,
  },
  dotsContainer: {
    flexDirection: 'row',
    marginRight: 15,
    marginBottom: 15,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    marginHorizontal: 4,
  },
});

export default styles;