=========================================================
removeZone
=========================================================
Removes a zone (and all bays and trays contained within) from the
warehouse.

URL
----

``http request POST /stockTake/removeZone``

Input
-----

.. code:: json

   {
       "zone": "The zone to remove"
   }

Parameters
~~~~~~~~~~

========= ========== =============================================
Parameter Type       Description
========= ========== =============================================
``zone``  ``string`` The identifier of the zone you want to remove
========= ========== =============================================

Output
------

``OK`` if successful

``FAIL`` if unsuccessful
