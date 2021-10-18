import { makeStyles } from "@material-ui/core";

export default makeStyles(() =>({
    banner: {
        maxWidth: "100%",
        display: "flex",
        alignItems: "center",
        paddingBottom: "100px",
        paddingTop: "150px",
    },
    brand: {
        display: "flex",
        alignItems: "center",
    },
    img: {
        maxWidth: "50%",
    },
    title: {
        flexGrow: 1,
        alignItems: 'center',
        fontSize: "50px",
        marginBottom: "20px",
        color: "#0000ff80",
    },
    shoppingbutton: {

        minWidth: '150px',
    },

}));