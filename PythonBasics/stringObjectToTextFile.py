import os

#Python Script Text Folder: C:\Users\reece\Desktop\PythonScriptText

def stringToFile(stringObject, fileName):
    filepath = r'C:\Users\reece\Desktop\PythonScriptText'
    fileName = rf'{filepath}\{fileName}'
    if not os.path.isfile(fileName):
        with open(fileName, 'w') as f:
            f.write(stringObject)
        print('File did not exist. Your object was added to a new file.')
    else:
        with open(fileName, 'a') as f:
            f.write(f'\n\n{stringObject}')
        print('File aleady existed, your object was appended to existing file.')