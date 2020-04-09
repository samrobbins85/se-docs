=========================================================
removeTrayMany
=========================================================
Removes many trays in a single request.

URL
-----

``http request POST /stockTake/removeTrayMany``

Input
-----

::

       Array of position objects as described in removeTray

Output
------

``SUCCESS`` if all trays removed successfully

``FAIL`` if unsuccessful
