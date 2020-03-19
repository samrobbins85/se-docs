/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  someSidebar: {
    Introduction: ['gettingstarted'],
    Installation: ['Installation/frontEnd'],
    "Developer" : [
      {
        type: 'category',
        label: 'Tray Functions',
        items: ['Developer/addTray','Developer/removeTray','Developer/switchTray','Developer/editTray','Developer/moveTray', 'Developer/nextExpiring', 'Developer/getAllCategory', 'Developer/addTrayMany', 'Developer/editTrayMany', 'Developer/removeTrayMany'],
      },
      {
        type: 'category',
        label: 'Bay Functions',
        items: ['Developer/addBay','Developer/editBay','Developer/getTraysInBay'],
      },
      {
        type: 'category',
        label: 'Zone Functions',
        items: ['Developer/addZone','Developer/editZone','Developer/getBaysInZone','Developer/getZones'],
      },



    ],
  },
};
