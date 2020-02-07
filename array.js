const data = {
  India: {
    CTS: ["Kolkata", "Bangalore", "Ahmedabad"],
    Infosys: ["Bangalore", "Delhi", "Gurgaon"]
  },
  Cricket: {
    Formats: ["ODI", "T20", "Test"],
    Batsman: ["Sourav", "Sachin", "Fleming"]
  }
}
for (p in data) {
  for (q in data[p]) {
    for (m in data[p][q]) {
      if (data[p][q][m] == "Bangalore") {
        console.log(q + ", " + p);
      }
      break;
    }
  }
}