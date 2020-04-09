=========================================================
Frontend Overview
=========================================================

Intro
-----

The front end is built with `ReactJS <https://reactjs.org/>`__ an object
orientated system aimed at building great user interfaces. 

* It has a unique structure where in each item seen on the ui is effectively a
  react class component.
* These components contain subcomponents. some of these have been built buy us, others have been imported from a boot-strap component library.
* We use two of these, `Grommet <https://v2.grommet.io/>`__ and `React bootstrap <https://react-bootstrap.github.io/>`__,
  these are primarily used for buttons and styling that have the benefit of improving user
  experience and decreasing development time.

The integral components that have been built by us are:

Designer
--------

The component is a tool to build the warehouse, add remove, resize zones
and their respective bays, this is a very simple component visibly,
however functionally it is integral. This component uses Api Endpoints:

* addTray
* removeTray
* addTrayMany
* removeTrayMany
* getZones
* addZone
* editZone
* removeZone
* addBay
* editBay
* removeBay
* getTraysInBay
* getBaysInZone

Reports
-------

This component takes and manipulates the data received from the api, the
component interfaces with the server. This component uses Api Endpoints:

* getNextNExpiring
* getAllCategory
* getZones
* getTraysInBay
* getReports
* publishReport

StockTake
---------

This component acts as a data structure, fetching and syncing with the
server, the sub components below display the data stored in StockTake.
The component itself not at all complex, however its interactions with
the sub components and them with each other is quite a lot more complex
than the sum of the api calls. This component uses Api Endpoints:

* editTrayMany
* editBay
* getZones
* getTraysInBay
* getBaysInZone

Bayview
~~~~~~~

This component displays a collection of tray items; which represent
individul trays, it stores a list of the selected trays, and allows the
manipulation of tray items, by means of category buttons and several
forms.

CategoryButtons
~~~~~~~~~~~~~~~

this component displays and handles the change of category.

trayItem
~~~~~~~~

a graphical representation of an individual tray and the event handler
for when an individual tray is selected.
