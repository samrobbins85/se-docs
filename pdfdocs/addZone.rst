AddZone
======

Adds a new zone to the warehouse

URL
-----
``http request POST /stockTake/addZone``

Input
-----

.. code:: json

   {
     "zone": "Zone name",
     "height": 1,
     "width": 1
   }

Parameters
~~~~~~~~~~

========== =========== ==================================
Parameter  Type        Description
========== =========== ==================================
``zone``   ``string``  The zone you want to add
``height`` ``integer`` The height you want the zone to be
``width``  ``integer`` The width you want the zone to be
========== =========== ==================================

Output
------

``OK`` if successful

``FAIL`` if unsuccessful
