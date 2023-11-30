"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import styles from "./grid.module.scss";
import { WindowStuff } from "./window";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
// import AcUnitIcon from "@mui/icons-material/AcUnit";
import { windowElememt } from "../../public/window_element";
// import AssignmentReturnIcon from "@mui/icons-material/AssignmentReturn";
// import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";

// import MapIcon from "@mui/icons-material/Map";
// import LooksOneIcon from "@mui/icons-material/LooksOne";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import AccessTimeIcon from "@mui/icons-material/AccessTime";
// import AnchorIcon from "@mui/icons-material/Anchor";
// import CircleIcon from "@mui/icons-material/Circle";
// import DryCleaningIcon from "@mui/icons-material/DryCleaning";
// import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
// import SmokingRoomsIcon from "@mui/icons-material/SmokingRooms";
// import CloudIcon from "@mui/icons-material/Cloud";
// import TableRestaurantIcon from "@mui/icons-material/TableRestaurant";
// import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
// import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
// import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
// import TvIcon from "@mui/icons-material/Tv";
// import WbSunnyIcon from "@mui/icons-material/WbSunny";
// import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
// import GoogleIcon from "@mui/icons-material/Google";
// import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
// import BedIcon from "@mui/icons-material/Bed";
// import CallMergeIcon from "@mui/icons-material/CallMerge";
// import CelebrationIcon from "@mui/icons-material/Celebration";
// import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
// import CastleIcon from "@mui/icons-material/Castle";
// import CoffeeIcon from "@mui/icons-material/Coffee";
// import DarkModeIcon from "@mui/icons-material/DarkMode";
// import CreateIcon from "@mui/icons-material/Create";
// import DateRangeIcon from "@mui/icons-material/DateRange";
import { Win } from "@/app/windows/windows";
import { ErrorDialog } from "./error-dialog";

export interface IAppProps {}

