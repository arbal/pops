/** IATA airports location filtered*/
const iata = new Map([
  ["ADL", [-34.9373, 138.539]],
  ["AKL", [-37.004787, 174.78352]],
  ["AMM", [31.722534, 35.98932]],
  ["AMS", [52.30907, 4.763385]],
  ["ARI", [-18.3486, -70.3386]],
  ["ARN", [59.64982, 17.930365]],
  ["ASU", [-25.2399, -57.52]],
  ["ATH", [37.93635, 23.946486]],
  ["ATL", [33.640068, -84.44403]],
  ["AVL", [35.435, -82.5383]],
  ["BAH", [26.26918, 50.62605]],
  ["BAQ", [10.8896, -74.7808]],
  ["BCN", [41.30303, 2.07593]],
  ["BEG", [44.819443, 20.306944]],
  ["BEY", [33.8261, 35.4931]],
  ["BGW", [33.2833, 44.5]],
  ["BKK", [13.693062, 100.752045]],
  ["BLR", [13.1979, 77.7063]],
  ["BMA", [59.3562, 17.9378]],
  ["BNA", [36.13174, -86.668945]],
  ["BNE", [-27.40303, 153.10905]],
  ["BOG", [4.7001, -74.1438]],
  ["BOM", [19.095509, 72.87497]],
  ["BOS", [42.36646, -71.02018]],
  ["BRU", [50.89717, 4.483602]],
  ["BTH", [1.12575, 104.112]],
  ["BUD", [47.433037, 19.261621]],
  ["BUF", [42.9399, -78.7284]],
  ["BUR", [34.20069, -118.359]],
  ["BWI", [39.179527, -76.66894]],
  ["BWN", [4.94417, 114.928]],
  ["CAN", [23.387861, 113.29734]],
  ["CBF", [41.26012, -95.7586]],
  ["CCU", [22.6578, 88.443]],
  ["CDG", [49.003197, 2.567023]],
  ["CEB", [10.31, 123.98]],
  ["CGK", [-6.12395, 106.661]],
  ["CGO", [34.5197, 113.841]],
  ["CGP", [22.252, 91.8138]],
  ["CHI", [41.8831, -87.7661]],
  ["CHS", [32.8925, -80.0377]],
  ["CKG", [29.7157, 106.641]],
  ["CLT", [35.219166, -80.93584]],
  ["CMB", [7.18076, 79.8841]],
  ["CMH", [39.99818, -82.884964]],
  ["CMN", [33.36667, -7.586667]],
  ["CPH", [55.62905, 12.647601]],
  ["CPM", [33.8888, -118.239]],
  ["CPT", [-33.968906, 18.596489]],
  ["CSX", [28.1892, 113.22]],
  ["CTU", [30.581135, 103.9568]],
  ["CUR", [12.184615, -68.95706]],
  ["CWB", [-25.5322, -49.1765]],
  ["DAC", [23.8433, 90.3978]],
  ["DAL", [32.847, -96.8517]],
  ["DAR", [-6.87368, 39.2042]],
  ["DCA", [38.853436, -77.04346]],
  ["DEL", [28.556555, 77.10079]],
  ["DEN", [39.84939, -104.672844]],
  ["DFW", [32.89746, -97.036125]],
  ["DKR", [14.7394, -17.49]],
  ["DLS", [45.6194, -121.165]],
  ["DME", [55.4086, 37.9061]],
  ["DOH", [25.267569, 51.558067]],
  ["DTW", [42.20781, -83.35605]],
  ["DUB", [53.42728, -6.24357]],
  ["DUR", [-29.9701, 30.9505]],
  ["DUS", [51.278328, 6.76558]],
  ["DXB", [25.248665, 55.352917]],
  ["EDI", [55.948143, -3.364177]],
  ["EVN", [40.1473, 44.3959]],
  ["EWR", [40.68907, -74.17876]],
  ["EZE", [-34.81273, -58.539833]],
  ["FCO", [41.794594, 12.250346]],
  ["FJR", [25.1097, 56.3306]],
  ["FLL", [26.071491, -80.144905]],
  ["FOC", [25.9351, 119.663]],
  ["FOR", [-3.77583, -38.5322]],
  ["FRA", [50.0484, 8.5707]],
  ["FTY", [33.7767, -84.5208]],
  ["FUO", [23.0832996, 113.0699997]],
  ["GIG", [-22.8099995, -43.2505569]],
  ["GND", [12.0042, -61.7861]],
  ["GOT", [57.66664, 12.294878]],
  ["GRQ", [53.1217, 6.5833]],
  ["GRU", [-23.425669, -46.481926]],
  ["GUA", [14.588071, -90.53068]],
  ["GVA", [46.229633, 6.105774]],
  ["GYD", [40.4675, 50.0467]],
  ["HAM", [53.63128, 10.006414]],
  ["HAN", [21.2212, 105.807]],
  ["HEL", [60.31795, 24.96645]],
  ["HET", [40.8514, 111.824]],
  ["HGH", [30.2295, 120.434]],
  ["HHN", [49.9486, 7.2638]],
  ["HHP", [22.2889, 114.152]],
  ["HIO", [45.5418, -122.951]],
  ["HKG", [22.315248, 113.93649]],
  ["HND", [35.54907, 139.78453]],
  ["HNL", [21.325832, -157.92166]],
  ["HNY", [26.9053, 112.628]],
  ["HWD", [37.659278, -122.122417]],
  ["HYD", [17.2293, 78.4327]],
  ["IAD", [38.95315, -77.44774]],
  ["IAH", [29.983334, -95.34]],
  ["ICN", [37.448524, 126.45123]],
  ["IEV", [50.4017, 30.4497]],
  ["IND", [39.730515, -86.27281]],
  ["ISB", [33.6167, 73.0967]],
  ["IST", [40.976665, 28.815277]],
  ["ITM", [34.7916, 135.44]],
  ["JAX", [30.4898, -81.686]],
  ["JFK", [40.642334, -73.78817]],
  ["JHB", [1.66256, 103.679]],
  ["JIB", [11.5472, 43.1592]],
  ["JNB", [-26.132664, 28.231314]],
  ["KBP", [50.341244, 30.895206]],
  ["KEF", [63.997765, -22.624283]],
  ["KGL", [-1.963042, 30.135014]],
  ["KHH", [22.5771, 120.35]],
  ["KHI", [24.9065, 67.1608]],
  ["KIV", [46.9278, 28.9308]],
  ["KIX", [34.43533, 135.24397]],
  ["KTM", [27.6931, 85.3592]],
  ["KUL", [2.755672, 101.70539]],
  ["KWI", [29.240116, 47.971252]],
  ["LAD", [-8.847951, 13.234862]],
  ["LAS", [36.086945, -115.1486]],
  ["LAX", [33.943398, -118.40828]],
  ["LCA", [34.880867, 33.62599]],
  ["LCY", [51.5, 0.05]],
  ["LED", [59.806084, 30.3083]],
  ["LEE", [28.8288, -81.8071]],
  ["LGA", [40.7772, -73.8726]],
  ["LGW", [51.156807, -0.161863]],
  ["LHE", [31.5196, 74.406]],
  ["LHR", [51.469604, -0.453566]],
  ["LIM", [-12.019421, -77.107666]],
  ["LIS", [38.770042, -9.128165]],
  ["LOS", [6.577871, 3.321178]],
  ["LPP", [61.044066, 28.156402]],
  ["LUX", [49.63111, 6.209539]],
  ["LYA", [34.7411, 112.388]],
  ["MAA", [12.9814, 80.1641]],
  ["MAD", [40.46515, -3.570209]],
  ["MAN", [53.362907, -2.273354]],
  ["MBA", [-4.02639, 39.5992]],
  ["MCI", [39.293808, -94.719925]],
  ["MCO", [28.432177, -81.308304]],
  ["MCT", [23.5933, 58.2844]],
  ["MDE", [6.16454, -75.4231]],
  ["MDW", [41.788136, -87.74087]],
  ["MEB", [-37.7281, 144.902]],
  ["MEL", [-37.669613, 144.84978]],
  ["MEM", [35.04458, -89.98226]],
  ["MEX", [19.435278, -99.07278]],
  ["MFE", [26.1765, -98.2394]],
  ["MFM", [22.1588, 113.577]],
  ["MGM", [32.3053, -86.3909]],
  ["MIA", [25.796, -80.27824]],
  ["MLE", [4.19202, 73.5287]],
  ["MNL", [14.5097, 121.014]],
  ["MPM", [-25.9197, 32.5731]],
  ["MRN", [35.8202, -81.6114]],
  ["MRS", [43.44178, 5.222137]],
  ["MRU", [20.432, 57.6766]],
  ["MSP", [44.883015, -93.21092]],
  ["MUC", [48.353004, 11.790143]],
  ["MXP", [45.627403, 8.71237]],
  ["NAG", [21.0922, 79.0472]],
  ["NAY", [39.7828, 116.388]],
  ["NGB", [29.8267002, 121.461998]],
  ["NNG", [22.6083, 108.172]],
  ["NOU", [-22.0146, 166.2129]],
  ["NRT", [35.773212, 140.38744]],
  ["NUE", [49.494167, 11.077062]],
  ["OMA", [41.2996, -95.8994]],
  ["ORD", [41.976913, -87.90488]],
  ["ORF", [36.8987, -76.2058]],
  ["ORK", [51.846645, -8.48914]],
  ["ORY", [48.7261, 2.36411]],
  ["OSL", [60.19419, 11.100411]],
  ["OTP", [44.571156, 26.077063]],
  ["OXR", [34.2011, -119.206]],
  ["PAE", [47.9076, -122.277]],
  ["PAO", [37.4583, -122.114]],
  ["PAP", [18.58, -72.2925]],
  ["PBC", [19.1581, -98.3714]],
  ["PBH", [27.4033, 89.425]],
  ["PBM", [5.451389, -55.191113]],
  ["PDK", [33.8787, -84.3043]],
  ["PDX", [45.588997, -122.5929]],
  ["PEK", [40.078537, 116.5871]],
  ["PER", [-31.9482, 115.97]],
  ["PHL", [39.87641, -75.2433]],
  ["PHX", [33.435036, -112.00016]],
  ["PIT", [40.49585, -80.25657]],
  ["PMO", [38.1822, 13.1033]],
  ["PNH", [11.5468, 104.844]],
  ["PNQ", [18.5802, 73.9182]],
  ["POA", [-29.9939, -51.1711]],
  ["POX", [49.0966, 2.04083]],
  ["PRG", [50.10619, 14.266638]],
  ["PTY", [9.066897, -79.38764]],
  ["PWK", [42.1136, -87.8935]],
  ["QRO", [20.6228, -100.369]],
  ["QZO", [43.4558, 11.847]],
  ["RHV", [37.3343, -121.82]],
  ["RIC", [37.5075, -77.3337]],
  ["RIX", [56.92208, 23.979807]],
  ["RMQ", [24.2647, 120.621]],
  ["ROB", [6.23379, -10.3623]],
  ["RTM", [51.948948, 4.433606]],
  ["RUH", [24.9576, 46.6988]],
  ["RUN", [-20.89, 55.5164]],
  ["SAN", [32.731937, -117.19731]],
  ["SBN", [41.7085, -86.3155]],
  ["SCL", [-33.3906, -70.7858]],
  ["SEA", [47.44384, -122.301735]],
  ["SFO", [37.615215, -122.38988]],
  ["SGN", [10.8189, 106.652]],
  ["SHA", [31.1939, 121.346]],
  ["SHE", [41.6398, 123.483]],
  ["SIN", [1.35019, 103.99]],
  ["SJC", [37.366737, -121.92638]],
  ["SJW", [38.2807, 114.697]],
  ["SKG", [40.5197, 22.9709]],
  ["SLC", [40.785645, -111.980675]],
  ["SMF", [38.692284, -121.5937]],
  ["SOF", [42.688343, 23.41443]],
  ["STL", [38.74228, -90.36587]],
  ["STP", [44.9345016, -93.0599976]],
  ["SYD", [-33.932922, 151.1799]],
  ["SZV", [31.2631, 120.401]],
  ["SZX", [22.6393, 113.811]],
  ["TAO", [36.2661, 120.374]],
  ["TGU", [14.0615, -87.2172]],
  ["TIR", [13.6333, 79.5432]],
  ["TLH", [30.3956, -84.3453]],
  ["TLL", [59.416622, 24.798702]],
  ["TLV", [32.000454, 34.870743]],
  ["TNA", [36.8572, 117.216]],
  ["TNR", [-18.7968998, 47.4788017]],
  ["TPA", [27.97987, -82.535416]],
  ["TPE", [25.07639, 121.22389]],
  ["TSN", [39.122627, 117.3399]],
  ["TUL", [36.2014, -95.8867]],
  ["TXL", [52.553944, 13.291722]],
  ["TYO", [35.5533, 139.781]],
  ["UIO", [-0.145528, -78.49053]],
  ["ULN", [47.8431015, 106.7669983]],
  ["VIE", [48.11972, 16.563583]],
  ["VNO", [54.6341019, 25.2858009]],
  ["VNY", [34.2073, -118.491]],
  ["VTE", [17.988322, 102.563256]],
  ["WAW", [52.170906, 20.97329]],
  ["WLG", [-41.3276, 174.811]],
  ["WUH", [30.7838001, 114.2080002]],
  ["WUX", [31.4944, 120.4290009]],
  ["XIY", [34.4471016, 108.7519989]],
  ["YUL", [45.457714, -73.74991]],
  ["YVR", [49.1947, -123.17919]],
  ["YWG", [49.906, -97.2373]],
  ["YXE", [52.1708, -106.7]],
  ["YYC", [51.131393, -114.01055]],
  ["YYZ", [43.681583, -79.61146]],
  ["ZAG", [45.733242, 16.06152]],
  ["ZDM", [32.2719, 35.0194]],
  ["ZPM", [49.0122, 12.0997]],
  ["ZQZ", [40.7386, 114.93]],
  ["ZRH", [47.450603, 8.561746]]
]);

export default iata;
