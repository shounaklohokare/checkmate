import type { Puzzle } from "../utils/constants";

export const puzzles: Puzzle[] = [
  {
    "id": "002Q2",
    "title": "Mate in 1",
    "theme": "CornerMate",
    "difficulty": "Easy",
    "rating": 893,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "7k/p4R1p/3p3r/2pN1n2/2PbBBb1/3P2P1/P3r3/5R1K w - - 1 28",
    "fen": "7k/p4R1p/3p3B/2pN1n2/2PbB1b1/3P2P1/P3r3/5R1K b - - 0 28",
    "preMove": "Bxh6",
    "solution": [ "Nxg3#"]
  },
  {
    "id": "002X3",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 980,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "6k1/2q2p1p/4pPp1/4P3/p1pP1P2/RrP5/6QP/4B1K1 b - - 0 33",
    "fen": "6k1/2q2p1p/4pPp1/4P3/p1pP1P2/r1P5/6QP/4B1K1 w - - 0 34",
    "preMove": "Rxa3",
    "solution": [ "Qa8+", "Qb8", "Qxb8#"]
  },
  {
    "id": "005YX",
    "title": "Chess Puzzle",
    "theme": "DefensiveMove",
    "difficulty": "Expert",
    "rating": 1964,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "2rr4/2N2pk1/p1Q1b1pp/1p4q1/3pP3/1B1P4/PPP3PP/6RK w - - 7 25",
    "fen": "2rr4/5pk1/p1Q1N1pp/1p4q1/3pP3/1B1P4/PPP3PP/6RK b - - 0 25",
    "preMove": "Nxe6+",
    "solution": [
      "fxe6",
      "Qb7+",
      "Kh8"
    ]
  },
  {
    "id": "005gP",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Hard",
    "rating": 1701,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "8/8/3p4/2kP4/1p4P1/2pK4/P7/8 w - - 1 42",
    "fen": "8/8/3p4/2kP2P1/1p6/2pK4/P7/8 b - - 0 42",
    "preMove": "g5",
    "solution": [
      "Kxd5",
      "g6",
      "Ke6",
      "g7",
      "Kf7",
      "a4",
      "bxa3",
      "g8=R",
      "Kxg8"
    ]
  },
  {
    "id": "005x9",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 816,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r1b1kb1Q/ppp4p/6pB/3P4/2pn4/8/PPP1qPPP/RN1K3R w q - 2 13",
    "fen": "r1b1kb1Q/ppp4p/6pB/3P4/2pn4/8/PPP1qPPP/RNK4R b q - 3 13",
    "preMove": "Kc1",
    "solution": [
      "Qxc2#"
    ]
  },
  {
    "id": "007QU",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Medium",
    "rating": 1100,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "2rq1rk1/1b3p1p/p3p3/1p1pB1p1/2nP2N1/1RP1PP2/P1Q3PP/3R2K1 b - - 1 22",
    "fen": "2rq1rk1/1b5p/p3p3/1p1pBpp1/2nP2N1/1RP1PP2/P1Q3PP/3R2K1 w - - 0 23",
    "preMove": "f5",
    "solution": [
      "Nh6#"
    ]
  },
  {
    "id": "007hv",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1275,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "6k1/5p1p/1p4p1/p1bN1p2/2Pq1P2/1P5P/1P1Q2P1/7K w - - 1 32",
    "fen": "6k1/5p1p/1p4p1/p1bN1p2/2Pq1P2/1PQ4P/1P4P1/7K b - - 2 32",
    "preMove": "Qc3",
    "solution": [
      "Qg1#"
    ]
  },
  {
    "id": "0082f",
    "title": "Mate in 1",
    "theme": "KingsideAttack",
    "difficulty": "Easy",
    "rating": 858,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r4rk1/2q2ppp/3pp3/4Pb1N/pp6/1B4Q1/PPP3PP/1K1RR3 b - - 0 21",
    "fen": "r4rk1/2q2ppp/3pp3/4Pb1N/1p6/1p4Q1/PPP3PP/1K1RR3 w - - 0 22",
    "preMove": "axb3",
    "solution": [
      "Qxg7#"
    ]
  },
  {
    "id": "008cl",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 890,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r3k2r/ppp2p1p/2n1pp2/7q/2PN2b1/2BP1Pb1/PP2B1P1/R2Q1RK1 w kq - 1 16",
    "fen": "r3k2r/ppp2p1p/2n1pp2/7q/2PN2P1/2BP2b1/PP2B1P1/R2Q1RK1 b kq - 0 16",
    "preMove": "fxg4",
    "solution": [
      "Qh2#"
    ]
  },
  {
    "id": "008rw",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 875,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "rn2kb1r/pp2pppp/2p2n2/4q3/8/2N4Q/PPPPBPPP/R1B1K2R b KQkq - 2 8",
    "fen": "rn2kb1r/pp2pp1p/2p2np1/4q3/8/2N4Q/PPPPBPPP/R1B1K2R w KQkq - 0 9",
    "preMove": "g6",
    "solution": [
      "Qc8#"
    ]
  },
  {
    "id": "00AEM",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Hard",
    "rating": 1727,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "r4rk1/p2q1p1p/1p3Qp1/2p4P/3p4/5R2/PPP2PP1/4R1K1 b - - 0 22",
    "fen": "r2q1rk1/p4p1p/1p3Qp1/2p4P/3p4/5R2/PPP2PP1/4R1K1 w - - 1 23",
    "preMove": "Qd8",
    "solution": [
      "Re7",
      "Qxe7",
      "Qxe7"
    ]
  },
  {
    "id": "00AfZ",
    "title": "Mate in 1",
    "theme": "Master",
    "difficulty": "Easy",
    "rating": 978,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "2r3kR/Q7/5q2/1brpN3/5Pp1/4P1P1/6K1/1B6 b - - 2 43",
    "fen": "2r3kq/Q7/8/1brpN3/5Pp1/4P1P1/6K1/1B6 w - - 0 44",
    "preMove": "Qxh8",
    "solution": [
      "Qf7#"
    ]
  },
  {
    "id": "00BNd",
    "title": "Knight Fork",
    "theme": "Advantage",
    "difficulty": "Easy",
    "rating": 918,
    "popularity": 100,
    "description": "Win material using a tactical fork.",
    "initialFen": "1rr3k1/3bppbp/3p1np1/1B1N4/P2BP3/5P2/P2R2PP/R5K1 b - - 0 21",
    "fen": "1rr3k1/4ppbp/3p1np1/1b1N4/P2BP3/5P2/P2R2PP/R5K1 w - - 0 22",
    "preMove": "Bxb5",
    "solution": [
      "Nxe7+",
      "Kf8",
      "Nxc8"
    ]
  },
  {
    "id": "00C8e",
    "title": "Pin Tactic",
    "theme": "Endgame",
    "difficulty": "Hard",
    "rating": 1532,
    "popularity": 100,
    "description": "Exploit the pinned piece.",
    "initialFen": "8/5p1k/5Ppb/2p3P1/1p6/8/KB5Q/3q4 b - - 4 58",
    "fen": "8/5p1k/5Ppb/2p3P1/qp6/8/KB5Q/8 w - - 5 59",
    "preMove": "Qa4+",
    "solution": [
      "Kb1",
      "Qd1+",
      "Bc1"
    ]
  },
  {
    "id": "00ERL",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 835,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "1r2R1k1/2Q4p/pp6/2p2n2/P2P1P1q/2P4P/2PB2b1/4R1K1 b - - 0 29",
    "fen": "4r1k1/2Q4p/pp6/2p2n2/P2P1P1q/2P4P/2PB2b1/4R1K1 w - - 0 30",
    "preMove": "Rxe8",
    "solution": [
      "Rxe8#"
    ]
  },
  {
    "id": "00F5e",
    "title": "Chess Puzzle",
    "theme": "Advantage",
    "difficulty": "Hard",
    "rating": 1716,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "4k2r/1p2b1p1/p1q1Rp2/2p4p/8/1Q4B1/PP3PpP/6K1 b k - 1 22",
    "fen": "4k2r/1p1qb1p1/p3Rp2/2p4p/8/1Q4B1/PP3PpP/6K1 w k - 2 23",
    "preMove": "Qd7",
    "solution": [
      "Bd6",
      "Qxd6",
      "Rxd6"
    ]
  },
  {
    "id": "00FH6",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 946,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r6r/1q2bpk1/7p/p1p1pPpn/Pp2P1nP/1P1B1N2/2P3P1/2BRR1QK w - - 7 30",
    "fen": "r6r/1q2bpk1/7p/p1p1pPpn/Pp2P1nP/1P1B1N2/1BP3P1/3RR1QK b - - 8 30",
    "preMove": "Bb2",
    "solution": [
      "Ng3#"
    ]
  },
  {
    "id": "00Gv1",
    "title": "Mate in 3",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 985,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "8/1pp1r1kp/4r1p1/p1P5/5Q2/P4PPq/1P1R3P/3R2K1 w - - 2 32",
    "fen": "3R4/1pp1r1kp/4r1p1/p1P5/5Q2/P4PPq/1P5P/3R2K1 b - - 3 32",
    "preMove": "Rd8",
    "solution": [
      "Re1+",
      "Rxe1",
      "Rxe1+",
      "Kf2",
      "Qf1#"
    ]
  },
  {
    "id": "00Gvp",
    "title": "Knight Fork",
    "theme": "Advantage",
    "difficulty": "Easy",
    "rating": 997,
    "popularity": 100,
    "description": "Win material using a tactical fork.",
    "initialFen": "8/2kn1p2/8/3P4/R7/2P1N3/1r2K3/8 w - - 13 70",
    "fen": "8/2kn1p2/8/3P4/R7/2PKN3/1r6/8 b - - 14 70",
    "preMove": "Kd3",
    "solution": [
      "Nc5+",
      "Kd4",
      "Nxa4"
    ]
  },
  {
    "id": "00HXr",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Medium",
    "rating": 1367,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "2k4r/Q1p2pp1/5n2/3rNq2/4p2p/6Pb/PPP1BP1P/R3R1K1 b - - 1 22",
    "fen": "2k4r/Q1p2pp1/5n2/3rNq2/4p3/6pb/PPP1BP1P/R3R1K1 w - - 0 23",
    "preMove": "hxg3",
    "solution": [
      "Qa8#"
    ]
  },
  {
    "id": "00I8g",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Easy",
    "rating": 937,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "4rk2/3Rnrp1/8/4Q1p1/7P/6K1/8/8 w - - 0 50",
    "fen": "4rk2/3Rnrp1/8/4Q1P1/8/6K1/8/8 b - - 0 50",
    "preMove": "hxg5",
    "solution": [
      "Nf5+",
      "Qxf5",
      "Rxf5"
    ]
  },
  {
    "id": "00IEW",
    "title": "Knight Fork",
    "theme": "Crushing",
    "difficulty": "Easy",
    "rating": 849,
    "popularity": 100,
    "description": "Find the strongest continuation. Win material using a tactical fork.",
    "initialFen": "6k1/6p1/R6p/3P1N2/8/3K4/2r2b2/8 b - - 5 57",
    "fen": "2r3k1/6p1/R6p/3P1N2/8/3K4/5b2/8 w - - 6 58",
    "preMove": "Rc8",
    "solution": [
      "Ne7+",
      "Kf7",
      "Nxc8"
    ]
  },
  {
    "id": "00KAq",
    "title": "Chess Puzzle",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1366,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "5rr1/3pk1q1/p2Rp3/1pP4p/1P3p2/2P2QP1/1P3P1P/5RK1 w - - 1 26",
    "fen": "5rr1/3pk1q1/p3p3/1pP4p/1P1R1p2/2P2QP1/1P3P1P/5RK1 b - - 2 26",
    "preMove": "Rd4",
    "solution": [
      "fxg3",
      "Rxd7+",
      "Kxd7",
      "Qb7+",
      "Ke8"
    ]
  },
  {
    "id": "00KRo",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 815,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "4r3/pp1b2pp/3k4/2pP1pK1/2P1p2P/2P3P1/P3R3/2B5 b - - 2 26",
    "fen": "4r3/pp1b2pp/8/2pPkpK1/2P1p2P/2P3P1/P3R3/2B5 w - - 3 27",
    "preMove": "Ke5",
    "solution": [
      "Bf4#"
    ]
  },
  {
    "id": "00L76",
    "title": "Deflection",
    "theme": "Crushing",
    "difficulty": "Medium",
    "rating": 1134,
    "popularity": 100,
    "description": "Find the strongest continuation. Deflect the defender.",
    "initialFen": "5rk1/5pp1/4p3/7R/2P5/2n2N2/5r2/2K4R b - - 2 37",
    "fen": "5rk1/5p2/4p1p1/7R/2P5/2n2N2/5r2/2K4R w - - 0 38",
    "preMove": "g6",
    "solution": [
      "Rh8+",
      "Kg7",
      "R1h7+",
      "Kf6",
      "Rxf8"
    ]
  },
  {
    "id": "00LNH",
    "title": "Pin Tactic",
    "theme": "Advantage",
    "difficulty": "Hard",
    "rating": 1629,
    "popularity": 100,
    "description": "Exploit the pinned piece.",
    "initialFen": "1k2r3/pp2r2p/2pqbpp1/3n4/2BP1p2/5N1P/PPQB1PP1/1K1RR3 w - - 2 22",
    "fen": "1k2r3/pp2r2p/2pqbpp1/3n4/3P1p2/1B3N1P/PPQB1PP1/1K1RR3 b - - 3 22",
    "preMove": "Bb3",
    "solution": [
      "Bf5",
      "Qxf5",
      "gxf5"
    ]
  },
  {
    "id": "00LWX",
    "title": "Mate in 1",
    "theme": "EpauletteMate",
    "difficulty": "Easy",
    "rating": 845,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "2r4k/5p2/4pNp1/6Pp/q6P/7r/2PQ4/1RKN4 w - - 2 37",
    "fen": "2r4k/5p2/4pNp1/6Pp/qQ5P/7r/2P5/1RKN4 b - - 3 37",
    "preMove": "Qb4",
    "solution": [
      "Rxc2#"
    ]
  },
  {
    "id": "00LWa",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 860,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "2r3k1/5ppp/2P5/8/5P2/P5Pn/6BP/R3R1qK w - - 6 32",
    "fen": "2r3k1/5ppp/2P5/8/5P2/P5Pn/6BP/R5RK b - - 0 32",
    "preMove": "Rxg1",
    "solution": [
      "Nf2#"
    ]
  },
  {
    "id": "00Lnf",
    "title": "Mate in 1",
    "theme": "Master",
    "difficulty": "Easy",
    "rating": 980,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r4knb/1bpp4/p1n1pq2/1p4NQ/3PP3/2N5/PPP2PP1/2KR1B2 b - - 3 15",
    "fen": "r4knb/1bpp4/p1n1p2q/1p4NQ/3PP3/2N5/PPP2PP1/2KR1B2 w - - 4 16",
    "preMove": "Qh6",
    "solution": [
      "Qf7#"
    ]
  },
  {
    "id": "00Lvv",
    "title": "Mate in 2",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 858,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "2k2br1/1pprn3/p4p2/4p2Q/4P2P/2NqB3/PP4PK/3R4 b - - 1 22",
    "fen": "2k2br1/1pprn3/p4p2/4p2Q/4P2P/2N1q3/PP4PK/3R4 w - - 0 23",
    "preMove": "Qxe3",
    "solution": [
      "Qe8+",
      "Rd8",
      "Rxd8#"
    ]
  },
  {
    "id": "00MQl",
    "title": "Knight Fork",
    "theme": "Advantage",
    "difficulty": "Expert",
    "rating": 1852,
    "popularity": 100,
    "description": "Unleash a discovered attack. Win material using a tactical fork. Sacrifice material for a tactical gain.",
    "initialFen": "r1b2k1r/pp3ppp/2p5/2bp4/3N1Pnq/1B2B3/PPP3PP/RN1QR2K w - - 4 15",
    "fen": "r1b2k1r/pp3ppp/2p5/2bp4/5Pnq/1B2BN2/PPP3PP/RN1QR2K b - - 5 15",
    "preMove": "Nf3",
    "solution": [
      "Bxe3",
      "Nxh4",
      "Nf2+",
      "Kg1",
      "Nxd1+"
    ]
  },
  {
    "id": "00Mke",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Medium",
    "rating": 1230,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "6k1/p4p2/3P4/6pp/P2Q4/5qPP/r4P1K/3R4 w - - 1 42",
    "fen": "6k1/p2P1p2/8/6pp/P2Q4/5qPP/r4P1K/3R4 b - - 0 42",
    "preMove": "d7",
    "solution": [
      "Rxf2+",
      "Qxf2",
      "Qxf2+",
      "Kh1",
      "Qf3+"
    ]
  },
  {
    "id": "00Myw",
    "title": "Knight Fork",
    "theme": "Crushing",
    "difficulty": "Hard",
    "rating": 1434,
    "popularity": 100,
    "description": "Find the strongest continuation. Win material using a tactical fork.",
    "initialFen": "r1b3r1/2q2p1k/1n2p2n/p2pP1NP/P1pP1QP1/1pP5/1P3PB1/R3R1K1 b - - 4 26",
    "fen": "r1b3rk/2q2p2/1n2p2n/p2pP1NP/P1pP1QP1/1pP5/1P3PB1/R3R1K1 w - - 5 27",
    "preMove": "Kh8",
    "solution": [
      "Qf6+",
      "Rg7",
      "Qxh6+"
    ]
  },
  {
    "id": "00PZo",
    "title": "Deflection",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1079,
    "popularity": 100,
    "description": "Deflect the defender.",
    "initialFen": "7r/8/3b4/3p4/5PR1/2kN4/4KP2/8 w - - 1 67",
    "fen": "7r/8/3b4/3p1P2/6R1/2kN4/4KP2/8 b - - 0 67",
    "preMove": "f5",
    "solution": [
      "Re8+",
      "Kf3",
      "Kxd3"
    ]
  },
  {
    "id": "00Pc8",
    "title": "Knight Fork",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1082,
    "popularity": 100,
    "description": "Clear the critical square. Win material using a tactical fork.",
    "initialFen": "rnb2r2/pp4k1/2p3pp/4Np2/2BP4/8/PP4PP/2KRR3 b - - 0 18",
    "fen": "r1b2r2/pp1n2k1/2p3pp/4Np2/2BP4/8/PP4PP/2KRR3 w - - 1 19",
    "preMove": "Nd7",
    "solution": [
      "Nxd7",
      "Bxd7",
      "Re7+",
      "Kf6",
      "Rxd7"
    ]
  },
  {
    "id": "00Q4m",
    "title": "Chess Puzzle",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1075,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "5r2/1b3k2/1q4p1/p3Pp1p/2pn1P1P/4Q1P1/P6K/R1R2B2 w - - 2 34",
    "fen": "5r2/1b3k2/1q4p1/p3Pp1p/2pn1P1P/4Q1P1/P5BK/R1R5 b - - 3 34",
    "preMove": "Bg2",
    "solution": [
      "Nf3+",
      "Qxf3",
      "Bxf3"
    ]
  },
  {
    "id": "00QkV",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Medium",
    "rating": 1048,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "5k1r/p3Rpbp/3N2p1/4nbB1/2P5/3rP3/q4PPP/3Q1RK1 b - - 2 16",
    "fen": "5k1r/p3R1bp/3N1pp1/4nbB1/2P5/3rP3/q4PPP/3Q1RK1 w - - 0 17",
    "preMove": "f6",
    "solution": [
      "Re8#"
    ]
  },
  {
    "id": "00Rk3",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 924,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "8/1p2rppk/5q1p/Q4R2/2P5/PP5P/5PP1/5rK1 w - - 0 32",
    "fen": "8/1p2rppk/5q1p/Q4R2/2P5/PP5P/5PP1/5K2 b - - 0 32",
    "preMove": "Kxf1",
    "solution": [
      "Qa1+",
      "Qe1",
      "Rxe1#"
    ]
  },
  {
    "id": "00TJN",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 1745,
    "popularity": 100,
    "description": "Lure the opponent's piece onto an unfavorable square. Use a double check to gain the initiative. Find the forced checkmate. Find the forced mate in two. Sacrifice material for a tactical gain.",
    "initialFen": "r3r1k1/pp3pB1/2q3pp/3R1b2/8/P4Q2/BP3PPP/1R4K1 b - - 0 23",
    "fen": "r3r1k1/pp3pB1/2q3pp/3R4/8/P4Q2/BP3PPP/1b4K1 w - - 0 24",
    "preMove": "Bxb1",
    "solution": [
      "Qxf7+",
      "Kxf7",
      "Rd7#"
    ]
  },
  {
    "id": "00TTm",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 861,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r4b1r/pppqpkpp/6B1/7Q/2PP4/2N1P2P/PP4P1/R5K1 b - - 0 15",
    "fen": "r4bkr/pppqp1pp/6B1/7Q/2PP4/2N1P2P/PP4P1/R5K1 w - - 1 16",
    "preMove": "Kg8",
    "solution": [
      "Bf7#"
    ]
  },
  {
    "id": "00UwP",
    "title": "Chess Puzzle",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1188,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "5rk1/p4pp1/3qb2p/1B1p4/1r1P4/Q3PN2/P4PPP/2R3K1 b - - 5 19",
    "fen": "5rk1/p4pp1/3qb2p/1B1p4/3P4/Q3PN2/P4PPP/1rR3K1 w - - 6 20",
    "preMove": "Rb1",
    "solution": [
      "Qxd6",
      "Rxc1+",
      "Bf1"
    ]
  },
  {
    "id": "00Vv9",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 894,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "5r1k/pp4pp/5r2/4Q3/3P4/4NpN1/Pq5P/2R2R1K w - - 0 29",
    "fen": "5r1k/pp4pp/5r2/3NQ3/3P4/5pN1/Pq5P/2R2R1K b - - 1 29",
    "preMove": "Nd5",
    "solution": [
      "Qg2#"
    ]
  },
  {
    "id": "00WAp",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 956,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r5k1/4p2p/p5p1/1p1b2Q1/2p5/P4qN1/1P3P2/R2R2Kr w - - 2 28",
    "fen": "r5k1/4p2p/p5p1/1p1b2Q1/2p5/P4q2/1P3P2/R2R2KN b - - 0 28",
    "preMove": "Nxh1",
    "solution": [
      "Qxh1#"
    ]
  },
  {
    "id": "00WZO",
    "title": "Skewer",
    "theme": "Crushing",
    "difficulty": "Medium",
    "rating": 1247,
    "popularity": 100,
    "description": "Find the strongest continuation. Use a skewer to win material.",
    "initialFen": "8/1R2B3/5p2/1k2bP1p/p6r/5K2/8/8 b - - 7 45",
    "fen": "8/1R2B3/5p2/4bP1p/p1k4r/5K2/8/8 w - - 8 46",
    "preMove": "Kc4",
    "solution": [
      "Rb4+",
      "Kd5",
      "Rxh4"
    ]
  },
  {
    "id": "00XCT",
    "title": "Chess Puzzle",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 996,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "6Q1/7K/2k5/3r4/8/8/8/8 w - - 5 82",
    "fen": "6QK/8/2k5/3r4/8/8/8/8 b - - 6 82",
    "preMove": "Kh8",
    "solution": [
      "Rh5+",
      "Qh7",
      "Rxh7+"
    ]
  },
  {
    "id": "00XL2",
    "title": "Pin Tactic",
    "theme": "Crushing",
    "difficulty": "Easy",
    "rating": 944,
    "popularity": 100,
    "description": "Find the strongest continuation. Exploit the pinned piece.",
    "initialFen": "2kr3r/ppp3pp/6q1/3Pnp2/1PP1p3/7P/P2QNPP1/R4RK1 w - - 1 17",
    "fen": "2kr3r/ppp3pp/6q1/3Pnp2/1PPQp3/7P/P3NPP1/R4RK1 b - - 2 17",
    "preMove": "Qd4",
    "solution": [
      "Nf3+",
      "Kh1",
      "Nxd4"
    ]
  },
  {
    "id": "00Ycz",
    "title": "Mate in 3",
    "theme": "BackRankMate",
    "difficulty": "Medium",
    "rating": 1098,
    "popularity": 100,
    "description": "Exploit the weak back rank. Find the forced checkmate. Find the forced mate in three. Sacrifice material for a tactical gain.",
    "initialFen": "5k2/5r1p/pp2pQ2/8/8/1P6/P1q2PPP/4R1K1 w - - 1 32",
    "fen": "5k2/5r1p/pp2Q3/8/8/1P6/P1q2PPP/4R1K1 b - - 0 32",
    "preMove": "Qxe6",
    "solution": [
      "Qxf2+",
      "Kh1",
      "Qf1+",
      "Rxf1",
      "Rxf1#"
    ]
  },
  {
    "id": "00Yfr",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1026,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "5k2/1R4p1/p2bpr1p/3rN3/3P4/8/P1R2pPP/5K2 b - - 1 34",
    "fen": "5k2/1R4p1/p3pr1p/3rb3/3P4/8/P1R2pPP/5K2 w - - 0 35",
    "preMove": "Bxe5",
    "solution": [
      "Rc8+",
      "Rd8",
      "Rxd8#"
    ]
  },
  {
    "id": "00YjD",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Expert",
    "rating": 1948,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "8/8/2p5/5k2/3R2p1/1P1P2K1/2r5/8 w - - 0 38",
    "fen": "8/8/2p5/5k2/2R3p1/1P1P2K1/2r5/8 b - - 1 38",
    "preMove": "Rc4",
    "solution": [
      "Rxc4",
      "dxc4",
      "c5",
      "b4",
      "cxb4"
    ]
  },
  {
    "id": "00Yqb",
    "title": "Knight Fork",
    "theme": "Crushing",
    "difficulty": "Medium",
    "rating": 1177,
    "popularity": 100,
    "description": "Find the strongest continuation. Win material using a tactical fork.",
    "initialFen": "8/6k1/4p1pq/1p1pPp2/p2P1n2/2P1QN2/PP3PPP/5K2 w - - 4 39",
    "fen": "8/6k1/4p1pq/1p1pPp2/p2P1n2/2P1QNP1/PP3P1P/5K2 b - - 0 39",
    "preMove": "g3",
    "solution": [
      "Qh3+",
      "Ke1",
      "Ng2+",
      "Kd2",
      "Nxe3"
    ]
  },
  {
    "id": "00axT",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Hard",
    "rating": 1636,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "3R4/8/8/5p2/8/3p3P/1k2rPP1/3K4 b - - 25 48",
    "fen": "3R4/8/8/5p2/8/3p3P/1k3rP1/3K4 w - - 0 49",
    "preMove": "Rxf2",
    "solution": [
      "Rxd3",
      "Rxg2",
      "Rd2+",
      "Rxd2+",
      "Kxd2"
    ]
  },
  {
    "id": "00b3n",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1012,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "7R/1P3pk1/5rpp/8/8/4P1PK/4qPQP/8 w - - 7 41",
    "fen": "1Q5R/5pk1/5rpp/8/8/4P1PK/4qPQP/8 b - - 0 41",
    "preMove": "b8=Q",
    "solution": [
      "Qh5#"
    ]
  },
  {
    "id": "00bFH",
    "title": "Deflection",
    "theme": "Deflection",
    "difficulty": "Expert",
    "rating": 1824,
    "popularity": 100,
    "description": "Deflect the defender.",
    "initialFen": "4r1k1/1q3ppp/3B1n2/p2P4/8/Pp3Q1P/5PPN/1R4K1 w - - 0 27",
    "fen": "4r1k1/1q3ppp/3B1n2/p2P4/8/PQ5P/5PPN/1R4K1 b - - 0 27",
    "preMove": "Qxb3",
    "solution": [
      "Re1+",
      "Rxe1",
      "Qxb3"
    ]
  },
  {
    "id": "00cJo",
    "title": "Mate in 2",
    "theme": "BackRankMate",
    "difficulty": "Easy",
    "rating": 895,
    "popularity": 100,
    "description": "Exploit the weak back rank. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "2r3k1/5ppp/8/8/1P2p3/3bQpP1/1q1P1K1P/R1R5 b - - 1 30",
    "fen": "6k1/5ppp/8/8/1P2p3/3bQpP1/1q1P1K1P/R1r5 w - - 0 31",
    "preMove": "Rxc1",
    "solution": [
      "Ra8+",
      "Rc8",
      "Rxc8#"
    ]
  },
  {
    "id": "00cl7",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 913,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r5k1/ppp1p1b1/4N1Q1/3pq1Bp/7P/8/PPPN1rP1/2KR4 w - - 1 17",
    "fen": "r5k1/ppp1p1b1/4N1Q1/3pq1Bp/7P/5N2/PPP2rP1/2KR4 b - - 2 17",
    "preMove": "Nf3",
    "solution": [
      "Qxb2#"
    ]
  },
  {
    "id": "00coU",
    "title": "Skewer",
    "theme": "Crushing",
    "difficulty": "Hard",
    "rating": 1524,
    "popularity": 100,
    "description": "Find the strongest continuation. Use a skewer to win material.",
    "initialFen": "6k1/R7/5K2/1r6/5r2/p4N2/8/5R2 w - - 3 50",
    "fen": "6k1/R3K3/8/1r6/5r2/p4N2/8/5R2 b - - 4 50",
    "preMove": "Ke7",
    "solution": [
      "Rf7+",
      "Kd6",
      "Rxa7"
    ]
  },
  {
    "id": "00dEJ",
    "title": "Mate in 1",
    "theme": "KingsideAttack",
    "difficulty": "Easy",
    "rating": 817,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "1br2rk1/ppqn2pp/4p3/1P6/P3B3/8/1B3PPP/R2Q1RK1 w - - 1 18",
    "fen": "1br2rk1/ppqn2pp/4p3/1P6/P3B3/8/1B3PPP/2RQ1RK1 b - - 2 18",
    "preMove": "Rc1",
    "solution": [
      "Qxh2#"
    ]
  },
  {
    "id": "00dzT",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 908,
    "popularity": 100,
    "description": "Capture the loose piece. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "6k1/1Q4p1/p1p4p/3pP3/P3bq2/2N4P/1P4PK/5B2 w - - 1 26",
    "fen": "6k1/1Q4p1/p1p4p/3pP3/P3bq2/2N4P/1P4P1/5B1K b - - 2 26",
    "preMove": "Kh1",
    "solution": [
      "Qxf1+",
      "Kh2",
      "Qxg2#"
    ]
  },
  {
    "id": "00eNe",
    "title": "Mate in 2",
    "theme": "KingsideAttack",
    "difficulty": "Easy",
    "rating": 865,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "4r1k1/p1p2ppp/2p1r3/3q4/P2b4/1P1PB3/2Q2PPP/2R1R1K1 w - - 0 21",
    "fen": "4r1k1/p1p2ppp/2p1r3/3q4/P2B4/1P1P4/2Q2PPP/2R1R1K1 b - - 0 21",
    "preMove": "Bxd4",
    "solution": [
      "Rxe1+",
      "Rxe1",
      "Rxe1#"
    ]
  },
  {
    "id": "00f1Y",
    "title": "Discovered Attack",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1185,
    "popularity": 100,
    "description": "Unleash a discovered attack.",
    "initialFen": "1r6/p2n1pkp/4p1p1/2Np4/1r6/1P1K1P1P/P3R1P1/2R5 b - - 5 36",
    "fen": "2r5/p2n1pkp/4p1p1/2Np4/1r6/1P1K1P1P/P3R1P1/2R5 w - - 6 37",
    "preMove": "Rc8",
    "solution": [
      "Nxe6+",
      "fxe6",
      "Rxc8"
    ]
  },
  {
    "id": "00f9v",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 910,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "5rk1/2p3p1/1p1p4/3Pp2p/1PP1N1q1/3Qr2N/6PP/6K1 w - - 0 29",
    "fen": "5rk1/2p3p1/1p1p4/3Pp2p/1PP1N1q1/4Q2N/6PP/6K1 b - - 0 29",
    "preMove": "Qxe3",
    "solution": [
      "Qd1+",
      "Qe1",
      "Qxe1#"
    ]
  },
  {
    "id": "00fSz",
    "title": "Mate in 2",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 907,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "rn1qk2r/ppp2ppp/3p2b1/2bP4/2P1n1P1/P1N1pP1P/1P2P1B1/R1BQK1NR w KQkq - 1 10",
    "fen": "rn1qk2r/ppp2ppp/3p2b1/2bP4/2P1P1P1/P1N1p2P/1P2P1B1/R1BQK1NR b KQkq - 0 10",
    "preMove": "fxe4",
    "solution": [
      "Qh4+",
      "Kf1",
      "Qf2#"
    ]
  },
  {
    "id": "00fpf",
    "title": "Pin Tactic",
    "theme": "Advantage",
    "difficulty": "Expert",
    "rating": 2044,
    "popularity": 100,
    "description": "Exploit the pinned piece.",
    "initialFen": "7r/pkp5/1pN1Q1rb/3p1n1q/3P4/2P3PN/PP4BP/5RK1 w - - 1 25",
    "fen": "7r/pkp5/1pN3rb/3Q1n1q/3P4/2P3PN/PP4BP/5RK1 b - - 0 25",
    "preMove": "Qxd5",
    "solution": [
      "Be3+",
      "Rf2",
      "Qd1+"
    ]
  },
  {
    "id": "00glf",
    "title": "Chess Puzzle",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1310,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "3r2k1/R4p1p/6p1/2p5/P2b1B2/7P/2r2PP1/5RK1 b - - 0 25",
    "fen": "3r2k1/R4p1p/6p1/2p5/P4B2/7P/2r2bP1/5RK1 w - - 0 26",
    "preMove": "Bxf2+",
    "solution": [
      "Rxf2",
      "Rd1+",
      "Rf1",
      "Rxf1+",
      "Kxf1"
    ]
  },
  {
    "id": "00gym",
    "title": "Knight Fork",
    "theme": "Advantage",
    "difficulty": "Hard",
    "rating": 1673,
    "popularity": 100,
    "description": "Win material using a tactical fork.",
    "initialFen": "r2qkb1r/pp2pppp/3p1nb1/4n3/4P1PN/2PB3P/PP3P2/RNBQK2R b KQkq - 0 11",
    "fen": "r2qkb1r/pp2pppp/3p1n2/4n3/4b1PN/2PB3P/PP3P2/RNBQK2R w KQkq - 0 12",
    "preMove": "Bxe4",
    "solution": [
      "Bxe4",
      "Nxe4",
      "Qa4+",
      "Nc6",
      "Qxe4"
    ]
  },
  {
    "id": "00hq5",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Expert",
    "rating": 1993,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "8/8/p7/1p2kp1p/4pp2/1PP2P2/P3K1PP/8 w - - 0 30",
    "fen": "8/8/p7/1p2kp1p/4pp2/1PP2PP1/P3K2P/8 b - - 0 30",
    "preMove": "g3",
    "solution": [
      "fxg3",
      "hxg3",
      "f4"
    ]
  },
  {
    "id": "00iWt",
    "title": "Mate in 4",
    "theme": "Deflection",
    "difficulty": "Hard",
    "rating": 1589,
    "popularity": 100,
    "description": "Deflect the defender. Find the forced checkmate. Find the forced mate.",
    "initialFen": "8/pk5p/1pp1Q3/8/3R2P1/P1P1K2n/1qP2r2/8 b - - 1 35",
    "fen": "8/pk5p/1pp1Q3/8/3R2P1/P1P1K2n/2q2r2/8 w - - 0 36",
    "preMove": "Qxc2",
    "solution": [
      "Rd7+",
      "Ka6",
      "Qc4+",
      "b5",
      "Qxc6+",
      "Ka5",
      "Rxa7#"
    ]
  },
  {
    "id": "00jhH",
    "title": "Knight Fork",
    "theme": "Crushing",
    "difficulty": "Easy",
    "rating": 927,
    "popularity": 100,
    "description": "Find the strongest continuation. Win material using a tactical fork.",
    "initialFen": "r7/2p1kp2/3p1np1/1p2p1N1/4P3/2PP2P1/1P2Q1PK/8 w - - 4 29",
    "fen": "r7/2p1kp2/3p1np1/1p2p1N1/4P3/2PP2P1/1P3QPK/8 b - - 5 29",
    "preMove": "Qf2",
    "solution": [
      "Ng4+",
      "Kg1",
      "Nxf2"
    ]
  },
  {
    "id": "00kq8",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 895,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "5Qk1/2R2pp1/7p/q2p4/2n5/7P/4RPP1/6K1 b - - 0 34",
    "fen": "5k2/2R2pp1/7p/q2p4/2n5/7P/4RPP1/6K1 w - - 0 35",
    "preMove": "Kxf8",
    "solution": [
      "Rc8+",
      "Qd8",
      "Rxd8#"
    ]
  },
  {
    "id": "00oNP",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 833,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "6k1/2r5/4p3/p2pb1pP/R5P1/1P6/PP3r2/1K2R3 w - - 0 29",
    "fen": "6k1/2r5/4p3/p2pR1pP/R5P1/1P6/PP3r2/1K6 b - - 0 29",
    "preMove": "Rxe5",
    "solution": [
      "Rf1+",
      "Re1",
      "Rxe1#"
    ]
  },
  {
    "id": "00pDE",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Medium",
    "rating": 1033,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r3k2r/pp3p2/1qN1p2p/3p4/P7/8/1PP2bPP/R2QKB1R w KQkq - 0 17",
    "fen": "r3k2r/pp3p2/1qN1p2p/3p4/P7/8/1PPK1bPP/R2Q1B1R b kq - 1 17",
    "preMove": "Kd2",
    "solution": [
      "Qe3#"
    ]
  },
  {
    "id": "00pHb",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 907,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r5rk/4qp1p/p4N1Q/1p2p3/3pP3/1P1P3P/1PP3P1/5RK1 b - - 2 23",
    "fen": "r6k/4qp1p/p4NrQ/1p2p3/3pP3/1P1P3P/1PP3P1/5RK1 w - - 3 24",
    "preMove": "Rg6",
    "solution": [
      "Qxh7#"
    ]
  },
  {
    "id": "00piA",
    "title": "Knight Fork",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1126,
    "popularity": 100,
    "description": "Win material using a tactical fork.",
    "initialFen": "r3r1k1/pp3pp1/2p2q1p/3pP3/P3bP2/2P1N1P1/1P1Q1K1P/R3R3 b - - 0 23",
    "fen": "r5k1/pp3pp1/2p2q1p/3pr3/P3bP2/2P1N1P1/1P1Q1K1P/R3R3 w - - 0 24",
    "preMove": "Rxe5",
    "solution": [
      "Ng4",
      "Qf5",
      "Nxe5"
    ]
  },
  {
    "id": "00qD8",
    "title": "Chess Puzzle",
    "theme": "Advantage",
    "difficulty": "Expert",
    "rating": 1890,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "8/1Q3Rkp/p5p1/1p2q3/2p5/P6P/1b2r1P1/7K b - - 0 37",
    "fen": "8/1Q3R1p/p5pk/1p2q3/2p5/P6P/1b2r1P1/7K w - - 1 38",
    "preMove": "Kh6",
    "solution": [
      "Rxh7+",
      "Kg5",
      "h4+",
      "Kf5",
      "Qf3+"
    ]
  },
  {
    "id": "00rw0",
    "title": "Mate in 3",
    "theme": "ExposedKing",
    "difficulty": "Expert",
    "rating": 1805,
    "popularity": 100,
    "description": "Win material using a tactical fork. Find the forced checkmate. Find the forced mate in three. Sacrifice material for a tactical gain.",
    "initialFen": "r2q3k/5Pb1/2n3Bp/3p2pP/pp1P2Q1/6B1/1PP5/6K1 b - - 0 39",
    "fen": "r2q3k/5P2/2n3Bp/3p2pP/pp1b2Q1/6B1/1PP5/6K1 w - - 0 40",
    "preMove": "Bxd4+",
    "solution": [
      "Qxd4+",
      "Nxd4",
      "Be5+",
      "Qf6",
      "Bxf6#"
    ]
  },
  {
    "id": "00s7Y",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 971,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two. Exploit the pinned piece.",
    "initialFen": "5rk1/5Rpp/1q1p4/2pB4/6Q1/2b4P/Pr4P1/6K1 b - - 0 29",
    "fen": "6k1/5rpp/1q1p4/2pB4/6Q1/2b4P/Pr4P1/6K1 w - - 0 30",
    "preMove": "Rxf7",
    "solution": [
      "Qc8+",
      "Qd8",
      "Qxd8#"
    ]
  },
  {
    "id": "00swU",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Medium",
    "rating": 1048,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "3rkb1r/pppqp1pp/2n5/1Q3p2/4N3/1P2P3/PBP2PPP/R3KB1R w KQk - 0 12",
    "fen": "3rkb1r/pppqp1pp/2n5/1QN2p2/8/1P2P3/PBP2PPP/R3KB1R b KQk - 1 12",
    "preMove": "Nc5",
    "solution": [
      "Qd2#"
    ]
  },
  {
    "id": "00vj7",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1128,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "8/8/7p/4k1nP/6PN/1r3B2/5K2/8 b - - 1 54",
    "fen": "8/8/7p/6nP/5kPN/1r3B2/5K2/8 w - - 2 55",
    "preMove": "Kf4",
    "solution": [
      "Ng6#"
    ]
  },
  {
    "id": "00xWX",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Medium",
    "rating": 1159,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "5Q2/7p/6pk/8/8/1Pq3pP/6P1/7K b - - 1 45",
    "fen": "5Q2/7p/6p1/7k/8/1Pq3pP/6P1/7K w - - 2 46",
    "preMove": "Kh5",
    "solution": [
      "Qf3+",
      "Qxf3",
      "gxf3"
    ]
  },
  {
    "id": "00yIS",
    "title": "Deflection",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1063,
    "popularity": 100,
    "description": "Deflect the defender. Unleash a discovered attack.",
    "initialFen": "3r3k/p5p1/5q1p/8/P1b5/4Q1RP/6BK/8 b - - 6 42",
    "fen": "7k/p5p1/5q1p/8/P1b5/3rQ1RP/6BK/8 w - - 7 43",
    "preMove": "Rd3",
    "solution": [
      "Qe8+",
      "Bg8",
      "Rxd3"
    ]
  },
  {
    "id": "00ybx",
    "title": "Deflection",
    "theme": "Crushing",
    "difficulty": "Easy",
    "rating": 961,
    "popularity": 100,
    "description": "Find the strongest continuation. Deflect the defender.",
    "initialFen": "6k1/p7/2p1r1bp/3p2p1/8/1PP3BP/P4P2/3R1K2 w - - 0 35",
    "fen": "6k1/p7/2p1r1bp/3p2p1/8/1PP3BP/P4P2/4RK2 b - - 1 35",
    "preMove": "Re1",
    "solution": [
      "Bd3+",
      "Kg2",
      "Rxe1"
    ]
  },
  {
    "id": "00yt1",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Medium",
    "rating": 1227,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r3rk2/pp3pbp/6pn/4N3/2Qp1P2/1P5P/6P1/3R2K1 b - - 0 25",
    "fen": "r3rk2/pp3pbp/6p1/4Nn2/2Qp1P2/1P5P/6P1/3R2K1 w - - 1 26",
    "preMove": "Nf5",
    "solution": [
      "Qxf7#"
    ]
  },
  {
    "id": "00zmB",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Medium",
    "rating": 1148,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "2k4r/pp3ppp/6b1/2pQP3/8/2q5/P4PPP/R1B1K2R w KQ - 0 20",
    "fen": "2k4r/pp3ppp/6b1/2pQP3/8/2q5/P4PPP/R1B2K1R b - - 1 20",
    "preMove": "Kf1",
    "solution": [
      "Bd3+",
      "Qxd3",
      "Qxd3+"
    ]
  },
  {
    "id": "010WS",
    "title": "Mate in 3",
    "theme": "Endgame",
    "difficulty": "Expert",
    "rating": 2044,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in three. Exploit the pinned piece.",
    "initialFen": "6k1/p2Q4/3p2p1/8/3qPn2/5P2/PPR3PP/6K1 w - - 2 37",
    "fen": "6k1/p2Q4/3p2p1/8/3qPn2/5P2/PP3RPP/6K1 b - - 3 37",
    "preMove": "Rf2",
    "solution": [
      "Ne2+",
      "Kh1",
      "Qd1+",
      "Rf1",
      "Qxf1#"
    ]
  },
  {
    "id": "013NZ",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Easy",
    "rating": 846,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "8/pp1r1q1k/2p1p1np/4Q1p1/P3P1N1/1P3P1P/1BP2P1K/8 b - - 2 27",
    "fen": "8/pp1r3k/2p1p1np/4Q1p1/P3PqN1/1P3P1P/1BP2P1K/8 w - - 3 28",
    "preMove": "Qf4+",
    "solution": [
      "Qxf4",
      "Nxf4",
      "Nf6+"
    ]
  },
  {
    "id": "013oK",
    "title": "Knight Fork",
    "theme": "Advantage",
    "difficulty": "Hard",
    "rating": 1500,
    "popularity": 100,
    "description": "Win material using a tactical fork.",
    "initialFen": "8/8/p3r2k/1Q5p/3P2q1/2P5/PP6/1K3R2 w - - 0 31",
    "fen": "8/8/p3r2k/2Q4p/3P2q1/2P5/PP6/1K3R2 b - - 1 31",
    "preMove": "Qc5",
    "solution": [
      "Qe4+",
      "Kc1",
      "Qe3+",
      "Kc2",
      "Qe2+",
      "Kb3",
      "Qxf1"
    ]
  },
  {
    "id": "015fL",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 987,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "8/R7/p1p4P/1p6/1P6/2kP4/3N3r/1K6 w - - 0 50",
    "fen": "8/R7/p1p4P/1p6/1P6/2kP4/3N3r/2K5 b - - 1 50",
    "preMove": "Kc1",
    "solution": [
      "Rh1+",
      "Nf1",
      "Rxf1#"
    ]
  },
  {
    "id": "016Im",
    "title": "Knight Fork",
    "theme": "Advantage",
    "difficulty": "Easy",
    "rating": 802,
    "popularity": 100,
    "description": "Win material using a tactical fork.",
    "initialFen": "3r2k1/ppp5/1b6/5Npp/6p1/1P1p2P1/PB1Pn1KP/4R3 b - - 3 29",
    "fen": "6k1/ppp5/1b6/3r1Npp/6p1/1P1p2P1/PB1Pn1KP/4R3 w - - 4 30",
    "preMove": "Rd5",
    "solution": [
      "Ne7+",
      "Kf7",
      "Nxd5"
    ]
  },
  {
    "id": "017xQ",
    "title": "Knight Fork",
    "theme": "Crushing",
    "difficulty": "Easy",
    "rating": 897,
    "popularity": 100,
    "description": "Find the strongest continuation. Win material using a tactical fork.",
    "initialFen": "2b5/7k/1P6/5N2/6p1/6Kp/8/8 b - - 0 53",
    "fen": "2b5/8/1P4k1/5N2/6p1/6Kp/8/8 w - - 1 54",
    "preMove": "Kg6",
    "solution": [
      "Ne7+",
      "Kg5",
      "Nxc8"
    ]
  },
  {
    "id": "018Iz",
    "title": "Promotion",
    "theme": "AdvancedPawn",
    "difficulty": "Medium",
    "rating": 1325,
    "popularity": 100,
    "description": "Find the strongest continuation. Promote your pawn.",
    "initialFen": "8/3P4/8/1kP2pbP/8/5K2/8/8 b - - 0 51",
    "fen": "8/3P4/8/2k2pbP/8/5K2/8/8 w - - 0 52",
    "preMove": "Kxc5",
    "solution": [
      "h6",
      "Kc6",
      "h7",
      "Kxd7",
      "h8=Q"
    ]
  },
  {
    "id": "0192c",
    "title": "Mate in 2",
    "theme": "BackRankMate",
    "difficulty": "Easy",
    "rating": 976,
    "popularity": 100,
    "description": "Exploit the weak back rank. Find the forced checkmate. Find the forced mate in two. Sacrifice material for a tactical gain.",
    "initialFen": "2r3k1/1Q3ppp/2pB4/2Pp1b1n/3p3K/P4P2/4q1PP/R3R3 b - - 3 24",
    "fen": "2r3k1/1Q3ppp/2pB4/2Pp1b1n/3p3K/P4P2/6qP/R3R3 w - - 0 25",
    "preMove": "Qxg2",
    "solution": [
      "Qxc8+",
      "Bxc8",
      "Re8#"
    ]
  },
  {
    "id": "01AcF",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Expert",
    "rating": 1993,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "8/6k1/4pRP1/3pPp2/2r2K2/2P5/8/8 w - - 1 43",
    "fen": "8/6k1/4pRP1/3pPp2/2r5/2P3K1/8/8 b - - 2 43",
    "preMove": "Kg3",
    "solution": [
      "Rg4+",
      "Kf3",
      "Rxg6"
    ]
  },
  {
    "id": "01B2X",
    "title": "Mate in 1",
    "theme": "Master",
    "difficulty": "Medium",
    "rating": 1019,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "4r1k1/3p1p1p/8/2pP1QpP/4n3/4N3/4NnP1/r5KR w - - 2 30",
    "fen": "4r1k1/3p1p1p/8/2pP1QpP/4n3/4N3/4NnPK/r6R b - - 3 30",
    "preMove": "Kh2",
    "solution": [
      "Rxh1#"
    ]
  },
  {
    "id": "01BTN",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 945,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "5Bk1/pp5p/1n4b1/2p5/2P5/2N1bB1P/PP4P1/Q2R1Kq1 w - - 9 29",
    "fen": "5Bk1/pp5p/1n4b1/2p5/2P5/2N1bB1P/PP2K1P1/Q2R2q1 b - - 10 29",
    "preMove": "Ke2",
    "solution": [
      "Qf2#"
    ]
  },
  {
    "id": "01Cjs",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Medium",
    "rating": 1183,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "8/5p2/3pkPrp/1p1rp2R/1P6/2P2RP1/3K1P1P/8 w - - 1 34",
    "fen": "8/5p2/3pkPrp/1p1rp2R/1P6/2P2RP1/4KP1P/8 b - - 2 34",
    "preMove": "Ke2",
    "solution": [
      "e4",
      "Rh4",
      "exf3+"
    ]
  },
  {
    "id": "01Cq8",
    "title": "Knight Fork",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1185,
    "popularity": 100,
    "description": "Win material using a tactical fork.",
    "initialFen": "r2r1k2/5p1p/p4p2/1pP1p3/3Nb3/P3P3/1P3PPP/2RR2K1 w - - 0 20",
    "fen": "r2r1k2/5p1p/p4p2/1pP1p3/4b3/PN2P3/1P3PPP/2RR2K1 b - - 1 20",
    "preMove": "Nb3",
    "solution": [
      "Rxd1+",
      "Rxd1",
      "Bc2",
      "Rd6",
      "Bxb3"
    ]
  },
  {
    "id": "01DVo",
    "title": "Chess Puzzle",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1002,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "3q2k1/1p2brp1/1nn1p2p/p1p1P2N/P1Pp3P/1P1P2Q1/1B3P2/4RBK1 w - - 7 31",
    "fen": "3q2k1/1p2brp1/1nn1p2p/p1p1P2N/P1Pp3P/1P1P2QB/1B3P2/4R1K1 b - - 8 31",
    "preMove": "Bh3",
    "solution": [
      "Bxh4",
      "Bxe6",
      "Bxg3"
    ]
  },
  {
    "id": "01E4E",
    "title": "Chess Puzzle",
    "theme": "Advantage",
    "difficulty": "Expert",
    "rating": 1927,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "r1bq1rk1/pp3pBp/2pp2p1/8/B3n3/P1N4P/1PP2PP1/R2QK2R b KQ - 0 12",
    "fen": "r1bq1rk1/pp3pBp/2pp2p1/8/B7/P1n4P/1PP2PP1/R2QK2R w KQ - 0 13",
    "preMove": "Nxc3",
    "solution": [
      "Bxc3",
      "Re8+",
      "Kf1"
    ]
  },
  {
    "id": "01E8U",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 812,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r3k2r/p2n1ppp/q1pBp3/3p2Q1/1PpPb3/5NP1/1P2PPBP/5RK1 b kq - 3 18",
    "fen": "r3k1r1/p2n1ppp/q1pBp3/3p2Q1/1PpPb3/5NP1/1P2PPBP/5RK1 w q - 4 19",
    "preMove": "Rg8",
    "solution": [
      "Qe7#"
    ]
  },
  {
    "id": "01FjT",
    "title": "Knight Fork",
    "theme": "Advantage",
    "difficulty": "Easy",
    "rating": 937,
    "popularity": 100,
    "description": "Win material using a tactical fork.",
    "initialFen": "r3k1nr/pp2B3/2p1p3/3q3p/4N1p1/3P2P1/PPP2P1P/R3Q1K1 b kq - 0 18",
    "fen": "r3k2r/pp2n3/2p1p3/3q3p/4N1p1/3P2P1/PPP2P1P/R3Q1K1 w kq - 0 19",
    "preMove": "Nxe7",
    "solution": [
      "Nf6+",
      "Kf7",
      "Nxd5"
    ]
  },
  {
    "id": "01H4V",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 844,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r5k1/6p1/2N3pp/3p4/P2P4/1P5n/6PP/5RqK w - - 7 34",
    "fen": "r5k1/6p1/2N3pp/3p4/P2P4/1P5n/6PP/6RK b - - 0 34",
    "preMove": "Rxg1",
    "solution": [
      "Nf2#"
    ]
  },
  {
    "id": "01HQs",
    "title": "Pin Tactic",
    "theme": "Advantage",
    "difficulty": "Hard",
    "rating": 1525,
    "popularity": 100,
    "description": "Exploit the pinned piece.",
    "initialFen": "2k2b1r/ppp1ppp1/2n4p/8/3r2nq/2NPB3/PPP2P1N/R2QRBK1 w - - 6 14",
    "fen": "2k2b1r/ppp1ppp1/2n4p/8/3r2Nq/2NPB3/PPP2P2/R2QRBK1 b - - 0 14",
    "preMove": "Nxg4",
    "solution": [
      "Rxg4+",
      "Bg2",
      "Qh3",
      "Qxg4+",
      "Qxg4"
    ]
  },
  {
    "id": "01I8x",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Easy",
    "rating": 846,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "8/1p2R2p/3k4/1p1q4/P7/5P2/6K1/4R3 w - - 2 42",
    "fen": "8/1p2R2p/3kR3/1p1q4/P7/5P2/6K1/8 b - - 3 42",
    "preMove": "R1e6+",
    "solution": [
      "Qxe6",
      "Rxe6+",
      "Kxe6"
    ]
  },
  {
    "id": "01ImY",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Medium",
    "rating": 1096,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r7/4R2p/1B1P1kq1/1p2pp2/5n2/2Q2N2/PP3P1P/6rK w - - 3 29",
    "fen": "r7/4R2p/1B1P1kq1/1p2pp2/5n2/2Q5/PP3P1P/6NK b - - 0 29",
    "preMove": "Nxg1",
    "solution": [
      "Qg2#"
    ]
  },
  {
    "id": "01J49",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 873,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "6R1/p4q2/2p4p/6pk/6P1/8/P4r1P/6QK b - - 0 42",
    "fen": "6R1/p4q2/2p4p/6p1/6Pk/8/P4r1P/6QK w - - 1 43",
    "preMove": "Kh4",
    "solution": [
      "Qg3#"
    ]
  },
  {
    "id": "01Ja1",
    "title": "Clearance",
    "theme": "Advantage",
    "difficulty": "Hard",
    "rating": 1597,
    "popularity": 100,
    "description": "Clear the critical square.",
    "initialFen": "4r1k1/p6p/1p1rNb1P/5K2/1P3p2/PR3P2/6P1/7R w - - 6 39",
    "fen": "4r1k1/p6p/1p1r1b1P/5K2/1P3N2/PR3P2/6P1/7R b - - 0 39",
    "preMove": "Nxf4",
    "solution": [
      "Re5+",
      "Kg4",
      "Rg5+",
      "Kh3",
      "Be5",
      "g4",
      "Bxf4"
    ]
  },
  {
    "id": "01Jpm",
    "title": "Promotion",
    "theme": "AdvancedPawn",
    "difficulty": "Medium",
    "rating": 1376,
    "popularity": 100,
    "description": "Deflect the defender. Promote your pawn.",
    "initialFen": "3R4/8/p5pp/2B5/5b1P/P3p3/8/3K1k2 w - - 2 46",
    "fen": "5R2/8/p5pp/2B5/5b1P/P3p3/8/3K1k2 b - - 3 46",
    "preMove": "Rf8",
    "solution": [
      "e2+",
      "Kc2",
      "e1=Q",
      "Rxf4+",
      "Kg2"
    ]
  },
  {
    "id": "01Kb6",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Medium",
    "rating": 1029,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r2qkbnr/1b1p1pp1/p1n1p2p/1pp1P3/4NP2/3PBN2/PPP3PP/R2QKB1R b KQkq - 1 8",
    "fen": "r2qkb1r/1b1pnpp1/p1n1p2p/1pp1P3/4NP2/3PBN2/PPP3PP/R2QKB1R w KQkq - 2 9",
    "preMove": "Nge7",
    "solution": [
      "Nd6#"
    ]
  },
  {
    "id": "01LPf",
    "title": "Chess Puzzle",
    "theme": "Advantage",
    "difficulty": "Easy",
    "rating": 925,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "2k5/pp2b3/2p1p2p/4N3/2P1Pp2/2N4n/PPBr1P2/5R1K w - - 1 27",
    "fen": "2k5/pp2b3/2p1p2p/4N3/2P1Pp2/1BN4n/PP1r1P2/5R1K b - - 2 27",
    "preMove": "Bb3",
    "solution": [
      "Nxf2+",
      "Rxf2",
      "Rxf2"
    ]
  },
  {
    "id": "01Mee",
    "title": "Knight Fork",
    "theme": "Crushing",
    "difficulty": "Expert",
    "rating": 1893,
    "popularity": 100,
    "description": "Find the strongest continuation. Win material using a tactical fork.",
    "initialFen": "8/8/4p1R1/3p1n1k/3P1P2/5K2/8/8 w - - 0 53",
    "fen": "8/8/4R3/3p1n1k/3P1P2/5K2/8/8 b - - 0 53",
    "preMove": "Rxe6",
    "solution": [
      "Nxd4+",
      "Ke3",
      "Nxe6",
      "f5",
      "Nc7"
    ]
  },
  {
    "id": "01Mwq",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 813,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r4b2/1p3R2/3kp1p1/1B1p1b2/P2P4/8/1PP1N2r/2K1R3 b - - 1 27",
    "fen": "2r2b2/1p3R2/3kp1p1/1B1p1b2/P2P4/8/1PP1N2r/2K1R3 w - - 2 28",
    "preMove": "Rc8",
    "solution": [
      "Rd7#"
    ]
  },
  {
    "id": "01NVd",
    "title": "Knight Fork",
    "theme": "Advantage",
    "difficulty": "Easy",
    "rating": 922,
    "popularity": 100,
    "description": "Win material using a tactical fork.",
    "initialFen": "8/1K3Npk/5n2/R6p/7r/p7/8/8 b - - 1 48",
    "fen": "8/1K3Npk/5n2/R6p/8/p6r/8/8 w - - 2 49",
    "preMove": "Rh3",
    "solution": [
      "Ng5+",
      "Kg6",
      "Nxh3"
    ]
  },
  {
    "id": "01OgB",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 834,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r3r1k1/1ppQ1pp1/1p5p/1P6/3P4/2P5/3B1PPP/5qK1 w - - 0 22",
    "fen": "r3r1k1/1ppQ1pp1/1p5p/1P6/3P4/2P5/3B1PPP/5K2 b - - 0 22",
    "preMove": "Kxf1",
    "solution": [
      "Ra1+",
      "Bc1",
      "Rxc1#"
    ]
  },
  {
    "id": "01P93",
    "title": "Knight Fork",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1145,
    "popularity": 100,
    "description": "Win material using a tactical fork.",
    "initialFen": "5r2/ppN1r1kp/2n1p1p1/3p1qNn/3P3P/5P2/PPPQ4/2K1R2R b - - 0 18",
    "fen": "5r2/ppr3kp/2n1p1p1/3p1qNn/3P3P/5P2/PPPQ4/2K1R2R w - - 0 19",
    "preMove": "Rxc7",
    "solution": [
      "Nxe6+",
      "Kg8",
      "Nxc7"
    ]
  },
  {
    "id": "01Pkt",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Medium",
    "rating": 1136,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "8/p6p/6p1/1P2p3/Pk6/4KP2/6PP/8 w - - 4 34",
    "fen": "8/p6p/6p1/1P2p3/Pk2K3/5P2/6PP/8 b - - 5 34",
    "preMove": "Ke4",
    "solution": [
      "Kxa4",
      "Kxe5",
      "Kxb5",
      "f4",
      "a5"
    ]
  },
  {
    "id": "01QSk",
    "title": "Skewer",
    "theme": "Crushing",
    "difficulty": "Medium",
    "rating": 1028,
    "popularity": 100,
    "description": "Find the strongest continuation. Use a skewer to win material.",
    "initialFen": "6k1/7r/4P1p1/Q7/3P4/1r3K2/6P1/8 w - - 9 51",
    "fen": "6k1/7r/4P1p1/Q7/3PK3/1r6/6P1/8 b - - 10 51",
    "preMove": "Ke4",
    "solution": [
      "Rh4+",
      "Kd5",
      "Rh5+",
      "Kc4",
      "Rxa5"
    ]
  },
  {
    "id": "01RBb",
    "title": "Chess Puzzle",
    "theme": "Advantage",
    "difficulty": "Easy",
    "rating": 984,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "2k5/ppp1r3/4qpp1/3p4/3n1B1P/1PbQ2P1/P1P2K2/R6R w - - 0 24",
    "fen": "2k5/ppp1r3/4qpp1/3p4/3n1B1P/1PQ3P1/P1P2K2/R6R b - - 0 24",
    "preMove": "Qxc3",
    "solution": [
      "Qe2+",
      "Kg1",
      "Nf3+",
      "Qxf3",
      "Qxf3"
    ]
  },
  {
    "id": "01RLM",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 936,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "3rk2r/ppp2ppp/5n2/4p3/4P1b1/2P2N2/PPP2PPP/R1B1K2R w KQk - 0 9",
    "fen": "3rk2r/ppp2ppp/5n2/4N3/4P1b1/2P5/PPP2PPP/R1B1K2R b KQk - 0 9",
    "preMove": "Nxe5",
    "solution": [
      "Rd1#"
    ]
  },
  {
    "id": "01RWL",
    "title": "Promotion",
    "theme": "AdvancedPawn",
    "difficulty": "Hard",
    "rating": 1555,
    "popularity": 100,
    "description": "Find the strongest continuation. Promote your pawn.",
    "initialFen": "8/1B1K4/p4k2/8/1P4p1/5p2/P7/8 w - - 0 46",
    "fen": "8/3K4/B4k2/8/1P4p1/5p2/P7/8 b - - 0 46",
    "preMove": "Bxa6",
    "solution": [
      "g3",
      "b5",
      "g2",
      "b6",
      "g1=Q"
    ]
  },
  {
    "id": "01S5S",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Medium",
    "rating": 1254,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "8/p7/1p5B/1kp5/6K1/1P3R2/1r6/8 w - - 2 52",
    "fen": "8/p5B1/1p6/1kp5/6K1/1P3R2/1r6/8 b - - 3 52",
    "preMove": "Bg7",
    "solution": [
      "Rg2+",
      "Rg3",
      "Rxg3+",
      "Kxg3",
      "Kb4"
    ]
  },
  {
    "id": "01UBF",
    "title": "Chess Puzzle",
    "theme": "Advantage",
    "difficulty": "Hard",
    "rating": 1718,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "1R6/p1p5/3b2kp/3Kp1r1/r4pPR/2B5/1P3P2/8 b - - 3 37",
    "fen": "1R6/p1p5/3b2kp/3K2r1/r3ppPR/2B5/1P3P2/8 w - - 0 38",
    "preMove": "e4+",
    "solution": [
      "Ke6",
      "Re5+",
      "Bxe5"
    ]
  },
  {
    "id": "01UaM",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 889,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "8/8/p4nk1/Pp2Br2/8/2P3PK/1P2Qr1P/8 w - - 5 46",
    "fen": "8/8/p4nk1/Pp2Br2/8/2P3PK/1P3r1P/4Q3 b - - 6 46",
    "preMove": "Qe1",
    "solution": [
      "Rh5#"
    ]
  },
  {
    "id": "01Vnj",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1079,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "6r1/5p1k/p3pBP1/2Pp2Q1/q1pP3P/P4P2/5K2/8 b - - 0 33",
    "fen": "8/5p1k/p3pBr1/2Pp2Q1/q1pP3P/P4P2/5K2/8 w - - 0 34",
    "preMove": "Rxg6",
    "solution": [
      "Qh5+",
      "Rh6",
      "Qxf7#"
    ]
  },
  {
    "id": "01VxT",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 816,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "5rk1/R4p1p/4p1p1/4P3/P2PNn2/7P/1r3PP1/3R1K2 w - - 2 30",
    "fen": "5rk1/R4p1p/4p1p1/4P3/P2PNn2/7P/1r1R1PP1/5K2 b - - 3 30",
    "preMove": "Rd2",
    "solution": [
      "Rb1+",
      "Rd1",
      "Rxd1#"
    ]
  },
  {
    "id": "01Xbe",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1190,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "8/3R3p/6pk/3p4/2p1b1P1/6KP/r7/4R3 w - - 0 41",
    "fen": "8/3R3p/6pk/3p4/2p1b1PK/7P/r7/4R3 b - - 1 41",
    "preMove": "Kh4",
    "solution": [
      "g5+",
      "Kg3",
      "Rg2#"
    ]
  },
  {
    "id": "01Xzx",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1234,
    "popularity": 100,
    "description": "Lure the opponent's piece onto an unfavorable square. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "3r2k1/1Rp1qpp1/7p/8/5Q2/1PP5/5PPP/3r1RK1 w - - 5 26",
    "fen": "3r2k1/2R1qpp1/7p/8/5Q2/1PP5/5PPP/3r1RK1 b - - 0 26",
    "preMove": "Rxc7",
    "solution": [
      "Rxf1+",
      "Kxf1",
      "Rd1#"
    ]
  },
  {
    "id": "01bFi",
    "title": "Skewer",
    "theme": "Crushing",
    "difficulty": "Medium",
    "rating": 1084,
    "popularity": 100,
    "description": "Find the strongest continuation. Deflect the defender. Use a skewer to win material.",
    "initialFen": "8/5k2/6R1/6K1/8/3r4/8/8 w - - 1 58",
    "fen": "8/5k2/6RK/8/8/3r4/8/8 b - - 2 58",
    "preMove": "Kh6",
    "solution": [
      "Rh3+",
      "Kg5",
      "Rg3+",
      "Kf4",
      "Rxg6"
    ]
  },
  {
    "id": "01c65",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 903,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "2kr3r/p1p2pp1/3b1n1p/1B2p3/3n2b1/2NPB3/PPPN1P1P/R3KR2 w Q - 2 15",
    "fen": "2kr3r/p1p2pp1/3b1n1p/4p3/2Bn2b1/2NPB3/PPPN1P1P/R3KR2 b Q - 3 15",
    "preMove": "Bc4",
    "solution": [
      "Nxc2#"
    ]
  },
  {
    "id": "01cbJ",
    "title": "Mate in 1",
    "theme": "KingsideAttack",
    "difficulty": "Easy",
    "rating": 921,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r2q1rk1/pb2p1b1/1p1pNnQ1/2p4p/3P3P/2P1P1B1/PP3P2/R3K1R1 b Q - 2 17",
    "fen": "r3qrk1/pb2p1b1/1p1pNnQ1/2p4p/3P3P/2P1P1B1/PP3P2/R3K1R1 w Q - 3 18",
    "preMove": "Qe8",
    "solution": [
      "Qxg7#"
    ]
  },
  {
    "id": "01chU",
    "title": "Win the Hanging Piece",
    "theme": "Equality",
    "difficulty": "Expert",
    "rating": 1900,
    "popularity": 100,
    "description": "Capture the loose piece.",
    "initialFen": "1N4k1/7p/PR1n2r1/1b6/1P3R2/3p3r/1P4P1/4N1K1 w - - 0 45",
    "fen": "1N4k1/7p/PR1n2r1/1b6/1P3R2/3N3r/1P4P1/6K1 b - - 0 45",
    "preMove": "Nxd3",
    "solution": [
      "Rxd3",
      "a7",
      "Rd1+"
    ]
  },
  {
    "id": "01dgp",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 889,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "2kr3r/2pbqpb1/p2p3p/1p1Q2p1/3N4/BP2P2P/P1P2PP1/2R2RK1 b - - 0 21",
    "fen": "2kr3r/2pbqp2/p2p3p/1p1Q2p1/3b4/BP2P2P/P1P2PP1/2R2RK1 w - - 0 22",
    "preMove": "Bxd4",
    "solution": [
      "Qa8#"
    ]
  },
  {
    "id": "01diX",
    "title": "Mate in 1",
    "theme": "KingsideAttack",
    "difficulty": "Easy",
    "rating": 900,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "3r1r1k/ppp2pnp/3b3Q/4q3/2B1N1R1/P4P2/1P5P/2K5 b - - 2 22",
    "fen": "3r1r1k/ppp2pnp/3b3Q/7q/2B1N1R1/P4P2/1P5P/2K5 w - - 3 23",
    "preMove": "Qh5",
    "solution": [
      "Qxg7#"
    ]
  },
  {
    "id": "01gPh",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1017,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "2rR2k1/p4p1p/q1p1b1p1/4P3/1Q6/2P3P1/7P/3R2K1 b - - 1 30",
    "fen": "3r2k1/p4p1p/q1p1b1p1/4P3/1Q6/2P3P1/7P/3R2K1 w - - 0 31",
    "preMove": "Rxd8",
    "solution": [
      "Rxd8+",
      "Kg7",
      "Qf8#"
    ]
  },
  {
    "id": "01gjE",
    "title": "Chess Puzzle",
    "theme": "Equality",
    "difficulty": "Expert",
    "rating": 1890,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "1Q2n1kr/r4ppp/q7/bbB5/4p3/2P1P3/P3NPPP/RN2K2R w KQ - 8 21",
    "fen": "1Q2n1kr/B4ppp/q7/bb6/4p3/2P1P3/P3NPPP/RN2K2R b KQ - 0 21",
    "preMove": "Bxa7",
    "solution": [
      "Bc7",
      "Qa8",
      "Bc6",
      "Qxc6",
      "Qxc6"
    ]
  },
  {
    "id": "01hdS",
    "title": "Knight Fork",
    "theme": "Advantage",
    "difficulty": "Easy",
    "rating": 953,
    "popularity": 100,
    "description": "Win material using a tactical fork.",
    "initialFen": "2r2b1r/pp3ppp/8/3Npk2/8/8/PPP2PPP/R3K2R b KQ - 2 15",
    "fen": "5b1r/pp3ppp/8/3Npk2/8/8/PPr2PPP/R3K2R w KQ - 0 16",
    "preMove": "Rxc2",
    "solution": [
      "Ne3+",
      "Ke6",
      "Nxc2"
    ]
  },
  {
    "id": "01inb",
    "title": "Mate in 2",
    "theme": "KingsideAttack",
    "difficulty": "Easy",
    "rating": 891,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "3r3k/p1p3pp/1p6/3P1p2/6nq/P3P3/BPQ1b1PP/2R1R1K1 w - - 12 33",
    "fen": "3r3k/p1p3pp/1p6/3P1p2/6nq/P3P3/BP2Q1PP/2R1R1K1 b - - 0 33",
    "preMove": "Qxe2",
    "solution": [
      "Qxh2+",
      "Kf1",
      "Qh1#"
    ]
  },
  {
    "id": "01jvC",
    "title": "Skewer",
    "theme": "Crushing",
    "difficulty": "Easy",
    "rating": 975,
    "popularity": 100,
    "description": "Find the strongest continuation. Interfere with the opponent's coordination. Use a skewer to win material.",
    "initialFen": "8/pr6/3kp3/R2p1pp1/3P4/4PPP1/8/5K2 b - - 0 35",
    "fen": "8/p6r/3kp3/R2p1pp1/3P4/4PPP1/8/5K2 w - - 1 36",
    "preMove": "Rh7",
    "solution": [
      "Ra6+",
      "Ke7",
      "Rxa7+",
      "Kf6",
      "Rxh7"
    ]
  },
  {
    "id": "01k4m",
    "title": "Discovered Attack",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1350,
    "popularity": 100,
    "description": "Unleash a discovered attack.",
    "initialFen": "r1bqr1k1/1p2bppp/p4n2/3p2B1/8/2PB1N1P/PP2Q1P1/RN2R1K1 w - - 4 15",
    "fen": "r1bqr1k1/1p2bppp/p4n2/3p2B1/8/2PB1N1P/PP1NQ1P1/R3R1K1 b - - 5 15",
    "preMove": "Nbd2",
    "solution": [
      "Bc5+",
      "Kh1",
      "Rxe2"
    ]
  },
  {
    "id": "01mZT",
    "title": "Knight Fork",
    "theme": "Crushing",
    "difficulty": "Easy",
    "rating": 881,
    "popularity": 100,
    "description": "Find the strongest continuation. Win material using a tactical fork.",
    "initialFen": "8/8/2k5/8/8/r2NK1P1/5P2/8 b - - 1 63",
    "fen": "8/8/2k5/8/8/3NK1P1/r4P2/8 w - - 2 64",
    "preMove": "Ra2",
    "solution": [
      "Nb4+",
      "Kd6",
      "Nxa2"
    ]
  },
  {
    "id": "01nHS",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1062,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "8/p4p1k/4p1bp/5p2/5Q1R/4P1KP/1r3PP1/6q1 b - - 9 43",
    "fen": "8/p4p1k/4p1bp/5p2/5Q1R/4P1KP/4rPP1/6q1 w - - 10 44",
    "preMove": "Re2",
    "solution": [
      "Qxh6+",
      "Kg8",
      "Qh8#"
    ]
  },
  {
    "id": "01qTU",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1007,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "3r1k2/pp4pQ/5b2/2P5/P5qP/2P1R1P1/5P1K/8 b - - 0 35",
    "fen": "5k2/pp4pQ/5b2/2P5/P5qP/2P1R1P1/3r1P1K/8 w - - 1 36",
    "preMove": "Rd2",
    "solution": [
      "Qh8+",
      "Kf7",
      "Qe8#"
    ]
  },
  {
    "id": "01qn2",
    "title": "Mate in 2",
    "theme": "KingsideAttack",
    "difficulty": "Easy",
    "rating": 833,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r6k/1b2rpp1/5q1B/1pppbP1Q/p3P1RR/P2P3P/B5P1/7K b - - 0 29",
    "fen": "r6k/1b2rp2/5q1p/1pppbP1Q/p3P1RR/P2P3P/B5P1/7K w - - 0 30",
    "preMove": "gxh6",
    "solution": [
      "Qxh6+",
      "Qxh6",
      "Rxh6#"
    ]
  },
  {
    "id": "01rQs",
    "title": "Mate in 3",
    "theme": "Long",
    "difficulty": "Medium",
    "rating": 1008,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "r7/1q2Rpk1/p5rp/1p1b2p1/5n2/8/PQ4PP/4R1K1 b - - 3 35",
    "fen": "r5k1/1q2Rp2/p5rp/1p1b2p1/5n2/8/PQ4PP/4R1K1 w - - 4 36",
    "preMove": "Kg8",
    "solution": [
      "Re8+",
      "Rxe8",
      "Rxe8+",
      "Kh7",
      "Qh8#"
    ]
  },
  {
    "id": "01rpc",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Hard",
    "rating": 1757,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "8/5k2/4p1p1/p6p/2Kp1P1P/1P6/P2Q4/6q1 b - - 1 45",
    "fen": "8/5k2/4p1p1/p6p/2Kp1P1P/1P2q3/P2Q4/8 w - - 2 46",
    "preMove": "Qe3",
    "solution": [
      "Qxe3",
      "dxe3",
      "Kd3",
      "e2",
      "Kxe2"
    ]
  },
  {
    "id": "01tZ5",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1283,
    "popularity": 100,
    "description": "Lure the opponent's piece onto an unfavorable square. Win material using a tactical fork. Find the forced checkmate. Find the forced mate in three. Sacrifice material for a tactical gain.",
    "initialFen": "1r2n1r1/2q2ppk/2pb1B2/1p2pN1p/4P3/4Q1RP/PP3PP1/R5K1 b - - 1 25",
    "fen": "1r4r1/2q2ppk/2pb1n2/1p2pN1p/4P3/4Q1RP/PP3PP1/R5K1 w - - 0 26",
    "preMove": "Nxf6",
    "solution": [
      "Rxg7+",
      "Rxg7",
      "Qh6+",
      "Kg8",
      "Qxg7#"
    ]
  },
  {
    "id": "01vaS",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 970,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "3R1k2/nbp1q1p1/4PpQp/pp6/6P1/P3p3/1P2BbP1/1K5R b - - 2 29",
    "fen": "3q1k2/nbp3p1/4PpQp/pp6/6P1/P3p3/1P2BbP1/1K5R w - - 0 30",
    "preMove": "Qxd8",
    "solution": [
      "Qf7#"
    ]
  },
  {
    "id": "01vel",
    "title": "Promotion",
    "theme": "AdvancedPawn",
    "difficulty": "Medium",
    "rating": 1130,
    "popularity": 100,
    "description": "Promote your pawn.",
    "initialFen": "q5k1/P2Q1pp1/1r3bb1/3p4/8/3pB2P/5PP1/R5K1 b - - 1 31",
    "fen": "q5k1/Pr1Q1pp1/5bb1/3p4/8/3pB2P/5PP1/R5K1 w - - 2 32",
    "preMove": "Rb7",
    "solution": [
      "Qxb7",
      "Qxb7",
      "a8=Q+",
      "Qxa8",
      "Rxa8+"
    ]
  },
  {
    "id": "01vyt",
    "title": "Mate in 1",
    "theme": "KingsideAttack",
    "difficulty": "Easy",
    "rating": 886,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "2kr2r1/ppp2pqp/2n1b3/2N5/2pp4/5N2/PPP1QPPP/R4RK1 w - - 0 14",
    "fen": "2kr2r1/ppp2pqp/2n1N3/8/2pp4/5N2/PPP1QPPP/R4RK1 b - - 0 14",
    "preMove": "Nxe6",
    "solution": [
      "Qxg2#"
    ]
  },
  {
    "id": "01wTd",
    "title": "Discovered Attack",
    "theme": "Crushing",
    "difficulty": "Easy",
    "rating": 808,
    "popularity": 100,
    "description": "Find the strongest continuation. Unleash a discovered attack.",
    "initialFen": "8/5pk1/q3p1p1/p1BpPnPp/Pp3P2/1P2P3/2Q2K2/8 b - - 3 42",
    "fen": "8/5pk1/2q1p1p1/p1BpPnPp/Pp3P2/1P2P3/2Q2K2/8 w - - 4 43",
    "preMove": "Qc6",
    "solution": [
      "Bf8+",
      "Kxf8",
      "Qxc6"
    ]
  },
  {
    "id": "01wpQ",
    "title": "Chess Puzzle",
    "theme": "Advantage",
    "difficulty": "Expert",
    "rating": 2090,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "4q1k1/2p3bp/2N5/3P4/p4p2/5P1P/PP1Qr1P1/1R4K1 w - - 3 31",
    "fen": "4q1k1/2p3bp/2N5/3P4/p4Q2/5P1P/PP2r1P1/1R4K1 b - - 0 31",
    "preMove": "Qxf4",
    "solution": [
      "Qg6",
      "Ne7+",
      "Rxe7"
    ]
  },
  {
    "id": "01xM4",
    "title": "Mate in 1",
    "theme": "KingsideAttack",
    "difficulty": "Easy",
    "rating": 906,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r1b2rk1/pp4pp/2p1p2q/3pPp2/2PP2n1/1PN1P1P1/PB2QnBP/R4R1K w - - 1 18",
    "fen": "r1b2rk1/pp4pp/2p1p2q/3pPp2/2PP2n1/1PN1P1P1/PB2QRBP/R6K b - - 0 18",
    "preMove": "Rxf2",
    "solution": [
      "Qxh2#"
    ]
  },
  {
    "id": "01xbu",
    "title": "Mate in 2",
    "theme": "Deflection",
    "difficulty": "Medium",
    "rating": 1116,
    "popularity": 100,
    "description": "Deflect the defender. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "2r2r2/2b1qpk1/p1n1pn1p/1pPp2pN/1P1P4/P2Q3P/2BB1PP1/R3R1K1 b - - 3 23",
    "fen": "2r2r2/2b1qpk1/p1n1p2p/1pPp2pn/1P1P4/P2Q3P/2BB1PP1/R3R1K1 w - - 0 24",
    "preMove": "Nxh5",
    "solution": [
      "Qh7+",
      "Kf6",
      "Qxh6#"
    ]
  },
  {
    "id": "01yds",
    "title": "Pin Tactic",
    "theme": "Crushing",
    "difficulty": "Medium",
    "rating": 1232,
    "popularity": 100,
    "description": "Find the strongest continuation. Exploit the pinned piece.",
    "initialFen": "2r3k1/5p2/4b1p1/2Q1P2p/4KP2/6P1/7P/8 w - - 3 65",
    "fen": "2r3k1/5p2/4b1p1/4P2p/3QKP2/6P1/7P/8 b - - 4 65",
    "preMove": "Qd4",
    "solution": [
      "Rc4",
      "Qxc4",
      "Bxc4"
    ]
  },
  {
    "id": "01z4c",
    "title": "Mate in 1",
    "theme": "DoubleCheck",
    "difficulty": "Medium",
    "rating": 1009,
    "popularity": 100,
    "description": "Use a double check to gain the initiative. Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "3QN1k1/1p3pb1/2r1p1p1/3pP3/3P3p/1B5P/PP3KP1/2r2n2 b - - 5 31",
    "fen": "2rQN1k1/1p3pb1/4p1p1/3pP3/3P3p/1B5P/PP3KP1/2r2n2 w - - 6 32",
    "preMove": "Rc8",
    "solution": [
      "Nf6#"
    ]
  },
  {
    "id": "01zIg",
    "title": "Knight Fork",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1018,
    "popularity": 100,
    "description": "Win material using a tactical fork.",
    "initialFen": "5k2/2p3p1/p1p4p/4N1b1/8/2P1p3/PP2K2P/8 b - - 1 35",
    "fen": "5k2/2p3p1/p1p4p/4N3/5b2/2P1p3/PP2K2P/8 w - - 2 36",
    "preMove": "Bf4",
    "solution": [
      "Ng6+",
      "Ke8",
      "Nxf4"
    ]
  },
  {
    "id": "01zpX",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Easy",
    "rating": 957,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "r3k2r/pp1q1ppp/8/3pb3/8/2N5/PP3PPP/R2QK2R w KQkq - 0 14",
    "fen": "r3k2r/pp1q1ppp/8/3Qb3/8/2N5/PP3PPP/R3K2R b KQkq - 0 14",
    "preMove": "Qxd5",
    "solution": [
      "Bxc3+",
      "bxc3",
      "Qxd5"
    ]
  },
  {
    "id": "01zsb",
    "title": "Mate in 1",
    "theme": "KingsideAttack",
    "difficulty": "Medium",
    "rating": 1220,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "3n3k/pp4rp/2p3q1/2p2p1n/PP6/1QN1PN1P/5PP1/2R3K1 w - - 0 28",
    "fen": "3n3k/pp4rp/2p3q1/2p2p1n/PP6/1QN1PN1P/5PP1/3R2K1 b - - 1 28",
    "preMove": "Rd1",
    "solution": [
      "Qxg2#"
    ]
  },
  {
    "id": "020Jm",
    "title": "Mate in 2",
    "theme": "Mate",
    "difficulty": "Medium",
    "rating": 1049,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "2r5/1b4kp/pN1P2p1/5p2/3Rpq2/1Q5P/PPr3P1/3R2K1 w - - 1 32",
    "fen": "2N5/1b4kp/p2P2p1/5p2/3Rpq2/1Q5P/PPr3P1/3R2K1 b - - 0 32",
    "preMove": "Nxc8",
    "solution": [
      "Qf2+",
      "Kh2",
      "Qxg2#"
    ]
  },
  {
    "id": "0213A",
    "title": "Mate in 1",
    "theme": "Master",
    "difficulty": "Medium",
    "rating": 1178,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "2r1r1k1/1b3pp1/pp6/2bp1q2/3B4/1P1QPNnp/P4P1P/2R2RKB w - - 0 26",
    "fen": "2r1r1k1/1b3pp1/pp6/2bp1Q2/3B4/1P2PNnp/P4P1P/2R2RKB b - - 0 26",
    "preMove": "Qxf5",
    "solution": [
      "Ne2#"
    ]
  },
  {
    "id": "021ba",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Easy",
    "rating": 958,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "4r1k1/pnp3pp/1p1P4/4Nq2/2Q2B2/4b1P1/PP4KP/8 b - - 0 27",
    "fen": "4r2k/pnp3pp/1p1P4/4Nq2/2Q2B2/4b1P1/PP4KP/8 w - - 1 28",
    "preMove": "Kh8",
    "solution": [
      "Nf7+",
      "Qxf7",
      "Qxf7"
    ]
  },
  {
    "id": "021en",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 931,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "8/p4pkp/6p1/3Qb3/5q2/3P3P/P1r2PP1/1R3RK1 w - - 0 33",
    "fen": "8/p4pkp/6p1/4b3/4Qq2/3P3P/P1r2PP1/1R3RK1 b - - 1 33",
    "preMove": "Qe4",
    "solution": [
      "Qh2#"
    ]
  },
  {
    "id": "022AB",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 919,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "4k3/5p1p/5p2/8/1R5P/p4rP1/P1P5/1K6 w - - 0 35",
    "fen": "4k3/5p1p/5p2/8/7P/pR3rP1/P1P5/1K6 b - - 1 35",
    "preMove": "Rb3",
    "solution": [
      "Rf1#"
    ]
  },
  {
    "id": "024y2",
    "title": "Knight Fork",
    "theme": "Crushing",
    "difficulty": "Easy",
    "rating": 965,
    "popularity": 100,
    "description": "Find the strongest continuation. Win material using a tactical fork.",
    "initialFen": "5N2/4k3/p1P1pp2/1p6/1P6/P4r2/1PK5/8 b - - 0 37",
    "fen": "5N2/4k3/p1P1pp2/1p6/1P3r2/P7/1PK5/8 w - - 1 38",
    "preMove": "Rf4",
    "solution": [
      "Ng6+",
      "Kd6",
      "Nxf4"
    ]
  },
  {
    "id": "028b4",
    "title": "Mate in 1",
    "theme": "AttackingF2F7",
    "difficulty": "Medium",
    "rating": 1086,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r1b2rk1/p4pp1/1bp1p2p/4N3/1PPq4/P2B3P/5PP1/R2QK2R w KQ - 1 18",
    "fen": "r1b2rk1/p4pp1/1bN1p2p/8/1PPq4/P2B3P/5PP1/R2QK2R b KQ - 0 18",
    "preMove": "Nxc6",
    "solution": [
      "Qxf2#"
    ]
  },
  {
    "id": "029AH",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 890,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "5r1k/6rn/2Qp3p/5b2/4p1B1/P7/5qPP/R3R1NK w - - 2 38",
    "fen": "5r1k/6rn/2Qp3p/5B2/4p3/P7/5qPP/R3R1NK b - - 0 38",
    "preMove": "Bxf5",
    "solution": [
      "Qxg2#"
    ]
  },
  {
    "id": "029kN",
    "title": "Discovered Attack",
    "theme": "Advantage",
    "difficulty": "Hard",
    "rating": 1423,
    "popularity": 100,
    "description": "Unleash a discovered attack.",
    "initialFen": "r5k1/r3npb1/BB1pq1pp/4p3/8/7P/4QPP1/R2R2K1 b - - 6 32",
    "fen": "r5k1/3rnpb1/BB1pq1pp/4p3/8/7P/4QPP1/R2R2K1 w - - 7 33",
    "preMove": "Rd7",
    "solution": [
      "Bc4",
      "d5",
      "Rxa8+"
    ]
  },
  {
    "id": "02AKv",
    "title": "Mate in 2",
    "theme": "KingsideAttack",
    "difficulty": "Medium",
    "rating": 1148,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r5rk/1pp3p1/p2p1nQN/4q3/1b6/7P/PPB2PP1/R1B3K1 b - - 0 27",
    "fen": "r5rk/1pp5/p2p1nQp/4q3/1b6/7P/PPB2PP1/R1B3K1 w - - 0 28",
    "preMove": "gxh6",
    "solution": [
      "Qxh6+",
      "Nh7",
      "Qxh7#"
    ]
  },
  {
    "id": "02B8h",
    "title": "Mate in 2",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 915,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r4r2/1bq2pkp/ppn1p1p1/2p5/4P1N1/2P2B1P/PP3PP1/R1Q1R1K1 b - - 3 18",
    "fen": "r4r2/1bq2pk1/ppn1p1p1/2p4p/4P1N1/2P2B1P/PP3PP1/R1Q1R1K1 w - - 0 19",
    "preMove": "h5",
    "solution": [
      "Qh6+",
      "Kg8",
      "Nf6#"
    ]
  },
  {
    "id": "02BD5",
    "title": "Mate in 2",
    "theme": "Deflection",
    "difficulty": "Medium",
    "rating": 1162,
    "popularity": 100,
    "description": "Deflect the defender. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "8/p4bkp/4r3/2Q5/8/N4qbP/PPP1nP1K/3R1R2 w - - 0 27",
    "fen": "8/p4bkp/4r3/2Q5/8/N4qPP/PPP1n2K/3R1R2 b - - 0 27",
    "preMove": "fxg3",
    "solution": [
      "Qxg3+",
      "Kh1",
      "Qxh3#"
    ]
  },
  {
    "id": "02BlD",
    "title": "Chess Puzzle",
    "theme": "Endgame",
    "difficulty": "Expert",
    "rating": 1852,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "r7/PR2n3/2n1pk2/2Pp2p1/1r1P4/3NP3/5P2/R5K1 w - - 1 39",
    "fen": "r7/P3R3/2n1pk2/2Pp2p1/1r1P4/3NP3/5P2/R5K1 b - - 0 39",
    "preMove": "Rxe7",
    "solution": [
      "Kxe7",
      "Nxb4",
      "Nxb4"
    ]
  },
  {
    "id": "02BxU",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 939,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "2r1k2r/1p2pp1p/p2p4/4nPp1/3Q4/2q2PB1/P1P3PP/2KR1R2 w k - 0 18",
    "fen": "2r1k2r/1p2pp1p/p2p4/4BPp1/3Q4/2q2P2/P1P3PP/2KR1R2 b k - 0 18",
    "preMove": "Bxe5",
    "solution": [
      "Qxc2#"
    ]
  },
  {
    "id": "02CA5",
    "title": "Deflection",
    "theme": "Advantage",
    "difficulty": "Easy",
    "rating": 882,
    "popularity": 100,
    "description": "Deflect the defender.",
    "initialFen": "rnb1k2r/pp1p1ppp/2p2n2/q2Pp1B1/2P5/2P5/P3PPPP/R2QKBNR w KQkq - 1 7",
    "fen": "rnb1k2r/pp1p1ppp/2p2B2/q2Pp3/2P5/2P5/P3PPPP/R2QKBNR b KQkq - 0 7",
    "preMove": "Bxf6",
    "solution": [
      "Qxc3+",
      "Qd2",
      "Qxa1+"
    ]
  },
  {
    "id": "02Cm1",
    "title": "Chess Puzzle",
    "theme": "Advantage",
    "difficulty": "Easy",
    "rating": 861,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "r1b4k/pp5p/6p1/3Bb1Q1/3p4/1P1P2P1/P1P2KNq/R7 b - - 1 24",
    "fen": "r1b4k/pp5p/6p1/3B2Q1/3p4/1P1P2b1/P1P2KNq/R7 w - - 0 25",
    "preMove": "Bxg3+",
    "solution": [
      "Qxg3",
      "Qxg3+",
      "Kxg3"
    ]
  },
  {
    "id": "02Cy0",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Medium",
    "rating": 1108,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r2q3r/1p3Qpk/2p2n1p/p2n1N1P/3P1P2/2P5/PP1B2P1/2K1R3 b - - 4 25",
    "fen": "r5qr/1p3Qpk/2p2n1p/p2n1N1P/3P1P2/2P5/PP1B2P1/2K1R3 w - - 5 26",
    "preMove": "Qg8",
    "solution": [
      "Qg6#"
    ]
  },
  {
    "id": "02EUf",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1195,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "6r1/1P6/2B5/8/3k3p/3pp2P/1R6/4K3 w - - 2 53",
    "fen": "1Q4r1/8/2B5/8/3k3p/3pp2P/1R6/4K3 b - - 0 53",
    "preMove": "b8=Q",
    "solution": [
      "Rg1#"
    ]
  },
  {
    "id": "02FIQ",
    "title": "Knight Fork",
    "theme": "Crushing",
    "difficulty": "Medium",
    "rating": 1323,
    "popularity": 100,
    "description": "Find the strongest continuation. Win material using a tactical fork.",
    "initialFen": "3r2k1/p4ppp/8/8/8/1Q5P/2Pq1PP1/4R1K1 w - - 1 28",
    "fen": "3r2k1/p3Rppp/8/8/8/1Q5P/2Pq1PP1/6K1 b - - 2 28",
    "preMove": "Re7",
    "solution": [
      "Qd1+",
      "Kh2",
      "Qd6+",
      "f4",
      "Qxe7"
    ]
  },
  {
    "id": "02FdM",
    "title": "Deflection",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1275,
    "popularity": 100,
    "description": "Deflect the defender.",
    "initialFen": "3rr1k1/5ppp/8/R7/2QP4/P1P2qPP/1P3P2/3R2K1 w - - 1 28",
    "fen": "3rr1k1/5ppp/8/R7/3P4/P1PQ1qPP/1P3P2/3R2K1 b - - 2 28",
    "preMove": "Qd3",
    "solution": [
      "Re1+",
      "Rxe1",
      "Qxd3"
    ]
  },
  {
    "id": "02GIh",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1058,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "4r1k1/R5p1/1p1qr2p/1P6/2Ppp3/6P1/3R1P1P/Q5K1 b - - 1 37",
    "fen": "4r1k1/R5p1/1p1qr2p/1P6/2P1p3/3p2P1/3R1P1P/Q5K1 w - - 0 38",
    "preMove": "d3",
    "solution": [
      "Qxg7#"
    ]
  },
  {
    "id": "02HAo",
    "title": "Mate in 2",
    "theme": "BackRankMate",
    "difficulty": "Easy",
    "rating": 836,
    "popularity": 100,
    "description": "Exploit the weak back rank. Win material using a tactical fork. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "Q6B/2r1kp2/2Pp4/p6p/P3n1pq/8/1P3PPP/R5K1 w - - 5 28",
    "fen": "Q6B/2r1kp2/2Pp4/p6p/P3n1pq/8/1P3PPP/4R1K1 b - - 6 28",
    "preMove": "Re1",
    "solution": [
      "Qxf2+",
      "Kh1",
      "Qxe1#"
    ]
  },
  {
    "id": "02Idw",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 929,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "6k1/1p6/3p1n1q/1P1PpQ2/P3P1p1/3Bb1P1/2N5/6K1 w - - 1 50",
    "fen": "6k1/1p6/3p1n1q/1P1PpQ2/P3P1p1/3Bb1P1/2N3K1/8 b - - 2 50",
    "preMove": "Kg2",
    "solution": [
      "Qh3#"
    ]
  },
  {
    "id": "02IwU",
    "title": "Knight Fork",
    "theme": "Crushing",
    "difficulty": "Easy",
    "rating": 941,
    "popularity": 100,
    "description": "Find the strongest continuation. Win material using a tactical fork.",
    "initialFen": "2k5/8/8/3N1P1r/4K3/8/1p6/1Rb5 b - - 0 50",
    "fen": "8/3k4/8/3N1P1r/4K3/8/1p6/1Rb5 w - - 1 51",
    "preMove": "Kd7",
    "solution": [
      "Nf6+",
      "Kc6",
      "Nxh5"
    ]
  },
  {
    "id": "02JVU",
    "title": "Sacrifice",
    "theme": "AdvancedPawn",
    "difficulty": "Hard",
    "rating": 1423,
    "popularity": 100,
    "description": "Sacrifice material for a tactical gain.",
    "initialFen": "3k4/R7/8/1P2K1p1/1r2B3/2p3PP/8/8 w - - 2 45",
    "fen": "3k4/1R6/8/1P2K1p1/1r2B3/2p3PP/8/8 b - - 3 45",
    "preMove": "Rb7",
    "solution": [
      "Rxe4+",
      "Kxe4",
      "c2"
    ]
  },
  {
    "id": "02JeE",
    "title": "Mate in 2",
    "theme": "KingsideAttack",
    "difficulty": "Easy",
    "rating": 838,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r1b2rk1/2p1Rppp/p2q4/1p4B1/3p2n1/1B1P4/PPP2PPP/RN1Q2K1 w - - 1 14",
    "fen": "r1b2rk1/2p1Rppp/p2q4/1p4B1/3p2n1/1B1P4/PPP1QPPP/RN4K1 b - - 2 14",
    "preMove": "Qe2",
    "solution": [
      "Qxh2+",
      "Kf1",
      "Qh1#"
    ]
  },
  {
    "id": "02KF5",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1082,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "8/1Q3pkp/p5p1/8/5n2/P2Pq2P/1PP2RP1/6K1 w - - 1 26",
    "fen": "8/1Q3pkp/p5p1/8/5n2/P2Pq2P/1PP2RP1/5K2 b - - 2 26",
    "preMove": "Kf1",
    "solution": [
      "Qc1#"
    ]
  },
  {
    "id": "02KdL",
    "title": "Discovered Attack",
    "theme": "Advantage",
    "difficulty": "Easy",
    "rating": 923,
    "popularity": 100,
    "description": "Unleash a discovered attack.",
    "initialFen": "r5k1/p1p1rp1p/1p3np1/8/1QBq4/P1N3PP/1P3P2/5K1R b - - 2 23",
    "fen": "4r1k1/p1p1rp1p/1p3np1/8/1QBq4/P1N3PP/1P3P2/5K1R w - - 3 24",
    "preMove": "Rae8",
    "solution": [
      "Bxf7+",
      "Rxf7",
      "Qxd4"
    ]
  },
  {
    "id": "02LIr",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 992,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "1k6/1p6/6p1/2q1P2p/4Q1n1/1P4P1/P1P4P/4R1K1 w - - 5 36",
    "fen": "1k6/1p6/6p1/2q1P2p/4Q1n1/1P4P1/P1P3KP/4R3 b - - 6 36",
    "preMove": "Kg2",
    "solution": [
      "Qf2+",
      "Kh3",
      "Qxh2#"
    ]
  },
  {
    "id": "02LtW",
    "title": "Discovered Attack",
    "theme": "Crushing",
    "difficulty": "Medium",
    "rating": 1340,
    "popularity": 100,
    "description": "Find the strongest continuation. Unleash a discovered attack.",
    "initialFen": "8/2k5/6R1/6P1/2Bp1K2/1P2r3/3b4/8 w - - 7 55",
    "fen": "8/2k3R1/8/6P1/2Bp1K2/1P2r3/3b4/8 b - - 8 55",
    "preMove": "Rg7+",
    "solution": [
      "Re7+",
      "Kf5",
      "Rxg7"
    ]
  },
  {
    "id": "02LuE",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Medium",
    "rating": 1187,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "8/p2Q4/5kp1/2P4p/7P/1q4PK/8/8 w - - 2 60",
    "fen": "8/p2Q4/2P2kp1/7p/7P/1q4PK/8/8 b - - 0 60",
    "preMove": "c6",
    "solution": [
      "Qe6+",
      "Qxe6+",
      "Kxe6",
      "c7",
      "Kd7",
      "c8=Q+",
      "Kxc8"
    ]
  },
  {
    "id": "02MOC",
    "title": "Pin Tactic",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1318,
    "popularity": 100,
    "description": "Exploit the pinned piece.",
    "initialFen": "r2q2k1/ppp3pp/8/1BQN1r2/8/8/PP1P1P1P/n1B3K1 b - - 0 19",
    "fen": "r5k1/ppp3pp/8/1BQq1r2/8/8/PP1P1P1P/n1B3K1 w - - 0 20",
    "preMove": "Qxd5",
    "solution": [
      "Bc4",
      "Qxc4",
      "Qxc4+"
    ]
  },
  {
    "id": "02MXX",
    "title": "Knight Fork",
    "theme": "Attraction",
    "difficulty": "Expert",
    "rating": 1952,
    "popularity": 100,
    "description": "Lure the opponent's piece onto an unfavorable square. Find the strongest continuation. Win material using a tactical fork.",
    "initialFen": "5r1k/1N4pp/p7/4P3/3p4/3Q1nPb/PP3P1P/4R1K1 w - - 1 31",
    "fen": "5r1k/1N4pp/p7/4P3/3p4/3Q1nPb/PP3P1P/4R2K b - - 2 31",
    "preMove": "Kh1",
    "solution": [
      "Bg2+",
      "Kxg2",
      "Nxe1+",
      "Kf1",
      "Nxd3"
    ]
  },
  {
    "id": "02Mk5",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 862,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r1bqk1nr/pppp3p/2n2pp1/3Q4/2BBP3/8/PPP2PPP/RN2K2R b KQkq - 1 9",
    "fen": "r1bqk1nr/pppp3p/5pp1/3Q4/1nBBP3/8/PPP2PPP/RN2K2R w KQkq - 2 10",
    "preMove": "Nb4",
    "solution": [
      "Qf7#"
    ]
  },
  {
    "id": "02MkW",
    "title": "Skewer",
    "theme": "Crushing",
    "difficulty": "Medium",
    "rating": 1236,
    "popularity": 100,
    "description": "Find the strongest continuation. Use a skewer to win material.",
    "initialFen": "8/6p1/2R4p/p7/1p1q3P/1P3BP1/5PK1/3k4 b - - 14 45",
    "fen": "8/6p1/2R4p/p7/1p1q3P/1P3BP1/5PK1/4k3 w - - 15 46",
    "preMove": "Ke1",
    "solution": [
      "Rc1+",
      "Kd2",
      "Rd1+",
      "Kc3",
      "Rxd4"
    ]
  },
  {
    "id": "02N0o",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 984,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r1r3kR/p4p2/1qb1pPp1/8/8/5PB1/PPPQp3/4K3 b - - 3 30",
    "fen": "r1r4k/p4p2/1qb1pPp1/8/8/5PB1/PPPQp3/4K3 w - - 0 31",
    "preMove": "Kxh8",
    "solution": [
      "Qh6+",
      "Kg8",
      "Qg7#"
    ]
  },
  {
    "id": "02NZR",
    "title": "Mate in 2",
    "theme": "DoubleCheck",
    "difficulty": "Expert",
    "rating": 1907,
    "popularity": 100,
    "description": "Use a double check to gain the initiative. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r3k2r/pp1bqppp/5n2/1BbpnQB1/8/2N5/PPP2PPP/R3K1NR w KQkq - 8 11",
    "fen": "r3k2r/pp1bqppp/5B2/1BbpnQ2/8/2N5/PPP2PPP/R3K1NR b KQkq - 0 11",
    "preMove": "Bxf6",
    "solution": [
      "Nf3+",
      "Kd1",
      "Qe1#"
    ]
  },
  {
    "id": "02NrU",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1166,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r4rkR/1pq3p1/2pbp1p1/p3P1N1/8/2P1PQ2/PP4P1/2K5 b - - 1 20",
    "fen": "r4r1k/1pq3p1/2pbp1p1/p3P1N1/8/2P1PQ2/PP4P1/2K5 w - - 0 21",
    "preMove": "Kxh8",
    "solution": [
      "Qh3+",
      "Kg8",
      "Qh7#"
    ]
  },
  {
    "id": "02Nya",
    "title": "Mate in 2",
    "theme": "Mate",
    "difficulty": "Medium",
    "rating": 1137,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "3k3r/ppp2Bb1/2nRQ2p/q5p1/5p2/8/PPP2BPP/3N2K1 b - - 0 20",
    "fen": "3k3r/pp3Bb1/2npQ2p/q5p1/5p2/8/PPP2BPP/3N2K1 w - - 0 21",
    "preMove": "cxd6",
    "solution": [
      "Qxd6+",
      "Kc8",
      "Be6#"
    ]
  },
  {
    "id": "02PDS",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Expert",
    "rating": 1890,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "4r1k1/pp2n2p/3q1pp1/3p4/3P3P/1PrB1PR1/P4P2/1Q4RK b - - 0 24",
    "fen": "4r1k1/pp2n2p/1q3pp1/3p4/3P3P/1PrB1PR1/P4P2/1Q4RK w - - 1 25",
    "preMove": "Qb6",
    "solution": [
      "Bxg6",
      "hxg6",
      "Rxg6+",
      "Kf7",
      "Rg7+",
      "Ke6",
      "Qe1+"
    ]
  },
  {
    "id": "02Pjf",
    "title": "Mate in 2",
    "theme": "Master",
    "difficulty": "Medium",
    "rating": 1166,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "5R1r/ppk5/1n3p2/2N1pB2/6P1/8/P4K1r/3R4 w - - 3 37",
    "fen": "5R1r/ppk5/1n3p2/2N1pB2/6P1/5K2/P6r/3R4 b - - 4 37",
    "preMove": "Kf3",
    "solution": [
      "R8h3+",
      "Ke4",
      "Re2#"
    ]
  },
  {
    "id": "02Q8P",
    "title": "Pin Tactic",
    "theme": "Crushing",
    "difficulty": "Hard",
    "rating": 1696,
    "popularity": 100,
    "description": "Find the strongest continuation. Deflect the defender. Exploit the pinned piece.",
    "initialFen": "r2q1rk1/5p1R/ppb1p1p1/n7/P2P1B2/2PB4/5PPP/1R1Q2K1 b - - 0 19",
    "fen": "r2q1r2/5p1k/ppb1p1p1/n7/P2P1B2/2PB4/5PPP/1R1Q2K1 w - - 0 20",
    "preMove": "Kxh7",
    "solution": [
      "Qh5+",
      "Kg8",
      "Bxg6",
      "fxg6",
      "Qxg6+"
    ]
  },
  {
    "id": "02Qd3",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Medium",
    "rating": 1153,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "5rk1/n6p/6p1/pPp1p3/2P1P2q/2N5/5P1P/5QRK w - - 3 26",
    "fen": "5rk1/n6p/6p1/pPp1p3/2P1P2q/2N5/4QP1P/6RK b - - 4 26",
    "preMove": "Qe2",
    "solution": [
      "Rxf2",
      "Rg2",
      "Rxe2"
    ]
  },
  {
    "id": "02TK0",
    "title": "Mate in 2",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 965,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "5r2/4pkn1/3pqp2/p3P3/6R1/2PQ3P/Pr4P1/5R1K b - - 0 31",
    "fen": "5r2/4pkn1/4qp2/p3p3/6R1/2PQ3P/Pr4P1/5R1K w - - 0 32",
    "preMove": "dxe5",
    "solution": [
      "Qg6+",
      "Kg8",
      "Qxg7#"
    ]
  },
  {
    "id": "02UQl",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Medium",
    "rating": 1258,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "2kr3r/2p1qpb1/p1n5/1p2P2p/5BnP/N1P2Q2/PP4P1/2KR1B1R b - - 0 18",
    "fen": "2kr3r/2p1qpb1/p7/1p2n2p/5BnP/N1P2Q2/PP4P1/2KR1B1R w - - 0 19",
    "preMove": "Ncxe5",
    "solution": [
      "Qa8#"
    ]
  },
  {
    "id": "02V0C",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1151,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two. Sacrifice material for a tactical gain.",
    "initialFen": "1rb2k2/p1p1q1pp/1p3p2/7Q/2B5/8/PP4PP/3R2K1 b - - 3 23",
    "fen": "1rb2k2/p1p1q1p1/1p3p1p/7Q/2B5/8/PP4PP/3R2K1 w - - 0 24",
    "preMove": "h6",
    "solution": [
      "Rd8+",
      "Qxd8",
      "Qf7#"
    ]
  },
  {
    "id": "02WQg",
    "title": "Deflection",
    "theme": "Crushing",
    "difficulty": "Hard",
    "rating": 1541,
    "popularity": 100,
    "description": "Find the strongest continuation. Deflect the defender.",
    "initialFen": "6k1/1PQ2p2/6pp/8/8/3q1KP1/6P1/8 w - - 7 50",
    "fen": "6k1/1PQ2p2/6pp/8/5K2/3q2P1/6P1/8 b - - 8 50",
    "preMove": "Kf4",
    "solution": [
      "g5+",
      "Ke5",
      "Qxg3+"
    ]
  },
  {
    "id": "02Wbe",
    "title": "Skewer",
    "theme": "Crushing",
    "difficulty": "Medium",
    "rating": 1071,
    "popularity": 100,
    "description": "Find the strongest continuation. Deflect the defender. Use a skewer to win material.",
    "initialFen": "8/8/2k5/PR2K1p1/8/5P2/r7/8 w - - 5 57",
    "fen": "8/8/2k5/P2RK1p1/8/5P2/r7/8 b - - 6 57",
    "preMove": "Rd5",
    "solution": [
      "Re2+",
      "Kd4",
      "Rd2+",
      "Ke3",
      "Rxd5"
    ]
  },
  {
    "id": "02Wmm",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1023,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "2kr4/Q6R/2q1p3/1r2Pp2/5P2/2P3Pp/3P3P/1R4K1 w - - 7 38",
    "fen": "2kr4/Q6R/2q1p3/1R2Pp2/5P2/2P3Pp/3P3P/6K1 b - - 0 38",
    "preMove": "Rxb5",
    "solution": [
      "Qg2#"
    ]
  },
  {
    "id": "02a3l",
    "title": "Skewer",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1141,
    "popularity": 100,
    "description": "Use a skewer to win material.",
    "initialFen": "1R2b3/4P3/R7/3p1p1k/p2P1P2/r1K5/8/8 w - - 4 56",
    "fen": "1R2b3/4P3/R7/3p1p1k/pK1P1P2/r7/8/8 b - - 5 56",
    "preMove": "Kb4",
    "solution": [
      "Rb3+",
      "Kc5",
      "Rxb8"
    ]
  },
  {
    "id": "02a9L",
    "title": "Pin Tactic",
    "theme": "Crushing",
    "difficulty": "Medium",
    "rating": 1014,
    "popularity": 100,
    "description": "Find the strongest continuation. Capture the loose piece. Exploit the pinned piece.",
    "initialFen": "7k/1p1rp1bp/pB4p1/4rp2/P7/2P1Q2P/1P3PP1/4R1K1 w - - 0 34",
    "fen": "7k/1p1rp1bp/pB4p1/4rp2/P4Q2/2P4P/1P3PP1/4R1K1 b - - 1 34",
    "preMove": "Qf4",
    "solution": [
      "Rxe1+",
      "Kh2",
      "Be5",
      "Qxe5+",
      "Rxe5"
    ]
  },
  {
    "id": "02aTY",
    "title": "Pin Tactic",
    "theme": "Crushing",
    "difficulty": "Hard",
    "rating": 1489,
    "popularity": 100,
    "description": "Find the strongest continuation. Deflect the defender. Exploit the pinned piece.",
    "initialFen": "6rk/4R2p/3p3p/2pNb3/4P3/2P3qP/PP4P1/5QK1 w - - 7 36",
    "fen": "6rk/4R2p/3p3p/2pNb3/4P3/2P3qP/PP3QP1/6K1 b - - 8 36",
    "preMove": "Qf2",
    "solution": [
      "Qh2+",
      "Kf1",
      "Qh1+",
      "Ke2",
      "Rxg2"
    ]
  },
  {
    "id": "02bBr",
    "title": "Mate in 2",
    "theme": "Mate",
    "difficulty": "Hard",
    "rating": 1568,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "5rk1/r4Bp1/7p/1R2pQ2/4Pn2/3P1P1P/p4q2/KR6 b - - 0 34",
    "fen": "6k1/r4rp1/7p/1R2pQ2/4Pn2/3P1P1P/p4q2/KR6 w - - 0 35",
    "preMove": "Rfxf7",
    "solution": [
      "Rb8+",
      "Rf8",
      "Rxf8#"
    ]
  },
  {
    "id": "02bns",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 818,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r3k1r1/2p2p2/p1pp1p2/2b1p2p/4P3/2PP3q/PP1N1P1N/R2Q1RK1 w q - 2 15",
    "fen": "r3k1r1/2p2p2/p1pp1p2/2b1p2p/4P3/2PP3q/PP1N1P1N/R2Q1R1K b q - 3 15",
    "preMove": "Kh1",
    "solution": [
      "Qg2#"
    ]
  },
  {
    "id": "02cTH",
    "title": "Knight Fork",
    "theme": "Crushing",
    "difficulty": "Medium",
    "rating": 1281,
    "popularity": 100,
    "description": "Find the strongest continuation. Win material using a tactical fork.",
    "initialFen": "8/8/P7/1Q3p2/6p1/4b1k1/3r4/5K2 w - - 3 57",
    "fen": "8/8/P7/5Q2/6p1/4b1k1/3r4/5K2 b - - 0 57",
    "preMove": "Qxf5",
    "solution": [
      "Rf2+",
      "Qxf2+",
      "Bxf2",
      "a7",
      "Bxa7"
    ]
  },
  {
    "id": "02ccm",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Medium",
    "rating": 1126,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "8/8/r3k2p/4p1p1/4P1P1/RK3P1P/8/8 b - - 0 47",
    "fen": "8/8/4k2p/4p1p1/4P1P1/rK3P1P/8/8 w - - 0 48",
    "preMove": "Rxa3+",
    "solution": [
      "Kxa3",
      "Kd7",
      "Kb4",
      "Kc6",
      "Kc4"
    ]
  },
  {
    "id": "02chE",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 991,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r4rk1/1p4p1/2pp3p/p1bPp3/2P1Pp2/2N4K/PP2Bq2/R2Q3R w - - 0 26",
    "fen": "r4rk1/1p4p1/2pp3p/p1bPp3/2P1Pp2/2N4K/PP2Bq2/R4Q1R b - - 1 26",
    "preMove": "Qf1",
    "solution": [
      "Qg3#"
    ]
  },
  {
    "id": "02d53",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 804,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r5k1/6pp/p3N3/3p4/2q1p3/4P1P1/1Q3P1P/6K1 b - - 2 28",
    "fen": "r5k1/6pp/p1q1N3/3p4/4p3/4P1P1/1Q3P1P/6K1 w - - 3 29",
    "preMove": "Qc6",
    "solution": [
      "Qxg7#"
    ]
  },
  {
    "id": "02ddk",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1015,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "8/p4p1k/1p2pBr1/4P1p1/5nQp/1P3P2/P3qP1P/2R3K1 b - - 5 32",
    "fen": "8/p4p1k/1p2pBr1/4P1p1/6Qp/1P1n1P2/P3qP1P/2R3K1 w - - 6 33",
    "preMove": "Nd3",
    "solution": [
      "Qh5+",
      "Rh6",
      "Qxf7#"
    ]
  },
  {
    "id": "02fUl",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 840,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r3k2N/ppp3pp/8/2bBp3/7q/3PB3/PPP1b1PP/RN4KR w q - 0 14",
    "fen": "r3k2N/ppp3pp/8/2BBp3/7q/3P4/PPP1b1PP/RN4KR b q - 0 14",
    "preMove": "Bxc5",
    "solution": [
      "Qe1#"
    ]
  },
  {
    "id": "02gYs",
    "title": "Deflection",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1189,
    "popularity": 100,
    "description": "Deflect the defender.",
    "initialFen": "8/R2pr3/p4pk1/1p1BP1p1/4Kp2/P7/1P5P/8 w - - 0 43",
    "fen": "8/3pr3/R4pk1/1p1BP1p1/4Kp2/P7/1P5P/8 b - - 0 43",
    "preMove": "Rxa6",
    "solution": [
      "Rxe5+",
      "Kf3",
      "Rxd5"
    ]
  },
  {
    "id": "02h3w",
    "title": "Chess Puzzle",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1167,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "r7/pp1rbk2/2pnpp2/P3P1pp/3P4/5P1P/4NKPB/R2R4 b - - 0 32",
    "fen": "r7/pp1rbk2/2pnp3/P3p1pp/3P4/5P1P/4NKPB/R2R4 w - - 0 33",
    "preMove": "fxe5",
    "solution": [
      "dxe5",
      "Ne4+",
      "fxe4"
    ]
  },
  {
    "id": "02igk",
    "title": "Knight Fork",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1116,
    "popularity": 100,
    "description": "Unleash a discovered attack. Win material using a tactical fork.",
    "initialFen": "8/6R1/3rkn2/2p5/7P/4K3/3p1P2/3N4 w - - 2 58",
    "fen": "8/2R5/3rkn2/2p5/7P/4K3/3p1P2/3N4 b - - 3 58",
    "preMove": "Rc7",
    "solution": [
      "Nd5+",
      "Kxd2",
      "Nxc7+"
    ]
  },
  {
    "id": "02ioO",
    "title": "Mate in 1",
    "theme": "KingsideAttack",
    "difficulty": "Easy",
    "rating": 832,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "4r1k1/1pr2pp1/4q1np/p2pPN2/b1pP3P/4P1Q1/1P4P1/2R2RK1 b - - 0 28",
    "fen": "4r1k1/1pr1npp1/4q2p/p2pPN2/b1pP3P/4P1Q1/1P4P1/2R2RK1 w - - 1 29",
    "preMove": "Ne7",
    "solution": [
      "Qxg7#"
    ]
  },
  {
    "id": "02jGG",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Medium",
    "rating": 1109,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "Q1bqk2r/5ppp/4p3/1p2n3/1b1Pp3/8/PP2KPPP/R1B4R w k - 0 14",
    "fen": "Q1bqk2r/5ppp/4p3/1p2P3/1b2p3/8/PP2KPPP/R1B4R b k - 0 14",
    "preMove": "dxe5",
    "solution": [
      "Qd3#"
    ]
  },
  {
    "id": "02kX6",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 904,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "5k1r/3pq1b1/pp1n1r1p/3B2p1/P7/Q1R4P/1P3PP1/3R2K1 b - - 6 27",
    "fen": "5k1r/3pq1b1/pp3r1p/3B1np1/P7/Q1R4P/1P3PP1/3R2K1 w - - 7 28",
    "preMove": "Nf5",
    "solution": [
      "Rc8#"
    ]
  },
  {
    "id": "02lJV",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 951,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "5N1k/4q1p1/p1p4p/1p1n1Q2/8/7P/5PPK/8 b - - 1 35",
    "fen": "5N1k/6p1/p1p2q1p/1p1n1Q2/8/7P/5PPK/8 w - - 2 36",
    "preMove": "Qf6",
    "solution": [
      "Qh7#"
    ]
  },
  {
    "id": "02lN4",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Expert",
    "rating": 2129,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "6k1/1p6/7p/8/3N1Kp1/r5P1/6P1/8 b - - 1 43",
    "fen": "6k1/1p6/7p/8/3N1Kp1/5rP1/6P1/8 w - - 2 44",
    "preMove": "Rf3+",
    "solution": [
      "gxf3",
      "gxf3",
      "Kxf3"
    ]
  },
  {
    "id": "02lRx",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1019,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r4rk1/p7/1p2pB2/2p4q/3P4/2P5/PP4Q1/2K5 b - - 0 30",
    "fen": "r4r2/p4k2/1p2pB2/2p4q/3P4/2P5/PP4Q1/2K5 w - - 1 31",
    "preMove": "Kf7",
    "solution": [
      "Qg7+",
      "Ke8",
      "Qe7#"
    ]
  },
  {
    "id": "02lWb",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 992,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "7r/pp3Q2/1kp4N/8/PPBq1p2/1K6/2P4P/8 b - - 4 36",
    "fen": "8/pp3Q2/1kp4r/8/PPBq1p2/1K6/2P4P/8 w - - 0 37",
    "preMove": "Rxh6",
    "solution": [
      "a5#"
    ]
  },
  {
    "id": "02mo1",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 840,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "1r1q1rk1/ppp1ppbp/2n3p1/5b2/8/P1N1PNP1/1P1PKPBP/2RQ3R w - - 3 13",
    "fen": "1r1q1rk1/ppp1ppbp/2n3p1/5b2/8/P1N1PNP1/1P1PKPBP/2RQR3 b - - 4 13",
    "preMove": "Re1",
    "solution": [
      "Bd3#"
    ]
  },
  {
    "id": "02nTH",
    "title": "Mate in 3",
    "theme": "BackRankMate",
    "difficulty": "Easy",
    "rating": 855,
    "popularity": 100,
    "description": "Exploit the weak back rank. Win material using a tactical fork. Find the forced checkmate. Find the forced mate in three. Sacrifice material for a tactical gain.",
    "initialFen": "3r4/pQ2pkbp/2n3p1/2q3B1/8/P4N2/1P3PPP/4R1K1 w - - 0 24",
    "fen": "3r4/pQ2pkbp/2n3p1/2q3B1/8/P4N2/1P3PPP/2R3K1 b - - 1 24",
    "preMove": "Rc1",
    "solution": [
      "Qxc1+",
      "Bxc1",
      "Rd1+",
      "Ne1",
      "Rxe1#"
    ]
  },
  {
    "id": "02oX3",
    "title": "Mate in 2",
    "theme": "DiscoveredAttack",
    "difficulty": "Easy",
    "rating": 910,
    "popularity": 100,
    "description": "Unleash a discovered attack. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "rn3rk1/p1q2pbp/1pp1pBp1/4P2N/8/7Q/PPP2PPP/3R1bK1 b - - 1 17",
    "fen": "rn3rk1/p1q2p1p/1pp1pbp1/4P2N/8/7Q/PPP2PPP/3R1bK1 w - - 0 18",
    "preMove": "Bxf6",
    "solution": [
      "Nxf6+",
      "Kg7",
      "Qxh7#"
    ]
  },
  {
    "id": "02prs",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Easy",
    "rating": 989,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "8/6k1/4P3/3K4/6P1/p7/8/8 w - - 0 75",
    "fen": "8/4P1k1/8/3K4/6P1/p7/8/8 b - - 0 75",
    "preMove": "e7",
    "solution": [
      "Kf7",
      "e8=Q+",
      "Kxe8"
    ]
  },
  {
    "id": "02qoc",
    "title": "Pin Tactic",
    "theme": "Crushing",
    "difficulty": "Hard",
    "rating": 1651,
    "popularity": 100,
    "description": "Find the strongest continuation. Interfere with the opponent's coordination. Exploit the pinned piece.",
    "initialFen": "4r2r/1R3pk1/4R3/5P2/2p5/2Pn1K2/7p/7N b - - 3 37",
    "fen": "1r5r/1R3pk1/4R3/5P2/2p5/2Pn1K2/7p/7N w - - 4 38",
    "preMove": "Rb8",
    "solution": [
      "Rg6+",
      "Kf8",
      "Rxb8+"
    ]
  },
  {
    "id": "02qvG",
    "title": "Mate in 1",
    "theme": "KingsideAttack",
    "difficulty": "Medium",
    "rating": 1092,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "1r1q1rk1/p2bbpp1/1p1ppn1p/8/2PQN3/1P2P1P1/PB3PBP/3R1RK1 b - - 3 14",
    "fen": "1r1q1rk1/p2bbpp1/1p1pp2p/8/2PQn3/1P2P1P1/PB3PBP/3R1RK1 w - - 0 15",
    "preMove": "Nxe4",
    "solution": [
      "Qxg7#"
    ]
  },
  {
    "id": "02r27",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Easy",
    "rating": 992,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "4r3/2pqrpk1/3p2pp/p1pPb1QP/2P1P3/1P3R2/P1B3P1/5R1K w - - 0 30",
    "fen": "4r3/2pqrRk1/3p2pp/p1pPb1QP/2P1P3/1P6/P1B3P1/5R1K b - - 0 30",
    "preMove": "Rxf7+",
    "solution": [
      "Rxf7",
      "Qxg6+",
      "Kf8",
      "Qxf7+",
      "Qxf7",
      "Rxf7+",
      "Kxf7"
    ]
  },
  {
    "id": "02sY0",
    "title": "Deflection",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1379,
    "popularity": 100,
    "description": "Deflect the defender.",
    "initialFen": "5rk1/pp4pp/3qp3/6N1/3r4/1P3BP1/P5KP/R3Q3 w - - 2 22",
    "fen": "5rk1/pp4pp/3qQ3/6N1/3r4/1P3BP1/P5KP/R7 b - - 0 22",
    "preMove": "Qxe6+",
    "solution": [
      "Qxe6",
      "Nxe6",
      "Rd2+",
      "Kh3",
      "Rxf3"
    ]
  },
  {
    "id": "02tIz",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1073,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "4r1k1/p7/1p2r2p/3Q2p1/8/2P1q2P/P3K1P1/2R2R2 w - - 0 30",
    "fen": "4r1k1/p7/1p2r2p/3Q2p1/8/2P1q2P/P5P1/2RK1R2 b - - 1 30",
    "preMove": "Kd1",
    "solution": [
      "Qe2#"
    ]
  },
  {
    "id": "02tM3",
    "title": "Winning Combination",
    "theme": "AdvancedPawn",
    "difficulty": "Medium",
    "rating": 1038,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "6k1/5p2/5P2/K5p1/P7/8/8/8 w - - 0 56",
    "fen": "6k1/5p2/1K3P2/6p1/P7/8/8/8 b - - 1 56",
    "preMove": "Kb6",
    "solution": [
      "g4",
      "Kc5",
      "g3",
      "Kd4",
      "g2"
    ]
  },
  {
    "id": "02vy3",
    "title": "Chess Puzzle",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1055,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "8/7p/2Pk4/p1nB2K1/2P5/6PP/5P2/8 w - - 1 46",
    "fen": "8/7p/2Pk3K/p1nB4/2P5/6PP/5P2/8 b - - 2 46",
    "preMove": "Kh6",
    "solution": [
      "a4",
      "Kxh7",
      "a3"
    ]
  },
  {
    "id": "02w5A",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1354,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "8/p5kp/1p6/3P2P1/3Rp1bP/4Kr2/PP3P1R/3r4 w - - 9 31",
    "fen": "8/p5kp/1p6/3P2P1/3RK1bP/5r2/PP3P1R/3r4 b - - 0 31",
    "preMove": "Kxe4",
    "solution": [
      "Re1#"
    ]
  },
  {
    "id": "02w6Y",
    "title": "Mate in 2",
    "theme": "KingsideAttack",
    "difficulty": "Easy",
    "rating": 868,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "3rr1k1/1b3ppp/pb3q2/1p1p4/1P1Nn3/P1PQ4/B3RPPP/2B1R1K1 b - - 0 22",
    "fen": "3rr1k1/1b3ppp/pb3q2/1p1p4/1P1N4/P1PQ4/B3RnPP/2B1R1K1 w - - 0 23",
    "preMove": "Nxf2",
    "solution": [
      "Rxe8+",
      "Rxe8",
      "Rxe8#"
    ]
  },
  {
    "id": "02wLK",
    "title": "Chess Puzzle",
    "theme": "AdvancedPawn",
    "difficulty": "Hard",
    "rating": 1551,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "6k1/ppp2pp1/7p/8/2P3P1/1P2pP1P/PB2Rb1K/4r3 w - - 9 31",
    "fen": "6k1/ppp2pp1/7p/8/2P3P1/1P2pP1P/PB3b1K/4R3 b - - 0 31",
    "preMove": "Rxe1",
    "solution": [
      "Bxe1",
      "Kg1",
      "e2"
    ]
  },
  {
    "id": "02woL",
    "title": "Sacrifice",
    "theme": "Crushing",
    "difficulty": "Hard",
    "rating": 1599,
    "popularity": 100,
    "description": "Find the strongest continuation. Sacrifice material for a tactical gain.",
    "initialFen": "6k1/Q5p1/3rb2p/8/8/2P2qN1/PP3P1P/5RK1 w - - 0 25",
    "fen": "1Q4k1/6p1/3rb2p/8/8/2P2qN1/PP3P1P/5RK1 b - - 1 25",
    "preMove": "Qb8+",
    "solution": [
      "Kh7",
      "Qxd6",
      "Bh3",
      "Qd5",
      "Qxd5"
    ]
  },
  {
    "id": "02wxP",
    "title": "Chess Puzzle",
    "theme": "Advantage",
    "difficulty": "Hard",
    "rating": 1606,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "4rbk1/pp1n3p/3p2p1/2pPn3/4NB2/6Pq/PPP1Q2P/R4RK1 w - - 3 23",
    "fen": "4rbk1/pp1n3p/3p2p1/2pPn3/4NB2/6Pq/PPP2Q1P/R4RK1 b - - 4 23",
    "preMove": "Qf2",
    "solution": [
      "Ng4",
      "Qg2",
      "Qxg2+",
      "Kxg2",
      "Rxe4"
    ]
  },
  {
    "id": "02x4e",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 907,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r1b1k2r/1pp2ppp/p1n5/4p1q1/3pP1P1/1NPP3P/PP2NKP1/R2Q1B1R w kq - 0 12",
    "fen": "r1b1k2r/1pp2ppp/p1n5/4p1q1/3pP1P1/1NPP2NP/PP3KP1/R2Q1B1R b kq - 1 12",
    "preMove": "Ng3",
    "solution": [
      "Qe3#"
    ]
  },
  {
    "id": "02x7v",
    "title": "Winning Combination",
    "theme": "AdvancedPawn",
    "difficulty": "Medium",
    "rating": 1083,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "8/2Pb4/p7/PP6/5p1p/2k2K1P/6P1/8 b - - 0 50",
    "fen": "8/2Pb4/8/Pp6/5p1p/2k2K1P/6P1/8 w - - 0 51",
    "preMove": "axb5",
    "solution": [
      "a6",
      "Bc8",
      "a7"
    ]
  },
  {
    "id": "02yQt",
    "title": "Chess Puzzle",
    "theme": "Advantage",
    "difficulty": "Expert",
    "rating": 1960,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "2r5/2r1kppp/p3pn2/1p2N3/3N4/PPn1P3/3R1PPP/2R2K2 b - - 0 24",
    "fen": "2r5/2r1kppp/p3pn2/1p2N3/3Nn3/PP2P3/3R1PPP/2R2K2 w - - 1 25",
    "preMove": "Nce4",
    "solution": [
      "Rxc7+",
      "Rxc7",
      "Ndc6+"
    ]
  },
  {
    "id": "02yqs",
    "title": "Knight Fork",
    "theme": "Advantage",
    "difficulty": "Easy",
    "rating": 829,
    "popularity": 100,
    "description": "Win material using a tactical fork.",
    "initialFen": "2r1r1k1/Q3bpp1/8/8/4pB2/2p3PP/5n2/2R3K1 w - - 0 33",
    "fen": "2r1r1k1/Q3bpp1/8/8/4pB2/2p3PP/5K2/2R5 b - - 0 33",
    "preMove": "Kxf2",
    "solution": [
      "Bc5+",
      "Qxc5",
      "Rxc5"
    ]
  },
  {
    "id": "02zIn",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Medium",
    "rating": 1059,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "2rR1Q2/2r2p1k/4bBpp/1p5q/8/8/P4PPP/5RK1 b - - 7 35",
    "fen": "3r1Q2/2r2p1k/4bBpp/1p5q/8/8/P4PPP/5RK1 w - - 0 36",
    "preMove": "Rxd8",
    "solution": [
      "Qg7#"
    ]
  },
  {
    "id": "02ziV",
    "title": "Knight Fork",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1123,
    "popularity": 100,
    "description": "Win material using a tactical fork.",
    "initialFen": "r4rk1/pp1q3p/2p1bn2/4Rp2/2pP2p1/3B1P2/PPQN2PP/3R2K1 w - - 0 19",
    "fen": "r4rk1/pp1q3p/2p1bn2/4Rp2/2BP2p1/5P2/PPQN2PP/3R2K1 b - - 0 19",
    "preMove": "Bxc4",
    "solution": [
      "Qxd4+",
      "Kh1",
      "Qxe5"
    ]
  },
  {
    "id": "02zyG",
    "title": "Discovered Attack",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1099,
    "popularity": 100,
    "description": "Unleash a discovered attack.",
    "initialFen": "r4rk1/ppp3pp/1bnq1p2/1B2p3/2P5/1QP1nN2/PP3PPP/R4RK1 b - - 0 14",
    "fen": "r4rk1/ppp3pp/1bnq1p2/1B2p3/2P5/1QP2N2/PP3PPP/R4nK1 w - - 0 15",
    "preMove": "Nxf1",
    "solution": [
      "c5+",
      "Kh8",
      "cxd6"
    ]
  },
  {
    "id": "0305P",
    "title": "Knight Fork",
    "theme": "Advantage",
    "difficulty": "Easy",
    "rating": 966,
    "popularity": 100,
    "description": "Win material using a tactical fork.",
    "initialFen": "r3kb1r/p4ppp/1q2p3/1bpp1P2/3Pn3/2P2N2/PP4PP/RNBQR2K w kq - 1 13",
    "fen": "r3kb1r/p4ppp/1q2P3/1bpp4/3Pn3/2P2N2/PP4PP/RNBQR2K b kq - 0 13",
    "preMove": "fxe6",
    "solution": [
      "Nf2+",
      "Kg1",
      "Nxd1"
    ]
  },
  {
    "id": "032NX",
    "title": "Knight Fork",
    "theme": "Crushing",
    "difficulty": "Easy",
    "rating": 858,
    "popularity": 100,
    "description": "Find the strongest continuation. Win material using a tactical fork.",
    "initialFen": "7k/1ppq1p2/3p1n1p/p2Pp2b/P1P1P2P/3Qb3/1BB3PK/R7 w - - 0 33",
    "fen": "7k/1ppq1p2/3p1n1p/p2Pp2b/P1P1P2P/4Q3/1BB3PK/R7 b - - 0 33",
    "preMove": "Qxe3",
    "solution": [
      "Ng4+",
      "Kg1",
      "Nxe3"
    ]
  },
  {
    "id": "032d2",
    "title": "Discovered Attack",
    "theme": "Crushing",
    "difficulty": "Easy",
    "rating": 841,
    "popularity": 100,
    "description": "Find the strongest continuation. Unleash a discovered attack.",
    "initialFen": "r2q1rk1/pp1N1ppp/4pb2/8/5P2/1P1B4/P4PPP/R2Q1RK1 b - - 0 16",
    "fen": "r4rk1/pp1q1ppp/4pb2/8/5P2/1P1B4/P4PPP/R2Q1RK1 w - - 0 17",
    "preMove": "Qxd7",
    "solution": [
      "Bxh7+",
      "Kxh7",
      "Qxd7"
    ]
  },
  {
    "id": "033NX",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 931,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r1b3k1/qp3p2/2pbn2Q/p2p4/P2P3P/1N1B4/1PP2PP1/R5K1 b - - 0 19",
    "fen": "r1b2bk1/qp3p2/2p1n2Q/p2p4/P2P3P/1N1B4/1PP2PP1/R5K1 w - - 1 20",
    "preMove": "Bf8",
    "solution": [
      "Qh7#"
    ]
  },
  {
    "id": "033TG",
    "title": "Attraction",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 1551,
    "popularity": 100,
    "description": "Lure the opponent's piece onto an unfavorable square. Find the strongest continuation.",
    "initialFen": "2kr4/1rp1Q3/5p1p/4bN2/2b1p1P1/4P2P/1q3P2/R1R3K1 b - - 5 36",
    "fen": "2kr4/1rp1Q3/5p1p/4bN2/2b1p1P1/4P2P/4qP2/R1R3K1 w - - 6 37",
    "preMove": "Qe2",
    "solution": [
      "Ra8+",
      "Rb8",
      "Rxb8+",
      "Kxb8",
      "Qxd8+"
    ]
  },
  {
    "id": "033VR",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 941,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "6k1/p4pp1/2p5/8/PPQ4p/5r1q/3r2P1/3B2RK w - - 0 34",
    "fen": "6k1/p4pp1/2p5/8/PPQ4p/5r1P/3r4/3B2RK b - - 0 34",
    "preMove": "gxh3",
    "solution": [
      "Rxh3#"
    ]
  },
  {
    "id": "033xz",
    "title": "Discovered Attack",
    "theme": "Advantage",
    "difficulty": "Hard",
    "rating": 1520,
    "popularity": 100,
    "description": "Unleash a discovered attack.",
    "initialFen": "rn2k2r/pp2qppp/2p2n2/2b2p2/2BP4/5N2/PPPK1PPP/R1BQ3R w kq - 3 10",
    "fen": "rn2k2r/pp2qppp/2p2n2/2P2p2/2B5/5N2/PPPK1PPP/R1BQ3R b kq - 0 10",
    "preMove": "dxc5",
    "solution": [
      "Ne4+",
      "Ke1",
      "Nc3+"
    ]
  },
  {
    "id": "036d3",
    "title": "Chess Puzzle",
    "theme": "Advantage",
    "difficulty": "Easy",
    "rating": 983,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "3r1rk1/1pq1bppp/p4n2/2pP4/P4P2/1PNQ3P/1B1P2P1/R4RK1 b - - 0 17",
    "fen": "3r1rk1/1pq1bppp/p7/2pn4/P4P2/1PNQ3P/1B1P2P1/R4RK1 w - - 0 18",
    "preMove": "Nxd5",
    "solution": [
      "Nxd5",
      "Rxd5",
      "Qxd5"
    ]
  },
  {
    "id": "036ob",
    "title": "Mate in 1",
    "theme": "HangingPiece",
    "difficulty": "Easy",
    "rating": 952,
    "popularity": 100,
    "description": "Capture the loose piece. Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r3r1k1/5pp1/7p/4N2P/p2P4/1q6/QP3PP1/1K1RR3 w - - 1 29",
    "fen": "r3r1k1/5pp1/7p/4N2P/p2P4/1q2R3/QP3PP1/1K1R4 b - - 2 29",
    "preMove": "Re3",
    "solution": [
      "Qxd1#"
    ]
  },
  {
    "id": "036yi",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1298,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "2r3k1/p4pp1/1pPR2r1/8/1P2p3/P1Q1B1pq/4PP1P/2R3K1 w - - 0 34",
    "fen": "2r3k1/p4pp1/1pP3R1/8/1P2p3/P1Q1B1pq/4PP1P/2R3K1 b - - 0 34",
    "preMove": "Rxg6",
    "solution": [
      "Qxh2+",
      "Kf1",
      "Qh1#"
    ]
  },
  {
    "id": "037Ld",
    "title": "Chess Puzzle",
    "theme": "Equality",
    "difficulty": "Expert",
    "rating": 2049,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "8/5ppk/p1r1q2p/3R1b2/2P1n3/N2Q1P2/P5PP/6K1 b - - 0 29",
    "fen": "8/5ppk/p1r1qn1p/3R1b2/2P5/N2Q1P2/P5PP/6K1 w - - 1 30",
    "preMove": "Nf6",
    "solution": [
      "Qxf5+",
      "Qxf5",
      "Rxf5"
    ]
  },
  {
    "id": "0394d",
    "title": "Chess Puzzle",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1006,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "8/1b1kpp2/p6p/1p1q4/3B1Q1P/PP3P2/2P5/2KN2r1 b - - 0 30",
    "fen": "8/1b1kpp2/p6p/1p6/3B1Q1P/PP3q2/2P5/2KN2r1 w - - 0 31",
    "preMove": "Qxf3",
    "solution": [
      "Qxf3",
      "Bxf3",
      "Bxg1"
    ]
  },
  {
    "id": "039HH",
    "title": "Chess Puzzle",
    "theme": "Advantage",
    "difficulty": "Easy",
    "rating": 937,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "r2q1rk1/1bp2pbn/p2p2p1/1p3pB1/4P2Q/1PNP1N2/1PP3PP/R4RK1 b - - 2 16",
    "fen": "r2q1rk1/1bp2pb1/p2p2p1/1p3pn1/4P2Q/1PNP1N2/1PP3PP/R4RK1 w - - 0 17",
    "preMove": "Nxg5",
    "solution": [
      "Nxg5",
      "Qxg5",
      "Qxg5"
    ]
  },
  {
    "id": "039qo",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Medium",
    "rating": 1138,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r2qr1k1/pb2np1Q/1p3b2/2p3N1/8/P2P2P1/1P2PPBP/R4RK1 b - - 1 18",
    "fen": "r2qrk2/pb2np1Q/1p3b2/2p3N1/8/P2P2P1/1P2PPBP/R4RK1 w - - 2 19",
    "preMove": "Kf8",
    "solution": [
      "Qxf7#"
    ]
  },
  {
    "id": "03A9v",
    "title": "Chess Puzzle",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1044,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "8/4k3/1p4pp/2pP1p2/5P1P/2P1K3/8/8 b - - 0 48",
    "fen": "8/4k3/1p4pp/3P1p2/2p2P1P/2P1K3/8/8 w - - 0 49",
    "preMove": "c4",
    "solution": [
      "Kd4",
      "Kd7",
      "Kxc4"
    ]
  },
  {
    "id": "03AoT",
    "title": "Chess Puzzle",
    "theme": "Advantage",
    "difficulty": "Hard",
    "rating": 1512,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "1b3rk1/p5pb/2pqp2p/2p1N3/5P2/BP1Pp3/P1PQ2PP/5R1K w - - 0 23",
    "fen": "1b3rk1/p5pb/2pqp2p/2p1N3/5P2/BP1PQ3/P1P3PP/5R1K b - - 0 23",
    "preMove": "Qxe3",
    "solution": [
      "Qxe5",
      "Qxe5",
      "Bxe5"
    ]
  },
  {
    "id": "03B3o",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1008,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two. Sacrifice material for a tactical gain.",
    "initialFen": "2k4r/1p3qp1/p1p2pp1/B7/8/3Q3P/PbP2PP1/3R2K1 b - - 0 22",
    "fen": "2k4r/1p3qp1/p1p2pp1/B3b3/8/3Q3P/P1P2PP1/3R2K1 w - - 1 23",
    "preMove": "Be5",
    "solution": [
      "Qd8+",
      "Rxd8",
      "Rxd8#"
    ]
  },
  {
    "id": "03BAr",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Hard",
    "rating": 1401,
    "popularity": 100,
    "description": "Capture the loose piece. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "2rq2k1/1p3p1p/p3p1pP/3pP1Q1/1P1P4/5N2/2R2PP1/6K1 b - - 0 39",
    "fen": "2r3k1/1p3p1p/p3p1pP/3pP1q1/1P1P4/5N2/2R2PP1/6K1 w - - 0 40",
    "preMove": "Qxg5",
    "solution": [
      "Rxc8+",
      "Qd8",
      "Rxd8#"
    ]
  },
  {
    "id": "03BWQ",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Medium",
    "rating": 1210,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "3r2k1/p3R1p1/2Q2p1p/6q1/8/7P/P4PP1/6K1 w - - 1 33",
    "fen": "3r2k1/R5p1/2Q2p1p/6q1/8/7P/P4PP1/6K1 b - - 0 33",
    "preMove": "Rxa7",
    "solution": [
      "Rd1+",
      "Kh2",
      "Qf4+",
      "g3",
      "Qxf2+"
    ]
  },
  {
    "id": "03Bce",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Easy",
    "rating": 822,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "8/8/8/1p1k4/1P4p1/p3K1Pp/P6P/8 w - - 5 48",
    "fen": "8/8/8/1p1k4/1P3Kp1/p5Pp/P6P/8 b - - 6 48",
    "preMove": "Kf4",
    "solution": [
      "Kc4",
      "Kxg4",
      "Kxb4"
    ]
  },
  {
    "id": "03CF0",
    "title": "Pin Tactic",
    "theme": "CapturingDefender",
    "difficulty": "Medium",
    "rating": 1304,
    "popularity": 100,
    "description": "Exploit the pinned piece.",
    "initialFen": "r2qr1k1/p1p1bpBp/2pp1n2/5b2/4P2P/6Q1/PPP2PP1/RN2K2R b KQ - 1 12",
    "fen": "r2qr1k1/p1p1bpBp/2pp1n2/8/4P1bP/6Q1/PPP2PP1/RN2K2R w KQ - 2 13",
    "preMove": "Bg4",
    "solution": [
      "Bxf6",
      "Bxf6",
      "Qxg4+"
    ]
  },
  {
    "id": "03CIU",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1143,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "8/6pp/1Q2p1k1/2p5/P3n3/1P2PK1P/5qP1/4N3 w - - 0 35",
    "fen": "8/6pp/1Q2p1k1/2p5/P3K3/1P2P2P/5qP1/4N3 b - - 0 35",
    "preMove": "Kxe4",
    "solution": [
      "Qf5#"
    ]
  },
  {
    "id": "03CME",
    "title": "Promotion",
    "theme": "AdvancedPawn",
    "difficulty": "Easy",
    "rating": 810,
    "popularity": 100,
    "description": "Find the strongest continuation. Promote your pawn.",
    "initialFen": "8/2q5/k7/1p3KP1/8/1Q6/8/8 b - - 2 73",
    "fen": "8/3q4/k7/1p3KP1/8/1Q6/8/8 w - - 3 74",
    "preMove": "Qd7+",
    "solution": [
      "Qe6+",
      "Qxe6+",
      "Kxe6",
      "b4",
      "g6",
      "b3",
      "g7",
      "b2",
      "g8=Q"
    ]
  },
  {
    "id": "03CVu",
    "title": "Deflection",
    "theme": "Crushing",
    "difficulty": "Medium",
    "rating": 1363,
    "popularity": 100,
    "description": "Find the strongest continuation. Deflect the defender.",
    "initialFen": "2kr1b1r/1p2npp1/p5b1/2qp2N1/2p2PP1/P1NP4/BPQ5/R1BR2K1 w - - 2 19",
    "fen": "2kr1b1r/1p2npp1/p5b1/2qp2N1/2p2PP1/P1NP4/BP3Q2/R1BR2K1 b - - 3 19",
    "preMove": "Qf2",
    "solution": [
      "Rh1+",
      "Kxh1",
      "Qxf2"
    ]
  },
  {
    "id": "03Cow",
    "title": "Attraction",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 1709,
    "popularity": 100,
    "description": "Lure the opponent's piece onto an unfavorable square. Sacrifice material for a tactical gain.",
    "initialFen": "3r1rk1/ppp2ppp/1b6/8/4P1R1/2Pq3P/P5P1/R1Q1B2K b - - 1 23",
    "fen": "3r1rk1/ppp2pp1/1b6/7p/4P1R1/2Pq3P/P5P1/R1Q1B2K w - - 0 24",
    "preMove": "h5",
    "solution": [
      "Rxg7+",
      "Kxg7",
      "Qg5+"
    ]
  },
  {
    "id": "03DYa",
    "title": "Knight Fork",
    "theme": "Attraction",
    "difficulty": "Expert",
    "rating": 1982,
    "popularity": 100,
    "description": "Lure the opponent's piece onto an unfavorable square. Find the strongest continuation. Win material using a tactical fork. Sacrifice material for a tactical gain.",
    "initialFen": "3N1b2/6kp/4Q1p1/1pq1P3/8/7P/6PK/8 b - - 5 46",
    "fen": "3N1b2/2q3kp/4Q1p1/1p2P3/8/7P/6PK/8 w - - 6 47",
    "preMove": "Qc7",
    "solution": [
      "Qf6+",
      "Kg8",
      "Qxf8+",
      "Kxf8",
      "Ne6+",
      "Kf7",
      "Nxc7"
    ]
  },
  {
    "id": "03ET6",
    "title": "Chess Puzzle",
    "theme": "Equality",
    "difficulty": "Expert",
    "rating": 1849,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "5rk1/3b1p1p/1q1pp1pQ/4n2P/p2RP1P1/5P2/BPP5/2K4R b - - 0 25",
    "fen": "5rk1/3b1p1p/3pp1pQ/4n2P/p2qP1P1/5P2/BPP5/2K4R w - - 0 26",
    "preMove": "Qxd4",
    "solution": [
      "hxg6",
      "Nd3+",
      "cxd3"
    ]
  },
  {
    "id": "03Ekd",
    "title": "Attraction",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1252,
    "popularity": 100,
    "description": "Lure the opponent's piece onto an unfavorable square. Find the strongest continuation.",
    "initialFen": "8/8/4nk2/5p1p/8/5NKP/6P1/8 b - - 11 66",
    "fen": "8/8/5k2/5pnp/8/5NKP/6P1/8 w - - 12 67",
    "preMove": "Ng5",
    "solution": [
      "Nxg5",
      "Kxg5",
      "h4+",
      "Kf6",
      "Kf4"
    ]
  },
  {
    "id": "03FL5",
    "title": "Knight Fork",
    "theme": "Endgame",
    "difficulty": "Hard",
    "rating": 1712,
    "popularity": 100,
    "description": "Win material using a tactical fork.",
    "initialFen": "5r2/p1q2p1k/5Q1p/3p1N2/8/1P5P/P4KP1/4r3 b - - 1 33",
    "fen": "5r2/p4p1k/5Q1p/3pqN2/8/1P5P/P4KP1/4r3 w - - 2 34",
    "preMove": "Qe5",
    "solution": [
      "Qxh6+",
      "Kg8",
      "Qg5+"
    ]
  },
  {
    "id": "03FPz",
    "title": "Chess Puzzle",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1255,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "2k2b1r/ppp1p1pp/3r4/5p2/3PB3/2P1B2q/PP3P2/RN1Q1RK1 w - - 0 15",
    "fen": "2k2b1r/ppp1p1pp/3r4/5p2/3PB3/2P1BQ1q/PP3P2/RN3RK1 b - - 1 15",
    "preMove": "Qf3",
    "solution": [
      "Rg6+",
      "Bg5",
      "Rxg5+"
    ]
  },
  {
    "id": "03FZU",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Medium",
    "rating": 1051,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "R7/5P1p/2q3pk/1p1p1b2/3Q3P/2r2PK1/8/8 b - - 0 38",
    "fen": "R7/5P1p/3q2pk/1p1p1b2/3Q3P/2r2PK1/8/8 w - - 1 39",
    "preMove": "Qd6+",
    "solution": [
      "Qf4+",
      "Qxf4+",
      "Kxf4"
    ]
  },
  {
    "id": "03Ht0",
    "title": "Mate in 2",
    "theme": "KingsideAttack",
    "difficulty": "Medium",
    "rating": 1273,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r1bq1rk1/ppp2ppp/1bnp1n2/3Np1N1/1PP5/P3P3/2QP1PPP/R1B1KB1R b KQ - 2 9",
    "fen": "r1bq1rk1/ppp2pp1/1bnp1n1p/3Np1N1/1PP5/P3P3/2QP1PPP/R1B1KB1R w KQ - 0 10",
    "preMove": "h6",
    "solution": [
      "Nxf6+",
      "gxf6",
      "Qh7#"
    ]
  },
  {
    "id": "03IYz",
    "title": "Winning Combination",
    "theme": "AdvancedPawn",
    "difficulty": "Medium",
    "rating": 1029,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "6k1/p4p1p/6p1/3r4/5P2/PPprR3/5PPP/2R3K1 w - - 2 34",
    "fen": "6k1/p4p1p/6p1/3r4/5P2/PPprR1P1/5P1P/2R3K1 b - - 0 34",
    "preMove": "g3",
    "solution": [
      "Rd1+",
      "Rxd1",
      "Rxd1+",
      "Kg2",
      "c2"
    ]
  },
  {
    "id": "03LPW",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1152,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "2r5/5k2/p3pp2/1p1p1N1p/3P1P2/4Pq2/PP3r1B/4QKR1 w - - 0 33",
    "fen": "2r5/5k2/p3pp2/1p1p1N1p/3P1P2/4Pq2/PP3Q1B/5KR1 b - - 0 33",
    "preMove": "Qxf2",
    "solution": [
      "Rc1#"
    ]
  },
  {
    "id": "03LXp",
    "title": "Mate in 3",
    "theme": "KingsideAttack",
    "difficulty": "Medium",
    "rating": 1138,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in three. Sacrifice material for a tactical gain.",
    "initialFen": "r5k1/ppb3p1/2pq2r1/3P1pQ1/4p3/1P2P1PP/PB3P2/2R2RK1 w - - 1 27",
    "fen": "r5k1/ppb3p1/2pq2r1/3P1Q2/4p3/1P2P1PP/PB3P2/2R2RK1 b - - 0 27",
    "preMove": "Qxf5",
    "solution": [
      "Rxg3+",
      "fxg3",
      "Qxg3+",
      "Kh1",
      "Qh2#"
    ]
  },
  {
    "id": "03LhC",
    "title": "Mate in 2",
    "theme": "KingsideAttack",
    "difficulty": "Easy",
    "rating": 913,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r2r2k1/1pR2ppp/4p3/p2qP3/3p1Qb1/3P1N2/1P3PPP/2R3K1 b - - 5 23",
    "fen": "r2r2k1/1pR2ppp/4p3/p2qP3/3p1Q2/3P1b2/1P3PPP/2R3K1 w - - 0 24",
    "preMove": "Bxf3",
    "solution": [
      "Qxf7+",
      "Kh8",
      "Qxg7#"
    ]
  },
  {
    "id": "03M4A",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1000,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "kr6/p4p1p/6p1/2R5/q2PQP2/P3P3/1n4P1/K7 b - - 1 43",
    "fen": "k7/pr3p1p/6p1/2R5/q2PQP2/P3P3/1n4P1/K7 w - - 2 44",
    "preMove": "Rb7",
    "solution": [
      "Rc8#"
    ]
  },
  {
    "id": "03MWw",
    "title": "Deflection",
    "theme": "Advantage",
    "difficulty": "Hard",
    "rating": 1606,
    "popularity": 100,
    "description": "Lure the opponent's piece onto an unfavorable square. Clear the critical square. Deflect the defender.",
    "initialFen": "r1b3k1/pp4r1/2pqp1n1/5n1Q/3P2P1/7R/PPB2P1P/3R2K1 b - - 4 27",
    "fen": "r1b3k1/pp4r1/2pqp3/5n1Q/3P1nP1/7R/PPB2P1P/3R2K1 w - - 5 28",
    "preMove": "Nf4",
    "solution": [
      "Qe8+",
      "Qf8",
      "Rh8+",
      "Kxh8",
      "Qxf8+"
    ]
  },
  {
    "id": "03NVE",
    "title": "Mate in 3",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 934,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "4r1k1/1p3ppp/p4q2/2Rp4/3Pr3/1Q4P1/PP3PP1/3R2K1 w - - 8 23",
    "fen": "4r1k1/1Q3ppp/p4q2/2Rp4/3Pr3/6P1/PP3PP1/3R2K1 b - - 0 23",
    "preMove": "Qxb7",
    "solution": [
      "Re1+",
      "Rxe1",
      "Rxe1+",
      "Kh2",
      "Qh6#"
    ]
  },
  {
    "id": "03NlU",
    "title": "Mate in 2",
    "theme": "Mate",
    "difficulty": "Medium",
    "rating": 1064,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two. Sacrifice material for a tactical gain.",
    "initialFen": "r4r1k/1bB3pp/p4p2/4pP2/1nB1P2N/2R5/P1P3PP/7K b - - 7 22",
    "fen": "r4r1k/2B3pp/p4p2/4pP2/1nB1b2N/2R5/P1P3PP/7K w - - 0 23",
    "preMove": "Bxe4",
    "solution": [
      "Ng6+",
      "hxg6",
      "Rh3#"
    ]
  },
  {
    "id": "03P8w",
    "title": "Mate in 1",
    "theme": "KingsideAttack",
    "difficulty": "Easy",
    "rating": 884,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r1b2rk1/pppp1ppp/8/3PP3/1P6/2PQB1q1/P2KB3/7R b - - 1 20",
    "fen": "r1b2rk1/pppp1ppp/8/3Pq3/1P6/2PQB3/P2KB3/7R w - - 0 21",
    "preMove": "Qxe5",
    "solution": [
      "Qxh7#"
    ]
  },
  {
    "id": "03PC9",
    "title": "Mate in 2",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 842,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "1r5k/1b4b1/3pBp2/2q1nQ1p/2PN1B2/6PP/7K/1R6 b - - 0 33",
    "fen": "1r5k/1b4b1/3pBp2/4nQ1p/2Pq1B2/6PP/7K/1R6 w - - 0 34",
    "preMove": "Qxd4",
    "solution": [
      "Qxh5+",
      "Bh6",
      "Qxh6#"
    ]
  },
  {
    "id": "03Pkr",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 824,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "3q4/4kr2/p4N2/1pPpP3/3P2Q1/P7/5K2/8 b - - 10 44",
    "fen": "5q2/4kr2/p4N2/1pPpP3/3P2Q1/P7/5K2/8 w - - 11 45",
    "preMove": "Qf8",
    "solution": [
      "Qd7#"
    ]
  },
  {
    "id": "03Q08",
    "title": "Mate in 2",
    "theme": "Mate",
    "difficulty": "Medium",
    "rating": 1059,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "rn6/2R5/3p1kp1/1r2p2n/1P6/5RPN/5P2/6K1 b - - 1 37",
    "fen": "rn6/2R5/3pk1p1/1r2p2n/1P6/5RPN/5P2/6K1 w - - 2 38",
    "preMove": "Ke6",
    "solution": [
      "Ng5+",
      "Kd5",
      "Rd3#"
    ]
  },
  {
    "id": "03Q6i",
    "title": "Mate in 3",
    "theme": "BackRankMate",
    "difficulty": "Medium",
    "rating": 1016,
    "popularity": 100,
    "description": "Exploit the weak back rank. Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "r5k1/2p2ppp/1q6/2p1P3/r7/5QB1/P4PPP/R5K1 b - - 0 27",
    "fen": "r5k1/2p2ppp/1q6/2p1P3/8/5QB1/r4PPP/R5K1 w - - 0 28",
    "preMove": "Rxa2",
    "solution": [
      "Qxa8+",
      "Rxa8",
      "Rxa8+",
      "Qb8",
      "Rxb8#"
    ]
  },
  {
    "id": "03QYw",
    "title": "Knight Fork",
    "theme": "Advantage",
    "difficulty": "Easy",
    "rating": 824,
    "popularity": 100,
    "description": "Win material using a tactical fork.",
    "initialFen": "2q3k1/5pp1/p3b1Qp/1pbB4/8/P1r2PB1/7P/3RR2K b - - 0 34",
    "fen": "2q3k1/6p1/p3b1pp/1pbB4/8/P1r2PB1/7P/3RR2K w - - 0 35",
    "preMove": "fxg6",
    "solution": [
      "Bxe6+",
      "Qxe6",
      "Rxe6"
    ]
  },
  {
    "id": "03Qx8",
    "title": "Skewer",
    "theme": "Crushing",
    "difficulty": "Medium",
    "rating": 1165,
    "popularity": 100,
    "description": "Find the strongest continuation. Use a skewer to win material.",
    "initialFen": "8/6k1/6p1/8/3Pp1P1/R7/4K3/6r1 w - - 1 48",
    "fen": "8/6k1/6p1/8/3Pp1P1/R3K3/8/6r1 b - - 2 48",
    "preMove": "Ke3",
    "solution": [
      "Rg3+",
      "Kf4",
      "Rxa3"
    ]
  },
  {
    "id": "03R0v",
    "title": "Discovered Attack",
    "theme": "Advantage",
    "difficulty": "Hard",
    "rating": 1422,
    "popularity": 100,
    "description": "Unleash a discovered attack.",
    "initialFen": "8/2Rn2qk/p4n2/1p1p4/3Qb3/6NP/PP3PP1/6K1 w - - 2 32",
    "fen": "8/2Rn2qk/p4n2/1p1p4/3Qb3/6NP/PP3PPK/8 b - - 3 32",
    "preMove": "Kh2",
    "solution": [
      "Ng4+",
      "hxg4",
      "Qxd4"
    ]
  },
  {
    "id": "03R1J",
    "title": "Chess Puzzle",
    "theme": "Advantage",
    "difficulty": "Easy",
    "rating": 944,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "3r3k/pp4p1/5n1p/3b4/4N1P1/3RP2P/PP4B1/4K3 b - - 0 27",
    "fen": "3r3k/pp4p1/7p/3b4/4n1P1/3RP2P/PP4B1/4K3 w - - 0 28",
    "preMove": "Nxe4",
    "solution": [
      "Bxe4",
      "Bxe4",
      "Rxd8+"
    ]
  },
  {
    "id": "03TZT",
    "title": "Knight Fork",
    "theme": "Crushing",
    "difficulty": "Medium",
    "rating": 1136,
    "popularity": 100,
    "description": "Find the strongest continuation. Win material using a tactical fork.",
    "initialFen": "2k5/1p5p/1K6/4B3/P1P5/4n1P1/8/8 w - - 3 50",
    "fen": "2k5/1p5p/1K6/2P1B3/P7/4n1P1/8/8 b - - 0 50",
    "preMove": "c5",
    "solution": [
      "Nc4+",
      "Kb5",
      "Nxe5"
    ]
  },
  {
    "id": "03U5L",
    "title": "Mate in 2",
    "theme": "Deflection",
    "difficulty": "Easy",
    "rating": 984,
    "popularity": 100,
    "description": "Deflect the defender. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r1b1k2N/pppp2pp/2n5/3Qp3/2B5/8/PPP4P/RNB1q1Kn w q - 2 12",
    "fen": "r1b1k2N/pppp2pp/2n5/3Qp3/8/8/PPP4P/RNB1qBKn b q - 3 12",
    "preMove": "Bf1",
    "solution": [
      "Qf2+",
      "Kxh1",
      "Qxf1#"
    ]
  },
  {
    "id": "03UYH",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Easy",
    "rating": 860,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "1Q6/5pk1/p4p2/PN1p4/2q2P2/4P3/6PK/8 b - - 0 38",
    "fen": "1Q6/5pk1/p4p2/Pq1p4/5P2/4P3/6PK/8 w - - 0 39",
    "preMove": "Qxb5",
    "solution": [
      "Qxb5",
      "axb5",
      "a6"
    ]
  },
  {
    "id": "03Ws6",
    "title": "Knight Fork",
    "theme": "Crushing",
    "difficulty": "Easy",
    "rating": 827,
    "popularity": 100,
    "description": "Find the strongest continuation. Win material using a tactical fork.",
    "initialFen": "8/2k1N3/8/2Pp1p1p/3P1P1P/8/1pK5/2b5 b - - 1 56",
    "fen": "8/2k1N3/8/2Pp1p1p/3P1P1P/4b3/1pK5/8 w - - 2 57",
    "preMove": "Be3",
    "solution": [
      "Nxd5+",
      "Kc6",
      "Nxe3",
      "b1=Q+",
      "Kxb1"
    ]
  },
  {
    "id": "03X0O",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 884,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "8/R7/3p2p1/2pPb1kp/P7/r6P/6P1/2R4K w - - 0 48",
    "fen": "8/R7/3p2p1/2pPb1kp/P1R5/r6P/6P1/7K b - - 1 48",
    "preMove": "Rc4",
    "solution": [
      "Ra1+",
      "Rc1",
      "Rxc1#"
    ]
  },
  {
    "id": "03X4N",
    "title": "Discovered Attack",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1057,
    "popularity": 100,
    "description": "Unleash a discovered attack.",
    "initialFen": "r6r/1b2kp2/1p2p3/1N1pn2p/6pP/2PBN1P1/1R3PK1/3R4 w - - 5 32",
    "fen": "r6r/1b2kp2/1p2p3/1N1pn2p/6pP/2P1N1P1/1R2BPK1/3R4 b - - 6 32",
    "preMove": "Be2",
    "solution": [
      "d4+",
      "Kf1",
      "dxe3"
    ]
  },
  {
    "id": "03XPS",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 865,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two. Sacrifice material for a tactical gain.",
    "initialFen": "1k6/ppR1n2p/6p1/1P1p4/3q4/P2r4/2R4P/1KQ5 b - - 1 35",
    "fen": "1k6/ppR1n2p/6p1/1P1p4/3q4/P7/2R4P/1KQr4 w - - 2 36",
    "preMove": "Rd1",
    "solution": [
      "Rc8+",
      "Nxc8",
      "Rxc8#"
    ]
  },
  {
    "id": "03XSU",
    "title": "Discovered Attack",
    "theme": "Crushing",
    "difficulty": "Medium",
    "rating": 1188,
    "popularity": 100,
    "description": "Find the strongest continuation. Unleash a discovered attack. Sacrifice material for a tactical gain.",
    "initialFen": "2r2bk1/1p3ppp/1P4b1/q2Np3/2B5/1Q2P2P/5PP1/2R3K1 b - - 0 30",
    "fen": "2r2bk1/1p3ppp/1P4b1/3Np3/2B5/1Q2P2P/3q1PP1/2R3K1 w - - 1 31",
    "preMove": "Qd2",
    "solution": [
      "Ne7+",
      "Bxe7",
      "Bxf7+",
      "Bxf7",
      "Rxc8+"
    ]
  },
  {
    "id": "03XZs",
    "title": "Chess Puzzle",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1372,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "2rr2k1/4ppb1/pq1P1np1/2p1B2p/2P5/2NQ3P/RP3PP1/4R1K1 b - - 0 21",
    "fen": "2rr2k1/5pb1/pq1p1np1/2p1B2p/2P5/2NQ3P/RP3PP1/4R1K1 w - - 0 22",
    "preMove": "exd6",
    "solution": [
      "Bxf6",
      "Bxf6",
      "Nd5"
    ]
  },
  {
    "id": "03Xd6",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Medium",
    "rating": 1123,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r1b1r3/ppp2p2/3pk3/4n1B1/8/2N4Q/Pq4PK/5R2 b - - 9 28",
    "fen": "r1b1r3/ppp5/3pk3/4npB1/8/2N4Q/Pq4PK/5R2 w - - 0 29",
    "preMove": "f5",
    "solution": [
      "Qxf5#"
    ]
  },
  {
    "id": "03Xyr",
    "title": "Mate in 2",
    "theme": "KingsideAttack",
    "difficulty": "Easy",
    "rating": 805,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "4rk2/1pq1rpb1/2p4p/5Q1P/p2P2R1/P7/BP3PP1/3R2K1 w - - 3 32",
    "fen": "4rk2/1pq1rpbQ/2p4p/7P/p2P2R1/P7/BP3PP1/3R2K1 b - - 4 32",
    "preMove": "Qh7",
    "solution": [
      "Re1+",
      "Rxe1",
      "Rxe1#"
    ]
  },
  {
    "id": "03YGJ",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 802,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "4Rk2/4p2p/1p4pP/2p4q/2Q4b/8/8/3R1K2 b - - 0 37",
    "fen": "4k3/4p2p/1p4pP/2p4q/2Q4b/8/8/3R1K2 w - - 0 38",
    "preMove": "Kxe8",
    "solution": [
      "Qg8#"
    ]
  },
  {
    "id": "03YTO",
    "title": "Mate in 2",
    "theme": "BackRankMate",
    "difficulty": "Easy",
    "rating": 867,
    "popularity": 100,
    "description": "Exploit the weak back rank. Win material using a tactical fork. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "5k2/6p1/7p/pp1q4/5P2/8/1BQ1R1PP/7K w - - 2 41",
    "fen": "5k2/6p1/6Qp/pp1q4/5P2/8/1B2R1PP/7K b - - 3 41",
    "preMove": "Qg6",
    "solution": [
      "Qd1+",
      "Re1",
      "Qxe1#"
    ]
  },
  {
    "id": "03Yux",
    "title": "Knight Fork",
    "theme": "Advantage",
    "difficulty": "Hard",
    "rating": 1568,
    "popularity": 100,
    "description": "Win material using a tactical fork.",
    "initialFen": "1R6/4bkpp/5q2/2p5/2Q4P/2P1P1P1/P4P1K/3r4 b - - 4 37",
    "fen": "1R6/4b1pp/5qk1/2p5/2Q4P/2P1P1P1/P4P1K/3r4 w - - 5 38",
    "preMove": "Kg6",
    "solution": [
      "Qg4+",
      "Kh6",
      "Qxd1"
    ]
  },
  {
    "id": "03aHZ",
    "title": "Discovered Attack",
    "theme": "Crushing",
    "difficulty": "Medium",
    "rating": 1146,
    "popularity": 100,
    "description": "Find the strongest continuation. Unleash a discovered attack.",
    "initialFen": "r2r2k1/1pq1ppbp/p1b2np1/8/2B5/1P2P3/PBQ1NPPP/2R2RK1 b - - 5 15",
    "fen": "r2r2k1/1pq1ppbp/p4np1/8/2B1b3/1P2P3/PBQ1NPPP/2R2RK1 w - - 6 16",
    "preMove": "Be4",
    "solution": [
      "Bxf7+",
      "Kxf7",
      "Qxc7"
    ]
  },
  {
    "id": "03bUT",
    "title": "Knight Fork",
    "theme": "Crushing",
    "difficulty": "Easy",
    "rating": 950,
    "popularity": 100,
    "description": "Find the strongest continuation. Win material using a tactical fork.",
    "initialFen": "8/k7/3R4/pp1p4/2pP4/P1n1K3/2P5/8 w - - 0 45",
    "fen": "8/k7/3R4/pp1p4/2pP4/P1n5/2PK4/8 b - - 1 45",
    "preMove": "Kd2",
    "solution": [
      "Ne4+",
      "Kc1",
      "Nxd6"
    ]
  },
  {
    "id": "03bZX",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 960,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "1r3r2/2p5/1q6/2b1p3/k2pQ2B/8/P4PP1/1KR4R w - - 0 34",
    "fen": "1r3r2/2p5/1q6/2b1p3/k2pQ2B/8/P4PP1/K1R4R b - - 1 34",
    "preMove": "Ka1",
    "solution": [
      "Qb2#"
    ]
  },
  {
    "id": "03cFQ",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1073,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "5r1k/1pR5/p5pp/8/4bP2/1Q4P1/P2q3P/2R4K w - - 1 32",
    "fen": "5r1k/1pR5/p5pp/8/4bP2/1Q4P1/P2q3P/2R3K1 b - - 2 32",
    "preMove": "Kg1",
    "solution": [
      "Qg2#"
    ]
  },
  {
    "id": "03cWT",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Hard",
    "rating": 1604,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "8/8/p7/8/4K3/1P6/k7/8 w - - 0 47",
    "fen": "8/8/p7/8/3K4/1P6/k7/8 b - - 1 47",
    "preMove": "Kd4",
    "solution": [
      "Kxb3",
      "Kd3",
      "a5",
      "Kd2",
      "Kb2"
    ]
  },
  {
    "id": "03dEm",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 914,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "7r/2pR1pkr/1p2p1p1/4P3/1P3PPq/P1P2Q1p/3R2PB/6K1 w - - 13 34",
    "fen": "7r/2pR1pkr/1p2p1p1/4P3/1P3PPq/P1P4Q/3R2PB/6K1 b - - 0 34",
    "preMove": "Qxh3",
    "solution": [
      "Qe1#"
    ]
  },
  {
    "id": "03dw0",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 921,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "8/8/P7/6k1/1R6/6p1/r5P1/6K1 w - - 2 60",
    "fen": "8/8/P7/6k1/8/1R4p1/r5P1/6K1 b - - 3 60",
    "preMove": "Rb3",
    "solution": [
      "Ra1+",
      "Rb1",
      "Rxb1#"
    ]
  },
  {
    "id": "03fwW",
    "title": "Knight Fork",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1004,
    "popularity": 100,
    "description": "Win material using a tactical fork.",
    "initialFen": "3r2k1/5pp1/p1N1p2p/1p6/3q1P2/P4Q1P/6PK/8 b - - 1 36",
    "fen": "3r2k1/5pp1/p1N1p2p/1p1q4/5P2/P4Q1P/6PK/8 w - - 2 37",
    "preMove": "Qd5",
    "solution": [
      "Ne7+",
      "Kf8",
      "Nxd5"
    ]
  },
  {
    "id": "03fwn",
    "title": "Mate in 2",
    "theme": "Mate",
    "difficulty": "Medium",
    "rating": 1124,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r1b2r2/p1p2pkp/1p1p1qp1/3P1NQ1/2P1P2R/2Nn4/PP4PP/6K1 b - - 1 21",
    "fen": "r4r2/p1p2pkp/1p1p1qp1/3P1bQ1/2P1P2R/2Nn4/PP4PP/6K1 w - - 0 22",
    "preMove": "Bxf5",
    "solution": [
      "Qh6+",
      "Kh8",
      "Qxh7#"
    ]
  },
  {
    "id": "03gvn",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 802,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "8/6pk/4B1rp/p4p2/5P1P/4QP1K/1q6/R6R w - - 7 44",
    "fen": "8/6pk/6rp/p4B2/5P1P/4QP1K/1q6/R6R b - - 0 44",
    "preMove": "Bxf5",
    "solution": [
      "Qg2#"
    ]
  },
  {
    "id": "03j2L",
    "title": "Chess Puzzle",
    "theme": "Advantage",
    "difficulty": "Hard",
    "rating": 1589,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "4r2k/p1p1q1np/1p1p2Q1/3n4/2P2P2/4P2R/PP5P/4R2K b - - 0 31",
    "fen": "4r2k/p1p3np/1p1p2Q1/3n4/2P1qP2/4P2R/PP5P/4R2K w - - 1 32",
    "preMove": "Qe4+",
    "solution": [
      "Qxe4",
      "Rxe4",
      "cxd5"
    ]
  },
  {
    "id": "03jKe",
    "title": "Knight Fork",
    "theme": "Crushing",
    "difficulty": "Easy",
    "rating": 910,
    "popularity": 100,
    "description": "Find the strongest continuation. Win material using a tactical fork.",
    "initialFen": "8/1b3pk1/1P2p3/4P2p/1RpP1n2/2P5/5K1P/8 w - - 0 36",
    "fen": "8/1b3pk1/1P2p3/4P2p/1RpP1n2/2P1K3/7P/8 b - - 1 36",
    "preMove": "Ke3",
    "solution": [
      "Nd5+",
      "Kd2",
      "Nxb4"
    ]
  },
  {
    "id": "03kAQ",
    "title": "Knight Fork",
    "theme": "Crushing",
    "difficulty": "Hard",
    "rating": 1704,
    "popularity": 100,
    "description": "Find the strongest continuation. Win material using a tactical fork.",
    "initialFen": "8/3n4/5k1p/1pPBp3/1P4KP/8/8/8 w - - 1 51",
    "fen": "8/3n4/5k1p/1pPBp2K/1P5P/8/8/8 b - - 2 51",
    "preMove": "Kh5",
    "solution": [
      "Kg7",
      "Kg4",
      "Nf6+",
      "Kf5",
      "Nxd5"
    ]
  },
  {
    "id": "03l9S",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1032,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "3R4/pR6/1bN1pk1p/8/4r1p1/1P4P1/P6P/7K w - - 2 33",
    "fen": "8/pR1R4/1bN1pk1p/8/4r1p1/1P4P1/P6P/7K b - - 3 33",
    "preMove": "Rdd7",
    "solution": [
      "Re1+",
      "Kg2",
      "Rg1#"
    ]
  },
  {
    "id": "03lCR",
    "title": "Mate in 1",
    "theme": "Master",
    "difficulty": "Easy",
    "rating": 886,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r1bq1r2/3nn1k1/5pB1/ppp1pPpN/3pP3/P2P4/1PP2NP1/R1Q2RK1 b - - 3 23",
    "fen": "r1bq1r2/3nn3/5pBk/ppp1pPpN/3pP3/P2P4/1PP2NP1/R1Q2RK1 w - - 4 24",
    "preMove": "Kh6",
    "solution": [
      "Ng4#"
    ]
  },
  {
    "id": "03lR8",
    "title": "Chess Puzzle",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1326,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "2r3k1/5pb1/p5pp/1p2p3/1B1rR3/P3R2P/Bn3PP1/6K1 b - - 9 31",
    "fen": "2r3k1/5pb1/p5pp/1p2p3/1B1rR3/P2nR2P/B4PP1/6K1 w - - 10 32",
    "preMove": "Nd3",
    "solution": [
      "Rxd4",
      "exd4",
      "Rxd3",
      "Rc1+",
      "Kh2"
    ]
  },
  {
    "id": "03lYh",
    "title": "Mate in 1",
    "theme": "AdvancedPawn",
    "difficulty": "Easy",
    "rating": 817,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "8/7P/5n2/8/8/pk6/1p6/1K6 w - - 1 56",
    "fen": "7Q/8/5n2/8/8/pk6/1p6/1K6 b - - 0 56",
    "preMove": "h8=Q",
    "solution": [
      "a2#"
    ]
  },
  {
    "id": "03mv2",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Easy",
    "rating": 881,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "8/8/6p1/8/5KPk/8/8/8 b - - 5 80",
    "fen": "8/8/8/6p1/5KPk/8/8/8 w - - 0 81",
    "preMove": "g5+",
    "solution": [
      "Kf5",
      "Kh3",
      "Kxg5"
    ]
  },
  {
    "id": "03naU",
    "title": "Discovered Attack",
    "theme": "Crushing",
    "difficulty": "Easy",
    "rating": 943,
    "popularity": 100,
    "description": "Find the strongest continuation. Unleash a discovered attack.",
    "initialFen": "4r1k1/pb5p/1p4p1/3pn3/2qB4/2P4P/PPB2RP1/5QK1 w - - 4 35",
    "fen": "4r1k1/pb5p/1p4p1/3pn3/2qB4/2P4P/PPB2RP1/4Q1K1 b - - 5 35",
    "preMove": "Qe1",
    "solution": [
      "Nf3+",
      "gxf3",
      "Rxe1+"
    ]
  },
  {
    "id": "03ney",
    "title": "Chess Puzzle",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1162,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "2R2rk1/5ppp/3qpn2/n7/3P4/r3PPPP/4N1B1/2Q2RK1 b - - 4 23",
    "fen": "2R2rk1/5ppp/3qpn2/n7/3P4/4rPPP/4N1B1/2Q2RK1 w - - 0 24",
    "preMove": "Rxe3",
    "solution": [
      "Rxf8+",
      "Qxf8",
      "Qxe3"
    ]
  },
  {
    "id": "03pES",
    "title": "Mate in 1",
    "theme": "Master",
    "difficulty": "Medium",
    "rating": 1062,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Exploit the pinned piece.",
    "initialFen": "r1b2qk1/p4Bpp/1pp2p2/8/3P1b2/1QP2N1P/PP3PP1/4R1K1 b - - 0 18",
    "fen": "r1b3k1/p4qpp/1pp2p2/8/3P1b2/1QP2N1P/PP3PP1/4R1K1 w - - 0 19",
    "preMove": "Qxf7",
    "solution": [
      "Re8#"
    ]
  },
  {
    "id": "03pkb",
    "title": "Chess Puzzle",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1074,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "5r1k/7p/3p2n1/q2P1p2/2P5/1P3PQ1/2B1RP1P/7K w - - 0 41",
    "fen": "5r1k/7p/3Q2n1/q2P1p2/2P5/1P3P2/2B1RP1P/7K b - - 0 41",
    "preMove": "Qxd6",
    "solution": [
      "Qa1+",
      "Bb1",
      "Qxb1+"
    ]
  },
  {
    "id": "03prJ",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Expert",
    "rating": 2162,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "r1b2rk1/pp4p1/1nn3N1/3p1P1Q/1q6/1N4P1/PP3P1P/4RK1R b - - 2 21",
    "fen": "r1b3k1/pp4p1/1nn3N1/3p1r1Q/1q6/1N4P1/PP3P1P/4RK1R w - - 0 22",
    "preMove": "Rxf5",
    "solution": [
      "Re8+",
      "Rf8",
      "Rxf8+"
    ]
  },
  {
    "id": "03puQ",
    "title": "Knight Fork",
    "theme": "Advantage",
    "difficulty": "Easy",
    "rating": 842,
    "popularity": 100,
    "description": "Win material using a tactical fork.",
    "initialFen": "3r4/p4kbp/b1B1pnp1/6B1/4N3/2p5/Pr3PPP/R1R3K1 b - - 1 20",
    "fen": "2r5/p4kbp/b1B1pnp1/6B1/4N3/2p5/Pr3PPP/R1R3K1 w - - 2 21",
    "preMove": "Rc8",
    "solution": [
      "Nd6+",
      "Kg8",
      "Nxc8"
    ]
  },
  {
    "id": "03q7Y",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Hard",
    "rating": 1502,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "2k5/pp3p1r/B1R1p3/P2qPb2/3r1np1/8/1P3PpP/2R2QK1 b - - 0 26",
    "fen": "3k4/pp3p1r/B1R1p3/P2qPb2/3r1np1/8/1P3PpP/2R2QK1 w - - 1 27",
    "preMove": "Kd8",
    "solution": [
      "Rc8+",
      "Ke7",
      "R1c7+"
    ]
  },
  {
    "id": "03qfY",
    "title": "Mate in 3",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1322,
    "popularity": 100,
    "description": "Lure the opponent's piece onto an unfavorable square. Find the forced checkmate. Find the forced mate in three. Sacrifice material for a tactical gain.",
    "initialFen": "1k1r3r/ppp2p2/6p1/4P3/8/1P3B2/P2P1qPP/R2QR2K w - - 2 21",
    "fen": "1k1r3r/ppp2p2/6p1/4P3/8/1P3B2/P2PRqPP/R2Q3K b - - 3 21",
    "preMove": "Re2",
    "solution": [
      "Rxh2+",
      "Kxh2",
      "Rh8+",
      "Bh5",
      "Rxh5#"
    ]
  },
  {
    "id": "03r1E",
    "title": "Knight Fork",
    "theme": "Advantage",
    "difficulty": "Easy",
    "rating": 911,
    "popularity": 100,
    "description": "Win material using a tactical fork.",
    "initialFen": "r3kb1r/ppp1qp1p/2n4p/4p3/8/4PN1P/PPP2PP1/R2QKB1R w KQkq - 0 10",
    "fen": "r3kb1r/ppp1qp1p/2n4p/1B2p3/8/4PN1P/PPP2PP1/R2QK2R b KQkq - 1 10",
    "preMove": "Bb5",
    "solution": [
      "Qb4+",
      "Nd2",
      "Qxb5"
    ]
  },
  {
    "id": "03r6k",
    "title": "Knight Fork",
    "theme": "Crushing",
    "difficulty": "Easy",
    "rating": 929,
    "popularity": 100,
    "description": "Find the strongest continuation. Win material using a tactical fork.",
    "initialFen": "8/5p2/2r3k1/p1P5/5PP1/r3B2P/4K3/2R5 b - - 0 35",
    "fen": "8/5p2/4r1k1/p1P5/5PP1/r3B2P/4K3/2R5 w - - 1 36",
    "preMove": "Re6",
    "solution": [
      "f5+",
      "Kf6",
      "fxe6"
    ]
  },
  {
    "id": "03r8Y",
    "title": "Knight Fork",
    "theme": "Crushing",
    "difficulty": "Medium",
    "rating": 1359,
    "popularity": 100,
    "description": "Find the strongest continuation. Win material using a tactical fork.",
    "initialFen": "8/p1p3rk/1p2p2p/4Q3/5P2/2P2b1K/P1P5/8 w - - 21 35",
    "fen": "8/p1p3rk/1p2Q2p/8/5P2/2P2b1K/P1P5/8 b - - 0 35",
    "preMove": "Qxe6",
    "solution": [
      "Bg4+",
      "Qxg4",
      "Rxg4",
      "Kxg4",
      "Kg6"
    ]
  },
  {
    "id": "03rBl",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 932,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r2q4/ppp3p1/2nk3r/2p1p3/4P1Q1/2NP2P1/PPP5/R4RK1 b - - 3 18",
    "fen": "r7/ppp1q1p1/2nk3r/2p1p3/4P1Q1/2NP2P1/PPP5/R4RK1 w - - 4 19",
    "preMove": "Qe7",
    "solution": [
      "Nb5#"
    ]
  },
  {
    "id": "03rXN",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1107,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "8/5pkp/4p1p1/p2pPPK1/8/1r6/7r/2R5 b - - 0 35",
    "fen": "8/5pkp/4p1p1/3pPPK1/p7/1r6/7r/2R5 w - - 0 36",
    "preMove": "a4",
    "solution": [
      "f6+",
      "Kh8",
      "Rc8#"
    ]
  },
  {
    "id": "03sBK",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 962,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r2r2k1/2R3p1/5pNp/p4N2/Pn2P3/7P/1P4P1/6K1 b - - 3 28",
    "fen": "r2r4/2R3pk/5pNp/p4N2/Pn2P3/7P/1P4P1/6K1 w - - 4 29",
    "preMove": "Kh7",
    "solution": [
      "Rxg7#"
    ]
  },
  {
    "id": "03uml",
    "title": "Discovered Attack",
    "theme": "Crushing",
    "difficulty": "Medium",
    "rating": 1135,
    "popularity": 100,
    "description": "Find the strongest continuation. Unleash a discovered attack.",
    "initialFen": "1r6/1r2p1b1/6pk/ppB5/3P1P1p/P1PKP3/1R6/1R6 w - - 0 33",
    "fen": "1r6/1r2p1b1/6pk/ppB5/2PP1P1p/P2KP3/1R6/1R6 b - - 0 33",
    "preMove": "c4",
    "solution": [
      "bxc4+",
      "Kxc4",
      "Rxb2"
    ]
  },
  {
    "id": "03wOM",
    "title": "Knight Fork",
    "theme": "Advantage",
    "difficulty": "Easy",
    "rating": 888,
    "popularity": 100,
    "description": "Win material using a tactical fork.",
    "initialFen": "r1b2bnr/ppppkBpp/8/8/3nq3/5N2/PPPP1KPP/RNBQ3R b - - 1 8",
    "fen": "r1b2bnr/pppp1kpp/8/8/3nq3/5N2/PPPP1KPP/RNBQ3R w - - 0 9",
    "preMove": "Kxf7",
    "solution": [
      "Ng5+",
      "Kg6",
      "Nxe4"
    ]
  },
  {
    "id": "03xdr",
    "title": "Mate in 1",
    "theme": "CornerMate",
    "difficulty": "Easy",
    "rating": 918,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "3q3r/2pn1pkn/3p4/1p1Pb1N1/1P4QP/3R2P1/5P2/4R1K1 b - - 5 30",
    "fen": "3q3r/2pn1p1n/3p3k/1p1Pb1N1/1P4QP/3R2P1/5P2/4R1K1 w - - 6 31",
    "preMove": "Kh6",
    "solution": [
      "Nxf7#"
    ]
  },
  {
    "id": "03ySy",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 896,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "8/1b1n4/p2p1nQ1/4pP2/4P2k/2pP2P1/2q4P/5R1K b - - 0 33",
    "fen": "8/1b1n4/p2p1nQ1/4pP2/4P3/2pP2Pk/2q4P/5R1K w - - 1 34",
    "preMove": "Kh3",
    "solution": [
      "Qh6+",
      "Nh5",
      "Qxh5#"
    ]
  },
  {
    "id": "03zL4",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Easy",
    "rating": 986,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "8/1rk5/6R1/7p/8/8/6P1/6K1 b - - 0 51",
    "fen": "8/r1k5/6R1/7p/8/8/6P1/6K1 w - - 1 52",
    "preMove": "Ra7",
    "solution": [
      "Rg7+",
      "Kb6",
      "Rxa7"
    ]
  },
  {
    "id": "040Jw",
    "title": "Mate in 2",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 865,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "2kr4/1ppr2pp/p1n2p2/1Bb5/3N2bB/2P1P3/PP3PPP/R3K2R w KQ - 0 16",
    "fen": "2kr4/1ppr2pp/p1N2p2/1Bb5/6bB/2P1P3/PP3PPP/R3K2R b KQ - 0 16",
    "preMove": "Nxc6",
    "solution": [
      "Rd1+",
      "Rxd1",
      "Rxd1#"
    ]
  },
  {
    "id": "041yQ",
    "title": "Deflection",
    "theme": "Crushing",
    "difficulty": "Medium",
    "rating": 1338,
    "popularity": 100,
    "description": "Find the strongest continuation. Deflect the defender.",
    "initialFen": "8/1p3pk1/p1pN1bp1/2P5/1P6/P5P1/3Q1P1K/1q6 b - - 9 40",
    "fen": "8/1p3pk1/p1pN1bp1/2P5/1P6/Pq4P1/3Q1P1K/8 w - - 10 41",
    "preMove": "Qb3",
    "solution": [
      "Ne8+",
      "Kf8",
      "Nxf6"
    ]
  },
  {
    "id": "042nl",
    "title": "Mate in 3",
    "theme": "DoubleCheck",
    "difficulty": "Expert",
    "rating": 1857,
    "popularity": 100,
    "description": "Use a double check to gain the initiative. Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "r3kb1r/5ppp/p4n1q/1p3P2/3BB1Q1/8/PPP3PP/3RR1K1 b kq - 0 18",
    "fen": "r3kb1r/5ppp/p6q/1p3P2/3BB1n1/8/PPP3PP/3RR1K1 w kq - 0 19",
    "preMove": "Nxg4",
    "solution": [
      "Bc6+",
      "Kd8",
      "Bb6+",
      "Kc8",
      "Re8#"
    ]
  },
  {
    "id": "042q7",
    "title": "Mate in 2",
    "theme": "KingsideAttack",
    "difficulty": "Medium",
    "rating": 1390,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r1b2rk1/ppq2pp1/2nb3p/2p5/3pP1n1/P2P1N2/1P3PPP/RNBQRBK1 w - - 4 14",
    "fen": "r1b2rk1/ppq2pp1/2nb3p/2p5/3pP1n1/P2P1N1P/1P3PP1/RNBQRBK1 b - - 0 14",
    "preMove": "h3",
    "solution": [
      "Bh2+",
      "Nxh2",
      "Qxh2#"
    ]
  },
  {
    "id": "043J0",
    "title": "Mate in 3",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1399,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "4R3/3n1pBk/2p4p/1b1p1P1N/8/1P4K1/6PP/5r2 b - - 4 31",
    "fen": "4R3/3n1pBk/2p4p/1b1p1r1N/8/1P4K1/6PP/8 w - - 0 32",
    "preMove": "Rxf5",
    "solution": [
      "Rh8+",
      "Kg6",
      "Rxh6+",
      "Kg5",
      "h4#"
    ]
  },
  {
    "id": "043Mi",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1173,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "4Q3/5rk1/b1p5/4p3/1p2qpP1/1P3n2/KP6/7R b - - 1 36",
    "fen": "4Q3/5rk1/b1p5/3qp3/1p3pP1/1P3n2/KP6/7R w - - 2 37",
    "preMove": "Qd5",
    "solution": [
      "Qh8+",
      "Kg6",
      "Qh6#"
    ]
  },
  {
    "id": "043oQ",
    "title": "Knight Fork",
    "theme": "Advantage",
    "difficulty": "Easy",
    "rating": 926,
    "popularity": 100,
    "description": "Win material using a tactical fork.",
    "initialFen": "6k1/pp2r2p/4P1p1/5n2/8/PB4P1/1P4KP/3R4 w - - 3 41",
    "fen": "6k1/pp2r2p/4P1p1/5n2/6P1/PB6/1P4KP/3R4 b - - 0 41",
    "preMove": "g4",
    "solution": [
      "Ne3+",
      "Kf2",
      "Nxd1+"
    ]
  },
  {
    "id": "046AR",
    "title": "Mate in 2",
    "theme": "Mate",
    "difficulty": "Expert",
    "rating": 2117,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two. Sacrifice material for a tactical gain.",
    "initialFen": "3r1b1r/pp4pk/2p1p2p/5b1B/3Pq3/2P3P1/PP1K3P/R1BQ3R w - - 3 20",
    "fen": "3r1b1r/pp4pk/2p1p2p/5b2/3Pq3/2P2BP1/PP1K3P/R1BQ3R b - - 4 20",
    "preMove": "Bf3",
    "solution": [
      "Rxd4+",
      "cxd4",
      "Bb4#"
    ]
  },
  {
    "id": "046tY",
    "title": "Knight Fork",
    "theme": "Equality",
    "difficulty": "Hard",
    "rating": 1602,
    "popularity": 100,
    "description": "Win material using a tactical fork.",
    "initialFen": "r1b2rk1/3n1p1p/p2p1p2/1p1Nq3/4P3/1PP2Q2/1P3PPP/R4RK1 b - - 0 16",
    "fen": "r4rk1/1b1n1p1p/p2p1p2/1p1Nq3/4P3/1PP2Q2/1P3PPP/R4RK1 w - - 1 17",
    "preMove": "Bb7",
    "solution": [
      "Qg4+",
      "Kh8",
      "Qxd7",
      "Bxd5",
      "exd5"
    ]
  },
  {
    "id": "047ma",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1015,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "4k3/4r3/p1bb1n1Q/2p5/2P4P/P5P1/1P3P2/6K1 w - - 5 40",
    "fen": "4k3/4r3/p1bb1Q2/2p5/2P4P/P5P1/1P3P2/6K1 b - - 0 40",
    "preMove": "Qxf6",
    "solution": [
      "Re1+",
      "Kh2",
      "Rh1#"
    ]
  },
  {
    "id": "0482f",
    "title": "Knight Fork",
    "theme": "Advantage",
    "difficulty": "Easy",
    "rating": 907,
    "popularity": 100,
    "description": "Win material using a tactical fork.",
    "initialFen": "8/p5pk/2R4p/q4p2/P7/4P2P/5PP1/R5K1 w - - 2 32",
    "fen": "8/p5pk/2R4p/q4p2/P7/4P2P/5PPK/R7 b - - 3 32",
    "preMove": "Kh2",
    "solution": [
      "Qe5+",
      "g3",
      "Qxa1"
    ]
  },
  {
    "id": "04990",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1016,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r1r3k1/p2R1pp1/1p2p2p/4q3/8/4B3/P1P3PP/3R1Q1K b - - 1 26",
    "fen": "r1r3k1/p2R1pp1/1p2p2p/8/8/4q3/P1P3PP/3R1Q1K w - - 0 27",
    "preMove": "Qxe3",
    "solution": [
      "Qxf7+",
      "Kh8",
      "Qxg7#"
    ]
  },
  {
    "id": "049rt",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Medium",
    "rating": 1162,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "4r1k1/1bqnp1bp/3pQrpN/p1pP4/1pP2P2/4B1NP/PP4P1/1R3RK1 b - - 11 23",
    "fen": "4rk2/1bqnp1bp/3pQrpN/p1pP4/1pP2P2/4B1NP/PP4P1/1R3RK1 w - - 12 24",
    "preMove": "Kf8",
    "solution": [
      "Qg8#"
    ]
  },
  {
    "id": "04BBn",
    "title": "Double Check",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 1436,
    "popularity": 100,
    "description": "Lure the opponent's piece onto an unfavorable square. Find the strongest continuation. Use a double check to gain the initiative.",
    "initialFen": "r5r1/1p1k1p2/p3b2q/3Bb3/8/P2Q3P/1P3PP1/R4RK1 b - - 0 24",
    "fen": "r5r1/1p1k1p2/p3b3/3Bb3/8/P2Q3q/1P3PP1/R4RK1 w - - 0 25",
    "preMove": "Qxh3",
    "solution": [
      "Bxe6+",
      "Kxe6",
      "Qxh3+"
    ]
  },
  {
    "id": "04BFR",
    "title": "Mate in 1",
    "theme": "CornerMate",
    "difficulty": "Easy",
    "rating": 852,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "3r3k/5p1p/p6b/4N2P/3NP3/3Kn3/P1r5/6R1 b - - 4 31",
    "fen": "3r3k/5p1p/p6b/4N2P/3NP3/3Kn3/r7/6R1 w - - 0 32",
    "preMove": "Rxa2",
    "solution": [
      "Nxf7#"
    ]
  },
  {
    "id": "04BZg",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1005,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "8/4kppp/pp1Rp3/2p5/P3KP2/2P3rP/1P6/3B4 w - - 8 33",
    "fen": "8/4kppp/pR2p3/2p5/P3KP2/2P3rP/1P6/3B4 b - - 0 33",
    "preMove": "Rxb6",
    "solution": [
      "f5+",
      "Ke5",
      "Re3#"
    ]
  },
  {
    "id": "04DmI",
    "title": "Attraction",
    "theme": "Attraction",
    "difficulty": "Expert",
    "rating": 2131,
    "popularity": 100,
    "description": "Lure the opponent's piece onto an unfavorable square. Find the strongest continuation. Sacrifice material for a tactical gain.",
    "initialFen": "4k3/pbp1r3/1p3qnQ/4p1N1/2Pn1P2/8/PP4PP/R4RK1 w - - 0 28",
    "fen": "4k3/pbp1r3/1p3qnQ/4P1N1/2Pn4/8/PP4PP/R4RK1 b - - 0 28",
    "preMove": "fxe5",
    "solution": [
      "Ne2+",
      "Kh1",
      "Bxg2+",
      "Kxg2",
      "Ngf4+"
    ]
  },
  {
    "id": "04EKu",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Medium",
    "rating": 1034,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "8/1p3k2/p2p1np1/3P4/1P2BP2/4K3/P7/8 w - - 4 38",
    "fen": "8/1p3k2/p2p1np1/3P4/1P2BP2/5K2/P7/8 b - - 5 38",
    "preMove": "Kf3",
    "solution": [
      "Nxe4",
      "Kxe4",
      "Kf6"
    ]
  },
  {
    "id": "04FyS",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1054,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "3k4/1ppn1ppp/p7/3N4/1QP5/P7/KP5P/7q b - - 5 24",
    "fen": "3k4/1ppn1ppp/p7/3N4/1QP5/P7/KP5q/8 w - - 0 25",
    "preMove": "Qxh2",
    "solution": [
      "Qe7+",
      "Kc8",
      "Qe8#"
    ]
  },
  {
    "id": "04GQG",
    "title": "Knight Fork",
    "theme": "Crushing",
    "difficulty": "Medium",
    "rating": 1341,
    "popularity": 100,
    "description": "Find the strongest continuation. Win material using a tactical fork.",
    "initialFen": "4r3/p1k3p1/P1p5/1p2b3/8/1K1Q3P/5rP1/3RR2q b - - 3 46",
    "fen": "4r3/p1k3p1/P1p5/1p2b3/8/1K1Q3P/5rq1/3RR3 w - - 0 47",
    "preMove": "Qxg2",
    "solution": [
      "Qd7+",
      "Kb6",
      "Qb7+",
      "Ka5",
      "Ra1+"
    ]
  },
  {
    "id": "04GnK",
    "title": "Knight Fork",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1040,
    "popularity": 100,
    "description": "Win material using a tactical fork.",
    "initialFen": "5bk1/5R2/6pp/2N5/1p6/1P3N1P/1r3PP1/6K1 w - - 1 36",
    "fen": "5bk1/2R5/6pp/2N5/1p6/1P3N1P/1r3PP1/6K1 b - - 2 36",
    "preMove": "Rc7",
    "solution": [
      "Rb1+",
      "Kh2",
      "Bd6+",
      "g3",
      "Bxc7"
    ]
  },
  {
    "id": "04HJt",
    "title": "Knight Fork",
    "theme": "Equality",
    "difficulty": "Expert",
    "rating": 1817,
    "popularity": 100,
    "description": "Win material using a tactical fork.",
    "initialFen": "rnbq3r/ppp2kpp/3b4/3p3Q/4n3/3B4/PPPP1PPP/RNB1K2R b KQ - 1 7",
    "fen": "rnbq3r/ppp2k1p/3b2p1/3p3Q/4n3/3B4/PPPP1PPP/RNB1K2R w KQ - 0 8",
    "preMove": "g6",
    "solution": [
      "Qxd5+",
      "Be6",
      "Qxe4"
    ]
  },
  {
    "id": "04Hd0",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Medium",
    "rating": 1364,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Exploit the pinned piece.",
    "initialFen": "8/1p4k1/p1q2p2/2b5/7p/6rP/PP1BQ1P1/R3R2K w - - 1 34",
    "fen": "8/1p4k1/p1q2p2/2b5/7p/2B3rP/PP2Q1P1/R3R2K b - - 2 34",
    "preMove": "Bc3",
    "solution": [
      "Rxh3#"
    ]
  },
  {
    "id": "04Huo",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1151,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "4q1k1/pb5p/1p3Qp1/2p2p2/2P5/1P1P3P/1BP3P1/7K b - - 1 27",
    "fen": "6k1/pb5p/1pq2Qp1/2p2p2/2P5/1P1P3P/1BP3P1/7K w - - 2 28",
    "preMove": "Qc6",
    "solution": [
      "Qg7#"
    ]
  },
  {
    "id": "04JNu",
    "title": "Pin Tactic",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1281,
    "popularity": 100,
    "description": "Clear the critical square. Exploit the pinned piece.",
    "initialFen": "r6k/pbqn2p1/2p2b1p/1p3Q2/3P4/8/PPP1RPPP/4R1K1 b - - 7 23",
    "fen": "r6k/pbqn2p1/5b1p/1pp2Q2/3P4/8/PPP1RPPP/4R1K1 w - - 0 24",
    "preMove": "c5",
    "solution": [
      "Re8+",
      "Nf8",
      "Rxa8",
      "Bxa8",
      "Re8"
    ]
  },
  {
    "id": "04KbO",
    "title": "Knight Fork",
    "theme": "Crushing",
    "difficulty": "Medium",
    "rating": 1015,
    "popularity": 100,
    "description": "Find the strongest continuation. Win material using a tactical fork.",
    "initialFen": "2N5/8/1P2p2p/3b1k2/5p2/8/5K1P/8 b - - 1 48",
    "fen": "2N5/8/1Pb1p2p/5k2/5p2/8/5K1P/8 w - - 2 49",
    "preMove": "Bc6",
    "solution": [
      "Ne7+",
      "Ke5",
      "Nxc6+"
    ]
  },
  {
    "id": "04M9E",
    "title": "Knight Fork",
    "theme": "AdvancedPawn",
    "difficulty": "Easy",
    "rating": 870,
    "popularity": 100,
    "description": "Win material using a tactical fork.",
    "initialFen": "4r1k1/1p3q1p/p3NPpP/3p4/4bR2/2Q5/P4P2/6K1 b - - 0 33",
    "fen": "4r1k1/1p5p/p3qPpP/3p4/4bR2/2Q5/P4P2/6K1 w - - 0 34",
    "preMove": "Qxe6",
    "solution": [
      "f7+",
      "Qxf7",
      "Rxf7"
    ]
  },
  {
    "id": "04Scy",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1212,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "8/1p4pp/8/1bP3k1/4rp2/pBB5/P2R2PP/6K1 w - - 2 40",
    "fen": "8/1p4Bp/8/1bP3k1/4rp2/pB6/P2R2PP/6K1 b - - 0 40",
    "preMove": "Bxg7",
    "solution": [
      "Re1+",
      "Kf2",
      "Rf1#"
    ]
  },
  {
    "id": "04SkJ",
    "title": "Mate in 1",
    "theme": "KingsideAttack",
    "difficulty": "Easy",
    "rating": 947,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r4k2/ppp3p1/3p1n2/2b3P1/2B1r2P/1PP5/PB4P1/R4R1K w - - 3 29",
    "fen": "r4k2/ppp3p1/3p1P2/2b5/2B1r2P/1PP5/PB4P1/R4R1K b - - 0 29",
    "preMove": "gxf6",
    "solution": [
      "Rxh4#"
    ]
  },
  {
    "id": "04U7q",
    "title": "Promotion",
    "theme": "AdvancedPawn",
    "difficulty": "Hard",
    "rating": 1602,
    "popularity": 100,
    "description": "Find the strongest continuation. Promote your pawn.",
    "initialFen": "7k/6p1/3P3p/8/1p6/4KB2/rP4PP/8 b - - 0 34",
    "fen": "7k/r5p1/3P3p/8/1p6/4KB2/1P4PP/8 w - - 1 35",
    "preMove": "Ra7",
    "solution": [
      "Bc6",
      "Ra6",
      "d7",
      "Rxc6",
      "d8=Q+"
    ]
  },
  {
    "id": "04Vzh",
    "title": "Knight Fork",
    "theme": "Crushing",
    "difficulty": "Easy",
    "rating": 927,
    "popularity": 100,
    "description": "Find the strongest continuation. Win material using a tactical fork.",
    "initialFen": "1r6/2q2pkp/p3pNp1/2p5/2Pb4/P4Q1P/1R3PP1/4R1K1 b - - 0 35",
    "fen": "8/2q2pkp/p3pNp1/2p5/2Pb4/P4Q1P/1r3PP1/4R1K1 w - - 0 36",
    "preMove": "Rxb2",
    "solution": [
      "Ne8+",
      "Kg8",
      "Nxc7"
    ]
  },
  {
    "id": "04XVt",
    "title": "Promotion",
    "theme": "AdvancedPawn",
    "difficulty": "Medium",
    "rating": 1322,
    "popularity": 100,
    "description": "Find the strongest continuation. Unleash a discovered attack. Promote your pawn.",
    "initialFen": "Rr3r1k/1P5p/1p6/1PbB4/2Pq4/4pPP1/Q3R2P/6K1 w - - 3 31",
    "fen": "Rr3r1k/1P5p/1p6/1PbB4/2Pq4/4pPP1/1Q2R2P/6K1 b - - 4 31",
    "preMove": "Qb2",
    "solution": [
      "Qxb2",
      "Rxb2",
      "e2+",
      "Kg2",
      "e1=Q"
    ]
  },
  {
    "id": "04Xf7",
    "title": "Chess Puzzle",
    "theme": "Advantage",
    "difficulty": "Expert",
    "rating": 1963,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "rnkq1bnr/pbp3pp/1p6/4Q3/2B1P3/2N5/PPPP2PP/R1B2RK1 b - - 2 10",
    "fen": "r1kq1bnr/pbp3pp/1pn5/4Q3/2B1P3/2N5/PPPP2PP/R1B2RK1 w - - 3 11",
    "preMove": "Nc6",
    "solution": [
      "Qf5+",
      "Kb8",
      "Qxf8"
    ]
  },
  {
    "id": "04Y9V",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1103,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "1r6/8/p2p2p1/2p1q1P1/4P1k1/P5RR/2P3PK/8 b - - 8 37",
    "fen": "1r6/8/p2p2p1/2p1q1P1/4Pk2/P5RR/2P3PK/8 w - - 9 38",
    "preMove": "Kf4",
    "solution": [
      "Rh4#"
    ]
  },
  {
    "id": "04YSt",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 880,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r1b2r2/pp4kp/2p3p1/4p3/3nB3/3PN3/PPP3PP/R1B3KR w - - 1 16",
    "fen": "r1b2r2/pp4kp/2p3p1/4p3/3nB3/3PN3/PPPB2PP/R5KR b - - 2 16",
    "preMove": "Bd2",
    "solution": [
      "Ne2#"
    ]
  },
  {
    "id": "04YfJ",
    "title": "Mate in 1",
    "theme": "KingsideAttack",
    "difficulty": "Easy",
    "rating": 977,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "2k2r1r/pbpp2q1/1p1bppNp/8/3P4/2PB4/PP1N2PP/R2Q1RK1 w - - 2 16",
    "fen": "2k2r1N/pbpp2q1/1p1bpp1p/8/3P4/2PB4/PP1N2PP/R2Q1RK1 b - - 0 16",
    "preMove": "Nxh8",
    "solution": [
      "Qxg2#"
    ]
  },
  {
    "id": "04ZRK",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Expert",
    "rating": 2053,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "5B2/R7/6p1/7p/4k3/p4p1P/r5PK/8 w - - 0 62",
    "fen": "5B2/8/6p1/7p/4k3/R4p1P/r5PK/8 b - - 0 62",
    "preMove": "Rxa3",
    "solution": [
      "Rxa3",
      "gxf3+",
      "Rxf3"
    ]
  },
  {
    "id": "04ZdZ",
    "title": "Deflection",
    "theme": "Crushing",
    "difficulty": "Medium",
    "rating": 1303,
    "popularity": 100,
    "description": "Find the strongest continuation. Deflect the defender.",
    "initialFen": "6k1/p4ppp/1q2p3/1P1pP3/r2PbQ2/7P/5BP1/2R3K1 b - - 1 30",
    "fen": "6k1/p4pp1/1q2p2p/1P1pP3/r2PbQ2/7P/5BP1/2R3K1 w - - 0 31",
    "preMove": "h6",
    "solution": [
      "Rc8+",
      "Kh7",
      "Qxf7",
      "Ra1+",
      "Kh2"
    ]
  },
  {
    "id": "04ZkB",
    "title": "Chess Puzzle",
    "theme": "AdvancedPawn",
    "difficulty": "Medium",
    "rating": 1196,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "5Q2/3q3k/p1rP1pp1/1p2b2p/1B6/P6P/6P1/3R3K b - - 4 34",
    "fen": "5Q2/3q3k/2rP1pp1/pp2b2p/1B6/P6P/6P1/3R3K w - - 0 35",
    "preMove": "a5",
    "solution": [
      "Qe7+",
      "Qxe7",
      "dxe7"
    ]
  },
  {
    "id": "04bXp",
    "title": "Mate in 2",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 888,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "5kn1/1p5Q/1q4p1/p2pP3/2p5/2P5/1PN2r2/2K2R1R w - - 0 33",
    "fen": "5kn1/1p5Q/1q4p1/p2pP3/2pN4/2P5/1P3r2/2K2R1R b - - 1 33",
    "preMove": "Nd4",
    "solution": [
      "Qxb2+",
      "Kd1",
      "Qa1#"
    ]
  },
  {
    "id": "04cdQ",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 856,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "6k1/1p4p1/p2b3p/8/P2BR3/2P4P/3r1PP1/6K1 w - - 2 26",
    "fen": "6k1/1p4p1/p2bR2p/8/P2B4/2P4P/3r1PP1/6K1 b - - 3 26",
    "preMove": "Re6",
    "solution": [
      "Rd1+",
      "Re1",
      "Rxe1#"
    ]
  },
  {
    "id": "04e5c",
    "title": "Knight Fork",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1393,
    "popularity": 100,
    "description": "Lure the opponent's piece onto an unfavorable square. Find the strongest continuation. Win material using a tactical fork. Sacrifice material for a tactical gain.",
    "initialFen": "8/1R1k2pp/3P4/8/8/3q1N1P/6PK/8 b - - 3 31",
    "fen": "8/1R4pp/3k4/8/8/3q1N1P/6PK/8 w - - 0 32",
    "preMove": "Kxd6",
    "solution": [
      "Rd7+",
      "Kxd7",
      "Ne5+",
      "Kc8",
      "Nxd3"
    ]
  },
  {
    "id": "04eQo",
    "title": "Chess Puzzle",
    "theme": "Advantage",
    "difficulty": "Easy",
    "rating": 949,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "8/pp2r1p1/2pkP1p1/4p3/1PP1K2P/5PPB/P7/8 b - - 0 31",
    "fen": "8/p3r1p1/1ppkP1p1/4p3/1PP1K2P/5PPB/P7/8 w - - 0 32",
    "preMove": "b6",
    "solution": [
      "c5+",
      "bxc5",
      "bxc5+",
      "Kxc5",
      "Kxe5"
    ]
  },
  {
    "id": "04eww",
    "title": "Chess Puzzle",
    "theme": "Advantage",
    "difficulty": "Easy",
    "rating": 884,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "r1b1k2r/ppQ2ppp/2n1pn2/8/2Nq4/3B4/PP3PPP/R3K1NR b KQkq - 1 11",
    "fen": "r1b1k2r/ppQ2ppp/2n1pn2/8/2N5/3q4/PP3PPP/R3K1NR w KQkq - 0 12",
    "preMove": "Qxd3",
    "solution": [
      "Nd6+",
      "Qxd6",
      "Qxd6"
    ]
  },
  {
    "id": "04f43",
    "title": "Knight Fork",
    "theme": "Crushing",
    "difficulty": "Easy",
    "rating": 865,
    "popularity": 100,
    "description": "Find the strongest continuation. Win material using a tactical fork.",
    "initialFen": "8/7p/8/5k2/8/2KbpNP1/7P/8 b - - 3 56",
    "fen": "8/7p/8/5k2/8/2K1pNP1/4b2P/8 w - - 4 57",
    "preMove": "Be2",
    "solution": [
      "Nd4+",
      "Kf6",
      "Nxe2"
    ]
  },
  {
    "id": "04fG0",
    "title": "Mate in 2",
    "theme": "Deflection",
    "difficulty": "Medium",
    "rating": 1095,
    "popularity": 100,
    "description": "Deflect the defender. Unleash a discovered attack. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "2k4r/pp1r1p1p/2pb1p2/8/7N/2p3P1/PPP1P2P/2KR1B1R w - - 0 17",
    "fen": "2k4r/pp1r1p1p/2pb1p2/8/7N/2P3P1/P1P1P2P/2KR1B1R b - - 0 17",
    "preMove": "bxc3",
    "solution": [
      "Ba3+",
      "Kb1",
      "Rxd1#"
    ]
  },
  {
    "id": "04fJP",
    "title": "Knight Fork",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1257,
    "popularity": 100,
    "description": "Win material using a tactical fork.",
    "initialFen": "r5k1/4bppp/ppN1b3/2pr4/4N3/P3R3/1P3PPP/4R1K1 b - - 8 23",
    "fen": "r5k1/5ppp/ppN1bb2/2pr4/4N3/P3R3/1P3PPP/4R1K1 w - - 9 24",
    "preMove": "Bf6",
    "solution": [
      "Nxf6+",
      "gxf6",
      "Ne7+",
      "Kf8",
      "Nxd5"
    ]
  },
  {
    "id": "04fWN",
    "title": "Deflection",
    "theme": "Crushing",
    "difficulty": "Medium",
    "rating": 1280,
    "popularity": 100,
    "description": "Find the strongest continuation. Deflect the defender.",
    "initialFen": "1r2kb1r/3q1ppp/1B2pn2/8/8/5Q2/PP3PPP/3R1RK1 b k - 6 21",
    "fen": "1r2kb1r/1q3ppp/1B2pn2/8/8/5Q2/PP3PPP/3R1RK1 w k - 7 22",
    "preMove": "Qb7",
    "solution": [
      "Rd8+",
      "Rxd8",
      "Qxb7"
    ]
  },
  {
    "id": "04flr",
    "title": "Mate in 2",
    "theme": "Mate",
    "difficulty": "Medium",
    "rating": 1290,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "3r4/1p2kp2/3pbn1p/1B5q/1Q3B2/2P2P1p/PP4P1/3R2K1 b - - 3 25",
    "fen": "3r4/1p2kp2/3pbn1p/1B5q/1Q3B2/2P2P2/PP4p1/3R2K1 w - - 0 26",
    "preMove": "hxg2",
    "solution": [
      "Bxd6+",
      "Rxd6",
      "Qxd6#"
    ]
  },
  {
    "id": "04g2P",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Medium",
    "rating": 1175,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "4k3/p5R1/4pp1p/3p4/3P3P/1Pq2P2/K5n1/6R1 b - - 6 36",
    "fen": "4k3/p5R1/4pp1p/3p4/3P3P/1Pq1nP2/K7/6R1 w - - 7 37",
    "preMove": "Ne3",
    "solution": [
      "Rg8+",
      "Ke7",
      "R1g7+",
      "Kd6",
      "Rd8+",
      "Kc6",
      "Rc8+"
    ]
  },
  {
    "id": "04gFv",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Medium",
    "rating": 1219,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "3rr3/pp4kp/2p3p1/2q2p2/2P1p3/1P2P2P/PQ3PP1/R2R2K1 b - - 1 21",
    "fen": "3rr3/pp4kp/2p3p1/4qp2/2P1p3/1P2P2P/PQ3PP1/R2R2K1 w - - 2 22",
    "preMove": "Qe5",
    "solution": [
      "Qxe5+",
      "Rxe5",
      "Rxd8"
    ]
  },
  {
    "id": "04gjJ",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Medium",
    "rating": 1254,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "rnbqr1k1/ppp2pp1/3p4/b2nP1NQ/3P4/P7/1P1N1PPP/R1B1K2R b KQ - 3 12",
    "fen": "rnbqrk2/ppp2pp1/3p4/b2nP1NQ/3P4/P7/1P1N1PPP/R1B1K2R w KQ - 4 13",
    "preMove": "Kf8",
    "solution": [
      "Qxf7#"
    ]
  },
  {
    "id": "04hkC",
    "title": "Mate in 1",
    "theme": "KingsideAttack",
    "difficulty": "Medium",
    "rating": 1088,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r1b2rk1/ppb2ppp/2nq1n2/3p4/3N4/1PN1P3/PB2BPPP/2RQ1RK1 w - - 5 13",
    "fen": "r1b2rk1/ppb2ppp/2nq1n2/1N1p4/3N4/1P2P3/PB2BPPP/2RQ1RK1 b - - 6 13",
    "preMove": "Ncb5",
    "solution": [
      "Qxh2#"
    ]
  },
  {
    "id": "04jaE",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1163,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "5K2/pp2R1rk/1bp5/1r3p2/5B2/2P3P1/P7/4R3 b - - 2 37",
    "fen": "5K2/pp2R1rk/2p5/1rb2p2/5B2/2P3P1/P7/4R3 w - - 3 38",
    "preMove": "Bc5",
    "solution": [
      "Rh1+",
      "Kg6",
      "Rh6#"
    ]
  },
  {
    "id": "04jc7",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Hard",
    "rating": 1797,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "4r2k/p7/1p2PqP1/2p4p/4Q1P1/8/5RKP/8 b - - 0 32",
    "fen": "4r2k/p7/1p2q1P1/2p4p/4Q1P1/8/5RKP/8 w - - 0 33",
    "preMove": "Qxe6",
    "solution": [
      "Rf8+",
      "Kg7",
      "Rxe8",
      "Qxe4+",
      "Rxe4"
    ]
  },
  {
    "id": "04l90",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 909,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r1br2Qk/2qnb1pp/2p2p1N/p1p5/2P1NP2/2BP4/PP4PP/R4R1K b - - 6 20",
    "fen": "r1b3rk/2qnb1pp/2p2p1N/p1p5/2P1NP2/2BP4/PP4PP/R4R1K w - - 0 21",
    "preMove": "Rxg8",
    "solution": [
      "Nf7#"
    ]
  },
  {
    "id": "04nHB",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 840,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "6k1/p4ppp/2p4q/3p4/3P4/2P2BQ1/Pr3P1p/4R2K b - - 0 27",
    "fen": "6k1/p4ppp/2p5/3p4/3P4/2P2BQ1/Pr1q1P1p/4R2K w - - 1 28",
    "preMove": "Qd2",
    "solution": [
      "Re8#"
    ]
  },
  {
    "id": "04oxm",
    "title": "Mate in 2",
    "theme": "KingsideAttack",
    "difficulty": "Medium",
    "rating": 1086,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "3rr3/p1p2kpp/1pn5/1QP2P2/1P6/3b2R1/P2q1BPP/4R1K1 w - - 1 29",
    "fen": "3rr3/p1p2kpp/1pQ5/2P2P2/1P6/3b2R1/P2q1BPP/4R1K1 b - - 0 29",
    "preMove": "Qxc6",
    "solution": [
      "Rxe1+",
      "Bxe1",
      "Qxe1#"
    ]
  },
  {
    "id": "04p2r",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 938,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "4Q3/8/5p2/5kp1/8/6P1/5r1K/8 w - - 1 48",
    "fen": "4Q3/8/5p2/5kp1/8/6PK/5r2/8 b - - 2 48",
    "preMove": "Kh3",
    "solution": [
      "g4+",
      "Kh4",
      "Rh2#"
    ]
  },
  {
    "id": "04pwH",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1303,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "7Q/4k1p1/p7/4r3/8/3q1b2/1P3PPP/R4RK1 w - - 0 39",
    "fen": "7Q/4k1p1/p7/4r3/8/3q1P2/1P3P1P/R4RK1 b - - 0 39",
    "preMove": "gxf3",
    "solution": [
      "Rg5+",
      "Kh1",
      "Qxf3#"
    ]
  },
  {
    "id": "04q5c",
    "title": "Deflection",
    "theme": "Crushing",
    "difficulty": "Hard",
    "rating": 1570,
    "popularity": 100,
    "description": "Find the strongest continuation. Deflect the defender.",
    "initialFen": "6r1/4kB2/3p1p2/2q1pP2/1p2b3/pQ4P1/PPP5/1K1R4 b - - 0 33",
    "fen": "8/4kB2/3p1p2/2q1pP2/1p2b3/pQ4r1/PPP5/1K1R4 w - - 0 34",
    "preMove": "Rxg3",
    "solution": [
      "Qe6+",
      "Kd8",
      "Rxd6+",
      "Qxd6",
      "Qxd6+"
    ]
  },
  {
    "id": "04qv5",
    "title": "Knight Fork",
    "theme": "Advantage",
    "difficulty": "Easy",
    "rating": 903,
    "popularity": 100,
    "description": "Win material using a tactical fork.",
    "initialFen": "8/pp3kp1/2p4p/3p1Pn1/4r1P1/3K1N2/PPP2RP1/8 b - - 10 29",
    "fen": "8/pp3kp1/2p4p/3p1Pn1/6r1/3K1N2/PPP2RP1/8 w - - 0 30",
    "preMove": "Rxg4",
    "solution": [
      "Ne5+",
      "Kg8",
      "Nxg4"
    ]
  },
  {
    "id": "04rB1",
    "title": "Promotion",
    "theme": "AdvancedPawn",
    "difficulty": "Hard",
    "rating": 1775,
    "popularity": 100,
    "description": "Find the strongest continuation. Promote your pawn. Sacrifice material for a tactical gain.",
    "initialFen": "8/1r6/N7/1B2k2p/1KP2pp1/8/6PP/8 w - - 0 44",
    "fen": "8/1r6/N7/1BP1k2p/1K3pp1/8/6PP/8 b - - 0 44",
    "preMove": "c5",
    "solution": [
      "f3",
      "c6",
      "Rxb5+",
      "Kxb5",
      "f2",
      "Kb6",
      "f1=Q"
    ]
  },
  {
    "id": "04rtY",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Hard",
    "rating": 1443,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "2kr3r/p1p2p1p/3b1q2/1QP3p1/1P6/P3P1P1/5P1P/2B2RK1 b - - 0 21",
    "fen": "2kr3r/p1p1bp1p/5q2/1QP3p1/1P6/P3P1P1/5P1P/2B2RK1 w - - 1 22",
    "preMove": "Be7",
    "solution": [
      "c6",
      "Qxc6",
      "Qxc6"
    ]
  },
  {
    "id": "04stn",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 937,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "5rk1/R5pp/1p1NN1n1/8/8/2n5/7P/6K1 b - - 1 30",
    "fen": "1r4k1/R5pp/1p1NN1n1/8/8/2n5/7P/6K1 w - - 2 31",
    "preMove": "Rb8",
    "solution": [
      "Rxg7+",
      "Kh8",
      "Nf7#"
    ]
  },
  {
    "id": "04tah",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 816,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "1k4rr/ppp5/8/3pRn2/3P3p/2P2PqP/PPQ3P1/R5K1 w - - 0 24",
    "fen": "1k4rr/ppp5/8/3pRQ2/3P3p/2P2PqP/PP4P1/R5K1 b - - 0 24",
    "preMove": "Qxf5",
    "solution": [
      "Qxg2#"
    ]
  },
  {
    "id": "04ttV",
    "title": "Mate in 1",
    "theme": "BishopEndgame",
    "difficulty": "Easy",
    "rating": 917,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "8/1b6/2p5/3p1Bp1/2kP2P1/2P5/2K5/8 b - - 9 58",
    "fen": "8/1b6/8/2pp1Bp1/2kP2P1/2P5/2K5/8 w - - 0 59",
    "preMove": "c5",
    "solution": [
      "Bd3#"
    ]
  },
  {
    "id": "04unO",
    "title": "Mate in 1",
    "theme": "KingsideAttack",
    "difficulty": "Easy",
    "rating": 834,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "rn2k1r1/pp3p2/2pbp3/7p/3P3q/4BB1P/PPP2PK1/2RQ1R2 w q - 2 21",
    "fen": "rn2k1r1/pp3p2/2pbp3/7p/3P3q/4BB1P/PPP2P2/2RQ1R1K b q - 3 21",
    "preMove": "Kh1",
    "solution": [
      "Qxh3#"
    ]
  },
  {
    "id": "04v7W",
    "title": "Mate in 2",
    "theme": "KingsideAttack",
    "difficulty": "Medium",
    "rating": 1122,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r3r1k1/pp3pp1/2Pb3p/8/5q2/1BN2n1P/PP2QPP1/R3R1K1 w - - 1 18",
    "fen": "r3r1k1/pp3pp1/2Pb3p/8/5q2/1BN2Q1P/PP3PP1/R3R1K1 b - - 0 18",
    "preMove": "Qxf3",
    "solution": [
      "Qh2+",
      "Kf1",
      "Qh1#"
    ]
  },
  {
    "id": "04vCK",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Medium",
    "rating": 1074,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "8/pp3p2/2p5/4P3/1PPP1pk1/3K4/P7/8 w - - 0 34",
    "fen": "8/pp3p2/2p5/4P3/1PPP1pk1/8/P3K3/8 b - - 1 34",
    "preMove": "Ke2",
    "solution": [
      "f3+",
      "Kf2",
      "Kf4"
    ]
  },
  {
    "id": "04vLu",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1114,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "3r2k1/p4ppp/1qp5/3b4/3P4/1P2RN2/P3QPPP/6K1 b - - 2 20",
    "fen": "3r2k1/p4ppp/1qp5/8/3P4/1P2Rb2/P3QPPP/6K1 w - - 0 21",
    "preMove": "Bxf3",
    "solution": [
      "Re8+",
      "Rxe8",
      "Qxe8#"
    ]
  },
  {
    "id": "04wVb",
    "title": "Promotion",
    "theme": "AdvancedPawn",
    "difficulty": "Easy",
    "rating": 829,
    "popularity": 100,
    "description": "Find the strongest continuation. Promote your pawn.",
    "initialFen": "8/2R3pp/1K6/6k1/3P4/8/2r5/8 b - - 4 43",
    "fen": "8/2r3pp/1K6/6k1/3P4/8/8/8 w - - 0 44",
    "preMove": "Rxc7",
    "solution": [
      "Kxc7",
      "Kf4",
      "d5",
      "g5",
      "d6",
      "g4",
      "d7",
      "g3",
      "d8=Q"
    ]
  },
  {
    "id": "04wkA",
    "title": "Deflection",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1283,
    "popularity": 100,
    "description": "Deflect the defender.",
    "initialFen": "1k6/1pq2pp1/p5p1/3Q2P1/7r/4R3/PPP5/2K5 b - - 1 26",
    "fen": "1k6/1pq2pp1/p5p1/3Q2P1/8/4R3/PPP4r/2K5 w - - 2 27",
    "preMove": "Rh2",
    "solution": [
      "Re8+",
      "Ka7",
      "Qd4+",
      "Qb6",
      "Ra8+",
      "Kxa8",
      "Qxb6",
      "Rh1+",
      "Kd2"
    ]
  },
  {
    "id": "04x8i",
    "title": "Mate in 3",
    "theme": "BackRankMate",
    "difficulty": "Medium",
    "rating": 1146,
    "popularity": 100,
    "description": "Exploit the weak back rank. Deflect the defender. Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "2k2b1r/pppr2p1/5p1p/3n4/2B5/2BP2P1/PPP4P/2K1RR2 b - - 1 19",
    "fen": "2k2b1r/pppr2p1/5p1p/8/2B5/2nP2P1/PPP4P/2K1RR2 w - - 0 20",
    "preMove": "Nxc3",
    "solution": [
      "Re8+",
      "Rd8",
      "Be6+",
      "Kb8",
      "Rxd8#"
    ]
  },
  {
    "id": "04xFI",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1288,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "1k5r/pp3p2/4pR2/3pP1p1/1Q1P4/PP2q1K1/3N4/8 w - - 0 28",
    "fen": "1k5r/pp3p2/4p3/3pP1p1/1Q1P4/PP2qRK1/3N4/8 b - - 1 28",
    "preMove": "Rf3",
    "solution": [
      "Qg1#"
    ]
  },
  {
    "id": "04xNg",
    "title": "Mate in 2",
    "theme": "Mate",
    "difficulty": "Medium",
    "rating": 1105,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r3k2r/5p2/b3pQ1p/p2pP1p1/8/PBP5/2P3qP/2KR4 b kq - 1 27",
    "fen": "r3kr2/5p2/b3pQ1p/p2pP1p1/8/PBP5/2P3qP/2KR4 w q - 2 28",
    "preMove": "Rf8",
    "solution": [
      "Ba4+",
      "Bb5",
      "Bxb5#"
    ]
  },
  {
    "id": "04xSr",
    "title": "Skewer",
    "theme": "Crushing",
    "difficulty": "Easy",
    "rating": 883,
    "popularity": 100,
    "description": "Find the strongest continuation. Deflect the defender. Use a skewer to win material.",
    "initialFen": "8/5k2/4r3/3K4/8/8/8/7R b - - 20 64",
    "fen": "8/4k3/4r3/3K4/8/8/8/7R w - - 21 65",
    "preMove": "Ke7",
    "solution": [
      "Rh7+",
      "Kf6",
      "Rh6+",
      "Kg5",
      "Rxe6"
    ]
  },
  {
    "id": "04y7q",
    "title": "Knight Fork",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1036,
    "popularity": 100,
    "description": "Win material using a tactical fork.",
    "initialFen": "6R1/2kb2pp/8/1p2r3/7P/2N5/6PK/8 b - - 4 57",
    "fen": "6R1/2kbr1pp/8/1p6/7P/2N5/6PK/8 w - - 5 58",
    "preMove": "Re7",
    "solution": [
      "Nd5+",
      "Kd6",
      "Nxe7"
    ]
  },
  {
    "id": "04zy6",
    "title": "Mate in 2",
    "theme": "Mate",
    "difficulty": "Medium",
    "rating": 1029,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r1bkr3/pp3pbp/2p1pnp1/8/2B1P3/2B5/PPP2PPP/RN1R2K1 b - - 3 11",
    "fen": "r1b1r3/pp2kpbp/2p1pnp1/8/2B1P3/2B5/PPP2PPP/RN1R2K1 w - - 4 12",
    "preMove": "Ke7",
    "solution": [
      "Bb4+",
      "c5",
      "Bxc5#"
    ]
  },
  {
    "id": "0503q",
    "title": "Knight Fork",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1031,
    "popularity": 100,
    "description": "Win material using a tactical fork.",
    "initialFen": "R7/1p2rpkb/p2N2p1/8/2P5/8/P4PK1/8 b - - 1 31",
    "fen": "R7/1pr2pkb/p2N2p1/8/2P5/8/P4PK1/8 w - - 2 32",
    "preMove": "Rc7",
    "solution": [
      "Ne8+",
      "Kh6",
      "Nxc7"
    ]
  },
  {
    "id": "050dC",
    "title": "Skewer",
    "theme": "Crushing",
    "difficulty": "Easy",
    "rating": 959,
    "popularity": 100,
    "description": "Find the strongest continuation. Use a skewer to win material.",
    "initialFen": "8/4p3/8/8/5R2/r2k2PK/8/8 b - - 0 45",
    "fen": "8/8/8/4p3/5R2/r2k2PK/8/8 w - - 0 46",
    "preMove": "e5",
    "solution": [
      "Rf3+",
      "Ke4",
      "Rxa3"
    ]
  },
  {
    "id": "050jP",
    "title": "Mate in 2",
    "theme": "KingsideAttack",
    "difficulty": "Medium",
    "rating": 1000,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r2q1rk1/1b1p1ppp/p3n3/1p1N4/4Q3/8/PPB2PPP/R4RK1 b - - 0 18",
    "fen": "r2qr1k1/1b1p1ppp/p3n3/1p1N4/4Q3/8/PPB2PPP/R4RK1 w - - 1 19",
    "preMove": "Re8",
    "solution": [
      "Qxh7+",
      "Kf8",
      "Qh8#"
    ]
  },
  {
    "id": "050wQ",
    "title": "Mate in 2",
    "theme": "KingsideAttack",
    "difficulty": "Medium",
    "rating": 1082,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r1b2rk1/p4ppp/1n6/1P2q3/4p1n1/1BN1P3/1P1NQPP1/R4R1K w - - 2 19",
    "fen": "r1b2rk1/p4ppp/1n6/1P2q3/4p1n1/1BN1P1P1/1P1NQP2/R4R1K b - - 0 19",
    "preMove": "g3",
    "solution": [
      "Qh5+",
      "Kg1",
      "Qh2#"
    ]
  },
  {
    "id": "0510c",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1107,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "8/pp1Q1pkp/3p2p1/4p1P1/3nq3/8/P4PP1/5RK1 w - - 0 27",
    "fen": "8/pp3pkp/3Q2p1/4p1P1/3nq3/8/P4PP1/5RK1 b - - 0 27",
    "preMove": "Qxd6",
    "solution": [
      "Ne2+",
      "Kh1",
      "Qh4#"
    ]
  },
  {
    "id": "052Zq",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1016,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "5rk1/4pp2/p2p1bP1/3P2N1/2r2P1Q/8/q6P/5RK1 b - - 0 32",
    "fen": "5rk1/4pp2/p2p2P1/3P2b1/2r2P1Q/8/q6P/5RK1 w - - 0 33",
    "preMove": "Bxg5",
    "solution": [
      "Qh7#"
    ]
  },
  {
    "id": "0579n",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 986,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "5k2/p3q3/1p1p1p2/2p2Pp1/4r3/1Q5R/P1P1r1PP/5RK1 b - - 5 38",
    "fen": "5k2/p3q3/1p1p1p2/2p2Pp1/4r3/1Q5R/P1P3PP/4rRK1 w - - 6 39",
    "preMove": "Re1",
    "solution": [
      "Rh8+",
      "Kg7",
      "Qg8#"
    ]
  },
  {
    "id": "057lB",
    "title": "Mate in 2",
    "theme": "KingsideAttack",
    "difficulty": "Easy",
    "rating": 977,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r1bRqbk1/pp3p1p/2p3p1/4p3/4P3/1B3Q2/P1P2PPP/5RK1 b - - 1 18",
    "fen": "r1bq1bk1/pp3p1p/2p3p1/4p3/4P3/1B3Q2/P1P2PPP/5RK1 w - - 0 19",
    "preMove": "Qxd8",
    "solution": [
      "Qxf7+",
      "Kh8",
      "Qg8#"
    ]
  },
  {
    "id": "058Jw",
    "title": "Mate in 2",
    "theme": "KingsideAttack",
    "difficulty": "Easy",
    "rating": 913,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "4r1k1/q4pp1/b1pR3p/p4B2/2PnQ3/1PN4P/P4PP1/6K1 b - - 1 24",
    "fen": "6k1/q4pp1/b1pR3p/p4B2/2Pnr3/1PN4P/P4PP1/6K1 w - - 0 25",
    "preMove": "Rxe4",
    "solution": [
      "Rd8+",
      "Re8",
      "Rxe8#"
    ]
  },
  {
    "id": "058T5",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 988,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "5b2/1pp3kp/p2pQ1p1/3Pp3/2P1P3/1B6/PP2NqPP/7K w - - 1 31",
    "fen": "5b2/1pp3kp/p2pQ1p1/3Pp3/2P1P3/1B4N1/PP3qPP/7K b - - 2 31",
    "preMove": "Ng3",
    "solution": [
      "Qe1+",
      "Nf1",
      "Qxf1#"
    ]
  },
  {
    "id": "058yx",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1015,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "8/5k2/3b4/8/4R1BP/4p1K1/5r2/8 w - - 1 51",
    "fen": "8/5k2/3b4/8/4R1BP/4p2K/5r2/8 b - - 2 51",
    "preMove": "Kh3",
    "solution": [
      "Rh2#"
    ]
  },
  {
    "id": "05AUc",
    "title": "Chess Puzzle",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1011,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "7k/1p6/p5R1/P1pPb2p/2P1B1nP/5rQ1/1P6/5qNK w - - 0 51",
    "fen": "7k/1p6/p5R1/P1pPb2p/2P1B1nP/5Q2/1P6/5qNK b - - 0 51",
    "preMove": "Qxf3",
    "solution": [
      "Nf2+",
      "Qxf2",
      "Qxf2"
    ]
  },
  {
    "id": "05AVd",
    "title": "Mate in 2",
    "theme": "Fork",
    "difficulty": "Hard",
    "rating": 1409,
    "popularity": 100,
    "description": "Win material using a tactical fork. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r6k/p3RQbp/2pq2pB/1p5n/8/2N4P/PP3PP1/6K1 b - - 2 23",
    "fen": "5r1k/p3RQbp/2pq2pB/1p5n/8/2N4P/PP3PP1/6K1 w - - 3 24",
    "preMove": "Rf8",
    "solution": [
      "Bxg7+",
      "Nxg7",
      "Qxf8#"
    ]
  },
  {
    "id": "05Apb",
    "title": "Discovered Attack",
    "theme": "Crushing",
    "difficulty": "Medium",
    "rating": 1248,
    "popularity": 100,
    "description": "Find the strongest continuation. Unleash a discovered attack.",
    "initialFen": "4r3/pp1Q1pk1/2p3p1/8/2pP4/2N1qP2/P1K4R/8 w - - 2 34",
    "fen": "4r3/pp1Q1pk1/2p3p1/8/2pP4/2N1qP2/P1K1R3/8 b - - 3 34",
    "preMove": "Re2",
    "solution": [
      "Qd3+",
      "Kb2",
      "Rxe2+"
    ]
  },
  {
    "id": "05BwL",
    "title": "Mate in 1",
    "theme": "KingsideAttack",
    "difficulty": "Easy",
    "rating": 824,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "rnb2rk1/pppp2pp/8/5q2/8/2P5/PP1QP1PP/RN3BKR w - - 2 11",
    "fen": "rnb2rk1/pppp2pp/8/5q2/8/2P1P3/PP1Q2PP/RN3BKR b - - 0 11",
    "preMove": "e3",
    "solution": [
      "Qxf1#"
    ]
  },
  {
    "id": "05CX6",
    "title": "Mate in 2",
    "theme": "KingsideAttack",
    "difficulty": "Easy",
    "rating": 968,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "rn3rk1/5p1n/3qp1NP/3p4/p2P2Q1/1pP1PP2/1P6/2KR2NR b - - 0 24",
    "fen": "rn3rk1/7n/3qp1pP/3p4/p2P2Q1/1pP1PP2/1P6/2KR2NR w - - 0 25",
    "preMove": "fxg6",
    "solution": [
      "Qxg6+",
      "Kh8",
      "Qg7#"
    ]
  },
  {
    "id": "05Cbv",
    "title": "Mate in 3",
    "theme": "Fork",
    "difficulty": "Hard",
    "rating": 1439,
    "popularity": 100,
    "description": "Win material using a tactical fork. Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "rn2k2r/pp2q1pp/2p5/5QB1/4n3/2P2p2/P1PK1PPP/3R1B1R w kq - 2 14",
    "fen": "rn2k2r/pp2q1pp/2p5/5QB1/4n3/2P2p2/P1P2PPP/2KR1B1R b kq - 3 14",
    "preMove": "Kc1",
    "solution": [
      "Qa3+",
      "Kb1",
      "Nxc3+",
      "Ka1",
      "Qxa2#"
    ]
  },
  {
    "id": "05DT1",
    "title": "Knight Fork",
    "theme": "Crushing",
    "difficulty": "Medium",
    "rating": 1152,
    "popularity": 100,
    "description": "Find the strongest continuation. Win material using a tactical fork.",
    "initialFen": "8/8/3n1R2/2pk4/p3p3/P3K3/1P6/8 w - - 2 49",
    "fen": "8/8/3n3R/2pk4/p3p3/P3K3/1P6/8 b - - 3 49",
    "preMove": "Rh6",
    "solution": [
      "Nf5+",
      "Ke2",
      "Nxh6"
    ]
  },
  {
    "id": "05EFC",
    "title": "Mate in 3",
    "theme": "BackRankMate",
    "difficulty": "Medium",
    "rating": 1113,
    "popularity": 100,
    "description": "Exploit the weak back rank. Find the forced checkmate. Find the forced mate in three. Sacrifice material for a tactical gain.",
    "initialFen": "r5k1/2pQ2pp/pp2p3/2q1P2n/2P5/1P4PP/P3NRK1/8 b - - 0 23",
    "fen": "r5k1/2pQ2pp/pp2p3/4q2n/2P5/1P4PP/P3NRK1/8 w - - 0 24",
    "preMove": "Qxe5",
    "solution": [
      "Qf7+",
      "Kh8",
      "Qf8+",
      "Rxf8",
      "Rxf8#"
    ]
  },
  {
    "id": "05F0r",
    "title": "Chess Puzzle",
    "theme": "Advantage",
    "difficulty": "Hard",
    "rating": 1551,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "r2q1rk1/p4p1p/1p2pPp1/3b4/5QPP/2P5/P1K2P2/R7 b - - 0 22",
    "fen": "r4rk1/p2q1p1p/1p2pPp1/3b4/5QPP/2P5/P1K2P2/R7 w - - 1 23",
    "preMove": "Qd7",
    "solution": [
      "Qh6",
      "Qa4+",
      "Kd2",
      "Qf4+",
      "Qxf4"
    ]
  },
  {
    "id": "05FD9",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Expert",
    "rating": 2009,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "8/p7/2pp4/8/2KPk3/1P6/2P5/8 w - - 1 55",
    "fen": "8/p7/2pp4/8/2KPk3/1PP5/8/8 b - - 0 55",
    "preMove": "c3",
    "solution": [
      "a5",
      "b4",
      "a4"
    ]
  },
  {
    "id": "05FhO",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1368,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "3r4/ppR5/6kp/8/5P1P/1N6/PP1pr2K/3R4 w - - 1 41",
    "fen": "3r4/ppR5/6kp/8/5P1P/1N4K1/PP1pr3/3R4 b - - 2 41",
    "preMove": "Kg3",
    "solution": [
      "Rd3+",
      "Kg4",
      "h5#"
    ]
  },
  {
    "id": "05Fkw",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1118,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "6k1/5pp1/8/Rpr5/1R4P1/4P3/1P1r4/6K1 w - - 5 36",
    "fen": "6k1/5pp1/8/RRr5/6P1/4P3/1P1r4/6K1 b - - 0 36",
    "preMove": "Rbxb5",
    "solution": [
      "Rc1#"
    ]
  },
  {
    "id": "05GQe",
    "title": "Chess Puzzle",
    "theme": "Advantage",
    "difficulty": "Easy",
    "rating": 934,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "2r2r2/1p4pk/pq4pp/3pP2n/8/P1P4P/1PQ2PP1/RB2R1K1 w - - 3 24",
    "fen": "2r2r2/1p4pk/pq4Qp/3pP2n/8/P1P4P/1P3PP1/RB2R1K1 b - - 0 24",
    "preMove": "Qxg6+",
    "solution": [
      "Qxg6",
      "Bxg6+",
      "Kxg6"
    ]
  },
  {
    "id": "05Gmm",
    "title": "Chess Puzzle",
    "theme": "Advantage",
    "difficulty": "Easy",
    "rating": 948,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "3r3k/1p4b1/p1p3pp/2PqP3/1PQp1P1P/P2R2PB/7K/8 w - - 2 39",
    "fen": "3r3k/1p4b1/p1p3pp/2PqP3/1PQR1P1P/P5PB/7K/8 b - - 0 39",
    "preMove": "Rxd4",
    "solution": [
      "Qxd4",
      "Qxd4",
      "Rxd4"
    ]
  },
  {
    "id": "05H5O",
    "title": "Mate in 2",
    "theme": "Fork",
    "difficulty": "Easy",
    "rating": 840,
    "popularity": 100,
    "description": "Win material using a tactical fork. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "3qrR1k/pp1r3p/6bQ/4P3/3p4/2N5/PP4P1/5RK1 b - - 3 36",
    "fen": "3q1r1k/pp1r3p/6bQ/4P3/3p4/2N5/PP4P1/5RK1 w - - 0 37",
    "preMove": "Rxf8",
    "solution": [
      "Rxf8+",
      "Qxf8",
      "Qxf8#"
    ]
  },
  {
    "id": "05HG9",
    "title": "Mate in 1",
    "theme": "KingsideAttack",
    "difficulty": "Easy",
    "rating": 992,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r1bq1b1k/pp1nrQBp/2p3p1/1P2P1N1/2pP4/P1N5/2P2PP1/R3K2R b KQ - 6 18",
    "fen": "r1bq3k/pp1nrQbp/2p3p1/1P2P1N1/2pP4/P1N5/2P2PP1/R3K2R w KQ - 0 19",
    "preMove": "Bxg7",
    "solution": [
      "Rxh7#"
    ]
  },
  {
    "id": "05HoS",
    "title": "Mate in 3",
    "theme": "BackRankMate",
    "difficulty": "Medium",
    "rating": 1332,
    "popularity": 100,
    "description": "Exploit the weak back rank. Find the forced checkmate. Find the forced mate in three. Sacrifice material for a tactical gain.",
    "initialFen": "r3k1nr/pp2npp1/2p4p/4q2P/6b1/2N1B3/PPPQB1P1/3R2KR b kq - 1 15",
    "fen": "r3k1nr/pp2npp1/2p4p/4q2P/8/2N1B3/PPPQb1P1/3R2KR w kq - 0 16",
    "preMove": "Bxe2",
    "solution": [
      "Qd7+",
      "Kf8",
      "Qd8+",
      "Rxd8",
      "Rxd8#"
    ]
  },
  {
    "id": "05HvP",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1149,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "8/1ppk4/p2pR3/3P4/1PP1Npnn/3B2pr/P7/6K1 b - - 5 37",
    "fen": "8/1ppk4/p2pR3/3P4/1PP1Np1n/3B2pr/P4n2/6K1 w - - 6 38",
    "preMove": "Nf2",
    "solution": [
      "Nf6+",
      "Kd8",
      "Re8#"
    ]
  },
  {
    "id": "05IeK",
    "title": "Winning Combination",
    "theme": "AdvancedPawn",
    "difficulty": "Easy",
    "rating": 875,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "8/4n1p1/K6p/2k1PP2/1p6/8/2B4P/8 b - - 0 41",
    "fen": "8/4n1p1/K6p/4PP2/1pk5/8/2B4P/8 w - - 1 42",
    "preMove": "Kc4",
    "solution": [
      "f6",
      "gxf6",
      "exf6",
      "Nd5",
      "f7"
    ]
  },
  {
    "id": "05Jvu",
    "title": "Win the Hanging Piece",
    "theme": "Advantage",
    "difficulty": "Easy",
    "rating": 969,
    "popularity": 100,
    "description": "Capture the loose piece.",
    "initialFen": "3qk1nr/1b1p1pp1/p2Pp3/1p1P3p/5B2/2rB1QP1/PP3P1P/R3R1K1 w k - 0 17",
    "fen": "3qk1nr/1b1p1pp1/p2PP3/1p5p/5B2/2rB1QP1/PP3P1P/R3R1K1 b k - 0 17",
    "preMove": "dxe6",
    "solution": [
      "Bxf3",
      "exd7+",
      "Kxd7"
    ]
  },
  {
    "id": "05LI1",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 904,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "5r2/pp2p1kp/3p2p1/3P4/4P3/P1N4n/1P4PP/2Q2RqK w - - 4 24",
    "fen": "5r2/pp2p1kp/3p2p1/3P4/4P3/P1N4n/1P4PP/2Q3RK b - - 0 24",
    "preMove": "Rxg1",
    "solution": [
      "Nf2#"
    ]
  },
  {
    "id": "05LgI",
    "title": "Sacrifice",
    "theme": "AdvancedPawn",
    "difficulty": "Medium",
    "rating": 1279,
    "popularity": 100,
    "description": "Find the strongest continuation. Sacrifice material for a tactical gain.",
    "initialFen": "8/1p3rpk/p2p1qp1/3Q2b1/2P5/1P2p3/P3R1PP/4R1K1 w - - 8 33",
    "fen": "8/1p3rpk/p2p1qp1/6b1/2P1Q3/1P2p3/P3R1PP/4R1K1 b - - 9 33",
    "preMove": "Qe4",
    "solution": [
      "Qf2+",
      "Rxf2",
      "exf2+"
    ]
  },
  {
    "id": "05M6A",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 973,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r4r1k/pp4p1/n1p5/2P1p1R1/1PB1P2n/7P/P1Q1Nq2/7K b - - 1 34",
    "fen": "r6k/pp4p1/n1p5/2P1p1R1/1PB1P2n/5r1P/P1Q1Nq2/7K w - - 2 35",
    "preMove": "Rf3",
    "solution": [
      "Rh5#"
    ]
  },
  {
    "id": "05MF7",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1124,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "5k2/1p4pB/1p3p2/4p3/7P/2P1nP1n/PP4r1/NR5K w - - 1 30",
    "fen": "5k2/1p4pB/1p3p2/4p3/7P/2P1nP1n/PP4r1/N3R2K b - - 2 30",
    "preMove": "Re1",
    "solution": [
      "Nf2#"
    ]
  },
  {
    "id": "05NVJ",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Hard",
    "rating": 1443,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "6n1/1p3pkp/n1p3p1/p3NNQ1/P3P3/7P/1q3PPK/8 b - - 3 25",
    "fen": "5kn1/1p3p1p/n1p3p1/p3NNQ1/P3P3/7P/1q3PPK/8 w - - 4 26",
    "preMove": "Kf8",
    "solution": [
      "Qd8#"
    ]
  },
  {
    "id": "05NtB",
    "title": "Winning Combination",
    "theme": "AdvancedPawn",
    "difficulty": "Hard",
    "rating": 1519,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "8/8/3R4/6k1/8/4P2p/r4P2/5K2 w - - 2 51",
    "fen": "3R4/8/8/6k1/8/4P2p/r4P2/5K2 b - - 3 51",
    "preMove": "Rd8",
    "solution": [
      "Ra1+",
      "Ke2",
      "h2"
    ]
  },
  {
    "id": "05Oau",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 918,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r2q1rk1/1pp2p2/p1np3Q/2bnp1N1/4P3/P2P4/1PP2PPP/R3K2R b KQ - 1 13",
    "fen": "r4rk1/1pp2p2/p1np1q1Q/2bnp1N1/4P3/P2P4/1PP2PPP/R3K2R w KQ - 2 14",
    "preMove": "Qf6",
    "solution": [
      "Qh7#"
    ]
  },
  {
    "id": "05Qjp",
    "title": "Knight Fork",
    "theme": "Crushing",
    "difficulty": "Easy",
    "rating": 934,
    "popularity": 100,
    "description": "Find the strongest continuation. Win material using a tactical fork.",
    "initialFen": "8/8/8/2pK4/1kP5/8/8/3n1B2 w - - 3 56",
    "fen": "8/8/8/2pK4/1kP5/8/4B3/3n4 b - - 4 56",
    "preMove": "Be2",
    "solution": [
      "Nc3+",
      "Ke6",
      "Nxe2"
    ]
  },
  {
    "id": "05Qqv",
    "title": "Knight Fork",
    "theme": "Advantage",
    "difficulty": "Easy",
    "rating": 907,
    "popularity": 100,
    "description": "Win material using a tactical fork.",
    "initialFen": "4rbk1/5pp1/2P5/p2P4/1q2r3/1P4PP/P2R1P2/2RQ2K1 w - - 1 32",
    "fen": "4rbk1/5pp1/2P5/p2P4/1q2r3/1P4PP/P1R2P2/2RQ2K1 b - - 2 32",
    "preMove": "Rdc2",
    "solution": [
      "Re1+",
      "Kh2",
      "Rxd1"
    ]
  },
  {
    "id": "05RQN",
    "title": "Mate in 2",
    "theme": "KingsideAttack",
    "difficulty": "Easy",
    "rating": 812,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r3r1k1/1b1nqpp1/4p2p/p2pP1NQ/1p5P/2P5/PPB2PP1/R3R1K1 b - - 1 21",
    "fen": "r3r1k1/1b1nqpp1/4p3/p2pP1pQ/1p5P/2P5/PPB2PP1/R3R1K1 w - - 0 22",
    "preMove": "hxg5",
    "solution": [
      "Qh7+",
      "Kf8",
      "Qh8#"
    ]
  },
  {
    "id": "05RnX",
    "title": "Mate in 1",
    "theme": "KingsideAttack",
    "difficulty": "Medium",
    "rating": 1137,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r4rk1/pp3ppp/2bb4/3p3q/8/4PN2/PP3PPP/1BRQ1RK1 w - - 2 17",
    "fen": "r4rk1/pp3ppp/2bb4/3p3q/3N4/4P3/PP3PPP/1BRQ1RK1 b - - 3 17",
    "preMove": "Nd4",
    "solution": [
      "Qxh2#"
    ]
  },
  {
    "id": "05SRy",
    "title": "Chess Puzzle",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1050,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "2r1r1k1/1p1q1pbp/p2p1np1/P2P2B1/2pQP3/2N2P1P/1P4P1/R3R1K1 b - - 1 19",
    "fen": "2r1r1k1/1pq2pbp/p2p1np1/P2P2B1/2pQP3/2N2P1P/1P4P1/R3R1K1 w - - 2 20",
    "preMove": "Qc7",
    "solution": [
      "Bxf6",
      "Bxf6",
      "Qxf6"
    ]
  },
  {
    "id": "05Sf0",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Hard",
    "rating": 1403,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "6k1/B1p2p1p/2p1q1p1/1p6/5P1Q/2P4P/2b3P1/6K1 b - - 1 28",
    "fen": "6k1/B1p2p1p/2p3p1/1p3q2/5P1Q/2P4P/2b3P1/6K1 w - - 2 29",
    "preMove": "Qf5",
    "solution": [
      "Qd8+",
      "Kg7",
      "Bd4+",
      "f6",
      "Qe7+"
    ]
  },
  {
    "id": "05Sua",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Medium",
    "rating": 1218,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "3r2k1/pp3pp1/2b4p/7q/4p3/Q3P1P1/PP3PBP/2R3K1 w - - 0 25",
    "fen": "3r2k1/Qp3pp1/2b4p/7q/4p3/4P1P1/PP3PBP/2R3K1 b - - 0 25",
    "preMove": "Qxa7",
    "solution": [
      "Rd1+",
      "Bf1",
      "Rxc1",
      "Qb8+",
      "Kh7"
    ]
  },
  {
    "id": "05Sv2",
    "title": "Deflection",
    "theme": "Crushing",
    "difficulty": "Hard",
    "rating": 1633,
    "popularity": 100,
    "description": "Find the strongest continuation. Deflect the defender.",
    "initialFen": "5q1k/1p4p1/p1p2r1p/6b1/3PQ3/1BP5/P5PP/4R1K1 w - - 12 35",
    "fen": "4Qq1k/1p4p1/p1p2r1p/6b1/3P4/1BP5/P5PP/4R1K1 b - - 13 35",
    "preMove": "Qe8",
    "solution": [
      "Rf1+",
      "Rxf1",
      "Qxe8"
    ]
  },
  {
    "id": "05Syx",
    "title": "Pin Tactic",
    "theme": "Attraction",
    "difficulty": "Hard",
    "rating": 1583,
    "popularity": 100,
    "description": "Lure the opponent's piece onto an unfavorable square. Find the strongest continuation. Exploit the pinned piece.",
    "initialFen": "6r1/pp3prk/1bpp4/8/1P1Pn1q1/P2B2B1/3Q1PK1/R4R2 b - - 1 28",
    "fen": "6rk/pp3pr1/1bpp4/8/1P1Pn1q1/P2B2B1/3Q1PK1/R4R2 w - - 2 29",
    "preMove": "Kh8",
    "solution": [
      "Rh1+",
      "Rh7",
      "Rxh7+",
      "Kxh7",
      "Rh1+"
    ]
  },
  {
    "id": "05Tkd",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1003,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "1Q6/2K5/k4p2/6pp/8/6P1/3p2P1/8 b - - 0 53",
    "fen": "1Q6/2K5/k4p2/6pp/8/6P1/6P1/3q4 w - - 0 54",
    "preMove": "d1=Q",
    "solution": [
      "Qb6#"
    ]
  },
  {
    "id": "05UEq",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 846,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "1Q5k/pp3Bp1/7p/2q5/3n2n1/8/P4PPP/6K1 b - - 2 28",
    "fen": "1Q6/pp3Bpk/7p/2q5/3n2n1/8/P4PPP/6K1 w - - 3 29",
    "preMove": "Kh7",
    "solution": [
      "Qg8#"
    ]
  },
  {
    "id": "05V0f",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 954,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "kQ4rr/pp6/N4b2/5P2/3p4/Pq3NP1/1P4KP/1RB4R b - - 8 35",
    "fen": "kr5r/pp6/N4b2/5P2/3p4/Pq3NP1/1P4KP/1RB4R w - - 0 36",
    "preMove": "Rxb8",
    "solution": [
      "Nc7#"
    ]
  },
  {
    "id": "05V6Z",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 933,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "8/6pk/1QN1ppq1/pP1bP2p/P6P/4R3/5P2/6K1 w - - 1 36",
    "fen": "8/6pk/1QN1ppq1/pP1bP2p/P6P/6R1/5P2/6K1 b - - 2 36",
    "preMove": "Rg3",
    "solution": [
      "Qb1+",
      "Kh2",
      "Qh1#"
    ]
  },
  {
    "id": "05W1D",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 856,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "1rr3Qk/6pp/7N/q4p2/6bb/P2PP1P1/5P1P/2B2KR1 b - - 7 28",
    "fen": "1r4rk/6pp/7N/q4p2/6bb/P2PP1P1/5P1P/2B2KR1 w - - 0 29",
    "preMove": "Rxg8",
    "solution": [
      "Nf7#"
    ]
  },
  {
    "id": "05XPR",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 961,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "5r1k/pp1b2p1/3b2B1/3p4/3Q4/1PB2qP1/P6P/4R1K1 b - - 6 32",
    "fen": "5r1k/pp1b2p1/6B1/3p4/3Q4/1PB2qb1/P6P/4R1K1 w - - 0 33",
    "preMove": "Bxg3",
    "solution": [
      "Qxg7#"
    ]
  },
  {
    "id": "05YXU",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 985,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "4r1k1/p4ppp/Q2b1n2/1N1p4/8/7P/PB3PPq/R4K2 w - - 6 21",
    "fen": "4r1k1/p4ppp/3Q1n2/1N1p4/8/7P/PB3PPq/R4K2 b - - 0 21",
    "preMove": "Qxd6",
    "solution": [
      "Qh1#"
    ]
  },
  {
    "id": "05ZNx",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 837,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "7k/1b4p1/1p2Q2p/2p2P2/1P4q1/3R4/5P1P/6K1 w - - 4 37",
    "fen": "7k/1b4p1/1p2Q2p/2p2P2/1P4q1/6R1/5P1P/6K1 b - - 5 37",
    "preMove": "Rg3",
    "solution": [
      "Qd1+",
      "Qe1",
      "Qxe1#"
    ]
  },
  {
    "id": "05Zku",
    "title": "Knight Fork",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1065,
    "popularity": 100,
    "description": "Win material using a tactical fork.",
    "initialFen": "r3rk2/pp3bp1/2p5/4NQ2/3P1B1q/b3PP1P/6P1/2R2K2 b - - 1 25",
    "fen": "r3rk2/pp3bp1/2p2q2/4NQ2/3P1B2/b3PP1P/6P1/2R2K2 w - - 2 26",
    "preMove": "Qf6",
    "solution": [
      "Nd7+",
      "Kg8",
      "Nxf6+"
    ]
  },
  {
    "id": "05ac2",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 833,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "R1b1r3/1p3k2/2p2Np1/5q2/1PP3p1/2Q1P1Pp/5P1P/6K1 w - - 4 27",
    "fen": "R1b1N3/1p3k2/2p3p1/5q2/1PP3p1/2Q1P1Pp/5P1P/6K1 b - - 0 27",
    "preMove": "Nxe8",
    "solution": [
      "Qb1+",
      "Qc1",
      "Qxc1#"
    ]
  },
  {
    "id": "05b0P",
    "title": "Pin Tactic",
    "theme": "Advantage",
    "difficulty": "Expert",
    "rating": 1816,
    "popularity": 100,
    "description": "Exploit the pinned piece.",
    "initialFen": "4rk2/pp2rpp1/2p4p/3p4/3PnN2/6PP/PPP1R1PK/5R2 b - - 6 23",
    "fen": "4rk2/pp2rpp1/2p4p/3p4/3P1N2/6nP/PPP1R1PK/5R2 w - - 0 24",
    "preMove": "Nxg3",
    "solution": [
      "Ng6+",
      "Kg8",
      "Nxe7+",
      "Rxe7",
      "Rxe7"
    ]
  },
  {
    "id": "05c4u",
    "title": "Mate in 3",
    "theme": "BackRankMate",
    "difficulty": "Medium",
    "rating": 1064,
    "popularity": 100,
    "description": "Exploit the weak back rank. Find the forced checkmate. Find the forced mate in three. Sacrifice material for a tactical gain.",
    "initialFen": "2k4r/ppp2Qpp/4p3/8/1bP5/1PN3P1/P3KPq1/3R4 b - - 0 18",
    "fen": "2k4r/ppp2Qpp/4p3/8/2P5/1Pb3P1/P3KPq1/3R4 w - - 0 19",
    "preMove": "Bxc3",
    "solution": [
      "Qd7+",
      "Kb8",
      "Qd8+",
      "Rxd8",
      "Rxd8#"
    ]
  },
  {
    "id": "05cRc",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 953,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r1b2k1r/Bp3pp1/p6p/8/QPP2P2/3p4/P5PP/qN2R1K1 b - - 0 18",
    "fen": "2b2k1r/rp3pp1/p6p/8/QPP2P2/3p4/P5PP/qN2R1K1 w - - 0 19",
    "preMove": "Rxa7",
    "solution": [
      "Re8#"
    ]
  },
  {
    "id": "05ejA",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 812,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "k2r3r/ppp3pp/2R2p2/3q1b2/Q7/4BN2/P4PPP/1R4K1 b - - 0 17",
    "fen": "k2r3r/ppp3pp/2q2p2/5b2/Q7/4BN2/P4PPP/1R4K1 w - - 0 18",
    "preMove": "Qxc6",
    "solution": [
      "Qxa7#"
    ]
  },
  {
    "id": "05fKp",
    "title": "Mate in 3",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 998,
    "popularity": 100,
    "description": "Win material using a tactical fork. Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "4r1k1/1p3ppp/p2q4/3B2PP/8/4bQ2/8/5K2 b - - 0 40",
    "fen": "4r1k1/1p3ppp/p2q4/3B2bP/8/5Q2/8/5K2 w - - 0 41",
    "preMove": "Bxg5",
    "solution": [
      "Qxf7+",
      "Kh8",
      "Qxe8+",
      "Qf8+",
      "Qxf8#"
    ]
  },
  {
    "id": "05fYZ",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 928,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "br4k1/6pp/4p3/5p2/1B4PP/P3q3/5R1K/5R2 b - - 0 30",
    "fen": "br4k1/6pp/4p3/8/1B4pP/P3q3/5R1K/5R2 w - - 0 31",
    "preMove": "fxg4",
    "solution": [
      "Rf8+",
      "Rxf8",
      "Rxf8#"
    ]
  },
  {
    "id": "05hU2",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1279,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "7k/6p1/6K1/RP2rN2/p7/6P1/r7/8 b - - 2 56",
    "fen": "7k/6p1/6K1/RP3r2/p7/6P1/r7/8 w - - 0 57",
    "preMove": "Rxf5",
    "solution": [
      "Ra8+",
      "Rf8",
      "Rxf8#"
    ]
  },
  {
    "id": "05iFh",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 996,
    "popularity": 100,
    "description": "Win material using a tactical fork. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r5k1/p1R2pp1/1p1p2np/1P6/3qPP2/3B2P1/Q6P/7K b - - 2 25",
    "fen": "r5k1/p1R2pp1/1p1p2np/1P6/4PP2/3q2P1/Q6P/7K w - - 0 26",
    "preMove": "Qxd3",
    "solution": [
      "Qxf7+",
      "Kh8",
      "Qxg7#"
    ]
  },
  {
    "id": "05iRm",
    "title": "Promotion",
    "theme": "AdvancedPawn",
    "difficulty": "Hard",
    "rating": 1436,
    "popularity": 100,
    "description": "Find the strongest continuation. Promote your pawn.",
    "initialFen": "8/6p1/2p5/4R3/8/8/kp1K4/8 w - - 0 43",
    "fen": "8/6p1/2p5/R7/8/8/kp1K4/8 b - - 1 43",
    "preMove": "Ra5+",
    "solution": [
      "Kb3",
      "Ra7",
      "b1=Q",
      "Rb7+",
      "Ka2"
    ]
  },
  {
    "id": "05imK",
    "title": "Mate in 1",
    "theme": "KingsideAttack",
    "difficulty": "Easy",
    "rating": 901,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "3Rq1rk/pb2nppp/1p2pn2/1P2N3/1BP5/4P3/2Q1BPPP/6K1 b - - 5 21",
    "fen": "3q2rk/pb2nppp/1p2pn2/1P2N3/1BP5/4P3/2Q1BPPP/6K1 w - - 0 22",
    "preMove": "Qxd8",
    "solution": [
      "Nxf7#"
    ]
  },
  {
    "id": "05jh1",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1259,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "8/p6p/1rBp2pb/3P1p2/Rk2rP2/3KP3/7P/2R5 b - - 1 35",
    "fen": "8/p6p/1rBp2pb/3P1p2/R3rP2/1k1KP3/7P/2R5 w - - 2 36",
    "preMove": "Kb3",
    "solution": [
      "Rb1#"
    ]
  },
  {
    "id": "05jkW",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1028,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "2Q5/k3r1R1/1pp5/p2p4/P2P4/2P2P2/5K1q/6R1 w - - 22 55",
    "fen": "2Q5/k3r1R1/1pp5/p2p4/P2P4/2P2P2/7q/5KR1 b - - 23 55",
    "preMove": "Kf1",
    "solution": [
      "Qe2#"
    ]
  },
  {
    "id": "05jow",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Expert",
    "rating": 2142,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "8/2R3p1/p2rpk1p/p2pq3/8/P4Q1P/1P4P1/7K b - - 1 31",
    "fen": "8/2R3p1/p2rpk1p/p2p1q2/8/P4Q1P/1P4P1/7K w - - 2 32",
    "preMove": "Qf5",
    "solution": [
      "Qg3",
      "Qf1+",
      "Kh2",
      "g5",
      "Qxd6",
      "Qf4+",
      "Qxf4+"
    ]
  },
  {
    "id": "05kdD",
    "title": "Promotion",
    "theme": "AdvancedPawn",
    "difficulty": "Medium",
    "rating": 1136,
    "popularity": 100,
    "description": "Find the strongest continuation. Capture the loose piece. Promote your pawn.",
    "initialFen": "8/P7/8/8/8/5p1k/1KP3pp/7Q w - - 0 55",
    "fen": "8/P7/8/8/8/5p1k/1KP3Qp/8 b - - 0 55",
    "preMove": "Qxg2+",
    "solution": [
      "Kxg2",
      "a8=Q",
      "h1=Q"
    ]
  },
  {
    "id": "05kuI",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Hard",
    "rating": 1565,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "4q3/6pk/8/1p1Qp2p/p4pbP/2P1B1P1/PP4P1/6K1 w - - 0 40",
    "fen": "4q3/6pk/8/1p2p2p/p4pbP/2PQB1P1/PP4P1/6K1 b - - 1 40",
    "preMove": "Qd3+",
    "solution": [
      "e4",
      "Qd2",
      "fxe3"
    ]
  },
  {
    "id": "05lM6",
    "title": "Pin Tactic",
    "theme": "Advantage",
    "difficulty": "Hard",
    "rating": 1597,
    "popularity": 100,
    "description": "Exploit the pinned piece.",
    "initialFen": "2kr3r/pppq1p2/1b5p/3P2p1/4P2P/2N2PQ1/PPPK4/3R1B2 b - - 0 22",
    "fen": "2kr3r/pppq4/1b3p1p/3P2p1/4P2P/2N2PQ1/PPPK4/3R1B2 w - - 0 23",
    "preMove": "f6",
    "solution": [
      "Bh3",
      "Qxh3",
      "Qxh3+"
    ]
  },
  {
    "id": "05mYC",
    "title": "Mate in 3",
    "theme": "Deflection",
    "difficulty": "Medium",
    "rating": 1362,
    "popularity": 100,
    "description": "Deflect the defender. Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "r2q1r2/2pbn2k/p2p2B1/1p1P4/2P1pB1P/1P6/P4P2/b2Q1KR1 b - - 0 21",
    "fen": "r2q1r2/2pb3k/p2p2n1/1p1P4/2P1pB1P/1P6/P4P2/b2Q1KR1 w - - 0 22",
    "preMove": "Nxg6",
    "solution": [
      "Qh5+",
      "Kg8",
      "Qxg6+",
      "Bg7",
      "Qxg7#"
    ]
  },
  {
    "id": "05mYb",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1156,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "8/8/7p/6p1/4R3/5kP1/r6P/6K1 w - - 2 54",
    "fen": "8/8/4R2p/6p1/8/5kP1/r6P/6K1 b - - 3 54",
    "preMove": "Re6",
    "solution": [
      "Ra1+",
      "Re1",
      "Rxe1#"
    ]
  },
  {
    "id": "05mei",
    "title": "Chess Puzzle",
    "theme": "Advantage",
    "difficulty": "Hard",
    "rating": 1464,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "2kr1b1r/pp3ppp/2n5/2p4q/Q5b1/2P2N1P/P3BPP1/R1B1K2R b KQ - 0 13",
    "fen": "2kr3r/pp3ppp/2nb4/2p4q/Q5b1/2P2N1P/P3BPP1/R1B1K2R w KQ - 1 14",
    "preMove": "Bd6",
    "solution": [
      "Qxg4+",
      "Qxg4",
      "hxg4"
    ]
  },
  {
    "id": "05nKL",
    "title": "Mate in 2",
    "theme": "KingsideAttack",
    "difficulty": "Easy",
    "rating": 954,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "4rk2/ppqn1Npp/2p5/5pB1/2BP2n1/2N2Q2/PPP3P1/R5bK w - - 8 17",
    "fen": "4rk2/ppqn1Npp/2p5/5pB1/2BP2n1/2N2Q2/PPP3P1/R5K1 b - - 0 17",
    "preMove": "Kxg1",
    "solution": [
      "Qh2+",
      "Kf1",
      "Qh1#"
    ]
  },
  {
    "id": "05nXK",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1051,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "8/8/8/2R5/k1p3r1/P1K5/8/8 b - - 5 57",
    "fen": "8/8/8/2R5/2p3r1/k1K5/8/8 w - - 0 58",
    "preMove": "Kxa3",
    "solution": [
      "Ra5#"
    ]
  },
  {
    "id": "05o2X",
    "title": "Mate in 1",
    "theme": "Master",
    "difficulty": "Medium",
    "rating": 1144,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r1b1k2r/ppppqppp/5n2/3P4/1bB5/3p1N2/PPPBQPPP/R3K2R w KQkq - 0 10",
    "fen": "r1b1k2r/ppppqppp/5n2/3P4/1BB5/3p1N2/PPP1QPPP/R3K2R b KQkq - 0 10",
    "preMove": "Bxb4",
    "solution": [
      "Qxe2#"
    ]
  },
  {
    "id": "05oox",
    "title": "Mate in 2",
    "theme": "BackRankMate",
    "difficulty": "Medium",
    "rating": 1167,
    "popularity": 100,
    "description": "Exploit the weak back rank. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "6k1/5pp1/1BQ4p/P2p2q1/8/3b1P2/6PP/6K1 w - - 1 34",
    "fen": "6k1/2B2pp1/2Q4p/P2p2q1/8/3b1P2/6PP/6K1 b - - 2 34",
    "preMove": "Bc7",
    "solution": [
      "Qe3+",
      "Kh1",
      "Qe1#"
    ]
  },
  {
    "id": "05pyS",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 901,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r4rk1/pp3p2/4b1B1/2Ppn1NQ/8/2q5/P1P2PPP/R4RK1 b - - 0 17",
    "fen": "r4rk1/pp3p2/4b1n1/2Pp2NQ/8/2q5/P1P2PPP/R4RK1 w - - 0 18",
    "preMove": "Nxg6",
    "solution": [
      "Qh7#"
    ]
  },
  {
    "id": "05q11",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 865,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "6k1/b4pp1/1qp4p/8/1PQ5/P5NP/5PP1/6K1 w - - 0 33",
    "fen": "6k1/b4pp1/1qp4p/8/1P6/P2Q2NP/5PP1/6K1 b - - 1 33",
    "preMove": "Qd3",
    "solution": [
      "Qxf2+",
      "Kh2",
      "Qg1#"
    ]
  },
  {
    "id": "05q6E",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1267,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "8/1p1R2k1/1p4p1/4r3/5bPK/1B6/P7/8 b - - 1 36",
    "fen": "8/1p1R4/1p3kp1/4r3/5bPK/1B6/P7/8 w - - 2 37",
    "preMove": "Kf6",
    "solution": [
      "Rf7#"
    ]
  },
  {
    "id": "05qO6",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Easy",
    "rating": 907,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "3r3k/6p1/1p1N3p/3qPQ2/8/3n2PK/7P/5R2 b - - 1 47",
    "fen": "6rk/6p1/1p1N3p/3qPQ2/8/3n2PK/7P/5R2 w - - 2 48",
    "preMove": "Rg8",
    "solution": [
      "Nf7+",
      "Qxf7",
      "Qxf7"
    ]
  },
  {
    "id": "05qg5",
    "title": "Chess Puzzle",
    "theme": "AdvancedPawn",
    "difficulty": "Medium",
    "rating": 1320,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "2k5/1pp3Bp/p7/5P2/6P1/5P2/PPr3rP/3K3R b - - 0 25",
    "fen": "2k5/1pp3Bp/p7/5P2/6P1/5P2/PPr4r/3K3R w - - 0 26",
    "preMove": "Rxh2",
    "solution": [
      "Rxh2",
      "Rxh2",
      "f6",
      "Rf2",
      "f7"
    ]
  },
  {
    "id": "05rdh",
    "title": "Knight Fork",
    "theme": "Advantage",
    "difficulty": "Easy",
    "rating": 903,
    "popularity": 100,
    "description": "Win material using a tactical fork.",
    "initialFen": "3q3k/6bp/4B1p1/p1p5/1p6/P6P/1PQ3P1/4R1K1 w - - 0 29",
    "fen": "3q3k/6bp/4B1p1/p1Q5/1p6/P6P/1P4P1/4R1K1 b - - 0 29",
    "preMove": "Qxc5",
    "solution": [
      "Bd4+",
      "Qxd4+",
      "Qxd4+"
    ]
  },
  {
    "id": "05soY",
    "title": "Knight Fork",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1163,
    "popularity": 100,
    "description": "Win material using a tactical fork.",
    "initialFen": "r3kb1r/pppbppp1/nq3n1p/1N2Q3/1PP5/8/P2P1PPP/R1B1KBNR b KQkq - 0 9",
    "fen": "r3kb1r/pppbppp1/1q3n1p/1N2Q3/1nP5/8/P2P1PPP/R1B1KBNR w KQkq - 0 10",
    "preMove": "Nxb4",
    "solution": [
      "Nxc7+",
      "Kd8",
      "Nxa8",
      "Qxf2+",
      "Kxf2"
    ]
  },
  {
    "id": "05t7U",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Hard",
    "rating": 1674,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "2r2k2/1p1R1pbQ/p5p1/4P3/5P2/PN6/1rq3P1/K2R4 w - - 2 31",
    "fen": "2rR1k2/1p3pbQ/p5p1/4P3/5P2/PN6/1rq3P1/K2R4 b - - 3 31",
    "preMove": "Rd8+",
    "solution": [
      "Rxd8",
      "Rxd8+",
      "Ke7",
      "Qh4+",
      "f6",
      "exf6+",
      "Bxf6"
    ]
  },
  {
    "id": "05w8f",
    "title": "Pin Tactic",
    "theme": "Advantage",
    "difficulty": "Hard",
    "rating": 1676,
    "popularity": 100,
    "description": "Exploit the pinned piece.",
    "initialFen": "r2q3r/ppp2kpp/3b4/8/2P5/3npN2/PP4PP/RN1QR1K1 w - - 0 14",
    "fen": "r2q3r/ppp2kpp/3b4/8/2P5/3nRN2/PP4PP/RN1Q2K1 b - - 0 14",
    "preMove": "Rxe3",
    "solution": [
      "Bc5",
      "Qxd3",
      "Qxd3"
    ]
  },
  {
    "id": "05wPY",
    "title": "Winning Combination",
    "theme": "AdvancedPawn",
    "difficulty": "Hard",
    "rating": 1525,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "3b4/8/6K1/4k1PP/8/8/8/8 b - - 0 65",
    "fen": "3b4/8/6K1/6PP/5k2/8/8/8 w - - 1 66",
    "preMove": "Kf4",
    "solution": [
      "h6",
      "Bc7",
      "h7",
      "Be5",
      "Kh6",
      "Kf5",
      "g6",
      "Ke4",
      "g7"
    ]
  },
  {
    "id": "05wTz",
    "title": "Mate in 1",
    "theme": "AttackingF2F7",
    "difficulty": "Medium",
    "rating": 1181,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r4rk1/1pp2p2/2np1q1p/p1b1p2b/P3P1p1/2PP1N2/1PNBBP2/R2QK1R1 w Q - 0 15",
    "fen": "r4rk1/1pp2p2/2np1q1p/p1b1p2b/P3P1p1/2PP4/1PNBBP1N/R2QK1R1 b Q - 1 15",
    "preMove": "Nh2",
    "solution": [
      "Qxf2#"
    ]
  },
  {
    "id": "05wkC",
    "title": "Chess Puzzle",
    "theme": "Advantage",
    "difficulty": "Easy",
    "rating": 959,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "3r3k/p2br1p1/2p2p1p/Pp1p4/1q3P2/3BP2P/1P2Q1P1/2RN2K1 b - - 2 31",
    "fen": "3r3k/p2br1p1/2p2p1p/Pp1p4/5q2/3BP2P/1P2Q1P1/2RN2K1 w - - 0 32",
    "preMove": "Qxf4",
    "solution": [
      "exf4",
      "Rxe2",
      "Bxe2"
    ]
  },
  {
    "id": "05xZV",
    "title": "Mate in 2",
    "theme": "Mate",
    "difficulty": "Medium",
    "rating": 1167,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "3r1rk1/pp2b1pp/8/2p5/3Pp3/P3P2P/1P2B1P1/RN2K2R w KQ - 0 17",
    "fen": "3r1rk1/pp2b1pp/8/2P5/4p3/P3P2P/1P2B1P1/RN2K2R b KQ - 0 17",
    "preMove": "dxc5",
    "solution": [
      "Bh4+",
      "g3",
      "Bxg3#"
    ]
  },
  {
    "id": "05xgD",
    "title": "Mate in 1",
    "theme": "CornerMate",
    "difficulty": "Easy",
    "rating": 847,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "2rr3k/1pq1bQ1p/p1b1p1B1/4N3/8/2N1P2P/1P3PP1/2B1R1K1 b - - 0 24",
    "fen": "2rr3k/1pq1bQ2/p1b1p1p1/4N3/8/2N1P2P/1P3PP1/2B1R1K1 w - - 0 25",
    "preMove": "hxg6",
    "solution": [
      "Nxg6#"
    ]
  },
  {
    "id": "05yVU",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1103,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "8/5R2/p3p1pk/8/5RPP/1p2r3/5K2/r7 b - - 2 42",
    "fen": "8/5R2/p3p1pk/8/5RPP/1p5r/5K2/r7 w - - 3 43",
    "preMove": "Rh3",
    "solution": [
      "g5+",
      "Kh5",
      "Rh7#"
    ]
  },
  {
    "id": "05yZP",
    "title": "Sacrifice",
    "theme": "AdvancedPawn",
    "difficulty": "Medium",
    "rating": 1374,
    "popularity": 100,
    "description": "Find the strongest continuation. Sacrifice material for a tactical gain.",
    "initialFen": "1k6/8/2K1p1p1/3pPp1p/2p2P1P/P1P3P1/8/8 w - - 10 51",
    "fen": "1k6/8/3Kp1p1/3pPp1p/2p2P1P/P1P3P1/8/8 b - - 11 51",
    "preMove": "Kd6",
    "solution": [
      "d4",
      "cxd4",
      "c3",
      "Kxe6",
      "c2"
    ]
  },
  {
    "id": "05yoK",
    "title": "Deflection",
    "theme": "Crushing",
    "difficulty": "Medium",
    "rating": 1221,
    "popularity": 100,
    "description": "Find the strongest continuation. Deflect the defender.",
    "initialFen": "6k1/pb4p1/1p5p/4Np2/3rp3/6P1/PP1NRPP1/5K2 w - - 0 28",
    "fen": "6k1/pb4p1/1p5p/4Np2/3rp3/1N4P1/PP2RPP1/5K2 b - - 1 28",
    "preMove": "Nb3",
    "solution": [
      "Rd1+",
      "Re1",
      "Ba6+",
      "Kg1",
      "Rxe1+"
    ]
  },
  {
    "id": "05zc8",
    "title": "Mate in 2",
    "theme": "Deflection",
    "difficulty": "Medium",
    "rating": 1083,
    "popularity": 100,
    "description": "Deflect the defender. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "3R4/p7/3b4/5kp1/P2P4/1P4PK/1r5P/8 w - - 0 42",
    "fen": "8/p7/3R4/5kp1/P2P4/1P4PK/1r5P/8 b - - 0 42",
    "preMove": "Rxd6",
    "solution": [
      "g4+",
      "Kh4",
      "Rxh2#"
    ]
  },
  {
    "id": "05zdL",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 800,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "1k1r3r/p4p1p/1qp5/8/4n1Q1/8/PPP1NbPP/R1B2K1R w - - 4 16",
    "fen": "1k1r3r/p4p1p/1qp5/8/4Q3/8/PPP1NbPP/R1B2K1R b - - 0 16",
    "preMove": "Qxe4",
    "solution": [
      "Rd1#"
    ]
  },
  {
    "id": "060cY",
    "title": "Discovered Attack",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1147,
    "popularity": 100,
    "description": "Unleash a discovered attack.",
    "initialFen": "r1b1k1nr/ppn4p/5p2/8/8/2P1PN2/PP1B1KPP/RN1q1B1R b kq - 0 11",
    "fen": "r3k1nr/ppn4p/5p2/8/6b1/2P1PN2/PP1B1KPP/RN1q1B1R w kq - 1 12",
    "preMove": "Bg4",
    "solution": [
      "Bb5+",
      "Nxb5",
      "Rxd1"
    ]
  },
  {
    "id": "060ou",
    "title": "Mate in 3",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1069,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "8/5k1p/Q5p1/1p2qp2/8/4b3/1P4PP/4RK2 w - - 0 43",
    "fen": "8/5k1p/6p1/1p2qp2/8/Q3b3/1P4PP/4RK2 b - - 1 43",
    "preMove": "Qa3",
    "solution": [
      "Qf4+",
      "Ke2",
      "Qf2+",
      "Kd1",
      "Qd2#"
    ]
  },
  {
    "id": "062iO",
    "title": "Mate in 2",
    "theme": "Mate",
    "difficulty": "Medium",
    "rating": 1282,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "4B2k/2Q4p/p1pp4/4p1b1/4Pq2/2P5/PP2KB2/R4R2 w - - 7 31",
    "fen": "4B2k/2Q4p/p1pp4/4p1b1/4Pq2/2P5/PP2KB2/3R1R2 b - - 8 31",
    "preMove": "Rad1",
    "solution": [
      "Qxe4+",
      "Be3",
      "Qxe3#"
    ]
  },
  {
    "id": "063Cg",
    "title": "Mate in 3",
    "theme": "Long",
    "difficulty": "Medium",
    "rating": 1314,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "5k1r/pp1q1p2/5Qp1/3p2N1/1P6/P3PBpr/5PKP/2RR4 w - - 0 27",
    "fen": "5k1r/pp1q1p2/5Qp1/3p4/1P6/P3PBpN/5PKP/2RR4 b - - 0 27",
    "preMove": "Nxh3",
    "solution": [
      "Qxh3+",
      "Kg1",
      "Qxh2+",
      "Kf1",
      "Qxf2#"
    ]
  },
  {
    "id": "064yK",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Medium",
    "rating": 1065,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "3q2k1/2p2ppp/4p3/2Q5/r1PP4/4PP2/6PP/1R4K1 w - - 0 27",
    "fen": "3q2k1/1Rp2ppp/4p3/2Q5/r1PP4/4PP2/6PP/6K1 b - - 1 27",
    "preMove": "Rb7",
    "solution": [
      "Ra1+",
      "Kf2",
      "Qh4+"
    ]
  },
  {
    "id": "065yh",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 845,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "8/7p/8/PP6/1r6/6k1/R3b3/6K1 w - - 1 72",
    "fen": "8/7p/8/PP6/1r6/6k1/4R3/6K1 b - - 0 72",
    "preMove": "Rxe2",
    "solution": [
      "Rb1+",
      "Re1",
      "Rxe1#"
    ]
  },
  {
    "id": "0660Y",
    "title": "Mate in 2",
    "theme": "AdvancedPawn",
    "difficulty": "Medium",
    "rating": 1020,
    "popularity": 100,
    "description": "Exploit the weak back rank. Find the forced checkmate. Find the forced mate in two. Promote your pawn.",
    "initialFen": "3r3k/3P2pp/4Q1p1/1pp5/3p1q2/pP1P3P/P1P3B1/6K1 b - - 0 30",
    "fen": "3r3k/2qP2pp/4Q1p1/1pp5/3p4/pP1P3P/P1P3B1/6K1 w - - 1 31",
    "preMove": "Qc7",
    "solution": [
      "Qe8+",
      "Rxe8",
      "dxe8=Q#"
    ]
  },
  {
    "id": "066Ja",
    "title": "Mate in 2",
    "theme": "Mate",
    "difficulty": "Medium",
    "rating": 1173,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two. Sacrifice material for a tactical gain.",
    "initialFen": "4r1k1/8/4rp2/P2p3p/2pBqPp1/2Q3Pb/1P2PK1P/4R2R w - - 1 26",
    "fen": "4r1k1/8/4rp2/P2p3p/2pBqPp1/2Q3Pb/1P2PK1P/4R1R1 b - - 2 26",
    "preMove": "Rhg1",
    "solution": [
      "Qxe2+",
      "Rxe2",
      "Rxe2#"
    ]
  },
  {
    "id": "067GA",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Expert",
    "rating": 1976,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "3rR3/5kp1/6p1/2p5/p2Bp3/P4q2/3Q1P2/5K1R b - - 0 36",
    "fen": "3rk3/6p1/6p1/2p5/p2Bp3/P4q2/3Q1P2/5K1R w - - 0 37",
    "preMove": "Kxe8",
    "solution": [
      "Rh8+",
      "Kf7",
      "Qa2+",
      "Ke7",
      "Bxc5+"
    ]
  },
  {
    "id": "0685f",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1032,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "4r2r/p3n2p/1pp1kpp1/3p4/3P1NN1/2P2PP1/PP1K2P1/7R b - - 3 26",
    "fen": "4r2r/p3nk1p/1pp2pp1/3p4/3P1NN1/2P2PP1/PP1K2P1/7R w - - 4 27",
    "preMove": "Kf7",
    "solution": [
      "Nh6+",
      "Kf8",
      "Ne6#"
    ]
  },
  {
    "id": "068L3",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Medium",
    "rating": 1011,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r1bqr1k1/pp3ppp/2nb4/1Bpn2B1/8/3P1N2/PPPK1PPP/R2Q3R w - - 0 11",
    "fen": "r1bBr1k1/pp3ppp/2nb4/1Bpn4/8/3P1N2/PPPK1PPP/R2Q3R b - - 0 11",
    "preMove": "Bxd8",
    "solution": [
      "Bf4#"
    ]
  },
  {
    "id": "068cj",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 823,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r1b2b1r/ppp2p1p/n4k2/4Q3/3PPB2/8/PPP4P/R3KB1q b Q - 1 18",
    "fen": "r1b2b1r/ppp2p1p/n5k1/4Q3/3PPB2/8/PPP4P/R3KB1q w Q - 2 19",
    "preMove": "Kg6",
    "solution": [
      "Qg5#"
    ]
  },
  {
    "id": "069LR",
    "title": "Winning Combination",
    "theme": "AdvancedPawn",
    "difficulty": "Easy",
    "rating": 823,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "8/5R2/5K1k/3pP3/2pP4/1pP5/1r6/8 w - - 0 71",
    "fen": "5R2/8/5K1k/3pP3/2pP4/1pP5/1r6/8 b - - 1 71",
    "preMove": "Rf8",
    "solution": [
      "Rf2+",
      "Ke7",
      "Rxf8",
      "Kxf8",
      "b2"
    ]
  },
  {
    "id": "069jq",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1139,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "4q2k/2Q4p/2p3p1/2p2rN1/3b1P2/3P3P/2P5/5R1K b - - 3 29",
    "fen": "4q2k/2Q5/2p3pp/2p2rN1/3b1P2/3P3P/2P5/5R1K w - - 0 30",
    "preMove": "h6",
    "solution": [
      "Qh7#"
    ]
  },
  {
    "id": "06AH0",
    "title": "Chess Puzzle",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1193,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "4r1k1/pp3p1p/3p2p1/8/3n4/P2RN2q/1P6/1B1Q2K1 b - - 0 33",
    "fen": "4r1k1/pp3p1p/3p2p1/8/3n4/P2RN1q1/1P6/1B1Q2K1 w - - 1 34",
    "preMove": "Qg3+",
    "solution": [
      "Ng2",
      "Ne2+",
      "Qxe2",
      "Rxe2",
      "Rxg3"
    ]
  },
  {
    "id": "06AHQ",
    "title": "Win the Hanging Piece",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1161,
    "popularity": 100,
    "description": "Capture the loose piece.",
    "initialFen": "r3q1k1/1pp1n2p/p2bN1pB/2nPpr2/4N3/3Q4/PPP2PPP/R3R1K1 w - - 8 17",
    "fen": "r3q1k1/1pp1n2p/p2bNNpB/2nPpr2/8/3Q4/PPP2PPP/R3R1K1 b - - 9 17",
    "preMove": "Nf6+",
    "solution": [
      "Rxf6",
      "Nxc5",
      "Bxc5"
    ]
  },
  {
    "id": "06ATO",
    "title": "Mate in 2",
    "theme": "Mate",
    "difficulty": "Hard",
    "rating": 1498,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "1r3r1k/1p4p1/p3Q2p/8/NP5P/P5q1/8/2R1R2K w - - 1 32",
    "fen": "1r3r1k/1p4p1/p3Q2p/8/NP5P/P5q1/8/2R3RK b - - 2 32",
    "preMove": "Rg1",
    "solution": [
      "Qxh4+",
      "Qh3",
      "Qxh3#"
    ]
  },
  {
    "id": "06Amy",
    "title": "Knight Fork",
    "theme": "Advantage",
    "difficulty": "Easy",
    "rating": 847,
    "popularity": 100,
    "description": "Win material using a tactical fork.",
    "initialFen": "8/p4k2/1p6/4P3/1P5Q/P1n1Bq2/5P2/6K1 w - - 1 49",
    "fen": "8/p4k2/1p6/4P3/1P3Q2/P1n1Bq2/5P2/6K1 b - - 2 49",
    "preMove": "Qf4+",
    "solution": [
      "Qxf4",
      "Bxf4",
      "Ne2+",
      "Kg2",
      "Nxf4+"
    ]
  },
  {
    "id": "06BMo",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Medium",
    "rating": 1111,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "8/pq6/1p2Q2P/8/2P5/3k4/P3p1P1/7K w - - 0 41",
    "fen": "8/pq6/1p5P/5Q2/2P5/3k4/P3p1P1/7K b - - 1 41",
    "preMove": "Qf5+",
    "solution": [
      "Qe4",
      "Qxe4+",
      "Kxe4"
    ]
  },
  {
    "id": "06Bzb",
    "title": "Chess Puzzle",
    "theme": "Advantage",
    "difficulty": "Hard",
    "rating": 1628,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "1k5r/pp4pp/2q1P3/8/N5Q1/1P6/P1r3PP/4R2K b - - 0 26",
    "fen": "1k5r/pp4pp/2q1P3/8/N5Q1/1P6/P5PP/2r1R2K w - - 1 27",
    "preMove": "Rc1",
    "solution": [
      "Qf4+",
      "Qc7",
      "Qxc1",
      "Qxc1",
      "Rxc1"
    ]
  },
  {
    "id": "06Bzf",
    "title": "Knight Fork",
    "theme": "Crushing",
    "difficulty": "Easy",
    "rating": 988,
    "popularity": 100,
    "description": "Find the strongest continuation. Win material using a tactical fork.",
    "initialFen": "8/1p2k3/p6R/6p1/1r6/2N5/3K4/8 b - - 4 50",
    "fen": "8/1p2k3/p6R/8/1r4p1/2N5/3K4/8 w - - 0 51",
    "preMove": "g4",
    "solution": [
      "Nd5+",
      "Kf7",
      "Nxb4"
    ]
  },
  {
    "id": "06CFU",
    "title": "Chess Puzzle",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1258,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "r2qk2r/pppn1ppp/4p3/3pPb2/4nB2/2P1P2P/PP3PP1/RN1QKB1R w KQkq - 1 9",
    "fen": "r2qk2r/pppn1ppp/4p3/3pPb2/4nB2/2P1PP1P/PP4P1/RN1QKB1R b KQkq - 0 9",
    "preMove": "f3",
    "solution": [
      "Qh4+",
      "g3",
      "Nxg3",
      "Bxg3",
      "Qxg3+"
    ]
  },
  {
    "id": "06CXU",
    "title": "Discovered Attack",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1378,
    "popularity": 100,
    "description": "Unleash a discovered attack.",
    "initialFen": "r7/1b1qR3/pp3kr1/2p2p1Q/2p5/1P6/P4PP1/5RK1 w - - 0 29",
    "fen": "r7/1b1R4/pp3kr1/2p2p1Q/2p5/1P6/P4PP1/5RK1 b - - 0 29",
    "preMove": "Rxd7",
    "solution": [
      "Rxg2+",
      "Kh1",
      "Rg5+",
      "Rxb7",
      "Rxh5+"
    ]
  },
  {
    "id": "06FA7",
    "title": "Chess Puzzle",
    "theme": "Endgame",
    "difficulty": "Expert",
    "rating": 1974,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "6k1/5pp1/4p2p/p2p4/1n1q4/1P5P/4BPP1/2Q3K1 b - - 0 29",
    "fen": "6k1/5pp1/4p2p/p2p4/3q4/1P1n3P/4BPP1/2Q3K1 w - - 1 30",
    "preMove": "Nd3",
    "solution": [
      "Qc8+",
      "Kh7",
      "Qc2"
    ]
  },
  {
    "id": "06FGD",
    "title": "Mate in 4",
    "theme": "Mate",
    "difficulty": "Medium",
    "rating": 1323,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate. Sacrifice material for a tactical gain.",
    "initialFen": "5rk1/1b2rBpp/2p5/p3q3/4P3/P1P2Q2/5RPP/3R3K b - - 0 26",
    "fen": "5rk1/1b3rpp/2p5/p3q3/4P3/P1P2Q2/5RPP/3R3K w - - 0 27",
    "preMove": "Rexf7",
    "solution": [
      "Qxf7+",
      "Rxf7",
      "Rd8+",
      "Qe8",
      "Rxe8+",
      "Rf8",
      "Rfxf8#"
    ]
  },
  {
    "id": "06G2U",
    "title": "Discovered Attack",
    "theme": "Advantage",
    "difficulty": "Expert",
    "rating": 1888,
    "popularity": 100,
    "description": "Unleash a discovered attack.",
    "initialFen": "r3r1k1/ppp2pp1/2n2n1p/4P3/8/2N2NqP/PPPQ1RP1/2K1R3 b - - 0 18",
    "fen": "3rr1k1/ppp2pp1/2n2n1p/4P3/8/2N2NqP/PPPQ1RP1/2K1R3 w - - 1 19",
    "preMove": "Rad8",
    "solution": [
      "exf6",
      "Rxd2",
      "Rxe8+",
      "Kh7",
      "Rxd2"
    ]
  },
  {
    "id": "06GcV",
    "title": "Mate in 3",
    "theme": "KingsideAttack",
    "difficulty": "Easy",
    "rating": 906,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "3r3k/ppp3pp/6r1/2P5/1n1P1p2/1Q3P1q/P3R2P/4RN1K b - - 5 31",
    "fen": "3r3k/ppp3p1/6rp/2P5/1n1P1p2/1Q3P1q/P3R2P/4RN1K w - - 0 32",
    "preMove": "h6",
    "solution": [
      "Re8+",
      "Rxe8",
      "Rxe8+",
      "Kh7",
      "Qg8#"
    ]
  },
  {
    "id": "06H5L",
    "title": "Skewer",
    "theme": "Crushing",
    "difficulty": "Easy",
    "rating": 874,
    "popularity": 100,
    "description": "Find the strongest continuation. Deflect the defender. Use a skewer to win material.",
    "initialFen": "7R/8/2r5/1k6/3K4/8/8/8 b - - 9 55",
    "fen": "7R/8/8/1kr5/3K4/8/8/8 w - - 10 56",
    "preMove": "Rc5",
    "solution": [
      "Rb8+",
      "Kc6",
      "Rc8+",
      "Kd7",
      "Rxc5"
    ]
  },
  {
    "id": "06HFe",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1126,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r4rk1/pp2Rq1p/2p2B1Q/5p2/2p5/7P/PP3PP1/3R2K1 b - - 2 20",
    "fen": "r4rk1/pp2R2p/2p2q1Q/5p2/2p5/7P/PP3PP1/3R2K1 w - - 0 21",
    "preMove": "Qxf6",
    "solution": [
      "Qxh7#"
    ]
  },
  {
    "id": "06HwA",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1245,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "6k1/5p2/8/P3p3/4P1P1/8/2NprqPK/R2Q4 w - - 3 42",
    "fen": "6k1/5p2/8/P3p3/4P1P1/8/2NprqPK/R5Q1 b - - 4 42",
    "preMove": "Qg1",
    "solution": [
      "Qh4#"
    ]
  },
  {
    "id": "06IKf",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 825,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "8/3Q3p/6pk/2b5/8/P5PP/5qBK/8 w - - 3 46",
    "fen": "8/7p/6pk/2b5/6Q1/P5PP/5qBK/8 b - - 4 46",
    "preMove": "Qg4",
    "solution": [
      "Qg1#"
    ]
  },
  {
    "id": "06IQw",
    "title": "Knight Fork",
    "theme": "Crushing",
    "difficulty": "Easy",
    "rating": 876,
    "popularity": 100,
    "description": "Find the strongest continuation. Win material using a tactical fork.",
    "initialFen": "8/8/p3k2p/5R1b/5K2/8/8/8 b - - 0 46",
    "fen": "8/8/p3k2p/5R2/5K2/8/4b3/8 w - - 1 47",
    "preMove": "Be2",
    "solution": [
      "Re5+",
      "Kd6",
      "Rxe2"
    ]
  },
  {
    "id": "06KDC",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 929,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "8/2rk4/p5Q1/1p1q2b1/3P4/6P1/PPP4P/1K2R3 w - - 3 35",
    "fen": "8/2rk4/p5Q1/1p1qR1b1/3P4/6P1/PPP4P/1K6 b - - 4 35",
    "preMove": "Re5",
    "solution": [
      "Qh1+",
      "Re1",
      "Qxe1#"
    ]
  },
  {
    "id": "06KIl",
    "title": "Mate in 1",
    "theme": "KingsideAttack",
    "difficulty": "Easy",
    "rating": 953,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r2q1rk1/pb3ppp/4pP2/2p1P3/2p2P2/1P1p1R2/P2P2QP/R1B3K1 b - - 0 19",
    "fen": "r2q1rk1/p4ppp/4pP2/2p1P3/2p2P2/1P1p1b2/P2P2QP/R1B3K1 w - - 0 20",
    "preMove": "Bxf3",
    "solution": [
      "Qxg7#"
    ]
  },
  {
    "id": "06NTJ",
    "title": "Skewer",
    "theme": "Crushing",
    "difficulty": "Easy",
    "rating": 936,
    "popularity": 100,
    "description": "Find the strongest continuation. Use a skewer to win material.",
    "initialFen": "8/8/r1p5/2K3pR/6P1/6kP/8/8 w - - 9 56",
    "fen": "8/8/r1p5/2K3R1/6P1/6kP/8/8 b - - 0 56",
    "preMove": "Rxg5",
    "solution": [
      "Ra5+",
      "Kxc6",
      "Rxg5"
    ]
  },
  {
    "id": "06NeY",
    "title": "Win the Hanging Piece",
    "theme": "Crushing",
    "difficulty": "Expert",
    "rating": 1927,
    "popularity": 100,
    "description": "Find the strongest continuation. Capture the loose piece.",
    "initialFen": "8/8/r4k2/P2Kp3/8/R7/4bP2/8 b - - 1 52",
    "fen": "8/8/r4k2/P2Kp3/8/R4b2/5P2/8 w - - 2 53",
    "preMove": "Bf3+",
    "solution": [
      "Rxf3+",
      "Ke7",
      "Ra3"
    ]
  },
  {
    "id": "06PHz",
    "title": "Mate in 2",
    "theme": "AdvancedPawn",
    "difficulty": "Hard",
    "rating": 1456,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "8/8/P1p5/2P5/2P1Pk1p/7p/6p1/6K1 w - - 1 43",
    "fen": "8/P7/2p5/2P5/2P1Pk1p/7p/6p1/6K1 b - - 0 43",
    "preMove": "a7",
    "solution": [
      "Kg3",
      "e5",
      "h2#"
    ]
  },
  {
    "id": "06PIm",
    "title": "Mate in 2",
    "theme": "Mate",
    "difficulty": "Medium",
    "rating": 1101,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r5k1/ppp2ppp/3P2r1/8/8/PBP1q2P/1PP3P1/R2Q1RK1 w - - 1 21",
    "fen": "r5k1/ppp2ppp/3P2r1/8/8/PBP1q2P/1PP3PK/R2Q1R2 b - - 2 21",
    "preMove": "Kh2",
    "solution": [
      "Qg3+",
      "Kg1",
      "Qxg2#"
    ]
  },
  {
    "id": "06PQC",
    "title": "Mate in 2",
    "theme": "KingsideAttack",
    "difficulty": "Medium",
    "rating": 1114,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r5k1/pp3pp1/r1n1P2p/1qp2Q2/6PP/PP1pP3/1B1P4/1K1R3R b - - 0 23",
    "fen": "r5k1/pp3pp1/r1n1P2p/2p2Q2/6PP/Pq1pP3/1B1P4/1K1R3R w - - 0 24",
    "preMove": "Qxb3",
    "solution": [
      "Qxf7+",
      "Kh8",
      "Qxg7#"
    ]
  },
  {
    "id": "06Pb8",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Expert",
    "rating": 1900,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "8/4k3/1p1p2K1/3P4/3n1N1P/8/8/8 b - - 3 58",
    "fen": "5k2/8/1p1p2K1/3P4/3n1N1P/8/8/8 w - - 4 59",
    "preMove": "Kf8",
    "solution": [
      "Ne6+",
      "Nxe6",
      "dxe6",
      "Ke7",
      "h5"
    ]
  },
  {
    "id": "06Pbu",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Medium",
    "rating": 1180,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "8/3Q3k/6bp/2qp1pp1/8/5BP1/2p1P2P/5K2 b - - 1 44",
    "fen": "6k1/3Q4/6bp/2qp1pp1/8/5BP1/2p1P2P/5K2 w - - 2 45",
    "preMove": "Kg8",
    "solution": [
      "Bxd5+",
      "Qxd5",
      "Qxd5+"
    ]
  },
  {
    "id": "06QjG",
    "title": "Promotion",
    "theme": "AdvancedPawn",
    "difficulty": "Easy",
    "rating": 914,
    "popularity": 100,
    "description": "Find the strongest continuation. Promote your pawn.",
    "initialFen": "3k4/3np3/3P1pP1/3qpQ2/8/2p4P/5P1K/8 b - - 2 45",
    "fen": "3k4/3np3/3q1pP1/4pQ2/8/2p4P/5P1K/8 w - - 0 46",
    "preMove": "Qxd6",
    "solution": [
      "g7",
      "Kc7",
      "g8=Q"
    ]
  },
  {
    "id": "06Rsk",
    "title": "Knight Fork",
    "theme": "Crushing",
    "difficulty": "Easy",
    "rating": 990,
    "popularity": 100,
    "description": "Find the strongest continuation. Win material using a tactical fork.",
    "initialFen": "8/R7/p3p3/4kp2/2b5/4PK2/8/8 w - - 6 50",
    "fen": "R7/8/p3p3/4kp2/2b5/4PK2/8/8 b - - 7 50",
    "preMove": "Ra8",
    "solution": [
      "Bd5+",
      "Ke2",
      "Bxa8"
    ]
  },
  {
    "id": "06S3i",
    "title": "Mate in 2",
    "theme": "KingsideAttack",
    "difficulty": "Medium",
    "rating": 1046,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "4r1k1/4rb2/p5p1/1p1p3p/2pR3P/2P2Pq1/PPB3P1/2QR2K1 w - - 14 38",
    "fen": "4r1k1/4rb2/p5p1/1p1p2Qp/2pR3P/2P2Pq1/PPB3P1/3R2K1 b - - 15 38",
    "preMove": "Qg5",
    "solution": [
      "Re1+",
      "Rxe1",
      "Rxe1#"
    ]
  },
  {
    "id": "06SCY",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1194,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "8/1p3k2/p1p5/2Pp4/PP2p3/2K1Qq2/4N3/8 w - - 1 51",
    "fen": "8/1p3k2/p1p5/2Pp4/PP1Kp3/4Qq2/4N3/8 b - - 2 51",
    "preMove": "Kd4",
    "solution": [
      "Qf6#"
    ]
  },
  {
    "id": "06Ss1",
    "title": "Knight Fork",
    "theme": "Advantage",
    "difficulty": "Hard",
    "rating": 1600,
    "popularity": 100,
    "description": "Lure the opponent's piece onto an unfavorable square. Win material using a tactical fork.",
    "initialFen": "1k2r3/1p5p/n2pN3/3P4/1P6/P4RP1/6KP/2b5 b - - 0 37",
    "fen": "1k2r3/1pn4p/3pN3/3P4/1P6/P4RP1/6KP/2b5 w - - 1 38",
    "preMove": "Nc7",
    "solution": [
      "Nxc7",
      "Kxc7",
      "Rc3+",
      "Kd8",
      "Rxc1"
    ]
  },
  {
    "id": "06Swt",
    "title": "Mate in 1",
    "theme": "AttackingF2F7",
    "difficulty": "Easy",
    "rating": 904,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "2rqk2r/Q4ppp/2pb4/2P1pb2/8/1B1n1P2/PP4PP/R1B2KNR b k - 1 16",
    "fen": "2rqk2r/Q4ppp/2p5/2b1pb2/8/1B1n1P2/PP4PP/R1B2KNR w k - 0 17",
    "preMove": "Bxc5",
    "solution": [
      "Qxf7#"
    ]
  },
  {
    "id": "06TaJ",
    "title": "Mate in 1",
    "theme": "BackRankMate",
    "difficulty": "Easy",
    "rating": 864,
    "popularity": 100,
    "description": "Exploit the weak back rank. Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "1R6/R6p/8/2pB4/3b4/2k5/Pr1r2PP/7K w - - 3 34",
    "fen": "8/R6p/8/2pB4/3b4/2k5/PR1r2PP/7K b - - 0 34",
    "preMove": "Rxb2",
    "solution": [
      "Rd1#"
    ]
  },
  {
    "id": "06V0l",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 875,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "3r1b2/7p/1p3p2/5R2/4P1k1/6N1/PPP3PP/2K5 w - - 2 28",
    "fen": "3r1b2/7p/1p3p2/5R2/4P1k1/1P4N1/P1P3PP/2K5 b - - 0 28",
    "preMove": "b3",
    "solution": [
      "Ba3+",
      "Kb1",
      "Rd1#"
    ]
  },
  {
    "id": "06V1F",
    "title": "Knight Fork",
    "theme": "Crushing",
    "difficulty": "Medium",
    "rating": 1076,
    "popularity": 100,
    "description": "Find the strongest continuation. Win material using a tactical fork.",
    "initialFen": "4r1k1/pb5q/2p3pB/2Pp3B/1P1np3/P5Q1/6P1/5RK1 w - - 2 31",
    "fen": "4r1k1/pb5q/2p3BB/2Pp4/1P1np3/P5Q1/6P1/5RK1 b - - 0 31",
    "preMove": "Bxg6",
    "solution": [
      "Ne2+",
      "Kf2",
      "Nxg3",
      "Bxh7+",
      "Kxh7"
    ]
  },
  {
    "id": "06VPM",
    "title": "Chess Puzzle",
    "theme": "Advantage",
    "difficulty": "Hard",
    "rating": 1403,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "6k1/1qr2pp1/1p2p2p/4P2P/7Q/5P2/5P2/R5K1 b - - 3 39",
    "fen": "6k1/1qr2pp1/4p2p/1p2P2P/7Q/5P2/5P2/R5K1 w - - 0 40",
    "preMove": "b5",
    "solution": [
      "Qd8+",
      "Kh7",
      "Ra8",
      "Qxa8",
      "Qxa8"
    ]
  },
  {
    "id": "06WKQ",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 814,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "2r5/7R/p1p5/1kN5/1Pp3b1/P4n2/1K6/8 b - - 2 42",
    "fen": "r7/7R/p1p5/1kN5/1Pp3b1/P4n2/1K6/8 w - - 3 43",
    "preMove": "Ra8",
    "solution": [
      "Rb7#"
    ]
  },
  {
    "id": "06X2K",
    "title": "Skewer",
    "theme": "Crushing",
    "difficulty": "Easy",
    "rating": 942,
    "popularity": 100,
    "description": "Find the strongest continuation. Use a skewer to win material.",
    "initialFen": "r2k1n2/4bQ2/q2p1p2/3Rp2p/1p6/1B5P/1KP3P1/7R w - - 1 31",
    "fen": "r2k1n2/4bQ2/q2p1p2/3Rp2p/1p6/1B5P/2P3P1/2K4R b - - 2 31",
    "preMove": "Kc1",
    "solution": [
      "Qa1+",
      "Kd2",
      "Qxh1",
      "Rxd6+",
      "Bxd6"
    ]
  },
  {
    "id": "06X3m",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1189,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "4n3/1ppqNQpk/7p/pP6/P2b4/B6P/5PP1/6K1 b - - 0 31",
    "fen": "4n3/1ppqNQpk/5b1p/pP6/P7/B6P/5PP1/6K1 w - - 1 32",
    "preMove": "Bf6",
    "solution": [
      "Qg8#"
    ]
  },
  {
    "id": "06X3v",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Easy",
    "rating": 883,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "7r/1r2pk2/3p1n2/p1pP1P2/2B3p1/1P5R/P5K1/7R b - - 0 42",
    "fen": "1r5r/4pk2/3p1n2/p1pP1P2/2B3p1/1P5R/P5K1/7R w - - 1 43",
    "preMove": "Rbb8",
    "solution": [
      "Rxh8",
      "Rxh8",
      "Rxh8"
    ]
  },
  {
    "id": "06Xkp",
    "title": "Knight Fork",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1285,
    "popularity": 100,
    "description": "Win material using a tactical fork.",
    "initialFen": "4r1k1/R5b1/6pp/3p4/5N1P/8/Pr4P1/5RK1 w - - 2 32",
    "fen": "4r1k1/R5b1/6Np/3p4/7P/8/Pr4P1/5RK1 b - - 0 32",
    "preMove": "Nxg6",
    "solution": [
      "Bd4+",
      "Kh2",
      "Bxa7"
    ]
  },
  {
    "id": "06YSa",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Medium",
    "rating": 1090,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "2kr1b1r/QbppN1p1/1p3n2/q3p2p/2P4P/4B1P1/PP2PPB1/R4RK1 b - - 4 15",
    "fen": "2kr3r/Qbppb1p1/1p3n2/q3p2p/2P4P/4B1P1/PP2PPB1/R4RK1 w - - 0 16",
    "preMove": "Bxe7",
    "solution": [
      "Qxb7#"
    ]
  },
  {
    "id": "06Ycl",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1091,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "6k1/1p4p1/1P1N4/2Pp3Q/3P2nP/4P1Pq/5P2/6K1 w - - 1 39",
    "fen": "6k1/1p4p1/1P6/2Pp1N1Q/3P2nP/4P1Pq/5P2/6K1 b - - 2 39",
    "preMove": "Nf5",
    "solution": [
      "Qh2+",
      "Kf1",
      "Qxf2#"
    ]
  },
  {
    "id": "06YlU",
    "title": "Mate in 3",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1147,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "4r1k1/1p6/p1p2Rp1/3p4/PP1P2pP/4r1P1/6K1/5R2 b - - 1 37",
    "fen": "6k1/1p6/p1p1rRp1/3p4/PP1P2pP/4r1P1/6K1/5R2 w - - 2 38",
    "preMove": "R8e6",
    "solution": [
      "Rf8+",
      "Kh7",
      "R1f7+",
      "Kh6",
      "Rh8#"
    ]
  },
  {
    "id": "06YzQ",
    "title": "Knight Fork",
    "theme": "Advantage",
    "difficulty": "Expert",
    "rating": 1856,
    "popularity": 100,
    "description": "Win material using a tactical fork.",
    "initialFen": "2r1r3/1p3p1k/p1p4p/3p1Np1/5b2/2N2P2/PP4K1/3RR3 b - - 3 28",
    "fen": "2r1r3/1p3p2/p1p3kp/3p1Np1/5b2/2N2P2/PP4K1/3RR3 w - - 4 29",
    "preMove": "Kg6",
    "solution": [
      "Ne7+",
      "Kf6",
      "Nxc8"
    ]
  },
  {
    "id": "06Z8B",
    "title": "Pin Tactic",
    "theme": "Advantage",
    "difficulty": "Easy",
    "rating": 999,
    "popularity": 100,
    "description": "Exploit the pinned piece.",
    "initialFen": "3r4/1b2kp1p/2q1pp2/1pb5/8/1B3N2/1PP1QPrP/4R1RK w - - 0 20",
    "fen": "3r4/1b2kp1p/2q1pp2/1pb5/8/1B3N2/1PP1QPRP/4R2K b - - 0 20",
    "preMove": "Rxg2",
    "solution": [
      "Qxf3",
      "Qxf3",
      "Bxf3"
    ]
  },
  {
    "id": "06ZOL",
    "title": "Chess Puzzle",
    "theme": "Equality",
    "difficulty": "Expert",
    "rating": 2080,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "7k/4qp2/p4n2/1p3QP1/4p2P/P1PrP3/2Rn1PB1/6K1 b - - 0 29",
    "fen": "7k/4qp2/p7/1p3QPn/4p2P/P1PrP3/2Rn1PB1/6K1 w - - 1 30",
    "preMove": "Nh5",
    "solution": [
      "Rxd2",
      "Rxd2",
      "Bxe4"
    ]
  },
  {
    "id": "06a9D",
    "title": "Attraction",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1370,
    "popularity": 100,
    "description": "Lure the opponent's piece onto an unfavorable square.",
    "initialFen": "4k3/4q3/7Q/1P1pp1pK/4p1B1/4P1P1/P4n1P/8 w - - 1 43",
    "fen": "4k3/4q3/8/1P1pp1QK/4p1B1/4P1P1/P4n1P/8 b - - 0 43",
    "preMove": "Qxg5",
    "solution": [
      "Qh7+",
      "Qh6",
      "Qxh6+",
      "Kxh6",
      "Nxg4+"
    ]
  },
  {
    "id": "06aAU",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Hard",
    "rating": 1412,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "8/3rk1p1/4p3/6Q1/1P3K2/r7/8/8 b - - 2 56",
    "fen": "8/3r2p1/3kp3/6Q1/1P3K2/r7/8/8 w - - 3 57",
    "preMove": "Kd6",
    "solution": [
      "Qc5#"
    ]
  },
  {
    "id": "06ala",
    "title": "Interference",
    "theme": "Crushing",
    "difficulty": "Expert",
    "rating": 1863,
    "popularity": 100,
    "description": "Find the strongest continuation. Interfere with the opponent's coordination.",
    "initialFen": "8/1p5p/p5p1/4kp2/7r/P1N1K3/1P1R3P/8 w - - 0 31",
    "fen": "8/1p5p/p5p1/3Nkp2/7r/P3K3/1P1R3P/8 b - - 1 31",
    "preMove": "Nd5",
    "solution": [
      "Rh3+",
      "Kf2",
      "Rxh2+"
    ]
  },
  {
    "id": "06awF",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Hard",
    "rating": 1603,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "2r3k1/1R3Rpp/p3p3/3pP3/P2P4/8/5KPP/2r5 b - - 2 26",
    "fen": "6k1/1R3Rpp/p3p3/3pP3/P2P4/8/2r2KPP/2r5 w - - 3 27",
    "preMove": "R8c2+",
    "solution": [
      "Kg3",
      "Rg1",
      "Rxg7+"
    ]
  },
  {
    "id": "06ayb",
    "title": "Mate in 2",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 886,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r3q2k/pp2rpp1/1n6/6p1/3P4/2PB4/PP6/2KR3Q b - - 1 23",
    "fen": "r3q1k1/pp2rpp1/1n6/6p1/3P4/2PB4/PP6/2KR3Q w - - 2 24",
    "preMove": "Kg8",
    "solution": [
      "Qh7+",
      "Kf8",
      "Qh8#"
    ]
  },
  {
    "id": "06crO",
    "title": "Mate in 1",
    "theme": "Master",
    "difficulty": "Easy",
    "rating": 912,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r4rk1/1p2q1p1/p4nQ1/3PB3/8/PP2P3/3P3P/2KR2R1 b - - 0 24",
    "fen": "r4rk1/1p4p1/p4nQ1/3Pq3/8/PP2P3/3P3P/2KR2R1 w - - 0 25",
    "preMove": "Qxe5",
    "solution": [
      "Qxg7#"
    ]
  },
  {
    "id": "06e87",
    "title": "Pin Tactic",
    "theme": "Crushing",
    "difficulty": "Expert",
    "rating": 2131,
    "popularity": 100,
    "description": "Find the strongest continuation. Exploit the pinned piece.",
    "initialFen": "3q1rk1/rb4p1/4pn1R/pp3B2/3P4/5N1P/PPQ2P2/2K3R1 b - - 0 20",
    "fen": "3q1rk1/r5p1/4pn1R/pp3B2/3P4/5b1P/PPQ2P2/2K3R1 w - - 0 21",
    "preMove": "Bxf3",
    "solution": [
      "Bxe6+",
      "Rff7",
      "Rxg7+"
    ]
  },
  {
    "id": "06eQu",
    "title": "Chess Puzzle",
    "theme": "Advantage",
    "difficulty": "Expert",
    "rating": 1899,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "r3r3/p1pk1p2/4qppQ/8/2N4R/1P5P/1PP3P1/6K1 b - - 2 27",
    "fen": "r6r/p1pk1p2/4qppQ/8/2N4R/1P5P/1PP3P1/6K1 w - - 3 28",
    "preMove": "Rh8",
    "solution": [
      "Qd2+",
      "Ke7",
      "Qb4+"
    ]
  },
  {
    "id": "06eep",
    "title": "Promotion",
    "theme": "AdvancedPawn",
    "difficulty": "Medium",
    "rating": 1187,
    "popularity": 100,
    "description": "Find the strongest continuation. Promote your pawn.",
    "initialFen": "8/8/1K2p3/5p2/P2P1k2/8/8/8 b - - 1 43",
    "fen": "8/8/1K2p3/5p2/P2Pk3/8/8/8 w - - 2 44",
    "preMove": "Ke4",
    "solution": [
      "a5",
      "Kxd4",
      "a6",
      "f4",
      "a7",
      "f3",
      "a8=Q"
    ]
  },
  {
    "id": "06ejT",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 857,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "2r3k1/6b1/b3p2N/p6Q/1p1q4/3p1P1P/P3B3/6RK b - - 3 37",
    "fen": "2r2k2/6b1/b3p2N/p6Q/1p1q4/3p1P1P/P3B3/6RK w - - 4 38",
    "preMove": "Kf8",
    "solution": [
      "Qf7#"
    ]
  },
  {
    "id": "06ep2",
    "title": "Mate in 2",
    "theme": "KingsideAttack",
    "difficulty": "Medium",
    "rating": 1260,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r5k1/pp3p2/3N1bp1/3q1b2/2pp2r1/5N2/PPP2P1Q/3R1K1R b - - 7 23",
    "fen": "r5k1/pp3p2/3N1bp1/5b2/2pp2r1/5q2/PPP2P1Q/3R1K1R w - - 0 24",
    "preMove": "Qxf3",
    "solution": [
      "Qh7+",
      "Kf8",
      "Qxf7#"
    ]
  },
  {
    "id": "06fZJ",
    "title": "Chess Puzzle",
    "theme": "Equality",
    "difficulty": "Expert",
    "rating": 1886,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "r1b2rk1/p6p/2n1p1p1/1p6/2p1N3/5P2/PPPR2P1/2K4R b - - 1 18",
    "fen": "r4rk1/pb5p/2n1p1p1/1p6/2p1N3/5P2/PPPR2P1/2K4R w - - 2 19",
    "preMove": "Bb7",
    "solution": [
      "Rd7",
      "h5",
      "Rxb7"
    ]
  },
  {
    "id": "06fhB",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Expert",
    "rating": 1943,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "8/r7/5kP1/8/3K3P/8/2p5/4R3 w - - 2 57",
    "fen": "8/r7/5kP1/7P/3K4/8/2p5/4R3 b - - 0 57",
    "preMove": "h5",
    "solution": [
      "Rd7+",
      "Kc3",
      "Rd1",
      "Re6+",
      "Kxe6"
    ]
  },
  {
    "id": "06gix",
    "title": "Mate in 3",
    "theme": "KingsideAttack",
    "difficulty": "Medium",
    "rating": 1187,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "r3r1k1/pp1qnppp/2p5/6N1/3PQ3/1P6/P4PPP/R3R1K1 b - - 2 17",
    "fen": "r3r1k1/pp1qnpp1/2p4p/6N1/3PQ3/1P6/P4PPP/R3R1K1 w - - 0 18",
    "preMove": "h6",
    "solution": [
      "Qh7+",
      "Kf8",
      "Qh8+",
      "Ng8",
      "Nh7#"
    ]
  },
  {
    "id": "06gjC",
    "title": "Mate in 1",
    "theme": "KingsideAttack",
    "difficulty": "Easy",
    "rating": 882,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "rnb4k/pp3prp/2p2Q1p/b2pP3/3P3N/2PB3q/PP1N1PP1/R4RK1 w - - 2 20",
    "fen": "rnb4k/pp3prp/2p2Q1p/b2pPN2/3P4/2PB3q/PP1N1PP1/R4RK1 b - - 3 20",
    "preMove": "Nf5",
    "solution": [
      "Qxg2#"
    ]
  },
  {
    "id": "06hXj",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Hard",
    "rating": 1428,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "7q/1p3Q2/1kp5/7r/3P4/1PP5/1P4P1/4R1K1 w - - 1 27",
    "fen": "7q/1p6/1kp5/7r/3P4/1PP2Q2/1P4P1/4R1K1 b - - 2 27",
    "preMove": "Qf3",
    "solution": [
      "Rh1+",
      "Kf2",
      "Qh4+",
      "Qg3",
      "Qxg3+",
      "Kxg3",
      "Rxe1"
    ]
  },
  {
    "id": "06hgj",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1223,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "8/pp5k/7n/2b4Q/7P/6Pq/PPP2r2/R4NK1 w - - 4 27",
    "fen": "8/pp5k/7n/2Q5/7P/6Pq/PPP2r2/R4NK1 b - - 0 27",
    "preMove": "Qxc5",
    "solution": [
      "Qg2#"
    ]
  },
  {
    "id": "06hti",
    "title": "Mate in 1",
    "theme": "Master",
    "difficulty": "Medium",
    "rating": 1122,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "2kr2r1/p2p1p1p/1p2p3/4qp2/2P2P2/P1N4b/1PQ1Bb1P/3R3K w - - 0 25",
    "fen": "2kr2r1/p2p1p1p/1p2p3/4Pp2/2P5/P1N4b/1PQ1Bb1P/3R3K b - - 0 25",
    "preMove": "fxe5",
    "solution": [
      "Bg2#"
    ]
  },
  {
    "id": "06jBT",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Medium",
    "rating": 1171,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "6k1/3q1pb1/p5pp/1p1p3r/5Q2/P2BPbP1/1P3PP1/2R3K1 w - - 0 25",
    "fen": "6k1/3q1pb1/p5pp/1p1p3r/5Q2/P2BPPP1/1P3P2/2R3K1 b - - 0 25",
    "preMove": "gxf3",
    "solution": [
      "Qh3",
      "Qh4",
      "Rxh4"
    ]
  },
  {
    "id": "06lwV",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 979,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r2q1rk1/1p1nbp2/p2p2p1/3P2P1/3B4/3Q1P2/PPP5/R3KB1R b KQ - 0 18",
    "fen": "r2q1rk1/1p1n1p2/p2p2p1/3P2b1/3B4/3Q1P2/PPP5/R3KB1R w KQ - 0 19",
    "preMove": "Bxg5",
    "solution": [
      "Rh8#"
    ]
  },
  {
    "id": "06msP",
    "title": "Chess Puzzle",
    "theme": "Advantage",
    "difficulty": "Expert",
    "rating": 2119,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "1r4k1/5pp1/1rpq3p/p2b4/1P1N4/P1Q2PP1/2P4P/K2R1R2 w - - 0 28",
    "fen": "1r4k1/5pp1/1rpq3p/p1Qb4/1P1N4/P4PP1/2P4P/K2R1R2 b - - 1 28",
    "preMove": "Qc5",
    "solution": [
      "Qxc5",
      "bxc5",
      "Rb2",
      "Nb3",
      "Rxc2"
    ]
  },
  {
    "id": "06mwE",
    "title": "Mate in 2",
    "theme": "KingsideAttack",
    "difficulty": "Easy",
    "rating": 832,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r4b1r/pp1k2p1/3q3p/2p5/3n2n1/5N2/PPP1QPPP/RNBR2K1 w - - 4 14",
    "fen": "r4b1r/pp1k2p1/3q3p/2p5/3N2n1/8/PPP1QPPP/RNBR2K1 b - - 0 14",
    "preMove": "Nxd4",
    "solution": [
      "Qxh2+",
      "Kf1",
      "Qh1#"
    ]
  },
  {
    "id": "06nNG",
    "title": "Knight Fork",
    "theme": "Advantage",
    "difficulty": "Easy",
    "rating": 890,
    "popularity": 100,
    "description": "Win material using a tactical fork.",
    "initialFen": "r1b1nqk1/pp1p1p1p/6p1/3Np3/3nP3/1B3P2/PPPQ2PP/2KR3R w - - 4 17",
    "fen": "r1b1nqk1/pp1p1p1p/6p1/3Np3/3nP3/1BQ2P2/PPP3PP/2KR3R b - - 5 17",
    "preMove": "Qc3",
    "solution": [
      "Ne2+",
      "Kb1",
      "Nxc3+"
    ]
  },
  {
    "id": "06nk9",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Easy",
    "rating": 949,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "k3r3/P5R1/1K6/8/8/8/8/8 w - - 3 60",
    "fen": "k3r3/PR6/1K6/8/8/8/8/8 b - - 4 60",
    "preMove": "Rb7",
    "solution": [
      "Re6+",
      "Kc7",
      "Re7+",
      "Kc6",
      "Rxb7"
    ]
  },
  {
    "id": "06oy2",
    "title": "Mate in 2",
    "theme": "Fork",
    "difficulty": "Easy",
    "rating": 923,
    "popularity": 100,
    "description": "Win material using a tactical fork. Find the forced checkmate. Find the forced mate in two. Exploit the pinned piece.",
    "initialFen": "1nkr2n1/1pp4p/3PB1b1/8/8/7p/P1P2QPP/qN4KR b - - 1 23",
    "fen": "1nk3n1/1ppr3p/3PB1b1/8/8/7p/P1P2QPP/qN4KR w - - 2 24",
    "preMove": "Rd7",
    "solution": [
      "Qf8+",
      "Be8",
      "Qxe8#"
    ]
  },
  {
    "id": "06pJP",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Hard",
    "rating": 1509,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r7/pp1n1kp1/2p5/3pp1B1/8/2PP3b/PP2PPBq/R2Q1K2 w - - 3 18",
    "fen": "r7/pp1n1kp1/2p5/3pp1B1/8/2PP3B/PP2PP1q/R2Q1K2 b - - 0 18",
    "preMove": "Bxh3",
    "solution": [
      "Qh1#"
    ]
  },
  {
    "id": "06pfS",
    "title": "Mate in 3",
    "theme": "Long",
    "difficulty": "Easy",
    "rating": 995,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in three. Exploit the pinned piece.",
    "initialFen": "1rb2r1k/1p4qp/1p1p2B1/7Q/1P3R2/2P5/P5PP/4R2K b - - 0 22",
    "fen": "1rb4k/1p4qp/1p1p2B1/7Q/1P3r2/2P5/P5PP/4R2K w - - 0 23",
    "preMove": "Rxf4",
    "solution": [
      "Re8+",
      "Rf8",
      "Rxf8+",
      "Qxf8",
      "Qxh7#"
    ]
  },
  {
    "id": "06pvW",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Medium",
    "rating": 1215,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "3r2k1/pp1P1ppp/8/2p5/P1n5/2P5/1P2R1PP/4B1K1 b - - 0 25",
    "fen": "3r2k1/pp1P2pp/5p2/2p5/P1n5/2P5/1P2R1PP/4B1K1 w - - 0 26",
    "preMove": "f6",
    "solution": [
      "Re8+",
      "Kf7",
      "Rxd8"
    ]
  },
  {
    "id": "06qkY",
    "title": "Mate in 2",
    "theme": "BishopEndgame",
    "difficulty": "Hard",
    "rating": 1587,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "8/6p1/p3bp2/P6P/2p2k1K/2B4P/1P6/8 w - - 1 45",
    "fen": "8/6p1/p3bp1P/P7/2p2k1K/2B4P/1P6/8 b - - 0 45",
    "preMove": "h6",
    "solution": [
      "g5+",
      "Kh5",
      "Bf7#"
    ]
  },
  {
    "id": "06r2x",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 848,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "3rr1k1/pp3p2/5PB1/8/6nq/1PP3R1/2Q3PP/5RK1 w - - 1 29",
    "fen": "3rr1k1/pp3p2/5P2/5B2/6nq/1PP3R1/2Q3PP/5RK1 b - - 2 29",
    "preMove": "Bf5",
    "solution": [
      "Qxh2#"
    ]
  },
  {
    "id": "06s4a",
    "title": "Knight Fork",
    "theme": "Equality",
    "difficulty": "Expert",
    "rating": 1835,
    "popularity": 100,
    "description": "Win material using a tactical fork.",
    "initialFen": "rn2k2r/ppp2ppp/4b3/3N4/3bq3/1Q4P1/PP2NP1P/R3KB1R b KQkq - 1 11",
    "fen": "rn2k2r/ppp2ppp/4b3/3N4/3b4/1Q4P1/PP2NP1P/R3KB1q w Qkq - 0 12",
    "preMove": "Qxh1",
    "solution": [
      "Nxc7+",
      "Kd8",
      "Nxe6+"
    ]
  },
  {
    "id": "06sCu",
    "title": "Discovered Attack",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1238,
    "popularity": 100,
    "description": "Unleash a discovered attack.",
    "initialFen": "7r/1pp1kp1p/rbq1p1p1/PN1p4/Q2P4/4P1P1/2P2PP1/R4RK1 b - - 6 20",
    "fen": "7r/1pp1kp1p/1bq1p1p1/rN1p4/Q2P4/4P1P1/2P2PP1/R4RK1 w - - 0 21",
    "preMove": "Rxa5",
    "solution": [
      "Qb4+",
      "Kd7",
      "Rxa5",
      "Bxa5",
      "Qxa5"
    ]
  },
  {
    "id": "06skk",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1340,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "4k3/r1p5/5Kpp/2N2b2/2BR4/1Pr4P/8/8 b - - 2 32",
    "fen": "4k3/r1p5/5Kpp/2N2b2/2BR4/1P3r1P/8/8 w - - 3 33",
    "preMove": "Rf3",
    "solution": [
      "Bf7+",
      "Kf8",
      "Rd8#"
    ]
  },
  {
    "id": "06soA",
    "title": "Chess Puzzle",
    "theme": "Advantage",
    "difficulty": "Hard",
    "rating": 1693,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "3r2k1/2q2pp1/1p6/4P3/1Pr1Q2b/P4R1P/1B4PK/1R6 w - - 7 31",
    "fen": "3r2k1/2q2pp1/1p6/4PQ2/1Pr4b/P4R1P/1B4PK/1R6 b - - 8 31",
    "preMove": "Qf5",
    "solution": [
      "g6",
      "Qxf7+",
      "Qxf7",
      "Rxf7",
      "Kxf7"
    ]
  },
  {
    "id": "06uW3",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 907,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r1bq3r/ppnp1p2/3kp3/2p1QR1p/8/3P4/PPP3PP/RNb3K1 b - - 1 14",
    "fen": "r1bq3r/ppnp1p2/2k1p3/2p1QR1p/8/3P4/PPP3PP/RNb3K1 w - - 2 15",
    "preMove": "Kc6",
    "solution": [
      "Qxc5#"
    ]
  },
  {
    "id": "06uy0",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 877,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r3kb1r/2q1p1p1/p2pPn1p/1p2Q3/8/3B4/PP3PPP/R1BR2K1 b kq - 0 15",
    "fen": "r3kb1r/2q1p1p1/p3Pn1p/1p2p3/8/3B4/PP3PPP/R1BR2K1 w kq - 0 16",
    "preMove": "dxe5",
    "solution": [
      "Bg6#"
    ]
  },
  {
    "id": "06vKW",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Medium",
    "rating": 1090,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r2q1r2/2pb1pk1/p1np3p/2bBp1pQ/1p2P1N1/3P2BP/PPP2PP1/R3K2R b KQ - 4 15",
    "fen": "r2q3r/2pb1pk1/p1np3p/2bBp1pQ/1p2P1N1/3P2BP/PPP2PP1/R3K2R w KQ - 5 16",
    "preMove": "Rh8",
    "solution": [
      "Qxf7#"
    ]
  },
  {
    "id": "06vaG",
    "title": "Discovered Attack",
    "theme": "Advantage",
    "difficulty": "Easy",
    "rating": 838,
    "popularity": 100,
    "description": "Unleash a discovered attack.",
    "initialFen": "5rk1/5pp1/7p/2p2q2/4B3/5PP1/4Q2P/6K1 b - - 2 43",
    "fen": "5rk1/5pp1/7p/2p1q3/4B3/5PP1/4Q2P/6K1 w - - 3 44",
    "preMove": "Qe5",
    "solution": [
      "Bh7+",
      "Kh8",
      "Qxe5"
    ]
  },
  {
    "id": "06vzw",
    "title": "Knight Fork",
    "theme": "Advantage",
    "difficulty": "Easy",
    "rating": 932,
    "popularity": 100,
    "description": "Win material using a tactical fork.",
    "initialFen": "4r3/1p4k1/p6p/3R2b1/P2N4/1KP5/8/8 b - - 4 53",
    "fen": "8/1p2r1k1/p6p/3R2b1/P2N4/1KP5/8/8 w - - 5 54",
    "preMove": "Re7",
    "solution": [
      "Nf5+",
      "Kf7",
      "Nxe7"
    ]
  },
  {
    "id": "06wOT",
    "title": "Mate in 2",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 852,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r2q3r/1p1n2pk/p1n3p1/4P3/3P4/1Q2NR2/PP4PP/R5K1 b - - 2 20",
    "fen": "r2q3r/1p1n2pk/p5p1/4P3/3n4/1Q2NR2/PP4PP/R5K1 w - - 0 21",
    "preMove": "Nxd4",
    "solution": [
      "Rh3+",
      "Qh4",
      "Rxh4#"
    ]
  },
  {
    "id": "06wjM",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1306,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r5r1/p4pnk/4P3/1pp2pR1/2p4P/2K1PN2/PP6/6R1 b - - 0 32",
    "fen": "r5r1/p4p1k/4n3/1pp2pR1/2p4P/2K1PN2/PP6/6R1 w - - 0 33",
    "preMove": "Nxe6",
    "solution": [
      "Rh5#"
    ]
  },
  {
    "id": "06wsY",
    "title": "Mate in 2",
    "theme": "Mate",
    "difficulty": "Hard",
    "rating": 1426,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two. Sacrifice material for a tactical gain.",
    "initialFen": "6rk/1p2b1q1/p1n1Q3/5p2/2Pp1p2/3P1N1p/PP3PbK/4RBR1 w - - 0 33",
    "fen": "6rk/1p2b1q1/p1n5/5Q2/2Pp1p2/3P1N1p/PP3PbK/4RBR1 b - - 0 33",
    "preMove": "Qxf5",
    "solution": [
      "Qg3+",
      "fxg3",
      "fxg3#"
    ]
  },
  {
    "id": "06yZ3",
    "title": "Win the Hanging Piece",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1099,
    "popularity": 100,
    "description": "Capture the loose piece.",
    "initialFen": "5k2/1r3p2/6p1/q4p2/P1BQ4/1P5R/1KP5/8 w - - 4 45",
    "fen": "3Q1k2/1r3p2/6p1/q4p2/P1B5/1P5R/1KP5/8 b - - 5 45",
    "preMove": "Qd8+",
    "solution": [
      "Qxd8",
      "Rh8+",
      "Ke7",
      "Rxd8",
      "Kxd8"
    ]
  },
  {
    "id": "06yh9",
    "title": "Knight Fork",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1154,
    "popularity": 100,
    "description": "Win material using a tactical fork.",
    "initialFen": "6k1/2n3pp/1pp2r2/p3Rp2/3r4/P7/1P3PPP/2N1R1K1 b - - 1 29",
    "fen": "8/2n2kpp/1pp2r2/p3Rp2/3r4/P7/1P3PPP/2N1R1K1 w - - 2 30",
    "preMove": "Kf7",
    "solution": [
      "Re7+",
      "Kf8",
      "Rxc7"
    ]
  },
  {
    "id": "070Lu",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Medium",
    "rating": 1096,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "4r2k/2Rb3p/1n1q2pQ/pp3p2/7P/1B3N2/PP3PP1/6K1 w - - 0 29",
    "fen": "4r2k/2Rb3p/1n1q2pQ/pp3pN1/7P/1B6/PP3PP1/6K1 b - - 1 29",
    "preMove": "Ng5",
    "solution": [
      "Re1#"
    ]
  },
  {
    "id": "070UR",
    "title": "Interference",
    "theme": "Advantage",
    "difficulty": "Hard",
    "rating": 1517,
    "popularity": 100,
    "description": "Interfere with the opponent's coordination.",
    "initialFen": "4r1k1/pq2npbp/6p1/2P5/1P6/P3B2P/3Q1P2/2R3K1 b - - 0 25",
    "fen": "4r1k1/pq3pbp/6p1/2Pn4/1P6/P3B2P/3Q1P2/2R3K1 w - - 1 26",
    "preMove": "Nd5",
    "solution": [
      "c6",
      "Qc7",
      "Qxd5",
      "Rxe3",
      "fxe3"
    ]
  },
  {
    "id": "070Zi",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Easy",
    "rating": 816,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "8/4q1p1/3k1p1p/5Q1P/4PKP1/8/8/8 b - - 0 63",
    "fen": "8/6p1/3k1p1p/4qQ1P/4PKP1/8/8/8 w - - 1 64",
    "preMove": "Qe5+",
    "solution": [
      "Qxe5+",
      "fxe5+",
      "Kf5"
    ]
  },
  {
    "id": "072gc",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 870,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "6k1/p4ppp/2p4q/5Q2/3Pp3/P7/1r6/R4R1K w - - 3 33",
    "fen": "6k1/p4ppp/2p4q/5Q2/3Pp3/P7/1r6/R4RK1 b - - 4 33",
    "preMove": "Kg1",
    "solution": [
      "Qh2#"
    ]
  },
  {
    "id": "072uQ",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1177,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r5k1/5p1p/1q1p2p1/1P6/2QPp3/1B5P/5PPK/8 b - - 2 34",
    "fen": "rq4k1/5p1p/3p2p1/1P6/2QPp3/1B5P/5PPK/8 w - - 3 35",
    "preMove": "Qb8",
    "solution": [
      "Qxf7+",
      "Kh8",
      "Qf6#"
    ]
  },
  {
    "id": "073Py",
    "title": "Chess Puzzle",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1140,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "8/p4pkp/8/4pbp1/2P1p3/1PNr4/P3RPPP/5K2 w - - 4 26",
    "fen": "8/p4pkp/8/4pbp1/2P1N3/1P1r4/P3RPPP/5K2 b - - 0 26",
    "preMove": "Nxe4",
    "solution": [
      "Rd1+",
      "Re1",
      "Rxe1+",
      "Kxe1",
      "Bxe4"
    ]
  },
  {
    "id": "073lP",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 865,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r1bq1k1r/ppp5/2n2bQ1/3B1P2/3Pp3/8/PPP2PPP/RN2K2R b KQ - 0 12",
    "fen": "r1bq1k1r/ppp5/5bQ1/3B1P2/3np3/8/PPP2PPP/RN2K2R w KQ - 0 13",
    "preMove": "Nxd4",
    "solution": [
      "Qf7#"
    ]
  },
  {
    "id": "0744V",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1178,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "8/p7/1pQ5/6b1/3P1pkr/2P5/PP4K1/5N1r b - - 1 46",
    "fen": "8/p7/1pQ5/6b1/3P2kr/2P2p2/PP4K1/5N1r w - - 0 47",
    "preMove": "f3+",
    "solution": [
      "Qxf3#"
    ]
  },
  {
    "id": "074Ux",
    "title": "Mate in 1",
    "theme": "AttackingF2F7",
    "difficulty": "Medium",
    "rating": 1307,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r1b1kr2/pp1n2pp/1q6/3pn3/8/5N2/PP1B1PPP/R2QKB1R w KQq - 0 14",
    "fen": "r1b1kr2/pp1n2pp/1q6/3pN3/8/8/PP1B1PPP/R2QKB1R b KQq - 0 14",
    "preMove": "Nxe5",
    "solution": [
      "Qxf2#"
    ]
  },
  {
    "id": "075sh",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1327,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "3r2k1/R4ppp/3Qn3/1N2p3/2P1P3/6Pq/1P3P1P/6K1 w - - 1 27",
    "fen": "3r2k1/R3Qppp/4n3/1N2p3/2P1P3/6Pq/1P3P1P/6K1 b - - 2 27",
    "preMove": "Qe7",
    "solution": [
      "Rd1#"
    ]
  },
  {
    "id": "076Pq",
    "title": "Knight Fork",
    "theme": "Advantage",
    "difficulty": "Hard",
    "rating": 1607,
    "popularity": 100,
    "description": "Win material using a tactical fork.",
    "initialFen": "3r3k/4qrp1/b6p/p1PBn3/Pp6/1P4P1/2Q2P1P/3RR1K1 w - - 0 28",
    "fen": "3r3k/4qBp1/b6p/p1P1n3/Pp6/1P4P1/2Q2P1P/3RR1K1 b - - 0 28",
    "preMove": "Bxf7",
    "solution": [
      "Nf3+",
      "Kh1",
      "Nxe1",
      "Rxd8+",
      "Qxd8"
    ]
  },
  {
    "id": "077V4",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 927,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "1k3r2/ppb3pp/2p1B3/6Q1/8/7P/RPP3PK/3r4 w - - 8 24",
    "fen": "1k3r2/ppb3pp/2p1B3/6Q1/8/6PP/RPP4K/3r4 b - - 0 24",
    "preMove": "g3",
    "solution": [
      "Rf2#"
    ]
  },
  {
    "id": "078Sf",
    "title": "Mate in 2",
    "theme": "Deflection",
    "difficulty": "Medium",
    "rating": 1003,
    "popularity": 100,
    "description": "Deflect the defender. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r3r1k1/1p3p1p/5qp1/1b1p4/pR1P4/R1P1p1P1/2Q1P2P/5BK1 w - - 6 31",
    "fen": "r3r1k1/1p3p1p/5qp1/1R1p4/p2P4/R1P1p1P1/2Q1P2P/5BK1 b - - 0 31",
    "preMove": "Rxb5",
    "solution": [
      "Qf2+",
      "Kh1",
      "Qxf1#"
    ]
  },
  {
    "id": "07A0J",
    "title": "Chess Puzzle",
    "theme": "Advantage",
    "difficulty": "Hard",
    "rating": 1642,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "r3rnk1/pp3pp1/2pb1p2/7p/3P1P1N/2PBB2q/PPQ5/4RRK1 w - - 0 17",
    "fen": "r3rnk1/pp3pp1/2pb1p2/7p/3P1P1N/2PBB2q/PP5Q/4RRK1 b - - 1 17",
    "preMove": "Qh2",
    "solution": [
      "Rxe3",
      "Qxh3",
      "Rxh3"
    ]
  },
  {
    "id": "07BIL",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 920,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "1k3r2/p1p5/1P6/8/1P2N3/3P2P1/P2Q3P/q6K w - - 1 29",
    "fen": "1k3r2/p1p5/1P6/8/1P2N3/3P2P1/P2Q2KP/q7 b - - 2 29",
    "preMove": "Kg2",
    "solution": [
      "Qf1#"
    ]
  },
  {
    "id": "07BRp",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 844,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r7/1p3pk1/p7/3p2p1/P4nP1/4b3/BP1R4/5R1K w - - 2 31",
    "fen": "r7/1p3pk1/p7/3p2p1/P4nP1/4b3/BP6/3R1R1K b - - 3 31",
    "preMove": "Rdd1",
    "solution": [
      "Rh8#"
    ]
  },
  {
    "id": "07Bae",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Expert",
    "rating": 2032,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "8/8/p7/1p2kppp/1P1p4/3P1PK1/P5PP/8 w - - 0 35",
    "fen": "8/8/p7/1p2kppp/1P1p3P/3P1PK1/P5P1/8 b - - 0 35",
    "preMove": "h4",
    "solution": [
      "gxh4+",
      "Kxh4",
      "Kf4",
      "Kxh5",
      "Ke3"
    ]
  },
  {
    "id": "07CmO",
    "title": "Knight Fork",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1251,
    "popularity": 100,
    "description": "Win material using a tactical fork.",
    "initialFen": "3q1rk1/pp2bppp/2rp1n2/1N2n3/2P2B2/1P3PP1/P5BP/R2Q1RK1 w - - 1 16",
    "fen": "3q1rk1/Np2bppp/2rp1n2/4n3/2P2B2/1P3PP1/P5BP/R2Q1RK1 b - - 0 16",
    "preMove": "Nxa7",
    "solution": [
      "Qb6+",
      "Kh1",
      "Qxa7"
    ]
  },
  {
    "id": "07Dp4",
    "title": "Mate in 1",
    "theme": "KingsideAttack",
    "difficulty": "Easy",
    "rating": 904,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "1r2k2r/1bqpbppp/p3p3/1p4B1/1P1P2n1/P2Q4/B4PPP/RN3RK1 w k - 3 15",
    "fen": "1r2k2r/1bqpBppp/p3p3/1p6/1P1P2n1/P2Q4/B4PPP/RN3RK1 b k - 0 15",
    "preMove": "Bxe7",
    "solution": [
      "Qxh2#"
    ]
  },
  {
    "id": "07DxM",
    "title": "Mate in 1",
    "theme": "KingsideAttack",
    "difficulty": "Easy",
    "rating": 938,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r1bq1rk1/p1n1b1pp/2p1p2B/2p5/2P3N1/1PQP4/P4PPP/4RRK1 b - - 0 17",
    "fen": "r1bq1rk1/p1n1b2p/2p1p2p/2p5/2P3N1/1PQP4/P4PPP/4RRK1 w - - 0 18",
    "preMove": "gxh6",
    "solution": [
      "Nxh6#"
    ]
  },
  {
    "id": "07Dxf",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Easy",
    "rating": 834,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "8/2p5/p2k1n2/1pp5/5P2/P4K2/1PPN4/8 b - - 5 33",
    "fen": "8/2p5/p2k1n2/1p6/2p2P2/P4K2/1PPN4/8 w - - 0 34",
    "preMove": "c4",
    "solution": [
      "Ne4+",
      "Nxe4",
      "Kxe4"
    ]
  },
  {
    "id": "07ECg",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 923,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "8/1R3p1k/8/1P6/4N2p/5n1P/1r4PK/8 w - - 1 38",
    "fen": "8/1R3p1k/8/1P6/4N2p/5n1P/1r4P1/7K b - - 2 38",
    "preMove": "Kh1",
    "solution": [
      "Rb1#"
    ]
  },
  {
    "id": "07Enb",
    "title": "Pin Tactic",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1071,
    "popularity": 100,
    "description": "Exploit the pinned piece.",
    "initialFen": "r4rk1/1ppq1ppp/1p1p4/3Np3/3nPnR1/P2P1P1P/1PP1BP1K/R2Q4 b - - 8 15",
    "fen": "r4rk1/1ppq1ppp/1p1p4/3Np3/3nP1R1/P2P1P1P/1PP1nP1K/R2Q4 w - - 0 16",
    "preMove": "Nfxe2",
    "solution": [
      "Nf6+",
      "Kh8",
      "Nxd7"
    ]
  },
  {
    "id": "07G0o",
    "title": "Chess Puzzle",
    "theme": "Advantage",
    "difficulty": "Easy",
    "rating": 985,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "2r4k/pb3Qp1/1p5p/n7/3P2nq/P1N5/1P1B1PP1/3RR1K1 w - - 3 23",
    "fen": "2r1R2k/pb3Qp1/1p5p/n7/3P2nq/P1N5/1P1B1PP1/3R2K1 b - - 4 23",
    "preMove": "Re8+",
    "solution": [
      "Rxe8",
      "Qxe8+",
      "Kh7",
      "Be1",
      "Qh2+"
    ]
  },
  {
    "id": "07GSL",
    "title": "Discovered Attack",
    "theme": "Advantage",
    "difficulty": "Easy",
    "rating": 974,
    "popularity": 100,
    "description": "Unleash a discovered attack.",
    "initialFen": "1k2N3/p4r2/1p3p2/3R1P1p/7P/1P5b/1K6/8 b - - 2 50",
    "fen": "1k2Nr2/p7/1p3p2/3R1P1p/7P/1P5b/1K6/8 w - - 3 51",
    "preMove": "Rf8",
    "solution": [
      "Rd8+",
      "Kb7",
      "Nd6+",
      "Kc6",
      "Rxf8"
    ]
  },
  {
    "id": "07GYN",
    "title": "Mate in 2",
    "theme": "Fork",
    "difficulty": "Easy",
    "rating": 996,
    "popularity": 100,
    "description": "Win material using a tactical fork. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "6k1/6pp/pqn2p2/3p3Q/1P1n4/P7/2r4P/RK2R3 b - - 5 32",
    "fen": "3q2k1/6pp/p1n2p2/3p3Q/1P1n4/P7/2r4P/RK2R3 w - - 6 33",
    "preMove": "Qd8",
    "solution": [
      "Re8+",
      "Qxe8",
      "Qxe8#"
    ]
  },
  {
    "id": "07Gnp",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1232,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "2r3k1/6b1/R3p1r1/3p4/3P4/2PQ1Ppq/1P3P2/4R1K1 w - - 0 32",
    "fen": "2r3k1/6b1/R3p1Q1/3p4/3P4/2P2Ppq/1P3P2/4R1K1 b - - 0 32",
    "preMove": "Qxg6",
    "solution": [
      "Qh2+",
      "Kf1",
      "Qxf2#"
    ]
  },
  {
    "id": "07H2x",
    "title": "Mate in 1",
    "theme": "KingsideAttack",
    "difficulty": "Easy",
    "rating": 823,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r1bq1rk1/pppp1ppp/1nn5/2b1P1NQ/8/1BN5/PP3PPP/R1B1K2R b KQ - 4 10",
    "fen": "r1bq1rk1/pppp1ppp/1n6/2b1n1NQ/8/1BN5/PP3PPP/R1B1K2R w KQ - 0 11",
    "preMove": "Nxe5",
    "solution": [
      "Qxh7#"
    ]
  },
  {
    "id": "07HFP",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 894,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "4Rqk1/pp3p1p/2p2PpQ/2P2b2/1P1r4/P2B3P/6P1/6K1 b - - 13 35",
    "fen": "4q1k1/pp3p1p/2p2PpQ/2P2b2/1P1r4/P2B3P/6P1/6K1 w - - 0 36",
    "preMove": "Qxe8",
    "solution": [
      "Qg7#"
    ]
  },
  {
    "id": "07JTo",
    "title": "Mate in 3",
    "theme": "Endgame",
    "difficulty": "Hard",
    "rating": 1605,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in three. Sacrifice material for a tactical gain.",
    "initialFen": "r4r2/p2p1ppk/1p2n2p/4PN1R/6R1/2P3P1/P1PK4/8 b - - 10 28",
    "fen": "3r1r2/p2p1ppk/1p2n2p/4PN1R/6R1/2P3P1/P1PK4/8 w - - 11 29",
    "preMove": "Rad8",
    "solution": [
      "Rxg7+",
      "Nxg7",
      "Rxh6+",
      "Kg8",
      "Ne7#"
    ]
  },
  {
    "id": "07K4K",
    "title": "Mate in 2",
    "theme": "BackRankMate",
    "difficulty": "Medium",
    "rating": 1130,
    "popularity": 100,
    "description": "Exploit the weak back rank. Find the forced checkmate. Find the forced mate in two. Sacrifice material for a tactical gain.",
    "initialFen": "6k1/5ppp/2b5/1r1p2Pn/p7/K2P1P2/7P/2R1R3 b - - 1 30",
    "fen": "6k1/3b1ppp/8/1r1p2Pn/p7/K2P1P2/7P/2R1R3 w - - 2 31",
    "preMove": "Bd7",
    "solution": [
      "Rc8+",
      "Bxc8",
      "Re8#"
    ]
  },
  {
    "id": "07KDd",
    "title": "Mate in 2",
    "theme": "BackRankMate",
    "difficulty": "Easy",
    "rating": 953,
    "popularity": 100,
    "description": "Exploit the weak back rank. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "1k6/pp6/6n1/PP2p1p1/2R1PpP1/B4P2/4K1Br/3r4 b - - 1 32",
    "fen": "1k6/pp6/6n1/PP2p1p1/2R1PpP1/B4P2/4K1Br/r7 w - - 2 33",
    "preMove": "Ra1",
    "solution": [
      "Bd6+",
      "Ka8",
      "Rc8#"
    ]
  },
  {
    "id": "07KFG",
    "title": "Mate in 2",
    "theme": "KingsideAttack",
    "difficulty": "Medium",
    "rating": 1380,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two. Sacrifice material for a tactical gain.",
    "initialFen": "1k5r/ppp3p1/3bQ3/3pB2r/3P4/2P2RP1/P1P1q1B1/R5K1 w - - 0 22",
    "fen": "1k5r/ppp3p1/3bQ3/3pB2r/3P4/2P2RP1/P1P1q1B1/5RK1 b - - 1 22",
    "preMove": "Raf1",
    "solution": [
      "Rh1+",
      "Bxh1",
      "Qh2#"
    ]
  },
  {
    "id": "07KaV",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 990,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "8/5pk1/6p1/1PNp1r2/3Pp3/2P2nRP/1R2KP2/r7 w - - 11 53",
    "fen": "8/5pk1/1P4p1/2Np1r2/3Pp3/2P2nRP/1R2KP2/r7 b - - 0 53",
    "preMove": "b6",
    "solution": [
      "Re1#"
    ]
  },
  {
    "id": "07LCh",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 864,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "6k1/1b2rpp1/p3qR1p/1p6/8/P4NP1/1PQ2PP1/1B3K2 b - - 0 31",
    "fen": "6k1/1b2rpp1/p4q1p/1p6/8/P4NP1/1PQ2PP1/1B3K2 w - - 0 32",
    "preMove": "Qxf6",
    "solution": [
      "Qh7+",
      "Kf8",
      "Qh8#"
    ]
  },
  {
    "id": "07LLu",
    "title": "Mate in 4",
    "theme": "Endgame",
    "difficulty": "Expert",
    "rating": 2167,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate.",
    "initialFen": "4r3/6k1/6p1/3p1p2/1p4n1/1P1BbK2/2P1R1P1/5R2 w - - 0 35",
    "fen": "4r3/6k1/6p1/3p1p2/1p4n1/1P1BbK2/2P1R1P1/R7 b - - 1 35",
    "preMove": "Ra1",
    "solution": [
      "Nh2+",
      "Kg3",
      "f4+",
      "Kh4",
      "Rh8+",
      "Kg5",
      "Rh5#"
    ]
  },
  {
    "id": "07MUp",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 868,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "1r4k1/2q2pp1/4R2p/p2p4/2pP4/2P3QP/Pr3PP1/1B2R1K1 b - - 0 28",
    "fen": "1r4k1/5pp1/4R2p/p2p4/2pP4/2P3qP/Pr3PP1/1B2R1K1 w - - 0 29",
    "preMove": "Qxg3",
    "solution": [
      "Re8+",
      "Rxe8",
      "Rxe8#"
    ]
  },
  {
    "id": "07MWZ",
    "title": "Chess Puzzle",
    "theme": "Advantage",
    "difficulty": "Easy",
    "rating": 999,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "r1b2rk1/pp2bppp/2p1pn2/q5B1/3P3Q/P4NP1/2P2PBP/R4RK1 b - - 4 15",
    "fen": "r1b2rk1/pp2bppp/2p1p3/q2n2B1/3P3Q/P4NP1/2P2PBP/R4RK1 w - - 5 16",
    "preMove": "Nd5",
    "solution": [
      "Bxe7",
      "Nxe7",
      "Qxe7"
    ]
  },
  {
    "id": "07MiZ",
    "title": "Chess Puzzle",
    "theme": "Advantage",
    "difficulty": "Hard",
    "rating": 1626,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "5rk1/ppp2qbp/3p1np1/3Pp3/1PP5/4P2Q/P5PP/3R1RK1 b - - 0 22",
    "fen": "5rk1/pppq2bp/3p1np1/3Pp3/1PP5/4P2Q/P5PP/3R1RK1 w - - 1 23",
    "preMove": "Qd7",
    "solution": [
      "Rxf6",
      "Qxh3",
      "Rxf8+",
      "Kxf8",
      "gxh3"
    ]
  },
  {
    "id": "07NWP",
    "title": "Chess Puzzle",
    "theme": "Equality",
    "difficulty": "Expert",
    "rating": 1870,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "r4rk1/p4pp1/2p1bb1p/2n1p3/1pB1P1P1/1P3N1P/q1P1QP2/1NKR3R b - - 1 18",
    "fen": "r4rk1/p4pp1/2p1bb1p/4p3/1pB1P1P1/1n3N1P/q1P1QP2/1NKR3R w - - 0 19",
    "preMove": "Nxb3+",
    "solution": [
      "cxb3",
      "Qxe2",
      "Bxe2"
    ]
  },
  {
    "id": "07OAB",
    "title": "Mate in 2",
    "theme": "BackRankMate",
    "difficulty": "Easy",
    "rating": 822,
    "popularity": 100,
    "description": "Exploit the weak back rank. Find the forced checkmate. Find the forced mate in two. Sacrifice material for a tactical gain.",
    "initialFen": "2r3k1/p4ppp/3Qb3/8/2qPN3/P3P1P1/1r3RPP/R6K w - - 9 28",
    "fen": "2r3k1/p4ppp/3Qb3/8/2qPN3/P3P1P1/1R4PP/R6K b - - 0 28",
    "preMove": "Rxb2",
    "solution": [
      "Qc1+",
      "Rxc1",
      "Rxc1#"
    ]
  },
  {
    "id": "07Pay",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Medium",
    "rating": 1138,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "rn2k2r/ppp2ppp/8/2PB4/4P2q/2N1p2b/PPP3PP/R2Q1K1R w kq - 0 11",
    "fen": "rn2k2r/ppp2ppp/8/2PB4/4P2q/2N1p2P/PPP4P/R2Q1K1R b kq - 0 11",
    "preMove": "gxh3",
    "solution": [
      "Qf2#"
    ]
  },
  {
    "id": "07QCf",
    "title": "Mate in 1",
    "theme": "KingsideAttack",
    "difficulty": "Easy",
    "rating": 898,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "q3k2r/p1p2ppp/Q7/1p2p3/1bpn2n1/2N3P1/PP2PP1P/R1B2RK1 w k - 2 13",
    "fen": "q3k2r/p1p2ppp/Q7/1N2p3/1bpn2n1/6P1/PP2PP1P/R1B2RK1 b k - 0 13",
    "preMove": "Nxb5",
    "solution": [
      "Nxe2#"
    ]
  },
  {
    "id": "07QPL",
    "title": "Chess Puzzle",
    "theme": "Advantage",
    "difficulty": "Hard",
    "rating": 1500,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "3q4/1p4pk/2p3pp/2B2n2/2Q5/2P2B1P/PP1r2P1/4R1K1 w - - 19 35",
    "fen": "3q4/1p4pk/2p3pp/2B2n2/2Q5/2P2B1P/PP1rR1P1/6K1 b - - 20 35",
    "preMove": "Re2",
    "solution": [
      "Rd1+",
      "Kf2",
      "Qg5"
    ]
  },
  {
    "id": "07R33",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Medium",
    "rating": 1015,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "8/5p2/2p1kP2/p7/3K2P1/8/P7/8 w - - 1 54",
    "fen": "8/5p2/2p1kP2/p5P1/3K4/8/P7/8 b - - 0 54",
    "preMove": "g5",
    "solution": [
      "Kf5",
      "Kc5",
      "Kxg5",
      "a4",
      "Kxf6"
    ]
  },
  {
    "id": "07RTG",
    "title": "Knight Fork",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1372,
    "popularity": 100,
    "description": "Lure the opponent's piece onto an unfavorable square. Win material using a tactical fork. Sacrifice material for a tactical gain.",
    "initialFen": "r2r2k1/2p3p1/1pn1p1Np/p3Pp2/q2P1P2/2P2Q1P/6P1/1R3RK1 b - - 0 22",
    "fen": "r2r2k1/2p3p1/1pn1p1Np/p3Pp2/2qP1P2/2P2Q1P/6P1/1R3RK1 w - - 1 23",
    "preMove": "Qc4",
    "solution": [
      "Qxc6",
      "Qxc6",
      "Ne7+",
      "Kh7",
      "Nxc6"
    ]
  },
  {
    "id": "07Sg1",
    "title": "Mate in 2",
    "theme": "BackRankMate",
    "difficulty": "Easy",
    "rating": 870,
    "popularity": 100,
    "description": "Exploit the weak back rank. Deflect the defender. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "1R3nk1/5ppp/2N5/8/2P1P3/r1N2P1b/5r2/3B3K b - - 0 27",
    "fen": "1R3nk1/5ppp/2N5/8/2P1P3/2r2P1b/5r2/3B3K w - - 0 28",
    "preMove": "Rxc3",
    "solution": [
      "Ne7+",
      "Kh8",
      "Rxf8#"
    ]
  },
  {
    "id": "07Sk0",
    "title": "Mate in 2",
    "theme": "HangingPiece",
    "difficulty": "Easy",
    "rating": 836,
    "popularity": 100,
    "description": "Capture the loose piece. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "2r2k1r/pQp2ppp/3q4/3P4/4R1b1/3P2P1/PPP2b1P/2K2B1R b - - 2 18",
    "fen": "2r2k1r/pQp2ppp/3q4/3P4/4R3/3P1bP1/PPP2b1P/2K2B1R w - - 3 19",
    "preMove": "Bf3",
    "solution": [
      "Qxc8+",
      "Qd8",
      "Qxd8#"
    ]
  },
  {
    "id": "07T43",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1172,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "8/5Qpk/p6p/1p1Pp3/1qn1P3/4BP2/P5PP/2R3K1 w - - 1 29",
    "fen": "8/5Qpk/p6p/1p1Pp3/1qR1P3/4BP2/P5PP/6K1 b - - 0 29",
    "preMove": "Rxc4",
    "solution": [
      "Qe1#"
    ]
  },
  {
    "id": "07Tni",
    "title": "Mate in 2",
    "theme": "KingsideAttack",
    "difficulty": "Medium",
    "rating": 1139,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "5rk1/pp3q2/n1p3pp/8/1PP5/2Q1R1Pb/P2N1P1P/4R1K1 w - - 4 24",
    "fen": "5rk1/pp2Rq2/n1p3pp/8/1PP5/2Q3Pb/P2N1P1P/4R1K1 b - - 5 24",
    "preMove": "Re7",
    "solution": [
      "Qxf2+",
      "Kh1",
      "Qg2#"
    ]
  },
  {
    "id": "07UT2",
    "title": "Mate in 1",
    "theme": "KingsideAttack",
    "difficulty": "Easy",
    "rating": 887,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "rn3rk1/pppq1ppp/8/3p1Q2/3P4/2NBP3/PPPn1PPP/R4RK1 b - - 0 12",
    "fen": "rn3rk1/pppq1ppp/8/3p1Q2/3P4/2NBP3/PPP2PPP/R4nK1 w - - 0 13",
    "preMove": "Nxf1",
    "solution": [
      "Qxh7#"
    ]
  },
  {
    "id": "07Uaj",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1080,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "8/6pp/1p3r1k/4p3/4Q3/2q1p2P/4B1K1/8 b - - 9 37",
    "fen": "8/6pp/1p3r1k/4p3/4Q3/4p2P/3qB1K1/8 w - - 10 38",
    "preMove": "Qd2",
    "solution": [
      "Qh4+",
      "Kg6",
      "Qh5#"
    ]
  },
  {
    "id": "07VBr",
    "title": "Chess Puzzle",
    "theme": "AdvancedPawn",
    "difficulty": "Medium",
    "rating": 1154,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "8/5k2/2pN1p2/P3p2p/2P4p/pK4n1/P7/8 b - - 1 44",
    "fen": "8/8/2pN1pk1/P3p2p/2P4p/pK4n1/P7/8 w - - 2 45",
    "preMove": "Kg6",
    "solution": [
      "a6",
      "Kg5",
      "a7"
    ]
  },
  {
    "id": "07VlN",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 993,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r3r1Qk/1bp3pp/pbq2N2/np2p1N1/8/1BPP3P/PP3PP1/R1B1R1K1 b - - 2 18",
    "fen": "r5rk/1bp3pp/pbq2N2/np2p1N1/8/1BPP3P/PP3PP1/R1B1R1K1 w - - 0 19",
    "preMove": "Rxg8",
    "solution": [
      "Nf7#"
    ]
  },
  {
    "id": "07Vya",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1184,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "2b5/p1p2p1p/6p1/8/2P5/1P1N2Pk/P6P/6K1 b - - 8 36",
    "fen": "2b5/p1p2p1p/8/6p1/2P5/1P1N2Pk/P6P/6K1 w - - 0 37",
    "preMove": "g5",
    "solution": [
      "Nf2#"
    ]
  },
  {
    "id": "07WNx",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Medium",
    "rating": 1215,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "rnbq1bkr/pp5p/3pPnpB/2pP2P1/2B5/2P2Q2/PP3P1P/RN2K2R b KQ - 0 15",
    "fen": "rnbq1bkr/pp5p/3pP1pB/2pP2Pn/2B5/2P2Q2/PP3P1P/RN2K2R w KQ - 1 16",
    "preMove": "Nh5",
    "solution": [
      "Qf7#"
    ]
  },
  {
    "id": "07WSb",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Medium",
    "rating": 1293,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "5K2/7p/5k2/7P/8/8/8/8 w - - 1 63",
    "fen": "6K1/7p/5k2/7P/8/8/8/8 b - - 2 63",
    "preMove": "Kg8",
    "solution": [
      "h6",
      "Kf8",
      "Kg5",
      "Ke7",
      "Kxh5"
    ]
  },
  {
    "id": "07X4I",
    "title": "Discovered Attack",
    "theme": "Advantage",
    "difficulty": "Expert",
    "rating": 2187,
    "popularity": 100,
    "description": "Unleash a discovered attack.",
    "initialFen": "6k1/2p2r2/1p5p/6p1/1P2Rr2/2P3NP/3n1PP1/5RK1 w - - 1 36",
    "fen": "6k1/2p2r2/1p5p/6p1/1P3R2/2P3NP/3n1PP1/5RK1 b - - 0 36",
    "preMove": "Rxf4",
    "solution": [
      "gxf4",
      "Rd1",
      "Rd7",
      "Ne4",
      "Nf3+",
      "Kf1",
      "Rxd1+"
    ]
  },
  {
    "id": "07XXn",
    "title": "Discovered Attack",
    "theme": "Crushing",
    "difficulty": "Hard",
    "rating": 1576,
    "popularity": 100,
    "description": "Find the strongest continuation. Unleash a discovered attack.",
    "initialFen": "8/2p4p/2p1pQpk/p7/3PN3/1KP1n1P1/PP6/6q1 w - - 2 27",
    "fen": "8/2p4p/2p1Q1pk/p7/3PN3/1KP1n1P1/PP6/6q1 b - - 0 27",
    "preMove": "Qxe6",
    "solution": [
      "Qd1+",
      "Ka3",
      "Nc2+",
      "Ka4",
      "Nxd4+"
    ]
  },
  {
    "id": "07YSy",
    "title": "Winning Combination",
    "theme": "AdvancedPawn",
    "difficulty": "Medium",
    "rating": 1111,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "8/1K3p1p/3P1kp1/4P3/3b4/2pB4/6PP/8 b - - 0 43",
    "fen": "8/1K3p1p/3P1kp1/4b3/8/2pB4/6PP/8 w - - 0 44",
    "preMove": "Bxe5",
    "solution": [
      "d7",
      "Ke7",
      "Kc8"
    ]
  },
  {
    "id": "07ZNT",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Medium",
    "rating": 1090,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Exploit the pinned piece.",
    "initialFen": "r4rk1/2p1nppN/p7/1p2p3/2pqP1Q1/1BN4R/PP3PPP/6K1 b - - 0 17",
    "fen": "r4rk1/2p1nppN/p7/1p2p3/3qP1Q1/1pN4R/PP3PPP/6K1 w - - 0 18",
    "preMove": "cxb3",
    "solution": [
      "Nf6#"
    ]
  },
  {
    "id": "07ZsC",
    "title": "Knight Fork",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1254,
    "popularity": 100,
    "description": "Win material using a tactical fork.",
    "initialFen": "4r1k1/pQ4bp/6q1/2p1n3/8/7P/PP4P1/3R1RK1 b - - 0 28",
    "fen": "4r1k1/pQ4bp/6q1/2p5/2n5/7P/PP4P1/3R1RK1 w - - 1 29",
    "preMove": "Nc4",
    "solution": [
      "Qd5+",
      "Kh8",
      "Qxc4"
    ]
  },
  {
    "id": "07aXF",
    "title": "Mate in 1",
    "theme": "KingsideAttack",
    "difficulty": "Easy",
    "rating": 961,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "1r3rk1/1b2bpnp/q3p3/3pP1P1/2nN1P2/P2QB3/1PP1B3/1K1R3R b - - 2 26",
    "fen": "br3rk1/4bpnp/q3p3/3pP1P1/2nN1P2/P2QB3/1PP1B3/1K1R3R w - - 3 27",
    "preMove": "Ba8",
    "solution": [
      "Qxh7#"
    ]
  },
  {
    "id": "07ae2",
    "title": "Mate in 2",
    "theme": "KingsideAttack",
    "difficulty": "Medium",
    "rating": 1014,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r1n3k1/5r1p/p2pN1p1/2pPnp2/1pP1pN1q/1P2P3/P1Q2PPP/BR3RK1 w - - 4 25",
    "fen": "r1n3k1/5r1p/p2pN1p1/2pPnp2/1pP1pN1q/1P2P1P1/P1Q2P1P/BR3RK1 b - - 0 25",
    "preMove": "g3",
    "solution": [
      "Nf3+",
      "Kh1",
      "Qxh2#"
    ]
  },
  {
    "id": "07aiv",
    "title": "Knight Fork",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1026,
    "popularity": 100,
    "description": "Win material using a tactical fork.",
    "initialFen": "4r1k1/1p4p1/2p2p1p/4p3/1BBP4/2P1R1P1/5PKP/1q6 b - - 1 28",
    "fen": "4r3/1p4pk/2p2p1p/4p3/1BBP4/2P1R1P1/5PKP/1q6 w - - 2 29",
    "preMove": "Kh7",
    "solution": [
      "Bd3+",
      "Qxd3",
      "Rxd3"
    ]
  },
  {
    "id": "07b65",
    "title": "Knight Fork",
    "theme": "Advantage",
    "difficulty": "Easy",
    "rating": 833,
    "popularity": 100,
    "description": "Win material using a tactical fork.",
    "initialFen": "6k1/3R4/p7/1p2p1p1/1Pb1Pn1b/P3RP2/7P/6K1 w - - 0 40",
    "fen": "6k1/3R4/p7/1p2p1p1/1Pb1Pn1b/P1R2P2/7P/6K1 b - - 1 40",
    "preMove": "Rc3",
    "solution": [
      "Ne2+",
      "Kg2",
      "Nxc3"
    ]
  },
  {
    "id": "07d67",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Easy",
    "rating": 877,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "8/8/p7/1p1k3p/1P3KpP/P5P1/8/8 b - - 2 53",
    "fen": "8/8/p7/1p5p/1Pk2KpP/P5P1/8/8 w - - 3 54",
    "preMove": "Kc4",
    "solution": [
      "Kg5",
      "Kb3",
      "Kxh5"
    ]
  },
  {
    "id": "07d8I",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 973,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "6k1/p4pp1/1r3q1p/4p3/4P3/QP6/PPr2PPP/R3R1K1 w - - 1 24",
    "fen": "6k1/Q4pp1/1r3q1p/4p3/4P3/1P6/PPr2PPP/R3R1K1 b - - 0 24",
    "preMove": "Qxa7",
    "solution": [
      "Qxf2+",
      "Kh1",
      "Qxg2#"
    ]
  },
  {
    "id": "07dR6",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1388,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "4k1n1/6p1/4N1p1/1p1pPp2/1PbP1P2/2B1K1P1/1Q5P/5q2 w - - 1 38",
    "fen": "4k1n1/6p1/4N1p1/1p1pPp2/1PbP1P2/2B1K1P1/5Q1P/5q2 b - - 2 38",
    "preMove": "Qf2",
    "solution": [
      "Qd3#"
    ]
  },
  {
    "id": "07dk5",
    "title": "Mate in 1",
    "theme": "AttackingF2F7",
    "difficulty": "Medium",
    "rating": 1058,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "rnbqk2r/ppp2ppp/3p4/2b1p3/2B1P3/4NQ1P/PPPP1nP1/R1B1K1NR b KQkq - 1 7",
    "fen": "rnbqk2r/ppp2ppp/3p4/4p3/2B1P3/4bQ1P/PPPP1nP1/R1B1K1NR w KQkq - 0 8",
    "preMove": "Bxe3",
    "solution": [
      "Qxf7#"
    ]
  },
  {
    "id": "07dsN",
    "title": "Knight Fork",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1190,
    "popularity": 100,
    "description": "Lure the opponent's piece onto an unfavorable square. Win material using a tactical fork.",
    "initialFen": "4rk2/p3r1p1/2p3B1/1p1n2Pp/3P4/2P3KP/PP2Rp2/4R3 w - - 0 31",
    "fen": "4rk2/p3r1p1/2p3B1/1p1n2Pp/3P4/2P4P/PP2RK2/4R3 b - - 0 31",
    "preMove": "Kxf2",
    "solution": [
      "Rxe2+",
      "Rxe2",
      "Rxe2+",
      "Kxe2",
      "Nf4+",
      "Kd1",
      "Nxg6"
    ]
  },
  {
    "id": "07eNj",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Medium",
    "rating": 1103,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "2Q5/8/4pp2/1k1p1p1p/3P3P/pqP1P1P1/5P2/6K1 w - - 6 52",
    "fen": "8/1Q6/4pp2/1k1p1p1p/3P3P/pqP1P1P1/5P2/6K1 b - - 7 52",
    "preMove": "Qb7+",
    "solution": [
      "Kc4",
      "Qc8+",
      "Kd3"
    ]
  },
  {
    "id": "07eNy",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 866,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "5Qk1/p1qr1p1p/p1p3p1/8/3P4/2P4P/PP3PPb/R1B1R2K b - - 0 20",
    "fen": "5k2/p1qr1p1p/p1p3p1/8/3P4/2P4P/PP3PPb/R1B1R2K w - - 0 21",
    "preMove": "Kxf8",
    "solution": [
      "Bh6+",
      "Kg8",
      "Re8#"
    ]
  },
  {
    "id": "07eSN",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 847,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "2b5/p4k2/1p2pp2/6p1/3Q2n1/3P2q1/PP2PRB1/5RKr w - - 1 30",
    "fen": "2b5/p4k2/1p2pp2/6p1/3Q2n1/3P2q1/PP2PRB1/5R1K b - - 0 30",
    "preMove": "Kxh1",
    "solution": [
      "Qh2#"
    ]
  },
  {
    "id": "07fCd",
    "title": "Mate in 3",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1126,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "3r2k1/pp4p1/8/3pq3/8/1PP2Q2/PK6/5R2 b - - 5 33",
    "fen": "3r2k1/pp4p1/8/4q3/3p4/1PP2Q2/PK6/5R2 w - - 0 34",
    "preMove": "d4",
    "solution": [
      "Qf7+",
      "Kh8",
      "Rh1+",
      "Qh2+",
      "Rxh2#"
    ]
  },
  {
    "id": "07ff1",
    "title": "Mate in 2",
    "theme": "KingsideAttack",
    "difficulty": "Easy",
    "rating": 901,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "2kr3r/1pp2ppp/p6q/P7/8/2N1P1b1/1PPBQPP1/R2R3K w - - 3 18",
    "fen": "2kr3r/1pp2ppp/p6q/P7/8/2N1P1b1/1PPBQPP1/R2R2K1 b - - 4 18",
    "preMove": "Kg1",
    "solution": [
      "Qh2+",
      "Kf1",
      "Qh1#"
    ]
  },
  {
    "id": "07fpN",
    "title": "Chess Puzzle",
    "theme": "Equality",
    "difficulty": "Expert",
    "rating": 2156,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "r3k1r1/p1p2p1p/2p4q/8/8/1PNPPN2/P1b1Q2P/R3K3 b Qq - 0 16",
    "fen": "r3k1r1/p1p2p1p/2p5/7q/8/1PNPPN2/P1b1Q2P/R3K3 w Qq - 1 17",
    "preMove": "Qh5",
    "solution": [
      "Kd2",
      "Bxd3",
      "Kxd3"
    ]
  },
  {
    "id": "07gJP",
    "title": "Mate in 1",
    "theme": "KingsideAttack",
    "difficulty": "Easy",
    "rating": 917,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r4rk1/pb1N1pb1/2q1p1pp/8/5P2/3P4/PP4PP/R1BQ1R1K w - - 0 23",
    "fen": "r4Nk1/pb3pb1/2q1p1pp/8/5P2/3P4/PP4PP/R1BQ1R1K b - - 0 23",
    "preMove": "Nxf8",
    "solution": [
      "Qxg2#"
    ]
  },
  {
    "id": "07hih",
    "title": "Clearance",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1156,
    "popularity": 100,
    "description": "Clear the critical square.",
    "initialFen": "3r1rk1/ppp1qp1p/6p1/4P3/1P1n4/P4B2/1Q2RPP1/RN4K1 w - - 1 22",
    "fen": "3r1rk1/ppp1qp1p/6p1/4P3/1P1n4/P3RB2/1Q3PP1/RN4K1 b - - 2 22",
    "preMove": "Re3",
    "solution": [
      "Nxf3+",
      "Rxf3",
      "Rd1+"
    ]
  },
  {
    "id": "07kRV",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Expert",
    "rating": 1966,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "3r4/5pkn/4q3/1R4p1/1Q6/4P1Pp/PPr4P/4R1KB w - - 3 35",
    "fen": "3r4/5pkn/4q3/1R4p1/1Q2B3/4P1Pp/PPr4P/4R1K1 b - - 4 35",
    "preMove": "Be4",
    "solution": [
      "Rc4",
      "Bd5",
      "Rxb4",
      "Bxe6",
      "Rxb5"
    ]
  },
  {
    "id": "07l35",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 805,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two. Sacrifice material for a tactical gain.",
    "initialFen": "4r1k1/2b2pp1/ppp1q2p/8/3P4/2N2Q1P/PP3PP1/3R2K1 w - - 0 25",
    "fen": "4r1k1/2b2pp1/ppp1q2p/3P4/8/2N2Q1P/PP3PP1/3R2K1 b - - 0 25",
    "preMove": "d5",
    "solution": [
      "Qe1+",
      "Rxe1",
      "Rxe1#"
    ]
  },
  {
    "id": "07nQt",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1073,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two. Exploit the pinned piece.",
    "initialFen": "8/5k2/1R3p2/1P2n3/5p1p/4N2P/1r4PK/8 w - - 0 47",
    "fen": "8/5k2/1R3p2/1P1Nn3/5p1p/7P/1r4PK/8 b - - 1 47",
    "preMove": "Nd5",
    "solution": [
      "Nf3+",
      "Kh1",
      "Rb1#"
    ]
  },
  {
    "id": "07nap",
    "title": "Knight Fork",
    "theme": "Attraction",
    "difficulty": "Easy",
    "rating": 923,
    "popularity": 100,
    "description": "Lure the opponent's piece onto an unfavorable square. Find the strongest continuation. Win material using a tactical fork. Sacrifice material for a tactical gain.",
    "initialFen": "4Q3/1pqr2kp/p7/8/7P/6N1/PP4PK/8 b - - 0 33",
    "fen": "4Q3/1pq1r1kp/p7/8/7P/6N1/PP4PK/8 w - - 1 34",
    "preMove": "Re7",
    "solution": [
      "Qxe7+",
      "Qxe7",
      "Nf5+",
      "Kf6",
      "Nxe7"
    ]
  },
  {
    "id": "07o1N",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Medium",
    "rating": 1231,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "r1b3k1/pp3p2/1n5p/3pN1q1/2pP4/2P3nP/PP3QP1/1K1R3R b - - 1 22",
    "fen": "r1b3k1/pp3p2/1n5p/3pN1q1/2pP4/2P4P/PP3QP1/1K1R3n w - - 0 23",
    "preMove": "Nxh1",
    "solution": [
      "Qxf7+",
      "Kh8",
      "Ng6+",
      "Qxg6+",
      "Qxg6"
    ]
  },
  {
    "id": "07oTu",
    "title": "Sacrifice",
    "theme": "AdvancedPawn",
    "difficulty": "Hard",
    "rating": 1601,
    "popularity": 100,
    "description": "Find the strongest continuation. Sacrifice material for a tactical gain.",
    "initialFen": "8/7p/5kp1/p1N2p2/Ppp5/5P1P/1P3P2/6K1 w - - 0 36",
    "fen": "8/1N5p/5kp1/p4p2/Ppp5/5P1P/1P3P2/6K1 b - - 1 36",
    "preMove": "Nb7",
    "solution": [
      "c3",
      "bxc3",
      "b3",
      "Nxa5",
      "b2"
    ]
  },
  {
    "id": "07ocJ",
    "title": "Mate in 2",
    "theme": "Mate",
    "difficulty": "Hard",
    "rating": 1768,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "1k6/ppp2Rpp/8/3n1Q2/3Pr2K/7B/2P1q3/3R4 w - - 12 31",
    "fen": "1k6/ppp2Rpp/8/3n1Q2/3Pr1BK/8/2P1q3/3R4 b - - 13 31",
    "preMove": "Bg4",
    "solution": [
      "Qh2+",
      "Kg5",
      "Qh6#"
    ]
  },
  {
    "id": "07odK",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 913,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r3k1r1/2p2b2/1p1pN2p/p2P1p2/2P1n3/1P2P2Q/PB5P/2R2RqK w q - 5 24",
    "fen": "r3k1r1/2p2b2/1p1pN2p/p2P1p2/2P1n3/1P2P2Q/PB5P/2R3RK b q - 0 24",
    "preMove": "Rxg1",
    "solution": [
      "Nf2#"
    ]
  },
  {
    "id": "07odm",
    "title": "Knight Fork",
    "theme": "Crushing",
    "difficulty": "Easy",
    "rating": 844,
    "popularity": 100,
    "description": "Find the strongest continuation. Win material using a tactical fork.",
    "initialFen": "6r1/pN3k2/2p2p2/3p4/3P4/2P5/PP1Q1KP1/1q6 b - - 2 38",
    "fen": "6r1/pN3k2/2p2p2/3p4/3Pq3/2P5/PP1Q1KP1/8 w - - 3 39",
    "preMove": "Qe4",
    "solution": [
      "Nd6+",
      "Kg6",
      "Nxe4"
    ]
  },
  {
    "id": "07otO",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Hard",
    "rating": 1752,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "1Q6/p3q1kp/1bp4p/3p4/5N2/P1P3P1/1P5P/7K w - - 1 31",
    "fen": "2Q5/p3q1kp/1bp4p/3p4/5N2/P1P3P1/1P5P/7K b - - 2 31",
    "preMove": "Qc8",
    "solution": [
      "Qe4+",
      "Ng2",
      "Qb1+"
    ]
  },
  {
    "id": "07pwg",
    "title": "Mate in 1",
    "theme": "Master",
    "difficulty": "Easy",
    "rating": 963,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "8/2q2p2/1p6/4rNk1/2bQ1bP1/2P2B2/1P4K1/4R3 b - - 1 48",
    "fen": "8/2q2p2/1p6/5Nk1/2bQ1bP1/2P2B2/1P4K1/4r3 w - - 0 49",
    "preMove": "Rxe1",
    "solution": [
      "Qg7#"
    ]
  },
  {
    "id": "07pyP",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1305,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "8/1r3p2/2R5/1p6/k1n5/p2R1P2/2r3PP/4BK2 b - - 9 55",
    "fen": "8/1r3p2/2R5/1p6/k1n5/3R1P2/p1r3PP/4BK2 w - - 0 56",
    "preMove": "a2",
    "solution": [
      "Ra6+",
      "Na5",
      "Rxa5#"
    ]
  },
  {
    "id": "07q1J",
    "title": "Mate in 2",
    "theme": "CornerMate",
    "difficulty": "Easy",
    "rating": 994,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "4r3/5kb1/p5p1/1pN2p1p/5P2/1QP3P1/PP3KNq/8 b - - 1 36",
    "fen": "4r3/4k1b1/p5p1/1pN2p1p/5P2/1QP3P1/PP3KNq/8 w - - 2 37",
    "preMove": "Ke7",
    "solution": [
      "Qe6+",
      "Kf8",
      "Nd7#"
    ]
  },
  {
    "id": "07rM5",
    "title": "Mate in 1",
    "theme": "KingsideAttack",
    "difficulty": "Medium",
    "rating": 1101,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r1b2k1r/ppP1bpp1/4p3/2p1q3/Q1P1B1p1/2P5/P2N1PPP/R3K2R w KQ - 4 17",
    "fen": "r1b2k1r/ppP1bpp1/4p3/2p1q3/Q1P1B1p1/2P5/P2N1PPP/R4RK1 b - - 5 17",
    "preMove": "O-O",
    "solution": [
      "Qxh2#"
    ]
  },
  {
    "id": "07rZu",
    "title": "Mate in 2",
    "theme": "KingsideAttack",
    "difficulty": "Medium",
    "rating": 1304,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "7k/p1pq1prp/2pb1Q2/4p3/8/3P1N1b/PPP2PP1/R4R1K w - - 0 19",
    "fen": "7k/p1pq1prp/2pb1Q2/4p3/8/3P1N1P/PPP2P2/R4R1K b - - 0 19",
    "preMove": "gxh3",
    "solution": [
      "Qxh3+",
      "Nh2",
      "Qg2#"
    ]
  },
  {
    "id": "07rtK",
    "title": "Discovered Attack",
    "theme": "Advantage",
    "difficulty": "Easy",
    "rating": 972,
    "popularity": 100,
    "description": "Unleash a discovered attack.",
    "initialFen": "4r1k1/p5pp/1p4q1/2p1pr2/4QB2/6P1/PP1R2KP/R7 w - - 0 28",
    "fen": "4r1k1/p5pp/1p4q1/2p1pr2/4Q3/4B1P1/PP1R2KP/R7 b - - 1 28",
    "preMove": "Be3",
    "solution": [
      "Rf2+",
      "Kxf2",
      "Qxe4"
    ]
  },
  {
    "id": "07sKR",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 816,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "2kr4/ppp2N2/4pb1p/2n2b2/6p1/1nN1B1P1/PP2PP1P/2KR1B1R w - - 3 18",
    "fen": "2kr4/ppp2N2/4pb1p/2n2b2/6p1/1PN1B1P1/1P2PP1P/2KR1B1R b - - 0 18",
    "preMove": "axb3",
    "solution": [
      "Nxb3#"
    ]
  },
  {
    "id": "07teI",
    "title": "Mate in 2",
    "theme": "KingsideAttack",
    "difficulty": "Medium",
    "rating": 1095,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "4r1k1/pp3pp1/5R2/q2p2N1/2r2Pb1/P1NQ4/1P4P1/1B1n2K1 b - - 2 24",
    "fen": "4r1k1/pp3p2/5p2/q2p2N1/2r2Pb1/P1NQ4/1P4P1/1B1n2K1 w - - 0 25",
    "preMove": "gxf6",
    "solution": [
      "Qh7+",
      "Kf8",
      "Qxf7#"
    ]
  },
  {
    "id": "07tpU",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1372,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r5k1/1pR3Rr/p5Qp/6q1/6b1/8/PP3P1P/6K1 b - - 0 29",
    "fen": "r5k1/1pR3r1/p5Qp/6q1/6b1/8/PP3P1P/6K1 w - - 0 30",
    "preMove": "Rxg7",
    "solution": [
      "Rxg7+",
      "Kh8",
      "Qh7#"
    ]
  },
  {
    "id": "07v3U",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 988,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "3r1rk1/2q1R2p/pp4p1/3p1p2/1PPQ1Pn1/3B2P1/P6P/4R1K1 b - - 1 28",
    "fen": "5rk1/2qrR2p/pp4p1/3p1p2/1PPQ1Pn1/3B2P1/P6P/4R1K1 w - - 2 29",
    "preMove": "Rd7",
    "solution": [
      "Qg7#"
    ]
  },
  {
    "id": "07wZw",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Medium",
    "rating": 1322,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "8/8/p5p1/1pkp1P2/3p3P/P5p1/2P1K3/8 b - - 1 48",
    "fen": "8/8/6p1/ppkp1P2/3p3P/P5p1/2P1K3/8 w - - 0 49",
    "preMove": "a5",
    "solution": [
      "fxg6",
      "g2",
      "Kf2"
    ]
  },
  {
    "id": "07whH",
    "title": "Chess Puzzle",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1150,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "6k1/2Q2pp1/4p2p/pB2Pq2/2P5/P3R1P1/1r1r1P1P/5RK1 w - - 3 29",
    "fen": "2Q3k1/5pp1/4p2p/pB2Pq2/2P5/P3R1P1/1r1r1P1P/5RK1 b - - 4 29",
    "preMove": "Qc8+",
    "solution": [
      "Kh7",
      "Re2",
      "Rxe2"
    ]
  },
  {
    "id": "07xMH",
    "title": "Mate in 1",
    "theme": "KingsideAttack",
    "difficulty": "Easy",
    "rating": 944,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r2r1nk1/ppp1qppp/5P2/4N3/3n2Q1/8/PPP3PP/R1B2R1K b - - 0 18",
    "fen": "r2r1nk1/ppp2ppp/5P2/4q3/3n2Q1/8/PPP3PP/R1B2R1K w - - 0 19",
    "preMove": "Qxe5",
    "solution": [
      "Qxg7#"
    ]
  },
  {
    "id": "07y6y",
    "title": "Mate in 2",
    "theme": "Clearance",
    "difficulty": "Medium",
    "rating": 1201,
    "popularity": 100,
    "description": "Clear the critical square. Find the forced checkmate. Find the forced mate in two. Sacrifice material for a tactical gain.",
    "initialFen": "r1bq1rk1/1p2bpp1/2p1p2p/p2n4/P2PN3/3QPN2/1PB2PPP/3R1RK1 b - - 3 15",
    "fen": "r1bq1rk1/1p2bpp1/2p1p2p/p7/Pn1PN3/3QPN2/1PB2PPP/3R1RK1 w - - 4 16",
    "preMove": "Nb4",
    "solution": [
      "Nf6+",
      "gxf6",
      "Qh7#"
    ]
  },
  {
    "id": "07zHR",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1176,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "8/Q7/6pk/3p1n2/3P2Np/4P2P/5PPK/1rq5 b - - 3 49",
    "fen": "8/Q7/6p1/3p1n1k/3P2Np/4P2P/5PPK/1rq5 w - - 4 50",
    "preMove": "Kh5",
    "solution": [
      "Qh7+",
      "Nh6",
      "Qxh6#"
    ]
  },
  {
    "id": "081HF",
    "title": "Chess Puzzle",
    "theme": "Advantage",
    "difficulty": "Easy",
    "rating": 971,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "6k1/7p/p1q1p1p1/3p4/3P4/2r1PP2/PQ6/KR6 b - - 3 30",
    "fen": "6k1/7p/p1q1p1p1/3p4/3P4/4rP2/PQ6/KR6 w - - 0 31",
    "preMove": "Rxe3",
    "solution": [
      "Qb8+",
      "Kg7",
      "Rb7+",
      "Qxb7",
      "Qxb7+"
    ]
  },
  {
    "id": "0822d",
    "title": "Knight Fork",
    "theme": "Crushing",
    "difficulty": "Easy",
    "rating": 846,
    "popularity": 100,
    "description": "Find the strongest continuation. Win material using a tactical fork.",
    "initialFen": "6k1/2q2p2/4p2p/pB1pP1p1/P2P2Pn/7P/2pQ1P2/2N3K1 w - - 1 42",
    "fen": "6k1/2q2p2/4p2p/p2pP1p1/P2P2Pn/3B3P/2pQ1P2/2N3K1 b - - 2 42",
    "preMove": "Bd3",
    "solution": [
      "Nf3+",
      "Kg2",
      "Nxd2"
    ]
  },
  {
    "id": "083ET",
    "title": "Discovered Attack",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1210,
    "popularity": 100,
    "description": "Unleash a discovered attack.",
    "initialFen": "1k5r/1p3p2/2b2r2/n3N2p/7P/1PPB4/P1K5/4R3 b - - 3 38",
    "fen": "1k2r3/1p3p2/2b2r2/n3N2p/7P/1PPB4/P1K5/4R3 w - - 4 39",
    "preMove": "Re8",
    "solution": [
      "Nxc6+",
      "Kc7",
      "Rxe8"
    ]
  },
  {
    "id": "0842V",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Medium",
    "rating": 1082,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "8/8/8/1p5k/1P2K3/1P2bp2/8/8 w - - 0 63",
    "fen": "8/8/8/1p5k/1P6/1P2Kp2/8/8 b - - 0 63",
    "preMove": "Kxe3",
    "solution": [
      "Kg4",
      "Kf2",
      "Kf4"
    ]
  },
  {
    "id": "085E0",
    "title": "Skewer",
    "theme": "Crushing",
    "difficulty": "Easy",
    "rating": 813,
    "popularity": 100,
    "description": "Find the strongest continuation. Use a skewer to win material.",
    "initialFen": "2r5/8/8/3k4/8/1R6/1K6/8 b - - 6 77",
    "fen": "2r5/8/8/2k5/8/1R6/1K6/8 w - - 7 78",
    "preMove": "Kc5",
    "solution": [
      "Rc3+",
      "Kd6",
      "Rxc8"
    ]
  },
  {
    "id": "08627",
    "title": "Mate in 2",
    "theme": "KingsideAttack",
    "difficulty": "Easy",
    "rating": 834,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r2q1rk1/1pp2ppp/p2p4/3n4/4P3/1BN1PP1b/PP6/R2QR1K1 w - - 0 17",
    "fen": "r2q1rk1/1pp2ppp/p2p4/3N4/4P3/1B2PP1b/PP6/R2QR1K1 b - - 0 17",
    "preMove": "Nxd5",
    "solution": [
      "Qg5+",
      "Kh2",
      "Qg2#"
    ]
  },
  {
    "id": "086CA",
    "title": "Promotion",
    "theme": "AdvancedPawn",
    "difficulty": "Easy",
    "rating": 950,
    "popularity": 100,
    "description": "Find the strongest continuation. Promote your pawn.",
    "initialFen": "8/1p6/p7/P1pPK1kp/2P3p1/8/1P6/8 b - - 1 48",
    "fen": "8/1p6/p7/P1pPK1kp/2P5/6p1/1P6/8 w - - 0 49",
    "preMove": "g3",
    "solution": [
      "d6",
      "Kg4",
      "d7",
      "Kf3",
      "d8=Q"
    ]
  },
  {
    "id": "086g1",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Hard",
    "rating": 1568,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "1qrk2r1/pb1n1p2/1p1PB1pp/2p5/2P2P1P/1P3NP1/PB2Q2K/3R4 b - - 0 26",
    "fen": "1qrk2r1/pb1n4/1p1Pp1pp/2p5/2P2P1P/1P3NP1/PB2Q2K/3R4 w - - 0 27",
    "preMove": "fxe6",
    "solution": [
      "Qxe6",
      "Re8",
      "Bf6+",
      "Nxf6",
      "Qxf6+"
    ]
  },
  {
    "id": "087ii",
    "title": "Mate in 2",
    "theme": "Mate",
    "difficulty": "Medium",
    "rating": 1255,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "rq4k1/2R1Qp1p/1p1B1npb/8/P7/4pPK1/6PP/8 b - - 7 32",
    "fen": "rq4k1/2R1Qpbp/1p1B1np1/8/P7/4pPK1/6PP/8 w - - 8 33",
    "preMove": "Bg7",
    "solution": [
      "Qxf7+",
      "Kh8",
      "Qxg7#"
    ]
  },
  {
    "id": "087jX",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 879,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "6k1/1Rp2ppp/5n2/2BP4/6P1/7P/P4PB1/b3r1K1 w - - 1 24",
    "fen": "6k1/1Rp2ppp/5n2/2BP4/6P1/7P/P4PBK/b3r3 b - - 2 24",
    "preMove": "Kh2",
    "solution": [
      "Be5+",
      "f4",
      "Bxf4#"
    ]
  },
  {
    "id": "088Dn",
    "title": "Mate in 2",
    "theme": "KingsideAttack",
    "difficulty": "Medium",
    "rating": 1232,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r1b2r1k/2R3pp/p2p4/4p3/4Pnq1/P1P1B3/B1Q2PPP/4RNK1 w - - 1 25",
    "fen": "r1b2r1k/2R3pp/p2p4/4p3/4Pnq1/P1P1B1P1/B1Q2P1P/4RNK1 b - - 0 25",
    "preMove": "g3",
    "solution": [
      "Nh3+",
      "Kh1",
      "Qf3#"
    ]
  },
  {
    "id": "088lU",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 819,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "8/5p1k/6p1/3Q3p/8/Pr5q/5rP1/6RK w - - 0 46",
    "fen": "8/5p1k/6p1/3Q3p/8/Pr5P/5r2/6RK b - - 0 46",
    "preMove": "gxh3",
    "solution": [
      "Rxh3#"
    ]
  },
  {
    "id": "088zv",
    "title": "Pin Tactic",
    "theme": "Advantage",
    "difficulty": "Easy",
    "rating": 891,
    "popularity": 100,
    "description": "Exploit the pinned piece.",
    "initialFen": "2r3k1/1pp3b1/p5p1/2Pq1p1p/5P2/P3P2P/6P1/2Q2B1K b - - 1 40",
    "fen": "4r1k1/1pp3b1/p5p1/2Pq1p1p/5P2/P3P2P/6P1/2Q2B1K w - - 2 41",
    "preMove": "Re8",
    "solution": [
      "Bc4",
      "Qxc4",
      "Qxc4+"
    ]
  },
  {
    "id": "089rt",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 850,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "1n4rk/4R3/2p2q1p/p2p1P2/5P2/1P6/8/2R2Q1K w - - 7 40",
    "fen": "1n4rk/8/2p1Rq1p/p2p1P2/5P2/1P6/8/2R2Q1K b - - 8 40",
    "preMove": "Re6",
    "solution": [
      "Qh4+",
      "Qh3",
      "Qxh3#"
    ]
  },
  {
    "id": "08AbQ",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Hard",
    "rating": 1407,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "8/8/1p2K3/p1p3pk/P1P5/1P6/5P2/8 w - - 1 52",
    "fen": "8/8/1p1K4/p1p3pk/P1P5/1P6/5P2/8 b - - 2 52",
    "preMove": "Kd6",
    "solution": [
      "Kg4",
      "Kc7",
      "Kf3"
    ]
  },
  {
    "id": "08Ag8",
    "title": "Win the Hanging Piece",
    "theme": "Advantage",
    "difficulty": "Easy",
    "rating": 987,
    "popularity": 100,
    "description": "Capture the loose piece.",
    "initialFen": "r4rk1/4npp1/p2p4/2p1p1R1/4P3/1BPPQNPq/P3K2N/8 w - - 5 28",
    "fen": "r4rk1/4npR1/p2p4/2p1p3/4P3/1BPPQNPq/P3K2N/8 b - - 0 28",
    "preMove": "Rxg7+",
    "solution": [
      "Kxg7",
      "Qg5+",
      "Ng6"
    ]
  },
  {
    "id": "08BKi",
    "title": "Chess Puzzle",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1162,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "2r3k1/p4pp1/2p2np1/2Np4/3P4/q3PB1P/r4PP1/1R1Q2K1 b - - 9 27",
    "fen": "2r3k1/5pp1/2p2np1/p1Np4/3P4/q3PB1P/r4PP1/1R1Q2K1 w - - 0 28",
    "preMove": "a5",
    "solution": [
      "Rb3",
      "Qxc5",
      "dxc5"
    ]
  },
  {
    "id": "08CzB",
    "title": "Deflection",
    "theme": "Crushing",
    "difficulty": "Hard",
    "rating": 1660,
    "popularity": 100,
    "description": "Find the strongest continuation. Deflect the defender.",
    "initialFen": "2r3k1/3R1p1p/2q1p1p1/2r5/p1PQ1P2/P1R3PP/2P4K/8 b - - 7 35",
    "fen": "2r3k1/3R1p1p/2q1p1p1/8/p1rQ1P2/P1R3PP/2P4K/8 w - - 0 36",
    "preMove": "Rxc4",
    "solution": [
      "Rxc4",
      "Qxc4",
      "Rd8+",
      "Rxd8",
      "Qxc4"
    ]
  },
  {
    "id": "08DYP",
    "title": "Mate in 2",
    "theme": "Mate",
    "difficulty": "Expert",
    "rating": 2015,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "2r2r2/p4kb1/2N3pp/1BN5/8/P3n3/1P4PP/4R1K1 b - - 2 29",
    "fen": "2r2r2/p4kb1/2N3pp/1BN2n2/8/P7/1P4PP/4R1K1 w - - 3 30",
    "preMove": "Nf5",
    "solution": [
      "Bc4+",
      "Kf6",
      "Ne4#"
    ]
  },
  {
    "id": "08Dk6",
    "title": "Chess Puzzle",
    "theme": "Equality",
    "difficulty": "Expert",
    "rating": 2143,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "r1b2rk1/pp1B1pbp/6p1/3QP3/5PPq/8/PPP4P/2KR2NR b - - 0 14",
    "fen": "r4rk1/pp1b1pbp/6p1/3QP3/5PPq/8/PPP4P/2KR2NR w - - 0 15",
    "preMove": "Bxd7",
    "solution": [
      "Qxd7",
      "Rad8",
      "Nf3"
    ]
  },
  {
    "id": "08EON",
    "title": "Skewer",
    "theme": "Crushing",
    "difficulty": "Medium",
    "rating": 1209,
    "popularity": 100,
    "description": "Find the strongest continuation. Use a skewer to win material.",
    "initialFen": "2r1k2r/1p2bpp1/p1n1p3/3NP1Np/1P1q1P2/P3Q2P/6P1/2R2RK1 b k - 0 20",
    "fen": "2r1k2r/1p2bpp1/p1n5/3pP1Np/1P1q1P2/P3Q2P/6P1/2R2RK1 w k - 0 21",
    "preMove": "exd5",
    "solution": [
      "Qxd4",
      "Nxd4",
      "Rxc8+",
      "Kd7",
      "Rxh8"
    ]
  },
  {
    "id": "08FYT",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Hard",
    "rating": 1654,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "1B6/8/8/1p1k4/6K1/8/2n3P1/8 w - - 0 53",
    "fen": "1B6/8/8/1p1k4/5K2/8/2n3P1/8 b - - 1 53",
    "preMove": "Kf4",
    "solution": [
      "b4",
      "Be5",
      "Nd4",
      "Ke3",
      "Kxe5"
    ]
  },
  {
    "id": "08GOE",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 954,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "8/R1p2pkp/1p4p1/3P4/2nP4/2P3P1/P6q/2KQ4 w - - 0 26",
    "fen": "8/2R2pkp/1p4p1/3P4/2nP4/2P3P1/P6q/2KQ4 b - - 0 26",
    "preMove": "Rxc7",
    "solution": [
      "Qb2#"
    ]
  },
  {
    "id": "08Hl2",
    "title": "Knight Fork",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1055,
    "popularity": 100,
    "description": "Win material using a tactical fork.",
    "initialFen": "r1b2rk1/ppp2ppp/3b2q1/3NB3/3P4/5Q2/PPP3PP/R4RK1 b - - 4 15",
    "fen": "r1b2rk1/ppp2ppp/6q1/3Nb3/3P4/5Q2/PPP3PP/R4RK1 w - - 0 16",
    "preMove": "Bxe5",
    "solution": [
      "Ne7+",
      "Kh8",
      "Nxg6+"
    ]
  },
  {
    "id": "08Jl5",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1070,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "6k1/2p2p2/7p/3Q4/P2P3q/2r3p1/2R5/6K1 w - - 0 35",
    "fen": "6k1/2p2p2/7p/3Q4/P2P3q/2R3p1/8/6K1 b - - 0 35",
    "preMove": "Rxc3",
    "solution": [
      "Qh2+",
      "Kf1",
      "Qf2#"
    ]
  },
  {
    "id": "08KDw",
    "title": "Win the Hanging Piece",
    "theme": "Crushing",
    "difficulty": "Hard",
    "rating": 1552,
    "popularity": 100,
    "description": "Find the strongest continuation. Capture the loose piece.",
    "initialFen": "2r4k/6p1/3p3p/p2qpQ2/8/P1P3PK/1r3R1P/5R2 b - - 3 33",
    "fen": "2r4k/6p1/3p3p/p2qpQ2/8/P1P3PK/5r1P/5R2 w - - 0 34",
    "preMove": "Rxf2",
    "solution": [
      "Qxc8+",
      "Qg8",
      "Qxg8+",
      "Kxg8",
      "Rxf2"
    ]
  },
  {
    "id": "08LwR",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 989,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "3r4/1p1q3Q/4bk2/p3p1B1/P2nB3/3P2PP/1P5K/1R2q3 b - - 1 30",
    "fen": "3r4/1p1q3Q/4b3/p3p1k1/P2nB3/3P2PP/1P5K/1R2q3 w - - 0 31",
    "preMove": "Kxg5",
    "solution": [
      "Qh4#"
    ]
  },
  {
    "id": "08Mml",
    "title": "Mate in 2",
    "theme": "KingsideAttack",
    "difficulty": "Medium",
    "rating": 1132,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "5rk1/1p4p1/3p1p1p/3P4/1P1Q1Pn1/4r1Pq/PB2R2P/4R1K1 w - - 2 25",
    "fen": "5rk1/1p4p1/3p1p1p/3P4/1P1Q1Pn1/4R1Pq/PB5P/4R1K1 b - - 0 25",
    "preMove": "Rxe3",
    "solution": [
      "Qxh2+",
      "Kf1",
      "Qf2#"
    ]
  },
  {
    "id": "08NnI",
    "title": "Knight Fork",
    "theme": "Advantage",
    "difficulty": "Easy",
    "rating": 891,
    "popularity": 100,
    "description": "Win material using a tactical fork.",
    "initialFen": "5rk1/p5p1/2B4p/1P3p2/4p3/r2bN1P1/5P1P/4R1K1 b - - 0 31",
    "fen": "5rk1/p5p1/2B4p/1P3p2/4p3/1r1bN1P1/5P1P/4R1K1 w - - 1 32",
    "preMove": "Rb3",
    "solution": [
      "Bd5+",
      "Kh8",
      "Bxb3"
    ]
  },
  {
    "id": "08O8g",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Medium",
    "rating": 1059,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "8/pp6/5N2/3k4/5p2/1PPKbP2/8/8 b - - 10 46",
    "fen": "8/pp6/5N2/4k3/5p2/1PPKbP2/8/8 w - - 11 47",
    "preMove": "Ke5",
    "solution": [
      "Ng4+",
      "Kf5",
      "Nxe3+",
      "fxe3",
      "Kxe3"
    ]
  },
  {
    "id": "08Paa",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 859,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r4rk1/p4ppp/2Q2n2/2p1p3/4P1b1/2Pq4/P2N1PPP/R1B1K2R w KQ - 0 14",
    "fen": "r4rk1/p4ppp/5n2/2Q1p3/4P1b1/2Pq4/P2N1PPP/R1B1K2R b KQ - 0 14",
    "preMove": "Qxc5",
    "solution": [
      "Qe2#"
    ]
  },
  {
    "id": "08PgK",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 998,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "6R1/8/7p/3p2k1/2b5/2b3P1/1P4PK/1r6 b - - 12 45",
    "fen": "6R1/8/7p/3p3k/2b5/2b3P1/1P4PK/1r6 w - - 13 46",
    "preMove": "Kh5",
    "solution": [
      "g4+",
      "Kh4",
      "g3#"
    ]
  },
  {
    "id": "08PpV",
    "title": "Mate in 1",
    "theme": "CornerMate",
    "difficulty": "Easy",
    "rating": 884,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "2R5/kp5p/6q1/p2p4/P2Pn3/1P1Q4/6KP/3R4 w - - 1 44",
    "fen": "2R5/kp5p/6q1/p2p4/P2Pn3/1P1Q4/7P/3R3K b - - 2 44",
    "preMove": "Kh1",
    "solution": [
      "Nf2#"
    ]
  },
  {
    "id": "08Qj0",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 898,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r4rk1/p1p1b1pp/2pp4/3np1Nq/3P2bP/2PQ1NP1/PP3PK1/R1B2R2 b - - 2 18",
    "fen": "r4rk1/p1p1b1p1/2pp3p/3np1Nq/3P2bP/2PQ1NP1/PP3PK1/R1B2R2 w - - 0 19",
    "preMove": "h6",
    "solution": [
      "Qh7#"
    ]
  },
  {
    "id": "08RYA",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1130,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "R3nr2/6pk/8/4Nq1p/3P4/1Q2PpP1/1P3P1P/5bK1 w - - 0 29",
    "fen": "R3nr2/6pk/8/4Nq1p/3P4/1Q2PpP1/1P3P1P/5K2 b - - 0 29",
    "preMove": "Kxf1",
    "solution": [
      "Qb1+",
      "Qd1",
      "Qxd1#"
    ]
  },
  {
    "id": "08SaK",
    "title": "Chess Puzzle",
    "theme": "Advantage",
    "difficulty": "Hard",
    "rating": 1467,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "r4rk1/pp1qbppp/4pn2/3p2B1/4P3/P1NQ4/1PP2PPP/R4RK1 b - - 0 14",
    "fen": "r4rk1/pp1qbppp/4pn2/6B1/4p3/P1NQ4/1PP2PPP/R4RK1 w - - 0 15",
    "preMove": "dxe4",
    "solution": [
      "Qxd7",
      "Nxd7",
      "Bxe7"
    ]
  },
  {
    "id": "08TXc",
    "title": "Mate in 1",
    "theme": "KillBoxMate",
    "difficulty": "Medium",
    "rating": 1111,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "6k1/1b2rp1R/5Q2/p1pPr3/2P3P1/8/P4PK1/1Bq5 b - - 4 39",
    "fen": "6k1/1b2rp1R/5Q2/p1pPr1q1/2P3P1/8/P4PK1/1B6 w - - 5 40",
    "preMove": "Qg5",
    "solution": [
      "Rh8#"
    ]
  },
  {
    "id": "08UdG",
    "title": "Winning Combination",
    "theme": "BishopEndgame",
    "difficulty": "Easy",
    "rating": 939,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "8/6bp/6p1/1pK3P1/1Pp4P/2P3B1/8/5k2 b - - 8 49",
    "fen": "8/7p/6p1/1pK3P1/1Pp4P/2b3B1/8/5k2 w - - 0 50",
    "preMove": "Bxc3",
    "solution": [
      "Kxb5",
      "Bd2",
      "Kxc4",
      "Bxb4",
      "Kxb4"
    ]
  },
  {
    "id": "08VCP",
    "title": "Mate in 2",
    "theme": "BishopEndgame",
    "difficulty": "Medium",
    "rating": 1166,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "8/8/1B2b1k1/p6p/PbP5/1P4K1/8/3B4 w - - 4 42",
    "fen": "8/8/1B2b1k1/p6p/PbP4K/1P6/8/3B4 b - - 5 42",
    "preMove": "Kh4",
    "solution": [
      "Be1+",
      "Bf2",
      "Bxf2#"
    ]
  },
  {
    "id": "08VVF",
    "title": "Skewer",
    "theme": "Equality",
    "difficulty": "Expert",
    "rating": 1983,
    "popularity": 100,
    "description": "Use a skewer to win material.",
    "initialFen": "r3k2r/ppq2p2/2p1b1p1/3pP3/3Pn2b/2P2Q2/PP2B3/RN3KNR b kq - 1 17",
    "fen": "r3k2r/ppq2p2/2p1b1p1/3pP3/3P3b/2P2Qn1/PP2B3/RN3KNR w kq - 2 18",
    "preMove": "Ng3+",
    "solution": [
      "Qxg3",
      "Bxg3",
      "Rxh8+",
      "Ke7",
      "Rxa8"
    ]
  },
  {
    "id": "08VcP",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1023,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "6k1/6pp/2p1Q3/3p3b/3P4/2q2N2/P4KPP/8 b - - 0 30",
    "fen": "6k1/5bpp/2p1Q3/3p4/3P4/2q2N2/P4KPP/8 w - - 1 31",
    "preMove": "Bf7",
    "solution": [
      "Qc8+",
      "Be8",
      "Qxe8#"
    ]
  },
  {
    "id": "08Wi7",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Hard",
    "rating": 1463,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "3r2k1/p6p/2p3n1/5R2/5P2/2Q1PBp1/PPK3P1/5q2 w - - 0 30",
    "fen": "3r2k1/p6p/2B3n1/5R2/5P2/2Q1P1p1/PPK3P1/5q2 b - - 0 30",
    "preMove": "Bxc6",
    "solution": [
      "Qd1#"
    ]
  },
  {
    "id": "08XJl",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Medium",
    "rating": 1324,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "8/p7/1p1Q4/5k1p/4q2P/8/PPP5/3K4 w - - 1 31",
    "fen": "8/p7/1p6/5k1p/4q2P/3Q4/PPP5/3K4 b - - 2 31",
    "preMove": "Qd3",
    "solution": [
      "Qxd3+",
      "cxd3",
      "Kg4"
    ]
  },
  {
    "id": "08XZX",
    "title": "Chess Puzzle",
    "theme": "Advantage",
    "difficulty": "Easy",
    "rating": 939,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "4r2k/1pp2rp1/2n4p/p3P2q/P1P2p2/2Q4P/1BP2P2/1R2R1K1 b - - 0 25",
    "fen": "7k/1pp2rp1/2n4p/p3r2q/P1P2p2/2Q4P/1BP2P2/1R2R1K1 w - - 0 26",
    "preMove": "Rxe5",
    "solution": [
      "Rxe5",
      "Qxe5",
      "Qxe5",
      "Nxe5",
      "Bxe5"
    ]
  },
  {
    "id": "08YEg",
    "title": "Knight Fork",
    "theme": "Crushing",
    "difficulty": "Medium",
    "rating": 1080,
    "popularity": 100,
    "description": "Find the strongest continuation. Win material using a tactical fork.",
    "initialFen": "r3kb1r/pp3ppp/1q2p3/3Pn2P/8/2P5/PP6/RNBQKB1R w KQkq - 1 15",
    "fen": "r3kb1r/pp3ppp/1q2p3/3Pn2P/3Q4/2P5/PP6/RNB1KB1R b KQkq - 2 15",
    "preMove": "Qd4",
    "solution": [
      "Nf3+",
      "Ke2",
      "Nxd4+"
    ]
  },
  {
    "id": "08YdG",
    "title": "Discovered Attack",
    "theme": "Advantage",
    "difficulty": "Hard",
    "rating": 1412,
    "popularity": 100,
    "description": "Unleash a discovered attack.",
    "initialFen": "r2k3r/3b1p1p/6pb/3N4/p4P2/8/PPPR2PP/2K1R3 b - - 0 19",
    "fen": "r2kr3/3b1p1p/6pb/3N4/p4P2/8/PPPR2PP/2K1R3 w - - 1 20",
    "preMove": "Re8",
    "solution": [
      "Rxe8+",
      "Bxe8",
      "Nb6+"
    ]
  },
  {
    "id": "08aWH",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 945,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r2q1rk1/2b1nppp/p3p3/1p1bP1N1/3P4/4B1P1/5PBP/RQ1R2K1 b - - 1 18",
    "fen": "r2q1rk1/2b1npp1/p3p2p/1p1bP1N1/3P4/4B1P1/5PBP/RQ1R2K1 w - - 0 19",
    "preMove": "h6",
    "solution": [
      "Qh7#"
    ]
  },
  {
    "id": "08agz",
    "title": "Mate in 2",
    "theme": "Mate",
    "difficulty": "Medium",
    "rating": 1169,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "1k5r/p6r/Qpnp4/1P1qp3/6B1/5N1P/2R3K1/8 b - - 0 37",
    "fen": "1k5r/p6r/Qp1p4/1P1qp3/3n2B1/5N1P/2R3K1/8 w - - 1 38",
    "preMove": "Nd4",
    "solution": [
      "Rc8+",
      "Rxc8",
      "Qxc8#"
    ]
  },
  {
    "id": "08bpJ",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Easy",
    "rating": 923,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "2r2r2/pp3pk1/4p2p/3p2p1/3P4/P3PQ1P/1P1q1PP1/2R2RK1 w - - 3 21",
    "fen": "2r2r2/pp3pk1/4p2p/3p2p1/1P1P4/P3PQ1P/3q1PP1/2R2RK1 b - - 0 21",
    "preMove": "b4",
    "solution": [
      "Rxc1",
      "Rxc1",
      "Qxc1+"
    ]
  },
  {
    "id": "08cVo",
    "title": "Winning Combination",
    "theme": "AdvancedPawn",
    "difficulty": "Medium",
    "rating": 1180,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "3r4/1p3p1k/p4Ppp/4p2P/8/5Q2/Pq4P1/5R1K b - - 0 35",
    "fen": "8/1p3p1k/p4Ppp/4p2P/3r4/5Q2/Pq4P1/5R1K w - - 1 36",
    "preMove": "Rd4",
    "solution": [
      "hxg6+",
      "fxg6",
      "f7",
      "Rh4+",
      "Kg1"
    ]
  },
  {
    "id": "08dVM",
    "title": "Chess Puzzle",
    "theme": "Endgame",
    "difficulty": "Hard",
    "rating": 1718,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "8/pp6/4k2p/3p2p1/2pP2K1/P1P4P/1P6/8 b - - 0 38",
    "fen": "8/p7/4k2p/1p1p2p1/2pP2K1/P1P4P/1P6/8 w - - 0 39",
    "preMove": "b5",
    "solution": [
      "Kh5",
      "Kf5",
      "Kxh6"
    ]
  },
  {
    "id": "08dao",
    "title": "Mate in 1",
    "theme": "Master",
    "difficulty": "Hard",
    "rating": 1575,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "2k3nb/1b6/p1nppq2/8/2P1PNp1/3p2P1/P2Q1PB1/2KR4 w - - 0 26",
    "fen": "2k3nb/1b6/p1nppq2/8/2P1PNp1/3Q2P1/P4PB1/2KR4 b - - 0 26",
    "preMove": "Qxd3",
    "solution": [
      "Qb2#"
    ]
  },
  {
    "id": "08dio",
    "title": "Mate in 3",
    "theme": "Endgame",
    "difficulty": "Hard",
    "rating": 1798,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "5R2/p2rp1k1/7p/1p3Qp1/3P1p2/1BP5/P1Pq1KPP/8 w - - 7 33",
    "fen": "5R2/p2rp1k1/7p/1p3Qp1/3P1p2/1BP2K2/P1Pq2PP/8 b - - 8 33",
    "preMove": "Kf3",
    "solution": [
      "Qe3+",
      "Kg4",
      "Qe2+",
      "Kh3",
      "Qh5#"
    ]
  },
  {
    "id": "08gHo",
    "title": "Knight Fork",
    "theme": "Crushing",
    "difficulty": "Medium",
    "rating": 1033,
    "popularity": 100,
    "description": "Find the strongest continuation. Win material using a tactical fork.",
    "initialFen": "8/8/8/2r2pkP/6P1/R4PK1/8/8 w - - 0 63",
    "fen": "8/8/8/2r2pkP/6P1/4RPK1/8/8 b - - 1 63",
    "preMove": "Re3",
    "solution": [
      "f4+",
      "Kf2",
      "fxe3+"
    ]
  },
  {
    "id": "08i9G",
    "title": "Promotion",
    "theme": "AdvancedPawn",
    "difficulty": "Medium",
    "rating": 1143,
    "popularity": 100,
    "description": "Find the strongest continuation. Promote your pawn. Sacrifice material for a tactical gain.",
    "initialFen": "8/4k3/4p3/3nP3/2N2P1K/1p6/8/8 w - - 0 55",
    "fen": "8/4k3/4p3/3nP3/2N2PK1/1p6/8/8 b - - 1 55",
    "preMove": "Kg4",
    "solution": [
      "Ne3+",
      "Nxe3",
      "b2",
      "Nc4",
      "b1=Q"
    ]
  },
  {
    "id": "08liU",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 886,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "5Qk1/R4pp1/2p3bp/8/5q2/2P3NP/P1r2PP1/4R1K1 b - - 0 23",
    "fen": "5k2/R4pp1/2p3bp/8/5q2/2P3NP/P1r2PP1/4R1K1 w - - 0 24",
    "preMove": "Kxf8",
    "solution": [
      "Ra8+",
      "Qb8",
      "Rxb8#"
    ]
  },
  {
    "id": "08lqs",
    "title": "Deflection",
    "theme": "Crushing",
    "difficulty": "Medium",
    "rating": 1365,
    "popularity": 100,
    "description": "Find the strongest continuation. Deflect the defender.",
    "initialFen": "5k2/4bpp1/p4n1p/1p2N3/1P5q/P2Q3P/5PP1/6K1 b - - 1 30",
    "fen": "5k2/4bpp1/p4n1p/1p2N3/1P2q3/P2Q3P/5PP1/6K1 w - - 2 31",
    "preMove": "Qe4",
    "solution": [
      "Nd7+",
      "Nxd7",
      "Qxe4"
    ]
  },
  {
    "id": "08mPy",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 867,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "3rr1k1/pb3R1p/1p4p1/2p5/2Pq4/3B3Q/P5PP/2B4K b - - 0 24",
    "fen": "3rr1k1/pb3R1p/1p4p1/2p5/2P5/3q3Q/P5PP/2B4K w - - 0 25",
    "preMove": "Qxd3",
    "solution": [
      "Qxh7#"
    ]
  },
  {
    "id": "08oLT",
    "title": "Chess Puzzle",
    "theme": "Equality",
    "difficulty": "Expert",
    "rating": 1856,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "6rr/1k6/2n5/1p3P2/3pPq1p/1QPP4/1P4PP/R4NK1 b - - 1 28",
    "fen": "6rr/1k6/2n5/1p3P2/3pP2p/1QPP1q2/1P4PP/R4NK1 w - - 2 29",
    "preMove": "Qf3",
    "solution": [
      "Qxb5+",
      "Kc7",
      "Ra7+"
    ]
  },
  {
    "id": "08obd",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 805,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "8/4b3/4p2k/pp1pP1pP/2pP4/P1P2q2/1PQ1N2K/8 b - - 0 42",
    "fen": "8/4b3/4p2k/pp1pP2P/2pP2p1/P1P2q2/1PQ1N2K/8 w - - 0 43",
    "preMove": "g4",
    "solution": [
      "Qg6#"
    ]
  },
  {
    "id": "08rBb",
    "title": "Pin Tactic",
    "theme": "Crushing",
    "difficulty": "Hard",
    "rating": 1410,
    "popularity": 100,
    "description": "Find the strongest continuation. Exploit the pinned piece.",
    "initialFen": "8/1p4pk/p1p2r1p/q2pR3/3P4/5P1P/6P1/1Q5K b - - 1 51",
    "fen": "8/1p4pk/p1p3rp/q2pR3/3P4/5P1P/6P1/1Q5K w - - 2 52",
    "preMove": "Rg6",
    "solution": [
      "Re6",
      "Qa1",
      "Qxa1"
    ]
  },
  {
    "id": "08sWB",
    "title": "Chess Puzzle",
    "theme": "Advantage",
    "difficulty": "Easy",
    "rating": 950,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "2r2r2/1R5p/3R2pk/N1p1p3/2P5/4b3/P5Q1/4KBq1 b - - 0 35",
    "fen": "2r5/1R5p/3R2pk/N1p1p3/2P5/4b3/P5Q1/4Krq1 w - - 0 36",
    "preMove": "Rxf1+",
    "solution": [
      "Qxf1",
      "Bf2+",
      "Ke2"
    ]
  },
  {
    "id": "08tfg",
    "title": "Chess Puzzle",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1116,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "r2qkb1r/pp1n3p/4p1N1/2p4Q/8/2n5/PPP2PPP/R1B1K2R b KQkq - 0 12",
    "fen": "r2qkb1r/pp1n4/4p1p1/2p4Q/8/2n5/PPP2PPP/R1B1K2R w KQkq - 0 13",
    "preMove": "hxg6",
    "solution": [
      "Qxg6+",
      "Ke7",
      "Bg5+"
    ]
  },
  {
    "id": "08vP8",
    "title": "Mate in 1",
    "theme": "Master",
    "difficulty": "Medium",
    "rating": 1121,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "1r4k1/q6p/4p1p1/3N1n2/6n1/1P6/PBPQ2PP/5R1K w - - 1 28",
    "fen": "1r4k1/q6p/4p1p1/3N1n2/6n1/1P5P/PBPQ2P1/5R1K b - - 0 28",
    "preMove": "h3",
    "solution": [
      "Ng3#"
    ]
  },
  {
    "id": "08vX3",
    "title": "Mate in 3",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1087,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "6k1/Q5pp/4b3/4p3/5p2/5P2/P2rqBPP/r3R1K1 w - - 0 31",
    "fen": "6k1/Q5pp/4b3/4p3/5p2/5P2/P2rqBPP/R5K1 b - - 0 31",
    "preMove": "Rxa1",
    "solution": [
      "Rd1+",
      "Rxd1",
      "Qxd1+",
      "Be1",
      "Qxe1#"
    ]
  },
  {
    "id": "08vYm",
    "title": "Winning Combination",
    "theme": "AdvancedPawn",
    "difficulty": "Expert",
    "rating": 1965,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "2r2r1k/7p/p2p4/2p1p3/1PP1Pp2/P2P1K1P/6R1/6R1 b - - 1 28",
    "fen": "2r3rk/7p/p2p4/2p1p3/1PP1Pp2/P2P1K1P/6R1/6R1 w - - 2 29",
    "preMove": "Rg8",
    "solution": [
      "Rxg8+",
      "Rxg8",
      "Rxg8+",
      "Kxg8",
      "b5",
      "axb5",
      "cxb5",
      "Kf7",
      "b6",
      "Ke8",
      "b7"
    ]
  },
  {
    "id": "08vbP",
    "title": "Mate in 2",
    "theme": "HangingPiece",
    "difficulty": "Medium",
    "rating": 1297,
    "popularity": 100,
    "description": "Capture the loose piece. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "8/2R3pk/4Q2q/3nN2p/3Pb2P/P5P1/1P3P2/2R3K1 w - - 1 38",
    "fen": "8/5Rpk/4Q2q/3nN2p/3Pb2P/P5P1/1P3P2/2R3K1 b - - 2 38",
    "preMove": "Rf7",
    "solution": [
      "Qxc1+",
      "Kh2",
      "Qh1#"
    ]
  },
  {
    "id": "08vmA",
    "title": "Winning Combination",
    "theme": "AdvancedPawn",
    "difficulty": "Medium",
    "rating": 1160,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "8/8/8/6p1/3k2P1/2p4P/2K2P2/8 w - - 1 52",
    "fen": "8/8/8/6p1/3k2P1/2p4P/5P2/3K4 b - - 2 52",
    "preMove": "Kd1",
    "solution": [
      "Kd3",
      "Kc1",
      "c2",
      "Kb2",
      "Kd2"
    ]
  },
  {
    "id": "08vyE",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 938,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r3kr2/7p/p1qp1Bpn/4P3/5N2/1Q4PP/P1P4K/3R4 b q - 2 29",
    "fen": "2r1kr2/7p/p1qp1Bpn/4P3/5N2/1Q4PP/P1P4K/3R4 w - - 3 30",
    "preMove": "Rc8",
    "solution": [
      "Qe6#"
    ]
  },
  {
    "id": "08xP8",
    "title": "Mate in 1",
    "theme": "EpauletteMate",
    "difficulty": "Easy",
    "rating": 883,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r6r/2qb2k1/p1p1p2p/1nPpPp1Q/3N1P2/2B4P/PP3R2/R5K1 b - - 3 28",
    "fen": "r6r/2qb3k/p1p1p2p/1nPpPp1Q/3N1P2/2B4P/PP3R2/R5K1 w - - 4 29",
    "preMove": "Kh7",
    "solution": [
      "Qf7#"
    ]
  },
  {
    "id": "08ycT",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Medium",
    "rating": 1189,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "8/8/5p2/6pK/1R3kPP/7r/8/8 b - - 6 59",
    "fen": "8/8/5p2/6pK/1R4PP/6kr/8/8 w - - 7 60",
    "preMove": "Kg3",
    "solution": [
      "Rb3+",
      "Kg2",
      "Rxh3",
      "Kxh3",
      "hxg5",
      "fxg5",
      "Kxg5"
    ]
  },
  {
    "id": "08zi1",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1040,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "8/7k/4R2b/3pPp2/2pPb2P/8/R4K2/2r5 b - - 6 51",
    "fen": "8/7k/4R3/3pPp2/2pPbb1P/8/R4K2/2r5 w - - 7 52",
    "preMove": "Bf4",
    "solution": [
      "Ra7+",
      "Kh8",
      "Re8#"
    ]
  },
  {
    "id": "08zpl",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1171,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "2rr2k1/p1R3bp/1p4p1/1P1q4/P4Q2/6P1/3R1P1P/6K1 b - - 0 38",
    "fen": "2rr2k1/p1R3bp/1p4p1/1P6/P4Q2/6P1/3q1P1P/6K1 w - - 0 39",
    "preMove": "Qxd2",
    "solution": [
      "Qf7+",
      "Kh8",
      "Qxg7#"
    ]
  },
  {
    "id": "090jm",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Medium",
    "rating": 1077,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r1bqr1k1/pp3pp1/2n5/3p2nQ/3p3R/2PB4/PP1N1P2/2KR4 b - - 1 18",
    "fen": "r1bqr1k1/pp3pp1/2n5/3p2nQ/7R/2pB4/PP1N1P2/2KR4 w - - 0 19",
    "preMove": "dxc3",
    "solution": [
      "Qh8#"
    ]
  },
  {
    "id": "0918R",
    "title": "Winning Combination",
    "theme": "AdvancedPawn",
    "difficulty": "Medium",
    "rating": 1126,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "r3r2k/5p1p/p7/2p5/P4P2/3pp1R1/1PR4P/4B1K1 w - - 0 37",
    "fen": "r3r2k/5p1p/p7/2R5/P4P2/3pp1R1/1P5P/4B1K1 b - - 0 37",
    "preMove": "Rxc5",
    "solution": [
      "d2",
      "Bxd2",
      "exd2"
    ]
  },
  {
    "id": "091JW",
    "title": "Knight Fork",
    "theme": "Advantage",
    "difficulty": "Easy",
    "rating": 897,
    "popularity": 100,
    "description": "Win material using a tactical fork.",
    "initialFen": "6k1/5p1p/2n3q1/pQp5/8/2P3pP/PP3P1K/3R4 w - - 0 30",
    "fen": "6k1/5p1p/2n3q1/pQp5/8/2P3PP/PP5K/3R4 b - - 0 30",
    "preMove": "fxg3",
    "solution": [
      "Qc2+",
      "Kg1",
      "Qxd1+"
    ]
  },
  {
    "id": "0934U",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 962,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "8/3k4/3p2R1/pp1p4/3P3r/P1P3P1/1P4r1/2K1R3 w - - 0 31",
    "fen": "8/3k4/3pR1R1/pp1p4/3P3r/P1P3P1/1P4r1/2K5 b - - 1 31",
    "preMove": "Ree6",
    "solution": [
      "Rh1+",
      "Re1",
      "Rxe1#"
    ]
  },
  {
    "id": "093T4",
    "title": "Knight Fork",
    "theme": "Crushing",
    "difficulty": "Medium",
    "rating": 1121,
    "popularity": 100,
    "description": "Find the strongest continuation. Win material using a tactical fork.",
    "initialFen": "8/5bp1/3k4/1r3N1p/4PK1P/5P2/6P1/8 b - - 3 43",
    "fen": "8/5bp1/4k3/1r3N1p/4PK1P/5P2/6P1/8 w - - 4 44",
    "preMove": "Ke6",
    "solution": [
      "Nd4+",
      "Kf6",
      "Nxb5"
    ]
  },
  {
    "id": "095AS",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Expert",
    "rating": 1909,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "8/6p1/2p3p1/2Ppk1P1/1P3p1P/2K2P2/8/8 b - - 3 46",
    "fen": "8/6p1/2p3p1/2P1k1P1/1P1p1p1P/2K2P2/8/8 w - - 0 47",
    "preMove": "d4+",
    "solution": [
      "Kc4",
      "Ke6",
      "Kxd4"
    ]
  },
  {
    "id": "095Ky",
    "title": "Chess Puzzle",
    "theme": "Advantage",
    "difficulty": "Hard",
    "rating": 1422,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "2r5/1rpbqpbk/3p4/1p1P2p1/pP1NPPPp/P6P/2RQ2BK/2R5 w - - 0 30",
    "fen": "2r5/1rpbqpbk/3p4/1p1P2P1/pP1NP1Pp/P6P/2RQ2BK/2R5 b - - 0 30",
    "preMove": "fxg5",
    "solution": [
      "Qe5+",
      "Kh1",
      "Qxd4"
    ]
  },
  {
    "id": "095ue",
    "title": "Mate in 2",
    "theme": "BackRankMate",
    "difficulty": "Medium",
    "rating": 1037,
    "popularity": 100,
    "description": "Exploit the weak back rank. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r7/7k/6qp/p2Q4/N7/P7/1B2n1PP/7K w - - 5 37",
    "fen": "Q7/7k/6qp/p7/N7/P7/1B2n1PP/7K b - - 0 37",
    "preMove": "Qxa8",
    "solution": [
      "Qb1+",
      "Bc1",
      "Qxc1#"
    ]
  },
  {
    "id": "097S5",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 964,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "5rQk/pp1R2pp/2n2b1N/2p5/4r3/6P1/Pq2PP1P/5RK1 b - - 1 22",
    "fen": "6rk/pp1R2pp/2n2b1N/2p5/4r3/6P1/Pq2PP1P/5RK1 w - - 0 23",
    "preMove": "Rxg8",
    "solution": [
      "Nf7#"
    ]
  },
  {
    "id": "097U6",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1202,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "8/2Q5/4prkq/3p4/5P2/8/6R1/6K1 b - - 12 42",
    "fen": "8/2Q5/4pr1q/3p1k2/5P2/8/6R1/6K1 w - - 13 43",
    "preMove": "Kf5",
    "solution": [
      "Qe5#"
    ]
  },
  {
    "id": "097uv",
    "title": "Knight Fork",
    "theme": "Advantage",
    "difficulty": "Hard",
    "rating": 1620,
    "popularity": 100,
    "description": "Win material using a tactical fork.",
    "initialFen": "5r1k/7p/1pp1n3/p3Pp2/2q4P/3p1Q2/P3RP1K/3N2R1 w - - 0 36",
    "fen": "5r1k/7p/1pp1n3/p3Pp2/2q4P/3p1Q2/P2R1P1K/3N2R1 b - - 1 36",
    "preMove": "Rd2",
    "solution": [
      "Qxh4+",
      "Qh3",
      "Qf4+",
      "Rg3",
      "Qxd2"
    ]
  },
  {
    "id": "098lY",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 909,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r2q1rk1/p2n1b1p/3pN1p1/2pP1p2/1pP1p3/1P2P1P1/PQ1R1PBP/3R2K1 b - - 9 21",
    "fen": "r4rk1/p2nqb1p/3pN1p1/2pP1p2/1pP1p3/1P2P1P1/PQ1R1PBP/3R2K1 w - - 10 22",
    "preMove": "Qe7",
    "solution": [
      "Qg7#"
    ]
  },
  {
    "id": "0990l",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1110,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "6k1/2R5/p2r1pKp/1pp2P2/6P1/1P5P/r7/8 b - - 1 42",
    "fen": "6k1/2R5/p2r1pKp/1pp2P2/6P1/1P5P/7r/8 w - - 2 43",
    "preMove": "Rh2",
    "solution": [
      "Rc8+",
      "Rd8",
      "Rxd8#"
    ]
  },
  {
    "id": "099hE",
    "title": "Knight Fork",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1184,
    "popularity": 100,
    "description": "Win material using a tactical fork.",
    "initialFen": "r1b1nr2/5k1p/2qppbpP/pN6/1pn1P3/1B2B2Q/PPP1NP2/2KR3R w - - 2 21",
    "fen": "r1b1nr2/5k1p/2qppbpP/pN6/1pB1P3/4B2Q/PPP1NP2/2KR3R b - - 0 21",
    "preMove": "Bxc4",
    "solution": [
      "Qxc4",
      "Nxd6+",
      "Nxd6"
    ]
  },
  {
    "id": "099n7",
    "title": "Chess Puzzle",
    "theme": "Advantage",
    "difficulty": "Expert",
    "rating": 1887,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "r6k/7P/pq1p2pP/1p1bn3/4p2b/P3B3/1PPQ2B1/5K1R b - - 0 25",
    "fen": "r6k/7P/pq1p2pP/1p1b4/2n1p2b/P3B3/1PPQ2B1/5K1R w - - 1 26",
    "preMove": "Nc4",
    "solution": [
      "Qc3+",
      "Ne5",
      "Bxb6"
    ]
  },
  {
    "id": "099qI",
    "title": "Mate in 1",
    "theme": "KingsideAttack",
    "difficulty": "Easy",
    "rating": 957,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "rn5k/pbp3pp/1p1r2q1/5p2/8/1QP1PN2/P3BPPP/R4RK1 w - - 0 16",
    "fen": "rn5k/pbp3pp/1p1r2q1/4Np2/8/1QP1P3/P3BPPP/R4RK1 b - - 1 16",
    "preMove": "Ne5",
    "solution": [
      "Qxg2#"
    ]
  },
  {
    "id": "09A0E",
    "title": "Knight Fork",
    "theme": "Advantage",
    "difficulty": "Easy",
    "rating": 992,
    "popularity": 100,
    "description": "Win material using a tactical fork.",
    "initialFen": "5r2/4Rpk1/3p2p1/1Q1P3p/4P3/5P1P/PP1q1PK1/8 w - - 1 33",
    "fen": "5r2/4Rpk1/3p2p1/3P3p/4P3/1Q3P1P/PP1q1PK1/8 b - - 2 33",
    "preMove": "Qb3",
    "solution": [
      "Qg5+",
      "Kh2",
      "Qxe7"
    ]
  },
  {
    "id": "09Ah4",
    "title": "Sacrifice",
    "theme": "Endgame",
    "difficulty": "Expert",
    "rating": 1870,
    "popularity": 100,
    "description": "Sacrifice material for a tactical gain.",
    "initialFen": "2rr4/6kb/p1B2p1p/1p2p3/1P1PPpP1/2P2K1P/4RP2/R7 w - - 1 36",
    "fen": "2rr4/6kb/p1B2p1p/1p1Pp3/1P2PpP1/2P2K1P/4RP2/R7 b - - 0 36",
    "preMove": "d5",
    "solution": [
      "Rxc6",
      "dxc6",
      "Rd3+",
      "Re3",
      "fxe3"
    ]
  },
  {
    "id": "09B5B",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 812,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "5rk1/p3R1pp/1pq5/2p5/8/P1P2PQ1/1P4KP/8 b - - 14 38",
    "fen": "5rk1/4R1pp/1pq5/p1p5/8/P1P2PQ1/1P4KP/8 w - - 0 39",
    "preMove": "a5",
    "solution": [
      "Qxg7#"
    ]
  },
  {
    "id": "09BUS",
    "title": "Knight Fork",
    "theme": "Advantage",
    "difficulty": "Hard",
    "rating": 1526,
    "popularity": 100,
    "description": "Win material using a tactical fork.",
    "initialFen": "2qr1k2/p4p2/bp3b2/2pp1p1Q/2nP4/2P1P1P1/PP3RBP/R6K b - - 1 22",
    "fen": "2qr1k2/p4p2/bp3b2/2pp1p1Q/3P4/2P1n1P1/PP3RBP/R6K w - - 0 23",
    "preMove": "Nxe3",
    "solution": [
      "Qh6+",
      "Bg7",
      "Qxe3"
    ]
  },
  {
    "id": "09Bft",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Medium",
    "rating": 1035,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "8/7p/8/8/5p1k/5P2/6PK/8 w - - 3 51",
    "fen": "8/7p/8/8/5p1k/5P2/6P1/7K b - - 4 51",
    "preMove": "Kh1",
    "solution": [
      "Kg3",
      "Kg1",
      "h5"
    ]
  },
  {
    "id": "09Bs6",
    "title": "Sacrifice",
    "theme": "Crushing",
    "difficulty": "Medium",
    "rating": 1386,
    "popularity": 100,
    "description": "Find the strongest continuation. Sacrifice material for a tactical gain.",
    "initialFen": "r3r1k1/pp3pp1/7p/2pN4/3pP1b1/PB1P1q2/1PPQ1P2/R3K1R1 w Q - 1 19",
    "fen": "r3r1k1/ppN2pp1/7p/2p5/3pP1b1/PB1P1q2/1PPQ1P2/R3K1R1 b Q - 2 19",
    "preMove": "Nc7",
    "solution": [
      "Rxe4+",
      "dxe4",
      "Qxe4+",
      "Qe3",
      "dxe3"
    ]
  },
  {
    "id": "09Btc",
    "title": "Discovered Attack",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1140,
    "popularity": 100,
    "description": "Unleash a discovered attack.",
    "initialFen": "1R4nr/p2k1pp1/3p3p/8/4n3/B1p1KN2/P4PPP/8 w - - 0 22",
    "fen": "1R4nr/p2k1pp1/3p3p/8/4K3/B1p2N2/P4PPP/8 b - - 0 22",
    "preMove": "Kxe4",
    "solution": [
      "Nf6+",
      "Kd3",
      "Rxb8"
    ]
  },
  {
    "id": "09CEu",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1170,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two. Sacrifice material for a tactical gain.",
    "initialFen": "2kr4/5p1p/6pP/1qp2pP1/8/p1P1Q3/PN6/K3R3 w - - 0 42",
    "fen": "2kr4/5p1p/6pP/1qp2pP1/8/p1P1Q3/P7/K2NR3 b - - 1 42",
    "preMove": "Nd1",
    "solution": [
      "Rxd1+",
      "Rxd1",
      "Qb2#"
    ]
  },
  {
    "id": "09CoQ",
    "title": "Chess Puzzle",
    "theme": "Advantage",
    "difficulty": "Easy",
    "rating": 979,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "1r1q1rk1/4bp1p/b3p1p1/p1BpP2N/P4PQ1/1P5R/1P4PP/R6K b - - 0 22",
    "fen": "1r1q1rk1/5p1p/b3p1p1/p1bpP2N/P4PQ1/1P5R/1P4PP/R6K w - - 0 23",
    "preMove": "Bxc5",
    "solution": [
      "Nf6+",
      "Qxf6",
      "exf6"
    ]
  },
  {
    "id": "09EHY",
    "title": "Mate in 2",
    "theme": "Fork",
    "difficulty": "Easy",
    "rating": 984,
    "popularity": 100,
    "description": "Win material using a tactical fork. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r1b2rkR/1p4p1/1q2p1P1/3pn3/1p1P4/P7/6P1/R1BQK3 b Q - 1 21",
    "fen": "r1b2r1k/1p4p1/1q2p1P1/3pn3/1p1P4/P7/6P1/R1BQK3 w Q - 0 22",
    "preMove": "Kxh8",
    "solution": [
      "Qh5+",
      "Kg8",
      "Qh7#"
    ]
  },
  {
    "id": "09EXl",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 917,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r7/pp1Q2pk/2p4p/2Pp1rq1/4p3/1P2PbP1/PB3P1P/2R2RK1 b - - 10 23",
    "fen": "r7/pp1Q2pk/2p4p/2Pp1r1q/4p3/1P2PbP1/PB3P1P/2R2RK1 w - - 11 24",
    "preMove": "Qh5",
    "solution": [
      "Qxg7#"
    ]
  },
  {
    "id": "09Eh7",
    "title": "Mate in 3",
    "theme": "Long",
    "difficulty": "Expert",
    "rating": 1979,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in three. Sacrifice material for a tactical gain.",
    "initialFen": "1r2r1kb/2q1Bp1p/3R2B1/p7/5P2/1Pp4P/P1Q3R1/1K6 b - - 0 33",
    "fen": "1r2r1kb/2q1Bp2/3R2p1/p7/5P2/1Pp4P/P1Q3R1/1K6 w - - 0 34",
    "preMove": "hxg6",
    "solution": [
      "Rdxg6+",
      "fxg6",
      "Qxg6+",
      "Bg7",
      "Qxg7#"
    ]
  },
  {
    "id": "09FOG",
    "title": "Mate in 2",
    "theme": "KingsideAttack",
    "difficulty": "Easy",
    "rating": 910,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "1q3rk1/4rppp/2R1p3/1B1p4/P2P2n1/4Pb1P/4QPP1/2R3K1 w - - 0 26",
    "fen": "1q3rk1/4rppp/2R1p3/1B1p4/P2P2n1/4PP1P/4QP2/2R3K1 b - - 0 26",
    "preMove": "gxf3",
    "solution": [
      "Qh2+",
      "Kf1",
      "Qh1#"
    ]
  },
  {
    "id": "09Ff3",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Hard",
    "rating": 1596,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "7r/p1Rk3P/4p3/4P3/1b3P2/4p3/P2nq3/K1R5 b - - 2 40",
    "fen": "3k3r/p1R4P/4p3/4P3/1b3P2/4p3/P2nq3/K1R5 w - - 3 41",
    "preMove": "Kd8",
    "solution": [
      "Rc8+",
      "Ke7",
      "R1c7#"
    ]
  },
  {
    "id": "09Fpl",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 863,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r2q1rk1/ppp3b1/2npbNQ1/4p1Np/3P3P/2P1P3/PP2BPP1/R3K2R b KQ - 0 14",
    "fen": "r4rk1/ppp3b1/2npbqQ1/4p1Np/3P3P/2P1P3/PP2BPP1/R3K2R w KQ - 0 15",
    "preMove": "Qxf6",
    "solution": [
      "Qh7#"
    ]
  },
  {
    "id": "09FtK",
    "title": "Mate in 1",
    "theme": "AttackingF2F7",
    "difficulty": "Medium",
    "rating": 1334,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r3k2r/1pQ2p2/p1b1pPp1/Bq3nNp/3p1P2/1P1P4/P5PP/R4RK1 b kq - 6 23",
    "fen": "r3k2r/1pQ2p2/p1b1pPp1/B2q1nNp/3p1P2/1P1P4/P5PP/R4RK1 w kq - 7 24",
    "preMove": "Qd5",
    "solution": [
      "Qxf7#"
    ]
  },
  {
    "id": "09GVA",
    "title": "Mate in 2",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1354,
    "popularity": 100,
    "description": "Lure the opponent's piece onto an unfavorable square. Deflect the defender. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "7r/5pk1/3R2p1/3P4/2P1P3/2q3p1/6P1/r2N1RK1 w - - 0 35",
    "fen": "7r/5pk1/3R2p1/3P4/2P1P3/2N3p1/6P1/r4RK1 b - - 0 35",
    "preMove": "Nxc3",
    "solution": [
      "Rh1+",
      "Kxh1",
      "Rxf1#"
    ]
  },
  {
    "id": "09HTT",
    "title": "Mate in 1",
    "theme": "KingsideAttack",
    "difficulty": "Easy",
    "rating": 972,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "3r3k/pb4p1/1pq3np/4Pp2/2BP1P2/4n2P/PP2Q1P1/2R2RK1 w - - 0 25",
    "fen": "3r3k/pb4p1/1pq3np/4Pp2/2BP1P2/4Q2P/PP4P1/2R2RK1 b - - 0 25",
    "preMove": "Qxe3",
    "solution": [
      "Qxg2#"
    ]
  },
  {
    "id": "09IGa",
    "title": "Knight Fork",
    "theme": "Advantage",
    "difficulty": "Expert",
    "rating": 2114,
    "popularity": 100,
    "description": "Win material using a tactical fork. Sacrifice material for a tactical gain.",
    "initialFen": "r3kb1r/ppp1pppp/2n5/4q3/6P1/3P1B1P/PPP2P2/R1BQK1R1 w Qkq - 1 12",
    "fen": "r3kb1r/ppp1pppp/2n5/4q3/6P1/3P1B1P/PPP1QP2/R1B1K1R1 b Qkq - 2 12",
    "preMove": "Qe2",
    "solution": [
      "Nd4",
      "Qxe5",
      "Nxf3+",
      "Ke2",
      "Nxe5"
    ]
  },
  {
    "id": "09IUP",
    "title": "Mate in 2",
    "theme": "Master",
    "difficulty": "Medium",
    "rating": 1176,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "1r1r2k1/pp3pp1/3q4/3BP1p1/b3P2P/8/P4QP1/RR4K1 b - - 0 21",
    "fen": "1r1r2k1/pp3pp1/8/3Bq1p1/b3P2P/8/P4QP1/RR4K1 w - - 0 22",
    "preMove": "Qxe5",
    "solution": [
      "Qxf7+",
      "Kh8",
      "Qh5#"
    ]
  },
  {
    "id": "09IbS",
    "title": "Mate in 3",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1334,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "8/8/R6p/7k/6p1/2r4P/6PK/3R4 w - - 0 34",
    "fen": "8/8/R2R3p/7k/6p1/2r4P/6PK/8 b - - 1 34",
    "preMove": "Rdd6",
    "solution": [
      "g3+",
      "Kg1",
      "Rc1+",
      "Rd1",
      "Rxd1#"
    ]
  },
  {
    "id": "09IyZ",
    "title": "Knight Fork",
    "theme": "Advantage",
    "difficulty": "Easy",
    "rating": 994,
    "popularity": 100,
    "description": "Win material using a tactical fork.",
    "initialFen": "2b5/5k1p/p4P2/1p6/2n5/P6r/1P3R2/4R1K1 b - - 1 34",
    "fen": "8/1b3k1p/p4P2/1p6/2n5/P6r/1P3R2/4R1K1 w - - 2 35",
    "preMove": "Bb7",
    "solution": [
      "Re7+",
      "Kf8",
      "Rxb7"
    ]
  },
  {
    "id": "09Jfa",
    "title": "Knight Fork",
    "theme": "Advantage",
    "difficulty": "Easy",
    "rating": 935,
    "popularity": 100,
    "description": "Win material using a tactical fork.",
    "initialFen": "6k1/1p2rp1p/6p1/p2Qq3/P4r2/4p2P/6B1/1R2R2K b - - 7 33",
    "fen": "6k1/1p2rp1p/6p1/p2Q4/P4r2/2q1p2P/6B1/1R2R2K w - - 8 34",
    "preMove": "Qc3",
    "solution": [
      "Qd8+",
      "Kg7",
      "Qxe7"
    ]
  },
  {
    "id": "09JqR",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 956,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "8/8/2K4k/5P2/2P3Q1/P2q4/8/4r3 b - - 10 55",
    "fen": "8/8/2K4k/5P2/2P3Q1/q7/8/4r3 w - - 0 56",
    "preMove": "Qxa3",
    "solution": [
      "Qg6#"
    ]
  },
  {
    "id": "09Jv0",
    "title": "Mate in 1",
    "theme": "KingsideAttack",
    "difficulty": "Easy",
    "rating": 807,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "2r2rk1/ppQ3pp/2p1Npb1/8/3q4/8/PPP2PPP/R4RK1 b - - 4 18",
    "fen": "2r2rk1/ppQ3pp/2p1Npb1/8/8/8/PqP2PPP/R4RK1 w - - 0 19",
    "preMove": "Qxb2",
    "solution": [
      "Qxg7#"
    ]
  },
  {
    "id": "09KlA",
    "title": "Win the Hanging Piece",
    "theme": "Crushing",
    "difficulty": "Medium",
    "rating": 1148,
    "popularity": 100,
    "description": "Find the strongest continuation. Capture the loose piece.",
    "initialFen": "6rk/6p1/5nQ1/2p1q2p/1p6/1P4RP/P7/2K3R1 w - - 0 37",
    "fen": "6rk/6p1/5n1Q/2p1q2p/1p6/1P4RP/P7/2K3R1 b - - 1 37",
    "preMove": "Qh6+",
    "solution": [
      "gxh6",
      "Rxg8+",
      "Nxg8"
    ]
  },
  {
    "id": "09LYv",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 803,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "5rk1/p3qp1p/4p1pQ/8/4p2R/PP6/2r2PPP/4R1K1 b - - 1 24",
    "fen": "2r3k1/p3qp1p/4p1pQ/8/4p2R/PP6/2r2PPP/4R1K1 w - - 2 25",
    "preMove": "Rfc8",
    "solution": [
      "Qxh7+",
      "Kf8",
      "Qh8#"
    ]
  },
  {
    "id": "09LcP",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 976,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "6r1/p1pk2qp/2pp1p2/8/1Q2P3/5P2/P4P1P/RN3R1K w - - 3 18",
    "fen": "6r1/p1pk2qp/2pp1p2/8/1Q2P3/5P2/P2N1P1P/R4R1K b - - 4 18",
    "preMove": "Nd2",
    "solution": [
      "Qg2#"
    ]
  },
  {
    "id": "09Lts",
    "title": "Knight Fork",
    "theme": "Crushing",
    "difficulty": "Easy",
    "rating": 806,
    "popularity": 100,
    "description": "Find the strongest continuation. Win material using a tactical fork.",
    "initialFen": "8/8/2p1pk2/p1Pp1p2/1p1P1Np1/1P2P1P1/P1R2n2/3n3K w - - 0 52",
    "fen": "8/8/2p1pk2/p1Pp1p2/1p1P1Np1/1P2P1P1/P1R2nK1/3n4 b - - 1 52",
    "preMove": "Kg2",
    "solution": [
      "Nxe3+",
      "Kxf2",
      "Nxc2"
    ]
  },
  {
    "id": "09Lzt",
    "title": "Winning Combination",
    "theme": "AdvancedPawn",
    "difficulty": "Medium",
    "rating": 1027,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "8/8/1p5p/1K4p1/8/2P3kP/P7/8 w - - 2 45",
    "fen": "8/8/1K5p/6p1/8/2P3kP/P7/8 b - - 0 45",
    "preMove": "Kxb6",
    "solution": [
      "Kxh3",
      "Kb5",
      "g4",
      "c4",
      "g3",
      "c5",
      "g2"
    ]
  },
  {
    "id": "09MTi",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 898,
    "popularity": 100,
    "description": "Capture the loose piece. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "6r1/p1p4k/3pPQ2/3P3p/8/7P/r3qPP1/R4R1K w - - 0 38",
    "fen": "6r1/p1p4k/3pPQ2/3P3p/8/7P/R3qPP1/5R1K b - - 0 38",
    "preMove": "Rxa2",
    "solution": [
      "Qxf1+",
      "Kh2",
      "Qxg2#"
    ]
  },
  {
    "id": "09O0B",
    "title": "Discovered Attack",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1135,
    "popularity": 100,
    "description": "Unleash a discovered attack.",
    "initialFen": "r2qk2r/ppp1npbp/3pb1p1/4n3/2P5/1P2PN1P/PB3PP1/RN1QKB1R w KQkq - 0 9",
    "fen": "r2qk2r/ppp1npbp/3pb1p1/4n3/2P5/1P2PN1P/PB2BPP1/RN1QK2R b KQkq - 1 9",
    "preMove": "Be2",
    "solution": [
      "Nxf3+",
      "Bxf3",
      "Bxb2"
    ]
  },
  {
    "id": "09OBL",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 878,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r1b2rk1/pp3ppp/4p3/2q1n3/4PBnP/2NB4/PPP3P1/R2QK2R w KQ - 3 17",
    "fen": "r1b2rk1/pp3ppp/4p3/2q1B3/4P1nP/2NB4/PPP3P1/R2QK2R b KQ - 0 17",
    "preMove": "Bxe5",
    "solution": [
      "Qf2#"
    ]
  },
  {
    "id": "09OQD",
    "title": "Mate in 4",
    "theme": "BackRankMate",
    "difficulty": "Hard",
    "rating": 1688,
    "popularity": 100,
    "description": "Exploit the weak back rank. Find the forced checkmate. Find the forced mate. Sacrifice material for a tactical gain.",
    "initialFen": "1k4rr/pp1R1p2/2p5/4p1p1/2P1Pn2/1P3PP1/P2Q2Bq/3R1K2 b - - 6 30",
    "fen": "1k4rr/pp1R1p2/2p5/4p1p1/2P1Pn2/1P3Pq1/P2Q2B1/3R1K2 w - - 0 31",
    "preMove": "Qxg3",
    "solution": [
      "Qd6+",
      "Ka8",
      "Rd8+",
      "Rxd8",
      "Qxd8+",
      "Rxd8",
      "Rxd8#"
    ]
  },
  {
    "id": "09OeR",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1244,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "8/5q1k/p5pp/1p2Qb1P/5N2/PPP1R3/6P1/K2r4 w - - 0 44",
    "fen": "8/5q1k/p5pp/1p2Qb1P/5N2/PPP1R3/1K4P1/3r4 b - - 1 44",
    "preMove": "Kb2",
    "solution": [
      "Rb1+",
      "Ka2",
      "Qxb3#"
    ]
  },
  {
    "id": "09Ptg",
    "title": "Knight Fork",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1176,
    "popularity": 100,
    "description": "Win material using a tactical fork.",
    "initialFen": "1k3r2/p4pp1/1p2pb1p/2q5/2P5/4RN2/PP3PPP/1K1Q4 b - - 0 22",
    "fen": "1k3r2/p4pp1/1p2pb1p/8/2q5/4RN2/PP3PPP/1K1Q4 w - - 0 23",
    "preMove": "Qxc4",
    "solution": [
      "Qd6+",
      "Kb7",
      "Qxf8"
    ]
  },
  {
    "id": "09QFL",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 832,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "2k5/2p2p1p/p1Q1pb2/5p2/1p6/qP3P2/N1P3PP/1K1r3R w - - 2 25",
    "fen": "2k5/2p2p1p/p1Q1pb2/5p2/1p6/qP3P2/N1P3PP/1K1R4 b - - 0 25",
    "preMove": "Rxd1",
    "solution": [
      "Qb2#"
    ]
  },
  {
    "id": "09QiO",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 891,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "8/2pQqkp1/1bp4p/3p4/1P6/8/7B/5N1K w - - 10 37",
    "fen": "8/2p1qkp1/1bQ4p/3p4/1P6/8/7B/5N1K b - - 0 37",
    "preMove": "Qxc6",
    "solution": [
      "Qe4#"
    ]
  },
  {
    "id": "09RcX",
    "title": "Mate in 2",
    "theme": "Mate",
    "difficulty": "Medium",
    "rating": 1186,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r5k1/pp3rp1/2p5/6B1/6n1/2P3q1/PPQ1R1P1/5RK1 w - - 0 26",
    "fen": "r5k1/pp3Rp1/2p5/6B1/6n1/2P3q1/PPQ1R1P1/6K1 b - - 0 26",
    "preMove": "Rxf7",
    "solution": [
      "Qh2+",
      "Kf1",
      "Qh1#"
    ]
  },
  {
    "id": "09TKF",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1121,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "8/4r3/p2kBpr1/1ppP4/3b1P2/1P5P/P6K/3R3R w - - 9 36",
    "fen": "8/4r3/p2kBpr1/1ppP1P2/3b4/1P5P/P6K/3R3R b - - 0 36",
    "preMove": "f5",
    "solution": [
      "Be5#"
    ]
  },
  {
    "id": "09Tmx",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 843,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "1r3b1k/p3q2p/2p5/2p2Q2/7P/2BB4/PPP3P1/6K1 b - - 2 24",
    "fen": "1r5k/p3q1bp/2p5/2p2Q2/7P/2BB4/PPP3P1/6K1 w - - 3 25",
    "preMove": "Bg7",
    "solution": [
      "Qxh7#"
    ]
  },
  {
    "id": "09U8T",
    "title": "Knight Fork",
    "theme": "Endgame",
    "difficulty": "Hard",
    "rating": 1443,
    "popularity": 100,
    "description": "Win material using a tactical fork.",
    "initialFen": "2k5/2p1qp1r/p1p5/1p2p3/1P2PP2/P2Pb3/2P3Q1/1K1R4 b - - 0 27",
    "fen": "2k5/2p1qp1r/p1p5/1p2p3/1P2Pb2/P2P4/2P3Q1/1K1R4 w - - 0 28",
    "preMove": "Bxf4",
    "solution": [
      "Qg8+",
      "Kb7",
      "Qxh7"
    ]
  },
  {
    "id": "09Uv7",
    "title": "Mate in 2",
    "theme": "Deflection",
    "difficulty": "Medium",
    "rating": 1267,
    "popularity": 100,
    "description": "Deflect the defender. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "8/1p6/8/1pP1R2p/6pk/1P6/1r1r4/4R2K b - - 3 58",
    "fen": "8/1p6/8/1pP1R2p/7k/1P4p1/1r1r4/4R2K w - - 0 59",
    "preMove": "g3",
    "solution": [
      "R1e4+",
      "Kh3",
      "Rxh5#"
    ]
  },
  {
    "id": "09V7o",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Medium",
    "rating": 1262,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "8/2K3k1/7p/1R4pP/5rP1/5P2/8/8 w - - 15 43",
    "fen": "8/2K3k1/7p/5RpP/5rP1/5P2/8/8 b - - 16 43",
    "preMove": "Rf5",
    "solution": [
      "Rxf5",
      "gxf5",
      "Kf6"
    ]
  },
  {
    "id": "09V9S",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Hard",
    "rating": 1497,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "7k/3qNQb1/p6p/1p2p3/1P2n3/P5P1/5PK1/8 b - - 0 39",
    "fen": "7k/3qNQb1/p4n1p/1p2p3/1P6/P5P1/5PK1/8 w - - 1 40",
    "preMove": "Nf6",
    "solution": [
      "Ng6+",
      "Kh7",
      "Nf8+"
    ]
  },
  {
    "id": "09X3G",
    "title": "Mate in 2",
    "theme": "Mate",
    "difficulty": "Medium",
    "rating": 1149,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "6r1/4k1q1/3bprp1/p2R4/B1pPpPQ1/2P1P3/8/2BK2R1 b - - 0 34",
    "fen": "6r1/4k1q1/3b1rp1/p2p4/B1pPpPQ1/2P1P3/8/2BK2R1 w - - 0 35",
    "preMove": "exd5",
    "solution": [
      "Qd7+",
      "Kf8",
      "Qe8#"
    ]
  },
  {
    "id": "09X5H",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Hard",
    "rating": 1628,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "2r1r3/p5p1/1p2pk2/3nN3/3P4/8/PP4P1/R4RK1 b - - 2 31",
    "fen": "2r1r3/p3k1p1/1p2p3/3nN3/3P4/8/PP4P1/R4RK1 w - - 3 32",
    "preMove": "Ke7",
    "solution": [
      "Rf7+",
      "Kd6",
      "Rd7#"
    ]
  },
  {
    "id": "09XGA",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 926,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "2r5/R2R1pk1/PQ3bp1/4p3/4Pq2/1P5P/5PPK/8 w - - 9 37",
    "fen": "2r5/R2R1pk1/PQ3bp1/4p3/4Pq2/1P5P/5PP1/6K1 b - - 10 37",
    "preMove": "Kg1",
    "solution": [
      "Rc1+",
      "Rd1",
      "Rxd1#"
    ]
  },
  {
    "id": "09XtO",
    "title": "Knight Fork",
    "theme": "Advantage",
    "difficulty": "Easy",
    "rating": 865,
    "popularity": 100,
    "description": "Win material using a tactical fork.",
    "initialFen": "6k1/p2r4/1pN1n2p/6p1/PPP2pP1/2B2P1P/2K5/8 b - - 0 46",
    "fen": "8/p2r1k2/1pN1n2p/6p1/PPP2pP1/2B2P1P/2K5/8 w - - 1 47",
    "preMove": "Kf7",
    "solution": [
      "Ne5+",
      "Ke8",
      "Nxd7"
    ]
  },
  {
    "id": "09YTl",
    "title": "Mate in 1",
    "theme": "Master",
    "difficulty": "Easy",
    "rating": 900,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r1bk3r/p7/1p6/3p1P1q/8/2P3Q1/PP1N1RK1/R1B5 w - - 6 31",
    "fen": "r1bk3r/p7/1p6/3p1P1q/8/2P2NQ1/PP3RK1/R1B5 b - - 7 31",
    "preMove": "Nf3",
    "solution": [
      "Qh1#"
    ]
  },
  {
    "id": "09Yru",
    "title": "Pin Tactic",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1178,
    "popularity": 100,
    "description": "Clear the critical square. Exploit the pinned piece.",
    "initialFen": "4kr2/1pp3bp/8/2r1P1p1/8/2P3P1/PP4PP/3RR1K1 b - - 0 24",
    "fen": "4kr2/1pp3bp/8/4r1p1/8/2P3P1/PP4PP/3RR1K1 w - - 0 25",
    "preMove": "Rxe5",
    "solution": [
      "Rxe5+",
      "Bxe5",
      "Re1",
      "Kf7",
      "Rxe5"
    ]
  },
  {
    "id": "09aOZ",
    "title": "Knight Fork",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1157,
    "popularity": 100,
    "description": "Win material using a tactical fork.",
    "initialFen": "2r1q2k/pb1n3B/1p5r/5QNp/2N2B2/1Pb1P3/P3KPP1/8 b - - 2 23",
    "fen": "2r1q2k/pb1n2bB/1p5r/5QNp/2N2B2/1P2P3/P3KPP1/8 w - - 3 24",
    "preMove": "Bg7",
    "solution": [
      "Nf7+",
      "Qxf7",
      "Qxf7",
      "Rxh7",
      "Qxd7"
    ]
  },
  {
    "id": "09ahN",
    "title": "Knight Fork",
    "theme": "Advantage",
    "difficulty": "Easy",
    "rating": 962,
    "popularity": 100,
    "description": "Win material using a tactical fork.",
    "initialFen": "5rk1/ppp1qrp1/3p3p/3Pp3/2P1Q2n/1PB2P2/P5PP/4RRK1 w - - 3 24",
    "fen": "5rk1/ppp1qrp1/3p3p/3Pp3/2P1Q2n/1PB2PP1/P6P/4RRK1 b - - 0 24",
    "preMove": "g3",
    "solution": [
      "Nxf3+",
      "Rxf3",
      "Rxf3"
    ]
  },
  {
    "id": "09amb",
    "title": "Pin Tactic",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1344,
    "popularity": 100,
    "description": "Exploit the pinned piece.",
    "initialFen": "4k1r1/1ppb1p2/p3p3/3nn3/7Q/P1qB4/2PN1PPP/3R1RK1 w - - 15 22",
    "fen": "4k1r1/1ppb1p2/p3p3/3nn3/4N2Q/P1qB4/2P2PPP/3R1RK1 b - - 16 22",
    "preMove": "Ne4",
    "solution": [
      "Nf3+",
      "Kh1",
      "Nxh4",
      "Nxc3",
      "Nxc3"
    ]
  },
  {
    "id": "09auU",
    "title": "Chess Puzzle",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1301,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "1r6/6k1/1PR2pp1/2Kp3p/5P2/4PP2/5R2/2r5 w - - 1 49",
    "fen": "1r6/6k1/1PR2pp1/3K3p/5P2/4PP2/5R2/2r5 b - - 0 49",
    "preMove": "Kxd5",
    "solution": [
      "Rd8+",
      "Rd6",
      "Rd1+"
    ]
  },
  {
    "id": "09c3y",
    "title": "Knight Fork",
    "theme": "AdvancedPawn",
    "difficulty": "Easy",
    "rating": 852,
    "popularity": 100,
    "description": "Win material using a tactical fork. Promote your pawn.",
    "initialFen": "6k1/2q2ppp/6n1/1Q2p3/8/r3P2P/2pR1PP1/2B3K1 w - - 0 32",
    "fen": "6k1/2q2ppp/6n1/1Q2p3/8/B3P2P/2pR1PP1/6K1 b - - 0 32",
    "preMove": "Bxa3",
    "solution": [
      "c1=Q+",
      "Bxc1",
      "Qxc1+",
      "Rd1",
      "Qxd1+"
    ]
  },
  {
    "id": "09cDD",
    "title": "Mate in 1",
    "theme": "KingsideAttack",
    "difficulty": "Easy",
    "rating": 959,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r4rk1/ppp5/2q1ppbp/6p1/1PNP1n2/P6P/1B1QBPP1/2R2RK1 w - - 6 20",
    "fen": "r4rk1/ppp5/2q1ppbp/4N1p1/1P1P1n2/P6P/1B1QBPP1/2R2RK1 b - - 7 20",
    "preMove": "Ne5",
    "solution": [
      "Qxg2#"
    ]
  },
  {
    "id": "09cL6",
    "title": "Knight Fork",
    "theme": "Crushing",
    "difficulty": "Expert",
    "rating": 1952,
    "popularity": 100,
    "description": "Find the strongest continuation. Win material using a tactical fork.",
    "initialFen": "8/2r1kpp1/7p/2q5/p4Q2/8/6PP/3R3K b - - 3 29",
    "fen": "8/2r1kpp1/7p/2q5/5Q2/p7/6PP/3R3K w - - 0 30",
    "preMove": "a3",
    "solution": [
      "Qe4+",
      "Kf6",
      "Rf1+",
      "Kg5",
      "h4+",
      "Kh5",
      "Rf5+",
      "Qxf5",
      "Qxf5+"
    ]
  },
  {
    "id": "09eE1",
    "title": "Mate in 2",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 982,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "q7/1Rp1r3/1n1pBk2/1P1Pp3/1P3bQp/5P1P/6P1/5N1K w - - 7 39",
    "fen": "q7/1Rp1r3/1n1pBk2/1P1Pp3/1P3bQp/5P1P/3N2P1/7K b - - 8 39",
    "preMove": "Nd2",
    "solution": [
      "Qa1+",
      "Nb1",
      "Qxb1#"
    ]
  },
  {
    "id": "09eZH",
    "title": "Skewer",
    "theme": "AdvancedPawn",
    "difficulty": "Hard",
    "rating": 1774,
    "popularity": 100,
    "description": "Clear the critical square. Find the strongest continuation. Use a skewer to win material.",
    "initialFen": "8/b7/P7/1BP3pp/2K1k3/8/8/8 b - - 0 59",
    "fen": "8/b7/P7/1BP4p/2K1k1p1/8/8/8 w - - 0 60",
    "preMove": "g4",
    "solution": [
      "c6",
      "g3",
      "c7",
      "g2",
      "Bc6+",
      "Kf4",
      "Bxg2"
    ]
  },
  {
    "id": "09ebA",
    "title": "Discovered Attack",
    "theme": "Advantage",
    "difficulty": "Hard",
    "rating": 1533,
    "popularity": 100,
    "description": "Unleash a discovered attack.",
    "initialFen": "r3r1k1/1ppb1pp1/p3qP1p/2p5/2P1P3/8/PBP1Q1PP/3R1RK1 w - - 1 19",
    "fen": "r3r1k1/1ppb1pp1/p3qP1p/2p2R2/2P1P3/8/PBP1Q1PP/3R2K1 b - - 2 19",
    "preMove": "Rf5",
    "solution": [
      "Qxf5",
      "exf5",
      "Rxe2"
    ]
  },
  {
    "id": "09evg",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 939,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "rq3bkr/pp2p1pp/1nn5/1N4N1/6Q1/2Pp4/PP3PPP/R1B2RK1 b - - 0 14",
    "fen": "rq3bkr/pp2p1p1/1nn4p/1N4N1/6Q1/2Pp4/PP3PPP/R1B2RK1 w - - 0 15",
    "preMove": "h6",
    "solution": [
      "Qe6#"
    ]
  },
  {
    "id": "09fxD",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 916,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "8/5pk1/3p2p1/2p1n1q1/2P1Q3/1B5P/Pr4P1/5R1K w - - 0 32",
    "fen": "8/5pk1/3p2p1/2p1n1q1/2P2Q2/1B5P/Pr4P1/5R1K b - - 1 32",
    "preMove": "Qf4",
    "solution": [
      "Qxg2#"
    ]
  },
  {
    "id": "09gCc",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Hard",
    "rating": 1635,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "8/2B4p/6b1/8/p2k4/8/4RPKP/r7 b - - 0 40",
    "fen": "8/2B4p/6b1/8/3k4/p7/4RPKP/r7 w - - 0 41",
    "preMove": "a3",
    "solution": [
      "Be5+",
      "Kd3",
      "Re3+",
      "Kc4",
      "Bxa1"
    ]
  },
  {
    "id": "09gEI",
    "title": "Discovered Attack",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1118,
    "popularity": 100,
    "description": "Unleash a discovered attack.",
    "initialFen": "5rk1/2nR1pp1/1pq4p/2b1P3/rPQ4B/5N1P/5PP1/1R4K1 w - - 3 28",
    "fen": "5rk1/2n2pp1/1pq4p/2b1P3/rPQ4B/5N1P/5PP1/1R1R2K1 b - - 4 28",
    "preMove": "Rdd1",
    "solution": [
      "Bxf2+",
      "Bxf2",
      "Qxc4"
    ]
  },
  {
    "id": "09hL1",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1153,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "8/p3r3/1p3Rp1/1P4P1/5P2/3k4/1P4r1/2K1R3 w - - 2 37",
    "fen": "8/p3R3/1p3Rp1/1P4P1/5P2/3k4/1P4r1/2K5 b - - 0 37",
    "preMove": "Rxe7",
    "solution": [
      "Rg1+",
      "Re1",
      "Rxe1#"
    ]
  },
  {
    "id": "09hTc",
    "title": "Mate in 1",
    "theme": "AttackingF2F7",
    "difficulty": "Medium",
    "rating": 1022,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r1b1k2r/pp1pppbp/1qn3p1/4P3/2B3n1/2N2N2/PPP2PPP/R1BQK2R w KQkq - 1 9",
    "fen": "r1b1k2r/pp1pppbp/1qn3p1/4P1N1/2B3n1/2N5/PPP2PPP/R1BQK2R b KQkq - 2 9",
    "preMove": "Ng5",
    "solution": [
      "Qxf2#"
    ]
  },
  {
    "id": "09hzj",
    "title": "Chess Puzzle",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1227,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "1k1r4/1p2n3/pb4np/2q2r2/8/2P2N2/PP1BQ1PP/RN2R2K w - - 2 27",
    "fen": "1k1r4/1p2n3/pb4np/2q2r2/8/2P1BN2/PP2Q1PP/RN2R2K b - - 3 27",
    "preMove": "Be3",
    "solution": [
      "Qxe3",
      "Qxe3",
      "Bxe3"
    ]
  },
  {
    "id": "09i1X",
    "title": "Pin Tactic",
    "theme": "Advantage",
    "difficulty": "Hard",
    "rating": 1474,
    "popularity": 100,
    "description": "Exploit the pinned piece.",
    "initialFen": "k1r1r3/pp3p2/3B1R1p/4n1p1/3pP3/Pq1P2P1/1P2Q1KP/5R2 w - - 9 28",
    "fen": "k1r1r3/pp3p2/5R1p/4B1p1/3pP3/Pq1P2P1/1P2Q1KP/5R2 b - - 0 28",
    "preMove": "Bxe5",
    "solution": [
      "Rc2",
      "Qxc2",
      "Qxc2+"
    ]
  },
  {
    "id": "09ijW",
    "title": "Knight Fork",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1117,
    "popularity": 100,
    "description": "Win material using a tactical fork.",
    "initialFen": "1k5r/p1p3q1/1pQ2N2/1Pn1p3/1bP4p/4P2P/P4PP1/3R2K1 b - - 11 28",
    "fen": "1k3r2/p1p3q1/1pQ2N2/1Pn1p3/1bP4p/4P2P/P4PP1/3R2K1 w - - 12 29",
    "preMove": "Rf8",
    "solution": [
      "Nd7+",
      "Nxd7",
      "Rxd7",
      "Qxd7",
      "Qxd7"
    ]
  },
  {
    "id": "09itH",
    "title": "Mate in 1",
    "theme": "KingsideAttack",
    "difficulty": "Medium",
    "rating": 1114,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r3k2r/pp1b1pp1/2p4p/2bPP3/2P3nq/2NB4/PP4PP/R1BQ1R1K w kq - 1 14",
    "fen": "r3k2r/pp1b1pp1/2p4p/2bPP3/2P1N1nq/3B4/PP4PP/R1BQ1R1K b kq - 2 14",
    "preMove": "Ne4",
    "solution": [
      "Qxh2#"
    ]
  },
  {
    "id": "09k5o",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Expert",
    "rating": 1957,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "3q1rk1/pp3p2/4pRp1/2r1P1Qp/8/2P5/PP4P1/5R1K b - - 1 28",
    "fen": "3q1r2/pp3pk1/4pRp1/2r1P1Qp/8/2P5/PP4P1/5R1K w - - 2 29",
    "preMove": "Kg7",
    "solution": [
      "Rxf7+",
      "Rxf7",
      "Rxf7+",
      "Kxf7",
      "Qxd8"
    ]
  },
  {
    "id": "09kGC",
    "title": "Mate in 1",
    "theme": "KingsideAttack",
    "difficulty": "Easy",
    "rating": 800,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "2kr3r/1bp2pp1/pp1bp3/3qn2p/3P1B2/2PB3P/PP3PP1/R2QR1K1 w - - 0 14",
    "fen": "2kr3r/1bp2pp1/pp1bp3/3qB2p/3P4/2PB3P/PP3PP1/R2QR1K1 b - - 0 14",
    "preMove": "Bxe5",
    "solution": [
      "Qxg2#"
    ]
  },
  {
    "id": "09ldn",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 823,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r1bq1rk1/4ppb1/p2p2p1/2p1n2p/1p2P1PP/1P1PBP1N/1PP1N3/R2QKR2 w Q - 0 17",
    "fen": "r1bq1rk1/4ppb1/p2p2p1/2p1n2p/1p2P1PP/1P1PBP2/1PP1NN2/R2QKR2 b Q - 1 17",
    "preMove": "Nf2",
    "solution": [
      "Nxf3#"
    ]
  },
  {
    "id": "09lz3",
    "title": "Mate in 2",
    "theme": "KingsideAttack",
    "difficulty": "Easy",
    "rating": 961,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r1b1rbk1/2qn1ppp/pp1ppn2/6N1/2PP1B2/3B1N2/PPQ2PPP/3R1RK1 b - - 2 14",
    "fen": "r1b1rbk1/2qn1pp1/pp1ppn1p/6N1/2PP1B2/3B1N2/PPQ2PPP/3R1RK1 w - - 0 15",
    "preMove": "h6",
    "solution": [
      "Bh7+",
      "Nxh7",
      "Qxh7#"
    ]
  },
  {
    "id": "09mGO",
    "title": "Skewer",
    "theme": "Advantage",
    "difficulty": "Easy",
    "rating": 932,
    "popularity": 100,
    "description": "Use a skewer to win material.",
    "initialFen": "1r6/1p5R/pP2k3/b2pp3/8/3PN2P/6P1/7K b - - 3 41",
    "fen": "1r6/1p5R/pb2k3/3pp3/8/3PN2P/6P1/7K w - - 0 42",
    "preMove": "Bxb6",
    "solution": [
      "Rh6+",
      "Kd7",
      "Rxb6"
    ]
  },
  {
    "id": "09npD",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Easy",
    "rating": 822,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "8/8/3K4/8/p1k5/P7/8/8 w - - 6 72",
    "fen": "8/8/2K5/8/p1k5/P7/8/8 b - - 7 72",
    "preMove": "Kc6",
    "solution": [
      "Kb3",
      "Kd5",
      "Kxa3",
      "Kc4",
      "Kb2"
    ]
  },
  {
    "id": "09qyM",
    "title": "Mate in 1",
    "theme": "KingsideAttack",
    "difficulty": "Medium",
    "rating": 1152,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "5rkr/1q1p1p2/n1nPpQB1/p3P1Np/1p5R/8/PPP2PPP/R5K1 b - - 0 24",
    "fen": "5rkr/1q1p4/n1nPpQp1/p3P1Np/1p5R/8/PPP2PPP/R5K1 w - - 0 25",
    "preMove": "fxg6",
    "solution": [
      "Qxg6#"
    ]
  },
  {
    "id": "09r1m",
    "title": "Knight Fork",
    "theme": "Advantage",
    "difficulty": "Hard",
    "rating": 1742,
    "popularity": 100,
    "description": "Lure the opponent's piece onto an unfavorable square. Win material using a tactical fork. Exploit the pinned piece. Sacrifice material for a tactical gain.",
    "initialFen": "r1b1k1nr/ppq1pp1p/5bp1/3N4/8/3B1Q2/PPP3PP/R4R1K b kq - 3 14",
    "fen": "r1b1k1nr/pp2pp1p/2q2bp1/3N4/8/3B1Q2/PPP3PP/R4R1K w kq - 4 15",
    "preMove": "Qc6",
    "solution": [
      "Bb5",
      "Qxb5",
      "Nc7+",
      "Kf8",
      "Nxb5"
    ]
  },
  {
    "id": "09rSN",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1142,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "3R3r/r4p1k/1qp2p1p/p4N1Q/1p2P3/1P5P/1PP2PP1/6K1 b - - 7 27",
    "fen": "3q3r/r4p1k/2p2p1p/p4N1Q/1p2P3/1P5P/1PP2PP1/6K1 w - - 0 28",
    "preMove": "Qxd8",
    "solution": [
      "Qxh6+",
      "Kg8",
      "Qg7#"
    ]
  },
  {
    "id": "09sEK",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 945,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "5rk1/3r4/1pP3PQ/3Bq3/P2pPp2/3P4/7K/1R6 b - - 0 45",
    "fen": "5rk1/8/1pP3PQ/3rq3/P2pPp2/3P4/7K/1R6 w - - 0 46",
    "preMove": "Rxd5",
    "solution": [
      "Qh7#"
    ]
  },
  {
    "id": "09uNs",
    "title": "Skewer",
    "theme": "Crushing",
    "difficulty": "Medium",
    "rating": 1121,
    "popularity": 100,
    "description": "Find the strongest continuation. Use a skewer to win material.",
    "initialFen": "8/pp3kp1/2p5/2P5/PP1PP3/3K2R1/8/r7 w - - 1 43",
    "fen": "8/pp3kp1/2p5/P1P5/1P1PP3/3K2R1/8/r7 b - - 0 43",
    "preMove": "a5",
    "solution": [
      "Ra3+",
      "Kc4",
      "Rxg3"
    ]
  },
  {
    "id": "09vZc",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Medium",
    "rating": 1095,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "5Q2/2r2p2/7k/4q3/P7/2p3P1/5P2/5BK1 b - - 1 49",
    "fen": "5Q2/2r2p1k/8/4q3/P7/2p3P1/5P2/5BK1 w - - 2 50",
    "preMove": "Kh7",
    "solution": [
      "Bd3+",
      "f5",
      "Bxf5+",
      "Qxf5",
      "Qxf5+"
    ]
  },
  {
    "id": "09vkI",
    "title": "Chess Puzzle",
    "theme": "Equality",
    "difficulty": "Expert",
    "rating": 1881,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "rnb1kb1r/pp3ppp/4pn2/q3P3/3p4/P1N5/1PPB2PP/R2QKBNR b KQkq - 2 8",
    "fen": "rnb1kb1r/pp3ppp/4pn2/q3P3/8/P1p5/1PPB2PP/R2QKBNR w KQkq - 0 9",
    "preMove": "dxc3",
    "solution": [
      "Bxc3",
      "Qc7",
      "exf6"
    ]
  },
  {
    "id": "09x4v",
    "title": "Mate in 2",
    "theme": "HangingPiece",
    "difficulty": "Easy",
    "rating": 909,
    "popularity": 100,
    "description": "Capture the loose piece. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "2r5/pb3p1k/1p3q2/3p1Q2/3P3b/2N2P2/PP6/2K3RR b - - 0 24",
    "fen": "2r5/pb3p1k/1p6/3p1q2/3P3b/2N2P2/PP6/2K3RR w - - 0 25",
    "preMove": "Qxf5",
    "solution": [
      "Rxh4+",
      "Qh5",
      "Rxh5#"
    ]
  },
  {
    "id": "09yh3",
    "title": "Knight Fork",
    "theme": "Crushing",
    "difficulty": "Easy",
    "rating": 922,
    "popularity": 100,
    "description": "Find the strongest continuation. Win material using a tactical fork.",
    "initialFen": "8/4npk1/4b3/R3K2P/6P1/8/8/8 w - - 5 50",
    "fen": "8/4npk1/4b3/R3K1PP/8/8/8/8 b - - 0 50",
    "preMove": "g5",
    "solution": [
      "Nc6+",
      "Ke4",
      "Nxa5"
    ]
  },
  {
    "id": "09zVa",
    "title": "Chess Puzzle",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1288,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "r4rk1/1p3pbp/p1n3p1/2p1n3/P2pPN1q/3P2N1/BPP5/R2QBRK1 w - - 2 19",
    "fen": "r4rk1/1p3pbp/p1n3p1/2p1n3/P2pPN1q/3P2N1/BPP3K1/R2QBR2 b - - 3 19",
    "preMove": "Kg2",
    "solution": [
      "Ng4",
      "Qxg4",
      "Qxg4"
    ]
  },
  {
    "id": "09zYo",
    "title": "Mate in 3",
    "theme": "BackRankMate",
    "difficulty": "Medium",
    "rating": 1037,
    "popularity": 100,
    "description": "Exploit the weak back rank. Find the forced checkmate. Find the forced mate in three. Sacrifice material for a tactical gain.",
    "initialFen": "1k2r3/pp4Q1/8/2R1pq2/3p4/3P1B2/PP5P/6K1 b - - 0 27",
    "fen": "1k2r3/pp4Q1/8/2R1p3/3p4/3P1q2/PP5P/6K1 w - - 0 28",
    "preMove": "Qxf3",
    "solution": [
      "Qc7+",
      "Ka8",
      "Qc8+",
      "Rxc8",
      "Rxc8#"
    ]
  },
  {
    "id": "0A036",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 933,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "2bkR3/pQ3q2/5n1p/6p1/3P4/6B1/PP3PPP/6K1 b - - 0 23",
    "fen": "2bkq3/pQ6/5n1p/6p1/3P4/6B1/PP3PPP/6K1 w - - 0 24",
    "preMove": "Qxe8",
    "solution": [
      "Qc7#"
    ]
  },
  {
    "id": "0A03l",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1192,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "1k1n4/3R2p1/pQ3b2/1p6/6P1/2P4q/PP6/K7 b - - 4 38",
    "fen": "2kn4/3R2p1/pQ3b2/1p6/6P1/2P4q/PP6/K7 w - - 5 39",
    "preMove": "Kc8",
    "solution": [
      "Qc7#"
    ]
  },
  {
    "id": "0A0HI",
    "title": "Sacrifice",
    "theme": "Crushing",
    "difficulty": "Medium",
    "rating": 1193,
    "popularity": 100,
    "description": "Find the strongest continuation. Sacrifice material for a tactical gain.",
    "initialFen": "8/1R1R4/5k2/4p2P/3pPpP1/q2P1B2/6K1/r7 w - - 1 60",
    "fen": "8/3R4/1R3k2/4p2P/3pPpP1/q2P1B2/6K1/r7 b - - 2 60",
    "preMove": "Rb6+",
    "solution": [
      "Kg5",
      "Kh3",
      "Rh1+",
      "Bxh1",
      "Qxd3+"
    ]
  },
  {
    "id": "0A0OX",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 904,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "7R/p4p2/1p2pkp1/7p/3Q4/8/PP3KNr/7q b - - 17 36",
    "fen": "7R/p4p2/1p2p1p1/5k1p/3Q4/8/PP3KNr/7q w - - 18 37",
    "preMove": "Kf5",
    "solution": [
      "Qf4#"
    ]
  },
  {
    "id": "0A0Ss",
    "title": "Skewer",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1031,
    "popularity": 100,
    "description": "Use a skewer to win material.",
    "initialFen": "1R6/7k/6p1/5p1p/P1K2R2/8/8/3r4 w - - 1 53",
    "fen": "1R6/7k/6p1/5p1p/P4R2/1K6/8/3r4 b - - 2 53",
    "preMove": "Kb3",
    "solution": [
      "Rb1+",
      "Kc4",
      "Rxb8"
    ]
  },
  {
    "id": "0A1gU",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 879,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r1b2rk1/p1q2p1p/1p2pQ2/2bp1p2/5P2/1P1BPR2/P1PN2PP/R5K1 b - - 2 17",
    "fen": "r1b2rk1/p1q1bp1p/1p2pQ2/3p1p2/5P2/1P1BPR2/P1PN2PP/R5K1 w - - 3 18",
    "preMove": "Be7",
    "solution": [
      "Rg3#"
    ]
  },
  {
    "id": "0A3LP",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 917,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "1r4kr/5p2/2p3p1/6p1/3QRn2/1P3P1q/P5P1/6RK w - - 0 38",
    "fen": "1r4kr/5p2/2p3p1/6p1/3QRn2/1P3P1P/P7/6RK b - - 0 38",
    "preMove": "gxh3",
    "solution": [
      "Rxh3#"
    ]
  },
  {
    "id": "0A3xr",
    "title": "Chess Puzzle",
    "theme": "Advantage",
    "difficulty": "Easy",
    "rating": 946,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "r2q1rk1/1b3pp1/4pn1p/ppp5/3P2N1/3QP1P1/PPB2PP1/R4RK1 b - - 1 17",
    "fen": "r2q1rk1/5pp1/4pn1p/ppp5/3Pb1N1/3QP1P1/PPB2PP1/R4RK1 w - - 2 18",
    "preMove": "Be4",
    "solution": [
      "Nxf6+",
      "gxf6",
      "Qxe4"
    ]
  },
  {
    "id": "0A4cc",
    "title": "Mate in 3",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1025,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in three.",
    "initialFen": "4r1k1/pR4B1/3p3p/6p1/8/1P1n1P2/P4P1P/6K1 w - - 3 32",
    "fen": "4r1k1/pR6/3p3B/6p1/8/1P1n1P2/P4P1P/6K1 b - - 0 32",
    "preMove": "Bxh6",
    "solution": [
      "Re1+",
      "Kg2",
      "Nf4+",
      "Kg3",
      "Rg1#"
    ]
  },
  {
    "id": "0A4cr",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Easy",
    "rating": 871,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "6k1/1Q3pp1/2r1p2p/4P3/1P3P2/3R3P/2q3P1/7K w - - 0 31",
    "fen": "6k1/1Q1R1pp1/2r1p2p/4P3/1P3P2/7P/2q3P1/7K b - - 1 31",
    "preMove": "Rd7",
    "solution": [
      "Qc1+",
      "Rd1",
      "Qxd1+"
    ]
  },
  {
    "id": "0A5sQ",
    "title": "Attraction",
    "theme": "Advantage",
    "difficulty": "Hard",
    "rating": 1687,
    "popularity": 100,
    "description": "Lure the opponent's piece onto an unfavorable square. Interfere with the opponent's coordination. Sacrifice material for a tactical gain.",
    "initialFen": "r4rk1/p1pp2p1/1pn1p3/4q1R1/2P4Q/5P2/PP5P/R6K b - - 3 19",
    "fen": "r4rk1/p1pp2p1/1pn1p3/6R1/2P2q1Q/5P2/PP5P/R6K w - - 4 20",
    "preMove": "Qf4",
    "solution": [
      "Rxg7+",
      "Kxg7",
      "Rg1+",
      "Kf7",
      "Qxf4+"
    ]
  },
  {
    "id": "0A7BG",
    "title": "Promotion",
    "theme": "AdvancedPawn",
    "difficulty": "Medium",
    "rating": 1179,
    "popularity": 100,
    "description": "Find the strongest continuation. Deflect the defender. Promote your pawn.",
    "initialFen": "8/2Pk1p1p/3Bp3/1pK3P1/1P6/8/3r1P2/8 b - - 6 37",
    "fen": "8/2Pk1p1p/3rp3/1pK3P1/1P6/8/5P2/8 w - - 0 38",
    "preMove": "Rxd6",
    "solution": [
      "c8=Q+",
      "Kxc8",
      "Kxd6"
    ]
  },
  {
    "id": "0A7Pl",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Hard",
    "rating": 1476,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "8/6r1/4p3/1kPp3p/1P1P1P2/3K2p1/1R5P/8 w - - 0 48",
    "fen": "8/6r1/4p3/1kPp3p/1P1P1P2/3K2P1/1R6/8 b - - 0 48",
    "preMove": "hxg3",
    "solution": [
      "Rxg3+",
      "Kc2",
      "Rg2+",
      "Kb1",
      "Rxb2+"
    ]
  },
  {
    "id": "0A8oE",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Easy",
    "rating": 996,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "8/3B4/b3p3/P2pBkp1/3P3p/n4P1P/5K2/8 w - - 3 56",
    "fen": "8/3B4/b3p3/P2pBkp1/3P3p/n3KP1P/8/8 b - - 4 56",
    "preMove": "Ke3",
    "solution": [
      "Nc4+",
      "Kf2",
      "Nxe5"
    ]
  },
  {
    "id": "0A97t",
    "title": "Mate in 2",
    "theme": "KingsideAttack",
    "difficulty": "Medium",
    "rating": 1022,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r1b3k1/1p1p2p1/1q1P1p1p/p7/P7/2Q2N2/1B2rPPP/1R1R2K1 w - - 6 21",
    "fen": "r1b3k1/1p1p2p1/1q1P1p1p/p7/P7/B1Q2N2/4rPPP/1R1R2K1 b - - 7 21",
    "preMove": "Ba3",
    "solution": [
      "Qxf2+",
      "Kh1",
      "Qxg2#"
    ]
  },
  {
    "id": "0A9FS",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Expert",
    "rating": 1847,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "5rk1/1Q2Rppp/p7/8/3P4/5R1P/q1r2PP1/6K1 b - - 2 26",
    "fen": "5rk1/1Q2Rppp/p7/8/3P4/5R1P/2r2PP1/q5K1 w - - 3 27",
    "preMove": "Qa1+",
    "solution": [
      "Kh2",
      "Qa2",
      "Rexf7",
      "Qxf7",
      "Rxf7",
      "Rxf7",
      "Qb8+",
      "Rf8",
      "Qb3+"
    ]
  },
  {
    "id": "0A9bA",
    "title": "Knight Fork",
    "theme": "Crushing",
    "difficulty": "Medium",
    "rating": 1047,
    "popularity": 100,
    "description": "Find the strongest continuation. Win material using a tactical fork.",
    "initialFen": "8/2Pk4/1B6/p7/P3P1p1/6P1/3n1K2/8 w - - 1 43",
    "fen": "8/2Pk4/1B6/p7/P3P1p1/4K1P1/3n4/8 b - - 2 43",
    "preMove": "Ke3",
    "solution": [
      "Nc4+",
      "Kf4",
      "Nxb6"
    ]
  },
  {
    "id": "0A9rJ",
    "title": "Mate in 1",
    "theme": "KingsideAttack",
    "difficulty": "Easy",
    "rating": 936,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r4k1r/p5pp/1bp1Rp2/2q3B1/Q7/2N2bP1/PP3P1P/4R1K1 w - - 2 21",
    "fen": "r4k1r/p5pp/1bp1Rp2/2q3B1/5Q2/2N2bP1/PP3P1P/4R1K1 b - - 3 21",
    "preMove": "Qf4",
    "solution": [
      "Qxf2#"
    ]
  },
  {
    "id": "0A9sQ",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1148,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move. Exploit the pinned piece.",
    "initialFen": "r1nq3k/p5p1/1pp1R2p/8/P1BB1PP1/2P5/2P4P/6K1 b - - 3 24",
    "fen": "r1nq3k/p5p1/1p2R2p/2p5/P1BB1PP1/2P5/2P4P/6K1 w - - 0 25",
    "preMove": "c5",
    "solution": [
      "Rxh6#"
    ]
  },
  {
    "id": "0AANQ",
    "title": "Chess Puzzle",
    "theme": "Equality",
    "difficulty": "Hard",
    "rating": 1562,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "1r4k1/1P1b3p/5p2/2rP1Pp1/1B2p1Pb/2N4P/6K1/1R6 b - - 2 41",
    "fen": "1r4k1/1P1b3p/5p2/3P1Pp1/1Br1p1Pb/2N4P/6K1/1R6 w - - 3 42",
    "preMove": "Rc4",
    "solution": [
      "Bd6",
      "Rxb7",
      "Rxb7",
      "Rxc3",
      "Rxd7"
    ]
  },
  {
    "id": "0AAnQ",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 938,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "6k1/5p2/3Q3p/5q1K/2P3p1/P4PP1/3R1B1P/1r6 w - - 0 40",
    "fen": "6k1/5p2/3Q3p/5q2/2P3pK/P4PP1/3R1B1P/1r6 b - - 1 40",
    "preMove": "Kh4",
    "solution": [
      "Qg5#"
    ]
  },
  {
    "id": "0AAo7",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1103,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "3N4/2p3p1/p4q1p/1p1b3k/5P2/P6P/1r6/3Q1RK1 b - - 4 41",
    "fen": "3N4/2p3p1/p4q1p/1p1b4/5P1k/P6P/1r6/3Q1RK1 w - - 5 42",
    "preMove": "Kh4",
    "solution": [
      "Qg4#"
    ]
  },
  {
    "id": "0AAwI",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Hard",
    "rating": 1410,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "5k2/2R5/p4K1P/2p5/8/8/8/6r1 b - - 4 59",
    "fen": "5k2/2R5/p4K1P/2p5/8/8/8/7r w - - 5 60",
    "preMove": "Rh1",
    "solution": [
      "Rc8#"
    ]
  },
  {
    "id": "0ABO1",
    "title": "Knight Fork",
    "theme": "Advantage",
    "difficulty": "Easy",
    "rating": 904,
    "popularity": 100,
    "description": "Win material using a tactical fork.",
    "initialFen": "1r4k1/3qpp1p/3p2p1/B1pN4/3b4/P7/5PPP/3Q2K1 b - - 6 27",
    "fen": "1r4k1/4pp1p/3p2p1/B1pN1q2/3b4/P7/5PPP/3Q2K1 w - - 7 28",
    "preMove": "Qf5",
    "solution": [
      "Nxe7+",
      "Kh8",
      "Nxf5"
    ]
  },
  {
    "id": "0ABXE",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 996,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "6k1/p5p1/8/3p1Q1N/P2P2Pp/4q1bP/4r3/5RK1 w - - 6 38",
    "fen": "6k1/p5p1/8/3p1Q1N/P2P2Pp/4q1bP/4r3/5R1K b - - 7 38",
    "preMove": "Kh1",
    "solution": [
      "Rh2#"
    ]
  },
  {
    "id": "0ACR3",
    "title": "Chess Puzzle",
    "theme": "Advantage",
    "difficulty": "Hard",
    "rating": 1749,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "rq2k2r/ppbn1p1p/2p1pp2/6B1/PPB5/2PP1Q2/5PPP/R3K2R w KQkq - 0 17",
    "fen": "rq2k2r/ppbn1p1p/2p1pB2/8/PPB5/2PP1Q2/5PPP/R3K2R b KQkq - 0 17",
    "preMove": "Bxf6",
    "solution": [
      "Nxf6",
      "Qxf6",
      "Be5"
    ]
  },
  {
    "id": "0ACf2",
    "title": "Mate in 1",
    "theme": "AttackingF2F7",
    "difficulty": "Easy",
    "rating": 951,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r2qkb1r/1Q3pp1/p2p1n1p/4pP2/2B5/2N1B3/PP2KPPP/n6R b kq - 0 13",
    "fen": "r2qkb1r/1Q3pp1/p2p1n1p/4pP2/2B5/2N1B3/PPn1KPPP/7R w kq - 1 14",
    "preMove": "Nc2",
    "solution": [
      "Qxf7#"
    ]
  },
  {
    "id": "0ACti",
    "title": "Mate in 2",
    "theme": "Mate",
    "difficulty": "Hard",
    "rating": 1749,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two. Exploit the pinned piece.",
    "initialFen": "r1b2k2/ppp3pB/6q1/6N1/PP4np/2Pr1NK1/Q2B2PP/R7 w - - 0 25",
    "fen": "r1b2k2/ppp3pB/6q1/6N1/PP4nK/2Pr1N2/Q2B2PP/R7 b - - 0 25",
    "preMove": "Kxh4",
    "solution": [
      "Qh6+",
      "Kg3",
      "Qxh2#"
    ]
  },
  {
    "id": "0ADxl",
    "title": "Mate in 2",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 955,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r1r3k1/pp2ppbp/3pb1p1/3q4/3BN2P/P7/1PPQBPP1/1K1R3R w - - 1 15",
    "fen": "r1r3k1/pp2ppBp/3pb1p1/3q4/4N2P/P7/1PPQBPP1/1K1R3R b - - 0 15",
    "preMove": "Bxg7",
    "solution": [
      "Qa2+",
      "Kc1",
      "Qa1#"
    ]
  },
  {
    "id": "0AEOh",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Medium",
    "rating": 1131,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r3n2r/pp1b1pkB/1qn1N1p1/3pP3/5B1Q/4P3/PP3PPP/2R2RK1 b - - 0 18",
    "fen": "r3n2r/pp3pkB/1qn1b1p1/3pP3/5B1Q/4P3/PP3PPP/2R2RK1 w - - 0 19",
    "preMove": "Bxe6",
    "solution": [
      "Qh6#"
    ]
  },
  {
    "id": "0AFSG",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 908,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "2kr3r/ppp2ppp/2np4/3Nqb2/8/1P2PP2/P1PQBP1P/2KR3R w - - 3 18",
    "fen": "2kr3r/ppp2ppp/2np4/3Nqb2/4P3/1P3P2/P1PQBP1P/2KR3R b - - 0 18",
    "preMove": "e4",
    "solution": [
      "Qa1#"
    ]
  },
  {
    "id": "0AGAH",
    "title": "Mate in 2",
    "theme": "Clearance",
    "difficulty": "Medium",
    "rating": 1244,
    "popularity": 100,
    "description": "Clear the critical square. Find the forced checkmate. Find the forced mate in two. Sacrifice material for a tactical gain.",
    "initialFen": "r1bq1r1k/ppp3pp/2nb1p2/5n2/2BP2QN/7P/PP3PP1/RNB1R1K1 b - - 4 12",
    "fen": "r1bq1r1k/ppp3pp/2nb1p2/8/2Bn2QN/7P/PP3PP1/RNB1R1K1 w - - 0 13",
    "preMove": "Nfxd4",
    "solution": [
      "Ng6+",
      "hxg6",
      "Qh4#"
    ]
  },
  {
    "id": "0AIaM",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Medium",
    "rating": 1070,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "2kr3r/1p2bppp/p1n5/2pN4/2b1PB2/2N2P2/1PP3PP/2KR3R b - - 3 16",
    "fen": "2krr3/1p2bppp/p1n5/2pN4/2b1PB2/2N2P2/1PP3PP/2KR3R w - - 4 17",
    "preMove": "Rhe8",
    "solution": [
      "Nb6#"
    ]
  },
  {
    "id": "0AIeL",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1222,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "2r5/pp3k2/5ppQ/3p4/q5P1/P3R2P/5P2/K1rR4 w - - 4 32",
    "fen": "2r5/pp3k2/5ppQ/3p4/q5P1/P3R2P/5P2/K1R5 b - - 0 32",
    "preMove": "Rxc1",
    "solution": [
      "Rxc1+",
      "Kb2",
      "Qc2#"
    ]
  },
  {
    "id": "0AIwI",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 920,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r4k1r/p1p3pp/4b3/np1n2N1/K7/P7/1PPP1qPP/RNBQ3R w - - 0 19",
    "fen": "r4k1r/p1p3pp/4b3/Kp1n2N1/8/P7/1PPP1qPP/RNBQ3R b - - 0 19",
    "preMove": "Kxa5",
    "solution": [
      "Qb6#"
    ]
  },
  {
    "id": "0AJEy",
    "title": "Mate in 3",
    "theme": "BackRankMate",
    "difficulty": "Medium",
    "rating": 1298,
    "popularity": 100,
    "description": "Exploit the weak back rank. Find the forced checkmate. Find the forced mate in three. Sacrifice material for a tactical gain.",
    "initialFen": "2k4r/ppp2Q2/2b5/4qp2/8/2N1pP1P/PP4P1/3R3K b - - 0 25",
    "fen": "2k4r/ppp2Q2/8/4qp2/8/2N1pb1P/PP4P1/3R3K w - - 0 26",
    "preMove": "Bxf3",
    "solution": [
      "Qd7+",
      "Kb8",
      "Qd8+",
      "Rxd8",
      "Rxd8#"
    ]
  },
  {
    "id": "0AJNI",
    "title": "Winning Combination",
    "theme": "AdvancedPawn",
    "difficulty": "Medium",
    "rating": 1325,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "2N5/8/4P1pp/p1k2p2/1n3P2/1PK1p1P1/7P/8 b - - 0 48",
    "fen": "2N5/8/2n1P1pp/p1k2p2/5P2/1PK1p1P1/7P/8 w - - 1 49",
    "preMove": "Nc6",
    "solution": [
      "e7",
      "Nxe7",
      "Nxe7",
      "e2",
      "Kd2",
      "e1=Q+",
      "Kxe1"
    ]
  },
  {
    "id": "0AJVI",
    "title": "Chess Puzzle",
    "theme": "AdvancedPawn",
    "difficulty": "Expert",
    "rating": 1889,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "r1b3k1/1pq2rPp/p2b4/3Q4/8/P1p5/1PPB2PP/R4R1K w - - 0 21",
    "fen": "r1b3k1/1pq2RPp/p2b4/3Q4/8/P1p5/1PPB2PP/R6K b - - 0 21",
    "preMove": "Rxf7",
    "solution": [
      "Qxf7",
      "Qxd6",
      "cxd2"
    ]
  },
  {
    "id": "0AJgL",
    "title": "Mate in 2",
    "theme": "Deflection",
    "difficulty": "Easy",
    "rating": 931,
    "popularity": 100,
    "description": "Deflect the defender. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "8/8/5R1p/6pk/8/7P/6PK/B2q4 b - - 0 52",
    "fen": "8/8/5R1p/6pk/8/7P/6PK/q7 w - - 0 53",
    "preMove": "Qxa1",
    "solution": [
      "g4+",
      "Kh4",
      "Rxh6#"
    ]
  },
  {
    "id": "0AJjQ",
    "title": "Pin Tactic",
    "theme": "Advantage",
    "difficulty": "Expert",
    "rating": 2084,
    "popularity": 100,
    "description": "Exploit the pinned piece.",
    "initialFen": "r4rk1/ppq3pp/2n1R3/7n/8/1QN2N2/PP3PPK/R7 w - - 1 17",
    "fen": "r4rk1/ppq3pp/2n5/4R2n/8/1QN2N2/PP3PPK/R7 b - - 2 17",
    "preMove": "Re5+",
    "solution": [
      "Kh8",
      "Nb5",
      "Qb8"
    ]
  },
  {
    "id": "0AJmn",
    "title": "Mate in 3",
    "theme": "AdvancedPawn",
    "difficulty": "Medium",
    "rating": 1055,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in three. Promote your pawn.",
    "initialFen": "8/p1P5/8/8/8/6p1/P4k2/7K w - - 0 39",
    "fen": "2Q5/p7/8/8/8/6p1/P4k2/7K b - - 0 39",
    "preMove": "c8=Q",
    "solution": [
      "g2+",
      "Kh2",
      "g1=Q+",
      "Kh3",
      "Qg3#"
    ]
  },
  {
    "id": "0AKEI",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Medium",
    "rating": 1082,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r1b1r1k1/pp5p/1b2qpp1/3p4/2p5/2BB1NQ1/PPPN2PP/R4K1R w - - 0 18",
    "fen": "r1b1r1k1/pp5p/1b2qpB1/3p4/2p5/2B2NQ1/PPPN2PP/R4K1R b - - 0 18",
    "preMove": "Bxg6",
    "solution": [
      "Qe2#"
    ]
  },
  {
    "id": "0AKXX",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Medium",
    "rating": 1188,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r1bqkb1r/pp2nppp/2n1p3/1B6/3QN3/5N2/PPP2PPP/R1B1K2R b KQkq - 0 8",
    "fen": "r2qkb1r/pp1bnppp/2n1p3/1B6/3QN3/5N2/PPP2PPP/R1B1K2R w KQkq - 1 9",
    "preMove": "Bd7",
    "solution": [
      "Nd6#"
    ]
  },
  {
    "id": "0AKcr",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 972,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r1b2rk1/1pp2pp1/1b1p3p/pP2p3/P1B1PB2/2PP3P/5qP1/R2QRNK1 w - - 0 18",
    "fen": "r1b2rk1/1pp2pp1/1b1p3p/pP2p3/P1B1PB2/2PP3P/5qP1/R2QRN1K b - - 1 18",
    "preMove": "Kh1",
    "solution": [
      "Qg1#"
    ]
  },
  {
    "id": "0ALuj",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 889,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "2Q5/8/2kr4/4p3/5p2/q2P1P2/8/3K4 b - - 1 58",
    "fen": "2Q5/8/3r4/3kp3/5p2/q2P1P2/8/3K4 w - - 2 59",
    "preMove": "Kd5",
    "solution": [
      "Qc4#"
    ]
  },
  {
    "id": "0AN77",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 905,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r1b2rk1/pp3ppp/2n5/3Q4/1P6/2P2N1n/P3B1PP/RN3RqK w - - 6 17",
    "fen": "r1b2rk1/pp3ppp/2n5/3Q4/1P6/2P2N1n/P3B1PP/RN4RK b - - 0 17",
    "preMove": "Rxg1",
    "solution": [
      "Nf2#"
    ]
  },
  {
    "id": "0ANFJ",
    "title": "Mate in 2",
    "theme": "Fork",
    "difficulty": "Medium",
    "rating": 1247,
    "popularity": 100,
    "description": "Win material using a tactical fork. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "r2qr1k1/pp3pp1/2p3np/3p1b2/3P2P1/2n1P3/PPQN1PP1/1BR2RK1 w - - 0 18",
    "fen": "r2qr1k1/pp3pp1/2p3np/3p1P2/3P4/2n1P3/PPQN1PP1/1BR2RK1 b - - 0 18",
    "preMove": "gxf5",
    "solution": [
      "Ne2+",
      "Kh1",
      "Qh4#"
    ]
  },
  {
    "id": "0APD2",
    "title": "Knight Fork",
    "theme": "Attraction",
    "difficulty": "Medium",
    "rating": 1103,
    "popularity": 100,
    "description": "Lure the opponent's piece onto an unfavorable square. Find the strongest continuation. Win material using a tactical fork.",
    "initialFen": "8/6kp/3qp1p1/1pp5/3nQ3/P6P/1P3P2/4R1K1 w - - 5 35",
    "fen": "8/6kp/3qp1p1/1pp1Q3/3n4/P6P/1P3P2/4R1K1 b - - 6 35",
    "preMove": "Qe5+",
    "solution": [
      "Qxe5",
      "Rxe5",
      "Nf3+",
      "Kf1",
      "Nxe5"
    ]
  },
  {
    "id": "0AQXX",
    "title": "Winning Combination",
    "theme": "Crushing",
    "difficulty": "Hard",
    "rating": 1502,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "8/7p/6k1/8/P4p2/5P1P/2KQq3/8 b - - 1 52",
    "fen": "8/7p/6k1/8/P4p2/5q1P/2KQ4/8 w - - 0 53",
    "preMove": "Qxf3",
    "solution": [
      "Qd3+",
      "Qxd3+",
      "Kxd3"
    ]
  },
  {
    "id": "0ARRh",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 882,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "4Q1k1/6p1/p3p1p1/3pqpP1/5r2/1P6/P7/1KR5 b - - 3 33",
    "fen": "4Q3/6pk/p3p1p1/3pqpP1/5r2/1P6/P7/1KR5 w - - 4 34",
    "preMove": "Kh7",
    "solution": [
      "Rh1+",
      "Rh4",
      "Rxh4#"
    ]
  },
  {
    "id": "0ASS7",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 805,
    "popularity": 100,
    "description": "Capture the loose piece. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "1R5k/3R3p/p4r2/4r3/3K4/5pPP/P1q5/8 b - - 1 42",
    "fen": "1R2r2k/3R3p/p4r2/8/3K4/5pPP/P1q5/8 w - - 2 43",
    "preMove": "Re8",
    "solution": [
      "Rxe8+",
      "Rf8",
      "Rxf8#"
    ]
  },
  {
    "id": "0AW67",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 963,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "5r1k/p3p2p/4P3/3p2Q1/7P/2P5/PP2q1RK/8 b - - 4 37",
    "fen": "5r1k/p3p2p/4q3/3p2Q1/7P/2P5/PP4RK/8 w - - 0 38",
    "preMove": "Qxe6",
    "solution": [
      "Qg7#"
    ]
  },
  {
    "id": "0AXkF",
    "title": "Mate in 1",
    "theme": "AdvancedPawn",
    "difficulty": "Easy",
    "rating": 972,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "kbr5/pQ5p/P1b3p1/1pN5/4p3/2P1p2P/1P3PP1/6K1 b - - 1 30",
    "fen": "kbr5/pb5p/P5p1/1pN5/4p3/2P1p2P/1P3PP1/6K1 w - - 0 31",
    "preMove": "Bxb7",
    "solution": [
      "axb7#"
    ]
  },
  {
    "id": "0AYjU",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Medium",
    "rating": 1090,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r3r1k1/1pp2pBN/p1n3n1/b2p1N1Q/3P4/2P5/PP2qPPP/R4RK1 b - - 0 18",
    "fen": "r3r1k1/1pp2pBN/p1n3n1/b2p1N1q/3P4/2P5/PP3PPP/R4RK1 w - - 0 19",
    "preMove": "Qxh5",
    "solution": [
      "Nf6#"
    ]
  },
  {
    "id": "0AYtT",
    "title": "Chess Puzzle",
    "theme": "Endgame",
    "difficulty": "Hard",
    "rating": 1445,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "8/3r2k1/8/4p1p1/R3P1P1/1P6/2r2PP1/5RK1 w - - 0 39",
    "fen": "8/3r2k1/8/4p1p1/R3P1P1/1P3P2/2r3P1/5RK1 b - - 0 39",
    "preMove": "f3",
    "solution": [
      "Rdd2",
      "Kh1",
      "Rxg2"
    ]
  },
  {
    "id": "0AZzR",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1162,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "5r1k/7p/5p2/5R2/1p1Q4/1P4PP/1q4r1/3R2K1 w - - 2 33",
    "fen": "5r1k/7p/5p2/5R2/1p1Q4/1P4PP/1q4r1/3R1K2 b - - 3 33",
    "preMove": "Kf1",
    "solution": [
      "Qe2#"
    ]
  },
  {
    "id": "0AaEr",
    "title": "Mate in 2",
    "theme": "Mate",
    "difficulty": "Medium",
    "rating": 1226,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "5rk1/5ppp/p3pn2/1b6/3P2NQ/q5P1/5P1P/1B2R1K1 b - - 3 29",
    "fen": "5rk1/5ppp/p3pn2/1b6/1q1P2NQ/6P1/5P1P/1B2R1K1 w - - 4 30",
    "preMove": "Qb4",
    "solution": [
      "Nxf6+",
      "gxf6",
      "Qxh7#"
    ]
  },
  {
    "id": "0Aagz",
    "title": "Knight Fork",
    "theme": "Advantage",
    "difficulty": "Easy",
    "rating": 835,
    "popularity": 100,
    "description": "Win material using a tactical fork.",
    "initialFen": "5r1k/R4ppp/1p1r4/4N3/3n4/P2b2P1/5PBP/2R3K1 w - - 7 28",
    "fen": "5r1k/R4ppp/1p1r4/8/3n4/P2N2P1/5PBP/2R3K1 b - - 0 28",
    "preMove": "Nxd3",
    "solution": [
      "Ne2+",
      "Kf1",
      "Nxc1",
      "Nxc1",
      "Rd1+"
    ]
  },
  {
    "id": "0AatC",
    "title": "Pin Tactic",
    "theme": "Advantage",
    "difficulty": "Hard",
    "rating": 1656,
    "popularity": 100,
    "description": "Exploit the pinned piece.",
    "initialFen": "r3k2r/ppq1ppbp/2np2p1/8/4P1n1/1NN5/PPPQ3P/R3KBBR w KQkq - 4 13",
    "fen": "r3k2r/ppq1ppbp/2np2p1/8/4P1n1/1NN5/PPPQ3P/2KR1BBR b kq - 5 13",
    "preMove": "O-O-O",
    "solution": [
      "Bh6",
      "Qxh6",
      "Nxh6"
    ]
  },
  {
    "id": "0Aceb",
    "title": "Pin Tactic",
    "theme": "Crushing",
    "difficulty": "Medium",
    "rating": 1277,
    "popularity": 100,
    "description": "Find the strongest continuation. Exploit the pinned piece.",
    "initialFen": "8/2p2Qbk/pp2P3/5p2/P5b1/3q4/5R2/6K1 b - - 2 38",
    "fen": "8/2p2Qbk/pp2P3/5p2/P5b1/7q/5R2/6K1 w - - 3 39",
    "preMove": "Qh3",
    "solution": [
      "Rh2",
      "Qxh2+",
      "Kxh2"
    ]
  },
  {
    "id": "0Ae6l",
    "title": "Discovered Attack",
    "theme": "Crushing",
    "difficulty": "Expert",
    "rating": 1943,
    "popularity": 100,
    "description": "Find the strongest continuation. Unleash a discovered attack.",
    "initialFen": "3r4/8/2p3kp/8/P5r1/1P1B1RP1/8/6K1 b - - 8 39",
    "fen": "3r4/8/2p4p/6k1/P5r1/1P1B1RP1/8/6K1 w - - 9 40",
    "preMove": "Kg5",
    "solution": [
      "Rf5+",
      "Kg6",
      "Rd5+",
      "Kf7",
      "Rxd8"
    ]
  },
  {
    "id": "0Aehj",
    "title": "Pin Tactic",
    "theme": "Crushing",
    "difficulty": "Medium",
    "rating": 1133,
    "popularity": 100,
    "description": "Find the strongest continuation. Exploit the pinned piece.",
    "initialFen": "5bk1/8/6Pp/4Q1n1/3Pp2N/2P3P1/PP3qPK/8 w - - 4 38",
    "fen": "5bk1/8/6Pp/4QNn1/3Pp3/2P3P1/PP3qPK/8 b - - 5 38",
    "preMove": "Nf5",
    "solution": [
      "Nf3+",
      "Kh3",
      "Nxe5"
    ]
  },
  {
    "id": "0Af0x",
    "title": "Chess Puzzle",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1175,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "1k2r3/pPp1r1p1/6q1/1P3nNp/3p3P/P2Q2P1/1B2PPK1/4R3 b - - 2 27",
    "fen": "1k2r3/pPp3p1/6q1/1P3nNp/3p3P/P2Q2P1/1B2rPK1/4R3 w - - 0 28",
    "preMove": "Rxe2",
    "solution": [
      "Rxe2",
      "Nxh4+",
      "gxh4",
      "Qxd3",
      "Rxe8+"
    ]
  },
  {
    "id": "0AfKR",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 857,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "2r2k2/1b3Pp1/pq4Qp/3B4/5N1P/1Pp3P1/P6K/5R2 b - - 0 34",
    "fen": "2r2k2/1b3Pp1/p5qp/3B4/5N1P/1Pp3P1/P6K/5R2 w - - 0 35",
    "preMove": "Qxg6",
    "solution": [
      "Nxg6#"
    ]
  },
  {
    "id": "0AfUo",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 930,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "8/1R4pk/6p1/2P1p2p/3pPb1P/1B1P1PK1/6P1/5r2 w - - 1 49",
    "fen": "8/1R4pk/6p1/2P1p2p/3pPb1P/1B1P1P1K/6P1/5r2 b - - 2 49",
    "preMove": "Kh3",
    "solution": [
      "Rh1#"
    ]
  },
  {
    "id": "0Afi6",
    "title": "Win the Hanging Piece",
    "theme": "Advantage",
    "difficulty": "Hard",
    "rating": 1448,
    "popularity": 100,
    "description": "Capture the loose piece.",
    "initialFen": "1r3rk1/2qnppbp/2bp2p1/2p5/p3PPQ1/P1P3NP/1PB3P1/1RB1R1K1 b - - 2 20",
    "fen": "1r3rk1/2qnpp1p/2bp2p1/2p5/p3PPQ1/P1b3NP/1PB3P1/1RB1R1K1 w - - 0 21",
    "preMove": "Bxc3",
    "solution": [
      "bxc3",
      "Rxb1",
      "Bxb1"
    ]
  },
  {
    "id": "0Afi7",
    "title": "Knight Fork",
    "theme": "Advantage",
    "difficulty": "Easy",
    "rating": 916,
    "popularity": 100,
    "description": "Win material using a tactical fork.",
    "initialFen": "4r1k1/3q1pbp/6p1/2p5/P1Pp1B2/1PnQ1N1P/5PP1/R5K1 w - - 4 24",
    "fen": "4r1k1/3q1pbp/6p1/P1p5/2Pp1B2/1PnQ1N1P/5PP1/R5K1 b - - 0 24",
    "preMove": "a5",
    "solution": [
      "Ne2+",
      "Kf1",
      "Nxf4"
    ]
  },
  {
    "id": "0AfxJ",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 908,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "5k2/ppp5/5P2/4PK2/2B3r1/7r/PPP3n1/3R4 b - - 1 35",
    "fen": "5k2/ppp5/5P2/4PK2/2r5/7r/PPP3n1/3R4 w - - 0 36",
    "preMove": "Rxc4",
    "solution": [
      "Rd8+",
      "Kf7",
      "e6#"
    ]
  },
  {
    "id": "0Agq6",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Hard",
    "rating": 1432,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "6k1/6pp/pp2P3/2bp3r/5Pn1/8/PP1B2PN/4R2K w - - 1 26",
    "fen": "6k1/4P1pp/pp6/2bp3r/5Pn1/8/PP1B2PN/4R2K b - - 0 26",
    "preMove": "e7",
    "solution": [
      "Rxh2#"
    ]
  },
  {
    "id": "0AgtT",
    "title": "Mate in 2",
    "theme": "BodenMate",
    "difficulty": "Medium",
    "rating": 1273,
    "popularity": 100,
    "description": "Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "2r4r/1p1k1ppp/1b1N4/4n3/6b1/4P3/PP3PPP/R3KB1R w KQ - 2 17",
    "fen": "2N4r/1p1k1ppp/1b6/4n3/6b1/4P3/PP3PPP/R3KB1R b KQ - 0 17",
    "preMove": "Nxc8",
    "solution": [
      "Ba5+",
      "b4",
      "Bxb4#"
    ]
  },
  {
    "id": "0AhMT",
    "title": "Knight Fork",
    "theme": "Crushing",
    "difficulty": "Medium",
    "rating": 1148,
    "popularity": 100,
    "description": "Find the strongest continuation. Win material using a tactical fork.",
    "initialFen": "r3r3/4P1pk/p4qp1/8/2Q1R3/7P/P5P1/6K1 b - - 1 36",
    "fen": "r7/4r1pk/p4qp1/8/2Q1R3/7P/P5P1/6K1 w - - 0 37",
    "preMove": "Rxe7",
    "solution": [
      "Rh4+",
      "Qxh4",
      "Qxh4+",
      "Kg8",
      "Qxe7"
    ]
  },
  {
    "id": "0Ahyx",
    "title": "Pin Tactic",
    "theme": "Crushing",
    "difficulty": "Easy",
    "rating": 825,
    "popularity": 100,
    "description": "Find the strongest continuation. Capture the loose piece. Exploit the pinned piece.",
    "initialFen": "B7/8/6p1/4bbk1/8/5R1P/4PPK1/8 w - - 3 45",
    "fen": "8/8/6p1/4bbk1/4B3/5R1P/4PPK1/8 b - - 4 45",
    "preMove": "Be4",
    "solution": [
      "Bxe4",
      "Kg1",
      "Bxf3"
    ]
  },
  {
    "id": "0AihK",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1059,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "6k1/pp3p2/3B2p1/b3n3/5Q2/P4P1P/BPr4K/8 w - - 1 27",
    "fen": "6k1/pp3p2/3B2p1/b3n3/5Q2/P4PKP/BPr5/8 b - - 2 27",
    "preMove": "Kg3",
    "solution": [
      "Be1#"
    ]
  },
  {
    "id": "0AkpY",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 970,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "r2q1rk1/2p1bpp1/p3pB1p/1p6/3P4/P1RQPb2/1P3PPP/1B3RK1 b - - 0 16",
    "fen": "r2q1rk1/2p2pp1/p3pb1p/1p6/3P4/P1RQPb2/1P3PPP/1B3RK1 w - - 0 17",
    "preMove": "Bxf6",
    "solution": [
      "Qh7#"
    ]
  },
  {
    "id": "0AlPt",
    "title": "Mate in 1",
    "theme": "Endgame",
    "difficulty": "Easy",
    "rating": 839,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "8/5ppk/3n3p/4p3/4P3/2N2B1P/3K1PP1/5b2 w - - 7 40",
    "fen": "8/5ppk/3n3p/4p3/4P3/2N1KB1P/5PP1/5b2 b - - 8 40",
    "preMove": "Ke3",
    "solution": [
      "Nc4#"
    ]
  },
  {
    "id": "0AljV",
    "title": "Knight Fork",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1052,
    "popularity": 100,
    "description": "Win material using a tactical fork.",
    "initialFen": "2b5/1p2k1pp/1p2pp2/2r5/2N2P2/2P5/P1P3PP/1K1R4 w - - 2 22",
    "fen": "2b5/1p2k1pp/1N2pp2/2r5/5P2/2P5/P1P3PP/1K1R4 b - - 0 22",
    "preMove": "Nxb6",
    "solution": [
      "Rb5+",
      "Kc1",
      "Rxb6"
    ]
  },
  {
    "id": "0AmGA",
    "title": "Knight Fork",
    "theme": "Advantage",
    "difficulty": "Easy",
    "rating": 816,
    "popularity": 100,
    "description": "Win material using a tactical fork.",
    "initialFen": "2r1r1k1/pp3ppp/1n1b4/4NbP1/3P1P2/7P/PP1B1K2/2R3R1 b - - 11 25",
    "fen": "2r1r2k/pp3ppp/1n1b4/4NbP1/3P1P2/7P/PP1B1K2/2R3R1 w - - 12 26",
    "preMove": "Kh8",
    "solution": [
      "Nxf7+",
      "Kg8",
      "Nxd6"
    ]
  },
  {
    "id": "0An8M",
    "title": "Promotion",
    "theme": "AdvancedPawn",
    "difficulty": "Expert",
    "rating": 1942,
    "popularity": 100,
    "description": "Find the strongest continuation. Promote your pawn.",
    "initialFen": "1r6/5p1k/4pp1p/2P5/1P5P/3N4/5PP1/6K1 b - - 0 35",
    "fen": "1r6/5p1k/5p1p/2P1p3/1P5P/3N4/5PP1/6K1 w - - 0 36",
    "preMove": "e5",
    "solution": [
      "c6",
      "Rb6",
      "b5",
      "e4",
      "c7",
      "exd3",
      "c8=Q"
    ]
  },
  {
    "id": "0AnXJ",
    "title": "Knight Fork",
    "theme": "AdvancedPawn",
    "difficulty": "Hard",
    "rating": 1533,
    "popularity": 100,
    "description": "Find the strongest continuation. Win material using a tactical fork.",
    "initialFen": "r5rk/pp3pp1/2q2P2/4p1QN/2Pn3P/3P4/P7/3K1R2 b - - 2 30",
    "fen": "r5rk/pp3pp1/2q2P2/4p1QN/2P4P/3P1n2/P7/3K1R2 w - - 3 31",
    "preMove": "Nf3",
    "solution": [
      "fxg7+",
      "Kh7",
      "Nf6+",
      "Qxf6",
      "Qxf6"
    ]
  },
  {
    "id": "0AoIE",
    "title": "Chess Puzzle",
    "theme": "Endgame",
    "difficulty": "Hard",
    "rating": 1719,
    "popularity": 100,
    "description": "Find the best continuation.",
    "initialFen": "3r2k1/1R4p1/1ppN2p1/8/1nP5/1P3P2/5KPP/8 w - - 3 30",
    "fen": "3r2k1/6p1/1RpN2p1/8/1nP5/1P3P2/5KPP/8 b - - 0 30",
    "preMove": "Rxb6",
    "solution": [
      "Nd3+",
      "Kg3",
      "Rxd6"
    ]
  },
  {
    "id": "0Aoa6",
    "title": "Mate in 2",
    "theme": "Deflection",
    "difficulty": "Easy",
    "rating": 978,
    "popularity": 100,
    "description": "Deflect the defender. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "Q4bk1/3P1p1p/p4q2/2p3p1/3p4/P2P2P1/3r1P1P/5BK1 w - - 0 38",
    "fen": "Q2Q1bk1/5p1p/p4q2/2p3p1/3p4/P2P2P1/3r1P1P/5BK1 b - - 0 38",
    "preMove": "d8=Q",
    "solution": [
      "Qxf2+",
      "Kh1",
      "Qxf1#"
    ]
  },
  {
    "id": "0AoeA",
    "title": "Winning Combination",
    "theme": "AdvancedPawn",
    "difficulty": "Medium",
    "rating": 1035,
    "popularity": 100,
    "description": "Find the strongest continuation.",
    "initialFen": "6k1/5p2/1PR1p2p/5p2/8/1K6/3r4/8 b - - 0 36",
    "fen": "3r2k1/5p2/1PR1p2p/5p2/8/1K6/8/8 w - - 1 37",
    "preMove": "Rd8",
    "solution": [
      "b7",
      "Kg7",
      "Rc8"
    ]
  },
  {
    "id": "0ApX9",
    "title": "Mate in 2",
    "theme": "Endgame",
    "difficulty": "Medium",
    "rating": 1147,
    "popularity": 100,
    "description": "Win material using a tactical fork. Find the forced checkmate. Find the forced mate in two.",
    "initialFen": "8/R4p1k/5qpp/8/1P2Q3/4P3/P2r2PP/4rRK1 w - - 4 30",
    "fen": "8/R4p1k/5qpp/8/1P2Q3/4P3/P2r2PP/4R1K1 b - - 0 30",
    "preMove": "Rxe1",
    "solution": [
      "Qf2+",
      "Kh1",
      "Qxe1#"
    ]
  },
  {
    "id": "0ApyM",
    "title": "Knight Fork",
    "theme": "Advantage",
    "difficulty": "Medium",
    "rating": 1393,
    "popularity": 100,
    "description": "Clear the critical square. Win material using a tactical fork.",
    "initialFen": "1k2r1n1/pp1Q4/2p2p2/4b3/2q5/8/P1P3PP/3R1R1K b - - 6 24",
    "fen": "1k2r1n1/pp1Q4/2p1qp2/4b3/8/8/P1P3PP/3R1R1K w - - 7 25",
    "preMove": "Qe6",
    "solution": [
      "Qxe6",
      "Rxe6",
      "Rd8+",
      "Kc7",
      "Rxg8"
    ]
  },
  {
    "id": "0AqC5",
    "title": "Mate in 1",
    "theme": "Mate",
    "difficulty": "Easy",
    "rating": 910,
    "popularity": 100,
    "description": "Find the forced checkmate. Deliver checkmate in one move.",
    "initialFen": "2kr3r/p4pp1/1qp1p3/6Pp/1Pb1p2P/1Q6/PP2P1B1/R1B2K1R w - - 2 17",
    "fen": "2kr3r/p4pp1/1qp1p3/6Pp/1PQ1p2P/8/PP2P1B1/R1B2K1R b - - 0 17",
    "preMove": "Qxc4",
    "solution": [
      "Rd1#"
    ]
  }
];

export function getPuzzleOfTheDay(): Puzzle {
  const day = Math.floor(Date.now() / 86400000) % puzzles.length;
  return puzzles[day];
}
