=========================================================
Database
=========================================================


For this application to run it also needs a database set up, for this we
have chosen `MongoDB <https://www.mongodb.com/>`__.

Deployment
----------

Our recommendation for deployment is to use `MongoDB
Atlas <https://www.mongodb.com/cloud/atlas>`__ this has a free tier but
allows for scaling up to a paid plan if your requirements exceed the
limits of the free tier.

To get started sign up `here <https://www.mongodb.com/cloud/atlas>`__
then choose any of the cloud providers, and select a local cluster with
a free tier

Once this is done, a particular structure of the database will need to
be established if you don’t want to change the code

1. Create a database named ``foodbank``
2. Create 4 collections, ``bays``, ``dummy``, ``food`` and ``zones`` in
   that database

If you do want to change the names of the database or collections,
please consult the expansion section of this user guide.
