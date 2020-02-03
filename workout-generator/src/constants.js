export const EQUIPMENT_LIST = [
  {
    id: "1",
    title: "Jump Rope"
  },
  {
    id: "2",
    title: "Power Ball"
  },
  {
    id: "3",
    title: "Dumbbells"
  },
  {
    id: "4",
    title: "Barbell / Plates"
  },
  {
    id: "5",
    title: "Pull-Up Bar"
  },
  {
    id: "6",
    title: "Kettlebell"
  },
  {
    id: "7",
    title: "Jumping Box"
  },
  {
    id: "8",
    title: "Rings"
  },
  {
    id: "9",
    title: "Resistance Band"
  },
  {
    id: "10",
    title: "Sandbag"
  },
  {
    id: "11",
    title: "None"
  }
];

export const MUSCLE_LIST= [
  {
    id: "1",
    title: "Back"
  },
  {
    id: "2",
    title: "Legs"
  },
  {
    id: "3",
    title: "Shoulder"
  },
  {
    id: "4",
    title: "Arms"
  },
  {
    id: "5",
    title: "Full-Body"
  },
  {
    id: "6",
    title: "Abs"
  },  
];

const generateMinutes = () => {
  let minutes = [];
  for (let i = 0; i < 11; i++) {
    minutes.push({ value: i*60000, text: i, key: i })
  };
  return minutes;
}

const generateSeconds = () => {
  let seconds = [];
  for (let i = 0; i < 60; i=i+5) {
    seconds.push({ value: i*1000, text: i, key: i })
  };
  return seconds;
}

export const MINUTES = generateMinutes();
export const SECONDS = generateSeconds();