const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/ipl", (request, response) => {
  response.send({
    teams: [
      {
        name: "Royal Challengers Bangalore",
        id: "RCB",
        team_image_url:
          "https://assets.ccbp.in/frontend/react-js/rcb-logo-img.png",
      },
      {
        name: "Kolkata Knight Riders",
        id: "KKR",
        team_image_url:
          "https://assets.ccbp.in/frontend/react-js/kkr-logo-img.png",
      },
      {
        name: "Kings XI Punjab",
        id: "KXP",
        team_image_url:
          "https://assets.ccbp.in/frontend/react-js/kxp-logo-img.png",
      },
      {
        name: "Chennai Super Kings",
        id: "CSK",
        team_image_url:
          "https://assets.ccbp.in/frontend/react-js/csk-logo-img.png",
      },
      {
        name: "Rajasthan Royals",
        id: "RR",
        team_image_url:
          "https://assets.ccbp.in/frontend/react-js/rr-logo-img.png",
      },
      {
        name: "Mumbai Indians",
        id: "MI",
        team_image_url:
          "https://assets.ccbp.in/frontend/react-js/mi-logo-img.png",
      },
      {
        name: "Sunrisers Hyderabad",
        id: "SH",
        team_image_url:
          "https://assets.ccbp.in/frontend/react-js/srh-logo-img.png",
      },
      {
        name: "Delhi Capitals",
        id: "DC",
        team_image_url:
          "https://assets.ccbp.in/frontend/react-js/dc-logo-img.png",
      },
    ],
  });
});

