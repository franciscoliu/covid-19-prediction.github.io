import json
from datetime import datetime
def writeJson():
    state_dict = {}
    with open('dataset.json',encoding='utf-8') as file:
        dataset = json.load(file)
        for i in dataset:
            i["Confirmed Cases"] = int(i["Confirmed Cases"])
            i["Predicted Cases"] = int(i["Predicted Cases"])
        for data in dataset:
            state = data.pop("State")
            state_dict.update(
                {
                    state: state_dict.get(state, [])
                }
            )
            state_dict[state].append(data)
        # for _, entries in state_dict.items():
        #     entries.sort(key=lambda entry: entry['Date'])
    return state_dict

def write_json(data):
    with open('newjson.json', 'w', encoding='utf-8') as outfile:
        json.dump(data, outfile, indent=4)
        

def lambda_handler(event, context):
    write_json(write_json())


if __name__ == '__main__':
    write_json(writeJson())


    