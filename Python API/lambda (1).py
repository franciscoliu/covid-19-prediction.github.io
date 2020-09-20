'''
    fetch data from AirTable API and write to json

    required:
    - AIRTABLE_APP - AirTable app id (from https://airtable.com/api)
    - AIRTABLE_TABLE - AirTable table id (from https://airtable.com/api)
    - AIRTABLE_TOKEN - API token (from https://airtable.com/api)
'''

from datetime import datetime, timedelta
import json
import os

import requests


AIRTABLE_APP = 'appWfCqUvWiz5Y9rG/Table%201'
AIRTABLE_TOKEN = 'keyNsiP4FW8enxaGs'

API_URL = 'https://api.airtable.com/v0/appWfCqUvWiz5Y9rG/Table%201'
AUTH = {'Authorization': 'Bearer %s' % AIRTABLE_TOKEN}

def load_data():
    '''
        load data from AirTable, fetching additional pages if needed
    '''
    rval = {'updated': datetime.now().isoformat()}
    params = {}
    req = requests.get(API_URL, headers=AUTH, params=params)
    rval = req.json()
    data = req.json()
    while data.get('offset'):
        params['offset'] = data['offset']
        req = requests.get(API_URL, headers=AUTH, params=params)
        print('offset=%s url=%s request=%s' % (params['offset'], API_URL, req))
        data = req.json()
        rval['records'] += data.get('records', [])
    print('loaded %s records' % (len(rval.get('records', []))))
    return rval


def write_json(data):
    records = data['records']
    with open('dataset.json', 'w') as outfile:
        json.dump(data, outfile)



def lambda_handler(event, context):
    write_json(load_data())


if __name__ == '__main__':
    print('get data from Airtable and write to json file')
    write_json(load_data())

