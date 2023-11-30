"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import styles from "./grid.module.scss";
import { WindowStuff } from "./window";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import { AcUnit } from "@mui/icons-material";
import { windowElememt } from "../../public/window_element";
import AssignmentReturn from "@mui/icons-material/AssignmentReturn";
import { AssuredWorkload } from "@mui/icons-material";

import { Map } from "@mui/icons-material";
import { LooksOne } from "@mui/icons-material";
import { Favorite } from "@mui/icons-material";
import { AccessTime } from "@mui/icons-material";
import { Anchor } from "@mui/icons-material";
import { Circle } from "@mui/icons-material";
import { DryCleaning } from "@mui/icons-material";
import { ChatBubble } from "@mui/icons-material";
import { SmokingRooms } from "@mui/icons-material";
import { Cloud } from "@mui/icons-material";
import { TableRestaurant } from "@mui/icons-material";
import { PhotoSizeSelectActual } from "@mui/icons-material";
import { AirplanemodeActive } from "@mui/icons-material";
import { DirectionsCarFilled } from "@mui/icons-material";
import { Tv } from "@mui/icons-material";
import { WbSunny } from "@mui/icons-material";
import { LaptopChromebook } from "@mui/icons-material";
import { Google } from "@mui/icons-material";
import { SentimentSatisfied } from "@mui/icons-material";
import { Bed } from "@mui/icons-material";
import { CallMerge } from "@mui/icons-material";
import { Celebration } from "@mui/icons-material";
import { CatchingPokemon } from "@mui/icons-material";
import { Castle } from "@mui/icons-material";
import { Coffee } from "@mui/icons-material";
import { DarkMode } from "@mui/icons-material";
import { Create } from "@mui/icons-material";
import { DateRange } from "@mui/icons-material";
import { Win } from "@/app/windows/windows";
import { ErrorDialog } from "./error-dialog";

export interface IAppProps {}

