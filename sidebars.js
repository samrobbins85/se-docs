/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  someSidebar: {
    Introduction: ['gettingstarted'],
    "Developer" : [
      {
        type: 'category',
        label: 'Tray Functions',
        items: ['addTray','removeTray','switchTray','editTray','moveTray', 'nextExpiring', 'getAllCategory', 'addTrayMany', 'editTrayMany', 'removeTrayMany'],
      },
      {
        type: 'category',
        label: 'Bay Functions',
        items: ['addBay','editBay','getTraysInBay'],
      },
      {
        type: 'category',
        label: 'Zone Functions',
        items: ['addZone','editZone','getBaysInZone','getZones'],
      },



    ],
  },
};
