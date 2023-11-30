import * as React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Image from "next/image";
// import {
//   Button,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogTitle,
// } from "@material-ui/core";
import { windowElememt } from "../../../public/window_element";
import macbookIphone from "../../../public/vercel.svg";
import styles from "./windowsss.module.scss";

export interface IAppProps {
  open: boolean;
  day: number;
  month: number;
  winEl: windowElememt | undefined;
  handleClose: () => void;
}

export function Win(props: IAppProps) {
  function isStuff() {
    if (props.winEl) {
      if (
        props.winEl?.windowNumber > 0 &&
        props.winEl?.windowNumber < props.day &&
        props.month == 12
      ) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  return (
    <div></div>
    // <Dialog
    //   open={props.open}
    //   onClose={props.handleClose}
    //   aria-labelledby="scroll-dialog-title"
    //   aria-describedby="scroll-dialog-description"
    // >
    //   {isStuff() ? (
    //     <div>
    //       <DialogTitle id="scroll-dialog-title">
    //         <h1 className={styles.headings}>
    //           Türchen. {props.winEl?.windowNumber}
    //         </h1>
    //       </DialogTitle>
    //       <DialogContent>
    //         <Grid container spacing={2}>
    //           <Grid item xs={12} md={6}>
    //             <Image
    //               src={macbookIphone}
    //               alt="Description of the image"
    //               className={styles.imageS}
    //             />
    //           </Grid>

    //           {/* Second section */}
    //           <Grid item xs={12} md={6}>
    //             <h3 className={styles.headings}>Auflösung:</h3>
    //             {props.winEl?.solution}
    //           </Grid>

    //           {/* Third section */}
    //           <Grid item xs={12}>
    //             <h3 className={styles.headings}>
    //               Rätsel für den nächsten Tag:
    //             </h3>
    //             {props.winEl?.riddle}
    //           </Grid>
    //         </Grid>
    //       </DialogContent>
    //       <DialogActions>
    //         <Button onClick={props.handleClose}>Ok</Button>
    //       </DialogActions>
    //     </div>
    //   ) : (
    //     <div>
    //       <DialogTitle id="scroll-dialog-title">
    //         <h1 className={styles.headings}>Schade das war falsch.</h1>
    //       </DialogTitle>
    //       <DialogContent>
    //         <p>Probiere es mit einer anderen Antwort</p>
    //       </DialogContent>
    //       <DialogActions>
    //         <Button onClick={props.handleClose}>Ok</Button>
    //       </DialogActions>
    //     </div>
    //   )}
    // </Dialog>
  );
}