export function GridStuff(props: IAppProps) {
  const stuff: windowElememt[] = [
    // {
    //   windowNumber: 1,
    //   riddle:
    //     "Ich habe Städte, aber keine Häuser. Ich habe Wälder, aber keine Bäume. Ich habe Flüsse, aber kein Wasser. Was bin ich?",
    //   imageName: "image",
    //   solution:
    //     "Das war viel zu einfach. Mal schauen ob du es morgen auch schaffst?",
    //   icon: <LooksOneIcon fontSize="large" />,
    // },
    // {
    //   windowNumber: 2,
    //   riddle: "Was ist das, was man nimmt, das aber wächst, wenn man es teilt?",
    //   imageName: "image",
    //   solution: "Genau eine Karte!",
    //   icon: <MapIcon fontSize="large" />,
    // },
    // {
    //   windowNumber: 3,
    //   riddle: "Was fliegt, ohne Flügel zu haben?",
    //   imageName: "image",
    //   solution: "Genau es ist die Liebe!",
    //   icon: <FavoriteIcon fontSize="large" />,
    // },
    // {
    //   windowNumber: 4,
    //   riddle:
    //     "Du wirfst mich weg, wenn du mich brauchst und holst mich zurück, wenn du fertig bist. Was bin ich?",
    //   imageName: "image",
    //   solution: "Genau es ist die Zeit!",
    //   icon: <AccessTimeIcon fontSize="large" />,
    // },
    // {
    //   windowNumber: 5,
    //   riddle: "Was wird größer, je mehr man davon wegnimmt?",
    //   imageName: "image",
    //   solution: "Geanu es ist ein Anker!",
    //   icon: <AnchorIcon fontSize="large" />,
    // },
    // {
    //   windowNumber: 6,
    //   riddle: "Was wird nass, wenn es trocknet?",
    //   imageName: "image",
    //   solution: "Genau es ist ein Loch!",
    //   icon: <CircleIcon fontSize="large" />,
    // },
    // {
    //   windowNumber: 7,
    //   riddle:
    //     "Was ist so leicht wie ein Feder, aber selbst die stärksten Männer können es nicht heben?",
    //   imageName: "image",
    //   solution: "Genau es ist ein Hantuch!",
    //   icon: <DryCleaningIcon fontSize="large" />,
    // },
    // {
    //   windowNumber: 8,
    //   riddle:
    //     "Was fliegt ohne Flügel, singt ohne Stimme und verlässt keinen Ort",
    //   imageName: "image",
    //   solution: "Genau es ist die Stimme!",
    //   icon: <ChatBubbleIcon fontSize="large" />,
    // },
    // {
    //   windowNumber: 9,
    //   riddle: "Was fliegt ohne Flügel, weint ohne Augen und läuft ohne Beine?",
    //   imageName: "image",
    //   solution: "Genau es ist der Rauch!",
    //   icon: <SmokingRoomsIcon fontSize="large" />,
    // },
    // {
    //   windowNumber: 10,
    //   riddle: "Was hat immer Beine, aber kann nicht gehen?",
    //   imageName: "image",
    //   solution: "Geau eine Wolke!",
    //   icon: <CloudIcon fontSize="large" />,
    // },
    // {
    //   windowNumber: 11,
    //   riddle: "Was ist etwas, das man nimmt, aber niemals zurückgeben kann?",
    //   imageName: "image",
    //   solution: "Genau ein Tisch!",
    //   icon: <TableRestaurantIcon fontSize="large" />,
    // },
    // {
    //   windowNumber: 12,
    //   riddle:
    //     "Ich fliege hoch am Himmel, aber ich bin kein Vogel. Ich habe Flügel, aber ich bin kein Engel. Was bin ich?",
    //   imageName: "image",
    //   solution: "Genau ein Photo!",
    //   icon: <PhotoSizeSelectActualIcon fontSize="large" />,
    // },
    // {
    //   windowNumber: 13,
    //   riddle: "Es gibt eine Milliarde von mir!",
    //   imageName: "image",
    //   solution: "Genau ein flugzeug!",
    //   icon: <AirplanemodeActiveIcon fontSize="large" />,
    // },
    // {
    //   windowNumber: 14,
    //   riddle: "Ich bin über hundert Jahre alt.",
    //   imageName: "image",
    //   solution: "Genau Autos!",
    //   icon: <DirectionsCarFilledIcon fontSize="large" />,
    // },
    // {
    //   windowNumber: 15,
    //   riddle:
    //     "Ich bin am Morgen da, begleite dich den ganzen Tag und verschwinde am Abend. Was bin ich?",
    //   imageName: "image",
    //   solution: "Genau Fernesher!",
    //   icon: <TvIcon fontSize="large" />,
    // },
    // {
    //   windowNumber: 16,
    //   riddle: "Mir gehört die Zukunft!",
    //   imageName: "image",
    //   solution: "Genau die Sonne!",
    //   icon: <WbSunnyIcon fontSize="large" />,
    // },
    // {
    //   windowNumber: 17,
    //   riddle: "Ich weiß etwas ohne es zu verstehzen!",
    //   imageName: "image",
    //   solution: "Genau eine Brille!",
    //   icon: <LaptopChromebookIcon fontSize="large" />,
    // },
    // {
    //   windowNumber: 18,
    //   riddle: "Wie geht es dir?",
    //   imageName: "image",
    //   solution: "Genau mit Google werden viel infos zugänglich.",
    //   icon: <GoogleIcon fontSize="large" />,
    // },
    // {
    //   windowNumber: 19,
    //   riddle: "Manchmal schön manchmal unangenehm.",
    //   imageName: "image",
    //   solution: "Gut :)",
    //   icon: <SentimentSatisfiedIcon fontSize="large" />,
    // },
    // {
    //   windowNumber: 20,
    //   riddle: "Sehr wertvoll.",
    //   imageName: "image",
    //   solution: "Genau Schnee!",
    //   icon: <AcUnitIcon fontSize="large" />,
    // },
    // {
    //   windowNumber: 21,
    //   riddle: "Waruzm alleine, wenn es leichter zu zweit geht.",
    //   imageName: "image",
    //   solution: "Genau Schlaff ist sehr wertvoll.",
    //   icon: <BedIcon fontSize="large" />,
    // },
    // {
    //   windowNumber: 22,
    //   riddle: "Go",
    //   imageName: "image",
    //   solution: "Genau zwei Stränge vereinigen sich.",
    //   icon: <CallMergeIcon fontSize="large" />,
    // },
    // {
    //   windowNumber: 23,
    //   riddle: "Was macht man morgen üblicherweiße?",
    //   imageName: "image",
    //   solution: "Pokemon Go",
    //   icon: <CatchingPokemonIcon fontSize="large" />,
    // },
    // {
    //   windowNumber: 24,
    //   riddle: "Rätsel",
    //   imageName: "image",
    //   solution: "Frohe Wihnachte! Sehr gut gemacht :)",
    //   icon: <CelebrationIcon fontSize="large" />,
    // },
    // {
    //   windowNumber: -1,
    //   riddle: "Rätsel",
    //   imageName: "image",
    //   solution: "",
    //   icon: <CastleIcon fontSize="large" />,
    // },
    // {
    //   windowNumber: -1,
    //   riddle: "Rätsel",
    //   imageName: "image",
    //   solution: "",
    //   icon: <CoffeeIcon fontSize="large" />,
    // },
    // {
    //   windowNumber: -1,
    //   riddle: "Rätsel",
    //   imageName: "image",
    //   solution: "",
    //   icon: <DarkModeIcon fontSize="large" />,
    // },
    // {
    //   windowNumber: -1,
    //   riddle: "Rätsel",
    //   imageName: "image",
    //   solution: "",
    //   icon: <DateRangeIcon fontSize="large" />,
    // },
    // {
    //   windowNumber: -1,
    //   riddle: "Rätsel",
    //   imageName: "image",
    //   solution: "",
    //   icon: <AssuredWorkloadIcon fontSize="large" />,
    // },
    // {
    //   windowNumber: -1,
    //   riddle: "Rätsel",
    //   imageName: "image",
    //   solution: "",
    //   icon: <CreateIcon fontSize="large" />,
    // },
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
