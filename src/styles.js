import './fonts.css';

const primaryColor = "#B0CE1C"
const primaryColorMuted = "#BED645"
const secondaryColor = "#7C3B29"
const secondaryColorMuted = "#874C3C"
const complementaryColor = "#F3CA40"
const complementaryColorMuted = "#E5AC08"

const styles = {
  button: {
    color: secondaryColor,
    margin: 15,
    backgroundColor: primaryColor
  },
  gardenTable: {
    marginLeft: 20
  },
  header: {
    alignContent: "center"
  },
  menu: {
    // backgroundColor: complementaryColor,
    padding: 10,
    alignContent: "center"
  },
  menuHeader: {
    color: secondaryColor,
    fontFamily: "'Copse', serif",
    fontSize: 54,
    // marginLeft: -1,
    marginTop: 15,
    textShadow:
		"-2px -2px 0" + primaryColor + ", 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"
  },
  menuImg: {
    height: 100,
    // marginLeft: 20,
    // marginRight: -1
  },
  modal: {
    width: "50%",
    minHeight: 500
  },
  modalHeader: {
    textAlign: "center"
  },
  modalImage: {
    margin: "auto",
    marginBottom: 10
  },
  modalContent: {
    textAlign: "left"
  },
  modalButton: {
    marginBottom: 20
  },
  moreButton: {
    backgroundColor: complementaryColorMuted
  },
  plantCard: {
    height: 550,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: primaryColor
  },
  plantCardImg: {
    maxHeight:200,
    margin: "auto",
    width:"100%",
    overflow: "hidden"
  },
  plantGrid: {
    marginHorizontal: 20
  },

  primaryColor: '#693B00',
  switchButton: {
    backgroundColor: primaryColor,
    marginBottom: 10
  }
}
;

export default styles;
