/** IATA airports location filtered*/
const iata = new Map([
  ["ADB", [38.29, 27.15]],
  ["ADL", [-34.94, 138.54]],
  ["AKL", [-37, 174.78]],
  ["ALA", [43.35, 77.01]],
  ["AMM", [31.72, 35.99]],
  ["AMS", [52.31, 4.76]],
  ["ARI", [-18.35, -70.34]],
  ["ARN", [59.65, 17.93]],
  ["ASU", [-25.24, -57.51]],
  ["ATH", [37.94, 23.95]],
  ["ATL", [33.64, -84.44]],
  ["AUH", [24.43, 54.65]],
  ["AVL", [35.44, -82.54]],
  ["BAH", [26.27, 50.63]],
  ["BAQ", [10.89, -74.78]],
  ["BAX", [53.36, 83.55]],
  ["BCN", [41.3, 2.08]],
  ["BEG", [44.82, 20.31]],
  ["BEY", [33.83, 35.49]],
  ["BGW", [33.28, 44.5]],
  ["BKK", [13.69, 100.75]],
  ["BLR", [13.2, 77.71]],
  ["BMA", [59.36, 17.95]],
  ["BNA", [36.13, -86.67]],
  ["BNE", [-27.4, 153.11]],
  ["BOG", [4.7, -74.14]],
  ["BOM", [19.1, 72.87]],
  ["BOS", [42.37, -71.02]],
  ["BRU", [50.9, 4.48]],
  ["BTH", [1.12, 104.12]],
  ["BTS", [48.17, 17.2]],
  ["BUD", [47.43, 19.26]],
  ["BUF", [42.93, -78.73]],
  ["BUR", [34.2, -118.35]],
  ["BWI", [39.18, -76.67]],
  ["BWN", [4.95, 114.93]],
  ["CAN", [23.39, 113.3]],
  ["CBF", [41.26, -95.76]],
  ["CBR", [-35.31, 149.19]],
  ["CCU", [22.65, 88.44]],
  ["CDG", [49, 2.57]],
  ["CEB", [10.31, 123.98]],
  ["CGK", [-6.13, 106.66]],
  ["CGO", [34.53, 113.84]],
  ["CGP", [22.25, 91.82]],
  ["CHA", [35.04, -85.2]],
  ["CHI", [41.88, -87.77]],
  ["CHS", [32.88, -80.04]],
  ["CJR", [38.53, -77.86]],
  ["CKG", [29.72, 106.63]],
  ["CLE", [41.41, -81.84]],
  ["CLT", [35.22, -80.94]],
  ["CMB", [7.17, 79.89]],
  ["CMH", [40, -82.88]],
  ["CMN", [33.37, -7.59]],
  ["CPH", [55.63, 12.65]],
  ["CPM", [33.89, -118.24]],
  ["CPT", [-33.97, 18.6]],
  ["CRK", [15.18, 120.55]],
  ["CSX", [28.19, 113.21]],
  ["CTU", [30.58, 103.96]],
  ["CUR", [12.18, -68.96]],
  ["CWB", [-25.53, -49.18]],
  ["DAC", [23.85, 90.41]],
  ["DAL", [32.84, -96.85]],
  ["DAR", [-6.87, 39.2]],
  ["DCA", [38.85, -77.04]],
  ["DEL", [28.56, 77.1]],
  ["DEN", [39.85, -104.67]],
  ["DFW", [32.9, -97.04]],
  ["DKR", [14.74, -17.49]],
  ["DLS", [45.62, -121.16]],
  ["DME", [55.41, 37.9]],
  ["DOH", [25.27, 51.56]],
  ["DSM", [41.53, -93.65]],
  ["DTW", [42.21, -83.36]],
  ["DUB", [53.43, -6.24]],
  ["DUR", [-29.61, 31.12]],
  ["DUS", [51.28, 6.77]],
  ["DXB", [25.25, 55.35]],
  ["EDI", [55.95, -3.36]],
  ["ENS", [52.27, 6.88]],
  ["ESB", [40.11, 32.99]],
  ["EVN", [40.15, 44.4]],
  ["EWR", [40.69, -74.18]],
  ["EZE", [-34.81, -58.54]],
  ["FCO", [41.79, 12.25]],
  ["FJR", [25.11, 56.33]],
  ["FLL", [26.07, -80.14]],
  ["FOC", [25.93, 119.67]],
  ["FOR", [-3.78, -38.54]],
  ["FRA", [50.05, 8.57]],
  ["FRU", [43.05, 74.47]],
  ["FTY", [33.78, -84.52]],
  ["FUO", [23.13, 113.28]],
  ["GDL", [20.53, -103.3]],
  ["GIG", [-22.81, -43.25]],
  ["GND", [12, -61.79]],
  ["GOJ", [56.22, 43.79]],
  ["GOT", [57.67, 12.29]],
  ["GRQ", [53.12, 6.58]],
  ["GRU", [-23.43, -46.48]],
  ["GUA", [14.59, -90.53]],
  ["GVA", [46.23, 6.11]],
  ["GYD", [40.46, 50.05]],
  ["HAM", [53.63, 10.01]],
  ["HAN", [21.21, 105.8]],
  ["HEL", [60.32, 24.97]],
  ["HET", [40.85, 111.81]],
  ["HGH", [30.24, 120.43]],
  ["HHN", [49.95, 7.26]],
  ["HHP", [22.29, 114.15]],
  ["HIO", [45.54, -122.95]],
  ["HKG", [22.32, 113.94]],
  ["HND", [35.55, 139.78]],
  ["HNL", [21.33, -157.92]],
  ["HNY", [26.85, 112.5]],
  ["HWD", [37.66, -122.12]],
  ["HYD", [17.24, 78.43]],
  ["IAD", [38.95, -77.45]],
  ["IAH", [29.98, -95.34]],
  ["ICN", [37.45, 126.45]],
  ["IEV", [50.4, 30.45]],
  ["IND", [39.71, -86.3]],
  ["ISB", [33.61, 73.11]],
  ["IST", [40.98, 28.82]],
  ["ITM", [34.79, 135.44]],
  ["JAX", [30.49, -81.68]],
  ["JFK", [40.64, -73.79]],
  ["JHB", [1.64, 103.67]],
  ["JIB", [11.55, 43.15]],
  ["JNB", [-26.13, 28.23]],
  ["JRS", [31.87, 35.21]],
  ["JSR", [23.18, 89.16]],
  ["KBP", [50.34, 30.9]],
  ["KEF", [64, -22.62]],
  ["KGL", [-1.96, 30.14]],
  ["KHH", [22.57, 120.35]],
  ["KHI", [24.9, 67.17]],
  ["KHV", [48.52, 135.17]],
  ["KIV", [46.94, 28.93]],
  ["KIX", [34.44, 135.24]],
  ["KJA", [56.18, 92.48]],
  ["KTM", [27.7, 85.36]],
  ["KUF", [53.51, 50.15]],
  ["KUL", [2.76, 101.71]],
  ["KWI", [29.24, 47.97]],
  ["KZN", [55.61, 49.3]],
  ["LAD", [-8.85, 13.23]],
  ["LAS", [36.09, -115.15]],
  ["LAX", [33.94, -118.41]],
  ["LCA", [34.88, 33.63]],
  ["LCY", [51.5, 0.05]],
  ["LED", [59.81, 30.31]],
  ["LEE", [28.83, -81.81]],
  ["LGA", [40.77, -73.87]],
  ["LGB", [33.82, -118.14]],
  ["LGW", [51.16, -0.16]],
  ["LHE", [31.52, 74.4]],
  ["LHR", [51.47, -0.45]],
  ["LIM", [-12.02, -77.11]],
  ["LIS", [38.77, -9.13]],
  ["LLA", [65.55, 22.12]],
  ["LOS", [6.58, 3.32]],
  ["LPB", [-16.51, -68.18]],
  ["LPP", [61.05, 28.16]],
  ["LUX", [49.63, 6.21]],
  ["LYA", [34.74, 112.39]],
  ["MAA", [12.98, 80.16]],
  ["MAD", [40.47, -3.57]],
  ["MAN", [53.36, -2.27]],
  ["MBA", [-4.03, 39.6]],
  ["MCI", [39.29, -94.72]],
  ["MCO", [28.43, -81.31]],
  ["MCT", [23.59, 58.29]],
  ["MDE", [6.17, -75.43]],
  ["MDW", [41.79, -87.74]],
  ["MEB", [-37.74, 144.9]],
  ["MEL", [-37.67, 144.85]],
  ["MEM", [35.04, -89.98]],
  ["MEX", [19.44, -99.07]],
  ["MFE", [26.18, -98.24]],
  ["MFM", [22.16, 113.57]],
  ["MGM", [32.31, -86.39]],
  ["MIA", [25.8, -80.28]],
  ["MLE", [4.2, 73.52]],
  ["MNL", [14.51, 121.01]],
  ["MPM", [-25.92, 32.57]],
  ["MRN", [35.82, -81.61]],
  ["MRS", [43.44, 5.22]],
  ["MRU", [-20.43, 57.68]],
  ["MSP", [44.88, -93.21]],
  ["MSQ", [53.89, 28.03]],
  ["MTY", [25.78, -100.11]],
  ["MUC", [48.35, 11.79]],
  ["MXP", [45.63, 8.71]],
  ["NAG", [21.09, 79.06]],
  ["NAP", [40.89, 14.29]],
  ["NAY", [39.78, 116.39]],
  ["NBO", [-1.32, 36.93]],
  ["NGB", [29.82, 121.46]],
  ["NNG", [22.61, 108.17]],
  ["NOU", [-22.02, 166.22]],
  ["NQZ", [51.03, 71.46]],
  ["NRT", [35.77, 140.39]],
  ["NUE", [49.49, 11.08]],
  ["OMA", [41.3, -95.9]],
  ["ORD", [41.98, -87.9]],
  ["ORF", [36.9, -76.21]],
  ["ORK", [51.85, -8.49]],
  ["ORY", [48.73, 2.36]],
  ["OSL", [60.19, 11.1]],
  ["OTP", [44.57, 26.08]],
  ["OVB", [55.01, 82.67]],
  ["OXR", [34.2, -119.21]],
  ["PAE", [47.91, -122.28]],
  ["PAO", [37.46, -122.11]],
  ["PAP", [18.58, -72.29]],
  ["PBC", [19.14, -98.37]],
  ["PBH", [27.43, 89.42]],
  ["PBM", [5.45, -55.19]],
  ["PDK", [33.88, -84.3]],
  ["PDX", [45.59, -122.59]],
  ["PEK", [40.08, 116.59]],
  ["PER", [-31.93, 115.96]],
  ["PES", [61.68, 34.33]],
  ["PHL", [39.88, -75.24]],
  ["PHX", [33.44, -112]],
  ["PIT", [40.5, -80.26]],
  ["PKV", [57.82, 28.3]],
  ["PMO", [38.19, 13.1]],
  ["PNH", [11.55, 104.85]],
  ["PNQ", [18.58, 73.92]],
  ["POA", [-29.99, -51.18]],
  ["POX", [49.05, 2.1]],
  ["PRG", [50.11, 14.27]],
  ["PTY", [9.07, -79.39]],
  ["PUS", [35.18, 128.95]],
  ["PWK", [42.11, -87.89]],
  ["PWQ", [52.18, 77.07]],
  ["QHI", [13.23, 100.96]],
  ["QRO", [20.6, -100.38]],
  ["QZO", [43.46, 11.85]],
  ["RGN", [16.9, 96.13]],
  ["RHV", [37.33, -121.82]],
  ["RIC", [37.51, -77.32]],
  ["RIX", [56.92, 23.98]],
  ["RMQ", [24.26, 120.61]],
  ["ROB", [6.24, -10.36]],
  ["ROV", [47.25, 39.75]],
  ["RTM", [51.95, 4.43]],
  ["RUH", [24.96, 46.7]],
  ["RUN", [-20.89, 55.51]],
  ["SAN", [32.73, -117.2]],
  ["SBN", [41.7, -86.31]],
  ["SCL", [-33.4, -70.79]],
  ["SDV", [32.1, 34.79]],
  ["SEA", [47.44, -122.3]],
  ["SFO", [37.62, -122.39]],
  ["SGN", [10.81, 106.66]],
  ["SHA", [31.2, 121.34]],
  ["SHE", [41.86, 123.43]],
  ["SIN", [1.36, 103.99]],
  ["SJC", [37.37, -121.93]],
  ["SJO", [10, -84.2]],
  ["SJU", [18.44, -66]],
  ["SJW", [38.27, 114.69]],
  ["SKG", [40.52, 22.97]],
  ["SLC", [40.79, -111.98]],
  ["SMF", [38.69, -121.59]],
  ["SOF", [42.69, 23.41]],
  ["SSA", [-12.91, -38.34]],
  ["STL", [38.74, -90.37]],
  ["STP", [44.93, -93.07]],
  ["SVQ", [37.42, -5.9]],
  ["SVX", [56.75, 60.8]],
  ["SYD", [-33.93, 151.18]],
  ["SZV", [31.3, 120.63]],
  ["SZX", [22.64, 113.81]],
  ["TAO", [36.27, 120.38]],
  ["TAS", [41.26, 69.27]],
  ["TBS", [41.67, 44.96]],
  ["TGU", [14.06, -87.22]],
  ["TIR", [13.64, 79.54]],
  ["TLH", [30.4, -84.34]],
  ["TLL", [59.42, 24.8]],
  ["TLV", [32, 34.87]],
  ["TNA", [36.86, 117.21]],
  ["TNR", [-18.8, 47.48]],
  ["TPA", [27.98, -82.54]],
  ["TPE", [25.08, 121.22]],
  ["TSN", [39.12, 117.34]],
  ["TUL", [36.19, -95.89]],
  ["TXL", [52.55, 13.29]],
  ["TYO", [35.55, 139.78]],
  ["UFA", [54.57, 55.88]],
  ["UIO", [-0.12, -78.36]],
  ["ULN", [47.85, 106.76]],
  ["VIE", [48.12, 16.56]],
  ["VNO", [54.64, 25.28]],
  ["VNY", [34.21, -118.49]],
  ["VOZ", [51.81, 39.23]],
  ["VTE", [17.98, 102.57]],
  ["VVO", [43.38, 132.14]],
  ["WAW", [52.17, 20.97]],
  ["WLG", [-41.33, 174.81]],
  ["WUH", [30.78, 114.21]],
  ["WUX", [31.49, 120.42]],
  ["XIY", [34.44, 108.76]],
  ["YHZ", [44.88, -63.51]],
  ["YUL", [45.46, -73.75]],
  ["YVR", [49.19, -123.18]],
  ["YWG", [49.9, -97.23]],
  ["YXE", [52.17, -106.69]],
  ["YYC", [51.13, -114.01]],
  ["YYZ", [43.68, -79.61]],
  ["ZAG", [45.73, 16.06]],
  ["ZDM", [32.27, 35.02]],
  ["ZPM", [49.01, 12.1]],
  ["ZQZ", [40.74, 114.93]],
  ["ZRH", [47.45, 8.56]]
]);

export default iata;
