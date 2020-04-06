---
title: Backing Up Your Data
id: backups
---
This page will detail how to set up backups for your database if you have chosen MongoDB as your database of choice.

## Setup
It is possible to create backups and restore data using the tools provided with MongoDB. However, this requires knowledge of command line instructions and will likely be difficult for users without this knowledge. You can find more information [here](https://docs.mongodb.com/manual/tutorial/backup-and-restore-tools/) on how to perform backups in this way.

The second way of creating backups is using MongoDB Atlas. However, this service is not available on the free tier (M0) and will require a paid plan, the pricings of which can be found [here](https://www.mongodb.com/cloud/atlas/pricing?tck=docs_atlas).

If you choose an M2 or M5 cluster, Atlas will create daily snapshots of the cluster. They will be taken automatically, starting 24 hours after the creation of the cluster. These snapshots can then be viewed in a table. From there, you can restore or download your existing snapshots. Atlas will retain the last 8 daily snapshots. The full documentation on this can be found [here](https://docs.atlas.mongodb.com/backup/m2-m5-snapshots/#m2-m5-snapshots).

If you require custom policies (e.g. weekly backups), then you will need an M10 or larger cluster. It is then possible to create different backup policies and modify the retention time of these snapshots. Additionally, you can take on-demand snapshots, which occur immediately instead of at regular intervals. Full information can be found [here](https://docs.atlas.mongodb.com/backup/cloud-provider-snapshots/)

Please note that you will incur extra costs for Cloud Provider Snapshots if you are using an M10+ tier.