#!/bin/bash
ps -ef | grep json-server | grep -v grep | awk '{print $2}' | xargs kill
ps -ef | grep grid-testing | grep -v grep | awk '{print $2}' | xargs kill