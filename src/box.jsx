import React, { Component } from 'react'
import Avatar from "@material-ui/core/Avatar";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
      height: "100px",
      width: "100px",
    },
    icon: {
        height: "80px",
      width: "80px",
    },
    uiForm: {
        height: "auto",
        textAlign: "center",
        marginTop: "30px"
    },
    field: {
        marginBottom: "15px",
    },
    inputfield: {
        padding: "10px",
        fontSize: "15px",
        background: "transparent",
        border: "0px",
        borderBottom: "2px solid black",
        fontWeight:"bold",
        borderRadius: "8px",
    boxShadow: "1px 2px 20px rgba(169,198,217,0.29457423) ",
    "&:hover": {
        background: "rgba(169,198,217,0.36457423) "
      }
    },
    sbutton: {
        margin: "20px",
        width: "60%",
        fontSize: "20px",
        padding: "15px",
        backgroundColor: "rgba(0,0,0,0.2)",
        border: "none",
        borderRadius: "10px"
    }

});
export class Box extends Component {
    
    dosignup = e => {
        alert("Congratulation, You are Successfully Signed up!");
        }
    render() {
        const { classes } = this.props; 
    return (
        <>
        <div className="App"></div>
        <div class="ui-div">
            <Avatar className={classes.avatar}>
            <PeopleAltIcon className={classes.icon}/>
            </Avatar>
            <form className={classes.uiForm} onSubmit={() => this.doSignup}>
            <div className={classes.field}>
    <input type="text" name="fname" placeholder="Name" className={classes.inputfield}/>
  </div>
            <div className={classes.field}>
    <input type="text" name="eId" placeholder="EmployeeID" className={classes.inputfield}/>
  </div>
  <div className={classes.field}>
    <input type="text" name="e-mail" placeholder="E-Mail" className={classes.inputfield}/>
  </div>
  <div className={classes.field}>
    <input type="password" name="password" placeholder="Password" className={classes.inputfield}/>
  </div>
  <div className={classes.field}>
    <input type="password" name="confirm-password" placeholder="ConfirmPassword" className={classes.inputfield}/>
  </div>
  <button type= "submit" onClick={this.dosignup} className={classes.sbutton}>
    Sign Up
  </button>
            </form>
        </div>
        </>
    )
  }
    }

export default withStyles(styles)(Box);