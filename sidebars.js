/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const {listPaths} = require('./src/plugins/components');
let ui = listPaths("ui");
module.exports = {
  someSidebar: {
    Introduction: ['Introduction'],
    Installation: listPaths("Installation"),
    "User Interface Walkaround": ui,
    "System Overview": ['gettingstarted','backendoverview','frontendoverview'],
    "Developer" : [
      {
        type: 'category',
        label: 'Tray Functions',
        items: ['Developer/addTray','Developer/removeTray','Developer/switchTray','Developer/editTray','Developer/moveTray', 'Developer/nextExpiring', 'Developer/getAllCategory', 'Developer/addTrayMany', 'Developer/editTrayMany', 'Developer/removeTrayMany'],
      },
      {
        type: 'category',
        label: 'Bay Functions',
        items: ['Developer/addBay','Developer/removeBay','Developer/editBay','Developer/getTraysInBay'],
      },
      {
        type: 'category',
        label: 'Zone Functions',
        items: ['Developer/addZone','Developer/editZone','Developer/getBaysInZone','Developer/getZones','Developer/removeZone'],
      },
    ],  
    Expansion: listPaths("Expansion"),
  },
};
