import type { Puzzle } from "../utils/constants";

export const puzzles: Puzzle[] =  [
  {
    "id": "i5qhQ",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1814,
    "popularity": 95,
    "description": "Trap the king in the corner. Find the forced checkmate.",
    "initialFen": "5rk1/1p4pp/p2p2q1/2p1p1nr/2P3P1/1P1P2KP/P4P2/R1BQ1R2 w - - 3 27",
    "fen": "5rk1/1p4pp/p2p2q1/2p1p1nP/2P5/1P1P2KP/P4P2/R1BQ1R2 b - - 0 27",
    "preMove": "gxh5",
    "solution": [
      "Ne4+",
      "Kh2",
      "Rxf2+",
      "Rxf2",
      "Qg3+",
      "Kh1",
      "Nxf2#"
    ]
  },
  {
    "id": "2gjzN",
    "title": "Mate in 5",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1939,
    "popularity": 92,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver the famous opera-style mate. Deliver a Vukovic mate with knight support.",
    "initialFen": "6k1/1p5r/3N1bn1/P2Pp3/4Pn1p/P1N2Pq1/4BBPK/R2Q2R1 w - - 1 29",
    "fen": "6k1/1p5r/3N1bn1/P2Pp3/4Pn1p/P1N2PB1/4B1PK/R2Q2R1 b - - 0 29",
    "preMove": "Bxg3",
    "solution": [
      "hxg3+",
      "Kxg3",
      "Bh4+",
      "Kg4",
      "Rh5",
      "Nf7",
      "Kxf7",
      "g3",
      "Rg5#"
    ]
  },
  {
    "id": "G1xEO",
    "title": "Mate in 3",
    "theme": "AdvancedPawn",
    "difficulty": "Easy",
    "rating": 1405,
    "popularity": 97,
    "description": "Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "5rk1/6pp/4P3/8/3PB3/1Q6/1p2KPPP/q1r5 b - - 5 34",
    "fen": "5rk1/6pp/4P3/8/3PB3/1Q6/4KPPP/qrr5 w - - 0 35",
    "preMove": "b1=R",
    "solution": [
      "e7+",
      "Rxb3",
      "Bd5+",
      "Rf7",
      "e8=Q#"
    ]
  },
  {
    "id": "2CQMa",
    "title": "Mate in 5",
    "theme": "AdvancedPawn",
    "difficulty": "Medium",
    "rating": 1920,
    "popularity": 96,
    "description": "Find the forced checkmate.",
    "initialFen": "rr4k1/2p4p/2p3bQ/4p1N1/p4p2/1PP2P2/P3q1PP/K2R3R w - - 2 24",
    "fen": "rr4k1/2pR3p/2p3bQ/4p1N1/p4p2/1PP2P2/P3q1PP/K6R b - - 3 24",
    "preMove": "Rd7",
    "solution": [
      "Qxa2+",
      "Kxa2",
      "axb3+",
      "Kb2",
      "Ra2+",
      "Kc1",
      "b2+",
      "Kd2",
      "b1=Q#"
    ]
  },
  {
    "id": "vpbnx",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1653,
    "popularity": 95,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Find the forced mate in two. Finish with the classic Morphy's mate pattern. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r2q1rk1/pp3ppb/4p2p/3pR2P/3B4/2P3Q1/PP4P1/5RK1 b - - 2 25",
    "fen": "r4rk1/ppq2ppb/4p2p/3pR2P/3B4/2P3Q1/PP4P1/5RK1 w - - 3 26",
    "preMove": "Qc7",
    "solution": [
      "Qxg7+",
      "Kxg7",
      "Rg5#"
    ]
  },
  {
    "id": "W0Iqj",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1886,
    "popularity": 94,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Find the forced mate in two. Deliver the famous opera-style mate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "1k6/ppp4p/2bp2p1/6q1/7b/1B3r1Q/PPP2PPP/3R1RK1 w - - 7 21",
    "fen": "1k6/ppp4p/2bpQ1p1/6q1/7b/1B3r2/PPP2PPP/3R1RK1 b - - 8 21",
    "preMove": "Qe6",
    "solution": [
      "Qxg2+",
      "Kxg2",
      "Rg3#"
    ]
  },
  {
    "id": "fpIe7",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1909,
    "popularity": 95,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "4r1k1/ppp2rbR/3pb2B/5pQ1/6P1/2P2q2/PPP2P2/1K5R b - - 4 27",
    "fen": "4r1k1/ppp2rbR/3pb2B/5pQ1/6q1/2P5/PPP2P2/1K5R w - - 0 28",
    "preMove": "Qxg4",
    "solution": [
      "Rh8+",
      "Kxh8",
      "Bxg7+",
      "Kg8",
      "Rh8#"
    ]
  },
  {
    "id": "UG4uj",
    "title": "Mate in 3",
    "theme": "Deflection",
    "difficulty": "Hard",
    "rating": 2123,
    "popularity": 94,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2k3r1/pppqbp1r/3p1n2/4p1Bb/1PB1P3/P1NP1PR1/2P2PK1/R5Q1 w - - 1 19",
    "fen": "2k3r1/pppqbp1r/3p1B2/4p2b/1PB1P3/P1NP1PR1/2P2PK1/R5Q1 b - - 0 19",
    "preMove": "Bxf6",
    "solution": [
      "Qh3+",
      "Kxh3",
      "Bxf3+",
      "Bh4",
      "Rxh4#"
    ]
  },
  {
    "id": "YA1uC",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1793,
    "popularity": 89,
    "description": "Trap the king between its own rooks. Deliver a hook mate with rook, knight, and pawn. Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "r2q2rk/1b3p1p/p1p1n1pQ/1p1nP2N/P6R/1P3N2/2B2PPP/R5K1 b - - 10 26",
    "fen": "r4qrk/1b3p1p/p1p1n1pQ/1p1nP2N/P6R/1P3N2/2B2PPP/R5K1 w - - 11 27",
    "preMove": "Qf8",
    "solution": [
      "Qxh7+",
      "Kxh7",
      "Nf6+",
      "Kg7",
      "Rh7#"
    ]
  },
  {
    "id": "VsJVx",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2070,
    "popularity": 85,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "1r3rk1/1bp2pp1/pq3B2/4pN2/2p1P3/2b3NP/P1B1QP2/2KR3R w - - 1 25",
    "fen": "1r3rk1/1bp2pp1/pq3B2/4pN2/2p1P3/2b3NP/P3QP2/1BKR3R b - - 2 25",
    "preMove": "Bb1",
    "solution": [
      "Qxb1+",
      "Kxb1",
      "Bxe4+",
      "Kc1",
      "Rb1#"
    ]
  },
  {
    "id": "VQJDU",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1844,
    "popularity": 89,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Find the forced mate in two. Finish with the classic Morphy's mate pattern. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "b5k1/5ppp/8/N3p1q1/1P2r3/P1r5/4QPPP/R4RK1 w - - 0 26",
    "fen": "b5k1/5ppp/8/NQ2p1q1/1P2r3/P1r5/5PPP/R4RK1 b - - 1 26",
    "preMove": "Qb5",
    "solution": [
      "Qxg2+",
      "Kxg2",
      "Rg4#"
    ]
  },
  {
    "id": "yKDWu",
    "title": "Mate in 5",
    "theme": "AdvancedPawn",
    "difficulty": "Medium",
    "rating": 1770,
    "popularity": 85,
    "description": "Find the forced checkmate. Deliver the famous opera-style mate.",
    "initialFen": "2kr4/ppp3r1/3p4/2b5/2B1P1bB/3P3p/PPP2P1P/RN3RK1 w - - 2 21",
    "fen": "2kr4/ppp3r1/3p4/2b5/2B1P1bB/3P3p/PPPN1P1P/R4RK1 b - - 3 21",
    "preMove": "Nd2",
    "solution": [
      "Bf3+",
      "Bg3",
      "Rxg3+",
      "hxg3",
      "h2+",
      "Kxh2",
      "Rh8+",
      "Kg1",
      "Rh1#"
    ]
  },
  {
    "id": "b12Oi",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1802,
    "popularity": 58,
    "description": "Trap the king between its own rooks. Deliver a hook mate with rook, knight, and pawn. Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "r4q1k/1b3prp/pp1pp1nQ/2p3PN/2BPP3/2N2P2/PPP5/2K4R b - - 3 23",
    "fen": "r4qrk/1b3p1p/pp1pp1nQ/2p3PN/2BPP3/2N2P2/PPP5/2K4R w - - 4 24",
    "preMove": "Rg8",
    "solution": [
      "Qxh7+",
      "Kxh7",
      "Nf6+",
      "Kg7",
      "Rh7#"
    ]
  },
  {
    "id": "WsGIk",
    "title": "Mate in 4",
    "theme": "AdvancedPawn",
    "difficulty": "Medium",
    "rating": 1677,
    "popularity": 89,
    "description": "Find the forced checkmate.",
    "initialFen": "5rk1/Q1p2ppb/1pNb3p/3P4/2P2q1P/2N1pP2/PP4P1/2KR1B1R w - - 1 20",
    "fen": "5rk1/Q1p2ppb/1pNb3p/3P4/2P2q1P/2N1pPP1/PP6/2KR1B1R b - - 0 20",
    "preMove": "g3",
    "solution": [
      "e2+",
      "gxf4",
      "Bxf4+",
      "Rd2",
      "e1=Q+",
      "Nd1",
      "Qxd2#"
    ]
  },
  {
    "id": "KuZF2",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1907,
    "popularity": 77,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2k3rr/ppp2p2/2np4/2b5/2P2P1p/P1N2Bnq/1P3PPP/R2Q1R1K w - - 4 20",
    "fen": "2k3rr/ppp2p2/2np4/2b5/2P2P1p/P1N2BPq/1P4PP/R2Q1R1K b - - 0 20",
    "preMove": "fxg3",
    "solution": [
      "Qxh2+",
      "Kxh2",
      "hxg3#"
    ]
  },
  {
    "id": "17bJa",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2055,
    "popularity": 93,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r2q1rk1/3nbpBp/p2p1n2/1p6/3PP3/1BNp1P1P/PPP5/2KR2R1 b - - 0 15",
    "fen": "r2q1rk1/3nbpBp/p2p4/1p5n/3PP3/1BNp1P1P/PPP5/2KR2R1 w - - 1 16",
    "preMove": "Nh5",
    "solution": [
      "Bf6+",
      "Ng7",
      "Rxg7+",
      "Kh8",
      "Rg8+",
      "Kxg8",
      "Rg1#"
    ]
  },
  {
    "id": "VrkWE",
    "title": "Mate in 4",
    "theme": "Clearance",
    "difficulty": "Medium",
    "rating": 1842,
    "popularity": 93,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2rq1r1k/4bpR1/p3pn1B/3p4/3P4/1N1B1P2/PKn2P1P/6R1 b - - 2 24",
    "fen": "2rq1r1k/4bpR1/p3pn1B/3p4/1n1P4/1N1B1P2/PK3P1P/6R1 w - - 3 25",
    "preMove": "Nb4",
    "solution": [
      "Rh7+",
      "Nxh7",
      "Bg7+",
      "Kg8",
      "Bf6+",
      "Ng5",
      "Rxg5#"
    ]
  },
  {
    "id": "WTpxv",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2046,
    "popularity": 93,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r2q1rk1/pp2bpBp/4pn2/1B6/8/2N5/PP1nKP1P/R5R1 b - - 0 16",
    "fen": "r2q1rk1/pp2bpBp/4p3/1B5n/8/2N5/PP1nKP1P/R5R1 w - - 1 17",
    "preMove": "Nh5",
    "solution": [
      "Bf6+",
      "Ng7",
      "Rxg7+",
      "Kh8",
      "Rg8+",
      "Kxg8",
      "Rg1#"
    ]
  },
  {
    "id": "jhjW5",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2074,
    "popularity": 91,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r5rk/pppq1p2/2n2N1p/8/1b1P3N/4P3/PP2BPbP/R2Q1RK1 w - - 1 18",
    "fen": "r5rk/pppN1p2/2n4p/8/1b1P3N/4P3/PP2BPbP/R2Q1RK1 b - - 0 18",
    "preMove": "Nxd7",
    "solution": [
      "Bf3+",
      "Ng2",
      "Rxg2+",
      "Kh1",
      "Rg1+",
      "Kxg1",
      "Rg8#"
    ]
  },
  {
    "id": "ftkNN",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1528,
    "popularity": 28,
    "description": "Trap the king between its own rooks. Deliver a hook mate with rook, knight, and pawn. Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "r5k1/1p3ppp/p1pb3r/8/3Pp2n/1P2P1Pq/PB1N1P1P/2RQ2RK w - - 7 23",
    "fen": "r5k1/1p3ppp/p1pb3r/8/3Pp2n/1P2P1Pq/PB1N1P1P/2R2QRK b - - 8 23",
    "preMove": "Qf1",
    "solution": [
      "Qxh2+",
      "Kxh2",
      "Nf3+",
      "Kg2",
      "Rh2#"
    ]
  },
  {
    "id": "hLviQ",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2031,
    "popularity": 84,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r2q1rk1/3bbpBp/p2ppn2/2p5/4P2P/P2P1P1R/BPPK1P2/6R1 b - - 0 18",
    "fen": "r2q1rk1/3bbpBp/p2pp3/2p4n/4P2P/P2P1P1R/BPPK1P2/6R1 w - - 1 19",
    "preMove": "Nh5",
    "solution": [
      "Bf6+",
      "Ng7",
      "Rxg7+",
      "Kh8",
      "Rg8+",
      "Kxg8",
      "Rg3#"
    ]
  },
  {
    "id": "OZpAv",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2008,
    "popularity": 94,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "N4k2/8/pp1P3p/3bB2q/PP6/5rP1/1Q6/R5K1 w - - 1 32",
    "fen": "N4k2/8/pp1P3p/3bB2q/PP6/5rP1/1Q6/5RK1 b - - 2 32",
    "preMove": "Rf1",
    "solution": [
      "Qh1+",
      "Kxh1",
      "Rxf1+",
      "Kh2",
      "Rh1#"
    ]
  },
  {
    "id": "yqJ0w",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1806,
    "popularity": 93,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "5r1k/3P2r1/pp2Bb1p/8/P2Q3p/7P/1Pq2PP1/3RR1K1 w - - 1 32",
    "fen": "5r1k/3P2r1/pp2Bb1p/8/P6p/3Q3P/1Pq2PP1/3RR1K1 b - - 2 32",
    "preMove": "Qd3",
    "solution": [
      "Qxf2+",
      "Kxf2",
      "Bd4+",
      "Ke2",
      "Rxg2#"
    ]
  },
  {
    "id": "xED6K",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2036,
    "popularity": 91,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "8/1b4pk/p5pp/2Q1p2q/8/1PB2rP1/P1P5/5RK1 w - - 0 33",
    "fen": "8/1b4pk/p5pp/4Q2q/8/1PB2rP1/P1P5/5RK1 b - - 0 33",
    "preMove": "Qxe5",
    "solution": [
      "Qh1+",
      "Kxh1",
      "Rxf1+",
      "Kh2",
      "Rh1#"
    ]
  },
  {
    "id": "sVZw2",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1655,
    "popularity": 96,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "r3k1r1/ppp2p1p/3p4/4P1b1/4P3/2P2Bq1/PP1N3R/R1BQ3K w q - 4 21",
    "fen": "r3k1r1/ppp2p1p/3p4/4P1b1/4P3/2P2Bq1/PP5R/R1BQ1N1K b q - 5 21",
    "preMove": "Nf1",
    "solution": [
      "Qg1+",
      "Kxg1",
      "Be3+",
      "Kh1",
      "Rg1#"
    ]
  },
  {
    "id": "TUvO1",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1785,
    "popularity": 95,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "r6k/p2bq2n/6Q1/1pp1p3/3pP1B1/PP1P4/2P4N/6RK b - - 5 32",
    "fen": "6rk/p2bq2n/6Q1/1pp1p3/3pP1B1/PP1P4/2P4N/6RK w - - 6 33",
    "preMove": "Rg8",
    "solution": [
      "Qxg8+",
      "Kxg8",
      "Be6+",
      "Kf8",
      "Rg8#"
    ]
  },
  {
    "id": "pJ6NC",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1868,
    "popularity": 95,
    "description": "Find the forced checkmate. Finish with the classic Morphy's mate pattern.",
    "initialFen": "r4rk1/p4ppp/bp2p1q1/4Q3/3R4/2B1R3/P1P3PP/7K b - - 9 22",
    "fen": "r4rk1/p4ppp/bp2p3/4Qq2/3R4/2B1R3/P1P3PP/7K w - - 10 23",
    "preMove": "Qf5",
    "solution": [
      "Qxg7+",
      "Kxg7",
      "Rg4+",
      "Kh6",
      "Rh3+",
      "Qh5",
      "Bg7#"
    ]
  },
  {
    "id": "KxHk5",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1758,
    "popularity": 94,
    "description": "Deliver a hook mate with rook, knight, and pawn. Find the forced checkmate. Find the forced mate in three. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r2q1r2/pp2n2k/3pQ2b/2p1n1p1/2B1P2N/2PP3R/PP3P1P/R6K b - - 4 20",
    "fen": "r4r2/pp1qn2k/3pQ2b/2p1n1p1/2B1P2N/2PP3R/PP3P1P/R6K w - - 5 21",
    "preMove": "Qd7",
    "solution": [
      "Qxh6+",
      "Kxh6",
      "Nf5+",
      "Kg6",
      "Rh6#"
    ]
  },
  {
    "id": "yA1yu",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2005,
    "popularity": 94,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate. Deliver a Vukovic mate with knight support.",
    "initialFen": "1R6/p5R1/1k2pr2/3p4/1p1N4/2rqBN2/1n3P2/4K3 b - - 10 38",
    "fen": "1R6/p5R1/k3pr2/3p4/1p1N4/2rqBN2/1n3P2/4K3 w - - 11 39",
    "preMove": "Ka6",
    "solution": [
      "Rxa7+",
      "Kxa7",
      "Nc6+",
      "Ka6",
      "Rb6#"
    ]
  },
  {
    "id": "2B9EZ",
    "title": "Mate in 5",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1923,
    "popularity": 92,
    "description": "Trap the king between its own rooks. Deliver a hook mate with rook, knight, and pawn. Find the forced checkmate.",
    "initialFen": "7k/1p1n1prp/4p2Q/1P1pP1PN/p1r5/7R/P4qP1/1R5K b - - 6 31",
    "fen": "7k/1p1n1p1p/4p1rQ/1P1pP1PN/p1r5/7R/P4qP1/1R5K w - - 7 32",
    "preMove": "Rg6",
    "solution": [
      "Qxh7+",
      "Kxh7",
      "Nf6+",
      "Kg7",
      "Rh7+",
      "Kf8",
      "Rh8+",
      "Rg8",
      "Rxg8+",
      "Ke7",
      "Re8#"
    ]
  },
  {
    "id": "ZT33T",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2034,
    "popularity": 89,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "r5k1/2p3pp/P2p3r/3Pp3/1P2Pp1b/2P2P1q/3BQP1P/R5RK w - - 2 25",
    "fen": "r5k1/2p3pp/P2p3r/3Pp3/1P2Pp1b/2P2P1q/3B1P1P/R4QRK b - - 3 25",
    "preMove": "Qf1",
    "solution": [
      "Qxh2+",
      "Kxh2",
      "Bg3+",
      "Kg2",
      "Rh2#"
    ]
  },
  {
    "id": "K5LGK",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1964,
    "popularity": 95,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r3rnk1/ppp1qpb1/3p1n2/3Pp1Q1/2P1P3/2N2PB1/PP3P2/2K3RR b - - 4 18",
    "fen": "r3rnk1/ppp1qpbn/3p4/3Pp1Q1/2P1P3/2N2PB1/PP3P2/2K3RR w - - 5 19",
    "preMove": "N6h7",
    "solution": [
      "Qxg7+",
      "Kxg7",
      "Bxe5#"
    ]
  },
  {
    "id": "eAKVu",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2191,
    "popularity": 95,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "5rk1/pp6/2pp4/3bp3/1P2N1pp/P1BPPr1q/R3QP1P/5RK1 w - - 0 29",
    "fen": "5rk1/pp6/2pp4/3bp1N1/1P4pp/P1BPPr1q/R3QP1P/5RK1 b - - 1 29",
    "preMove": "Ng5",
    "solution": [
      "Qg2+",
      "Kxg2",
      "Rg3#"
    ]
  },
  {
    "id": "SvOo9",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2123,
    "popularity": 94,
    "description": "Find the forced checkmate. Deliver the famous opera-style mate. Deliver a Vukovic mate with knight support.",
    "initialFen": "r1b4k/p2n1rp1/4p2R/1p5P/3qN3/3B4/PP1QKP2/6R1 b - - 0 21",
    "fen": "r1b4k/p2n1r2/4p2p/1p5P/3qN3/3B4/PP1QKP2/6R1 w - - 0 22",
    "preMove": "gxh6",
    "solution": [
      "Qxh6+",
      "Rh7",
      "Qxh7+",
      "Kxh7",
      "Nf6+",
      "Kh6",
      "Rg6#"
    ]
  },
  {
    "id": "fdBsH",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1636,
    "popularity": 94,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2k2b1r/1bp3p1/1p2p2p/3rN1q1/8/1Q2P2P/PP3PPB/R4RK1 w - - 6 22",
    "fen": "2k2b1r/1bp2Np1/1p2p2p/3r2q1/8/1Q2P2P/PP3PPB/R4RK1 b - - 7 22",
    "preMove": "Nf7",
    "solution": [
      "Qxg2+",
      "Kxg2",
      "Rg5#"
    ]
  },
  {
    "id": "qJA0F",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1532,
    "popularity": 94,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2kr2r1/ppp1Q2p/2q3bb/8/3P4/2P2N1P/P4PPB/R4RK1 w - - 1 21",
    "fen": "2kr2r1/ppp1Q2p/2q3bb/4N3/3P4/2P4P/P4PPB/R4RK1 b - - 2 21",
    "preMove": "Ne5",
    "solution": [
      "Qxg2+",
      "Kxg2",
      "Be4#"
    ]
  },
  {
    "id": "UVwYE",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1980,
    "popularity": 93,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "3r1rk1/pb3ppn/1p2p2p/2p1R3/P1B3Q1/1P6/1BPq1PPP/R5K1 b - - 1 16",
    "fen": "3r1rk1/pb3ppn/1p2p2p/2p1R3/P1B3Q1/1P6/1Bq2PPP/R5K1 w - - 0 17",
    "preMove": "Qxc2",
    "solution": [
      "Qxg7+",
      "Kxg7",
      "Rg5#"
    ]
  },
  {
    "id": "crVy5",
    "title": "Mate in 2",
    "theme": "Clearance",
    "difficulty": "Medium",
    "rating": 1909,
    "popularity": 93,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "1nkr1bnr/1ppq1ppp/p2p4/3N4/Q1BPP1b1/4BN2/PP3PPP/2R1K2R b K - 10 11",
    "fen": "1nkr1bnr/1pp2ppp/p2p4/3N4/q1BPP1b1/4BN2/PP3PPP/2R1K2R w K - 0 12",
    "preMove": "Qxa4",
    "solution": [
      "Nb6+",
      "cxb6",
      "Be6#"
    ]
  },
  {
    "id": "alFJI",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2129,
    "popularity": 80,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r1b1kr2/2p4p/p4np1/1pq2pQ1/1b2P3/1BN5/PP1B2PP/2KR3R b q - 0 16",
    "fen": "r1b1kr2/2p4p/p5p1/1pq2pQ1/1b2n3/1BN5/PP1B2PP/2KR3R w q - 0 17",
    "preMove": "Nxe4",
    "solution": [
      "Qd8+",
      "Kxd8",
      "Bg5+",
      "Ke8",
      "Rd8#"
    ]
  },
  {
    "id": "JbjSV",
    "title": "Mate in 3",
    "theme": "AdvancedPawn",
    "difficulty": "Medium",
    "rating": 1832,
    "popularity": 88,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "r4r1k/p6p/1p3P1b/1q1pQ1B1/2b5/7R/PP4PP/1B5K b - - 2 32",
    "fen": "4rr1k/p6p/1p3P1b/1q1pQ1B1/2b5/7R/PP4PP/1B5K w - - 3 33",
    "preMove": "Rae8",
    "solution": [
      "f7+",
      "Rxe5",
      "Bf6+",
      "Bg7",
      "Rxh7#"
    ]
  },
  {
    "id": "ZD68z",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2191,
    "popularity": 87,
    "description": "Find the forced checkmate.",
    "initialFen": "4r1r1/1p5k/p1nb1nRp/3p4/P1pP4/2P1qP2/1PQ1N2P/1B5K b - - 0 29",
    "fen": "4r1r1/1p5k/p1nb1nRp/3p4/P1pP4/2P2P2/1PQ1q2P/1B5K w - - 0 30",
    "preMove": "Qxe2",
    "solution": [
      "Rg7+",
      "Kxg7",
      "Qg6+",
      "Kh8",
      "Qxh6+",
      "Nh7",
      "Qxh7#"
    ]
  },
  {
    "id": "sPwaP",
    "title": "Mate in 3",
    "theme": "AdvancedPawn",
    "difficulty": "Hard",
    "rating": 2069,
    "popularity": 87,
    "description": "Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "r4q1k/1p1bn2P/p1n1p3/3pP1N1/6Q1/4P3/PPp2P2/2K3RR b - - 1 20",
    "fen": "r4q1k/1p1bn2P/p3p3/3pn1N1/6Q1/4P3/PPp2P2/2K3RR w - - 0 21",
    "preMove": "Nxe5",
    "solution": [
      "Nf7+",
      "Qxf7",
      "Qg8+",
      "Qxg8",
      "hxg8=Q#"
    ]
  },
  {
    "id": "2UsgG",
    "title": "Mate in 3",
    "theme": "AdvancedPawn",
    "difficulty": "Easy",
    "rating": 1451,
    "popularity": 98,
    "description": "Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "6rk/5R1p/4pP2/4Bb2/8/1P1pb3/P1r5/K6R b - - 1 43",
    "fen": "6rk/5R1p/4pP2/4Bb2/8/1P2b3/P1rp4/K6R w - - 0 44",
    "preMove": "d2",
    "solution": [
      "Rfxh7+",
      "Bxh7",
      "f7+",
      "Rg7",
      "f8=Q#"
    ]
  },
  {
    "id": "YJPkM",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1747,
    "popularity": 85,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2k3rr/2p1bp2/pp3pb1/4n2p/3Qq3/2P1B2P/PP2BPPN/3R1R1K w - - 2 22",
    "fen": "2k3rr/2p1bp2/pp3pb1/4n2p/4q3/2P1B2P/PP1QBPPN/3R1R1K b - - 3 22",
    "preMove": "Qd2",
    "solution": [
      "Qxg2+",
      "Kxg2",
      "Be4#"
    ]
  },
  {
    "id": "Kgyei",
    "title": "Mate in 4",
    "theme": "AdvancedPawn",
    "difficulty": "Medium",
    "rating": 1832,
    "popularity": 96,
    "description": "Find the forced checkmate.",
    "initialFen": "7r/p2k2r1/2pp2q1/3p1p2/3PpQn1/BP2P2p/P1R4K/5NR1 w - - 0 28",
    "fen": "7r/p2k2r1/2pp2q1/3p1p2/3PpQn1/BP2P2p/P1R5/5NRK b - - 1 28",
    "preMove": "Kh1",
    "solution": [
      "Nf2+",
      "Qxf2",
      "Qg2+",
      "Rxg2",
      "hxg2+",
      "Kg1",
      "Rh1#"
    ]
  },
  {
    "id": "bqKuk",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1730,
    "popularity": 96,
    "description": "Corner the king in the kill box pattern. Find the forced checkmate. Find the forced mate in three. Finish with a swallow's tail queen sacrifice mate.",
    "initialFen": "5k2/1pRb1r2/p3p2p/3pQn1q/3P4/P5P1/1P3P2/4R1K1 b - - 4 27",
    "fen": "5k2/1pRb1r2/p3p2p/3pQn2/3P4/P4qP1/1P3P2/4R1K1 w - - 5 28",
    "preMove": "Qf3",
    "solution": [
      "Qh8+",
      "Ke7",
      "Rxe6+",
      "Kxe6",
      "Qe5#"
    ]
  },
  {
    "id": "QKFuG",
    "title": "Mate in 5",
    "theme": "AdvancedPawn",
    "difficulty": "Medium",
    "rating": 1872,
    "popularity": 95,
    "description": "Find the forced checkmate.",
    "initialFen": "2b3k1/5p2/p2p1Ppq/2pP2R1/1pP1r3/1P4Q1/P4K2/8 b - - 1 33",
    "fen": "2b3k1/5p2/p2p1Pp1/2pP2R1/1pP1r3/1P4Qq/P4K2/8 w - - 2 34",
    "preMove": "Qh3",
    "solution": [
      "Rxg6+",
      "fxg6",
      "Qxg6+",
      "Kf8",
      "Qg7+",
      "Ke8",
      "f7+",
      "Kd7",
      "f8=Q+",
      "Re7",
      "Qfxe7#"
    ]
  },
  {
    "id": "HNtkQ",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2106,
    "popularity": 94,
    "description": "Find the forced checkmate. Deliver the famous opera-style mate.",
    "initialFen": "4r1k1/pp3p2/1q1p1np1/2p5/Q2bN1bB/4rP2/PP2B3/1R2K2R b K - 3 20",
    "fen": "4r1k1/pp3p2/1q1p2p1/2p5/Q2bn1bB/4rP2/PP2B3/1R2K2R w K - 0 21",
    "preMove": "Nxe4",
    "solution": [
      "Qxe8+",
      "Kg7",
      "Qh8+",
      "Kxh8",
      "Bf6+",
      "Kg8",
      "Rh8#"
    ]
  },
  {
    "id": "3O0VK",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1903,
    "popularity": 77,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r5r1/1p2kp2/p3ppb1/3q3p/3P4/2P1Q2P/PP3PPN/R4RK1 w - - 2 20",
    "fen": "r5r1/1p2kp2/p3ppb1/3q3p/3P4/2P1Q2P/PP3PPN/2R2RK1 b - - 3 20",
    "preMove": "Rac1",
    "solution": [
      "Qxg2+",
      "Kxg2",
      "Be4#"
    ]
  },
  {
    "id": "iWnRV",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1815,
    "popularity": 97,
    "description": "Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "r4rk1/ppp2pp1/3p3p/3Np3/2B1P2q/2PPBPnb/PP2Rb1P/R2Q3K w - - 4 16",
    "fen": "r4rk1/ppp2pp1/3p3p/3Np3/2B1P2q/2PPBPPb/PP2Rb2/R2Q3K b - - 0 16",
    "preMove": "hxg3",
    "solution": [
      "Bg2+",
      "Kxg2",
      "Qxg3+",
      "Kf1",
      "Qg1#"
    ]
  },
  {
    "id": "jjqjJ",
    "title": "Mate in 4",
    "theme": "CornerMate",
    "difficulty": "Hard",
    "rating": 2118,
    "popularity": 84,
    "description": "Trap the king in the corner. Find the forced checkmate.",
    "initialFen": "r2qr1k1/p4p1B/3bpn1Q/4n1N1/3p4/8/PPP2PPP/R3K2R b KQ - 4 17",
    "fen": "r2qr2k/p4p1B/3bpn1Q/4n1N1/3p4/8/PPP2PPP/R3K2R w KQ - 5 18",
    "preMove": "Kh8",
    "solution": [
      "Bg6+",
      "Kg8",
      "Bxf7+",
      "Nxf7",
      "Qg6+",
      "Kh8",
      "Nxf7#"
    ]
  },
  {
    "id": "vaqDp",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1928,
    "popularity": 96,
    "description": "Find the forced checkmate. Deliver the famous opera-style mate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "4rrk1/1pp5/7p/p2Q1np1/2P5/P1B4P/4BqP1/4R2K b - - 0 30",
    "fen": "4r1k1/1pp2r2/7p/p2Q1np1/2P5/P1B4P/4BqP1/4R2K w - - 1 31",
    "preMove": "Rf7",
    "solution": [
      "Qxf7+",
      "Kxf7",
      "Bh5+",
      "Kg8",
      "Rxe8+",
      "Kh7",
      "Rh8#"
    ]
  },
  {
    "id": "7Wley",
    "title": "Mate in 3",
    "theme": "Deflection",
    "difficulty": "Medium",
    "rating": 1814,
    "popularity": 83,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "2r1k2r/2q1bppp/3p1P2/2n1p1P1/p3b2P/1P3Q1B/1PP4R/NNKR4 w k - 0 22",
    "fen": "2r1k2r/2q1bppp/3p1P2/2n1p1P1/p3b1QP/1P5B/1PP4R/NNKR4 b k - 1 22",
    "preMove": "Qg4",
    "solution": [
      "Nxb3+",
      "Nxb3",
      "Qxc2+",
      "Rxc2",
      "Rxc2#"
    ]
  },
  {
    "id": "lGgck",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2061,
    "popularity": 94,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2kr3r/pppbqpp1/1n6/4R3/1b2P1p1/6B1/PPQ1NPBP/2K4R b - - 0 16",
    "fen": "2kr3r/pppb1pp1/1n3q2/4R3/1b2P1p1/6B1/PPQ1NPBP/2K4R w - - 1 17",
    "preMove": "Qf6",
    "solution": [
      "Qxc7+",
      "Kxc7",
      "Rc5#"
    ]
  },
  {
    "id": "8DQo2",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1542,
    "popularity": 93,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "4rnk1/1b2bpp1/p1r4p/1ppqPN2/8/7P/PPQ2PPB/1B2RRK1 w - - 4 23",
    "fen": "4rnk1/1b2bpp1/p1r4p/1ppqPN2/8/7P/PPQ2PPB/1B1R1RK1 b - - 5 23",
    "preMove": "Rd1",
    "solution": [
      "Qxg2+",
      "Kxg2",
      "Rg6#"
    ]
  },
  {
    "id": "zIDr1",
    "title": "Mate in 5",
    "theme": "DiscoveredAttack",
    "difficulty": "Hard",
    "rating": 2182,
    "popularity": 93,
    "description": "Trap the king between its own rooks. Find the forced checkmate.",
    "initialFen": "Qn5r/p2k1Bp1/3p4/4pn1p/6K1/3qP3/P4PPP/R1B3NR w - - 0 21",
    "fen": "Qn5r/p2k1Bp1/3p4/4pn1p/8/3qPK2/P4PPP/R1B3NR b - - 1 21",
    "preMove": "Kf3",
    "solution": [
      "Nd4+",
      "Kg3",
      "h4+",
      "Kh3",
      "Qf5+",
      "g4",
      "hxg3+",
      "Kg2",
      "Qxf2#"
    ]
  },
  {
    "id": "moxGY",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1892,
    "popularity": 92,
    "description": "Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "r4rk1/1pp2pp1/3p3p/p3p3/2B1P2q/P1NP1Pnb/1PP1Rb1P/1R1QB2K w - - 4 17",
    "fen": "r4rk1/1pp2pp1/3p3p/p3p3/2B1P2q/P1NP1PPb/1PP1Rb2/1R1QB2K b - - 0 17",
    "preMove": "hxg3",
    "solution": [
      "Bg2+",
      "Kxg2",
      "Qxg3+",
      "Kf1",
      "Qg1#"
    ]
  },
  {
    "id": "1we52",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2174,
    "popularity": 90,
    "description": "Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "5rk1/1p3pp1/1np3rp/p2p4/P1PP3q/1B2PPnb/1PNNQR1P/2R4K w - - 9 23",
    "fen": "5rk1/1p3pp1/1np3rp/p2p4/P1PP3q/1B2PPPb/1PNNQR2/2R4K b - - 0 23",
    "preMove": "hxg3",
    "solution": [
      "Bg2+",
      "Kxg2",
      "Rxg3+",
      "Kf1",
      "Qh1#"
    ]
  },
  {
    "id": "PRfgE",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1523,
    "popularity": 88,
    "description": "Find the forced checkmate.",
    "initialFen": "6rk/pb3p1p/2p2Pr1/1p2pRpQ/3qNR2/PP1B4/2P3PP/7K b - - 0 33",
    "fen": "6rk/pb3p1p/2p2Pr1/1p2pR1Q/3qNp2/PP1B4/2P3PP/7K w - - 0 34",
    "preMove": "gxf4",
    "solution": [
      "Qxh7+",
      "Kxh7",
      "Rh5+",
      "Rh6",
      "Ng5+",
      "Kh8",
      "Rxh6#"
    ]
  },
  {
    "id": "DYNMN",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1825,
    "popularity": 87,
    "description": "Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "r3k2r/ppp2ppp/3p4/4p3/1PB1P2q/P1PPBPnb/4Rb1P/RN1Q3K w kq - 4 15",
    "fen": "r3k2r/ppp2ppp/3p4/4p3/1PB1P2q/P1PPBPPb/4Rb2/RN1Q3K b kq - 0 15",
    "preMove": "hxg3",
    "solution": [
      "Bg2+",
      "Kxg2",
      "Qxg3+",
      "Kf1",
      "Qg1#"
    ]
  },
  {
    "id": "NBF7p",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1610,
    "popularity": 86,
    "description": "Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "r3k2r/ppp2ppp/8/8/N3PP1q/3B1Pnb/PPPQRb1P/R1B4K w kq - 11 16",
    "fen": "r3k2r/ppp2ppp/8/8/N3PP1q/3B1PPb/PPPQRb2/R1B4K b kq - 0 16",
    "preMove": "hxg3",
    "solution": [
      "Bg2+",
      "Kxg2",
      "Qxg3+",
      "Kf1",
      "Qg1#"
    ]
  },
  {
    "id": "oGzoP",
    "title": "Mate in 3",
    "theme": "AdvancedPawn",
    "difficulty": "Medium",
    "rating": 1955,
    "popularity": 93,
    "description": "Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "rn1k4/p1p5/7Q/2bP4/2p3b1/2N2pP1/PPPPNq1P/R1BK3R w - - 0 18",
    "fen": "rn1k4/p1p5/7Q/2bP4/2p2Nb1/2N2pP1/PPPP1q1P/R1BK3R b - - 1 18",
    "preMove": "Nf4",
    "solution": [
      "Qg1+",
      "Rxg1",
      "f2+",
      "Nfe2",
      "fxg1=Q#"
    ]
  },
  {
    "id": "xHPTn",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2192,
    "popularity": 80,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver the famous opera-style mate.",
    "initialFen": "r5k1/1p3ppp/4p3/3p4/b1pP1PPP/2P1P3/2B5/rNKR3R w - - 3 25",
    "fen": "r5k1/1p3ppp/4p3/3p4/b1pP1PPP/2P1P3/1KB5/rN1R3R b - - 4 25",
    "preMove": "Kb2",
    "solution": [
      "Ra2+",
      "Kxa2",
      "Bb3+",
      "Kb2",
      "Ra2+",
      "Kc1",
      "Rxc2#"
    ]
  },
  {
    "id": "6AVEo",
    "title": "Mate in 2",
    "theme": "Deflection",
    "difficulty": "Easy",
    "rating": 1306,
    "popularity": 76,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Find the forced mate in two. Deliver the famous opera-style mate.",
    "initialFen": "2r1k2r/4bppp/p2pp3/2n3PP/1q1Nb2R/P3B3/1PP5/1NKR1B2 w k - 0 19",
    "fen": "2r1k2r/4bppp/p2pp3/2n3PP/1P1Nb2R/4B3/1PP5/1NKR1B2 b k - 0 19",
    "preMove": "axb4",
    "solution": [
      "Nb3+",
      "Nxb3",
      "Rxc2#"
    ]
  },
  {
    "id": "ocDep",
    "title": "Mate in 3",
    "theme": "AdvancedPawn",
    "difficulty": "Medium",
    "rating": 1979,
    "popularity": 48,
    "description": "Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "r6k/3n1rNP/2pp1B2/4p3/1q1nP3/p2PK2P/6Q1/1q1R1BR1 b - - 3 29",
    "fen": "r6k/3n1rNP/2pp1B2/4p3/1q1nP3/p2PK2P/6Q1/3q1BR1 w - - 0 30",
    "preMove": "Qxd1",
    "solution": [
      "Ne8+",
      "Nxf6",
      "Qg8+",
      "Nxg8",
      "hxg8=Q#"
    ]
  },
  {
    "id": "vgUf4",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2097,
    "popularity": 91,
    "description": "Find the forced checkmate.",
    "initialFen": "r3r2k/1ppbqB1p/p1np1p1B/2b1p2Q/7N/3P4/PPP2PPP/R4RK1 b - - 5 15",
    "fen": "r3r2k/1pp1qB1p/p1np1p1B/2b1p2Q/6bN/3P4/PPP2PPP/R4RK1 w - - 6 16",
    "preMove": "Bg4",
    "solution": [
      "Ng6+",
      "hxg6",
      "Bg7+",
      "Kxg7",
      "Qxg6+",
      "Kh8",
      "Qh6#"
    ]
  },
  {
    "id": "4CApE",
    "title": "Mate in 3",
    "theme": "ArabianMate",
    "difficulty": "Medium",
    "rating": 1989,
    "popularity": 84,
    "description": "Deliver an Arabian mate with rook and knight. Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "r1b2r1k/p1pn3p/1p3R2/7Q/4Nq2/2PB4/PP2K2P/6R1 b - - 2 26",
    "fen": "r1b4k/p1pn3p/1p3r2/7Q/4Nq2/2PB4/PP2K2P/6R1 w - - 0 27",
    "preMove": "Rxf6",
    "solution": [
      "Qxh7+",
      "Kxh7",
      "Nxf6+",
      "Kh8",
      "Rg8#"
    ]
  },
  {
    "id": "kQNs2",
    "title": "Mate in 3",
    "theme": "DiscoveredAttack",
    "difficulty": "Medium",
    "rating": 1754,
    "popularity": 83,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "6k1/pr4p1/7p/4Bp2/P1bp4/b5P1/5P1P/1KRR4 w - - 9 39",
    "fen": "6k1/pr4p1/7p/4Bp2/P1bp4/b5P1/5P1P/K1RR4 b - - 10 39",
    "preMove": "Ka1",
    "solution": [
      "Bb2+",
      "Kb1",
      "Bc3+",
      "Kc2",
      "Rb2#"
    ]
  },
  {
    "id": "MOe5M",
    "title": "Mate in 5",
    "theme": "ArabianMate",
    "difficulty": "Medium",
    "rating": 1911,
    "popularity": 93,
    "description": "Deliver an Arabian mate with rook and knight. Find the forced checkmate.",
    "initialFen": "2k4r/1p1b1p2/p1p1p3/3pP1q1/P2P3n/2PB3R/1P2QPrN/RN5K w - - 2 27",
    "fen": "2k4r/1p1b1p2/p1p1p3/3pP1q1/P2P3n/2PB3R/1P1NQPrN/R6K b - - 3 27",
    "preMove": "Nd2",
    "solution": [
      "Rxh2+",
      "Rxh2",
      "Qg2+",
      "Rxg2",
      "Nf3+",
      "Bh7",
      "Rxh7+",
      "Rh2",
      "Rxh2#"
    ]
  },
  {
    "id": "XFg4p",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2138,
    "popularity": 75,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2k4r/1bp3q1/pn2p3/2Qr2N1/8/2PB4/P4PPP/1R3RK1 w - - 3 22",
    "fen": "2k4r/1bp3q1/pn2N3/2Qr4/8/2PB4/P4PPP/1R3RK1 b - - 0 22",
    "preMove": "Nxe6",
    "solution": [
      "Qxg2+",
      "Kxg2",
      "Rg5#"
    ]
  },
  {
    "id": "5Lk7m",
    "title": "Mate in 4",
    "theme": "AdvancedPawn",
    "difficulty": "Medium",
    "rating": 1820,
    "popularity": 97,
    "description": "Find the forced checkmate. Deliver the famous opera-style mate. Deliver a Vukovic mate with knight support.",
    "initialFen": "5r1k/6p1/3p1pPp/pp1BqP1Q/3pP2P/3p1K2/PPr5/6R1 b - - 1 29",
    "fen": "5r1k/6p1/3p1pPp/pp1B1P1Q/3pP2P/3p1K2/PPr4q/6R1 w - - 2 30",
    "preMove": "Qh2",
    "solution": [
      "Qxh6+",
      "gxh6",
      "g7+",
      "Kh7",
      "gxf8=N+",
      "Kh8",
      "Rg8#"
    ]
  },
  {
    "id": "80U0K",
    "title": "Mate in 4",
    "theme": "AdvancedPawn",
    "difficulty": "Medium",
    "rating": 1882,
    "popularity": 93,
    "description": "Find the forced checkmate. Deliver the famous opera-style mate. Deliver a Vukovic mate with knight support.",
    "initialFen": "5r1k/p4Bp1/bp4Pp/3p4/3Pp1Rb/2P1Q3/PP1K1P2/R6q b - - 7 25",
    "fen": "5r1k/p4Bp1/bp4Pp/3p4/3Pp1Rb/2P1Q3/PP1K1P2/q7 w - - 0 26",
    "preMove": "Qxa1",
    "solution": [
      "Qxh6+",
      "gxh6",
      "g7+",
      "Kh7",
      "gxf8=N+",
      "Kh8",
      "Rg8#"
    ]
  },
  {
    "id": "RdGo2",
    "title": "Mate in 4",
    "theme": "AdvancedPawn",
    "difficulty": "Medium",
    "rating": 1582,
    "popularity": 93,
    "description": "Find the forced checkmate. Deliver the famous opera-style mate. Deliver a Vukovic mate with knight support.",
    "initialFen": "5r1k/6p1/3p1pPp/3Bp3/8/5P1Q/1r3q1P/6RK b - - 5 30",
    "fen": "5r1k/6p1/3p1pPp/3Bp3/8/5P1Q/3r1q1P/6RK w - - 6 31",
    "preMove": "Rd2",
    "solution": [
      "Qxh6+",
      "gxh6",
      "g7+",
      "Kh7",
      "gxf8=N+",
      "Kh8",
      "Rg8#"
    ]
  },
  {
    "id": "SXiO1",
    "title": "Mate in 5",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2080,
    "popularity": 89,
    "description": "Find the forced checkmate.",
    "initialFen": "6rk/ppp4p/3b1r2/8/4Rp1q/2P2Q2/PPB2P1B/4R2K w - - 7 29",
    "fen": "4R1rk/ppp4p/3b1r2/8/5p1q/2P2Q2/PPB2P1B/4R2K b - - 8 29",
    "preMove": "Re8",
    "solution": [
      "Qxh2+",
      "Kxh2",
      "Rh6+",
      "Qh3",
      "f3+",
      "R1e5",
      "Bxe5+",
      "Rxe5",
      "Rg2+",
      "Kh1",
      "Rxh3#"
    ]
  },
  {
    "id": "TAHBz",
    "title": "Mate in 4",
    "theme": "AdvancedPawn",
    "difficulty": "Easy",
    "rating": 1438,
    "popularity": 87,
    "description": "Find the forced checkmate. Deliver the famous opera-style mate. Deliver a Vukovic mate with knight support.",
    "initialFen": "6r1/p1k4q/4Q3/Pp1p4/1P1P3N/2P3pP/5bP1/5R1K w - - 1 39",
    "fen": "6r1/p1k4q/4Q3/Pp1p1N2/1P1P4/2P3pP/5bP1/5R1K b - - 2 39",
    "preMove": "Nf5",
    "solution": [
      "Qxh3+",
      "gxh3",
      "g2+",
      "Kh2",
      "gxf1=N+",
      "Kh1",
      "Rg1#"
    ]
  },
  {
    "id": "cLReE",
    "title": "Mate in 3",
    "theme": "DiscoveredCheck",
    "difficulty": "Hard",
    "rating": 2188,
    "popularity": 87,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r1bq1rk1/ppp3P1/3p2p1/2bNp3/2B1P3/3P4/PP3PP1/n1BK3R b - - 0 14",
    "fen": "r1bq2k1/ppp3P1/3p2p1/2bNp3/2B1P3/3P4/PP3rP1/n1BK3R w - - 0 15",
    "preMove": "Rxf2",
    "solution": [
      "Nf6+",
      "Kxg7",
      "Rh7+",
      "Kxf6",
      "Rf7#"
    ]
  },
  {
    "id": "JEHWO",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2006,
    "popularity": 97,
    "description": "Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "1r2kr2/4p2Q/3p1bP1/3Pn3/8/Pp2B3/1Pq5/K1N3RR w - - 5 33",
    "fen": "1r2kr2/4p1PQ/3p1b2/3Pn3/8/Pp2B3/1Pq5/K1N3RR b - - 0 33",
    "preMove": "g7",
    "solution": [
      "Qxb2+",
      "Kxb2",
      "Nc4+",
      "Kb1",
      "Nxa3#"
    ]
  },
  {
    "id": "2yIbI",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1751,
    "popularity": 96,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "1r2n1k1/3bpr2/1q1p2pB/2pP1NP1/2P1P3/1PQ5/5N1R/4K3 b - - 1 35",
    "fen": "1r2n1k1/3bpr2/3p2pB/2pP1NP1/2P1P3/1qQ5/5N1R/4K3 w - - 0 36",
    "preMove": "Qxb3",
    "solution": [
      "Qh8+",
      "Kxh8",
      "Bg7+",
      "Kg8",
      "Rh8#"
    ]
  },
  {
    "id": "46wHy",
    "title": "Mate in 4",
    "theme": "Deflection",
    "difficulty": "Medium",
    "rating": 1755,
    "popularity": 96,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r4rk1/pp3ppn/1qp1p1n1/6PB/3P4/2PQ2b1/PP4P1/1K1R3R b - - 1 21",
    "fen": "r4rk1/pp3ppn/1qp1p3/6PB/3P1n2/2PQ2b1/PP4P1/1K1R3R w - - 2 22",
    "preMove": "Nf4",
    "solution": [
      "Qxh7+",
      "Kxh7",
      "Bxf7+",
      "Nh3",
      "Rxh3+",
      "Bh4",
      "Rxh4#"
    ]
  },
  {
    "id": "TajeE",
    "title": "Mate in 4",
    "theme": "DiscoveredAttack",
    "difficulty": "Medium",
    "rating": 1661,
    "popularity": 96,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r4r1k/5ppp/1p3b1B/p2qp3/3p2R1/7P/PP4P1/5QK1 b - - 3 26",
    "fen": "r4r1k/5ppp/1p3b1B/p2q4/3pp1R1/7P/PP4P1/5QK1 w - - 0 27",
    "preMove": "e4",
    "solution": [
      "Qxf6",
      "gxf6",
      "Bg7+",
      "Kg8",
      "Bxf6+",
      "Qg5",
      "Rxg5#"
    ]
  },
  {
    "id": "cslQR",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1815,
    "popularity": 96,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "4rrk1/pppq4/3p2p1/P2P4/1PP1pPpB/4P3/1Q3PK1/7R b - - 5 32",
    "fen": "4r1k1/pppq1r2/3p2p1/P2P4/1PP1pPpB/4P3/1Q3PK1/7R w - - 6 33",
    "preMove": "Rf7",
    "solution": [
      "Qh8+",
      "Kxh8",
      "Bf6+",
      "Kg8",
      "Rh8#"
    ]
  },
  {
    "id": "GuRnD",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1798,
    "popularity": 95,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "r5k1/pp1qp3/2p3P1/2np2p1/3Qn1P1/4P3/PPP2r1B/2KR3R b - - 4 25",
    "fen": "r5k1/pp2p3/2p3P1/2np2p1/3Qn1q1/4P3/PPP2r1B/2KR3R w - - 0 26",
    "preMove": "Qxg4",
    "solution": [
      "Qh8+",
      "Kxh8",
      "Be5+",
      "Kg8",
      "Rh8#"
    ]
  },
  {
    "id": "OpWwR",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1877,
    "popularity": 95,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "6k1/7r/3p1Bp1/1pp1p1Qb/p3P3/P2P3q/1PP2R2/5RK1 w - - 3 33",
    "fen": "6k1/4B2r/3p2p1/1pp1p1Qb/p3P3/P2P3q/1PP2R2/5RK1 b - - 4 33",
    "preMove": "Be7",
    "solution": [
      "Qh1+",
      "Kxh1",
      "Bf3+",
      "Kg1",
      "Rh1#"
    ]
  },
  {
    "id": "RKdfN",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1698,
    "popularity": 95,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "2r2rk1/1b1n1q1p/p3p1B1/1p1pR3/3B3Q/5P2/PPP3PP/R5K1 b - - 0 24",
    "fen": "2r2rk1/1b1n1q2/p3p1p1/1p1pR3/3B3Q/5P2/PPP3PP/R5K1 w - - 0 25",
    "preMove": "hxg6",
    "solution": [
      "Qh8+",
      "Kxh8",
      "Rh5+",
      "Kg8",
      "Rh8#"
    ]
  },
  {
    "id": "e5bwY",
    "title": "Mate in 3",
    "theme": "Clearance",
    "difficulty": "Hard",
    "rating": 2031,
    "popularity": 95,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Find the forced mate in three. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2rr1k2/1b1q1ppQ/p3pb1p/1p6/3N4/P3B2P/1P3PP1/1BR1R1K1 b - - 0 22",
    "fen": "3r1k2/1b1q1ppQ/p3pb1p/1p6/3N4/P3B2P/1P3PP1/1Br1R1K1 w - - 0 23",
    "preMove": "Rxc1",
    "solution": [
      "Qh8+",
      "Ke7",
      "Nf5+",
      "exf5",
      "Bc5#"
    ]
  },
  {
    "id": "fQzY2",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1972,
    "popularity": 95,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "1r4k1/2p3pp/p1p4r/3p3b/3B4/P3PP1q/1PP2QN1/R4RK1 w - - 5 24",
    "fen": "1r4k1/2p3pp/p1p4r/3p3b/3B1N2/P3PP1q/1PP2Q2/R4RK1 b - - 6 24",
    "preMove": "Nf4",
    "solution": [
      "Qh1+",
      "Kxh1",
      "Bxf3+",
      "Kg1",
      "Rh1#"
    ]
  },
  {
    "id": "l3XgE",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1838,
    "popularity": 95,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "rn4k1/pp4pp/2p1p2r/3p1p1b/2PP4/1P1BP1Pq/PB1QNR2/2R1N1K1 w - - 5 18",
    "fen": "rn4k1/pp4pp/2p1p2r/3p1p1b/2PP1N2/1P1BP1Pq/PB1Q1R2/2R1N1K1 b - - 6 18",
    "preMove": "Nf4",
    "solution": [
      "Qh1+",
      "Kxh1",
      "Bf3+",
      "Kg1",
      "Rh1#"
    ]
  },
  {
    "id": "5MgkC",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2101,
    "popularity": 94,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "r1b2rk1/1p1q4/p2p2P1/2pPp2Q/3bpP1B/3P3R/PP5P/1R5K b - - 1 22",
    "fen": "r1b3k1/1p1q4/p2p2P1/2pPp2Q/3bpr1B/3P3R/PP5P/1R5K w - - 0 23",
    "preMove": "Rxf4",
    "solution": [
      "Qh8+",
      "Kxh8",
      "Bf6+",
      "Kg8",
      "Rh8#"
    ]
  },
  {
    "id": "5Pv91",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1904,
    "popularity": 94,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "r5rk/pp2R1b1/3p3p/2qP4/2p5/N1Pb1B1P/PP1Q3N/6RK w - - 1 24",
    "fen": "r5rk/pp2R1b1/3p3p/2qP4/2p5/2Pb1B1P/PPNQ3N/6RK b - - 2 24",
    "preMove": "Nc2",
    "solution": [
      "Qxg1+",
      "Kxg1",
      "Bd4+",
      "Kh1",
      "Rg1#"
    ]
  },
  {
    "id": "FelyE",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1959,
    "popularity": 94,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "6k1/1ppr1r1p/p3p1R1/n3Pp1Q/3p1P1B/1Pq1P2R/P5PP/6K1 b - - 0 28",
    "fen": "6k1/1ppr1r2/p3p1p1/n3Pp1Q/3p1P1B/1Pq1P2R/P5PP/6K1 w - - 0 29",
    "preMove": "hxg6",
    "solution": [
      "Qh8+",
      "Kxh8",
      "Bf6+",
      "Kg8",
      "Rh8#"
    ]
  },
  {
    "id": "H065S",
    "title": "Mate in 3",
    "theme": "ArabianMate",
    "difficulty": "Medium",
    "rating": 1576,
    "popularity": 94,
    "description": "Deliver an Arabian mate with rook and knight. Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "r1b1nr1k/p3pp2/3p3P/q1p3Q1/1p1bP1N1/8/PPPB1P2/RN2K1R1 b Q - 1 19",
    "fen": "r1b1n1rk/p3pp2/3p3P/q1p3Q1/1p1bP1N1/8/PPPB1P2/RN2K1R1 w Q - 2 20",
    "preMove": "Rg8",
    "solution": [
      "Qxg8+",
      "Kxg8",
      "Nf6+",
      "Kh8",
      "Rg8#"
    ]
  },
  {
    "id": "UGACW",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2097,
    "popularity": 94,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "2k4r/ppp1b1R1/2np4/4p2b/4P3/2PPB1Pq/PPBN4/R3Q1K1 w - - 1 20",
    "fen": "2k4r/ppp1b1R1/2np4/4p2b/4P3/2PPB1Pq/PPBN1Q2/R5K1 b - - 2 20",
    "preMove": "Qf2",
    "solution": [
      "Qh1+",
      "Kxh1",
      "Bf3+",
      "Kg1",
      "Rh1#"
    ]
  },
  {
    "id": "jpwb6",
    "title": "Mate in 4",
    "theme": "Deflection",
    "difficulty": "Medium",
    "rating": 1867,
    "popularity": 94,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r4rk1/1p1nbppp/1q2p1n1/p2pP2B/2pP1N2/2P5/PPQ2PP1/R1B1K2R b KQ - 1 18",
    "fen": "r4rk1/1p1nbppp/1q2p3/p2pP2B/2pP1n2/2P5/PPQ2PP1/R1B1K2R w KQ - 0 19",
    "preMove": "Nxf4",
    "solution": [
      "Qxh7+",
      "Kxh7",
      "Bxf7+",
      "Bh4",
      "Rxh4+",
      "Nh5",
      "Rxh5#"
    ]
  },
  {
    "id": "sG49P",
    "title": "Mate in 5",
    "theme": "DiscoveredCheck",
    "difficulty": "Medium",
    "rating": 1794,
    "popularity": 94,
    "description": "Find the forced checkmate. Deliver the famous opera-style mate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2kr1b1r/pppbqppp/8/8/1PPQ4/P4P2/1B2PP1P/R3KB1R w KQ - 1 13",
    "fen": "2kr1b1r/Qppbqppp/8/8/1PP5/P4P2/1B2PP1P/R3KB1R b KQ - 0 13",
    "preMove": "Qxa7",
    "solution": [
      "Qxb4+",
      "axb4",
      "Bxb4+",
      "Bc3",
      "Bxc3+",
      "Kd1",
      "Ba4+",
      "Kc1",
      "Rd1#"
    ]
  },
  {
    "id": "HnWn9",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1779,
    "popularity": 93,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "r2q3k/1b1n3r/p2p1pQ1/1p1Pp3/1P2P1B1/6R1/P4PPP/4R1K1 b - - 2 27",
    "fen": "r2q1n1k/1b5r/p2p1pQ1/1p1Pp3/1P2P1B1/6R1/P4PPP/4R1K1 w - - 3 28",
    "preMove": "Nf8",
    "solution": [
      "Qg8+",
      "Kxg8",
      "Be6+",
      "Kh8",
      "Rg8#"
    ]
  },
  {
    "id": "bq8a1",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2196,
    "popularity": 92,
    "description": "Find the forced checkmate. Deliver the famous opera-style mate.",
    "initialFen": "1rb2rk1/pp3ppp/8/3Q4/8/4qBP1/PP4KP/4RR2 b - - 2 19",
    "fen": "1rb2rk1/pp3ppp/1q6/3Q4/8/5BP1/PP4KP/4RR2 w - - 3 20",
    "preMove": "Qb6",
    "solution": [
      "Qxf7+",
      "Kxf7",
      "Bh5+",
      "Kg8",
      "Rxf8+",
      "Kxf8",
      "Re8#"
    ]
  },
  {
    "id": "vd1Cb",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1954,
    "popularity": 91,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "7r/4nkp1/2P1p3/1P1qPpPb/p2p1P2/P2Q4/2B2RK1/1R6 w - - 8 43",
    "fen": "7r/4nkp1/2P1p3/1P1qPpPb/p2p1P2/P2Q4/2B2R2/1R4K1 b - - 9 43",
    "preMove": "Kg1",
    "solution": [
      "Qh1+",
      "Kxh1",
      "Bf3+",
      "Kg1",
      "Rh1#"
    ]
  },
  {
    "id": "BjqRl",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2065,
    "popularity": 90,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "5rk1/2bpq3/1p2pr2/p2P2N1/PnP4Q/2R5/1B3PPP/6K1 b - - 2 30",
    "fen": "5rk1/2bpq3/1p2p3/p2P2N1/PnP4Q/2R5/1B3rPP/6K1 w - - 0 31",
    "preMove": "Rxf2",
    "solution": [
      "Qh8+",
      "Kxh8",
      "Rh3+",
      "Kg8",
      "Rh8#"
    ]
  },
  {
    "id": "Ik3rF",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1720,
    "popularity": 87,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "6k1/pp3rp1/3p3p/2p1b2q/2PpPr2/5PQ1/PP5N/3B1RRK w - - 5 25",
    "fen": "6k1/pp3rp1/3p2Qp/2p1b2q/2PpPr2/5P2/PP5N/3B1RRK b - - 6 25",
    "preMove": "Qg6",
    "solution": [
      "Qxh2+",
      "Kxh2",
      "Rh4+",
      "Kg2",
      "Rh2#"
    ]
  },
  {
    "id": "BLIZB",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2076,
    "popularity": 85,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "6rk/p3R1b1/2q4n/2np1R2/2pQ1Pp1/2P3B1/PPB4P/7K b - - 0 31",
    "fen": "6rk/p3R3/2q4n/2np1R2/2pb1Pp1/2P3B1/PPB4P/7K w - - 0 32",
    "preMove": "Bxd4",
    "solution": [
      "Rh7+",
      "Kxh7",
      "Rf7+",
      "Kh8",
      "Rh7#"
    ]
  },
  {
    "id": "Z50uM",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1888,
    "popularity": 95,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2kr3r/ppp5/8/6Pp/1P1N1p2/P3P2b/3QBq2/R5RK w - - 0 27",
    "fen": "2kr3r/ppp5/8/6Pp/1P1N1pB1/P3P2b/3Q1q2/R5RK b - - 1 27",
    "preMove": "Bg4+",
    "solution": [
      "hxg4",
      "Qxf2",
      "Bf1+",
      "Qh2",
      "Rxh2+",
      "Kxh2",
      "Rh8#"
    ]
  },
  {
    "id": "jDGxU",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2024,
    "popularity": 95,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "3R4/1p2rp2/4PRkp/p5pb/P1q5/8/1B4PP/7K b - - 2 38",
    "fen": "3R4/1p2rp1k/4PR1p/p5pb/P1q5/8/1B4PP/7K w - - 3 39",
    "preMove": "Kh7",
    "solution": [
      "Rh8+",
      "Kxh8",
      "Rxh6+",
      "Kg8",
      "Rh8#"
    ]
  },
  {
    "id": "tMWBB",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2069,
    "popularity": 95,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "6rk/p3bprp/7R/1pppPR2/3P3P/2PB2P1/PP5K/8 b - - 1 26",
    "fen": "6rk/p3bp1p/7R/1pppPR2/3P3P/2PB2r1/PP5K/8 w - - 0 27",
    "preMove": "Rxg3",
    "solution": [
      "Rxh7+",
      "Kxh7",
      "Rxf7+",
      "Kh8",
      "Rh7#"
    ]
  },
  {
    "id": "38YBN",
    "title": "Mate in 5",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1655,
    "popularity": 94,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r1b4r/p3b1p1/5pBp/2p2P2/4k3/2pR2RP/PPP3P1/6K1 b - - 1 23",
    "fen": "r1b4r/p3b1p1/5pBp/2p2P2/4k3/3R2RP/PpP3P1/6K1 w - - 0 24",
    "preMove": "cxb2",
    "solution": [
      "Rge3+",
      "Kf4",
      "g3+",
      "Kg5",
      "h4+",
      "Kg4",
      "Re4+",
      "Kh3",
      "g4+",
      "Kxh4",
      "g5+",
      "Kxg5",
      "Rg3#"
    ]
  },
  {
    "id": "yN15S",
    "title": "Mate in 5",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2027,
    "popularity": 94,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "1k1r2r1/3pQp1p/p3p3/1p2q3/4b3/P4N2/1PB2PPP/2R2RK1 w - - 0 22",
    "fen": "1k1r2r1/3pQp1p/p3p3/1p2N3/4b3/P7/1PB2PPP/2R2RK1 b - - 0 22",
    "preMove": "Nxe5",
    "solution": [
      "Rxg2+",
      "Kh1",
      "Rg1+",
      "Kxg1",
      "Rg8+",
      "Qg5",
      "Rxg5+",
      "Ng4",
      "Rxg4#"
    ]
  },
  {
    "id": "CZcZE",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2027,
    "popularity": 92,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "7r/ppp1R3/3P2k1/2b1P3/6b1/1BPP3P/PP1N1rPK/R7 w - - 1 23",
    "fen": "7r/ppp1R3/3P2k1/2b1P3/4N1b1/1BPP3P/PP3rPK/R7 b - - 2 23",
    "preMove": "Ne4",
    "solution": [
      "Rxh3+",
      "Kg1",
      "Rf1+",
      "Kxf1",
      "Rh1#"
    ]
  },
  {
    "id": "p8N7c",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Easy",
    "rating": 1346,
    "popularity": 91,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "Q6k/4p1rp/p7/1p6/3q1PB1/7P/n1Pr4/4R1RK b - - 1 32",
    "fen": "Q5rk/4p2p/p7/1p6/3q1PB1/7P/n1Pr4/4R1RK w - - 2 33",
    "preMove": "Rg8",
    "solution": [
      "Qxg8+",
      "Kxg8",
      "Be6+",
      "Kh8",
      "Rg8#"
    ]
  },
  {
    "id": "66Xbk",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1842,
    "popularity": 90,
    "description": "Deliver a hook mate with rook, knight, and pawn. Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "6r1/1pp1qp1k/p1np1prp/4p2Q/P2PP2N/2PBP2R/1P4PP/6K1 b - - 11 24",
    "fen": "6r1/1pp1qp1k/p1np1p1p/4p1rQ/P2PP2N/2PBP2R/1P4PP/6K1 w - - 12 25",
    "preMove": "Rg5",
    "solution": [
      "Qxh6+",
      "Kxh6",
      "Nf5+",
      "Kg6",
      "Rh6#"
    ]
  },
  {
    "id": "MEai8",
    "title": "Mate in 4",
    "theme": "Deflection",
    "difficulty": "Hard",
    "rating": 2033,
    "popularity": 89,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r3r1k1/p4ppp/5b2/1Pp5/2B3b1/PN2q3/R1QN2PP/2K4R w - - 6 27",
    "fen": "r3r1k1/p4ppp/5b2/1Pp5/2B3b1/PN1Qq3/R2N2PP/2K4R b - - 7 27",
    "preMove": "Qd3",
    "solution": [
      "Qe1+",
      "Rxe1",
      "Rxe1+",
      "Kc2",
      "Bd1+",
      "Kb1",
      "Bxb3#"
    ]
  },
  {
    "id": "UTmcI",
    "title": "Mate in 2",
    "theme": "Clearance",
    "difficulty": "Medium",
    "rating": 1885,
    "popularity": 89,
    "description": "Find the forced checkmate. Find the forced mate in two. Finish with the classic Morphy's mate pattern. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r1b1rk1Q/1pq2pp1/p3pb1p/8/3N4/2P1B2P/PP3PP1/3RR1K1 b - - 4 19",
    "fen": "r1b1r2Q/1pq1kpp1/p3pb1p/8/3N4/2P1B2P/PP3PP1/3RR1K1 w - - 5 20",
    "preMove": "Ke7",
    "solution": [
      "Nf5+",
      "exf5",
      "Bc5#"
    ]
  },
  {
    "id": "VKHuC",
    "title": "Mate in 5",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1993,
    "popularity": 88,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "3r1rk1/ppq2ppp/2n5/2p5/4NPbb/PP2PB2/1BP1N2P/2K1R1R1 b - - 8 18",
    "fen": "3r1rk1/ppq2ppp/2n5/2p5/4NP1b/PP2Pb2/1BP1N2P/2K1R1R1 w - - 0 19",
    "preMove": "Bxf3",
    "solution": [
      "Rxg7+",
      "Kh8",
      "Rg8+",
      "Kxg8",
      "Rg1+",
      "Bg3",
      "Rxg3+",
      "Bg4",
      "Rxg4#"
    ]
  },
  {
    "id": "CGlYl",
    "title": "Mate in 5",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2016,
    "popularity": 87,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2kr2r1/pbpp1p1p/1p3b2/6B1/8/2NB4/PPP2PPP/R4RK1 w - - 0 14",
    "fen": "2kr2r1/pbpp1p1p/1p3B2/8/8/2NB4/PPP2PPP/R4RK1 b - - 0 14",
    "preMove": "Bxf6",
    "solution": [
      "Rxg2+",
      "Kh1",
      "Rg1+",
      "Kxg1",
      "Rg8+",
      "Bg6",
      "Rxg6+",
      "Bg5",
      "Rxg5#"
    ]
  },
  {
    "id": "nIaN0",
    "title": "Mate in 2",
    "theme": "AdvancedPawn",
    "difficulty": "Easy",
    "rating": 1484,
    "popularity": 99,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "3qrr1k/pppb2p1/1n1p3P/6p1/3QP3/1BN5/PPP5/2K3RR b - - 0 22",
    "fen": "4rr1k/pppb2p1/1n1p1q1P/6p1/3QP3/1BN5/PPP5/2K3RR w - - 1 23",
    "preMove": "Qf6",
    "solution": [
      "hxg7+",
      "Kxg7",
      "Rxg5#"
    ]
  },
  {
    "id": "7xU8P",
    "title": "Mate in 3",
    "theme": "BackRankMate",
    "difficulty": "Medium",
    "rating": 1559,
    "popularity": 86,
    "description": "Exploit the weak back rank. Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "2k2b1r/ppp3pp/8/3n4/1q2P1P1/7B/PPP1QP2/2KR4 b - - 0 20",
    "fen": "2k2b1r/ppp3pp/8/8/1q2PnP1/7B/PPP1QP2/2KR4 w - - 1 21",
    "preMove": "Nf4",
    "solution": [
      "g5+",
      "Nxh3",
      "Qg4+",
      "Kb8",
      "Rd8#"
    ]
  },
  {
    "id": "O4zB9",
    "title": "Mate in 2",
    "theme": "Clearance",
    "difficulty": "Medium",
    "rating": 1985,
    "popularity": 85,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "1r1qkr2/4pp1p/3p2b1/2pN4/p2nB3/1P1P4/PP3Q2/2K1R2R b - - 0 26",
    "fen": "1r1qkr2/4pp1p/3p2b1/2pN4/3nB3/1p1P4/PP3Q2/2K1R2R w - - 0 27",
    "preMove": "axb3",
    "solution": [
      "Nf6+",
      "exf6",
      "Bc6#"
    ]
  },
  {
    "id": "MtoD1",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2045,
    "popularity": 95,
    "description": "Trap the king in the corner. Find the forced checkmate.",
    "initialFen": "6r1/2Q4p/p4p1k/1p1qp3/3nN1b1/3P4/PPP2PPP/R4RK1 w - - 3 19",
    "fen": "6r1/2Q4p/p4N1k/1p1qp3/3n2b1/3P4/PPP2PPP/R4RK1 b - - 0 19",
    "preMove": "Nxf6",
    "solution": [
      "Qxg2+",
      "Kxg2",
      "Bf3+",
      "Kh3",
      "Bg2+",
      "Kh4",
      "Nf3#"
    ]
  },
  {
    "id": "efbrp",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1855,
    "popularity": 95,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "r4rk1/ppp2bp1/3p1qnp/5P2/4P3/1BP5/P2Q2PP/RN3RK1 w - - 0 17",
    "fen": "r4rk1/ppp2bp1/3p1qPp/8/4P3/1BP5/P2Q2PP/RN3RK1 b - - 0 17",
    "preMove": "fxg6",
    "solution": [
      "Qxf1+",
      "Kxf1",
      "Bc4+",
      "Ke1",
      "Rf1#"
    ]
  },
  {
    "id": "rzcmp",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1807,
    "popularity": 95,
    "description": "Find the forced checkmate. Deliver the famous opera-style mate.",
    "initialFen": "2kr3r/1p1bqpQp/p7/2Pn4/8/8/PPP2PPP/2KR1BNR w - - 1 15",
    "fen": "2kr3r/1p1bqpQp/p7/2PR4/8/8/PPP2PPP/2K2BNR b - - 0 15",
    "preMove": "Rxd5",
    "solution": [
      "Qe1+",
      "Rd1",
      "Qxd1+",
      "Kxd1",
      "Bg4+",
      "Kc1",
      "Rd1#"
    ]
  },
  {
    "id": "RCWte",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1687,
    "popularity": 94,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "r5k1/pp3ppp/2p4r/2P4b/3P4/1P3NBq/P2QBP2/3RR1K1 w - - 3 24",
    "fen": "r5k1/pp3ppp/2p4r/2P3Nb/3P4/1P4Bq/P2QBP2/3RR1K1 b - - 4 24",
    "preMove": "Ng5",
    "solution": [
      "Qh1+",
      "Kxh1",
      "Bf3+",
      "Kg1",
      "Rh1#"
    ]
  },
  {
    "id": "dOUzR",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2071,
    "popularity": 94,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "r4rk1/1ppn3p/p5p1/3Pbb2/P1q2B2/R1N5/1PBQ2PP/5RK1 w - - 0 19",
    "fen": "r4rk1/1ppn3p/p5p1/3PBb2/P1q5/R1N5/1PBQ2PP/5RK1 b - - 0 19",
    "preMove": "Bxe5",
    "solution": [
      "Qxf1+",
      "Kxf1",
      "Bd3+",
      "Ke1",
      "Rf1#"
    ]
  },
  {
    "id": "hdyt5",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1807,
    "popularity": 94,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "r2q1rk1/p2n1p2/1p2pnpQ/3p4/3P3B/P1Pp3R/2P2PPP/5RK1 b - - 1 18",
    "fen": "r2q1rk1/p2n1p2/1p2p1pQ/3p4/3P2nB/P1Pp3R/2P2PPP/5RK1 w - - 2 19",
    "preMove": "Ng4",
    "solution": [
      "Qh8+",
      "Kxh8",
      "Bf6+",
      "Kg8",
      "Rh8#"
    ]
  },
  {
    "id": "qIk2C",
    "title": "Mate in 3",
    "theme": "AdvancedPawn",
    "difficulty": "Easy",
    "rating": 1178,
    "popularity": 94,
    "description": "Break through with rooks on the seventh rank. Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "4qbk1/p1pnr1P1/5p1p/2p1pP1Q/4P3/2N4P/PrP3R1/6RK b - - 0 24",
    "fen": "5bk1/p1pnr1P1/5p1p/2p1pP1q/4P3/2N4P/PrP3R1/6RK w - - 0 25",
    "preMove": "Qxh5",
    "solution": [
      "gxf8=Q+",
      "Kxf8",
      "Rg8+",
      "Kf7",
      "R1g7#"
    ]
  },
  {
    "id": "8FkSl",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1945,
    "popularity": 93,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "5r1n/4q1pk/1pp4p/4R2P/r7/6Q1/1B3P2/3R2K1 b - - 0 31",
    "fen": "5r1n/6pk/1pp4p/4R2P/r6q/6Q1/1B3P2/3R2K1 w - - 1 32",
    "preMove": "Qh4",
    "solution": [
      "Qxg7+",
      "Kxg7",
      "Re7+",
      "Kg8",
      "Rg7#"
    ]
  },
  {
    "id": "cCTo8",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1753,
    "popularity": 92,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "r5k1/3p2pp/4p3/1p1nP3/b1pB1P2/q1P5/P1PQN1PP/KR6 w - - 2 26",
    "fen": "r5k1/3p2pp/4p3/1p1nP3/b1pB1P2/q1P5/P1P1N1PP/KRQ5 b - - 3 26",
    "preMove": "Qc1",
    "solution": [
      "Qxa2+",
      "Kxa2",
      "Bb3+",
      "Kb2",
      "Ra2#"
    ]
  },
  {
    "id": "WESDi",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1882,
    "popularity": 79,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "2krr3/pppb1ppp/5n2/8/1QPq4/8/PP1NBPPP/R1B1K2R w KQ - 3 13",
    "fen": "2krr3/pppb1ppp/5n2/8/1QPq4/5N2/PP2BPPP/R1B1K2R b KQ - 4 13",
    "preMove": "Nf3",
    "solution": [
      "Qd1+",
      "Kxd1",
      "Ba4+",
      "Ke1",
      "Rd1#"
    ]
  },
  {
    "id": "1KiJi",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2045,
    "popularity": 91,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "r1b1qrk1/1pp3b1/p2N3p/3P4/1PPQ3P/5nB1/P1B5/R2K2R1 b - - 0 23",
    "fen": "r1b1qrk1/1p4b1/p2p3p/3P4/1PPQ3P/5nB1/P1B5/R2K2R1 w - - 0 24",
    "preMove": "cxd6",
    "solution": [
      "Qxg7+",
      "Kxg7",
      "Be5+",
      "Kf7",
      "Rg7#"
    ]
  },
  {
    "id": "vRU63",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2101,
    "popularity": 91,
    "description": "Trap the king between its own rooks. Find the forced checkmate.",
    "initialFen": "4rr1k/pp3b1p/5ppQ/2pP3P/2P3P1/1P1B3R/P1KR4/q7 b - - 0 29",
    "fen": "4r1rk/pp3b1p/5ppQ/2pP3P/2P3P1/1P1B3R/P1KR4/q7 w - - 1 30",
    "preMove": "Rg8",
    "solution": [
      "Qxh7+",
      "Kxh7",
      "hxg6+",
      "Kg7",
      "Rh7+",
      "Kf8",
      "Rxf7#"
    ]
  },
  {
    "id": "98Zvv",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2091,
    "popularity": 90,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "1k1r4/5ppp/QP1b4/1K1p1P2/3P4/4r2P/B3pq2/R7 b - - 4 36",
    "fen": "1k1r4/5ppp/QP1b4/1K1p1P2/3P4/4r2P/B4q2/R3q3 w - - 0 37",
    "preMove": "e1=Q",
    "solution": [
      "Qa8+",
      "Kxa8",
      "Bxd5+",
      "Kb8",
      "Ra8#"
    ]
  },
  {
    "id": "hfrna",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2049,
    "popularity": 90,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "5rk1/5ppp/p5n1/1pp5/6QP/2P2NB1/Pr2q3/6RK b - - 0 30",
    "fen": "5rk1/4nppp/p7/1pp5/6QP/2P2NB1/Pr2q3/6RK w - - 1 31",
    "preMove": "Ne7",
    "solution": [
      "Qxg7+",
      "Kxg7",
      "Be5+",
      "Kh6",
      "Bg7+",
      "Kh5",
      "Rg5#"
    ]
  },
  {
    "id": "RarD8",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1903,
    "popularity": 89,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "r5k1/1p4pp/p1p4r/P2pPP1b/1P5q/2PBPQ2/5R2/R5K1 w - - 1 26",
    "fen": "r5k1/1p4pp/p1p4r/P2pPP1b/1P3Q1q/2PBP3/5R2/R5K1 b - - 2 26",
    "preMove": "Qf4",
    "solution": [
      "Qh1+",
      "Kxh1",
      "Bf3+",
      "Kg1",
      "Rh1#"
    ]
  },
  {
    "id": "j6xuG",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2040,
    "popularity": 89,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r1b1k2r/ppQ1p1bp/2n3p1/2P4n/2B1p3/8/PqPB1PPP/3RK1NR b Kkq - 5 14",
    "fen": "r1b1k2r/ppQ1p1bp/6p1/2P1n2n/2B1p3/8/PqPB1PPP/3RK1NR w Kkq - 6 15",
    "preMove": "Ne5",
    "solution": [
      "Qd8+",
      "Kxd8",
      "Ba5+",
      "Ke8",
      "Rd8#"
    ]
  },
  {
    "id": "Z1OQt",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1882,
    "popularity": 76,
    "description": "Deliver a hook mate with rook, knight, and pawn. Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "2k2r2/ppp3p1/r3p1p1/n2pN1P1/q2P4/P1P3QP/K1PR1P2/1R6 w - - 11 26",
    "fen": "2k2r2/ppp3p1/r3p1p1/n2pN1P1/qR1P4/P1P3QP/K1PR1P2/8 b - - 12 26",
    "preMove": "Rb4",
    "solution": [
      "Qxa3+",
      "Kxa3",
      "Nc4+",
      "Kb3",
      "Ra3#"
    ]
  },
  {
    "id": "923u1",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1995,
    "popularity": 88,
    "description": "Find the forced checkmate. Deliver the famous opera-style mate.",
    "initialFen": "2k2bnr/ppp2ppp/8/3r3q/3B4/4Q1R1/PPP2P1P/2KR4 b - - 1 17",
    "fen": "2k2bnr/ppp2p1p/6p1/3r3q/3B4/4Q1R1/PPP2P1P/2KR4 w - - 0 18",
    "preMove": "g6",
    "solution": [
      "Qe8+",
      "Rd8",
      "Qxd8+",
      "Kxd8",
      "Bf6+",
      "Ke8",
      "Rd8#"
    ]
  },
  {
    "id": "7XnJ7",
    "title": "Mate in 5",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2131,
    "popularity": 86,
    "description": "Find the forced checkmate.",
    "initialFen": "r4rk1/p2nb1pb/8/q2Np3/P2Pn1R1/1BN4P/1P6/R1BQK3 b Q - 2 23",
    "fen": "r4rk1/p2nb1pb/8/q2Np3/P2P2R1/1Bn4P/1P6/R1BQK3 w Q - 0 24",
    "preMove": "Nxc3",
    "solution": [
      "Nxe7+",
      "Kh8",
      "Ng6+",
      "Bxg6",
      "Rh4+",
      "Bh7",
      "Rxh7+",
      "Kxh7",
      "Qh5#"
    ]
  },
  {
    "id": "vOjIF",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1833,
    "popularity": 85,
    "description": "Find the forced checkmate. Deliver the famous opera-style mate.",
    "initialFen": "5rk1/7p/3r1bp1/p4q2/Q1P1N3/P5Pb/4PP1P/3R2KB w - - 0 28",
    "fen": "5rk1/7p/3N1bp1/p4q2/Q1P5/P5Pb/4PP1P/3R2KB b - - 0 28",
    "preMove": "Nxd6",
    "solution": [
      "Qxf2+",
      "Kxf2",
      "Bd4+",
      "Ke1",
      "Bc3+",
      "Rd2",
      "Rf1#"
    ]
  },
  {
    "id": "uGmfZ",
    "title": "Mate in 4",
    "theme": "AdvancedPawn",
    "difficulty": "Medium",
    "rating": 1784,
    "popularity": 97,
    "description": "Trap the king between its own rooks. Find the forced checkmate.",
    "initialFen": "1n1q3k/4nr2/pp1p1b1P/3P1b2/5P2/8/PPP3Q1/2K3RR b - - 3 27",
    "fen": "1n3q1k/4nr2/pp1p1b1P/3P1b2/5P2/8/PPP3Q1/2K3RR w - - 4 28",
    "preMove": "Qf8",
    "solution": [
      "Qg7+",
      "Rxg7",
      "hxg7+",
      "Kg8",
      "Rh8+",
      "Kf7",
      "Rxf8#"
    ]
  },
  {
    "id": "5rECw",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1932,
    "popularity": 96,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "3rk2r/p2bbppp/5p2/8/4Q3/2P1B3/P3qPPP/R3R1K1 b k - 4 17",
    "fen": "3rk2r/p2bbppp/5p2/8/4Q1q1/2P1B3/P4PPP/R3R1K1 w k - 5 18",
    "preMove": "Qg4",
    "solution": [
      "Qxe7+",
      "Kxe7",
      "Bc5#"
    ]
  },
  {
    "id": "MjZTP",
    "title": "Mate in 3",
    "theme": "AdvancedPawn",
    "difficulty": "Medium",
    "rating": 1814,
    "popularity": 96,
    "description": "Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "k1r5/n1r2pp1/1QP2b1p/8/8/3p3P/P1q3P1/1RR4K b - - 4 37",
    "fen": "k1r5/n1r2pp1/1QP2b1p/8/q7/3p3P/P5P1/1RR4K w - - 5 38",
    "preMove": "Qa4",
    "solution": [
      "Qb7+",
      "Rxb7",
      "cxb7+",
      "Kb8",
      "bxc8=Q#"
    ]
  },
  {
    "id": "6Ippu",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2103,
    "popularity": 95,
    "description": "Find the forced checkmate. Find the forced mate in two. Finish with the classic Morphy's mate pattern. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r3kb1r/1p2pp1p/p1q2np1/4Q3/8/2N1B3/PPP2PPP/2KRR3 b kq - 2 13",
    "fen": "r3k2r/1p2ppbp/p1q2np1/4Q3/8/2N1B3/PPP2PPP/2KRR3 w kq - 3 14",
    "preMove": "Bg7",
    "solution": [
      "Qxe7+",
      "Kxe7",
      "Bc5#"
    ]
  },
  {
    "id": "9JXN6",
    "title": "Mate in 4",
    "theme": "AdvancedPawn",
    "difficulty": "Medium",
    "rating": 1731,
    "popularity": 95,
    "description": "Find the forced checkmate.",
    "initialFen": "3kN1rr/p4p2/4p1q1/2B5/Q3PPn1/2PP1R1p/PP6/6RK w - - 4 32",
    "fen": "3kN1rr/Q4p2/4p1q1/2B5/4PPn1/2PP1R1p/PP6/6RK b - - 0 32",
    "preMove": "Qxa7",
    "solution": [
      "Nf2+",
      "Bxf2",
      "Qg2+",
      "Rxg2",
      "hxg2+",
      "Kg1",
      "Rh1#"
    ]
  },
  {
    "id": "DxCDO",
    "title": "Mate in 3",
    "theme": "AdvancedPawn",
    "difficulty": "Easy",
    "rating": 1355,
    "popularity": 95,
    "description": "Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "r1k5/p2p1Nb1/b1pBp2p/2p4Q/3qP3/3Pp3/P1P3PP/5RK1 w - - 5 22",
    "fen": "r1k5/p2p1Nb1/b1p1p2p/2B4Q/3qP3/3Pp3/P1P3PP/5RK1 b - - 0 22",
    "preMove": "Bxc5",
    "solution": [
      "e2+",
      "Bxd4",
      "Bxd4+",
      "Rf2",
      "e1=Q#"
    ]
  },
  {
    "id": "W0To5",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1820,
    "popularity": 95,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "6k1/pp5p/2nb4/3P3q/4prb1/1P6/PB3P1P/2RQ2RK w - - 1 26",
    "fen": "6k1/pp5p/2Pb4/7q/4prb1/1P6/PB3P1P/2RQ2RK b - - 0 26",
    "preMove": "dxc6",
    "solution": [
      "Qxh2+",
      "Kxh2",
      "Rxf2+",
      "Kh1",
      "Rh2#"
    ]
  },
  {
    "id": "W0W89",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2037,
    "popularity": 95,
    "description": "Find the forced checkmate. Find the forced mate in two. Finish with the classic Morphy's mate pattern. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r1q1kb1r/pp2pp1p/2b2np1/4Q3/8/2N1BN2/PPP2PPP/2KRR3 b kq - 2 13",
    "fen": "r1q1k2r/pp2ppbp/2b2np1/4Q3/8/2N1BN2/PPP2PPP/2KRR3 w kq - 3 14",
    "preMove": "Bg7",
    "solution": [
      "Qxe7+",
      "Kxe7",
      "Bc5#"
    ]
  },
  {
    "id": "aB5rq",
    "title": "Mate in 5",
    "theme": "BackRankMate",
    "difficulty": "Hard",
    "rating": 2041,
    "popularity": 95,
    "description": "Exploit the weak back rank. Find the forced checkmate.",
    "initialFen": "r4rk1/1p3ppp/p4b2/3Q1P2/8/8/PqP3PP/3RRB1K b - - 0 19",
    "fen": "3r1rk1/1p3ppp/p4b2/3Q1P2/8/8/PqP3PP/3RRB1K w - - 1 20",
    "preMove": "Rad8",
    "solution": [
      "Qxf7+",
      "Rxf7",
      "Rxd8+",
      "Bxd8",
      "Re8+",
      "Rf8",
      "Bc4+",
      "Kh8",
      "Rxf8#"
    ]
  },
  {
    "id": "nlsTJ",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1888,
    "popularity": 95,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r3r1k1/1pp3bp/3p4/PNnPp3/2P1P2q/PN3Ppb/2Q5/1RB2BRK w - - 0 25",
    "fen": "r3r1k1/1pp3bp/3p4/PNnPp1B1/2P1P2q/PN3Ppb/2Q5/1R3BRK b - - 1 25",
    "preMove": "Bg5",
    "solution": [
      "Bg2+",
      "Kxg2",
      "Qh2#"
    ]
  },
  {
    "id": "DxMMx",
    "title": "Mate in 3",
    "theme": "DiscoveredCheck",
    "difficulty": "Medium",
    "rating": 1922,
    "popularity": 94,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver a smothered mate with the knight.",
    "initialFen": "Q6r/4k1pp/1q6/p3P3/1p1n4/3n4/PP2N1PP/2R2RK1 w - - 1 23",
    "fen": "7Q/4k1pp/1q6/p3P3/1p1n4/3n4/PP2N1PP/2R2RK1 b - - 0 23",
    "preMove": "Qxh8",
    "solution": [
      "Nxe2+",
      "Kh1",
      "Qg1+",
      "Rxg1",
      "Nf2#"
    ]
  },
  {
    "id": "m0mCv",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2066,
    "popularity": 94,
    "description": "Find the forced checkmate. Find the forced mate in two. Finish with the classic Morphy's mate pattern. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r1b1k2r/pp2bpp1/2p2p1p/q7/4QP2/2NRB3/PPP3PP/2K1R3 b kq - 2 15",
    "fen": "r3k2r/pp2bpp1/2p2p1p/q4b2/4QP2/2NRB3/PPP3PP/2K1R3 w kq - 3 16",
    "preMove": "Bf5",
    "solution": [
      "Qxe7+",
      "Kxe7",
      "Bc5#"
    ]
  },
  {
    "id": "F1wAs",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1802,
    "popularity": 93,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "1r2r1k1/p3pp1p/1p1q2pB/4b3/8/1Q3B1P/P5P1/5R1K b - - 1 23",
    "fen": "1r2r1k1/p3ppbp/1p1q2pB/8/8/1Q3B1P/P5P1/5R1K w - - 2 24",
    "preMove": "Bg7",
    "solution": [
      "Qxf7+",
      "Kxf7",
      "Bd5#"
    ]
  },
  {
    "id": "ypNPV",
    "title": "Mate in 3",
    "theme": "AdvancedPawn",
    "difficulty": "Medium",
    "rating": 1562,
    "popularity": 93,
    "description": "Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "r6k/p1p1Nr1P/1p1p4/4n1B1/4q3/8/PPP2P1R/2K3R1 b - - 2 25",
    "fen": "5r1k/p1p1Nr1P/1p1p4/4n1B1/4q3/8/PPP2P1R/2K3R1 w - - 3 26",
    "preMove": "Raf8",
    "solution": [
      "Bf6+",
      "Rxf6",
      "Rg8+",
      "Rxg8",
      "hxg8=Q#"
    ]
  },
  {
    "id": "nsj8x",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1982,
    "popularity": 80,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2kr2r1/1pp2p2/p4nbB/2NP4/2P5/P6q/5PPP/R2Q1RK1 w - - 3 21",
    "fen": "2kr2r1/1pp2p2/p4nbB/2NP4/2P5/PQ5q/5PPP/R4RK1 b - - 4 21",
    "preMove": "Qb3",
    "solution": [
      "Qxg2+",
      "Kxg2",
      "Be4+",
      "Kh3",
      "Bg2+",
      "Kh4",
      "Rg4#"
    ]
  },
  {
    "id": "aVJ4O",
    "title": "Mate in 3",
    "theme": "AdvancedPawn",
    "difficulty": "Easy",
    "rating": 917,
    "popularity": 91,
    "description": "Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "5N1k/r6P/8/1K1p4/pp6/2b4R/6r1/5R2 b - - 0 38",
    "fen": "5N1k/r6P/8/1K1p4/1p6/p1b4R/6r1/5R2 w - - 0 39",
    "preMove": "a3",
    "solution": [
      "Ng6+",
      "Rxg6",
      "Rf8+",
      "Rg8",
      "hxg8=Q#"
    ]
  },
  {
    "id": "rrArz",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2159,
    "popularity": 90,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Find the forced mate in two. Deliver the famous opera-style mate.",
    "initialFen": "4k3/1R1B4/2pB1p1r/2Pp3P/p2P4/4p1N1/5q2/7K b - - 1 59",
    "fen": "8/1R1B1k2/2pB1p1r/2Pp3P/p2P4/4p1N1/5q2/7K w - - 2 60",
    "preMove": "Kf7",
    "solution": [
      "Be6+",
      "Kxe6",
      "Re7#"
    ]
  },
  {
    "id": "k0yvm",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2009,
    "popularity": 76,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "r6k/1pp3pp/5p2/8/2Nq2PN/bQ5P/2K1rP2/3R3R w - - 4 27",
    "fen": "r6k/1pp3pp/5p2/8/2Nq2PN/bQ5P/4rP2/1K1R3R b - - 5 27",
    "preMove": "Kb1",
    "solution": [
      "Qa1+",
      "Kxa1",
      "Bb2+",
      "Kb1",
      "Ra1#"
    ]
  },
  {
    "id": "AJBWN",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1862,
    "popularity": 88,
    "description": "Find the forced checkmate. Find the forced mate in two. Finish with the classic Morphy's mate pattern. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r2qk2r/1Q2bppp/p4n2/8/8/4BP2/PP3P1P/3RR1K1 b kq - 0 20",
    "fen": "r1q1k2r/1Q2bppp/p4n2/8/8/4BP2/PP3P1P/3RR1K1 w kq - 1 21",
    "preMove": "Qc8",
    "solution": [
      "Qxe7+",
      "Kxe7",
      "Bc5#"
    ]
  },
  {
    "id": "SqpzW",
    "title": "Mate in 5",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1937,
    "popularity": 87,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r4rk1/ppp2ppp/2n1bn2/8/4Q3/2BN4/PPP2P1P/2K3RR b - - 0 16",
    "fen": "r4rk1/ppp2ppp/2n1b3/8/4n3/2BN4/PPP2P1P/2K3RR w - - 0 17",
    "preMove": "Nxe4",
    "solution": [
      "Rxg7+",
      "Kh8",
      "Rg8+",
      "Kxg8",
      "Rg1+",
      "Bg4",
      "Rxg4+",
      "Ng5",
      "Rxg5#"
    ]
  },
  {
    "id": "HFP5w",
    "title": "Mate in 5",
    "theme": "AdvancedPawn",
    "difficulty": "Medium",
    "rating": 1787,
    "popularity": 84,
    "description": "Find the forced checkmate.",
    "initialFen": "k3q2r/p1Q3p1/1p6/3P1p2/1PPB2b1/P6p/6P1/1B3RK1 w - - 0 32",
    "fen": "k3q2r/p1Q3p1/1p6/3P1p2/1PPB2b1/P5Pp/8/1B3RK1 b - - 0 32",
    "preMove": "g3",
    "solution": [
      "h2+",
      "Kh1",
      "Bf3+",
      "Rxf3",
      "Qe1+",
      "Rf1",
      "Qxf1+",
      "Bg1",
      "hxg1=Q#"
    ]
  },
  {
    "id": "YJ0qV",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1683,
    "popularity": 95,
    "description": "Find the forced checkmate. Deliver the famous opera-style mate.",
    "initialFen": "2kr1b1Q/pp1b3p/5pp1/1p1R4/1q3B2/4P3/PPP2PPP/2K2BNR w - - 1 14",
    "fen": "2kr1b2/pp1b3p/5Qp1/1p1R4/1q3B2/4P3/PPP2PPP/2K2BNR b - - 0 14",
    "preMove": "Qxf6",
    "solution": [
      "Qe1+",
      "Rd1",
      "Qxd1+",
      "Kxd1",
      "Bg4+",
      "Kc1",
      "Rd1#"
    ]
  },
  {
    "id": "ZacaJ",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Easy",
    "rating": 1175,
    "popularity": 95,
    "description": "Find the forced checkmate. Deliver the famous opera-style mate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "1k1r3r/ppp3p1/2npB3/4pPqb/N7/1P1P3P/P1P2b2/R1B2R1K w - - 0 24",
    "fen": "1k1r3r/ppp3p1/2npB3/4pPBb/N7/1P1P3P/P1P2b2/R4R1K b - - 0 24",
    "preMove": "Bxg5",
    "solution": [
      "Bf3+",
      "Kh2",
      "Rxh3+",
      "Kxh3",
      "Rh8+",
      "Bh4",
      "Rxh4#"
    ]
  },
  {
    "id": "ZugXE",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1909,
    "popularity": 95,
    "description": "Find the forced checkmate.",
    "initialFen": "2r2r1k/1pq2pR1/p4n1p/5P2/2BQpp2/2P4P/P1P5/2KR4 b - - 0 20",
    "fen": "2r2r1k/1p3pR1/p4n1p/5P2/2qQpp2/2P4P/P1P5/2KR4 w - - 0 21",
    "preMove": "Qxc4",
    "solution": [
      "Qxf6",
      "Rc6",
      "Rg8+",
      "Kxg8",
      "Rg1+",
      "Kh7",
      "Qg7#"
    ]
  },
  {
    "id": "GlG0H",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2103,
    "popularity": 82,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "6k1/3b2pp/3Qp3/8/4PBn1/Nr5q/4B3/5RK1 b - - 13 32",
    "fen": "6k1/3b2pp/3Qp3/8/4PBn1/r6q/4B3/5RK1 w - - 0 33",
    "preMove": "Rxa3",
    "solution": [
      "Qf8+",
      "Kxf8",
      "Bd6+",
      "Ke8",
      "Rf8#"
    ]
  },
  {
    "id": "9Qin7",
    "title": "Mate in 3",
    "theme": "DiscoveredAttack",
    "difficulty": "Medium",
    "rating": 1995,
    "popularity": 94,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r1b2r1k/pp2q1pp/2p2p2/5PPQ/3Pp2P/1BP2n2/P1P1K3/R6R b - - 0 20",
    "fen": "r1b2r1k/pp2q1pp/2p5/5PpQ/3Pp2P/1BP2n2/P1P1K3/R6R w - - 0 21",
    "preMove": "fxg5",
    "solution": [
      "Qxh7+",
      "Kxh7",
      "hxg5+",
      "Nh4",
      "Rxh4#"
    ]
  },
  {
    "id": "8h0xF",
    "title": "Mate in 3",
    "theme": "DiscoveredAttack",
    "difficulty": "Medium",
    "rating": 1924,
    "popularity": 92,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r4rk1/1p3p1p/p3q2Q/1b1pbp2/N2B4/1P6/P1P2K1P/6R1 b - - 1 25",
    "fen": "r4r1k/1p3p1p/p3q2Q/1b1pbp2/N2B4/1P6/P1P2K1P/6R1 w - - 2 26",
    "preMove": "Kh8",
    "solution": [
      "Qg7+",
      "Bxg7",
      "Bxg7+",
      "Kg8",
      "Bf6#"
    ]
  },
  {
    "id": "Jz0ed",
    "title": "Mate in 3",
    "theme": "DiscoveredAttack",
    "difficulty": "Hard",
    "rating": 2110,
    "popularity": 91,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "rnb2r1k/pp3Bpp/2p5/2q3BQ/4p3/2P3N1/P1P1KbPP/R6R b - - 5 16",
    "fen": "rnb2r1k/pp3Bpp/2p5/2q3BQ/4p3/2P3b1/P1P1K1PP/R6R w - - 0 17",
    "preMove": "Bxg3",
    "solution": [
      "Qxh7+",
      "Kxh7",
      "hxg3+",
      "Bh3",
      "Rxh3#"
    ]
  },
  {
    "id": "KsYAm",
    "title": "Mate in 3",
    "theme": "DiscoveredAttack",
    "difficulty": "Medium",
    "rating": 1731,
    "popularity": 90,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "3q1r1k/5p1p/r3pb2/1p1P4/3B2QP/1P6/1P6/1K1R2R1 b - - 4 26",
    "fen": "3q1r1k/5p1p/r4b2/1p1p4/3B2QP/1P6/1P6/1K1R2R1 w - - 0 27",
    "preMove": "exd5",
    "solution": [
      "Qg7+",
      "Bxg7",
      "Bxg7+",
      "Kg8",
      "Bf6#"
    ]
  },
  {
    "id": "uNG2s",
    "title": "Mate in 3",
    "theme": "DiscoveredAttack",
    "difficulty": "Medium",
    "rating": 1661,
    "popularity": 89,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "8/p1p2kpp/4r3/1p2p3/6b1/P2P1q2/1PPQ1P1P/4RRK1 w - - 2 22",
    "fen": "8/p1p2kpp/4r3/1p2p3/6b1/P2PRq2/1PPQ1P1P/5RK1 b - - 3 22",
    "preMove": "Re3",
    "solution": [
      "Rg6",
      "Rxf3+",
      "Bxf3+",
      "Qg5",
      "Rxg5#"
    ]
  },
  {
    "id": "lG8Iq",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1803,
    "popularity": 88,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "4b2k/3nq2r/3pQp2/1p1Pp3/1Pp1P1B1/P5RP/5PP1/6K1 b - - 11 44",
    "fen": "4bn1k/4q2r/3pQp2/1p1Pp3/1Pp1P1B1/P5RP/5PP1/6K1 w - - 12 45",
    "preMove": "Nf8",
    "solution": [
      "Qg8+",
      "Kxg8",
      "Be6+",
      "Kh8",
      "Rg8#"
    ]
  },
  {
    "id": "NSdbg",
    "title": "Mate in 3",
    "theme": "DiscoveredAttack",
    "difficulty": "Medium",
    "rating": 1928,
    "popularity": 87,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "4k2r/p4ppp/2p3q1/2b1PP1n/8/P1N5/1P1rQ1PP/R4R1K w k - 0 20",
    "fen": "4k2r/p4ppp/2p3P1/2b1P2n/8/P1N5/1P1rQ1PP/R4R1K b k - 0 20",
    "preMove": "fxg6",
    "solution": [
      "Ng3+",
      "hxg3",
      "hxg6+",
      "Qh5",
      "Rxh5#"
    ]
  },
  {
    "id": "pUnqR",
    "title": "Mate in 4",
    "theme": "AdvancedPawn",
    "difficulty": "Medium",
    "rating": 1766,
    "popularity": 97,
    "description": "Find the forced checkmate.",
    "initialFen": "r6k/2pnq3/bp2N1QP/p2pP3/5r2/2P5/PP3PP1/R3K2R b KQ - 0 20",
    "fen": "6rk/2pnq3/bp2N1QP/p2pP3/5r2/2P5/PP3PP1/R3K2R w KQ - 1 21",
    "preMove": "Rg8",
    "solution": [
      "Qg7+",
      "Rxg7",
      "hxg7+",
      "Kg8",
      "Rh8+",
      "Kf7",
      "g8=Q#"
    ]
  },
  {
    "id": "zNWbh",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1947,
    "popularity": 96,
    "description": "Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "3r1rk1/1p3qnp/p5BQ/2Pp4/3P2PN/1P3PK1/8/7R b - - 0 40",
    "fen": "3r1rk1/1p3qn1/p5pQ/2Pp4/3P2PN/1P3PK1/8/7R w - - 0 41",
    "preMove": "hxg6",
    "solution": [
      "Qh8+",
      "Kxh8",
      "Nxg6+",
      "Kg8",
      "Rh8#"
    ]
  },
  {
    "id": "TWnIO",
    "title": "Mate in 4",
    "theme": "AdvancedPawn",
    "difficulty": "Hard",
    "rating": 2004,
    "popularity": 95,
    "description": "Corner the king in the kill box pattern. Find the forced checkmate.",
    "initialFen": "3q1rk1/pb2nppp/2p1p2P/6P1/1r1P4/3B1Q2/PP3P2/2KR2NR b - - 0 21",
    "fen": "3q1rk1/pb2nppp/4p2P/2p3P1/1r1P4/3B1Q2/PP3P2/2KR2NR w - - 0 22",
    "preMove": "c5",
    "solution": [
      "Bxh7+",
      "Kxh7",
      "hxg7+",
      "Kxg7",
      "Qf6+",
      "Kg8",
      "Rh8#"
    ]
  },
  {
    "id": "gdvnq",
    "title": "Mate in 2",
    "theme": "AdvancedPawn",
    "difficulty": "Hard",
    "rating": 2016,
    "popularity": 94,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver the famous opera-style mate. Deliver a Vukovic mate with knight support.",
    "initialFen": "8/R3Pkp1/3BN2p/1r1p4/2p1n3/P6P/1r4P1/4b2K b - - 0 42",
    "fen": "8/R3Pkp1/3BN2p/1r1p4/2p1n3/P6P/6P1/1r2b2K w - - 1 43",
    "preMove": "Rb1",
    "solution": [
      "e8=Q+",
      "Kxe8",
      "Re7#"
    ]
  },
  {
    "id": "mYvQX",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2036,
    "popularity": 94,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "6k1/pp3pqp/2b5/3r2N1/7Q/2P5/PP3PPP/5RK1 w - - 1 21",
    "fen": "6k1/pp3pqp/2b5/3r4/7Q/2P4N/PP3PPP/5RK1 b - - 2 21",
    "preMove": "Nh3",
    "solution": [
      "Qxg2+",
      "Kxg2",
      "Rg5#"
    ]
  },
  {
    "id": "vIh9e",
    "title": "Mate in 3",
    "theme": "DiscoveredAttack",
    "difficulty": "Medium",
    "rating": 1743,
    "popularity": 81,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "3q1rk1/1p3ppp/p1r2b2/3pBP2/P2P2Q1/2P4P/1P6/R5RK b - - 6 27",
    "fen": "3q1r1k/1p3ppp/p1r2b2/3pBP2/P2P2Q1/2P4P/1P6/R5RK w - - 7 28",
    "preMove": "Kh8",
    "solution": [
      "Qxg7+",
      "Bxg7",
      "Bxg7+",
      "Kg8",
      "Bf6#"
    ]
  },
  {
    "id": "1OFoT",
    "title": "Mate in 5",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1911,
    "popularity": 42,
    "description": "Find the forced checkmate. Deliver the famous opera-style mate.",
    "initialFen": "rnb2rk1/1pppRppp/1p6/7Q/5B2/8/PPq3PP/5R1K b - - 1 16",
    "fen": "rnb2rk1/1pppRppp/1p6/7Q/5B2/3q4/PP4PP/5R1K w - - 2 17",
    "preMove": "Qd3",
    "solution": [
      "Qxf7+",
      "Rxf7",
      "Re8+",
      "Rf8",
      "Rxf8+",
      "Kxf8",
      "Bd6+",
      "Kg8",
      "Rf8#"
    ]
  },
  {
    "id": "ZkhAq",
    "title": "Mate in 2",
    "theme": "DiscoveredAttack",
    "difficulty": "Hard",
    "rating": 2010,
    "popularity": 92,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2kr3r/ppp2p2/2np4/2b1p2p/2P1Ppbq/2NP1P2/PP1NB1PP/R2Q1R1K w - - 1 15",
    "fen": "2kr3r/ppp2p2/2np4/2b1p2p/2P1PpPq/2NP4/PP1NB1PP/R2Q1R1K b - - 0 15",
    "preMove": "fxg4",
    "solution": [
      "Qxh2+",
      "Kxh2",
      "hxg4#"
    ]
  },
  {
    "id": "W5BDP",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1677,
    "popularity": 79,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "1k1r3r/2q2pp1/2nb1n2/8/BpP4p/4BQPb/3N1P1P/RN2R1K1 b - - 1 23",
    "fen": "1k1r3r/2q2pp1/3b1n2/4n3/BpP4p/4BQPb/3N1P1P/RN2R1K1 w - - 2 24",
    "preMove": "Ne5",
    "solution": [
      "Qa8+",
      "Kxa8",
      "Bc6+",
      "Kb8",
      "Ra8#"
    ]
  },
  {
    "id": "7rNvt",
    "title": "Mate in 3",
    "theme": "ArabianMate",
    "difficulty": "Medium",
    "rating": 1775,
    "popularity": 91,
    "description": "Deliver an Arabian mate with rook and knight. Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "r6k/1ppR1prb/1b2pN2/4P3/5P1N/pPq1pB1Q/P1n4P/5R1K b - - 7 28",
    "fen": "r6k/1ppR1prb/1b2pN2/4P3/5P1N/pPq2B1Q/P1n1p2P/5R1K w - - 0 29",
    "preMove": "e2",
    "solution": [
      "Ng6+",
      "fxg6",
      "Qxh7+",
      "Rxh7",
      "Rxh7#"
    ]
  },
  {
    "id": "Fi4Af",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1826,
    "popularity": 66,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r2qrk2/1b3ppB/2n4b/1p1p1Q2/3P4/2p2N1P/P5P1/R4RK1 b - - 0 21",
    "fen": "r2qrk2/1b2nppB/7b/1p1p1Q2/3P4/2p2N1P/P5P1/R4RK1 w - - 1 22",
    "preMove": "Ne7",
    "solution": [
      "Qxf7+",
      "Kxf7",
      "Ng5#"
    ]
  },
  {
    "id": "MqceN",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2053,
    "popularity": 91,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "3rk1nr/pQ1b1ppp/4p3/8/1b1q4/2N5/PP3PPP/R1B1K1NR w KQk - 3 11",
    "fen": "3rk1nr/pQ1b1ppp/4p3/8/1b1q4/2N5/PP2NPPP/R1B1K2R b KQk - 4 11",
    "preMove": "Ne2",
    "solution": [
      "Qd1+",
      "Kxd1",
      "Ba4+",
      "Ke1",
      "Rd1#"
    ]
  },
  {
    "id": "Pj2P4",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1715,
    "popularity": 64,
    "description": "Find the forced checkmate. Find the forced mate in two. Finish with the classic Morphy's mate pattern. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r1q1k1nr/1p2bppp/p7/3R4/4Q3/4BN2/PP3PPP/4R1K1 b kq - 0 18",
    "fen": "r1q1k2r/1p2bppp/p4n2/3R4/4Q3/4BN2/PP3PPP/4R1K1 w kq - 1 19",
    "preMove": "Nf6",
    "solution": [
      "Qxe7+",
      "Kxe7",
      "Bc5#"
    ]
  },
  {
    "id": "Znr5V",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1910,
    "popularity": 63,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "1k3r2/2p5/1p2Q3/2b1p1p1/3r4/P2P2P1/4PPBq/2R1RK2 w - - 3 28",
    "fen": "1k3r2/2p5/1pQ5/2b1p1p1/3r4/P2P2P1/4PPBq/2R1RK2 b - - 4 28",
    "preMove": "Qc6",
    "solution": [
      "Rxf2+",
      "Kxf2",
      "Rf4#"
    ]
  },
  {
    "id": "e9VqV",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1883,
    "popularity": 97,
    "description": "Find the forced checkmate. Deliver the famous opera-style mate.",
    "initialFen": "2kr1bnr/ppp2ppp/6b1/nQ1Pp3/4N3/2P2P2/qP1BN1PP/2KR1B1R b - - 2 13",
    "fen": "2k2bnr/ppp2ppp/6b1/nQ1rp3/4N3/2P2P2/qP1BN1PP/2KR1B1R w - - 0 14",
    "preMove": "Rxd5",
    "solution": [
      "Qe8+",
      "Rd8",
      "Qxd8+",
      "Kxd8",
      "Bg5+",
      "Ke8",
      "Rd8#"
    ]
  },
  {
    "id": "0kNf5",
    "title": "Mate in 4",
    "theme": "AdvancedPawn",
    "difficulty": "Hard",
    "rating": 2048,
    "popularity": 71,
    "description": "Find the forced checkmate.",
    "initialFen": "rn1q3k/5R1p/p3pP2/2p5/1p5P/1P1b4/PB1PBP2/3RK3 b - - 0 20",
    "fen": "rn1q3k/5R1p/p3pP2/2p5/1p5P/1P6/PB1PbP2/3RK3 w - - 0 21",
    "preMove": "Bxe2",
    "solution": [
      "Rf8+",
      "Qxf8",
      "f7+",
      "e5",
      "Bxe5+",
      "Qg7",
      "f8=Q#"
    ]
  },
  {
    "id": "Ml1qZ",
    "title": "Mate in 3",
    "theme": "DiscoveredAttack",
    "difficulty": "Medium",
    "rating": 1727,
    "popularity": 96,
    "description": "Trap the king between its own rooks. Deliver a hook mate with rook, knight, and pawn. Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "2kr3r/1pp1n1p1/p7/8/6p1/2N2nP1/PPP2P1b/R1BQ1R1K w - - 1 16",
    "fen": "2kr3r/1pp1n1p1/p7/8/6p1/2N2nP1/PPP1QP1b/R1B2R1K b - - 2 16",
    "preMove": "Qe2",
    "solution": [
      "Bg1+",
      "Bh6",
      "Rxh6+",
      "Kg2",
      "Rh2#"
    ]
  },
  {
    "id": "BQivU",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2148,
    "popularity": 94,
    "description": "Find the forced checkmate.",
    "initialFen": "r4rk1/2p2ppp/P2p4/4p2n/4P2q/1BNP1P1b/1PP1Rb1P/R1BQ3K w - - 2 18",
    "fen": "r4rk1/2p2ppp/P2p4/4p2n/4P2q/1BNPBP1b/1PP1Rb1P/R2Q3K b - - 3 18",
    "preMove": "Be3",
    "solution": [
      "Ng3+",
      "hxg3",
      "Bg2+",
      "Kxg2",
      "Qxg3+",
      "Kf1",
      "Qg1#"
    ]
  },
  {
    "id": "FOgDW",
    "title": "Mate in 4",
    "theme": "AdvancedPawn",
    "difficulty": "Hard",
    "rating": 2030,
    "popularity": 94,
    "description": "Find the forced checkmate.",
    "initialFen": "2r3kb/pp5p/1q1pN1p1/3n1b2/7B/2Np3P/PP1Q1PP1/1K1R4 w - - 0 25",
    "fen": "2r3kb/pp5p/1q1pN1p1/3N1b2/7B/3p3P/PP1Q1PP1/1K1R4 b - - 0 25",
    "preMove": "Nxd5",
    "solution": [
      "Qxb2+",
      "Qxb2",
      "d2+",
      "Ka1",
      "Rc1+",
      "Rxc1",
      "dxc1=Q#"
    ]
  },
  {
    "id": "x5pOf",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1940,
    "popularity": 94,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate. Deliver a Vukovic mate with knight support.",
    "initialFen": "4Nrk1/p2pQ2p/b5p1/2pp4/q1Pb1B2/6P1/P6P/5R1K b - - 1 29",
    "fen": "4Nrk1/p2pQ2p/b5p1/2pp4/2qb1B2/6P1/P6P/5R1K w - - 0 30",
    "preMove": "Qxc4",
    "solution": [
      "Qxf8+",
      "Kxf8",
      "Bd6+",
      "Kg8",
      "Rf8#"
    ]
  },
  {
    "id": "UOw6C",
    "title": "Mate in 5",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1526,
    "popularity": 93,
    "description": "Find the forced checkmate. Finish with a swallow's tail queen sacrifice mate.",
    "initialFen": "2r5/2r1k1p1/p3p1P1/4qp2/1pP1pN2/4P3/PPQR1P2/2KR4 w - - 4 27",
    "fen": "2r5/2r1k1p1/p3p1P1/4qp2/1pP1pN2/1P2P3/P1QR1P2/2KR4 b - - 0 27",
    "preMove": "b3",
    "solution": [
      "Qa1+",
      "Qb1",
      "Rxc4+",
      "bxc4",
      "Rxc4+",
      "Rc2",
      "Rxc2+",
      "Kxc2",
      "Qc3#"
    ]
  },
  {
    "id": "bXPrq",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2133,
    "popularity": 93,
    "description": "Find the forced checkmate.",
    "initialFen": "r4k1r/ppp3pp/8/4p2n/4P2q/1BNP1P1b/PPP1Rb1P/R1BQ3K w - - 9 16",
    "fen": "r4k1r/ppp3pp/8/4p2n/4P2q/1BNPBP1b/PPP1Rb1P/R2Q3K b - - 10 16",
    "preMove": "Be3",
    "solution": [
      "Ng3+",
      "hxg3",
      "Bg2+",
      "Kxg2",
      "Qxg3+",
      "Kf1",
      "Qg1#"
    ]
  },
  {
    "id": "vaeeM",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1942,
    "popularity": 90,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "1nb2rk1/1ppq1ppp/3b4/3p4/3R3P/1P2PP2/rBP3Q1/1NK2B1R b - - 0 18",
    "fen": "1nb2rk1/1p1q1ppp/2pb4/3p4/3R3P/1P2PP2/rBP3Q1/1NK2B1R w - - 0 19",
    "preMove": "c6",
    "solution": [
      "Qxg7+",
      "Kxg7",
      "Rg4+",
      "Kh6",
      "Bg7+",
      "Kh5",
      "Rg5#"
    ]
  },
  {
    "id": "V2jYP",
    "title": "Mate in 4",
    "theme": "DiscoveredAttack",
    "difficulty": "Hard",
    "rating": 2096,
    "popularity": 98,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "1r3r1k/5ppp/3q1b2/p7/P2n2Q1/1B5P/1BPP4/1K1R2R1 b - - 0 26",
    "fen": "1r3r1k/5ppp/3q1b2/p7/P5Q1/1n5P/1BPP4/1K1R2R1 w - - 0 27",
    "preMove": "Nxb3",
    "solution": [
      "Qxg7+",
      "Bxg7",
      "Bxg7+",
      "Kg8",
      "Bf6+",
      "Qg3",
      "Rxg3#"
    ]
  },
  {
    "id": "zq5PI",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1901,
    "popularity": 85,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "r1b4r/2p1Q1pp/p1np2k1/1p3q1P/3P4/B1P5/P1P3P1/R3K2R b KQ - 0 17",
    "fen": "r1b4r/2p1Q1pp/p1np3k/1p3q1P/3P4/B1P5/P1P3P1/R3K2R w KQ - 1 18",
    "preMove": "Kh6",
    "solution": [
      "Bc1+",
      "g5",
      "hxg6+",
      "Kxg6",
      "Rh6#"
    ]
  },
  {
    "id": "56L1M",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1997,
    "popularity": 72,
    "description": "Find the forced checkmate. Find the forced mate in two. Corner the king using the triangle mate pattern.",
    "initialFen": "6k1/p1p3b1/3p3p/3P3q/1P2QB2/5rPb/P4P2/2R2BRK w - - 0 30",
    "fen": "6k1/p1p3b1/3p3p/3P3q/1P2QBP1/5r1b/P4P2/2R2BRK b - - 0 30",
    "preMove": "g4",
    "solution": [
      "Bg2+",
      "Kxg2",
      "Qh3#"
    ]
  },
  {
    "id": "zDKp9",
    "title": "Mate in 4",
    "theme": "DiscoveredAttack",
    "difficulty": "Medium",
    "rating": 1788,
    "popularity": 96,
    "description": "Find the forced checkmate. Deliver the famous opera-style mate.",
    "initialFen": "r3k1n1/5p2/p2pp1p1/qpp1b3/2P1P3/1PN2Q2/P1PB1PP1/1K1R4 w q - 0 23",
    "fen": "r3k1n1/5p2/p2pp1p1/qNp1b3/2P1P3/1P3Q2/P1PB1PP1/1K1R4 b q - 0 23",
    "preMove": "Nxb5",
    "solution": [
      "Qxa2+",
      "Kxa2",
      "axb5+",
      "Ba5",
      "Rxa5+",
      "Kb1",
      "Ra1#"
    ]
  },
  {
    "id": "7MjCF",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1758,
    "popularity": 95,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver the famous opera-style mate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "5r1k/5Ppp/p2b4/3b2PP/q7/1rB2P2/NP2Q3/KR5R w - - 1 30",
    "fen": "5r1k/5Ppp/p2b3P/3b2P1/q7/1rB2P2/NP2Q3/KR5R b - - 0 30",
    "preMove": "h6",
    "solution": [
      "Qxa2+",
      "Kxa2",
      "Ra3#"
    ]
  },
  {
    "id": "H7mKM",
    "title": "Mate in 3",
    "theme": "Clearance",
    "difficulty": "Medium",
    "rating": 1698,
    "popularity": 94,
    "description": "Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "1rb2rk1/p2p1pp1/1p2p2R/4n3/4B3/2P3R1/PPQKN3/5q2 b - - 2 21",
    "fen": "1r3rk1/p2p1pp1/bp2p2R/4n3/4B3/2P3R1/PPQKN3/5q2 w - - 3 22",
    "preMove": "Ba6",
    "solution": [
      "Bh7+",
      "Kh8",
      "Bg8+",
      "gxh6",
      "Qh7#"
    ]
  },
  {
    "id": "8rz7l",
    "title": "Mate in 3",
    "theme": "Clearance",
    "difficulty": "Easy",
    "rating": 1471,
    "popularity": 93,
    "description": "Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "2kr4/p1qp4/1pb1pB2/6p1/4Nb2/1P5r/P1P1QPP1/R4RK1 w - - 0 21",
    "fen": "2kB4/p1qp4/1pb1p3/6p1/4Nb2/1P5r/P1P1QPP1/R4RK1 b - - 0 21",
    "preMove": "Bxd8",
    "solution": [
      "Bh2+",
      "Kh1",
      "Bg1+",
      "gxh3",
      "Qh2#"
    ]
  },
  {
    "id": "GMaOz",
    "title": "Mate in 3",
    "theme": "Clearance",
    "difficulty": "Medium",
    "rating": 1628,
    "popularity": 93,
    "description": "Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "2r2rk1/pbq2pb1/1n2p2R/1p2PB2/5P2/2p3R1/PPQN2PP/6K1 b - - 0 22",
    "fen": "2r2rk1/pbq2pb1/1n2p2R/1p2PB2/5P2/6R1/PPQp2PP/6K1 w - - 0 23",
    "preMove": "cxd2",
    "solution": [
      "Bh7+",
      "Kh8",
      "Bg8+",
      "Bxh6",
      "Qh7#"
    ]
  },
  {
    "id": "VL6vH",
    "title": "Mate in 4",
    "theme": "DiscoveredAttack",
    "difficulty": "Hard",
    "rating": 2100,
    "popularity": 93,
    "description": "Find the forced checkmate. Deliver the famous opera-style mate.",
    "initialFen": "1kbr1b1r/p1p3p1/1p5q/1PpBp3/QNP2p2/P2P2P1/4PR1P/R5K1 b - - 1 24",
    "fen": "1kbr1b1r/p1p3p1/1p5q/1P1Bp3/QpP2p2/P2P2P1/4PR1P/R5K1 w - - 0 25",
    "preMove": "cxb4",
    "solution": [
      "Qxa7+",
      "Kxa7",
      "axb4+",
      "Ba6",
      "Rxa6+",
      "Kb8",
      "Ra8#"
    ]
  },
  {
    "id": "cpzTC",
    "title": "Mate in 4",
    "theme": "DiscoveredAttack",
    "difficulty": "Medium",
    "rating": 1744,
    "popularity": 92,
    "description": "Find the forced checkmate. Deliver the famous opera-style mate.",
    "initialFen": "1k1r3r/p1pbqp2/1pnb3p/3B4/QPP5/P3B3/5PpP/R3K1R1 b Q - 0 19",
    "fen": "1k1r3r/p1pbqp2/1p1b3p/3B4/QnP5/P3B3/5PpP/R3K1R1 w Q - 0 20",
    "preMove": "Nxb4",
    "solution": [
      "Qxa7+",
      "Kxa7",
      "axb4+",
      "Ba4",
      "Rxa4+",
      "Kb8",
      "Ra8#"
    ]
  },
  {
    "id": "oXHo5",
    "title": "Mate in 5",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2073,
    "popularity": 91,
    "description": "Find the forced checkmate. Deliver the famous opera-style mate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "rn4k1/1bp2r2/1p1n2B1/p1q4p/2P2B1Q/1P6/P3N1PP/b4R1K b - - 0 21",
    "fen": "rn4k1/1bp3r1/1p1n2B1/p1q4p/2P2B1Q/1P6/P3N1PP/b4R1K w - - 1 22",
    "preMove": "Rg7",
    "solution": [
      "Qd8+",
      "Ne8",
      "Qxe8+",
      "Qf8",
      "Qxf8+",
      "Kxf8",
      "Bd6+",
      "Kg8",
      "Rf8#"
    ]
  },
  {
    "id": "IOW3S",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Easy",
    "rating": 1332,
    "popularity": 87,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "r1b2rnk/2q4P/p1pp1bQ1/2n1pP1B/1pP5/3P4/PP2N3/R2NK2R b KQ - 0 25",
    "fen": "r1b2rnk/7q/p1pp1bQ1/2n1pP1B/1pP5/3P4/PP2N3/R2NK2R w KQ - 0 26",
    "preMove": "Qxh7",
    "solution": [
      "Qxh7+",
      "Kxh7",
      "Bg6+",
      "Kg7",
      "Rh7#"
    ]
  },
  {
    "id": "EC0ry",
    "title": "Mate in 3",
    "theme": "Deflection",
    "difficulty": "Medium",
    "rating": 1819,
    "popularity": 98,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r2q1rk1/5ppp/1n2p3/PPbpP2B/2p2P2/6PR/2Q4P/R1B4K b - - 2 26",
    "fen": "r2q1rk1/3n1ppp/4p3/PPbpP2B/2p2P2/6PR/2Q4P/R1B4K w - - 3 27",
    "preMove": "Nd7",
    "solution": [
      "Qxh7+",
      "Kxh7",
      "Bxf7+",
      "Qh4",
      "Rxh4#"
    ]
  },
  {
    "id": "oSKH0",
    "title": "Mate in 3",
    "theme": "Clearance",
    "difficulty": "Medium",
    "rating": 1988,
    "popularity": 85,
    "description": "Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "1k4r1/1pq1nQ2/p2b1p2/8/8/2NP1B1r/PPP2PP1/R1B2RK1 w - - 0 21",
    "fen": "1k4r1/1pq1nQ2/p2b1p2/3N4/8/3P1B1r/PPP2PP1/R1B2RK1 b - - 1 21",
    "preMove": "Nd5",
    "solution": [
      "Bh2+",
      "Kh1",
      "Bg1+",
      "gxh3",
      "Qh2#"
    ]
  },
  {
    "id": "l5aFe",
    "title": "Mate in 3",
    "theme": "Deflection",
    "difficulty": "Medium",
    "rating": 1809,
    "popularity": 97,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r1b4k/ppq3pB/4p2r/2P5/4N2b/2B5/PP3PPP/RQ3RK1 w - - 1 23",
    "fen": "r1b4k/ppq3p1/4p1Br/2P5/4N2b/2B5/PP3PPP/RQ3RK1 b - - 2 23",
    "preMove": "Bg6",
    "solution": [
      "Qxh2+",
      "Kxh2",
      "Bxf2+",
      "Bh5",
      "Rxh5#"
    ]
  },
  {
    "id": "6UO67",
    "title": "Mate in 3",
    "theme": "Deflection",
    "difficulty": "Medium",
    "rating": 1734,
    "popularity": 96,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r4rk1/2q2pp1/2p2P2/3p3B/p1nP4/2p1P3/PPQ2P2/1K1R3R b - - 0 23",
    "fen": "rr4k1/2q2pp1/2p2P2/3p3B/p1nP4/2p1P3/PPQ2P2/1K1R3R w - - 1 24",
    "preMove": "Rfb8",
    "solution": [
      "Qh7+",
      "Kxh7",
      "Bxf7+",
      "Qh2",
      "Rxh2#"
    ]
  },
  {
    "id": "96Q7A",
    "title": "Mate in 3",
    "theme": "Deflection",
    "difficulty": "Medium",
    "rating": 1955,
    "popularity": 96,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r2q1rk1/1p2bppp/pn6/4P2B/4Q3/1N6/PPP3P1/3R1K1R b - - 5 20",
    "fen": "r4rk1/1pq1bppp/pn6/4P2B/4Q3/1N6/PPP3P1/3R1K1R w - - 6 21",
    "preMove": "Qc7",
    "solution": [
      "Qxh7+",
      "Kxh7",
      "Bxf7+",
      "Bh4",
      "Rxh4#"
    ]
  },
  {
    "id": "AwOwW",
    "title": "Mate in 3",
    "theme": "Deflection",
    "difficulty": "Medium",
    "rating": 1854,
    "popularity": 96,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r1b2rk1/pp2qppp/4p3/3pP2B/2p5/2n1B2R/P1Q3PP/1R5K b - - 1 23",
    "fen": "r1b2rk1/pp2qppp/4p3/3pP2B/2p5/4B2R/P1Q3PP/1n5K w - - 0 24",
    "preMove": "Nxb1",
    "solution": [
      "Qxh7+",
      "Kxh7",
      "Bxf7+",
      "Qh4",
      "Rxh4#"
    ]
  },
  {
    "id": "MRhm3",
    "title": "Mate in 3",
    "theme": "Deflection",
    "difficulty": "Medium",
    "rating": 1964,
    "popularity": 96,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "rnb2rk1/4qppp/4p1n1/p2p3B/1ppP4/2P1PNP1/PPQ2PPR/2K4R b - - 3 17",
    "fen": "rnb2rkn/4qppp/4p3/p2p3B/1ppP4/2P1PNP1/PPQ2PPR/2K4R w - - 4 18",
    "preMove": "Nh8",
    "solution": [
      "Qxh7+",
      "Kxh7",
      "Bxf7+",
      "Qh4",
      "Rxh4#"
    ]
  },
  {
    "id": "MzpTd",
    "title": "Mate in 3",
    "theme": "Deflection",
    "difficulty": "Medium",
    "rating": 1748,
    "popularity": 96,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r4rk1/5ppp/b2qp3/3p3B/2p5/2P4R/2Q2PPP/3R2K1 b - - 1 24",
    "fen": "r4rk1/5ppp/b3p3/3pq2B/2p5/2P4R/2Q2PPP/3R2K1 w - - 2 25",
    "preMove": "Qe5",
    "solution": [
      "Qxh7+",
      "Kxh7",
      "Bxf7+",
      "Qh5",
      "Rxh5#"
    ]
  },
  {
    "id": "Ty8Nk",
    "title": "Mate in 3",
    "theme": "Deflection",
    "difficulty": "Medium",
    "rating": 1823,
    "popularity": 96,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "1nr2rk1/ppqb1pp1/4p2p/3pP1NB/1P5R/2P3P1/PKQ2PP1/7R b - - 10 22",
    "fen": "1nr2rk1/ppqb1pp1/4p3/3pP1pB/1P5R/2P3P1/PKQ2PP1/7R w - - 0 23",
    "preMove": "hxg5",
    "solution": [
      "Qh7+",
      "Kxh7",
      "Bxf7+",
      "gxh4",
      "Rxh4#"
    ]
  },
  {
    "id": "UpPuF",
    "title": "Mate in 3",
    "theme": "AdvancedPawn",
    "difficulty": "Easy",
    "rating": 1318,
    "popularity": 33,
    "description": "Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "r4r1k/p3p2P/3p3R/2p1b1B1/1p1NP1Q1/8/P1P2q2/3K2R1 b - - 1 31",
    "fen": "r4r1k/p3p2P/3p3R/2p3B1/1p1bP1Q1/8/P1P2q2/3K2R1 w - - 0 32",
    "preMove": "Bxd4",
    "solution": [
      "Bf6+",
      "Bxf6",
      "Qg8+",
      "Rxg8",
      "hxg8=Q#"
    ]
  },
  {
    "id": "7OvxK",
    "title": "Mate in 3",
    "theme": "CornerMate",
    "difficulty": "Hard",
    "rating": 2165,
    "popularity": 95,
    "description": "Trap the king in the corner. Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "r4rk1/p4p1p/4pbN1/1pq5/6R1/nP1P2Q1/PB3PPP/6K1 b - - 0 23",
    "fen": "r4rk1/p4p1p/4p1N1/1pq5/6R1/nP1P2Q1/Pb3PPP/6K1 w - - 0 24",
    "preMove": "Bxb2",
    "solution": [
      "Ne5+",
      "Kh8",
      "Rg8+",
      "Rxg8",
      "Nxf7#"
    ]
  },
  {
    "id": "86qN5",
    "title": "Mate in 5",
    "theme": "Deflection",
    "difficulty": "Medium",
    "rating": 1780,
    "popularity": 95,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2kr3r/ppqb2p1/2n1pp2/3pN3/PP1P3b/2PB4/3NQPP1/R3R1K1 w - - 0 18",
    "fen": "2kr3r/ppqb1Np1/2n1pp2/3p4/PP1P3b/2PB4/3NQPP1/R3R1K1 b - - 1 18",
    "preMove": "Nf7",
    "solution": [
      "Qh2+",
      "Kxh2",
      "Bxf2+",
      "Nxh8",
      "Rxh8+",
      "Bh7",
      "Rxh7+",
      "Qh5",
      "Rxh5#"
    ]
  },
  {
    "id": "Bm1Cz",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1628,
    "popularity": 95,
    "description": "Find the forced checkmate.",
    "initialFen": "1k4r1/1pp5/p1p5/8/5qnQ/2NP4/PPP3K1/6BR w - - 0 35",
    "fen": "1k4r1/1pp5/p1p5/8/5qnQ/2NP3R/PPP3K1/6B1 b - - 1 35",
    "preMove": "Rh3",
    "solution": [
      "Ne3+",
      "Kh1",
      "Rxg1+",
      "Kxg1",
      "Qf1+",
      "Kh2",
      "Qg2#"
    ]
  },
  {
    "id": "CzGMW",
    "title": "Mate in 3",
    "theme": "Deflection",
    "difficulty": "Medium",
    "rating": 1806,
    "popularity": 95,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2r1r1k1/b1p2ppn/p7/3pP1qB/P2P1P2/3Q2P1/1P1N4/2K4R b - - 0 24",
    "fen": "2r1r1k1/b1p1qppn/p7/3pP2B/P2P1P2/3Q2P1/1P1N4/2K4R w - - 1 25",
    "preMove": "Qe7",
    "solution": [
      "Qxh7+",
      "Kxh7",
      "Bxf7+",
      "Qh4",
      "Rxh4#"
    ]
  },
  {
    "id": "I8SbS",
    "title": "Mate in 4",
    "theme": "DiscoveredAttack",
    "difficulty": "Medium",
    "rating": 1964,
    "popularity": 95,
    "description": "Find the forced checkmate.",
    "initialFen": "r1b2rk1/2p1nqbR/p2p4/1p1PppQB/4P3/2N3P1/PPP2PP1/2K4R b - - 4 19",
    "fen": "r1b2rk1/2p1n1bR/p2p1q2/1p1PppQB/4P3/2N3P1/PPP2PP1/2K4R w - - 5 20",
    "preMove": "Qf6",
    "solution": [
      "Rh8+",
      "Kxh8",
      "Bf7+",
      "Bh6",
      "Rxh6+",
      "Qxh6",
      "Qxh6#"
    ]
  },
  {
    "id": "W32IN",
    "title": "Mate in 3",
    "theme": "Deflection",
    "difficulty": "Medium",
    "rating": 1791,
    "popularity": 95,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r3k2r/1p3pp1/p1p5/2Ppq3/1P4bb/4P3/P1BQNPP1/1R3RK1 w kq - 0 20",
    "fen": "r3k2r/1p3pp1/p1p5/2Ppq3/1P1Q2bb/4P3/P1B1NPP1/1R3RK1 b kq - 1 20",
    "preMove": "Qd4",
    "solution": [
      "Qh2+",
      "Kxh2",
      "Bxf2+",
      "Bh7",
      "Rxh7#"
    ]
  },
  {
    "id": "r4EFP",
    "title": "Mate in 3",
    "theme": "Deflection",
    "difficulty": "Medium",
    "rating": 1756,
    "popularity": 95,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2r2rk1/1p3pp1/p3p3/3pb2B/6P1/P1P1PPn1/1P1K3R/RQB2q2 b - - 4 24",
    "fen": "2r2rk1/1p3pp1/p3p3/3pb2B/6P1/P1P1Pqn1/1P1K3R/RQB5 w - - 0 25",
    "preMove": "Qxf3",
    "solution": [
      "Qh7+",
      "Kxh7",
      "Bxf7+",
      "Nh5",
      "Rxh5#"
    ]
  },
  {
    "id": "Y2W97",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1674,
    "popularity": 82,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "3r4/kpR4r/pN1QB3/P4p2/6pp/4P1P1/5PPK/q7 w - - 2 36",
    "fen": "3Q4/kpR4r/pN2B3/P4p2/6pp/4P1P1/5PPK/q7 b - - 0 36",
    "preMove": "Qxd8",
    "solution": [
      "hxg3+",
      "Kxg3",
      "Qe5+",
      "f4",
      "Qxe3#"
    ]
  },
  {
    "id": "FEc9U",
    "title": "Mate in 3",
    "theme": "Deflection",
    "difficulty": "Medium",
    "rating": 1689,
    "popularity": 94,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "1k1r3r/ppq2p2/5Qp1/2P3p1/1P1pP1nb/P6P/1B3PP1/R4RK1 w - - 0 25",
    "fen": "1k1r3r/ppq2p2/5Qp1/2P3p1/1P1pP1Pb/P7/1B3PP1/R4RK1 b - - 0 25",
    "preMove": "hxg4",
    "solution": [
      "Qh2+",
      "Kxh2",
      "Bxf2+",
      "Qxh8",
      "Rxh8#"
    ]
  },
  {
    "id": "FdFzT",
    "title": "Mate in 3",
    "theme": "DiscoveredAttack",
    "difficulty": "Hard",
    "rating": 2126,
    "popularity": 94,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "2k3r1/ppp5/4pp1p/1PP4r/P2Pp3/1Q2P1qb/R4RP1/2B2BK1 w - - 1 24",
    "fen": "2k3r1/ppp5/1P2pp1p/2P4r/P2Pp3/1Q2P1qb/R4RP1/2B2BK1 b - - 0 24",
    "preMove": "b6",
    "solution": [
      "Qh2+",
      "Kxh2",
      "Bxg2+",
      "Kg1",
      "Rh1#"
    ]
  },
  {
    "id": "Goj9v",
    "title": "Mate in 3",
    "theme": "DiscoveredAttack",
    "difficulty": "Medium",
    "rating": 1617,
    "popularity": 94,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "6rk/5prp/2p1pB2/1b2P1P1/p3QP1K/P5P1/3p3R/3q4 b - - 1 40",
    "fen": "6rk/5prp/2p1pB2/1b2P1P1/p3QP1K/P5P1/3p3R/4q3 w - - 2 41",
    "preMove": "Qe1",
    "solution": [
      "Qxh7+",
      "Kxh7",
      "Kg4+",
      "Kg6",
      "Rh6#"
    ]
  },
  {
    "id": "XlQfh",
    "title": "Mate in 4",
    "theme": "Deflection",
    "difficulty": "Hard",
    "rating": 2169,
    "popularity": 94,
    "description": "Find the forced checkmate.",
    "initialFen": "k6r/p1p1b3/2Pq1n2/3p1Brb/P2P4/2P5/2QN2PP/1RB1R1K1 w - - 3 23",
    "fen": "k6r/p1p1b3/2Pq1n2/3p1Brb/P2P4/1QP5/3N2PP/1RB1R1K1 b - - 4 23",
    "preMove": "Qb3",
    "solution": [
      "Qxh2+",
      "Kxh2",
      "Bf3+",
      "Bh3",
      "Rxg2+",
      "Kh1",
      "Rxh3#"
    ]
  },
  {
    "id": "mB8Ks",
    "title": "Mate in 3",
    "theme": "DiscoveredAttack",
    "difficulty": "Easy",
    "rating": 1404,
    "popularity": 94,
    "description": "Deliver a hook mate with rook, knight, and pawn. Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "r4r1k/pb3p2/1p2p1p1/4P2N/6R1/P3pP2/1PP5/2K4R b - - 0 27",
    "fen": "r4r1k/p4p2/1p2p1p1/4P2N/6R1/P3pb2/1PP5/2K4R w - - 0 28",
    "preMove": "Bxf3",
    "solution": [
      "Nf6+",
      "Bxh1",
      "Rh4+",
      "Kg7",
      "Rh7#"
    ]
  },
  {
    "id": "Cdqx4",
    "title": "Mate in 3",
    "theme": "Deflection",
    "difficulty": "Medium",
    "rating": 1724,
    "popularity": 93,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2r2rk1/p4pp1/2p1pb2/q1Pp3B/5P2/P2Q2P1/R4PK1/7R b - - 2 28",
    "fen": "2r2rk1/p4pp1/2p1pb2/2qp3B/5P2/P2Q2P1/R4PK1/7R w - - 0 29",
    "preMove": "Qxc5",
    "solution": [
      "Qh7+",
      "Kxh7",
      "Bxf7+",
      "Bh4",
      "Rxh4#"
    ]
  },
  {
    "id": "ihrRy",
    "title": "Mate in 3",
    "theme": "Deflection",
    "difficulty": "Medium",
    "rating": 1673,
    "popularity": 93,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2kr3r/ppp2pp1/3q2p1/1P6/P2P3b/2N1P3/5PPP/R2Q1RK1 w - - 1 19",
    "fen": "2kr3r/ppp2pp1/3q2p1/1P6/P2PN2b/4P3/5PPP/R2Q1RK1 b - - 2 19",
    "preMove": "Ne4",
    "solution": [
      "Qxh2+",
      "Kxh2",
      "Bxf2+",
      "Qh5",
      "Rxh5#"
    ]
  },
  {
    "id": "qIMmL",
    "title": "Mate in 3",
    "theme": "Deflection",
    "difficulty": "Medium",
    "rating": 1799,
    "popularity": 93,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "7r/p4pk1/1p1pn1p1/4p3/1PP1P2b/P2PBPq1/3Q2P1/2R2RK1 w - - 1 31",
    "fen": "7r/p4pk1/1p1pn1p1/4p3/1PP1P2b/P2P1Pq1/3Q1BP1/2R2RK1 b - - 2 31",
    "preMove": "Bf2",
    "solution": [
      "Qh2+",
      "Kxh2",
      "Bxf2+",
      "Qh6+",
      "Rxh6#"
    ]
  },
  {
    "id": "wJahD",
    "title": "Mate in 3",
    "theme": "Deflection",
    "difficulty": "Medium",
    "rating": 1795,
    "popularity": 93,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r4k1r/ppp2p2/3q2p1/8/PP2Q2b/2P1P3/5PPP/RNB2RK1 w - - 1 19",
    "fen": "r4k1r/ppp2p2/3q2p1/8/PP2Q2b/B1P1P3/5PPP/RN3RK1 b - - 2 19",
    "preMove": "Ba3",
    "solution": [
      "Qxh2+",
      "Kxh2",
      "Bxf2+",
      "Qh4",
      "Rxh4#"
    ]
  },
  {
    "id": "HMYdl",
    "title": "Mate in 3",
    "theme": "Deflection",
    "difficulty": "Medium",
    "rating": 1837,
    "popularity": 92,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2b4r/p1Q5/3Npkp1/2p1qp2/P1P4b/3P4/5PP1/R4RK1 w - - 2 29",
    "fen": "2b4r/p1Q5/3Npkp1/2p1qp2/P1P4b/3P4/5PP1/4RRK1 b - - 3 29",
    "preMove": "Rae1",
    "solution": [
      "Qh2+",
      "Kxh2",
      "Bxf2+",
      "Qh7",
      "Rxh7#"
    ]
  },
  {
    "id": "JAf1l",
    "title": "Mate in 3",
    "theme": "Deflection",
    "difficulty": "Medium",
    "rating": 1803,
    "popularity": 92,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r1qr2k1/4bpp1/p1n1p1n1/3pP1PB/P1pP1B2/2P5/2QN1P2/R3K2R b KQ - 1 22",
    "fen": "r1qr2k1/4bpp1/p1n1p3/3pP1PB/P1pP1n2/2P5/2QN1P2/R3K2R w KQ - 0 23",
    "preMove": "Nxf4",
    "solution": [
      "Qh7+",
      "Kxh7",
      "Bxf7+",
      "Nh3",
      "Rxh3#"
    ]
  },
  {
    "id": "PGFYP",
    "title": "Mate in 3",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 1249,
    "popularity": 92,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver a smothered mate with the knight.",
    "initialFen": "r6r/pbk1p1Qp/1p2B1p1/4P3/3q4/2N5/PPP2nPP/R1B2R1K w - - 3 17",
    "fen": "r6r/pbk1p1Qp/1p2B1p1/4P3/3q4/2N5/PPP2nPP/R1B2RK1 b - - 4 17",
    "preMove": "Kg1",
    "solution": [
      "Nh3+",
      "Kh1",
      "Qg1+",
      "Rxg1",
      "Nf2#"
    ]
  },
  {
    "id": "XgZNT",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1847,
    "popularity": 92,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "2kr1b1r/pp1b1ppp/2p5/8/4N1q1/4Q3/PPP2P1P/2KR1BNR w - - 2 14",
    "fen": "2kr1b1r/pp1b1ppp/2p5/8/4N1q1/4Q2B/PPP2P1P/2KR2NR b - - 3 14",
    "preMove": "Bh3",
    "solution": [
      "Qxd1+",
      "Kxd1",
      "Bg4+",
      "Kc1",
      "Rd1#"
    ]
  },
  {
    "id": "tc2Gg",
    "title": "Mate in 3",
    "theme": "Deflection",
    "difficulty": "Medium",
    "rating": 1797,
    "popularity": 92,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "7r/R3npk1/2pq2p1/1pNp4/1P5b/2PBP3/4QPP1/6K1 w - - 2 27",
    "fen": "7r/3Rnpk1/2pq2p1/1pNp4/1P5b/2PBP3/4QPP1/6K1 b - - 3 27",
    "preMove": "Rd7",
    "solution": [
      "Qh2+",
      "Kxh2",
      "Bxf2+",
      "Qh5",
      "Rxh5#"
    ]
  },
  {
    "id": "2y5F9",
    "title": "Mate in 3",
    "theme": "Deflection",
    "difficulty": "Hard",
    "rating": 2011,
    "popularity": 91,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r6r/pp3pk1/2p3p1/4p3/1PP1Pq1b/P7/1BQ2PP1/3R1RK1 w - - 0 31",
    "fen": "r6r/pp3pk1/2p3p1/4p3/1PP1Pq1b/P7/1B1Q1PP1/3R1RK1 b - - 1 31",
    "preMove": "Qd2",
    "solution": [
      "Qh2+",
      "Kxh2",
      "Bxf2+",
      "Qh6+",
      "Rxh6#"
    ]
  },
  {
    "id": "Ddqp4",
    "title": "Mate in 3",
    "theme": "DiscoveredAttack",
    "difficulty": "Hard",
    "rating": 2080,
    "popularity": 91,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "6k1/p5pp/2p3r1/2Np3r/3N4/5Pqb/PPPB1RP1/4RQK1 w - - 7 23",
    "fen": "6k1/p5pp/2p3r1/2Np3r/8/5Pqb/PPPBNRP1/4RQK1 b - - 8 23",
    "preMove": "Ne2",
    "solution": [
      "Qh2+",
      "Kxh2",
      "Bxg2+",
      "Kg1",
      "Rh1#"
    ]
  },
  {
    "id": "VCoY6",
    "title": "Mate in 3",
    "theme": "Deflection",
    "difficulty": "Medium",
    "rating": 1768,
    "popularity": 91,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r4rk1/p2n1pp1/2p1p3/2bp2PB/5P2/8/PPQNPq2/R2K3R b - - 0 21",
    "fen": "r4rk1/p2n1pp1/2p1p3/2bp2PB/5q2/8/PPQNP3/R2K3R w - - 0 22",
    "preMove": "Qxf4",
    "solution": [
      "Qh7+",
      "Kxh7",
      "Bxf7+",
      "Qh2",
      "Rxh2#"
    ]
  },
  {
    "id": "kSGK8",
    "title": "Mate in 3",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 1273,
    "popularity": 90,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver a smothered mate with the knight.",
    "initialFen": "r1b2r1k/pp1n1Npp/2p1Q3/3p4/2P5/1P6/PBq3PP/R6K b - - 7 25",
    "fen": "r1b2rk1/pp1n1Npp/2p1Q3/3p4/2P5/1P6/PBq3PP/R6K w - - 8 26",
    "preMove": "Kg8",
    "solution": [
      "Nh6+",
      "Kh8",
      "Qg8+",
      "Rxg8",
      "Nf7#"
    ]
  },
  {
    "id": "lMUoV",
    "title": "Mate in 5",
    "theme": "DiscoveredCheck",
    "difficulty": "Hard",
    "rating": 2062,
    "popularity": 90,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "4r3/ppB3Q1/1q6/k5Pp/Pb5P/r3nN2/K7/2R2R2 w - - 2 37",
    "fen": "4r3/ppB3Q1/1q6/k5Pp/Pb5P/r3nN2/1K6/2R2R2 b - - 3 37",
    "preMove": "Kb2",
    "solution": [
      "Bc3+",
      "Kxa3",
      "Nc4+",
      "Ka2",
      "Re2+",
      "Nd2",
      "Rxd2+",
      "Rc2",
      "Rxc2#"
    ]
  },
  {
    "id": "Qihcc",
    "title": "Mate in 3",
    "theme": "Deflection",
    "difficulty": "Medium",
    "rating": 1929,
    "popularity": 89,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r1bq1rk1/p4pp1/1p2p1n1/3p2pB/2pP1P2/2P5/PPQN1PP1/R3K2R b KQ - 1 16",
    "fen": "r1bq1rk1/p4pp1/1p2p3/3p2pB/2pP1n2/2P5/PPQN1PP1/R3K2R w KQ - 0 17",
    "preMove": "Nxf4",
    "solution": [
      "Qh7+",
      "Kxh7",
      "Bxf7+",
      "Nh5",
      "Rxh5#"
    ]
  },
  {
    "id": "ZD5fT",
    "title": "Mate in 3",
    "theme": "Deflection",
    "difficulty": "Medium",
    "rating": 1742,
    "popularity": 89,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r3k2r/1pp2pp1/p2q4/8/NPbN3b/P3P3/5PP1/2RQ1RK1 w kq - 4 21",
    "fen": "r3k2r/1pp2pp1/p2q4/8/NPRN3b/P3P3/5PP1/3Q1RK1 b kq - 0 21",
    "preMove": "Rxc4",
    "solution": [
      "Qh2+",
      "Kxh2",
      "Bxf2+",
      "Qh5",
      "Rxh5#"
    ]
  },
  {
    "id": "b3bQd",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2060,
    "popularity": 89,
    "description": "Find the forced checkmate.",
    "initialFen": "r2qrbnk/5ppp/1p2n3/p2bPQ1P/3PN2N/3BB3/6P1/1R2K2R b K - 5 27",
    "fen": "r2qrb1k/4nppp/1p2n3/p2bPQ1P/3PN2N/3BB3/6P1/1R2K2R w K - 6 28",
    "preMove": "Ne7",
    "solution": [
      "Qxh7+",
      "Kxh7",
      "Nf6+",
      "Kh8",
      "Ng6+",
      "fxg6",
      "hxg6#"
    ]
  },
  {
    "id": "fLgnZ",
    "title": "Mate in 3",
    "theme": "Deflection",
    "difficulty": "Medium",
    "rating": 1723,
    "popularity": 89,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r3k3/1pqb1p1r/8/p2p4/1P1Pp2b/P1N1P3/2B1QPP1/R4RK1 w q - 0 26",
    "fen": "r3k3/1pqb1p1r/8/p2N4/1P1Pp2b/P3P3/2B1QPP1/R4RK1 b q - 0 26",
    "preMove": "Nxd5",
    "solution": [
      "Qh2+",
      "Kxh2",
      "Bxf2+",
      "Qh5",
      "Rxh5#"
    ]
  },
  {
    "id": "pri0W",
    "title": "Mate in 3",
    "theme": "Deflection",
    "difficulty": "Medium",
    "rating": 1795,
    "popularity": 89,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "3r1rk1/pb2qppp/2p1p3/1p5B/1P2Q3/P6R/2P3PP/4R2K b - - 6 24",
    "fen": "3r1rk1/pb2qppp/4p3/1pp4B/1P2Q3/P6R/2P3PP/4R2K w - - 0 25",
    "preMove": "c5",
    "solution": [
      "Qxh7+",
      "Kxh7",
      "Bxf7+",
      "Qh4",
      "Rxh4#"
    ]
  },
  {
    "id": "bHgGh",
    "title": "Mate in 3",
    "theme": "Deflection",
    "difficulty": "Medium",
    "rating": 1936,
    "popularity": 88,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r1b2rk1/pp3ppp/4pq2/2b1B2B/3p4/2NQ2P1/PPP2P2/2KR3R b - - 0 17",
    "fen": "r1b2rk1/pp3ppp/4p3/2b1q2B/3p4/2NQ2P1/PPP2P2/2KR3R w - - 0 18",
    "preMove": "Qxe5",
    "solution": [
      "Qxh7+",
      "Kxh7",
      "Bxf7+",
      "Qh5",
      "Rxh5#"
    ]
  },
  {
    "id": "nwweu",
    "title": "Mate in 3",
    "theme": "Deflection",
    "difficulty": "Medium",
    "rating": 1955,
    "popularity": 88,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r4rk1/5ppp/p2qp1n1/1p1p3B/3P4/2P1R2R/PPQ2PPP/6K1 b - - 9 25",
    "fen": "r4rk1/5ppp/p2qp3/1p1p3B/3P1n2/2P1R2R/PPQ2PPP/6K1 w - - 10 26",
    "preMove": "Nf4",
    "solution": [
      "Qxh7+",
      "Kxh7",
      "Bxf7+",
      "Nh5",
      "Rxh5#"
    ]
  },
  {
    "id": "382V6",
    "title": "Mate in 3",
    "theme": "Deflection",
    "difficulty": "Medium",
    "rating": 1808,
    "popularity": 87,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "1r5r/p1q1kpQ1/2p1p3/2Np4/1P1P3b/P1P5/5PPP/R4RK1 w - - 1 24",
    "fen": "1r5r/p1q1kpQ1/N1p1p3/3p4/1P1P3b/P1P5/5PPP/R4RK1 b - - 2 24",
    "preMove": "Na6",
    "solution": [
      "Qxh2+",
      "Kxh2",
      "Bxf2+",
      "Qh6",
      "Rxh6#"
    ]
  },
  {
    "id": "ScTug",
    "title": "Mate in 3",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 1340,
    "popularity": 87,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver a smothered mate with the knight.",
    "initialFen": "2r1k2b/1b1pp2Q/pq6/np2P3/5P2/2N5/PP3nPP/R1B2R1K w - - 1 19",
    "fen": "2r1k2b/1b1pp2Q/pq6/np2P3/5P2/2N5/PP3nPP/R1B2RK1 b - - 2 19",
    "preMove": "Kg1",
    "solution": [
      "Nh3+",
      "Kh1",
      "Qg1+",
      "Rxg1",
      "Nf2#"
    ]
  },
  {
    "id": "avGiP",
    "title": "Mate in 3",
    "theme": "Deflection",
    "difficulty": "Medium",
    "rating": 1797,
    "popularity": 87,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r3k2r/pbqn1p2/1p2p3/2p5/2PPB1pb/4P3/P1QN1PP1/1R2NRK1 w kq - 2 19",
    "fen": "r3k2r/pBqn1p2/1p2p3/2p5/2PP2pb/4P3/P1QN1PP1/1R2NRK1 b kq - 0 19",
    "preMove": "Bxb7",
    "solution": [
      "Qh2+",
      "Kxh2",
      "Bxf2+",
      "Qh7",
      "Rxh7#"
    ]
  },
  {
    "id": "kxJeY",
    "title": "Mate in 3",
    "theme": "Deflection",
    "difficulty": "Medium",
    "rating": 1825,
    "popularity": 87,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2r2rk1/p3npp1/1p2p3/2pbP1PB/3P1q2/4R2R/P1Q4P/6K1 b - - 0 32",
    "fen": "2r2rk1/p3npp1/1p2p3/3bP1PB/3p1q2/4R2R/P1Q4P/6K1 w - - 0 33",
    "preMove": "cxd4",
    "solution": [
      "Qh7+",
      "Kxh7",
      "Bxf7+",
      "Qh4",
      "Rxh4#"
    ]
  },
  {
    "id": "lkWGj",
    "title": "Mate in 3",
    "theme": "Deflection",
    "difficulty": "Hard",
    "rating": 2074,
    "popularity": 87,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2k2r2/p1p3p1/Pp1q3p/7r/3p3b/1NPQ4/1P3PP1/R4RK1 w - - 3 25",
    "fen": "2k2r2/p1p3p1/Pp1q3p/7r/3Q3b/1NP5/1P3PP1/R4RK1 b - - 0 25",
    "preMove": "Qxd4",
    "solution": [
      "Qh2+",
      "Kxh2",
      "Bxf2+",
      "Qh4",
      "Rxh4#"
    ]
  },
  {
    "id": "qZZEq",
    "title": "Mate in 3",
    "theme": "DiscoveredAttack",
    "difficulty": "Hard",
    "rating": 2013,
    "popularity": 87,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "6r1/p1Q5/2P1pk1p/2Pp3r/3P1p2/5Pqb/P4RP1/R4BK1 w - - 1 28",
    "fen": "6r1/p7/2PQpk1p/2Pp3r/3P1p2/5Pqb/P4RP1/R4BK1 b - - 2 28",
    "preMove": "Qd6",
    "solution": [
      "Qh2+",
      "Kxh2",
      "Bxg2+",
      "Kg1",
      "Rh1#"
    ]
  },
  {
    "id": "wtptR",
    "title": "Mate in 3",
    "theme": "Deflection",
    "difficulty": "Medium",
    "rating": 1802,
    "popularity": 87,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r6r/ppp3k1/3qp3/3p4/3P3b/2N1P3/PPQ2PP1/2R2RK1 w - - 0 21",
    "fen": "r6r/ppp3k1/3qp3/3p4/3P3b/4P3/PPQ1NPP1/2R2RK1 b - - 1 21",
    "preMove": "Ne2",
    "solution": [
      "Qh2+",
      "Kxh2",
      "Bxf2+",
      "Qh7+",
      "Rxh7#"
    ]
  },
  {
    "id": "1uamH",
    "title": "Mate in 3",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 1320,
    "popularity": 86,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver a smothered mate with the knight.",
    "initialFen": "r4rk1/1b3ppp/pq2p3/1p2P1N1/2p2P2/2P5/P1Q1BnPP/R1B2R1K w - - 5 18",
    "fen": "r4rk1/1b3ppp/pq2p3/1p2P1N1/2p2P2/2P5/P1Q1BnPP/R1B2RK1 b - - 6 18",
    "preMove": "Kg1",
    "solution": [
      "Nh3+",
      "Kh1",
      "Qg1+",
      "Rxg1",
      "Nf2#"
    ]
  },
  {
    "id": "LsNqz",
    "title": "Mate in 3",
    "theme": "Deflection",
    "difficulty": "Medium",
    "rating": 1897,
    "popularity": 86,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r1b4r/1p3pk1/1n1N2p1/p1pPq3/P1P4b/3B4/1PQ2PPN/R1B2RK1 w - - 1 22",
    "fen": "r1b4r/1p3pk1/1n1N2p1/p1pPq3/P1P4b/1P1B4/2Q2PPN/R1B2RK1 b - - 0 22",
    "preMove": "b3",
    "solution": [
      "Qxh2+",
      "Kxh2",
      "Bxf2+",
      "Bh6+",
      "Rxh6#"
    ]
  },
  {
    "id": "C4ygh",
    "title": "Mate in 3",
    "theme": "DiscoveredAttack",
    "difficulty": "Hard",
    "rating": 2122,
    "popularity": 85,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "2k3r1/1pq2p2/1np1pp2/P6p/7r/1B1P1P1b/1PP1QRPP/R5K1 w - - 0 24",
    "fen": "2k3r1/1pq2p2/1Pp1pp2/7p/7r/1B1P1P1b/1PP1QRPP/R5K1 b - - 0 24",
    "preMove": "axb6",
    "solution": [
      "Qxh2+",
      "Kxh2",
      "Bxg2+",
      "Kg1",
      "Rh1#"
    ]
  },
  {
    "id": "gYHsH",
    "title": "Mate in 3",
    "theme": "Deflection",
    "difficulty": "Medium",
    "rating": 1747,
    "popularity": 85,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r3k2r/ppqn1pp1/2p1p3/2Pp4/3P3b/2N1PB2/PP3PP1/R2Q1RK1 w kq - 0 15",
    "fen": "r3k2r/ppqn1pp1/2p1p3/2Pp4/3P3b/4PB2/PP2NPP1/R2Q1RK1 b kq - 1 15",
    "preMove": "Ne2",
    "solution": [
      "Qh2+",
      "Kxh2",
      "Bxf2+",
      "Bh5",
      "Rxh5#"
    ]
  },
  {
    "id": "j2R2s",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2023,
    "popularity": 85,
    "description": "Find the forced checkmate.",
    "initialFen": "r2qk2r/ppp2pp1/1b6/3Pp2n/2BnN3/2PP2P1/PP4PN/R1BQ1R1K w kq - 1 15",
    "fen": "r2qk2r/ppp2pp1/1b1P4/4p2n/2BnN3/2PP2P1/PP4PN/R1BQ1R1K b kq - 0 15",
    "preMove": "d6",
    "solution": [
      "Nxg3+",
      "Nxg3",
      "Rxh2+",
      "Kxh2",
      "Qh4+",
      "Kg1",
      "Ne2#"
    ]
  },
  {
    "id": "tJIVh",
    "title": "Mate in 3",
    "theme": "Deflection",
    "difficulty": "Medium",
    "rating": 1906,
    "popularity": 85,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "1r3rk1/3q1pp1/2p1p3/ppP4B/3PQ3/2P1P2R/6PP/6K1 b - - 3 27",
    "fen": "1r3rk1/5pp1/2p1p3/ppPq3B/3PQ3/2P1P2R/6PP/6K1 w - - 4 28",
    "preMove": "Qd5",
    "solution": [
      "Qh7+",
      "Kxh7",
      "Bxf7+",
      "Qh5",
      "Rxh5#"
    ]
  },
  {
    "id": "v95UU",
    "title": "Mate in 3",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 1399,
    "popularity": 85,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver a smothered mate with the knight.",
    "initialFen": "2kr2r1/p3np1Q/1q1p4/1N3P2/2B1P3/8/1PP2nPP/R1B2R1K w - - 1 21",
    "fen": "2kr2r1/p3np1Q/1q1p4/1N3P2/2B1P3/8/1PP2nPP/R1B2RK1 b - - 2 21",
    "preMove": "Kg1",
    "solution": [
      "Nh3+",
      "Kh1",
      "Qg1+",
      "Rxg1",
      "Nf2#"
    ]
  },
  {
    "id": "yxw3Z",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2122,
    "popularity": 97,
    "description": "Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "r2b1rk1/1p1qnp1p/2n2Q1p/8/2PNR3/8/PB3PPP/R5K1 b - - 0 22",
    "fen": "r2b1rk1/1p1q1p1p/2n2Qnp/8/2PNR3/8/PB3PPP/R5K1 w - - 1 23",
    "preMove": "Ng6",
    "solution": [
      "Qg7+",
      "Kxg7",
      "Nf5+",
      "Kg8",
      "Nxh6#"
    ]
  },
  {
    "id": "umCb4",
    "title": "Mate in 3",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 1404,
    "popularity": 84,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver a smothered mate with the knight.",
    "initialFen": "r5rk/4Q2p/1qp5/pp3N2/4P3/3P4/PPP2nPP/R4R1K w - - 3 23",
    "fen": "r5rk/4Q2p/1qp5/pp3N2/4P3/3P4/PPP2nPP/R4RK1 b - - 4 23",
    "preMove": "Kg1",
    "solution": [
      "Nh3+",
      "Kh1",
      "Qg1+",
      "Rxg1",
      "Nf2#"
    ]
  },
  {
    "id": "2XmFk",
    "title": "Mate in 2",
    "theme": "Deflection",
    "difficulty": "Hard",
    "rating": 2145,
    "popularity": 96,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "3r1r1k/p1q2pp1/3b4/2p1nQPB/1pPp3R/7P/P2B1P2/R5K1 b - - 11 28",
    "fen": "3r1rk1/p1q2pp1/3b4/2p1nQPB/1pPp3R/7P/P2B1P2/R5K1 w - - 12 29",
    "preMove": "Kg8",
    "solution": [
      "Qh7+",
      "Kxh7",
      "Bxf7#"
    ]
  },
  {
    "id": "P1az6",
    "title": "Mate in 2",
    "theme": "Deflection",
    "difficulty": "Medium",
    "rating": 1659,
    "popularity": 96,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r1b1k2r/ppq2pp1/2p1p3/1P6/3PN2b/2PB4/P1Q2PP1/R4RK1 w kq - 0 20",
    "fen": "r1b1k2r/ppq2pp1/2P1p3/8/3PN2b/2PB4/P1Q2PP1/R4RK1 b kq - 0 20",
    "preMove": "bxc6",
    "solution": [
      "Qh2+",
      "Kxh2",
      "Bxf2#"
    ]
  },
  {
    "id": "huV6s",
    "title": "Mate in 3",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 1339,
    "popularity": 83,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver a smothered mate with the knight.",
    "initialFen": "5rk1/1pp2Npp/8/pPP1p3/P7/1Q5P/3rq1n1/5RRK b - - 0 27",
    "fen": "5rk1/1pp2Npp/8/pPP1p3/P4n2/1Q5P/3rq3/5RRK w - - 1 28",
    "preMove": "Nf4",
    "solution": [
      "Nh6+",
      "Kh8",
      "Qg8+",
      "Rxg8",
      "Nf7#"
    ]
  },
  {
    "id": "vWBxn",
    "title": "Mate in 3",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 1402,
    "popularity": 83,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver a smothered mate with the knight.",
    "initialFen": "r4rk1/pb3ppp/1p6/1N2p1B1/2Bq4/3P4/PPP2nPP/R2Q1R1K w - - 4 15",
    "fen": "r4rk1/pb3ppp/1p6/1N2p1B1/2Bq4/3P4/PPP2nPP/R2Q1RK1 b - - 5 15",
    "preMove": "Kg1",
    "solution": [
      "Nh3+",
      "Kh1",
      "Qg1+",
      "Rxg1",
      "Nf2#"
    ]
  },
  {
    "id": "PuPle",
    "title": "Mate in 2",
    "theme": "Deflection",
    "difficulty": "Medium",
    "rating": 1696,
    "popularity": 95,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r2q1rk1/p2n1pp1/1p2p1n1/2pp2pB/3P4/2P1P3/PPQN1PP1/R3K2R b KQ - 3 16",
    "fen": "r2q1rk1/p2nnpp1/1p2p3/2pp2pB/3P4/2P1P3/PPQN1PP1/R3K2R w KQ - 4 17",
    "preMove": "Ne7",
    "solution": [
      "Qh7+",
      "Kxh7",
      "Bxf7#"
    ]
  },
  {
    "id": "cGgSh",
    "title": "Mate in 4",
    "theme": "Deflection",
    "difficulty": "Medium",
    "rating": 1826,
    "popularity": 95,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r4rk1/1pqnbpp1/2p1pN2/7B/2P5/p3P3/PBQP1PP1/R3K2R b KQ - 0 17",
    "fen": "r4rk1/1pqn1pp1/2p1pb2/7B/2P5/p3P3/PBQP1PP1/R3K2R w KQ - 0 18",
    "preMove": "Bxf6",
    "solution": [
      "Qh7+",
      "Kxh7",
      "Bxf7+",
      "Qh2",
      "Rxh2+",
      "Bh4",
      "Rxh4#"
    ]
  },
  {
    "id": "gBYFJ",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1978,
    "popularity": 95,
    "description": "Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "rnbq2rk/1p2bB2/p6B/2p4Q/P7/2n5/1P3PPP/R4RK1 b - - 2 19",
    "fen": "rn1q2rk/1p2bB2/p6B/2p4Q/P5b1/2n5/1P3PPP/R4RK1 w - - 3 20",
    "preMove": "Bg4",
    "solution": [
      "Bg7+",
      "Kxg7",
      "Qg6+",
      "Kh8",
      "Qh6#"
    ]
  },
  {
    "id": "h80Ck",
    "title": "Mate in 2",
    "theme": "Deflection",
    "difficulty": "Medium",
    "rating": 1815,
    "popularity": 95,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r3k2r/pp4p1/3qp1p1/5p2/2BP2nb/2B4P/PP3PP1/R2Q1RK1 w kq - 3 19",
    "fen": "r3k2r/pp4p1/3qp1p1/5p2/2BP2Pb/2B5/PP3PP1/R2Q1RK1 b kq - 0 19",
    "preMove": "hxg4",
    "solution": [
      "Qh2+",
      "Kxh2",
      "Bxf2#"
    ]
  },
  {
    "id": "ATugT",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2146,
    "popularity": 94,
    "description": "Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "r2q1rk1/pp2bppn/3np2p/3p4/3N1N2/1P3PQ1/PB4PP/R3R1K1 b - - 8 21",
    "fen": "r2q1rk1/pp3ppn/3np2p/3p4/3N1N1b/1P3PQ1/PB4PP/R3R1K1 w - - 9 22",
    "preMove": "Bh4",
    "solution": [
      "Qxg7+",
      "Kxg7",
      "Nf5+",
      "Kg8",
      "Nxh6#"
    ]
  },
  {
    "id": "ISW2u",
    "title": "Mate in 4",
    "theme": "Deflection",
    "difficulty": "Medium",
    "rating": 1934,
    "popularity": 94,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "5r1k/p1q3pp/1p2B2r/1P1p4/2PpR2b/3P4/P4PP1/3Q1RK1 w - - 2 27",
    "fen": "5r1k/p1q3pp/1p5r/1P1B4/2PpR2b/3P4/P4PP1/3Q1RK1 b - - 0 27",
    "preMove": "Bxd5",
    "solution": [
      "Qh2+",
      "Kxh2",
      "Bxf2+",
      "Qh5",
      "Rxh5+",
      "Rh4",
      "Rxh4#"
    ]
  },
  {
    "id": "Ia6z7",
    "title": "Mate in 2",
    "theme": "Deflection",
    "difficulty": "Medium",
    "rating": 1880,
    "popularity": 94,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r4rk1/1p2nppp/4p3/p2pq2B/8/3Q3R/PP4PP/R6K b - - 3 20",
    "fen": "r4rk1/1p2nppp/4p3/p2p3B/8/3Q3R/Pq4PP/R6K w - - 0 21",
    "preMove": "Qxb2",
    "solution": [
      "Qxh7+",
      "Kxh7",
      "Bxf7#"
    ]
  },
  {
    "id": "ZMGdG",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2007,
    "popularity": 94,
    "description": "Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "2k3r1/pb6/4p3/1pPn3p/2p5/2P2BPq/P4P1P/2RQ1RK1 w - - 0 23",
    "fen": "2k3r1/pb6/4p3/1pPn3p/2p5/2P3Pq/P4PBP/2RQ1RK1 b - - 1 23",
    "preMove": "Bg2",
    "solution": [
      "Qxg2+",
      "Kxg2",
      "Nf4+",
      "Kg1",
      "Nh3#"
    ]
  },
  {
    "id": "hgPEE",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2166,
    "popularity": 94,
    "description": "Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "r4rk1/1b3ppp/p3p3/1p6/4n1N1/2PB1qPQ/PP3P1P/3R1RK1 w - - 1 22",
    "fen": "r4rk1/1b3ppp/p3p3/1p2N3/4n3/2PB1qPQ/PP3P1P/3R1RK1 b - - 2 22",
    "preMove": "Ne5",
    "solution": [
      "Qh1+",
      "Kxh1",
      "Nxf2+",
      "Kg1",
      "Nxh3#"
    ]
  },
  {
    "id": "p7gld",
    "title": "Mate in 2",
    "theme": "Deflection",
    "difficulty": "Medium",
    "rating": 1806,
    "popularity": 94,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "1n3rk1/p4pp1/4p3/3pP1PB/b1pP4/b1q2N2/P2N1PP1/1Q2K2R b K - 1 24",
    "fen": "5rk1/p4pp1/2n1p3/3pP1PB/b1pP4/b1q2N2/P2N1PP1/1Q2K2R w K - 2 25",
    "preMove": "Nc6",
    "solution": [
      "Qh7+",
      "Kxh7",
      "Bxf7#"
    ]
  },
  {
    "id": "DvREA",
    "title": "Mate in 3",
    "theme": "Deflection",
    "difficulty": "Medium",
    "rating": 1782,
    "popularity": 81,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "1r3rk1/2q2pp1/4p3/p2p2PB/3P4/bPP5/2Q2P2/1K1R3R b - - 1 28",
    "fen": "1r3rk1/2q2pp1/4p3/3p2PB/p2P4/bPP5/2Q2P2/1K1R3R w - - 0 29",
    "preMove": "a4",
    "solution": [
      "Qh7+",
      "Kxh7",
      "Bxf7+",
      "Qh2",
      "Rxh2#"
    ]
  },
  {
    "id": "3DnIg",
    "title": "Mate in 2",
    "theme": "Deflection",
    "difficulty": "Medium",
    "rating": 1756,
    "popularity": 93,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2r2rk1/pp3ppp/1qnPp3/3p3B/3P4/1P1QP2R/P5PP/R5K1 b - - 2 23",
    "fen": "2r2rk1/pp3ppp/1q1Pp3/3p3B/1n1P4/1P1QP2R/P5PP/R5K1 w - - 3 24",
    "preMove": "Nb4",
    "solution": [
      "Qxh7+",
      "Kxh7",
      "Bxf7#"
    ]
  },
  {
    "id": "JBjSq",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2124,
    "popularity": 93,
    "description": "Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "rn1q1rk1/pp2np1p/1b2bQ2/4N3/1P4P1/P3P3/1B1P2BP/R3K2R b KQ - 0 16",
    "fen": "rn1q1rk1/pp3p1p/1b2bQ2/3nN3/1P4P1/P3P3/1B1P2BP/R3K2R w KQ - 1 17",
    "preMove": "Nd5",
    "solution": [
      "Qh8+",
      "Kxh8",
      "Nxf7+",
      "Kg8",
      "Nh6#"
    ]
  },
  {
    "id": "NaV0C",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1844,
    "popularity": 93,
    "description": "Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "r4rk1/ppp2ppp/1b1p1n2/1P2pq2/2Pn4/P1NP1NPb/4PP1P/R1BQR1KB w - - 1 13",
    "fen": "r4rk1/ppp2ppp/1b1p1n2/1P2pq2/2Pn3N/P1NP2Pb/4PP1P/R1BQR1KB b - - 2 13",
    "preMove": "Nh4",
    "solution": [
      "Qxf2+",
      "Kxf2",
      "Ng4+",
      "Kg1",
      "Nxe2#"
    ]
  },
  {
    "id": "QE5Vz",
    "title": "Mate in 2",
    "theme": "Deflection",
    "difficulty": "Medium",
    "rating": 1738,
    "popularity": 93,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r4rk1/pn2qppp/2p1p3/2Pp3B/8/PP2P1P1/2Q2PP1/R3K2R b KQ - 0 19",
    "fen": "r4rk1/pn3ppp/2p1p3/2qp3B/8/PP2P1P1/2Q2PP1/R3K2R w KQ - 0 20",
    "preMove": "Qxc5",
    "solution": [
      "Qxh7+",
      "Kxh7",
      "Bxf7#"
    ]
  },
  {
    "id": "UOF42",
    "title": "Mate in 2",
    "theme": "Deflection",
    "difficulty": "Medium",
    "rating": 1840,
    "popularity": 93,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "3r1r1k/2p2pp1/nq2p3/pp2n1PB/8/P4P2/1P3P2/RQ2K2R b KQ - 0 23",
    "fen": "3r1rk1/2p2pp1/nq2p3/pp2n1PB/8/P4P2/1P3P2/RQ2K2R w KQ - 1 24",
    "preMove": "Kg8",
    "solution": [
      "Qh7+",
      "Kxh7",
      "Bxf7#"
    ]
  },
  {
    "id": "WgPtv",
    "title": "Mate in 5",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2153,
    "popularity": 93,
    "description": "Find the forced checkmate.",
    "initialFen": "2rnk2r/1bq1B1p1/p2pp3/1p6/4P2p/P1NQ2n1/BPP1N1PP/R4R1K w k - 1 20",
    "fen": "2rnk2r/1bq1B1p1/p2pp3/1p6/4P2p/P1NQ2P1/BPP1N1P1/R4R1K b k - 0 20",
    "preMove": "hxg3",
    "solution": [
      "hxg3+",
      "Kg1",
      "Qc5+",
      "Qd4",
      "Rh1+",
      "Kxh1",
      "Qh5+",
      "Bh4",
      "Qxh4+",
      "Kg1",
      "Qh2#"
    ]
  },
  {
    "id": "h1rCh",
    "title": "Mate in 2",
    "theme": "Deflection",
    "difficulty": "Hard",
    "rating": 2012,
    "popularity": 93,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r4rk1/ppq2ppp/3p4/4bQ1B/4P2R/1P5P/P1P3P1/7K b - - 5 21",
    "fen": "r4rk1/pp3ppp/3p4/4bQ1B/4P2R/1P5P/P1q3P1/7K w - - 0 22",
    "preMove": "Qxc2",
    "solution": [
      "Qxh7+",
      "Kxh7",
      "Bxf7#"
    ]
  },
  {
    "id": "iJ87B",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2181,
    "popularity": 93,
    "description": "Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "1r3rk1/1b3ppp/p3p3/8/P1B1n3/2N2qP1/1PQ2P1P/R4RK1 w - - 0 19",
    "fen": "1r3rk1/1b3ppp/p3p3/8/P3n3/2N2qP1/1PQ1BP1P/R4RK1 b - - 1 19",
    "preMove": "Be2",
    "solution": [
      "Qh1+",
      "Kxh1",
      "Nxf2+",
      "Kg1",
      "Nh3#"
    ]
  },
  {
    "id": "m3ofW",
    "title": "Mate in 2",
    "theme": "Deflection",
    "difficulty": "Medium",
    "rating": 1838,
    "popularity": 93,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "4rrkn/ppp1qpp1/3p3p/6NB/5P2/3QP2R/P1P3P1/6K1 b - - 4 25",
    "fen": "4rrkn/ppp1qpp1/3p4/6pB/5P2/3QP2R/P1P3P1/6K1 w - - 0 26",
    "preMove": "hxg5",
    "solution": [
      "Qh7+",
      "Kxh7",
      "Bxf7#"
    ]
  },
  {
    "id": "sxrED",
    "title": "Mate in 5",
    "theme": "Attraction",
    "difficulty": "Easy",
    "rating": 1360,
    "popularity": 93,
    "description": "Find the forced checkmate.",
    "initialFen": "1k1r3r/pBp5/Pp2p3/6np/7q/2N1RPp1/1PPP2Pb/R1BQ3K w - - 3 20",
    "fen": "1k1r3r/pBp5/Pp2p3/6np/7q/2NPRPp1/1PP3Pb/R1BQ3K b - - 0 20",
    "preMove": "d3",
    "solution": [
      "Bg1+",
      "Kxg1",
      "Qh2+",
      "Kf1",
      "Qh1+",
      "Ke2",
      "Qxg2+",
      "Ke1",
      "Qf2#"
    ]
  },
  {
    "id": "vJmov",
    "title": "Mate in 2",
    "theme": "Deflection",
    "difficulty": "Hard",
    "rating": 2125,
    "popularity": 93,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "5r1k/2q3pp/b3Q3/p1p4r/2PpN2b/8/P4PPP/R1B2RK1 w - - 10 25",
    "fen": "5r1k/2q3pp/Q7/p1p4r/2PpN2b/8/P4PPP/R1B2RK1 b - - 0 25",
    "preMove": "Qxa6",
    "solution": [
      "Qxh2+",
      "Kxh2",
      "Bxf2#"
    ]
  },
  {
    "id": "4DfLO",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2025,
    "popularity": 92,
    "description": "Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "3r2k1/pp3pp1/2n2q2/4nb1Q/2B4N/1P6/P1P2PP1/1K5R b - - 3 21",
    "fen": "3r2k1/pp3pp1/2n2qb1/4n2Q/2B4N/1P6/P1P2PP1/1K5R w - - 4 22",
    "preMove": "Bg6",
    "solution": [
      "Qh8+",
      "Kxh8",
      "Nxg6+",
      "Kg8",
      "Rh8#"
    ]
  },
  {
    "id": "BC3CU",
    "title": "Mate in 5",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2103,
    "popularity": 92,
    "description": "Find the forced checkmate.",
    "initialFen": "1kr2b1r/pp3pp1/3p2p1/3N4/4P3/3Q1P2/P1P2qPP/R1R4K w - - 4 23",
    "fen": "1kr2b1r/pp3pp1/3p2p1/3N4/P3P3/3Q1P2/2P2qPP/R1R4K b - - 0 23",
    "preMove": "a4",
    "solution": [
      "Rxh2+",
      "Kxh2",
      "Be7",
      "f4",
      "Rh8+",
      "Qh3",
      "Rxh3+",
      "Kxh3",
      "Qh4#"
    ]
  },
  {
    "id": "9u9u1",
    "title": "Mate in 2",
    "theme": "Deflection",
    "difficulty": "Hard",
    "rating": 2017,
    "popularity": 91,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2kr3r/ppqn1pp1/2p1p1p1/8/4NQ1b/1B1P4/PPP2PPP/R4RK1 w - - 6 18",
    "fen": "2kr3r/ppqn1Qp1/2p1p1p1/8/4N2b/1B1P4/PPP2PPP/R4RK1 b - - 0 18",
    "preMove": "Qxf7",
    "solution": [
      "Qxh2+",
      "Kxh2",
      "Bxf2#"
    ]
  },
  {
    "id": "NcjMu",
    "title": "Mate in 2",
    "theme": "Deflection",
    "difficulty": "Hard",
    "rating": 2064,
    "popularity": 91,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "4r1k1/4rppp/b1q5/p2p1QPB/1p1Pn3/1Pp1N3/P1P2PP1/R3K2R b KQ - 2 23",
    "fen": "4r1k1/4rppp/b7/pq1p1QPB/1p1Pn3/1Pp1N3/P1P2PP1/R3K2R w KQ - 3 24",
    "preMove": "Qb5",
    "solution": [
      "Qxh7+",
      "Kxh7",
      "Bxf7#"
    ]
  },
  {
    "id": "Y7BnR",
    "title": "Mate in 5",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2167,
    "popularity": 91,
    "description": "Find the forced checkmate.",
    "initialFen": "2kr2r1/Bppq1p2/8/1P2P3/P1P3p1/4Qb1p/5PPP/R4RK1 w - - 0 24",
    "fen": "2kr2r1/Bppq1p2/8/1P2P3/P1P3p1/4QP1p/5P1P/R4RK1 b - - 0 24",
    "preMove": "gxf3",
    "solution": [
      "gxf3+",
      "Kh1",
      "Qg4",
      "Rg1",
      "Qxg1+",
      "Rxg1",
      "Rxg1+",
      "Kxg1",
      "Rd1+",
      "Qe1",
      "Rxe1#"
    ]
  },
  {
    "id": "cFBUM",
    "title": "Mate in 3",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 1321,
    "popularity": 78,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver a smothered mate with the knight.",
    "initialFen": "r6k/1b4pp/1p6/2q2Br1/1B2P3/PQ3P2/5nPP/R4R1K w - - 4 25",
    "fen": "r6k/1b4pp/1p6/2q2Br1/1B2P3/PQ3P2/5nPP/R4RK1 b - - 5 25",
    "preMove": "Kg1",
    "solution": [
      "Nh3+",
      "Kh1",
      "Qg1+",
      "Rxg1",
      "Nf2#"
    ]
  },
  {
    "id": "r100T",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1699,
    "popularity": 90,
    "description": "Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "5r1k/1pp3pp/p2p3q/4p3/2BP2Qn/2P5/PP3r1N/R5RK w - - 0 23",
    "fen": "5r1k/1pp3pp/p2p3q/4p3/2BP2Qn/2P5/PP3r1N/5RRK b - - 1 23",
    "preMove": "Raf1",
    "solution": [
      "Rxh2+",
      "Kxh2",
      "Nf3+",
      "Kg2",
      "Qh2#"
    ]
  },
  {
    "id": "1Vh8H",
    "title": "Mate in 3",
    "theme": "DiscoveredCheck",
    "difficulty": "Hard",
    "rating": 2195,
    "popularity": 89,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate. Deliver a Vukovic mate with knight support.",
    "initialFen": "6k1/1b4pp/p3p3/1p2Nq2/4nP2/P1P4P/3r2P1/1R2QR1K w - - 3 32",
    "fen": "6k1/1b4pp/p3p3/1p2Nq2/4nP2/P1P4P/3r2P1/3RQR1K b - - 4 32",
    "preMove": "Rd1",
    "solution": [
      "Qxh3+",
      "gxh3",
      "Ng3+",
      "Kg1",
      "Rg2#"
    ]
  },
  {
    "id": "IrehO",
    "title": "Mate in 2",
    "theme": "Deflection",
    "difficulty": "Medium",
    "rating": 1962,
    "popularity": 89,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2r1r1k1/p2nbpp1/5n2/qp1N2BB/2pP4/4P3/PPQ2PP1/2K1R2R b - - 0 19",
    "fen": "2r1r1k1/p2nbpp1/8/qp1n2BB/2pP4/4P3/PPQ2PP1/2K1R2R w - - 0 20",
    "preMove": "Nxd5",
    "solution": [
      "Qh7+",
      "Kxh7",
      "Bxf7#"
    ]
  },
  {
    "id": "oz6j7",
    "title": "Mate in 3",
    "theme": "Deflection",
    "difficulty": "Medium",
    "rating": 1845,
    "popularity": 76,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "7r/p1q3k1/1pp2pr1/2B2P2/4p2b/1P6/P1P2PP1/R2Q1RK1 w - - 0 25",
    "fen": "7r/p1q3k1/1pp2pP1/2B5/4p2b/1P6/P1P2PP1/R2Q1RK1 b - - 0 25",
    "preMove": "fxg6",
    "solution": [
      "Qh2+",
      "Kxh2",
      "Bxf2+",
      "Qh5",
      "Rxh5#"
    ]
  },
  {
    "id": "vJdRe",
    "title": "Mate in 3",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 1331,
    "popularity": 76,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver a smothered mate with the knight.",
    "initialFen": "r4rk1/pp3Npp/1qp3n1/8/1P4n1/PQB5/5RPP/5RK1 b - - 0 25",
    "fen": "r4rk1/pp3Npp/1qp3n1/8/1P6/PQB5/5nPP/5RK1 w - - 0 26",
    "preMove": "Nxf2",
    "solution": [
      "Nh6+",
      "Kh8",
      "Qg8+",
      "Rxg8",
      "Nf7#"
    ]
  },
  {
    "id": "8XbXa",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1868,
    "popularity": 88,
    "description": "Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "2rr1nk1/p7/b3p1PQ/4N3/3Bp3/4P2P/PP2q3/R5K1 b - - 0 28",
    "fen": "3r1nk1/p7/b3p1PQ/4N3/3Bp3/4P2P/PPr1q3/R5K1 w - - 1 29",
    "preMove": "Rc2",
    "solution": [
      "Qh8+",
      "Kxh8",
      "Nf7+",
      "Kg8",
      "Nh6#"
    ]
  },
  {
    "id": "VkF6N",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2072,
    "popularity": 88,
    "description": "Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "3r2k1/1b3p1p/p2q2pQ/1p1n4/1PpNp3/P3P3/1BK5/6R1 b - - 9 35",
    "fen": "5rk1/1b3p1p/p2q2pQ/1p1n4/1PpNp3/P3P3/1BK5/6R1 w - - 10 36",
    "preMove": "Rf8",
    "solution": [
      "Qg7+",
      "Kxg7",
      "Nf5+",
      "Kg8",
      "Nh6#"
    ]
  },
  {
    "id": "mGKFv",
    "title": "Mate in 4",
    "theme": "DiscoveredAttack",
    "difficulty": "Hard",
    "rating": 2069,
    "popularity": 88,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "Q7/ppp1k3/3p2r1/4p1n1/2B1P1b1/2PPb3/PP3RP1/5RK1 w - - 1 25",
    "fen": "8/pQp1k3/3p2r1/4p1n1/2B1P1b1/2PPb3/PP3RP1/5RK1 b - - 0 25",
    "preMove": "Qxb7",
    "solution": [
      "Nf3+",
      "gxf3",
      "Bxf3+",
      "Kh2",
      "Bf4+",
      "Kh3",
      "Rh6#"
    ]
  },
  {
    "id": "s41Vl",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1681,
    "popularity": 99,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "rn3rk1/pp1q2pp/2p5/3p4/1Q3B2/3P2Pb/PPP3BP/4RRK1 b - - 4 16",
    "fen": "rn3rk1/pp1q2pp/2p5/3p4/1Q3B2/3P2P1/PPP3bP/4RRK1 w - - 0 17",
    "preMove": "Bxg2",
    "solution": [
      "Qxf8+",
      "Kxf8",
      "Bd6+",
      "Kg8",
      "Rf8#"
    ]
  },
  {
    "id": "hRcgC",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2130,
    "popularity": 86,
    "description": "Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "b2r1rk1/p4ppp/1p6/2pn1n2/Q1B1q3/P3PN1P/1P3PPB/2R2RK1 w - - 7 20",
    "fen": "b2r1rk1/p4ppp/1p6/2pn1n2/Q1B1q3/P3P2P/1P1N1PPB/2R2RK1 b - - 8 20",
    "preMove": "Nd2",
    "solution": [
      "Qxg2+",
      "Kxg2",
      "Nf4+",
      "Kg1",
      "Nxh3#"
    ]
  },
  {
    "id": "t8oSI",
    "title": "Mate in 2",
    "theme": "Deflection",
    "difficulty": "Medium",
    "rating": 1812,
    "popularity": 86,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2r2rk1/2q2pp1/1n2p3/p6B/2pP4/2P3P1/P1Q1RP2/1K5R b - - 0 30",
    "fen": "2r2rk1/2q2pp1/4p3/p2n3B/2pP4/2P3P1/P1Q1RP2/1K5R w - - 1 31",
    "preMove": "Nd5",
    "solution": [
      "Qh7+",
      "Kxh7",
      "Bxf7#"
    ]
  },
  {
    "id": "5wwKF",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1650,
    "popularity": 98,
    "description": "Trap the king in the corner. Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "1k3r1r/ppp3p1/8/Q7/3Np1qp/NP1nP3/P4P1K/R4R2 w - - 2 24",
    "fen": "1k3r1r/ppp3p1/8/QN6/3Np1qp/1P1nP3/P4P1K/R4R2 b - - 3 24",
    "preMove": "Nab5",
    "solution": [
      "Rxf2+",
      "Rxf2",
      "Qg3+",
      "Kh1",
      "Nxf2#"
    ]
  },
  {
    "id": "AYYTS",
    "title": "Mate in 3",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 1387,
    "popularity": 73,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver a smothered mate with the knight.",
    "initialFen": "4rr1k/p1q1bNpp/2p1Q3/1pPn4/1P3p2/5P1P/PB3KP1/R6R b - - 6 25",
    "fen": "4rrk1/p1q1bNpp/2p1Q3/1pPn4/1P3p2/5P1P/PB3KP1/R6R w - - 7 26",
    "preMove": "Kg8",
    "solution": [
      "Nh6+",
      "Kh8",
      "Qg8+",
      "Rxg8",
      "Nf7#"
    ]
  },
  {
    "id": "P5Xto",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1958,
    "popularity": 98,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "6rk/p4Q2/2p4p/3n4/4R3/2bB4/P1P1KP2/1R4q1 b - - 2 29",
    "fen": "6rk/p4Q2/2p4p/3n4/4R3/2bB4/P1P1KP2/1q6 w - - 0 30",
    "preMove": "Qxb1",
    "solution": [
      "Qh7+",
      "Kxh7",
      "Re7+",
      "Kh8",
      "Rh7#"
    ]
  },
  {
    "id": "Wdf1o",
    "title": "Mate in 3",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 1410,
    "popularity": 73,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver a smothered mate with the knight.",
    "initialFen": "r3k2r/ppp4p/2b2pN1/7Q/3q4/8/PP3nPP/RNB2R1K w kq - 2 15",
    "fen": "r3k2r/ppp4p/2b2pN1/7Q/3q4/8/PP3nPP/RNB2RK1 b kq - 3 15",
    "preMove": "Kg1",
    "solution": [
      "Nh3+",
      "Kh1",
      "Qg1+",
      "Rxg1",
      "Nf2#"
    ]
  },
  {
    "id": "oDB2C",
    "title": "Mate in 3",
    "theme": "DiscoveredAttack",
    "difficulty": "Medium",
    "rating": 1735,
    "popularity": 85,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r6k/p6p/3N2p1/2p4r/2Pb1P1q/3P1NRb/PP1Q2K1/R7 w - - 0 28",
    "fen": "r6k/p6p/3N2p1/2p4r/2Pb1P1q/3P1NRb/PP1Q3K/R7 b - - 1 28",
    "preMove": "Kh2",
    "solution": [
      "Bf1+",
      "Nxh4",
      "Rxh4+",
      "Rh3",
      "Rxh3#"
    ]
  },
  {
    "id": "O8g2m",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2077,
    "popularity": 97,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "5rk1/pp5p/1qb2bp1/3N3n/2p5/2P2N2/PPB2PPP/1R1Qr1K1 w - - 0 22",
    "fen": "5rk1/pp5p/1qb2bp1/3N3n/2p5/2P5/PPB2PPP/1R1QN1K1 b - - 0 22",
    "preMove": "Nxe1",
    "solution": [
      "Qxf2+",
      "Kxf2",
      "Bd4+",
      "Ke2",
      "Rf2#"
    ]
  },
  {
    "id": "Te8G9",
    "title": "Mate in 2",
    "theme": "AdvancedPawn",
    "difficulty": "Easy",
    "rating": 1250,
    "popularity": 97,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "rnbq1rk1/pp1p1pp1/1b2N3/4P2Q/8/4p3/PPP3PP/RN3RK1 w - - 1 15",
    "fen": "rnbN1rk1/pp1p1pp1/1b6/4P2Q/8/4p3/PPP3PP/RN3RK1 b - - 0 15",
    "preMove": "Nxd8",
    "solution": [
      "e2+",
      "Rf2",
      "e1=Q#"
    ]
  },
  {
    "id": "f2Ags",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1719,
    "popularity": 97,
    "description": "Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "r4rk1/1p4pp/8/pNpRQ1n1/2P1p2q/PP2P2b/5PP1/3R1B1K w - - 0 25",
    "fen": "r4rk1/1p4pp/8/pNpRQ1n1/2P1p2q/PP2P1Pb/5P2/3R1B1K b - - 0 25",
    "preMove": "g3",
    "solution": [
      "Bg2+",
      "Kxg2",
      "Qh3+",
      "Kg1",
      "Nf3#"
    ]
  },
  {
    "id": "vVkhK",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1885,
    "popularity": 97,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "r4rk1/1bq5/p5p1/1p2R3/3B4/1P5Q/P1P3PP/6K1 b - - 1 28",
    "fen": "r4rk1/1b3q2/p5p1/1p2R3/3B4/1P5Q/P1P3PP/6K1 w - - 2 29",
    "preMove": "Qf7",
    "solution": [
      "Qh8+",
      "Kxh8",
      "Rh5+",
      "Kg8",
      "Rh8#"
    ]
  },
  {
    "id": "vZjpm",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2105,
    "popularity": 84,
    "description": "Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "r3k1r1/1b3p1p/pp6/2pnB3/8/4P2q/PP2BPPP/R2Q1RK1 w q - 3 19",
    "fen": "r3k1r1/1b3p1p/pp6/2pn4/8/4P1Bq/PP2BPPP/R2Q1RK1 b q - 4 19",
    "preMove": "Bg3",
    "solution": [
      "Qxg2+",
      "Kxg2",
      "Nf4+",
      "Kg1",
      "Nh3#"
    ]
  },
  {
    "id": "47RgQ",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1794,
    "popularity": 96,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "r3k2r/ppp1npp1/2nb4/3p4/3P3p/3B1PNq/PPP2P1P/R1BQ2RK w kq - 0 13",
    "fen": "r3k2r/ppp1npp1/2nb4/3p4/3P3p/5PNq/PPP2P1P/R1BQ1BRK b kq - 1 13",
    "preMove": "Bf1",
    "solution": [
      "Qxh2+",
      "Kxh2",
      "hxg3+",
      "Kg2",
      "Rh2#"
    ]
  },
  {
    "id": "55Bzw",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1790,
    "popularity": 96,
    "description": "Find the forced checkmate. Find the forced mate in three. Finish with the classic Morphy's mate pattern.",
    "initialFen": "3Q1bk1/pp3pqp/2b5/5p2/4rN2/1BP1p3/PP4PP/4RR1K w - - 1 26",
    "fen": "3Q1bk1/pp3pqp/2b5/5p1N/4r3/1BP1p3/PP4PP/4RR1K b - - 2 26",
    "preMove": "Nh5",
    "solution": [
      "Qxg2+",
      "Kxg2",
      "Rg4+",
      "Kh3",
      "Bg2#"
    ]
  },
  {
    "id": "6TnFH",
    "title": "Mate in 2",
    "theme": "AdvancedPawn",
    "difficulty": "Easy",
    "rating": 1136,
    "popularity": 96,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r6N/ppp3kp/2n3p1/2b2b2/5p2/1QP1p3/PP4PP/RN3RK1 w - - 1 20",
    "fen": "r6N/pQp3kp/2n3p1/2b2b2/5p2/2P1p3/PP4PP/RN3RK1 b - - 0 20",
    "preMove": "Qxb7",
    "solution": [
      "e2+",
      "Rf2",
      "e1=Q#"
    ]
  },
  {
    "id": "9E0bT",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1582,
    "popularity": 96,
    "description": "Trap the king in the corner. Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "2r2r2/pp3pk1/1nb5/4N2p/3P4/1BP3Q1/P2q2PP/5RK1 b - - 4 25",
    "fen": "2r2r2/pp3p1k/1nb5/4N2p/3P4/1BP3Q1/P2q2PP/5RK1 w - - 5 26",
    "preMove": "Kh7",
    "solution": [
      "Rxf7+",
      "Rxf7",
      "Qg6+",
      "Kh8",
      "Nxf7#"
    ]
  },
  {
    "id": "H9IeA",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1694,
    "popularity": 96,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "Q6k/2p1q1rp/1p1p4/pP2p2b/P1P1P1B1/4K1RP/6P1/8 b - - 18 44",
    "fen": "Q5rk/2p1q2p/1p1p4/pP2p2b/P1P1P1B1/4K1RP/6P1/8 w - - 19 45",
    "preMove": "Rg8",
    "solution": [
      "Qxg8+",
      "Kxg8",
      "Be6+",
      "Kh8",
      "Rg8#"
    ]
  },
  {
    "id": "NkpQO",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1585,
    "popularity": 96,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "5rk1/pp4pp/2pb4/3p1b2/3P4/1PN2qP1/1PPQR2P/R5K1 w - - 0 20",
    "fen": "5rk1/pp4pp/2pb4/3p1b2/3P4/1PN2qP1/1PPQR2P/5RK1 b - - 1 20",
    "preMove": "Rf1",
    "solution": [
      "Qxf1+",
      "Kxf1",
      "Bh3+",
      "Ke1",
      "Rf1#"
    ]
  },
  {
    "id": "QpUTe",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1768,
    "popularity": 96,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "r2qb1rk/pp1nbp1p/4p1pQ/3pP1PP/5B2/2PB4/PP1N1P2/R3K2R b KQ - 0 16",
    "fen": "r2qbbrk/pp1n1p1p/4p1pQ/3pP1PP/5B2/2PB4/PP1N1P2/R3K2R w KQ - 1 17",
    "preMove": "Bf8",
    "solution": [
      "Qxh7+",
      "Kxh7",
      "hxg6+",
      "Kg7",
      "Rh7#"
    ]
  },
  {
    "id": "SI3hC",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2014,
    "popularity": 96,
    "description": "Find the forced checkmate. Find the forced mate in three. Finish with the classic Morphy's mate pattern.",
    "initialFen": "6rk/ppp4p/2q2pb1/8/7Q/1P1P4/P1P2PPP/2R2RK1 w - - 3 24",
    "fen": "6rk/ppp4p/2q2pb1/8/P6Q/1P1P4/2P2PPP/2R2RK1 b - - 0 24",
    "preMove": "a4",
    "solution": [
      "Qxg2+",
      "Kxg2",
      "Be4+",
      "Kh3",
      "Bg2#"
    ]
  },
  {
    "id": "UZUPO",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1558,
    "popularity": 96,
    "description": "Find the forced checkmate. Find the forced mate in three. Finish with the classic Morphy's mate pattern.",
    "initialFen": "3r1rk1/p3bppp/1p2p3/2p1Q2q/8/2P2PB1/PP3P1P/R5RK b - - 8 22",
    "fen": "5rk1/p3bppp/1p2p3/2prQ2q/8/2P2PB1/PP3P1P/R5RK w - - 9 23",
    "preMove": "Rd5",
    "solution": [
      "Qxg7+",
      "Kxg7",
      "Be5+",
      "Kh6",
      "Bg7#"
    ]
  },
  {
    "id": "Wr4Oh",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2069,
    "popularity": 96,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "6Qk/1ppr1q2/p4p1Q/3P1b2/2p4B/3n1P2/PP4P1/K6R b - - 0 31",
    "fen": "6k1/1ppr1q2/p4p1Q/3P1b2/2p4B/3n1P2/PP4P1/K6R w - - 0 32",
    "preMove": "Kxg8",
    "solution": [
      "Qh8+",
      "Kxh8",
      "Bxf6+",
      "Kg8",
      "Rh8#"
    ]
  },
  {
    "id": "c8T5N",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2024,
    "popularity": 96,
    "description": "Find the forced checkmate. Find the forced mate in three. Finish with a swallow's tail queen sacrifice mate.",
    "initialFen": "4r2k/1b1r2pB/1p2p3/2q1B3/1pPR1Pn1/7R/P1Q3PP/6K1 b - - 2 26",
    "fen": "4r2k/1b4pB/1p2p3/2q1B3/1pPr1Pn1/7R/P1Q3PP/6K1 w - - 0 27",
    "preMove": "Rxd4",
    "solution": [
      "Bg8+",
      "Kxg8",
      "Qh7+",
      "Kf7",
      "Qxg7#"
    ]
  },
  {
    "id": "diqOd",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2026,
    "popularity": 96,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r4rk1/ppp1bppp/2n2B2/8/2b5/2P2P2/PPP1QP1P/1K1R2R1 b - - 0 16",
    "fen": "r4rk1/ppp1bppp/2n2B2/8/8/2P2P2/PPP1bP1P/1K1R2R1 w - - 0 17",
    "preMove": "Bxe2",
    "solution": [
      "Rxg7+",
      "Kh8",
      "Rg8+",
      "Kxg8",
      "Rg1#"
    ]
  },
  {
    "id": "gIHHB",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1951,
    "popularity": 96,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "3q1rkr/p2p1pn1/1pb1pQ2/2p1PpNp/2P2B2/2P3R1/P1P3PP/5RK1 b - - 13 23",
    "fen": "3q1rkr/p2p1pn1/1pb1pQ2/2p1PpN1/2P2B1p/2P3R1/P1P3PP/5RK1 w - - 0 24",
    "preMove": "h4",
    "solution": [
      "Qxg7+",
      "Kxg7",
      "Nxe6+",
      "Kh7",
      "Rg7#"
    ]
  },
  {
    "id": "hwWUG",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Easy",
    "rating": 1434,
    "popularity": 96,
    "description": "Trap the king in the corner. Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "2bq1rk1/1ppp2pp/7r/p1b2P2/2Pn1P2/P1NB4/1P4PP/R1BQ1R1K w - - 3 15",
    "fen": "2bq1rk1/1ppp2pp/7r/p1b2P2/2PnNP2/P2B4/1P4PP/R1BQ1R1K b - - 4 15",
    "preMove": "Ne4",
    "solution": [
      "Rxh2+",
      "Kxh2",
      "Qh4+",
      "Kg1",
      "Ne2#"
    ]
  },
  {
    "id": "ihsHY",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1835,
    "popularity": 96,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "r2q1r1k/pb2np1p/4p1pQ/1p1pP2P/2pP2P1/2P1P3/PPBN4/2KR3R b - - 0 19",
    "fen": "r2q1rnk/pb3p1p/4p1pQ/1p1pP2P/2pP2P1/2P1P3/PPBN4/2KR3R w - - 1 20",
    "preMove": "Ng8",
    "solution": [
      "Qxh7+",
      "Kxh7",
      "hxg6+",
      "Kg7",
      "Rh7#"
    ]
  },
  {
    "id": "mKOTK",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2018,
    "popularity": 96,
    "description": "Find the forced checkmate.",
    "initialFen": "r4rk1/1pp1qpb1/7p/3pn3/p1n1p2R/P1Q1PPB1/1PP1BP2/2K3R1 b - - 1 21",
    "fen": "r4rk1/1pp1qpb1/7p/3p4/p1n1p2R/P1Q1PnB1/1PP1BP2/2K3R1 w - - 0 22",
    "preMove": "Nxf3",
    "solution": [
      "Qxg7+",
      "Kxg7",
      "Be5+",
      "Kh7",
      "Rg7+",
      "Kh8",
      "Rxh6#"
    ]
  },
  {
    "id": "nLisa",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1844,
    "popularity": 96,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "6rk/pp1Q3p/1q5b/4p3/8/2PRp2P/PP3rP1/1B2R2K b - - 7 29",
    "fen": "6rk/pp1Q3p/2q4b/4p3/8/2PRp2P/PP3rP1/1B2R2K w - - 8 30",
    "preMove": "Qc6",
    "solution": [
      "Qxh7+",
      "Kxh7",
      "Rd7+",
      "Kh8",
      "Rh7#"
    ]
  },
  {
    "id": "s7I1w",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1730,
    "popularity": 96,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "r2qb1rk/pp1nbp1p/4p1pQ/3pP1PP/2p2B2/2P1P3/PPBN1P2/1R2K2R b K - 0 18",
    "fen": "r2qbbrk/pp1n1p1p/4p1pQ/3pP1PP/2p2B2/2P1P3/PPBN1P2/1R2K2R w K - 1 19",
    "preMove": "Bf8",
    "solution": [
      "Qxh7+",
      "Kxh7",
      "hxg6+",
      "Kg7",
      "Rh7#"
    ]
  },
  {
    "id": "tJ95Q",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1778,
    "popularity": 96,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "r1b1k2r/pp4Rp/2p2p2/1q2nP2/3QB3/b7/P1PB4/K2R4 b kq - 3 27",
    "fen": "r1b1k2r/pp4Rp/2p2p2/1qb1nP2/3QB3/8/P1PB4/K2R4 w kq - 4 28",
    "preMove": "Bc5",
    "solution": [
      "Qd8+",
      "Kxd8",
      "Ba5+",
      "Ke8",
      "Rd8#"
    ]
  },
  {
    "id": "uoC34",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1885,
    "popularity": 96,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "r5nk/pp2b3/3q3p/5Q1P/3pR3/3B4/PPP2PP1/5K2 b - - 0 22",
    "fen": "5rnk/pp2b3/3q3p/5Q1P/3pR3/3B4/PPP2PP1/5K2 w - - 1 23",
    "preMove": "Rf8",
    "solution": [
      "Qh7+",
      "Kxh7",
      "Rxe7+",
      "Kh8",
      "Rh7#"
    ]
  },
  {
    "id": "wYZ6n",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Easy",
    "rating": 1376,
    "popularity": 96,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "2r2r1k/3n1ppB/pq2p2R/1p1b4/8/1P6/PB3bPP/1Q1R3K b - - 1 25",
    "fen": "2r2r1k/3n1ppB/pq2p2R/1p1b4/8/1P2b3/PB4PP/1Q1R3K w - - 2 26",
    "preMove": "Be3",
    "solution": [
      "Bg8+",
      "Kxg8",
      "Qh7#"
    ]
  },
  {
    "id": "yzPNw",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1830,
    "popularity": 96,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "r2q1r1k/ppnbnp1p/4p1pQ/3pP1PP/2p2B2/P1P1P3/1PBN1P2/R3K2R b KQ - 0 17",
    "fen": "r2q1rnk/ppnb1p1p/4p1pQ/3pP1PP/2p2B2/P1P1P3/1PBN1P2/R3K2R w KQ - 1 18",
    "preMove": "Ng8",
    "solution": [
      "Qxh7+",
      "Kxh7",
      "hxg6+",
      "Kg7",
      "Rh7#"
    ]
  },
  {
    "id": "7iswW",
    "title": "Mate in 2",
    "theme": "Deflection",
    "difficulty": "Medium",
    "rating": 1843,
    "popularity": 83,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2b1Q3/2q3pk/p5np/1p1p3r/2pP3b/P1P5/BP2NPPP/R4RK1 w - - 1 23",
    "fen": "2b1Q3/2q3pk/p5np/1p1p3r/2pP3b/P1P5/1P2NPPP/RB3RK1 b - - 2 23",
    "preMove": "Bb1",
    "solution": [
      "Qxh2+",
      "Kxh2",
      "Bxf2#"
    ]
  },
  {
    "id": "BhSay",
    "title": "Mate in 4",
    "theme": "DiscoveredAttack",
    "difficulty": "Hard",
    "rating": 2041,
    "popularity": 83,
    "description": "Find the forced checkmate. Deliver the famous opera-style mate.",
    "initialFen": "r4bk1/pp3rp1/2p2pQB/3p4/5P2/5q2/P1P2PRR/7K b - - 3 30",
    "fen": "4rbk1/pp3rp1/2p2pQB/3p4/5P2/5q2/P1P2PRR/7K w - - 4 31",
    "preMove": "Re8",
    "solution": [
      "Qh7+",
      "Kxh7",
      "Bxg7+",
      "Qh5",
      "Rxh5+",
      "Kg8",
      "Rh8#"
    ]
  },
  {
    "id": "4TgF4",
    "title": "Mate in 2",
    "theme": "ArabianMate",
    "difficulty": "Easy",
    "rating": 1169,
    "popularity": 95,
    "description": "Deliver an Arabian mate with rook and knight. Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r4r1k/1pp2p2/5NpB/nq2p2Q/7P/bPP3R1/P4PP1/1K1R4 b - - 1 22",
    "fen": "r4r1k/1pp2p2/5NpB/1q2p2Q/7P/bnP3R1/P4PP1/1K1R4 w - - 0 23",
    "preMove": "Nxb3",
    "solution": [
      "Bxf8+",
      "gxh5",
      "Rg8#"
    ]
  },
  {
    "id": "6Xfbh",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1932,
    "popularity": 95,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "r5k1/pbpp1ppp/1p6/8/2BPr2q/4B3/PPP2PP1/R2QR1K1 w - - 4 15",
    "fen": "r5k1/pbpp1ppp/1p6/8/2BPr2q/4B1P1/PPP2P2/R2QR1K1 b - - 0 15",
    "preMove": "g3",
    "solution": [
      "Qh1+",
      "Kxh1",
      "Rh4+",
      "Kg1",
      "Rh1#"
    ]
  },
  {
    "id": "96J9X",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1869,
    "popularity": 95,
    "description": "Find the forced checkmate. Find the forced mate in three. Finish with the classic Morphy's mate pattern.",
    "initialFen": "r4rk1/p1p1qppp/2bp4/8/2PQ4/2P1P1B1/P3BP1P/4K1R1 b - - 3 17",
    "fen": "r4rk1/p1p2ppp/2bp4/8/2PQq3/2P1P1B1/P3BP1P/4K1R1 w - - 4 18",
    "preMove": "Qe4",
    "solution": [
      "Qxg7+",
      "Kxg7",
      "Be5+",
      "Kh6",
      "Bg7#"
    ]
  },
  {
    "id": "E8dOd",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2055,
    "popularity": 95,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "r1b3rk/5p1p/p3pPpQ/1p3q1P/1Pp5/P3B3/5PP1/3RK2R b K - 6 24",
    "fen": "r5rk/1b3p1p/p3pPpQ/1p3q1P/1Pp5/P3B3/5PP1/3RK2R w K - 7 25",
    "preMove": "Bb7",
    "solution": [
      "Qxh7+",
      "Kxh7",
      "hxg6+",
      "Kxg6",
      "Rh6#"
    ]
  },
  {
    "id": "HMUfk",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1701,
    "popularity": 95,
    "description": "Trap the king in the corner. Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "r2q1rk1/p5pB/3bpn2/1p1bN3/7P/4P3/PBQ2P2/R4KR1 b - - 0 20",
    "fen": "r2q1rk1/p5pn/3bp3/1p1bN3/7P/4P3/PBQ2P2/R4KR1 w - - 0 21",
    "preMove": "Nxh7",
    "solution": [
      "Rxg7+",
      "Kxg7",
      "Qg6+",
      "Kh8",
      "Nf7#"
    ]
  },
  {
    "id": "JEjk3",
    "title": "Mate in 5",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2134,
    "popularity": 95,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r4rk1/1pp1qppp/p2p4/8/4P1n1/1PBBR3/5P1P/2K3R1 b - - 0 18",
    "fen": "r4rk1/1pp1qppp/p2p4/8/4P3/1PBBR3/5n1P/2K3R1 w - - 0 19",
    "preMove": "Nxf2",
    "solution": [
      "Rxg7+",
      "Kh8",
      "Rg8+",
      "Kxg8",
      "Rg3+",
      "Ng4",
      "Rxg4+",
      "Qg5+",
      "Rxg5#"
    ]
  },
  {
    "id": "L3Tq0",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1994,
    "popularity": 95,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "rn2r1k1/p1q2p2/2ppb1p1/1p1n4/7Q/N2Bb3/PPP1N1PB/1K1R3R b - - 1 19",
    "fen": "rn2r1k1/p3qp2/2ppb1p1/1p1n4/7Q/N2Bb3/PPP1N1PB/1K1R3R w - - 2 20",
    "preMove": "Qe7",
    "solution": [
      "Qh8+",
      "Kxh8",
      "Be5+",
      "Kg8",
      "Rh8#"
    ]
  },
  {
    "id": "Lqbip",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1818,
    "popularity": 95,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "2k4r/1pprBp1b/p1q1p3/8/2NP4/2P3P1/1P2QP2/R4RK1 w - - 1 24",
    "fen": "2k4r/1pprBp1b/p1q1p3/4N3/3P4/2P3P1/1P2QP2/R4RK1 b - - 2 24",
    "preMove": "Ne5",
    "solution": [
      "Qh1+",
      "Kxh1",
      "Be4+",
      "Kg1",
      "Rh1#"
    ]
  },
  {
    "id": "Og0Ht",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2095,
    "popularity": 95,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "r2q1rk1/1p3p2/p3pnpQ/2bp4/3n3B/2N4R/PPP2PPP/R5K1 b - - 1 20",
    "fen": "r2q1rk1/1p3p2/p3pnpQ/2bp1n2/7B/2N4R/PPP2PPP/R5K1 w - - 2 21",
    "preMove": "Nf5",
    "solution": [
      "Qh8+",
      "Kxh8",
      "Bxf6+",
      "Kg8",
      "Rh8#"
    ]
  },
  {
    "id": "TFNfb",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1814,
    "popularity": 95,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "r6r/ppp2p2/3p1kpN/3Bp2b/4P2q/3PQ1R1/PPP2P2/R5K1 w - - 6 23",
    "fen": "r6r/ppp2N2/3p1kp1/3Bp2b/4P2q/3PQ1R1/PPP2P2/R5K1 b - - 0 23",
    "preMove": "Nxf7",
    "solution": [
      "Qh1+",
      "Kxh1",
      "Bf3+",
      "Kg1",
      "Rh1#"
    ]
  },
  {
    "id": "UFchq",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1739,
    "popularity": 95,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "r2qr1k1/p4p2/1p2bn2/2ppQ1p1/4p1P1/1BP5/PPP2P1B/2KR3R b - - 1 20",
    "fen": "r2qr1k1/p4p2/1p2b3/2ppQ1p1/4p1n1/1BP5/PPP2P1B/2KR3R w - - 0 21",
    "preMove": "Nxg4",
    "solution": [
      "Qh8+",
      "Kxh8",
      "Be5+",
      "Kg8",
      "Rh8#"
    ]
  },
  {
    "id": "WDDPQ",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1649,
    "popularity": 95,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "7r/pp1k2pb/3N1p2/3pP3/5Bp1/7q/PPPQ1P2/4RRK1 w - - 1 25",
    "fen": "7r/pp1k2pb/3N1p2/3pP3/5Bp1/4R2q/PPPQ1P2/5RK1 b - - 2 25",
    "preMove": "Re3",
    "solution": [
      "Qh1+",
      "Kxh1",
      "Be4+",
      "Kg1",
      "Rh1#"
    ]
  },
  {
    "id": "YEjdP",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2077,
    "popularity": 95,
    "description": "Deliver a hook mate with rook, knight, and pawn. Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "1r2nrk1/2pq3p/3p2pQ/3Pp1PN/p3P3/P4P2/1Pp5/2K3RR b - - 2 25",
    "fen": "1r2nrk1/2p4p/3p2pQ/1q1Pp1PN/p3P3/P4P2/1Pp5/2K3RR w - - 3 26",
    "preMove": "Qb5",
    "solution": [
      "Qxh7+",
      "Kxh7",
      "Nf6+",
      "Kg7",
      "Rh7#"
    ]
  },
  {
    "id": "YGJZX",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1627,
    "popularity": 95,
    "description": "Find the forced checkmate. Find the forced mate in three. Finish with a swallow's tail queen sacrifice mate.",
    "initialFen": "r4r2/5pk1/8/p1p1R3/2B1P1pq/3P1n1b/1PP4N/4R1QK w - - 1 28",
    "fen": "r4r2/5pk1/8/p1p1R3/2B1P1pq/3P1N1b/1PP5/4R1QK b - - 0 28",
    "preMove": "Nxf3",
    "solution": [
      "Bg2+",
      "Kxg2",
      "Qh3+",
      "Kf2",
      "Qxf3#"
    ]
  },
  {
    "id": "a0UDD",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1986,
    "popularity": 95,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r4r1k/1p3pRp/pq1bp3/3pB3/B2Q4/5P1P/PPP2P1K/R7 b - - 0 19",
    "fen": "r4r1k/1p3pRp/p2bp3/3pB3/B2q4/5P1P/PPP2P1K/R7 w - - 0 20",
    "preMove": "Qxd4",
    "solution": [
      "Rg8+",
      "Kxg8",
      "Rg1+",
      "Qg4",
      "Rxg4#"
    ]
  },
  {
    "id": "aJBU2",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1588,
    "popularity": 95,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "2r1r1k1/1bqn1p2/3bp1pQ/pp1p4/2pP1P1B/P1P1P2R/1P1N2PP/R5K1 b - - 1 21",
    "fen": "2r1rbk1/1bqn1p2/4p1pQ/pp1p4/2pP1P1B/P1P1P2R/1P1N2PP/R5K1 w - - 2 22",
    "preMove": "Bf8",
    "solution": [
      "Qh8+",
      "Kxh8",
      "Bf6+",
      "Kg8",
      "Rh8#"
    ]
  },
  {
    "id": "c7bNB",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1788,
    "popularity": 95,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "r6r/ppb2pkb/2p2N2/4P1P1/PPpP4/2P4q/3Q1P2/R1B1R1K1 w - - 1 27",
    "fen": "r6r/ppb2pkb/2p2N2/4P1P1/PPpP4/2P1R2q/3Q1P2/R1B3K1 b - - 2 27",
    "preMove": "Re3",
    "solution": [
      "Qh1+",
      "Kxh1",
      "Be4+",
      "Kg1",
      "Rh1#"
    ]
  },
  {
    "id": "crTKt",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1802,
    "popularity": 95,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "r3k2r/1pp2pp1/p1np1n2/4p1Pb/P1B1P2q/2PP1Q2/1P3P2/R1B1RNK1 w kq - 1 17",
    "fen": "r3k2r/1pp2pp1/p1np1n2/4p1Pb/P1B1P2q/2PP2Q1/1P3P2/R1B1RNK1 b kq - 2 17",
    "preMove": "Qg3",
    "solution": [
      "Qh1+",
      "Kxh1",
      "Bf3+",
      "Kg1",
      "Rh1#"
    ]
  },
  {
    "id": "dssdJ",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Easy",
    "rating": 1150,
    "popularity": 95,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "5rk1/p1p1Rbp1/1p4pp/2p2q2/8/P7/1PPQ2PP/4R1K1 w - - 2 27",
    "fen": "5rk1/p1p1Rbp1/1p4pp/2p2q2/8/P7/1PPQ2PP/5RK1 b - - 3 27",
    "preMove": "Rf1",
    "solution": [
      "Qxf1+",
      "Kxf1",
      "Bc4+",
      "Ke1",
      "Rf1#"
    ]
  },
  {
    "id": "f42wY",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1779,
    "popularity": 95,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "r1b2r2/pp3qk1/6p1/3p4/3QR1PB/b1P5/P1PK4/7R b - - 1 25",
    "fen": "r1b2rk1/pp3q2/6p1/3p4/3QR1PB/b1P5/P1PK4/7R w - - 2 26",
    "preMove": "Kg8",
    "solution": [
      "Qh8+",
      "Kxh8",
      "Bf6+",
      "Kg8",
      "Rh8#"
    ]
  },
  {
    "id": "igGnq",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1795,
    "popularity": 95,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "r2qr1k1/1p3p2/p1p2pbQ/2bpp3/4P1PB/P2P1N2/1PP2PK1/R6R b - - 1 21",
    "fen": "r2qrbk1/1p3p2/p1p2pbQ/3pp3/4P1PB/P2P1N2/1PP2PK1/R6R w - - 2 22",
    "preMove": "Bf8",
    "solution": [
      "Qh8+",
      "Kxh8",
      "Bxf6+",
      "Kg8",
      "Rh8#"
    ]
  },
  {
    "id": "licub",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2028,
    "popularity": 95,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "r4r1k/pp2Q3/3p3p/5Rp1/2P1B3/6PK/Pq5P/8 b - - 0 28",
    "fen": "r5rk/pp2Q3/3p3p/5Rp1/2P1B3/6PK/Pq5P/8 w - - 1 29",
    "preMove": "Rg8",
    "solution": [
      "Qh7+",
      "Kxh7",
      "Rf7+",
      "Kh8",
      "Rh7#"
    ]
  },
  {
    "id": "nzofr",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1688,
    "popularity": 95,
    "description": "Trap the king in the corner. Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "5r1r/1k4p1/pP4Q1/3p2Bp/3Pn1qP/2P5/1R3P2/R5K1 w - - 7 34",
    "fen": "5r1r/1k4p1/pP4Q1/3p2Bp/3Pn1qP/2P5/1R3P1K/R7 b - - 8 34",
    "preMove": "Kh2",
    "solution": [
      "Rxf2+",
      "Rxf2",
      "Qg3+",
      "Kh1",
      "Nxf2#"
    ]
  },
  {
    "id": "qkM0v",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1862,
    "popularity": 95,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "2k5/pp5r/2p2N2/4p2b/1P6/P2PQ1rq/2PB1R1P/R5K1 w - - 0 30",
    "fen": "2k5/pp5r/2p2N2/4p2b/1P6/P2PQ1Pq/2PB1R2/R5K1 b - - 0 30",
    "preMove": "hxg3",
    "solution": [
      "Qh1+",
      "Kxh1",
      "Bf3+",
      "Kg1",
      "Rh1#"
    ]
  },
  {
    "id": "rhghM",
    "title": "Mate in 3",
    "theme": "Clearance",
    "difficulty": "Hard",
    "rating": 2073,
    "popularity": 95,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "2kr3r/pp4pp/2p1Bnb1/4B3/6P1/P2p1P2/P6P/2R2RK1 b - - 2 18",
    "fen": "2kr3r/pp1n2pp/2p1B1b1/4B3/6P1/P2p1P2/P6P/2R2RK1 w - - 3 19",
    "preMove": "Nd7",
    "solution": [
      "Rxc6+",
      "bxc6",
      "Rb1",
      "d2",
      "Rb8#"
    ]
  },
  {
    "id": "xp3Rr",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2048,
    "popularity": 95,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "5rk1/ppqn1p2/2pb2bQ/3P4/1Pp1r2B/P6R/2P2PPP/3R2K1 b - - 1 24",
    "fen": "5rk1/ppqn1p2/2p3bQ/3P4/1Pp1rb1B/P6R/2P2PPP/3R2K1 w - - 2 25",
    "preMove": "Bf4",
    "solution": [
      "Qh8+",
      "Kxh8",
      "Bf6+",
      "Kg8",
      "Rh8#"
    ]
  },
  {
    "id": "ygULb",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1892,
    "popularity": 95,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "r1b2rk1/1p1pQ1pp/p1q5/8/4PB2/2P5/PPn3PP/RN3RK1 b - - 0 16",
    "fen": "r1b2rk1/1p1pQ1pp/p1q5/8/4PB2/2P5/PP4PP/nN3RK1 w - - 0 17",
    "preMove": "Nxa1",
    "solution": [
      "Qxf8+",
      "Kxf8",
      "Bd6+",
      "Ke8",
      "Rf8#"
    ]
  },
  {
    "id": "zP7qk",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1722,
    "popularity": 95,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "1r1r1b2/5p1k/4p1p1/3p4/nqPR3Q/p4P2/P1K3PP/B2R4 b - - 1 34",
    "fen": "1r1r1bk1/5p2/4p1p1/3p4/nqPR3Q/p4P2/P1K3PP/B2R4 w - - 2 35",
    "preMove": "Kg8",
    "solution": [
      "Qh8+",
      "Kxh8",
      "Rh4+",
      "Kg8",
      "Rh8#"
    ]
  },
  {
    "id": "1tOAO",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1638,
    "popularity": 94,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "NB1k1b1r/pp3ppb/2p1p3/8/6p1/3P3q/PPP1BP2/R2Q1RK1 w - - 0 16",
    "fen": "NB1k1b1r/pp3ppb/2p1p3/8/6B1/3P3q/PPP2P2/R2Q1RK1 b - - 0 16",
    "preMove": "Bxg4",
    "solution": [
      "Qh1+",
      "Kxh1",
      "Be4+",
      "Kg1",
      "Rh1#"
    ]
  },
  {
    "id": "8rwGO",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1904,
    "popularity": 94,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "1rrqn1kb/3bpp1p/2np2PB/2p5/1p2PQP1/pP1P1N1P/P1P3B1/1R1N1RK1 b - - 0 21",
    "fen": "1rrqn1kb/3bpp2/2np2pB/2p5/1p2PQP1/pP1P1N1P/P1P3B1/1R1N1RK1 w - - 0 22",
    "preMove": "hxg6",
    "solution": [
      "Qxf7+",
      "Kxf7",
      "Ng5+",
      "Kg8",
      "Rf8#"
    ]
  },
  {
    "id": "8uI46",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1962,
    "popularity": 94,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "3rr1k1/p2nqp2/4p1pQ/1pp1R2p/5P1P/PP1P4/1BP3P1/5R1K b - - 5 28",
    "fen": "3rrqk1/p2n1p2/4p1pQ/1pp1R2p/5P1P/PP1P4/1BP3P1/5R1K w - - 6 29",
    "preMove": "Qf8",
    "solution": [
      "Qh8+",
      "Kxh8",
      "Rxh5+",
      "Kg8",
      "Rh8#"
    ]
  },
  {
    "id": "E6I79",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1747,
    "popularity": 94,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "r2q1r1k/pb2np1p/4p1pQ/1p1pP1PP/2pP4/2P5/PPBN1P2/R3K2R b KQ - 0 17",
    "fen": "r2q1rnk/pb3p1p/4p1pQ/1p1pP1PP/2pP4/2P5/PPBN1P2/R3K2R w KQ - 1 18",
    "preMove": "Ng8",
    "solution": [
      "Qxh7+",
      "Kxh7",
      "hxg6+",
      "Kg7",
      "Rh7#"
    ]
  },
  {
    "id": "FohWM",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1577,
    "popularity": 94,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "k6r/pp1N4/2q5/4pQ1b/2Pp4/3P2p1/PP6/R4RK1 w - - 4 34",
    "fen": "k6r/pp1N4/2q5/4Q2b/2Pp4/3P2p1/PP6/R4RK1 b - - 0 34",
    "preMove": "Qxe5",
    "solution": [
      "Qh1+",
      "Kxh1",
      "Bf3+",
      "Kg1",
      "Rh1#"
    ]
  },
  {
    "id": "GczUJ",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2032,
    "popularity": 94,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "5rk1/p1p2ppp/b2p4/3n4/2p3RP/7R/PB1K1PP1/r2N4 b - - 5 26",
    "fen": "5rk1/p1p2ppp/b2p4/3n4/2p3RP/7R/rB1K1PP1/3N4 w - - 0 27",
    "preMove": "Rxa2",
    "solution": [
      "Rxg7+",
      "Kh8",
      "Rg8+",
      "Kxg8",
      "Rg3#"
    ]
  },
  {
    "id": "JHfJC",
    "title": "Mate in 4",
    "theme": "AdvancedPawn",
    "difficulty": "Hard",
    "rating": 2120,
    "popularity": 94,
    "description": "Find the forced checkmate.",
    "initialFen": "r4k2/1bQ2p2/p2p4/5N2/3P2qb/6np/P6B/4RRK1 w - - 0 32",
    "fen": "r4k2/1bQ2p2/p2p4/5N2/3P2qb/6Bp/P7/4RRK1 b - - 0 32",
    "preMove": "Bxg3",
    "solution": [
      "h2+",
      "Kxh2",
      "Bxg3+",
      "Nxg3",
      "Qh4+",
      "Kg1",
      "Qxg3#"
    ]
  },
  {
    "id": "JLmWD",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2125,
    "popularity": 94,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2kr2r1/ppp2p2/2n2p2/3q3p/2BP4/4Pb2/P4PPP/2RQ1RK1 w - - 0 15",
    "fen": "2kr2r1/ppp2p2/2n2p2/3B3p/3P4/4Pb2/P4PPP/2RQ1RK1 b - - 0 15",
    "preMove": "Bxd5",
    "solution": [
      "Rxg2+",
      "Kh1",
      "Rg1+",
      "Kxg1",
      "Rg8#"
    ]
  },
  {
    "id": "MRunG",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2087,
    "popularity": 94,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "3r2k1/4qp2/5npQ/p3R2p/Pp1B4/1P1R4/2r2PPP/6K1 b - - 0 29",
    "fen": "3r2k1/4qp2/6pQ/p3R2p/Pp1B2n1/1P1R4/2r2PPP/6K1 w - - 1 30",
    "preMove": "Ng4",
    "solution": [
      "Qh8+",
      "Kxh8",
      "Rxh5+",
      "Kg8",
      "Rh8#"
    ]
  },
  {
    "id": "NGTnf",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1905,
    "popularity": 94,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "r2q1r1k/2p1n2p/p3p1pQ/1p1n2PP/3PBP2/2P5/P2B4/R3K2R b KQ - 0 21",
    "fen": "r2q1rnk/2p4p/p3p1pQ/1p1n2PP/3PBP2/2P5/P2B4/R3K2R w KQ - 1 22",
    "preMove": "Ng8",
    "solution": [
      "Qxh7+",
      "Kxh7",
      "hxg6+",
      "Kg7",
      "Rh7#"
    ]
  },
  {
    "id": "ON7i8",
    "title": "Mate in 4",
    "theme": "Clearance",
    "difficulty": "Medium",
    "rating": 1732,
    "popularity": 94,
    "description": "Find the forced checkmate.",
    "initialFen": "1r3knQ/p2p4/3P1p2/2pNp3/4qn2/2P2N2/PP3PP1/2KR4 w - - 4 23",
    "fen": "1r3knQ/p2p4/3P1N2/2p1p3/4qn2/2P2N2/PP3PP1/2KR4 b - - 0 23",
    "preMove": "Nxf6",
    "solution": [
      "Ne2+",
      "Kd2",
      "Rxb2+",
      "Ke1",
      "Ng3+",
      "Nxe4",
      "Re2#"
    ]
  },
  {
    "id": "P7d2t",
    "title": "Mate in 5",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2145,
    "popularity": 94,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "rnbq1rk1/5ppp/p3pb2/1p1pB3/2pP2Q1/P1N1P2B/1PP1KP1P/R5R1 b - - 3 14",
    "fen": "r1bq1rk1/3n1ppp/p3pb2/1p1pB3/2pP2Q1/P1N1P2B/1PP1KP1P/R5R1 w - - 4 15",
    "preMove": "Nd7",
    "solution": [
      "Qxg7+",
      "Bxg7",
      "Rxg7+",
      "Kh8",
      "Rg8+",
      "Kxg8",
      "Rg1+",
      "Qg5",
      "Rxg5#"
    ]
  },
  {
    "id": "Prxvh",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Easy",
    "rating": 1389,
    "popularity": 94,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "5rk1/pp1q2pp/2p1b1p1/2Q5/4PB2/1P1P4/1PP3P1/5RK1 b - - 0 25",
    "fen": "5rk1/p2q2pp/1pp1b1p1/2Q5/4PB2/1P1P4/1PP3P1/5RK1 w - - 0 26",
    "preMove": "b6",
    "solution": [
      "Qxf8+",
      "Kxf8",
      "Bd6+",
      "Kg8",
      "Rf8#"
    ]
  },
  {
    "id": "R9ZMt",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2056,
    "popularity": 94,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "r2q1r1k/pb1nn2p/1pp2ppQ/3p3P/3P4/P1NB1N2/1PP2PP1/R3K2R b KQ - 0 15",
    "fen": "r2q1rnk/pb1n3p/1pp2ppQ/3p3P/3P4/P1NB1N2/1PP2PP1/R3K2R w KQ - 1 16",
    "preMove": "Ng8",
    "solution": [
      "Qxh7+",
      "Kxh7",
      "hxg6+",
      "Kg7",
      "Rh7#"
    ]
  },
  {
    "id": "RE1Zp",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1619,
    "popularity": 94,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "r3r1k1/pp3p2/5q2/6p1/2pQp1P1/2Pn4/PP3P1B/3R1K1R b - - 5 26",
    "fen": "r3r1k1/pp3p2/8/6p1/2pQp1P1/2Pn1q2/PP3P1B/3R1K1R w - - 6 27",
    "preMove": "Qf3",
    "solution": [
      "Qh8+",
      "Kxh8",
      "Be5+",
      "Kg8",
      "Rh8#"
    ]
  },
  {
    "id": "TCJyL",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2079,
    "popularity": 94,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "6k1/p1b2Rp1/1p4r1/2p1r3/2PN3p/B2P3q/P3Q2P/5R1K w - - 1 27",
    "fen": "6k1/p1b2Rp1/1p4r1/2p1r3/2PN3p/B2P1Q1q/P6P/5R1K b - - 2 27",
    "preMove": "Qf3",
    "solution": [
      "Qxh2+",
      "Kxh2",
      "Re2+",
      "Kh3",
      "Rh2#"
    ]
  },
  {
    "id": "TqEHY",
    "title": "Mate in 3",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 1363,
    "popularity": 69,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver a smothered mate with the knight.",
    "initialFen": "r2q1r1k/pppbbNpp/4Q3/3P4/4p3/1P6/PB3PPP/R5K1 b - - 2 20",
    "fen": "r2q1rk1/pppbbNpp/4Q3/3P4/4p3/1P6/PB3PPP/R5K1 w - - 3 21",
    "preMove": "Kg8",
    "solution": [
      "Nh6+",
      "Kh8",
      "Qg8+",
      "Rxg8",
      "Nf7#"
    ]
  },
  {
    "id": "VVzti",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1705,
    "popularity": 94,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "r3k2r/pp3ppb/1np1pn2/8/1P1N4/PB1P2Bq/2P1NP2/R2Q1RK1 w kq - 0 19",
    "fen": "r3k2r/pp3ppb/1np1pn2/8/1P1N1N2/PB1P2Bq/2P2P2/R2Q1RK1 b kq - 1 19",
    "preMove": "Nf4",
    "solution": [
      "Qh1+",
      "Kxh1",
      "Be4+",
      "Kg1",
      "Rh1#"
    ]
  },
  {
    "id": "X9ubi",
    "title": "Mate in 5",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2015,
    "popularity": 94,
    "description": "Find the forced checkmate. Deliver the famous opera-style mate.",
    "initialFen": "5r1k/1Qp3pp/p2b2r1/4n3/1P6/2P4q/PB1N1PBP/R4RK1 w - - 0 22",
    "fen": "5r1k/1Qp3pp/p2b2r1/4n3/1P6/2P4q/PB1N1PBP/R4R1K b - - 1 22",
    "preMove": "Kh1",
    "solution": [
      "Qxh2+",
      "Kxh2",
      "Nf3+",
      "Kh1",
      "Rh6+",
      "Bh3",
      "Rxh3+",
      "Kg2",
      "Rh2#"
    ]
  },
  {
    "id": "bmelN",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1886,
    "popularity": 94,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "6r1/5p1k/1pRBn3/pP2p2p/P2P3P/3P2P1/3Q3K/5q2 b - - 0 34",
    "fen": "6r1/5p1k/1pRB4/pP2p2p/P2n3P/3P2P1/3Q3K/5q2 w - - 0 35",
    "preMove": "Nxd4",
    "solution": [
      "Qh6+",
      "Kxh6",
      "Bf8+",
      "Kh7",
      "Rh6#"
    ]
  },
  {
    "id": "f6RZp",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2077,
    "popularity": 94,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "r2qnrk1/pp1b3p/4pbpQ/3pB2P/8/2PB4/PP1N1PP1/R3K2R b KQ - 0 16",
    "fen": "r2qnrk1/pp1b3p/4p1pQ/3pB1bP/8/2PB4/PP1N1PP1/R3K2R w KQ - 1 17",
    "preMove": "Bg5",
    "solution": [
      "Qxh7+",
      "Kxh7",
      "hxg6+",
      "Kg8",
      "Rh8#"
    ]
  },
  {
    "id": "fVBEw",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2027,
    "popularity": 94,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "5r1k/pp3pp1/2p4r/4P2b/3PB3/4RN1q/P4P2/2RQ2K1 w - - 3 23",
    "fen": "5r1k/pp3pp1/2p4r/4P2b/3PB3/4RN1q/P4P2/2R2QK1 b - - 4 23",
    "preMove": "Qf1",
    "solution": [
      "Qh1+",
      "Kxh1",
      "Bxf3+",
      "Kg1",
      "Rh1#"
    ]
  },
  {
    "id": "lAjS5",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2116,
    "popularity": 94,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "r5rk/3nbbpp/p1p2qR1/3p1B1Q/1p3N2/8/PPP2P1P/1K4R1 b - - 0 28",
    "fen": "r5rk/4bbpp/p1p2qR1/3pnB1Q/1p3N2/8/PPP2P1P/1K4R1 w - - 1 29",
    "preMove": "Ne5",
    "solution": [
      "Qxh7+",
      "Kxh7",
      "Rxg7+",
      "Kh8",
      "Rh7#"
    ]
  },
  {
    "id": "nIc8J",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2031,
    "popularity": 94,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r4rk1/4bppp/1q2pB2/3p4/2pP4/1NPQ1P1P/PP3P2/1K1R2R1 b - - 0 19",
    "fen": "r4rk1/4bppp/1q2pB2/3p4/3P4/1NPp1P1P/PP3P2/1K1R2R1 w - - 0 20",
    "preMove": "cxd3",
    "solution": [
      "Rxg7+",
      "Kh8",
      "Rg8+",
      "Kxg8",
      "Rg1#"
    ]
  },
  {
    "id": "v8774",
    "title": "Mate in 4",
    "theme": "Deflection",
    "difficulty": "Hard",
    "rating": 2070,
    "popularity": 94,
    "description": "Trap the king between its own rooks. Deliver a hook mate with rook, knight, and pawn. Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "6r1/pb1p2qk/1p2p1np/n3P2N/2pP1rR1/B1P1K2Q/P1P3P1/7R b - - 1 27",
    "fen": "6r1/pb1p2qk/1p2p1np/n3P2N/2pP2r1/B1P1K2Q/P1P3P1/7R w - - 0 28",
    "preMove": "Rxg4",
    "solution": [
      "Nf6+",
      "Kh8",
      "Qxh6+",
      "Qxh6+",
      "Rxh6+",
      "Kg7",
      "Rh7#"
    ]
  },
  {
    "id": "zizmq",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1687,
    "popularity": 94,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "r4r1k/pp1bnp1p/1q2p1pQ/3pP1PP/3P4/2PB4/PP1N4/1R2K2R b K - 0 20",
    "fen": "r4rnk/pp1b1p1p/1q2p1pQ/3pP1PP/3P4/2PB4/PP1N4/1R2K2R w K - 1 21",
    "preMove": "Ng8",
    "solution": [
      "Qxh7+",
      "Kxh7",
      "hxg6+",
      "Kg7",
      "Rh7#"
    ]
  },
  {
    "id": "0voIL",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1631,
    "popularity": 93,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "4rr1k/3q2pp/2nn4/p4pBQ/Pp1p1R2/1B1K3P/1PP5/6R1 b - - 2 37",
    "fen": "4rr1k/q5pp/2nn4/p4pBQ/Pp1p1R2/1B1K3P/1PP5/6R1 w - - 3 38",
    "preMove": "Qa7",
    "solution": [
      "Qxh7+",
      "Kxh7",
      "Rh4+",
      "Kg6",
      "Be7#"
    ]
  },
  {
    "id": "1lyqG",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2191,
    "popularity": 93,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2rq1rk1/pb1nbppp/1p2pB2/3P4/2p5/2NQP3/PPB1NP1P/2KR2R1 b - - 0 15",
    "fen": "2rq1rk1/pb1nbppp/1p2pB2/3P4/8/2NpP3/PPB1NP1P/2KR2R1 w - - 0 16",
    "preMove": "cxd3",
    "solution": [
      "Rxg7+",
      "Kh8",
      "Rg8+",
      "Kxg8",
      "Rg1#"
    ]
  },
  {
    "id": "3SMQi",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1799,
    "popularity": 93,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "r1b1qr1k/4np1p/p3p1pQ/1p1pP1PP/2pP2P1/1PP1B3/P1B5/R3K2R b KQ - 0 22",
    "fen": "r1b1qrnk/5p1p/p3p1pQ/1p1pP1PP/2pP2P1/1PP1B3/P1B5/R3K2R w KQ - 1 23",
    "preMove": "Ng8",
    "solution": [
      "Qxh7+",
      "Kxh7",
      "hxg6+",
      "Kg7",
      "Rh7#"
    ]
  },
  {
    "id": "4F2WS",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2079,
    "popularity": 93,
    "description": "Find the forced checkmate. Find the forced mate in three. Finish with the classic Morphy's mate pattern.",
    "initialFen": "r4rk1/ppp2ppp/2pb4/1q5B/8/1PR5/PB1P1PQP/R5K1 b - - 0 18",
    "fen": "r4rk1/ppp2ppp/2pb4/7q/8/1PR5/PB1P1PQP/R5K1 w - - 0 19",
    "preMove": "Qxh5",
    "solution": [
      "Qxg7+",
      "Kxg7",
      "Rg3+",
      "Kh6",
      "Bg7#"
    ]
  },
  {
    "id": "4KLw3",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2165,
    "popularity": 93,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r4rk1/ppp2ppp/2np4/3B4/1bQ1P1R1/7P/PB2qP2/1K5R b - - 0 16",
    "fen": "r4rk1/ppp2ppp/2np4/3B4/1bq1P1R1/7P/PB3P2/1K5R w - - 0 17",
    "preMove": "Qxc4",
    "solution": [
      "Rxg7+",
      "Kh8",
      "Rg8+",
      "Kxg8",
      "Rg1#"
    ]
  },
  {
    "id": "4MaFa",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1746,
    "popularity": 93,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "r1bq2rk/ppn1bp1p/2p1p1pQ/3pP1PP/5P2/2NBP3/PPP1K3/R6R b - - 0 19",
    "fen": "r1bq1brk/ppn2p1p/2p1p1pQ/3pP1PP/5P2/2NBP3/PPP1K3/R6R w - - 1 20",
    "preMove": "Bf8",
    "solution": [
      "Qxh7+",
      "Kxh7",
      "hxg6+",
      "Kg7",
      "Rh7#"
    ]
  },
  {
    "id": "5mxCF",
    "title": "Mate in 5",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2108,
    "popularity": 93,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "1k2r1r1/ppp4p/2n2p2/3b4/2p4N/2P5/P4PqP/R1BQ1RK1 w - - 0 21",
    "fen": "1k2r1r1/ppp4p/2n2p2/3b4/2p5/2P5/P4PNP/R1BQ1RK1 b - - 0 21",
    "preMove": "Nxg2",
    "solution": [
      "Rxg2+",
      "Kh1",
      "Rg1+",
      "Kxg1",
      "Rg8+",
      "Bg5",
      "Rxg5+",
      "Qg4",
      "Rxg4#"
    ]
  },
  {
    "id": "Tbc38",
    "title": "Mate in 5",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2080,
    "popularity": 93,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2r2rk1/p3qppp/4n3/1p6/3B2Q1/5P2/PP3P1P/1K1R2R1 b - - 1 20",
    "fen": "5rk1/p3qppp/4n3/1p6/2rB2Q1/5P2/PP3P1P/1K1R2R1 w - - 2 21",
    "preMove": "Rc4",
    "solution": [
      "Qxg7+",
      "Nxg7",
      "Rxg7+",
      "Kh8",
      "Rg8+",
      "Kxg8",
      "Rg1+",
      "Qg5",
      "Rxg5#"
    ]
  },
  {
    "id": "ULs8k",
    "title": "Mate in 4",
    "theme": "DiscoveredAttack",
    "difficulty": "Hard",
    "rating": 2184,
    "popularity": 93,
    "description": "Find the forced checkmate. Deliver the famous opera-style mate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "1r2r2k/2Q4p/3p1q1B/1p1B1pp1/1b4b1/3PP1P1/5PK1/7R b - - 1 28",
    "fen": "2r1r2k/2Q4p/3p1q1B/1p1B1pp1/1b4b1/3PP1P1/5PK1/7R w - - 2 29",
    "preMove": "Rbc8",
    "solution": [
      "Qxh7+",
      "Kxh7",
      "Bf8+",
      "Bh5",
      "Rxh5+",
      "Kg6",
      "Rh6#"
    ]
  },
  {
    "id": "ZXRcT",
    "title": "Mate in 5",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2179,
    "popularity": 93,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r2q1rk1/2p2ppp/1p2b3/p7/3B4/1PPn3P/P1KN1P2/3R2R1 b - - 1 18",
    "fen": "r2q1rk1/2p2ppp/1p2b3/p1n5/3B4/1PP4P/P1KN1P2/3R2R1 w - - 2 19",
    "preMove": "Nc5",
    "solution": [
      "Rxg7+",
      "Kh8",
      "Rg8+",
      "Kxg8",
      "Rg1+",
      "Bg4",
      "Rxg4+",
      "Qg5",
      "Rxg5#"
    ]
  },
  {
    "id": "1trJj",
    "title": "Mate in 5",
    "theme": "AdvancedPawn",
    "difficulty": "Medium",
    "rating": 1780,
    "popularity": 92,
    "description": "Find the forced checkmate. Finish with a swallow's tail queen sacrifice mate.",
    "initialFen": "2k5/R1b2p2/2Q5/3p3p/7q/2P1Pp2/5K2/2BB4 w - - 0 35",
    "fen": "2k5/R1b2p2/2Q5/3p3p/7q/2P1Pp2/8/2BB1K2 b - - 1 35",
    "preMove": "Kf1",
    "solution": [
      "Qh1+",
      "Kf2",
      "Qg2+",
      "Ke1",
      "f2+",
      "Kd2",
      "f1=Q+",
      "Be2",
      "Qfxe2#"
    ]
  },
  {
    "id": "KWoFI",
    "title": "Mate in 5",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2005,
    "popularity": 92,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "1k4rr/ppp1np2/2b1p3/2p4p/3PN3/3B4/PP2QPPP/R4RK1 w - - 0 20",
    "fen": "1k4rr/ppp1np2/2b1p3/2N4p/3P4/3B4/PP2QPPP/R4RK1 b - - 0 20",
    "preMove": "Nxc5",
    "solution": [
      "Rxg2+",
      "Kh1",
      "Rg1+",
      "Kxg1",
      "Rg8+",
      "Bg6",
      "Rxg6+",
      "Qg4",
      "Rxg4#"
    ]
  },
  {
    "id": "PRUJj",
    "title": "Mate in 5",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2107,
    "popularity": 92,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r4rk1/ppp2ppp/2nb4/8/2P1b3/1P3N2/PB1PBK1P/R5R1 b - - 3 17",
    "fen": "r4rk1/ppp2ppp/2nb4/8/2P5/1P3b2/PB1PBK1P/R5R1 w - - 0 18",
    "preMove": "Bxf3",
    "solution": [
      "Rxg7+",
      "Kh8",
      "Rg8+",
      "Kxg8",
      "Rg1+",
      "Bg2",
      "Rxg2+",
      "Bg3+",
      "Rxg3#"
    ]
  },
  {
    "id": "U67bD",
    "title": "Mate in 5",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2144,
    "popularity": 92,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r4rk1/pQp2ppp/3bb3/4B3/5P2/2P5/PP4qP/2KR2R1 b - - 1 19",
    "fen": "r4rk1/pqp2ppp/3bb3/4B3/5P2/2P5/PP5P/2KR2R1 w - - 0 20",
    "preMove": "Qxb7",
    "solution": [
      "Rxg7+",
      "Kh8",
      "Rg8+",
      "Kxg8",
      "Rg1+",
      "Qg2",
      "Rxg2+",
      "Bg4",
      "Rxg4#"
    ]
  },
  {
    "id": "tDG2L",
    "title": "Mate in 5",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1988,
    "popularity": 92,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r6k/bb2qprp/p3pQ2/4Np2/PP6/8/B4PPP/2R2RK1 w - - 10 24",
    "fen": "r6k/bb2Qprp/p3p3/4Np2/PP6/8/B4PPP/2R2RK1 b - - 0 24",
    "preMove": "Qxe7",
    "solution": [
      "Rxg2+",
      "Kh1",
      "Rg1+",
      "Kxg1",
      "Rg8+",
      "Qg5",
      "Rxg5+",
      "Ng4",
      "Rxg4#"
    ]
  },
  {
    "id": "5pwpx",
    "title": "Mate in 5",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2158,
    "popularity": 91,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r1b2rk1/pp2bppp/2n1p3/4B3/2B5/1Q5q/P2N1P1P/2KR2R1 b - - 7 17",
    "fen": "r1b2rk1/pp2bppp/2n1p3/4B3/2B5/1q6/P2N1P1P/2KR2R1 w - - 0 18",
    "preMove": "Qxb3",
    "solution": [
      "Rxg7+",
      "Kh8",
      "Rg8+",
      "Kxg8",
      "Rg1+",
      "Qg3",
      "Rxg3+",
      "Bg5",
      "Rxg5#"
    ]
  },
  {
    "id": "7n1Bx",
    "title": "Mate in 5",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2093,
    "popularity": 91,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r5r1/2pkb2p/p1bpNn2/1p6/8/2N5/PPP2PPP/R1BQ1RK1 w - - 2 18",
    "fen": "r5r1/2pkb2p/p1bp1n2/1p6/3N4/2N5/PPP2PPP/R1BQ1RK1 b - - 3 18",
    "preMove": "Nd4",
    "solution": [
      "Rxg2+",
      "Kh1",
      "Rg1+",
      "Kxg1",
      "Rg8+",
      "Bg5",
      "Rxg5+",
      "Qg4+",
      "Rxg4#"
    ]
  },
  {
    "id": "Ud12h",
    "title": "Mate in 5",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2033,
    "popularity": 91,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r2q1rk1/ppp1nppp/2N1p3/3b4/7P/1BBP4/PPP2P2/2KR2R1 b - - 3 17",
    "fen": "r2q1rk1/ppp2ppp/2n1p3/3b4/7P/1BBP4/PPP2P2/2KR2R1 w - - 0 18",
    "preMove": "Nxc6",
    "solution": [
      "Rxg7+",
      "Kh8",
      "Rg8+",
      "Kxg8",
      "Rg1+",
      "Bg2",
      "Rxg2+",
      "Qg5+",
      "Rxg5#"
    ]
  },
  {
    "id": "yLDJO",
    "title": "Mate in 5",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2144,
    "popularity": 91,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "k6r/pbp2p1N/1b4rp/8/3P2Q1/2P5/PP3PPP/RN3RK1 w - - 1 17",
    "fen": "k6r/pbpQ1p1N/1b4rp/8/3P4/2P5/PP3PPP/RN3RK1 b - - 2 17",
    "preMove": "Qd7",
    "solution": [
      "Rxg2+",
      "Kh1",
      "Rg1+",
      "Kxg1",
      "Rg8+",
      "Ng5",
      "Rxg5+",
      "Qg4",
      "Rxg4#"
    ]
  },
  {
    "id": "AltTA",
    "title": "Mate in 5",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2083,
    "popularity": 90,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "5rk1/2q2ppp/b1p2b2/p4P2/P6P/1rN1P3/1B1R2Q1/1K4R1 b - - 1 24",
    "fen": "5rk1/2q2ppp/b1p5/p4P2/P6P/1rb1P3/1B1R2Q1/1K4R1 w - - 0 25",
    "preMove": "Bxc3",
    "solution": [
      "Qxg7+",
      "Bxg7",
      "Rxg7+",
      "Kh8",
      "Rg8+",
      "Kxg8",
      "Rg2+",
      "Qg3",
      "Rxg3#"
    ]
  },
  {
    "id": "Dc7Ir",
    "title": "Mate in 2",
    "theme": "AdvancedPawn",
    "difficulty": "Easy",
    "rating": 1068,
    "popularity": 90,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "1n3rk1/r1p1q1pp/1p1pP3/p2BppQ1/2P5/6P1/PP2PP1P/R4RK1 b - - 4 19",
    "fen": "1n3rk1/r1p3pp/1p1pP3/p2Bppq1/2P5/6P1/PP2PP1P/R4RK1 w - - 0 20",
    "preMove": "Qxg5",
    "solution": [
      "e7+",
      "Rf7",
      "e8=Q#"
    ]
  },
  {
    "id": "MOiAi",
    "title": "Mate in 5",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2091,
    "popularity": 89,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r5rk/2R2n1p/p3pb2/2N2p2/3Pb3/4P3/PP2BPPP/5RK1 w - - 0 22",
    "fen": "r5rk/5R1p/p3pb2/2N2p2/3Pb3/4P3/PP2BPPP/5RK1 b - - 0 22",
    "preMove": "Rxf7",
    "solution": [
      "Rxg2+",
      "Kh1",
      "Rg1+",
      "Kxg1",
      "Rg8+",
      "Rg7",
      "Rxg7+",
      "Bg4",
      "Rxg4#"
    ]
  },
  {
    "id": "S49vF",
    "title": "Mate in 5",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1924,
    "popularity": 89,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2kr2r1/ppp1np2/3p4/3b4/4Q3/3BP3/P1PN1PPP/5RK1 w - - 6 20",
    "fen": "2kr2r1/ppp1Qp2/3p4/3b4/8/3BP3/P1PN1PPP/5RK1 b - - 0 20",
    "preMove": "Qxe7",
    "solution": [
      "Rxg2+",
      "Kh1",
      "Rg1+",
      "Kxg1",
      "Rg8+",
      "Bg6",
      "Rxg6+",
      "Qg5",
      "Rxg5#"
    ]
  },
  {
    "id": "4JoLM",
    "title": "Mate in 5",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1959,
    "popularity": 88,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2r4k/pb2qprp/1p2pQ2/8/3P4/2P5/P3BPPP/R4RK1 w - - 3 20",
    "fen": "2r4k/pb2Qprp/1p2p3/8/3P4/2P5/P3BPPP/R4RK1 b - - 0 20",
    "preMove": "Qxe7",
    "solution": [
      "Rxg2+",
      "Kh1",
      "Rg1+",
      "Kxg1",
      "Rg8+",
      "Qg5",
      "Rxg5+",
      "Bg4",
      "Rxg4#"
    ]
  },
  {
    "id": "HGWzQ",
    "title": "Mate in 5",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2000,
    "popularity": 88,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "3r1rk1/pp2bppp/8/8/1P3n2/P2Q1P1q/1BB2P1P/R5RK b - - 6 23",
    "fen": "3r1rk1/pp2bppp/8/8/1P6/P2n1P1q/1BB2P1P/R5RK w - - 0 24",
    "preMove": "Nxd3",
    "solution": [
      "Rxg7+",
      "Kh8",
      "Rg8+",
      "Kxg8",
      "Rg1+",
      "Qg2+",
      "Rxg2+",
      "Bg5",
      "Rxg5#"
    ]
  },
  {
    "id": "WhWcF",
    "title": "Mate in 2",
    "theme": "AdvancedPawn",
    "difficulty": "Easy",
    "rating": 1028,
    "popularity": 88,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "5rk1/6pp/p2pP3/1p1B2b1/2pP4/P1P3P1/1P1n1P1P/5R1K b - - 2 31",
    "fen": "5rk1/6pp/p2pP3/1p1B2b1/2pP4/P1P3P1/1P3P1P/5n1K w - - 0 32",
    "preMove": "Nxf1",
    "solution": [
      "e7+",
      "Rf7",
      "e8=Q#"
    ]
  },
  {
    "id": "vDgRo",
    "title": "Mate in 5",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2014,
    "popularity": 87,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r2q1rk1/2pn1ppp/1p2p3/p7/P3pP1b/1P2PN2/1BPPK1QP/R5R1 b - - 1 16",
    "fen": "r2q1rk1/2pn1ppp/1p2pb2/p7/P3pP2/1P2PN2/1BPPK1QP/R5R1 w - - 2 17",
    "preMove": "Bf6",
    "solution": [
      "Qxg7+",
      "Bxg7",
      "Rxg7+",
      "Kh8",
      "Rg8+",
      "Kxg8",
      "Rg1+",
      "Qg5",
      "Rxg5#"
    ]
  },
  {
    "id": "E4T3G",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2186,
    "popularity": 86,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "4r1k1/pp1b2pp/1q6/3pN3/1P4n1/P2B2N1/3Q1rPP/R3R1K1 w - - 0 20",
    "fen": "4r1k1/pp1N2pp/1q6/3p4/1P4n1/P2B2N1/3Q1rPP/R3R1K1 b - - 0 20",
    "preMove": "Nxd7",
    "solution": [
      "Rf1+",
      "Kxf1",
      "Nxh2#"
    ]
  },
  {
    "id": "IhNHF",
    "title": "Mate in 5",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1925,
    "popularity": 86,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "3q1rk1/5ppp/p2bpB2/1p1pQ3/2r5/2N2P2/PPP2P1P/R5RK b - - 0 18",
    "fen": "3q1rk1/5ppp/p3pB2/1p1pb3/2r5/2N2P2/PPP2P1P/R5RK w - - 0 19",
    "preMove": "Bxe5",
    "solution": [
      "Rxg7+",
      "Kh8",
      "Rg8+",
      "Kxg8",
      "Rg1+",
      "Bg3",
      "Rxg3+",
      "Rg4",
      "Rxg4#"
    ]
  },
  {
    "id": "fm7w5",
    "title": "Mate in 5",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2087,
    "popularity": 86,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r5r1/1b1nkpBp/pp2p3/2p5/2P5/P1N1P3/1P2BPPP/2R2RK1 w - - 1 19",
    "fen": "r5r1/1b1nkp1p/pp2p2B/2p5/2P5/P1N1P3/1P2BPPP/2R2RK1 b - - 2 19",
    "preMove": "Bh6",
    "solution": [
      "Rxg2+",
      "Kh1",
      "Rg1+",
      "Kxg1",
      "Rg8+",
      "Bg5+",
      "Rxg5+",
      "Bg4",
      "Rxg4#"
    ]
  },
  {
    "id": "xyxdP",
    "title": "Mate in 5",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1941,
    "popularity": 86,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2rq1rk1/5ppp/p1n1pb2/1p6/4pPQ1/P1B1P2P/NP3P2/1K4RR b - - 3 21",
    "fen": "2rq1rk1/5ppp/2n1pb2/pp6/4pPQ1/P1B1P2P/NP3P2/1K4RR w - - 0 22",
    "preMove": "a5",
    "solution": [
      "Qxg7+",
      "Bxg7",
      "Rxg7+",
      "Kh8",
      "Rg8+",
      "Kxg8",
      "Rg1+",
      "Qg5",
      "Rxg5#"
    ]
  },
  {
    "id": "Q3PP7",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Easy",
    "rating": 1419,
    "popularity": 98,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "3q2rk/1r3n1p/1p1p1P2/p1pP1R1Q/P1P5/3B3P/1P4P1/6K1 b - - 6 32",
    "fen": "4q1rk/1r3n1p/1p1p1P2/p1pP1R1Q/P1P5/3B3P/1P4P1/6K1 w - - 7 33",
    "preMove": "Qe8",
    "solution": [
      "Qxh7+",
      "Kxh7",
      "Rh5#"
    ]
  },
  {
    "id": "D2VWF",
    "title": "Mate in 5",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1926,
    "popularity": 85,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "k1r3r1/pb2b1Qp/1p2pn2/1N6/8/4B3/PPP2PPP/3R1RK1 w - - 1 21",
    "fen": "k1r3r1/pb2Q2p/1p2pn2/1N6/8/4B3/PPP2PPP/3R1RK1 b - - 0 21",
    "preMove": "Qxe7",
    "solution": [
      "Rxg2+",
      "Kh1",
      "Rg1+",
      "Kxg1",
      "Rg8+",
      "Qg7",
      "Rxg7+",
      "Bg5",
      "Rxg5#"
    ]
  },
  {
    "id": "XHvrs",
    "title": "Mate in 5",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2178,
    "popularity": 85,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r4rk1/4bppp/5n2/1pp5/4P2P/qpBP4/2PQ1P2/3K2RR b - - 0 22",
    "fen": "r4rk1/4bppp/8/1pp5/4n2P/qpBP4/2PQ1P2/3K2RR w - - 0 23",
    "preMove": "Nxe4",
    "solution": [
      "Rxg7+",
      "Kh8",
      "Rg8+",
      "Kxg8",
      "Rg1+",
      "Ng3",
      "Rxg3+",
      "Bg5",
      "Rxg5#"
    ]
  },
  {
    "id": "ukoUY",
    "title": "Mate in 5",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2187,
    "popularity": 85,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r4rk1/1p2qppp/5n2/p2Q1P2/3B4/P1P4b/2P1BP1P/2KR2R1 b - - 0 24",
    "fen": "r4rk1/1p2qppp/8/p2n1P2/3B4/P1P4b/2P1BP1P/2KR2R1 w - - 0 25",
    "preMove": "Nxd5",
    "solution": [
      "Rxg7+",
      "Kh8",
      "Rg8+",
      "Kxg8",
      "Rg1+",
      "Bg2",
      "Rxg2+",
      "Qg5+",
      "Rxg5#"
    ]
  },
  {
    "id": "0XdNO",
    "title": "Mate in 2",
    "theme": "Clearance",
    "difficulty": "Medium",
    "rating": 1691,
    "popularity": 97,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2kr2nr/Bpp2ppp/3p4/3Np3/2B1P3/3P1P1P/PPn2P2/2R3K1 b - - 2 14",
    "fen": "2kr2nr/Bpp2ppp/3p4/3Np3/2BnP3/3P1P1P/PP3P2/2R3K1 w - - 3 15",
    "preMove": "Nd4",
    "solution": [
      "Nb6+",
      "cxb6",
      "Be6#"
    ]
  },
  {
    "id": "3bXuo",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2104,
    "popularity": 97,
    "description": "Find the forced checkmate. Deliver the famous opera-style mate.",
    "initialFen": "r2q2k1/2p3pp/2bNp3/4p3/p6P/2PQBrK1/PPBN1P2/R6R w - - 1 23",
    "fen": "r2q2k1/2p3pp/2bNp3/4p3/p6P/2PQBr2/PPBN1P1K/R6R b - - 2 23",
    "preMove": "Kh2",
    "solution": [
      "Qxh4+",
      "Kg1",
      "Qxh1+",
      "Kxh1",
      "Rh3+",
      "Kg1",
      "Rh1#"
    ]
  },
  {
    "id": "XBCgI",
    "title": "Mate in 5",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2189,
    "popularity": 84,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2kr2r1/pb1p1p1p/1p3n2/2p3B1/2P5/2N5/PP2BPPP/R4RK1 w - - 6 15",
    "fen": "2kr2r1/pb1p1p1p/1p3B2/2p5/2P5/2N5/PP2BPPP/R4RK1 b - - 0 15",
    "preMove": "Bxf6",
    "solution": [
      "Rxg2+",
      "Kh1",
      "Rg1+",
      "Kxg1",
      "Rg8+",
      "Bg5",
      "Rxg5+",
      "Bg4",
      "Rxg4#"
    ]
  },
  {
    "id": "f5edm",
    "title": "Mate in 5",
    "theme": "DiscoveredAttack",
    "difficulty": "Hard",
    "rating": 2182,
    "popularity": 84,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2kr3r/ppp2pp1/5n2/4B3/2NP2q1/1P2PbP1/P6P/2R2RK1 b - - 2 19",
    "fen": "2kr3r/ppp2pp1/5n2/4B3/2NP4/1P2PbPq/P6P/2R2RK1 w - - 3 20",
    "preMove": "Qh3",
    "solution": [
      "Nb6+",
      "axb6",
      "Rxc7+",
      "Kb8",
      "Rc4+",
      "Rd6",
      "Bxd6+",
      "Ka7",
      "Ra4#"
    ]
  },
  {
    "id": "1Igt6",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2184,
    "popularity": 96,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "3r1rk1/pp2qppp/2n5/2p5/8/2BB1P2/PPP2P1P/3R2RK b - - 5 19",
    "fen": "5rk1/pp2qppp/2n5/2p5/8/2Br1P2/PPP2P1P/3R2RK w - - 0 20",
    "preMove": "Rxd3",
    "solution": [
      "Rxg7+",
      "Kh8",
      "Rg8+",
      "Kxg8",
      "Rg1+",
      "Qg5",
      "Rxg5#"
    ]
  },
  {
    "id": "kHmUu",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Easy",
    "rating": 1490,
    "popularity": 96,
    "description": "Find the forced checkmate. Deliver the famous opera-style mate.",
    "initialFen": "r1b2rk1/p1pp2pp/1p3P2/7Q/2q1PB2/8/P1P3PP/2R2R1K b - - 0 20",
    "fen": "r1b3k1/p1pp2pp/1p3r2/7Q/2q1PB2/8/P1P3PP/2R2R1K w - - 0 21",
    "preMove": "Rxf6",
    "solution": [
      "Qe8+",
      "Rf8",
      "Qxf8+",
      "Kxf8",
      "Bd6+",
      "Kg8",
      "Rf8#"
    ]
  },
  {
    "id": "koptz",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2071,
    "popularity": 96,
    "description": "Find the forced checkmate. Deliver the famous opera-style mate.",
    "initialFen": "r1b3k1/pp1p1rpp/2n2n2/3N3q/5B2/8/PP4PP/R3QR1K b - - 5 16",
    "fen": "r1b3k1/pp1p1rpp/2n5/3n3q/5B2/8/PP4PP/R3QR1K w - - 0 17",
    "preMove": "Nxd5",
    "solution": [
      "Qe8+",
      "Rf8",
      "Qxf8+",
      "Kxf8",
      "Bd6+",
      "Kg8",
      "Rf8#"
    ]
  },
  {
    "id": "ml157",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2136,
    "popularity": 96,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "6rr/3k1p2/pq3Q1p/2pb4/8/2NP4/PPP2PPP/R4RK1 w - - 0 19",
    "fen": "6rr/3k1p2/pQ5p/2pb4/8/2NP4/PPP2PPP/R4RK1 b - - 0 19",
    "preMove": "Qxb6",
    "solution": [
      "Rxg2+",
      "Kh1",
      "Rg1+",
      "Kxg1",
      "Rg8+",
      "Qg6",
      "Rxg6#"
    ]
  },
  {
    "id": "7p0AT",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1831,
    "popularity": 95,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2kr4/ppp2ppp/2p2q2/2b5/3r4/6Pb/PPPBBP1P/RNQ1R1K1 w - - 5 14",
    "fen": "2kr4/ppp2ppp/2p2q2/2b5/3r4/2B3Pb/PPP1BP1P/RNQ1R1K1 b - - 6 14",
    "preMove": "Bc3",
    "solution": [
      "Qxf2+",
      "Kxf2",
      "Rf4#"
    ]
  },
  {
    "id": "DI08p",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2063,
    "popularity": 95,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2r2rk1/pp2bpQp/3pp3/7n/2qBPP2/2N4P/PP3P2/1K1R2R1 b - - 0 18",
    "fen": "2r2rk1/pp2bpnp/3pp3/8/2qBPP2/2N4P/PP3P2/1K1R2R1 w - - 0 19",
    "preMove": "Nxg7",
    "solution": [
      "Rxg7+",
      "Kh8",
      "Rg8+",
      "Kxg8",
      "Rg1+",
      "Bg5",
      "Rxg5#"
    ]
  },
  {
    "id": "F8UJa",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2149,
    "popularity": 95,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "1k1r2r1/1b1q4/pp1PQ3/2p1pp2/2P5/2PBP3/P4PPP/R4RK1 w - - 1 22",
    "fen": "1k1r2r1/1b1Q4/pp1P4/2p1pp2/2P5/2PBP3/P4PPP/R4RK1 b - - 0 22",
    "preMove": "Qxd7",
    "solution": [
      "Rxg2+",
      "Kh1",
      "Rg1+",
      "Kxg1",
      "Rg8+",
      "Qg7",
      "Rxg7#"
    ]
  },
  {
    "id": "II1s8",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1941,
    "popularity": 95,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "rn1q1rk1/pbp2pp1/1p2p2p/2b5/3n4/2QB1PB1/PP1NN2P/5KRR b - - 3 20",
    "fen": "rn1q1rk1/pbp2pp1/1p2p2p/2b5/8/2QB1PB1/PP1Nn2P/5KRR w - - 0 21",
    "preMove": "Nxe2",
    "solution": [
      "Qxg7+",
      "Kxg7",
      "Be5#"
    ]
  },
  {
    "id": "Km533",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2130,
    "popularity": 95,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "4r2k/p5rp/1ppQ4/3p4/1q1Pb3/1P2P3/P3BPPP/2R2RK1 w - - 7 28",
    "fen": "4r2k/p5rp/1pp5/3p4/1Q1Pb3/1P2P3/P3BPPP/2R2RK1 b - - 0 28",
    "preMove": "Qxb4",
    "solution": [
      "Rxg2+",
      "Kh1",
      "Rg1+",
      "Kxg1",
      "Rg8+",
      "Bg4",
      "Rxg4#"
    ]
  },
  {
    "id": "Ov2fd",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2089,
    "popularity": 95,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r5r1/1b1pkp1p/p3pp2/2p5/2B1P3/P1N5/2P2PPP/R2Q1RK1 w - - 0 15",
    "fen": "r5r1/1b1pkp1p/p3pp2/2p1P3/2B5/P1N5/2P2PPP/R2Q1RK1 b - - 0 15",
    "preMove": "e5",
    "solution": [
      "Rxg2+",
      "Kh1",
      "Rg1+",
      "Kxg1",
      "Rg8+",
      "Qg4",
      "Rxg4#"
    ]
  },
  {
    "id": "WTmhA",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1885,
    "popularity": 95,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r4r1k/1p1b2p1/p2q3p/2p1Rp1P/P1B5/2BP2Q1/1P3PP1/6K1 b - - 2 25",
    "fen": "r4r1k/1p1b2p1/p2q3p/2p1R2P/P1B2p2/2BP2Q1/1P3PP1/6K1 w - - 0 26",
    "preMove": "f4",
    "solution": [
      "Qxg7+",
      "Kxg7",
      "Re7#"
    ]
  },
  {
    "id": "fcIIl",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1654,
    "popularity": 95,
    "description": "Corner the king in the kill box pattern. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "6rk/pp1qb3/n1p1b2B/4P2Q/3P4/8/PPP3PP/5RK1 b - - 4 23",
    "fen": "6rk/pp1qb3/n1p4B/4P2Q/3P2b1/8/PPP3PP/5RK1 w - - 5 24",
    "preMove": "Bg4",
    "solution": [
      "Bg7+",
      "Kxg7",
      "Rf7#"
    ]
  },
  {
    "id": "gufIk",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2029,
    "popularity": 95,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r5r1/5k2/p2pN2p/1pqb4/1n6/1B6/PPP1QPPP/R4RK1 w - - 0 21",
    "fen": "r5r1/5k2/p2p3p/1pNb4/1n6/1B6/PPP1QPPP/R4RK1 b - - 0 21",
    "preMove": "Nxc5",
    "solution": [
      "Rxg2+",
      "Kh1",
      "Rg1+",
      "Kxg1",
      "Rg8+",
      "Qg4",
      "Rxg4#"
    ]
  },
  {
    "id": "jQHpy",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1863,
    "popularity": 95,
    "description": "Corner the king in the kill box pattern. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r2q2rk/pp4p1/2nbb2B/7Q/3pp3/8/PPP3PP/R4RK1 b - - 0 20",
    "fen": "r2q2rk/pp4p1/2nb3B/7Q/3pp1b1/8/PPP3PP/R4RK1 w - - 1 21",
    "preMove": "Bg4",
    "solution": [
      "Bxg7+",
      "Kxg7",
      "Rf7#"
    ]
  },
  {
    "id": "prjUk",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2129,
    "popularity": 95,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2kr2rb/ppp4p/3pqp1n/1P6/2P2N2/4Pb2/P2B1PPP/R2Q1RK1 w - - 0 17",
    "fen": "2kr2rb/ppp4p/3pNp1n/1P6/2P5/4Pb2/P2B1PPP/R2Q1RK1 b - - 0 17",
    "preMove": "Nxe6",
    "solution": [
      "Rxg2+",
      "Kh1",
      "Rg1+",
      "Kxg1",
      "Rg8+",
      "Ng5",
      "Rxg5#"
    ]
  },
  {
    "id": "t2jsm",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2038,
    "popularity": 95,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "3q1rk1/b2r1ppp/8/2pBB3/N2pP3/PP6/2P4P/3R2RK b - - 5 24",
    "fen": "3q1rk1/b4ppp/8/2prB3/N2pP3/PP6/2P4P/3R2RK w - - 0 25",
    "preMove": "Rxd5",
    "solution": [
      "Rxg7+",
      "Kh8",
      "Rg8+",
      "Kxg8",
      "Rg1+",
      "Qg5",
      "Rxg5#"
    ]
  },
  {
    "id": "vkngc",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1907,
    "popularity": 95,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r5kr/2q2p2/ppb3BB/2pn2Q1/8/5Pb1/PPP3P1/R2R1K2 b - - 0 28",
    "fen": "r5kr/2q2p2/ppb3BB/2pn2Q1/5b2/5P2/PPP3P1/R2R1K2 w - - 1 29",
    "preMove": "Bf4",
    "solution": [
      "Bh7+",
      "Kxh7",
      "Qg7#"
    ]
  },
  {
    "id": "xC6he",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2182,
    "popularity": 95,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "3r1rk1/ppp2ppp/2n5/6q1/8/1B3P2/PB3P1P/R5RK b - - 4 20",
    "fen": "3r1rk1/ppp2ppp/2n5/8/5q2/1B3P2/PB3P1P/R5RK w - - 5 21",
    "preMove": "Qf4",
    "solution": [
      "Rxg7+",
      "Kh8",
      "Rg8+",
      "Kxg8",
      "Rg1+",
      "Qg3",
      "Rxg3#"
    ]
  },
  {
    "id": "55jbG",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2043,
    "popularity": 94,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r2q1rk1/ppp2ppp/3p4/3Pn3/2B5/P1B5/1P2KP1P/R5R1 b - - 1 18",
    "fen": "r2q1rk1/ppp2ppp/3p4/3P4/2n5/P1B5/1P2KP1P/R5R1 w - - 0 19",
    "preMove": "Nxc4",
    "solution": [
      "Rxg7+",
      "Kh8",
      "Rg8+",
      "Kxg8",
      "Rg1+",
      "Qg5",
      "Rxg5#"
    ]
  },
  {
    "id": "DW9WI",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2129,
    "popularity": 94,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r5r1/p7/1p2kB2/2p1P3/3pb3/8/PPP2PPP/RN3RK1 w - - 0 21",
    "fen": "r5r1/p7/1p2kB2/2p1P3/3pb3/8/PPPN1PPP/R4RK1 b - - 1 21",
    "preMove": "Nd2",
    "solution": [
      "Rxg2+",
      "Kh1",
      "Rg1+",
      "Kxg1",
      "Rg8+",
      "Bg5",
      "Rxg5#"
    ]
  },
  {
    "id": "Hrczo",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2054,
    "popularity": 94,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2kr2r1/1pp2p1p/p6b/7q/3P1p1Q/2P2b2/PP2BPPP/R4RK1 w - - 0 21",
    "fen": "2kr2r1/1pp2p1p/p6b/7Q/3P1p2/2P2b2/PP2BPPP/R4RK1 b - - 0 21",
    "preMove": "Qxh5",
    "solution": [
      "Rxg2+",
      "Kh1",
      "Rg1+",
      "Kxg1",
      "Rg8+",
      "Qg6",
      "Rxg6#"
    ]
  },
  {
    "id": "OvAAS",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Easy",
    "rating": 1337,
    "popularity": 94,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r2qn1rk/pp5p/3p1p2/2pP1R1Q/4B3/2PP4/PP5P/2R4K b - - 0 25",
    "fen": "r2q2rk/pp4np/3p1p2/2pP1R1Q/4B3/2PP4/PP5P/2R4K w - - 1 26",
    "preMove": "Ng7",
    "solution": [
      "Qxh7+",
      "Kxh7",
      "Rh5#"
    ]
  },
  {
    "id": "Pwkmd",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2198,
    "popularity": 94,
    "description": "Find the forced checkmate. Deliver the famous opera-style mate.",
    "initialFen": "r1b2rk1/pppp1Bpp/8/8/4QB1q/8/PbP3PP/RN3R1K b - - 0 12",
    "fen": "r1b3k1/pppp1rpp/8/8/4QB1q/8/PbP3PP/RN3R1K w - - 0 13",
    "preMove": "Rxf7",
    "solution": [
      "Qe8+",
      "Rf8",
      "Qxf8+",
      "Kxf8",
      "Bd6+",
      "Ke8",
      "Rf8#"
    ]
  },
  {
    "id": "SeWr7",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2146,
    "popularity": 94,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r2q1rk1/1pp2ppp/8/p7/1b1BPN2/3K1P1B/PP3PR1/R7 b - - 0 18",
    "fen": "r2q1rk1/1pp2ppp/8/p1b5/3BPN2/3K1P1B/PP3PR1/R7 w - - 1 19",
    "preMove": "Bc5",
    "solution": [
      "Rxg7+",
      "Kh8",
      "Rg8+",
      "Kxg8",
      "Rg1+",
      "Qg5",
      "Rxg5#"
    ]
  },
  {
    "id": "XYBU1",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2125,
    "popularity": 94,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2kr2r1/1p3p1p/2b1p2p/4q3/3p4/5N2/PPPN1PPP/R4RK1 w - - 0 17",
    "fen": "2kr2r1/1p3p1p/2b1p2p/4N3/3p4/8/PPPN1PPP/R4RK1 b - - 0 17",
    "preMove": "Nxe5",
    "solution": [
      "Rxg2+",
      "Kh1",
      "Rg1+",
      "Kxg1",
      "Rg8+",
      "Ng4",
      "Rxg4#"
    ]
  },
  {
    "id": "Yi77F",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1508,
    "popularity": 94,
    "description": "Trap the king in the corner. Find the forced checkmate.",
    "initialFen": "r1b4k/pp4pp/2p2r2/2b1p3/2BnPpPq/2N2P2/PP1B2PN/R2Q1R1K w - - 4 22",
    "fen": "r1b4k/pp4pp/2p2r2/2b1p3/2BnPpPq/2N2P2/PP4PN/R2QBR1K b - - 5 22",
    "preMove": "Be1",
    "solution": [
      "Qxh2+",
      "Kxh2",
      "Rh6+",
      "Bh4",
      "Rxh4+",
      "Kg1",
      "Ne2#"
    ]
  },
  {
    "id": "fwo6D",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1652,
    "popularity": 94,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "1r1qr1k1/3bpp1p/2n3pB/2b5/1p3Q2/3P1B2/1PP3PP/R4R1K b - - 3 21",
    "fen": "1r1qr1k1/3bpp1p/2nb2pB/8/1p3Q2/3P1B2/1PP3PP/R4R1K w - - 4 22",
    "preMove": "Bd6",
    "solution": [
      "Qxf7+",
      "Kxf7",
      "Bd5#"
    ]
  },
  {
    "id": "k3Zqj",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1932,
    "popularity": 94,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r5r1/pQ2nk1p/5p2/1B1bp3/8/1P2B3/P1P2PPP/5RK1 w - - 1 24",
    "fen": "r5r1/pQ2nk1p/5p2/3bp3/2B5/1P2B3/P1P2PPP/5RK1 b - - 2 24",
    "preMove": "Bc4",
    "solution": [
      "Rxg2+",
      "Kh1",
      "Rg1+",
      "Kxg1",
      "Rg8+",
      "Bg5",
      "Rxg5#"
    ]
  },
  {
    "id": "l8nxL",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1979,
    "popularity": 94,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r1bq2kr/pp2bp2/2p1p1BB/3n4/3P3R/6Q1/PPP2PPP/R5K1 b - - 0 19",
    "fen": "r1bq2kr/pp3p2/2p1p1BB/3n4/3P3b/6Q1/PPP2PPP/R5K1 w - - 0 20",
    "preMove": "Bxh4",
    "solution": [
      "Bh7+",
      "Kxh7",
      "Qg7#"
    ]
  },
  {
    "id": "nOPHp",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1695,
    "popularity": 94,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "6rk/2p2qbp/1p1p4/1P1Ppnp1/p7/P4P1B/2Q2K2/7R b - - 3 44",
    "fen": "6rk/2p2qbp/1p1p4/1P1Pp1p1/p2n4/P4P1B/2Q2K2/7R w - - 4 45",
    "preMove": "Nd4",
    "solution": [
      "Qxh7+",
      "Kxh7",
      "Bf5#"
    ]
  },
  {
    "id": "pIic4",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2131,
    "popularity": 94,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "1k1r2r1/pp1n1p1p/4pp2/3q4/2BP4/4Qb2/P4PPP/2R2RK1 w - - 0 21",
    "fen": "1k1r2r1/pp1n1p1p/4pp2/3B4/3P4/4Qb2/P4PPP/2R2RK1 b - - 0 21",
    "preMove": "Bxd5",
    "solution": [
      "Rxg2+",
      "Kh1",
      "Rg1+",
      "Kxg1",
      "Rg8+",
      "Qg5",
      "Rxg5#"
    ]
  },
  {
    "id": "vIAeV",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1999,
    "popularity": 94,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r2q1rk1/5pQp/p2bp3/1p1pB2n/3P1P1P/2N5/PPP5/2KR2R1 b - - 0 17",
    "fen": "r2q1rk1/5pnp/p2bp3/1p1pB3/3P1P1P/2N5/PPP5/2KR2R1 w - - 0 18",
    "preMove": "Nxg7",
    "solution": [
      "Rxg7+",
      "Kh8",
      "Rg8+",
      "Kxg8",
      "Rg1+",
      "Qg5",
      "Rxg5#"
    ]
  },
  {
    "id": "yvBy6",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2142,
    "popularity": 94,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r4rk1/1p3ppp/p2p4/6q1/4p3/1P1P4/PBP4P/3R2RK b - - 1 20",
    "fen": "r4rk1/1p3ppp/p2p4/8/4pq2/1P1P4/PBP4P/3R2RK w - - 2 21",
    "preMove": "Qf4",
    "solution": [
      "Rxg7+",
      "Kh8",
      "Rg8+",
      "Kxg8",
      "Rg1+",
      "Qg3",
      "Rxg3#"
    ]
  },
  {
    "id": "dbBri",
    "title": "Mate in 5",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2052,
    "popularity": 81,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2k2rr1/pbpp4/1p6/7Q/3N1n2/P2B4/1PP2PPP/RN3RK1 w - - 5 19",
    "fen": "2k2rr1/pbpp4/1p6/8/3N1n1Q/P2B4/1PP2PPP/RN3RK1 b - - 6 19",
    "preMove": "Qh4",
    "solution": [
      "Rxg2+",
      "Kh1",
      "Rg1+",
      "Kxg1",
      "Rg8+",
      "Bg6",
      "Rxg6+",
      "Qg5",
      "Rxg5#"
    ]
  },
  {
    "id": "0Bsf6",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2101,
    "popularity": 93,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r4rk1/pp3ppp/5b2/3qB3/3P4/5PQB/bP5P/K2R2R1 b - - 1 23",
    "fen": "r4rk1/pp3ppp/5b2/3qB3/3P4/1b3PQB/1P5P/K2R2R1 w - - 2 24",
    "preMove": "Bb3",
    "solution": [
      "Qxg7+",
      "Bxg7",
      "Rxg7+",
      "Kh8",
      "Rg8+",
      "Kxg8",
      "Rg1#"
    ]
  },
  {
    "id": "1WPj2",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2103,
    "popularity": 93,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "4rrk1/1pp2ppp/p7/1q6/2nB4/2P3R1/PP2QP1P/1K5R b - - 9 25",
    "fen": "5rk1/1pp2ppp/p7/1q6/2nB4/2P3R1/PP2rP1P/1K5R w - - 0 26",
    "preMove": "Rxe2",
    "solution": [
      "Rxg7+",
      "Kh8",
      "Rg8+",
      "Kxg8",
      "Rg1+",
      "Qg5",
      "Rxg5#"
    ]
  },
  {
    "id": "E3dJV",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2072,
    "popularity": 93,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r4rk1/pp3ppp/3bpn2/8/1PP1QP2/2B5/P4P1P/R5RK b - - 0 21",
    "fen": "r4rk1/pp3ppp/3bp3/8/1PP1nP2/2B5/P4P1P/R5RK w - - 0 22",
    "preMove": "Nxe4",
    "solution": [
      "Rxg7+",
      "Kh8",
      "Rg8+",
      "Kxg8",
      "Rg1+",
      "Ng3+",
      "Rxg3#"
    ]
  },
  {
    "id": "FMJ0V",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Easy",
    "rating": 1134,
    "popularity": 93,
    "description": "Deliver a dovetail mate supported by the queen. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "1r4rk/4bpp1/p2p3B/2p5/1pPnB1q1/8/PPPQ1P2/1K5R b - - 0 26",
    "fen": "1r4rk/4bpp1/p2p3B/2p5/1pPnq3/8/PPPQ1P2/1K5R w - - 0 27",
    "preMove": "Qxe4",
    "solution": [
      "Bxg7+",
      "Kxg7",
      "Qh6#"
    ]
  },
  {
    "id": "K79uA",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2110,
    "popularity": 93,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r5r1/1b1nk2p/p2ppp2/1p6/3q4/P1N2N2/1P2BPPP/2R2RK1 w - - 0 20",
    "fen": "r5r1/1b1nk2p/p2ppp2/1p6/3N4/P1N5/1P2BPPP/2R2RK1 b - - 0 20",
    "preMove": "Nxd4",
    "solution": [
      "Rxg2+",
      "Kh1",
      "Rg1+",
      "Kxg1",
      "Rg8+",
      "Bg4",
      "Rxg4#"
    ]
  },
  {
    "id": "LlsU2",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2013,
    "popularity": 93,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2k3rr/pp2bp2/2b2p2/P6p/8/5N2/1PP2PPP/1R1Q1RK1 w - - 0 18",
    "fen": "2k3rr/pp2bp2/2b2p2/P6p/3N4/8/1PP2PPP/1R1Q1RK1 b - - 1 18",
    "preMove": "Nd4",
    "solution": [
      "Rxg2+",
      "Kh1",
      "Rg1+",
      "Kxg1",
      "Rg8+",
      "Qg4+",
      "Rxg4#"
    ]
  },
  {
    "id": "bUMdI",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1857,
    "popularity": 93,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2r2rk1/pb3pp1/1p2p2p/3PR3/8/2BQ2R1/qP3PPP/6K1 b - - 0 24",
    "fen": "2r2rk1/p4pp1/1p2p2p/3bR3/8/2BQ2R1/qP3PPP/6K1 w - - 0 25",
    "preMove": "Bxd5",
    "solution": [
      "Rxg7+",
      "Kxg7",
      "Rg5#"
    ]
  },
  {
    "id": "oBvLt",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2082,
    "popularity": 93,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "1k1r4/bpp1q2p/p1p2B2/P3p3/4b1r1/3P4/1PP2PPP/R3QRK1 w - - 0 20",
    "fen": "1k1r4/bpp1B2p/p1p5/P3p3/4b1r1/3P4/1PP2PPP/R3QRK1 b - - 0 20",
    "preMove": "Bxe7",
    "solution": [
      "Rxg2+",
      "Kh1",
      "Rg1+",
      "Kxg1",
      "Rg8+",
      "Bg5",
      "Rxg5#"
    ]
  },
  {
    "id": "qf3g0",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2172,
    "popularity": 93,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r4rk1/5ppp/p3p3/1b1p4/1p1B4/5q2/PPPN2RP/R6K b - - 9 26",
    "fen": "r4rk1/5ppp/p3p3/1b1p4/1p1B1q2/8/PPPN2RP/R6K w - - 10 27",
    "preMove": "Qf4",
    "solution": [
      "Rxg7+",
      "Kh8",
      "Rg8+",
      "Kxg8",
      "Rg1+",
      "Qg5",
      "Rxg5#"
    ]
  },
  {
    "id": "v3Vnh",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2078,
    "popularity": 93,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "3k2rr/p2p4/1p1q1p1p/3bpN1Q/8/8/PP3PPP/3R1RK1 w - - 6 24",
    "fen": "3k2rr/p2p4/1p1N1p1p/3bp2Q/8/8/PP3PPP/3R1RK1 b - - 0 24",
    "preMove": "Nxd6",
    "solution": [
      "Rxg2+",
      "Kh1",
      "Rg1+",
      "Kxg1",
      "Rg8+",
      "Qg6",
      "Rxg6#"
    ]
  },
  {
    "id": "zFybK",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2083,
    "popularity": 93,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r5rk/pbp2p2/1p1b1p1p/8/2N5/1P1B4/P1P2PPP/3R1RK1 w - - 5 20",
    "fen": "r5rk/pbp2p2/1p1N1p1p/8/8/1P1B4/P1P2PPP/3R1RK1 b - - 0 20",
    "preMove": "Nxd6",
    "solution": [
      "Rxg2+",
      "Kh1",
      "Rg1+",
      "Kxg1",
      "Rg8+",
      "Bg6",
      "Rxg6#"
    ]
  },
  {
    "id": "27HEf",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2126,
    "popularity": 92,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r2q1rk1/pp3ppp/2np4/2p5/2P1Pn2/P2B1N2/1BP2P1K/R5R1 b - - 4 19",
    "fen": "r2q1rk1/pp3ppp/2np4/2p5/2P1P3/P2n1N2/1BP2P1K/R5R1 w - - 0 20",
    "preMove": "Nxd3",
    "solution": [
      "Rxg7+",
      "Kh8",
      "Rg8+",
      "Kxg8",
      "Rg1+",
      "Qg5",
      "Rxg5#"
    ]
  },
  {
    "id": "7pKkE",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2035,
    "popularity": 92,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "5rk1/pp2bppp/1q2pB2/2r1Q3/3N3P/8/PPP2PR1/1K1R4 b - - 0 17",
    "fen": "5rk1/pp2bppp/1q2pB2/4r3/3N3P/8/PPP2PR1/1K1R4 w - - 0 18",
    "preMove": "Rxe5",
    "solution": [
      "Rxg7+",
      "Kh8",
      "Rg8+",
      "Kxg8",
      "Rg1+",
      "Rg5",
      "Rxg5#"
    ]
  },
  {
    "id": "BJORE",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2101,
    "popularity": 92,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "5rk1/p4ppp/1n2pB2/2b1r3/3p4/3P1P2/PP3P1P/R5RK b - - 1 23",
    "fen": "5rk1/p4ppp/1n2pB2/2b2r2/3p4/3P1P2/PP3P1P/R5RK w - - 2 24",
    "preMove": "Rf5",
    "solution": [
      "Rxg7+",
      "Kh8",
      "Rg8+",
      "Kxg8",
      "Rg1+",
      "Rg5",
      "Rxg5#"
    ]
  },
  {
    "id": "JRI5t",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2027,
    "popularity": 92,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r2q1rk1/pp3p1p/4pB2/1B1pPn2/4n3/P6P/4KP2/R5R1 b - - 2 20",
    "fen": "r2q1rk1/pp3pnp/4pB2/1B1pP3/4n3/P6P/4KP2/R5R1 w - - 3 21",
    "preMove": "Ng7",
    "solution": [
      "Rxg7+",
      "Kh8",
      "Rg8+",
      "Kxg8",
      "Rg1+",
      "Ng3+",
      "Rxg3#"
    ]
  },
  {
    "id": "OjPWL",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2029,
    "popularity": 92,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "5rr1/ppk5/2bnp3/2Q5/2pP4/P1P5/1PB2PPP/R4RK1 w - - 11 28",
    "fen": "5rr1/ppk5/2bnp3/2Q5/B1pP4/P1P5/1P3PPP/R4RK1 b - - 12 28",
    "preMove": "Ba4",
    "solution": [
      "Rxg2+",
      "Kh1",
      "Rg1+",
      "Kxg1",
      "Rg8+",
      "Qg5",
      "Rxg5#"
    ]
  },
  {
    "id": "TCBeb",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2116,
    "popularity": 92,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r5r1/pp3p2/2k5/2pb1Q2/2p5/8/PPP2PPP/RN3RK1 w - - 4 22",
    "fen": "r5r1/pp3p2/2k5/2pb1Q2/2p5/2N5/PPP2PPP/R4RK1 b - - 5 22",
    "preMove": "Nc3",
    "solution": [
      "Rxg2+",
      "Kh1",
      "Rg1+",
      "Kxg1",
      "Rg8+",
      "Qg4",
      "Rxg4#"
    ]
  },
  {
    "id": "Tj3mW",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1958,
    "popularity": 92,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2r2rk1/1b2qpp1/p6p/1pbpR3/3B1PQ1/P1P5/1PB3PP/5RK1 b - - 0 27",
    "fen": "2r2rk1/1bq2pp1/p6p/1pbpR3/3B1PQ1/P1P5/1PB3PP/5RK1 w - - 1 28",
    "preMove": "Qc7",
    "solution": [
      "Qxg7+",
      "Kxg7",
      "Rg5#"
    ]
  },
  {
    "id": "afG7p",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2028,
    "popularity": 92,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "1r4r1/p1p1qp1k/1p3Q1p/8/4b3/2PPP3/P4PPP/R4RK1 w - - 0 22",
    "fen": "1r4r1/p1p1Qp1k/1p5p/8/4b3/2PPP3/P4PPP/R4RK1 b - - 0 22",
    "preMove": "Qxe7",
    "solution": [
      "Rxg2+",
      "Kh1",
      "Rg1+",
      "Kxg1",
      "Rg8+",
      "Qg5",
      "Rxg5#"
    ]
  },
  {
    "id": "ijaD0",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2028,
    "popularity": 92,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2kr2r1/pp2np2/4pq2/4Q3/8/P1p2b2/2P1BPPP/R4RK1 w - - 0 20",
    "fen": "2kr2r1/pp2np2/4pQ2/8/8/P1p2b2/2P1BPPP/R4RK1 b - - 0 20",
    "preMove": "Qxf6",
    "solution": [
      "Rxg2+",
      "Kh1",
      "Rg1+",
      "Kxg1",
      "Rg8+",
      "Qg7",
      "Rxg7#"
    ]
  },
  {
    "id": "oJxHk",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1977,
    "popularity": 92,
    "description": "Deliver a hook mate with rook, knight, and pawn. Find the forced checkmate.",
    "initialFen": "5rk1/1p2pp1p/p2p2PQ/3Pn3/4qN2/7P/P1r3P1/R4R1K b - - 0 28",
    "fen": "5rk1/1p2p2p/p2p2pQ/3Pn3/4qN2/7P/P1r3P1/R4R1K w - - 0 29",
    "preMove": "fxg6",
    "solution": [
      "Qxf8+",
      "Kxf8",
      "Ne6+",
      "Ke8",
      "Rf8+",
      "Kd7",
      "Rd8#"
    ]
  },
  {
    "id": "uMcuj",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1926,
    "popularity": 92,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "4r1r1/kb6/pp2p2p/1p2P3/1PpP4/1P1N4/5PPP/2RQ1RK1 w - - 0 28",
    "fen": "4r1r1/kb6/pp2p2p/1p2P3/1PPP4/3N4/5PPP/2RQ1RK1 b - - 0 28",
    "preMove": "bxc4",
    "solution": [
      "Rxg2+",
      "Kh1",
      "Rg1+",
      "Kxg1",
      "Rg8+",
      "Qg4",
      "Rxg4#"
    ]
  },
  {
    "id": "vYm04",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1948,
    "popularity": 92,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r4rk1/1b2bp1p/1p2pB2/1pp4n/2PP4/1P5K/P4P1P/R5R1 b - - 2 26",
    "fen": "r4rk1/1b2bpnp/1p2pB2/1pp5/2PP4/1P5K/P4P1P/R5R1 w - - 3 27",
    "preMove": "Ng7",
    "solution": [
      "Rxg7+",
      "Kh8",
      "Rg8+",
      "Kxg8",
      "Rg1+",
      "Bg2+",
      "Rxg2#"
    ]
  },
  {
    "id": "05DXA",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2169,
    "popularity": 91,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "3r1rk1/q3bppp/2p1p3/1p2B3/1n1P4/3B1P2/PPP2P1P/R5RK b - - 3 21",
    "fen": "3r1rk1/q3bppp/2p1p3/1p2B3/3P4/3n1P2/PPP2P1P/R5RK w - - 0 22",
    "preMove": "Nxd3",
    "solution": [
      "Rxg7+",
      "Kh8",
      "Rg8+",
      "Kxg8",
      "Rg1+",
      "Bg5",
      "Rxg5#"
    ]
  },
  {
    "id": "73K5c",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2084,
    "popularity": 91,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r5rk/1bp2p2/p3p2p/4q3/1nBP4/2N2N2/1P3PPP/R4RK1 w - - 0 18",
    "fen": "r5rk/1bp2p2/p3p2p/4N3/1nBP4/2N5/1P3PPP/R4RK1 b - - 0 18",
    "preMove": "Nxe5",
    "solution": [
      "Rxg2+",
      "Kh1",
      "Rg1+",
      "Kxg1",
      "Rg8+",
      "Ng6+",
      "Rxg6#"
    ]
  },
  {
    "id": "918hS",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2157,
    "popularity": 91,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "3r2r1/p1b5/1p1kp1Q1/3b1p2/1P1P4/P1N5/5PPP/R4RK1 w - - 2 26",
    "fen": "3r2r1/p1b5/1p1kp3/3b1p1Q/1P1P4/P1N5/5PPP/R4RK1 b - - 3 26",
    "preMove": "Qh5",
    "solution": [
      "Rxg2+",
      "Kh1",
      "Rg1+",
      "Kxg1",
      "Rg8+",
      "Qg6",
      "Rxg6#"
    ]
  },
  {
    "id": "NWA3Z",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2173,
    "popularity": 91,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "3r2r1/p1p1kp1p/1bB2p2/4p3/1P1q4/P2P1b2/2PQNPPP/R4RK1 w - - 5 18",
    "fen": "3r2r1/p1p1kp1p/1bB2p2/4p3/1P1N4/P2P1b2/2PQ1PPP/R4RK1 b - - 0 18",
    "preMove": "Nxd4",
    "solution": [
      "Rxg2+",
      "Kh1",
      "Rg1+",
      "Kxg1",
      "Rg8+",
      "Qg5",
      "Rxg5#"
    ]
  },
  {
    "id": "NaZEz",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2155,
    "popularity": 91,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2kr2r1/pbp2p2/1p2pp1p/1B6/3q4/2PP4/PP2QPPP/3R1RK1 w - - 1 17",
    "fen": "2kr2r1/pbp2p2/1p2pp1p/1B6/3P4/3P4/PP2QPPP/3R1RK1 b - - 0 17",
    "preMove": "cxd4",
    "solution": [
      "Rxg2+",
      "Kh1",
      "Rg1+",
      "Kxg1",
      "Rg8+",
      "Qg4",
      "Rxg4#"
    ]
  },
  {
    "id": "RdJDZ",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2125,
    "popularity": 91,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r5r1/ppp2k1p/2b1N3/4np2/1P1q3p/P2B4/3R1PPP/3Q1RK1 w - - 1 24",
    "fen": "r5r1/ppp2k1p/2b5/4np2/1P1N3p/P2B4/3R1PPP/3Q1RK1 b - - 0 24",
    "preMove": "Nxd4",
    "solution": [
      "Rxg2+",
      "Kh1",
      "Rg1+",
      "Kxg1",
      "Rg8+",
      "Qg4",
      "Rxg4#"
    ]
  },
  {
    "id": "ZW7EI",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2039,
    "popularity": 91,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2kr2r1/qp3p1p/2B2p2/p1nb4/P2N4/2PP4/5PPP/1R1Q1RK1 w - - 1 21",
    "fen": "2kr2r1/qp3p1p/2B2p2/pNnb4/P7/2PP4/5PPP/1R1Q1RK1 b - - 2 21",
    "preMove": "Nb5",
    "solution": [
      "Rxg2+",
      "Kh1",
      "Rg1+",
      "Kxg1",
      "Rg8+",
      "Qg4+",
      "Rxg4#"
    ]
  },
  {
    "id": "b860H",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2075,
    "popularity": 91,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r5r1/pp2k2p/2bqp2p/1B3p1Q/8/8/PP3PPP/3R1RK1 w - - 2 19",
    "fen": "r5r1/pp2k2p/2bRp2p/1B3p1Q/8/8/PP3PPP/5RK1 b - - 0 19",
    "preMove": "Rxd6",
    "solution": [
      "Rxg2+",
      "Kh1",
      "Rg1+",
      "Kxg1",
      "Rg8+",
      "Qg4",
      "Rxg4#"
    ]
  },
  {
    "id": "lh51h",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2127,
    "popularity": 91,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2k2rr1/pp6/2b1p3/2p1q2p/3P4/2P1PN2/PP3PPP/R4RK1 w - - 0 20",
    "fen": "2k2rr1/pp6/2b1p3/2p1N2p/3P4/2P1P3/PP3PPP/R4RK1 b - - 0 20",
    "preMove": "Nxe5",
    "solution": [
      "Rxg2+",
      "Kh1",
      "Rg1+",
      "Kxg1",
      "Rg8+",
      "Ng4",
      "Rxg4#"
    ]
  },
  {
    "id": "mSHQK",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2127,
    "popularity": 91,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r4B1k/pbpp4/1p3pr1/8/8/3P4/PPPQ1PPP/RN3RK1 w - - 2 18",
    "fen": "r6k/pbppB3/1p3pr1/8/8/3P4/PPPQ1PPP/RN3RK1 b - - 3 18",
    "preMove": "Be7",
    "solution": [
      "Rxg2+",
      "Kh1",
      "Rg1+",
      "Kxg1",
      "Rg8+",
      "Qg5",
      "Rxg5#"
    ]
  },
  {
    "id": "r2erv",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2133,
    "popularity": 91,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r4rk1/pp2bppp/2n1p3/4n3/2P5/1P1B1P2/PBKN1P1P/R5R1 b - - 9 14",
    "fen": "r4rk1/pp2bppp/2n1p3/8/2P5/1P1n1P2/PBKN1P1P/R5R1 w - - 0 15",
    "preMove": "Nxd3",
    "solution": [
      "Rxg7+",
      "Kh8",
      "Rg8+",
      "Kxg8",
      "Rg1+",
      "Bg5",
      "Rxg5#"
    ]
  },
  {
    "id": "J1eAk",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2001,
    "popularity": 90,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r2q1rk1/pb2bpp1/1pn1p2p/8/3N2Q1/P1PBP1B1/5P1P/R3K1R1 b Q - 5 16",
    "fen": "r2q1rk1/pb2bpp1/1p2p2p/8/3n2Q1/P1PBP1B1/5P1P/R3K1R1 w Q - 0 17",
    "preMove": "Nxd4",
    "solution": [
      "Qxg7+",
      "Kxg7",
      "Be5#"
    ]
  },
  {
    "id": "RcthG",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2146,
    "popularity": 90,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "3r2r1/p2qkp2/1bb2N1Q/4p3/3p4/1BP5/PP3PPP/3R1RK1 w - - 2 24",
    "fen": "3r2r1/p2Nkp2/1bb4Q/4p3/3p4/1BP5/PP3PPP/3R1RK1 b - - 0 24",
    "preMove": "Nxd7",
    "solution": [
      "Rxg2+",
      "Kh1",
      "Rg1+",
      "Kxg1",
      "Rg8+",
      "Qg7",
      "Rxg7#"
    ]
  },
  {
    "id": "gOZmI",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2144,
    "popularity": 90,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r1bq1rk1/5ppp/2p1p3/pp1P4/7P/1PBQ1N2/PP3n2/1K1R2R1 b - - 0 17",
    "fen": "r1bq1rk1/5ppp/2p1p3/pp1P4/7P/1PBn1N2/PP6/1K1R2R1 w - - 0 18",
    "preMove": "Nxd3",
    "solution": [
      "Rxg7+",
      "Kh8",
      "Rg8+",
      "Kxg8",
      "Rg1+",
      "Qg5",
      "Rxg5#"
    ]
  },
  {
    "id": "3eAd3",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2063,
    "popularity": 89,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r4rk1/3n1ppp/p1b1p3/1p2n3/1b1B1P2/1BN3R1/PPP4P/2KR4 b - - 0 20",
    "fen": "r4rk1/3n1ppp/p1b1p3/1p6/1bnB1P2/1BN3R1/PPP4P/2KR4 w - - 1 21",
    "preMove": "Nc4",
    "solution": [
      "Rxg7+",
      "Kh8",
      "Rg8+",
      "Kxg8",
      "Rg1+",
      "Bg2",
      "Rxg2#"
    ]
  },
  {
    "id": "PwH6Z",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1902,
    "popularity": 89,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "b1r3k1/p5pp/4p1q1/2Nn4/3P1r2/PQ6/1P2BPPP/2RR2K1 w - - 5 26",
    "fen": "b1r3k1/p5pp/4p1q1/2Nn4/3P1r2/PQ1B4/1P3PPP/2RR2K1 b - - 6 26",
    "preMove": "Bd3",
    "solution": [
      "Qxg2+",
      "Kxg2",
      "Ne3+",
      "Kh3",
      "Bg2+",
      "Kg3",
      "Rg4#"
    ]
  },
  {
    "id": "Wkj7P",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2072,
    "popularity": 89,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r2q1rk1/1b1n1ppp/pp1bp3/8/2PBPP2/3B4/PP1Q1K1P/R5R1 b - - 0 15",
    "fen": "r2q1rk1/1b1n1ppp/pp2p3/2b5/2PBPP2/3B4/PP1Q1K1P/R5R1 w - - 1 16",
    "preMove": "Bc5",
    "solution": [
      "Rxg7+",
      "Kh8",
      "Rg8+",
      "Kxg8",
      "Rg1+",
      "Qg5",
      "Rxg5#"
    ]
  },
  {
    "id": "dnfG1",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2024,
    "popularity": 89,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2r2rk1/1p3ppp/p1b1pB2/4P3/1bq2Q2/2p2P2/PP5P/R5RK b - - 1 21",
    "fen": "2r2rk1/1p3ppp/p1b1pB2/4P3/1b3q2/2p2P2/PP5P/R5RK w - - 0 22",
    "preMove": "Qxf4",
    "solution": [
      "Rxg7+",
      "Kh8",
      "Rg8+",
      "Kxg8",
      "Rg1+",
      "Qg3",
      "Rxg3#"
    ]
  },
  {
    "id": "eDygL",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2089,
    "popularity": 89,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r4rk1/1pp1qppp/3bp3/p2bB3/5P2/1Q1P4/PPP1B2P/1K1R2R1 b - - 0 19",
    "fen": "r4rk1/1pp1qppp/3bp3/p3B3/5P2/1b1P4/PPP1B2P/1K1R2R1 w - - 0 20",
    "preMove": "Bxb3",
    "solution": [
      "Rxg7+",
      "Kh8",
      "Rg8+",
      "Kxg8",
      "Rg1+",
      "Qg5",
      "Rxg5#"
    ]
  },
  {
    "id": "s2sGM",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2112,
    "popularity": 89,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "6r1/1pk5/p1bpp2r/5pNp/2NP4/3BP3/1P3PPP/R4RK1 w - - 1 24",
    "fen": "6r1/1pk2N2/p1bpp2r/5p1p/2NP4/3BP3/1P3PPP/R4RK1 b - - 2 24",
    "preMove": "Nf7",
    "solution": [
      "Rxg2+",
      "Kh1",
      "Rg1+",
      "Kxg1",
      "Rg6+",
      "Ng5",
      "Rxg5#"
    ]
  },
  {
    "id": "9O7At",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2062,
    "popularity": 88,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "4r1r1/pbk4p/3p4/P1p2B2/8/3P4/1PPN1PPP/R4RK1 w - - 1 22",
    "fen": "4r1r1/pbk4p/3p4/P1p2B2/8/3P4/1PPN1PPP/4RRK1 b - - 2 22",
    "preMove": "Rae1",
    "solution": [
      "Rxg2+",
      "Kh1",
      "Rg1+",
      "Kxg1",
      "Rg8+",
      "Bg6",
      "Rxg6#"
    ]
  },
  {
    "id": "XDi78",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1955,
    "popularity": 88,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "4brrk/p3qp2/1p3bPB/2p1p2Q/P3P2R/3P3P/2P1B3/6RK b - - 0 36",
    "fen": "4brrk/p3q3/1p3bpB/2p1p2Q/P3P2R/3P3P/2P1B3/6RK w - - 0 37",
    "preMove": "fxg6",
    "solution": [
      "Bg7+",
      "Kxg7",
      "Qh7#"
    ]
  },
  {
    "id": "sNVhJ",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2081,
    "popularity": 88,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "1k4rr/pbp2p2/1p3b1p/1P3Q2/P1pPN3/2q1P3/5PPP/R4RK1 w - - 0 22",
    "fen": "1k4rr/pbp2p2/1p3b1p/1P3Q2/P1pP4/2N1P3/5PPP/R4RK1 b - - 0 22",
    "preMove": "Nxc3",
    "solution": [
      "Rxg2+",
      "Kh1",
      "Rg1+",
      "Kxg1",
      "Rg8+",
      "Qg4",
      "Rxg4#"
    ]
  },
  {
    "id": "4J7RI",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1970,
    "popularity": 100,
    "description": "Find the forced checkmate.",
    "initialFen": "1rb2nrk/p3q1pp/1p3p2/2pppP2/P6N/1P1PP1RQ/2P3PP/2B2RK1 b - - 8 23",
    "fen": "1rb2nrk/p3q1pp/1p3p2/2pp1P2/P3p2N/1P1PP1RQ/2P3PP/2B2RK1 w - - 0 24",
    "preMove": "e4",
    "solution": [
      "Ng6+",
      "Nxg6",
      "Qxh7+",
      "Kxh7",
      "Rh3+",
      "Nh4",
      "Rxh4#"
    ]
  },
  {
    "id": "4XpeW",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1981,
    "popularity": 87,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "3rrnk1/1bq2pp1/pp2pn1p/4R3/2PB4/1P4Q1/P3NPPP/1B1R2K1 b - - 6 24",
    "fen": "3rrnk1/1bqn1pp1/pp2p2p/4R3/2PB4/1P4Q1/P3NPPP/1B1R2K1 w - - 7 25",
    "preMove": "N6d7",
    "solution": [
      "Qxg7+",
      "Kxg7",
      "Rg5#"
    ]
  },
  {
    "id": "c4bev",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1905,
    "popularity": 87,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2r2rk1/1p3ppp/p2pp3/4n3/2P4b/1P6/PB1N1PRP/R6K b - - 2 21",
    "fen": "2r2rk1/1p3ppp/p2pp3/8/2P4b/1P1n4/PB1N1PRP/R6K w - - 3 22",
    "preMove": "Nd3",
    "solution": [
      "Rxg7+",
      "Kh8",
      "Rg8+",
      "Kxg8",
      "Rg1+",
      "Bg5",
      "Rxg5#"
    ]
  },
  {
    "id": "y0hnw",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2037,
    "popularity": 87,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r2qnrk1/p1pn1pQp/1p2p3/8/8/1B1P1P2/PBP2P1P/R5RK b - - 0 16",
    "fen": "r2q1rk1/p1pn1pnp/1p2p3/8/8/1B1P1P2/PBP2P1P/R5RK w - - 0 17",
    "preMove": "Nxg7",
    "solution": [
      "Rxg7+",
      "Kh8",
      "Rg8+",
      "Kxg8",
      "Rg1+",
      "Qg5",
      "Rxg5#"
    ]
  },
  {
    "id": "zopEC",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2084,
    "popularity": 87,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2k3r1/2p2N1r/ppb1p3/7p/3P4/2P5/PP3PPP/R4RK1 w - - 0 21",
    "fen": "2k3r1/2p4r/ppb1p3/4N2p/3P4/2P5/PP3PPP/R4RK1 b - - 1 21",
    "preMove": "Ne5",
    "solution": [
      "Rxg2+",
      "Kh1",
      "Rg1+",
      "Kxg1",
      "Rg7+",
      "Ng4",
      "Rxg4#"
    ]
  },
  {
    "id": "4B2N2",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2080,
    "popularity": 86,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r7/pp2kprp/2b1pp2/8/2Pq4/1P3N2/P3BPPP/2R2RK1 w - - 0 18",
    "fen": "r7/pp2kprp/2b1pp2/8/2PN4/1P6/P3BPPP/2R2RK1 b - - 0 18",
    "preMove": "Nxd4",
    "solution": [
      "Rxg2+",
      "Kh1",
      "Rg1+",
      "Kxg1",
      "Rg8+",
      "Bg4",
      "Rxg4#"
    ]
  },
  {
    "id": "5vT6V",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2068,
    "popularity": 86,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r5rk/1b6/p4pBp/1p6/2pN4/P1P5/1P3PPP/3R1RK1 w - - 2 25",
    "fen": "r5rk/1b6/p4p1p/1p5B/2pN4/P1P5/1P3PPP/3R1RK1 b - - 3 25",
    "preMove": "Bh5",
    "solution": [
      "Rxg2+",
      "Kh1",
      "Rg1+",
      "Kxg1",
      "Rg8+",
      "Bg6",
      "Rxg6#"
    ]
  },
  {
    "id": "9qx2J",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1913,
    "popularity": 86,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r2n1rk1/pp1b1pp1/3Pp2p/8/2P5/3B1qB1/PQK2P1P/R5R1 b - - 0 21",
    "fen": "2rn1rk1/pp1b1pp1/3Pp2p/8/2P5/3B1qB1/PQK2P1P/R5R1 w - - 1 22",
    "preMove": "Rc8",
    "solution": [
      "Qxg7+",
      "Kxg7",
      "Be5#"
    ]
  },
  {
    "id": "IufLj",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2075,
    "popularity": 86,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "4r1r1/pb1k4/n3p2Q/1pp2p2/3P4/2NB4/P4PPP/4RRK1 w - - 0 27",
    "fen": "4r1r1/pb1k4/n3p2Q/1pP2p2/8/2NB4/P4PPP/4RRK1 b - - 0 27",
    "preMove": "dxc5",
    "solution": [
      "Rxg2+",
      "Kh1",
      "Rg1+",
      "Kxg1",
      "Rg8+",
      "Qg7+",
      "Rxg7#"
    ]
  },
  {
    "id": "VyZTU",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2063,
    "popularity": 86,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "3r4/p1ppk1r1/1p2p3/3bPp1Q/3P4/P1PB4/2P2PPP/R4RK1 w - - 0 23",
    "fen": "3r4/p1ppk1r1/1p2p3/3bPp1Q/2PP4/P2B4/2P2PPP/R4RK1 b - - 0 23",
    "preMove": "c4",
    "solution": [
      "Rxg2+",
      "Kh1",
      "Rg1+",
      "Kxg1",
      "Rg8+",
      "Qg6",
      "Rxg6#"
    ]
  },
  {
    "id": "Wp3ge",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2024,
    "popularity": 86,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2kr2r1/pbp4p/1p2p3/4pp2/P1P1P3/2PB4/4QPPP/1R3RK1 w - - 0 17",
    "fen": "2kr2r1/pbp4p/1p2p3/4pP2/P1P5/2PB4/4QPPP/1R3RK1 b - - 0 17",
    "preMove": "exf5",
    "solution": [
      "Rxg2+",
      "Kh1",
      "Rg1+",
      "Kxg1",
      "Rg8+",
      "Qg4",
      "Rxg4#"
    ]
  },
  {
    "id": "ZAWNL",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2036,
    "popularity": 86,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2r3rk/pb3p1p/1p2pp2/7q/3N4/PP2P3/4QPPP/R4RK1 w - - 4 21",
    "fen": "2r3rk/pb3p1p/1p2pp2/7Q/3N4/PP2P3/5PPP/R4RK1 b - - 0 21",
    "preMove": "Qxh5",
    "solution": [
      "Rxg2+",
      "Kh1",
      "Rg1+",
      "Kxg1",
      "Rg8+",
      "Qg6",
      "Rxg6#"
    ]
  },
  {
    "id": "ixted",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2025,
    "popularity": 86,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "1k1r2r1/pb2qp2/1b5p/n1p5/B3Q3/2N5/PPPP1PPP/R1B2RK1 w - - 0 18",
    "fen": "1k1r2r1/pb2Qp2/1b5p/n1p5/B7/2N5/PPPP1PPP/R1B2RK1 b - - 0 18",
    "preMove": "Qxe7",
    "solution": [
      "Rxg2+",
      "Kh1",
      "Rg1+",
      "Kxg1",
      "Rg8+",
      "Qg5",
      "Rxg5#"
    ]
  },
  {
    "id": "s9IhW",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Easy",
    "rating": 977,
    "popularity": 86,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "6rk/ppp5/3p1b1p/2PPp2q/1P2N3/5Ppb/P5P1/R4QRK w - - 0 28",
    "fen": "6rk/ppp5/3p1N1p/2PPp2q/1P6/5Ppb/P5P1/R4QRK b - - 0 28",
    "preMove": "Nxf6",
    "solution": [
      "Bxg2+",
      "Kxg2",
      "Qh2#"
    ]
  },
  {
    "id": "48W6Y",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2067,
    "popularity": 84,
    "description": "Corner the king in the kill box pattern. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r2q2rk/p1pbb3/2p4B/2n1p2Q/8/5R2/PPP3PP/RN4K1 b - - 4 19",
    "fen": "r2q2rk/p1p1b3/2p4B/2n1p2Q/6b1/5R2/PPP3PP/RN4K1 w - - 5 20",
    "preMove": "Bg4",
    "solution": [
      "Bg7+",
      "Kxg7",
      "Rf7#"
    ]
  },
  {
    "id": "CVhRe",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2073,
    "popularity": 84,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r5rk/1b3p1p/p4p2/npp5/P5Q1/1B2P3/1PP2PPP/R4RK1 w - - 1 21",
    "fen": "r5rk/1b1Q1p1p/p4p2/npp5/P7/1B2P3/1PP2PPP/R4RK1 b - - 2 21",
    "preMove": "Qd7",
    "solution": [
      "Rxg2+",
      "Kh1",
      "Rg1+",
      "Kxg1",
      "Rg8+",
      "Qg4",
      "Rxg4#"
    ]
  },
  {
    "id": "Y9AsT",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2129,
    "popularity": 84,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r1b2rk1/1p3ppp/p2pp3/6q1/3B4/5P2/P1P1NP1P/1R4RK b - - 0 23",
    "fen": "r1b2rk1/1p3ppp/p2pp3/3q4/3B4/5P2/P1P1NP1P/1R4RK w - - 1 24",
    "preMove": "Qd5",
    "solution": [
      "Rxg7+",
      "Kh8",
      "Rg8+",
      "Kxg8",
      "Rg1+",
      "Qg5",
      "Rxg5#"
    ]
  },
  {
    "id": "hhHHb",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2078,
    "popularity": 84,
    "description": "Corner the king in the kill box pattern. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "1r4rk/4b3/1qnpP2B/p1p4Q/4P3/2Pb4/P5PP/R4RK1 b - - 2 27",
    "fen": "1r4rk/4b3/1qnpP2B/p1p4Q/4b3/2P5/P5PP/R4RK1 w - - 0 28",
    "preMove": "Bxe4",
    "solution": [
      "Bg7+",
      "Kxg7",
      "Rf7#"
    ]
  },
  {
    "id": "kJV5f",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2099,
    "popularity": 84,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r4rk1/p1p2ppp/1pn1p3/3P4/2B1P3/1PB2q2/P1K2P1P/3R2R1 b - - 0 19",
    "fen": "r4rk1/p1p2ppp/1pn5/3p4/2B1P3/1PB2q2/P1K2P1P/3R2R1 w - - 0 20",
    "preMove": "exd5",
    "solution": [
      "Rxg7+",
      "Kh8",
      "Rg8+",
      "Kxg8",
      "Rg1+",
      "Qg2",
      "Rxg2#"
    ]
  },
  {
    "id": "qFiJW",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2095,
    "popularity": 84,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2r2rk1/pp1n1ppp/4pn2/4B3/3PQP2/8/PPP4P/2KR2R1 b - - 0 18",
    "fen": "2r2rk1/pp1n1ppp/4p3/4B3/3PnP2/8/PPP4P/2KR2R1 w - - 0 19",
    "preMove": "Nxe4",
    "solution": [
      "Rxg7+",
      "Kh8",
      "Rg8+",
      "Kxg8",
      "Rg1+",
      "Ng5",
      "Rxg5#"
    ]
  },
  {
    "id": "AcTIk",
    "title": "Mate in 4",
    "theme": "AdvancedPawn",
    "difficulty": "Medium",
    "rating": 1984,
    "popularity": 96,
    "description": "Trap the king between its own rooks. Find the forced checkmate.",
    "initialFen": "2k3rr/1ppb2q1/p2p4/3P4/2P1P3/1PN2B1p/P2QNR2/7K w - - 2 29",
    "fen": "2k3rr/1ppb2q1/p2p4/3P4/2P1P3/1PN1QB1p/P3NR2/7K b - - 3 29",
    "preMove": "Qe3",
    "solution": [
      "Qg2+",
      "Rxg2",
      "hxg2+",
      "Kg1",
      "Rh1+",
      "Kf2",
      "Rf1#"
    ]
  },
  {
    "id": "12Rty",
    "title": "Mate in 2",
    "theme": "Deflection",
    "difficulty": "Easy",
    "rating": 1102,
    "popularity": 95,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "1k3r2/bpp5/p1b4p/6p1/NP6/PB6/1BPr1nPP/3R1RK1 w - - 0 26",
    "fen": "1k3r2/bpp5/p1b4p/6p1/NP6/PB6/1BPR1nPP/5RK1 b - - 0 26",
    "preMove": "Rxd2",
    "solution": [
      "Nh3+",
      "Kh1",
      "Rxf1#"
    ]
  },
  {
    "id": "OCPAT",
    "title": "Mate in 5",
    "theme": "AdvancedPawn",
    "difficulty": "Medium",
    "rating": 1546,
    "popularity": 95,
    "description": "Find the forced checkmate.",
    "initialFen": "2r2r1k/4npb1/1q1p2pP/p3n1P1/4N3/1P6/3BBP2/1K1Q3R b - - 0 26",
    "fen": "2r2r1k/4npb1/1q1p2pP/4n1P1/p3N3/1P6/3BBP2/1K1Q3R w - - 0 27",
    "preMove": "a4",
    "solution": [
      "hxg7+",
      "Kxg7",
      "Rh7+",
      "Kxh7",
      "Qh1+",
      "Kg8",
      "Nf6+",
      "Kg7",
      "Qh6#"
    ]
  },
  {
    "id": "JPEm6",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2147,
    "popularity": 81,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2kr2r1/1bp1q1Qp/pp2p3/4P3/1P1N4/P1P5/5PPP/R4RK1 w - - 0 21",
    "fen": "2kr2r1/1bp1Q2p/pp2p3/4P3/1P1N4/P1P5/5PPP/R4RK1 b - - 0 21",
    "preMove": "Qxe7",
    "solution": [
      "Rxg2+",
      "Kh1",
      "Rg1+",
      "Kxg1",
      "Rg8+",
      "Qg5",
      "Rxg5#"
    ]
  },
  {
    "id": "POVfO",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2001,
    "popularity": 81,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r2q1rk1/5ppp/8/p1b5/1ppB1P2/3Q1P2/PPP4P/2KR2R1 b - - 0 21",
    "fen": "r2q1rk1/5ppp/8/p1b5/1p1B1P2/3p1P2/PPP4P/2KR2R1 w - - 0 22",
    "preMove": "cxd3",
    "solution": [
      "Rxg7+",
      "Kh8",
      "Rg8+",
      "Kxg8",
      "Rg1+",
      "Qg5",
      "Rxg5#"
    ]
  },
  {
    "id": "YGyY2",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2085,
    "popularity": 81,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "8/P1bp2pk/6qp/2Bb1p2/4r3/2PB1N1P/1Q3PP1/5RK1 w - - 0 26",
    "fen": "8/P1bp2pk/6qp/2Bb1p2/3Nr3/2PB3P/1Q3PP1/5RK1 b - - 1 26",
    "preMove": "Nd4",
    "solution": [
      "Qxg2+",
      "Kxg2",
      "Rg4#"
    ]
  },
  {
    "id": "jKRry",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1812,
    "popularity": 81,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "1k2r1r1/pPp2p1p/1nqbpBb1/Q7/8/P2P1N1P/2P1BPP1/1R3RK1 w - - 3 22",
    "fen": "1k2r1r1/pPp2p1p/1nqbpBb1/Q7/3N4/P2P3P/2P1BPP1/1R3RK1 b - - 4 22",
    "preMove": "Nd4",
    "solution": [
      "Qxg2+",
      "Kxg2",
      "Be4#"
    ]
  },
  {
    "id": "T6B0d",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2118,
    "popularity": 80,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2kr4/1p3pr1/4p3/Q2b2qp/4n3/P3PB2/1P3PPP/3R1RK1 w - - 0 20",
    "fen": "2kr4/1p3pr1/4p3/Q2b2qp/4B3/P3P3/1P3PPP/3R1RK1 b - - 0 20",
    "preMove": "Bxe4",
    "solution": [
      "Qxg2+",
      "Bxg2",
      "Rxg2+",
      "Kh1",
      "Rg1+",
      "Kxg1",
      "Rg8#"
    ]
  },
  {
    "id": "Av2nh",
    "title": "Mate in 5",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2064,
    "popularity": 91,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "1k3rr1/1b1pn2p/pp2p3/n1q5/2P1N3/P7/2BPQPPP/2R2RK1 w - - 0 23",
    "fen": "1k3rr1/1b1pn2p/pp2p3/n1N5/2P5/P7/2BPQPPP/2R2RK1 b - - 0 23",
    "preMove": "Nxc5",
    "solution": [
      "Rxg2+",
      "Kh1",
      "Rg1+",
      "Kxg1",
      "Rg8+",
      "Bg6",
      "Rxg6+",
      "Qg4",
      "Rxg4#"
    ]
  },
  {
    "id": "2oBZw",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2145,
    "popularity": 76,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r2qr1k1/2pnbp1p/p5pB/1p2P3/P4Q2/2Np1BP1/1P5P/5RK1 b - - 0 21",
    "fen": "1r1qr1k1/2pnbp1p/p5pB/1p2P3/P4Q2/2Np1BP1/1P5P/5RK1 w - - 1 22",
    "preMove": "Rb8",
    "solution": [
      "Qxf7+",
      "Kxf7",
      "Bd5#"
    ]
  },
  {
    "id": "96bKm",
    "title": "Mate in 5",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2038,
    "popularity": 63,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r4rk1/pbpN1ppp/3bpn2/1N6/2PB4/8/PP3P1P/2KR2R1 b - - 4 17",
    "fen": "r4rk1/pbpn1ppp/3bp3/1N6/2PB4/8/PP3P1P/2KR2R1 w - - 0 18",
    "preMove": "Nxd7",
    "solution": [
      "Rxg7+",
      "Kh8",
      "Rg8+",
      "Kxg8",
      "Rg1+",
      "Bg2",
      "Rxg2+",
      "Bg3",
      "Rxg3#"
    ]
  },
  {
    "id": "1ewsm",
    "title": "Mate in 4",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2023,
    "popularity": 75,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "4rrk1/p2bbppp/4qB2/2p5/3p4/3P1B2/PPPNQP1P/1K1R2R1 b - - 0 18",
    "fen": "4rrk1/p2bbppp/5B2/2p5/3p4/3P1B2/PPPNqP1P/1K1R2R1 w - - 0 19",
    "preMove": "Qxe2",
    "solution": [
      "Rxg7+",
      "Kh8",
      "Rg8+",
      "Kxg8",
      "Rg1+",
      "Bg4",
      "Rxg4#"
    ]
  },
  {
    "id": "jBn63",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1537,
    "popularity": 97,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "kr5r/pp4pp/6b1/2R1p3/Q5P1/5B1P/Pq3BK1/8 b - - 0 34",
    "fen": "kr5r/pp4pp/6b1/2R5/Q3p1P1/5B1P/Pq3BK1/8 w - - 0 35",
    "preMove": "e4",
    "solution": [
      "Qxa7+",
      "Kxa7",
      "Ra5#"
    ]
  },
  {
    "id": "Z0XHB",
    "title": "Mate in 5",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2086,
    "popularity": 59,
    "description": "Find the forced checkmate. Deliver the famous opera-style mate.",
    "initialFen": "4rrk1/ppp2ppp/2n1P3/3p4/7q/1P1P4/PBP4P/3R2RK b - - 0 22",
    "fen": "4rrk1/ppp3pp/2n1p3/3p4/7q/1P1P4/PBP4P/3R2RK w - - 0 23",
    "preMove": "fxe6",
    "solution": [
      "Rxg7+",
      "Kh8",
      "Rg8+",
      "Kxg8",
      "Rg1+",
      "Qg3",
      "Rxg3+",
      "Kf7",
      "Rg7#"
    ]
  },
  {
    "id": "YKf1V",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2096,
    "popularity": 69,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2r1r1k1/pb1qbp1n/1p4pB/3p3p/3P1Q2/1P3B1P/n1P1N1PN/4RRK1 b - - 7 27",
    "fen": "4r1k1/pb1qbp1n/1p4pB/3p3p/3P1Q2/1P3B1P/n1r1N1PN/4RRK1 w - - 0 28",
    "preMove": "Rxc2",
    "solution": [
      "Qxf7+",
      "Kxf7",
      "Bxd5#"
    ]
  },
  {
    "id": "eGyNJ",
    "title": "Mate in 5",
    "theme": "Clearance",
    "difficulty": "Easy",
    "rating": 1460,
    "popularity": 44,
    "description": "Find the forced checkmate.",
    "initialFen": "r1b2rk1/pp3ppp/4pQ2/4N3/3B4/3R4/qPP2PPP/3R2K1 b - - 0 17",
    "fen": "r1b2rk1/pp3p1p/4pp2/4N3/3B4/3R4/qPP2PPP/3R2K1 w - - 0 18",
    "preMove": "gxf6",
    "solution": [
      "Rg3+",
      "Kh8",
      "Nxf7+",
      "Rxf7",
      "Bxf6+",
      "Rxf6",
      "Rd8+",
      "Rf8",
      "Rxf8#"
    ]
  },
  {
    "id": "3Jyhe",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2097,
    "popularity": 93,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver the famous opera-style mate.",
    "initialFen": "2kr1q1r/1p4p1/p1Bb1n2/7p/1Q1p1B2/6PP/PP3P2/2R1R1K1 b - - 2 22",
    "fen": "2kr1q1r/1p4p1/p1B2n2/7p/1b1p1B2/6PP/PP3P2/2R1R1K1 w - - 0 23",
    "preMove": "Bxb4",
    "solution": [
      "Bd7+",
      "Kxd7",
      "Rc7#"
    ]
  },
  {
    "id": "P4R5S",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2176,
    "popularity": 92,
    "description": "Find the forced checkmate. Find the forced mate in two. Finish with a swallow's tail queen sacrifice mate.",
    "initialFen": "r4k1r/pB3ppp/4pn2/3pq2b/Q7/2P1b2P/PP1N1PP1/R1B1K2R w KQ - 0 14",
    "fen": "r4k1r/pB3ppp/4pn2/3pq2b/Q1N5/2P1b2P/PP3PP1/R1B1K2R b KQ - 1 14",
    "preMove": "Nc4",
    "solution": [
      "Bd2+",
      "Kxd2",
      "Qe2#"
    ]
  },
  {
    "id": "WqorW",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1919,
    "popularity": 67,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "4r1nk/1pqr1ppp/p1p5/4p1P1/2PPQ3/P1PR4/2B2P1P/R5K1 b - - 1 26",
    "fen": "4r1nk/1pqr2pp/p1p2p2/4p1P1/2PPQ3/P1PR4/2B2P1P/R5K1 w - - 0 27",
    "preMove": "f6",
    "solution": [
      "Qxh7+",
      "Kxh7",
      "Rh3#"
    ]
  },
  {
    "id": "PCbDm",
    "title": "Mate in 2",
    "theme": "DiscoveredCheck",
    "difficulty": "Hard",
    "rating": 2118,
    "popularity": 77,
    "description": "Find the forced checkmate. Find the forced mate in two. Finish with the classic Morphy's mate pattern. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2kr3r/pbpp1ppp/8/q2Pp3/2B1N3/5N2/5PPP/1RR3K1 b - - 0 18",
    "fen": "2kr3r/p1pp1ppp/8/q2bp3/2B1N3/5N2/5PPP/1RR3K1 w - - 0 19",
    "preMove": "Bxd5",
    "solution": [
      "Nd6+",
      "cxd6",
      "Ba6#"
    ]
  },
  {
    "id": "VrUhP",
    "title": "Mate in 2",
    "theme": "Deflection",
    "difficulty": "Medium",
    "rating": 1929,
    "popularity": 39,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r4rk1/ppq2pp1/1np5/3b2PB/3P1P1R/P1P1p1P1/2Q5/2R1K3 b - - 2 20",
    "fen": "r4rk1/ppq2pp1/1np5/3b2PB/3P1P1R/P1P3P1/2Q1p3/2R1K3 w - - 0 21",
    "preMove": "e2",
    "solution": [
      "Qh7+",
      "Kxh7",
      "Bxf7#"
    ]
  },
  {
    "id": "SX7yN",
    "title": "Mate in 2",
    "theme": "Deflection",
    "difficulty": "Medium",
    "rating": 1926,
    "popularity": 38,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "3r1rk1/ppq2ppp/1b2p3/4P2B/3pQ3/1P5R/PB4PP/7K b - - 1 22",
    "fen": "3r1rk1/pp3ppp/1bq1p3/4P2B/3pQ3/1P5R/PB4PP/7K w - - 2 23",
    "preMove": "Qc6",
    "solution": [
      "Qxh7+",
      "Kxh7",
      "Bxf7#"
    ]
  },
  {
    "id": "BnHfj",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1800,
    "popularity": 86,
    "description": "Corner the king in the kill box pattern. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "2r3rk/2qbb3/p2p3B/1p1Pp2Q/8/6P1/PPP4P/R4R1K b - - 4 24",
    "fen": "2r3rk/2q1b3/p2p3B/1p1Pp2Q/6b1/6P1/PPP4P/R4R1K w - - 5 25",
    "preMove": "Bg4",
    "solution": [
      "Bg7+",
      "Kxg7",
      "Rf7#"
    ]
  },
  {
    "id": "6s0ut",
    "title": "Mate in 5",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2133,
    "popularity": 47,
    "description": "Trap the king in the corner. Find the forced checkmate.",
    "initialFen": "r7/5k2/pbp5/1p3n1N/3n1Bpq/P7/1P4PP/R2Q1R1K w - - 1 28",
    "fen": "r7/5k2/pbp5/1p3n2/3n1Bpq/P5N1/1P4PP/R2Q1R1K b - - 2 28",
    "preMove": "Ng3",
    "solution": [
      "Qxh2+",
      "Kxh2",
      "Rh8+",
      "Bh6",
      "Rxh6+",
      "Nh5",
      "Rxh5+",
      "Kg1",
      "Nf3#"
    ]
  },
  {
    "id": "GItbv",
    "title": "Mate in 2",
    "theme": "Clearance",
    "difficulty": "Medium",
    "rating": 1873,
    "popularity": 59,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2kr2nr/Bpp2pp1/3p1b1p/3Np3/2B1P3/3P2P1/PPn2PK1/2R5 b - - 2 19",
    "fen": "2kr2nr/Bpp2pp1/3p1b1p/3Np3/2BnP3/3P2P1/PP3PK1/2R5 w - - 3 20",
    "preMove": "Nd4",
    "solution": [
      "Nb6+",
      "cxb6",
      "Be6#"
    ]
  },
  {
    "id": "dnvkJ",
    "title": "Mate in 2",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 1229,
    "popularity": 94,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2kr3r/ppp2pp1/3b2p1/8/1n4P1/P3B2P/qPP1QPB1/2KR3R w - - 1 17",
    "fen": "2kr3r/ppp2pp1/3b2p1/8/1P4P1/4B2P/qPP1QPB1/2KR3R b - - 0 17",
    "preMove": "axb4",
    "solution": [
      "Qa1+",
      "Kd2",
      "Bxb4#"
    ]
  },
  {
    "id": "KcA3E",
    "title": "Mate in 5",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1686,
    "popularity": 78,
    "description": "Find the forced checkmate.",
    "initialFen": "r1bq3k/pp3rpB/2nbp3/2pp4/3P4/2P1P1P1/PP1N1PP1/R2QK2R b KQ - 0 12",
    "fen": "r1bq3k/pp4pB/2nbpr2/2pp4/3P4/2P1P1P1/PP1N1PP1/R2QK2R w KQ - 1 13",
    "preMove": "Rf6",
    "solution": [
      "Bg6+",
      "Kg8",
      "Rh8+",
      "Kxh8",
      "Qh5+",
      "Kg8",
      "Qh7+",
      "Kf8",
      "Qh8+",
      "Ke7",
      "Qxg7+",
      "Rf7",
      "Qxf7#"
    ]
  },
  {
    "id": "KmbuF",
    "title": "Mate in 2",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 1061,
    "popularity": 89,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2kr3r/1pp1q3/p3bn2/QN2p1p1/4PpP1/3B1P2/PPP5/1K1R2R1 b - - 1 23",
    "fen": "2kr3r/1pp1q3/4bn2/Qp2p1p1/4PpP1/3B1P2/PPP5/1K1R2R1 w - - 0 24",
    "preMove": "axb5",
    "solution": [
      "Qa8+",
      "Kd7",
      "Bxb5#"
    ]
  },
  {
    "id": "Nldij",
    "title": "Mate in 5",
    "theme": "AttackingF2F7",
    "difficulty": "Hard",
    "rating": 2109,
    "popularity": 89,
    "description": "Break through with rooks on the seventh rank. Find the forced checkmate.",
    "initialFen": "1r2krR1/2q2p1p/4pP2/1b1pP2Q/1p6/pP6/P1P4P/1K4R1 b - - 1 27",
    "fen": "1r2krR1/5p1p/4pP2/1b1pP2Q/1p6/pPq5/P1P4P/1K4R1 w - - 2 28",
    "preMove": "Qc3",
    "solution": [
      "Qxf7+",
      "Kxf7",
      "R1g7+",
      "Ke8",
      "Re7+",
      "Kd8",
      "Rxf8+",
      "Be8",
      "Rfxe8#"
    ]
  },
  {
    "id": "a9dkk",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1823,
    "popularity": 46,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "3rrnk1/1bq2pp1/2p1p2p/pp1PR3/2P3Q1/1P6/PBB2PPP/R5K1 b - - 0 22",
    "fen": "3rrnk1/1bq2pp1/4p2p/pp1pR3/2P3Q1/1P6/PBB2PPP/R5K1 w - - 0 23",
    "preMove": "cxd5",
    "solution": [
      "Qxg7+",
      "Kxg7",
      "Rg5#"
    ]
  },
  {
    "id": "hIMvU",
    "title": "Mate in 5",
    "theme": "DiscoveredAttack",
    "difficulty": "Hard",
    "rating": 2040,
    "popularity": 93,
    "description": "Deliver a hook mate with rook, knight, and pawn. Find the forced checkmate. Deliver the famous opera-style mate.",
    "initialFen": "2r4k/3R4/7N/3B4/5P2/7P/2p2KP1/1r6 b - - 0 51",
    "fen": "2r4k/3R4/7N/3B4/5P2/7P/5KP1/1rq5 w - - 0 52",
    "preMove": "c1=Q",
    "solution": [
      "Nf7+",
      "Kg7",
      "Ng5+",
      "Kf6",
      "Rf7+",
      "Kg6",
      "Be4+",
      "Kh6",
      "Rh7#"
    ]
  },
  {
    "id": "rPTxV",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1789,
    "popularity": 93,
    "description": "Corner the king in the kill box pattern. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r1b3nk/pppqb3/2np3B/7Q/3PP3/2P5/PP5p/RN3R1K b - - 0 15",
    "fen": "r1b3nk/ppp1b3/2np3B/7Q/3PP1q1/2P5/PP5p/RN3R1K w - - 1 16",
    "preMove": "Qg4",
    "solution": [
      "Bg7+",
      "Kxg7",
      "Rf7#"
    ]
  },
  {
    "id": "ZP7Yx",
    "title": "Mate in 2",
    "theme": "ArabianMate",
    "difficulty": "Medium",
    "rating": 1896,
    "popularity": 92,
    "description": "Deliver an Arabian mate with rook and knight. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r1b2n1k/pp2q1rn/3p1N1Q/3P1pP1/7R/3B4/1P3P1P/5R1K b - - 4 27",
    "fen": "r1b2n1k/pp2q2n/3p1NrQ/3P1pP1/7R/3B4/1P3P1P/5R1K w - - 5 28",
    "preMove": "Rg6",
    "solution": [
      "Qxf8+",
      "Qxf8",
      "Rxh7#"
    ]
  },
  {
    "id": "M7UGo",
    "title": "Mate in 2",
    "theme": "Clearance",
    "difficulty": "Hard",
    "rating": 2023,
    "popularity": 86,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r1b2rk1/ppq3pp/3p1p2/2b5/3nPQ2/P2B4/1PP2PPP/1NKR2NR w - - 5 16",
    "fen": "r1b2rk1/ppq3pp/3p1p2/2b5/3nP2Q/P2B4/1PP2PPP/1NKR2NR b - - 6 16",
    "preMove": "Qh4",
    "solution": [
      "Nb3+",
      "cxb3",
      "Be3#"
    ]
  },
  {
    "id": "IGYVl",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1774,
    "popularity": 78,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r1bq1rk1/ppp1p1bp/2np2pQ/8/2B1P3/7N/PPP2PP1/RN2K2R b KQ - 3 12",
    "fen": "r1bq1r1k/ppp1p1bp/2np2pQ/8/2B1P3/7N/PPP2PP1/RN2K2R w KQ - 4 13",
    "preMove": "Kh8",
    "solution": [
      "Qxh7+",
      "Kxh7",
      "Ng5#"
    ]
  },
  {
    "id": "yOtv2",
    "title": "Mate in 2",
    "theme": "BlindSwineMate",
    "difficulty": "Medium",
    "rating": 1980,
    "popularity": 96,
    "description": "Break through with rooks on the seventh rank. Find the forced checkmate. Find the forced mate in two. Deliver the famous opera-style mate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "5rk1/1pp3pp/pbnp2q1/4p3/1P4bN/P1PP2P1/4Br1P/2RQRNK1 w - - 0 20",
    "fen": "5rk1/1pp3pp/pbnp2N1/4p3/1P4b1/P1PP2P1/4Br1P/2RQRNK1 b - - 0 20",
    "preMove": "Nxg6",
    "solution": [
      "Rxf1+",
      "Kg2",
      "R8f2#"
    ]
  },
  {
    "id": "2mFpg",
    "title": "Mate in 2",
    "theme": "BlindSwineMate",
    "difficulty": "Medium",
    "rating": 1533,
    "popularity": 94,
    "description": "Break through with rooks on the seventh rank. Find the forced checkmate. Find the forced mate in two. Deliver the famous opera-style mate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "5rk1/p1pbq1pp/8/2b1p1B1/4Q3/1P1P2P1/P1P2r1P/R4RK1 w - - 0 21",
    "fen": "5rk1/p1pbB1pp/8/2b1p3/4Q3/1P1P2P1/P1P2r1P/R4RK1 b - - 0 21",
    "preMove": "Bxe7",
    "solution": [
      "Rxf1+",
      "Kg2",
      "R8f2#"
    ]
  },
  {
    "id": "9D312",
    "title": "Mate in 5",
    "theme": "Clearance",
    "difficulty": "Medium",
    "rating": 1700,
    "popularity": 93,
    "description": "Find the forced checkmate.",
    "initialFen": "7r/pp2p1k1/3q2p1/2p1b1N1/5n2/7Q/PPPP1PP1/R1B2RK1 w - - 1 20",
    "fen": "7r/pp2p1k1/3q2p1/2p1b1N1/5n2/5Q2/PPPP1PP1/R1B2RK1 b - - 2 20",
    "preMove": "Qf3",
    "solution": [
      "Ne2+",
      "Qxe2",
      "Bh2+",
      "Kh1",
      "Bg1+",
      "Qh5",
      "Rxh5+",
      "Kxg1",
      "Qh2#"
    ]
  },
  {
    "id": "aM3ek",
    "title": "Mate in 2",
    "theme": "Clearance",
    "difficulty": "Easy",
    "rating": 1369,
    "popularity": 94,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "3r2kr/1pR3Np/pN6/q2pP3/8/6Q1/PP1b1PPP/6K1 b - - 4 25",
    "fen": "3r2kr/1pR3Np/pN6/q2pP3/5b2/6Q1/PP3PPP/6K1 w - - 5 26",
    "preMove": "Bf4",
    "solution": [
      "Ne6+",
      "Bxg3",
      "Rg7#"
    ]
  },
  {
    "id": "mWqab",
    "title": "Mate in 5",
    "theme": "CornerMate",
    "difficulty": "Hard",
    "rating": 2177,
    "popularity": 94,
    "description": "Trap the king in the corner. Find the forced checkmate.",
    "initialFen": "r3k2r/pp1qppb1/2p4n/2P1n3/4PB2/2N2BP1/PP3PK1/R2Q1R2 w kq - 5 21",
    "fen": "r3k2r/pp1qppb1/2p4n/2P1n3/Q3PB2/2N2BP1/PP3PK1/R4R2 b kq - 6 21",
    "preMove": "Qa4",
    "solution": [
      "Qh3+",
      "Kxh3",
      "Nhg4+",
      "Bh6",
      "Rxh6+",
      "Kg2",
      "Rh2+",
      "Kg1",
      "Nxf3#"
    ]
  },
  {
    "id": "k0RNT",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2088,
    "popularity": 76,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver the famous opera-style mate.",
    "initialFen": "6R1/rN1kb2p/8/1p1p4/p3p2P/K1P3B1/PP3r2/2R5 w - - 6 38",
    "fen": "6R1/rN1kb2p/8/1p1p4/pP2p2P/K1P3B1/P4r2/2R5 b - b3 0 38",
    "preMove": "b4",
    "solution": [
      "axb3+",
      "Kxb3",
      "Ra3#"
    ]
  },
  {
    "id": "uSzIy",
    "title": "Mate in 5",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2183,
    "popularity": 87,
    "description": "Find the forced checkmate.",
    "initialFen": "r1b2r1k/2qn2b1/p1p1Q3/1pPpp2B/3P4/P1P1P2R/6PP/R1B3K1 b - - 3 20",
    "fen": "r1b2r1k/2q3b1/p1p1Qn2/1pPpp2B/3P4/P1P1P2R/6PP/R1B3K1 w - - 4 21",
    "preMove": "Nf6",
    "solution": [
      "Bf7+",
      "Nh7",
      "Rxh7+",
      "Kxh7",
      "Qg6+",
      "Kh8",
      "Qh5+",
      "Bh6",
      "Qxh6#"
    ]
  },
  {
    "id": "h6zIg",
    "title": "Mate in 2",
    "theme": "Deflection",
    "difficulty": "Medium",
    "rating": 1782,
    "popularity": 98,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r4rk1/5pp1/4p3/2qp3B/1pP2P2/1p1QN1P1/P7/2K4R b - - 1 27",
    "fen": "r4rk1/5pp1/4p3/2qp3B/1pP2P2/3QN1P1/p7/2K4R w - - 0 28",
    "preMove": "bxa2",
    "solution": [
      "Qh7+",
      "Kxh7",
      "Bxf7#"
    ]
  },
  {
    "id": "SI64s",
    "title": "Mate in 2",
    "theme": "BlindSwineMate",
    "difficulty": "Medium",
    "rating": 1807,
    "popularity": 72,
    "description": "Break through with rooks on the seventh rank. Find the forced checkmate. Find the forced mate in two. Deliver the famous opera-style mate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "5rk1/6pp/1p2b3/3p2q1/1P1bN3/PQ1p2P1/5r1P/2R1RBK1 w - - 1 30",
    "fen": "5rk1/6pp/1p2b3/3p2N1/1P1b4/PQ1p2P1/5r1P/2R1RBK1 b - - 0 30",
    "preMove": "Nxg5",
    "solution": [
      "Rxf1+",
      "Kg2",
      "R8f2#"
    ]
  },
  {
    "id": "goUxL",
    "title": "Mate in 2",
    "theme": "Deflection",
    "difficulty": "Easy",
    "rating": 1445,
    "popularity": 96,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r6r/1b3pkN/p4P2/2p1p3/3pP2R/8/P1P1B1P1/7K b - - 0 28",
    "fen": "r6r/1b3p1N/p4Pk1/2p1p3/3pP2R/8/P1P1B1P1/7K w - - 1 29",
    "preMove": "Kg6",
    "solution": [
      "Bh5+",
      "Kxh7",
      "Bxf7#"
    ]
  },
  {
    "id": "yOLMH",
    "title": "Mate in 2",
    "theme": "Clearance",
    "difficulty": "Medium",
    "rating": 1989,
    "popularity": 96,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver the famous opera-style mate.",
    "initialFen": "6r1/ppq2b1k/3p1RnB/3pp2Q/2P1P3/2P5/P6P/7K b - - 3 32",
    "fen": "6rn/ppq2b1k/3p1R1B/3pp2Q/2P1P3/2P5/P6P/7K w - - 4 33",
    "preMove": "Nh8",
    "solution": [
      "Bf8+",
      "Bxh5",
      "Rh6#"
    ]
  },
  {
    "id": "POIwi",
    "title": "Mate in 2",
    "theme": "Clearance",
    "difficulty": "Hard",
    "rating": 2062,
    "popularity": 95,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver the famous opera-style mate.",
    "initialFen": "2r1q1r1/1b2bNpk/pn2R2B/1p1n3Q/3P4/P1N4P/1P3PP1/2R3K1 b - - 0 23",
    "fen": "2r1q1r1/1b2bN1k/pn2R1pB/1p1n3Q/3P4/P1N4P/1P3PP1/2R3K1 w - - 0 24",
    "preMove": "g6",
    "solution": [
      "Bf8+",
      "gxh5",
      "Rh6#"
    ]
  },
  {
    "id": "TGilU",
    "title": "Mate in 2",
    "theme": "Deflection",
    "difficulty": "Medium",
    "rating": 1546,
    "popularity": 95,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r1bq1r2/ppp2pk1/2np1nP1/4p1Q1/2B1P1pB/2PP4/P1P2PP1/R3K2R b KQ - 2 16",
    "fen": "r1bq1r2/ppp3k1/2np1np1/4p1Q1/2B1P1pB/2PP4/P1P2PP1/R3K2R w KQ - 0 17",
    "preMove": "fxg6",
    "solution": [
      "Qh6+",
      "Kxh6",
      "Bxf6#"
    ]
  },
  {
    "id": "Wurww",
    "title": "Mate in 2",
    "theme": "BlindSwineMate",
    "difficulty": "Hard",
    "rating": 2073,
    "popularity": 95,
    "description": "Break through with rooks on the seventh rank. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "3r2k1/6pp/p4p2/1p6/1Pb5/P2rPP2/1BR1KP1P/7R w - - 1 25",
    "fen": "3r2k1/6pp/p4p2/1p6/1Pb5/P2rPP2/1BR1KP1P/2R5 b - - 2 25",
    "preMove": "Rhc1",
    "solution": [
      "Rd1+",
      "Rxc4",
      "R8d2#"
    ]
  },
  {
    "id": "cNbTO",
    "title": "Mate in 5",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2129,
    "popularity": 95,
    "description": "Find the forced checkmate.",
    "initialFen": "r1r3k1/5ppp/1n6/4Q3/8/2PPK3/nq2BP1P/R5R1 b - - 1 27",
    "fen": "r1r3k1/5ppp/1n6/4Q3/8/2qPK3/n3BP1P/R5R1 w - - 0 28",
    "preMove": "Qxc3",
    "solution": [
      "Rxg7+",
      "Kh8",
      "Rg8+",
      "Kxg8",
      "Rg1+",
      "Kf8",
      "Qd6+",
      "Ke8",
      "Rg8#"
    ]
  },
  {
    "id": "vF6kA",
    "title": "Mate in 5",
    "theme": "Clearance",
    "difficulty": "Hard",
    "rating": 2176,
    "popularity": 68,
    "description": "Find the forced checkmate.",
    "initialFen": "r1bqr1k1/3n2p1/p3p1Np/3pN1b1/1p1P4/2PB4/PPQ1K1P1/R4R2 b - - 1 21",
    "fen": "r1bqr1k1/3n2p1/p3p1Np/3pN1b1/3P4/2pB4/PPQ1K1P1/R4R2 w - - 0 22",
    "preMove": "bxc3",
    "solution": [
      "Ne7+",
      "Rxe7",
      "Bh7+",
      "Kh8",
      "Ng6+",
      "Kxh7",
      "Nf8+",
      "Kh8",
      "Qh7#"
    ]
  },
  {
    "id": "SAsN4",
    "title": "Mate in 5",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1803,
    "popularity": 91,
    "description": "Find the forced checkmate.",
    "initialFen": "r4r1k/3Q1ppp/p5N1/n3p1PP/7R/2q1Bb2/2P5/2KR1B2 b - - 1 22",
    "fen": "r4r1k/3Q1pp1/p5p1/n3p1PP/7R/2q1Bb2/2P5/2KR1B2 w - - 0 23",
    "preMove": "hxg6",
    "solution": [
      "hxg6+",
      "Kg8",
      "Rh8+",
      "Kxh8",
      "Qh3+",
      "Bh5",
      "Qxh5+",
      "Kg8",
      "Qh7#"
    ]
  },
  {
    "id": "Zi4iv",
    "title": "Mate in 2",
    "theme": "DiscoveredAttack",
    "difficulty": "Hard",
    "rating": 2057,
    "popularity": 91,
    "description": "Find the forced checkmate. Find the forced mate in two. Finish with a swallow's tail queen sacrifice mate.",
    "initialFen": "8/1p4pp/1k6/2p2b2/1NP5/1P2P3/P1Kn1rPP/q2RQB1R w - - 0 27",
    "fen": "8/1p4pp/1k6/2p2b2/1NP5/1P1BP3/P1Kn1rPP/q2RQ2R b - - 1 27",
    "preMove": "Bd3",
    "solution": [
      "Nxc4+",
      "Qxf2",
      "Qb2#"
    ]
  },
  {
    "id": "YQmX9",
    "title": "Mate in 5",
    "theme": "DiscoveredAttack",
    "difficulty": "Medium",
    "rating": 1740,
    "popularity": 90,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2r2b2/p1r4p/2pR2pk/2B1pN2/6R1/1Pn3P1/P4P1P/5K2 b - - 12 32",
    "fen": "2r2b2/p1r4p/2pR2p1/2B1pN1k/6R1/1Pn3P1/P4P1P/5K2 w - - 13 33",
    "preMove": "Kh5",
    "solution": [
      "Rh4+",
      "Kg5",
      "Be3+",
      "Kxf5",
      "g4+",
      "Ke4",
      "g5+",
      "Kf5",
      "Rf6#"
    ]
  },
  {
    "id": "bnyTT",
    "title": "Mate in 2",
    "theme": "DiscoveredAttack",
    "difficulty": "Hard",
    "rating": 2064,
    "popularity": 90,
    "description": "Find the forced checkmate. Find the forced mate in two. Finish with the classic Morphy's mate pattern.",
    "initialFen": "1r3rk1/3npp1R/p1p5/6N1/3P4/qP6/P1B5/1K4R1 b - - 2 30",
    "fen": "1r3rk1/3np2R/p1p5/5pN1/3P4/qP6/P1B5/1K4R1 w - - 0 31",
    "preMove": "f5",
    "solution": [
      "Nf7+",
      "Kxh7",
      "Bxf5#"
    ]
  },
  {
    "id": "EgeKN",
    "title": "Mate in 2",
    "theme": "DiscoveredCheck",
    "difficulty": "Medium",
    "rating": 1663,
    "popularity": 88,
    "description": "Deliver a hook mate with rook, knight, and pawn. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "1k1B4/pp3p1p/3p1n1r/3Pp2n/4P3/1Q4bq/P3BPK1/RR6 w - - 2 27",
    "fen": "1k1B4/pp3p1p/3p1n1r/3Pp2n/4P3/1Q4bK/P3BP2/RR6 b - - 0 27",
    "preMove": "Kxh3",
    "solution": [
      "Nf4+",
      "Kxg3",
      "Rh3#"
    ]
  },
  {
    "id": "BCAxr",
    "title": "Mate in 2",
    "theme": "CollinearMove",
    "difficulty": "Medium",
    "rating": 1530,
    "popularity": 96,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r4bk1/1p1b2p1/1q2ppQ1/3p3B/3P1P2/1PP1P2R/6PK/q2N4 b - - 3 32",
    "fen": "r3bbk1/1p4p1/1q2ppQ1/3p3B/3P1P2/1PP1P2R/6PK/q2N4 w - - 4 33",
    "preMove": "Be8",
    "solution": [
      "Qh7+",
      "Kxh7",
      "Bf7#"
    ]
  },
  {
    "id": "rp7AS",
    "title": "Mate in 2",
    "theme": "AdvancedPawn",
    "difficulty": "Easy",
    "rating": 1464,
    "popularity": 96,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "4r2k/2p2r1R/p2n1Pp1/1p2Q1P1/1q2P3/1P1B4/P1P1K3/7R b - - 0 30",
    "fen": "4r2k/2p4r/p2n1Pp1/1p2Q1P1/1q2P3/1P1B4/P1P1K3/7R w - - 0 31",
    "preMove": "Rxh7",
    "solution": [
      "f7+",
      "Rxe5",
      "f8=Q#"
    ]
  },
  {
    "id": "qDQb8",
    "title": "Mate in 2",
    "theme": "CollinearMove",
    "difficulty": "Medium",
    "rating": 1711,
    "popularity": 95,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "5rk1/2pb2p1/p2qrpQ1/1p4pB/4P3/1P1P3R/2P3PP/1R5K b - - 7 33",
    "fen": "4brk1/2p3p1/p2qrpQ1/1p4pB/4P3/1P1P3R/2P3PP/1R5K w - - 8 34",
    "preMove": "Be8",
    "solution": [
      "Qh7+",
      "Kxh7",
      "Bf7#"
    ]
  },
  {
    "id": "VKWCQ",
    "title": "Mate in 5",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2102,
    "popularity": 94,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "1r4rk/pb2R2p/8/1N3Q2/3n4/8/PPP2PPP/5RK1 w - - 3 25",
    "fen": "1r4rk/pb2R2p/8/5Q2/3N4/8/PPP2PPP/5RK1 b - - 0 25",
    "preMove": "Nxd4",
    "solution": [
      "Rxg2+",
      "Kh1",
      "Rg1+",
      "Kxg1",
      "Rg8+",
      "Rg7",
      "Rxg7+",
      "Qg4",
      "Rxg4#"
    ]
  },
  {
    "id": "WpoZA",
    "title": "Mate in 5",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2157,
    "popularity": 94,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "k3r1r1/pb5p/1pRQ4/4P3/8/4P3/PP3PPP/5RK1 w - - 3 23",
    "fen": "k3r1r1/pbR4p/1p1Q4/4P3/8/4P3/PP3PPP/5RK1 b - - 4 23",
    "preMove": "Rc7",
    "solution": [
      "Rxg2+",
      "Kh1",
      "Rg1+",
      "Kxg1",
      "Rg8+",
      "Rg7",
      "Rxg7+",
      "Qg6",
      "Rxg6#"
    ]
  },
  {
    "id": "oJ7ei",
    "title": "Mate in 5",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2076,
    "popularity": 94,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r1b2rk1/p3bppp/2p5/3p4/N7/8/PB3P1P/1K1R2R1 b - - 7 19",
    "fen": "1rb2rk1/p3bppp/2p5/3p4/N7/8/PB3P1P/1K1R2R1 w - - 8 20",
    "preMove": "Rb8",
    "solution": [
      "Rxg7+",
      "Kh8",
      "Rg8+",
      "Kxg8",
      "Rg1+",
      "Bg4",
      "Rxg4+",
      "Bg5",
      "Rxg5#"
    ]
  },
  {
    "id": "NMbuK",
    "title": "Mate in 2",
    "theme": "AdvancedPawn",
    "difficulty": "Easy",
    "rating": 939,
    "popularity": 93,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "7Q/6R1/p6B/1p3k2/3pb3/1P1p4/PP6/1K3q2 w - - 0 45",
    "fen": "7Q/6R1/p7/1p3k2/3pb3/1P1p4/PP6/1KB2q2 b - - 1 45",
    "preMove": "Bc1",
    "solution": [
      "d2+",
      "Ka1",
      "dxc1=Q#"
    ]
  },
  {
    "id": "YyGCs",
    "title": "Mate in 2",
    "theme": "DiscoveredCheck",
    "difficulty": "Medium",
    "rating": 1865,
    "popularity": 93,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "3rr1k1/ppp2pp1/2nb1n1p/1N6/1P6/P2BPN2/2P1QP2/R1BRK2q w - - 5 18",
    "fen": "3rr1k1/ppp2pp1/2nb1n1p/1N6/1P6/P2BPN2/2PKQP2/R1BR3q b - - 6 18",
    "preMove": "Kd2",
    "solution": [
      "Ne4+",
      "Bxe4",
      "Bxb4#"
    ]
  },
  {
    "id": "ggWSM",
    "title": "Mate in 5",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2148,
    "popularity": 93,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r4rk1/p4ppp/3bp3/3n4/3B2n1/P7/1P3P1P/2R3RK b - - 6 23",
    "fen": "r4rk1/p4ppp/3bp3/3n4/3B4/P7/1P3P1n/2R3RK w - - 0 24",
    "preMove": "Nxh2",
    "solution": [
      "Rxg7+",
      "Kh8",
      "Rg8+",
      "Kxg8",
      "Rg1+",
      "Bg3",
      "Rxg3+",
      "Ng4",
      "Rxg4#"
    ]
  },
  {
    "id": "iYL2W",
    "title": "Mate in 5",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2172,
    "popularity": 93,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "3kr1r1/Nb5p/1p2qp2/3P4/2P2R2/8/P1Q2PPP/5RK1 w - - 1 30",
    "fen": "3kr1r1/Nb5p/1p2Pp2/8/2P2R2/8/P1Q2PPP/5RK1 b - - 0 30",
    "preMove": "dxe6",
    "solution": [
      "Rxg2+",
      "Kh1",
      "Rg1+",
      "Kxg1",
      "Rg8+",
      "Qg6",
      "Rxg6+",
      "Rg4",
      "Rxg4#"
    ]
  },
  {
    "id": "tCRLw",
    "title": "Mate in 2",
    "theme": "Clearance",
    "difficulty": "Medium",
    "rating": 1896,
    "popularity": 80,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "3rk1nr/p3pp1p/1bB3p1/6N1/5B2/1P6/P3K2P/5R2 b k - 0 21",
    "fen": "3r1knr/p3pp1p/1bB3p1/6N1/5B2/1P6/P3K2P/5R2 w - - 1 22",
    "preMove": "Kf8",
    "solution": [
      "Ne6+",
      "fxe6",
      "Bh6#"
    ]
  },
  {
    "id": "6AnqY",
    "title": "Mate in 5",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2009,
    "popularity": 92,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "5rk1/5ppp/p7/6q1/8/1P5P/PBr5/3R2RK b - - 1 32",
    "fen": "5rk1/5ppp/p7/8/5q2/1P5P/PBr5/3R2RK w - - 2 33",
    "preMove": "Qf4",
    "solution": [
      "Rxg7+",
      "Kh8",
      "Rg8+",
      "Kxg8",
      "Rg1+",
      "Rg2",
      "Rxg2+",
      "Qg5",
      "Rxg5#"
    ]
  },
  {
    "id": "X82rv",
    "title": "Mate in 5",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2063,
    "popularity": 92,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r6k/ppR4p/2bP4/4q3/6r1/4PN2/PP3PPP/5RK1 w - - 0 26",
    "fen": "r6k/ppR4p/2bP4/4N3/6r1/4P3/PP3PPP/5RK1 b - - 0 26",
    "preMove": "Nxe5",
    "solution": [
      "Rxg2+",
      "Kh1",
      "Rg1+",
      "Kxg1",
      "Rg8+",
      "Rg7",
      "Rxg7+",
      "Ng6+",
      "Rxg6#"
    ]
  },
  {
    "id": "9muUn",
    "title": "Mate in 5",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2153,
    "popularity": 91,
    "description": "Find the forced checkmate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "3r2r1/1b1NQ3/p7/kpp1pB2/8/Pn2P3/5PPP/5RK1 w - - 0 42",
    "fen": "3r2r1/1b2Q3/p7/kpN1pB2/8/Pn2P3/5PPP/5RK1 b - - 0 42",
    "preMove": "Nxc5",
    "solution": [
      "Rxg2+",
      "Kh1",
      "Rg1+",
      "Kxg1",
      "Rg8+",
      "Bg6",
      "Rxg6+",
      "Qg5",
      "Rxg5#"
    ]
  },
  {
    "id": "sQPPe",
    "title": "Mate in 2",
    "theme": "AdvancedPawn",
    "difficulty": "Easy",
    "rating": 1064,
    "popularity": 90,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "6rk/1Q5p/pq2pP2/2p1B3/8/1P1r4/P1P2PP1/4R1K1 b - - 0 27",
    "fen": "6rk/1q5p/p3pP2/2p1B3/8/1P1r4/P1P2PP1/4R1K1 w - - 0 28",
    "preMove": "Qxb7",
    "solution": [
      "f7+",
      "Rg7",
      "f8=Q#"
    ]
  },
  {
    "id": "ObpLE",
    "title": "Mate in 2",
    "theme": "AdvancedPawn",
    "difficulty": "Medium",
    "rating": 1608,
    "popularity": 89,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "1r2k2r/6pp/4P3/2p5/3b4/Q2Pp3/Pq2R1PP/5RK1 w k - 0 26",
    "fen": "1r2k2r/6pp/4P3/2p5/3b4/Q2Pp3/PR4PP/5RK1 b k - 0 26",
    "preMove": "Rxb2",
    "solution": [
      "e2+",
      "Rf2",
      "e1=Q#"
    ]
  },
  {
    "id": "hgcwW",
    "title": "Mate in 2",
    "theme": "AdvancedPawn",
    "difficulty": "Easy",
    "rating": 1009,
    "popularity": 89,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "5rk1/1pQ1q2p/p2pP1p1/3B4/3B4/PP6/6PP/6K1 b - - 0 29",
    "fen": "5rk1/1pq4p/p2pP1p1/3B4/3B4/PP6/6PP/6K1 w - - 0 30",
    "preMove": "Qxc7",
    "solution": [
      "e7+",
      "Rf7",
      "e8=Q#"
    ]
  },
  {
    "id": "pYVO7",
    "title": "Mate in 2",
    "theme": "DiscoveredCheck",
    "difficulty": "Medium",
    "rating": 1917,
    "popularity": 89,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver the famous opera-style mate. Deliver a Vukovic mate with knight support.",
    "initialFen": "rn3rk1/pp6/2p4B/4p1R1/3PN1b1/2PB1q2/PP6/RN2K3 b Q - 2 21",
    "fen": "rn3r2/pp5k/2p4B/4p1R1/3PN1b1/2PB1q2/PP6/RN2K3 w Q - 3 22",
    "preMove": "Kh7",
    "solution": [
      "Nf6+",
      "Kxh6",
      "Rg6#"
    ]
  },
  {
    "id": "7WY8A",
    "title": "Mate in 2",
    "theme": "AdvancedPawn",
    "difficulty": "Easy",
    "rating": 1078,
    "popularity": 88,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "4r2k/2pq1r1R/5P2/4Q1p1/4P3/pP6/P1P5/1K5R b - - 0 37",
    "fen": "4r2k/2pq3r/5P2/4Q1p1/4P3/pP6/P1P5/1K5R w - - 0 38",
    "preMove": "Rxh7",
    "solution": [
      "f7+",
      "Rxe5",
      "f8=Q#"
    ]
  },
  {
    "id": "DfYHw",
    "title": "Mate in 2",
    "theme": "Deflection",
    "difficulty": "Medium",
    "rating": 1962,
    "popularity": 75,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "Q7/2q3pk/P5pp/7r/7b/4B3/1P3PP1/5RK1 w - - 1 43",
    "fen": "Q7/P1q3pk/6pp/7r/7b/4B3/1P3PP1/5RK1 b - - 0 43",
    "preMove": "a7",
    "solution": [
      "Qh2+",
      "Kxh2",
      "Bxf2#"
    ]
  },
  {
    "id": "iOSNs",
    "title": "Mate in 2",
    "theme": "DiscoveredCheck",
    "difficulty": "Medium",
    "rating": 1662,
    "popularity": 86,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "1Q6/5p1k/p3bNpb/1p2p3/8/P2r3P/1rq2BP1/R4RK1 b - - 10 30",
    "fen": "1Q6/5pk1/p3bNpb/1p2p3/8/P2r3P/1rq2BP1/R4RK1 w - - 11 31",
    "preMove": "Kg7",
    "solution": [
      "Qg8+",
      "Kxf6",
      "Bh4#"
    ]
  },
  {
    "id": "ljdfr",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2024,
    "popularity": 97,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "1r3r1k/p4pRp/5B2/2qp1p2/8/5P2/P4P1P/4R2K b - - 2 25",
    "fen": "5r1k/p4pRp/1r3B2/2qp1p2/8/5P2/P4P1P/4R2K w - - 3 26",
    "preMove": "Rb6",
    "solution": [
      "Rg8+",
      "Kxg8",
      "Rg1#"
    ]
  },
  {
    "id": "jrehX",
    "title": "Mate in 2",
    "theme": "DiscoveredCheck",
    "difficulty": "Medium",
    "rating": 1715,
    "popularity": 84,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Find the forced mate in two. Finish with the classic Morphy's mate pattern.",
    "initialFen": "5rk1/1r3Npp/p5n1/1pp4P/6B1/2P3Q1/qP4P1/5R1K b - - 0 28",
    "fen": "5rkn/1r3Npp/p7/1pp4P/6B1/2P3Q1/qP4P1/5R1K w - - 1 29",
    "preMove": "Nh8",
    "solution": [
      "Nh6+",
      "gxh6",
      "Be6#"
    ]
  },
  {
    "id": "JkqYB",
    "title": "Mate in 2",
    "theme": "AdvancedPawn",
    "difficulty": "Easy",
    "rating": 1353,
    "popularity": 96,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r4r1k/qp5p/p1n1pP1Q/2bpBp2/8/2PB3P/PP3p2/5K1R b - - 2 25",
    "fen": "r4r1k/q6p/p1n1pP1Q/1pbpBp2/8/2PB3P/PP3p2/5K1R w - - 0 26",
    "preMove": "b5",
    "solution": [
      "f7+",
      "Nxe5",
      "Qf6#"
    ]
  },
  {
    "id": "pwPtD",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2095,
    "popularity": 96,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r1b2k1r/pppp2Rp/3n1p1B/3P4/8/2P5/P2n1PPP/4R1K1 b - - 3 20",
    "fen": "r1b2k1r/pppp1nRp/5p1B/3P4/8/2P5/P2n1PPP/4R1K1 w - - 4 21",
    "preMove": "Nf7",
    "solution": [
      "Rg8+",
      "Kxg8",
      "Re8#"
    ]
  },
  {
    "id": "Edakr",
    "title": "Mate in 2",
    "theme": "AdvancedPawn",
    "difficulty": "Easy",
    "rating": 1104,
    "popularity": 83,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "7r/3k4/Q2b1p1p/3b4/1P6/3P1p1P/2r2R2/6RK w - - 6 39",
    "fen": "7r/3k4/Q2b1p1p/3b4/1P6/3P1p1P/2R5/6RK b - - 0 39",
    "preMove": "Rxc2",
    "solution": [
      "f2+",
      "Rg2",
      "f1=Q#"
    ]
  },
  {
    "id": "OVmi1",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Easy",
    "rating": 1350,
    "popularity": 95,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "7k/2b3p1/2P4p/p2p3b/P2P1r1q/2P2pR1/2Q2P1P/6RK w - - 4 28",
    "fen": "7k/2b3R1/2P4p/p2p3b/P2P1r1q/2P2p2/2Q2P1P/6RK b - - 0 28",
    "preMove": "Rxg7",
    "solution": [
      "Qxh2+",
      "Kxh2",
      "Rh4#"
    ]
  },
  {
    "id": "OhHJu",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2153,
    "popularity": 95,
    "description": "Corner the king in the kill box pattern. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r3r2k/p2p4/7B/3p3Q/2p1q3/8/P6P/5RK1 b - - 4 34",
    "fen": "r5rk/p2p4/7B/3p3Q/2p1q3/8/P6P/5RK1 w - - 5 35",
    "preMove": "Rg8+",
    "solution": [
      "Bg7+",
      "Kxg7",
      "Rf7#"
    ]
  },
  {
    "id": "ReQTR",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Easy",
    "rating": 1490,
    "popularity": 95,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "3Q4/7p/3p2pk/3Pb2q/4Pr2/2P2p2/1P3P1P/5NRK w - - 3 32",
    "fen": "3Q4/7p/3p2pk/3Pb2q/4Pr2/2P1Np2/1P3P1P/6RK b - - 4 32",
    "preMove": "Ne3",
    "solution": [
      "Qxh2+",
      "Kxh2",
      "Rh4#"
    ]
  },
  {
    "id": "jNNIF",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1853,
    "popularity": 95,
    "description": "Corner the king in the kill box pattern. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r5rk/pp2b3/2n4B/3pP2Q/3p4/2q5/P1P3PP/R4RK1 b - - 8 23",
    "fen": "r5rk/pp2b3/2n4B/3pP2Q/3p4/8/P1q3PP/R4RK1 w - - 0 24",
    "preMove": "Qxc2",
    "solution": [
      "Bg7+",
      "Kxg7",
      "Rf7#"
    ]
  },
  {
    "id": "kBniA",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1828,
    "popularity": 95,
    "description": "Find the forced checkmate. Find the forced mate in two. Finish with a swallow's tail queen sacrifice mate.",
    "initialFen": "3r1q2/pp2bkp1/2p1b1R1/4rp1Q/8/2PB4/P1K2P2/7R b - - 9 30",
    "fen": "3r1q2/pp3kp1/2p1bbR1/4rp1Q/8/2PB4/P1K2P2/7R w - - 10 31",
    "preMove": "Bf6",
    "solution": [
      "Rxg7+",
      "Kxg7",
      "Qh7#"
    ]
  },
  {
    "id": "rorPf",
    "title": "Mate in 2",
    "theme": "AdvancedPawn",
    "difficulty": "Hard",
    "rating": 2018,
    "popularity": 95,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "8/2pk1ppQ/8/4p3/8/B1P1qP1N/3p2PP/2nK1R2 w - - 2 29",
    "fen": "8/2pk1pp1/8/4p3/8/B1P1qP1N/3p2PP/1QnK1R2 b - - 3 29",
    "preMove": "Qb1",
    "solution": [
      "Qe2+",
      "Kc2",
      "d1=Q#"
    ]
  },
  {
    "id": "w7tJn",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2199,
    "popularity": 95,
    "description": "Find the forced checkmate. Find the forced mate in two. Finish with a swallow's tail queen sacrifice mate.",
    "initialFen": "r2q1r2/ppp2k2/1b2R1np/3n4/2B3Q1/2P5/PP3PPP/RN4K1 b - - 1 16",
    "fen": "r2q1r2/ppp2k2/1b2Rnnp/8/2B3Q1/2P5/PP3PPP/RN4K1 w - - 2 17",
    "preMove": "Nf6",
    "solution": [
      "Re7+",
      "Kxe7",
      "Qe6#"
    ]
  },
  {
    "id": "637qv",
    "title": "Mate in 2",
    "theme": "AdvancedPawn",
    "difficulty": "Easy",
    "rating": 1381,
    "popularity": 94,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r5k1/P4ppp/1P5r/2P4q/3Bb3/4PpP1/5Q1P/R5RK w - - 1 33",
    "fen": "r5k1/P4ppp/1P5r/2P4q/3Bb3/4PpP1/5Q1P/R1R4K b - - 2 33",
    "preMove": "Rgc1",
    "solution": [
      "Qxh2+",
      "Qxh2",
      "f2#"
    ]
  },
  {
    "id": "A3GyT",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1862,
    "popularity": 94,
    "description": "Deliver a dovetail mate supported by the queen. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r2q1rk1/1pp1nbpB/p4p2/3p4/3P3N/2P1P1P1/PP3PP1/R2QK2R b KQ - 0 16",
    "fen": "r2q1r2/1pp1nbpk/p4p2/3p4/3P3N/2P1P1P1/PP3PP1/R2QK2R w KQ - 0 17",
    "preMove": "Kxh7",
    "solution": [
      "Ng6+",
      "Kxg6",
      "Qh5#"
    ]
  },
  {
    "id": "e7wTl",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2197,
    "popularity": 94,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2r2r1k/p4pRp/1b2p3/2np4/P7/2BQPP2/5P1P/R6K b - - 0 25",
    "fen": "2r2r1k/p4pRp/1b2p3/3p4/P7/2BnPP2/5P1P/R6K w - - 0 26",
    "preMove": "Nxd3",
    "solution": [
      "Rg8+",
      "Kxg8",
      "Rg1#"
    ]
  },
  {
    "id": "rLsWY",
    "title": "Mate in 2",
    "theme": "AdvancedPawn",
    "difficulty": "Easy",
    "rating": 1418,
    "popularity": 94,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2r1qr1k/pb2n1p1/1p2pP1p/2p4Q/2PP2R1/2PB4/P5PP/2B2RK1 b - - 0 19",
    "fen": "2r2r1k/pb2n1p1/1p2pP1p/2p4q/2PP2R1/2PB4/P5PP/2B2RK1 w - - 0 20",
    "preMove": "Qxh5",
    "solution": [
      "fxg7+",
      "Kg8",
      "gxf8=Q#"
    ]
  },
  {
    "id": "nPsSb",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1672,
    "popularity": 93,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "3r2k1/p1p4p/2p3pQ/7P/6b1/4prP1/PPP5/R1B1K2R w KQ - 1 22",
    "fen": "3r2k1/p1p4p/2p3PQ/8/6b1/4prP1/PPP5/R1B1K2R b KQ - 0 22",
    "preMove": "hxg6",
    "solution": [
      "Rd1+",
      "Kxd1",
      "Rf1#"
    ]
  },
  {
    "id": "stKWN",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1896,
    "popularity": 93,
    "description": "Find the forced checkmate. Find the forced mate in two. Finish with a swallow's tail queen sacrifice mate.",
    "initialFen": "6k1/5pp1/q3p2p/3p4/2rP1P1P/2PK2P1/Pp1Q4/1R6 w - - 2 35",
    "fen": "6k1/5pp1/q3p2p/3p4/2rP1P1P/2PK2P1/PR1Q4/8 b - - 0 35",
    "preMove": "Rxb2",
    "solution": [
      "Rxc3+",
      "Kxc3",
      "Qc4#"
    ]
  },
  {
    "id": "uFoLt",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2052,
    "popularity": 93,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2r2rk1/pp3pRp/4p3/2bn4/8/2B1PP1P/1P2BP2/1K1R4 b - - 0 19",
    "fen": "2r2r1k/pp3pRp/4p3/2bn4/8/2B1PP1P/1P2BP2/1K1R4 w - - 1 20",
    "preMove": "Kh8",
    "solution": [
      "Rg8+",
      "Kxg8",
      "Rg1#"
    ]
  },
  {
    "id": "0yhCd",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1996,
    "popularity": 92,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "3r1r1k/ppp1ppRp/8/1B6/3n4/2B2P1P/PPP2P2/2KR4 b - - 0 15",
    "fen": "3r1r1k/ppp1ppRp/8/1n6/8/2B2P1P/PPP2P2/2KR4 w - - 0 16",
    "preMove": "Nxb5",
    "solution": [
      "Rg8+",
      "Kxg8",
      "Rg1#"
    ]
  },
  {
    "id": "JrkAR",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2071,
    "popularity": 92,
    "description": "Deliver a hook mate with rook, knight, and pawn. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "2k4r/p7/1p1R1Qp1/1N6/P1q1p3/2P2nNb/1P5K/R7 w - - 1 36",
    "fen": "2k4r/p7/1p1R1Qp1/1N6/P1q1p3/2P2nNb/1P6/R6K b - - 2 36",
    "preMove": "Kh1",
    "solution": [
      "Bg2+",
      "Kxg2",
      "Rh2#"
    ]
  },
  {
    "id": "NfJkP",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2052,
    "popularity": 92,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "1k6/1b3Q2/3p4/7p/1P1Npb2/6rP/1R3RP1/2r4K w - - 4 39",
    "fen": "1k6/1b3Q2/3p4/7p/1P1Npb2/6rP/1R3RPK/2r5 b - - 5 39",
    "preMove": "Kh2",
    "solution": [
      "Rxh3+",
      "Kxh3",
      "Rh1#"
    ]
  },
  {
    "id": "TrZK5",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1690,
    "popularity": 92,
    "description": "Corner the king in the kill box pattern. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "6rk/6p1/4p2B/2bpP2Q/8/r4R1P/6PK/3q4 b - - 0 35",
    "fen": "6rk/6p1/4p2B/2bpP2Q/8/r4R1P/2q3PK/8 w - - 1 36",
    "preMove": "Qc2",
    "solution": [
      "Bxg7+",
      "Kxg7",
      "Rf7#"
    ]
  },
  {
    "id": "iaUfK",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1909,
    "popularity": 92,
    "description": "Corner the king in the kill box pattern. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "2r3rk/1p1b4/p6B/2p4Q/P2b4/3R2NP/2q3PK/5R2 b - - 3 27",
    "fen": "2r3rk/1p1b4/p6B/2p4Q/P2b4/3q2NP/6PK/5R2 w - - 0 28",
    "preMove": "Qxd3",
    "solution": [
      "Bg7+",
      "Kxg7",
      "Rf7#"
    ]
  },
  {
    "id": "kb8GT",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1834,
    "popularity": 92,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r1b1qbn1/1p5k/p2p1p1B/P1pPnPN1/2P3rQ/3B1R2/1P4PP/R6K b - - 2 27",
    "fen": "r1b1qbnk/1p6/p2p1p1B/P1pPnPN1/2P3rQ/3B1R2/1P4PP/R6K w - - 3 28",
    "preMove": "Kh8",
    "solution": [
      "Bg7+",
      "Kxg7",
      "Qh7#"
    ]
  },
  {
    "id": "vG9zg",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2040,
    "popularity": 92,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r1b2k1r/pppp2Rp/3n1p1B/3P2n1/8/2P5/P4PPP/4R1K1 b - - 3 20",
    "fen": "r1b2k1r/pppp1nRp/5p1B/3P2n1/8/2P5/P4PPP/4R1K1 w - - 4 21",
    "preMove": "Ndf7",
    "solution": [
      "Rg8+",
      "Kxg8",
      "Re8#"
    ]
  },
  {
    "id": "qks39",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1947,
    "popularity": 91,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r7/pp1Nkp1p/2p5/8/3P1P2/1Q2Pb2/PP3PrP/R4R1K w - - 1 20",
    "fen": "r7/pp1Nkp1p/2p5/8/3PPP2/1Q3b2/PP3PrP/R4R1K b - - 0 20",
    "preMove": "e4",
    "solution": [
      "Rg1+",
      "Kxg1",
      "Rg8#"
    ]
  },
  {
    "id": "0oUPI",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2013,
    "popularity": 65,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "3rb2r/pRnk2pp/B1p2p2/4p3/8/4PPB1/P4KPP/3R4 b - - 5 23",
    "fen": "2krb2r/pRn3pp/B1p2p2/4p3/8/4PPB1/P4KPP/3R4 w - - 6 24",
    "preMove": "Kc8",
    "solution": [
      "Rb8+",
      "Kxb8",
      "Rxd8#"
    ]
  },
  {
    "id": "YJ5LP",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1916,
    "popularity": 90,
    "description": "Find the forced checkmate. Find the forced mate in two. Finish with a swallow's tail queen sacrifice mate.",
    "initialFen": "6k1/1Qb1npp1/P1p5/3p1q2/3Pr3/P2KP1P1/3B1P2/2R1R3 w - - 5 32",
    "fen": "6k1/2Q1npp1/P1p5/3p1q2/3Pr3/P2KP1P1/3B1P2/2R1R3 b - - 0 32",
    "preMove": "Qxc7",
    "solution": [
      "Rxe3+",
      "Kxe3",
      "Qe4#"
    ]
  },
  {
    "id": "SJMLQ",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1748,
    "popularity": 89,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r4r1k/1p4pB/2p2b2/2P5/1P1q4/2N3Pb/2Q2P2/1R2R1K1 w - - 1 29",
    "fen": "r4r1k/1p4pB/2p2b2/2P5/1P1q4/6Pb/2Q1NP2/1R2R1K1 b - - 2 29",
    "preMove": "Ne2",
    "solution": [
      "Qxf2+",
      "Kxf2",
      "Bd4#"
    ]
  },
  {
    "id": "G7vjB",
    "title": "Mate in 2",
    "theme": "AdvancedPawn",
    "difficulty": "Easy",
    "rating": 1033,
    "popularity": 76,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "6rk/1Q5p/2qp1P2/p7/1p1B4/1P4Pb/P6P/R5K1 b - - 2 33",
    "fen": "6rk/1q5p/3p1P2/p7/1p1B4/1P4Pb/P6P/R5K1 w - - 0 34",
    "preMove": "Qxb7",
    "solution": [
      "f7+",
      "Rg7",
      "f8=Q#"
    ]
  },
  {
    "id": "GMNsy",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1631,
    "popularity": 88,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "7Q/p1q2kp1/2p2n2/8/3P4/1P5P/P4RPb/R1B1rb1K w - - 0 26",
    "fen": "7Q/p1q2kp1/2p2n2/8/3P4/1P5P/PB3RPb/R3rb1K b - - 1 26",
    "preMove": "Bb2",
    "solution": [
      "Bxg2+",
      "Kxg2",
      "Qg3#"
    ]
  },
  {
    "id": "t8uRQ",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1700,
    "popularity": 88,
    "description": "Find the forced checkmate. Find the forced mate in two. Finish with a swallow's tail queen sacrifice mate.",
    "initialFen": "r7/ppp4k/3pN2n/3P2P1/2P1p1q1/1P2Pr1p/PB3P2/R2QRK2 w - - 0 30",
    "fen": "r7/ppp4k/3pN2n/3P2P1/2P1p1q1/1P2Pr1p/PB2KP2/R2QR3 b - - 1 30",
    "preMove": "Ke2",
    "solution": [
      "Rxf2+",
      "Kxf2",
      "Qg2#"
    ]
  },
  {
    "id": "d3lmf",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2105,
    "popularity": 87,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "1k1r4/1pp2p1p/p7/3N4/3P4/5b2/PP2QPrP/3R1RK1 w - - 0 20",
    "fen": "1k1r4/1pp2p1p/p7/3N4/3P4/5b2/PP2QPrP/3R1R1K b - - 1 20",
    "preMove": "Kh1",
    "solution": [
      "Rg1+",
      "Kxg1",
      "Rg8#"
    ]
  },
  {
    "id": "awOJk",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1987,
    "popularity": 86,
    "description": "Find the forced checkmate. Find the forced mate in two. Finish with a swallow's tail queen sacrifice mate.",
    "initialFen": "1rr5/3q1p2/3kp1p1/p2pR1P1/1p1P1QR1/P1P5/1P3P2/6K1 b - - 7 32",
    "fen": "1rr5/3q1p2/3kp1p1/p2pR1P1/3P1QR1/P1p5/1P3P2/6K1 w - - 0 33",
    "preMove": "bxc3",
    "solution": [
      "Rxe6+",
      "Kxe6",
      "Qe5#"
    ]
  },
  {
    "id": "h4tdh",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2161,
    "popularity": 86,
    "description": "Finish with a queen and bishop battery mate. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r5k1/2b2R2/4Q1p1/3p3p/8/6P1/1q1B1PKP/r7 b - - 0 37",
    "fen": "r5k1/2b2R2/1q2Q1p1/3p3p/8/6P1/3B1PKP/r7 w - - 1 38",
    "preMove": "Qb6",
    "solution": [
      "Rf8+",
      "Kxf8",
      "Bh6#"
    ]
  },
  {
    "id": "pVZWB",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2060,
    "popularity": 86,
    "description": "Deliver a hook mate with rook, knight, and pawn. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "8/4RB2/pr3p1k/5Np1/4PnP1/4KP2/8/1r6 b - - 7 43",
    "fen": "8/4RB1k/pr3p2/5Np1/4PnP1/4KP2/8/1r6 w - - 8 44",
    "preMove": "Kh7",
    "solution": [
      "Bg6+",
      "Kxg6",
      "Rg7#"
    ]
  },
  {
    "id": "SPotI",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1724,
    "popularity": 85,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "4rb2/pp3p1k/2pp1PpN/4r3/2q1P2Q/2P1R3/Pn1B2PP/R6K b - - 2 29",
    "fen": "4r3/pp3p1k/2pp1Ppb/4r3/2q1P2Q/2P1R3/Pn1B2PP/R6K w - - 0 30",
    "preMove": "Bxh6",
    "solution": [
      "Qxh6+",
      "Kxh6",
      "Rh3#"
    ]
  },
  {
    "id": "aAztd",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1812,
    "popularity": 85,
    "description": "Corner the king in the kill box pattern. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "B4r1k/p1p3p1/7p/3Q4/7q/2P4b/PBP5/6RK w - - 2 22",
    "fen": "B4r1k/p1p3p1/7p/4Q3/7q/2P4b/PBP5/6RK b - - 3 22",
    "preMove": "Qe5",
    "solution": [
      "Bg2+",
      "Kxg2",
      "Rf2#"
    ]
  },
  {
    "id": "aWr0k",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2100,
    "popularity": 85,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r1b2k1r/pppp2Rp/3n3B/3P1p2/8/2P5/P2n1PPP/4R1K1 b - - 3 20",
    "fen": "r1b2k1r/pppp1nRp/7B/3P1p2/8/2P5/P2n1PPP/4R1K1 w - - 4 21",
    "preMove": "Nf7",
    "solution": [
      "Rg8+",
      "Kxg8",
      "Re8#"
    ]
  },
  {
    "id": "ZJCA3",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2016,
    "popularity": 84,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2kr4/ppp2p2/2n4p/3b4/8/P1Np4/P2N1PrP/R1B2RK1 w - - 0 18",
    "fen": "2kr4/ppp2p2/2n4p/3b4/8/P1Np4/P2N1PrP/R1B2R1K b - - 1 18",
    "preMove": "Kh1",
    "solution": [
      "Rg1+",
      "Kxg1",
      "Rg8#"
    ]
  },
  {
    "id": "xWlU5",
    "title": "Mate in 2",
    "theme": "AdvancedPawn",
    "difficulty": "Easy",
    "rating": 1045,
    "popularity": 84,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "5r2/pppk3p/2np4/6B1/3Pq1bQ/2P2p2/PP5P/R4R1K w - - 0 22",
    "fen": "5r2/pppk3p/2np4/6B1/3Pq1bQ/2P2p2/PP5P/4RR1K b - - 1 22",
    "preMove": "Rae1",
    "solution": [
      "f2+",
      "Rxe4",
      "Bf3#"
    ]
  },
  {
    "id": "fjhv6",
    "title": "Mate in 2",
    "theme": "AdvancedPawn",
    "difficulty": "Easy",
    "rating": 1197,
    "popularity": 96,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "1bk3r1/3P3R/1R6/p7/P1P3rp/1P6/4K3/7q b - - 0 45",
    "fen": "1b4r1/2kP3R/1R6/p7/P1P3rp/1P6/4K3/7q w - - 1 46",
    "preMove": "Kc7",
    "solution": [
      "d8=Q+",
      "Kxd8",
      "Rxb8#"
    ]
  },
  {
    "id": "fyCCu",
    "title": "Mate in 2",
    "theme": "DiscoveredCheck",
    "difficulty": "Medium",
    "rating": 1844,
    "popularity": 71,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Find the forced mate in two. Deliver the famous opera-style mate.",
    "initialFen": "rq6/pb1n1rQp/1p1Nkp1p/3p4/4B3/6P1/PP3P1P/2R1R1K1 b - - 0 21",
    "fen": "rq6/pb1n2rp/1p1Nkp1p/3p4/4B3/6P1/PP3P1P/2R1R1K1 w - - 0 22",
    "preMove": "Rxg7",
    "solution": [
      "Bf5+",
      "Kxd6",
      "Re6#"
    ]
  },
  {
    "id": "PTPt2",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2182,
    "popularity": 83,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "3rr1k1/1Q3ppp/3B2n1/3P1N2/p7/2P5/q5PP/5RK1 b - - 0 24",
    "fen": "3rr1k1/1Q3ppp/3B2n1/3P1N2/p1q5/2P5/6PP/5RK1 w - - 1 25",
    "preMove": "Qc4",
    "solution": [
      "Qxf7+",
      "Kxf7",
      "Nh6#"
    ]
  },
  {
    "id": "qDaZt",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2058,
    "popularity": 83,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "3rr3/p1p1b3/PpPpk3/1PPRp1p1/4Pp2/1B3PpP/6P1/R5K1 b - - 0 57",
    "fen": "3rr3/p1p1b3/P1Ppk3/1PpRp1p1/4Pp2/1B3PpP/6P1/R5K1 w - - 0 58",
    "preMove": "bxc5",
    "solution": [
      "Rxd6+",
      "Kxd6",
      "Rd1#"
    ]
  },
  {
    "id": "y0B8S",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2175,
    "popularity": 82,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "4rkr1/pp2bp1p/1nb3p1/4B2q/2p2Q2/2N2NP1/7P/4RRK1 b - - 5 26",
    "fen": "4rkr1/pp2bp1p/2b3p1/3nB2q/2p2Q2/2N2NP1/7P/4RRK1 w - - 6 27",
    "preMove": "Nd5",
    "solution": [
      "Qxf7+",
      "Kxf7",
      "Ng5#"
    ]
  },
  {
    "id": "z0KcQ",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1984,
    "popularity": 82,
    "description": "Deliver a hook mate with rook, knight, and pawn. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "4r3/R1B4p/2pk2n1/2Np2K1/3P4/2b5/P4rPP/8 b - - 15 36",
    "fen": "4r3/R1B1k2p/2p3n1/2Np2K1/3P4/2b5/P4rPP/8 w - - 16 37",
    "preMove": "Ke7",
    "solution": [
      "Bd6+",
      "Kxd6",
      "Rd7#"
    ]
  },
  {
    "id": "MjShB",
    "title": "Mate in 2",
    "theme": "Deflection",
    "difficulty": "Medium",
    "rating": 1622,
    "popularity": 94,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "5rk1/pq2n3/Pp1RN1p1/3nPp1p/3P4/6P1/1PrB1PK1/4Q2R w - - 7 31",
    "fen": "5Nk1/pq2n3/Pp1R2p1/3nPp1p/3P4/6P1/1PrB1PK1/4Q2R b - - 0 31",
    "preMove": "Nxf8",
    "solution": [
      "Nf4+",
      "Kf1",
      "Qxh1#"
    ]
  },
  {
    "id": "nQBac",
    "title": "Mate in 2",
    "theme": "AdvancedPawn",
    "difficulty": "Easy",
    "rating": 1159,
    "popularity": 94,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "2kr4/ppp1r2R/3bP3/5B2/1P6/P4N2/4K2P/8 b - - 0 27",
    "fen": "2kr4/ppp4r/3bP3/5B2/1P6/P4N2/4K2P/8 w - - 0 28",
    "preMove": "Rxh7",
    "solution": [
      "e7+",
      "Rd7",
      "e8=Q#"
    ]
  },
  {
    "id": "x7jm3",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2112,
    "popularity": 81,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2k1r3/2p2p2/p7/8/1P1N1p2/2P4b/3R1PrP/5K1R w - - 2 31",
    "fen": "2k1r3/2p2p2/p7/8/1P1N1p2/2P4b/4RPrP/5K1R b - - 3 31",
    "preMove": "Re2",
    "solution": [
      "Rg1+",
      "Kxg1",
      "Rg8#"
    ]
  },
  {
    "id": "K8B8F",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1981,
    "popularity": 67,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r1q1k2r/pp1Rbppp/4p3/4N3/Q3nB2/8/PPP2PPP/2K4R b kq - 0 15",
    "fen": "r1q1k2r/pp1Rbppp/4p3/2n1N3/Q4B2/8/PPP2PPP/2K4R w kq - 1 16",
    "preMove": "Nc5",
    "solution": [
      "Rd8+",
      "Kxd8",
      "Nxf7#"
    ]
  },
  {
    "id": "P0q4Q",
    "title": "Mate in 2",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 1150,
    "popularity": 92,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "1r2r1k1/5ppp/p1p1b3/2pp4/B5n1/PPNP3P/2PQ1PPq/R3RK2 w - - 3 21",
    "fen": "1r2r1k1/5ppp/p1p1b3/2pp4/B5P1/PPNP4/2PQ1PPq/R3RK2 b - - 0 21",
    "preMove": "hxg4",
    "solution": [
      "Qh1+",
      "Ke2",
      "Bxg4#"
    ]
  },
  {
    "id": "IrHGV",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1902,
    "popularity": 78,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r3k1nr/p1R2ppp/3p4/1B1P2B1/4n1q1/5N1b/P1P2R1P/3Q3K b kq - 2 20",
    "fen": "r4knr/p1R2ppp/3p4/1B1P2B1/4n1q1/5N1b/P1P2R1P/3Q3K w - - 3 21",
    "preMove": "Kf8",
    "solution": [
      "Rxf7+",
      "Kxf7",
      "Ne5#"
    ]
  },
  {
    "id": "dv3us",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2052,
    "popularity": 78,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "5k1r/p4pp1/2B1p3/1N5n/6Pq/3P4/P1P2PKb/1RBQ1R2 w - - 1 23",
    "fen": "5k1r/p4pp1/2B1p3/1N5n/6Pq/3P4/P1P2PKb/1RBQ3R b - - 2 23",
    "preMove": "Rh1",
    "solution": [
      "Qh3+",
      "Kxh3",
      "Nf4#"
    ]
  },
  {
    "id": "0zooC",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2113,
    "popularity": 77,
    "description": "Find the forced checkmate. Find the forced mate in two. Finish with a swallow's tail queen sacrifice mate.",
    "initialFen": "2k5/1p4pp/2p5/3pp3/4q3/2Pr4/PPKBN3/R3Q3 w - - 9 39",
    "fen": "2k5/1p4pp/2p5/3pp3/4q3/2Pr4/PPKBN3/3RQ3 b - - 10 39",
    "preMove": "Rd1",
    "solution": [
      "Rxc3+",
      "Kxc3",
      "Qc4#"
    ]
  },
  {
    "id": "jZ41X",
    "title": "Mate in 2",
    "theme": "AdvancedPawn",
    "difficulty": "Easy",
    "rating": 1062,
    "popularity": 77,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "4rr1k/p6p/1pp1RPp1/4Bp2/3p3Q/1P1P1q1P/1PP5/6K1 b - - 2 27",
    "fen": "5r1k/p6p/1pp1rPp1/4Bp2/3p3Q/1P1P1q1P/1PP5/6K1 w - - 0 28",
    "preMove": "Rxe6",
    "solution": [
      "f7+",
      "Rxe5",
      "Qf6#"
    ]
  },
  {
    "id": "UmpeP",
    "title": "Mate in 2",
    "theme": "Deflection",
    "difficulty": "Hard",
    "rating": 2011,
    "popularity": 89,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "4r2k/pp3p1p/3p4/8/2P1q1p1/5nPP/PP3PK1/R2Q3R w - - 0 28",
    "fen": "4r2k/pp3p1p/3p4/8/2P1q1P1/5nP1/PP3PK1/R2Q3R b - - 0 28",
    "preMove": "hxg4",
    "solution": [
      "Ne1+",
      "Kf1",
      "Qxh1#"
    ]
  },
  {
    "id": "jvyc8",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Easy",
    "rating": 1407,
    "popularity": 76,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r4r2/5ppk/b4P1p/p2p3Q/1p3R2/3q4/1P4PP/R1B3K1 b - - 0 26",
    "fen": "r4r2/5p1k/b4Ppp/p2p3Q/1p3R2/3q4/1P4PP/R1B3K1 w - - 0 27",
    "preMove": "g6",
    "solution": [
      "Qxh6+",
      "Kxh6",
      "Rh4#"
    ]
  },
  {
    "id": "Yieyu",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2064,
    "popularity": 75,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "1r3r1k/1p3pRp/p1b1pn2/4B3/2P5/P4P2/2P1BK1P/1R6 b - - 0 21",
    "fen": "1r3r1k/1p1n1pRp/p1b1p3/4B3/2P5/P4P2/2P1BK1P/1R6 w - - 1 22",
    "preMove": "Nd7",
    "solution": [
      "Rg8+",
      "Kxg8",
      "Rg1#"
    ]
  },
  {
    "id": "Gd81e",
    "title": "Mate in 2",
    "theme": "AdvancedPawn",
    "difficulty": "Easy",
    "rating": 1153,
    "popularity": 59,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "6k1/1b3ppn/pb6/1p2pN2/8/P4p1Q/1PP4P/5RqK w - - 1 33",
    "fen": "6k1/1b3ppn/pb6/1p2pN2/8/P4p1Q/1PP4P/6RK b - - 0 33",
    "preMove": "Rxg1",
    "solution": [
      "f2+",
      "Rg2",
      "f1=Q#"
    ]
  },
  {
    "id": "Zf4yO",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1781,
    "popularity": 96,
    "description": "Deliver a dovetail mate supported by the queen. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "5rk1/1b2q1p1/6BR/2pp4/1p1n2Q1/pP1P2R1/P4PK1/4r3 b - - 2 42",
    "fen": "5rk1/1b2q3/6Bp/2pp4/1p1n2Q1/pP1P2R1/P4PK1/4r3 w - - 0 43",
    "preMove": "gxh6",
    "solution": [
      "Bf7+",
      "Kxf7",
      "Qg6#"
    ]
  },
  {
    "id": "cYigs",
    "title": "Mate in 2",
    "theme": "DiscoveredAttack",
    "difficulty": "Medium",
    "rating": 1742,
    "popularity": 94,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver the famous opera-style mate.",
    "initialFen": "2k1r3/ppp2pPp/2n1b2P/7R/1bp5/5N2/PB2KPP1/RN2r3 w - - 4 18",
    "fen": "2k1r3/ppp2pPp/2n1b2P/7R/1bp5/8/PB2KPP1/RN2N3 b - - 0 18",
    "preMove": "Nxe1",
    "solution": [
      "Bg4+",
      "Kf1",
      "Rxe1#"
    ]
  },
  {
    "id": "CDxbv",
    "title": "Mate in 2",
    "theme": "DiscoveredAttack",
    "difficulty": "Medium",
    "rating": 1857,
    "popularity": 93,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "1k5r/pp6/3q4/2b4p/2Q1N1r1/1P1p3B/P2Pn1PP/1RB2R1K w - - 2 30",
    "fen": "1k5r/pp6/3q4/2b4p/2Q1N1B1/1P1p4/P2Pn1PP/1RB2R1K b - - 0 30",
    "preMove": "Bxg4",
    "solution": [
      "Qxh2+",
      "Kxh2",
      "hxg4#"
    ]
  },
  {
    "id": "nchR3",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1684,
    "popularity": 92,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "6rk/1b4bp/1p3p2/7Q/1PP1R3/q1B2P1P/6P1/1B5K b - - 0 36",
    "fen": "6rk/1b4bp/1p3p2/7Q/1PP1R3/2q2P1P/6P1/1B5K w - - 0 37",
    "preMove": "Qxc3",
    "solution": [
      "Qxh7+",
      "Kxh7",
      "Rh4#"
    ]
  },
  {
    "id": "Xx47I",
    "title": "Mate in 2",
    "theme": "BackRankMate",
    "difficulty": "Easy",
    "rating": 1086,
    "popularity": 99,
    "description": "Exploit the weak back rank. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r1b2rk1/pp3Npp/2pq4/2n3B1/2B1P3/P2P2QP/1P4P1/n4R1K b - - 0 19",
    "fen": "r1b2rk1/pp3Npp/2p5/2n3B1/2B1P3/P2P2qP/1P4P1/n4R1K w - - 0 20",
    "preMove": "Qxg3",
    "solution": [
      "Nh6+",
      "Kh8",
      "Rxf8#"
    ]
  },
  {
    "id": "SaMFT",
    "title": "Mate in 2",
    "theme": "Deflection",
    "difficulty": "Easy",
    "rating": 1046,
    "popularity": 86,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "4Q1k1/pp4pp/5q2/5p2/2Pp4/bB1P3P/P7/1K6 b - - 1 32",
    "fen": "4Qqk1/pp4pp/8/5p2/2Pp4/bB1P3P/P7/1K6 w - - 2 33",
    "preMove": "Qf8",
    "solution": [
      "c5+",
      "Kh8",
      "Qxf8#"
    ]
  },
  {
    "id": "9x9AI",
    "title": "Mate in 2",
    "theme": "BackRankMate",
    "difficulty": "Easy",
    "rating": 1108,
    "popularity": 98,
    "description": "Exploit the weak back rank. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r1k2r2/ppp3Qp/2p5/2b1P1B1/2B3bq/3P4/PPP2nPP/RN3RK1 w - - 2 13",
    "fen": "r1k2r2/ppp3Qp/2p5/2b1P3/2B3bB/3P4/PPP2nPP/RN3RK1 b - - 0 13",
    "preMove": "Bxh4",
    "solution": [
      "Nh3+",
      "Kh1",
      "Rxf1#"
    ]
  },
  {
    "id": "CuIrL",
    "title": "Mate in 2",
    "theme": "BackRankMate",
    "difficulty": "Easy",
    "rating": 1019,
    "popularity": 98,
    "description": "Exploit the weak back rank. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "5rk1/5Npp/p7/1p6/8/1B6/PP1r4/5RK1 b - - 2 33",
    "fen": "5rk1/5Npp/p7/1p6/8/1B1r4/PP6/5RK1 w - - 3 34",
    "preMove": "Rd3",
    "solution": [
      "Nh6+",
      "Kh8",
      "Rxf8#"
    ]
  },
  {
    "id": "McIkk",
    "title": "Mate in 2",
    "theme": "BackRankMate",
    "difficulty": "Easy",
    "rating": 976,
    "popularity": 97,
    "description": "Exploit the weak back rank. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r1b2rk1/2p2Npp/p7/1p2p3/4P3/P7/BPP3PP/2K2R2 b - - 0 17",
    "fen": "r1b2rk1/5Npp/p7/1pp1p3/4P3/P7/BPP3PP/2K2R2 w - - 0 18",
    "preMove": "c5",
    "solution": [
      "Nh6+",
      "Kh8",
      "Rxf8#"
    ]
  },
  {
    "id": "gs4A8",
    "title": "Mate in 2",
    "theme": "BackRankMate",
    "difficulty": "Easy",
    "rating": 999,
    "popularity": 97,
    "description": "Exploit the weak back rank. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r1b2r1k/ppp2Npp/8/8/2BP4/4n2P/PP4P1/5RK1 b - - 0 20",
    "fen": "r1b2rk1/ppp2Npp/8/8/2BP4/4n2P/PP4P1/5RK1 w - - 1 21",
    "preMove": "Kg8",
    "solution": [
      "Nh6+",
      "Kh8",
      "Rxf8#"
    ]
  },
  {
    "id": "59P0r",
    "title": "Mate in 2",
    "theme": "BackRankMate",
    "difficulty": "Easy",
    "rating": 982,
    "popularity": 96,
    "description": "Exploit the weak back rank. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "4rrk1/ppp2Npp/1n6/8/8/1B6/PqP1Q1PP/R4R1K b - - 0 21",
    "fen": "5rk1/ppp2Npp/1n6/8/8/1B6/PqP1r1PP/R4R1K w - - 0 22",
    "preMove": "Rxe2",
    "solution": [
      "Nh6+",
      "Kh8",
      "Rxf8#"
    ]
  },
  {
    "id": "87n1h",
    "title": "Mate in 2",
    "theme": "BackRankMate",
    "difficulty": "Easy",
    "rating": 1143,
    "popularity": 96,
    "description": "Exploit the weak back rank. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r1b2rk1/p1p2Npp/1p1p4/3Bp3/4P2q/3Pn3/PPP1K1P1/R2Q1R2 b - - 1 14",
    "fen": "r1b2rk1/p1p2Npp/1p1p4/3Bp3/4P2q/3P4/PPP1K1P1/R2n1R2 w - - 0 15",
    "preMove": "Nxd1",
    "solution": [
      "Nh6+",
      "Kh8",
      "Rxf8#"
    ]
  },
  {
    "id": "8HnBe",
    "title": "Mate in 2",
    "theme": "BackRankMate",
    "difficulty": "Easy",
    "rating": 1011,
    "popularity": 96,
    "description": "Exploit the weak back rank. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r1bq1rk1/pp3Npp/8/8/2B5/5R2/PP1Q2PP/R5K1 b - - 0 16",
    "fen": "r1b2rk1/pp3Npp/8/8/2B5/5R2/PP1q2PP/R5K1 w - - 0 17",
    "preMove": "Qxd2",
    "solution": [
      "Nh6+",
      "Kh8",
      "Rxf8#"
    ]
  },
  {
    "id": "cCEhh",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2017,
    "popularity": 71,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver the famous opera-style mate.",
    "initialFen": "8/2R1Bpk1/6p1/p3p2p/P5nK/4n1PP/BP5r/8 b - - 1 33",
    "fen": "8/2R1B1k1/5pp1/p3p2p/P5nK/4n1PP/BP5r/8 w - - 0 34",
    "preMove": "f6",
    "solution": [
      "Bxf6+",
      "Kxf6",
      "Rf7#"
    ]
  },
  {
    "id": "LbIto",
    "title": "Mate in 2",
    "theme": "BackRankMate",
    "difficulty": "Easy",
    "rating": 1145,
    "popularity": 95,
    "description": "Exploit the weak back rank. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r1b2rk1/ppp2Npp/8/3B4/8/1P1Pb1P1/PnP1P1KP/R4R2 b - - 2 15",
    "fen": "r1b2rk1/pp3Npp/2p5/3B4/8/1P1Pb1P1/PnP1P1KP/R4R2 w - - 0 16",
    "preMove": "c6",
    "solution": [
      "Nh6+",
      "Kh8",
      "Rxf8#"
    ]
  },
  {
    "id": "ReuqY",
    "title": "Mate in 2",
    "theme": "AdvancedPawn",
    "difficulty": "Easy",
    "rating": 1092,
    "popularity": 95,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "2k4r/pp2p3/2p5/6q1/3PB1b1/2P1bP1p/PP4P1/RQ3R1K w - - 0 27",
    "fen": "2k4r/pp2p3/2p5/6q1/3PB1P1/2P1b2p/PP4P1/RQ3R1K b - - 0 27",
    "preMove": "fxg4",
    "solution": [
      "hxg2+",
      "Kxg2",
      "Qxg4#"
    ]
  },
  {
    "id": "eM1J5",
    "title": "Mate in 2",
    "theme": "BackRankMate",
    "difficulty": "Easy",
    "rating": 1128,
    "popularity": 95,
    "description": "Exploit the weak back rank. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r1b2rk1/pp3Npp/2p5/8/2B5/1P2Q3/P1P3PP/3n1RK1 b - - 0 17",
    "fen": "r1b2rk1/pp3Npp/2p5/8/2B5/1P2n3/P1P3PP/5RK1 w - - 0 18",
    "preMove": "Nxe3",
    "solution": [
      "Nh6+",
      "Kh8",
      "Rxf8#"
    ]
  },
  {
    "id": "GXuXc",
    "title": "Mate in 2",
    "theme": "BackRankMate",
    "difficulty": "Easy",
    "rating": 1169,
    "popularity": 94,
    "description": "Exploit the weak back rank. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "2r2rk1/1p3Npp/p7/P7/1P6/KQPq4/5R1P/8 b - - 0 34",
    "fen": "5rk1/1p3Npp/p7/P7/1P6/KQrq4/5R1P/8 w - - 0 35",
    "preMove": "Rxc3",
    "solution": [
      "Nh6+",
      "Kh8",
      "Rxf8#"
    ]
  },
  {
    "id": "JNVzv",
    "title": "Mate in 2",
    "theme": "BackRankMate",
    "difficulty": "Easy",
    "rating": 1191,
    "popularity": 94,
    "description": "Exploit the weak back rank. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "5rk1/5Npp/bqp5/p7/1p2N3/PB2n2P/1PP2RPK/2Qr4 b - - 2 24",
    "fen": "5rk1/5Npp/bqp5/p7/1p2N3/PB2n2P/1PP2RPK/2r5 w - - 0 25",
    "preMove": "Rxc1",
    "solution": [
      "Nh6+",
      "Kh8",
      "Rxf8#"
    ]
  },
  {
    "id": "PocFI",
    "title": "Mate in 2",
    "theme": "BackRankMate",
    "difficulty": "Easy",
    "rating": 1065,
    "popularity": 94,
    "description": "Exploit the weak back rank. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r1bq1r2/p7/p2kp1Q1/2bpN1B1/8/8/PPP2nPP/RN3RK1 w - - 3 18",
    "fen": "r1bB1r2/p7/p2kp1Q1/2bpN3/8/8/PPP2nPP/RN3RK1 b - - 0 18",
    "preMove": "Bxd8",
    "solution": [
      "Nh3+",
      "Kh1",
      "Rxf1#"
    ]
  },
  {
    "id": "SQ3dq",
    "title": "Mate in 2",
    "theme": "BackRankMate",
    "difficulty": "Easy",
    "rating": 1128,
    "popularity": 94,
    "description": "Exploit the weak back rank. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r1bq1rk1/1pp2Npp/p7/8/P1B5/3Pb2P/1PPNn1PK/R4R2 b - - 0 17",
    "fen": "r1b2rk1/1pp2Npp/p7/8/P1Bq4/3Pb2P/1PPNn1PK/R4R2 w - - 1 18",
    "preMove": "Qd4",
    "solution": [
      "Nh6+",
      "Kh8",
      "Rxf8#"
    ]
  },
  {
    "id": "aK3wh",
    "title": "Mate in 2",
    "theme": "BackRankMate",
    "difficulty": "Easy",
    "rating": 1152,
    "popularity": 94,
    "description": "Exploit the weak back rank. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r1b2rk1/1pp2Npp/2n5/p3P3/2B4q/1P5P/P2N2P1/3R1R1K b - - 0 24",
    "fen": "r1b2rk1/2p2Npp/1pn5/p3P3/2B4q/1P5P/P2N2P1/3R1R1K w - - 0 25",
    "preMove": "b6",
    "solution": [
      "Nh6+",
      "Kh8",
      "Rxf8#"
    ]
  },
  {
    "id": "kKma9",
    "title": "Mate in 2",
    "theme": "BackRankMate",
    "difficulty": "Medium",
    "rating": 1716,
    "popularity": 94,
    "description": "Exploit the weak back rank. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "2k2r2/pp4p1/3q4/2b4p/P7/6Q1/P1PP1nPP/R1B2RK1 w - - 0 18",
    "fen": "2k2r2/pp4p1/3Q4/2b4p/P7/8/P1PP1nPP/R1B2RK1 b - - 0 18",
    "preMove": "Qxd6",
    "solution": [
      "Nh3+",
      "Kh1",
      "Rxf1#"
    ]
  },
  {
    "id": "9kFM4",
    "title": "Mate in 2",
    "theme": "BackRankMate",
    "difficulty": "Easy",
    "rating": 1025,
    "popularity": 93,
    "description": "Exploit the weak back rank. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r4r2/pR6/1p4pk/2b1p2p/8/2N4Q/PPP2nPP/5RK1 w - - 0 21",
    "fen": "r4r2/pR1Q4/1p4pk/2b1p2p/8/2N5/PPP2nPP/5RK1 b - - 1 21",
    "preMove": "Qd7",
    "solution": [
      "Nh3+",
      "Kh1",
      "Rxf1#"
    ]
  },
  {
    "id": "FIWfe",
    "title": "Mate in 2",
    "theme": "BackRankMate",
    "difficulty": "Easy",
    "rating": 1408,
    "popularity": 93,
    "description": "Exploit the weak back rank. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r4rk1/pppR2pp/4p3/2b1N1B1/4P3/2N5/PPP2nPP/5RK1 w - - 0 14",
    "fen": "r4rk1/ppR3pp/4p3/2b1N1B1/4P3/2N5/PPP2nPP/5RK1 b - - 0 14",
    "preMove": "Rxc7",
    "solution": [
      "Nh3+",
      "Kh1",
      "Rxf1#"
    ]
  },
  {
    "id": "P2vGo",
    "title": "Mate in 2",
    "theme": "BackRankMate",
    "difficulty": "Easy",
    "rating": 1349,
    "popularity": 93,
    "description": "Exploit the weak back rank. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "5rk1/pppr1Npp/2n3q1/4p2Q/2B1P3/3P4/P1P3PP/5R1K b - - 0 21",
    "fen": "5rk1/pppr1Npp/2n5/4p2q/2B1P3/3P4/P1P3PP/5R1K w - - 0 22",
    "preMove": "Qxh5",
    "solution": [
      "Nh6+",
      "Kh8",
      "Rxf8#"
    ]
  },
  {
    "id": "aotIJ",
    "title": "Mate in 2",
    "theme": "BackRankMate",
    "difficulty": "Easy",
    "rating": 1148,
    "popularity": 93,
    "description": "Exploit the weak back rank. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "5rk1/5Npp/bp6/3B4/2P4P/2r3P1/P4RK1/8 b - - 0 34",
    "fen": "5rk1/5Npp/1p6/3B4/2b4P/2r3P1/P4RK1/8 w - - 0 35",
    "preMove": "Bxc4",
    "solution": [
      "Nh6+",
      "Kh8",
      "Rxf8#"
    ]
  },
  {
    "id": "kEiZt",
    "title": "Mate in 2",
    "theme": "BackRankMate",
    "difficulty": "Easy",
    "rating": 966,
    "popularity": 93,
    "description": "Exploit the weak back rank. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "8/pp2R3/1bp3pk/4P3/5r1p/1B2N3/PPP2nPP/5RK1 w - - 0 32",
    "fen": "8/pp2R3/1bp3pk/4P3/2N2r1p/1B6/PPP2nPP/5RK1 b - - 1 32",
    "preMove": "Nc4",
    "solution": [
      "Nh3+",
      "Kh1",
      "Rxf1#"
    ]
  },
  {
    "id": "lTE9s",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1571,
    "popularity": 93,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "k6r/1p2P3/p7/3p1B2/R2P4/6b1/1Q4P1/4rNK1 w - - 1 48",
    "fen": "k6r/1p2P3/p7/3p1B2/R2P4/2Q3b1/6P1/4rNK1 b - - 2 48",
    "preMove": "Qc3",
    "solution": [
      "Rh1+",
      "Kxh1",
      "Rxf1#"
    ]
  },
  {
    "id": "4RPW8",
    "title": "Mate in 2",
    "theme": "BackRankMate",
    "difficulty": "Medium",
    "rating": 1545,
    "popularity": 92,
    "description": "Exploit the weak back rank. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r1b2rk1/ppp2Nnp/1q2n3/6Q1/2B5/2N5/PPP3PP/R4R1K b - - 2 20",
    "fen": "r1b2rk1/ppp2Nnp/1q6/6n1/2B5/2N5/PPP3PP/R4R1K w - - 0 21",
    "preMove": "Nxg5",
    "solution": [
      "Nh6+",
      "Kh8",
      "Rxf8#"
    ]
  },
  {
    "id": "4goW2",
    "title": "Mate in 2",
    "theme": "AdvancedPawn",
    "difficulty": "Hard",
    "rating": 2017,
    "popularity": 92,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "2k3rr/2p2p2/p2p4/4p3/B1P1P1n1/2P2N2/P2Q3p/R4RqK w - - 1 31",
    "fen": "2k3rr/2p2p2/p2p4/4p3/B1P1P1n1/2P2N2/P2Q3p/R5RK b - - 0 31",
    "preMove": "Rxg1",
    "solution": [
      "Nf2+",
      "Qxf2",
      "hxg1=Q#"
    ]
  },
  {
    "id": "BCkfp",
    "title": "Mate in 2",
    "theme": "BackRankMate",
    "difficulty": "Easy",
    "rating": 1467,
    "popularity": 92,
    "description": "Exploit the weak back rank. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r1b2rk1/ppp2Npp/3p4/4p2q/2B1P1n1/P1NP2bP/1PP1n1P1/R1B2R1K b - - 0 14",
    "fen": "r1b2rk1/ppp2Npp/3p4/4p2q/2B1P1n1/P1NP3P/1PP1n1Pb/R1B2R1K w - - 1 15",
    "preMove": "Bh2",
    "solution": [
      "Nh6+",
      "Kh8",
      "Rxf8#"
    ]
  },
  {
    "id": "ZTVmb",
    "title": "Mate in 2",
    "theme": "BackRankMate",
    "difficulty": "Easy",
    "rating": 1110,
    "popularity": 92,
    "description": "Exploit the weak back rank. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "4rr1k/bpp2Bp1/p6p/6N1/8/2P5/PP3nPP/R1B2RK1 w - - 0 19",
    "fen": "4Br1k/bpp3p1/p6p/6N1/8/2P5/PP3nPP/R1B2RK1 b - - 0 19",
    "preMove": "Bxe8",
    "solution": [
      "Nh3+",
      "Kh1",
      "Rxf1#"
    ]
  },
  {
    "id": "c4DnZ",
    "title": "Mate in 2",
    "theme": "BackRankMate",
    "difficulty": "Medium",
    "rating": 1567,
    "popularity": 92,
    "description": "Exploit the weak back rank. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "5r1k/1pQ1p2p/3pR1p1/8/p2q4/8/PP3nPP/5RK1 w - - 0 26",
    "fen": "5r1k/1p2p2p/3pR1p1/8/p2q4/2Q5/PP3nPP/5RK1 b - - 1 26",
    "preMove": "Qc3",
    "solution": [
      "Nh3+",
      "Kh1",
      "Rxf1#"
    ]
  },
  {
    "id": "fGy8J",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1644,
    "popularity": 92,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "R1nk1b1r/3p1ppp/3B4/1p1Q4/1pq5/8/2P2PPP/4R1K1 b - - 7 27",
    "fen": "R1nk1b1r/3p1ppp/3B4/1p1q4/1p6/8/2P2PPP/4R1K1 w - - 0 28",
    "preMove": "Qxd5",
    "solution": [
      "Re8+",
      "Kxe8",
      "Rxc8#"
    ]
  },
  {
    "id": "hgRcZ",
    "title": "Mate in 2",
    "theme": "BackRankMate",
    "difficulty": "Easy",
    "rating": 1004,
    "popularity": 92,
    "description": "Exploit the weak back rank. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "5r1k/pB6/7p/8/6p1/1PN1b3/P4nPP/5RK1 w - - 0 27",
    "fen": "5r1k/pB6/7p/3N4/6p1/1P2b3/P4nPP/5RK1 b - - 1 27",
    "preMove": "Nd5",
    "solution": [
      "Nh3+",
      "Kh1",
      "Rxf1#"
    ]
  },
  {
    "id": "A30kG",
    "title": "Mate in 2",
    "theme": "BackRankMate",
    "difficulty": "Easy",
    "rating": 1069,
    "popularity": 91,
    "description": "Exploit the weak back rank. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "rnb2rk1/pp1p1Npp/2p5/8/2B1P3/3P4/PP3RPP/nN4K1 b - - 0 13",
    "fen": "rnb2rk1/p2p1Npp/2p5/1p6/2B1P3/3P4/PP3RPP/nN4K1 w - - 0 14",
    "preMove": "b5",
    "solution": [
      "Nh6+",
      "Kh8",
      "Rxf8#"
    ]
  },
  {
    "id": "wb6rC",
    "title": "Mate in 2",
    "theme": "BackRankMate",
    "difficulty": "Easy",
    "rating": 971,
    "popularity": 91,
    "description": "Exploit the weak back rank. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "4rrk1/1p3Npp/2p5/p7/Pn1qP3/1B3R1P/5PPB/R5K1 b - - 0 23",
    "fen": "5rk1/1p2rNpp/2p5/p7/Pn1qP3/1B3R1P/5PPB/R5K1 w - - 1 24",
    "preMove": "Re7",
    "solution": [
      "Nh6+",
      "Kh8",
      "Rxf8#"
    ]
  },
  {
    "id": "1j5Z8",
    "title": "Mate in 2",
    "theme": "BackRankMate",
    "difficulty": "Easy",
    "rating": 1126,
    "popularity": 90,
    "description": "Exploit the weak back rank. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r4r2/pnN3p1/3k3p/4p3/1PPb4/1Q6/P2P1nPP/R1B2RK1 w - - 0 22",
    "fen": "N4r2/pn4p1/3k3p/4p3/1PPb4/1Q6/P2P1nPP/R1B2RK1 b - - 0 22",
    "preMove": "Nxa8",
    "solution": [
      "Nh3+",
      "Kh1",
      "Rxf1#"
    ]
  },
  {
    "id": "7hxX8",
    "title": "Mate in 2",
    "theme": "BackRankMate",
    "difficulty": "Easy",
    "rating": 1059,
    "popularity": 90,
    "description": "Exploit the weak back rank. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "2k2r2/pppn2pp/3p4/2b3N1/8/2N5/PPPP1nPP/R1B2RK1 w - - 0 14",
    "fen": "2k2r2/pppn2pp/3pN3/2b5/8/2N5/PPPP1nPP/R1B2RK1 b - - 1 14",
    "preMove": "Ne6",
    "solution": [
      "Nh3+",
      "Kh1",
      "Rxf1#"
    ]
  },
  {
    "id": "CavCo",
    "title": "Mate in 2",
    "theme": "BackRankMate",
    "difficulty": "Easy",
    "rating": 1364,
    "popularity": 90,
    "description": "Exploit the weak back rank. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r1b2rk1/pp3Npp/2np4/8/2BQP3/2N1K3/PqP3PP/R4R2 b - - 0 15",
    "fen": "r1b2rk1/pp3Npp/3p4/8/2BnP3/2N1K3/PqP3PP/R4R2 w - - 0 16",
    "preMove": "Nxd4",
    "solution": [
      "Nh6+",
      "Kh8",
      "Rxf8#"
    ]
  },
  {
    "id": "D2269",
    "title": "Mate in 2",
    "theme": "BackRankMate",
    "difficulty": "Easy",
    "rating": 1283,
    "popularity": 90,
    "description": "Exploit the weak back rank. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "5rk1/p1p3pp/2p5/2b3B1/4R3/8/PPP2nPP/5RK1 w - - 0 19",
    "fen": "5rk1/p1p3pp/2p5/2b3B1/2R5/8/PPP2nPP/5RK1 b - - 1 19",
    "preMove": "Rc4",
    "solution": [
      "Nh3+",
      "Kh1",
      "Rxf1#"
    ]
  },
  {
    "id": "GTDFU",
    "title": "Mate in 2",
    "theme": "BackRankMate",
    "difficulty": "Easy",
    "rating": 1186,
    "popularity": 90,
    "description": "Exploit the weak back rank. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r4rk1/bppb2pp/p2pP3/6N1/2N5/1PP5/5nPP/R1B2RK1 w - - 0 19",
    "fen": "r4rk1/bppP2pp/p2p4/6N1/2N5/1PP5/5nPP/R1B2RK1 b - - 0 19",
    "preMove": "exd7",
    "solution": [
      "Nh3+",
      "Kh1",
      "Rxf1#"
    ]
  },
  {
    "id": "qw8Zp",
    "title": "Mate in 2",
    "theme": "BackRankMate",
    "difficulty": "Easy",
    "rating": 1116,
    "popularity": 90,
    "description": "Exploit the weak back rank. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "5rk1/p1q2Npp/7r/3Bp2Q/2Pb4/P7/1P4PP/5R1K b - - 0 24",
    "fen": "5rk1/p1q2Npp/8/3Bp2r/2Pb4/P7/1P4PP/5R1K w - - 0 25",
    "preMove": "Rxh5",
    "solution": [
      "Nh6+",
      "Kh8",
      "Rxf8#"
    ]
  },
  {
    "id": "GOJTo",
    "title": "Mate in 2",
    "theme": "BackRankMate",
    "difficulty": "Easy",
    "rating": 1043,
    "popularity": 89,
    "description": "Exploit the weak back rank. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r2k1r2/ppp3pp/2n5/2b5/4P3/1BN5/PPP2nPP/R1B2RK1 w - - 0 14",
    "fen": "r2k1r2/ppp3pp/2n5/2b5/N3P3/1B6/PPP2nPP/R1B2RK1 b - - 1 14",
    "preMove": "Na4",
    "solution": [
      "Nh3+",
      "Kh1",
      "Rxf1#"
    ]
  },
  {
    "id": "bSdYz",
    "title": "Mate in 2",
    "theme": "BackRankMate",
    "difficulty": "Medium",
    "rating": 1680,
    "popularity": 89,
    "description": "Exploit the weak back rank. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r1b2rk1/pppq1Npp/1b6/n7/2BP3B/1QP5/PP1N2PP/5RK1 b - - 0 16",
    "fen": "r1b2rk1/pppq1Npp/1b6/8/2BP3B/1nP5/PP1N2PP/5RK1 w - - 0 17",
    "preMove": "Nxb3",
    "solution": [
      "Nh6+",
      "Kh8",
      "Rxf8#"
    ]
  },
  {
    "id": "qgNfQ",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1955,
    "popularity": 39,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "5rk1/1p2R2p/3Q2p1/3P1b2/2Pq4/1P4P1/5rB1/4R1K1 w - - 9 36",
    "fen": "5rk1/1p2R2p/6p1/3PQb2/2Pq4/1P4P1/5rB1/4R1K1 b - - 10 36",
    "preMove": "Qe5",
    "solution": [
      "Rf1+",
      "Kxf1",
      "Bd3#"
    ]
  },
  {
    "id": "4KdOQ",
    "title": "Mate in 2",
    "theme": "BackRankMate",
    "difficulty": "Medium",
    "rating": 1681,
    "popularity": 88,
    "description": "Exploit the weak back rank. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r1b2rk1/ppq2Npp/8/2pQP3/8/1B6/PPP3PP/2Kn1R2 b - - 0 17",
    "fen": "r1b2rk1/ppq2Npp/8/2pQP3/8/1B2n3/PPP3PP/2K2R2 w - - 1 18",
    "preMove": "Ne3",
    "solution": [
      "Nh6+",
      "Kh8",
      "Rxf8#"
    ]
  },
  {
    "id": "5cIGK",
    "title": "Mate in 2",
    "theme": "BackRankMate",
    "difficulty": "Easy",
    "rating": 1367,
    "popularity": 88,
    "description": "Exploit the weak back rank. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "5rk1/ppp3pp/2p5/8/3b4/8/PPP2nPP/1RB2RK1 w - - 2 18",
    "fen": "5rk1/ppp3pp/2p5/8/3b4/2P5/PP3nPP/1RB2RK1 b - - 0 18",
    "preMove": "c3",
    "solution": [
      "Nh3+",
      "Kh1",
      "Rxf1#"
    ]
  },
  {
    "id": "UYnf1",
    "title": "Mate in 2",
    "theme": "BackRankMate",
    "difficulty": "Easy",
    "rating": 1090,
    "popularity": 88,
    "description": "Exploit the weak back rank. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "2b2rk1/5Npp/8/8/2Bb4/2nP3P/6P1/5R1K b - - 0 27",
    "fen": "5rk1/5Npp/b7/8/2Bb4/2nP3P/6P1/5R1K w - - 1 28",
    "preMove": "Ba6",
    "solution": [
      "Nh6+",
      "Kh8",
      "Rxf8#"
    ]
  },
  {
    "id": "gqAHj",
    "title": "Mate in 2",
    "theme": "BackRankMate",
    "difficulty": "Easy",
    "rating": 981,
    "popularity": 88,
    "description": "Exploit the weak back rank. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "4rrk1/1b3Npp/pp6/2p2R2/P1Bq4/3P4/1PP1Q1PP/7K b - - 0 23",
    "fen": "5rk1/1b3Npp/pp6/2p2R2/P1Bq4/3P4/1PP1r1PP/7K w - - 0 24",
    "preMove": "Rxe2",
    "solution": [
      "Nh6+",
      "Kh8",
      "Rxf8#"
    ]
  },
  {
    "id": "niBKp",
    "title": "Mate in 2",
    "theme": "BackRankMate",
    "difficulty": "Easy",
    "rating": 1334,
    "popularity": 88,
    "description": "Exploit the weak back rank. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r1b2rk1/ppp2Npp/2n5/2n1q3/2B5/2N3Q1/PPP3PP/3R1RK1 b - - 0 17",
    "fen": "r1b2rk1/ppp2Npp/2n5/2n5/2B5/2N3q1/PPP3PP/3R1RK1 w - - 0 18",
    "preMove": "Qxg3",
    "solution": [
      "Nh6+",
      "Kh8",
      "Rxf8#"
    ]
  },
  {
    "id": "15NNo",
    "title": "Mate in 2",
    "theme": "BackRankMate",
    "difficulty": "Easy",
    "rating": 1156,
    "popularity": 87,
    "description": "Exploit the weak back rank. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r1b2rk1/2np1Npp/2p4q/1p5Q/p2PP2P/P1P5/B1P3P1/R4RK1 b - - 0 18",
    "fen": "r1b2rk1/2np1Npp/2p5/1p5q/p2PP2P/P1P5/B1P3P1/R4RK1 w - - 0 19",
    "preMove": "Qxh5",
    "solution": [
      "Nh6+",
      "Kh8",
      "Rxf8#"
    ]
  },
  {
    "id": "FjmCT",
    "title": "Mate in 2",
    "theme": "BackRankMate",
    "difficulty": "Easy",
    "rating": 1079,
    "popularity": 87,
    "description": "Exploit the weak back rank. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r4rk1/p1pb3p/1bp1p1p1/3pN3/1P6/8/PBP2nPP/RN3RK1 w - - 0 18",
    "fen": "r4rk1/p1pN3p/1bp1p1p1/3p4/1P6/8/PBP2nPP/RN3RK1 b - - 0 18",
    "preMove": "Nxd7",
    "solution": [
      "Nh3+",
      "Kh1",
      "Rxf1#"
    ]
  },
  {
    "id": "UPWc8",
    "title": "Mate in 2",
    "theme": "BackRankMate",
    "difficulty": "Easy",
    "rating": 1127,
    "popularity": 87,
    "description": "Exploit the weak back rank. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r1b2rk1/1pp2Npp/1p6/3B4/4P3/1P3R1P/P4KP1/n7 b - - 0 21",
    "fen": "r1b2rk1/1p3Npp/1pp5/3B4/4P3/1P3R1P/P4KP1/n7 w - - 0 22",
    "preMove": "c6",
    "solution": [
      "Nh6+",
      "Kh8",
      "Rxf8#"
    ]
  },
  {
    "id": "UdQET",
    "title": "Mate in 2",
    "theme": "BackRankMate",
    "difficulty": "Easy",
    "rating": 1170,
    "popularity": 87,
    "description": "Exploit the weak back rank. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r4r2/ppp1k1p1/1b5p/4p3/4P3/NBP5/PP3nPP/R1B2RK1 w - - 2 17",
    "fen": "r4r2/ppp1k1p1/1b5p/4p3/2N1P3/1BP5/PP3nPP/R1B2RK1 b - - 3 17",
    "preMove": "Nc4",
    "solution": [
      "Nh3+",
      "Kh1",
      "Rxf1#"
    ]
  },
  {
    "id": "W2ZqN",
    "title": "Mate in 2",
    "theme": "BackRankMate",
    "difficulty": "Easy",
    "rating": 1073,
    "popularity": 87,
    "description": "Exploit the weak back rank. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r1bk1r2/ppp3p1/2p4p/2b4B/4P3/2N5/PPP2nPP/R1B2RK1 w - - 0 12",
    "fen": "r1bk1r2/ppp3p1/2p4p/2b4B/N3P3/8/PPP2nPP/R1B2RK1 b - - 1 12",
    "preMove": "Na4",
    "solution": [
      "Nh3+",
      "Kh1",
      "Rxf1#"
    ]
  },
  {
    "id": "jj2u7",
    "title": "Mate in 2",
    "theme": "BackRankMate",
    "difficulty": "Easy",
    "rating": 918,
    "popularity": 87,
    "description": "Exploit the weak back rank. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "5rk1/5Npp/p7/1p6/6P1/1BP1b2P/PP1r4/5R1K b - - 0 26",
    "fen": "5rk1/5Npp/p7/1p6/6P1/1BP1b2P/Pr6/5R1K w - - 0 27",
    "preMove": "Rxb2",
    "solution": [
      "Nh6+",
      "Kh8",
      "Rxf8#"
    ]
  },
  {
    "id": "hplTn",
    "title": "Mate in 2",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 1139,
    "popularity": 99,
    "description": "Trap the king between its own rooks. Deliver a hook mate with rook, knight, and pawn. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r4qrk/1b1n1p1Q/p3p1p1/1p1pP2N/3P4/3B1P1R/PP3P1P/R6K b - - 0 25",
    "fen": "r4qr1/1b1n1p1k/p3p1p1/1p1pP2N/3P4/3B1P1R/PP3P1P/R6K w - - 0 26",
    "preMove": "Kxh7",
    "solution": [
      "Nf6+",
      "Kg7",
      "Rh7#"
    ]
  },
  {
    "id": "Sf3zm",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1549,
    "popularity": 61,
    "description": "Deliver a dovetail mate supported by the queen. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "3q2rk/pp3p2/3p3B/4p2R/2r4P/8/P2QN3/3K4 b - - 0 26",
    "fen": "3q2rk/pp3p2/3p3B/4p2R/7r/8/P2QN3/3K4 w - - 0 27",
    "preMove": "Rxh4",
    "solution": [
      "Bg7+",
      "Kxg7",
      "Qh6#"
    ]
  },
  {
    "id": "dH58t",
    "title": "Mate in 2",
    "theme": "BackRankMate",
    "difficulty": "Easy",
    "rating": 1022,
    "popularity": 86,
    "description": "Exploit the weak back rank. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r4rk1/pb3Npp/4Q3/2p5/3q4/6PK/P6P/R4R2 b - - 0 21",
    "fen": "r1b2rk1/p4Npp/4Q3/2p5/3q4/6PK/P6P/R4R2 w - - 1 22",
    "preMove": "Bc8",
    "solution": [
      "Nh6+",
      "Kh8",
      "Rxf8#"
    ]
  },
  {
    "id": "AuHoR",
    "title": "Mate in 2",
    "theme": "DiscoveredAttack",
    "difficulty": "Easy",
    "rating": 1191,
    "popularity": 98,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "1r6/2p2p1p/2q1pk1Q/2N2bp1/p1nP4/B1n2P2/P1P3PP/5RK1 b - - 1 25",
    "fen": "1r6/2p2p1p/2q1pkbQ/2N3p1/p1nP4/B1n2P2/P1P3PP/5RK1 w - - 2 26",
    "preMove": "Bg6",
    "solution": [
      "Ne4+",
      "Nxe4",
      "fxe4#"
    ]
  },
  {
    "id": "fyI1M",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1825,
    "popularity": 59,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "8/p5pk/1b4r1/4Qp2/2B2Pqp/2PP1RP1/PP2R1KP/8 w - - 0 30",
    "fen": "8/p5pk/1b4r1/4Qp2/2B2Pqp/2PP1RPP/PP2R1K1/8 b - - 0 30",
    "preMove": "h3",
    "solution": [
      "Qxf3+",
      "Kxf3",
      "Rxg3#"
    ]
  },
  {
    "id": "1Ze97",
    "title": "Mate in 2",
    "theme": "DiscoveredAttack",
    "difficulty": "Hard",
    "rating": 2000,
    "popularity": 96,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2r3k1/5ppp/4p3/3pP3/1rbB1PP1/p7/3R3P/RKN5 w - - 0 34",
    "fen": "2r3k1/5ppp/4p3/3pP3/1rbB1PP1/p7/2KR3P/R1N5 b - - 1 34",
    "preMove": "Kc2",
    "solution": [
      "Be2+",
      "Bc3",
      "Rb2#"
    ]
  },
  {
    "id": "SWHsz",
    "title": "Mate in 2",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 1444,
    "popularity": 96,
    "description": "Trap the king between its own rooks. Deliver a hook mate with rook, knight, and pawn. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "8/1RN5/3pkrp1/4p2p/3bP2P/5r2/R3KP2/8 b - - 1 42",
    "fen": "8/1RN1k3/3p1rp1/4p2p/3bP2P/5r2/R3KP2/8 w - - 2 43",
    "preMove": "Ke7",
    "solution": [
      "Nd5+",
      "Ke6",
      "Re7#"
    ]
  },
  {
    "id": "6xKcA",
    "title": "Mate in 2",
    "theme": "BackRankMate",
    "difficulty": "Medium",
    "rating": 1573,
    "popularity": 83,
    "description": "Exploit the weak back rank. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r1b2rk1/pppp1Npp/1bn3q1/4P2n/3P4/1QP5/PP1B2PP/RN3RK1 b - - 7 14",
    "fen": "r1b2rk1/pppp1Npp/1b4q1/n3P2n/3P4/1QP5/PP1B2PP/RN3RK1 w - - 8 15",
    "preMove": "Na5",
    "solution": [
      "Nh6+",
      "Kh8",
      "Rxf8#"
    ]
  },
  {
    "id": "8A9N4",
    "title": "Mate in 2",
    "theme": "BackRankMate",
    "difficulty": "Easy",
    "rating": 1328,
    "popularity": 81,
    "description": "Exploit the weak back rank. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "2b2rk1/r4Npp/p5q1/1pp4Q/3b4/1B1P4/PPP3PP/4RR1K b - - 0 19",
    "fen": "2b2rk1/r4Npp/p7/1pp4q/3b4/1B1P4/PPP3PP/4RR1K w - - 0 20",
    "preMove": "Qxh5",
    "solution": [
      "Nh6+",
      "Kh8",
      "Rxf8#"
    ]
  },
  {
    "id": "Sj02O",
    "title": "Mate in 2",
    "theme": "BackRankMate",
    "difficulty": "Easy",
    "rating": 1293,
    "popularity": 81,
    "description": "Exploit the weak back rank. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "rn3rk1/ppb1qNpp/2p3b1/8/2BPN2Q/4P3/PP4PP/R4RK1 b - - 0 16",
    "fen": "rn3rk1/ppb2Npp/2p3b1/8/2BPN2q/4P3/PP4PP/R4RK1 w - - 0 17",
    "preMove": "Qxh4",
    "solution": [
      "Nh6+",
      "Kh8",
      "Rxf8#"
    ]
  },
  {
    "id": "UKI10",
    "title": "Mate in 2",
    "theme": "DiscoveredCheck",
    "difficulty": "Medium",
    "rating": 1906,
    "popularity": 93,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver the famous opera-style mate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "4Rrk1/5pbp/p2Q2p1/5P2/5P2/1b3B2/1r3BPP/1K1R4 w - - 0 24",
    "fen": "4Rrk1/5pbp/p2Q2p1/5P2/5P2/1b3B2/1r3BPP/K2R4 b - - 1 24",
    "preMove": "Ka1",
    "solution": [
      "Ra2+",
      "Kb1",
      "Ra1#"
    ]
  },
  {
    "id": "pArBx",
    "title": "Mate in 2",
    "theme": "DiscoveredCheck",
    "difficulty": "Medium",
    "rating": 1816,
    "popularity": 93,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver the famous opera-style mate. Deliver a Vukovic mate with knight support.",
    "initialFen": "6rk/pbp2q1p/5p1Q/4pP1B/1p2n2P/2N5/PPP5/3R3K w - - 0 33",
    "fen": "6rk/pbp2B1p/5p1Q/4pP2/1p2n2P/2N5/PPP5/3R3K b - - 0 33",
    "preMove": "Bxf7",
    "solution": [
      "Nf2+",
      "Kh2",
      "Rg2#"
    ]
  },
  {
    "id": "6xHqS",
    "title": "Mate in 2",
    "theme": "BackRankMate",
    "difficulty": "Easy",
    "rating": 986,
    "popularity": 80,
    "description": "Exploit the weak back rank. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r4rk1/2p3p1/2p1p1qp/p1b1N3/8/1QP5/PP3nPP/R1B2RK1 w - - 0 17",
    "fen": "r4rk1/2p3p1/2p1p1Np/p1b5/8/1QP5/PP3nPP/R1B2RK1 b - - 0 17",
    "preMove": "Nxg6",
    "solution": [
      "Nh3+",
      "Kh1",
      "Rxf1#"
    ]
  },
  {
    "id": "EZwJo",
    "title": "Mate in 2",
    "theme": "BackRankMate",
    "difficulty": "Easy",
    "rating": 1426,
    "popularity": 80,
    "description": "Exploit the weak back rank. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "rn3r1k/pBp3pp/8/2b5/4P3/8/PPP2nPP/RNB2RK1 w - - 0 15",
    "fen": "rn3r1k/pBp3pp/8/2b5/1P2P3/8/P1P2nPP/RNB2RK1 b - - 0 15",
    "preMove": "b4",
    "solution": [
      "Nh3+",
      "Kh1",
      "Rxf1#"
    ]
  },
  {
    "id": "O8BOy",
    "title": "Mate in 2",
    "theme": "BackRankMate",
    "difficulty": "Medium",
    "rating": 1959,
    "popularity": 79,
    "description": "Exploit the weak back rank. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "5rkr/ppp1q1pp/1b1pP3/6N1/8/2N3Q1/PP3nPP/R1B2RK1 w - - 0 17",
    "fen": "5rkr/ppp1q1pp/1b1pP3/3N2N1/8/6Q1/PP3nPP/R1B2RK1 b - - 1 17",
    "preMove": "Nd5",
    "solution": [
      "Nh3+",
      "Kh1",
      "Rxf1#"
    ]
  },
  {
    "id": "Yw3Og",
    "title": "Mate in 2",
    "theme": "AdvancedPawn",
    "difficulty": "Medium",
    "rating": 1595,
    "popularity": 79,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "3r1nkb/pp3p1p/3pqPP1/2p1r2Q/2P1P3/BPN3RR/P6P/6K1 b - - 0 31",
    "fen": "3r1nkb/pp3p1p/3pqPP1/2p4r/2P1P3/BPN3RR/P6P/6K1 w - - 0 32",
    "preMove": "Rxh5",
    "solution": [
      "gxh7+",
      "Kxh7",
      "Rxh5#"
    ]
  },
  {
    "id": "nypMV",
    "title": "Mate in 2",
    "theme": "BackRankMate",
    "difficulty": "Easy",
    "rating": 1086,
    "popularity": 79,
    "description": "Exploit the weak back rank. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r1bk1r2/ppp3pp/1b6/4p3/4P3/1BP5/PP1N1nPP/R1B2RK1 w - - 0 13",
    "fen": "r1bk1r2/ppp3pp/1b6/4p3/2N1P3/1BP5/PP3nPP/R1B2RK1 b - - 1 13",
    "preMove": "Nc4",
    "solution": [
      "Nh3+",
      "Kh1",
      "Rxf1#"
    ]
  },
  {
    "id": "mJAjJ",
    "title": "Mate in 2",
    "theme": "BalestraMate",
    "difficulty": "Medium",
    "rating": 1646,
    "popularity": 91,
    "description": "Finish with a queen and bishop battery mate. Find the forced checkmate. Find the forced mate in two. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "5rk1/p3bppp/8/1P1Bpb2/q7/P4PP1/KPr1Q2P/2BR3R w - - 3 24",
    "fen": "5rk1/p3bppp/8/1P1BQb2/q7/P4PP1/KPr4P/2BR3R b - - 0 24",
    "preMove": "Qxe5",
    "solution": [
      "Qxa3+",
      "Kb1",
      "Rxb2#"
    ]
  },
  {
    "id": "rTnlq",
    "title": "Mate in 2",
    "theme": "DiscoveredCheck",
    "difficulty": "Medium",
    "rating": 1575,
    "popularity": 91,
    "description": "Find the forced checkmate. Find the forced mate in two. Deliver the famous opera-style mate. Deliver a Vukovic mate with knight support.",
    "initialFen": "6k1/6p1/2b1N2p/8/4n2R/1N5P/r7/5R1K w - - 0 35",
    "fen": "6k1/6p1/2b1N2p/8/3Nn2R/7P/r7/5R1K b - - 1 35",
    "preMove": "Nbd4",
    "solution": [
      "Ng3+",
      "Kg1",
      "Rg2#"
    ]
  },
  {
    "id": "jlxAj",
    "title": "Mate in 2",
    "theme": "BackRankMate",
    "difficulty": "Easy",
    "rating": 999,
    "popularity": 78,
    "description": "Exploit the weak back rank. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r1b2rk1/ppp2Npp/2np4/4P3/2B5/B1P5/P5PP/2Kn1R2 b - - 0 15",
    "fen": "r1b2rk1/ppp2Npp/2np4/4P3/2B5/B1P1n3/P5PP/2K2R2 w - - 1 16",
    "preMove": "Ne3",
    "solution": [
      "Nh6+",
      "Kh8",
      "Rxf8#"
    ]
  },
  {
    "id": "55wwn",
    "title": "Mate in 2",
    "theme": "BackRankMate",
    "difficulty": "Easy",
    "rating": 1264,
    "popularity": 77,
    "description": "Exploit the weak back rank. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "5rk1/p1p2Npp/7q/4p3/2Bb2n1/6P1/PrPQ3P/R4R1K b - - 0 20",
    "fen": "5rk1/p1p2Npp/8/4p3/2Bb2n1/6P1/PrPq3P/R4R1K w - - 0 21",
    "preMove": "Qxd2",
    "solution": [
      "Nh6+",
      "Kh8",
      "Rxf8#"
    ]
  },
  {
    "id": "UIeL9",
    "title": "Mate in 2",
    "theme": "BackRankMate",
    "difficulty": "Easy",
    "rating": 1264,
    "popularity": 76,
    "description": "Exploit the weak back rank. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "5rk1/2Q4p/p1p1p1p1/2p5/3bP3/8/P3RnPP/3R2K1 w - - 0 27",
    "fen": "5rk1/2Q4p/p1p1p1p1/2p5/3bP3/8/P3RnPP/5RK1 b - - 1 27",
    "preMove": "Rf1",
    "solution": [
      "Nh3+",
      "Kh1",
      "Rxf1#"
    ]
  },
  {
    "id": "XjWN3",
    "title": "Mate in 2",
    "theme": "Clearance",
    "difficulty": "Easy",
    "rating": 1391,
    "popularity": 99,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "2r2r1k/1b3ppB/pqnpp3/3nP3/1p1P1P2/PNB4R/2Q3PP/2R4K b - - 1 22",
    "fen": "2r2r1k/1b3ppB/pqnpp3/4P3/1p1P1n2/PNB4R/2Q3PP/2R4K w - - 0 23",
    "preMove": "Nxf4",
    "solution": [
      "Bg8+",
      "Nxh3",
      "Qh7#"
    ]
  },
  {
    "id": "EStdj",
    "title": "Mate in 2",
    "theme": "Clearance",
    "difficulty": "Easy",
    "rating": 1301,
    "popularity": 98,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r1b2r1k/ppq2p1B/2n1p2R/3p2N1/3P4/1PP1b3/P1QN2P1/2K5 b - - 0 18",
    "fen": "r1b2r1k/ppq2p1B/2n1p2R/3p2b1/3P4/1PP5/P1QN2P1/2K5 w - - 0 19",
    "preMove": "Bxg5",
    "solution": [
      "Bg8+",
      "Bxh6",
      "Qh7#"
    ]
  },
  {
    "id": "6CzVR",
    "title": "Mate in 2",
    "theme": "Clearance",
    "difficulty": "Medium",
    "rating": 1563,
    "popularity": 97,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r4rk1/pb3ppB/1p2p2R/1P2P3/5P2/4p1R1/2Q1K1PP/6q1 b - - 3 27",
    "fen": "r4r1k/pb3ppB/1p2p2R/1P2P3/5P2/4p1R1/2Q1K1PP/6q1 w - - 4 28",
    "preMove": "Kh8",
    "solution": [
      "Bg8+",
      "gxh6",
      "Qh7#"
    ]
  },
  {
    "id": "6KLJA",
    "title": "Mate in 2",
    "theme": "Clearance",
    "difficulty": "Medium",
    "rating": 1594,
    "popularity": 97,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r2q1r1k/pb3ppB/4p3/2p1P3/5n1R/5N2/PP1NnK1P/RQ6 b - - 3 19",
    "fen": "r2q1r1k/pb3p1B/4p3/2p1P1p1/5n1R/5N2/PP1NnK1P/RQ6 w - - 0 20",
    "preMove": "g5",
    "solution": [
      "Bg8+",
      "gxh4",
      "Qh7#"
    ]
  },
  {
    "id": "IhP3b",
    "title": "Mate in 2",
    "theme": "Clearance",
    "difficulty": "Easy",
    "rating": 1441,
    "popularity": 97,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "rn1q1r1k/pp3ppB/2p1nP2/P3b3/3p3R/7P/1PQ2PK1/RNB5 b - - 1 24",
    "fen": "rn1q1r1k/pp3ppB/2p1nb2/P7/3p3R/7P/1PQ2PK1/RNB5 w - - 0 25",
    "preMove": "Bxf6",
    "solution": [
      "Bg8+",
      "Bxh4",
      "Qh7#"
    ]
  },
  {
    "id": "VnSDA",
    "title": "Mate in 2",
    "theme": "Clearance",
    "difficulty": "Easy",
    "rating": 1075,
    "popularity": 97,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "rnb2r1k/ppp3p1/3p2Q1/3P2KN/2P2p2/4q2R/P3P1PP/5B1R b - - 1 25",
    "fen": "rnb2r1k/ppp1q1p1/3p2Q1/3P2KN/2P2p2/7R/P3P1PP/5B1R w - - 2 26",
    "preMove": "Qe7+",
    "solution": [
      "Nf6+",
      "Bxh3",
      "Qh5#"
    ]
  },
  {
    "id": "hXlxs",
    "title": "Mate in 2",
    "theme": "Clearance",
    "difficulty": "Easy",
    "rating": 1392,
    "popularity": 97,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r2q1r1k/1ppbbp1B/4p2R/n2p4/3P4/pPP1PNP1/P1QN1PP1/2K5 b - - 0 17",
    "fen": "r2q1r1k/1ppb1p1B/4p2R/n2p2b1/3P4/pPP1PNP1/P1QN1PP1/2K5 w - - 1 18",
    "preMove": "Bg5",
    "solution": [
      "Bg8+",
      "Bxh6",
      "Qh7#"
    ]
  },
  {
    "id": "n1zVf",
    "title": "Mate in 2",
    "theme": "Clearance",
    "difficulty": "Medium",
    "rating": 1502,
    "popularity": 97,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r2q1r1k/pp3p1B/5b1R/2pp4/6b1/2P1PNP1/PPQ2PP1/2K5 b - - 0 19",
    "fen": "r2q1r1k/pp3pbB/7R/2pp4/6b1/2P1PNP1/PPQ2PP1/2K5 w - - 1 20",
    "preMove": "Bg7",
    "solution": [
      "Bg8+",
      "Bxh6",
      "Qh7#"
    ]
  },
  {
    "id": "nM767",
    "title": "Mate in 2",
    "theme": "Clearance",
    "difficulty": "Easy",
    "rating": 1282,
    "popularity": 97,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r1bq1r1k/ppp2ppB/7R/8/8/2P1P1P1/PPQN1nP1/2KR4 b - - 0 16",
    "fen": "r1bq1r1k/ppp2ppB/7R/8/8/2P1P1P1/PPQN2P1/2Kn4 w - - 0 17",
    "preMove": "Nxd1",
    "solution": [
      "Bg8+",
      "gxh6",
      "Qh7#"
    ]
  },
  {
    "id": "thys3",
    "title": "Mate in 2",
    "theme": "Clearance",
    "difficulty": "Easy",
    "rating": 1294,
    "popularity": 97,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "1r3r1k/p3qppB/2p1p3/P2pb3/7R/2P3P1/1PQ2P2/5R1K b - - 2 26",
    "fen": "1r3r1k/p3qppB/2p1pb2/P2p4/7R/2P3P1/1PQ2P2/5R1K w - - 3 27",
    "preMove": "Bf6",
    "solution": [
      "Bg8+",
      "Bxh4",
      "Qh7#"
    ]
  },
  {
    "id": "8PEwN",
    "title": "Mate in 2",
    "theme": "Clearance",
    "difficulty": "Easy",
    "rating": 1446,
    "popularity": 96,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r2q1r1k/1p1bbppB/3p1n2/3Pp3/7R/8/PPQ2PPP/R1B3K1 b - - 7 19",
    "fen": "r2q1r1k/1p1bbppB/3p4/3np3/7R/8/PPQ2PPP/R1B3K1 w - - 0 20",
    "preMove": "Nxd5",
    "solution": [
      "Bg8+",
      "Bxh4",
      "Qh7#"
    ]
  },
  {
    "id": "E5xJh",
    "title": "Mate in 2",
    "theme": "Clearance",
    "difficulty": "Easy",
    "rating": 1271,
    "popularity": 96,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r1b2r1k/1pq1bppB/4p3/3n3R/p4B2/2P3N1/PPQ2PPP/R5K1 b - - 2 17",
    "fen": "r1b2r1k/1pq1bppB/4p3/7R/p4n2/2P3N1/PPQ2PPP/R5K1 w - - 0 18",
    "preMove": "Nxf4",
    "solution": [
      "Bg8+",
      "Nxh5",
      "Qh7#"
    ]
  },
  {
    "id": "JE9uE",
    "title": "Mate in 2",
    "theme": "Clearance",
    "difficulty": "Easy",
    "rating": 1341,
    "popularity": 96,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "2k5/ppqn1pp1/2p1pnp1/8/1P1P4/2P2B1r/P2BNP1b/R2Q1R1K w - - 0 20",
    "fen": "2k5/ppqn1pp1/2p1pnp1/8/1P1P4/2P4r/P2BNPBb/R2Q1R1K b - - 1 20",
    "preMove": "Bg2",
    "solution": [
      "Bg1+",
      "Bxh3",
      "Qh2#"
    ]
  },
  {
    "id": "MJfzz",
    "title": "Mate in 2",
    "theme": "Clearance",
    "difficulty": "Medium",
    "rating": 1523,
    "popularity": 96,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r2q1r1k/pb2bppB/1p2p3/3n2N1/2p4R/2N1P3/PPQ2P1P/4K1R1 b - - 2 17",
    "fen": "r2q1r1k/pb3ppB/1p2p3/3n2b1/2p4R/2N1P3/PPQ2P1P/4K1R1 w - - 0 18",
    "preMove": "Bxg5",
    "solution": [
      "Bg8+",
      "Bxh4",
      "Qh7#"
    ]
  },
  {
    "id": "PYSdv",
    "title": "Mate in 2",
    "theme": "Clearance",
    "difficulty": "Easy",
    "rating": 1443,
    "popularity": 96,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "2r2r1k/5ppB/pq2p3/3p2p1/8/1P5R/PB2nPP1/1Q5K b - - 5 29",
    "fen": "2r2r1k/5ppB/pq2p3/3p2p1/5n2/1P5R/PB3PP1/1Q5K w - - 6 30",
    "preMove": "Nf4",
    "solution": [
      "Bg8+",
      "Nxh3",
      "Qh7#"
    ]
  },
  {
    "id": "QC5aM",
    "title": "Mate in 2",
    "theme": "Clearance",
    "difficulty": "Easy",
    "rating": 1374,
    "popularity": 96,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r2q1r1k/ppp2ppB/7R/3p4/8/2P1PbP1/PPQ2P2/2KR4 b - - 0 17",
    "fen": "r2q1r1k/ppp2ppB/7R/3p4/8/2P1P1P1/PPQ2P2/2Kb4 w - - 0 18",
    "preMove": "Bxd1",
    "solution": [
      "Bg8+",
      "gxh6",
      "Qh7#"
    ]
  },
  {
    "id": "UsEJm",
    "title": "Mate in 2",
    "theme": "Clearance",
    "difficulty": "Easy",
    "rating": 1303,
    "popularity": 96,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r4rk1/pp1b1ppB/1q2p2R/3pP3/8/2P2PP1/PPQN2P1/2Kn4 b - - 1 17",
    "fen": "r4r1k/pp1b1ppB/1q2p2R/3pP3/8/2P2PP1/PPQN2P1/2Kn4 w - - 2 18",
    "preMove": "Kh8",
    "solution": [
      "Bg8+",
      "gxh6",
      "Qh7#"
    ]
  },
  {
    "id": "j41KS",
    "title": "Mate in 2",
    "theme": "Clearance",
    "difficulty": "Medium",
    "rating": 1757,
    "popularity": 96,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "2r2rk1/pp1bp1bB/1q1p4/6NR/5n2/2P5/PP1N1PP1/1QK5 b - - 1 21",
    "fen": "2r2r1k/pp1bp1bB/1q1p4/6NR/5n2/2P5/PP1N1PP1/1QK5 w - - 2 22",
    "preMove": "Kh8",
    "solution": [
      "Bg8+",
      "Nxh5",
      "Qh7#"
    ]
  },
  {
    "id": "qzS0X",
    "title": "Mate in 2",
    "theme": "Clearance",
    "difficulty": "Easy",
    "rating": 1454,
    "popularity": 96,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r5k1/6pp/2pq4/p2p1p2/2pPb3/2P1N2r/PP1N1PPb/R2Q1R1K w - - 0 25",
    "fen": "r5k1/6pp/2pq4/p2p1p2/2pPN3/2P1N2r/PP3PPb/R2Q1R1K b - - 0 25",
    "preMove": "Nxe4",
    "solution": [
      "Bg1+",
      "gxh3",
      "Qh2#"
    ]
  },
  {
    "id": "w7wYq",
    "title": "Mate in 2",
    "theme": "Clearance",
    "difficulty": "Easy",
    "rating": 1468,
    "popularity": 96,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r1b2r1k/pp3ppB/1q1p4/3P3R/8/5N2/PPQ2bPP/R6K b - - 1 20",
    "fen": "r4r1k/pp3ppB/1q1p4/3P3R/6b1/5N2/PPQ2bPP/R6K w - - 2 21",
    "preMove": "Bg4",
    "solution": [
      "Bg8+",
      "Bxh5",
      "Qh7#"
    ]
  },
  {
    "id": "xtyiH",
    "title": "Mate in 2",
    "theme": "Clearance",
    "difficulty": "Medium",
    "rating": 1513,
    "popularity": 96,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r2q1r1k/pb1nbp1B/1p2p2R/3p4/3p4/2P1PNP1/PPQN1PP1/2K5 b - - 0 16",
    "fen": "r2q1r1k/pb1n1p1B/1p2p2R/3p2b1/3p4/2P1PNP1/PPQN1PP1/2K5 w - - 1 17",
    "preMove": "Bg5",
    "solution": [
      "Bg8+",
      "Bxh6",
      "Qh7#"
    ]
  },
  {
    "id": "z1WGD",
    "title": "Mate in 2",
    "theme": "Clearance",
    "difficulty": "Medium",
    "rating": 1513,
    "popularity": 96,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "1q2r1k1/1p3ppp/p4n2/3B4/1P5r/P3P3/1B1Q1PPb/2R2R1K w - - 1 21",
    "fen": "1q2r1k1/1p3ppp/p4B2/3B4/1P5r/P3P3/3Q1PPb/2R2R1K b - - 0 21",
    "preMove": "Bxf6",
    "solution": [
      "Bg1+",
      "Bxh4",
      "Qh2#"
    ]
  },
  {
    "id": "ClToL",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Medium",
    "rating": 1910,
    "popularity": 95,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver the famous opera-style mate. Deliver Pillsbury's mate along the back rank. Deliver a Vukovic mate with knight support.",
    "initialFen": "r1q2rk1/pb3p1B/1p1p1R2/2p3Np/2n5/2B5/PP4PP/R5K1 b - - 0 20",
    "fen": "r1q2r2/pb3pkB/1p1p1R2/2p3Np/2n5/2B5/PP4PP/R5K1 w - - 1 21",
    "preMove": "Kg7",
    "solution": [
      "Rg6#"
    ]
  },
  {
    "id": "Qi2QL",
    "title": "Mate in 2",
    "theme": "BackRankMate",
    "difficulty": "Medium",
    "rating": 1645,
    "popularity": 95,
    "description": "Exploit the weak back rank. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "2kr1bR1/ppp5/4bq2/5N1r/4P2p/5P1B/PPP1Q2P/2KR4 b - - 7 23",
    "fen": "2kr1bb1/ppp5/5q2/5N1r/4P2p/5P1B/PPP1Q2P/2KR4 w - - 0 24",
    "preMove": "Bxg8",
    "solution": [
      "Ne7+",
      "Kb8",
      "Rxd8#"
    ]
  },
  {
    "id": "ZWL4V",
    "title": "Mate in 2",
    "theme": "DiscoveredAttack",
    "difficulty": "Medium",
    "rating": 1610,
    "popularity": 95,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "4k3/pp3pp1/2b1p2r/4Pn2/3p1P1b/1PN5/P4Q1P/R1B3RK w - - 0 27",
    "fen": "4k3/pp3pp1/2b1p2r/4Pn2/3p1P1b/1PN5/P5QP/R1B3RK b - - 1 27",
    "preMove": "Qg2",
    "solution": [
      "Ng3+",
      "hxg3",
      "Bxg3#"
    ]
  },
  {
    "id": "gy84J",
    "title": "Mate in 2",
    "theme": "Clearance",
    "difficulty": "Easy",
    "rating": 1409,
    "popularity": 95,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r2q1r1k/2p2p1B/bp1npb1R/p7/3P4/2P5/PPQ2PPP/R4NK1 b - - 0 18",
    "fen": "r2q1r1k/2p2p1B/bp1np2R/p5b1/3P4/2P5/PPQ2PPP/R4NK1 w - - 1 19",
    "preMove": "Bg5",
    "solution": [
      "Bg8+",
      "Bxh6",
      "Qh7#"
    ]
  },
  {
    "id": "jrQQ5",
    "title": "Mate in 2",
    "theme": "DiscoveredAttack",
    "difficulty": "Hard",
    "rating": 2091,
    "popularity": 95,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r4r1k/pb1p3p/1p2pNpn/4Q3/4P3/4P3/PPq3PP/R4RK1 b - - 0 19",
    "fen": "r4r1k/pb1p1n1p/1p2pNp1/4Q3/4P3/4P3/PPq3PP/R4RK1 w - - 1 20",
    "preMove": "Nf7",
    "solution": [
      "Ne8+",
      "Nxe5",
      "Rxf8#"
    ]
  },
  {
    "id": "qdxQ1",
    "title": "Mate in 2",
    "theme": "Clearance",
    "difficulty": "Easy",
    "rating": 1483,
    "popularity": 95,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "2k5/ppqn1pp1/2p1pnp1/1P6/3P4/P1N1BB1r/2PQ1P1b/R4R1K w - - 0 20",
    "fen": "2k5/ppqn1pp1/2p1pnp1/1P6/3P4/P1N1B2r/2PQ1PBb/R4R1K b - - 1 20",
    "preMove": "Bg2",
    "solution": [
      "Bg1+",
      "Bxh3",
      "Qh2#"
    ]
  },
  {
    "id": "u2knJ",
    "title": "Mate in 2",
    "theme": "Clearance",
    "difficulty": "Easy",
    "rating": 1376,
    "popularity": 95,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "3r1r1k/pb3ppB/1pp1p3/2n1P1p1/2Pq4/4R2R/PPQN2PP/6K1 b - - 5 21",
    "fen": "3r1r1k/pb3ppB/1pp1p3/2n1P3/2Pq2p1/4R2R/PPQN2PP/6K1 w - - 0 22",
    "preMove": "g4",
    "solution": [
      "Bg8+",
      "gxh3",
      "Qh7#"
    ]
  },
  {
    "id": "wl27y",
    "title": "Mate in 2",
    "theme": "Clearance",
    "difficulty": "Easy",
    "rating": 1480,
    "popularity": 95,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "2r2rk1/pb3ppB/1p2p2R/4q3/3p4/2P2P2/PPQ2K2/6R1 b - - 1 22",
    "fen": "2r2r1k/pb3ppB/1p2p2R/4q3/3p4/2P2P2/PPQ2K2/6R1 w - - 2 23",
    "preMove": "Kh8",
    "solution": [
      "Bg8+",
      "gxh6",
      "Qh7#"
    ]
  },
  {
    "id": "1mt7j",
    "title": "Mate in 2",
    "theme": "Clearance",
    "difficulty": "Easy",
    "rating": 1447,
    "popularity": 94,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "1rb2r1k/5ppB/pq2p3/1pb1P3/7R/1N4P1/P1Q4P/5K2 b - - 1 27",
    "fen": "1rb2r1k/5p1B/pq2p3/1pb1P1p1/7R/1N4P1/P1Q4P/5K2 w - - 0 28",
    "preMove": "g5",
    "solution": [
      "Bg8+",
      "gxh4",
      "Qh7#"
    ]
  },
  {
    "id": "rrS1y",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Medium",
    "rating": 1947,
    "popularity": 91,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver the famous opera-style mate. Deliver Pillsbury's mate along the back rank. Deliver a Vukovic mate with knight support.",
    "initialFen": "3r1rk1/1b2bp1B/p1q1pR2/6Np/1p1B2n1/1P6/PNP1R1PP/6K1 b - - 1 28",
    "fen": "3r1r2/1b2bpkB/p1q1pR2/6Np/1p1B2n1/1P6/PNP1R1PP/6K1 w - - 2 29",
    "preMove": "Kg7",
    "solution": [
      "Rg6#"
    ]
  },
  {
    "id": "jy7AC",
    "title": "Mate in 1",
    "theme": "AdvancedPawn",
    "difficulty": "Medium",
    "rating": 1547,
    "popularity": 75,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2rkR2r/q2P1pp1/ppB2np1/8/5B2/b1N4P/PP3PP1/1K1R4 b - - 2 23",
    "fen": "2rkr3/q2P1pp1/ppB2np1/8/5B2/b1N4P/PP3PP1/1K1R4 w - - 0 24",
    "preMove": "Rxe8",
    "solution": [
      "dxe8=Q#"
    ]
  },
  {
    "id": "lWM4Q",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Medium",
    "rating": 1814,
    "popularity": 96,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver the famous opera-style mate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r4rk1/pp3pQp/4pR2/7b/3B4/2PB4/Pq4PP/R5K1 b - - 0 20",
    "fen": "r4r2/pp3pkp/4pR2/7b/3B4/2PB4/Pq4PP/R5K1 w - - 0 21",
    "preMove": "Kxg7",
    "solution": [
      "Rg6#"
    ]
  },
  {
    "id": "YY73C",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Medium",
    "rating": 1655,
    "popularity": 95,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Finish with the classic Morphy's mate pattern. Deliver the famous opera-style mate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2r1r1k1/5R1p/p2pB1pB/4b2n/4P3/1Pq4P/P2Q2P1/5RK1 b - - 0 25",
    "fen": "2r1r1k1/5R1p/p2pB1pB/4b2n/4P3/1P5P/P2q2P1/5RK1 w - - 0 26",
    "preMove": "Qxd2",
    "solution": [
      "Rf8#"
    ]
  },
  {
    "id": "K4l51",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Medium",
    "rating": 1984,
    "popularity": 94,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver the famous opera-style mate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r1bn3r/ppppkpBp/1q3R2/4p3/2B1P2Q/3P3N/P1P3PP/2bK4 b - - 0 16",
    "fen": "r1bn3r/ppppkpBp/5R2/4p3/2B1P2Q/3P3N/P1P3PP/1qbK4 w - - 1 17",
    "preMove": "Qb1",
    "solution": [
      "Re6#"
    ]
  },
  {
    "id": "GGQeT",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Medium",
    "rating": 1852,
    "popularity": 93,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Finish with the classic Morphy's mate pattern. Deliver the famous opera-style mate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r2q1r2/5kpp/pp2Rn2/3n2B1/PQBP4/8/1P3PPP/4R1K1 b - - 0 18",
    "fen": "r2q1r2/5kpp/pp2Rn2/6B1/PnBP4/8/1P3PPP/4R1K1 w - - 0 19",
    "preMove": "Nxb4",
    "solution": [
      "Rxf6#"
    ]
  },
  {
    "id": "qaseA",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 1118,
    "popularity": 93,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver the famous opera-style mate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r3r3/kp2Np2/pR1pb2p/5p2/3B4/5B2/PPP3PP/2K5 b - - 2 29",
    "fen": "r7/kp2rp2/pR1pb2p/5p2/3B4/5B2/PPP3PP/2K5 w - - 0 30",
    "preMove": "Rxe7",
    "solution": [
      "Rxb7#"
    ]
  },
  {
    "id": "k01eS",
    "title": "Mate in 1",
    "theme": "BlindSwineMate",
    "difficulty": "Easy",
    "rating": 1426,
    "popularity": 92,
    "description": "Break through with rooks on the seventh rank. Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "8/8/p4r1r/1p1n1pkp/q1pPpR1R/P1P3P1/5K2/1QB5 b - - 3 46",
    "fen": "8/8/p4r1r/1p3pkp/q1pPpR1R/P1n3P1/5K2/1QB5 w - - 0 47",
    "preMove": "Nxc3",
    "solution": [
      "Rfg4#"
    ]
  },
  {
    "id": "Wgfru",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Medium",
    "rating": 1704,
    "popularity": 91,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver the famous opera-style mate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "6k1/Qb5p/3bp3/2n5/3B4/5r2/PP3PqP/R4RK1 w - - 0 22",
    "fen": "6k1/Qb5p/3bp3/2n5/3B4/5r2/PP3PKP/R4R2 b - - 0 22",
    "preMove": "Kxg2",
    "solution": [
      "Rg3#"
    ]
  },
  {
    "id": "aTciq",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Medium",
    "rating": 1838,
    "popularity": 91,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver the famous opera-style mate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "3r3r/ppkn1pp1/2pRbn2/8/5B2/1PN3P1/P3PPB1/R5K1 b - - 2 21",
    "fen": "3r3r/ppkn1pp1/2pRb3/7n/5B2/1PN3P1/P3PPB1/R5K1 w - - 3 22",
    "preMove": "Nh5",
    "solution": [
      "Rxc6#"
    ]
  },
  {
    "id": "9g50w",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Medium",
    "rating": 1728,
    "popularity": 87,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver the famous opera-style mate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r4rk1/pp3pQp/2p1bR2/2b1B3/8/2NBq3/PPP3PP/R6K b - - 0 18",
    "fen": "r4r2/pp3pkp/2p1bR2/2b1B3/8/2NBq3/PPP3PP/R6K w - - 0 19",
    "preMove": "Kxg7",
    "solution": [
      "Rg6#"
    ]
  },
  {
    "id": "enU0X",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Medium",
    "rating": 1556,
    "popularity": 83,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver the famous opera-style mate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2kr4/1p1n1ppb/3Rp2p/p1p4P/2P2BP1/PP3B2/5P2/6K1 b - - 0 30",
    "fen": "3r4/1pkn1ppb/3Rp2p/p1p4P/2P2BP1/PP3B2/5P2/6K1 w - - 1 31",
    "preMove": "Kc7",
    "solution": [
      "Rc6#"
    ]
  },
  {
    "id": "9WweL",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Medium",
    "rating": 1736,
    "popularity": 83,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Finish with the classic Morphy's mate pattern.",
    "initialFen": "2k4r/1R6/p3p3/3pPp2/3P1Pr1/5Q1P/2qb3K/2B4R w - - 1 28",
    "fen": "2k4r/1R6/p3p3/3pPp2/3P1Pr1/1Q5P/2qb3K/2B4R b - - 2 28",
    "preMove": "Qb3",
    "solution": [
      "Bxf4#"
    ]
  },
  {
    "id": "P4KJ1",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Medium",
    "rating": 1990,
    "popularity": 94,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Finish with the classic Morphy's mate pattern. Deliver the famous opera-style mate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2k1r3/p4ppp/2p5/2b5/2q3b1/4rP2/PPN1QKPP/R3R3 w - - 0 19",
    "fen": "2k1r3/p4ppp/2p5/2b5/2Q3b1/4rP2/PPN2KPP/R3R3 b - - 0 19",
    "preMove": "Qxc4",
    "solution": [
      "Rxf3#"
    ]
  },
  {
    "id": "M73C2",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 991,
    "popularity": 78,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Finish with the classic Morphy's mate pattern. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2rr4/pp2kppp/2b1pn2/2b2N2/8/1BP1B2P/PP3PP1/2KRR3 b - - 6 17",
    "fen": "2rr4/pp2kppp/2b2n2/2b2p2/8/1BP1B2P/PP3PP1/2KRR3 w - - 0 18",
    "preMove": "exf5",
    "solution": [
      "Bxc5#"
    ]
  },
  {
    "id": "UQFlC",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Medium",
    "rating": 1788,
    "popularity": 86,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver the famous opera-style mate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r1b2rk1/1p3pQp/p3pR2/2b1B3/8/3Bq3/PPP3PP/3R3K b - - 0 21",
    "fen": "r1b2r2/1p3pkp/p3pR2/2b1B3/8/3Bq3/PPP3PP/3R3K w - - 0 22",
    "preMove": "Kxg7",
    "solution": [
      "Rg6#"
    ]
  },
  {
    "id": "X9jwW",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 1127,
    "popularity": 29,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Finish with the classic Morphy's mate pattern. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "rr6/1bknbppp/2p5/p2PP3/P7/2B1P3/2R2PPP/1R4K1 b - - 0 25",
    "fen": "rr6/1bknbppp/8/p2pP3/P7/2B1P3/2R2PPP/1R4K1 w - - 0 26",
    "preMove": "cxd5",
    "solution": [
      "Bxa5#"
    ]
  },
  {
    "id": "wKqsg",
    "title": "Mate in 1",
    "theme": "DiscoveredAttack",
    "difficulty": "Medium",
    "rating": 1946,
    "popularity": 92,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r1bq1r2/4b1p1/p1n1N2k/1pppPp1P/5BQ1/2P1P3/PP3PP1/R3K2R b KQ - 0 16",
    "fen": "r1bq1r2/4b3/p1n1N2k/1pppPppP/5BQ1/2P1P3/PP3PP1/R3K2R w KQ g6 0 17",
    "preMove": "g5",
    "solution": [
      "hxg6#"
    ]
  },
  {
    "id": "eNVpv",
    "title": "Mate in 1",
    "theme": "DiscoveredAttack",
    "difficulty": "Medium",
    "rating": 1936,
    "popularity": 90,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "rn1q1r2/pbpp2p1/1p2N2k/4Pp1P/1b1P2Q1/2n5/PPPB1PP1/R3K2R b KQ - 0 13",
    "fen": "rn1q1r2/pbpp4/1p2N2k/4PppP/1b1P2Q1/2n5/PPPB1PP1/R3K2R w KQ g6 0 14",
    "preMove": "g5",
    "solution": [
      "hxg6#"
    ]
  },
  {
    "id": "l8O91",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 1412,
    "popularity": 97,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Finish with the classic Morphy's mate pattern. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "rn3rk1/pp3Rqp/2pb4/6pb/2B4P/2N3Q1/PPP3P1/5R1K b - - 0 18",
    "fen": "rn3rk1/pp3Rqp/2p5/6pb/2B4P/2N3b1/PPP3P1/5R1K w - - 0 19",
    "preMove": "Bxg3",
    "solution": [
      "Rxf8#"
    ]
  },
  {
    "id": "x3u0I",
    "title": "Mate in 1",
    "theme": "DiscoveredAttack",
    "difficulty": "Medium",
    "rating": 1838,
    "popularity": 84,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r1bq1r2/pp2b1p1/2n1N2k/2p1Pp1P/3P2Q1/2P5/P1P3P1/R1B1K2R b KQ - 0 15",
    "fen": "r1bq1r2/pp2b3/2n1N2k/2p1PppP/3P2Q1/2P5/P1P3P1/R1B1K2R w KQ g6 0 16",
    "preMove": "g5",
    "solution": [
      "hxg6#"
    ]
  },
  {
    "id": "emOE4",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 1142,
    "popularity": 96,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Finish with the classic Morphy's mate pattern. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "1r3rk1/5Rpp/p2p4/2pB3Q/P1P1P3/3P4/1pq3PP/5RK1 b - - 0 24",
    "fen": "1r3rk1/5Rpp/p2p4/2pB3Q/P1P1P3/3P4/2q3PP/1q3RK1 w - - 0 25",
    "preMove": "b1=Q",
    "solution": [
      "Rxf8#"
    ]
  },
  {
    "id": "8mSyT",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 1161,
    "popularity": 95,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Finish with the classic Morphy's mate pattern. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "1r1q1rk1/ppp2Rbp/2np4/3B2p1/7Q/3PB2P/PPP3P1/5RK1 b - - 0 18",
    "fen": "1r1q1rk1/ppp2Rbp/2np4/3B4/7p/3PB2P/PPP3P1/5RK1 w - - 0 19",
    "preMove": "gxh4",
    "solution": [
      "Rxf8#"
    ]
  },
  {
    "id": "lTWnk",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 814,
    "popularity": 95,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Finish with the classic Morphy's mate pattern. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r2q1rk1/ppp2Rpp/1b1p4/8/2B1P1Q1/2N1n3/PP4PP/5R1K b - - 0 16",
    "fen": "r2q1rk1/ppp2Rpp/1b1p4/8/2B1P1n1/2N5/PP4PP/5R1K w - - 0 17",
    "preMove": "Nxg4",
    "solution": [
      "Rxf8#"
    ]
  },
  {
    "id": "52kjX",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Medium",
    "rating": 1662,
    "popularity": 94,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "1r3rkb/pb5p/1pn1R1p1/3B2BN/3p2p1/2P5/PP3PPP/R5K1 b - - 0 21",
    "fen": "1r1n1rkb/pb5p/1p2R1p1/3B2BN/3p2p1/2P5/PP3PPP/R5K1 w - - 1 22",
    "preMove": "Nd8",
    "solution": [
      "Rxg6#"
    ]
  },
  {
    "id": "5Q26v",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 923,
    "popularity": 92,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Finish with the classic Morphy's mate pattern. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "3r1rk1/pb1q1Rbp/1pn3p1/2p5/6Q1/P1PP2N1/B1PB2PP/5RK1 b - - 0 18",
    "fen": "3r1rk1/pb3Rbp/1pn3p1/2p5/6q1/P1PP2N1/B1PB2PP/5RK1 w - - 0 19",
    "preMove": "Qxg4",
    "solution": [
      "Rxf8#"
    ]
  },
  {
    "id": "Jtx8g",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 832,
    "popularity": 92,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Finish with the classic Morphy's mate pattern. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r2q1rk1/ppp2Rpp/3p4/6b1/1nBPP3/2N4P/PPPQK1P1/5R2 b - - 0 16",
    "fen": "r2q1rk1/ppp2Rpp/3p4/8/1nBPP3/2N4P/PPPbK1P1/5R2 w - - 0 17",
    "preMove": "Bxd2",
    "solution": [
      "Rxf8#"
    ]
  },
  {
    "id": "p2lZK",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Medium",
    "rating": 1822,
    "popularity": 91,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "3r1bkr/pp5p/2n1R1p1/q4Q2/2B5/4B3/PP3PPP/R5K1 b - - 1 19",
    "fen": "3r1bkr/pp5p/2n1R1p1/5q2/2B5/4B3/PP3PPP/R5K1 w - - 0 20",
    "preMove": "Qxf5",
    "solution": [
      "Rxg6#"
    ]
  },
  {
    "id": "xQcQv",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 924,
    "popularity": 91,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Finish with the classic Morphy's mate pattern. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r1bq1rk1/4bRpp/2pp4/p5Nn/Pp2P3/1B1P2QP/1PPN2P1/5RK1 b - - 0 18",
    "fen": "r1bq1rk1/4bRpp/2pp4/p5N1/Pp2P3/1B1P2nP/1PPN2P1/5RK1 w - - 0 19",
    "preMove": "Nxg3",
    "solution": [
      "Rxf8#"
    ]
  },
  {
    "id": "xKFn2",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 982,
    "popularity": 90,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Finish with the classic Morphy's mate pattern. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r1b2rk1/pppp1Rbp/6p1/8/2BnP3/3QB3/P1q3PP/5RK1 b - - 0 16",
    "fen": "r1b2rk1/pppp1Rbp/6p1/8/2BnP3/3qB3/P5PP/5RK1 w - - 0 17",
    "preMove": "Qxd3",
    "solution": [
      "Rxf8#"
    ]
  },
  {
    "id": "25b6T",
    "title": "Mate in 1",
    "theme": "DiscoveredAttack",
    "difficulty": "Easy",
    "rating": 1059,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r4rk1/1pp2pBp/p1np1q2/5P2/8/5n2/PPPQ1P1P/2KR1BR1 b - - 0 16",
    "fen": "r4rk1/1pp2pBp/p1np1q2/5P2/8/8/PPPn1P1P/2KR1BR1 w - - 0 17",
    "preMove": "Nxd2",
    "solution": [
      "Bxf6#"
    ]
  },
  {
    "id": "FZZWc",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 1065,
    "popularity": 87,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Finish with the classic Morphy's mate pattern. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "5rk1/rpp2Rpn/p2p3p/6q1/2BnP3/P1NP3b/1PPQ2PN/5RK1 b - - 0 16",
    "fen": "5rk1/rpp2Rpn/p2p3p/8/2BnP3/P1NP3b/1PPq2PN/5RK1 w - - 0 17",
    "preMove": "Qxd2",
    "solution": [
      "Rxf8#"
    ]
  },
  {
    "id": "vJwaP",
    "title": "Mate in 1",
    "theme": "DiscoveredAttack",
    "difficulty": "Easy",
    "rating": 1179,
    "popularity": 99,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r4rk1/5pBp/ppq1pb2/2p5/8/1nPP2RP/2PQ1PP1/1R4K1 b - - 0 21",
    "fen": "r4rk1/5pBp/ppq1pb2/2p5/8/2PP2RP/2Pn1PP1/1R4K1 w - - 0 22",
    "preMove": "Nxd2",
    "solution": [
      "Bxf6#"
    ]
  },
  {
    "id": "bhMt5",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 881,
    "popularity": 86,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Finish with the classic Morphy's mate pattern. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r4rk1/pp1n1Rpp/2pp3q/2b5/2BNP1b1/2N1P3/PPP1Q1PP/5RK1 b - - 0 14",
    "fen": "r4rk1/pp1n1Rpp/2pp3q/2b5/2BNP3/2N1P3/PPP1b1PP/5RK1 w - - 0 15",
    "preMove": "Bxe2",
    "solution": [
      "Rxf8#"
    ]
  },
  {
    "id": "p45I8",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 1096,
    "popularity": 86,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2bq2kr/2p1n2p/pr2pQ2/1p1pP2p/5PB1/6R1/PPP3PP/5RK1 b - - 3 27",
    "fen": "2b2qkr/2p1n2p/pr2pQ2/1p1pP2p/5PB1/6R1/PPP3PP/5RK1 w - - 4 28",
    "preMove": "Qf8",
    "solution": [
      "Bxe6#"
    ]
  },
  {
    "id": "60oJt",
    "title": "Mate in 1",
    "theme": "DiscoveredAttack",
    "difficulty": "Easy",
    "rating": 988,
    "popularity": 97,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r4rk1/pp3pBp/4pq2/4n3/3p2R1/3Q4/PPP2PPP/R5K1 b - - 0 17",
    "fen": "r4rk1/pp3pBp/4pq2/8/3p2R1/3n4/PPP2PPP/R5K1 w - - 0 18",
    "preMove": "Nxd3",
    "solution": [
      "Bxf6#"
    ]
  },
  {
    "id": "lLLPX",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Medium",
    "rating": 1672,
    "popularity": 81,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Finish with the classic Morphy's mate pattern. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r2q1rk1/1ppb1Rpn/3p3p/p5b1/P2PP3/1BNN4/1PPQ2PP/5RK1 b - - 0 16",
    "fen": "r2q1rk1/1ppb1Rpn/3p3p/p7/P2PP3/1BNN4/1PPb2PP/5RK1 w - - 0 17",
    "preMove": "Bxd2",
    "solution": [
      "Rxf8#"
    ]
  },
  {
    "id": "jeEOc",
    "title": "Mate in 1",
    "theme": "DiscoveredAttack",
    "difficulty": "Easy",
    "rating": 1209,
    "popularity": 93,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r4rk1/1pp2pBp/2np1q2/5P2/p7/P4n2/1PPQ1P1P/2KR1BR1 b - - 0 17",
    "fen": "r4rk1/1pp2pBp/2np1q2/5P2/p7/P7/1PPn1P1P/2KR1BR1 w - - 0 18",
    "preMove": "Nxd2",
    "solution": [
      "Bxf6#"
    ]
  },
  {
    "id": "ozDRS",
    "title": "Mate in 1",
    "theme": "DiscoveredAttack",
    "difficulty": "Easy",
    "rating": 1001,
    "popularity": 93,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r1b2rk1/pp3pBp/4pq2/8/3n2R1/P7/1PB1QP1P/R4K2 b - - 0 19",
    "fen": "r1b2rk1/pp3pBp/4pq2/8/6R1/P7/1PB1nP1P/R4K2 w - - 0 20",
    "preMove": "Nxe2",
    "solution": [
      "Bxf6#"
    ]
  },
  {
    "id": "zTpng",
    "title": "Mate in 1",
    "theme": "DiscoveredAttack",
    "difficulty": "Easy",
    "rating": 866,
    "popularity": 91,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "6nr/ppp1k3/3pp3/2b4p/4P1N1/2PP1Rp1/PP4P1/R6K w - - 0 22",
    "fen": "6nr/ppp1k3/3pp3/2b4p/4P1N1/2PP1Rp1/PP4P1/5R1K b - - 1 22",
    "preMove": "Raf1",
    "solution": [
      "hxg4#"
    ]
  },
  {
    "id": "S0KIM",
    "title": "Mate in 1",
    "theme": "DiscoveredAttack",
    "difficulty": "Easy",
    "rating": 923,
    "popularity": 84,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r4rk1/ppp2pBp/1n1p1q2/8/2QPP3/5P2/PP3P1P/R5RK b - - 0 18",
    "fen": "r4rk1/ppp2pBp/3p1q2/8/2nPP3/5P2/PP3P1P/R5RK w - - 0 19",
    "preMove": "Nxc4",
    "solution": [
      "Bxf6#"
    ]
  },
  {
    "id": "CpNA9",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Medium",
    "rating": 1653,
    "popularity": 93,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "rkb4r/p5pp/1p1RP3/8/5Bq1/5Q2/PPP2PPP/6K1 b - - 0 21",
    "fen": "rkb4r/p5pp/1p1RP3/8/5B2/5q2/PPP2PPP/6K1 w - - 0 22",
    "preMove": "Qxf3",
    "solution": [
      "Rxb6#"
    ]
  },
  {
    "id": "MIR54",
    "title": "Mate in 1",
    "theme": "CollinearMove",
    "difficulty": "Medium",
    "rating": 1550,
    "popularity": 91,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Deliver the famous opera-style mate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "bbr1r1k1/5Rpp/p1n2q2/1pB5/8/P4N2/BP2QPPP/2R3K1 b - - 0 21",
    "fen": "bbr3k1/5Rpp/p1n2q2/1pB5/8/P4N2/BP2rPPP/2R3K1 w - - 0 22",
    "preMove": "Rxe2",
    "solution": [
      "Rf8#"
    ]
  },
  {
    "id": "b49ni",
    "title": "Mate in 1",
    "theme": "BlindSwineMate",
    "difficulty": "Medium",
    "rating": 1556,
    "popularity": 91,
    "description": "Break through with rooks on the seventh rank. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "8/1p3kp1/pBpp4/3bp3/6P1/2PPRr1r/PP1Q1P1K/5R2 w - - 0 30",
    "fen": "8/1p3kp1/pBpp4/3bp3/6P1/2PPRr1r/PP1Q1PK1/5R2 b - - 1 30",
    "preMove": "Kg2",
    "solution": [
      "Rfg3#"
    ]
  },
  {
    "id": "bTbqF",
    "title": "Mate in 1",
    "theme": "CollinearMove",
    "difficulty": "Medium",
    "rating": 1583,
    "popularity": 84,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r1b2r1k/pp4pp/2n2b2/3Q4/N7/1P4P1/PB2PqBP/R3R1K1 w - - 0 18",
    "fen": "r1b2r1k/pp4pp/2n2b2/3Q4/N7/1P4P1/PB2PKBP/R3R3 b - - 0 18",
    "preMove": "Kxf2",
    "solution": [
      "Bd4#"
    ]
  },
  {
    "id": "fmpsz",
    "title": "Mate in 1",
    "theme": "CollinearMove",
    "difficulty": "Medium",
    "rating": 1799,
    "popularity": 82,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Deliver the famous opera-style mate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "5rk1/p4ppp/b1p2q2/2bp4/1P3Q2/6P1/P1P2rBP/1RBR2K1 w - - 0 18",
    "fen": "5rk1/p4ppp/b1p2Q2/2bp4/1P6/6P1/P1P2rBP/1RBR2K1 b - - 0 18",
    "preMove": "Qxf6",
    "solution": [
      "Rf1#"
    ]
  },
  {
    "id": "NKM6v",
    "title": "Mate in 1",
    "theme": "AdvancedPawn",
    "difficulty": "Easy",
    "rating": 1116,
    "popularity": 93,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Finish with the classic Morphy's mate pattern.",
    "initialFen": "r6k/3q1r1R/p1bP1P1Q/1p1pB2p/5P2/8/PPP4P/1K4R1 b - - 0 28",
    "fen": "r6k/3q3r/p1bP1P1Q/1p1pB2p/5P2/8/PPP4P/1K4R1 w - - 0 29",
    "preMove": "Rxh7",
    "solution": [
      "f7#"
    ]
  },
  {
    "id": "g9po8",
    "title": "Mate in 1",
    "theme": "DiscoveredAttack",
    "difficulty": "Medium",
    "rating": 1813,
    "popularity": 89,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "rn2qb1r/pp1bpQpp/1n1p3k/2p4P/3P4/2P5/PP3PP1/RNB1K2R b KQ - 0 14",
    "fen": "rn2qb1r/pp1bpQ1p/1n1p3k/2p3pP/3P4/2P5/PP3PP1/RNB1K2R w KQ g6 0 15",
    "preMove": "g5",
    "solution": [
      "hxg6#"
    ]
  },
  {
    "id": "PDiR1",
    "title": "Mate in 1",
    "theme": "DiscoveredAttack",
    "difficulty": "Medium",
    "rating": 1813,
    "popularity": 85,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "rnbq1r2/p1p1b1p1/1p2N2k/4Pp1P/6Q1/2P5/P1P2PP1/R1B1K2R b KQ - 0 14",
    "fen": "rnbq1r2/p1p1b3/1p2N2k/4PppP/6Q1/2P5/P1P2PP1/R1B1K2R w KQ g6 0 15",
    "preMove": "g5",
    "solution": [
      "hxg6#"
    ]
  },
  {
    "id": "FxLZX",
    "title": "Mate in 1",
    "theme": "AdvancedPawn",
    "difficulty": "Easy",
    "rating": 1066,
    "popularity": 97,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "1r1qkr2/p1pnb1p1/1p2P2p/1Qn4b/P1B4B/5P2/1PPN2PP/R3R1K1 b - - 0 19",
    "fen": "1r1qkr2/p1pn2p1/1p2P2p/1Qn4b/P1B4b/5P2/1PPN2PP/R3R1K1 w - - 0 20",
    "preMove": "Bxh4",
    "solution": [
      "exd7#"
    ]
  },
  {
    "id": "iEGHX",
    "title": "Mate in 1",
    "theme": "AdvancedPawn",
    "difficulty": "Medium",
    "rating": 1763,
    "popularity": 92,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "3rr2k/p1p4P/1n6/2b3P1/5BQ1/2N3R1/PPP1p3/R2qK3 w Q - 3 27",
    "fen": "3rr2k/p1p4P/1n6/2b3P1/5BQ1/6R1/PPP1p3/R2NK3 b Q - 0 27",
    "preMove": "Nxd1",
    "solution": [
      "exd1=Q#"
    ]
  },
  {
    "id": "JLcgw",
    "title": "Mate in 1",
    "theme": "AdvancedPawn",
    "difficulty": "Easy",
    "rating": 1028,
    "popularity": 88,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r2kQ2r/3P1B2/1qp2b1p/5pp1/1p6/pPn3BP/P1P2P2/2KR3R b - - 2 27",
    "fen": "r2kr3/3P1B2/1qp2b1p/5pp1/1p6/pPn3BP/P1P2P2/2KR3R w - - 0 28",
    "preMove": "Rxe8",
    "solution": [
      "dxe8=Q#"
    ]
  },
  {
    "id": "2Kgtf",
    "title": "Mate in 1",
    "theme": "CollinearMove",
    "difficulty": "Medium",
    "rating": 1925,
    "popularity": 96,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r1bqr1k1/p1p2pp1/1p3n1p/3Nb3/7B/P7/1P3PPP/R2QKBNR w KQ - 0 13",
    "fen": "r1bqr1k1/p1p2pp1/1p3B1p/3Nb3/8/P7/1P3PPP/R2QKBNR b KQ - 0 13",
    "preMove": "Bxf6",
    "solution": [
      "Bc3#"
    ]
  },
  {
    "id": "I9V5k",
    "title": "Mate in 1",
    "theme": "AdvancedPawn",
    "difficulty": "Easy",
    "rating": 989,
    "popularity": 95,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "5r1k/4R1PP/8/6K1/8/8/5p2/8 b - - 0 60",
    "fen": "5r2/4R1Pk/8/6K1/8/8/5p2/8 w - - 0 61",
    "preMove": "Kxh7",
    "solution": [
      "gxf8=Q#"
    ]
  },
  {
    "id": "CTUlh",
    "title": "Mate in 1",
    "theme": "DiscoveredAttack",
    "difficulty": "Easy",
    "rating": 1254,
    "popularity": 94,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2r1k1nr/1bqp1pp1/p3p3/1pb2P1p/4P1n1/1PNB2QP/PBP1N1PK/R4R2 w k - 5 16",
    "fen": "2r1k1nr/1bqp1pp1/p3p3/1pb2P1p/4P1P1/1PNB2Q1/PBP1N1PK/R4R2 b k - 0 16",
    "preMove": "hxg4",
    "solution": [
      "hxg4#"
    ]
  },
  {
    "id": "xNwAv",
    "title": "Mate in 1",
    "theme": "DiscoveredAttack",
    "difficulty": "Medium",
    "rating": 1666,
    "popularity": 92,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "4rrk1/p1pp2pp/b1p5/8/8/2PNb3/P1PK2PP/R2Q1R2 w - - 4 16",
    "fen": "4rrk1/p1pp2pp/b1p5/8/8/2PNb3/P1P1K1PP/R2Q1R2 b - - 5 16",
    "preMove": "Ke2",
    "solution": [
      "Bc1#"
    ]
  },
  {
    "id": "fA3GX",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 1445,
    "popularity": 90,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r5k1/5qQp/p3R3/3B4/7P/6RK/nr6/2q5 b - - 0 37",
    "fen": "r5k1/6qp/p3R3/3B4/7P/6RK/nr6/2q5 w - - 0 38",
    "preMove": "Qxg7",
    "solution": [
      "Re8#"
    ]
  },
  {
    "id": "li73P",
    "title": "Mate in 1",
    "theme": "AdvancedPawn",
    "difficulty": "Easy",
    "rating": 901,
    "popularity": 52,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "4k1r1/p3PP1R/3p4/3P1K2/8/8/1pp5/8 b - - 0 47",
    "fen": "6r1/p3kP1R/3p4/3P1K2/8/8/1pp5/8 w - - 0 48",
    "preMove": "Kxe7",
    "solution": [
      "fxg8=Q#"
    ]
  },
  {
    "id": "HZeKS",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 862,
    "popularity": 99,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "rn1qr2k/pp2bpRp/2p2p1B/8/3P4/5P1P/PPP2P2/R2QKB2 w Q - 1 12",
    "fen": "rn1qr2k/pp2bR1p/2p2p1B/8/3P4/5P1P/PPP2P2/R2QKB2 b Q - 0 12",
    "preMove": "Rxf7",
    "solution": [
      "Bb4#"
    ]
  },
  {
    "id": "Pf4h2",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 1395,
    "popularity": 99,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2krr3/pp1nbpp1/1qp2nbp/3p4/3P2P1/1P1B1NBP/P1P2P2/R2QKN1R w KQ - 3 15",
    "fen": "2krr3/pp1nbpp1/1qp2nBp/3p4/3P2P1/1P3NBP/P1P2P2/R2QKN1R b KQ - 0 15",
    "preMove": "Bxg6",
    "solution": [
      "Bb4#"
    ]
  },
  {
    "id": "tORo8",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 1473,
    "popularity": 99,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Deliver the famous opera-style mate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "1k4r1/ppR2p1p/2n2p2/8/4PB1P/2q2P1B/5P1K/5R2 b - - 0 20",
    "fen": "1k4r1/ppR2p1p/2n2p2/8/4PB1P/5q1B/5P1K/5R2 w - - 0 21",
    "preMove": "Qxf3",
    "solution": [
      "Rc8#"
    ]
  },
  {
    "id": "xdP6s",
    "title": "Mate in 1",
    "theme": "DiscoveredAttack",
    "difficulty": "Medium",
    "rating": 1652,
    "popularity": 86,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r1b1RBk1/pppq3p/2n3p1/8/2Q3P1/7P/P1P2P2/bN4K1 b - - 4 18",
    "fen": "r1b1RBk1/ppp2q1p/2n3p1/8/2Q3P1/7P/P1P2P2/bN4K1 w - - 5 19",
    "preMove": "Qf7",
    "solution": [
      "Bh6#"
    ]
  },
  {
    "id": "FlhLy",
    "title": "Mate in 1",
    "theme": "DiscoveredAttack",
    "difficulty": "Easy",
    "rating": 926,
    "popularity": 97,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2rkr3/1p3p1p/p1p1pPpP/2QqB1P1/1P1P4/P3P3/4KP2/3R4 b - - 2 38",
    "fen": "2rkr3/1p3p1p/p1p1pPpP/2q1B1P1/1P1P4/P3P3/4KP2/3R4 w - - 0 39",
    "preMove": "Qxc5",
    "solution": [
      "dxc5#"
    ]
  },
  {
    "id": "YsBPl",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 1390,
    "popularity": 97,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Deliver the famous opera-style mate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "4r1qk/pp4Rp/8/3p3Q/2n3b1/2BB2P1/PP5P/2K5 b - - 0 27",
    "fen": "4r1qk/pp4Rp/8/3p3b/2n5/2BB2P1/PP5P/2K5 w - - 0 28",
    "preMove": "Bxh5",
    "solution": [
      "Rxh7#"
    ]
  },
  {
    "id": "ehjSy",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Medium",
    "rating": 1809,
    "popularity": 97,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Deliver the famous opera-style mate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r2r2k1/ppp2R1p/2n3pB/2q2b2/2B1Q3/8/PPP3PP/R6K b - - 2 18",
    "fen": "r2r2k1/ppp2R1p/2n3pB/2q5/2B1b3/8/PPP3PP/R6K w - - 0 19",
    "preMove": "Bxe4",
    "solution": [
      "Rf8#"
    ]
  },
  {
    "id": "u5j6g",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 1294,
    "popularity": 97,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2krr3/1p4pp/p1npbp2/2p5/2P5/PP3N2/1B1PKPPP/R3R3 w - - 0 17",
    "fen": "2krr3/1p4pp/p1npbp2/2p5/2P5/PP3N2/1B1PKPPP/3RR3 b - - 1 17",
    "preMove": "Rad1",
    "solution": [
      "Bxc4#"
    ]
  },
  {
    "id": "zQ5qo",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Medium",
    "rating": 1738,
    "popularity": 97,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "6b1/6B1/5Pk1/pp1R4/2r5/PKP5/2P5/8 w - - 1 46",
    "fen": "6b1/6B1/5Pk1/pR6/2r5/PKP5/2P5/8 b - - 0 46",
    "preMove": "Rxb5",
    "solution": [
      "Rb4#"
    ]
  },
  {
    "id": "VIz6w",
    "title": "Mate in 1",
    "theme": "BalestraMate",
    "difficulty": "Easy",
    "rating": 828,
    "popularity": 96,
    "description": "Finish with a queen and bishop battery mate. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2b2r1k/1p6/p2qp2Q/3pn2P/1P4B1/2P2PR1/6PK/8 b - - 13 39",
    "fen": "2b2rk1/1p6/p2qp2Q/3pn2P/1P4B1/2P2PR1/6PK/8 w - - 14 40",
    "preMove": "Kg8",
    "solution": [
      "Bxe6#"
    ]
  },
  {
    "id": "YWXFl",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 1168,
    "popularity": 96,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Finish with the classic Morphy's mate pattern. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r1q2k1r/p3Qppp/5n2/1B5b/8/4BN2/PP3PPP/3RR1K1 b - - 0 18",
    "fen": "r1q4r/p3kppp/5n2/1B5b/8/4BN2/PP3PPP/3RR1K1 w - - 0 19",
    "preMove": "Kxe7",
    "solution": [
      "Bc5#"
    ]
  },
  {
    "id": "aTzeN",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 1159,
    "popularity": 96,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "N1bkr3/pp1pbppp/8/3p4/8/8/PqP1QPPP/3RKB1R w K - 2 16",
    "fen": "N1bkr3/pp1pbppp/8/3p4/8/3Q4/PqP2PPP/3RKB1R b K - 3 16",
    "preMove": "Qd3",
    "solution": [
      "Bb4#"
    ]
  },
  {
    "id": "u8vrb",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 1089,
    "popularity": 96,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2kr2r1/pp3p2/3b4/2p2p1p/2bN4/2N3PP/PPPK1P2/3RR3 w - - 0 20",
    "fen": "2kr2r1/pp3p2/3b4/2p2p1p/2b5/2N3PP/PPPKNP2/3RR3 b - - 1 20",
    "preMove": "Nde2",
    "solution": [
      "Bf4#"
    ]
  },
  {
    "id": "BTk7Q",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 1150,
    "popularity": 95,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "rn2r2k/ppp1Np1p/6p1/4b3/5n2/2P5/PP3PPP/3RKBNR w K - 1 13",
    "fen": "rn2r2k/ppp2p1p/6p1/3Nb3/5n2/2P5/PP3PPP/3RKBNR b K - 2 13",
    "preMove": "Nd5",
    "solution": [
      "Bxc3#"
    ]
  },
  {
    "id": "PLQj2",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Medium",
    "rating": 1588,
    "popularity": 95,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "4r3/pp3kpp/5n2/2bNn3/8/8/PPP3PP/3RKB1R w K - 4 18",
    "fen": "4r3/pp3kpp/5N2/2b1n3/8/8/PPP3PP/3RKB1R b K - 0 18",
    "preMove": "Nxf6",
    "solution": [
      "Nf3#"
    ]
  },
  {
    "id": "arW6A",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 963,
    "popularity": 95,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "Q1kr2nr/1pp1qp2/p3b3/4b3/8/2NB2Pp/PPP2P1P/2KR3R b - - 1 17",
    "fen": "Q2r2nr/1ppkqp2/p3b3/4b3/8/2NB2Pp/PPP2P1P/2KR3R w - - 2 18",
    "preMove": "Kd7",
    "solution": [
      "Bb5#"
    ]
  },
  {
    "id": "daCOo",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Medium",
    "rating": 1815,
    "popularity": 95,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Finish with the classic Morphy's mate pattern. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "4rrk1/p1p3pp/2p5/2bp1bq1/8/2P2N2/PP4PP/R2Q1KNR w - - 0 16",
    "fen": "4rrk1/p1p3pp/2p5/2bp1bN1/8/2P5/PP4PP/R2Q1KNR b - - 0 16",
    "preMove": "Nxg5",
    "solution": [
      "Bd3#"
    ]
  },
  {
    "id": "daIWS",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 856,
    "popularity": 95,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Finish with the classic Morphy's mate pattern. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r4rk1/2Q2Rpp/3Pn3/pp6/8/qBP5/2P3PP/5RK1 b - - 0 21",
    "fen": "r4rk1/2n2Rpp/3P4/pp6/8/qBP5/2P3PP/5RK1 w - - 0 22",
    "preMove": "Nxc7",
    "solution": [
      "Rxf8#"
    ]
  },
  {
    "id": "mdqbl",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 1114,
    "popularity": 95,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Finish with the classic Morphy's mate pattern. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "5r1k/pp1Rr1pp/2p2bp1/8/8/1QP3P1/PP3qBP/3R2K1 w - - 0 20",
    "fen": "5r1k/pp1Rr1pp/2p2bp1/8/8/1QP3P1/PP3KBP/3R4 b - - 0 20",
    "preMove": "Kxf2",
    "solution": [
      "Bd4#"
    ]
  },
  {
    "id": "vuUL0",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Medium",
    "rating": 1587,
    "popularity": 95,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Deliver the famous opera-style mate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2r1r1k1/p5Rp/1p3Bp1/4bn2/b1B5/8/P5PP/7K b - - 3 38",
    "fen": "2r1r2k/p5Rp/1p3Bp1/4bn2/b1B5/8/P5PP/7K w - - 4 39",
    "preMove": "Kh8",
    "solution": [
      "Rg8#"
    ]
  },
  {
    "id": "0H8LG",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Hard",
    "rating": 2004,
    "popularity": 94,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Deliver the famous opera-style mate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2k1r3/ppp2ppp/b7/3p4/P2P1b2/1BN1rP2/1PPK2PP/R2R4 w - - 4 21",
    "fen": "2k1r3/ppp2ppp/b7/3N4/P2P1b2/1B2rP2/1PPK2PP/R2R4 b - - 0 21",
    "preMove": "Nxd5",
    "solution": [
      "Rd3#"
    ]
  },
  {
    "id": "2gFzC",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 832,
    "popularity": 94,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "1nkr2r1/1bp1qp2/pR2p2p/n3P1p1/P1B5/4B1Q1/3N1PPP/2R3K1 b - - 0 28",
    "fen": "1nkr2r1/1b2qp2/pp2p2p/n3P1p1/P1B5/4B1Q1/3N1PPP/2R3K1 w - - 0 29",
    "preMove": "cxb6",
    "solution": [
      "Bxe6#"
    ]
  },
  {
    "id": "61B2E",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 1195,
    "popularity": 94,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Finish with the classic Morphy's mate pattern. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "3r2k1/pp2nRpp/1q6/3r4/2B5/1P5P/P1P3P1/5R1K b - - 2 26",
    "fen": "3r2k1/pp2nRpp/1q6/8/2B5/1P5P/P1P3P1/3r1R1K w - - 3 27",
    "preMove": "Rd1",
    "solution": [
      "Rf8#"
    ]
  },
  {
    "id": "Txr0R",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Medium",
    "rating": 1959,
    "popularity": 94,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2r5/3r1kpp/1npbRp2/1p6/p2PN1P1/P1P2B1P/1P6/4R1K1 b - - 3 28",
    "fen": "2r5/3r2pp/1npbkp2/1p6/p2PN1P1/P1P2B1P/1P6/4R1K1 w - - 0 29",
    "preMove": "Kxe6",
    "solution": [
      "Ng5#"
    ]
  },
  {
    "id": "Ypqdn",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 1293,
    "popularity": 94,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Finish with the classic Morphy's mate pattern. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r4k1r/1pp1Qppp/p1q2n2/8/8/2N1BP2/PPP2P1P/2KRR3 b - - 0 14",
    "fen": "r6r/1pp1kppp/p1q2n2/8/8/2N1BP2/PPP2P1P/2KRR3 w - - 0 15",
    "preMove": "Kxe7",
    "solution": [
      "Bc5#"
    ]
  },
  {
    "id": "aOTBD",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Medium",
    "rating": 1707,
    "popularity": 94,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Finish with the classic Morphy's mate pattern. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "5rkq/pp2rR1n/6pP/2p5/2B5/2Q5/PPP5/1K3R2 b - - 0 30",
    "fen": "5rk1/pp2rR1n/6pP/2p5/2B5/2q5/PPP5/1K3R2 w - - 0 31",
    "preMove": "Qxc3",
    "solution": [
      "Rxf8#"
    ]
  },
  {
    "id": "5XrMF",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 909,
    "popularity": 93,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r3r1k1/pp2bppp/2p2n2/5b2/2Pp1q2/P2P3P/1P2NPP1/1R1QKB1R w K - 0 16",
    "fen": "r3r1k1/pp2bppp/2p2n2/5b2/2Pp1N2/P2P3P/1P3PP1/1R1QKB1R b K - 0 16",
    "preMove": "Nxf4",
    "solution": [
      "Bb4#"
    ]
  },
  {
    "id": "JGWJ6",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 868,
    "popularity": 93,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Finish with the classic Morphy's mate pattern. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "1r2rbk1/p4Qpp/2p5/3p3P/1q1P2P1/1P3B2/P5P1/4RRK1 b - - 0 28",
    "fen": "1r2rb2/p4kpp/2p5/3p3P/1q1P2P1/1P3B2/P5P1/4RRK1 w - - 0 29",
    "preMove": "Kxf7",
    "solution": [
      "Bxd5#"
    ]
  },
  {
    "id": "NutvE",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 977,
    "popularity": 93,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "3rr1k1/ppp1b1pp/n3N3/3n4/8/6B1/PPP2PPP/3RKB1R w K - 1 17",
    "fen": "3Nr1k1/ppp1b1pp/n7/3n4/8/6B1/PPP2PPP/3RKB1R b K - 0 17",
    "preMove": "Nxd8",
    "solution": [
      "Bb4#"
    ]
  },
  {
    "id": "OOaNG",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 936,
    "popularity": 93,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Finish with the classic Morphy's mate pattern. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r1b4r/ppp2ppp/2nk1n2/1B6/8/P1P1B3/5PpP/3RR1K1 b - - 3 18",
    "fen": "r1b4r/ppp1kppp/2n2n2/1B6/8/P1P1B3/5PpP/3RR1K1 w - - 4 19",
    "preMove": "Ke7",
    "solution": [
      "Bc5#"
    ]
  },
  {
    "id": "YV2xp",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 1054,
    "popularity": 93,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Finish with the classic Morphy's mate pattern. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "7r/ppp1kppp/5n2/7q/8/2N1B2P/PPP2PPK/3RR3 b - - 1 17",
    "fen": "4r3/ppp1kppp/5n2/7q/8/2N1B2P/PPP2PPK/3RR3 w - - 2 18",
    "preMove": "Re8",
    "solution": [
      "Bc5#"
    ]
  },
  {
    "id": "YWGaW",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Medium",
    "rating": 1821,
    "popularity": 93,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Deliver the famous opera-style mate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r2qr1k1/ppp2R1n/3p3B/4n1bQ/P3P1b1/2NP4/BPP3PP/R5K1 b - - 0 17",
    "fen": "r2qr1k1/ppp2R1n/3p3B/4n1bb/P3P3/2NP4/BPP3PP/R5K1 w - - 0 18",
    "preMove": "Bxh5",
    "solution": [
      "Rf8#"
    ]
  },
  {
    "id": "ZYcyd",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 1135,
    "popularity": 93,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Deliver the famous opera-style mate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r2q1rk1/pp1np1Rp/4B1p1/3P4/2PB4/8/P5PP/7K b - - 2 24",
    "fen": "r2q1r1k/pp1np1Rp/4B1p1/3P4/2PB4/8/P5PP/7K w - - 3 25",
    "preMove": "Kh8",
    "solution": [
      "Rg8#"
    ]
  },
  {
    "id": "2CF3d",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Medium",
    "rating": 1576,
    "popularity": 92,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Deliver the famous opera-style mate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r5k1/pp1n1Rpp/2p5/4r3/2B1P3/B1P5/P1P3PP/6K1 b - - 0 16",
    "fen": "r5k1/p2n1Rpp/2p5/1p2r3/2B1P3/B1P5/P1P3PP/6K1 w - - 0 17",
    "preMove": "b5",
    "solution": [
      "Rf8#"
    ]
  },
  {
    "id": "3ZP5N",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Medium",
    "rating": 1801,
    "popularity": 92,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Deliver the famous opera-style mate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "5r1k/pp5p/2p3p1/3q4/1P1bP3/2PB2Pb/P2Q1r1P/3RR1K1 w - - 0 25",
    "fen": "5r1k/pp5p/2p3p1/3P4/1P1b4/2PB2Pb/P2Q1r1P/3RR1K1 b - - 0 25",
    "preMove": "exd5",
    "solution": [
      "Rf1#"
    ]
  },
  {
    "id": "3iJ4F",
    "title": "Mate in 1",
    "theme": "CornerMate",
    "difficulty": "Medium",
    "rating": 1614,
    "popularity": 92,
    "description": "Trap the king in the corner. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "7k/4R2P/3p4/3Pb3/2p1N2P/r2n4/1r1B2PK/5R2 w - - 3 33",
    "fen": "7k/4R2P/3p4/3Pb3/2p1N2P/r2n3K/1r1B2P1/5R2 b - - 4 33",
    "preMove": "Kh3",
    "solution": [
      "Nf2#"
    ]
  },
  {
    "id": "BMDir",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 1486,
    "popularity": 92,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "8/8/1p4p1/7p/pkb5/2Rn4/2KBr1PP/8 b - - 7 54",
    "fen": "8/8/1p4p1/2n4p/pkb5/2R5/2KBr1PP/8 w - - 8 55",
    "preMove": "Nc5",
    "solution": [
      "Rb3#"
    ]
  },
  {
    "id": "EYZzo",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Medium",
    "rating": 1948,
    "popularity": 92,
    "description": "Deliver a hook mate with rook, knight, and pawn. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "B7/4PpRp/pk6/1p1P4/nK6/P7/1Pr5/1R1b4 w - - 2 34",
    "fen": "B7/4PpRp/pk6/1p1P4/n7/PK6/1Pr5/1R1b4 b - - 3 34",
    "preMove": "Kb3",
    "solution": [
      "Rxb2#"
    ]
  },
  {
    "id": "Kvo5R",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 1495,
    "popularity": 92,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2q1r3/3Qbkpp/p2B2b1/1p6/2p5/Pn3P2/1P4PP/3RKB1R w K - 1 25",
    "fen": "2Q1r3/4bkpp/p2B2b1/1p6/2p5/Pn3P2/1P4PP/3RKB1R b K - 0 25",
    "preMove": "Qxc8",
    "solution": [
      "Bh4#"
    ]
  },
  {
    "id": "P24Hj",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 926,
    "popularity": 92,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Finish with the classic Morphy's mate pattern. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "3r3k/pp4Rp/3qn3/5p2/8/P2rQP1P/1B6/6RK b - - 0 34",
    "fen": "3r3k/pp4Rp/3qn3/5p2/8/P3rP1P/1B6/6RK w - - 0 35",
    "preMove": "Rxe3",
    "solution": [
      "Rg8#"
    ]
  },
  {
    "id": "ZnC75",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 980,
    "popularity": 92,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Finish with the classic Morphy's mate pattern. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2r2r1k/1p2q2p/p2p1R2/3p4/8/1P6/PBQ2P1P/6RK b - - 0 27",
    "fen": "5r1k/1p2q2p/p2p1R2/3p4/8/1P6/PBr2P1P/6RK w - - 0 28",
    "preMove": "Rxc2",
    "solution": [
      "Rxf8#"
    ]
  },
  {
    "id": "kTl0e",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Medium",
    "rating": 1766,
    "popularity": 92,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2k5/pp3ppp/8/8/2Pb2P1/P3r3/R2r3P/5BKR w - - 4 23",
    "fen": "2k5/pp3ppp/8/8/2Pb2P1/P3r3/3R3P/5BKR b - - 0 23",
    "preMove": "Rxd2",
    "solution": [
      "Rg3#"
    ]
  },
  {
    "id": "oGsRx",
    "title": "Mate in 1",
    "theme": "DiscoveredAttack",
    "difficulty": "Medium",
    "rating": 1989,
    "popularity": 92,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r7/3bpp2/1p1p4/r1pk1PP1/2R1B2R/2P5/2PK4/8 b - - 1 31",
    "fen": "r7/3bpp2/1p1p4/r1p2PP1/2k1B2R/2P5/2PK4/8 w - - 0 32",
    "preMove": "Kxc4",
    "solution": [
      "Bc6#"
    ]
  },
  {
    "id": "qSWT0",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 801,
    "popularity": 92,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "rn2r1k1/ppp1Bp1p/6p1/4b2n/8/2N2P2/PPP2P1P/3RKB1R w K - 1 13",
    "fen": "rn2r1k1/ppp2p1p/6p1/4b2n/8/B1N2P2/PPP2P1P/3RKB1R b K - 2 13",
    "preMove": "Ba3",
    "solution": [
      "Bxc3#"
    ]
  },
  {
    "id": "sewWa",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 1209,
    "popularity": 92,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Finish with the classic Morphy's mate pattern. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r3r2k/ppp2p1Q/3p1q2/3P4/8/P1P2P1B/2P1P3/2K3RR b - - 0 23",
    "fen": "r3r3/ppp2p1k/3p1q2/3P4/8/P1P2P1B/2P1P3/2K3RR w - - 0 24",
    "preMove": "Kxh7",
    "solution": [
      "Bf5#"
    ]
  },
  {
    "id": "yfhLh",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 1490,
    "popularity": 92,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Deliver the famous opera-style mate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "6k1/pp3ppp/2p5/4B3/6b1/4b1P1/PPPr2BP/R1K4R w - - 0 20",
    "fen": "6k1/pp3ppp/2p5/8/5Bb1/4b1P1/PPPr2BP/R1K4R b - - 1 20",
    "preMove": "Bf4",
    "solution": [
      "Rd1#"
    ]
  },
  {
    "id": "ziY5w",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Medium",
    "rating": 1772,
    "popularity": 92,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Finish with the classic Morphy's mate pattern. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r3r1k1/pppq1Rbn/3p2p1/4p1Bp/2B1P2P/2N1P3/PPK3P1/5R2 b - - 0 18",
    "fen": "r3r1k1/ppp2Rbn/2qp2p1/4p1Bp/2B1P2P/2N1P3/PPK3P1/5R2 w - - 1 19",
    "preMove": "Qc6",
    "solution": [
      "Rf8#"
    ]
  },
  {
    "id": "9w7lq",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Medium",
    "rating": 1632,
    "popularity": 91,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Deliver the famous opera-style mate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "7k/6R1/pb1P2pB/1p6/1P6/6Pb/P4r1P/2R3K1 w - - 1 33",
    "fen": "7k/1R6/pb1P2pB/1p6/1P6/6Pb/P4r1P/2R3K1 b - - 2 33",
    "preMove": "Rb7",
    "solution": [
      "Rf1#"
    ]
  },
  {
    "id": "FL30o",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 987,
    "popularity": 91,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "3qkb1r/r1p2ppp/p4n2/8/3pB3/2N5/PPP2PPP/R2QR1K1 b k - 1 15",
    "fen": "3qkb1r/r1p2ppp/p4n2/8/4B3/2p5/PPP2PPP/R2QR1K1 w k - 0 16",
    "preMove": "dxc3",
    "solution": [
      "Bc6#"
    ]
  },
  {
    "id": "LDY2c",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Medium",
    "rating": 1825,
    "popularity": 91,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Finish with the classic Morphy's mate pattern. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "5rk1/pp3b2/2r2K2/8/1BpP1bP1/P1P4P/5P2/R3R3 w - - 3 31",
    "fen": "5rk1/pp3b2/2r5/5K2/1BpP1bP1/P1P4P/5P2/R3R3 b - - 4 31",
    "preMove": "Kf5",
    "solution": [
      "Bg6#"
    ]
  },
  {
    "id": "LKAda",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 1411,
    "popularity": 91,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver the famous opera-style mate.",
    "initialFen": "r2q3r/pp1nbkpp/3pRn2/6B1/2Q5/8/PPP2PPP/RN4K1 b - - 4 13",
    "fen": "r2qr3/pp1nbkpp/3pRn2/6B1/2Q5/8/PPP2PPP/RN4K1 w - - 5 14",
    "preMove": "Re8",
    "solution": [
      "Rxf6#"
    ]
  },
  {
    "id": "MFeg6",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Medium",
    "rating": 1759,
    "popularity": 91,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Deliver the famous opera-style mate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r4r1k/qb4Rp/pp1bB1p1/8/3B4/8/PP3PPP/3R2K1 b - - 0 23",
    "fen": "r4r1k/qb4Rp/pp2B1p1/2b5/3B4/8/PP3PPP/3R2K1 w - - 1 24",
    "preMove": "Bc5",
    "solution": [
      "Rg8#"
    ]
  },
  {
    "id": "SZiKM",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Medium",
    "rating": 1625,
    "popularity": 91,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "7k/p5b1/2p4p/4r1p1/2PKN3/P4r2/1PP2P1P/R3R3 w - - 0 25",
    "fen": "7k/p5b1/2p4p/4r1p1/2PKN3/P3Rr2/1PP2P1P/R7 b - - 1 25",
    "preMove": "Re3",
    "solution": [
      "Rd5#"
    ]
  },
  {
    "id": "Sxu35",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 1379,
    "popularity": 91,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Finish with the classic Morphy's mate pattern. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r4k1r/p1p1Qpb1/1pq2n1p/6p1/8/2N1B3/PPP2PPP/3RR1K1 b - - 3 16",
    "fen": "r6r/p1p1kpb1/1pq2n1p/6p1/8/2N1B3/PPP2PPP/3RR1K1 w - - 0 17",
    "preMove": "Kxe7",
    "solution": [
      "Bc5#"
    ]
  },
  {
    "id": "Uzpx0",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 1213,
    "popularity": 91,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r1b1r1k1/ppp1Bp1p/2n3p1/3Nb3/2P5/8/PP3PPP/3RKB1R w K - 1 13",
    "fen": "r1b1r1k1/ppp2p1p/2n3p1/3Nb1B1/2P5/8/PP3PPP/3RKB1R b K - 2 13",
    "preMove": "Bg5",
    "solution": [
      "Bc3#"
    ]
  },
  {
    "id": "Yx5pB",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Medium",
    "rating": 1681,
    "popularity": 91,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "3r2k1/5p2/3B2p1/1PP4p/1R3P1K/3P2rP/5b2/3R4 w - - 4 45",
    "fen": "3r2k1/5p2/3B2p1/1PP4p/1R3P1K/3P2rP/5b2/5R2 b - - 5 45",
    "preMove": "Rf1",
    "solution": [
      "Rg4#"
    ]
  },
  {
    "id": "fjK3m",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Medium",
    "rating": 1739,
    "popularity": 91,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Deliver the famous opera-style mate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r3r1k1/ppp2Rpp/8/4p3/2Bqn1b1/B2P3P/P1PQ2P1/7K b - - 0 17",
    "fen": "r3r1k1/ppp2Rpp/8/4p3/2Bq2b1/B2P3P/P1Pn2P1/7K w - - 0 18",
    "preMove": "Nxd2",
    "solution": [
      "Rf8#"
    ]
  },
  {
    "id": "s8c2T",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 1392,
    "popularity": 91,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r3r1k1/ppb2pp1/n1p1bp2/7N/3P3p/2PB3P/PPQB1PP1/R3RK1q w - - 11 17",
    "fen": "r3r1k1/ppb2pp1/n1p1bp2/7N/3P3p/2PB3P/PPQBKPP1/R3R2q b - - 12 17",
    "preMove": "Ke2",
    "solution": [
      "Bg4#"
    ]
  },
  {
    "id": "v6xO9",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 926,
    "popularity": 91,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Finish with the classic Morphy's mate pattern. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2r1r3/ppp1kp2/2p1bb2/5B1p/8/2P1B3/PP4PP/3RR2K b - - 8 24",
    "fen": "2r1r3/ppp1kp2/2p2b2/5b1p/8/2P1B3/PP4PP/3RR2K w - - 0 25",
    "preMove": "Bxf5",
    "solution": [
      "Bc5#"
    ]
  },
  {
    "id": "vsVfS",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 1297,
    "popularity": 91,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Finish with the classic Morphy's mate pattern. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "4r1k1/pp3ppp/8/8/2b5/1PNr4/P1n1KPPP/RQ5R w - - 3 25",
    "fen": "4r1k1/pp3ppp/8/8/2b5/1PNr4/P1n2PPP/RQ3K1R b - - 4 25",
    "preMove": "Kf1",
    "solution": [
      "Rd1#"
    ]
  },
  {
    "id": "xvjOY",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Medium",
    "rating": 1837,
    "popularity": 91,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Finish with the classic Morphy's mate pattern. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "rq3k1r/4Qpp1/ppb2n1p/2p5/P1B5/2N1B2P/1PP2PP1/3RR1K1 b - - 0 17",
    "fen": "rq5r/4kpp1/ppb2n1p/2p5/P1B5/2N1B2P/1PP2PP1/3RR1K1 w - - 0 18",
    "preMove": "Kxe7",
    "solution": [
      "Bxc5#"
    ]
  },
  {
    "id": "1rayn",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 971,
    "popularity": 90,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Finish with the classic Morphy's mate pattern. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "1r3rk1/1Q3Rbp/6p1/p7/P7/1BP1q2P/1P4P1/5R1K b - - 0 31",
    "fen": "5rk1/1r3Rbp/6p1/p7/P7/1BP1q2P/1P4P1/5R1K w - - 0 32",
    "preMove": "Rxb7",
    "solution": [
      "Rxf8#"
    ]
  },
  {
    "id": "F0Ofp",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Medium",
    "rating": 1634,
    "popularity": 90,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Deliver the famous opera-style mate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r5k1/1p5p/3Bp1p1/p1n5/3b4/3b4/PP3rPP/R1Q1R1K1 w - - 0 27",
    "fen": "r5k1/1p5p/4p1p1/p1B5/3b4/3b4/PP3rPP/R1Q1R1K1 b - - 0 27",
    "preMove": "Bxc5",
    "solution": [
      "Rf1#"
    ]
  },
  {
    "id": "JxoFJ",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Medium",
    "rating": 1779,
    "popularity": 90,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Deliver the famous opera-style mate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "1r4k1/p4ppp/2R2b2/5b2/2N5/6B1/Pr3PPP/K3R3 w - - 0 29",
    "fen": "1B4k1/p4ppp/2R2b2/5b2/2N5/8/Pr3PPP/K3R3 b - - 0 29",
    "preMove": "Bxb8",
    "solution": [
      "Rb1#"
    ]
  },
  {
    "id": "KwT5t",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Medium",
    "rating": 1897,
    "popularity": 90,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Deliver the famous opera-style mate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "6k1/p2p4/b3p3/2bpPpNp/8/5Q2/Pq3rPP/R3R1K1 w - - 0 23",
    "fen": "6k1/p2p4/b3p3/2bpPpNQ/8/8/Pq3rPP/R3R1K1 b - - 0 23",
    "preMove": "Qxh5",
    "solution": [
      "Rf1#"
    ]
  },
  {
    "id": "Q39d2",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 840,
    "popularity": 90,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r4r1k/5pQn/pp5p/2p1R3/P2BP3/2Pq4/1P4PP/R5K1 b - - 0 21",
    "fen": "r4r2/5pkn/pp5p/2p1R3/P2BP3/2Pq4/1P4PP/R5K1 w - - 0 22",
    "preMove": "Kxg7",
    "solution": [
      "Rg5#"
    ]
  },
  {
    "id": "SSXa7",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 1205,
    "popularity": 90,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "3rkb1r/p1Qb2pp/3p4/3n2p1/8/2N5/PPqNBPPP/R3R1K1 b k - 5 16",
    "fen": "3rkb1r/p1nb2pp/3p4/6p1/8/2N5/PPqNBPPP/R3R1K1 w k - 0 17",
    "preMove": "Nxc7",
    "solution": [
      "Bh5#"
    ]
  },
  {
    "id": "TJzp9",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Medium",
    "rating": 1884,
    "popularity": 90,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r3r1k1/1p2pQbp/pqnp2p1/3R4/4P3/1B5P/PP1B1PP1/2R3K1 b - - 0 18",
    "fen": "r3r3/1p2pkbp/pqnp2p1/3R4/4P3/1B5P/PP1B1PP1/2R3K1 w - - 0 19",
    "preMove": "Kxf7",
    "solution": [
      "Rf5#"
    ]
  },
  {
    "id": "VIzx6",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Medium",
    "rating": 1766,
    "popularity": 90,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Deliver the famous opera-style mate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "3r1k2/p3R1p1/1p3pBp/1qBp4/8/P7/1Q3PPP/6K1 b - - 0 31",
    "fen": "3r1k2/p3R1p1/1p3pBp/2Bp4/8/P7/1q3PPP/6K1 w - - 0 32",
    "preMove": "Qxb2",
    "solution": [
      "Re8#"
    ]
  },
  {
    "id": "W6UUR",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Medium",
    "rating": 1721,
    "popularity": 90,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r1bk4/1pp4p/p2p1R2/6Bp/3P4/2P3P1/P4K1P/4r3 b - - 1 27",
    "fen": "r1bkr3/1pp4p/p2p1R2/6Bp/3P4/2P3P1/P4K1P/8 w - - 2 28",
    "preMove": "Re8",
    "solution": [
      "Rxd6#"
    ]
  },
  {
    "id": "ZT76O",
    "title": "Mate in 1",
    "theme": "BalestraMate",
    "difficulty": "Easy",
    "rating": 1280,
    "popularity": 90,
    "description": "Finish with a queen and bishop battery mate. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "6k1/7r/2p1Q3/p2pP3/1p1P1B2/8/P1P1KRr1/7q b - - 1 43",
    "fen": "5k2/7r/2p1Q3/p2pP3/1p1P1B2/8/P1P1KRr1/7q w - - 2 44",
    "preMove": "Kf8",
    "solution": [
      "Bh6#"
    ]
  },
  {
    "id": "aJSbp",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Medium",
    "rating": 1654,
    "popularity": 90,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "1nkr3r/1p3ppp/2q1pn2/8/2BP4/4PQ1P/1P3PPK/R1R5 b - - 1 17",
    "fen": "1nkr3r/1p3ppp/4pn2/8/2BP4/4Pq1P/1P3PPK/R1R5 w - - 0 18",
    "preMove": "Qxf3",
    "solution": [
      "Bxe6#"
    ]
  },
  {
    "id": "cdfmP",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Medium",
    "rating": 1763,
    "popularity": 90,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r4r1k/4NpQp/p4R2/7q/1p1B2bP/1P6/1PP5/1K6 b - - 0 25",
    "fen": "r4r2/4Npkp/p4R2/7q/1p1B2bP/1P6/1PP5/1K6 w - - 0 26",
    "preMove": "Kxg7",
    "solution": [
      "Rg6#"
    ]
  },
  {
    "id": "q8b4k",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Medium",
    "rating": 1644,
    "popularity": 90,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Deliver the famous opera-style mate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r2r2k1/1b3Rbp/p5p1/1pB1p3/4P1nq/1BNQ3P/PPP3P1/3R2K1 b - - 0 18",
    "fen": "r5k1/1b3Rbp/p5p1/1pB1p3/4P1nq/1BNr3P/PPP3P1/3R2K1 w - - 0 19",
    "preMove": "Rxd3",
    "solution": [
      "Rf8#"
    ]
  },
  {
    "id": "uaBdX",
    "title": "Mate in 1",
    "theme": "DiscoveredAttack",
    "difficulty": "Easy",
    "rating": 1444,
    "popularity": 90,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2b2rk1/p7/2p4p/3p1p2/3bPKp1/6P1/P2NQ1BP/1q5R w - - 0 23",
    "fen": "2b2rk1/p7/2p4p/3p1p2/3bPKp1/6P1/P3Q1BP/1N5R b - - 0 23",
    "preMove": "Nxb1",
    "solution": [
      "fxe4#"
    ]
  },
  {
    "id": "9gBVw",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 1494,
    "popularity": 89,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Deliver the famous opera-style mate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r6k/6pp/bqQ2p2/p7/Pb3B2/6P1/1P2rPBP/R4K1R w - - 0 22",
    "fen": "r6k/6pp/bQ3p2/p7/Pb3B2/6P1/1P2rPBP/R4K1R b - - 0 22",
    "preMove": "Qxb6",
    "solution": [
      "Re1#"
    ]
  },
  {
    "id": "DRln0",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 1462,
    "popularity": 89,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "1nkr3r/Q1q3pp/4R3/2Nb1BP1/3p1P2/P7/1P5P/1K1R4 b - - 0 31",
    "fen": "1nkr3r/q5pp/4R3/2Nb1BP1/3p1P2/P7/1P5P/1K1R4 w - - 0 32",
    "preMove": "Qxa7",
    "solution": [
      "Rc6#"
    ]
  },
  {
    "id": "JjDN3",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Medium",
    "rating": 1867,
    "popularity": 89,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Deliver the famous opera-style mate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "4r2k/ppp3Rp/2n2B2/4bb2/5q2/1BQ5/PPP5/1K1R4 b - - 3 34",
    "fen": "4r2k/ppp3Rp/2n2B2/5b2/5q2/1Bb5/PPP5/1K1R4 w - - 0 35",
    "preMove": "Bxc3",
    "solution": [
      "Rg8#"
    ]
  },
  {
    "id": "Lhmjw",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Medium",
    "rating": 1515,
    "popularity": 89,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Finish with the classic Morphy's mate pattern. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r4rk1/1pQ2Rpp/2q5/8/p2pP3/2bP4/B1P3PP/5RK1 b - - 0 23",
    "fen": "r4rk1/1pq2Rpp/8/8/p2pP3/2bP4/B1P3PP/5RK1 w - - 0 24",
    "preMove": "Qxc7",
    "solution": [
      "Rxf8#"
    ]
  },
  {
    "id": "MZqhX",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 1021,
    "popularity": 89,
    "description": "Deliver a hook mate with rook, knight, and pawn. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r1b3k1/ppp2p2/7p/2b1P1p1/2PrPn2/2N1nBBN/PP1K2PP/2R4R w - - 6 17",
    "fen": "r1b3k1/ppp2p2/7p/2b1P1p1/2PrPn2/2N1KBBN/PP4PP/2R4R b - - 0 17",
    "preMove": "Kxe3",
    "solution": [
      "Rd3#"
    ]
  },
  {
    "id": "NVGpE",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 1080,
    "popularity": 89,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "5rrk/3b3p/p4n2/3p4/P2Ppqn1/2N3P1/1Q2BPKP/R6R w - - 0 29",
    "fen": "5rrk/3b3p/p4n2/3p4/P2PpPn1/2N5/1Q2BPKP/R6R b - - 0 29",
    "preMove": "gxf4",
    "solution": [
      "Ne3#"
    ]
  },
  {
    "id": "NoSbH",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Medium",
    "rating": 1693,
    "popularity": 89,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "3r4/4k3/b1p1p3/p2nBppp/P7/1B6/1PP2PPP/2RKR3 w - - 2 22",
    "fen": "3r4/4k3/b1p1p3/p2nBppp/P7/1BP5/1P3PPP/2RKR3 b - - 0 22",
    "preMove": "c3",
    "solution": [
      "Ne3#"
    ]
  },
  {
    "id": "QcbZ8",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 1468,
    "popularity": 89,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Deliver the famous opera-style mate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "6k1/p4ppp/1p3n2/1bbq4/8/1PN2N2/PB3rPP/R1Q3K1 w - - 0 21",
    "fen": "6k1/p4ppp/1p3n2/1bbN4/8/1P3N2/PB3rPP/R1Q3K1 b - - 0 21",
    "preMove": "Nxd5",
    "solution": [
      "Rf1#"
    ]
  },
  {
    "id": "cxJ3D",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Medium",
    "rating": 1654,
    "popularity": 89,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "8/2R2p2/p4k2/3p1b2/4n1r1/5N1K/PP5P/5R2 w - - 0 32",
    "fen": "8/2R2p2/p4k2/3p1b2/4n1rN/7K/PP5P/5R2 b - - 1 32",
    "preMove": "Nh4",
    "solution": [
      "Rg3#"
    ]
  },
  {
    "id": "fAZqP",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Medium",
    "rating": 1728,
    "popularity": 89,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Deliver the famous opera-style mate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2q1r1kb/3rnQ1p/2p1R1pP/1p4B1/1P1P4/1BP3P1/5P2/R5K1 b - - 0 31",
    "fen": "2q1r2b/3rnk1p/2p1R1pP/1p4B1/1P1P4/1BP3P1/5P2/R5K1 w - - 0 32",
    "preMove": "Kxf7",
    "solution": [
      "Rf6#"
    ]
  },
  {
    "id": "i5Nwr",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Medium",
    "rating": 1847,
    "popularity": 89,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r1bqkb1r/5R2/p2p3p/1p1Np2B/8/N1P5/PP2p1PP/R5K1 b kq - 0 17",
    "fen": "r2qkb1r/5R2/p2p3p/1p1Np2B/6b1/N1P5/PP2p1PP/R5K1 w kq - 1 18",
    "preMove": "Bg4",
    "solution": [
      "Re7#"
    ]
  },
  {
    "id": "iPL4G",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 1184,
    "popularity": 89,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Deliver the famous opera-style mate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r3r1k1/1p2BRbp/2p3p1/p7/8/1B6/PPP3PP/7K b - - 0 27",
    "fen": "r3r1k1/1p2BRbp/2p3p1/8/p7/1B6/PPP3PP/7K w - - 0 28",
    "preMove": "a4",
    "solution": [
      "Rf8#"
    ]
  },
  {
    "id": "ic9sf",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 1118,
    "popularity": 89,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r4b1r/p1Qnkpp1/3p3p/3n1q2/3P4/2N1BN2/PP3PPP/R3R1K1 b - - 6 15",
    "fen": "r4b1r/p1nnkpp1/3p3p/5q2/3P4/2N1BN2/PP3PPP/R3R1K1 w - - 0 16",
    "preMove": "Nxc7",
    "solution": [
      "Bg5#"
    ]
  },
  {
    "id": "scrmE",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 975,
    "popularity": 89,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "rnbqr1k1/pp1p1p2/7p/4b1p1/5n2/2P2NB1/PP1N1PPP/R2QKB1R w KQ - 2 14",
    "fen": "rnbqr1k1/pp1p1p2/7p/4b1p1/2N2n2/2P2NB1/PP3PPP/R2QKB1R b KQ - 3 14",
    "preMove": "Nc4",
    "solution": [
      "Bxc3#"
    ]
  },
  {
    "id": "32WVe",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Medium",
    "rating": 1771,
    "popularity": 88,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "rn3b1r/pp1kn1pb/2pNp2p/7P/N5P1/8/PP1BRPB1/3R2K1 b - - 0 20",
    "fen": "rn3b1r/pp2n1pb/2pkp2p/7P/N5P1/8/PP1BRPB1/3R2K1 w - - 0 21",
    "preMove": "Kxd6",
    "solution": [
      "Bf4#"
    ]
  },
  {
    "id": "896zJ",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 1357,
    "popularity": 88,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "3rkb1r/p2n1ppp/1pR5/1B1pB3/8/6P1/PP3P1P/5RK1 b k - 0 20",
    "fen": "3rkb1r/p4ppp/1pR5/1B1pn3/8/6P1/PP3P1P/5RK1 w k - 0 21",
    "preMove": "Nxe5",
    "solution": [
      "Re6#"
    ]
  },
  {
    "id": "HhUUU",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Medium",
    "rating": 1609,
    "popularity": 88,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Deliver the famous opera-style mate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r3k3/pb1R1p1p/1p2pB2/1B2Pn2/8/8/PPP1KP2/2R4r b q - 2 22",
    "fen": "r3k3/pb1R1p1p/1p2pB2/1B2Pn2/8/8/PPP1KP2/2r5 w q - 0 23",
    "preMove": "Rxc1",
    "solution": [
      "Rd8#"
    ]
  },
  {
    "id": "IgvTS",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Medium",
    "rating": 1827,
    "popularity": 88,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "8/3B2bp/4R1p1/5k2/5N1P/5bP1/1r6/6K1 b - - 2 33",
    "fen": "8/3B2bp/4R1p1/8/5NkP/5bP1/1r6/6K1 w - - 3 34",
    "preMove": "Kg4",
    "solution": [
      "Rxg6#"
    ]
  },
  {
    "id": "PZWbU",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 1494,
    "popularity": 88,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Deliver the famous opera-style mate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r3r1k1/pp3Rpp/1np5/8/1BBPQ3/8/P6N/7K b - - 0 24",
    "fen": "r5k1/pp3Rpp/1np5/8/1BBPr3/8/P6N/7K w - - 0 25",
    "preMove": "Rxe4",
    "solution": [
      "Rf8#"
    ]
  },
  {
    "id": "RTLS1",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 819,
    "popularity": 88,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r3rkn1/ppp3p1/5n2/3p3Q/5B2/4P3/PPP5/R4R1K b - - 0 27",
    "fen": "r3rkn1/ppp3p1/8/3p3n/5B2/4P3/PPP5/R4R1K w - - 0 28",
    "preMove": "Nxh5",
    "solution": [
      "Bd6#"
    ]
  },
  {
    "id": "SgKyz",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Medium",
    "rating": 1732,
    "popularity": 88,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r3r1k1/pp1n1ppp/6b1/8/2PPnN2/P3BQ2/3qKPPP/2R2B1R w - - 3 17",
    "fen": "r3r1k1/pp1n1ppp/6b1/8/2PPnN2/P4Q2/3BKPPP/2R2B1R b - - 0 17",
    "preMove": "Bxd2",
    "solution": [
      "Nc3#"
    ]
  },
  {
    "id": "UQaa2",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 1314,
    "popularity": 88,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2krr3/ppp2ppp/2p1b3/8/4Q3/8/P1PNKPPP/2R2B1R w - - 1 15",
    "fen": "2krr3/ppp2ppp/2p1b3/8/1Q6/8/P1PNKPPP/2R2B1R b - - 2 15",
    "preMove": "Qb4",
    "solution": [
      "Bg4#"
    ]
  },
  {
    "id": "k3ibH",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 1454,
    "popularity": 88,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Finish with the classic Morphy's mate pattern. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "1rr2k2/2Q1Rppp/p2B4/3q4/1p6/6PP/PPP2P2/1K2R3 b - - 0 24",
    "fen": "1r3k2/2r1Rppp/p2B4/3q4/1p6/6PP/PPP2P2/1K2R3 w - - 0 25",
    "preMove": "Rxc7",
    "solution": [
      "Re8#"
    ]
  },
  {
    "id": "lcTLd",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 1016,
    "popularity": 88,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "3rr1k1/pp3ppp/1q6/3Pb3/2B5/2n2N2/PP4PP/R1BQKR2 w Q - 8 17",
    "fen": "3rr1k1/pp3ppp/1q6/3Pb3/2B5/2P2N2/P5PP/R1BQKR2 b Q - 0 17",
    "preMove": "bxc3",
    "solution": [
      "Bxc3#"
    ]
  },
  {
    "id": "qzGMg",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 1375,
    "popularity": 88,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Finish with the classic Morphy's mate pattern. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "5rk1/2p2Rbp/8/8/8/1BP1q3/PP1r2QP/5R1K b - - 0 27",
    "fen": "5rk1/2p2Rbp/8/8/8/1BP1q3/PP4rP/5R1K w - - 0 28",
    "preMove": "Rxg2",
    "solution": [
      "Rxf8#"
    ]
  },
  {
    "id": "seLMg",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Medium",
    "rating": 1563,
    "popularity": 88,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "1rb1r3/1p1nNpkp/p5p1/4b3/8/5PB1/PPP2P1P/3RKB1R w K - 5 18",
    "fen": "1rN1r3/1p1n1pkp/p5p1/4b3/8/5PB1/PPP2P1P/3RKB1R b K - 0 18",
    "preMove": "Nxc8",
    "solution": [
      "Bc3#"
    ]
  },
  {
    "id": "x3NP3",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 1496,
    "popularity": 88,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Finish with the classic Morphy's mate pattern. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r1b5/pp1pk1p1/3Rp1Bp/2B1P3/5r1P/2n2P2/P5P1/2KR4 b - - 0 25",
    "fen": "r1b5/pp1pk1p1/3Rp1Bp/2B1P3/2r4P/2n2P2/P5P1/2KR4 w - - 1 26",
    "preMove": "Rc4",
    "solution": [
      "Rxd7#"
    ]
  },
  {
    "id": "hiz83",
    "title": "Mate in 1",
    "theme": "DiscoveredAttack",
    "difficulty": "Easy",
    "rating": 1096,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r4rk1/6Bp/p7/1bNp1pRQ/1P2p3/P1q5/6PP/R6K b - - 0 26",
    "fen": "r4rk1/6Bp/p7/1bNp1pRQ/1P2p3/P7/6PP/q6K w - - 0 27",
    "preMove": "Qxa1+",
    "solution": [
      "Bxa1#"
    ]
  },
  {
    "id": "1K6MC",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 1108,
    "popularity": 87,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r1bqkb1r/pp3ppp/5n2/2pn4/5B2/1QN2PP1/PP2BK1P/4R1NR b kq - 1 14",
    "fen": "r1bqkb1r/pp3ppp/5n2/2p5/5n2/1QN2PP1/PP2BK1P/4R1NR w kq - 0 15",
    "preMove": "Nxf4",
    "solution": [
      "Bb5#"
    ]
  },
  {
    "id": "GBv6l",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 1018,
    "popularity": 87,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "1rb1r3/pp2Npkp/5np1/4b1B1/8/2P4P/PP3PP1/3RKB1R w K - 1 16",
    "fen": "1rN1r3/pp3pkp/5np1/4b1B1/8/2P4P/PP3PP1/3RKB1R b K - 0 16",
    "preMove": "Nxc8",
    "solution": [
      "Bxc3#"
    ]
  },
  {
    "id": "pRLQ1",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 1136,
    "popularity": 87,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "rn2r2k/ppp5/6p1/4b3/7P/8/bPP2P2/2BRKBNR w K - 0 16",
    "fen": "rn2r2k/ppp5/6p1/4b2P/8/8/bPP2P2/2BRKBNR b K - 0 16",
    "preMove": "h5",
    "solution": [
      "Bc3#"
    ]
  },
  {
    "id": "sNKDH",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 852,
    "popularity": 87,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "3rkb2/3n1p2/1pR1n1p1/1B2Q3/P3P3/8/3q4/5K2 b - - 9 35",
    "fen": "3rkb2/5p2/1pR1n1p1/1B2n3/P3P3/8/3q4/5K2 w - - 0 36",
    "preMove": "Nxe5",
    "solution": [
      "Rxe6#"
    ]
  },
  {
    "id": "xmMkv",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 1495,
    "popularity": 87,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "4r3/p7/1p6/5k2/2pPn1p1/2P1R3/PP4K1/2B5 b - - 1 36",
    "fen": "4r3/p7/1p6/8/2pPnkp1/2P1R3/PP4K1/2B5 w - - 2 37",
    "preMove": "Kf4",
    "solution": [
      "Rf3#"
    ]
  },
  {
    "id": "UXzzw",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 1482,
    "popularity": 86,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Deliver the famous opera-style mate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r2qk3/p3Rprp/5n2/1BB1p3/8/P1b2P2/1pP3PP/1K5R b q - 1 19",
    "fen": "r2q1k2/p3Rprp/5n2/1BB1p3/8/P1b2P2/1pP3PP/1K5R w - - 2 20",
    "preMove": "Kf8",
    "solution": [
      "Re8#"
    ]
  },
  {
    "id": "VN0bl",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Medium",
    "rating": 1714,
    "popularity": 86,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2kr2nr/pppb1ppp/2n5/1B2P3/4p3/2N5/PPP2PPP/R1BKR3 w - - 5 10",
    "fen": "2kr2nr/pppb1ppp/2B5/4P3/4p3/2N5/PPP2PPP/R1BKR3 b - - 0 10",
    "preMove": "Bxc6",
    "solution": [
      "Bg4#"
    ]
  },
  {
    "id": "pQf7E",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 930,
    "popularity": 86,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "rnb1r2k/ppp1Np1p/6p1/4b3/8/2P3P1/PP3PP1/3RKBNR w K - 1 13",
    "fen": "rnN1r2k/ppp2p1p/6p1/4b3/8/2P3P1/PP3PP1/3RKBNR b K - 0 13",
    "preMove": "Nxc8",
    "solution": [
      "Bxc3#"
    ]
  },
  {
    "id": "vs0N7",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 882,
    "popularity": 86,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Finish with the classic Morphy's mate pattern. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "3r1rk1/1b3pQ1/p6p/1p2R3/2pB4/q1P5/2B3PP/5RK1 b - - 0 30",
    "fen": "3r1r2/1b3pk1/p6p/1p2R3/2pB4/q1P5/2B3PP/5RK1 w - - 0 31",
    "preMove": "Kxg7",
    "solution": [
      "Rg5#"
    ]
  },
  {
    "id": "4FpZU",
    "title": "Mate in 1",
    "theme": "CornerMate",
    "difficulty": "Medium",
    "rating": 1767,
    "popularity": 85,
    "description": "Trap the king in the corner. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2k1r3/pppr2pp/1b6/6B1/2B1n1b1/2N2N1P/PPP1K1P1/R6R w - - 0 18",
    "fen": "2k1r3/pppr2pp/1b6/6B1/2B1n1P1/2N2N2/PPP1K1P1/R6R b - - 0 18",
    "preMove": "hxg4",
    "solution": [
      "Ng3#"
    ]
  },
  {
    "id": "EhBlm",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 864,
    "popularity": 85,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r1bkr3/ppp2ppp/2p5/8/2B1n3/2P5/P1PB1PPP/2KR3R b - - 3 11",
    "fen": "r1bkr3/ppp2ppp/2p5/8/2B5/2P5/P1PB1nPP/2KR3R w - - 0 12",
    "preMove": "Nxf2",
    "solution": [
      "Bg5#"
    ]
  },
  {
    "id": "GBNj5",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Medium",
    "rating": 1578,
    "popularity": 85,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "rnbkr3/ppp2ppp/8/4P3/1b2p3/2N5/PPPB1PPP/2KR2NR b - - 5 9",
    "fen": "rnbkr3/ppp2ppp/8/4P3/4p3/2b5/PPPB1PPP/2KR2NR w - - 0 10",
    "preMove": "Bxc3",
    "solution": [
      "Bg5#"
    ]
  },
  {
    "id": "Qyygu",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 987,
    "popularity": 85,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Finish with the classic Morphy's mate pattern. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2krr3/p4ppp/2p1bn2/2b5/8/2N2N2/PPP1KPPP/R1B4R w - - 4 12",
    "fen": "2krr3/p4ppp/2p1bn2/2b5/8/2N2N2/PPP1KPPP/R1BR4 b - - 5 12",
    "preMove": "Rd1",
    "solution": [
      "Bc4#"
    ]
  },
  {
    "id": "Ujwel",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Medium",
    "rating": 1532,
    "popularity": 85,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Finish with the classic Morphy's mate pattern. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r4k2/ppbbRrpp/2p5/2Bp1p2/5P2/2PB4/PP4PP/4R1K1 b - - 7 22",
    "fen": "r4k2/pp1bRrpp/1bp5/2Bp1p2/5P2/2PB4/PP4PP/4R1K1 w - - 8 23",
    "preMove": "Bb6",
    "solution": [
      "Re8#"
    ]
  },
  {
    "id": "ft0qJ",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 835,
    "popularity": 85,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r2qkb1r/ppp2ppp/3pb3/3N4/3P3P/6P1/PPP1BP2/R2QR1K1 b kq - 6 14",
    "fen": "r2qkb1r/ppp2ppp/3p4/3b4/3P3P/6P1/PPP1BP2/R2QR1K1 w kq - 0 15",
    "preMove": "Bxd5",
    "solution": [
      "Bb5#"
    ]
  },
  {
    "id": "la0BC",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Medium",
    "rating": 1532,
    "popularity": 85,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "rnb1r1k1/ppp2p1p/6p1/4b1q1/2P1N3/8/PP3PPP/R2QKB1R w KQ - 0 12",
    "fen": "rnb1r1k1/ppp2p1p/6p1/4b1N1/2P5/8/PP3PPP/R2QKB1R b KQ - 0 12",
    "preMove": "Nxg5",
    "solution": [
      "Bc3#"
    ]
  },
  {
    "id": "pV8yc",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Medium",
    "rating": 1732,
    "popularity": 85,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r2r4/pp3ppp/3bkn2/4n3/5P2/2N5/PP2B1PP/R1B1R1K1 b - - 0 17",
    "fen": "r2r4/pp3ppp/2nbkn2/8/5P2/2N5/PP2B1PP/R1B1R1K1 w - - 1 18",
    "preMove": "Nc6",
    "solution": [
      "Bg4#"
    ]
  },
  {
    "id": "v6C2t",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 960,
    "popularity": 85,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "rb2r1k1/pp3ppp/4bn2/3p2B1/3N4/2PB3P/PP1Q1PP1/R3RK1q w - - 12 18",
    "fen": "rb2r1k1/pp3ppp/4bn2/3p2B1/3N4/2PB3P/PP1QKPP1/R3R2q b - - 13 18",
    "preMove": "Ke2",
    "solution": [
      "Bg4#"
    ]
  },
  {
    "id": "Lns11",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 1037,
    "popularity": 84,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2k3r1/1p3p2/1p6/n2BN3/b1pP3b/P1P1P1r1/1P1N1K2/2R2R2 w - - 1 29",
    "fen": "2k3r1/1p3p2/1p6/n2BN3/b1pP3b/P1P1PNr1/1P3K2/2R2R2 b - - 2 29",
    "preMove": "Ndf3",
    "solution": [
      "Rg2#"
    ]
  },
  {
    "id": "O6Mo5",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 922,
    "popularity": 84,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2kr3r/BpQbq1p1/3p1n1p/1B2n3/8/P1N5/1P3PPP/2R1R1K1 b - - 0 17",
    "fen": "3r3r/Bpkbq1p1/3p1n1p/1B2n3/8/P1N5/1P3PPP/2R1R1K1 w - - 0 18",
    "preMove": "Kxc7",
    "solution": [
      "Nd5#"
    ]
  },
  {
    "id": "Rj7J0",
    "title": "Mate in 1",
    "theme": "CornerMate",
    "difficulty": "Easy",
    "rating": 1428,
    "popularity": 84,
    "description": "Trap the king in the corner. Find the forced checkmate. Deliver checkmate in one move. Finish with the classic Morphy's mate pattern.",
    "initialFen": "2rrq1k1/pp2b1PQ/1np1pp2/3nP3/3PN3/P1N1B3/1P6/1B1R2RK b - - 0 34",
    "fen": "2rrq3/pp2b1Pk/1np1pp2/3nP3/3PN3/P1N1B3/1P6/1B1R2RK w - - 0 35",
    "preMove": "Kxh7",
    "solution": [
      "Nxf6#"
    ]
  },
  {
    "id": "V68N8",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 825,
    "popularity": 84,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r3kb1r/ppp2ppp/5n2/5b2/3B4/P1N4P/1PP1BPP1/R2KR3 b kq - 0 15",
    "fen": "3rkb1r/ppp2ppp/5n2/5b2/3B4/P1N4P/1PP1BPP1/R2KR3 w k - 1 16",
    "preMove": "Rd8",
    "solution": [
      "Bb5#"
    ]
  },
  {
    "id": "VAPpJ",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 884,
    "popularity": 84,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Finish with the classic Morphy's mate pattern. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2r1r3/p2k1ppp/p1b2n2/8/8/NP2B3/P4PPP/3RR1K1 b - - 2 18",
    "fen": "2r1r3/p3kppp/p1b2n2/8/8/NP2B3/P4PPP/3RR1K1 w - - 3 19",
    "preMove": "Ke7",
    "solution": [
      "Bc5#"
    ]
  },
  {
    "id": "ZIfKE",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Medium",
    "rating": 1595,
    "popularity": 84,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Finish with the classic Morphy's mate pattern. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r2qr1k1/p4Rpp/1p6/4P3/2BP4/4n3/P1QN2PP/5RK1 b - - 0 22",
    "fen": "r2qr1k1/p4Rpp/1p6/4P3/2BP4/8/P1nN2PP/5RK1 w - - 0 23",
    "preMove": "Nxc2",
    "solution": [
      "Rf8#"
    ]
  },
  {
    "id": "bTtyU",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 1230,
    "popularity": 84,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Finish with the classic Morphy's mate pattern. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r3k2r/ppp1Qpp1/q4n1p/8/8/2N1B3/PPP2PPP/2KRR3 b kq - 0 14",
    "fen": "r6r/ppp1kpp1/q4n1p/8/8/2N1B3/PPP2PPP/2KRR3 w - - 0 15",
    "preMove": "Kxe7",
    "solution": [
      "Bc5#"
    ]
  },
  {
    "id": "k3ecS",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 1050,
    "popularity": 84,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r3r1k1/ppp2p1p/2n4p/1Q2bb2/8/5N1P/PP3PP1/3RKB1R w K - 4 18",
    "fen": "r3r1k1/pQp2p1p/2n4p/4bb2/8/5N1P/PP3PP1/3RKB1R b K - 0 18",
    "preMove": "Qxb7",
    "solution": [
      "Bc3#"
    ]
  },
  {
    "id": "llhaj",
    "title": "Mate in 1",
    "theme": "BalestraMate",
    "difficulty": "Medium",
    "rating": 1732,
    "popularity": 84,
    "description": "Finish with a queen and bishop battery mate. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "3r1k2/pp5r/5PQ1/2Nb4/8/2P1q3/PP2B3/3KR3 w - - 5 31",
    "fen": "3r1k2/pp5Q/5P2/2Nb4/8/2P1q3/PP2B3/3KR3 b - - 0 31",
    "preMove": "Qxh7",
    "solution": [
      "Bb3#"
    ]
  },
  {
    "id": "TnUM4",
    "title": "Mate in 1",
    "theme": "DiscoveredAttack",
    "difficulty": "Easy",
    "rating": 1124,
    "popularity": 96,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Finish with the classic Morphy's mate pattern.",
    "initialFen": "5r1k/p1p3p1/2Q3qp/1N3p2/5P1P/b3P3/1rPB2P1/2KR3R w - - 0 22",
    "fen": "5r1k/p1p3p1/6Qp/1N3p2/5P1P/b3P3/1rPB2P1/2KR3R b - - 0 22",
    "preMove": "Qxg6",
    "solution": [
      "Rxb5#"
    ]
  },
  {
    "id": "96eMm",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Medium",
    "rating": 1568,
    "popularity": 83,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Deliver the famous opera-style mate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "3k2B1/pp2pR2/3p2Np/6bP/8/3b4/PPr3P1/2K4R w - - 5 32",
    "fen": "3k2B1/pp2pR2/3p2Np/6bP/8/3b4/PPr3P1/1K5R b - - 6 32",
    "preMove": "Kb1",
    "solution": [
      "Rc1#"
    ]
  },
  {
    "id": "VhWmw",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Medium",
    "rating": 1605,
    "popularity": 83,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "rnb1r1k1/ppp5/6p1/4bp2/2P1N3/8/PP3PPP/2BRKB1R w K - 0 14",
    "fen": "rnb1r1k1/ppp5/6p1/4bp2/2P5/6N1/PP3PPP/2BRKB1R b K - 1 14",
    "preMove": "Ng3",
    "solution": [
      "Bc3#"
    ]
  },
  {
    "id": "ncwSx",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 936,
    "popularity": 83,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "2kr3r/1pp2pN1/p1nb3p/8/4B1P1/4B2P/1PP1QP2/q1KR3R w - - 1 18",
    "fen": "2kr3r/1pp2pN1/p1nb3p/8/4B1P1/4B2P/1PPKQP2/q2R3R b - - 2 18",
    "preMove": "Kd2",
    "solution": [
      "Bb4#"
    ]
  },
  {
    "id": "rNXY6",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 1496,
    "popularity": 83,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r1b1r3/1k1nb1Q1/qpp1P2p/Pp6/5B2/6P1/1P3P1P/3RKB1R w K - 2 27",
    "fen": "r1b1r3/1k1Pb1Q1/qpp4p/Pp6/5B2/6P1/1P3P1P/3RKB1R b K - 0 27",
    "preMove": "exd7",
    "solution": [
      "Bb4#"
    ]
  },
  {
    "id": "wkhBJ",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 963,
    "popularity": 83,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "N1bkr3/pp1nbppp/5n2/4Q3/q7/5B2/PPPB1P1P/1K1R3R b - - 8 18",
    "fen": "N1bkr3/pp2bppp/5n2/4n3/q7/5B2/PPPB1P1P/1K1R3R w - - 0 19",
    "preMove": "Nxe5",
    "solution": [
      "Ba5#"
    ]
  },
  {
    "id": "xWmNq",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Medium",
    "rating": 1889,
    "popularity": 83,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Deliver the famous opera-style mate. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "1r1q1r1k/pQ4Rp/5Bp1/8/2B5/2N4P/PP3PP1/n5K1 b - - 0 18",
    "fen": "3q1r1k/pr4Rp/5Bp1/8/2B5/2N4P/PP3PP1/n5K1 w - - 0 19",
    "preMove": "Rxb7",
    "solution": [
      "Rg8#"
    ]
  },
  {
    "id": "1gmp7",
    "title": "Mate in 1",
    "theme": "CornerMate",
    "difficulty": "Easy",
    "rating": 882,
    "popularity": 82,
    "description": "Trap the king in the corner. Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "4qkr1/r2n3R/p3p3/1p1pP3/3P1N2/2P2Q2/PP4PP/6K1 b - - 4 29",
    "fen": "4qkr1/r6R/p3p3/1p1pn3/3P1N2/2P2Q2/PP4PP/6K1 w - - 0 30",
    "preMove": "Nxe5",
    "solution": [
      "Ng6#"
    ]
  },
  {
    "id": "8O8WT",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 978,
    "popularity": 82,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Finish with the classic Morphy's mate pattern. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r4rk1/pp1n1Rpp/2p5/8/2B5/P1P5/1P4PP/5RK1 b - - 0 18",
    "fen": "r4rk1/pp3Rpp/2p5/4n3/2B5/P1P5/1P4PP/5RK1 w - - 1 19",
    "preMove": "Ne5",
    "solution": [
      "Rxf8#"
    ]
  },
  {
    "id": "8Qp3V",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 1373,
    "popularity": 82,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r1br2k1/p1p2ppp/2Nb4/8/6P1/P3B2P/1PP1QP2/q1KR3R w - - 1 18",
    "fen": "r1br2k1/p1p2ppp/2Nb4/8/6P1/P3B2P/1PPKQP2/q2R3R b - - 2 18",
    "preMove": "Kd2",
    "solution": [
      "Bb4#"
    ]
  },
  {
    "id": "C93rw",
    "title": "Mate in 1",
    "theme": "DiscoveredCheck",
    "difficulty": "Easy",
    "rating": 1081,
    "popularity": 82,
    "description": "Trap the king between its own rooks. Find the forced checkmate. Deliver checkmate in one move. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "r2qr1k1/pp2bppp/5n2/5b2/1PPp4/P2P4/4NPPP/R1BQKB1R w KQ - 2 12",
    "fen": "r2qr1k1/pp2bppp/5n2/5b2/1PPp4/P2P2N1/5PPP/R1BQKB1R b KQ - 3 12",
    "preMove": "Ng3",
    "solution": [
      "Bxb4#"
    ]
  },
  {
    "id": "OQFl3",
    "title": "Back Rank Mate",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1710,
    "popularity": 95,
    "description": "Exploit the weak back rank.",
    "initialFen": "2k2r2/pp6/2p5/5ppp/2P5/1P2PPbP/PB4P1/4R1K1 w - - 2 33",
    "fen": "2k2r2/pp6/2p5/5ppp/2P5/1P2PPbP/PB2R1P1/6K1 b - - 3 33",
    "preMove": "Re2",
    "solution": [
      "Rd8",
      "Bd4",
      "c5"
    ]
  },
  {
    "id": "m5h82",
    "title": "Back Rank Mate",
    "theme": "Advantage",
    "difficulty": "Hard",
    "rating": 2138,
    "popularity": 93,
    "description": "Exploit the weak back rank.",
    "initialFen": "1r1r4/3P2bk/p1B4p/1p3p2/2P1p2R/7R/P4PPP/6K1 w - - 0 35",
    "fen": "1r1r4/3P2bk/p1B4p/1pP2p2/4p2R/7R/P4PPP/6K1 b - - 0 35",
    "preMove": "c5",
    "solution": [
      "Rbc8",
      "Rxe4",
      "Rxc6"
    ]
  },
  {
    "id": "KgZO4",
    "title": "Back Rank Mate",
    "theme": "BackRankMate",
    "difficulty": "Medium",
    "rating": 1968,
    "popularity": 92,
    "description": "Exploit the weak back rank.",
    "initialFen": "3b2k1/p5pp/3P3q/2pQp1r1/PpP2p2/1P3P2/4KRPr/2BR4 b - - 2 33",
    "fen": "3b3k/p5pp/3P3q/2pQp1r1/PpP2p2/1P3P2/4KRPr/2BR4 w - - 3 34",
    "preMove": "Kh8",
    "solution": [
      "Qf7",
      "Qe6",
      "Qxe6"
    ]
  },
  {
    "id": "owE8v",
    "title": "Back Rank Mate",
    "theme": "BackRankMate",
    "difficulty": "Medium",
    "rating": 1842,
    "popularity": 92,
    "description": "Exploit the weak back rank.",
    "initialFen": "r1b1r1k1/pp2bppp/4pn2/6B1/2Bq4/P1N5/1P2QPPP/2RR2K1 b - - 1 15",
    "fen": "r1b1r1k1/pp2bppp/4pn2/6B1/2B3q1/P1N5/1P2QPPP/2RR2K1 w - - 2 16",
    "preMove": "Qg4",
    "solution": [
      "Qxg4",
      "Nxg4",
      "Bxe7"
    ]
  },
  {
    "id": "uuVNS",
    "title": "Back Rank Mate",
    "theme": "BackRankMate",
    "difficulty": "Hard",
    "rating": 2116,
    "popularity": 83,
    "description": "Exploit the weak back rank.",
    "initialFen": "2r2rk1/Q4p1p/8/3R4/4q3/4P3/PP6/1K1R4 w - - 1 28",
    "fen": "2r2rk1/Q4p1p/8/3R4/4q3/4P3/PP6/K2R4 b - - 2 28",
    "preMove": "Ka1",
    "solution": [
      "Qxd5",
      "Rg1+",
      "Kh8"
    ]
  },
  {
    "id": "oKMZ1",
    "title": "Back Rank Mate",
    "theme": "Advantage",
    "difficulty": "Hard",
    "rating": 2135,
    "popularity": 93,
    "description": "Exploit the weak back rank.",
    "initialFen": "4r1k1/pQ3ppp/1p3q2/2p5/8/2P3P1/P1P2P1P/3R2K1 b - - 2 23",
    "fen": "4r1k1/pQ3ppp/1p6/2p5/8/2q3P1/P1P2P1P/3R2K1 w - - 0 24",
    "preMove": "Qxc3",
    "solution": [
      "Qe7",
      "Rf8",
      "Rd8",
      "Qe1+",
      "Qxe1"
    ]
  },
  {
    "id": "i6o0S",
    "title": "Back Rank Mate",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1768,
    "popularity": 90,
    "description": "Exploit the weak back rank.",
    "initialFen": "6k1/5ppp/p1n1p3/1p1n4/3PBP2/1R2P3/3B1PKP/2r5 b - - 3 26",
    "fen": "6k1/5ppp/p1n1p3/1p1n4/3PBP2/1R2P3/3B1PKP/r7 w - - 4 27",
    "preMove": "Ra1",
    "solution": [
      "Bxd5",
      "exd5",
      "Rc3",
      "Ne7",
      "Rc7"
    ]
  },
  {
    "id": "uMpFe",
    "title": "Back Rank Mate",
    "theme": "Advantage",
    "difficulty": "Easy",
    "rating": 1118,
    "popularity": 85,
    "description": "Exploit the weak back rank.",
    "initialFen": "6k1/3r1ppp/p3p3/1b1n4/4B3/6PP/2R2R1K/8 b - - 3 35",
    "fen": "6k1/2r2ppp/p3p3/1b1n4/4B3/6PP/2R2R1K/8 w - - 4 36",
    "preMove": "Rc7",
    "solution": [
      "Bxd5",
      "Rxc2",
      "Rxc2"
    ]
  },
  {
    "id": "8vzRJ",
    "title": "Mate in 3",
    "theme": "Deflection",
    "difficulty": "Easy",
    "rating": 1356,
    "popularity": 93,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "6k1/1p6/p3b3/3p1pP1/1P3B2/P1QR1PKq/r3r3/8 w - - 0 45",
    "fen": "6k1/1p6/p3b3/3p1pP1/1P3B2/P1QR1P1K/r3r3/8 b - - 0 45",
    "preMove": "Kxh3",
    "solution": [
      "Rh2+",
      "Bxh2",
      "f4+",
      "Kh4",
      "Rxh2#"
    ]
  },
  {
    "id": "AEe7R",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1785,
    "popularity": 93,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "4r1k1/1n3pP1/4p1nQ/pb1pP3/2r3P1/2p4B/2P2RNP/R1Bq2K1 w - - 1 36",
    "fen": "4r1k1/1n3pP1/4p1nQ/pb1pP3/2r3P1/2p4B/2P3NP/R1Bq1RK1 b - - 2 36",
    "preMove": "Rf1",
    "solution": [
      "Qxf1+",
      "Kxf1",
      "Rf4+",
      "Ke1",
      "Rf1#"
    ]
  },
  {
    "id": "BmYDx",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1822,
    "popularity": 93,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "6k1/pb3ppp/1p2p3/2Pr4/PP6/4B1P1/1R3P1r/1N2R1K1 w - - 0 26",
    "fen": "6k1/pb3ppp/1p2p3/2Pr4/PP6/4B1P1/3R1P1r/1N2R1K1 b - - 1 26",
    "preMove": "Rd2",
    "solution": [
      "Rh1+",
      "Kxh1",
      "Rh5+",
      "Kg1",
      "Rh1#"
    ]
  },
  {
    "id": "CGL5H",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1804,
    "popularity": 93,
    "description": "Find the forced checkmate. Find the forced mate in three. Finish with the classic Morphy's mate pattern.",
    "initialFen": "4rrk1/1p3ppp/p3p3/2bpQ1Bq/8/2P3RP/PP4P1/5R1K b - - 5 21",
    "fen": "4rrk1/bp3ppp/p3p3/3pQ1Bq/8/2P3RP/PP4P1/5R1K w - - 6 22",
    "preMove": "Ba7",
    "solution": [
      "Qxg7+",
      "Kxg7",
      "Bf6+",
      "Kh6",
      "Bg7#"
    ]
  },
  {
    "id": "H4qVZ",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1782,
    "popularity": 93,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "r1r2qk1/1p1b1pp1/p1nbp3/3p3Q/3P1P1B/2N1P2R/PP4PP/2R3K1 b - - 3 19",
    "fen": "r1r2qk1/1p1b1p2/p1nbp1p1/3p3Q/3P1P1B/2N1P2R/PP4PP/2R3K1 w - - 0 20",
    "preMove": "g6",
    "solution": [
      "Qh8+",
      "Kxh8",
      "Bf6+",
      "Kg8",
      "Rh8#"
    ]
  },
  {
    "id": "JHAIs",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1830,
    "popularity": 93,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "1r1q1rnk/p6p/np3p2/3P1R1Q/4B3/3P2PP/PP5K/4R3 b - - 1 26",
    "fen": "1r2qrnk/p6p/np3p2/3P1R1Q/4B3/3P2PP/PP5K/4R3 w - - 2 27",
    "preMove": "Qe8",
    "solution": [
      "Qxh7+",
      "Kxh7",
      "Rh5+",
      "Kg7",
      "Rh7#"
    ]
  },
  {
    "id": "NaGFp",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2125,
    "popularity": 93,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "r4qk1/pp3pn1/2b3pQ/3pR2p/P2B4/2P2P2/1PB3PP/6K1 b - - 2 28",
    "fen": "r4qk1/pp3p2/2b1n1pQ/3pR2p/P2B4/2P2P2/1PB3PP/6K1 w - - 3 29",
    "preMove": "Ne6",
    "solution": [
      "Qh8+",
      "Kxh8",
      "Rxh5+",
      "Kg8",
      "Rh8#"
    ]
  },
  {
    "id": "ObOM7",
    "title": "Mate in 3",
    "theme": "ArabianMate",
    "difficulty": "Medium",
    "rating": 1829,
    "popularity": 93,
    "description": "Deliver an Arabian mate with rook and knight. Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "2Q4k/4bpr1/5p2/p3p3/5PN1/1P1p1q2/P1P3RP/6K1 b - - 1 34",
    "fen": "2Q3rk/4bp2/5p2/p3p3/5PN1/1P1p1q2/P1P3RP/6K1 w - - 2 35",
    "preMove": "Rg8",
    "solution": [
      "Qxg8+",
      "Kxg8",
      "Nxf6+",
      "Kh8",
      "Rg8#"
    ]
  },
  {
    "id": "PF1YL",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2033,
    "popularity": 93,
    "description": "Find the forced checkmate. Find the forced mate in three. Finish with the classic Morphy's mate pattern.",
    "initialFen": "5rk1/r2pbppp/p3q3/1Pp5/1n6/N1Q3B1/PP2BPbP/R3K1R1 b Q - 1 19",
    "fen": "5rk1/rb1pbppp/p3q3/1Pp5/1n6/N1Q3B1/PP2BP1P/R3K1R1 w Q - 2 20",
    "preMove": "Bb7",
    "solution": [
      "Qxg7+",
      "Kxg7",
      "Be5+",
      "Kh6",
      "Bg7#"
    ]
  },
  {
    "id": "QHljr",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2034,
    "popularity": 93,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "1kr3r1/pp5p/2b1p3/4Pp2/1B1p4/P4N2/1P3PPP/2R2RK1 w - - 0 24",
    "fen": "1kr3r1/pp5p/2b1p3/4Pp2/1B1N4/P7/1P3PPP/2R2RK1 b - - 0 24",
    "preMove": "Nxd4",
    "solution": [
      "Rxg2+",
      "Kh1",
      "Rg1+",
      "Kxg1",
      "Rg8#"
    ]
  },
  {
    "id": "QpsNd",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 2123,
    "popularity": 93,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver Pillsbury's mate along the back rank.",
    "initialFen": "5rk1/r3qppp/3bpB2/3p4/Qp1P1P2/n1PN3P/5P2/2KR2R1 b - - 0 26",
    "fen": "5rk1/4qppp/3bpB2/3p4/rp1P1P2/n1PN3P/5P2/2KR2R1 w - - 0 27",
    "preMove": "Rxa4",
    "solution": [
      "Rxg7+",
      "Kh8",
      "Rg8+",
      "Kxg8",
      "Rg1#"
    ]
  },
  {
    "id": "RiSCX",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1966,
    "popularity": 93,
    "description": "Find the forced checkmate. Find the forced mate in three. Deliver the famous opera-style mate.",
    "initialFen": "5rk1/ppp3pp/3p2n1/5bB1/3P4/2N3Pq/PPPQ3P/5RK1 w - - 2 18",
    "fen": "5rk1/ppp3pp/3p2n1/5bB1/3P4/6Pq/PPPQN2P/5RK1 b - - 3 18",
    "preMove": "Ne2",
    "solution": [
      "Qxf1+",
      "Kxf1",
      "Bh3+",
      "Ke1",
      "Rf1#"
    ]
  }
];

export function getPuzzleOfTheDay(): Puzzle {
  const day = Math.floor(Date.now() / 86400000) % puzzles.length;
  return puzzles[day];
}
