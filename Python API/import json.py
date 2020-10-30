import json
from datetime import datetime
def writeJson():
    state_dict = {}
    with open('F:\Research Project\franciscoliu.github.io\Python API\dataset.json') as file:
        dataset = json.load(file)

        for i in dataset["records"]:
            i["fields"]["Confirmed Cases"] = int(i["fields"]["Confirmed Cases"])
            i["fields"]["Predicted Cases"] = int(i["fields"]["Predicted Cases"])
        for data in dataset["records"]:
            state = data["fields"].pop("State")
            state_dict.update(
                {
                    state: state_dict.get(state, [])
                }
            )
            state_dict[state].append(data['fields'])
        for _, entries in state_dict.items():
            entries.sort(key=lambda entry: entry['Date'])
    return state_dict
  

def write_json(data):
    with open('airtable.json', 'w') as outfile:
        json.dump(data, outfile)

def lambda_handler(event, context):
    write_json(writeJson())


if __name__ == '__main__':
    print('get data from Airtable and write to json file')
    write_json(writeJson())



