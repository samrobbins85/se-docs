=========================================================
moveTray
=========================================================
Moves a tray to a specified empty tray position. 

URL
-----

``http request POST /stockTake/moveTray``

Input
-----

.. code:: json

   {
     "posStart": {
       "zone": "Zone ID",
       "bay": "Bay ID",
       "tray": "Tray ID"
     },
     "posTarget": {
       "zone": "Zone ID",
       "bay": "Bay ID",
       "tray": "Tray ID"
     }
   }

Parameters
~~~~~~~~~~

============= =============== ==================
Parameter     Type            Description
============= =============== ==================
``posStart``  ``JSON Object`` Starting (current) position of the tray to move.
``posTarget`` ``JSON Object`` New position of the tray after it moves.
============= =============== ==================

Output
------

``OK`` if successful

``FAIL`` if unsuccessful
