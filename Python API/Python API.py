import pandas as pd

read_file = pd.read_excel (r'C:\Users\Administrator\Desktop\demo\trial_data.xlsx')
read_file.to_csv (r'C:\Users\Administrator\Desktop\demo\New_trial_data.csv', index = None, header=True)