app.get("/ipl/RCB", (request, response) => {
  response.send({
    team_banner_url:
      "https://assets.ccbp.in/frontend/react-js/kkr-team-img.png",
    latest_match_details: {
      umpires: "CB Gaffaney, VK Sharma",
      result: "Kolkata Knight Riders Won by 7 wickets",
      man_of_the_match: "Shubman Gill",
      id: "1216545",
      date: "2020-09-26",
      venue: "At Sheikh Zayed Stadium, Abu Dhabi",
      competing_team: "Sunrisers Hyderabad",
      competing_team_logo:
        "https://assets.ccbp.in/frontend/react-js/srh-logo-img.png",
      first_innings: "Sunrisers Hyderabad",
      second_innings: "Kolkata Knight Riders",
      match_status: "Won",
    },
    recent_matches: [
      {
        umpires: "RK Illingworth, K Srinivasan",
        result: "Royal Challengers Bangalore Won by 82 runs",
        man_of_the_match: "AB de Villiers",
        id: "1216540",
        date: "2020-10-12",
        venue: "At Sharjah Cricket Stadium, Sharjah",
        competing_team: "Royal Challengers Bangalore",
        competing_team_logo:
          "https://assets.ccbp.in/frontend/react-js/rcb-logo-img.png",
        first_innings: "Royal Challengers Bangalore",
        second_innings: "Kolkata Knight Riders",
        match_status: "Lost",
      },
      {
        umpires: "C Shamshuddin, RK Illingworth",
        result: "Chennai Super Kings Won by 6 wickets",
        man_of_the_match: "RD Gaikwad",
        id: "1216536",
        date: "2020-10-29",
        venue: "At Dubai International Cricket Stadium, Dubai",
        competing_team: "Chennai Super Kings",
        competing_team_logo:
          "https://assets.ccbp.in/frontend/react-js/csk-logo-img.png",
        first_innings: "Kolkata Knight Riders",
        second_innings: "Chennai Super Kings",
        match_status: "Lost",
      },
      {
        umpires: "Nitin Menon, PR Reiffel",
        result: "Kolkata Knight Riders Won by 60 runs",
        man_of_the_match: "PJ Cummins",
        id: "1216530",
        date: "2020-11-01",
        venue: "At Dubai International Cricket Stadium, Dubai",
        competing_team: "Rajasthan Royals",
        competing_team_logo:
          "https://assets.ccbp.in/frontend/react-js/rr-logo-img.png",
        first_innings: "Kolkata Knight Riders",
        second_innings: "Rajasthan Royals",
        match_status: "Won",
      },
      {
        umpires: "CB Gaffaney, VK Sharma",
        result: "Mumbai Indians Won by 8 wickets",
        man_of_the_match: "Q de Kock",
        id: "1216526",
        date: "2020-10-16",
        venue: "At Sheikh Zayed Stadium, Abu Dhabi",
        competing_team: "Mumbai Indians",
        competing_team_logo:
          "https://assets.ccbp.in/frontend/react-js/mi-logo-img.png",
        first_innings: "Kolkata Knight Riders",
        second_innings: "Mumbai Indians",
        match_status: "Lost",
      },
      {
        umpires: "UV Gandhe, CB Gaffaney",
        result: "Kolkata Knight Riders Won by 2 runs",
        man_of_the_match: "KD Karthik",
        id: "1216523",
        date: "2020-10-10",
        venue: "At Sheikh Zayed Stadium, Abu Dhabi",
        competing_team: "Kings XI Punjab",
        competing_team_logo:
          "https://assets.ccbp.in/frontend/react-js/kxp-logo-img.png",
        first_innings: "Kolkata Knight Riders",
        second_innings: "Kings XI Punjab",
        match_status: "Won",
      },
      {
        umpires: "KN Ananthapadmanabhan, RK Illingworth",
        result: "Kings XI Punjab Won by 8 wickets",
        man_of_the_match: "CH Gayle",
        id: "1216520",
        date: "2020-10-26",
        venue: "At Sharjah Cricket Stadium, Sharjah",
        competing_team: "Kings XI Punjab",
        competing_team_logo:
          "https://assets.ccbp.in/frontend/react-js/kxp-logo-img.png",
        first_innings: "Kolkata Knight Riders",
        second_innings: "Kings XI Punjab",
        match_status: "Lost",
      },
      {
        umpires: "VA Kulkarni, RK Illingworth",
        result: "Delhi Capitals Won by 18 runs",
        man_of_the_match: "SS Iyer",
        id: "1216515",
        date: "2020-10-03",
        venue: "At Sharjah Cricket Stadium, Sharjah",
        competing_team: "Delhi Capitals",
        competing_team_logo:
          "https://assets.ccbp.in/frontend/react-js/dc-logo-img.png",
        first_innings: "Delhi Capitals",
        second_innings: "Kolkata Knight Riders",
        match_status: "Lost",
      },
      {
        umpires: "PG Pathak, S Ravi",
        result: "Kolkata Knight Riders Won by NA tie",
        man_of_the_match: "LH Ferguson",
        id: "1216512",
        date: "2020-10-18",
        venue: "At Sheikh Zayed Stadium, Abu Dhabi",
        competing_team: "Sunrisers Hyderabad",
        competing_team_logo:
          "https://assets.ccbp.in/frontend/react-js/srh-logo-img.png",
        first_innings: "Kolkata Knight Riders",
        second_innings: "Sunrisers Hyderabad",
        match_status: "Won",
      },
      {
        umpires: "CB Gaffaney, S Ravi",
        result: "Mumbai Indians Won by 49 runs",
        man_of_the_match: "RG Sharma",
        id: "1216508",
        date: "2020-09-23",
        venue: "At Sheikh Zayed Stadium, Abu Dhabi",
        competing_team: "Mumbai Indians",
        competing_team_logo:
          "https://assets.ccbp.in/frontend/react-js/mi-logo-img.png",
        first_innings: "Mumbai Indians",
        second_innings: "Kolkata Knight Riders",
        match_status: "Lost",
      },
      {
        umpires: "KN Ananthapadmanabhan, C Shamshuddin",
        result: "Kolkata Knight Riders Won by 37 runs",
        man_of_the_match: "Shivam Mavi",
        id: "1216504",
        date: "2020-09-30",
        venue: "At Dubai International Cricket Stadium, Dubai",
        competing_team: "Rajasthan Royals",
        competing_team_logo:
          "https://assets.ccbp.in/frontend/react-js/rr-logo-img.png",
        first_innings: "Kolkata Knight Riders",
        second_innings: "Rajasthan Royals",
        match_status: "Won",
      },
      {
        umpires: "KN Ananthapadmanabhan, RK Illingworth",
        result: "Kolkata Knight Riders Won by 10 runs",
        man_of_the_match: "RA Tripathi",
        id: "1216501",
        date: "2020-10-07",
        venue: "At Sheikh Zayed Stadium, Abu Dhabi",
        competing_team: "Chennai Super Kings",
        competing_team_logo:
          "https://assets.ccbp.in/frontend/react-js/csk-logo-img.png",
        first_innings: "Kolkata Knight Riders",
        second_innings: "Chennai Super Kings",
        match_status: "Won",
      },
      {
        umpires: "CB Gaffaney, PG Pathak",
        result: "Kolkata Knight Riders Won by 59 runs",
        man_of_the_match: "CV Varun",
        id: "1216497",
        date: "2020-10-24",
        venue: "At Sheikh Zayed Stadium, Abu Dhabi",
        competing_team: "Delhi Capitals",
        competing_team_logo:
          "https://assets.ccbp.in/frontend/react-js/dc-logo-img.png",
        first_innings: "Kolkata Knight Riders",
        second_innings: "Delhi Capitals",
        match_status: "Won",
      },
      {
        umpires: "VK Sharma, S Ravi",
        result: "Royal Challengers Bangalore Won by 8 wickets",
        man_of_the_match: "Mohammed Siraj",
        id: "1216494",
        date: "2020-10-21",
        venue: "At Sheikh Zayed Stadium, Abu Dhabi",
        competing_team: "Royal Challengers Bangalore",
        competing_team_logo:
          "https://assets.ccbp.in/frontend/react-js/rcb-logo-img.png",
        first_innings: "Kolkata Knight Riders",
        second_innings: "Royal Challengers Bangalore",
        match_status: "Lost",
      },
    ],
  });
});

const port = process.env.PORT || 3000;

app.listen(port);
