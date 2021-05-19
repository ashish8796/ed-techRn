import { Dimensions, TextStyle, ViewStyle } from 'react-native';

interface NestedStyles {
  skip: {
    buttonStyle: ViewStyle;
    textStyle: TextStyle;
  };

  loginSignUp: {
    container: ViewStyle;
  };

  topBar: {
    container: ViewStyle;
    title: TextStyle;
  };

  normalText: {
    title: TextStyle,
    body: TextStyle
  }


}

interface CustomStyles extends NestedStyles {
  buttonStyle: ViewStyle;
  buttonText: TextStyle;
  introContainer: ViewStyle;
  center: ViewStyle;
  screenWrapper: ViewStyle;

}


const customStyles: CustomStyles = {
  screenWrapper: {
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    alignItems: 'center',
  },

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
    width: Dimensions.get('screen').width,
    height: 446,
    alignItems: 'center',
  },

  loginSignUp: {
    container: {
      flex: 1,
      paddingHorizontal: 16,
      alignItems: 'center',
      backgroundColor: '#fff',
      position: 'relative',
      // borderColor: 'red',
      // borderWidth: 1,
    },
  },

  normalText: {
    title: {
      fontWeight: "500",
      fontFamily: "Rubik-Medium",
      color: "#3C3A36",
      textAlign: "center",
      fontSize: 20
    },

    body: {
      fontSize: 14,
      lineHeight: 21,
      fontFamily: "Rubik-Regular",
      fontWeight: "400",
      color: "#78746D"
    }
  },

  topBar: {
    container: {
      flexDirection: "row",
    },

    title: {
      fontSize: 24,
      fontWeight: "500",
      fontFamily: "Rubik-Medium",
      color: "#3C3A36",
      textAlign: "center",
      flex: 1,
      marginRight: 56,
      height: 32,
      // borderColor: "red",
      // borderWidth: 1
    }
  },

  center: {
    justifyContent: "center",
    alignItems: "center"
  }
};

export { customStyles };
