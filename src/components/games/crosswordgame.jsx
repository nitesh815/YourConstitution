import MyCrossword from "mycrossword";
import "mycrossword/dist/index.css";
import React from "react";
import Sidebar from "../module/Sidebar";
import Back from "../common/back/Back";
import "./crossword.css"
 


const data1 = {
  "id": "simple/1",
  "number": 1,
  "name": "Simple Crossword #1",
  "date": 1542326400000,
  "entries": [
    {
      "id": "1-across",
      "number": 1,
      "humanNumber": "1",
      "clue": "Right to practice any religion is called",
      "direction": "across",
      "length": 7,
      "group": ["1-across"],
      "position": { "x": 10, "y": 2 },
      "separatorLocations": {},
      "solution": "FREEDOM"
    },
    {
      "id": "2-across",
      "number": 2,
      "humanNumber": "2",
      "clue": "Body responsible for legislation in India",
      "direction": "across",
      "length": 10,
      "group": ["2-across"],
      "position": { "x": 7, "y": 4 },
      "separatorLocations": {},
      "solution": "PARLIAMENT"
    },
    {
      "id": "3-across",
      "number": 3,
      "humanNumber": "3",
      "clue": "India is a ___ state",
      "direction": "across",
      "length": 7,
      "group": ["3-across"],
      "position": { "x": 9, "y": 6 },
      "separatorLocations": {},
      "solution": "SECULAR"
    },
    {
      "id": "4-across",
      "number": 4,
      "humanNumber": "4",
      "clue": "the Head of the Executive branch in India",
      "direction": "across",
      "length": 9,
      "group": ["4-across"],
      "position": { "x": 1, "y": 8 },
      "separatorLocations": {},
      "solution": "PRESIDENT" 
    },

    {
      "id": "5-across",
      "number": 5,
      "humanNumber": "5",
      "clue": "The supreme law of India",
      "direction": "across",
      "length": 12,
      "group": ["5-across"],
      "position": { "x": 0, "y": 11 },
      "separatorLocations": {},
      "solution": "CONSTITUTION"
    },

    {
      "id": "1-down",
      "number": 1,
      "humanNumber": "1",
      "clue": "First part of the Constitution that contains fundamental duties",
      "direction": "down",
      "length": 8,
      "group": ["1-down"],
      "position": { "x": 13, "y": 0 },
      "separatorLocations": {},
      "solution": "PREAMBLE"
    },
    {
      "id": "2-down",
      "number": 2,
      "humanNumber": "2",
      "clue": "The document that lists the fundamental rights of citizens",
      "direction": "down",
      "length": 7,
      "group": ["2-down"],
      "position": { "x": 2, "y": 2 },
      "separatorLocations": {},
      "solution": "CHAPTER"
    },
    {
      "id": "3-down",
      "number": 3,
      "humanNumber": "3",
      "clue": "Fundamental Rights are protected by this institution",
      "direction": "down",
      "length": 12,
      "group": ["3-down"],
      "position": { "x": 7, "y": 2 },
      "separatorLocations": {},
      "solution": "SUPREMECOURT"
    },


    {
      "id": "4-down",
      "number": 4,
      "humanNumber": "4",
      "clue": "This body governs individual states in India",
      "direction": "down",
      "length": 11,
      "group": ["4-down"],
      "position": { "x": 4, "y": 4 },
      "separatorLocations": {},
      "solution": "LEGISLATURE"
    },
    {
      "id": "5-down",
      "number": 5,
      "humanNumber": "5",
      "clue": "The first Prime Minister of India",
      "direction": "down",
      "length": 5,
      "group": ["5-down"],
      "position": { "x": 11, "y": 11 },
      "separatorLocations": {},
      "solution": "NEHRU"
    }

  ],
  "solutionAvailable": true,
  "dateSolutionAvailable": 1542326400000,
  "dimensions": {
    "cols": 17,
    "rows": 16
  },
  "crosswordType": "quick"
};

export default function crossword() {
  return (
    <>
      <Back title="Introduction to the Constitution" />
      <div className="flex">
        <Sidebar />
        <div className="container try">
          <div className="margin5">
            <MyCrossword id="crossword-1" data={data1} theme="blue" allowMissingSolutions={true} />
          </div>
        </div>
      </div>
    </>
  );
}