export function GridStuff(props: IAppProps) {
  const stuff: windowElememt[] = [
    {
      windowNumber: 1,
      riddle:
        "Ich habe Städte, aber keine Häuser. Ich habe Wälder, aber keine Bäume. Ich habe Flüsse, aber kein Wasser. Was bin ich?",
      imageName: "image",
      solution:
        "Das war viel zu einfach. Mal schauen ob du es morgen auch schaffst?",
      icon: <LooksOne fontSize="large" />,
    },
    {
      windowNumber: 2,
      riddle: "Was ist das, was man nimmt, das aber wächst, wenn man es teilt?",
      imageName: "image",
      solution: "Genau eine Karte!",
      icon: <Map fontSize="large" />,
    },
    {
      windowNumber: 3,
      riddle: "Was fliegt, ohne Flügel zu haben?",
      imageName: "image",
      solution: "Genau es ist die Liebe!",
      icon: <Favorite fontSize="large" />,
    },
    {
      windowNumber: 4,
      riddle:
        "Du wirfst mich weg, wenn du mich brauchst und holst mich zurück, wenn du fertig bist. Was bin ich?",
      imageName: "image",
      solution: "Genau es ist die Zeit!",
      icon: <AccessTime fontSize="large" />,
    },
    {
      windowNumber: 5,
      riddle: "Was wird größer, je mehr man davon wegnimmt?",
      imageName: "image",
      solution: "Geanu es ist ein Anker!",
      icon: <Anchor fontSize="large" />,
    },
    {
      windowNumber: 6,
      riddle: "Was wird nass, wenn es trocknet?",
      imageName: "image",
      solution: "Genau es ist ein Loch!",
      icon: <Circle fontSize="large" />,
    },
    {
      windowNumber: 7,
      riddle:
        "Was ist so leicht wie ein Feder, aber selbst die stärksten Männer können es nicht heben?",
      imageName: "image",
      solution: "Genau es ist ein Hantuch!",
      icon: <DryCleaning fontSize="large" />,
    },
    {
      windowNumber: 8,
      riddle:
        "Was fliegt ohne Flügel, singt ohne Stimme und verlässt keinen Ort",
      imageName: "image",
      solution: "Genau es ist die Stimme!",
      icon: <ChatBubble fontSize="large" />,
    },
    {
      windowNumber: 9,
      riddle: "Was fliegt ohne Flügel, weint ohne Augen und läuft ohne Beine?",
      imageName: "image",
      solution: "Genau es ist der Rauch!",
      icon: <SmokingRooms fontSize="large" />,
    },
    {
      windowNumber: 10,
      riddle: "Was hat immer Beine, aber kann nicht gehen?",
      imageName: "image",
      solution: "Geau eine Wolke!",
      icon: <Cloud fontSize="large" />,
    },
    {
      windowNumber: 11,
      riddle: "Was ist etwas, das man nimmt, aber niemals zurückgeben kann?",
      imageName: "image",
      solution: "Genau ein Tisch!",
      icon: <TableRestaurant fontSize="large" />,
    },
    {
      windowNumber: 12,
      riddle:
        "Ich fliege hoch am Himmel, aber ich bin kein Vogel. Ich habe Flügel, aber ich bin kein Engel. Was bin ich?",
      imageName: "image",
      solution: "Genau ein Photo!",
      icon: <PhotoSizeSelectActual fontSize="large" />,
    },
    {
      windowNumber: 13,
      riddle: "Es gibt eine Milliarde von mir!",
      imageName: "image",
      solution: "Genau ein flugzeug!",
      icon: <AirplanemodeActive fontSize="large" />,
    },
    {
      windowNumber: 14,
      riddle: "Ich bin über hundert Jahre alt.",
      imageName: "image",
      solution: "Genau Autos!",
      icon: <DirectionsCarFilled fontSize="large" />,
    },
    {
      windowNumber: 15,
      riddle:
        "Ich bin am Morgen da, begleite dich den ganzen Tag und verschwinde am Abend. Was bin ich?",
      imageName: "image",
      solution: "Genau Fernesher!",
      icon: <Tv fontSize="large" />,
    },
    {
      windowNumber: 16,
      riddle: "Mir gehört die Zukunft!",
      imageName: "image",
      solution: "Genau die Sonne!",
      icon: <WbSunny fontSize="large" />,
    },
    {
      windowNumber: 17,
      riddle: "Ich weiß etwas ohne es zu verstehzen!",
      imageName: "image",
      solution: "Genau eine Brille!",
      icon: <LaptopChromebook fontSize="large" />,
    },
    {
      windowNumber: 18,
      riddle: "Wie geht es dir?",
      imageName: "image",
      solution: "Genau mit Google werden viel infos zugänglich.",
      icon: <Google fontSize="large" />,
    },
    {
      windowNumber: 19,
      riddle: "Manchmal schön manchmal unangenehm.",
      imageName: "image",
      solution: "Gut :)",
      icon: <SentimentSatisfied fontSize="large" />,
    },
    {
      windowNumber: 20,
      riddle: "Sehr wertvoll.",
      imageName: "image",
      solution: "Genau Schnee!",
      icon: <AcUnit fontSize="large" />,
    },
    {
      windowNumber: 21,
      riddle: "Waruzm alleine, wenn es leichter zu zweit geht.",
      imageName: "image",
      solution: "Genau Schlaff ist sehr wertvoll.",
      icon: <Bed fontSize="large" />,
    },
    {
      windowNumber: 22,
      riddle: "Go",
      imageName: "image",
      solution: "Genau zwei Stränge vereinigen sich.",
      icon: <CallMerge fontSize="large" />,
    },
    {
      windowNumber: 23,
      riddle: "Was macht man morgen üblicherweiße?",
      imageName: "image",
      solution: "Pokemon Go",
      icon: <CatchingPokemon fontSize="large" />,
    },
    {
      windowNumber: 24,
      riddle: "Rätsel",
      imageName: "image",
      solution: "Frohe Wihnachte! Sehr gut gemacht :)",
      icon: <Celebration fontSize="large" />,
    },
    {
      windowNumber: -1,
      riddle: "Rätsel",
      imageName: "image",
      solution: "",
      icon: <Castle fontSize="large" />,
    },
    {
      windowNumber: -1,
      riddle: "Rätsel",
      imageName: "image",
      solution: "",
      icon: <Coffee fontSize="large" />,
    },
    {
      windowNumber: -1,
      riddle: "Rätsel",
      imageName: "image",
      solution: "",
      icon: <DarkMode fontSize="large" />,
    },
    {
      windowNumber: -1,
      riddle: "Rätsel",
      imageName: "image",
      solution: "",
      icon: <DateRange fontSize="large" />,
    },
    {
      windowNumber: -1,
      riddle: "Rätsel",
      imageName: "image",
      solution: "",
      icon: <AssuredWorkload fontSize="large" />,
    },
    {
      windowNumber: -1,
      riddle: "Rätsel",
      imageName: "image",
      solution: "",
      icon: <Create fontSize="large" />,
    },
  ];

  const [open, setOpen] = React.useState(false);
  const [usedWindowElement, setusedWindowElement] = React.useState<
    windowElememt | undefined
  >();
  const [myArray, setMyArray] = React.useState(stuff);

  const today = new Date();
  const dayOfMonth = today.getDate();
  const currentMonth = today.getMonth();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  function handleClick(windowNumber: windowElememt) {
    setusedWindowElement(windowNumber);
    handleClickOpen();
  }

  const shuffleArray = (array: windowElememt[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  React.useEffect(() => {
    const shuffled = shuffleArray(myArray);
    setMyArray(shuffled);
  }, []);

  return (
    <div>
      <Paper className={styles.contentPaper} elevation={3}>
        <Grid container className={styles.grid} spacing={2}>
          {myArray.map((iconName, index) => (
            <Grid key={index} item xs={4} sm={4} md={2} lg={2}>
              <div onClick={() => handleClick(iconName)}>
                <WindowStuff
                  iconComponent={iconName}
                  monthDay={dayOfMonth}
                ></WindowStuff>
              </div>
            </Grid>
          ))}
        </Grid>
      </Paper>
      <Win
        day={dayOfMonth}
        month={currentMonth}
        open={open}
        handleClose={handleClose}
        winEl={usedWindowElement}
      ></Win>
    </div>
  );
}
