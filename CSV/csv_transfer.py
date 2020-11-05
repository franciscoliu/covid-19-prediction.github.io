import csv 
import json 

def csv_to_json(csvFilePath, jsonFilePath):
    jsondict={}
    jsonArray = []
      
    #read csv file
    with open(csvFilePath, encoding='utf-8') as csvf: 
        #load csv file data using csv library's dictionary reader
        csvReader = csv.DictReader(csvf) 

        #convert each csv row into python dict
        for row in csvReader: 
            #add this python dict to json array
            jsonArray.append(row)
            jsondict = jsonArray
    #convert python jsonArray to JSON String and write to file
    with open(jsonFilePath, 'w', encoding='utf-8') as jsonf: 
        jsonString = json.dumps(jsondict, indent=4)
        jsonf.write(jsonString)
          
csvFilePath = r'csvfile.csv'
jsonFilePath = r'dataset.json'
csv_to_json(csvFilePath, jsonFilePath)