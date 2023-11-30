import * as React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import styles from "./window.module.scss";
import Link from "next/link";
import { windowElememt } from "../../public/window_element";

export interface IWindowProps {
  iconComponent: windowElememt;
  monthDay: number;
}

function Item(actuellDay: number, windowDay: number) {
  if (actuellDay > windowDay) {
    return <p>{`Opened at ${windowDay}. December`}</p>;
  } else {
    return null;
  }
}

export function WindowStuff(props: IWindowProps) {
  function isOpenedd() {
    if (
      props.iconComponent.windowNumber < props.monthDay &&
      props.iconComponent.windowNumber > 0
    ) {
      return true;
    } else {
      return false;
    }
  }

  const [opened, setOpened] = React.useState(isOpenedd());

  return (
    <Paper className={styles.windowPaper} elevation={3}>
      <div className={opened ? "" : ""}>
        <div className={styles.Icon}>{props.iconComponent.icon}</div>
      </div>
    </Paper>
  );
}
