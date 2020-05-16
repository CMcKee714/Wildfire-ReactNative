import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: 'center',
  },
  title: {
    fontSize: 36,
    textAlign: "center",
    paddingBottom: 6,
    paddingTop: 6,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRadius: 100,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    paddingBottom: 22,
    paddingTop: 22,
    width: 360
  },
  normalImage: {
      width: 300,
      height: 'auto'
  },
  drawerContent: {
    flex: 1,
},
    userInfoSection: {
        paddingLeft: 20
    },
    // title: {
    //     fontSize: 16,
    //     marginTop: 3,
    //     fontWeight: 'bold'
    // },
    caption: {
        fontSize: 14,
        lineHeight: 14
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3
    },
    drawerSection: {
        marginTop: 15
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16
    },
    formInput: {
        padding: 8,
        margin: 1
    },
    button: {
        color: 'red'
    }
});
