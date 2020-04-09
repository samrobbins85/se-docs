=========================================================
nextExpiring
=========================================================
Get the next n expiring trays in the warehouse

URL
-----

``http request POST /stockTake/nextExpiring``

Input
-----

.. code:: json

   {
       "n": "Top n trays to fetch",
       "contents": "[Optional] Get trays that match these contents"
   }

Parameters
~~~~~~~~~~

+-----------------+---------------------------+------------------------+
| Parameter       | Type                      | Description            |
+=================+===========================+========================+
| ``n``           | ``integer``               | Number of trays to     |
|                 |                           | fetch                  |
+-----------------+---------------------------+------------------------+
| ``contents``    | ``string``                | [Optional] String      |
|                 |                           | matching the contents  |
|                 |                           | of some tray in the    |
|                 |                           | warehouse              |
+-----------------+---------------------------+------------------------+

Output
------

Array of JSON Tray Objects if successful

``FAIL`` if unsuccessful
