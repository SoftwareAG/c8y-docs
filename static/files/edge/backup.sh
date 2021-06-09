#!/bin/bash

#
# Copyright (c) 2021 Software AG, Darmstadt, Germany and/or Software AG USA Inc., Reston, VA, USA, and/or its subsidiaries and/or its affiliates and/or their licensors.
# Use, reproduction, transfer, publication or disclosure is prohibited except as specifically provided for in your License Agreement with Software AG.
#

# This script is to backup c8y data. Outpus are inside /tmp directory: /tmp/migration_data_TENANT.tgz

# FUNCTIONS

function usage() {
    echo "Usage:"
    echo "    backup_db.sh TENANT OUTPUT_DIRECTORY"
}

# ARGUMENTS

TENANT=$1
OUTPUT=$2

if [ -z "$OUTPUT" ]; then
    OUTPUT="/tmp"
else
    mkdir -p $OUTPUT
fi

if [ -z "$TENANT" ]; then
   echo "No tenant name given!!!"
   usage
   exit 1;
fi

if [ $TENANT = "management" ]; then
    echo "Tenant name cannot be management"
    exit 1;
fi

if [ $TENANT = "docker" ]; then
    echo "Tenant name cannot be docker"
    exit 1;
fi

TENANT_EXISTS=$(mongo --eval "db.adminCommand( { listDatabases: 1 } )" | grep -i $TENANT)

if [ -z $TENANT_EXISTS ]; then
    echo "Tenant does not exist"
    exit 1;
fi

# MAIN
OUTPUT_DATA=$OUTPUT/data
OUTPUT_COLLECTIONS=$OUTPUT_DATA/collections
OUTPUT_CONFIGS=$OUTPUT_DATA/configs
OUTPUT_OPCUA=$OUTPUT_DATA/opcua_data
mkdir -p $OUTPUT_COLLECTIONS
mkdir -p $OUTPUT_CONFIGS
mkdir -p $OUTPUT_OPCUA

mongodump --db=management --out "$OUTPUT_COLLECTIONS"
mongodump --db=$TENANT --out "$OUTPUT_COLLECTIONS"
mongodump --db=docker --out "$OUTPUT_COLLECTIONS"

cp -rp /usr/edge/properties/edge-agent/device-id $OUTPUT_CONFIGS/edge-agent_device-id

cp -rp /etc/opcua $OUTPUT_OPCUA

tar -C $OUTPUT_DATA -cvzf $OUTPUT/migration_data.tgz ./
rm -rf $OUTPUT_DATA