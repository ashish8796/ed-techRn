import {Dimensions} from 'react-native';

const customStyles = {
  buttonStyle: {
    width: 311,
    height: 56,
    backgroundColor: '#E3562A',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 16,
    marginBottom: 16,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 18,
    fontFamily: 'Rubik-Medium',
  },

  skip: {
    buttonStyle: {
      marginLeft: 'auto',
      marginRight: 16,
      marginTop: 16,
      width: 45,
      height: 16,
    },

    textStyle: {
      fontFamily: 'Rubik-Medium',
      fontSize: 14,
      lineHeight: 16,
      fontWeight: '500',
      color: '#78746D',
    },
  },

  introContainer: {
    width: Dimensions.get('window').width,
    height: 446,
    alignItems: 'center',
  },
};

export {customStyles};
